// Legacy auth utilities - kept for backward compatibility
// New auth code uses lib/auth/helpers.ts
import { getCurrentUser as getUser } from "@/lib/auth/helpers";

export async function getCurrentUser(userId?: string) {
  if (userId) {
    // Legacy support for getUserById
    const { connectDB } = await import("@/lib/db");
    const User = (await import("@/models/User")).default;
    await connectDB();
    return User.findById(userId);
  }

  // Use new NextAuth session-based auth
  return getUser();
}
