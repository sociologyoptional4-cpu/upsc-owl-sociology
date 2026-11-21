# 07 · Blog platform (add-on architecture)

**Goal:** the owner writes (or pastes from ChatGPT) blogs in `/admin`. They render as rich, colourful notebook-style articles. AI organizes them by syllabus, fills SEO, suggests links and writes social snippets. Publishing pushes to Google (IndexNow, sitemap, RSS) and Telegram.

**Rule:** this is an **add-on**. It must not change existing collections' behaviour, the page builder (`LAYOUT_BLOCKS`), the shared `richTextEditor()`, the CA/notes pipelines or the review queue. New code lives in new files. Existing files get only small additive edits, listed in §9.

---

## 1. System view

```
 Owner (admin/editor)                     AI (D11)
   │ write / paste Markdown                 ├─ DeepSeek (SCORER_MODEL): organize + SEO + social   (cheap)
   ▼                                        └─ OpenAI  (WRITER_MODEL): "AI se sajao" beautify     (on click)
 posts (Payload, drafts+versions) ──afterChange──► payload-jobs queue: blog-organize
   │                                              ▲
   │                    GitHub Actions blog-jobs.yml (*/15) → POST /api/payload-jobs/run (CRON_SECRET)
   │                    (also runs scheduled publish)
   ▼ publish
 revalidatePath(/blog, /blog/[slug], category, tag, linked topics, /sitemap.xml, /blog/rss.xml)
   ├─ IndexNow ping (Bing/Yandex; Google via sitemap)
   └─ Telegram post (first publish only, reuses src/lib/telegram)
```

## 2. Data model (new collections)

### `posts` — `src/collections/Posts.ts`
| Field | Type | Notes |
|---|---|---|
| title | text, required | |
| slug | `slugField()` | unique |
| excerpt | textarea ≤ 300 | AI fills if empty |
| cover | upload → media | optional; OG image falls back to generated |
| content | richText `blogEditor()` | see §3 |
| importMarkdown | textarea, collapsible "ChatGPT se paste" | beforeChange: if filled → `markdownToLexical` → `content` (replace if content empty, else append), then cleared. Never stored. |
| category | relationship → `blog-categories` (one) | |
| tags | relationship → `blog-tags` (hasMany, ≤ 8) | |
| papers / units / topics / thinkers | relationships (hasMany) | syllabus links; topics ≤ 3 |
| author | relationship → users | default = current user |
| publishedAt | date | set on first publish |
| featured | checkbox | for `/blog` hero |
| readingTime | number, readOnly | computed in beforeChange (200 wpm) |
| faq | array {question, answer(textarea)} ≤ 8 | → FAQPage JSON-LD + rendered section |
| seo | group {title ≤ 60, description 120-160, focusKeyword, ogImage(upload), canonical(url), noindex(checkbox)} | AI fills empty ones |
| aiSuggestions | json, hidden (custom admin panel shows it) | organizer output, see §4 |
| aiStatus | select idle/queued/done/failed, sidebar readOnly | |
| contentHash | text, hidden | sha256 of plain text; organizer re-runs only when it changes |
| telegramPostedAt | date, hidden | |

Versions: `drafts: { autosave: { interval: 800 }, schedulePublish: true }`, `maxPerDoc: 50`. Access: read = `publishedOrLoggedIn`; create/update = admin+editor (ai-bot **cannot** write posts); delete = admin.
Admin: group "Blog", `defaultColumns: ['title','category','_status','publishedAt','aiStatus']`, `listSearchableFields: ['title','slug','excerpt']`, live preview → `/blog/[slug]?preview`.

### `blog-categories`, `blog-tags`
`{ title, slug, description?, color? (select from D5/D12 pastel tokens) }`. Categories seed: Thinkers, Paper 1 Concepts, Paper 2 India, Answer Writing, Current Affairs Link, Strategy & Toppers.

### Users (additive)
Add optional `displayName`, `bio` (textarea ≤ 280), `avatar` (upload) for author boxes. No access change.

## 3. Editor: `blogEditor()` — `src/lib/lexical/blogEditor.ts`
Separate from `richTextEditor()` (that one stays untouched for pages/CA/notes).

```ts
lexicalEditor({ features: ({ rootFeatures }) => [
  ...rootFeatures,                     // headings, lists, bold, link, upload, quote, hr…
  EXPERIMENTAL_TableFeature(),
  TextStateFeature({ state: {          // colours (exists in @payloadcms/richtext-lexical 3.94)
    color:     { red, blue, green, plum },            // text colour
    highlight: { yellow, pink, mint, sky },           // marker background
  }}),
  BlocksFeature({ blocks: BLOG_BLOCKS, inlineBlocks: [TermChip] }),
]})
```
Colour values = CSS variables from `src/styles/tokens.css` (never raw hex in content).

### `BLOG_BLOCKS` — `src/blocks/blog/<name>/{config.ts, Component.tsx, schema.ts}`
| Block | Fields | Look (D12) |
|---|---|---|
| `blogCallout` | variant: tip / yaadRakho / galtiMat / upscAngle, title?, body (textarea, light md) | pastel tile + icon + black border |
| `thinkerQuote` | thinker (rel), quote (≤ 25 words), context? | portrait + speech bubble |
| `compare` | leftTitle, rightTitle, rows[{aspect,left,right}] ≤ 10 | two-colour columns |
| `timeline` | items[{year, title, text}] ≤ 12 | red year stamps |
| `flow` | steps[{label, text?}] ≤ 8, direction | arrow chips (concept map) |
| `keyTerm` | term, meaning, thinker? | yellow box |
| `pyqEmbed` | pyqs (rel → pyqs, hasMany ≤ 10) | reuses PyqList look |
| `answerBox` | intro, body points[], conclusion | "Answer kaise likhein" frame |
| `figure` | image (upload), caption, credit | |
| `youtube` | videoId (regex `^[\w-]{11}$`), title | `youtube-nocookie.com`, lite facade (click to load) |
| inline `termChip` | term, topic (rel)? | chip linking to topic page |

Each block has a Zod `schema.ts` → `src/blocks/blog/ai-schema.ts` (`blogBlockSchema` discriminated union) for the beautifier.

Rendering: `src/components/blog/BlogRichText.tsx` uses `@payloadcms/richtext-lexical/react` `RichText` with JSX converters: blocks map → components; textState → `<span data-color=… data-hl=…>` styled in `src/components/blog/blog.css`. Never `dangerouslySetInnerHTML`.

## 4. AI

### 4a. Organizer (automatic, DeepSeek) — `src/lib/blog/organize.ts`
Trigger: `afterChange` on posts → if `contentHash` changed and not ai-bot → queue job `blog-organize` (Payload `jobs.tasks`), set `aiStatus: queued`. Admin also has "✨ Abhi organize karo" button → `POST /api/blog/organize {postId}` (sync, maxDuration 60).

Input: title, plain text (≤ 6000 words), **allowed lists** from DB (topic slugs+titles, unit slugs, thinker slugs, existing tags, published post/topic URLs).
Output (Zod `organizeOutputSchema`, json_object mode, one repair retry):
```
{ paperCodes: ('P1'|'P2')[], unitSlugs[], topicSlugs[≤3], thinkerSlugs[≤6],
  category, tags[≤6], excerpt(≤300), seoTitle(≤60), seoDescription(120-160), focusKeyword,
  faq: {question, answer}[≤5],
  internalLinks: {anchorText, href}[≤8],
  social: { xThread: string[≤8], instagramSlides: {title, text}[≤8], linkedin, telegram(≤900 chars) } }
```
Server validation: drop any slug/href not in the allowed lists; `anchorText` must appear verbatim in the post text.
**Apply rule (D16):** fill only EMPTY fields (excerpt, seo.*, syllabus relations, category, tags; existing tags only). Everything else (new tags, internal links, faq, social) stays in `aiSuggestions`. AI never overwrites the owner's text or filled fields.

Admin UI: `src/components/admin/blog/AiSuggestionsPanel.tsx` (sidebar `ui` field): per-item Accept / Ignore, "Sab accept", copy buttons for social snippets, link inserts as Lexical link nodes.

### 4b. "✨ AI se sajao" beautify (on click, OpenAI) — `src/lib/blog/beautify.ts`
`POST /api/blog/beautify {postId}` (admin/editor). Takes current draft content as Markdown (Lexical → markdown), asks WRITER_MODEL for `{ sections: (markdown | blogBlock)[] }` validated by `blogBlockSchema`. Converted to Lexical (markdown parts via `markdownToLexical`, blocks as block nodes, highlights as textState).
**Preservation gate** (`src/lib/blog/preserve.ts`): ≥ 97% of original content words present; every number/year in the original present; no new numbers/years/proper names added (except PYQ years from attached `pyqEmbed`). Fail → retry once with the diff, then return error (content unchanged).
Saved as a **new draft version**. "Wapas" = Payload's restore-version. Never auto-publishes.

### 4c. Copyright (D15)
Beautify and organizer never see handouts. Owner-pasted text is the owner's responsibility; the admin shows a one-line note: "Kisi coaching/book ka text copy mat karo."

### 4d. Cost + safety
Both log to `pipeline-runs` with `kind: 'blog'` (reuse ledger) and respect `site-settings.maxDailyUsd`. Endpoints: role check, existing rate limiter (10/min), body ≤ 1 MB, Zod at every boundary.

## 5. Public routes — `src/app/(frontend)/blog/**`
| URL | View | Data |
|---|---|---|
| `/blog` | `BlogHubView`: featured post, category chips, Paper/Unit filter (URL params), tag cloud, paginated grid (12) | `getBlogHub({page, category, paper, unit})` |
| `/blog/[slug]` | `BlogPostView`: cover, meta (author, date, reading time), sticky TOC (from h2/h3), reading progress, `BlogRichText`, FAQ, author box, related posts (shared topics/tags), related topic notes + PYQs, share (WhatsApp/X/Telegram/copy), Telegram CTA | `getPost(slug, draft)` |
| `/blog/category/[slug]`, `/blog/tag/[slug]` | list | `getPostsBy…` |
| `/blog/author/[id]` | author bio + posts | |
| `/blog/rss.xml` | `route.ts` RSS 2.0, last 30 | |
| `/blog/[slug]/opengraph-image.tsx` | `next/og` 1200×630 branded (yellow/black notebook, title, category, OWL badge) | |
| topic pages | new "Is topic pe blogs" section (≤ 4) | `getTopicPosts(topicId)` |

ISR `revalidate = 3600` + on-publish revalidation. `generateStaticParams` for the latest 50 posts. Draft preview via Payload draft mode (same as pages).
Data + types: `src/lib/data/blog.ts`, `src/lib/data/blog-types.ts` (re-exported from `types.ts`; logged contract change).

## 6. SEO
- `generateMetadata`: title template, description, canonical (`SITE_URL`), `robots` from `seo.noindex`, OpenGraph `article` (publishedTime, modifiedTime, author, tags), Twitter large card.
- JSON-LD (`src/lib/seo/jsonld.ts` additions): `BlogPosting`, `BreadcrumbList`, `FAQPage` (when faq), `Person` author.
- `sitemap.ts`: add posts (lastModified = updatedAt), categories, tags. `robots.ts`: unchanged except sitemap includes all.
- IndexNow: `src/lib/blog/indexnow.ts`; key from env `INDEXNOW_KEY`, served at `/[key].txt` via route; ping on publish/update of a published post.
- Verification: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` env → root metadata `verification`.
- `/llms.txt` route: site summary + links to blog, syllabus, PYQ bank.
- Performance: cover via `next/image` with width/height, YouTube facade, no client JS except TOC/progress/share (small client islands). Targets: LCP < 2.5 s, CLS < 0.1.
- Slug `blog` reserved in `src/lib/slug.ts` so CMS pages can't take it.

## 7. Marketing
- **Telegram:** on first publish, `postBlog()` (new fn next to `postCurrentAffair`) sends title + excerpt + link (or `aiSuggestions.social.telegram` if accepted). Sets `telegramPostedAt`. Respects the existing Telegram env/enable flags.
- **Social snippets:** generated by organizer (§4a), copied manually by the owner. No auto-posting to X/Instagram/LinkedIn.
- **Analytics:** `@vercel/analytics` + `@vercel/speed-insights` in the frontend layout. Search Console + Bing Webmaster connected by the owner (one-time).
- **Content gaps:** `getBlogGaps()` = topics with the most PYQs and zero published posts → shown as a dashboard widget ("Is hafte ye likho") in `OwlDashboard`.

## 8. Jobs runner
`payload.config` `jobs: { tasks: [blogOrganizeTask], access: { run: cronSecret } }`; scheduled publish uses the same queue.
`.github/workflows/blog-jobs.yml`: cron `*/15 * * * *` + workflow_dispatch → `curl -X GET "$SITE_URL/api/payload-jobs/run?limit=10" -H "Authorization: Bearer $CRON_SECRET"`. Skip safely if secrets missing (like daily-ca). New env: `CRON_SECRET`, `INDEXNOW_KEY`, `GOOGLE_SITE_VERIFICATION?`, `BING_SITE_VERIFICATION?` (add to `src/lib/env.ts` Zod schema and `.env.example`).

## 9. Touch list (existing files: additive edits only)
`src/payload.config.ts` (register collections, jobs, endpoints, admin component) · `src/payload-types.ts` (generate) · `src/app/(payload)/admin/importMap.js` (generate) · `src/collections/Users.ts` (3 optional fields) · `src/lib/slug.ts` (reserve `blog`) · `src/app/sitemap.ts` · `src/lib/seo/jsonld.ts` · `src/lib/telegram/` (new `postBlog.ts`) · `src/lib/env.ts` · `src/lib/data/types.ts` (re-export) · `src/components/views/TopicView.tsx` (posts section) · `src/components/admin/OwlDashboard.tsx` (Blog tile + gaps widget) · `src/app/(frontend)/layout.tsx` (analytics + nav link "Blog") · `src/globals/Navigation.ts` default only if needed · `next.config.*` CSP `frame-src https://www.youtube-nocookie.com` · `package.json` · new migration `blog_platform` (additive, no drops).

## 10. Acceptance
1. Paste a ChatGPT answer (headings, bold, list, table) into "ChatGPT se paste" → save → same structure in the editor and on `/blog/[slug]`.
2. Colours, highlights and all 10 blocks insert from the editor and render on the site, mobile 375 px without overflow.
3. Save a post with empty SEO → within one job run, excerpt/SEO/topics/thinkers are filled; filled fields untouched; suggestions panel shows links + social.
4. "AI se sajao" → new draft version with callouts/compare/keyTerm; preservation gate passes; restore works.
5. Schedule publish 15 min ahead → goes live via job runner.
6. Published post appears in `/blog`, category, tag, topic page, sitemap, RSS; JSON-LD validates (Rich Results test); OG image renders; IndexNow returns 200/202; Telegram post sent once.
7. Lighthouse mobile on `/blog/[slug]`: Performance ≥ 90, SEO 100, Accessibility ≥ 95.
8. Existing pages, CA, notes, review queue, pipelines: unchanged (smoke + unit tests green).
