# Project state

_Last updated: 2026-11-21 by Codex (GPT-6)_

## Phase
Phase 0 ✅ committed → Phase 1 ✅ → **Phase 2 automation** (implementation complete; acceptance soak pending).

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|

## Next up
0. Deploy and execute the temporary admin-only repo-content importer, then remove it after verifying portraits and Unit 1 in production.
0. B1, B2, B3 and B4 (docs/09, docs/10) were all built by Claude (user: Gemini/Codex busy). Do NOT run the B1/B2/B4 prompts. Push needs the two new migrations `smart_paste` + `blog_attachments`; after deploy, user tests `/admin/write` on production.
1. Review the SEO audit wording follow-up PR.
2. Review the two production topic-note drafts after admin setup; production syllabus and PYQs are imported.
3. User creates the first admin from the production `/admin` welcome screen.
4. After admin setup, Codex creates the production draft-only `ai-bot` account/key, adds the key as the final GitHub Actions secret, then dispatches `daily-ca` with `dry_run=true`.

## Blockers / waiting on user
- Task 16-lite is live at `https://upsc-owl-sociology.vercel.app`; production migrations applied and `/`, `/current-affairs`, and `/admin` returned 200. Security headers are present. Supabase project `fhcnbuhlfzcuyhpkjddg` has the public `media` bucket and verified TLS pooler configuration.
- Production first admin still needs to be created by the user from `/admin`. After that, Codex will create the production draft-only `ai-bot` account and add its new API key as GitHub Actions secret `AI_BOT_API_KEY`; don't substitute the local bot key. The daily-ca dry run is waiting on this.
- Task N1 production import is complete: the Ready Vercel deployment imported 25 units, 98 topics, and all 365 PYQs; the temporary commit-gated build trigger has been removed. Public APIs confirm 2 papers, 25 units, 98 topics, and 365 PYQs.
- Phase 2 production acceptance requires 5–7 days of unattended drafts and an approve-to-public verification.
- Git remote is `origin` → `sociologyoptional4-cpu/upsc-owl-sociology`; `daily-ca.yml` supports `dry_run`. The other required Actions secrets are configured; only `AI_BOT_API_KEY` and the workflow dispatch wait on production bot setup.

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
- UPSC OWL Sociology content-generation providers: OpenAI API for writing and DeepSeek API for scoring/filtering; do not use Anthropic API. This is distinct from historical Claude Code UI/design role references.

## Completed
- Task U01-bilingual (English Priority + Hinglish Toggle & Deep Explanations): Added strictly additive bilingual columns on `Units`/`Topics` + migration `20261122_012115_bilingual_notes`; built `NoteLanguageContext`, prominent `LanguageSwitch` (`banner` + sticky `compact`), `BilingualUnitShell`, and `BilingualTopicShell` defaulting to English Notes with instant client-side Hinglish switching; rewrote & expanded Unit 1 (`sociology-the-discipline`, all 3 chapters, 4 mind maps, 4 infographics, and 25 PYQ answers) in pure English primary + enriched Hinglish with plain-language conceptual walkthroughs; verified idempotent double upload and live HTTP 200 on all Unit 1 routes.
- Task U01-notes (Stage 0 Notebook Engine + Paper 1 Unit 1): Built reusable Notion-style Hinglish study engine (`notebook-types`, `notebook-builder`, `resolve-blocks`, `ColorLegend`, `MindMap`, `InfographicGallery`, `PyqAnswerAccordion`, unit hub + chapter views with TOC & prev/next pager), `docs/tasks/25-units-notes-plan.md` (T01 ✅ Done, T02–T25 planned), C.W. Mills PYQ mapping fix, additive migration `20261122_005300_notebook_notes_visuals`, and uploaded Unit 1 (`sociology-the-discipline`: 3 chapters, 4 WebP infographics, 4 mind maps, all 25 solved 2013–2025 PYQs) idempotently to local Postgres.
- SEO Control Center was added to `main` in commit `bea1997`. Codex follow-up clarifies editorial heuristics and avoids promising Google ranking or rich-result behavior; review PR is pending.
- Rich-text tables enabled in Payload and Markdown ingestion; Python HTML-to-Markdown helper added with pinned `markdownify` dependency.
- Phase 2 code: Tasks 05–08; Task 08 reactivated for C2 by D15. Quiz/digest UI source has no nested `<main>`; the shared frontend layout provides the single main landmark.
- Task C2 commits created locally in sequence: Tasks 05, 07, 06, 08, plus the draft-preview/async-guard follow-through. At that stage the workflow, remote, and Actions secrets were not yet installed; Task 16-lite has since configured them.
- Task 16-lite deployed in commits `23453dd` and `4536f0b`; the first deployment exposed Supabase's root CA requirement, fixed by verifying TLS with `prod-ca-2021.crt`. Migrations `20261121_103619` and `20261121_120755_initial` applied successfully. See LOG for checks and remaining user setup.
- Task N1b implementation pushed as `093b713`: 25 units, 98 topics and 365 P1 PYQs load locally; repeated import updated all 365 without duplicates. Local dry run succeeded and the real run created two pending notes. Production import completed in deployment `8h7g2rp80`: 25 units, 98 topics, 365 PYQs (365 created, 0 updated). The commit-gated one-time build dispatcher and temporary Vercel env vars were removed after success.
- Task 07-blog (add-on blog platform, `docs/07-blog-platform.md`): collections, editor blocks, DeepSeek organizer, OpenAI beautifier with 97% preservation gate, public routes/RSS/SEO, Telegram, additive migration `20261121_143405_blog_platform`, workflow, and AI suggestion UI. Security review fixes applied; production release is being deployed. CRON_SECRET and INDEXNOW_KEY are configured without exposing their values.
  Latest check: Vercel deployment `pm4jqxe2z` applied the blog migration and compiled/type-checked successfully; static-page generation is still running. Production alias `/blog`, RSS, and `/llms.txt` returned 404 while the deployment remained Building. Blog production smoke and `blog-jobs` workflow dispatch remain pending.
