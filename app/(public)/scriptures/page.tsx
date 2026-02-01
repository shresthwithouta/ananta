"use client";

import { useEffect, useState } from "react";

type ScriptureItem = {
  _id: string;
  title: string;
  category: string;
  language: string;
  coverImage?: string;
  isPremium: boolean;
};

export default function ScripturesPage() {
  const [items, setItems] = useState<ScriptureItem[]>([]);

 useEffect(() => {
  fetch("/api/scriptures/public")
    .then(res => {
      if (!res.ok) {
        return [];
      }
      return res.json();
    })
    .then(setItems)
    .catch(() => setItems([]));
}, []);


  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((s) => (
        <div
          key={s._id}
          className="border border-white/10 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="text-sm text-white/60">
            {s.category} • {s.language}
          </p>

          {s.isPremium && (
            <span className="mt-2 inline-block text-xs text-yellow-400">
              Premium
            </span>
          )}
        </div>
      ))}
    </main>
  );
}
