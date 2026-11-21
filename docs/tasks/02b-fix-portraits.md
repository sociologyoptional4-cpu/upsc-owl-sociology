# Task 02b: Portrait cut-out fix

**Kaun:** Antigravity · Gemini 3.8 Flash · **Kab:** abhi (chhota task)

Naye design (D12) mein har portrait ek **peele circle** ke upar dikhta hai, isliye background ka bacha hua tukda turant nazar aata hai. `br-ambedkar.webp` mein portrait ke peeche ek safed/halka rectangle bacha hai.

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (skim) → docs/memory/STATE.md, docs/memory/DECISIONS.md (note D12), the tail of docs/memory/LOG.md → docs/tasks/02-codex-assets-thinkers.md (original spec) → this prompt.
CLAIM: add "Task 02b" under "Active" in docs/memory/STATE.md with: public/assets/thinkers/**, assets-src/**, scripts/assets/**, src/data/thinker-assets.json. Stop if claimed.
LAST: release the claim, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

1. Re-cut public/assets/thinkers/br-ambedkar.webp (+ -sm) from the original in assets-src/: the person only, no leftover background rectangle or frame. Try rembg with the isnet-general-use model and alpha matting (`-a -ae 15`); if a flat leftover remains, mask it out manually with sharp.
2. Check EVERY portrait the same way: write scripts/assets/check-portraits.ts that composites each large webp on a #FACC15 circle and on #0A0A0A, and saves assets-src/portrait-check.png (one contact sheet). Fix any image that shows a leftover box, halo or hard edge. Keep the same sizes/limits as Task 02 (1000×1250 ≤ 180 KB; 400×500 ≤ 45 KB).
3. Re-run scripts/assets/attach-portraits.ts so the media docs get the new files (idempotent; replace the file on the existing media doc rather than creating duplicates).
4. Commit `fix: clean thinker portrait cut-outs` (do not commit assets-src/).
````
