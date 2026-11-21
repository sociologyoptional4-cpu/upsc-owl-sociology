# Phase 5: Launch

> ⛔ **Lean (D14):** sirf **U2** yahan se lo. Task 16 ki jagah [16-lite](lean-tasks.md#task-16-lite), aur 17/R4 ki jagah [RF](lean-tasks.md#task-rf). 16, 17 aur R4 cut hain.

Order: **U2** → **16** → **17 + R4 (parallel)** → **18 (Claude)** → 🚀

---

## U2 — Tumhara kaam: accounts
Ye tum khud karoge, kyunki inme signup, payment ya terms accept karna hota hai. Agents ye nahi karenge.
1. **GitHub:** private repo banao (jaise `aum-sociology`). Local repo ko push karna Task 16 karega, bas repo ka URL batana.
2. **Supabase:** supabase.com → New project (region: Mumbai `ap-south-1`) → strong DB password apne password manager mein save karo. Settings → Database → "Connection string (Transaction pooler)" copy karo.
3. **Vercel:** vercel.com → GitHub se login → repo import karo, abhi deploy mat karo.
4. **Storage:** Supabase Storage mein ek public bucket `media` banao, ya Cloudflare R2 bucket. S3 access keys generate karo.
5. **Domain** (jab naam final ho): kharido, aur DNS Vercel pe point karna Task 16 bata dega.
6. Saari values **Vercel → Project → Settings → Environment Variables** aur **GitHub → Settings → Secrets → Actions** mein daalo: `DATABASE_URL`, `PAYLOAD_SECRET` (naya, `openssl rand -hex 32`), `S3_*`, `PREVIEW_SECRET`, aur Phase 2 wali keys. Chat mein koi secret mat bhejna.
7. Mujhe bolna "U2 done".

---

## Task 16
**Production infrastructure + first deploy**
**Kaun:** Codex · 6.0 · **Kab:** U2 ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/01-architecture.md §6 closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt. Do not write code before this.
CLAIM: add "Task 16" under "Active" in docs/memory/STATE.md with: next.config.ts, src/payload.config.ts, src/lib/env.ts, src/middleware.ts (or proxy.ts per Next 16), src/endpoints/health.ts, src/migrations/**, package.json, .env.example, .github/workflows/**, vercel.json, docs/ops/**. Stop if claimed.
LAST: release the claim, set Task 16's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.
The user already created the accounts and set every secret in Vercel and GitHub. You never need to see secret values; never print or commit them.

1. Env: src/lib/env.ts validates all server env vars with Zod at startup (clear error naming the missing var); payload.config uses it. .env.example lists every var with a one-line comment.
2. Database: switch from dev `push` to Payload migrations for production (`payload migrate:create initial`, commit src/migrations; build runs `payload migrate` before `next build` on Vercel). Use the Supabase transaction-pooler URL with a sensible pool size for serverless.
3. Media: @payloadcms/storage-s3 for the media collection (Supabase Storage S3 endpoint or R2), with public URLs via env; next.config images.remotePatterns for that host only.
4. Security headers (next.config headers()): HSTS, X-Content-Type-Options, X-Frame-Options DENY (allow the admin live-preview iframe from same origin only), Referrer-Policy, Permissions-Policy. CSP with a per-request nonce for scripts (Next 16 proxy/middleware) — allow 'self', the media host, fonts via next/font (self-hosted), and the analytics host. Verify the Payload admin still works under the CSP (test login, editing, upload). Document every allowed origin in docs/ops/security.md.
5. Rate limits: login (5/min/IP), /api/ingest/* (per key), /api/search (30/min/IP), public REST GETs (60/min/IP) — Upstash Redis if UPSTASH_* env set, else an in-memory fallback that logs a warning.
6. Health + monitoring: GET /api/health (DB ping, returns version + commit sha); uptime check instructions (UptimeRobot free) in docs/ops/runbook.md; error tracking with Sentry only if SENTRY_DSN is set (no-op otherwise).
7. Analytics: Umami (cloud free tier or self-host) script loaded with `next/script` strategy "afterInteractive", only if NEXT_PUBLIC_UMAMI_ID is set; respect Do Not Track.
8. Backups: Supabase daily backups are on (document it); plus a weekly GitHub Action `pg_dump` → encrypted artifact (retention 30 days) using a DB_BACKUP_URL secret.
9. Deploy: push the repo to the GitHub URL from STATE.md/LOG (the user provided it in U2), connect Vercel, run migrations, deploy preview → smoke test (/, /about, /admin login page, /api/health) → promote to production. Set NEXT_PUBLIC_SERVER_URL. Create the first real admin user via the /admin "create first user" screen INSTRUCTIONS for the user (don't create it yourself) and delete the local seed admin from prod (seed must never run in prod: guard the seed script with NODE_ENV/ALLOW_SEED).
10. docs/ops/runbook.md: deploy, rollback (Vercel instant rollback + DB restore), rotating keys, pausing the pipeline (site-settings kill switch), and the domain DNS steps for the user.

DONE WHEN: production URL serves the site, /api/health is ok, securityheaders.com grade ≥ A (record it), admin works under CSP, the daily pipeline runs against prod via workflow_dispatch in DRY_RUN; all checks pass; commit `chore: production infrastructure, security headers and deploy`.
````

---

## Task 17
**Content + link QA crawl**
**Kaun:** Antigravity · Gemini 3.8 Flash · **Kab:** 16 ke baad (R4 ke saath parallel) · Read-only report

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/02-design-system.md and docs/03-pages.md) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt.
READ-ONLY for src/**. Only writes: docs/reviews/task17-content-qa.md, scripts/qa/** (your crawler), your LOG.md entry (include "Read-first: ✓").

Crawl the production URL (from STATE.md/LOG) starting at / and /sitemap.xml, same-origin only, max 2 requests/second.
Report, with URL + exact text/element:
1. Broken links (4xx/5xx), redirect chains > 1 hop, external links missing rel="noopener noreferrer" when target=_blank.
2. Images without meaningful alt text; images > 300 KB; missing width/height.
3. Pages missing <title>, meta description, canonical, og:image, or JSON-LD where docs/03-pages.md expects it.
4. Hinglish copy problems: typos, Devanagari slipped into Hinglish text, English-only UI strings that should be Hinglish, inconsistent terms (e.g. "Current Affairs" vs "current affairs"), placeholder text like "[Sample]", "lorem", "TODO".
5. Empty states: lists or sections rendering with zero items and no helpful message.
6. Every AI-generated article: has a source link, has the AI badge, has no quote > 15 words.
Group by severity (blocker / should-fix / nice-to-have). End with counts.
````

---

## Task R4
**Final security + launch-readiness audit**
**Kaun:** Antigravity · Claude Opus 5.5 (launch se pehle, mehenga model yahan worth it hai) · Read-only

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the FULL docs/memory/LOG.md → all docs/reviews/* → docs/ops/* → this prompt.
READ-ONLY. Only writes: docs/reviews/R4-launch-audit.md and your LOG.md entry (include "Read-first: ✓").

You are the last gate before public launch. Verify, with evidence (commands run, responses seen):
1. Every CRITICAL/HIGH finding from R1, R2, R3 is fixed (cite the fixing commit) or explicitly accepted in DECISIONS.md.
2. AuthN/Z: roles enforced server-side on every collection, global and custom endpoint; drafts never readable publicly (try REST, GraphQL, preview URL without secret, search API, sitemap); the ai-bot key can't escalate.
3. OWASP top 10 pass over endpoints; CSP actually enforced in production (check response headers); no secrets in the client bundle (grep the built .next/static for key patterns).
4. Data: backups exist and a restore was tested (or document the gap); seed is disabled in prod.
5. Cost: AI daily cap, OpenAI/DeepSeek billing limits documented in the runbook; the kill switch works.
6. Legal/content: ASSETS.md complete for everything under public/; AI disclosure in the footer; corrections policy page exists; source links on all AI notes.
7. Ops: health check, uptime monitor, rollback documented and plausible.
Verdict: GO | GO WITH CONDITIONS | NO-GO, plus a findings table (severity | where | problem | evidence | fix) and a launch checklist the user can tick.
````

---

## Task 18: Launch design QA (Claude, main)
17 aur R4 ke findings mein se design wale fix karunga. OG image design, har device pe final QA, launch polish. Uske baad 🚀
