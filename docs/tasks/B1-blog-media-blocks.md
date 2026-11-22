# Task B1: Blog media + infographic/gallery blocks

**Kaun:** Antigravity · Gemini 4 Neon (fallback: Claude Sonnet 5.5) · **Spec:** [docs/09 §3 C1, C2](../09-blog-writing-desk.md) · **Parallel:** B2 (Codex) aur B3 (Claude) ke saath chalta hai. Files alag hain, kisi aur ki file mat chhuo.

````text
ROLE: Senior Next.js 16 + Payload 3 engineer on an EXISTING project. Small, careful, tested changes only.

READ FIRST (mandatory, in order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md, docs/07-blog-platform.md (read closely), docs/09-blog-writing-desk.md (FULL SPEC; you own contracts C1 and C2) → docs/memory/STATE.md, DECISIONS.md (D11-D18), last ~60 lines of LOG.md → this prompt. No code before this.

CLAIM in docs/memory/STATE.md "Active" as "Task B1": src/collections/Media.ts, src/blocks/blog/{configs,schema,ai-schema}.ts, src/lib/data/blog.ts (resolver part only), src/lib/blog/{preserve,organize,beautify}.ts (only if needed), tests/unit/blog-media.test.ts, tests/unit/blog-blocks-new.test.ts, ASSETS.md. If another Active task claims any of these, stop and report. Do NOT touch: src/components/**, src/styles/**, src/collections/Posts.ts, src/endpoints/**, src/migrations/**, src/payload-types.ts, src/payload.config.ts, importMap.js, package.json (B2 owns Posts/endpoints/migration/deps; Claude owns components/config).

GOAL: make pasting/uploading an image frictionless and add two blog blocks for infographics and image galleries. Everything additive.

TASKS
1. Media.ts (contract C1). Keep `alt` required in the schema but fill it in a `beforeValidate` hook when empty: `pasted-image.*` or `image.*` → "Pasted image YYYY-MM-DD HH:mm" (IST); otherwise a humanised filename (strip extension, replace -/_ with spaces, trim, sentence case, max 120 chars). `license` default stays `own`. Add `application/pdf` to mimeTypes. Server-side limits in a `beforeValidate`/`beforeChange` hook using the request file buffer: images > 8 MB rejected with a clear Hinglish error; PDFs > 15 MB rejected; images wider than 2000 px are resized to 2000 px and re-encoded WebP with sharp (quality 82) only if the result is smaller; GIF/SVG untouched; videos untouched. Do not change existing imageSizes (card 640, feature 1280) or the afterRead S3 URL logic. Access unchanged (read public, write staff). PDFs are public like every media file; add a one-line note in the field description: "PDF public hota hai. Private handout mat daalo (D15)."
2. Blocks (contract C2). Add `infographic` and `gallery` exactly as specified in docs/09 §3 C2 to src/blocks/blog/configs.ts and BLOG_BLOCKS (labels in Hinglish where the file already does). Zod twins in schema.ts (`blogBlockSchema` must accept and validate both; rows 2-12; title ≤ 120). Reuse existing patterns (see `figure`).
3. Resolver. In src/lib/data/blog.ts, extend the media-id collection so ids inside `infographic.image` and every `gallery.images[].image` land in `resolved.media`. Keep the existing `figure` behaviour. Draft posts must still resolve only for authorised callers (no change to access).
4. Preservation. Confirm the 97% preservation gate and organizer/beautifier pass `infographic` and `gallery` blocks through untouched (blocks are not rewritten, not counted as words). Fix only if a test proves they break.
5. Tests (write them first, watch them fail): hook alt derivation table (pasted-image.png, "My Notes_final-v2.JPG", empty name, very long name); size rejections; resize-only-when-smaller; both blocks validate/reject (1 gallery row, 13 rows, missing image, 121-char title); resolver returns media for a nested gallery fixture; preservation keeps blocks byte-identical.
6. Manual proof: start the dev server in the background, log in with the local test admin (SEED_ADMIN_* from .env; never print it), and `curl -F file=@<a small png> /api/media` with the session cookie → 201 with auto alt. Do the same with a PDF and an oversize file (expect 4xx with the Hinglish message). Paste the status codes into your LOG entry (not the cookie).

HARD RULES: TypeScript strict, no `any`, Zod at boundaries, functions < 50 lines, files < 400 lines, user-facing copy in Hinglish (Roman), code/comments in English. Additive only (no field removals/renames; this task needs NO migration; if payload says one is needed, stop and report). Never print/commit .env or secrets. Licenses: ASSETS.md row not needed for user uploads, but add one line describing the Media policy (own by default, PDFs public). Long commands (> 30-60 s: build) run in background; check results when they finish. Commit only your files: `feat: blog media paste and infographic gallery blocks` (never git add -A; leave the uncommitted .gitignore change alone).

CHECKS before done: npx tsc --noEmit, npx eslint src tests, npm run test:unit, npm run build (all must pass; say ✗ honestly).

LAST: release the claim in STATE.md, mark B1 in docs/tasks/README.md + MASTER-PLAN.md, append LOG.md entry (Read-first: ✓, checks ✓/✗, contract changes: exact list, open issues).
FINAL REPLY (Hinglish, short): files changed, what now works (C1, C2), real check results, curl proof codes, anything B3/B2 must know.
````
