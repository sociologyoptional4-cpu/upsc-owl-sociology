# 04 — CMS, Admin Panel & API

## 1. Admin panel (`/admin`, Payload)

### Roles
| Role | Kya kar sakta hai |
|------|-------------------|
| `admin` (tum) | Sab kuch: publish, delete, users, settings, pipeline config |
| `editor` | Create/edit/publish content; users/settings nahi |
| `ai-bot` | Sirf API key se **draft create/update**; publish nahi (auto-publish mode on ho to sirf `current-affairs` publish) |

### Custom admin views (Payload custom components)
1. **Today dashboard** — aaj kitne fetch / kept / drafts / published, pipeline cost, errors.
2. **Review Queue** — saare `status = review` docs ek list mein: side-by-side *source summary* vs *AI note*, buttons: **Approve & Publish**, **Edit**, **Regenerate** (custom endpoint), **Reject** (reason save → prompt improve hota hai).
3. **Coverage map** — kaunse syllabus topics pe notes/CA kam hain (heatmap) → content gaps.
4. **Pipeline runs** — `pipeline-runs` collection ka log viewer.
5. **Live preview** — editing ke saath right side mein actual page preview (Payload live preview).

### Drafts & versions
Har collection pe `versions: { drafts: true }` → autosave, history, rollback. Scheduled publish (`publishAt`) bhi.

## 2. Block library (page builder)

Har block ke 3 hisse: Payload `config.ts` (admin form), `Component.tsx` (UI), `schema.ts` (Zod, AI output check).

| Block | Use |
|-------|-----|
| `hero` | Page heading, kicker, image/3D variant |
| `richText` | Lexical rich text (headings, lists, links) |
| `summary` | "Khabar kya hai" 3-5 bullet |
| `sociologyAngle` | Thinker + concept + explanation |
| `thinkerQuote` | Paraphrased idea + thinker ref (copyright-safe) |
| `keyTermsTable` | Term / meaning / thinker |
| `comparisonTable` | Perspectives compare (Ghurye vs Dumont…) |
| `timeline` | Events / evolution |
| `caseStudy` | Indian example card |
| `answerFramework` | Intro / body points / conclusion for mains |
| `pyqList` | Query block: topic ke PYQs auto fetch |
| `caFeed` | Query block: filter (topic/paper/thinker) → latest CA auto |
| `mcqQuiz` | MCQs (inline ya relation) |
| `topicGrid` | Topics tiles (bento) |
| `network3D` | 3D network (nodes = selected topics) |
| `callout` | Tip / warning / PYQ alert |
| `faq` | Q&A (FAQ schema) |
| `cta` | Telegram / mentorship |
| `media` | Image/video with credit |

**Query blocks** (`caFeed`, `pyqList`) data store nahi karte — sirf filter store karte hain, render time pe latest data laate hain. Isse purane pages bhi **apne aap fresh** rehte hain.

## 3. API

### 3.1 Auto-generated (Payload)
```
GET    /api/current-affairs?where[topics][in]=…&limit=10&depth=1
POST   /api/current-affairs            (create, body = doc JSON incl. layout blocks)
PATCH  /api/current-affairs/:id
GET    /api/topics?where[slug][equals]=caste-system
POST   /api/pages                      (naya CMS page → turant /{slug} live)
…same for every collection;  GraphQL at /api/graphql
Auth header:  Authorization: users API-Key <key>
```

### 3.2 Custom endpoints
| Endpoint | Kaam |
|----------|------|
| `POST /api/ingest/batch` | Pipeline ek saath N items bhejta hai; server Zod validate, dedupe (URL hash), create drafts; response mein created/skipped |
| `POST /api/ai/regenerate/:id` | Admin button: same source se dobara note likhwana (feedback ke saath) |
| `POST /api/revalidate` | Secret-protected manual revalidate (tags[]) |
| `POST /api/telegram/publish/:id` | Published CA ko channel pe post |
| `GET  /api/health` | Uptime check |

Sab custom endpoints: API key + role check, Zod input validation, rate limit, consistent response:
```json
{ "success": true, "data": { "created": 5, "skipped": 2 }, "error": null }
```

### 3.3 Example: AI ek naya page banata hai
```json
POST /api/current-affairs
{
  "headline": "Census caste enumeration: kya badlega?",
  "date": "2026-11-21",
  "paper": "P2",
  "topics": ["<topicId caste-system>", "<topicId social-stratification>"],
  "thinkers": ["<ambedkar>", "<srinivas>"],
  "sources": [{ "name": "The Hindu", "url": "https://…" }],
  "status": "review",
  "aiMeta": { "model": "…", "relevance": 0.86, "promptVersion": "ca-v3", "costUsd": 0.01 },
  "layout": [
    { "blockType": "summary", "points": ["…", "…", "…"] },
    { "blockType": "sociologyAngle", "thinker": "<srinivas>", "concept": "Dominant caste", "body": "…" },
    { "blockType": "answerFramework", "intro": "…", "body": ["…"], "conclusion": "…" },
    { "blockType": "mcqQuiz", "items": [{ "q": "…", "options": ["…"], "answer": 1, "why": "…" }] }
  ]
}
```
Server `beforeChange` hook: slug generate, sanitize, Zod check. `afterChange` hook (jab published): `revalidateTag('ca', 'home', 'topic:<each>')`, Telegram queue, sitemap update.

## 4. Kaise naya page bane — 3 raaste
1. **Admin se:** Pages → Create → blocks add → Publish → `/{slug}` live.
2. **API se:** `POST /api/pages` ya kisi collection pe → same.
3. **AI pipeline se:** daily cron → `/api/ingest/batch` → drafts → review → publish (ya auto-publish).
