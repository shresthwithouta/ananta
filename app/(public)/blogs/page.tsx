"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type BlogPost = {
    _id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    coverImage?: string;
    readTime: string;
};

export default function BlogsPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPosts([
                {
                    _id: "1",
                    title: "The Wisdom of Ancient Scriptures",
                    excerpt: "Exploring timeless teachings that guide us through modern life...",
                    author: "Ananta Team",
                    date: "2026-01-28",
                    category: "Wisdom",
                    readTime: "5 min read"
                },
                {
                    _id: "2",
                    title: "Understanding Sacred Music",
                    excerpt: "How devotional music connects us to the divine...",
                    author: "Ananta Team",
                    date: "2026-01-25",
                    category: "Music",
                    readTime: "7 min read"
                },
                {
                    _id: "3",
                    title: "Temple Architecture Through Ages",
                    excerpt: "A journey through the spiritual significance of temple design...",
                    author: "Ananta Team",
                    date: "2026-01-20",
                    category: "Culture",
                    readTime: "6 min read"
                }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050b17] via-[#0a1628] to-[#050b17] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#e6c36a]/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="ananta-font text-[#e6c36a] drop-shadow-[0_0_20px_rgba(230,195,106,0.3)]">
                            Blogs
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Stories, wisdom, and reflections on culture and spirituality
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-80 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <div className="h-48 bg-gradient-to-br from-[#e6c36a]/20 to-purple-500/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-[#e6c36a]/90 text-[#050b17] text-xs font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e6c36a] transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-white/60 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-white/50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e6c36a] to-purple-500" />
                                            <span>{post.author}</span>
                                        </div>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <div className="mt-3 text-xs text-white/40">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

                {!loading && posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-white/50 text-lg">No blog posts available yet.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
