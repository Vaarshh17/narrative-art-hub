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
      {/* Blurred background of current slide */}
      <div className="absolute inset-0">
        <img
          src={hero.portraits[index]}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-110 opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 hero-fade" />
      </div>

      {/* Carousel — portrait 3:4 */}
      <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10">
        <div className="relative w-[360px] aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
          {hero.portraits.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Varsha ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
          <button
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-2">
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

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-end pb-24 px-6 md:px-12 max-w-3xl animate-fade-up">
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
            href="#faq"
            className="bg-white/15 backdrop-blur text-white px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/25 transition"
          >
            <Info className="w-5 h-5" />
            More Info
          </a>
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden relative z-10 px-6 -mt-10 pb-10">
        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
          {hero.portraits.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
