# Project state

_Last updated: 2026-11-21 by Claude Code_

## Phase
Phase 0 ✅ done (not yet committed: Task 01 Part A commits it) → **Phase 1** (public site v1) in progress.

## Active (claim files before you start)
| Task | Agent (model) | Claimed files/dirs | Started |
|------|---------------|--------------------|---------|
| Task 01 | Codex (GPT-6) | .gitignore; src/lib/data/**; src/globals/**; src/hooks/payload/revalidate.ts; src/app/(frontend)/**; src/app/sitemap.ts; src/app/robots.ts; src/lib/seo/**; src/components/views/**; src/components/layout/Header.tsx; src/seed/**; tests/**; docs/tasks/README.md; docs/memory/STATE.md; docs/memory/LOG.md | 2026-11-21 |

## Next up
1. Task 01: data layer + routes (Codex 6.0)
2. Task 02: thinker portraits (Antigravity · Gemini 3.8 Flash), parallel with 01
3. Task R1: review of Task 01 output (Antigravity · Claude Sonnet 5.5)
4. Task 03: Phase 1 UI views (Claude Code). Starts after 01 is merged.

## Blockers / waiting on user
- Supabase + Vercel accounts (needed for deploy only, not for Phase 1 work).
- Brand name and domain final? (open decision #4 in docs/06-roadmap.md)

## Facts worth knowing
- Next.js 16.4 + Payload 3.94; local Postgres 14 (Homebrew), DB `aum_sociology`.
- The CMS page with path `home` replaces the homepage placeholder.
- Block slug for key terms is `keyTerms` (not `keyTermsTable`).
- `payload run` scripts must use top-level await, otherwise they exit silently.
