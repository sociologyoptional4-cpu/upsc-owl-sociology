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
