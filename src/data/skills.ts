export type Proficiency = "Expert" | "Advanced" | "Proficient" | "Growing";

export interface Skill {
  name: string;
  level: Proficiency;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "C#", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Python", level: "Growing" },
      { name: "q (kdb+)", level: "Growing" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Angular", level: "Expert" },
      { name: "React", level: "Advanced" },
      { name: "Micro Frontends", level: "Advanced" },
      { name: "Component Architecture", level: "Expert" },
      { name: "HTML5 / CSS3 / SCSS", level: "Expert" },
      { name: "Accessibility (WCAG)", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: ".NET Core", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST API Design", level: "Expert" },
      { name: "SignalR (real-time)", level: "Advanced" },
    ],
  },
  {
    category: "AI Engineering",
    skills: [
      { name: "RAG Pipelines", level: "Growing" },
      { name: "AI Agents & Tool Calling", level: "Growing" },
      { name: "Vector Databases (ChromaDB)", level: "Growing" },
      { name: "Local LLMs (Ollama)", level: "Growing" },
      { name: "AI-Assisted Development", level: "Advanced" },
      { name: "Prompt Engineering", level: "Proficient" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Cassandra", level: "Proficient" },
      { name: "Firestore", level: "Proficient" },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "Microservices", level: "Advanced" },
      { name: "API Gateway (Ocelot)", level: "Advanced" },
      { name: "IAM / SSO / RBAC", level: "Advanced" },
      { name: "System Design", level: "Advanced" },
      { name: "Spec-Driven Development", level: "Advanced" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "GitHub Actions / CI-CD", level: "Advanced" },
      { name: "Git", level: "Expert" },
      { name: "Observability & Logging", level: "Advanced" },
      { name: "Firebase", level: "Proficient" },
    ],
  },
  {
    category: "Testing & Practices",
    skills: [
      { name: "TDD / Unit Testing", level: "Advanced" },
      { name: "Code Review Culture", level: "Expert" },
      { name: "Agile / Scrum", level: "Expert" },
      { name: "Async Remote Collaboration", level: "Expert" },
    ],
  },
];

export const proficiencyWidth: Record<Proficiency, string> = {
  Expert: "100%",
  Advanced: "80%",
  Proficient: "60%",
  Growing: "40%",
};
