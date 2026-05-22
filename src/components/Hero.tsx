import { hero } from "@/data/portfolio";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [index, setIndex] = useState(0);
  const total = hero.portraits.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <header className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Full-bleed background carousel */}
      <div className="absolute inset-0">
        {hero.portraits.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
        {/* Desktop: horizontal gradient — dark left for text, lighter right for image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: "linear-gradient(to right, rgba(20,20,20,0.92) 40%, rgba(20,20,20,0.15) 100%)" }}
        />
        {/* Mobile: vertical gradient — dark at top, lighter at bottom */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "linear-gradient(to bottom, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.35) 100%)" }}
        />
      </div>

      {/* Prev/Next arrows — desktop only */}
      <button
        onClick={() => go(-1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 items-center justify-center transition"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={() => go(1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 items-center justify-center transition"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Content — left-aligned on desktop, centered on mobile */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-end pb-32 px-6 md:px-16 max-w-3xl animate-fade-up md:items-start items-center text-center md:text-left">
        <p className="text-brand-soft text-xs tracking-[0.25em] uppercase font-semibold mb-3">
          AI Engineer · Hackathon Champion
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] uppercase">
          {hero.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-fg/90 font-display">{hero.tagline}</p>
        <p className="mt-3 max-w-xl text-base text-muted leading-relaxed">{hero.blurb}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-white text-black px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/85 transition"
          >
            <Play className="w-5 h-5 fill-black" />
            View Projects
          </a>
          <a
            href="#faq"
            className="bg-white/15 backdrop-blur text-white px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/25 transition"
          >
            <Info className="w-5 h-5" />
            More Info
          </a>
        </div>
        {/* Dot indicators */}
        <div className="flex gap-2 mt-5">
          {hero.portraits.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-3 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
