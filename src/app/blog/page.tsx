import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionReveal } from "@/components/section-reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes on full-stack development, AI engineering, micro frontends, and system design.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Blog"
        title="Engineering notes"
        lead="Lessons from production systems and AI experiments — written to be useful, not to rank."
      />

      <ul className="space-y-4">
        {posts.map((post, i) => (
          <SectionReveal key={post.slug} delay={i * 0.05}>
            <li>
              <Link
                href={`/blog/${post.slug}/`}
                className="group block rounded-2xl border bg-card p-6 transition-colors hover:border-accent-500/40"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", { dateStyle: "medium" })}
                  </time>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden />
                    {post.readingMinutes} min read
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent-400">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border bg-card-hover px-2.5 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          </SectionReveal>
        ))}
      </ul>
    </div>
  );
}
