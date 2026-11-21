# Project state

_Last updated: 2026-11-21 by Antigravity (Gemini 4 Neon)_

## Phase
Phase 0 ✅ committed → **Phase 1** (public site v1) in progress.

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|

## Next up
1. Task R1: review of Task 01 output (Antigravity · Claude Sonnet 5.5)
2. ✅ Task 03 done (Phase 1 UI). Next: R1 review, Task 04 tests (Codex), Phase 2 tasks 05/07, Task 11 assets.

## Blockers / waiting on user
- Supabase + Vercel accounts (needed for deploy only, not for Phase 1 work).
- Brand name and domain final? (open decision #4 in docs/06-roadmap.md)

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
- UPSC OWL Sociology content-generation providers: OpenAI API for writing and DeepSeek API for scoring/filtering; do not use Anthropic API. This is distinct from historical Claude Code UI/design role references.
