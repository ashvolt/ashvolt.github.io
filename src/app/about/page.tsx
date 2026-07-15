import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Pragash Mouttoucoumarassamy — from enterprise SaaS engineering in Puducherry to building AI-powered products with LLMs and agents.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "Spec first, code second",
    body: "Every serious system I build starts with a written design — my quant platform began as a SYSTEM_DESIGN.md before a single line of Python. Specs surface the hard decisions early, make AI-assisted coding dramatically more effective, and leave a contract the code can be reviewed against.",
  },
  {
    title: "Impact over activity",
    body: "Shipping features is easy; moving numbers is the job. The work I'm proudest of reads as outcomes: claims rejections down 20%, initial render down 35%, 6–8 hours of cross-team troubleshooting saved per week.",
  },
  {
    title: "AI as a force multiplier",
    body: "I've used AI-assisted development in production since 2022 — not to skip thinking, but to compress the distance between a clear spec and working code. The engineers who thrive next are the ones who can direct AI with precision, then verify rigorously.",
  },
  {
    title: "Understand the layer below",
    body: "I don't use RAG without building an embedding pipeline by hand, and I didn't trust ORMs before writing the SQL. Building one layer deeper than you operate is the cheapest insurance in engineering.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionReveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar.jpg"
          alt="Portrait of Pragash Mouttoucoumarassamy"
          width={112}
          height={112}
          className="mb-8 h-28 w-28 rounded-2xl ring-2 ring-accent-500/40"
        />
      </SectionReveal>
      <PageHeader
        eyebrow="About"
        title="Nine years of shipping. Now building what's next."
        lead="I'm Pragash — a full-stack engineer from Puducherry, India, who has spent close to a decade turning ambiguous product problems into reliable software."
      />

      <SectionReveal>
        <div className="prose prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed">
          <h2>The journey</h2>
          <p>
            My career started in 2017 at Relevantz, working on a high-traffic bidding and EMI
            payments platform — the kind of system where a slow page directly costs money. I
            learned performance engineering the honest way: lazy loading, memoization, and a
            legacy AngularJS-to-Angular migration that improved runtime performance by 40% while
            the site kept serving customers.
          </p>
          <p>
            At RexEMR I got to build a healthcare SaaS platform end-to-end — component library,
            REST APIs, and the insurance claims workflows where a validation bug means a clinician
            doesn&apos;t get paid. Payment-critical software teaches you a respect for edge cases
            that no tutorial can.
          </p>
          <p>
            Since 2022 I&apos;ve worked with Dell Technologies (through Turing) as a senior
            consultant: micro frontends aligned to enterprise design systems, .NET Core and
            Node.js microservices behind an Ocelot API gateway, real-time systems on SignalR
            sustaining ~1,200 concurrent users. Fully remote, fully async, across time zones —
            which is where I learned that written communication is an engineering skill.
          </p>
          <h2>The turn toward AI</h2>
          <p>
            I adopted AI-assisted development early and watched it change what one engineer can
            ship. That led to a deeper question: how do these systems actually work? So I started
            building them — a RAG pipeline and agent loop from first principles
            (embeddings, ChromaDB, tool calling, local LLMs via Ollama), a spec-driven quant
            trading platform, and time-series analytics in kdb+/q. Not courses. Working systems.
          </p>
          <p>
            My conviction: the most valuable engineers in the AI era are the ones who combine
            production engineering discipline — observability, API design, failure handling —
            with a real understanding of how LLM systems behave. That intersection is exactly
            where I&apos;m building.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal>
        <h2 className="mb-6 mt-14 text-2xl font-semibold tracking-tight">How I work</h2>
      </SectionReveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {principles.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border bg-card p-6">
              <h3 className="mb-2 font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-500"
          >
            See the track record <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/ai-lab"
            className="inline-flex items-center rounded-xl border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover"
          >
            Visit the AI Lab
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
}
