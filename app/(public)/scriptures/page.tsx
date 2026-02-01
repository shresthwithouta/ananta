"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type ScriptureItem = {
  _id: string;
  title: string;
  category: string;
  language: string;
  coverImage?: string;
  isPremium: boolean;
  description: string;
  chapters?: number;
};

export default function ScripturesPage() {
  const [items, setItems] = useState<ScriptureItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setItems([
        {
          _id: "1",
          title: "Bhagavad Gita",
          category: "Vedic Scripture",
          language: "Sanskrit",
          description: "The eternal dialogue between Krishna and Arjuna on dharma and devotion",
          chapters: 18,
          isPremium: false
        },
        {
          _id: "2",
          title: "Ramayana",
          category: "Epic",
          language: "Sanskrit",
          description: "The timeless story of Lord Rama's journey and righteousness",
          chapters: 7,
          isPremium: false
        },
        {
          _id: "3",
          title: "Upanishads",
          category: "Vedic Scripture",
          language: "Sanskrit",
          description: "Ancient philosophical texts exploring the nature of reality",
          chapters: 108,
          isPremium: true
        },
        {
          _id: "4",
          title: "Mahabharata",
          category: "Epic",
          language: "Sanskrit",
          description: "The great epic of dharma, war, and cosmic wisdom",
          chapters: 18,
          isPremium: false
        },
        {
          _id: "5",
          title: "Yoga Sutras",
          category: "Philosophy",
          language: "Sanskrit",
          description: "Patanjali's foundational text on yoga philosophy",
          chapters: 4,
          isPremium: true
        },
        {
          _id: "6",
          title: "Vedas",
          category: "Vedic Scripture",
          language: "Sanskrit",
          description: "The most ancient sacred texts of Hindu philosophy",
          chapters: 4,
          isPremium: true
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b17] via-[#0a1628] to-[#050b17] relative overflow-hidden">
   
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-[#e6c36a]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
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
              Sacred Scriptures
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore timeless wisdom from ancient texts that illuminate the path
          </p>
        </motion.div>

   
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-80 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((scripture, index) => (
              <motion.div
                key={scripture._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#e6c36a]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-40 bg-gradient-to-br from-[#e6c36a]/20 to-purple-500/20 flex items-center justify-center p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e6c36a] to-purple-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  {scripture.isPremium && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#e6c36a]/90 text-[#050b17] text-xs font-semibold rounded-full">
                        Premium
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#e6c36a] transition-colors duration-300">
                    {scripture.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#e6c36a]/80 text-sm">
                      {scripture.category}
                    </span>
                    <span className="text-white/40 text-sm">•</span>
                    <span className="text-white/60 text-sm">
                      {scripture.language}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {scripture.description}
                  </p>

                  {scripture.chapters && (
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{scripture.chapters} chapters</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && items.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/50 text-lg">No scriptures available yet.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
