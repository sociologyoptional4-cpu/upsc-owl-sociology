# Master plan (lean): sirf zaroori kaam

Main mind: **Claude Code** (plan, review, UI/UX, motion). Baaki kaam agents karenge.
Har prompt paste-ready hai. Har agent pehle [AGENTS.md](../../AGENTS.md) padhta hai aur shared memory update karta hai.

**Lean rule (D14):** sirf wahi banana hai jo site ko roz khud update karne aur launch karne ke liye zaroori hai.
- Telegram: site pe links rahenge, aur publish hui story channel pe apne aap post hogi (sirf ye, quiz/digest nahi).
- WebGL/3D nahi, sirf halka CSS motion jo abhi hai.
- Quiz, digests, concepts, MCQ aur monitoring stack abhi nahi. Baad mein zaroorat pade to banenge.

**Tumhara loop:** agla 🟢 task → PROMPT copy → bataye tool/model mein paste → "task NN done" bolo → main check karke agla kholunga.
**Status:** agent shuru kare to 🔵, khatam ho to ✅ lagaye. ⇉ ka matlab: pichhle task ke saath parallel chal sakta hai.
**Har prompt ki pehli line "READ FIRST" hai:** AGENTS.md → ye plan → docs 01-06 → memory → prompt.

---

## Step A: Phase 1 khatam (site dikhne laayak)

| # | Task | Kaun · Model | Status | Prompt |
|---|------|--------------|--------|--------|
| 01 | Data layer, routes, SEO | Codex 6.0 | ✅ | [01](01-codex-phase1-data-layer.md) |
| 02 / 02b | Thinker portraits + cut-out fix | Gemini 3.8 Flash | ✅ 02 · 02b 🟢 agar abhi nahi chala | [02](02-codex-assets-thinkers.md) · [02b](02b-fix-portraits.md) |
| 03 | UI: saare public pages (sociocurrents style, D12) | Claude | ✅ | — |
| 04-lite | Smoke tests (sirf zaroori: pages load, publish flow) | Codex 6.0 | 🟢 | [lean-tasks](lean-tasks.md#task-04-lite) |

## Step B: Automation (site roz khud update ho)

| # | Task | Kaun · Model | Status | Prompt |
|---|------|--------------|--------|--------|
| U1 | **Tumhara kaam:** OpenAI + DeepSeek API keys | Tum | 🟢 | [phase-2](phase-2-automation.md#u1--tumhara-kaam-keys) |
| 05 | Ingest API + review workflow | Codex 6.0 | ✅ code; live flow smoke pending | [phase-2](phase-2-automation.md#task-05) |
| 07 ⇉ | AI prompts + Hinglish style guide | Codex (OpenAI model) | ✅ offline eval baseline | [phase-2](phase-2-automation.md#task-07) |
| 06 | Daily pipeline + GitHub Actions cron | Codex 6.0 | ✅ code; 5–7 day unattended soak pending | [phase-2](phase-2-automation.md#task-06) |
| 08 | Telegram auto-post + daily quiz + digests (C2 closure) | Codex 6.0 | ✅ implementation; GH run blocked until workflow/secrets are installed | [phase-2](phase-2-automation.md#task-08) |
| 09 | **UI:** simple Review Queue (approve/reject) admin mein | Claude | ✅ | — |

✅ **Done jab:** 5-7 din bina haath lagaye drafts aayein, aur approve karte hi site pe dikhein.

## Step C: PYQ bank (UPSC ke liye sabse kaam ki cheez)

| # | Task | Kaun · Model | Status | Prompt |
|---|------|--------------|--------|--------|
| ✅ NB1 | Pehle 8 topic notes (Paper 1, Unit 1-2) + unke 52 PYQs + PYQ block design | Claude | ✅ | `src/seed/notes-batch-1.ts` |
| N1 / N1b | Poora syllabus map + 365 PYQ import + roz 4-5 notes likhne wala AI writer (review queue mein). | Codex 6.0 | ✅ local + production data import complete; daily notes review pending | [N1](N1-notes-writer.md) · [N1b](N1b-finish.md) |
| 15-lite | **UI:** PYQ bank page + topic page pe PYQs | Claude | ⏳ 13-lite ke baad | — |

## Step D: Launch

| # | Task | Kaun · Model | Status | Prompt |
|---|------|--------------|--------|--------|
| U2 | **Tumhara kaam:** GitHub, Supabase, Vercel accounts | Tum | ⏳ | [phase-5](phase-5-launch.md#u2--tumhara-kaam-accounts) |
| 16-lite | Deploy: env check, migrations, media storage, basic security headers | Codex 6.0 | 🔵 live; first admin, production bot and dry-run pending | [lean-tasks](lean-tasks.md#task-16-lite) |
| RF | Launch se pehle ek final review (security + bugs) | Antigravity · Claude Sonnet 5.5 | ⏳ 16-lite ke baad | [lean-tasks](lean-tasks.md#task-rf) |
| 18 | **UI:** final polish + mobile check | Claude | ⏳ RF ke baad | — |

---

## Step E: Blog + SEO growth

| # | Task | Kaun · Model | Status | Prompt |
|---|------|--------------|--------|--------|
| 07 | Blog platform (editor, AI organizer/beautifier, SEO basics) | Antigravity + Codex review | ✅ code; prod smoke pending | [07](../07-blog-platform.md) |
| SEO-CC | `/admin/seo` SEO Control Center v1 | Claude | ✅ `bea1997` | — |
| U3 | **Tumhara kaam:** GSC verify + service account ([docs/08 §10](../08-seo-growth.md#10-owners-one-time-gsc-setup-hinglish)) | Tum | 🟢 | — |
| S1 | SEO growth: audit, redirects, Search Console, site health, content intelligence, calendar | Codex 6.0 / Antigravity Opus 5.5 | ⏳ B2 ke baad | [S1](S1-seo-growth.md) |
| B1 | Blog media paste + infographic/gallery blocks | Antigravity · Gemini 4 Neon | 🟢 | [B1](B1-blog-media-blocks.md) |
| B2 | Blog import (notes → draft), attachments, hardening, prod smoke | Codex 6.0 | 🟢 | [B2](B2-blog-import-hardening.md) |
| B3 | Writing desk `/admin/write` + infographic/gallery/attachment UI + integration + daily guide | Claude | 🔵 | [docs/09](../09-blog-writing-desk.md) |

## Cut / baad mein (D14): inke prompts mat chalana
- R1 review (RF final review sab cover karega)
- R2. Task 08 was cut by D14, then reactivated by the user's explicit C2 completion request on 2026-11-21.
- Phase 3 poora: hero 3D, Syllabus Galaxy, Task 11 (Lottie/3D assets), Task 12 (perf CI)
- Task 13 ka bada version (concepts, MCQs, search, practice) aur R3
- Task 17 (QA crawl), R4 (Opus audit), Sentry/Upstash/Umami/backup workflows

## Open decisions
1. PYQ files kis folder mein hain? (Step C ke liye)
2. Domain liya hai? (Step D ke liye)
