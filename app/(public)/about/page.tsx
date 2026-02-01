"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Sacred Scriptures",
            description: "Explore ancient wisdom from timeless texts"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
            ),
            title: "Divine Music",
            description: "Connect through sacred mantras and bhajans"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Sacred Temples",
            description: "Journey through architectural marvels"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            title: "Divine Forms",
            description: "Learn about deities and their significance"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050b17] via-[#0a1628] to-[#050b17] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#e6c36a]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        <span className="ananta-font text-[#e6c36a] drop-shadow-[0_0_25px_rgba(230,195,106,0.4)]">
                            Ananta
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-white/80 mb-4 font-light">
                        Where Ancient Wisdom Meets Modern Discovery
                    </p>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
                        A digital sanctuary for exploring the depths of culture, spirituality, and timeless wisdom
                        — designed for seekers who crave authenticity in a noisy world.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Our Mission
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                        Ananta is more than a platform — it's a bridge between generations. We bring sacred texts,
                        devotional music, temple heritage, and spiritual knowledge into the digital age, making
                        ancient wisdom accessible, beautiful, and relevant for today's seekers.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e6c36a] to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#e6c36a] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-3">🙏</div>
                            <h3 className="text-xl font-semibold text-[#e6c36a] mb-2">Authenticity</h3>
                            <p className="text-white/60">Preserving the true essence of sacred traditions</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">✨</div>
                            <h3 className="text-xl font-semibold text-[#e6c36a] mb-2">Accessibility</h3>
                            <p className="text-white/60">Making ancient wisdom available to all seekers</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🌟</div>
                            <h3 className="text-xl font-semibold text-[#e6c36a] mb-2">Excellence</h3>
                            <p className="text-white/60">Delivering beauty and depth in every experience</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-16"
                >
                    <p className="text-white/70 text-lg mb-6">
                        Ready to begin your journey?
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-[#e6c36a] to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Explore Ananta
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
