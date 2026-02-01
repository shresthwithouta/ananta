import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET() {
  await connectDB();

  const blogs = await Blog.find({ status: "PUBLISHED" })
    .populate("author", "name")
    .sort({ createdAt: -1 })
    .lean();

  return Response.json(blogs);
}
