import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/db";
import User from "@/models/User";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours - refresh session every 24 hours
    },
    cookies: {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === "google") {
                try {
                    await connectDB();

                    const existingUser = await User.findOne({ email: user.email });

                    if (existingUser) {
                        // Update existing user with Google info if they don't have it
                        if (!existingUser.googleId && account.providerAccountId) {
                            existingUser.googleId = account.providerAccountId;
                            existingUser.provider = "google";
                            existingUser.image = user.image;
                            existingUser.emailVerified = true;
                            existingUser.accountStatus = "ACTIVE";
                            await existingUser.save();
                        }
                        return true;
                    }

                    // Create new user with default USER role
                    const newUser = await User.create({
                        name: user.name,
                        email: user.email,
                        googleId: account.providerAccountId,
                        provider: "google",
                        image: user.image,
                        emailVerified: true,
                        accountStatus: "ACTIVE",
                        role: "USER", // All new signups get USER role by default
                        isPremium: false,
                    });

                    console.log(`New user created: ${newUser.email} with role: ${newUser.role}`);

                    return true;
                } catch (error) {
                    console.error("Error in signIn callback:", error);
                    return false;
                }
            }

            return true;
        },
        async jwt({ token, user, account }) {
            // On initial sign in
            if (user) {
                await connectDB();
                const dbUser = await User.findOne({ email: user.email });

                if (dbUser) {
                    token.id = dbUser._id.toString();
                    token.role = dbUser.role || "USER"; // Ensure role is always set
                    token.isPremium = dbUser.isPremium || false;
                    token.provider = dbUser.provider || "google";
                    token.iat = Math.floor(Date.now() / 1000); // Issued at timestamp
                }
            }

            // Ensure role is always present (fallback to USER)
            if (!token.role) {
                token.role = "USER";
            }

            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = (token.role as string) || "USER"; // Ensure role is always set
                session.user.isPremium = (token.isPremium as boolean) || false;
                session.user.provider = (token.provider as string) || "google";
            }

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};
