import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import { TechBadge } from "@/components/tech-badge";
import { GitHubStats } from "@/components/github-stats";
import { projects, workProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source and professional projects: AI agents, RAG pipelines, quant trading platforms, and enterprise micro frontends.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        lead="Synced automatically from my GitHub profile — featured projects first, including private work shown without a repo link."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <SectionReveal key={p.slug} delay={i * 0.06}>
            <ProjectCard project={p} />
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <h2 className="mb-2 mt-16 flex items-center gap-2 text-2xl font-semibold tracking-tight">
          <Building2 className="h-6 w-6 text-accent-500" aria-hidden />
          Professional work
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-muted">
          Proprietary systems built for employers and clients — no public repo, but real scale and
          real outcomes.
        </p>
      </SectionReveal>
      <div className="grid gap-5 md:grid-cols-2">
        {workProjects.map((w, i) => (
          <SectionReveal key={w.name} delay={i * 0.06}>
            <article className="h-full rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{w.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent-400">{w.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {w.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <h2 className="mb-8 mt-16 text-2xl font-semibold tracking-tight">Live from GitHub</h2>
        <GitHubStats />
      </SectionReveal>
    </div>
  );
}
