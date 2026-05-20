// All portfolio content lives here. Edit freely.
// To use your own images: drop them in src/assets/portfolio/ and import them,
// or replace the Unsplash URLs below.

export type Item = {
  id: string;
  title: string;
  subtitle?: string;
  year?: string;
  image: string;
  gallery?: string[];
  tags?: string[];
  overview: string;
  highlights: string[];
  role?: string;
  stack?: string[];
  link?: string;
};

export type Row = {
  key: string;
  title: string;
  layout?: "landscape" | "portrait";
  items: Item[];
};

const img = (q: string, w = 1200) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=${w}&q=80`;

export const hero = {
  name: "Varsha Selvakumar",
  tagline: "Building AI that solves real problems.",
  blurb:
    "Computer Science student at University Malaya. AI engineer, hackathon champion, and product-minded builder bridging business and technical perspectives.",
  // Replace these with your own images in src/assets/portfolio/
  background: img("photo-1451187580459-43490279c0fa", 1920),
  // Multiple portraits that rotate in the hero. Add/remove as you like.
  portraits: [
    img("photo-1494790108377-be9c29b29330", 900),
    img("photo-1438761681033-6461ffad8d80", 900),
    img("photo-1531123897727-8f129e1688ce", 900),
  ],
  avatar: img("photo-1438761681033-6461ffad8d80", 200),
};

export const rows: Row[] = [
  {
    key: "experience",
    title: "Experience",
    layout: "portrait",
    items: [
      {
        id: "grab",
        title: "Project Manager Intern (AI)",
        subtitle: "Grab Malaysia",
        year: "Jul 2025 — Dec 2025",
        role: "AI PM Intern · TechInfra team",
        image: img("photo-1556761175-5973dc0f32e7"),
        gallery: [img("photo-1551434678-e076c223a692"), img("photo-1518770660439-4636190af475"), img("photo-1581091226825-a6a2a5aee158")],
        tags: ["RAG", "Semantic Search", "Product"],
        stack: ["Python", "RAG", "Vector DB", "RAGAS"],
        overview:
          "Built a semantic search tool for Grab's internal TechDocs as an MCP server, powered by a Retrieval-Augmented Generation pipeline.",
        highlights: [
          "Built a semantic search tool for internal docs (TechDocs MCP Server) using a RAG pipeline.",
          "Collaborated with product owners to surface knowledge gaps and improve documentation clarity.",
          "Curated evaluation datasets from data lake, Slack scraping, user feedback, and augmentation.",
          "Led sprint meetings across cross-functional teams to ensure timely delivery.",
          "Emcee for the GrabXAWS event — stakeholder communication at scale.",
        ],
      },
      {
        id: "u2k",
        title: "Automation & AI Consultant",
        subtitle: "U2K Team Technologies",
        year: "2026 — Freelance",
        role: "Freelance Automation Consultant",
        image: img("photo-1518186285589-2f7649de83e0"),
        gallery: [img("photo-1518770660439-4636190af475"), img("photo-1531403009284-440f080d1e12")],
        tags: ["n8n", "Automation", "Workflow"],
        stack: ["n8n", "APIs", "Webhooks"],
        overview:
          "End-to-end automation workflow for a Malaysia-based corporate training & consulting firm, cutting turnaround from 24h to <1h.",
        highlights: [
          "95%+ efficiency gain via N8N-based automation workflow.",
          "Worked with stakeholders to scope, prototype an MVP, and iterate on feedback.",
          "Documented the workflow and ran knowledge-transfer sessions for the client team.",
        ],
      },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    layout: "portrait",
    items: [
      {
        id: "techdocs-mcp",
        title: "TechDocs MCP — Semantic Search",
        subtitle: "Grab",
        year: "2025",
        image: img("photo-1555066931-4365d14bab8c"),
        gallery: [img("photo-1542831371-29b0f74f9713"), img("photo-1517694712202-14dd9538aa97")],
        tags: ["RAG", "MCP", "Vector Search"],
        stack: ["Python", "Vector DB", "RAGAS", "MCP"],
        overview:
          "End-to-end semantic search system for internal documentation with hybrid retrieval and rigorous evaluation.",
        highlights: [
          "Length-based and markdown-aware chunking, vector indexing, and reranking.",
          "Fallback combining vector search and keyword filtering for robust retrieval.",
          "Evaluated with RAGAS and internal metrics to balance accuracy and latency.",
        ],
      },
      {
        id: "rop-ml",
        title: "Predicting Rate of Penetration (ROP)",
        subtitle: "ML Project · Team Lead",
        year: "2024",
        image: img("photo-1581091226825-a6a2a5aee158"),
        gallery: [img("photo-1551288049-bebda4e38f71"), img("photo-1543286386-713bdd548da4")],
        tags: ["ML", "Random Forest", "Feature Selection"],
        stack: ["Python", "scikit-learn", "Boruta", "Pandas"],
        overview:
          "Led a team building an ML model to predict Rate of Penetration in drilling — improving operational decisions.",
        highlights: [
          "Preprocessing, EDA, and feature engineering on limited and noisy drilling data.",
          "Boruta feature selection to identify the key drivers.",
          "Random Forest reached 97% AUROC across evaluated models.",
        ],
      },
      {
        id: "community-ai",
        title: "Community Education & Cloud",
        subtitle: "AWS Trainer · AI Literacy",
        year: "2024 — 2025",
        image: img("photo-1531482615713-2afd69097998"),
        gallery: [img("photo-1503676260728-1c00da094a0b"), img("photo-1524178232363-1fb2b075b655")],
        tags: ["AWS", "Teaching", "AI Literacy"],
        stack: ["AWS", "Public Speaking"],
        overview:
          "Designed and delivered AWS and AI literacy programs for students.",
        highlights: [
          "AWS-Certified Trainer — 2 formal talks on cloud fundamentals & architecture.",
          "Facilitated AI Literacy workshops covering responsible & practical AI use.",
        ],
      },
    ],
  },
  {
    key: "hackathons",
    title: "Hackathons",
    layout: "portrait",
    items: [
      {
        id: "umhack-2026",
        title: "UM Hackathon 2026",
        subtitle: "1st Runner-up · Champion",
        year: "2026",
        image: img("photo-1556761175-b413da4baf72", 800),
        gallery: [img("photo-1531403009284-440f080d1e12"), img("photo-1551434678-e076c223a692")],
        tags: ["Telegram Bot", "Decision Intelligence"],
        stack: ["Python", "LLM", "Telegram API"],
        overview:
          "Decision-intelligence Telegram bot helping Malaysian wholesalers run their day-to-day operations.",
        highlights: [
          "Deployed a working bot in under 48 hours.",
          "Won 1st runner-up among national competitors.",
        ],
      },
      {
        id: "umhack-2025",
        title: "UM Hackathon 2025",
        subtitle: "Finalist",
        year: "2025",
        image: img("photo-1518186285589-2f7649de83e0", 800),
        gallery: [img("photo-1551288049-bebda4e38f71")],
        tags: ["Quant", "Backtesting"],
        stack: ["Python"],
        overview:
          "Conceptualized a backtesting library for Baleana Quant integrating emotion + strategy behavior into trading simulations.",
        highlights: [
          "Designed an API for emotion-aware backtests.",
          "Pitched to industry judges and reached the finals.",
        ],
      },
      {
        id: "loreal",
        title: "L'Oréal Datathon 2025",
        subtitle: "Finalist",
        year: "2025",
        image: img("photo-1522335789203-aaa2f6c1d2f7", 800),
        gallery: [img("photo-1487412947147-5cebf100ffc2")],
        tags: ["Prophet", "Trend Forecasting"],
        stack: ["Python", "Prophet"],
        overview:
          "Trend-forecasting tool predicting emerging beauty topics for data-driven campaign planning.",
        highlights: [
          "Prophet model for time-series of trending beauty topics.",
          "Designed an interface for analysts and creators with actionable insights.",
        ],
      },
      {
        id: "godamlah",
        title: "NexG GodamLah 2.0 smartID",
        subtitle: "Top 30",
        year: "2024",
        image: img("photo-1529107386315-e1a2ed48a620", 800),
        gallery: [img("photo-1488521787991-ed7bbaae773c")],
        tags: ["Inclusive Design", "Identity"],
        stack: ["Product Design"],
        overview:
          "Identity & access solution for Orang Asli communities — designed around real-world constraints and inclusion.",
        highlights: [
          "Top 30 nationally.",
          "Field-aware inclusive design with implementation realism.",
        ],
      },
      {
        id: "design-duel",
        title: "Design Duel 2025",
        subtitle: "Runner-up",
        year: "2025",
        image: img("photo-1559028012-481c04fa702d", 800),
        gallery: [img("photo-1561070791-2526d30994b8")],
        tags: ["Figma", "UI/UX"],
        stack: ["Figma"],
        overview:
          "Gen Z–targeted skincare website with clean UI, intuitive navigation, and modern visual language.",
        highlights: [
          "Strong UX thinking under competitive constraints.",
          "Runner-up among UM design teams.",
        ],
      },
    ],
  },
  {
    key: "leadership",
    title: "Leadership",
    layout: "portrait",
    items: [
      {
        id: "design-duel-director",
        title: "Director of Design Duel 2024",
        subtitle: "PEKOM (Persatuan Komputer UM)",
        year: "2024",
        image: img("photo-1552664730-d307ca884978"),
        tags: ["Leadership", "Events"],
        overview:
          "Led the first-ever Figma competition under PEKOM — organization, logistics, and participation growth.",
        highlights: [
          "Milestone first edition for PEKOM.",
          "End-to-end ownership: logistics, judging, and promotion.",
        ],
      },
      {
        id: "pln-marketing",
        title: "Head of Sponsorship & Marketing",
        subtitle: "Programming League National 2025",
        year: "2025",
        image: img("photo-1559136555-9303baea8ebd"),
        tags: ["Sponsorship", "Marketing"],
        overview:
          "Led sponsorship and marketing for PLN — securing partnerships and managing promotional strategy.",
        highlights: [
          "Secured key partnerships.",
          "Drove outreach campaigns ensuring strong event attendance.",
        ],
      },
    ],
  },
  {
    key: "skills",
    title: "Skills & Toolkit",
    layout: "portrait",
    items: [
      {
        id: "skill-ai",
        title: "AI & Machine Learning",
        image: img("photo-1620712943543-bcc4688e7485", 800),
        tags: ["RAG", "Semantic Search", "Prompt Eng."],
        overview: "RAG, Semantic Search, Vector Embeddings, Random Forest, Prophet, RAGAS, Prompt Engineering, n8n.",
        highlights: ["Retrieval-Augmented Generation", "Vector embeddings & reranking", "Evaluation with RAGAS"],
      },
      {
        id: "skill-data",
        title: "Data Engineering",
        image: img("photo-1551288049-bebda4e38f71", 800),
        tags: ["ETL", "Pandas", "NumPy"],
        overview: "ETL pipeline design, Pandas, NumPy, data cleaning, transformation, feature engineering.",
        highlights: ["ETL design", "Feature engineering", "Cleaning noisy datasets"],
      },
      {
        id: "skill-prog",
        title: "Programming",
        image: img("photo-1517694712202-14dd9538aa97", 800),
        tags: ["Python", "SQL"],
        overview: "Python and SQL for everything from data work to backend automation.",
        highlights: ["Python", "SQL"],
      },
      {
        id: "skill-design",
        title: "Design & Collaboration",
        image: img("photo-1561070791-2526d30994b8", 800),
        tags: ["Figma", "Canva", "M365"],
        overview: "Figma, Canva, Microsoft 365 — bridging design and execution.",
        highlights: ["Figma", "Canva", "Microsoft Suite"],
      },
    ],
  },
];

export const findItem = (id: string): Item | undefined => {
  for (const r of rows) {
    const f = r.items.find((i) => i.id === id);
    if (f) return f;
  }
  return undefined;
};
