import { connectDB } from "@/lib/db";
import Scripture from "@/models/Scripture";

export async function GET() {
  try {
    await connectDB();

    const scriptures = await Scripture.find({})
      .select("title category language coverImage isPremium")
      .lean();

    return Response.json(scriptures);
  } catch (error) {
    console.error("SCRIPTURE_PUBLIC_ERROR:", error);
    return Response.json([], { status: 200 });
  }
}