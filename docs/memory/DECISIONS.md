# Decisions (do not re-argue; propose changes in LOG.md)

| # | Date | Decision | Why |
|---|------|----------|-----|
| D1 | 2026-11-21 | Payload CMS 3 embedded in Next.js (not Sanity) | Free admin + REST/GraphQL, our own Postgres, block page-builder |
| D2 | 2026-11-21 | Every page = `layout: Block[]`; one block library shared by admin, AI and frontend | New pages need no code or deploy |
| D3 | 2026-11-21 | AI bot role writes drafts only; `site-settings.autoPublish` off until review approval > 90% | Accuracy and trust |
| D4 | 2026-11-21 | ~~Superseded by D12~~ Design direction "The Living Journal": cream paper + navy ink + saffron; Fraunces + Inter (Mukta for Hindi) | Editorial and trustworthy, unlike template edtech sites |
| D5 | 2026-11-21 | Color is semantic: P1 indigo, P2 teal, thinker plum, PYQ brick, AI draft mustard | Color carries meaning |
| D6 | 2026-11-21 | ~~Superseded by D14~~ 3D only in 3 places (hero network, syllabus galaxy, thinker tilt in CSS) with device-tier fallback | Smooth on cheap Android phones |
| D7 | 2026-11-21 | No GIFs; assets only PD/CC0/CC BY(-SA) logged in ASSETS.md; no news photos | Legal and performance |
| D8 | 2026-11-21 | Work split: Claude = main mind + UI/UX; Codex/Antigravity execute tasks from docs/tasks | Token cost |
| D9 | 2026-11-21 | AI writes rich text as markdown, converted to Lexical server-side; the AI never sends raw Lexical JSON | Reliability |
| D10 | 2026-11-21 | Local dev on Homebrew Postgres; prod Supabase + Vercel | Zero setup now |
| D11 | 2026-11-21 | Content automation uses OpenAI API for writing and DeepSeek API for scoring/filtering; no Anthropic API. This provider choice does not change the separate UI/design agent role. | User instruction; keep provider setup consistent. |
| D12 | 2026-11-21 | Visual style switched to a clean white "notebook" look inspired by sociocurrents.com (user request): white + faint graph-paper grid, Poppins (display) + Inter, black ink, red emphasis, yellow-gradient CTAs, dark thumbnail-style post cards, black skewed section labels, thinker speech bubbles, pastel numbered tiles, black footer. Only the style is borrowed; their logo, images, GIFs and copy are never used. | User wants that UI; patterns aren't copyrightable, their assets are. |
| D13 | 2026-11-21 | Brand name is **UPSC OWL Sociology** (logo: "UPSC OWL" + "SOCIOLOGY"; card badge "OWL"). Replaces the working name "AUM Sociology". | User decision |
| D14 | 2026-11-21 | **Lean scope.** Telegram: links stay on the site (https://t.me/sociologyoptional4), and auto-posting a published current affair to the channel is ALLOWED (user decision, 2026-11-21); quiz/digests stay cut. No WebGL/3D: motion stays CSS-only (float, reveal, tilt). Cut: Task 08 (quiz/digests), Phase 3 (3D, Lottie, perf CI), concepts/MCQ/search/practice, QA crawl, Sentry/Upstash/analytics/backup workflows, and the R1/R2/R3/R4 reviews (replaced by one final RF review). Keep: ingest + review, daily pipeline, PYQ bank (lite), simple deploy. | User: the plan had too much complicated, time-consuming work; the site already looks good. |
| D15 | 2026-11-21 | Task 08's existing Telegram/quiz/digest implementation is reactivated for C2 completion, bug review, logging, and commits; this scoped request overrides D14's Task 08 cut for this closure. | User explicitly directed Codex to execute C2 and address the quiz/digest page issue. |
| D15 | 2026-11-21 | Content sources: the PYQ JSONL (public UPSC questions) is published as-is. The LevelUp IAS handouts JSONL is a coaching institute's copyrighted material: it is used ONLY as a private topic map. It is never committed or published, and notes are always written fresh (copy guard: no run of 12+ shared words). | Legal safety: summarised or rephrased coaching notes on a public site can still infringe. |
