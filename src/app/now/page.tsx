import type { Metadata } from "next";
import { BookOpen, Hammer, Compass, FlaskConical } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Pragash Mouttoucoumarassamy is learning, building, and aiming for right now — actively interviewing for senior full-stack and AI engineering roles.",
  alternates: { canonical: "/now/" },
};

const sections = [
  {
    icon: BookOpen,
    title: "Learning",
    items: [
      "AI engineering in depth: RAG quality, agent architectures, tool calling, and evaluation",
      "Python for data science and quantitative work",
      "kdb+/q for time-series analytics — the language of capital-markets infrastructure",
      "Web3 and blockchain fundamentals",
    ],
  },
  {
    icon: Hammer,
    title: "Building",
    items: [
      "Applied AI full time since July 2026 — the post-Dell focus, not a side project",
      "quant-platform — a spec-driven quantitative trading platform (data ingestion first, strategies next)",
      "UnderstandingAI — extending the local RAG agent with more tools and better retrieval",
      "This portfolio — Next.js static export, auto-refreshed GitHub and Credly data",
    ],
  },
  {
    icon: FlaskConical,
    title: "Recent experiments",
    items: [
      "ATS resume optimizer — client-side keyword scoring with a rule-based paraphrase engine",
      "Stock analyzer in q — moving averages and volume aggregation over tick data in kdb+",
      "Running llama3 locally with Ollama for private, zero-cost inference",
    ],
  },
  {
    icon: Compass,
    title: "Goals",
    items: [
      "Actively interviewing — available to start immediately, remote worldwide or UAE",
      "Land a senior full-stack / AI engineer role at a product-driven, remote-first company",
      "Ship an end-to-end AI feature to real users — retrieval, agents, and the observability around them",
      "Finish the MBA (Pondicherry University) while keeping the engineering edge sharp",
      "Write more: one engineering note per month, grounded in real systems",
    ],
  },
];

export default function NowPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Now"
        title="What I'm doing now"
        lead="A living snapshot of current focus, inspired by Derek Sivers' /now page movement. Last updated September 2026."
      />

      <SectionReveal>
        <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
          <p className="mb-1 flex items-center gap-2 font-semibold text-emerald-500">
            <span aria-hidden className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open to work
          </p>
          <p className="text-sm leading-relaxed text-muted">
            My Dell Technologies engagement (via Turing) wrapped in July 2026. Since then
            I&apos;ve been building applied-AI systems full time — and I&apos;m actively
            interviewing for senior full-stack and AI engineering roles, available to start
            immediately.
          </p>
        </div>
      </SectionReveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s, i) => (
          <SectionReveal key={s.title} delay={i * 0.06}>
            <section
              aria-labelledby={`now-${s.title}`}
              className="h-full rounded-2xl border bg-card p-6"
            >
              <h2 id={`now-${s.title}`} className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <s.icon className="h-5 w-5 text-accent-500" aria-hidden />
                {s.title}
              </h2>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
