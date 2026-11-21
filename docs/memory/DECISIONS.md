# Decisions (do not re-argue; propose changes in LOG.md)

| # | Date | Decision | Why |
|---|------|----------|-----|
| D1 | 2026-11-21 | Payload CMS 3 embedded in Next.js (not Sanity) | Free admin + REST/GraphQL, our own Postgres, block page-builder |
| D2 | 2026-11-21 | Every page = `layout: Block[]`; one block library shared by admin, AI and frontend | New pages need no code or deploy |
| D3 | 2026-11-21 | AI bot role writes drafts only; `site-settings.autoPublish` off until review approval > 90% | Accuracy and trust |
| D4 | 2026-11-21 | Design direction "The Living Journal": cream paper + navy ink + saffron; Fraunces + Inter (Mukta for Hindi) | Editorial and trustworthy, unlike template edtech sites |
| D5 | 2026-11-21 | Color is semantic: P1 indigo, P2 teal, thinker plum, PYQ brick, AI draft mustard | Color carries meaning |
| D6 | 2026-11-21 | 3D only in 3 places (hero network, syllabus galaxy, thinker tilt in CSS) with device-tier fallback | Smooth on cheap Android phones |
| D7 | 2026-11-21 | No GIFs; assets only PD/CC0/CC BY(-SA) logged in ASSETS.md; no news photos | Legal and performance |
| D8 | 2026-11-21 | Work split: Claude = main mind + UI/UX; Codex/Antigravity execute tasks from docs/tasks | Token cost |
| D9 | 2026-11-21 | AI writes rich text as markdown, converted to Lexical server-side; the AI never sends raw Lexical JSON | Reliability |
| D10 | 2026-11-21 | Local dev on Homebrew Postgres; prod Supabase + Vercel | Zero setup now |
