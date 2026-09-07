import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { ProjectCard } from "@/components/project-card";
import { GitHubStats } from "@/components/github-stats";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.headline,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  seeks: {
    "@type": "Demand",
    name: "Senior full-stack / AI engineering role (remote worldwide)",
    availability: "https://schema.org/InStock",
  },
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.credly],
  knowsAbout: ["TypeScript", "React", "Angular", "Node.js", ".NET Core", "AI Engineering", "LLMs", "RAG", "Microservices"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />

      <section aria-label="Career statistics" className="border-y bg-card/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.06}>
              <div>
                <p className="text-3xl font-bold tracking-tight text-accent-500 sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionReveal>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-500">
                Featured work
              </p>
              <h2 id="featured-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Projects I&apos;m building
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm text-accent-400 hover:underline sm:inline-flex"
            >
              All projects <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </SectionReveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 0.07}>
              <ProjectCard project={p} />
            </SectionReveal>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1 text-sm text-accent-400 hover:underline sm:hidden"
        >
          All projects <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>

      <section aria-labelledby="skills-heading" className="border-t bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionReveal>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-500">
              Capabilities
            </p>
            <h2 id="skills-heading" className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
              Full-stack depth, AI direction
            </h2>
          </SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.slice(0, 4).map((cat, i) => (
              <SectionReveal key={cat.category} delay={i * 0.06}>
                <div className="h-full rounded-2xl border bg-card p-5">
                  <h3 className="mb-3 text-sm font-semibold">{cat.category}</h3>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {cat.skills.slice(0, 5).map((s) => (
                      <li key={s.name}>{s.name}</li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <Link
              href="/skills"
              className="mt-6 inline-flex items-center gap-1 text-sm text-accent-400 hover:underline"
            >
              Full skills &amp; certifications <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section aria-labelledby="github-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionReveal>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-500">
            Open source
          </p>
          <h2 id="github-heading" className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            GitHub activity
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <GitHubStats />
        </SectionReveal>
      </section>

      <section aria-labelledby="cta-heading" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <SectionReveal>
            <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Open to senior full-stack, AI engineer, and founding engineer roles — remote-first,
              async-friendly, product-minded.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-500"
              >
                Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover"
              >
                My story
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
