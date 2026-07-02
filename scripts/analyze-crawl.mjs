#!/usr/bin/env node
// @ts-check
/**
 * analyze-crawl.mjs — Googlebot crawl analysis for torquemade.com
 * -----------------------------------------------------------------
 * Data source: Google Search Console API (URL Inspection + Sitemaps).
 *
 * WHY GSC and not Vercel logs:
 *   Vercel's public API only exposes BUILD logs. Runtime HTTP request logs
 *   (user-agent, path, status, response time) are ephemeral and not queryable
 *   historically without a Log Drain. Google Search Console is the authoritative
 *   source for Googlebot crawl behaviour.
 *
 * WHAT THIS TOOL REPORTS (all real GSC signals):
 *   - Per-URL last crawl time + crawled-as (Googlebot mobile/desktop)
 *   - Index coverage state (indexed / crawled-not-indexed / excluded)
 *   - Page fetch state  -> surfaces 404s / soft-404s / fetch errors
 *   - robots.txt + canonical status
 *   - Sitemap health (submitted vs indexed, errors, warnings, last downloaded)
 *   - Crawl recency ranking (oldest / never-crawled pages)
 *
 * WHAT GSC's API CANNOT PROVIDE (dashboard-only, documented honestly):
 *   - Raw per-request response times  -> see Crawl Stats report in GSC UI
 *   - Aggregate status-code totals    -> see Crawl Stats report in GSC UI
 *   The "slowest pages" step is therefore reframed as a crawl-recency ranking.
 *
 * AUTH (service account, zero external deps):
 *   1. Create a GCP service account, download its JSON key.
 *   2. In Search Console -> Settings -> Users and permissions, add the service
 *      account email (…@…iam.gserviceaccount.com) as a Full/Restricted user.
 *   3. Provide the key via one of:
 *        GSC_SA_KEY=/abs/path/key.json   (path)
 *        GSC_SA_KEY_JSON='{...}'          (inline JSON)
 *        GOOGLE_APPLICATION_CREDENTIALS=/abs/path/key.json
 *
 * USAGE:
 *   node scripts/analyze-crawl.mjs
 *   node scripts/analyze-crawl.mjs --site https://www.torquemade.com --limit 50
 *   GSC_SITE_URL="sc-domain:torquemade.com" node scripts/analyze-crawl.mjs
 *
 * OUTPUT: scripts/crawl-analysis-report.md
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { createSign } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------- config -----

/** Parse `--flag value` style args. */
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        out[key] = next;
        i++;
      } else {
        out[key] = true;
      }
    }
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));

const CONFIG = {
  // Property URL as registered in Search Console. URL-prefix ("https://www…")
  // or domain property ("sc-domain:torquemade.com").
  siteUrl: args.site || process.env.GSC_SITE_URL || 'https://www.torquemade.com',
  // Sitemap to enumerate crawlable URLs from (recursive: handles index + urlset).
  sitemap: args.sitemap || process.env.GSC_SITEMAP || 'https://www.torquemade.com/sitemap.xml',
  // Max URLs to inspect. URL Inspection API limit: 2000/day, 600/min per property.
  limit: Number(args.limit || process.env.GSC_LIMIT || 50),
  // Delay between inspection calls (ms) to stay well under the per-minute cap.
  delayMs: Number(args.delay || process.env.GSC_DELAY_MS || 250),
  outFile: args.out || join(__dirname, 'crawl-analysis-report.md'),
};

const TOKEN_URI = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const INSPECT_URL = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';

// ------------------------------------------------------------------ auth -----

/** Locate and parse the service-account key from env, or return null. */
function loadServiceAccount() {
  const inline = process.env.GSC_SA_KEY_JSON;
  if (inline) {
    try {
      return JSON.parse(inline);
    } catch {
      throw new Error('GSC_SA_KEY_JSON is set but is not valid JSON.');
    }
  }
  const path = process.env.GSC_SA_KEY || process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (path) {
    return JSON.parse(readFileSync(path, 'utf8'));
  }
  return null;
}

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/** Mint an OAuth2 access token from a service-account key (RS256 JWT grant). */
async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: SCOPE,
      aud: TOKEN_URI,
      iat: now,
      exp: now + 3600,
    })
  );
  const signingInput = `${header}.${claim}`;
  const signer = createSign('RSA-SHA256');
  signer.update(signingInput);
  signer.end();
  const signature = signer.sign(sa.private_key).toString('base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const jwt = `${signingInput}.${signature}`;

  const res = await fetch(TOKEN_URI, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`Token exchange failed (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  return json.access_token;
}

// -------------------------------------------------------------- sitemap ------

/** Extract <loc> values from a sitemap XML string. */
function extractLocs(xml) {
  const locs = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) locs.push(m[1]);
  return locs;
}

/**
 * Recursively resolve a sitemap URL into page URLs.
 * Handles both <sitemapindex> (children) and <urlset> (pages).
 */
async function collectUrls(sitemapUrl, seen = new Set(), pages = []) {
  if (seen.has(sitemapUrl)) return pages;
  seen.add(sitemapUrl);
  let xml;
  try {
    const res = await fetch(sitemapUrl, { headers: { 'user-agent': 'torquemade-crawl-analyzer' } });
    if (!res.ok) return pages;
    xml = await res.text();
  } catch {
    return pages;
  }
  const isIndex = /<sitemapindex[\s>]/i.test(xml);
  const locs = extractLocs(xml);
  if (isIndex) {
    for (const child of locs) await collectUrls(child, seen, pages);
  } else {
    for (const loc of locs) if (!pages.includes(loc)) pages.push(loc);
  }
  return pages;
}

// ----------------------------------------------------------- inspection ------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Inspect a single URL via the GSC URL Inspection API. */
async function inspectUrl(token, inspectionUrl) {
  const res = await fetch(INSPECT_URL, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ inspectionUrl, siteUrl: CONFIG.siteUrl }),
  });
  if (!res.ok) {
    return { inspectionUrl, error: `HTTP ${res.status}: ${(await res.text()).slice(0, 200)}` };
  }
  const json = await res.json();
  const idx = json.inspectionResult?.indexStatusResult || {};
  return {
    inspectionUrl,
    verdict: idx.verdict || 'UNKNOWN',
    coverageState: idx.coverageState || 'unknown',
    robotsTxtState: idx.robotsTxtState || 'unknown',
    indexingState: idx.indexingState || 'unknown',
    pageFetchState: idx.pageFetchState || 'unknown',
    lastCrawlTime: idx.lastCrawlTime || null,
    crawledAs: idx.crawledAs || 'unknown',
    googleCanonical: idx.googleCanonical || null,
    userCanonical: idx.userCanonical || null,
  };
}

/** Fetch sitemap health from the GSC Sitemaps API. */
async function getSitemaps(token) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    CONFIG.siteUrl
  )}/sitemaps`;
  const res = await fetch(url, { headers: { authorization: `Bearer ${token}` } });
  if (!res.ok) return [];
  const json = await res.json();
  return json.sitemap || [];
}

// -------------------------------------------------------------- report -------

function pct(n, total) {
  if (!total) return '0%';
  return `${Math.round((n / total) * 100)}%`;
}

function countBy(rows, key) {
  const map = new Map();
  for (const r of rows) {
    const v = r[key] || 'unknown';
    map.set(v, (map.get(v) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function buildReport({ results, sitemaps, errors }) {
  const now = new Date().toISOString();
  const ok = results.filter((r) => !r.error);
  const total = ok.length;
  const indexed = ok.filter((r) => r.verdict === 'PASS').length;

  // Fetch problems: anything not SUCCESSFUL (404, soft-404, server error, redirect, blocked…)
  const fetchProblems = ok
    .filter((r) => r.pageFetchState && r.pageFetchState !== 'SUCCESSFUL')
    .sort((a, b) => a.pageFetchState.localeCompare(b.pageFetchState));

  // Crawl recency: oldest / never crawled first (the API analogue of "slowest to attend").
  const byRecency = [...ok].sort((a, b) => {
    const ta = a.lastCrawlTime ? Date.parse(a.lastCrawlTime) : 0;
    const tb = b.lastCrawlTime ? Date.parse(b.lastCrawlTime) : 0;
    return ta - tb;
  });

  const lines = [];
  lines.push('# Googlebot Crawl Analysis — torquemade.com');
  lines.push('');
  lines.push(`_Generated: ${now}_`);
  lines.push(`_Source: Google Search Console API (URL Inspection + Sitemaps)_`);
  lines.push(`_Property: \`${CONFIG.siteUrl}\`_`);
  lines.push('');

  // ---- Summary ----
  lines.push('## Summary');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('| --- | --- |');
  lines.push(`| URLs inspected | ${total} |`);
  lines.push(`| Indexed (verdict PASS) | ${indexed} (${pct(indexed, total)}) |`);
  lines.push(`| Not indexed | ${total - indexed} (${pct(total - indexed, total)}) |`);
  lines.push(`| Fetch problems | ${fetchProblems.length} |`);
  lines.push(`| Inspection errors | ${errors.length} |`);
  const crawledCount = ok.filter((r) => r.lastCrawlTime).length;
  lines.push(`| With a recorded crawl | ${crawledCount} (${pct(crawledCount, total)}) |`);
  lines.push('');

  // ---- Coverage breakdown ----
  lines.push('## Index coverage breakdown');
  lines.push('');
  lines.push('| Coverage state | Count |');
  lines.push('| --- | --- |');
  for (const [state, count] of countBy(ok, 'coverageState')) {
    lines.push(`| ${state} | ${count} |`);
  }
  lines.push('');

  // ---- Crawled-as (Googlebot type) ----
  lines.push('## Crawl pattern analysis');
  lines.push('');
  lines.push('**Crawled as (Googlebot type):**');
  lines.push('');
  lines.push('| Crawled as | Count |');
  lines.push('| --- | --- |');
  for (const [as, count] of countBy(ok, 'crawledAs')) {
    lines.push(`| ${as} | ${count} |`);
  }
  lines.push('');
  lines.push('**robots.txt state:**');
  lines.push('');
  lines.push('| robots.txt state | Count |');
  lines.push('| --- | --- |');
  for (const [st, count] of countBy(ok, 'robotsTxtState')) {
    lines.push(`| ${st} | ${count} |`);
  }
  lines.push('');

  // ---- Top fetch problems (the 404 analogue) ----
  lines.push('## Top fetch problems (404s / errors / blocked)');
  lines.push('');
  if (fetchProblems.length === 0) {
    lines.push('_None — every inspected URL returned pageFetchState=SUCCESSFUL._');
  } else {
    lines.push('| URL | Fetch state | Coverage | Last crawl |');
    lines.push('| --- | --- | --- | --- |');
    for (const r of fetchProblems.slice(0, 10)) {
      lines.push(
        `| ${r.inspectionUrl} | ${r.pageFetchState} | ${r.coverageState} | ${r.lastCrawlTime || 'never'} |`
      );
    }
  }
  lines.push('');

  // ---- Crawl recency ranking (reframed "slowest pages") ----
  lines.push('## Top 10 stalest pages (oldest / never crawled)');
  lines.push('');
  lines.push(
    '> GSC\'s API does not expose per-request response times, so raw "slowest pages" '
  );
  lines.push(
    '> is unavailable (see Crawl Stats in the GSC dashboard). This ranks pages by crawl '
  );
  lines.push('> recency instead — the pages Googlebot has attended to least recently.');
  lines.push('');
  lines.push('| URL | Last crawl | Coverage |');
  lines.push('| --- | --- | --- |');
  for (const r of byRecency.slice(0, 10)) {
    lines.push(`| ${r.inspectionUrl} | ${r.lastCrawlTime || 'never'} | ${r.coverageState} |`);
  }
  lines.push('');

  // ---- Sitemap health ----
  lines.push('## Sitemap health');
  lines.push('');
  if (!sitemaps.length) {
    lines.push('_No sitemaps returned by the Sitemaps API (none submitted, or no access)._');
  } else {
    lines.push('| Sitemap | Type | Submitted | Indexed | Errors | Warnings | Last downloaded |');
    lines.push('| --- | --- | --- | --- | --- | --- | --- |');
    for (const s of sitemaps) {
      const contents = (s.contents || [])[0] || {};
      lines.push(
        `| ${s.path} | ${s.isSitemapsIndex ? 'index' : contents.type || 'web'} | ${
          contents.submitted || '—'
        } | ${contents.indexed || '—'} | ${s.errors || 0} | ${s.warnings || 0} | ${
          s.lastDownloaded || 'never'
        } |`
      );
    }
  }
  lines.push('');

  // ---- Errors appendix ----
  if (errors.length) {
    lines.push('## Inspection errors');
    lines.push('');
    for (const e of errors.slice(0, 20)) {
      lines.push(`- \`${e.inspectionUrl}\` — ${e.error}`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('**Not available via GSC API (dashboard-only):** raw response times, ');
  lines.push('aggregate status-code totals, crawl-request volume over time, host-load stats. ');
  lines.push('For those, open Search Console → Settings → Crawl stats.');
  lines.push('');

  return lines.join('\n');
}

/** Written when credentials are missing, so the deliverable is never empty. */
function buildSetupStub() {
  return `# Googlebot Crawl Analysis — torquemade.com

_Generated: ${new Date().toISOString()}_

## ⚠️ No Search Console credentials found

This report requires Google Search Console API access. No service-account key was
found in the environment, so no live crawl data could be fetched.

### One-time setup

1. **Create a service account** in Google Cloud Console and download its JSON key.
2. **Enable** the "Search Console API" for that project.
3. In **Search Console → Settings → Users and permissions**, add the service
   account email (\`…@….iam.gserviceaccount.com\`) as a user on the
   \`${CONFIG.siteUrl}\` property.
4. Point the script at the key and re-run:

   \`\`\`bash
   GSC_SA_KEY=/absolute/path/to/key.json node scripts/analyze-crawl.mjs
   \`\`\`

Alternatively set \`GSC_SA_KEY_JSON\` (inline JSON) or the standard
\`GOOGLE_APPLICATION_CREDENTIALS\` env var.

_No data was fetched, so no metrics are shown. Re-run after setup._
`;
}

// -------------------------------------------------------------- main ---------

async function main() {
  console.log('▶ Googlebot crawl analysis (Google Search Console)');
  console.log(`  property: ${CONFIG.siteUrl}`);
  console.log(`  sitemap:  ${CONFIG.sitemap}`);
  console.log(`  limit:    ${CONFIG.limit} URLs`);

  let sa;
  try {
    sa = loadServiceAccount();
  } catch (err) {
    console.error(`✖ ${err.message}`);
    process.exitCode = 1;
    return;
  }

  if (!sa) {
    console.warn('⚠ No GSC service-account key found — writing setup instructions instead.');
    writeFileSync(CONFIG.outFile, buildSetupStub());
    console.log(`  wrote ${CONFIG.outFile}`);
    return;
  }

  console.log('▶ Authenticating…');
  const token = await getAccessToken(sa);

  console.log('▶ Enumerating URLs from sitemap…');
  const urls = await collectUrls(CONFIG.sitemap);
  console.log(`  found ${urls.length} URLs`);
  const target = urls.slice(0, CONFIG.limit);
  if (urls.length > CONFIG.limit) {
    console.log(`  inspecting first ${CONFIG.limit} (raise with --limit)`);
  }

  console.log('▶ Fetching sitemap health…');
  const sitemaps = await getSitemaps(token);

  console.log('▶ Inspecting URLs (respecting rate limits)…');
  const results = [];
  const errors = [];
  for (let i = 0; i < target.length; i++) {
    const url = target[i];
    const r = await inspectUrl(token, url);
    if (r.error) {
      errors.push(r);
      process.stdout.write('!');
    } else {
      results.push(r);
      process.stdout.write('.');
    }
    if (i < target.length - 1) await sleep(CONFIG.delayMs);
  }
  process.stdout.write('\n');

  console.log('▶ Building report…');
  const md = buildReport({ results, sitemaps, errors });
  writeFileSync(CONFIG.outFile, md);
  console.log(`✔ Report written to ${CONFIG.outFile}`);
  console.log(
    `  ${results.length} inspected, ${errors.length} errors, ${sitemaps.length} sitemaps`
  );
}

main().catch((err) => {
  console.error(`✖ ${err.stack || err.message}`);
  process.exitCode = 1;
});
