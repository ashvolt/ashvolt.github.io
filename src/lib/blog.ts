import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const blogDir = join(process.cwd(), "src", "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPost(slug: string): Post {
  const raw = readFileSync(join(blogDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags ?? [],
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { content: _content, ...meta } = getPost(f.replace(/\.mdx$/, ""));
      return meta;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
