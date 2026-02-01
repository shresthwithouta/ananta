export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-neutral-950 text-white">
      <aside className="w-64 border-r border-white/10 p-4">
        <nav className="space-y-3">
          <a href="/admin">Dashboard</a>
          <a href="/admin/blogs">Blogs</a>
          <a href="/admin/scriptures">Scriptures</a>
          <a href="/admin/temples">Temples</a>
          <a href="/admin/music">Music</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
