# 05 — Automation Pipeline

## 1. Schedule

| Job | Kab (IST) | Kya |
|-----|-----------|-----|
| `daily-ca` | Roz 06:00 (cron `30 0 * * *` UTC) | News → notes → drafts/publish → Telegram |
| `daily-quiz` | Roz 06:30 | Aaj ke CA se 5 MCQ ka quiz page |
| `weekly-digest` | Sunday 08:00 | Week ka digest page |
| `monthly-compilation` | 1 tareekh 08:00 | Monthly page + PDF |
| `coverage-report` | Monday | Kam-covered topics list admin dashboard pe |

GitHub Actions (`.github/workflows/*.yml`), `workflow_dispatch` se manual run bhi. Failure pe Telegram pe tumhe alert.

## 2. Daily CA flow

```
① FETCH        RSS/official feeds (sources collection se list)
               PIB, The Hindu (National/Editorial), Indian Express (Explained),
               PRS Legislative, Down To Earth, MoSPI/NSO releases
               → sirf title + summary/description + link + date
② CLEAN        HTML strip, language detect, 48h se purana drop
③ DEDUPE       URL hash (exact) + title embedding cosine > 0.88 (pgvector) → same story merge
④ SCORE        DeepSeek (cheap, batch): har item →
               { relevant: bool, score 0-1, paper, candidateTopics[], reason }
               keep: score ≥ 0.6, max 8/day (top score)
⑤ MAP          Candidate topics ko real `topics` IDs se match (slug list prompt mein di jaati hai;
               unknown topic = reject, kabhi naya syllabus topic invent nahi)
⑥ WRITE        Claude: structured output (JSON schema = block schemas) →
               summary, sociology angle, thinker link, answer framework, keywords, 1 mains Q, 2 MCQ
               Hinglish style guide + 2 gold examples prompt mein (prompt caching on)
⑦ VALIDATE     Zod parse → fail = 1 retry with error message → phir bhi fail = skip + log
               Guards: source URL present, koi bhi 15+ word copy nahi (n-gram overlap check),
               thinker/topic IDs exist, MCQ answer index valid
⑧ PUBLISH      POST /api/ingest/batch → status "review" (pehle 2-4 hafte)
               baad mein: score ≥ 0.8 + validator clean → auto "published", baaki review
⑨ FAN-OUT      afterChange: revalidate tags, Telegram post (headline + 3 bullets + link),
               OG image auto, sitemap
⑩ LOG          pipeline-runs: counts, tokens, cost, errors → admin dashboard
```

## 3. Code layout

```
src/pipeline/
├── run-daily.ts           orchestrator (tsx se chalega)
├── sources/fetch-feeds.ts rss-parser, timeouts, per-source error isolation
├── dedupe.ts              hash + embeddings
├── llm/
│   ├── deepseek.ts        score() — batch 20 items per call
│   ├── claude.ts          write() — structured output, retries, backoff
│   ├── prompts/           ca-writer.v3.md, scorer.v2.md (versioned)
│   └── style-guide.md     Hinglish tone, structure, banned phrases
├── validate.ts            Zod schemas (blocks se import) + copy-guard
├── publish.ts             Payload API client (API key)
└── telegram.ts            channel post
```

## 4. AI quality controls
- **Prompt versioning:** har doc mein `aiMeta.promptVersion`. Reject reasons collect → next prompt version.
- **Grounding:** Claude ko sirf feed summary + hamare topic/thinker notes milte hain; "source mein nahi hai to mat likho" rule. Facts (numbers, dates) source se hi.
- **Human review window:** pehle 2-4 hafte 100% review. Approve rate > 90% ho to auto-publish on.
- **Transparency:** har AI page pe badge + source links + "report error" button (→ admin mein issue).
- **Kill switch:** `site-settings.pipelineEnabled` false → cron kuch publish nahi karega.

## 5. Cost control
- Bulk filtering DeepSeek pe; Claude sirf ~8 final items/day.
- Claude prompt caching (style guide + examples + topic list = cached prefix).
- `pipeline-runs` mein daily cost; `site-settings.maxDailyUsd` cross → pipeline ruk jaaye, alert aaye.
- Exact model IDs aur pricing env/config mein — implement karte waqt current docs se confirm karenge.

## 6. Legal / content policy
- Poora article kabhi copy nahi: sirf apna summary + original link. Feeds ke terms follow.
- Thinker quotes paraphrase; direct quote sirf public-domain texts se, chhota.
- Images: sirf `media` collection ke licensed assets; news photos kabhi nahi utha ke lagani.
- Footer mein "AI-assisted, human-reviewed" disclosure + corrections policy page.
