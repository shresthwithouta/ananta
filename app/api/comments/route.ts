import { connectDB } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import Comment from "@/models/Comment";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "LOGIN_REQUIRED" }, { status: 401 });
  }

  const { blogId, content } = await req.json();

  if (!content || !blogId) {
    return Response.json({ error: "INVALID_DATA" }, { status: 400 });
  }

  await connectDB();

  const comment = await Comment.create({
    blog: blogId,
    content,
    author: user.id,
  });

  return Response.json(comment, { status: 201 });
}