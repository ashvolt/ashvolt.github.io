import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/ai-lab",
    "/skills",
    "/blog",
    "/now",
    "/resume",
    "/contact",
  ].map((path) => ({
    url: `${profile.siteUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${profile.siteUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
