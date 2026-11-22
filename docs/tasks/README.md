# Task board

**Kaam kaise hota hai:** Claude main mind aur UI/UX designer hai. Baaki agents task files ke prompts execute karte hain. Har agent [AGENTS.md](../../AGENTS.md) padhta hai aur shared memory ([STATE](../memory/STATE.md) · [DECISIONS](../memory/DECISIONS.md) · [LOG](../memory/LOG.md)) update karta hai. Isse saara kaam aisa lagta hai jaise ek hi insaan ne kiya ho.

**Tumhara kaam:** jo task "Ready" hai, uska `PROMPT` block copy karo, bataye gaye tool aur model mein paste karo. Kaam ho jaaye to mujhe bolo "task NN done".

## Board

| # | Task | Tool · Model | Depends on | Status |
|---|------|--------------|-----------|--------|
| 01 | [Phase 0 commit + Phase 1 data layer, routes, SEO](01-codex-phase1-data-layer.md) | Codex · 6.0 | — | ✅ Done |
| 02 | [Thinker portraits (licensed cut-outs)](02-codex-assets-thinkers.md) | Antigravity · Gemini 3.8 Flash | 01 Part A | ✅ Done |
| R1 | [Review Task 01](R1-review-task01.md) | Antigravity · Claude Sonnet 5.5 | 01 | ⏳ |
| 03 | Phase 1 UI: Home, CA, Syllabus, Topic, Thinker views + motion | Claude Code (main) | 01, R1 | ✅ Done |
| B1 | [Blog media + blocks](B1-blog-media-blocks.md) | Claude (took over) | — | ✅ |
| B2 | [Blog import + hardening](B2-blog-import-hardening.md) | Claude (took over) | — | ✅ import · hardening pending |
| B3 | Writing desk + reader UI + integration | Claude Code (main) | B1, B2 | ✅ |
| B4 | [Smart paste + auto SEO](B4-smart-paste.md) | Claude (took over) | B2 | ✅ |
| B5 | [Blog AI Studio](../11-blog-ai-studio.md) | Claude (owner request) | B4 | ✅ |

Status: 🟢 Ready · 🔵 In progress · ✅ Done · ⏳ Waiting · ✂️ Cut

## Phase 2 (lean plan)

Current detailed status is tracked in [MASTER-PLAN.md](MASTER-PLAN.md): Tasks 05–08 implementation is complete; live review-flow smoke, the 5–7 day unattended soak, and a GitHub Actions pipeline run remain pending.

## Model guide (kaunsa kaam kis model ko)

| Kaam | Pehli choice | Kyun / fallback |
|------|--------------|-----------------|
| Backend code (collections, data layer, API, pipeline, tests) | **Codex 6.0** | Repo-wide coding agent hai, `AGENTS.md` khud padhta hai. Fallback: Antigravity · Gemini 4 Neon |
| Browser + mechanical kaam (assets dhoondhna, license check, files process karna) | **Antigravity · Gemini 3.8 Flash** | Sasta aur tez. Output kharab ho to Gemini 4 Neon |
| Code review / second opinion | **Antigravity · Claude Sonnet 5.5** | Code likhne wale (Codex) se alag model, isliye zyada bugs pakdega |
| Bahut mushkil bug ya architecture uljhan | Antigravity · Claude Opus 5.5 | Mehenga hai, sirf jab baaki fail ho jaayein |
| Lambe multi-step chores (bahut saari files, migrations) | Antigravity · Orchestrator | Khud sub-steps mein baant leta hai |
| Docs / simple edits | Gemini 3.8 Flash | Sabse sasta |

> Gemini 4 Neon, Argon aur Hydrogen naye models hain. Inki asli taakat mujhe pata nahi, isliye maine inhe sirf fallback rakha hai. Kisi chhote task pe try karo. Jo accha kaam kare, mujhe batao, main ye table update kar dunga.

## Rules jo har prompt mein already hain
- Start mein files claim karo (STATE.md), end mein LOG.md mein entry likho.
- Sirf apni files stage karo, `git add -A` kabhi nahi (Task 01 ke pehle commit ko chhod ke).
- Design files (`src/components`, `src/styles`) sirf Claude chhuega.
