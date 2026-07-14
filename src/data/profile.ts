export const profile = {
  name: "Pragash M",
  fullName: "Pragash Mouttoucoumarassamy",
  username: "ashvolt",
  headline: "Senior Software Engineer",
  tagline:
    "Building AI-powered products with full-stack engineering, LLMs, agents, and modern web technologies.",
  summary:
    "Full-stack engineer with 9+ years delivering scalable web platforms, SaaS products, and microservice APIs — now building at the intersection of product engineering and applied AI.",
  location: "Puducherry, India",
  email: "pragashvenkat@gmail.com",
  siteUrl: "https://ashvolt.github.io",
  links: {
    github: "https://github.com/ashvolt",
    linkedin: "https://www.linkedin.com/in/pragash-mouttoucoumarassamy/",
    credly: "https://www.credly.com/users/pragash-mouttoucoumarassamy",
  },
  availability: ["Open to Remote", "Open to UAE", "Open to AI roles"],
  roles: [
    "Full-Stack Engineer",
    "AI Engineer",
    "Product Builder",
    "System Design Enthusiast",
  ],
  stats: [
    { label: "Years of experience", value: 9, suffix: "+" },
    { label: "Concurrent users served", value: 1200, suffix: "+" },
    { label: "Engineering teams enabled", value: 3, suffix: "" },
    { label: "Faster initial render shipped", value: 35, suffix: "%" },
  ],
};

export type Profile = typeof profile;
