export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  architecture: string;
  tech: string[];
  repo: string;
  demo?: string;
  featured: boolean;
  aiLab: boolean;
  category: "AI / LLM" | "Quant / Data" | "Full-Stack" | "Frontend";
  status: "Active" | "Prototype" | "Learning";
}

export const projects: Project[] = [
  {
    slug: "understanding-ai",
    name: "UnderstandingAI",
    tagline: "RAG pipeline + AI agent with tool calling, built from first principles",
    description:
      "An intelligent agent system that demonstrates core AI engineering patterns end-to-end: vector embeddings, retrieval-augmented generation, semantic search, and agentic tool-calling loops — running entirely on a local LLM for privacy.",
    problem:
      "Most AI tutorials treat RAG and agents as black boxes. This project builds each layer explicitly — from PDF ingestion to embeddings to the agent decision loop — to understand exactly how production AI systems work.",
    architecture:
      "Knowledge loader chunks PDFs into ChromaDB vector embeddings (Sentence Transformers). The agent runs a reasoning loop: receive input → retrieve context → query the LLM (Ollama / llama3) → decide whether a tool call is needed → execute tools → respond.",
    tech: ["Python", "ChromaDB", "Sentence Transformers", "Ollama", "llama3", "RAG", "AI Agents"],
    repo: "https://github.com/ashvolt/UnderstandingAI",
    featured: true,
    aiLab: true,
    category: "AI / LLM",
    status: "Active",
  },
  {
    slug: "quant-platform",
    name: "Quant Platform",
    tagline: "Quantitative trading platform with a documented system design",
    description:
      "A Python trading-research platform built spec-first: system design written before code, with modular configuration management and market-data ingestion pipelines as the foundation for strategy research and backtesting.",
    problem:
      "Trading research needs reliable, reproducible data pipelines before any strategy work is meaningful. This platform starts with disciplined ingestion and configuration architecture rather than jumping straight to signals.",
    architecture:
      "Spec-driven layout: a SYSTEM_DESIGN.md contract, config-driven ingestion modules, and a src core separated from data plumbing — designed to grow into strategy, backtest, and execution layers.",
    tech: ["Python", "Data Pipelines", "System Design", "Spec-Driven Development"],
    repo: "https://github.com/ashvolt/quant-platform",
    featured: true,
    aiLab: true,
    category: "Quant / Data",
    status: "Active",
  },
  {
    slug: "ats-resume-optimizer",
    name: "ATS Resume Optimizer",
    tagline: "Client-side resume scoring against job descriptions — no signup, no server",
    description:
      "A tool that scores a resume against any job description (0–100), surfaces missing keywords ranked by importance, and auto-generates an improved resume with a rule-based paraphrase engine. Everything runs in the browser.",
    problem:
      "Applicant tracking systems silently reject resumes that miss keywords. Existing optimizers are paid, require signup, and upload your resume to a server. This one is free, private, and instant.",
    architecture:
      "React + Vite SPA. Job postings are scraped via a CORS proxy or pasted manually; an algorithmic keyword-frequency engine computes match scores fully client-side; export to clipboard, Google Docs, or .docx.",
    tech: ["React", "JavaScript", "Vite", "NLP heuristics", "Google Docs API"],
    repo: "https://github.com/ashvolt/ats-resume-optimizer",
    featured: true,
    aiLab: true,
    category: "AI / LLM",
    status: "Prototype",
  },
  {
    slug: "stock-analyzer",
    name: "Stock Analyzer (kdb+/q)",
    tagline: "Time-series stock analysis in q — the language of high-frequency finance",
    description:
      "Financial time-series analysis built on kdb+, the columnar database used by top trading firms: CSV tick data loaded into kdb+ tables with moving averages, per-symbol price ranges, and volume aggregation in idiomatic q.",
    problem:
      "kdb+/q dominates capital-markets infrastructure but has a notoriously steep learning curve. This project learns it through real analytics rather than toy examples.",
    architecture:
      "CSV ingestion into typed kdb+ tables; q queries for moving averages, high/low tracking, and daily volume; designed to extend toward EMA/RSI/Bollinger indicators, real-time tick handling, and a Next.js dashboard.",
    tech: ["q", "kdb+", "Time Series", "Financial Data"],
    repo: "https://github.com/ashvolt/stock-analyzer",
    featured: false,
    aiLab: true,
    category: "Quant / Data",
    status: "Learning",
  },
  {
    slug: "task-manager",
    name: "TaskManager",
    tagline: "Full-stack task management with Firebase auth, deployed to production",
    description:
      "A cloud-deployed task management app: Angular frontend, Node.js/Express backend, Firestore persistence, and Firebase authentication with email and Google login.",
    problem:
      "A complete, deployed reference implementation of a full-stack app — auth, data persistence, and cloud hosting — rather than a local-only demo.",
    architecture:
      "Two-project monorepo (ux + node). Angular SPA talks to an Express REST API; Firebase handles identity; Firestore stores tasks; deployed on Render.",
    tech: ["Angular", "TypeScript", "Node.js", "Express", "Firebase", "Firestore", "Render"],
    repo: "https://github.com/ashvolt/taskManager",
    demo: "https://taskmanager-ux.onrender.com",
    featured: false,
    aiLab: false,
    category: "Full-Stack",
    status: "Active",
  },
  {
    slug: "caferx",
    name: "CafeRx",
    tagline: "Angular 17 application exploring modern framework patterns",
    description:
      "An Angular 17 project using the latest framework features — standalone components, modern tooling, and strict TypeScript — as a testbed for current Angular best practices.",
    problem:
      "Staying current with Angular's rapid evolution (signals, standalone APIs, control flow) requires hands-on projects, not just release notes.",
    architecture:
      "Angular CLI 17 project with strict TypeScript (95%+), SCSS styling, and Karma unit tests.",
    tech: ["Angular 17", "TypeScript", "SCSS", "Karma"],
    repo: "https://github.com/ashvolt/cafeRx",
    featured: false,
    aiLab: false,
    category: "Frontend",
    status: "Learning",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const aiLabProjects = projects.filter((p) => p.aiLab);

/** Work projects (proprietary — no public repo) shown on the projects page. */
export const workProjects = [
  {
    name: "Enterprise Log Intelligence Platform",
    org: "Dell Technologies / Turing",
    description:
      "Full-stack micro frontend for cross-functional teams to visualise, filter, and act on operational logs in real time. Onboarding new log sources required zero code changes, cutting setup time by 60% (~20–25 hrs/month saved). .NET Core REST APIs on MongoDB with RBAC improved query latency by 45% for ~1,200 concurrent users.",
    tech: ["Angular", "TypeScript", ".NET Core", "MongoDB", "RBAC", "Micro Frontends"],
  },
  {
    name: "EMR SaaS Platform",
    org: "RexEMR",
    description:
      "End-to-end healthcare SaaS for clinicians to manage patient records and submit insurance claims. Claims-upload and validation pipeline increased on-time submissions by 50%; patient workflow redesign cut per-record update time by 30%.",
    tech: ["Angular", "Node.js", "Express", "PostgreSQL"],
  },
];
