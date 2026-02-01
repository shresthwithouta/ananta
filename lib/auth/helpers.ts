import { getServerSession } from "next-auth";
import { authOptions } from "./config";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        await connectDB();
        const user = await User.findOne({ email: session.user.email });

        return user;
    } catch (error) {
        console.error("Error getting current user:", error);
        return null;
    }
}
