import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock } from "lucide-react";
import { getAllPosts, getPost } from "@/lib/blog";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [profile.fullName],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: profile.fullName, url: profile.siteUrl },
    url: `${profile.siteUrl}/blog/${slug}/`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-400"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", { dateStyle: "long" })}
          </time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden />
            {post.readingMinutes} min read
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{post.description}</p>
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:tracking-tight prose-a:text-accent-400">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
