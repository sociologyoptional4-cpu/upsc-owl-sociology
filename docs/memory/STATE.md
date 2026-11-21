# Project state

_Last updated: 2026-11-21 by Codex (GPT-6)_

## Phase
Phase 0 ✅ committed → Phase 1 ✅ → **Phase 2 automation** (implementation complete; acceptance soak pending).

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|
_(none)_

## Next up
1. Complete the production syllabus/PYQ import once a Vercel-supported environment access path is available; production migration is already applied.
2. User creates the first admin from the production `/admin` welcome screen.
3. After admin setup, Codex creates the production draft-only `ai-bot` account/key, adds the key as the final GitHub Actions secret, then dispatches `daily-ca` with `dry_run=true`.

## Blockers / waiting on user
- Task 16-lite is live at `https://upsc-owl-sociology.vercel.app`; production migrations applied and `/`, `/current-affairs`, and `/admin` returned 200. Security headers are present. Supabase project `fhcnbuhlfzcuyhpkjddg` has the public `media` bucket and verified TLS pooler configuration.
- Production first admin still needs to be created by the user from `/admin`. After that, Codex will create the production draft-only `ai-bot` account and add its new API key as GitHub Actions secret `AI_BOT_API_KEY`; don't substitute the local bot key. The daily-ca dry run is waiting on this.
- Task N1b code is pushed in `093b713`; Vercel applied migration `20261121_130225_n1_syllabus_pyqs_notes` and `/` and `/pyq` return 200. Production data import is pending: Vercel CLI marks eight production values sensitive and refuses to pass them to the local importer. No secret values were read or exposed; do not use the placeholder env file.
- Phase 2 production acceptance requires 5–7 days of unattended drafts and an approve-to-public verification.
- Git remote is `origin` → `sociologyoptional4-cpu/upsc-owl-sociology`; `daily-ca.yml` supports `dry_run`. The other required Actions secrets are configured; only `AI_BOT_API_KEY` and the workflow dispatch wait on production bot setup.

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
- UPSC OWL Sociology content-generation providers: OpenAI API for writing and DeepSeek API for scoring/filtering; do not use Anthropic API. This is distinct from historical Claude Code UI/design role references.

## Completed
- Rich-text tables enabled in Payload and Markdown ingestion; Python HTML-to-Markdown helper added with pinned `markdownify` dependency.
- Phase 2 code: Tasks 05–08; Task 08 reactivated for C2 by D15. Quiz/digest UI source has no nested `<main>`; the shared frontend layout provides the single main landmark.
- Task C2 commits created locally in sequence: Tasks 05, 07, 06, 08, plus the draft-preview/async-guard follow-through. At that stage the workflow, remote, and Actions secrets were not yet installed; Task 16-lite has since configured them.
- Task 16-lite deployed in commits `23453dd` and `4536f0b`; the first deployment exposed Supabase's root CA requirement, fixed by verifying TLS with `prod-ca-2021.crt`. Migrations `20261121_103619` and `20261121_120755_initial` applied successfully. See LOG for checks and remaining user setup.
- Task N1b implementation pushed as `093b713`: 25 units, 98 topics and 365 P1 PYQs load locally; repeated import updated all 365 without duplicates. Local dry run succeeded and the real run created two pending notes. Production migration applied; production syllabus/PYQ import remains blocked by Vercel's sensitive-variable access limitation.
