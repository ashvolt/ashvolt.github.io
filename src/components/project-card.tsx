import { ArrowUpRight, Github, Lock, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { langColors, fallbackLangColor } from "@/lib/lang-colors";
import { TechBadge } from "./tech-badge";

function formatPushed(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border bg-card p-6 transition-all hover:border-accent-500/40 hover:shadow-lg hover:shadow-accent-500/5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-mono text-lg font-semibold tracking-tight">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        {project.private && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-500">
            <Lock className="h-2.5 w-2.5" aria-hidden />
            Private
          </span>
        )}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {project.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.topics.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
        {project.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ background: langColors[project.language] ?? fallbackLangColor }}
            />
            {project.language}
          </span>
        )}
        {project.stars > 0 && (
          <span className="inline-flex items-center gap-1">
            <Star className="h-3 w-3" aria-hidden /> {project.stars}
          </span>
        )}
        <span>Updated {formatPushed(project.pushedAt)}</span>
        {project.url && (
          <span className="inline-flex items-center gap-1.5 transition-colors group-hover:text-accent-400">
            <Github className="h-3.5 w-3.5" aria-hidden />
            View source
            <ArrowUpRight
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        )}
        {project.homepage && (
          <a
            href={project.homepage}
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
