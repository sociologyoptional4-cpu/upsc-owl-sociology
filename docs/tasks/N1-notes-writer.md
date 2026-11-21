# Task N1: Full syllabus map + PYQ import + daily notes writer (4-5 pages/day)

**Kaun:** Codex 6.0 · **Kab:** C2 ke baad · **Kyun:** pehle 8 topic pages (Paper 1, Unit 1-2) Claude ne bana diye hain. Baaki syllabus AI roz 4-5 pages likh ke review queue mein daalega.

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/05-automation-pipeline.md closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md (D11-D15), the tail of docs/memory/LOG.md → src/seed/notes/unit1-2.ts and src/seed/notes-batch-1.ts (the gold-standard format) → this prompt. Do not write code before this.
CLAIM: add "Task N1" under "Active" in docs/memory/STATE.md with: src/collections/{Topics,Units,Pyqs}.ts, src/lib/data/{syllabus,pyq}.ts, src/lib/data/types.ts (append only + the one ReviewItem change below), src/endpoints/**, src/pipeline/notes/**, src/pipeline/llm/prompts/notes-*.md, scripts/notes/**, scripts/pyq/**, data/**, src/seed/**, .github/workflows/notes-daily.yml, src/payload.config.ts, tests/**. Stop if claimed. Never touch src/components/** or src/styles/**.
LAST: release the claim, mark N1 ✅ in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files. tsc, eslint, unit, build must pass.

COPYRIGHT RULE (D15, non-negotiable): the handouts file (env HANDOUTS_JSONL, default "/Volumes/ssd t7/drives/sociology/_Handouts_Sociology2024byNishantSir_LevelupIAS_KING_R_QUEEN_P.jsonl") is a coaching institute's copyrighted material. It is a PRIVATE topic map only: never copy it into the repo, never commit it, never send its text to the public site, and never quote it in notes. Notes must be written fresh. The PYQ file (data/pyq/paper1-2013-2025.jsonl) is public UPSC data and may be published.

PART 1: Syllabus order + full map
- Add `order` (number) to topics and units. Topics within a unit and units within a paper sort by `order` in every data function (getSyllabusTree, unit/paper pages, coverage). Backfill: batch-1 topics follow the official sub-topic order (Unit 1: modernity=1, scope=2, common-sense=3; Unit 2: science=1, strands=2, positivism=3, fact-value=4, non-positivist=5).
- scripts/notes/build-syllabus.ts (idempotent): create every UPSC Sociology unit and sub-topic for Paper 1 (units 1-10) and Paper 2 (A, B, C sections; use the official syllabus wording, which is also on page 1-4 of the handouts) as PUBLISHED topics with an empty layout, slugified titles and `order`. Never overwrite a topic that already has a layout. Existing seed units keep their slugs (map them; don't create duplicates).

PART 2: PYQ bank data (replaces Task 14 + 13-lite)
- Collection `pyqs` exactly as in docs/tasks/lean-tasks.md Task 13-lite, plus the data functions getPyqBank / getTopicPyqs and the /pyq route with a stub PyqBankView.
- scripts/pyq/import.ts imports all 365 rows of data/pyq/paper1-2013-2025.jsonl (unit → unit, link topics by the same keyword approach as src/seed/notes-batch-1.ts; unmatched → unit only). Note: the source file wrongly labels every Unit 4 subtopic as "G H Mead"; ignore that subtopic and map Unit 4 questions by thinker name in the question text (Marx, Durkheim, Weber, Parsons, Merton, Mead).

PART 3: Daily notes writer (OpenAI per D11)
- scripts/notes/index-handouts.ts: builds data/handouts-index.json = [{ topicSlug, pages: number[] }] by matching sub-topic headings in the handouts. Page NUMBERS only, no text (safe to commit).
- src/pipeline/notes/run-notes.ts: picks the next N topics (default 5, env NOTES_PER_DAY, max 5) in syllabus order whose layout is empty and that have no pending draft. For each topic it sends the writer: topic + unit title, its PYQs, related thinkers, the handout pages for that topic as PRIVATE background (truncated to a token budget), and 2 batch-1 notes as gold examples. Prompt file: src/pipeline/llm/prompts/notes-writer.v1.md (style = docs/tasks/phase-2-automation.md Task 07 style guide; Hinglish, original wording, no quotes > 15 words, no invented facts or years).
- Output JSON (Zod-validated) = { summary, points[3-6], bodyMarkdown (h2/h3, lists, concise Markdown pipe tables when they clarify supplied comparisons), keyTerms[3-6]{term, meaning, thinker?}, answerTip, thinkerSlugs[] }. Tables need a header row, at most 4 columns and 8 data rows, and no raw HTML. The runner builds the layout exactly like batch 1: summary("Ek nazar mein") → richText(body) → keyTerms → pyqList (heading "UPSC mein kab-kab pucha gaya", from the PYQ data, newest first) → callout tip.
- Copy guard: reject (and retry once) any output that shares a run of ≥ 12 consecutive words with the handout excerpt.
- Write through a new endpoint POST /api/ingest/notes (ai-bot/admin; same auth, size and rate limits as /api/ingest/batch). It saves the topic's layout as a DRAFT version (topics have drafts) with new fields reviewStatus='pending', aiMeta {model, promptVersion, costUsd}. The published (empty) version stays live until approval.
- Shared daily cost cap with the CA pipeline (site-settings.maxDailyUsd) and the kill switch (pipelineEnabled).
- .github/workflows/notes-daily.yml: cron "30 1 * * *" (07:00 IST) + workflow_dispatch; DRY_RUN supported; npm script notes:daily and notes:dry.

PART 4: Review queue covers notes
- GET /api/admin/review-queue now returns pending topics too. Contract change (allowed): ReviewItem gets `kind: 'ca' | 'topic'`; for topics, date = draft updatedAt (YYYY-MM-DD), sources = [], previewHref = draft preview of the topic URL, relevance = null.
- POST /api/admin/review/:id needs `kind` in the body ('ca' default). Approve a topic ⇒ publish its draft. Reject ⇒ keep the empty published version and store rejectReason.
- Telegram auto-post stays for current affairs only (not for topic notes).

TESTS: order sorting; syllabus script idempotency; PYQ import counts (365) and the Unit-4 fix; notes Zod schema; the copy guard; review approve publishes a topic draft. Run `npm run notes:dry` and paste one generated note (titles only) in LOG.
DONE WHEN: /syllabus shows the full Paper 1 + Paper 2 map in official order; /pyq lists 365 PYQs; one real notes run (NOTES_PER_DAY=2) puts 2 topic drafts in the review queue; commit `feat: full syllabus map, pyq import and daily notes writer`.
````
