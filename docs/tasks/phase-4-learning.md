# Phase 4: Learning features

> ⛔ **Lean (D14):** sirf **Task 14** chalana hai. Task 13 ki jagah [13-lite](lean-tasks.md#task-13-lite) chalega. 13 aur R3 cut hain.

Order: **14** → **13** → **15 (Claude)** + **R3**

> Task 14 ke liye mujhe tumhari PYQ files ka folder path chahiye. Prompt mein `<PYQ_FOLDER>` ki jagah wo path daal dena.

---

## Task 14
**PYQ data extraction (your PYQ files → clean JSON)**
**Kaun:** Antigravity · Orchestrator (bahut saari files, multi-step) · fallback Gemini 4 Neon

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → src/pipeline/eval/topic-slugs.json (from Task 07) → this prompt.
CLAIM: add "Task 14" under "Active" in docs/memory/STATE.md with: data/pyq/**, scripts/pyq/**. Stop if claimed.
LAST: release the claim, set Task 14's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

Source: the user's UPSC Sociology Optional PYQ files in <PYQ_FOLDER> (PDF/DOCX/images). Read-only, never modify the originals.
Goal: one clean, verified dataset of Mains questions.

1. Extract every question into data/pyq/pyq.json, an array of:
   { id: "2019-P1-Q1a", year: 2019, paper: "P1"|"P2", section: "A"|"B"|null, qno: "1(a)", marks: 10|15|20|…, wordLimit: number|null,
     question: string (exact wording, typos fixed only if obviously OCR), topicSlugs: string[] (from topic-slugs.json, 1-3, best match first), thinkers: string[] (names explicitly asked about), confidence: 0-1 (your mapping confidence) }
2. Scripts in scripts/pyq/ (TypeScript, run with tsx): extraction helpers, a Zod validator, and a stats script.
3. Quality: no duplicates (same year+paper+qno); every year present in the files is covered. Write data/pyq/issues.md listing unreadable pages, ambiguous numbering, and every item with confidence < 0.6 so a human can check them.
4. Stats in LOG: count per year × paper, and the % mapped with confidence ≥ 0.8.

DONE WHEN: the validator passes; issues.md is complete; commit `chore: extract and map sociology pyqs`.
````

---

## Task 13
**Collections + APIs: PYQs, Concepts, MCQs, search, practice, progress**
**Kaun:** Codex · 6.0 · **Kab:** 14 ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/03-pages.md §8-§10 and §13 closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → data/pyq/pyq.json format (Task 14) → this prompt. Do not write code before this.
CLAIM: add "Task 13" under "Active" in docs/memory/STATE.md with: src/collections/{Pyqs,Concepts,Mcqs}.ts, src/lib/data/{pyq,concepts,search,practice}.ts, src/lib/data/types.ts (append only), src/endpoints/**, src/app/(frontend)/{pyq,concepts,search}/**/page.tsx, src/components/views/{Pyq,Concept,Search}*View.tsx (stubs only), src/seed/**, scripts/pyq/import.ts, src/payload.config.ts, src/hooks/payload/**, tests/**. Stop if claimed.
LAST: release the claim, set Task 13's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

1. Collections:
   - pyqs: year, paper, section, qno, marks, wordLimit, question, topics (rel hasMany), thinkers (rel hasMany), answerOutline (blocks: LAYOUT_BLOCKS; optional, AI-drafted later), status (drafts). Unique (year, paper, qno).
   - concepts: term, slug, definition (textarea), thinkers, topics, layout (blocks), status.
   - mcqs: question, options (4), answerIndex, explanation, topics, source (manual|ai), status.
   Topic detail should now also return pyqs: PyqItem[] → append `pyqs` to TopicDetail ONLY after confirming with a LOG proposal; otherwise expose getTopicPyqs(topicSlug) separately (preferred, no contract change).
2. Import: scripts/pyq/import.ts reads data/pyq/pyq.json → upserts pyqs (published), resolving slugs; idempotent; prints counts.
3. Data functions + types (append to types.ts):
   PyqItem = { id: string; year: number; paper: PaperCode; qno: string; marks: number; question: string; topics: TopicChip[]; thinkers: ThinkerChip[]; hasOutline: boolean; href: string }
   getPyqs(params: { paper?; topic?; thinker?; yearFrom?; yearTo?; marks?; page?; limit? ≤ 50 }): Promise<Paginated<PyqItem> & { facets: { years: {year: number; count: number}[]; topics: {slug: string; title: string; count: number}[] } }>
   ConceptDetail = { term; slug; href; definition; thinkers: ThinkerChip[]; topics: TopicChip[]; layout; recentCA: CACard[] }; getConcept(slug), getConcepts()
   SearchResult = { kind: 'topic'|'ca'|'thinker'|'pyq'|'concept'|'page'; title: string; href: string; snippet: string; meta: string | null }
4. Search: Postgres full-text search (tsvector generated columns + GIN index via the adapter's afterSchemaInit/migration) across topics, current-affairs (published), thinkers, pyqs, concepts, pages. GET /api/search?q= (2-80 chars, Zod) → { success, data: { groups: { kind, items: SearchResult[] }[] } }, ≤ 5 per kind, ≤ 50 ms p95 locally on seeded data; rate limit 30/min/IP. getSearch(q) for the /search page.
5. Practice: /api/practice/topic/:slug returns 10 random published MCQs for a topic (no answer leakage? answers are needed client-side for instant feedback; acceptable, it is practice). Progress/streaks stay in localStorage on the client (Claude), no API now.
6. Routes (wiring + stub views only): /pyq (searchParams filters), /pyq/[id] (question page), /concepts/[slug], /search (?q=). Revalidate on publish. Add these URLs to the sitemap.
7. Tests: import idempotency, filter combinations, search ranking (a topic title match ranks above body matches), Zod params.

DONE WHEN: all routes return 200 with stub JSON on seeded data; search answers within budget; all checks pass; commit `feat: pyq bank, concepts, mcqs and full-text search`.
````

---

## Task 15: Learning UI (Claude, main)
PYQ bank (filters, year slider, PYQ stamps), Practice + streak flame (Lottie), ⌘K search palette, Concept pages, Digest + Quiz pages. Task 13 ke baad main karunga.

---

## Task R3
**Review of Task 13 + data spot-check**
**Kaun:** Antigravity · Claude Sonnet 5.5 · Read-only

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → docs/tasks/phase-4-learning.md (specs) → this prompt.
READ-ONLY. Only writes: docs/reviews/R3-phase4.md and your LOG.md entry (include "Read-first: ✓").
1. Review the Task 13 commit against its spec (contract, access: drafts never leak, search injection safety, query bounds, indexes really created, rate limits).
2. Data spot-check: sample 25 random PYQs; compare each with the original file in the PYQ folder named in Task 14's LOG entry. Report wording errors, wrong year/paper/marks, and topic mappings you disagree with (give the better slug).
3. Run tsc, eslint, unit, build; time /api/search for 10 queries and report p50/p95.
Verdict APPROVE | APPROVE WITH FIXES | BLOCK, findings table with severity | file:line or pyq id | problem | fix.
````
