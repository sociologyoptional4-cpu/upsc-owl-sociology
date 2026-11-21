# AGENTS.md — read this first (every agent, every session)

You are one of several AI agents (Claude Code, Codex, Antigravity/Gemini, …) building **one** project together. Act as if one person did all the work: same conventions, same memory, no duplicate effort.

## Project
**UPSC OWL Sociology**: a dynamic, AI-automated website for UPSC Sociology Optional. Pages are built from CMS blocks, so new pages go live from the admin panel or the API without a deploy. A daily AI pipeline turns news into syllabus-linked notes (Phase 2).
Stack: Next.js 16 (App Router) · Payload CMS 3 (`/admin`, `/api`) · Postgres · Tailwind v4 · Lenis/GSAP/Motion · TypeScript strict.
Content AI providers: **OpenAI API writes** and **DeepSeek API scores/filters**. Do not use Anthropic API for content generation.
Full plan: `docs/README.md` → `docs/01…06`.

## Roles
| Agent | Role |
|-------|------|
| **Claude Code** | Main mind + UI/UX designer. Plans, writes task prompts, reviews results, and builds all design: components, styling, animation, 3D. |
| **Codex / Antigravity models** | Execute tasks from `docs/tasks/NN-*.md`: data layer, CMS, API, pipeline, tests, assets gathering, commits. |

## Shared memory (the protocol)
| File | What | Who writes |
|------|------|-----------|
| `docs/memory/STATE.md` | Current phase, active tasks + claimed files, blockers, next up | Every agent: at start (claim) and end (release) |
| `docs/memory/DECISIONS.md` | Decisions that must not be re-argued (numbered, dated) | Only Claude, or the user. Others *propose* in LOG. |
| `docs/memory/LOG.md` | Append-only work log, newest at the bottom | Every agent, at the end of every task |
| `docs/tasks/README.md` | Task board (order, owner, model, status) | Claude creates tasks; the doing agent flips the status |

**At start (mandatory, before ANY work):** read in this order:
1. this file
2. `docs/tasks/MASTER-PLAN.md`: all phases, who does what, where your task fits
3. `docs/README.md` and `docs/01-architecture.md` … `docs/06-roadmap.md`: the full plan. Skim them all; read closely the ones your task touches.
4. `docs/memory/STATE.md`, `docs/memory/DECISIONS.md`, and the last ~40 lines of `docs/memory/LOG.md`
5. your task's prompt and spec

Do not write code until you have read all of these. Your LOG entry must include `Read-first: ✓`. Add your task under "Active" in STATE.md with the files/dirs you will touch. If another active task already claims them, stop and report.
**At end:** remove yourself from "Active", update "Done/Next", and append to LOG.md:
```
## YYYY-MM-DD HH:MM · <agent> (<model>) · Task NN
- Did: …
- Files: …
- Read-first: ✓ (AGENTS, MASTER-PLAN, docs 01-06, memory)
- Checks: tsc ✓ eslint ✓ unit ✓ build ✓   (say ✗ honestly if something failed)
- Contract changes: none | <exact list>
- Open issues / proposals: …
```
Never delete or rewrite other agents' log entries. Keep entries short.

## File ownership
| Path | Owner |
|------|-------|
| `src/components/**`, `src/styles/**`, `src/blocks/*/Component.tsx`, UI hooks in `src/hooks/use*.ts` | Claude (design) |
| `src/collections/**`, `src/globals/**`, `src/access/**`, `src/hooks/payload/**`, `src/lib/data/**`, `src/lib/queries.ts`, `src/seed/**`, `src/pipeline/**`, `scripts/**`, `src/app/(payload)/**`, `tests/**`, configs | Task agents |
| `src/app/(frontend)/**/page.tsx` | Task agents write data fetching, metadata and static params; the JSX only renders `<XView data={…} />`, which Claude owns |
| `src/lib/data/types.ts` | The contract between data and UI. Change it only if your task says so, and log every change. |

## Rules (all agents)
- TypeScript strict, no `any`; validate external input with Zod; immutable updates; functions < 50 lines, files < 400 lines.
- Never commit `.env`, secrets, `assets-src/`, or `sociology_hinglish.mp4`. Never print secrets.
- Commits: `<type>: <description>` (feat, fix, refactor, chore, test, docs, perf). Commit only what your task covers.
- Before you say a task is done, run: `npx tsc --noEmit`, `npx eslint src tests`, `npm run test:unit`, `npm run build`. Report failures; don't hide them.
- Revalidation: content changes must refresh affected URLs via `src/hooks/payload/revalidate.ts`. Never require a redeploy for content.
- User-facing copy is in **Hinglish** (Roman script). Code, comments and commits are in English.
- Assets: only licenses listed in `ASSETS.md`, and every asset gets a row there.

## Commands
`npm run dev` · `npm run build` · `npm run seed` · `npm run generate:types` (after schema edits) · `npm run test:unit` · `npm run lint`
Local DB: Postgres `aum_sociology` (URL in `.env`). Admin login for local testing comes from `SEED_ADMIN_*` in `.env`.
