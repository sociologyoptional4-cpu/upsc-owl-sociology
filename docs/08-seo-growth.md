# 08 · SEO growth layer (add-on to 07 blog + `/admin/seo`)

**Goal:** turn the existing blog + SEO Control Center into a measurable system: real Google Search Console data, site-health checks that matter, content intelligence from our own DB (syllabus, PYQs, posts), redirects so slug changes never lose ranking, and a simple editorial calendar.

**Rule (D14 lean):** extend what exists. No second dashboard, no new editor, no GA4, no backlink tools, no paid APIs, no keyword-research product. Every number shown comes from a real source (DB, GSC API, Vercel). No fabricated or "demo" analytics.

---

## 1. What already exists (verify, don't rebuild)

| Area | Where | State (2026-11-21) |
|---|---|---|
| Blog collections, editor, blocks, AI organizer/beautifier, Telegram, IndexNow, OG, RSS, llms.txt | `docs/07-blog-platform.md`, `src/collections/{Posts,BlogTaxonomies}.ts`, `src/lib/blog/**` | built by Antigravity, reviewed by Codex; prod deploy smoke pending |
| SEO Control Center `/admin/seo` | `src/components/admin/SeoControlCenter.tsx`, `src/lib/seo/{audit,audit-data}.ts`, `tests/unit/seo-audit.test.ts` | live (`bea1997`): site checks, per-post checks, tool links |
| Site JSON-LD (Organization + WebSite) | `src/lib/seo/jsonld.ts`, `src/app/(frontend)/layout.tsx` | live |
| Sitemap / robots | `src/app/{sitemap,robots}.ts` | live |
| Content gaps (PYQ-heavy topics without posts) | `getBlogGaps()` in `src/lib/data/blog.ts`, dashboard widget | live |
| Jobs runner | Payload `jobs` (`src/lib/blog/jobs.ts`) + `.github/workflows/blog-jobs.yml` (*/15, `CRON_SECRET`) | built; prod run unverified |
| Cost/run ledger | `pipeline-runs` collection (`kind` select) | live |
| Preview | `src/app/api/preview/route.ts` (`PREVIEW_SECRET`, timing-safe) | live |

## 2. System view

```
                     Google Search Console API (official, read-only scope)
                                   │  service account (env, never in DB)
 seo-daily.yml (GitHub, 1×/day) ──►│ POST /api/seo/gsc/sync  (CRON_SECRET)
                                   ▼
                     search-metrics  (Payload collection, admin-only)
                                   │
 Payload DB (posts, topics, units, pyqs, pages, media, redirects) ──► src/lib/seo/** (pure analysers)
                                   │
                                   ▼
          /admin/seo  ── tabs: Overview · Search · Site health · Content · Calendar
                                   │
  redirects collection ──► resolveRedirect(path) in dynamic routes before notFound() ──► 301/302
```

## 3. Data model (additive only)

### `search-metrics` (new collection, `src/collections/SearchMetrics.ts`)
One row = one GSC row for one day. Two grains so the table stays small:

| Field | Notes |
|---|---|
| `date` | date (UTC day as GSC reports it) |
| `grain` | select `page` \| `query` |
| `page` | text, path only (`/blog/x`), normalised |
| `query` | text, null for `grain=page` |
| `device` | select desktop/mobile/tablet/all (`all` for query grain) |
| `country` | text ISO-3, `all` unless breakdown asked |
| `clicks`, `impressions` | number |
| `ctr`, `position` | number (as returned; never recomputed into fake precision) |
| `key` | text, **unique**, sha256 of `date|grain|page|query|device|country` → idempotent upsert |

Indexes: `key` unique; `(date)`, `(page)`, `(grain,date)`. Access: read/create/update/delete = admin only; hidden from nav (`admin.hidden`). Retention: delete rows older than 16 months in the sync job (GSC's own limit).
Query grain stores **top 1,000 rows/day** (GSC already hides anonymised queries; the UI says so).

### `redirects` (new collection, `src/collections/Redirects.ts`)
`from` (path, unique, starts with `/`), `to` (path or https URL), `type` 301\|302, `hits` (number, optional), `note`. Admin+editor. Runtime: `src/lib/seo/redirects.ts#resolveRedirect(path)` (cached, revalidated on change) is called by `blog/[slug]`, `[...slug]`, CA, topic and thinker routes right before `notFound()`, so normal pages pay no DB cost. Hook on `posts` and `pages`: when a **published** doc's slug/path changes, create a 301 from old to new (skip if exists; never chain more than one hop — rewrite older redirects to point at the new target).

### Additive field edits
- `pipeline-runs.kind`: add `gsc`, `seo-audit`.
- `posts`: nothing new (scheduling already in Payload versions/jobs). `seo.nofollow` checkbox (optional, adds `robots: { follow:false }`).

No credentials table: the GSC key lives only in env (`GSC_SERVICE_ACCOUNT_JSON`, base64), which avoids storing encrypted secrets in Postgres.

## 4. Google Search Console integration

- **Auth:** service account + `https://www.googleapis.com/auth/webmasters.readonly`. The owner adds the service-account email as a user on the GSC property. No OAuth consent screen, no tokens in DB.
- **Client:** `src/lib/seo/gsc/client.ts` uses `google-auth-library` (JWT) + `fetch` to `searchanalytics.query`. Small, typed, Zod-validated response.
- **Sync** `src/lib/seo/gsc/sync.ts`:
  - window = last 5 days ending today−2 (GSC is delayed ~2-3 days; re-pulling recent days fixes late data). First run backfills 90 days.
  - per day: page grain (`dimensions: [date, page, device]`) + query grain (`[date, query, page]`, `rowLimit 1000`).
  - pagination with `startRow` until fewer than `rowLimit`; exponential backoff on 429/5xx (3 tries); stop and log on quota errors.
  - upsert by `key`; write one `pipeline-runs` row (`kind: gsc`, rows, days, status, error).
- **Endpoint:** `POST /api/seo/gsc/sync` (CRON_SECRET bearer, timing-safe) and an admin "Abhi sync karo" button (admin role). Rate limit 1/min.
- **Not configured** → Search tab shows a setup checklist (env names + steps). It never shows sample numbers.
- **Delayed data** → every chart shows "Data till <last date>" from the newest row.

## 5. `/admin/seo` tabs (extend the existing view)

| Tab | Shows | Source |
|---|---|---|
| Overview | existing checklist score (relabel: "Site health checklist, Google ranking score nahi"), 28-day clicks/impressions/CTR/avg position vs previous 28 days, top issues | audit + search-metrics |
| Search | date range (7/28/90 days), device filter, top pages, top queries, query→page table, sortable, paginated (25) | search-metrics |
| Site health | missing meta, duplicate titles/descriptions, missing alt (media + figure blocks + upload nodes), canonical mismatch, broken internal links, orphan posts, redirect problems (loops, chains, 404 targets), noindex list | DB scan (`src/lib/seo/health/*.ts`) |
| Content | syllabus coverage per paper/unit (topics with notes / posts), PYQ-heavy topics without posts (existing `getBlogGaps`), topic clusters (topic → posts + notes + PYQ count), internal-link suggestions (topic pages ↔ posts sharing a topic), freshness queue (published > 180 days and clicks down ≥ 30% vs previous period), query opportunities (position 8-20 with impressions ≥ 50) | DB + search-metrics |
| Calendar | month/week list of scheduled (from `payload-jobs` schedulePublish), published (`publishedAt`) and drafts; filters status/author; deep links to the editor; warnings (two posts same hour, scheduled post missing SEO, scheduled in past) | posts + payload-jobs |

Rescheduling happens in the post editor's existing Schedule UI (deep link). **No drag-and-drop** in v1 (D14); revisit if the owner asks.
Timezone: store UTC; display `Asia/Kolkata`, label "IST" everywhere.

Broken-link check is **internal only** (DB route set: post slugs, topic/unit/paper hrefs, thinker slugs, page paths, CA hrefs, redirects). No outbound crawling.

## 6. Accuracy rules for UI + docs
- IndexNow notifies Bing, Yandex, Seznam, Naver, not Google. Google uses the sitemap + GSC.
- `llms.txt` is a courtesy file for AI crawlers, not a ranking signal.
- JSON-LD makes a page eligible for rich results, it doesn't guarantee them.
- Health score = our checklist only.
- GSC hides some queries (anonymised), so query totals < page totals; the UI says this.

## 7. Security
- All `/api/seo/**`: admin (sync, settings) or admin+editor (read); Zod on input; CRON routes timing-safe bearer.
- `search-metrics` and `redirects` never readable by the public API (`access.read` = staff).
- Service-account JSON parsed only server-side; never logged, never sent to the client; error messages redact it.
- Redirect `to` must be a site path or `https://` URL; reject `javascript:`/`data:`; no open redirect from query params.
- Draft privacy regression tests: public `/api/posts?draft=true` returns no drafts for anonymous users.

## 8. Ownership
- Codex: collections, migration, GSC client/sync, endpoints, analysers (`src/lib/seo/**`), redirects runtime, workflow, tests, and the admin tab components under `src/components/admin/seo/**` built with the existing `seo-control-center.module.css` patterns (D17).
- Claude: visual review/polish of the new tabs after Codex finishes; public-site design unchanged.

## 9. Env (names only)
`GSC_SITE_URL` (e.g. `sc-domain:example.com` or `https://upsc-owl-sociology.vercel.app/`), `GSC_SERVICE_ACCOUNT_JSON` (base64), existing `CRON_SECRET`, `SITE_URL`, `INDEXNOW_KEY`, `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`.

## 10. Owner's one-time GSC setup (Hinglish)
1. Search Console mein property banao (Domain property best; ya URL-prefix `https://upsc-owl-sociology.vercel.app/`). Verify karo (HTML tag → `GOOGLE_SITE_VERIFICATION`).
2. Sitemap submit: `/sitemap.xml`.
3. Google Cloud Console → naya project → "Google Search Console API" enable → Service account banao → JSON key download.
4. Search Console → Settings → Users and permissions → service-account email ko **Restricted** user add karo.
5. JSON ko base64 karke Vercel env `GSC_SERVICE_ACCOUNT_JSON` mein daalo, aur GitHub secret bhi (workflow ke liye nahi chahiye agar sync endpoint call hota hai; sirf `CRON_SECRET` + `SITE_URL`).

## 11. Acceptance
1. Without GSC env: Search tab shows the setup checklist, no numbers; nothing crashes.
2. With GSC env: sync writes rows, re-running the same window creates 0 duplicates; `pipeline-runs` has a `gsc` row; charts show "Data till".
3. Changing a published post slug creates one 301; old URL returns 301 → new; no chains after a second rename.
4. Site health lists a seeded missing-alt image, a duplicate description, a broken internal link and an orphan post in tests.
5. Calendar shows a scheduled post in IST in the right day cell.
6. Anonymous users can't read drafts, `search-metrics` or `redirects` via REST/GraphQL.
7. Existing blog, CA, notes, review queue and `/admin/seo` checks keep working; tsc, eslint, unit, build green.
