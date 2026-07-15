import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `Portfolio of ${profile.fullName} — ${profile.headline}`,
    template: `%s — ${profile.fullName}`,
  },
  description: profile.summary,
  keywords: [
    "Senior Software Engineer",
    "AI Engineer",
    "Full-Stack Engineer",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "LLM",
    "RAG",
    profile.fullName,
  ],
  authors: [{ name: profile.fullName, url: profile.siteUrl }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    siteName: `Portfolio of ${profile.fullName}`,
    title: `Portfolio of ${profile.fullName} — ${profile.headline}`,
    description: profile.summary,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.fullName} — ${profile.headline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Portfolio of ${profile.fullName} — ${profile.headline}`,
    description: profile.summary,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "96x96" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
};

/** Applies the stored (or default dark) theme before first paint to avoid a flash. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d)}catch(e){document.documentElement.classList.add("dark")}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
