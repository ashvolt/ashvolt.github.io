import { Github, Linkedin, Mail, Rss } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Built with Next.js, deployed on
          GitHub Pages.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-accent-500"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-accent-500"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent-500"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <a href="/feed.xml" aria-label="RSS feed" className="transition-colors hover:text-accent-500">
            <Rss className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
