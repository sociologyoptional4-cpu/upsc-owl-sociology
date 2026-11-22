# 10 · Smart paste (quiz + current affairs) and automatic SEO

**Problem:** the raw admin forms ask for things the owner cannot know (`caId`, `sourceHash`, topic and thinker relations, slug, reject reason, SEO). **Goal:** the owner pastes plain content into ONE box; the AI fills every field; the owner only reviews. Roles stay as D11: **OpenAI writes, DeepSeek scores/classifies** (no Anthropic API). Everything lands as a DRAFT (D18); the existing Review Queue stays the only way to publish AI content.

## 1. What the owner can expect (honest)
- ✅ Paste MCQs in any layout (numbered, a)/b)/c)/d), Hinglish/English, answer key inline or at the end) → structured quiz draft.
- ✅ Paste an article, notes or a link + text → complete current-affairs draft (headline, date, paper, topics, thinkers, sources, summary, blocks, slug, hash, SEO title/description) in the site's own words.
- ✅ SEO fields, FAQ, internal links, tags: auto-filled when empty (blog organizer already does this; CA gets a `seo` group).
- ✅ On publish: sitemap + page revalidation + IndexNow ping (Bing/Yandex) automatically.
- ❌ Not possible: forcing Google to index or rank us "at the top". Google finds pages through the sitemap and Search Console (docs/08). We make titles, descriptions, structured data and internal links good; ranking is Google's decision.
- ⚠️ Anything the AI had to guess (a missing answer key, a missing explanation, an unmatched story) is **flagged in the UI** and must be checked before publish. The AI never silently invents a fact.

## 2. Contracts

### C5 · `POST /api/smart/quiz` (admin/editor, rate-limited, body ≤ 40,000 chars)
Request `{ "text": string, "date"?: "YYYY-MM-DD" }` (date defaults to today IST).
Server: OpenAI (`WRITER_MODEL`) parses 1-10 MCQs → `{ question, options[4], answerIndex, explanation, answerSource: "given"|"guessed", explanationSource: "given"|"written" }`. DeepSeek (`SCORER_MODEL`) maps each question to the best matching current-affairs story of that date or the previous 7 days (draft or published, ids from the DB only); no match → `caId: null`.
Schema change (additive relaxation): `quizzes.items.caId` becomes **optional**; the public `/practice` view must not break on `null`.
If a quiz for that date exists and is a draft → append (max 10 items total); if it is published → **409** `{ postId-style data: { quizId, adminUrl } }`.
Response `{ success, data: { quizId, adminUrl, added: number, flags: { index, kind: "answer-guessed"|"explanation-written"|"no-story-match"|"options-fixed" }[] }, error }`.

### C6 · `POST /api/smart/current-affair` (admin/editor, rate-limited, body ≤ 60,000 chars)
Request `{ "text": string, "url"?: string, "sourceName"?: string, "date"?: "YYYY-MM-DD" }`.
Server pipeline (reuse, do not rebuild): DeepSeek scorer (`scorer.v1.md`) → paper, relevance, candidate topic slugs; OpenAI writer (`writer.v1.md` + `style-guide.md`) writes an `IngestItem` **in the site's own words** (pasted text is source material, never copied; reuse `src/pipeline/notes/copy-guard.ts` rules); slugs validated against DB topics/thinkers exactly like `/api/ingest/batch`. `sources`: given `url`, else first http(s) URL found in `text`, else `{ name: "Apna note", url: SITE_URL }`. `sourceHash` = existing `sourceHash(url)`; with the fallback source it is the sha256 of the normalised text instead. Duplicate hash → **409** with the existing id. Embedding computed with the existing embeddings call. Doc is created through ONE shared function extracted from `ingest()` in `src/endpoints/index.ts` (`createCurrentAffairDraft`), so both paths behave identically: `_status draft`, `reviewStatus pending`, `isAiGenerated true`, `aiMeta` filled, forceBotDrafts untouched.
Response `{ success, data: { id, adminUrl, headline, topics: string[], thinkers: string[], warnings: string[] }, error }` (`warnings` e.g. "Source link nahi mila, 'Apna note' lagaya").
Cost/budget (as built): only the `site-settings.maxDailyUsd` daily cap applies (the `pipelineEnabled` switch is for the automated jobs, not for the owner's manual paste); every paste writes one `pipeline-runs` row with `kind: "smart-paste"`.

### C7 · Automatic SEO + indexing
- `current-affairs.seo` group `{ title ≤ 60, description 120-160 }` (additive migration). Writer output adds `seoTitle`/`seoDescription`; frontend `generateMetadata` for CA pages prefers them over headline/summary when present.
- `afterChange` on `current-affairs`: first publish → `pingIndexNow(url)` (fail soft, like blog). Telegram hook stays as is.
- Blog organizer already fills SEO (D16). No change.

### C8 · Desk UI (Claude)
Writing desk gets two more cards: **06 Quiz paste**, **07 Current affair paste**. They call C5/C6, show `flags`/`warnings` as a to-check list, and link to the draft (quiz admin page / Review Queue).

## 3. Acceptance
1. A 5-MCQ paste with answer key becomes a draft quiz with correct `answerIndex` and `answerSource: given` on every item; the same paste without a key flags all five `answer-guessed`.
2. A pasted article creates a pending CA draft visible in `/admin/review` with topics/thinkers that exist in the DB, a unique slug, sources, hash, SEO title/description and blocks; a second identical paste returns 409.
3. Anonymous and ai-bot calls get 401. Nothing is published by these endpoints.
4. Publishing a CA from the Review Queue pings IndexNow once; `/sitemap.xml` lists it after revalidation.
5. `/practice` renders a quiz item with `caId: null` without error.
6. tsc, eslint, unit, build green; existing ingest, quiz and review flows unchanged.


## 4. As built (2026-11-22, Claude)
- Code: `src/lib/smart/**`, `src/endpoints/smart.ts`, shared `src/lib/ingest/createDraft.ts` (also used by `/api/ingest/batch`), prompts `src/pipeline/llm/prompts/smart-*.md`.
- Quiz parse retries once with a repair hint; CA writer retries once with a concrete rewrite hint (copy-guard). Real-model proof on local keys: quiz 3/3 items parsed, CA 3/3 drafts created (~$0.006 each), AI SEO ok.
- Prompts are bundled for Vercel via `outputFileTracingIncludes` in `next.config.ts`.
- Known limits: story matching needs published/draft current affairs of the last 7 days (else `caId` stays empty and is flagged); a model that mislabels `answerGiven` can hide a guessed answer, so always glance at the answers.
