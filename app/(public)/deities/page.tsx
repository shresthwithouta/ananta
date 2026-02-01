"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Deity = {
    _id: string;
    name: string;
    title: string;
    description: string;
    symbolism: string;
    coverImage?: string;
};

export default function DeitiesPage() {
    const [deities, setDeities] = useState<Deity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDeities([
                {
                    _id: "1",
                    name: "Krishna",
                    title: "The Supreme Personality",
                    description: "The eighth avatar of Vishnu, known for divine love and wisdom",
                    symbolism: "Love, Compassion, Divine Play"
                },
                {
                    _id: "2",
                    name: "Shiva",
                    title: "The Transformer",
                    description: "The supreme being who creates, protects and transforms the universe",
                    symbolism: "Transformation, Meditation, Power"
                },
                {
                    _id: "3",
                    name: "Ganesha",
                    title: "Remover of Obstacles",
                    description: "The elephant-headed deity of wisdom and new beginnings",
                    symbolism: "Wisdom, Success, Fortune"
                },
                {
                    _id: "4",
                    name: "Durga",
                    title: "The Invincible",
                    description: "The warrior goddess who combats evil and demonic forces",
                    symbolism: "Strength, Protection, Victory"
                },
                {
                    _id: "5",
                    name: "Saraswati",
                    title: "Goddess of Knowledge",
                    description: "The divine embodiment of knowledge, music, and arts",
                    symbolism: "Knowledge, Arts, Wisdom"
                },
                {
                    _id: "6",
                    name: "Hanuman",
                    title: "The Devoted Servant",
                    description: "The monkey deity symbolizing courage and devotion",
                    symbolism: "Devotion, Courage, Service"
                }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050b17] via-[#0a1628] to-[#050b17] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#e6c36a]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
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
                            Deities
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Explore the divine forms and their eternal wisdom
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-72 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {deities.map((deity, index) => (
                            <motion.div
                                key={deity._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e6c36a]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative h-40 bg-gradient-to-br from-[#e6c36a]/20 to-purple-500/20 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e6c36a] to-purple-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl text-white font-bold">
                                            {deity.name.charAt(0)}
                                        </span>
                                    </div>
                                </div>

                                <div className="relative p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#e6c36a] transition-colors duration-300">
                                        {deity.name}
                                    </h3>
                                    <p className="text-[#e6c36a]/80 text-sm font-medium mb-3">
                                        {deity.title}
                                    </p>
                                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                        {deity.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {deity.symbolism.split(', ').map((symbol, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70"
                                            >
                                                {symbol}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {!loading && deities.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-white/50 text-lg">No deities information available yet.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
