import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { SectionReveal } from "@/components/section-reveal";
import { experience, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "9+ years of professional experience: Dell Technologies, RexEMR, and Relevantz — enterprise micro frontends, healthcare SaaS, and payments platforms.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Experience"
        title="Track record"
        lead="Every role framed the same way I frame engineering: what changed for the business, not what tasks were done."
      />

      <Timeline items={experience} />

      <SectionReveal>
        <h2 className="mb-6 mt-14 flex items-center gap-2 text-2xl font-semibold tracking-tight">
          <GraduationCap className="h-6 w-6 text-accent-500" aria-hidden />
          Education
        </h2>
        <ul className="space-y-3">
          {education.map((e) => (
            <li key={e.degree} className="rounded-2xl border bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.degree}</h3>
                <span className="font-mono text-xs text-muted">{e.year}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{e.school}</p>
            </li>
          ))}
        </ul>
      </SectionReveal>
    </div>
  );
}
