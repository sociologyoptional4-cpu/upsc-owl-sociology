# Task S1: SEO growth layer (audit → GSC → site health → content → calendar)

**Kaun:** Codex 6.0 (ya Antigravity Claude Opus 5.5) · **Kab:** blog (07) prod smoke ke baad · **Spec:** [docs/08-seo-growth.md](../08-seo-growth.md)
**Tumhara kaam pehle:** `docs/08` §10 ka GSC setup (service account). Iske bina bhi M0-M3 chal jayenge; M2 sirf setup screen dikhayega.

````text
ROLE: Senior Next.js 16 + Payload 3 engineer, technical SEO engineer and security reviewer on an EXISTING project. Do not rebuild anything that exists.

READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/07-blog-platform.md (skim; read 07 closely) → docs/08-seo-growth.md (FULL SPEC: follow it) → docs/memory/STATE.md, docs/memory/DECISIONS.md (D11-D17), the last ~60 lines of docs/memory/LOG.md → this prompt. Do not write code before this.

CLAIM: add "Task S1" under "Active" in docs/memory/STATE.md with: src/collections/{SearchMetrics,Redirects,PipelineRuns,Posts,Pages}.ts, src/lib/seo/**, src/endpoints/seo.ts, src/components/admin/seo/**, src/components/admin/SeoControlCenter.tsx, src/components/admin/seo-control-center.module.css, the dynamic route page.tsx files you add resolveRedirect() to, src/payload.config.ts, src/payload-types.ts, src/app/(payload)/admin/importMap.js, src/migrations/**, package.json, .github/workflows/seo-daily.yml, tests/**, docs/audits/S1-audit.md. If another Active task claims any of these, stop and report.
UI exception (D17): you may create src/components/admin/seo/** and edit SeoControlCenter.tsx + seo-control-center.module.css. Reuse their classes and Payload theme variables (light + dark). Do not touch other src/components/**, src/styles/** or public page design.

HARD RULES
- Extend, don't duplicate: /admin/seo, src/lib/seo/audit.ts, getBlogGaps(), pipeline-runs ledger, payload jobs, blog-jobs runner already exist. Reuse them.
- Lean scope (D14): NO GA4, backlink tracking, keyword-research tools, newsletter, drag-and-drop calendar, outbound link crawling, paid APIs, or "demo"/sample analytics. If data is missing, show an honest empty/setup state.
- Accuracy: health score is our checklist, not a Google score. IndexNow ≠ Google. llms.txt ≠ ranking. JSON-LD = eligibility, not a guarantee. GSC hides anonymised queries. Say this in UI copy where relevant.
- AI rules stay: organizer only fills EMPTY fields; beautifier keeps the 97% word + number/year/proper-name gate; nothing auto-publishes; no bulk publish.
- Additive migrations only (no drops/renames). Generate with `npx payload migrate:create <name>` and read it before committing.
- Secrets: GSC_SERVICE_ACCOUNT_JSON only in env, parsed server-side, never logged, never returned. Never print or commit .env. Never touch production resources or deploy to production without the user's explicit OK; Vercel preview deploys are fine.
- TypeScript strict, no any, Zod at every boundary, functions < 50 lines, files < 400 lines, user-facing copy in Hinglish (Roman), code/comments in English.
- Long commands (> 30-60 s: build, e2e, backfill) run in the background; check results when they finish.
- Commit per milestone: `<type>: <description>`; stage only your files (never git add -A; leave the existing uncommitted .gitignore change alone).

MILESTONES (in order; each ends green: npx tsc --noEmit, npx eslint src tests, npm run test:unit, and npm run build for M1+)

M0 · Audit (no feature code). Run the baseline checks first and record real results. Then write docs/audits/S1-audit.md:
  1. Audit matrix for every row in docs/08 §1 plus: access control, draft privacy, preview auth, scheduled publish, job idempotency/retries, Telegram duplicate guard (telegramPostedAt), AI rate limits + cost ledger, rich-text rendering (no dangerouslySetInnerHTML on user content), media upload validation, CRON_SECRET handling, migrations state, error reporting. Columns: feature · files · implemented? · tested? · deployed? · security concern · action.
  2. Verify on production read-only with curl (no login): /blog, /blog/rss.xml, /sitemap.xml, /robots.txt, /llms.txt, one OG image, JSON-LD presence; whether blog-jobs.yml has ever run (gh run list).
  3. List verified defects with severity. Fix only CRITICAL/HIGH defects in this milestone, each with a failing test first. Commit: `fix: s1 audit hardening`.

M1 · Redirects + robots controls. Redirects collection, resolveRedirect() in dynamic routes before notFound(), auto-301 on published slug/path change (no chains, no loops, max 1 hop), posts.seo.nofollow. Tests: slug rename → 301; second rename rewrites the first redirect; loop rejected; javascript:/data: targets rejected; anonymous cannot read redirects. Commit: `feat: redirects manager and nofollow`.

M2 · Search Console. SearchMetrics collection (unique key, indexes, 16-month retention), src/lib/seo/gsc/{client,sync,schema}.ts, POST /api/seo/gsc/sync (CRON_SECRET or admin), .github/workflows/seo-daily.yml (cron "0 21 * * *" = 02:30 IST, workflow_dispatch, skip safely without secrets), pipeline-runs kind gsc. Window/backfill/pagination/backoff exactly as docs/08 §4. Tests with mocked fetch: parse rows, pagination across startRow, 429 retry then success, quota error logged, re-sync = 0 duplicates, missing env → "not configured" result without throwing, secret never appears in errors. Commit: `feat: search console sync`.

M3 · Site health + Search tab. src/lib/seo/health/{meta,alt,links,orphans,redirects}.ts (pure functions + one loader), extend /admin/seo with tabs (Overview, Search, Site health) as in docs/08 §5; relabel the score. Search tab: 7/28/90-day range, device filter, top pages, top queries, paginated tables, "Data till <date>", setup checklist when unconfigured. Keyboard-accessible tabs (role=tablist, arrow keys), loading skeletons, empty states, mobile layout. Tests: each analyser with fixtures (missing alt, duplicate description, broken internal link, orphan, redirect chain/loop). Commit: `feat: seo site health and search analytics`.

M4 · Content intelligence + Calendar. Content tab (coverage per paper/unit, PYQ-heavy topics without posts via getBlogGaps, topic clusters, internal-link suggestions, freshness queue, query opportunities position 8-20 & impressions ≥ 50; GSC-based items hidden with a note when no data). Calendar tab: month/week list from posts + payload-jobs schedulePublish, IST display, status/author filters, editor deep links, warnings (same-hour collision, scheduled without SEO, scheduled in the past). No drag-and-drop. Tests: coverage counts from fixtures use real PYQ relations only; IST day-boundary (e.g. 2026-11-21T19:00Z shows on 22 Nov IST); freshness rule. Commit: `feat: content intelligence and editorial calendar`.

M5 · Verify + hand-off. One Playwright smoke: admin login (local test admin from SEED_ADMIN_* or a temporary user you delete afterwards) → /admin/seo each tab renders; anonymous /api/search-metrics and draft posts are denied. Push the branch, open a Vercel preview, smoke it read-only. Do NOT promote to production; ask the user.

LAST: release the claim; mark S1 in docs/tasks/MASTER-PLAN.md; append your LOG.md entry (include "Read-first: ✓", every check with ✓/✗ honestly, contract changes, open issues).
FINAL REPLY to the user (Hinglish, short): changed files, features per milestone, tests run + real results, remaining limitations, env names needed, production readiness verdict, and the exact next step for the user (e.g. GSC setup or approve production deploy).
````
