"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Temple = {
    _id: string;
    name: string;
    location: string;
    deity: string;
    description: string;
    significance: string;
    architecture: string;
    visitingHours?: string;
};

export default function TemplesPage() {
    const [temples, setTemples] = useState<Temple[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call - replace with actual endpoint
        setTimeout(() => {
            setTemples([
                {
                    _id: "1",
                    name: "Jagannath Temple",
                    location: "Puri, Odisha",
                    deity: "Lord Jagannath",
                    description: "One of the Char Dham pilgrimage sites, housing Lord Jagannath",
                    significance: "Char Dham",
                    architecture: "Kalinga Architecture"
                },
                {
                    _id: "2",
                    name: "Meenakshi Temple",
                    location: "Madurai, Tamil Nadu",
                    deity: "Goddess Meenakshi",
                    description: "Historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareshwara",
                    significance: "Shakti Peetha",
                    architecture: "Dravidian Architecture"
                },
                {
                    _id: "3",
                    name: "Golden Temple",
                    location: "Amritsar, Punjab",
                    deity: "Guru Granth Sahib",
                    description: "The holiest Gurdwara and the most sacred pilgrimage site of Sikhism",
                    significance: "Harmandir Sahib",
                    architecture: "Sikh Architecture"
                },
                {
                    _id: "4",
                    name: "Kedarnath Temple",
                    location: "Kedarnath, Uttarakhand",
                    deity: "Lord Shiva",
                    description: "Ancient temple dedicated to Lord Shiva, part of Char Dham",
                    significance: "Char Dham, Panch Kedar",
                    architecture: "Stone Architecture"
                }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050b17] via-[#0a1628] to-[#050b17] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 right-1/4 w-full h-full bg-gradient-to-br from-[#e6c36a]/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
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
                            Sacred Temples
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Journey through the architectural marvels of spiritual India
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-80 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {temples.map((temple, index) => (
                            <motion.div
                                key={temple._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <div className="h-56 bg-gradient-to-br from-[#e6c36a]/30 to-purple-500/30 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e6c36a] to-purple-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-[#e6c36a]/90 text-[#050b17] text-xs font-semibold rounded-full">
                                            {temple.significance}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#e6c36a] transition-colors duration-300">
                                        {temple.name}
                                    </h3>

                                    <div className="flex items-center gap-2 mb-3 text-white/60">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm">{temple.location}</span>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-[#e6c36a]/90 text-sm font-medium">
                                            Deity: {temple.deity}
                                        </span>
                                    </div>

                                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                        {temple.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <span className="text-xs text-white/50">
                                            {temple.architecture}
                                        </span>
                                        <button className="text-[#e6c36a] text-sm font-medium hover:underline">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {!loading && temples.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-white/50 text-lg">No temple information available yet.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
