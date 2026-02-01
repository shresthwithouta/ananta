import { getCurrentUser } from "@/lib/auth";
import {
  createBlog,
  submitBlog,
  approveBlog,
  rejectBlog,
} from "@/lib/blog.service";

export async function POST(req: Request) {
  const body = await req.json();
  const { action, title, content, blogId, reason } = body;

  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  if (action === "CREATE") {
    if (user.role === "USER") {
      return Response.json({ error: "FORBIDDEN" }, { status: 403 });
    }

    const blog = await createBlog({
      title,
      content,
      authorId: user.id,
    });

    return Response.json(blog, { status: 201 });
  }

  if (action === "SUBMIT") {
    return Response.json(await submitBlog(blogId));
  }

  if (action === "APPROVE") {
    if (user.role !== "ADMIN") {
      return Response.json({ error: "FORBIDDEN" }, { status: 403 });
    }

    return Response.json(await approveBlog(blogId));
  }

  if (action === "REJECT") {
    if (user.role !== "ADMIN") {
      return Response.json({ error: "FORBIDDEN" }, { status: 403 });
    }

    return Response.json(await rejectBlog(blogId, reason));
  }

  return Response.json({ error: "INVALID_ACTION" }, { status: 400 });
}
