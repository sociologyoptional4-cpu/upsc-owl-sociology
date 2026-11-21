# Task N1b: Finish N1 (schema, endpoints, imports, migration, run)

**Kaun:** Codex 6.0 · **Kab:** abhi · **Spec:** [N1](N1-notes-writer.md). Claude ne prep kar diya hai, ye prompt sirf bacha hua kaam hai.

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (skim; read docs/05-automation-pipeline.md closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md (D11-D15), the tail of docs/memory/LOG.md → docs/tasks/N1-notes-writer.md (FULL SPEC: follow it) → this prompt. Do not write code before this.
CLAIM: add "Task N1b" under "Active" in docs/memory/STATE.md with: src/collections/{Topics,Units,Pyqs}.ts, src/lib/data/**, src/endpoints/**, src/pipeline/notes/**, scripts/notes/**, scripts/pyq/**, data/**, src/seed/**, src/migrations/**, src/payload.config.ts, src/payload-types.ts, package.json, .github/workflows/notes-daily.yml, src/app/(frontend)/pyq/**, src/components/views/PyqBankView.tsx (stub only), tests/**. Never touch other src/components/** or src/styles/**.
LAST: release the claim, mark N1 ✅ in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only these files (never git add -A). tsc, eslint, unit, build must pass. Run long commands (> 30-60 s) in the background.

ALREADY DONE BY CLAUDE (committed in "feat: n1 prep"; review and reuse, don't rewrite):
- scripts/notes/syllabus.ts: the full official syllabus (P1 10 units, P2 15 units with a `section` label, 98 topics, exam order, existing slugs reused; LEGACY_UNIT_SLUGS lists the old non-official seed unit to sort last).
- scripts/pyq/mapping.ts: mapPyqToTopic(unit, question) for all P1 units (Unit 4 by thinker name; verified distribution on all 365 rows).
- scripts/notes/index-handouts.ts + data/handouts-index.json: hand-mapped handout PAGE NUMBERS for 28 P1 topics (the handouts cover Paper 1 only). Page numbers only (D15).
- src/pipeline/notes/{schema,copy-guard,handouts,writer,run-notes}.ts + src/pipeline/llm/prompts/notes-writer.v1.md: the notes writer (OpenAI json_object mode, NOT strict json_schema; Zod + table limits + 12-word copy guard; one retry with a repair hint) and the daily runner. The runner expects these two endpoints (build them exactly):
    GET  /api/ingest/notes/next?limit=N  (ai-bot/admin) → { success, data: { topics: { id, slug, title, unitTitle, paper: 'P1'|'P2', pyqs: { year, question }[], allowedThinkerSlugs: string[] }[] } }
         = next N published topics in syllabus order (paper → unit.order → topic.order) whose published layout is empty AND that have no pending draft.
    POST /api/ingest/notes  (ai-bot/admin) body { topicId, note: NoteOutput (src/pipeline/notes/schema.ts), model, promptVersion, costUsd }
         → re-validate with noteOutputSchema, build the layout exactly like src/seed/notes-batch-1.ts (summary "Ek nazar mein" → richText(markdownToLexical(bodyMarkdown)) → keyTerms → pyqList "UPSC mein kab-kab pucha gaya" from the pyqs collection, newest first → callout tip), set summary + thinkers (slugs → ids), save as a DRAFT version with reviewStatus 'pending' + aiMeta. The published empty version must stay live.
- src/pipeline/ledger.ts: startRun now unwraps the Payload { doc } response (it returned undefined ids before).
- tests/unit/notes.test.ts (10 tests).

REMAINING WORK (from the N1 spec):
1. Schema: units.order + units.section (text, optional); topics.order + reviewStatus (pending|approved|rejected, optional) + rejectReason + aiMeta {model, promptVersion, costUsd}; new collection `pyqs` (as in lean-tasks.md Task 13-lite) registered in payload.config. Sort by `order` everywhere in src/lib/data (getSyllabusTree, paper/unit pages, coverage). Keep the CA collection unchanged.
2. Production migration: dev uses push, prod uses migrations (`npm run build:production` runs `payload migrate`). Create it with `npx payload migrate:create n1_syllabus_pyqs_notes`, commit it, and check it is additive only (no drops).
3. scripts/notes/build-syllabus.ts (idempotent; uses SYLLABUS; sets order/section; creates missing units/topics as PUBLISHED with empty layout; never overwrites a topic that has a layout; the legacy unit gets order 99).
4. scripts/pyq/import.ts: all 365 rows of data/pyq/paper1-2013-2025.jsonl → pyqs (published), topic via mapPyqToTopic, unit via the P1 unit number; idempotent (unique year+paper+qno, or year+question hash if qno missing).
5. Data + route: getPyqBank / getTopicPyqs + types (lean-tasks.md Task 13-lite) and /pyq with a stub PyqBankView (Claude designs it later).
6. Endpoints above + review queue covers topics: ReviewItem gets `kind: 'ca' | 'topic'` (Claude's ReviewQueueClient already sends `kind` in approve/reject and shows a badge); approve a topic → publish its draft; reject → keep the empty published version + store rejectReason. Telegram stays CA-only.
7. npm scripts notes:daily / notes:dry / syllabus:build / pyq:import; .github/workflows/notes-daily.yml (cron "30 1 * * *" + workflow_dispatch with dry_run input, same secrets as daily-ca; skip safely when AI_BOT_API_KEY is missing, like daily-ca).
8. Tests from the N1 spec (order sorting, syllabus idempotency, 365 import + Unit-4 fix, approve publishes a topic draft).
9. Run locally: syllabus:build → pyq:import → notes:dry (NOTES_PER_DAY=2; paste topic + headings in LOG) → one real notes:daily with NOTES_PER_DAY=2 → confirm 2 topic drafts in GET /api/admin/review-queue.
10. Production: after pushing, confirm the Vercel build applied the migration, then run syllabus:build and pyq:import against PROD (prod DATABASE_URL from Vercel env; never print it). Do NOT run the seed in prod.
Commit: `feat: full syllabus map, pyq import and daily notes writer`, then push.
````
