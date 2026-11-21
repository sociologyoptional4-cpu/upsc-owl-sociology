# Project state

_Last updated: 2026-11-21 by Antigravity (Gemini 3.8 Flash)_

## Phase
Phase 0 ✅ committed → **Phase 1** (public site v1) in progress.

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|

## Next up
1. Task R1: review of Task 01 output (Antigravity · Claude Sonnet 5.5)
2. Task 03: Phase 1 UI views (Claude Code). Starts after R1.

## Blockers / waiting on user
- Supabase + Vercel accounts (needed for deploy only, not for Phase 1 work).
- Brand name and domain final? (open decision #4 in docs/06-roadmap.md)

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
