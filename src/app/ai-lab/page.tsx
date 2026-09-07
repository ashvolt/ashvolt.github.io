import type { Metadata } from "next";
import { FlaskConical, Brain, Database, Workflow, Terminal } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import { aiLabProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Lab",
  description:
    "AI engineering experiments: RAG pipelines, AI agents with tool calling, local LLMs, quantitative trading systems, and applied NLP.",
  alternates: { canonical: "/ai-lab/" },
};

const focusAreas = [
  {
    icon: Brain,
    title: "Agents & tool calling",
    body: "Reasoning loops that retrieve context, decide when to invoke tools, execute them, and synthesize answers — built by hand to understand every step of the agentic pattern.",
  },
  {
    icon: Database,
    title: "RAG & vector search",
    body: "PDF ingestion → chunking → Sentence Transformer embeddings → ChromaDB semantic retrieval. The full retrieval-augmented generation pipeline, no framework magic.",
  },
  {
    icon: Terminal,
    title: "Local-first LLMs",
    body: "Running llama3 on Ollama for private, zero-cost inference — because understanding deployment constraints is part of AI engineering, not an afterthought.",
  },
  {
    icon: Workflow,
    title: "AI-assisted engineering",
    body: "Spec-driven development with AI pair programming in production since 2022: write the contract, direct the model, verify rigorously. Applied daily at enterprise scale.",
  },
];

export default function AiLabPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="AI Lab"
        title="Where I learn AI by building it"
        lead="No black boxes. Each experiment here builds a layer of the modern AI stack from first principles — embeddings, retrieval, agent loops, and the data engineering underneath."
      />

      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((f, i) => (
          <SectionReveal key={f.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border bg-card p-5">
              <f.icon className="mb-3 h-5 w-5 text-accent-500" aria-hidden />
              <h2 className="mb-2 text-sm font-semibold">{f.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <h2 className="mb-8 flex items-center gap-2 text-2xl font-semibold tracking-tight">
          <FlaskConical className="h-6 w-6 text-accent-500" aria-hidden />
          Experiments
        </h2>
      </SectionReveal>
      <div className="grid gap-5 md:grid-cols-2">
        {aiLabProjects.map((p, i) => (
          <SectionReveal key={p.slug} delay={i * 0.06}>
            <ProjectCard project={p} />
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <div className="mt-16 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-8">
          <h2 className="text-lg font-semibold">Why this matters</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            Production AI systems fail in the plumbing: retrieval quality, context management,
            latency, cost, observability. 9+ years of building enterprise systems taught me to
            engineer for those failure modes — the AI Lab is where I apply that discipline to
            LLM-based products. The goal isn&apos;t demos; it&apos;s understanding deep enough to
            ship AI features that survive real users.
          </p>
        </div>
      </SectionReveal>
    </div>
  );
}
