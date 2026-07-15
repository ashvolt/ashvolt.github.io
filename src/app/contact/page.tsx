import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Award, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionReveal } from "@/components/section-reveal";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pragash Mouttoucoumarassamy — open to remote, UAE, and AI engineering roles.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best for role inquiries — I reply within a day.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "pragash-mouttoucoumarassamy",
    href: profile.links.linkedin,
    note: "Professional profile and recommendations.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@ashvolt",
    href: profile.links.github,
    note: "Code, experiments, and activity.",
  },
  {
    icon: Award,
    label: "Credly",
    value: "Verified credentials",
    href: profile.links.credly,
    note: "Digital certifications, independently verifiable.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        lead="Hiring for a senior full-stack, AI engineer, or founding engineer role? I'd love to hear what you're building."
      />

      <SectionReveal>
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-sm text-muted">
            <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden />
            {profile.location}
          </span>
          {profile.availability.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {a}
            </span>
          ))}
        </div>
      </SectionReveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <SectionReveal key={c.label} delay={i * 0.06}>
            <a
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-colors hover:border-accent-500/40"
            >
              <div className="flex items-center justify-between">
                <c.icon className="h-5 w-5 text-accent-500" aria-hidden />
                <ArrowUpRight
                  className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </div>
              <h2 className="mt-4 font-semibold">{c.label}</h2>
              <p className="mt-0.5 break-all font-mono text-sm text-accent-400">{c.value}</p>
              <p className="mt-2 text-sm text-muted">{c.note}</p>
            </a>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <p className="mt-10 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6 text-sm leading-relaxed text-muted">
          <span className="font-semibold text-foreground">Timezone: </span>
          IST (UTC+5:30) — with 5+ years of async collaboration across US and European time
          zones. Fully remote setup, weekly shipping cadence, over-communicating by default.
        </p>
      </SectionReveal>
    </div>
  );
}
