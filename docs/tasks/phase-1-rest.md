# Phase 1: remaining tasks

> ⛔ **Lean (D14):** Task 04 ki jagah [04-lite](lean-tasks.md#task-04-lite) chalao.

## Task 03: Phase 1 UI (Claude, main)
Ye main khud karunga, isliye iska prompt nahi hai. 01, R1 aur 02 done hone ke baad mujhe bolna "task 03 shuru karo".

---

## Task 04
**Playwright E2E + visual regression + accessibility + Lighthouse budgets**
**Kaun:** Codex · 6.0 · **Kab:** Task 03 done hone ke baad

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (skim all, read closely what your task touches) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt. Do not write code before this.
CLAIM: add "Task 04" under "Active" in docs/memory/STATE.md with: tests/e2e/**, playwright.config.ts, lighthouserc.json, .github/workflows/ci.yml, package.json. Stop if another active task claims them.
LAST: release the claim, set Task 04's status in docs/tasks/MASTER-PLAN.md, append your LOG.md entry (format in AGENTS.md, include "Read-first: ✓"). Stage only your files (never git add -A).

Do NOT edit src/**. If a test reveals a UI bug, write it in docs/reviews/task04-ui-bugs.md (page, viewport, theme, screenshot path, what's wrong) for Claude.

1. Playwright config: baseURL http://localhost:3000; webServer `npm run build && npm start` (reuseExistingServer locally); projects chromium, webkit, firefox; retries 1 in CI. Global setup runs `npm run seed`.
2. E2E specs in tests/e2e/ (deterministic waits only, no fixed timeouts):
   - home: h1 visible; latest CA cards link to /current-affairs/<date>/<slug>; skip link focuses #main.
   - current-affairs: hub → issue → article; external source links have rel="noopener noreferrer"; wrong date+slug → 404 containing "anomie".
   - syllabus: /syllabus → paper → unit → topic; breadcrumbs work.
   - thinkers: index → detail.
   - cms-publish: log in via REST with SEED_ADMIN_* env, POST a page, assert its URL is 200 and shows the heading, then delete it.
   - theme: toggle flips html[data-theme] and persists after reload.
   - reduced-motion: with reducedMotion 'reduce', <html> has no "lenis" class.
3. Visual regression: toHaveScreenshot for /, /current-affairs, one article, /syllabus, one topic, /thinkers at 320, 768, 1024, 1440 in light AND dark. Mask [data-dynamic]. maxDiffPixelRatio 0.01. Commit baselines.
4. Accessibility: @axe-core/playwright on the same pages; fail on serious/critical.
5. Overflow guard: at 320px, scrollWidth <= 320 on every page above.
6. Lighthouse CI (@lhci/cli), mobile preset, URLs /, /current-affairs, one topic. Assert performance ≥ 0.9, accessibility ≥ 0.95, CLS ≤ 0.1, LCP ≤ 2500ms, TBT ≤ 200ms.
7. Scripts: test:visual, test:a11y, lhci. GitHub Actions .github/workflows/ci.yml on PR + push to main: Postgres 16 service, generated PAYLOAD_SECRET, then tsc → eslint → unit → build → e2e → lhci. Upload the Playwright report on failure.

DONE WHEN: everything passes locally (put counts in LOG), the UI-bug file lists every issue found (or says "none"), commit `test: e2e, visual regression, a11y and lighthouse budgets for phase 1`.
````
