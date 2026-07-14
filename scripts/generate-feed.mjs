/**
 * Generates out/feed.xml (RSS 2.0) from the MDX posts in src/content/blog.
 * Runs as the postbuild step, after `next build` produces the static export.
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const blogDir = join(root, "src", "content", "blog");
const outDir = join(root, "out");

const SITE = "https://ashvolt.github.io";
const AUTHOR = "Pragash M";

if (!existsSync(outDir)) {
  console.error("out/ not found — run `next build` first");
  process.exit(1);
}

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const posts = readdirSync(blogDir)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => {
    const { data } = matter(readFileSync(join(blogDir, f), "utf8"));
    return { slug: f.replace(/\.mdx$/, ""), ...data };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const items = posts
  .map(
    (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE}/blog/${p.slug}/</link>
      <guid>${SITE}/blog/${p.slug}/</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escape(p.description || "")}</description>
    </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${AUTHOR} — Blog</title>
    <link>${SITE}/blog/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Engineering notes on full-stack development, AI engineering, and system design.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

writeFileSync(join(outDir, "feed.xml"), rss);
console.log(`✓ feed.xml — ${posts.length} posts`);
