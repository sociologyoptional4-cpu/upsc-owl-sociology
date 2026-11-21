# Work log (append-only, newest at bottom)

## 2026-11-21 14:20 · Claude Code (Opus 5.5) · Phase 0
- Did: planned the site (docs/01-06); scaffolded Next.js 16 + Payload 3.94 on local Postgres; design tokens, fonts, Lenis+GSAP, theme toggle; 8 collections + SiteSettings; 6 blocks with Zod AI schemas; roles + ai-bot draft guard; revalidate-on-publish; seed; 33 unit tests.
- Files: whole repo (initial)
- Checks: tsc ✓ eslint ✓ (3 warnings in template e2e tests) unit ✓ build ✓
- Verified: API-created nested page went from 404 to 200 with no redeploy; reserved slug rejected; bot publish saved as draft; bot cannot create users (403).
- Contract changes: n/a
- Open issues: nothing committed yet (Task 01 Part A commits it). The admin-UI create flow was not clicked through end to end (the API path is verified).

## 2026-11-21 14:40 · Claude Code (Opus 5.5) · Coordination
- Did: set up the multi-agent memory (AGENTS.md, docs/memory/*), wrote Task 01, Task 02 and Task R1 prompts, assigned models.
- Files: AGENTS.md, CLAUDE.md, .agent/rules/, docs/memory/*, docs/tasks/*


## 2026-11-21 14:38 · Codex (GPT-6) · Task 01
- Did: committed Phase 0, added Payload view-model readers, route stubs, revalidation, navigation/featured thinker globals, seed data, sitemap/robots, JSON-LD and tests.
- Files: src/lib/data/**, src/app/(frontend)/**, src/app/sitemap.ts, src/app/robots.ts, src/components/views/**, src/components/layout/Header.tsx, src/globals/**, src/collections/**, src/hooks/payload/revalidate.ts, src/seed/**, src/payload-types.ts, src/lib/seo/**, tests/**, docs/tasks/README.md, docs/memory/{STATE,LOG}.md
- Read-first: ✓ (AGENTS, project docs, memory, task prompt)
- Checks: tsc ✓ eslint ✓ (3 pre-existing E2E warnings) unit ✓ integration ✓ build ✓
- Verified: seed completed; sample routes returned 200 and mismatched date/slug returned 404 on the production server.
- Contract changes: none
- Open issues / proposals: none

## 2026-11-21 14:45 · Antigravity (Gemini 3.8 Flash) · Task 02
- Did: verified licenses on Wikimedia Commons for all 17 thinkers; downloaded originals and performed local background removal with rembg (u2net_human_seg); cropped to 4:5 head-and-shoulders with ~5.4% head padding; exported large (1000x1250, q82, <180KB) and small (400x500, q78, <45KB) transparent WebP portraits; rendered contact sheet on #F6F1E7 and #0F1626; created manifest src/data/thinker-assets.json and updated ASSETS.md; added cc-by-sa option to Media.ts; created idempotent portrait attachment script scripts/assets/attach-portraits.ts and executed it twice with 0 duplicates.
- Files: .gitignore, ASSETS.md, src/collections/Media.ts, src/payload-types.ts, src/data/thinker-assets.json, scripts/assets/attach-portraits.ts, public/assets/thinkers/**, docs/tasks/README.md, docs/memory/STATE.md, docs/memory/LOG.md
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory)
- Checks: tsc ✓ eslint ✓ (3 pre-existing E2E warnings) unit ✓ (38/38) build ✓
- Contract changes: none
- Open issues / proposals: none (10 thinkers marked "none" due to absence of verifiable PD/CC license or usable standalone photo on Commons; ready for designer's typographic cards).
