# Task 02 — Thinker portraits: gather, verify license, cut out

**Kisko:** Antigravity · **Gemini 3.8 Flash** (browser + mechanical kaam; quality kharab aaye to Gemini 4 Neon) · **Parallel:** Task 01 ka Part A (Phase 0 commit) ho jaaye, uske baad shuru karo · **Iske baad:** Claude floating portraits aur duotone treatment design karega.

Design treatment (duotone, grain, float, tilt) **Claude CSS/SVG mein karega**. Codex ko sirf saaf cut-out deliver karna hai. Filter ya style mat lagwana.

---

## PROMPT

````text
FIRST: read AGENTS.md (memory protocol + ownership), docs/memory/STATE.md, docs/memory/DECISIONS.md and the tail of docs/memory/LOG.md. Claim your files under "Active" in STATE.md before editing anything.
LAST: release your claim in STATE.md, mark the task status in docs/tasks/README.md, and append your entry to docs/memory/LOG.md (format in AGENTS.md). Include these memory files in your final commit.

Repo: "/Users/ujjawalchaudhary/sociology website" (quote the path). Read ASSETS.md and docs/tasks/README.md first.
Goal: collect legally reusable portrait photos of sociologists and turn each into a clean transparent cut-out. Do NOT style them (no duotone, no filters, no AI redraw); the designer handles that.

THINKERS (slug → name)
Paper 1: karl-marx, max-weber, emile-durkheim, talcott-parsons, robert-k-merton, george-herbert-mead, vilfredo-pareto
Paper 2: gs-ghurye, mn-srinivas, louis-dumont, ar-desai, br-ambedkar, dp-mukerji, irawati-karve, verrier-elwin, yogendra-singh, andre-beteille

LICENSE RULES (strict)
- Source ONLY from Wikimedia Commons file pages. Read the "Licensing" section of each file page.
- Accept: Public domain (any PD template), CC0, CC BY, CC BY-SA. Reject everything else, incl. "fair use", "non-free", unclear, or images copied from news sites.
- Prefer: frontal or 3/4 head-and-shoulders, ≥ 800px tall, sharp, single person, plain-ish background.
- If no acceptable image exists for a thinker: DO NOT substitute, DO NOT generate one. Mark status "none" in the manifest. The designer will use a typographic card.

PROCESS (keep scripts in scripts/assets/, not in public/)
1. Download the original to assets-src/thinkers/{slug}.{ext}  (add `assets-src/` to .gitignore; originals stay local).
2. Background removal locally with the open-source `rembg` (pip install "rembg[cpu]"; model u2net_human_seg). No online removal services.
3. Crop to head-and-shoulders, portrait aspect 4:5, subject centered, ~6% padding above the head. Keep the alpha edge soft (no hard halo).
4. Export with sharp or cwebp:
   public/assets/thinkers/{slug}.webp     1000×1250, quality 82, with alpha
   public/assets/thinkers/{slug}-sm.webp   400×500, quality 78, with alpha
   Each file < 180 KB (large) / < 45 KB (small).
5. Manifest: src/data/thinker-assets.json, array sorted by slug:
   { "slug", "name", "status": "ok" | "none", "file": "/assets/thinkers/{slug}.webp" | null,
     "fileSm": "...-sm.webp" | null, "width": 1000, "height": 1250,
     "license": "public-domain" | "cc0" | "cc-by" | "cc-by-sa", "licenseName": "exact template text, e.g. CC BY-SA 4.0",
     "author": "as written on Commons", "sourceUrl": "https://commons.wikimedia.org/wiki/File:...",
     "year": "photo year if stated or null", "attribution": "ready-to-print credit line, e.g. 'Photo: John Doe, CC BY-SA 4.0, via Wikimedia Commons'" }
6. Append one row per "ok" image to the table in ASSETS.md (Modified? = "Background removed, cropped").
7. Payload: write scripts/assets/attach-portraits.ts (run with `npx payload run scripts/assets/attach-portraits.ts`). It must be idempotent: for each "ok" manifest entry, upload the large webp to the `media` collection (alt = "Portrait of {name}", license/credit/sourceUrl filled from the manifest) unless a media doc with the same filename exists, then set thinkers.{slug}.portrait to it. Create a published thinker doc if the slug doesn't exist (name only). Pass context { disableRevalidate: true }.

DONE WHEN
- Manifest lists all 17 thinkers with status, and every "ok" entry has a verifiable sourceUrl + license.
- Files meet the size limits; alpha edges look clean when placed on #F6F1E7 and on #0F1626 (render a quick contact sheet to assets-src/contact-sheet.png and check it yourself).
- Attach script runs twice with no duplicates.
- Stage only your own files (`git add <paths>`, never -A; another agent works in parallel). Commit: `chore: add licensed thinker portraits and manifest` (do not commit assets-src/). End the message with: Co-Authored-By: Codex <noreply@openai.com>
- Print a table: slug | status | license | author.
````
