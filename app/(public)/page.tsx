import Header from "@/components/Header";
import Hero from "@/components/hero/HeroPage";
import ScripturesHero from "@/components/secctions/scriptures";

export default function HomePage() {
  return (
    <main className="flex-col">
      <Header />
      <Hero />
      <ScripturesHero />
    </main>
  );
}
