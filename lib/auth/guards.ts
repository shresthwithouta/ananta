import { getServerSession } from "next-auth";
import { authOptions } from "./config";
import { redirect } from "next/navigation";

/**
 * Require authentication - redirects to login if not authenticated
 * Use in Server Components
 */
export async function requireAuth() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect("/login");
    }

    return session;
}

/**
 * Require specific role - redirects to login if not authenticated or unauthorized
 * Use in Server Components
 */
export async function requireRole(allowedRoles: string[]) {
    const session = await requireAuth();

    if (!allowedRoles.includes(session.user.role)) {
        redirect("/"); // Redirect to home if unauthorized
    }

    return session;
}

/**
 * Check if user has admin role
 */
export async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "ADMIN";
}

/**
 * Check if user has VIP role
 */
export async function isVIP() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "VIP" || session?.user?.role === "ADMIN";
}

/**
 * Check if user is premium
 */
export async function isPremium() {
    const session = await getServerSession(authOptions);
    return session?.user?.isPremium === true;
}
