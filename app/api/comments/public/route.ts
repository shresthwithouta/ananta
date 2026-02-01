import { connectDB } from "@/lib/db";
import Comment from "@/models/Comment";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get("blogId");

  if (!blogId) {
    return Response.json({ error: "BLOG_ID_REQUIRED" }, { status: 400 });
  }

  await connectDB();

  const comments = await Comment.find({ blog: blogId })
    .populate("author", "name")
    .sort({ createdAt: -1 })
    .lean();

  return Response.json(comments);
}
