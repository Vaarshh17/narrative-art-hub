import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Row } from "@/components/Row";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { rows } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varsha Selvakumar — AI Engineer & Hackathon Champion" },
      {
        name: "description",
        content:
          "Portfolio of Varsha Selvakumar — Computer Science student at University Malaya building RAG systems, ML, and automation. UM Hackathon champion and 5x finalist.",
      },
      { property: "og:title", content: "Varsha Selvakumar — AI Engineer" },
      { property: "og:description", content: "AI engineer · hackathon champion · product-minded builder." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <Hero />
      <main className="-mt-20 relative z-10 flex flex-col gap-10 pb-20">
        {rows.filter((r) => r.key !== "skills").map((r) => (
          <Row key={r.key} row={r} />
        ))}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
