import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionReveal } from "@/components/section-reveal";
import { Certifications } from "@/components/certifications";
import { skillCategories, proficiencyWidth } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across frontend, backend, AI engineering, databases, architecture, and DevOps — with verified Credly certifications.",
  alternates: { canonical: "/skills/" },
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Skills"
        title="Capabilities, honestly labelled"
        lead="Grouped by discipline with real proficiency levels — including the AI skills I'm actively growing, marked as such. No wall of badges."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <SectionReveal key={cat.category} delay={i * 0.04}>
            <section
              aria-labelledby={`skill-${cat.category.replace(/\W+/g, "-")}`}
              className="h-full rounded-2xl border bg-card p-6"
            >
              <h2
                id={`skill-${cat.category.replace(/\W+/g, "-")}`}
                className="mb-4 text-lg font-semibold tracking-tight"
              >
                {cat.category}
              </h2>
              <ul className="space-y-3">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1 flex items-baseline justify-between gap-2 text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-[11px] text-muted">{s.level}</span>
                    </div>
                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full bg-card-hover"
                      role="img"
                      aria-label={`${s.name}: ${s.level}`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-400"
                        style={{ width: proficiencyWidth[s.level] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <div className="mt-16">
          <Certifications />
        </div>
      </SectionReveal>
    </div>
  );
}
