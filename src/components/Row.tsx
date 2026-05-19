import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Row as RowType } from "@/data/portfolio";

export function Row({ row }: { row: RowType }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: "smooth" });
  };
  const portrait = row.layout === "portrait";

  return (
    <section id={row.key} className="pl-6 md:pl-12 group/row relative">
      <div className="flex items-end justify-between pr-6 md:pr-12 mb-3">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-fg">{row.title}</h2>
        <span className="text-xs text-muted uppercase tracking-widest">{row.items.length} items</span>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-16 items-center justify-center bg-black/70 hover:bg-black/90 rounded-r opacity-0 group-hover/row:opacity-100 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={ref}
          className="flex gap-3 overflow-x-auto hide-scrollbar pr-6 md:pr-12 py-4 scroll-smooth"
        >
          {row.items.map((it) => (
            <Link
              key={it.id}
              to="/project/$id"
              params={{ id: it.id }}
              className={`group relative shrink-0 rounded-md overflow-hidden card-hover bg-surface-2 ${
                portrait
                  ? "w-[200px] md:w-[240px] aspect-[2/3]"
                  : "w-[300px] md:w-[380px] aspect-video"
              }`}
            >
              <img
                src={it.image}
                alt={it.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {it.year && (
                  <p className="text-[10px] tracking-widest uppercase text-brand-soft font-semibold mb-1">
                    {it.year}
                  </p>
                )}
                <h3 className="font-display font-semibold text-lg leading-tight">{it.title}</h3>
                {it.subtitle && <p className="text-xs text-muted mt-1 line-clamp-1">{it.subtitle}</p>}
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-16 items-center justify-center bg-black/70 hover:bg-black/90 rounded-l opacity-0 group-hover/row:opacity-100 transition"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
