import { Briefcase } from "lucide-react";
import type { Experience } from "@/data/experience";
import { TechBadge } from "./tech-badge";
import { SectionReveal } from "./section-reveal";

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-10 border-l pl-8 sm:space-y-12">
      {items.map((item, i) => (
        <li key={item.company} className="relative">
          <span
            aria-hidden
            className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border bg-card"
          >
            <Briefcase className="h-3 w-3 text-accent-500" />
          </span>
          <SectionReveal delay={i * 0.05}>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent-400">
                {item.company} · {item.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.impact.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl border border-accent-500/20 bg-accent-500/5 px-4 py-3 text-sm leading-relaxed">
                <span className="font-semibold text-accent-400">Outcome: </span>
                {item.outcome}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </SectionReveal>
        </li>
      ))}
    </ol>
  );
}
