import Blog from "@/models/Blog";

export async function createBlog({
  title,
  content,
  authorId,
}: {
  title: string;
  content: string;
  authorId: string;
}) {
  return Blog.create({
    title,
    content,
    author: authorId,
    status: "DRAFT",
  });
}

export async function submitBlog(blogId: string) {
  return Blog.findByIdAndUpdate(
    blogId,
    { status: "PENDING" },
    { new: true }
  );
}

export async function approveBlog(blogId: string) {
  return Blog.findByIdAndUpdate(
    blogId,
    { status: "PUBLISHED", rejectionReason: null },
    { new: true }
  );
}

export async function rejectBlog(blogId: string, reason: string) {
  return Blog.findByIdAndUpdate(
    blogId,
    {
      status: "REJECTED",
      rejectionReason: reason,
    },
    { new: true }
  );
}
