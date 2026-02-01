import { connectDB } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import Like from "@/models/Like";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "LOGIN_REQUIRED" }, { status: 401 });
  }

  const { blogId } = await req.json();

  await connectDB();

  const like = await Like.findOne({ user: user.id, blog: blogId });

  if (like) {
    await like.deleteOne();
    return Response.json({ liked: false });
  }

  await Like.create({ user: user.id, blog: blogId });
  return Response.json({ liked: true });
}
