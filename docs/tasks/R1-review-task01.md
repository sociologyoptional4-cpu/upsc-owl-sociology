# Task R1 — Independent review of Task 01

> ⛔ **CUT (D14):** ye review skip. Launch se pehle [RF](lean-tasks.md#task-rf) sab cover karega.

**Kisko:** Antigravity · **Claude Sonnet 5.5**. Jisne code likha usse alag model review kare, isse zyada bugs pakde jaate hain. · **Kab:** Task 01 commit hone ke baad · **Ye code nahi likhega**, sirf report dega.

---

## PROMPT

````text
READ FIRST (mandatory, before any work, in this order): AGENTS.md → docs/tasks/MASTER-PLAN.md → docs/README.md and docs/01-architecture.md … docs/06-roadmap.md (skim all, read closely what your task touches) → docs/memory/STATE.md, docs/memory/DECISIONS.md, the tail of docs/memory/LOG.md → this prompt. Also read docs/tasks/01-codex-phase1-data-layer.md (the spec you review).
You are a READ-ONLY reviewer. Do not edit source files. Your only writes: docs/reviews/R1-task01.md and your LOG.md entry.

Review the commit(s) from Task 01 (`git log --oneline -5`, then `git show` / `git diff <phase0-commit>..HEAD`).
Check, in this order:
1. Contract: does src/lib/data/types.ts match the spec EXACTLY (names, fields, nullability)? List every deviation.
2. Correctness: date/slug matching in getCAArticle; prev/next ordering; Asia/Kolkata date handling (no off-by-one at midnight UTC); issue-number math; caCount counts published CA only; getTopicDetail returns null when paper→unit→topic chain is broken.
3. Security/access: public reads use overrideAccess:false and draft:false (drafts must never leak); route params Zod-validated; no secrets logged; href fields validated.
4. Performance: N+1 queries (count the queries for getSyllabusTree and the home page), missing `depth`/`select` limits, unbounded queries (every find has a limit).
5. Revalidation: publishing/unpublishing a CA refreshes article, issue, hub, home and each linked topic; topic/thinker/unit/paper hooks per spec.
6. Ownership: did Task 01 touch any Claude-owned path (src/components/** except the allowed stub views + the Header nav prop, src/styles/**, blocks/*/Component.tsx)?
7. Tests: do they test behaviour (not implementation)? Run `npx tsc --noEmit`, `npx eslint src tests`, `npm run test:unit`, `npm run build` and report real results.
8. Hands-on: `npm run seed && npm run dev`, then curl each route listed under DONE WHEN in the spec (expect 200) plus one wrong date/slug combo (expect 404).

Write docs/reviews/R1-task01.md:
- Verdict: APPROVE | APPROVE WITH FIXES | BLOCK
- Findings table: severity (CRITICAL/HIGH/MEDIUM/LOW) | file:line | problem | concrete failure scenario | suggested fix
- Only report issues you verified. No style nitpicks unless they hide a bug.
Then append your LOG.md entry and update STATE.md ("Next up").
````
