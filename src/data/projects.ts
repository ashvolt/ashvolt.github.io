import data from "./projects.json";

/**
 * Project cards are generated at build time by scripts/fetch-github.mjs from
 * the GitHub API — which repos appear (and how) is controlled entirely by
 * GitHub topics on each repo. Any one of these lists the repo on /projects;
 * the narrower two add placements on top:
 *
 *   portfolio          — listed on /projects
 *   portfolio-featured — also featured on the home page, listed first
 *   ai-lab             — also listed on /ai-lab
 *
 * projects.json is a committed snapshot refreshed on every deploy (daily cron
 * + repository_dispatch pushes); nothing here is edited by hand.
 */
export interface Project {
  slug: string;
  name: string;
  description: string;
  language: string | null;
  topics: string[];
  stars: number;
  /** GitHub URL — null for private repos, which render without a link. */
  url: string | null;
  /** Repo "Website" field — rendered as a live-demo link. */
  homepage: string | null;
  private: boolean;
  featured: boolean;
  aiLab: boolean;
  pushedAt: string;
}

export const projects: Project[] = data.projects;

export const featuredProjects = projects.filter((p) => p.featured);
export const aiLabProjects = projects.filter((p) => p.aiLab);

/** Work projects (proprietary — no public repo) shown on the projects page. */
export const workProjects = [
  {
    name: "Enterprise Log Intelligence Platform",
    org: "Dell Technologies / Turing",
    description:
      "Full-stack micro frontend for cross-functional teams to visualise, filter, and act on operational logs in real time. Onboarding new log sources required zero code changes, cutting setup time by 60% (~20–25 hrs/month saved). .NET Core REST APIs on MongoDB with RBAC improved query latency by 45% for ~1,200 concurrent users.",
    tech: ["Angular", "TypeScript", ".NET Core", "MongoDB", "RBAC", "Micro Frontends"],
  },
  {
    name: "EMR SaaS Platform",
    org: "RexEMR",
    description:
      "End-to-end healthcare SaaS for clinicians to manage patient records and submit insurance claims. Claims-upload and validation pipeline increased on-time submissions by 50%; patient workflow redesign cut per-record update time by 30%.",
    tech: ["Angular", "Node.js", "Express", "PostgreSQL"],
  },
];
