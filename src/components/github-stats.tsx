import { ArrowUpRight, Star } from "lucide-react";
import githubData from "@/data/github.json";
import { profile } from "@/data/profile";
import { langColors, fallbackLangColor } from "@/lib/lang-colors";

export function GitHubStats() {
  const { languages, repos, fetchedAt } = githubData;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
          Language distribution
        </h3>
        <div
          className="flex h-2.5 w-full overflow-hidden rounded-full border"
          role="img"
          aria-label={`Languages: ${languages.map((l) => `${l.name} ${l.percent}%`).join(", ")}`}
        >
          {languages.map((l) => (
            <div
              key={l.name}
              style={{ width: `${l.percent}%`, background: langColors[l.name] ?? fallbackLangColor }}
              title={`${l.name} ${l.percent}%`}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
          {languages.map((l) => (
            <span key={l.name} className="inline-flex items-center gap-1.5">
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ background: langColors[l.name] ?? fallbackLangColor }}
              />
              {l.name} {l.percent}%
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
          Recent repositories
        </h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {repos.slice(0, 6).map((r) => (
            <li key={r.name}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border bg-card p-4 transition-colors hover:border-accent-500/40"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-medium">{r.name}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
                {r.description && (
                  <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {r.description}
                  </span>
                )}
                <span className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted">
                  {r.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full"
                        style={{ background: langColors[r.language] ?? fallbackLangColor }}
                      />
                      {r.language}
                    </span>
                  )}
                  {r.stars > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" aria-hidden /> {r.stars}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-muted">
        {fetchedAt
          ? `Fetched live from the GitHub API on ${new Date(fetchedAt).toLocaleDateString("en-US", { dateStyle: "medium" })} — refreshed weekly at deploy time.`
          : "Snapshot data — refreshed automatically from the GitHub API on each deploy."}{" "}
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-400 hover:underline"
        >
          Full profile →
        </a>
      </p>
    </div>
  );
}
