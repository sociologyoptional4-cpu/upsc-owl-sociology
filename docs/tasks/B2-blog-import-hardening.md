# Task B2: Blog import (notes → draft) + hardening + production smoke

**Kaun:** Codex 6.0 · **Spec:** [docs/09 §3 C3](../09-blog-writing-desk.md) · **Parallel:** B1 (Gemini) aur B3 (Claude) ke saath. **S1 isse baad** (dono `Posts.ts` + migrations chhute hain).

````text
ROLE: Senior Next.js 16 + Payload 3 backend engineer and security reviewer on an EXISTING project.

READ FIRST (mandatory, in order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md, docs/01-architecture.md … docs/07-blog-platform.md (read 07 closely) → docs/09-blog-writing-desk.md (FULL SPEC; you own contract C3 and `posts.attachments`) → docs/memory/STATE.md, DECISIONS.md (D11-D18), last ~60 lines of LOG.md → this prompt. No code before this.

CLAIM in STATE.md "Active" as "Task B2": src/endpoints/blog.ts, src/endpoints/index.ts (rate-limit helper only), src/lib/blog/import/**, src/lib/rateLimit.ts, src/collections/Posts.ts, src/lib/data/blog.ts (attachments + nothing else; B1 owns the media resolver part: touch only the `getBlogPost` return/attachments mapping), src/lib/data/blog-types.ts, src/app/api/preview/route.ts, src/payload-types.ts, src/migrations/**, package.json + lockfile, tests/unit/blog-import*.test.ts, tests/unit/blog.test.ts (only to add cases), docs/ops/runbook.md. Do NOT touch src/components/**, src/styles/**, Media.ts, src/blocks/** (B1/B3 own those).

GOAL: the owner can turn a file or pasted text into a blog DRAFT through one endpoint; plus close the blog-related audit findings; then verify production.

PART 1 · Import endpoint (contract C3, follow it exactly)
1. Libraries (reuse before building; check licence, maintained, no native build): `mammoth` (docx → HTML), `turndown` + `turndown-plugin-gfm` (HTML → Markdown with tables), `unpdf` (PDF text extraction, text-only PDFs). Do not add anything else. Scanned PDFs (no text) → 422 "Ye PDF scan lagta hai, text nahi mila. Text wali PDF ya docx use karo."
2. Pipeline: file/text → Markdown → existing `markdownToBlogLexical` (src/lib/blog/markdown.ts; it already sanitises javascript:/data: links) → draft `posts` doc (`_status: 'draft'`, author = current user, `context: { skipExternal: true }`, normal beforeChange hooks so readingTime/contentHash run). HTML input: strip script/style/iframe/on* handlers BEFORE conversion; keep headings, lists, tables, bold/italic, links, blockquotes; images inside HTML are dropped with a warning ("Images alag se upload karo"), never fetched from the network (no SSRF).
3. `source:"images"`: validate every `mediaIds` exists and is an image; build ONE `infographic` block (1 id) or ONE `gallery` block (2-12 ids) via `makeBlockNode` (src/lib/blog/markdown.ts). Block field names are fixed by docs/09 C2; B1 adds the block configs in parallel, so code against the contract and make your tests use the contract shape.
4. `attach=true` on a PDF/docx upload: store the original through the Media collection as a PDF/doc? NO: only PDFs are allowed attachments (Media accepts application/pdf via B1). docx + attach=true → warning "Sirf PDF attach hoti hai", import still succeeds.
5. Add `posts.attachments` (array ≤ 6 of `{ file: upload media, label: text }`) and resolve `BlogPostDetail.attachments` (label, url, sizeKb) in `getBlogPost`; update blog-types.ts. Draft attachments must not leak: only published posts' attachments are returned by public queries.
6. Limits and safety: staff only (admin/editor); body/file limits per C3; per-user rate limit via ONE shared helper `src/lib/rateLimit.ts` (replaces the two copy-pasted Maps in src/endpoints/{index,blog}.ts; keep behaviour, add a `shortcut:` comment that it is per-instance memory); Zod on JSON; verify file type by extension AND magic bytes (docx = zip with word/document.xml, pdf = %PDF-); title ≤ 200 chars; Markdown output capped at 200,000 characters (else 413); duplicate content hash → 409 with existing postId. Never log file contents. Errors in Hinglish where user-facing, English in logs.
7. Tests first (RED→GREEN): markdown/html import happy paths; html with `<script>` and `javascript:` link; table survives; docx fixture (create tiny fixtures under tests/fixtures/); text pdf fixture; scanned pdf → 422; duplicate → 409; images → infographic/gallery shapes; anonymous 401; ai-bot 401; oversize 413; magic-bytes mismatch (a .docx that is really text) → 415.

PART 2 · Hardening (blog-related audit findings, each with a failing test first)
A. `/api/blog/suggestions/apply` FAQ (and tag/link) is not idempotent: applying the same index twice duplicates the FAQ. Return 409 "Ye suggestion pehle hi lag chuki hai" when the index is already in `accepted`.
B. Preview link leaks `PREVIEW_SECRET` in URLs. In src/app/api/preview/route.ts accept EITHER a logged-in staff session (check with `payload.auth({ headers })`; role admin/editor) OR the existing secret; stop putting the secret in `Posts.admin.preview` and in the review-queue `previewHref` (use session-only links). Keep timing-safe compare for the secret path (cron/CI use).
C. Public API privacy for AI fields on `current-affairs`: `embedding`, `aiMeta`, `sourceHash` readable only by staff (field-level `access.read: isStaffField`). Check the daily pipeline still works (it authenticates as ai-bot: allow `ai-bot` too via a small `isStaffOrBotField` helper in src/access/roles.ts). Add an access test.
D. src/endpoints/index.ts `nextNoteTopics`/`coverage` are not blog scope: leave them.

PART 3 · Migration + types
`npx payload migrate:create blog_attachments` (additive only: attachments table/columns), READ the generated SQL before committing, run `npm run generate:types` and `npm run generate:importmap` is NOT yours (B3 does it). Apply locally with `npm run migrate`.

PART 4 · Production verification (read-only, no secrets in chat or logs; no production writes beyond what a deploy does)
After your commit lands on main and Vercel builds: with curl (no login) confirm /blog, /blog/rss.xml, /sitemap.xml, /llms.txt, /api/posts returns no drafts, and `POST /api/blog/import` without auth → 401. Run `gh run list --workflow blog-jobs.yml --limit 3` and report. Do NOT create the production admin or any content: that is the user's step. Write the exact user steps (first admin, first post) into docs/ops/runbook.md under "Blog: pehla din".

HARD RULES: TypeScript strict, no `any`, Zod at every boundary, functions < 50 lines, files < 400 lines (split src/lib/blog/import/{docx,pdf,html,markdown,images,route}.ts), Hinglish user copy, English code/comments. Additive migrations only. Never print/commit .env or secrets. Long commands (build, tests) run in background; check when done. Commit per part, stage only your files, never git add -A, leave the uncommitted .gitignore alone: `feat: blog import endpoint and attachments`, `fix: blog hardening (idempotent apply, session preview, ai field access)`.

CHECKS before done: npx tsc --noEmit, npx eslint src tests, npm run test:unit, npm run build.

LAST: release claim, mark B2 in tasks/README.md + MASTER-PLAN.md, append LOG.md (Read-first ✓, every check ✓/✗, contract changes exact, open issues).
FINAL REPLY (Hinglish, short): endpoints + files, test results, prod smoke results, what user must do next, anything Claude's desk (B3) must know about the response shapes.
````
