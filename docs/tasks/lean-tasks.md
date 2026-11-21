# Lean tasks (D14)

In prompts ka scope chhota hai, jaan-boojh ke. Agar koi agent extra cheez banana chahe (3D, Telegram, monitoring), to wo LOG mein proposal likhe, khud na banaye.

---

## Task 04-lite
**Smoke tests** · Codex 6.0 · Abhi chala sakte ho

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (skim) → docs/memory/STATE.md, docs/memory/DECISIONS.md (note D12-D14), the tail of docs/memory/LOG.md → this prompt. Do not write code before this.
CLAIM: add "Task 04-lite" under "Active" in docs/memory/STATE.md with: tests/e2e/**, playwright.config.ts, .github/workflows/ci.yml, package.json. Stop if claimed. Do NOT edit src/**; write any UI bug you find to docs/reviews/task04-ui-bugs.md.
LAST: release the claim, set the status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

Keep it small and fast (whole suite < 2 min locally, chromium only).
1. Playwright config: baseURL http://localhost:3000, webServer `npm run build && npm start` (reuseExistingServer locally), global setup runs `npm run seed`.
2. tests/e2e/smoke.e2e.spec.ts: each of /, /current-affairs, one issue, one article, /syllabus, /syllabus/paper-1, one topic, /thinkers, /thinkers/karl-marx, /about returns 200, shows an h1, and has no horizontal overflow at 375px. A wrong date+slug article URL returns 404.
3. tests/e2e/publish.e2e.spec.ts: log in via REST with SEED_ADMIN_* env, POST a page, its URL returns 200 with the heading, then delete it.
4. .github/workflows/ci.yml on push/PR: Postgres 16 service, generated PAYLOAD_SECRET, then tsc → eslint → unit → build → e2e. Upload the Playwright report on failure.
No visual regression, no Lighthouse CI, no multi-browser matrix (D14).
DONE WHEN: all green locally (counts in LOG); commit `test: smoke e2e and ci`.
````

---

## Task 13-lite
**PYQ collection + data for the PYQ bank** · Codex 6.0 · Task 14 ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (skim) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → data/pyq/pyq.json format (Task 14) → this prompt. Do not write code before this.
CLAIM: add "Task 13-lite" under "Active" in docs/memory/STATE.md with: src/collections/Pyqs.ts, src/lib/data/pyq.ts, src/lib/data/types.ts (append only), src/app/(frontend)/pyq/page.tsx, src/components/views/PyqBankView.tsx (stub only), scripts/pyq/import.ts, src/payload.config.ts, src/hooks/payload/revalidate.ts, src/app/sitemap.ts, tests/**. Stop if claimed.
LAST: release the claim, set the status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files. Run tsc, eslint, unit, build.

1. Collection `pyqs`: year, paper (P1|P2), section, qno, marks, wordLimit, question (textarea), topics (rel topics hasMany), thinkers (rel thinkers hasMany), drafts on. Unique (year, paper, qno). Admin/editor write; public reads published only.
2. scripts/pyq/import.ts: reads data/pyq/pyq.json → upserts published pyqs, resolving topic/thinker slugs (unknown slug → skip the link, report it). Idempotent; prints counts.
3. Append to src/lib/data/types.ts:
   PyqItem = { id: number; year: number; paper: PaperCode; qno: string; marks: number; question: string; topics: TopicChip[]; thinkers: ThinkerChip[] }
   PyqBankData = { items: PyqItem[]; total: number; page: number; totalPages: number; filters: { paper?: PaperCode; topic?: string; year?: number }; facets: { years: { year: number; count: number }[]; topics: { slug: string; title: string; count: number }[] } }
4. src/lib/data/pyq.ts: getPyqBank(params: { paper?; topic?; year?; page?; limit? (default 20, max 50) }): Promise<PyqBankData>; getTopicPyqs(topicSlug: string, limit = 10): Promise<PyqItem[]>. Both cache()'d, overrideAccess false, bounded queries, no N+1.
5. Route /pyq: Zod-validate searchParams, render <PyqBankView data={…} /> (stub = JSON <pre>; Claude designs it). Metadata + canonical. Add /pyq to the sitemap. Revalidate /pyq and the linked topic URLs when a pyq is published.
6. Tests: import idempotency, filter combinations, Zod params.
No search engine, concepts, MCQs or practice (D14).
DONE WHEN: /pyq returns 200 with real imported data and filters work; commit `feat: pyq bank data layer`.
````

---

## Task 16-lite
**Deploy to production (simple and safe)** · Codex 6.0 · U2 ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → docs/tasks/phase-5-launch.md (section U2: what the user set up) → this prompt. Do not write code before this.
CLAIM: add "Task 16-lite" under "Active" in docs/memory/STATE.md with: next.config.ts, src/payload.config.ts, src/lib/env.ts, src/migrations/**, src/seed/**, package.json, .env.example, docs/ops/**. Stop if claimed.
LAST: release the claim, set the status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.
The user already created the accounts and set every secret in Vercel and GitHub. Never print or commit secret values.

1. src/lib/env.ts: Zod-validate server env at startup with a clear error naming the missing var; payload.config uses it. .env.example lists every var with a one-line comment.
2. Database: Payload migrations for production (`payload migrate:create initial`, commit src/migrations; the Vercel build runs `payload migrate` before `next build`). Use the Supabase transaction-pooler URL.
3. Media: @payloadcms/storage-s3 for the media collection (Supabase Storage S3 endpoint); next.config images.remotePatterns for that host only. Thinker portraits in /public stay static.
4. Security headers in next.config: HSTS, X-Content-Type-Options, X-Frame-Options SAMEORIGIN, Referrer-Policy, Permissions-Policy. No nonce-CSP for now (D14); note it as a later improvement in docs/ops/runbook.md.
5. Seed must never run in production (guard with NODE_ENV + ALLOW_SEED). Give the user written steps to create the first real admin via /admin; don't create it yourself.
6. Deploy: push to the GitHub repo from U2, connect Vercel, run migrations, deploy a preview, smoke-test /, /current-affairs, /admin (login page), then promote to production. Set NEXT_PUBLIC_SERVER_URL.
7. docs/ops/runbook.md (short): deploy, rollback (Vercel instant rollback), pausing the pipeline (site-settings kill switch), domain DNS steps.
No Sentry, Upstash, analytics or backup workflows (D14). Supabase's own daily backups are enough for now; mention that in the runbook.
DONE WHEN: the production URL serves the site, admin login page loads, the pipeline can run against prod with DRY_RUN; commit `chore: production deploy`.
````

---

## Task RF
**Final review before launch** · Antigravity · Claude Sonnet 5.5 · Read-only

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the FULL docs/memory/LOG.md → this prompt.
READ-ONLY. Only writes: docs/reviews/RF-launch.md and your LOG.md entry (include "Read-first: ✓").

You are the one review gate before launch. Verify with evidence (commands run, responses seen). Report verified issues only.
1. Drafts never leak publicly (REST, GraphQL, preview URL without the secret, sitemap); the ai-bot key can't publish except under the autoPublish rule, can't create users, can't touch settings.
2. Ingest + review endpoints: auth, Zod validation, size/rate limits, unknown slugs rejected, duplicates skipped.
3. Pipeline: no secret in code/logs/workflow output; the spend cap is checked before each LLM call; one bad feed/item can't kill the run.
4. XSS: markdown→Lexical strips HTML and javascript: links; JSON-LD escaped; external links have rel="noopener noreferrer".
5. Production: security headers present (curl -I), seed disabled, admin works.
6. Run tsc, eslint, unit, e2e, build; report real results.
Write: verdict GO | GO WITH FIXES | NO-GO, then a table severity | file:line | problem | failure scenario | fix.
````
