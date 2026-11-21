# AUM Sociology — Master Plan

Ek **dynamic, AI-automated** UPSC Sociology Optional website. Roz subah AI current affairs uthata hai, unhe syllabus topics se jodta hai, aur naye pages **khud ba khud** ban jaate hain — admin panel se bhi, API se bhi.

> Status: **Plan stage.** Abhi koi code nahi likha. Ye docs approve hone ke baad Phase 0 shuru hoga.

## Docs ka order

| # | File | Kya hai |
|---|------|---------|
| 1 | [01-architecture.md](01-architecture.md) | Tech stack, system diagram, data model, "pages khud kaise bante hain" |
| 2 | [02-design-system.md](02-design-system.md) | Visual direction, colors, fonts, motion, 3D, floating visuals |
| 3 | [03-pages.md](03-pages.md) | Har public page ka wireframe + URL + data source |
| 4 | [04-cms-admin-api.md](04-cms-admin-api.md) | Admin panel, block page-builder, roles, API endpoints |
| 5 | [05-automation-pipeline.md](05-automation-pipeline.md) | Daily AI pipeline: news → notes → page → Telegram |
| 6 | [06-roadmap.md](06-roadmap.md) | Phases, deliverables, acceptance checks, risks, open decisions |

## Ek line mein architecture

```
RSS / PIB / PRS ──► AI pipeline (DeepSeek filter + Claude writer)
                          │  JSON blocks (Zod validated)
                          ▼
                 Payload CMS API  ◄── Admin panel (/admin) — tum ya editor
                          │  Postgres (Supabase)
                          ▼
             Next.js site (ISR + on-demand revalidate) ──► Vercel
                          │
                          └──► Telegram channel, sitemap, OG images
```

## Sabse important design decision

**Har page "blocks" se banta hai.** Page = `slug` + `layout: Block[]`. Admin panel mein editor blocks drag-drop karta hai; AI wahi same block JSON API pe bhejta hai. Isliye naya page banana = ek database row banana. Koi deploy, koi naya code nahi.

## Reference sites (kis cheez ke liye)

| Site | Kya seekhna hai |
|------|-----------------|
| sociocurrents.com | Content structure (competitor baseline) |
| lusion.co, igloo.inc | 3D hero, scroll choreography |
| bruno-simon.com | Playful 3D, performance tricks |
| linear.app, stripe.com | Clean layout, micro-interactions |
| nytimes.com/interactive, pudding.cool | Editorial scrollytelling, data stories |
| are.na, readwise.io | Knowledge-graph / linked notes feel |
| awwwards.com | Inspiration browse |
