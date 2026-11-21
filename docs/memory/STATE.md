# Project state

_Last updated: 2026-11-21 by Codex (GPT-6)_

## Phase
Phase 0 ✅ committed → Phase 1 ✅ → **Phase 2 automation** (implementation complete; acceptance soak pending).

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|
| _None_ | — | — | — |

## Next up
1. Add the daily pipeline workflow and required secrets to the GitHub repo, then dispatch one real pipeline run.
2. Apply the pending Payload migration, seed sources, and smoke the review flow.
3. Start the 5–7 day unattended soak; run Task 04-lite and then proceed to PYQ task 14.

## Blockers / waiting on user
- Payload migration has not been applied; local seed/review-flow smoke remains pending.
- Local `.env` has OpenAI/DeepSeek and Telegram key names, but AI price variables and `PREVIEW_SECRET` are not configured; no paid API calls were made.
- Phase 2 production acceptance requires 5–7 days of unattended drafts and an approve-to-public verification.
- The GitHub repo has no `daily-ca.yml` workflow or Actions secrets, and this local checkout has no Git remote configured; a GitHub run cannot be dispatched yet.

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
- UPSC OWL Sociology content-generation providers: OpenAI API for writing and DeepSeek API for scoring/filtering; do not use Anthropic API. This is distinct from historical Claude Code UI/design role references.

## Completed
- Phase 2 code: Tasks 05–08; Task 08 reactivated for C2 by D15. Quiz/digest UI source has no nested `<main>`; the shared frontend layout provides the single main landmark.
- Task C2 commits created locally in sequence: Tasks 05, 07, 06, 08, plus the draft-preview/async-guard follow-through. No GitHub Actions run was dispatched because the GitHub repo has no `daily-ca.yml` workflow or Actions secrets and the local checkout has no remote.
