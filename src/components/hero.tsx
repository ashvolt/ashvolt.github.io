import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

/** Concrete answers to what a US or EU hiring manager actually screens an
 *  overseas candidate on: overlap hours, how to pay, and comms cadence. */
const workingWithMe = [
  "9:00am–2:00pm ET overlap, daily. Full overlap with EU.",
  "USD via Wise, Payoneer, or Deel. W-8BEN ready.",
  "Written standup daily",
];

/** Entrance animations are pure CSS (animate-fade-up + staggered delays) so the
 *  hero needs no client JS and respects prefers-reduced-motion via globals.css. */
export function Hero() {
  const stagger = (i: number) => ({ animationDelay: `${i * 80}ms` });

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32">
        <div className="animate-fade-up mb-6 flex items-center gap-4" style={stagger(0)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.fullName}`}
            width={72}
            height={72}
            className="h-16 w-16 rounded-full ring-2 ring-accent-500/50 sm:h-[72px] sm:w-[72px]"
          />
          <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-xs text-muted">
            <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {profile.availabilityStatus}
          </p>
        </div>

        <div className="animate-fade-up mb-8 max-w-2xl" style={stagger(1)}>
          <p className="text-base leading-relaxed sm:text-lg">
            9+ years shipping production software — the last 4 remote for a US enterprise client
            (Dell, via Turing), invoiced in USD, working US hours from India.
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
            Angular · TypeScript · .NET Core · Node.js — now building the AI layer: RAG, agents,
            tool-calling.
          </p>

          <div className="mt-5 rounded-2xl border bg-card p-5">
            <h2 className="mb-3 text-sm font-semibold tracking-tight">
              Working with me from anywhere
            </h2>
            <ul className="space-y-2">
              {workingWithMe.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h1
          className="animate-fade-up max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
          style={stagger(2)}
        >
          {profile.headline}{" "}
          <span className="mt-2 block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            turned AI product builder.
          </span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={stagger(3)}
        >
          {profile.tagline} 9+ years shipping enterprise platforms for companies like Dell
          Technologies — now applying that engineering depth to LLMs, agents, and
          retrieval-augmented systems.
        </p>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3" style={stagger(4)}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-xl border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card-hover"
          >
            View Resume
          </Link>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-xl border bg-card p-2.5 text-muted transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-xl border bg-card p-2.5 text-muted transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-xl border bg-card p-2.5 text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="animate-fade-up mt-14 flex flex-wrap gap-2" style={stagger(5)}>
          {profile.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border bg-card px-3 py-1 font-mono text-xs text-muted"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
