# ashvolt.github.io

Personal portfolio of **Pragash M** — Senior Full-Stack Engineer & AI Engineer.
Live at **[ashvolt.github.io](https://ashvolt.github.io)**.

Built with Next.js 15 (static export), TypeScript, Tailwind CSS v4, Framer Motion, and MDX —
deployed to GitHub Pages via GitHub Actions.

## Architecture

```
src/
├── app/                  # App Router pages (all statically exported)
│   ├── page.tsx          # Home — hero, stats, featured projects, GitHub activity
│   ├── about/            # Story + engineering principles
│   ├── experience/       # Career timeline
│   ├── projects/         # Open-source + professional work
│   ├── ai-lab/           # AI experiments (RAG, agents, quant)
│   ├── skills/           # Skill matrix + Credly certifications
│   ├── blog/             # MDX blog ([slug] statically generated)
│   ├── now/              # /now page
│   ├── resume/           # HTML resume + request-by-email
│   ├── contact/          # Contact channels + availability
│   └── sitemap.ts        # sitemap.xml at build time
├── components/           # Navbar, command palette (⌘K), timeline, cards, …
├── content/blog/*.mdx    # Blog posts (frontmatter: title, description, date, tags)
├── data/                 # ← ALL site content lives here
│   ├── profile.ts        # Name, headline, links, availability, stats
│   ├── experience.ts     # Jobs + education
│   ├── projects.ts       # Types + workProjects; cards come from projects.json
│   ├── projects.json     # Auto-generated project cards (GitHub topics — see below)
│   ├── skills.ts         # Skill categories + proficiency
│   ├── github.json       # Auto-refreshed snapshot (GitHub API)
│   └── credly.json       # Auto-refreshed snapshot (Credly badges)
scripts/
├── fetch-github.mjs      # Pulls GitHub + Credly data at build time
└── generate-feed.mjs     # RSS feed (out/feed.xml) after build
```

## How deployment works

1. Push to `main`, the **daily 03:00 UTC cron**, a `repository_dispatch` from a project
   repo, or manual dispatch triggers `.github/workflows/deploy.yml`.
2. The workflow fetches **live GitHub repos/languages** and **Credly badges**, writing them
   into `src/data/*.json`. If either API is unreachable the committed snapshots are used —
   the build never fails on network issues.
3. `next build` produces a fully static site in `out/`, the RSS feed is generated, and
   `actions/deploy-pages` publishes it.

**One-time setup:** in the repo go to *Settings → Pages → Build and deployment → Source* and
select **GitHub Actions**.

## Project cards sync from GitHub — no code edits needed

The cards on `/projects`, the home page, and `/ai-lab` are generated from the GitHub API
at every deploy (`scripts/fetch-github.mjs` → `src/data/projects.json`). Which repos
appear is controlled by **GitHub topics** on each repo (*repo page → About ⚙ → Topics*):

| Topic | Effect |
|---|---|
| `portfolio` | Repo appears on the projects page |
| `portfolio-featured` | Featured on the home page, listed first — *and* on the projects page |
| `ai-lab` | Listed on the AI Lab page — *and* on the projects page |

Any one of these is enough to list a repo, so the narrower topics work on their
own: `portfolio-featured` alone still shows the repo everywhere a featured
project belongs. A repo carrying none of them never appears.

Everything on the card comes from GitHub: the repo **description**, remaining topics
(rendered as badges), primary language, stars, last-push date, and the repo's
**Website** field (rendered as a "Live demo" link). Private repos are included when
`PORTFOLIO_TOKEN` is configured and render with a "Private" lock instead of a repo link.

To show a new project: add the `portfolio` topic and write a good repo description. To
hide one: remove the topic. The site catches up on the next deploy (nightly at the
latest). If the topic query ever returns nothing (e.g. topics not set up), the committed
`projects.json` snapshot keeps rendering — the site never goes blank.

### Instant rebuilds on push (optional)

Copy [`docs/notify-portfolio.yml`](docs/notify-portfolio.yml) into a project repo as
`.github/workflows/notify-portfolio.yml` and add a `PORTFOLIO_DISPATCH_TOKEN` secret
(fine-grained PAT scoped to this repo, *Contents: Read and write*). Every push to that
repo then triggers a site rebuild within minutes instead of waiting for the nightly cron.

### Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | Provided automatically by GitHub Actions | Raises GitHub API rate limits for the data fetch. No setup needed. |
| `PORTFOLIO_TOKEN` | Actions secret in this repo (optional) | Fine-grained PAT, **all repos, Metadata: read-only** — lets the fetch see private repos so they appear as cards. Without it, public repos only. |
| `PORTFOLIO_DISPATCH_TOKEN` | Actions secret in each *project* repo (optional) | Fine-grained PAT scoped to this repo, **Contents: read/write** — lets project repos trigger instant rebuilds via `repository_dispatch`. |

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to out/
npm run fetch-data   # refresh github.json / credly.json (optional)
```

## Customization guide

- **Facts about you** (name, links, availability, stats): `src/data/profile.ts`
- **Jobs / education**: `src/data/experience.ts`
- **Projects**: managed entirely with GitHub topics (see above); proprietary work
  projects (no repo) live in `workProjects` in `src/data/projects.ts`
- **Skills + proficiency levels**: `src/data/skills.ts`
- **Blog**: add `src/content/blog/my-post.mdx` with `title`, `description`, `date`, `tags`
  frontmatter — the listing, RSS feed, and sitemap pick it up automatically
- **Now page**: `src/app/now/page.tsx` (update the "Last updated" date in the lead)
- **Accent color / theme**: design tokens in `src/app/globals.css`
- **OG image**: `public/og.png` (1200×630)

## Design notes

- Dark mode by default with a persistent toggle (no flash on load)
- Electric blue accent, Inter + JetBrains Mono (self-hosted, no external requests)
- Command palette on `⌘K` / `Ctrl+K`
- All animations respect `prefers-reduced-motion`
- SEO: per-page metadata, Open Graph, JSON-LD (`Person`, `BlogPosting`), sitemap, robots.txt, RSS

## Future ideas

PWA/offline support, AI-powered search, contact form (needs a third-party backend on GitHub
Pages), analytics (GoatCounter/Plausible are Pages-friendly), resume download tracking.
