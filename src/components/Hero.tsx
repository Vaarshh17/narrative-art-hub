import { hero } from "@/data/portfolio";
import { Play, Info } from "lucide-react";

export function Hero() {
  return (
    <header className="relative w-full h-[90vh] min-h-[640px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={hero.background} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-fade" />
      </div>

      {/* Portrait — replace src/assets/portfolio/hero-portrait.jpg */}
      <div className="hidden md:block absolute right-12 bottom-24 w-[380px] aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl animate-fade-up">
        <img src={hero.portrait} alt="Varsha portrait" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-24 px-6 md:px-12 max-w-3xl animate-fade-up">
        <p className="text-brand-soft text-xs tracking-[0.25em] uppercase font-semibold mb-3">
          AI Engineer · Hackathon Champion
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] uppercase">
          {hero.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-fg/90 font-display">{hero.tagline}</p>
        <p className="mt-3 max-w-xl text-base text-muted leading-relaxed">{hero.blurb}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="bg-white text-black px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/85 transition"
          >
            <Play className="w-5 h-5 fill-black" />
            View Projects
          </a>
          <a
            href="#about"
            className="bg-white/15 backdrop-blur text-white px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/25 transition"
          >
            <Info className="w-5 h-5" />
            More Info
          </a>
        </div>
      </div>
    </header>
  );
}
