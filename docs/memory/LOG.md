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

## 2026-11-21 15:30 · Claude Code (Opus 5.5) · Task 03 (Phase 1 UI + motion)
- Did: replaced all 10 stub views with the real "Living Journal" design. Home: issue masthead, floating hero (duotone thinker + CA cards), paper-filtered feed, syllabus bento, thinker spotlight (portrait breaks out of the frame), GSAP-pinned "how it works", Telegram CTA. CA hub (URL filters, pager keeps filters, recent-issues rail), newspaper-style daily issue, article (date stamp, sources, AI badge, sticky syllabus aside, prev/next, JSON-LD), syllabus/paper/unit with coverage dots, topic (sticky in-page nav, notes + live CA), thinkers wall (CSS 3D tilt + float) and thinker detail.
- Motion: Reveal (IntersectionObserver, transform/opacity only), TiltCard, float-soft, pinned GSAP (desktop + no reduced motion only, lazy-imported). Duotone SVG filters (light/dark), monogram fallback for thinkers without a licensed photo.
- Files: src/components/** (ui, cards, motion, thinkers, home, syllabus, ca, views), src/styles/global.css, src/app/(frontend)/layout.tsx (DuotoneDefs + noscript reveal fallback). Outside my area: next.config.ts got `/assets/**` in images.localPatterns (needed for portraits).
- Read-first: ✓
- Checks: tsc ✓ eslint ✓ unit ✓ (38) build ✓. Browser: 1440 + 375 checked, no horizontal overflow at 375, dark mode ok.
- Contract changes: none
- Open issues: not committed yet. Visual regression/a11y automation = Task 04. In dev, editing files while a page streams can give a one-off HMR "module factory not available" 500; it's dev-only and the production build is clean.


## 2026-11-21 15:45 · Codex (GPT-6) · Provider memory update
- Did: recorded OpenAI + DeepSeek as the AUM Sociology content AI providers and removed Anthropic runtime/API setup from forward-looking architecture and pipeline plans.
- Files: docs/memory/{STATE,DECISIONS,LOG}.md, docs/{README,01-architecture,05-automation-pipeline}.md, docs/tasks/{MASTER-PLAN,phase-2-automation,phase-5-launch}.md
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, user instruction)
- Checks: provider-reference search ✓
- Contract changes: none
- Open issues / proposals: historical Claude Code designer/agent mentions remain role attributions, not content-pipeline provider settings.

## 2026-11-21 16:10 · Claude Code (Opus 5.5) · Restyle to the sociocurrents-like look (D12)
- Did: retheme to a white grid "notebook": tokens (white/black, red emphasis, yellow CTA gradient, pastels), Poppins replaces Fraunces, B/W duotone. Boxed nav + yellow "Telegram join" CTA, black skewed section labels, thumbnail-style CA cards (dark cover generated from our data + thinker portrait in a red ring + grey info bar + red paper pill + "Padho →"), bold hero with red highlight, ThinkerBanter speech bubbles (our own jokes), "Sociology optional, simplified…" pastel tiles (replaced the GSAP pinned section), black footer.
- Not copied: sociocurrents' logo, cartoon GIF, thumbnails or text.
- Files: src/styles/{tokens,global}.css, src/app/(frontend)/layout.tsx (font), src/components/** (Header, Footer, CaCard, HomeHero, ThinkerBanter, HowItWorks, SectionHeading, DuotoneDefs, HomeView), src/blocks/cta/Component.tsx.
- Read-first: ✓
- Checks: tsc ✓ eslint ✓ build ✓ (see below). Browser 1440 checked.
- Contract changes: none. docs/02-design-system.md still describes the old palette; D12 is the source of truth until it is rewritten.

## 2026-11-21 16:40 · Claude Code (Opus 5.5) · Inner pages in D12 style
- Did: shared PageHeader (black skewed label + bold title with red highlight); CA hub, daily issue, article (cover thumbnail beside the headline, red paper pill, bordered "Syllabus link" box), syllabus (boxed paper switch), paper (black banner), unit (bordered topic cards + "Padho →"), topic (bordered aside boxes), thinkers wall (yellow circle behind portraits), thinker page (yellow circle, pastel key-idea tiles).
- Files: src/components/ui/PageHeader.tsx, src/components/views/*, src/components/cards/{CaCard,ThinkerTile}.tsx, src/components/syllabus/UnitList.tsx
- Read-first: ✓
- Checks: tsc ✓ eslint ✓ build ✓; browser 1440 + 375 (no overflow), all inner routes 200.
- Open issues: br-ambedkar.webp keeps a background rectangle → new Task 02b (Gemini Flash).

## 2026-11-21 16:50 · Claude Code (Opus 5.5) · Brand rename (D13)
- Did: "AUM Sociology" → "UPSC OWL Sociology" in the header logo (UPSC OWL + SOCIOLOGY), footer, metadata titles, card badge (OWL), admin title suffix, the SiteSettings default, seed text, and all docs except this historical log. Existing DB rows (About page + site_settings) updated in place. Fixed "1 stories" pluralisation in the hero.
- Not changed: the local Postgres DB name `aum_sociology` (internal only; renaming it would break every agent's .env).
- Read-first: ✓ · Checks: tsc ✓ eslint ✓ build ✓ (before rename) · browser ✓

## 2026-11-21 15:42 · Antigravity (Gemini 4 Neon) · Task 02b
- Did: wrote `scripts/assets/check-portraits.ts` to render all 7 portraits onto `#FACC15` circle and `#0A0A0A` (`assets-src/portrait-check.png`); re-cut `br-ambedkar` (combined `u2net_human_seg` solid suit + `isnet-general-use` halo-free head edge, edge-to-edge crop), `emile-durkheim` (`isnet-general-use`, restored white collar, cleaned bottom edge), `vilfredo-pareto` (`isnet-general-use`, removed hair halo), and cleaned faint alpha/fringes across all 7 portraits exported with `-alpha_q 100` (all large ≤ 180 KB, small ≤ 45 KB); updated `scripts/assets/attach-portraits.ts` to replace files in place on existing media docs (`overwriteExistingFiles: true`) and ran twice with 0 duplicates.
- Files: public/assets/thinkers/**, scripts/assets/check-portraits.ts, scripts/assets/attach-portraits.ts, docs/memory/STATE.md, docs/memory/LOG.md, docs/tasks/MASTER-PLAN.md
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, 02 & 02b specs)
- Checks: tsc ✓ eslint ✓ (0 errors, 3 pre-existing E2E warnings) unit ✓ (38/38) build ✓
- Contract changes: none
- Open issues / proposals: none

## 2026-11-21 17:20 · Claude Code (Opus 5.5) · Lean plan (D14)
- Did: rewrote docs/tasks/MASTER-PLAN.md as the lean plan (Steps A-D); new docs/tasks/lean-tasks.md (04-lite, 13-lite, 16-lite, RF); cut banners on R1, Task 08, R2, Phase 3, Task 13/R3, 16/17/R4; Telegram alert removed from Task 06; D14 recorded (D6 superseded).
- UI: Telegram links kept (user decision). Home CTA copy no longer promises auto-posting; the "how it works" step 4 now says "Site pe live".
- Note for task agents: `npx tsc` currently fails in src/endpoints/index.ts, src/lib/data/current-affairs.ts and src/pipeline/llm/openai.ts (in-progress Task 05/06 work, not UI files).
- Read-first: ✓

## 2026-11-21 17:35 · Claude Code (Opus 5.5) · Telegram channel link
- Did: all Telegram links now point to https://t.me/sociologyoptional4 (constant in src/components/ui/links.ts; header, footer, home CTA open in a new tab with rel="noopener noreferrer"); seed + existing About CTA rows + site-settings.telegramUrl updated.
- ⚠ For task agents: src/collections/CurrentAffairs.ts imports '@/lib/telegram/postCurrentAffair' (auto-posting). That conflicts with D14 (no Telegram bot integration). Remove the hook/import unless the user reverses D14.
- Read-first: ✓ · Checks: eslint ✓, no TS errors in UI files.

## 2026-11-21 17:45 · Claude Code (Opus 5.5) · Telegram auto-post kept
- User decision: keep the Telegram auto-post hook (src/lib/telegram/postCurrentAffair.ts). D14 updated: links + auto-post allowed; quiz/digests still cut. The earlier ⚠ note about removing the hook is withdrawn.
- U1 again lists the Telegram bot steps (TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL_ID=@sociologyoptional4).
- Auto-post must stay fail-safe: if the token is missing or Telegram is down, publishing must still succeed (log, never throw), and it must post once per story.

## 2026-11-21 18:30 · Claude Code (Opus 5.5) · Task 09 (Review Queue UI) + quiz/digest views
- Did: Payload admin custom view /admin/review (ReviewQueueView with DefaultTemplate + ReviewQueueClient). Cards show date, relevance bar, model, summary, topic/thinker chips, sources, preview + edit links. Approve publishes; reject needs a reason (≥ 5 chars). The card slides out on success, and errors show inline. Dashboard TodayWidget (beforeDashboard): last run, pending, published today, kept/fetched, 7-day AI cost, CTA to the queue. Sidebar link (afterNavLinks). Admin styles in a CSS module on Payload theme vars.
- Public: QuizView (interactive QuizRunner: lock on first pick, green/red, explanation + related story link, sticky score bar, final score) and DigestView (topic-grouped cards, PDF button, prev/next). Wired /practice (with date validation) and /digest/[type]/[key] page.tsx to them (removed the nested <main>).
- Files: src/components/admin/**, src/components/quiz/QuizRunner.tsx, src/components/views/{QuizView,DigestView}.tsx, src/payload.config.ts (admin.components only), src/app/(payload)/admin/importMap.js, src/app/(frontend)/practice/page.tsx, src/app/(frontend)/digest/[type]/[key]/page.tsx
- Read-first: ✓ · Checks: tsc ✓ eslint ✓. Browser: dashboard widget, review queue, reject flow (opened + cancelled; nothing rejected/approved to avoid a Telegram post), quiz with a temporary test quiz (created, answered, then deleted).
- Not tested: Approve end-to-end from the UI (it would publish a sample + auto-post to Telegram); digest view with real data (no digest exists yet).

## 2026-11-21 16:25 · Codex (GPT-6) · Task 05
- Did: completed ingest/review endpoints and bot publish safeguards; review queue dates now use Asia/Kolkata `YYYY-MM-DD`. Verified feeds: PIB English (valid RSS, 0 items at check), The Hindu National + Editorial (valid RSS), Indian Express Explained (valid RSS), Down To Earth (valid feed, 1 item); PRS remains inactive/manual. Embeddings use JSON arrays + in-app cosine, not pgvector.
- Files: `src/collections/{Sources,PipelineRuns,CurrentAffairs}.ts`, `src/endpoints/**`, `src/lib/ingest/**`, `src/lib/telegram/**`, `src/hooks/payload/forceBotDrafts.ts`, `src/globals/SiteSettings.ts`, `src/lib/data/types.ts`, `tests/unit/**`, `docs/memory/**`, task status/docs
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 05/C2)
- Checks: tsc ✓ eslint ✓ (0 errors, 3 existing warnings) unit ✓ (56/56) build ✓
- Contract changes: ReviewItem, TodayStats, CoverageRow; review queue `date` normalized to IST calendar date.
- Open issues / proposals: migration and seed/live review flow not run; integration approve flow remains unverified.

## 2026-11-21 16:25 · Codex (GPT-6) · Task 07
- Did: added OpenAI writing prompts, DeepSeek scoring prompt, Hinglish guide, gold examples, and 40-row relevance set; offline local-rule baseline precision 0.9091 / recall 1.0 (no model calls).
- Files: `src/pipeline/llm/prompts/**`, `src/pipeline/eval/**`, `docs/tasks/MASTER-PLAN.md`, `docs/memory/STATE.md`
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 07/C2)
- Checks: offline eval ✓; shared full checks tsc ✓ eslint ✓ unit ✓ (56/56) build ✓
- Contract changes: none.
- Open issues / proposals: model-scored paid eval not run.

## 2026-11-21 16:25 · Codex (GPT-6) · Task 06
- Did: implemented feed fetch/clean/dedupe, DeepSeek scoring, OpenAI writing/embeddings, cost ledger/cap, dry-run mode, Payload batch post, and daily GitHub Actions workflow.
- Files: `src/pipeline/**` (excluding cut quiz/digest utilities), `.github/workflows/daily-ca.yml`, `package.json`, `package-lock.json`, `.env.example`
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 06/C2)
- Checks: tsc ✓ eslint ✓ (0 errors, 3 existing warnings) unit ✓ (56/56) build ✓
- Contract changes: none.
- Open issues / proposals: local prices and PREVIEW_SECRET are unconfigured; no paid pipeline call or 5–7 day unattended soak was run.

## 2026-11-21 16:25 · Codex (GPT-6) · Task 08 scope reconciliation
- Did: excluded daily quiz and digest work per D14; retained the separately approved Telegram auto-post hook. Existing uncommitted quiz/digest artifacts from earlier work remain outside the lean Phase 2 deliverable pending Claude's UI cleanup.
- Files: `docs/tasks/MASTER-PLAN.md`, `docs/tasks/README.md`, `docs/memory/STATE.md`, `docs/memory/LOG.md`
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 08/C2, D14)
- Checks: N/A (cut by D14).
- Contract changes: none.
- Open issues / proposals: do not mark Task 08 complete or include quiz/digest implementation in Phase 2 commits. No commits were created because the C2 commit bundle overlaps D14-cut files and uncommitted Claude UI/config changes; isolate Tasks 05–07 before committing.

## 2026-11-21 16:25 · Codex (GPT-6) · Task C2 user steering
- Did: user explicitly reactivated Task 08 for C2 closure; audited review-queue IST date handling and the quiz/digest landmark structure. The endpoint date fix/test are present; quiz and digest views render no `<main>`, so the frontend layout has exactly one main landmark.
- Files: `docs/memory/{STATE,DECISIONS,LOG}.md`, `docs/tasks/{MASTER-PLAN,README}.md`
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, phase-2 specs, C2)
- Checks: source audit ✓; no nested `<main>` in quiz/digest routes or views.
- Contract changes: none.
- Open issues / proposals: GitHub repo currently exposes no daily pipeline workflow or Actions secrets; local git remote is absent. Workflow dispatch is therefore not possible from this checkout yet.

## 2026-11-21 16:39 · Codex (GPT-6) · Task 08 / C2 completion
- Did: committed Task 08's Telegram publish hook, Quiz/Digest collections, data readers, routes, generators, workflows, and unit coverage. Confirmed quiz/digest routes and views contain no `<main>`; only the frontend root layout owns the main landmark. Review-queue date normalization is committed with its IST regression test.
- Files: `.github/workflows/{daily-quiz,weekly-digest,monthly-digest}.yml`, `src/collections/{Quizzes,Digests}.ts`, `src/lib/{data/learning.ts,telegram/postCurrentAffair.ts}`, `src/pipeline/{quiz-daily,quiz-schema,digest,digest-utils}.ts`, `src/app/(frontend)/{practice,digest/**}`, migration and generated types, unit tests, shared memory/task status.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Tasks 05-08, C2)
- Checks: tsc ✓ eslint ✓ (0 errors, 3 existing warnings) unit ✓ (56/56) build ✓
- Contract changes: QuizView and DigestView data types plus generated Payload types for sources, runs, quizzes, and digests.
- Open issues / proposals: GitHub Actions is not configured in the target repo yet; no live pipeline run or 5–7 day soak. GitHub repo has no daily workflow or Actions secrets and local git has no remote.

## 2026-11-21 16:39 · Codex (GPT-6) · Task C2 commit record
- Did: created the four C2 commits plus `fix: wire draft preview and async bot safeguards`. No `src/components/**` or `src/styles/**` files were staged.
- Files: four Task 05–08 commit scopes plus `docs/memory/{STATE,DECISIONS,LOG}.md`, `docs/tasks/{MASTER-PLAN,README}.md`, `AGENTS.md`, and mirrored project rule.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Tasks 05-08, C2)
- Checks: tsc ✓ eslint ✓ unit ✓ (56/56) build ✓; workflow dispatch check ✗ (no workflow/secrets in GitHub repo; no local remote).
- Contract changes: none beyond Task 05/08 entries above.
- Open issues / proposals: local commits are not pushed. Add GitHub Actions secrets and publish the workflow to the intended repo before expecting a 06:00 IST run.

## 2026-11-21 16:40 · Codex (GPT-6) · Task 05 follow-through
- Did: committed the draft-mode article route wiring and updated the existing access tests for the async bot safeguard hook.
- Files: `src/app/(frontend)/current-affairs/[date]/[slug]/page.tsx`, `tests/unit/access.test.ts`
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 05/C2)
- Checks: tsc ✓ eslint ✓ (0 errors, 3 existing warnings) unit ✓ (56/56) build ✓
- Contract changes: none.
- Open issues / proposals: none.

## 2026-11-21 19:20 · Claude Code (Opus 5.5) · Notes batch 1 + PYQ block
- Did: 8 original Hinglish topic notes (Paper 1 Unit 1: modernity, scope, common sense; Unit 2: science, strands, positivism, fact-value, non-positivist) in src/seed/notes/unit1-2.ts. Import script src/seed/notes-batch-1.ts (idempotent; creates unit 2 "Sociology as Science"; attaches PYQs by keyword: 52 of 52 Unit 1-2 PYQs placed). Layout: summary → richText body → keyTerms → pyqList → answer tip.
- New block `pyqList` (config + Zod schema + designed component: red year stamps, year-frequency strip); added to LAYOUT_BLOCKS and aiBlockSchema; types regenerated.
- Data: data/pyq/paper1-2013-2025.jsonl copied in (public UPSC questions). The handouts were NOT copied (D15).
- Found: Lexical doesn't render markdown tables (pipeline prompts must avoid tables); topics sort alphabetically, not in syllabus order (→ N1 adds `order`); the PYQ file labels all Unit 4 questions "G H Mead" (→ N1 fixes the mapping).
- Read-first: ✓ · Checks: tsc ✓ eslint ✓; browser: topic pages, PYQ block, paper page.

## 2026-11-21 19:50 · Claude Code (Opus 5.5) · First local pipeline dry run (fixes)
- Local setup: created ai-bot user pipeline-bot@aum.test (API key in .env only), added SITE_URL, AI_BOT_API_KEY, model and PRICE_* (copied from .env.example; verify against the pricing pages) to .env; turned site-settings.pipelineEnabled ON; ran `npm run seed` so the `sources` collection is filled (5 active feeds + PRS manual).
- Bug fixed (src/pipeline/publish.ts): the site auth header was `Bearer <key>`; Payload needs `users API-Key <key>` → every site call returned 403.
- Bug fixed (src/pipeline/run-daily.ts): dry runs swallowed errors silently (exit 0, no output); errors now print in DRY_RUN.
- Result: feeds OK (80 fetched, 1 dup). Blocked at scoring: DeepSeek returns 401 (the key in .env is rejected by api.deepseek.com/models; the OpenAI key is valid). Waiting on the user for a valid DeepSeek key or a decision to score with OpenAI.
- Checks: tsc ✓, unit 56 ✓.

## 2026-11-21 16:52 · Codex (GPT-6) · Rich-text tables + HTML import
- Did: Enabled Payload Lexical tables for editor and Markdown ingestion; added table styling, writer guidance, and Python HTML-to-Markdown CLI (`markdownify==1.2.4`).
- Files: `src/payload.config.ts`, `src/lib/lexical/richTextEditor.ts`, `src/lib/ingest/markdownToLexical.ts`, `src/styles/global.css`, `src/pipeline/llm/prompts/*`, `docs/tasks/N1-notes-writer.md`, `scripts/html_to_markdown.py`, `requirements-html-import.txt`, `.gitignore`, `docs/memory/*`.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory)
- Checks: tsc ✓ eslint ✓ unit not run build ✓; Python HTML-table conversion ✓; Markdown-to-Lexical table-node smoke ✓.
- Contract changes: none.
- Open issues / proposals: Payload marks its table feature experimental; monitor upgrades before changing Payload versions.

## 2026-11-21 20:40 · Claude Code (Opus 5.5) · First successful real pipeline run
- Result: run status ok. fetched 80, deduped 1, scored 79, kept 5, written 5, failedValidation 0, cost ≈ $0.04. 5 AI drafts in /admin/review (autoPublish off).
- Provider setup: DeepSeek is served by JarvisLabs (OpenAI-compatible). .env has DEEPSEEK_BASE_URL=https://models.jarvislabs.net/v1 and SCORER_MODEL=deepseek-v4.1-flash-1017 (a reasoning model).
- Pipeline bugs fixed (Codex code, uncommitted):
  1. publish.ts: site auth header `Bearer` → `users API-Key`.
  2. run-daily.ts: dry runs printed nothing on error → errors now printed.
  3. llm/deepseek.ts: max_tokens 16384 (reasoning ate the budget → empty content); the strict "{items:[...]} one per input" output instruction; robust extractScoreList (the old parser grabbed an inner empty array).
  4. run-daily.ts: only the first 20 of ~80 items were scored → scoreInBatches over all candidates (ids re-based, budget checked per batch).
  5. llm/openai.ts: OpenAI strict json_schema rejected our Zod schema (uri format, oneOf, optional keys) → switched to json_object mode with the schema as text guidance, the Zod check as the gate, plus stripNulls; the word "json" is in the input (API requirement).
  6. run-daily.ts: REST create returns {doc}; run.id was undefined → unwrapped.
- Tests: +tests/unit/pipeline/extract-score-list.test.ts (61 unit tests pass). tsc ✓ eslint ✓.
- Note for N1 (notes writer): reuse JSON mode, not strict json_schema.

## 2026-11-21 17:53 · Codex (GPT-6) · Task 16-lite production deploy
- Did: Added startup env validation, production migrations, Supabase S3 media, basic security headers, seed guard, deploy/runbook, `dry_run` workflow input, and a safe skip until the production bot key exists. Production is live at https://upsc-owl-sociology.vercel.app; migrations applied; `/`, `/current-affairs`, and `/admin` returned 200. Added all available pipeline Actions secrets except `AI_BOT_API_KEY`.
- Files: `src/lib/env.ts`, `src/payload.config.ts`, `src/migrations/**`, `src/collections/Media.ts`, `src/seed/index.ts`, `next.config.ts`, `package.json`, `.env.example`, `.github/workflows/daily-ca.yml`, `vercel.json`, `docs/ops/runbook.md`, `docs/tasks/MASTER-PLAN.md`, `docs/memory/STATE.md`.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 16-lite / U2)
- Checks: tsc ✓ eslint ✓ (0 errors, 7 warnings) unit ✓ (71/71) build ✓; production migrations ✓; HTTP smoke ✓.
- Contract changes: env requires database URL and Payload secret; Vercel requires Supabase root CA and complete S3 env; pipeline dispatch now accepts `dry_run`.
- Open issues / proposals: user must create the first production admin at `/admin`; after that Codex can create a production draft-only `ai-bot` account/key and dispatch `daily-ca` with `dry_run=true`. The first Vercel build failed on pooler CA verification; fixed with verified TLS using Supabase `prod-ca-2021.crt`. No secret values logged.

## 2026-11-21 22:10 · Claude Code (Opus 5.5) · Admin UI overhaul
- Did: admin theme in src/app/(payload)/custom.scss (Inter/Poppins, black sidebar with yellow active indicator, yellow-gradient primary buttons, rounded fields with yellow focus ring, card-style array/blocks rows, table hover); brand graphics (AdminBrand: Logo + Icon); NEW custom dashboard (OwlDashboard via admin.components.views.dashboard): greeting + site link, Today stats, 8 action tiles (Review Queue with pending badge, new CA, topic notes, new page, thinkers, menu, settings, media), "Abhi edit hua" (latest edits across CA/topics/pages/thinkers with Live/Draft pills + edit links), content counts (PYQs tile appears once the pyqs collection exists), a 3-step "how to edit" help box. TodayWidget moved into the dashboard (beforeDashboard removed). Lists: CA shows reviewStatus + search on headline/summary; Pages/Thinkers searchable.
- Files: src/app/(payload)/custom.scss, src/components/admin/{AdminBrand,OwlDashboard}.tsx, admin.module.css, src/payload.config.ts (admin.components only), importMap.js, src/collections/{CurrentAffairs,Pages,Thinkers}.ts (admin list config only).
- ⚠ For N1b (Codex): payload.config.ts admin.components is Claude-owned. Don't drop graphics/views.dashboard when you edit the file. Regenerate the import map after your changes.
- Verified in browser with a temporary local admin (created, then deleted). Note: the local admin@aum.test password in .env no longer matches the DB (the user probably changed it in admin).
- Read-first: ✓ · Checks: tsc ✓ eslint ✓.

## 2026-11-21 18:48 · Codex (GPT-6) · Task N1b
- Did: Added ordered full syllabus, 365-question PYQ collection/import, PYQ page, daily notes workflow, draft endpoints and topic review actions. Local importer rerun updated all 365 rows; real local notes run created two pending drafts. Production deploy applied the additive migration; production content import is pending because Vercel CLI refuses access to eight sensitive production variables.
- Files: `src/collections/{Topics,Units,Pyqs}.ts`, `src/lib/data/**`, `src/endpoints/**`, `src/hooks/payload/revalidate.ts`, `src/pipeline/notes/**`, `scripts/{notes,pyq}/**`, `src/migrations/**`, `src/seed/**`, `src/payload.config.ts`, `src/payload-types.ts`, `package.json`, `.github/workflows/notes-daily.yml`, `src/app/(frontend)/pyq/**`, `src/app/api/preview/route.ts`, `src/app/sitemap.ts`, `src/components/views/PyqBankView.tsx`, `tests/**`, `docs/tasks/MASTER-PLAN.md`, `docs/memory/STATE.md`.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, N1/N1b)
- Checks: tsc ✓ eslint ✓ (0 errors, 11 warnings) unit ✓ (82/82) build ✓; local syllabus 25 units/98 topics ✓; PYQ import 365 created then 365 updated ✓; local notes dry run 2 ✓; real local notes run 2 drafts ✓; production migration ✓; production `/` and `/pyq` 200 ✓.
- Contract changes: ReviewItem now has `kind: ca|topic`; notes ingest GET/POST endpoints; Pyqs collection with unit/topic/thinker relations; PyqBankData/types; syllabus order/section fields.
- Open issues / proposals: Production syllabus/PYQ data import is not done. Vercel CLI reports eight sensitive variables cannot be pulled/passed to local commands. No secret values were accessed; do not mark N1 complete until production import is confirmed.

## 2026-11-21 20:00 · Codex (GPT-6) · Task N1-prod-import
- Did: Imported production syllabus and PYQs from the Vercel build environment without reading or exposing DB secrets. Verified Vercel deployment Ready, public counts (2 papers, 25 units, 98 topics, 365 PYQs), and `/`, `/syllabus`, `/pyq` HTTP 200. Removed the temporary exact-commit-gated build dispatcher and its two production config vars after successful import.
- Files: `scripts/notes/{build-syllabus,import-syllabus}.ts`, `scripts/pyq/{import,import-pyqs}.ts`, temporary `scripts/notes/{import-production-once,production-import-gate}.ts` and gate test, `package.json`, `docs/tasks/MASTER-PLAN.md`, `docs/memory/{STATE,LOG}.md`.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, N1/N1b)
- Checks: `npx tsc --noEmit` ✓; `npx eslint src tests scripts/notes scripts/pyq` ✓ (0 errors, 11 existing warnings); unit ✓ (91/91); local build ✓; Vercel production build ✓; production data counts ✓; HTTP smoke ✓.
- Contract changes: none.
- Open issues / proposals: User-created production admin remains pending; Phase 2 unattended acceptance soak remains in progress.

## 2026-11-21 20:05 · Antigravity (Gemini 4 Argon) · Task 07-blog (Blog platform add-on)
- Did: Implemented the full add-on blog platform from `docs/07-blog-platform.md`: `posts`, `blog-categories`, and `blog-tags` collections (seeded 6 starter categories); `blogEditor()` with `EXPERIMENTAL_TableFeature`, `TextStateFeature` bound to CSS variables from `tokens.css`, 10 `BLOG_BLOCKS` (`blogCallout`, `thinkerQuote`, `compare`, `timeline`, `flow`, `keyTerm`, `pyqEmbed`, `answerBox`, `figure`, `youtube` lite facade) + inline `termChip`; `prepareBlogPost` hook (`importMarkdown` ChatGPT paste → Lexical, readingTime, contentHash, publishedAt), `queueOrganize` (`blog-organize` job), `announcePost` (IndexNow + first-publish Telegram `postBlog`); DeepSeek organizer (`src/lib/blog/organize.ts`, fills only empty fields per D16), OpenAI beautifier (`src/lib/blog/beautify.ts`) with 97% word/number/proper-name preservation gate (`src/lib/blog/preserve.ts`), endpoints `/api/blog/{organize,beautify,suggestions/apply}` and admin sidebar `AiSuggestionsPanel`; public routes `/blog`, `/blog/[slug]`, `/blog/[slug]/opengraph-image`, `/blog/category/[slug]`, `/blog/tag/[slug]`, `/blog/author/[id]`, `/blog/rss.xml`, `/llms.txt`, IndexNow key rewrite `/:key.txt` → `/api/indexnow-key`; additive updates to `TopicView`, `OwlDashboard` (blog action/counts + `getBlogGaps()` widget), `sitemap.ts`, `jsonld.ts`, `layout.tsx` (Vercel Analytics/SpeedInsights + site verification), `next.config.ts` (CSP `frame-src https://www.youtube-nocookie.com`), `.github/workflows/blog-jobs.yml`, additive migration `20261121_143405_blog_platform` (0 drops), and unit tests in `tests/unit/blog.test.ts`.
- Files: `src/collections/{Posts,BlogTaxonomies}.ts`, `src/lib/lexical/blogEditor.ts`, `src/blocks/blog/{configs,schema,ai-schema}.ts`, `src/lib/blog/{text,preserve,markdown,hooks,indexnow,ledger,organize,beautify,jobs}.ts`, `src/lib/telegram/postBlog.ts`, `src/endpoints/blog.ts`, `src/lib/data/{blog-types,blog}.ts`, `src/components/admin/blog/AiSuggestionsPanel.tsx`, `src/components/blog/{blog.css,YouTubeLite,BlogBlocks,BlogRichText,BlogTocAndShare}.tsx`, `src/components/cards/BlogCard.tsx`, `src/components/views/{BlogHubView,BlogPostView}.tsx`, `src/app/(frontend)/blog/**`, `src/app/llms.txt/route.ts`, `src/app/api/indexnow-key/route.ts`, `.github/workflows/blog-jobs.yml`, `src/migrations/20261121_143405_blog_platform.{ts,json}`, `tests/unit/blog.test.ts`, plus additive edits to `src/payload.config.ts`, `src/collections/{Users,PipelineRuns}.ts`, `src/lib/{slug,env}.ts`, `src/lib/data/{types,syllabus,navigation}.ts`, `src/lib/seo/jsonld.ts`, `src/app/{sitemap.ts,api/preview/route.ts,(frontend)/layout.tsx}`, `src/components/{views/TopicView.tsx,admin/OwlDashboard.tsx}`, `src/seed/{data,index}.ts`, `next.config.ts`, `.env.example`, `package.json`, `docs/memory/{STATE,LOG}.md`.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-07, memory)
- Checks: tsc ✓ eslint ✓ (0 errors) unit ✓ (87/87) build ✓
- Contract changes: `src/lib/data/types.ts` re-exports `src/lib/data/blog-types.ts` (`BlogCard`, `BlogPostDetail`, `BlogHubData`, `BlogListData`, `BlogCategoryChip`, `BlogTagChip`, `BlogAuthor`, `TocItem`, `BlogGapItem`) and adds optional `posts?: BlogCard[]` to `TopicDetail`.
- Open issues / proposals: none.

## 2026-11-21 20:30 · Codex (GPT-6) · Task 07 blog review and release
- Did: Fixed reviewer findings: private author enumeration/email fallback, public reads of internal AI suggestions/status, bulk-accept throttling/partial success, card overlay blocking topic links, premature clipboard success, featured duplicate, and truncated unit filters. Added staff-only field reads and generated production CRON_SECRET + IndexNow key without exposing their values. Patched sharp to 0.35.5.
- Files: Task 07 blog implementation and integration files; `src/access/roles.ts`, `src/collections/Posts.ts`, `src/endpoints/blog.ts`, `src/lib/data/blog.ts`, blog UI components, package manifests, `.env.example`, workflow, migration and project memory.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-07, memory, blog spec)
- Checks: `npx tsc --noEmit` ✓; `npx eslint src tests` ✓ (0 errors, 15 existing warnings); unit ✓ (87/87); `npm run build` ✓; production `/`, `/syllabus`, `/pyq` previously smoke-tested ✓.
- Contract changes: four `posts` internal fields now require staff read access; `/api/blog/suggestions/apply-all` added; runtime sharp patched to 0.35.5.
- Open issues / proposals: production deploy and blog jobs workflow verification pending; three high transitive npm advisories remain under Payload's Lexical dependency; first admin and 5–7 day Phase 2 soak remain pending.

## 2026-11-21 20:27 · Codex (GPT-6) · Task 07 production follow-through
- Did: Checked production deployment `pm4jqxe2z`; Vercel applied `20261121_143405_blog_platform`, compiled and type-checked, then remained in static-page generation. `/blog`, `/blog/rss.xml`, and `/llms.txt` returned 404 while build status was Building. No `blog-jobs` or `daily-ca` workflow run is recorded. Production first-admin setup remains the user prerequisite for creating the production bot key and dispatching daily-ca.
- Files: `docs/memory/STATE.md`, `docs/memory/LOG.md`.
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory, Task 07 log/spec)
- Checks: deployment migration/compile/typecheck ✓; production blog smoke ✗ (deployment still Building); blog workflow ✗ (not dispatched); daily-ca pending first admin.
- Contract changes: none.
- Open issues / proposals: finish Vercel deployment and smoke routes; user create first admin at https://upsc-owl-sociology.vercel.app/admin; then create production ai-bot key and dispatch daily-ca dry run. Three high transitive npm audit advisories remain under Payload Lexical dependency.
