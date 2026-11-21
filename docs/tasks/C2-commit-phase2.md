# Task C2: Phase 2 ka kaam commit + LOG (housekeeping)

**Kaun:** Codex 6.0 · **Kab:** abhi, Task 09 (Claude) se pehle ya saath · ~10 minute

Task 05-08 ka code repo mein hai aur chal bhi raha hai (51 tests, build pass). Par uska commit nahi hua, LOG entries nahi likhi gayi, aur board pe status bhi nahi lagaya gaya.

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/memory/STATE.md, docs/memory/DECISIONS.md (D11-D14), the tail of docs/memory/LOG.md → docs/tasks/phase-2-automation.md (specs of Tasks 05-08) → this prompt.
CLAIM: add "Task C2" under "Active" in docs/memory/STATE.md (files: whatever Tasks 05-08 created/changed, src/endpoints/index.ts, docs/memory/*, docs/tasks/MASTER-PLAN.md). Do NOT touch src/components/** or src/styles/** (Claude owns them; they have uncommitted UI work too, leave those files unstaged).

1. Small contract fix: GET /api/admin/review-queue must return `date` as 'YYYY-MM-DD' (Asia/Kolkata), as in the ReviewItem spec. Today it returns a full ISO timestamp. Add a unit test.
2. (Done by Claude) /practice and /digest pages now render QuizView/DigestView. Include those two page.tsx files in the Task 08 commit; do not change src/components/**.
3. Run: npx tsc --noEmit, npx eslint src tests, npm run test:unit, npm run build. All must pass.
4. Commit Phase 2 in logical commits, staging only non-UI files (`git add <paths>`, never -A):
   - `feat: ingest api, review workflow and pipeline bookkeeping` (Task 05)
   - `docs: pipeline prompts, style guide and eval set v1` (Task 07, if present)
   - `feat: daily ai pipeline and scheduled workflow` (Task 06)
   - `feat: telegram auto-post, daily quiz and digests` (Task 08)
   End each message with: Co-Authored-By: Codex <noreply@openai.com>
5. Append ONE LOG.md entry per task (05, 06, 07, 08) using the AGENTS.md format. Write what was actually built, the pgvector-vs-JSON embedding choice, which feeds were verified, test counts, and anything not done. Mark 05, 06, 07, 08 ✅ in docs/tasks/MASTER-PLAN.md (Step B). Release your claim.
6. Print: list of commits created, and any uncommitted files you intentionally left (should be only Claude's UI files).
````
