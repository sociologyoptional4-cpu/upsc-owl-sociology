# 06 — Roadmap

## Phase 0 — Foundation ✅ (21 Nov 2026)
> Bana: Next.js 16 + Payload 3.94 + local Postgres (Supabase prod ke waqt jodenge). 8 collections, SiteSettings global, 6 blocks (`keyTerms` = keyTermsTable), roles, ai-bot ka draft guard, revalidate-on-publish, seed, 33 unit tests.
> Verify hua: API se nested page bana, pehle 404 tha, phir bina redeploy ke 200. Reserved slug reject hua. Bot ka publish draft mein save hua. Production build pass hua.
> Baaki: Supabase/Vercel connect karna (tumhare accounts chahiye), Playwright visual tests (Phase 1 ke saath).

- Next.js 15 + TS + Tailwind v4 + Payload 3 + Supabase Postgres setup
- Design tokens (`styles/tokens.css`), fonts, Lenis + GSAP ticker sync, theme toggle
- Collections: users, media, pages, papers, units, topics, thinkers, current-affairs
- Block renderer + 6 core blocks (hero, richText, summary, callout, keyTermsTable, cta)
- Catch-all `/[...slug]` + revalidate hooks
- ✅ **Done jab:** admin mein page banao → publish → URL pe dikhe, redeploy ke bina.

## Phase 1 — Public site v1 (≈ 1 hafta)
- Home (masthead, CA strip, bento syllabus, thinker of week, how-it-works pinned)
- CA hub + daily issue + article, Topic page (tabs), Thinkers index/detail, Syllabus list
- Floating thinker portraits (5 thinkers, ASSETS.md)
- SEO: metadata, JSON-LD, sitemap, OG images
- ✅ **Done jab:** Lighthouse mobile ≥ 90, CLS < 0.1, 320–1440 pe koi overflow nahi.

## Phase 2 — Automation (≈ 1 hafta)
- `src/pipeline/*`, GitHub Action `daily-ca`, `/api/ingest/batch`
- Admin: Today dashboard, Review Queue, Regenerate
- Telegram auto-post
- ✅ **Done jab:** 7 din lagatar bina haath lagaye drafts aaye; review ke baad publish + Telegram.

## Phase 3 — 3D & polish (≈ 1 hafta)
- Hero 3D network (daily pulse), Syllabus Galaxy, device-tier fallback
- Page transitions, reveal animations, thinker 3D tilt
- Dark mode polish, Hindi toggle
- ✅ **Done jab:** sasta Android pe 3D smooth (ya fallback dikhe), reduced-motion respected.

## Phase 4 — Learning features
- PYQ bank, Practice/daily quiz, streaks, weekly/monthly digests + PDF
- Search ⌘K, coverage map, auto-publish switch on
- (Optional) login, bookmarks, progress sync

## Testing har phase mein
- Vitest: block schemas, pipeline validate/dedupe, slug utils
- Playwright: home loads, CMS page publish → visible, CA article renders, visual screenshots 320/768/1024/1440, light + dark
- axe accessibility checks

## Risks
| Risk | Bachav |
|------|--------|
| AI galat facts | Grounding, source links, review queue, report-error |
| 3D se site slow | Lazy chunk, device tier, fallback, budgets in CI |
| Feed band / format change | Per-source isolation, alert, sources admin se on/off |
| Cost badhna | DeepSeek filter, daily cap, kill switch |
| Copyright | Summary-only, licensed assets, ASSETS.md |

## Open decisions (tumhe batana hai)
1. **CMS:** Payload (recommended, free, apna DB) ya Sanity (hosted)?
2. **Publish mode:** shuru mein review-first (recommended) ya day-1 auto-publish?
3. **Language:** sirf Hinglish, ya Hinglish + proper Hindi toggle?
4. **Domain:** brand naam final hai (UPSC OWL Sociology, D13). Domain liya hai?
5. **Hosting:** Vercel free + Supabase free se start (recommended) — theek?
