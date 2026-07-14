/* eslint-disable @next/next/no-img-element */
import { Award, ArrowUpRight } from "lucide-react";
import credlyData from "@/data/credly.json";
import { profile } from "@/data/profile";

interface Badge {
  id: string;
  name: string;
  issuer: string;
  issuedAt: string | null;
  imageUrl: string | null;
  url: string;
  description?: string;
}

export function Certifications() {
  const badges = credlyData.badges as Badge[];

  return (
    <section aria-labelledby="certifications-heading">
      <div className="mb-6 flex items-center gap-2">
        <Award className="h-5 w-5 text-accent-500" aria-hidden />
        <h2 id="certifications-heading" className="text-2xl font-semibold tracking-tight">
          Certifications
        </h2>
      </div>

      {badges.length === 0 ? (
        <p className="rounded-2xl border bg-card p-6 text-sm leading-relaxed text-muted">
          Verified digital credentials are synced automatically from Credly on each deploy.{" "}
          <a
            href={profile.links.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-400 hover:underline"
          >
            View the live badge wall on Credly →
          </a>
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b) => (
            <li key={b.id}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-accent-500/40"
              >
                {b.imageUrl ? (
                  <img
                    src={b.imageUrl}
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-lg object-contain"
                  />
                ) : (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border bg-card-hover">
                    <Award className="h-6 w-6 text-accent-500" aria-hidden />
                  </span>
                )}
                <span className="flex min-w-0 flex-col">
                  <span className="flex items-start gap-1 text-sm font-semibold leading-snug">
                    {b.name}
                    <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0 text-muted" aria-hidden />
                  </span>
                  {b.issuer && <span className="mt-1 text-xs text-muted">{b.issuer}</span>}
                  {b.issuedAt && (
                    <span className="mt-0.5 font-mono text-[11px] text-muted">
                      Issued {new Date(b.issuedAt).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
