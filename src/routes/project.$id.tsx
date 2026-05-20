import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { findItem, rows } from "@/data/portfolio";

export const Route = createFileRoute("/project/$id")({
  loader: ({ params }) => {
    const item = findItem(params.id);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.item.title} — Varsha Selvakumar` },
          { name: "description", content: loaderData.item.overview },
          { property: "og:title", content: loaderData.item.title },
          { property: "og:description", content: loaderData.item.overview },
          { property: "og:image", content: loaderData.item.image },
        ]
      : [{ title: "Project — Varsha Selvakumar" }],
  }),
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProjectPage,
});

function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-fg flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl">Not found</h1>
        <Link to="/" className="text-brand-soft mt-4 inline-block">Back home</Link>
      </div>
    </div>
  );
}

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <p className="text-muted mb-4">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="bg-white text-black px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { item } = Route.useLoaderData();
  const related = rows
    .flatMap((r) => r.items)
    .filter((i) => i.id !== item.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />

      {/* Backdrop */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 md:px-12 max-w-3xl animate-fade-up">
          <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-fg mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          {item.year && (
            <p className="text-brand-soft uppercase tracking-[0.25em] text-xs font-semibold mb-2">
              {item.year}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">{item.title}</h1>
          {item.subtitle && <p className="mt-3 text-xl text-fg/80 font-display">{item.subtitle}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-6 py-3 rounded font-semibold inline-flex items-center gap-2 hover:bg-white/85"
              >
                <Play className="w-4 h-4 fill-black" /> Open project
              </a>
            )}
            <a
              href="mailto:varshask4757@gmail.com"
              className="bg-white/15 backdrop-blur px-6 py-3 rounded font-semibold inline-flex items-center gap-2 hover:bg-white/25"
            >
              <ExternalLink className="w-4 h-4" /> Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl mb-3">Overview</h2>
            <p className="text-fg/85 text-lg leading-relaxed">{item.overview}</p>

            <h3 className="font-display text-xl mt-10 mb-4">Highlights</h3>
            <ul className="space-y-3">
              {item.highlights.map((h: string, i: number) => (
                <li key={i} className="flex gap-3 text-fg/85">
                  <span className="text-brand mt-1.5 shrink-0">▍</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            {item.role && (
              <Meta label="Role" value={item.role} />
            )}
            {item.stack && item.stack.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((s: string) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.tags && item.tags.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t: string) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-brand/15 text-brand-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* More like this */}
        <div className="mt-20">
          <h3 className="font-display text-2xl mb-4">More like this</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                to="/project/$id"
                params={{ id: r.id }}
                className="group rounded-md overflow-hidden bg-surface-2 card-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-semibold">{r.title}</h4>
                  {r.subtitle && <p className="text-xs text-muted mt-1">{r.subtitle}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted mb-1">{label}</p>
      <p className="text-fg">{value}</p>
    </div>
  );
}
