# Project state

_Last updated: 2026-11-21 by Codex (GPT-6)_

## Phase
Phase 0 ✅ committed → Phase 1 ✅ → **Phase 2 automation** (implementation complete; acceptance soak pending).

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|
| Task 16-lite production deploy | Codex (GPT-6) | `next.config.ts`, `src/payload.config.ts`, `src/lib/env.ts`, `src/migrations/**`, `src/seed/**`, `package.json`, `package-lock.json`, `.env.example`, `.github/workflows/daily-ca.yml`, `docs/ops/**`, `.vercel/**`, `docs/memory/**`, `docs/tasks/MASTER-PLAN.md` | 2026-11-21 |

## Next up
1. Deploy the Task 16-lite commit and verify migrations plus public pages on Vercel.
2. User creates the first admin in production, then a draft-only `ai-bot` account and its new API key; Codex can then finish GitHub Actions secrets and run `daily-ca` with `dry_run=true`.
3. Start the 5–7 day unattended soak; run Task 04-lite and then proceed to PYQ task 14.

## Blockers / waiting on user
- Task 16-lite infrastructure is configured: Supabase project `fhcnbuhlfzcuyhpkjddg` is active, pooler connectivity was checked, the public `media` bucket exists, and production Vercel variables are stored. The deployment must apply migrations and be smoke-checked.
- Production admin and the new `ai-bot` API key must be created in `/admin` after deploy. GitHub Actions secret `AI_BOT_API_KEY` and the dry-run dispatch wait on that user-created key; do not substitute the local bot key.
- Phase 2 production acceptance requires 5–7 days of unattended drafts and an approve-to-public verification.
- Git remote is `origin` → `sociologyoptional4-cpu/upsc-owl-sociology`; `daily-ca.yml` exists and supports `dry_run`. Actions secrets and the workflow dispatch are pending production `ai-bot` credentials.

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
- UPSC OWL Sociology content-generation providers: OpenAI API for writing and DeepSeek API for scoring/filtering; do not use Anthropic API. This is distinct from historical Claude Code UI/design role references.

## Completed
- Rich-text tables enabled in Payload and Markdown ingestion; Python HTML-to-Markdown helper added with pinned `markdownify` dependency.
- Phase 2 code: Tasks 05–08; Task 08 reactivated for C2 by D15. Quiz/digest UI source has no nested `<main>`; the shared frontend layout provides the single main landmark.
- Task C2 commits created locally in sequence: Tasks 05, 07, 06, 08, plus the draft-preview/async-guard follow-through. No GitHub Actions run was dispatched because the GitHub repo has no `daily-ca.yml` workflow or Actions secrets and the local checkout has no remote.
