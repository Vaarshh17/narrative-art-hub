import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What roles are you looking for?",
    a: "AI Engineer Intern, Tech Consulting, and Product Management internships. Strongest fit for roles at the intersection of technical AI work and business impact.",
  },
  {
    q: "When do you graduate?",
    a: "March 2027, Bachelor of CS (AI Concentration), Universiti Malaya.",
  },
  {
    q: "Are you available for internships?",
    a: "Actively seeking internships from mid-2026. Available for full-time from March 2027.",
  },
  {
    q: "Where are you based?",
    a: "Kuala Lumpur, Malaysia. Open to remote and relocation.",
  },
  {
    q: "What is your AI engineering experience?",
    a: "Built a production RAG + semantic search system at Grab (TechDocs MCP Server). Implemented chunking, vector indexing, reranking, and evaluated with RAGAS. Also built an ML model (97% AUROC) for drilling ROP prediction.",
  },
  {
    q: "What consulting experience do you have?",
    a: "Freelance AI Automation Consultant at U2K Team: scoped the problem, built an end-to-end N8N automation workflow, reduced turnaround from 24h to under 1h (95% gain), delivered KT sessions to the client team.",
  },
  {
    q: "What product management experience do you have?",
    a: "PM Intern (AI) at Grab — led sprint meetings, aligned cross-functional teams, collaborated with product owners to identify knowledge gaps, and curated evaluation datasets as product decisions.",
  },
  {
    q: "Can you work with non-technical stakeholders?",
    a: "Yes — at Grab I worked with product owners and presented at GrabXAWS. As a consultant I translated technical automation into business outcomes. I also run AI literacy workshops for non-technical audiences.",
  },
  {
    q: "What is your strongest technical skill?",
    a: "Designing and evaluating end-to-end RAG pipelines for production use cases.",
  },
  {
    q: "Do you have leadership experience?",
    a: "Directed Design Duel 2024 (first Figma competition under PEKOM) and led sponsorship & marketing for Programming League National 2025 — a national-scale event.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-12 mt-16">
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          const isHovered = hovered === i;
          return (
            <div
              key={i}
              style={{
                backgroundColor: isHovered || isOpen ? "#2A2A2A" : "#221F1F",
                borderLeft: "2px solid #E50914",
                transition: "background-color 200ms",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span
                  className="font-semibold text-white pr-3"
                  style={{ fontSize: "15px" }}
                >
                  {f.q}
                </span>
                <ChevronDown
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#E50914",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: isOpen ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 300ms ease",
                }}
              >
                <p
                  className="px-5 pb-5 leading-relaxed"
                  style={{ color: "#A3A3A3", fontSize: "14px" }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
