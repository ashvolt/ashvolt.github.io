import { SectionReveal } from "./section-reveal";

interface Props {
  title: string;
  lead: string;
  eyebrow?: string;
}

export function PageHeader({ title, lead, eyebrow }: Props) {
  return (
    <SectionReveal>
      <header className="mb-12">
        {eyebrow && (
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-500">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
      </header>
    </SectionReveal>
  );
}
