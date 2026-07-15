"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Command } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/now", label: "Now" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "glass border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent-500"
          aria-label="Pragash Mouttoucoumarassamy — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.jpg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 rounded-full ring-1 ring-accent-500/40"
          />
          <span className="hidden xl:inline">Pragash Mouttoucoumarassamy</span>
          <span className="xl:hidden">Pragash</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                isActive(l.href)
                  ? "text-accent-500 font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open command palette (Ctrl+K)"
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-foreground sm:flex"
          >
            <Command className="h-3.5 w-3.5" aria-hidden />
            <span>K</span>
          </button>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border p-2 text-muted hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-b px-4 pb-4 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm ${
                  isActive(l.href)
                    ? "text-accent-500 font-medium bg-card-hover"
                    : "text-muted hover:text-foreground hover:bg-card-hover"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
