export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  impact: string[];
  outcome: string;
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Dell Technologies (Contractor via Turing)",
    role: "Senior Software Consultant",
    period: "Jul 2022 — Present",
    location: "Remote",
    summary:
      "Full-stack engineering across micro frontends and backend microservices for enterprise platforms, in a fully remote, async-first team.",
    impact: [
      "Architected full-stack SPAs and micro frontends with TypeScript + Angular, aligned to design systems and WCAG accessibility standards — cutting initial render time by 35%.",
      "Engineered .NET Core and Node.js microservices with Redis, SignalR, and MongoDB, improving reliability by 30% and sustaining ~1,200 concurrent users under load.",
      "Designed and enforced Ocelot API Gateway configuration for cookie/SSO auth and role-based access control across all services.",
      "Defined structured observability and logging standards with reusable data-view components, saving 6–8 hours of cross-team troubleshooting per week.",
      "Leveraged GitHub Copilot and AI-assisted workflows to accelerate delivery; mentored junior engineers and streamlined CI/CD pipelines, reducing post-release defects by 25%.",
    ],
    outcome:
      "Security-consistent platform serving ~1,200 concurrent users, with observability standards adopted by 3 cross-functional teams.",
    tech: [
      "TypeScript",
      "Angular",
      ".NET Core",
      "Node.js",
      "MongoDB",
      "Redis",
      "SignalR",
      "Ocelot",
      "CI/CD",
    ],
  },
  {
    company: "RexEMR Pvt. Ltd",
    role: "Software Engineer — UI/UX",
    period: "Jun 2021 — Jul 2022",
    location: "Puducherry, India",
    summary:
      "Led end-to-end development of an EMR SaaS platform for clinicians — from reusable component library to payment-critical insurance workflows.",
    impact: [
      "Built the platform's responsive UI and reusable component library from the ground up (Angular/TypeScript + Node.js REST APIs).",
      "Shipped insurance billing submission and claims-validation workflows — payment-critical flows — increasing on-time submissions by 50% and cutting rejected claims by 20%.",
      "Streamlined patient profile and medication management UX, reducing task-completion time by 30%.",
      "Boosted patient portal adoption by 18% in six months by redesigning onboarding flows and adding contextual in-product help.",
      "Achieved an 85% automated test pass rate via component-level test suites, significantly reducing the production hotfix rate.",
    ],
    outcome:
      "A healthcare SaaS with dramatically fewer rejected insurance claims and measurably faster clinical workflows.",
    tech: ["TypeScript", "Angular", "Node.js", "Express.js", "PostgreSQL", "HTML", "CSS"],
  },
  {
    company: "Relevantz Technology Services",
    role: "Software Engineer",
    period: "Jun 2017 — Jun 2021",
    location: "Puducherry, India",
    summary:
      "Delivered features for a high-traffic bidding and EMI payments platform, and led a legacy AngularJS-to-Angular migration.",
    impact: [
      "Delivered features for a high-traffic bidding and EMI payments platform, increasing digital transactions by 35%.",
      "Migrated a legacy AngularJS codebase to modern Angular/TypeScript, improving maintainability and runtime performance by 40%.",
      "Built a reusable TypeScript component library and shared UI patterns, reducing cross-project rework by 30%.",
      "Implemented lazy loading and component memoization, keeping page load under 1.2s as traffic doubled.",
      "Championed unit testing and a structured peer-review culture, lowering production defects by 25%.",
    ],
    outcome:
      "A payments platform that stayed under 1.2s page load while traffic doubled — with 35% more digital transactions.",
    tech: ["TypeScript", "Angular", "AngularJS", "JavaScript", "Node.js", "SQL", "PostgreSQL"],
  },
];

export const education = [
  {
    degree: "Master of Business Management",
    school: "Pondicherry University, Puducherry, India",
    year: "2026",
  },
  {
    degree: "B.Tech — Information Technology",
    school: "Pondicherry University, Puducherry, India",
    year: "2017",
  },
];
