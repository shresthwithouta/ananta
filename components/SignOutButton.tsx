"use client";

import { signOut } from "next-auth/react";

interface SignOutButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export default function SignOutButton({
    className = "",
    children = "Sign Out",
}: SignOutButtonProps) {
    const handleSignOut = () => {
        signOut({ callbackUrl: "/login" });
    };

    return (
        <button
            onClick={handleSignOut}
            className={
                className ||
                "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            }
            type="button"
        >
            {children}
        </button>
    );
}
