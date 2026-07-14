/**
 * Fetches live GitHub + Credly data at build time and writes JSON snapshots
 * into src/data/. Runs in CI before `next build`; if any fetch fails the
 * committed snapshots are kept, so the build never breaks on network issues.
 *
 * Env:
 *   GITHUB_TOKEN — optional; raises GitHub API rate limits (auto-provided in Actions).
 */
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "..", "src", "data");

const GITHUB_USER = "ashvolt";
const CREDLY_USER = "pragash-mouttoucoumarassamy";

const headers = { "User-Agent": `${GITHUB_USER}-portfolio-build` };
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function getJson(url, extraHeaders = {}) {
  const res = await fetch(url, { headers: { ...headers, ...extraHeaders } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

async function fetchGitHub() {
  const [user, repos] = await Promise.all([
    getJson(`https://api.github.com/users/${GITHUB_USER}`),
    getJson(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`),
  ]);

  const own = repos.filter((r) => !r.fork);

  // Aggregate language share by repo size
  const langBytes = {};
  await Promise.all(
    own.map(async (r) => {
      try {
        const langs = await getJson(r.languages_url);
        for (const [lang, bytes] of Object.entries(langs)) {
          langBytes[lang] = (langBytes[lang] || 0) + bytes;
        }
      } catch {
        /* skip repos whose language breakdown fails */
      }
    })
  );
  const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0) || 1;
  const languages = Object.entries(langBytes)
    .map(([name, bytes]) => ({ name, percent: Math.round((bytes / totalBytes) * 100) }))
    .filter((l) => l.percent >= 1)
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 8);

  const data = {
    fetchedAt: new Date().toISOString(),
    user: {
      login: user.login,
      name: user.name,
      followers: user.followers,
      publicRepos: user.public_repos,
    },
    languages,
    repos: own
      .sort((a, b) => b.stargazers_count - a.stargazers_count || (b.pushed_at > a.pushed_at ? 1 : -1))
      .slice(0, 12)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
        updatedAt: r.pushed_at,
      })),
  };

  writeFileSync(join(dataDir, "github.json"), JSON.stringify(data, null, 2) + "\n");
  console.log(`✓ github.json — ${data.repos.length} repos, ${languages.length} languages`);
}

async function fetchCredly() {
  // Credly serves a public JSON representation of a user's badge wall.
  const json = await getJson(`https://www.credly.com/users/${CREDLY_USER}/badges.json`, {
    Accept: "application/json",
  });
  const list = Array.isArray(json) ? json : json.data || [];

  const badges = list.map((b) => {
    const t = b.badge_template || {};
    return {
      id: b.id,
      name: t.name || b.name,
      issuer: t.issuer?.entities?.[0]?.entity?.name || b.issuer?.name || "",
      issuedAt: b.issued_at_date || b.issued_at || null,
      imageUrl: b.image_url || t.image_url || null,
      url: `https://www.credly.com/badges/${b.id}`,
      description: t.description || "",
    };
  });

  const data = {
    fetchedAt: new Date().toISOString(),
    profileUrl: `https://www.credly.com/users/${CREDLY_USER}`,
    badges,
  };

  writeFileSync(join(dataDir, "credly.json"), JSON.stringify(data, null, 2) + "\n");
  console.log(`✓ credly.json — ${badges.length} badges`);
}

function keepSnapshot(file, err) {
  const snapshot = JSON.parse(readFileSync(join(dataDir, file), "utf8"));
  const when = snapshot.fetchedAt || "initial commit";
  console.warn(`⚠ ${file}: fetch failed (${err.message}); keeping snapshot from ${when}`);
}

const results = await Promise.allSettled([fetchGitHub(), fetchCredly()]);
if (results[0].status === "rejected") keepSnapshot("github.json", results[0].reason);
if (results[1].status === "rejected") keepSnapshot("credly.json", results[1].reason);
