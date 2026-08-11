"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, FolderGit2, User, FlaskConical, Home, Mail, Clock, Wrench, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";

interface Item {
  title: string;
  hint: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  keywords?: string;
}

const iconCls = "h-4 w-4 shrink-0 text-muted";

const pages: Item[] = [
  { title: "Home", hint: "Page", href: "/", icon: <Home className={iconCls} aria-hidden /> },
  { title: "About", hint: "Page", href: "/about", icon: <User className={iconCls} aria-hidden /> },
  { title: "Experience", hint: "Page", href: "/experience", icon: <Briefcase className={iconCls} aria-hidden /> },
  { title: "Projects", hint: "Page", href: "/projects", icon: <FolderGit2 className={iconCls} aria-hidden /> },
  { title: "AI Lab", hint: "Page", href: "/ai-lab", icon: <FlaskConical className={iconCls} aria-hidden /> },
  { title: "Skills", hint: "Page", href: "/skills", icon: <Wrench className={iconCls} aria-hidden /> },
  { title: "Blog", hint: "Page", href: "/blog", icon: <FileText className={iconCls} aria-hidden /> },
  { title: "Now", hint: "Page", href: "/now", icon: <Clock className={iconCls} aria-hidden /> },
  { title: "Resume", hint: "Page", href: "/resume", icon: <FileText className={iconCls} aria-hidden /> },
  { title: "Contact", hint: "Page", href: "/contact", icon: <Mail className={iconCls} aria-hidden /> },
];

const projectItems: Item[] = projects.map((p) => ({
  title: p.name,
  hint: p.language ?? "Project",
  href: p.url ?? "/projects",
  external: Boolean(p.url),
  keywords: `${p.description} ${p.topics.join(" ")}`,
  icon: <FolderGit2 className={iconCls} aria-hidden />,
}));

const allItems = [...pages, ...projectItems];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((i) =>
      `${i.title} ${i.hint} ${i.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const select = useCallback(
    (item: Item) => {
      close();
      if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
      else router.push(item.href);
    },
    [close, router]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/50 p-4 pt-[15vh] backdrop-blur-sm"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-lg overflow-hidden rounded-2xl border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b px-4">
          <Search className="h-4 w-4 text-muted" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                e.preventDefault();
                select(results[active]);
              }
            }}
            placeholder="Search pages and projects…"
            aria-label="Search pages and projects"
            className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-muted"
          />
          <kbd className="rounded border px-1.5 py-0.5 font-mono text-[10px] text-muted">esc</kbd>
        </div>
        <ul ref={listRef} role="listbox" aria-label="Search results" className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-muted">No results</li>
          )}
          {results.map((item, i) => (
            <li key={`${item.title}-${item.href}`} role="option" aria-selected={i === active} data-index={i}>
              <button
                type="button"
                onClick={() => select(item)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  i === active ? "bg-card-hover text-foreground" : "text-muted"
                }`}
              >
                {item.icon}
                <span className="flex-1">{item.title}</span>
                <span className="text-xs text-muted">{item.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
