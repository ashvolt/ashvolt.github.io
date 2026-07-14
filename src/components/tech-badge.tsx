export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-card-hover px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {label}
    </span>
  );
}
