# Phase 2: Automation (AI roz khud likhega)

Order (lean, D14): **U1 + 05 + 07 (parallel)** → **06** → **09 (Claude)**. Task 08 aur R2 cut hain.

---

## U1 — Tumhara kaam: keys
Ye tum khud karoge. Koi agent tumhare accounts ya payment nahi chhuega.
1. **OpenAI API key:** platform.openai.com/api-keys → Create. OpenAI API billing pe ek monthly limit zaroor set karo.
2. **DeepSeek API key:** platform.deepseek.com → API keys.
3. **Telegram bot** (auto-post ke liye): Telegram mein @BotFather → `/newbot` → token milega. Bot ko channel @sociologyoptional4 mein admin banao, sirf "Post messages" permission ke saath.
4. Ye values local `.env` mein daalo (repo mein kabhi nahi): `OPENAI_API_KEY`, `DEEPSEEK_API_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHANNEL_ID` (= `@sociologyoptional4`). GitHub repo banne ke baad yahi values **Settings → Secrets → Actions** mein bhi daalni hain.
5. Kaam ho jaaye to mujhe bolna "U1 done". Keys chat mein mat bhejna.

---

## Task 05
**Ingest infrastructure: sources, pipeline runs, review workflow, ingest API**
**Kaun:** Codex · 6.0 · **Kab:** Task 01 ke baad (07 ke saath parallel)

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/04-cms-admin-api.md and docs/05-automation-pipeline.md closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt. Do not write code before this.
CLAIM: add "Task 05" under "Active" in docs/memory/STATE.md with: src/collections/{Sources,PipelineRuns,CurrentAffairs}.ts, src/globals/SiteSettings.ts, src/hooks/payload/**, src/endpoints/**, src/lib/ingest/**, src/lib/data/types.ts (append only), src/payload.config.ts, src/seed/**, tests/**. Stop if claimed by another active task.
LAST: release the claim, set Task 05's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files. Run tsc, eslint, unit tests and build before committing.

Build the server side of the review-first AI workflow. Never touch src/components/** or src/styles/** (Claude builds the admin UI in Task 09 against the contracts below).

1. Collections
   - `sources`: name, feedUrl (validateHref), kind (rss|official|manual), trust (1-3), active (checkbox), lastFetchedAt, lastError. Admin + editor only. Seed it with feeds you VERIFY respond with valid RSS/Atom today: PIB press releases (English), The Hindu National, The Hindu Editorial/Opinion, Indian Express Explained, Down To Earth. PRS has no reliable RSS: add it as kind "manual", active false. Record the verification in LOG.
   - `pipeline-runs`: startedAt, finishedAt, status (running|ok|partial|failed), counts {fetched, deduped, scored, kept, written, failedValidation, published}, costUsd, tokens {input, output, cached}, errors (array of {stage, message}), promptVersion. Admin read only; ai-bot can create/update.
2. current-affairs additions: reviewStatus (pending|approved|rejected; default pending when isAiGenerated), rejectReason (textarea), sourceHash (text, unique, index; sha256 of the normalized primary source URL), embedding (stored for dedupe; use pgvector if the Payload postgres adapter allows a custom column via afterSchemaInit, else a JSON number array plus in-app cosine; document which in LOG).
3. site-settings: keep pipelineEnabled, autoPublish, maxDailyUsd; add autoPublishMinRelevance (number, default 0.8).
4. forceBotDrafts: an ai-bot publish is allowed ONLY when autoPublish is on AND aiMeta.relevance ≥ autoPublishMinRelevance AND the doc passed validation (flag set by the ingest endpoint). Otherwise draft. Never mutate input; return a new object. Unit-test every branch.
5. Markdown → Lexical: src/lib/ingest/markdownToLexical.ts using @payloadcms/richtext-lexical's convertMarkdownToLexical with the project's editor config. Supported: headings h2/h3, paragraphs, bold/italic, lists, links (http/https only). Strip raw HTML. Unit tests.
6. Endpoints (Payload root `endpoints`, all return { success, data, error }):
   - POST /api/ingest/batch (ai-bot or admin): body = { runId, items: IngestItem[] } where IngestItem = { headline, date (YYYY-MM-DD), paper, topicSlugs[], thinkerSlugs[], sources[{name,url}], summary, relevance, promptVersion, model, costUsd, layout: AiBlock[] } (AiBlock from src/blocks/ai-schema.ts; richText blocks carry `markdown`, converted by step 5). Zod-validate; resolve slugs → ids (unknown slug ⇒ reject item, never create topics); dedupe by sourceHash; create as draft with isAiGenerated true, reviewStatus pending. Max 20 items, body ≤ 1 MB, rate limit 10 req/min per key. Response data: { created: number[], skipped: {headline, reason}[] }.
   - GET /api/admin/review-queue (admin/editor): data: ReviewItem[] where
     ReviewItem = { id: number; headline: string; date: string; relevance: number | null; summary: string | null; sources: {name: string; url: string}[]; topics: TopicChip[]; thinkers: ThinkerChip[]; model: string | null; promptVersion: string | null; createdAt: string; previewHref: string }
     Sorted by relevance desc, then date desc. Limit 50.
   - POST /api/admin/review/:id (admin/editor): body { action: 'approve' | 'reject', reason?: string }. Approve ⇒ reviewStatus approved + publish. Reject ⇒ reviewStatus rejected, keep as draft, store reason (required for reject).
   - GET /api/admin/today (admin/editor): data: TodayStats = { lastRun: { startedAt: string; finishedAt: string | null; status: string; counts: Record<string, number>; costUsd: number; errors: {stage: string; message: string}[] } | null; pendingReview: number; publishedToday: number; costLast7Days: { date: string; usd: number }[] }
   - GET /api/admin/coverage (admin/editor): data: CoverageRow[] = { paper: 'P1'|'P2'; unitTitle: string; topicTitle: string; topicHref: string; caCount: number; hasNotes: boolean; lastCaDate: string | null }[]
   Append ReviewItem, TodayStats and CoverageRow to src/lib/data/types.ts (append only; don't change existing types).
7. Draft preview: /api/preview?collection=current-affairs&id=…&secret=… enables Next draftMode and redirects to the article URL; the article route reads drafts when draftMode is on. PREVIEW_SECRET env. previewHref above uses it.
8. Tests: unit tests (bot publish rules, dedupe hash normalization, markdown conversion, Zod ingest schema), integration tests (ingest creates drafts; a duplicate is skipped; an unknown topic is rejected; the review approve flow publishes).

DONE WHEN: the curl examples in your LOG entry show ingest → review-queue → approve → public article 200; all checks pass; commit `feat: ingest api, review workflow and pipeline bookkeeping`.
````

---

## Task 07
**AI prompts: Hinglish style guide, scorer + writer prompts, gold examples, eval set**
**Kaun:** Codex · OpenAI model (writing quality + Sociology depth) · **Kab:** abhi, 05 ke saath parallel. Code nahi likhna.

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/05-automation-pipeline.md closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt.
CLAIM: add "Task 07" under "Active" in docs/memory/STATE.md with: src/pipeline/llm/prompts/**, src/pipeline/eval/**. Stop if claimed.
LAST: release the claim, set Task 07's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

You are the content architect for UPSC Sociology Optional (Paper 1 + Paper 2, official UPSC syllabus). Write prompt files only; no TypeScript.

Deliverables (markdown, each starting with a front-matter `version:` line):
1. src/pipeline/llm/prompts/style-guide.md: the voice. Hinglish in Roman script, like a sharp mentor talking to a serious aspirant. Short sentences. English for technical sociological terms (anomie, dominant caste, ideal type). Never Devanagari. Banned: filler ("In today's world…"), hype, emojis, invented statistics, direct quotes longer than 15 words, opinions on party politics. Required: every factual claim traceable to the given source text; numbers and dates exactly as in the source; thinkers cited by concept, not fake quotes.
2. scorer.v1.md (DeepSeek): input = up to 20 items {id, title, description, source}. Output strict JSON array {id, relevant: boolean, score 0-1, paper: "P1"|"P2"|"Both", candidateTopicSlugs: string[] (ONLY from the provided topic list), reason (≤ 20 words)}. Give a scoring rubric with anchored examples: 0.9 = direct syllabus link plus answer-writing value (e.g. census caste data, a tribal land-rights judgment); 0.5 = weak link; 0.1 = sports, markets, celebrity. Instruct the model to reject crime-only and political horse-race stories.
3. writer.v1.md (OpenAI): input = one item + source text excerpt + the matched topics' titles/summaries + the thinkers list. Output = JSON matching IngestItem (see docs/tasks/phase-2-automation.md, Task 05 step 6) with this exact layout order: summary (3-5 points: "Khabar kya hai") → richText markdown "## Sociology angle" (thinker + concept + 1 Indian example) → keyTerms (3-6 rows) → callout tone "pyq" ONLY if a real PYQ theme matches (otherwise omit; never invent a PYQ year) → richText markdown "## Answer mein kaise use karein" (intro line, 3 body points, conclusion line) → callout tone "tip" with 1 probable mains question. Include the JSON schema verbatim in the prompt.
4. gold-examples.md: 3 complete, high-quality input→output pairs on clearly real, older, well-documented Indian topics (e.g. the 2011 SECC; Navtej Singh Johar 2018; the Forest Rights Act 2006). Facts must be correct; if unsure about a detail, leave it out.
5. src/pipeline/eval/relevance-set.json: 40 realistic headlines (20 relevant, 20 not) with expected {relevant, paper, topicSlugs}, using topic slugs from src/seed/data.ts plus the full UPSC syllabus topics you list in src/pipeline/eval/topic-slugs.json (slugify each syllabus sub-topic; mark which ones already exist in seed).
6. src/pipeline/eval/rubric.md: how a human (or a reviewer model) grades a written note 1-5 on accuracy, syllabus link, answer-writing usefulness, and Hinglish clarity.

DONE WHEN: all files exist and are internally consistent (the slugs used in examples exist in topic-slugs.json, the writer schema matches Task 05's IngestItem); commit `docs: pipeline prompts, style guide and eval set v1`.
````

---

## Task 06
**Pipeline runner + GitHub Actions daily cron**
**Kaun:** Codex · 6.0 · **Kab:** 05, 07 aur U1 done hone ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/05-automation-pipeline.md closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → src/pipeline/llm/prompts/* (from Task 07) → this prompt. Do not write code before this.
CLAIM: add "Task 06" under "Active" in docs/memory/STATE.md with: src/pipeline/** (except prompts/ and eval/), .github/workflows/daily-ca.yml, package.json, tests/unit/pipeline/**. Stop if claimed.
LAST: release the claim, set Task 06's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

Implement docs/05-automation-pipeline.md §2-§5 as a Node/TS script run with `tsx`, talking to the site ONLY through HTTP (`/api/ingest/batch`, Payload REST) with an ai-bot API key. Never import Payload in the pipeline.

Structure: src/pipeline/run-daily.ts (orchestrator) + sources/fetch-feeds.ts + clean.ts + dedupe.ts + llm/deepseek.ts + llm/openai.ts + validate.ts + publish.ts + cost.ts + config.ts.
- config.ts: Zod-validate env at startup: SITE_URL, AI_BOT_API_KEY, OPENAI_API_KEY, DEEPSEEK_API_KEY, WRITER_MODEL, SCORER_MODEL, PRICE_* (per-million-token prices as env numbers, NOT hard-coded), MAX_ITEMS_PER_DAY (default 8), DRY_RUN. Choose WRITER_MODEL from the currently supported OpenAI models and check official OpenAI SDK documentation; put the chosen id in .env.example with a comment saying where it came from.
- Read site-settings via REST first: if pipelineEnabled is false → exit 0 with a log line. Stop before any LLM call that would push today's spend over maxDailyUsd.
- fetch: active sources from REST; rss-parser with a 10s timeout per feed; one failing feed never kills the run; keep the last 48h only.
- clean + dedupe: normalize URL (strip utm_*, fragments), sha256 → skip hashes the site already has (GET current-affairs?where[sourceHash][in]=…, chunked); near-duplicate titles by cosine ≥ 0.88 (use the embedding approach chosen in Task 05).
- score: DeepSeek, batches of 20, JSON mode, prompt scorer.v1.md; keep score ≥ 0.6, top MAX_ITEMS_PER_DAY.
- write: official OpenAI TypeScript SDK; system = style-guide + writer prompt + gold examples, using prompt caching for the static prefix when supported; structured JSON output validated with the Zod IngestItem schema; on failure, 1 retry with the Zod error text, then skip + record.
- guards (validate.ts): source URL present; n-gram copy check (no 15+ consecutive words shared with the source excerpt); topic/thinker slugs exist; MCQ indexes valid.
- publish: POST /api/ingest/batch in chunks of ≤ 10; create/update a pipeline-runs doc at start/end with counts, tokens (including cached), cost.
- DRY_RUN=1 prints what would be sent, calls no write endpoints.
- .github/workflows/daily-ca.yml: cron "30 0 * * *" (06:00 IST) + workflow_dispatch; Node 22; npm ci; `npx tsx src/pipeline/run-daily.ts`; secrets from repo secrets. On failure the workflow just fails (GitHub emails the repo owner); no Telegram (D14).
- npm scripts: pipeline:daily, pipeline:dry, pipeline:eval (runs scorer on src/pipeline/eval/relevance-set.json and prints precision/recall).
- Unit tests with mocked fetch/LLM clients: feed failure isolation, dedupe, cost cap stops the run, retry-then-skip, copy guard.

DONE WHEN: `npm run pipeline:dry` works locally against the dev site with real feeds; one real run (non-dry) creates drafts that appear in GET /api/admin/review-queue; pipeline:eval runs (report precision; ≥ 0.8 is the goal, not a blocker); all checks pass; commit `feat: daily ai pipeline and scheduled workflow`.
````

---

## Task 08 — ⛔ CUT (D14): Telegram/quiz/digests abhi nahi. Ye prompt mat chalana.
**Telegram fan-out, daily quiz, weekly/monthly digests**
**Kaun:** Codex · 6.0 · **Kab:** 06 ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/03-pages.md §10-11 and docs/05-automation-pipeline.md closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt. Do not write code before this.
CLAIM: add "Task 08" under "Active" in docs/memory/STATE.md with: src/collections/{Digests,Quizzes}.ts, src/lib/telegram/**, src/lib/data/{digests,quiz}.ts, src/lib/data/types.ts (append only), src/pipeline/{quiz,digest}*.ts, src/app/(frontend)/{digest,practice}/**/page.tsx, src/components/views/{Digest,Quiz}View.tsx (stubs only), .github/workflows/{daily-quiz,weekly-digest,monthly-digest}.yml, src/hooks/payload/**, tests/**. Stop if claimed.
LAST: release the claim, set Task 08's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

1. Telegram (src/lib/telegram/): when a current-affair becomes published (afterChange, only on the transition from not-published to published, only if TELEGRAM_BOT_TOKEN is set), post: bold headline, 3 summary bullets, topic tags as hashtags, link to the article. HTML parse mode with all text escaped. Store telegramMessageId on the doc so it never posts twice. Failures are logged, never thrown (publishing must not fail because Telegram is down).
2. Quizzes collection: date (unique), items[{question, options[4], answerIndex, explanation, caId}], status. Pipeline step src/pipeline/quiz-daily.ts (06:30 IST workflow): build 5 MCQs from today's published CA using the writer model (reuse the Task 06 clients, config, guards, cost cap); POST via REST as the ai-bot (draft; same review rules).
3. Digests collection: type (weekly|monthly), key ("2026-w47" | "2026-11"), range {from, to}, intro (textarea, AI-written ≤ 80 words), groups [{topic (rel), items (rel current-affairs, hasMany)}], pdf (upload, monthly only). Generated by src/pipeline/digest.ts (Sunday 08:00 IST weekly; 1st 08:00 IST monthly) from published CA only, grouped by topic, ordered by relevance.
   Monthly PDF: in the workflow, after publishing, open the public digest URL with Playwright, page.pdf() A4 with print CSS, upload to media, attach to the digest.
4. Data + routes: types DigestView = { type; key; title; range; intro; groups: { topic: TopicChip; items: CACard[] }[]; pdfUrl: string | null; prev/next keys } and QuizView = { date; items: { question; options; answerIndex; explanation; caHref }[] }. Append to types.ts. Routes: /digest/[type]/[key] and /practice (today's quiz; ?date= for older). Stub views (JSON <pre>). Revalidate those URLs on publish.
5. Tests: Telegram escaping + no double post; digest grouping; quiz Zod schema.

DONE WHEN: publishing a CA locally posts once to a test channel (or logs the payload when the token is unset); manual workflow_dispatch of each new workflow works; all checks pass; commit `feat: telegram fan-out, daily quiz and digests`.
````

---

## Task 09: Admin UI (Claude, main)
Review Queue, Today dashboard, Coverage map (Payload custom admin views), AI badge on the public site. Task 05 ke endpoints ready hone ke baad main banaunga.

---

## Task R2 — ⛔ CUT (D14): launch se pehle ek hi final review hoga (lean-tasks.md → RF).
**Review of Phase 2 (security, cost safety, correctness)**
**Kaun:** Antigravity · Claude Sonnet 5.5 · **Kab:** 08 ke baad. Read-only.

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → docs/tasks/phase-2-automation.md (the specs you review) → this prompt.
You are a READ-ONLY reviewer. Only writes: docs/reviews/R2-phase2.md and your LOG.md entry (include "Read-first: ✓").

Review the Task 05, 06 and 08 commits against their specs. Verify, don't assume:
1. Secrets: no key in code, logs, workflow output or error messages; .env.example has names only.
2. Ingest API: auth + role checks, Zod validation, size and rate limits, slug resolution can't create topics, dedupe works, ai-bot cannot publish except under the exact autoPublish rule.
3. XSS: markdown→Lexical strips HTML and javascript: links; Telegram text escaped.
4. Cost safety: the spend cap is checked BEFORE each LLM call; prices come from env; a runaway loop is impossible (bounded retries, bounded items).
5. Copyright guard: the n-gram check actually runs on every item; source links are always present.
6. Failure isolation: a dead feed, a Telegram outage or one bad item can't kill the run or block publishing.
7. Timezones: crons at the right IST times; issue dates in Asia/Kolkata.
8. Run: tsc, eslint, unit, build, `npm run pipeline:dry`, `npm run pipeline:eval`; report real numbers.
Write the report: verdict APPROVE | APPROVE WITH FIXES | BLOCK; findings table severity | file:line | problem | failure scenario | fix. Verified issues only.
````
