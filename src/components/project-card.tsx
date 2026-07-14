import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechBadge } from "./tech-badge";

const statusStyle: Record<Project["status"], string> = {
  Active: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  Prototype: "text-amber-500 border-amber-500/30 bg-amber-500/10",
  Learning: "text-accent-400 border-accent-500/30 bg-accent-500/10",
};

export function ProjectCard({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border bg-card p-6 transition-all hover:border-accent-500/40 hover:shadow-lg hover:shadow-accent-500/5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0"
          >
            {project.name}
          </a>
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-sm font-medium text-accent-400">{project.tagline}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {detailed && (
        <div className="mt-4 space-y-3 border-t pt-4 text-sm">
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Problem</h4>
            <p className="leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Architecture</h4>
            <p className="leading-relaxed text-muted">{project.architecture}</p>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5 transition-colors group-hover:text-accent-400">
          <Github className="h-3.5 w-3.5" aria-hidden />
          View source
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 hover:text-accent-400"
          >
            Live demo
            <ArrowUpRight className="h-3 w-3" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
