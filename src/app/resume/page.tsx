import type { Metadata } from "next";
import { Mail, MapPin, Globe } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionReveal } from "@/components/section-reveal";
import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pragash M — Senior Full-Stack Engineer with 9+ years across TypeScript, React, Angular, Node.js, .NET Core, and AI engineering.",
  alternates: { canonical: "/resume/" },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Resume"
        title="Pragash M"
        lead="Full-Stack Software Engineer · 9+ years · TypeScript, React, Angular, Node.js, .NET Core, and applied AI."
      />

      <SectionReveal>
        <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-accent-400">
            <Mail className="h-4 w-4" aria-hidden /> {profile.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden /> {profile.location} · Open to remote
          </span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent-400"
          >
            <Globe className="h-4 w-4" aria-hidden /> LinkedIn
          </a>
        </div>

        <a
          href={`mailto:${profile.email}?subject=Resume%20request%20—%20${encodeURIComponent(profile.fullName)}`}
          className="mb-12 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-500"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Request full resume (PDF)
        </a>
      </SectionReveal>

      <SectionReveal>
        <section aria-labelledby="resume-summary" className="mb-10">
          <h2 id="resume-summary" className="mb-3 border-b pb-2 text-lg font-semibold tracking-tight">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            Full-stack software engineer with 9+ years delivering scalable web platforms, SaaS
            products, and microservice APIs across TypeScript, React, Angular, Node.js, and .NET
            Core. Experienced building product-grade REST APIs, real-time systems with SignalR,
            and payment &amp; billing workflows. Comfortable working autonomously in small remote
            teams, leveraging AI tools to ship fast and maintain quality. Proven track record
            across enterprise SaaS, commerce-adjacent platforms, and high-availability
            microservices.
          </p>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section aria-labelledby="resume-experience" className="mb-10">
          <h2 id="resume-experience" className="mb-4 border-b pb-2 text-lg font-semibold tracking-tight">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="text-sm text-accent-400">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {job.impact.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 font-mono text-xs text-muted">{job.tech.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section aria-labelledby="resume-skills" className="mb-10">
          <h2 id="resume-skills" className="mb-4 border-b pb-2 text-lg font-semibold tracking-tight">
            Technical Skills
          </h2>
          <dl className="space-y-2">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="flex flex-col gap-0.5 text-sm sm:flex-row sm:gap-3">
                <dt className="w-44 shrink-0 font-medium">{cat.category}</dt>
                <dd className="text-muted">{cat.skills.map((s) => s.name).join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section aria-labelledby="resume-education">
          <h2 id="resume-education" className="mb-4 border-b pb-2 text-lg font-semibold tracking-tight">
            Education
          </h2>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.degree} className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                <span>
                  <span className="font-medium">{e.degree}</span>
                  <span className="text-muted"> — {e.school}</span>
                </span>
                <span className="font-mono text-xs text-muted">{e.year}</span>
              </li>
            ))}
          </ul>
        </section>
      </SectionReveal>
    </div>
  );
}
