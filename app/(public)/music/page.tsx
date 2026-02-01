"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type MusicTrack = {
    _id: string;
    title: string;
    artist: string;
    album: string;
    duration: string;
    category: string;
    isPremium: boolean;
};

export default function MusicPage() {
    const [tracks, setTracks] = useState<MusicTrack[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Bhajans", "Mantras", "Classical", "Devotional"];

    useEffect(() => {

        setTimeout(() => {
            setTracks([
                {
                    _id: "1",
                    title: "Om Namah Shivaya",
                    artist: "Traditional Chant",
                    album: "Sacred Mantras",
                    duration: "5:23",
                    category: "Mantras",
                    isPremium: false
                },
                {
                    _id: "2",
                    title: "Hare Krishna Mahamantra",
                    artist: "Devotional Ensemble",
                    album: "Divine Chants",
                    duration: "8:15",
                    category: "Mantras",
                    isPremium: false
                },
                {
                    _id: "3",
                    title: "Raghupati Raghav",
                    artist: "Ananta Collective",
                    album: "Bhakti Songs",
                    duration: "4:52",
                    category: "Bhajans",
                    isPremium: true
                },
                {
                    _id: "4",
                    title: "Gayatri Mantra",
                    artist: "Sacred Voices",
                    album: "Vedic Chants",
                    duration: "6:30",
                    category: "Mantras",
                    isPremium: false
                },
                {
                    _id: "5",
                    title: "Vishnu Sahasranamam",
                    artist: "Classical Rendition",
                    album: "Stotra Collection",
                    duration: "12:45",
                    category: "Classical",
                    isPremium: true
                },
                {
                    _id: "6",
                    title: "Hanuman Chalisa",
                    artist: "Devotional Singers",
                    album: "Devotional Classics",
                    duration: "7:20",
                    category: "Devotional",
                    isPremium: false
                }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    const filteredTracks = selectedCategory === "All"
        ? tracks
        : tracks.filter(t => t.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050b17] via-[#0a1628] to-[#050b17] relative overflow-hidden">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tl from-[#e6c36a]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="ananta-font text-[#e6c36a] drop-shadow-[0_0_20px_rgba(230,195,106,0.3)]">
                            Sacred Music
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Elevate your spirit with divine melodies and sacred chants
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-[#e6c36a] text-[#050b17] shadow-lg shadow-[#e6c36a]/30"
                                : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {loading ? (
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 h-20 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                    >
                        {filteredTracks.map((track, index) => (
                            <motion.div
                                key={track._id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className="flex items-center p-4 gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e6c36a] to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg
                                                className="w-5 h-5 text-white ml-0.5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-white font-semibold truncate group-hover:text-[#e6c36a] transition-colors duration-300">
                                                {track.title}
                                            </h3>
                                            {track.isPremium && (
                                                <span className="px-2 py-0.5 bg-[#e6c36a]/20 border border-[#e6c36a]/50 text-[#e6c36a] text-xs rounded-full">
                                                    Premium
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white/50 text-sm">
                                            {track.artist} • {track.album}
                                        </p>
                                    </div>

                                    <div className="hidden md:flex items-center gap-6">
                                        <span className="text-white/40 text-sm">
                                            {track.category}
                                        </span>
                                        <span className="text-white/60 text-sm font-mono">
                                            {track.duration}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {!loading && filteredTracks.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-white/50 text-lg">No tracks found in this category.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
