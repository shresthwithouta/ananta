import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/helpers";

export async function POST(req: Request) {
    const user = await getCurrentUser();

    if (!user || user.role !== "ADMIN") {
        return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 403 });
    }

    return NextResponse.json({ message: "Blog approval endpoint - to be implemented" });
}
