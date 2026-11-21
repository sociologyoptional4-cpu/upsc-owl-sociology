# 01 — Architecture

## 1. Tech stack (final recommendation)

| Layer | Choice | Kyun |
|-------|--------|------|
| Framework | **Next.js 15 (App Router) + TypeScript** | ISR, server components, on-demand revalidate, Vercel pe zero-config |
| CMS + Admin + API | **Payload CMS 3** (same Next.js app ke andar, `/admin`) | Free & open-source, admin panel ready, REST + GraphQL + Local API auto-generate, **Blocks field = page builder**, drafts/versions, roles, API keys, hooks |
| Database | **Postgres on Supabase** (+ `pgvector`) | Free tier, backups, vector search duplicate news pakadne ke liye |
| Media storage | **Supabase Storage / Cloudflare R2** (Payload S3 adapter) | Sasta, CDN |
| Styling | **Tailwind CSS v4** + CSS variables (tokens) | Fast, design tokens ek jagah |
| UI primitives | **Radix UI** (shadcn sirf as a starting point, phir restyle) | Accessible dialogs/tabs; default shadcn look ship nahi karenge |
| Smooth scroll | **Lenis** | "Ultra smooth" feel ka core |
| Scroll animation | **GSAP + ScrollTrigger** | Pinning, scrubbing, timelines |
| UI motion | **Motion (Framer Motion)** | Page transitions, layout animations, hover |
| 3D | **Three.js + React Three Fiber + drei** | Hero network, syllabus galaxy |
| Interactive illustrations | **Rive** (optional) | Halke animated thinker/mascot |
| Search | **Pagefind** (static) → baad mein Postgres full-text / Algolia | Free start |
| Validation | **Zod** | AI output aur API input dono validate |
| AI | **DeepSeek** (bulk filter) + **Claude API** (final writing) | Cost split |
| Jobs | **GitHub Actions cron** (daily) | Free, logs, retry |
| Distribution | **Telegram Bot API** | 800-member channel pe auto-post |
| Analytics | **Plausible / Umami** (self-host) ya GA4 | Privacy-friendly |
| Testing | Vitest + Playwright | Unit + visual regression (320/768/1024/1440) |

### Payload kyun, Sanity kyun nahi?
Sanity (jo Socio Currents use karta hai) bhi accha hai, lekin: alag hosted studio, paid tiers jaldi lagte hain, data unke server pe. Payload **hamare hi Next.js app mein** chalta hai, data **hamare Postgres** mein, admin panel + API free. Automation ke liye ye best fit hai.

## 2. System diagram

```
                 ┌──────────────────────── GitHub Actions (cron 06:00 IST) ────────────────────────┐
                 │  fetch feeds → dedupe → DeepSeek score → Claude write → Zod validate → POST API │
                 └───────────────────────────────────────┬─────────────────────────────────────────┘
                                                         │ HTTPS + API key (role: ai-bot)
┌────────────┐   login    ┌──────────────────────────────▼──────────────────────────────┐
│ Tum/Editor │──────────► │                Next.js app (Vercel)                         │
└────────────┘  /admin    │  ┌─────────────┐   ┌──────────────┐   ┌───────────────────┐ │
                          │  │ Payload     │   │ Payload API  │   │ Public site       │ │
                          │  │ Admin UI    │   │ /api/*       │   │ app/(site)/...    │ │
                          │  └──────┬──────┘   └──────┬───────┘   └─────────┬─────────┘ │
                          │         └──── afterChange hook ── revalidateTag ┘           │
                          └───────────────────────────┬─────────────────────────────────┘
                                                      │
                          ┌───────────────────────────▼───────────┐     ┌──────────────┐
                          │ Supabase Postgres (+pgvector) + Storage│     │ Telegram bot │
                          └────────────────────────────────────────┘     └──────────────┘
```

## 3. Data model (Payload collections)

| Collection | Key fields | URL |
|-----------|-----------|-----|
| `pages` | title, slug, parent (nested), `layout: Block[]`, seo, status | `/{...slug}` (catch-all) |
| `papers` | code (P1/P2), title, color | `/syllabus/paper-1` |
| `units` | paper, number, title, order | `/syllabus/paper-1/{unit}` |
| `topics` | unit, title, slug, summary, `layout: Block[]`, keyTerms[], thinkers[], relatedTopics[] | `/syllabus/paper-1/{unit}/{topic}` |
| `thinkers` | name, slug, era, portrait (alpha WebP), keyIdeas[], works[], `layout` | `/thinkers/{slug}` |
| `current-affairs` | headline, slug, date, sources[], summary, `layout`, topics[], paper, relevanceScore, aiMeta, status | `/current-affairs/{yyyy-mm-dd}/{slug}` |
| `digests` | type (weekly/monthly), range, items[] (auto) | `/digest/{type}/{id}` |
| `pyqs` | year, paper, marks, question, topics[], answerHints (block) | `/pyq?…` |
| `mcqs` | question, options[], answer, explanation, topics[] | quiz blocks / `/practice` |
| `concepts` | term, definition, topics[], thinkers[] | `/concepts/{slug}` (glossary) |
| `sources` | name, feedUrl, type, trust level, active | (internal) |
| `media` | file, alt, credit, license | (CDN) |
| `pipeline-runs` | date, fetched, kept, published, cost, errors, logs | admin only |
| `users` | name, role (admin / editor / ai-bot), apiKey | admin only |

**Globals:** `site-settings` (name, socials, Telegram link), `navigation` (header/footer menus — admin se edit), `homepage` (hero copy, featured slots).

### Relations (yahi site ko "smart" banata hai)
```
current-affairs ──many──► topics ◄──many── pyqs
       │                    │  ▲
       └──► thinkers ◄──────┘  └── concepts
```
Har topic page apne aap dikhata hai: "Is topic se jude latest current affairs", "PYQs", "Thinkers", "Concepts". Ek naya CA item publish hua → uske linked topic pages bhi revalidate.

## 4. Pages khud ba khud kaise bante hain

### 4.1 Routing
```
src/app/
├── (site)/
│   ├── page.tsx                                  → homepage (global `homepage`)
│   ├── current-affairs/page.tsx                  → hub
│   ├── current-affairs/[date]/page.tsx           → us din ki list
│   ├── current-affairs/[date]/[slug]/page.tsx    → article
│   ├── syllabus/page.tsx                         → 3D map + list
│   ├── syllabus/[paper]/[[...path]]/page.tsx     → paper / unit / topic
│   ├── thinkers/page.tsx, thinkers/[slug]/page.tsx
│   ├── concepts/[slug]/page.tsx
│   ├── pyq/page.tsx, practice/page.tsx, search/page.tsx
│   ├── digest/[type]/[id]/page.tsx
│   └── [...slug]/page.tsx                        → KOI BHI CMS page (about, mentorship, landing pages…)
├── (payload)/admin/[[...segments]]/page.tsx      → admin panel
└── (payload)/api/[...slug]/route.ts              → auto REST API
```

### 4.2 Rendering rule
- `generateStaticParams` sirf top ~200 pages ke liye (build fast rahe).
- `dynamicParams = true` → naya slug pehli request pe server-render hota hai, phir cache.
- Fetch pe `next: { tags: ['topic:caste-system'] }` jaise tags.
- Payload `afterChange` hook → `revalidateTag()` us document aur uske related pages ka. Matlab publish dabate hi site update (seconds mein), redeploy nahi.

### 4.3 Block renderer
```
<RenderBlocks blocks={doc.layout} />
  switch(block.blockType) → <HeroBlock/> <RichTextBlock/> <ThinkerQuoteBlock/> …
```
Ek hi block library admin, AI aur frontend teeno share karte hain → `src/blocks/{name}/config.ts` (Payload schema) + `Component.tsx` (UI) + `schema.ts` (Zod, AI ke liye). Block list: [04-cms-admin-api.md](04-cms-admin-api.md#block-library).

## 5. Folder structure (feature-wise)

```
src/
├── app/                    routes (upar dekho)
├── blocks/                 har block: config.ts + Component.tsx + schema.ts
├── collections/            Payload collections
├── globals/                site-settings, navigation, homepage
├── components/
│   ├── hero/               NetworkHero (3D), HeroFallback (SVG)
│   ├── layout/             Header, Footer, SmoothScroll (Lenis), PageTransition
│   ├── cards/              CACard, TopicCard, ThinkerCard
│   └── ui/                 Button, Tag, Tabs, Dialog (Radix restyled)
├── hooks/                  useReducedMotion, useDeviceTier, useLenis
├── lib/                    payload client, revalidate, seo, og
├── styles/                 tokens.css, typography.css, global.css
└── pipeline/               (GitHub Action ka code) feeds, dedupe, llm, publish, telegram
```

## 6. Security basics
- AI bot ka API key sirf `ai-bot` role ka: **sirf draft create** kar sakta hai, publish/delete nahi (jab tak auto-publish on na ho).
- Saari secrets GitHub Actions secrets + Vercel env mein. Repo mein kabhi nahi.
- Admin pe 2FA (Payload auth + strong password), `/admin` rate-limit.
- AI se aaya HTML kabhi render nahi hoga — sirf typed block JSON → React components (XSS-safe).
- CSP headers, `next.config` security headers.
