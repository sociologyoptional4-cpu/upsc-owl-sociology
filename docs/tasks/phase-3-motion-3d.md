# Phase 3: 3D, motion, polish

> ⛔ **CUT (D14):** 3D, Lottie aur perf CI abhi nahi. Site CSS motion se hi smooth hai. Is file ka koi prompt mat chalana.

Order: **11** → **10 (Claude)** → **12**

---

## Task 11
**Motion assets: Lottie micro-animations, CC0 3D props, font check**
**Kaun:** Antigravity · Gemini 3.8 Flash (browser chahiye) · **Kab:** kabhi bhi (Phase 1 ke dauraan bhi chal sakta hai)

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/02-design-system.md §6-§8 closely) → ASSETS.md → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt.
CLAIM: add "Task 11" under "Active" in docs/memory/STATE.md with: public/assets/motion/**, public/assets/3d/**, src/data/motion-assets.json, assets-src/**, scripts/assets/**, ASSETS.md. Stop if claimed.
LAST: release the claim, set Task 11's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

You GATHER and OPTIMIZE files. Do not style or recolor them and do not write UI code; the designer (Claude) integrates them.

A. Lottie (LottieFiles; only animations whose page shows the free Lottie Simple License, or that are CC0). Need 6, flat/line style, single color where possible:
   streak-flame (looping), check-success (one-shot), confetti-burst-small (one-shot), loading-dots (looping), bookmark-toggle (one-shot), arrow-nudge-right (looping).
   Each: ≤ 30 KB as .lottie (dotLottie), ≤ 60 fps, ≤ 3 s, no embedded raster images. Save to public/assets/motion/{name}.lottie (+ the .json original in assets-src/motion/).
B. 3D props (Poly Pizza or Kenney, CC0 or CC BY only): open-book, globe, scroll-paper, ballot-box, family-house, factory. Low-poly (≤ 5k triangles each).
   Convert to .glb with Draco (gltf-transform: `gltf-transform optimize in.glb out.glb --compress draco --texture-compress webp`), ≤ 300 KB each, textures ≤ 512 px. Save to public/assets/3d/{name}.glb.
C. Fonts: confirm Fraunces (with the opsz + SOFT axes), Inter and Mukta are available through next/font/google; write the exact family names + axes in the manifest. Do not download font files.
D. Manifest src/data/motion-assets.json: [{ name, kind: "lottie"|"glb"|"font", file, bytes, license, author, sourceUrl, notes }]. Append rows to ASSETS.md.
E. Contact sheet: assets-src/motion-contact-sheet.png showing each 3D prop rendered on #F6F1E7 and #0F1626 (use @gltf-transform/cli inspect or a quick three.js headless screenshot script in scripts/assets/).

DONE WHEN: every file meets its size limit and has a verifiable license URL; commit `chore: add licensed motion and 3d assets`.
````

---

## Task 10: 3D + motion + polish (Claude, main)
Hero 3D society network (aaj ke CA wale nodes saffron pulse karenge), Syllabus Galaxy, page transitions, thinker 3D tilt, dark-mode polish, device-tier fallback, reduced-motion. Task 03 aur 11 ke baad main karunga.

---

## Task 12
**Performance budget CI + device-tier verification**
**Kaun:** Codex · 6.0 · **Kab:** Task 10 ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (read docs/02-design-system.md §8 closely) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt. Do not write code before this.
CLAIM: add "Task 12" under "Active" in docs/memory/STATE.md with: scripts/perf/**, .github/workflows/ci.yml, lighthouserc.json, tests/e2e/perf/**, package.json. Do NOT edit src/**; report UI/perf problems in docs/reviews/task12-perf.md for Claude.
LAST: release the claim, set Task 12's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (include "Read-first: ✓"). Stage only your files.

1. Bundle budget: after `next build`, a script (scripts/perf/bundle-budget.ts) reads .next build output and fails if the first-load JS of "/" is > 150 KB gzip, or if `three`/`@react-three/*` appear in any initial (non-lazy) chunk of any route. Print a table per route.
2. Playwright perf specs (tests/e2e/perf/):
   - Emulate a low-end device (CPU throttling 6x via CDP, deviceMemory 2, hardwareConcurrency 2): the hero must render the static SVG fallback (expect [data-hero="fallback"]) and no WebGL context is created.
   - Default desktop: the hero creates exactly 1 WebGL canvas, only after it enters the viewport, and pauses rendering when scrolled away (expect [data-hero-state="paused"]). These data attributes are the contract Claude implements in Task 10; if missing, report them, don't add them.
   - prefers-reduced-motion: no canvas animation loop (expect [data-hero-state="static"]), no Lenis.
   - Long-animation-frame check: scroll the home page top→bottom with the mouse wheel; collect PerformanceObserver 'long-animation-frame' entries; fail if any > 100 ms on desktop.
3. Lighthouse: add /syllabus (galaxy page) to lighthouserc; keep the Phase 1 assertions.
4. Wire into CI after e2e.

DONE WHEN: budgets pass or the report lists exact offenders; commit `test: performance budgets and device-tier checks`.
````
