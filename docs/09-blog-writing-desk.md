# 09 · Blog writing desk (daily workflow add-on to 07)

**Goal:** the owner writes or pastes a blog, uploads notes, pastes infographics and posts images **every day, in minutes**, from one screen. Everything lands as a **draft**; the owner reviews and publishes. Nothing here auto-publishes.

**Rule (D14 lean):** extend `docs/07`. No new CMS, no new editor, no new collection except what is listed. No paid APIs. Copyright: user's own notes only (D15), nothing is copied from third-party sources by code.

## 1. Audit of `docs/07` (2026-11-22)

| Need | State | Gap |
|---|---|---|
| Write a blog in rich editor (colours, tables, 10 blocks) | ✅ built | Admin editor is the only door; no one-click start |
| Paste ChatGPT Markdown | ✅ `importMarkdown` textarea | Converts only on Save; no HTML paste, no preview of result |
| Upload notes (docx / pdf / md / html) | ❌ missing | No file import at all |
| Paste infographic (clipboard image) | ⚠️ Payload paste opens a bulk-upload drawer | `media.alt` is required, so every paste stops at a form; no zoom, no download on the public page |
| Post images / many images | ⚠️ `figure` block = 1 image | No gallery, no infographic block |
| Attach a PDF of the notes | ❌ | `media` accepts only image/video |
| Publish daily without friction | ⚠️ pipeline built | No "today" screen; blog-jobs ran once OK; **0 posts, no production admin yet** |
| Public pages + SEO + RSS + IndexNow + Telegram | ✅ live (200s on /blog, rss, llms, sitemap) | needs real posts |

## 2. Modules (one owner each, no shared files)

```
 ┌──────────── Claude: WRITING DESK + READER UI (B3) ────────────┐
 │ /admin/write  → quick actions (see §4)                         │
 │ public blocks: InfographicBlock (zoom + download), GalleryBlock│
 │ AttachmentList on /blog/[slug]; daily-use guide                │
 └───────────────▲─────────────────────────▲──────────────────────┘
                 │ POST /api/media          │ POST /api/blog/import
 ┌───────────────┴──────────┐   ┌──────────┴──────────────────────┐
 │ Gemini: MEDIA + BLOCKS   │   │ Codex: IMPORT + PUBLISH (B2)    │
 │ (B1) media hooks, blocks │   │ file→draft, attachments field,  │
 │ infographic/gallery,     │   │ migration, hardening, prod smoke│
 │ resolver, tests          │   │                                  │
 └──────────────────────────┘   └──────────────────────────────────┘
```

## 3. Contracts (exact; do not change without logging in LOG.md)

### C1 · Media upload (Gemini provides, Claude + editor consume)
`POST /api/media` multipart with only `file` (image/*, video/webm|mp4, application/pdf), logged-in admin/editor → **201**. `alt` becomes optional input: if empty, beforeValidate sets `alt` = humanised filename (`"Pasted image 2026-11-22 14:03"` for `pasted-image.*`). `license` defaults `own`. PDF only through this route and only ≤ 15 MB; images ≤ 8 MB are re-encoded server-side to max 2000 px wide WebP (original kept only if smaller). Response is the normal Payload `{doc, message}`.

### C2 · Blocks (Gemini provides, Claude renders)
Lexical block slugs added to `BLOG_BLOCKS` in `src/blocks/blog/configs.ts`:
- `infographic`: `image` (upload media, required), `title` (text, required, ≤ 120), `caption` (text), `credit` (text), `downloadable` (checkbox, default true).
- `gallery`: `images` (array 2-12 of `{ image: upload media required, caption: text }`), `columns` (select `'2' | '3'`, default `'2'`).
Zod twins in `src/blocks/blog/schema.ts`. `getBlogPost` resolver fills `resolved.media[id]` (type `BlogMedia`) for every media id inside both blocks, including nested gallery rows. Organizer and beautifier must pass both blocks through untouched (preservation gate unchanged).

### C3 · Import endpoint (Codex provides, Claude's desk consumes)
`POST /api/blog/import`, admin/editor only, rate-limited, body ≤ 12 MB. Always creates a **draft** `posts` doc, never publishes, never calls AI.
- JSON `{ "source": "markdown" | "html", "text": string, "title"?: string }`
- multipart `file` (`.md .txt .html .docx .pdf`, ≤ 10 MB), optional `title`, optional `attach` = `"true"` (also stores the original file as an attachment)
- JSON `{ "source": "images", "title": string, "mediaIds": number[], "layout": "infographic" | "gallery" }` (1 id + infographic → one `infographic` block; ≥ 2 ids + gallery → one `gallery` block)
Response `{ success, data: { postId, adminUrl, title, wordCount, warnings: string[] }, error }`. Duplicate content (same `contentHash` as an existing post) → **409** with `data.postId` of the existing post. Title fallback: first heading, then filename, then "Untitled draft".
Posts gets `attachments`: array `{ file: upload media (pdf), label: text }` (≤ 6). `BlogPostDetail.attachments: { label: string; url: string; sizeKb: number }[]` (resolved server-side; `[]` when none).

### C4 · Desk reads (existing endpoints only)
Claude's desk uses `payload.find` on `posts` (drafts) through the REST API plus C1/C3; it adds **no** endpoints.

## 4. `/admin/write` (Claude)
One page, five big cards, then "Aaj ke drafts" (last 10 drafts, status, AI status, Edit link).
1. **Naya blog likho** → `/admin/collections/posts/create`.
2. **ChatGPT se paste** → textarea; Markdown or copied rich text (HTML from clipboard is read in-browser) → C3 JSON → "Draft ban gaya → Kholo".
3. **Notes upload** → drop zone for docx/pdf/md/html → C3 multipart; checkbox "Original PDF bhi attach karo".
4. **Infographic paste** → focus the zone and press Ctrl/Cmd+V (or drop) → C1 → C3 `images/infographic` with a title field.
5. **Images post** → drop many images → C1 each → C3 `images/gallery`.
Every card shows progress, a clear Hinglish error, and never loses the typed text on failure. Admin + editor only.

## 5. Acceptance (end to end, local then production)
1. From `/admin/write`, a pasted ChatGPT answer becomes a draft with headings, table and bold intact in < 10 s.
2. A `.docx` and a text `.pdf` each become a draft; the PDF can be attached and appears as a download on the public post.
3. Ctrl+V of a screenshot creates a Media row (alt auto-filled) and a draft with one `infographic` block; the public post shows it with zoom + download.
4. Dropping 4 images creates a `gallery` post that renders 2-column on mobile and desktop without layout shift.
5. Re-importing the same file returns 409 with the existing post link.
6. Anonymous users get 401/403 on `/api/blog/import` and cannot read drafts or attachments of drafts.
7. tsc, eslint, unit, build green; existing blog, CA, notes, `/admin/seo` untouched.


## 6. As built (2026-11-22, Claude took over B1/B2)
- Done: media alt auto-fill + size limits + PDF upload (`src/lib/mediaRules.ts`, `Media.ts`), `infographic`/`gallery` blocks + resolver, `POST /api/blog/import` (markdown, html, .md/.txt/.html/.docx/.pdf, images, optional PDF attach), `posts.attachments` (+ migration), public `AttachmentList`, desk cards 01-07.
- Not done (B2 hardening, still open): idempotent FAQ/tag/link apply (409 on re-apply), session-based preview instead of `PREVIEW_SECRET` in URLs, staff-only read of `current-affairs` AI fields (`embedding`, `aiMeta`), shared rate-limit helper replacing the two old copies. The import endpoint itself calls no AI; after the draft is saved the normal blog organizer job fills empty SEO fields (D16).
- Server-side WebP re-encode was dropped: `resizeOptions` caps new uploads at 2000 px width instead.
