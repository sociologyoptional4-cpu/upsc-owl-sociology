# AUM Sociology

UPSC Sociology Optional ki dynamic website. Isme ek admin panel hai aur ek API. Naye pages bina deploy ke ban jaate hain, aur AI pipeline (Phase 2) roz current affairs likhegi.

Poora plan: [docs/README.md](docs/README.md)

## Stack

Next.js 16 (App Router) + Payload CMS 3 (`/admin` + `/api`) + Postgres + Tailwind v4 + Lenis/GSAP/Motion.

## Local setup

```bash
createdb aum_sociology                 # Homebrew Postgres
cp .env.example .env                   # DATABASE_URL, PAYLOAD_SECRET, SEED_ADMIN_* bharo
npm install
npm run seed                           # syllabus, thinkers, About page, admin user
npm run dev                            # http://localhost:3000, admin: /admin
```

## Scripts

| Command | Kaam |
|---------|------|
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build / run |
| `npm run seed` | Starter content (idempotent) |
| `npm run generate:types` | Collections badalne ke baad `src/payload-types.ts` regenerate |
| `npm run test:unit` | Unit tests (slug, links, AI schema, roles) |
| `npm run lint` | ESLint |

## Naya page kaise banta hai

1. **Admin:** `/admin` → Pages → Create → blocks jodo → Publish. Page turant `/{slug}` pe live ho jaata hai. Parent page chuno to URL nested banta hai (`/guides/answer-writing`).
2. **API:** `POST /api/pages`, header `Authorization: users API-Key <key>` ya `JWT <token>`, body mein `title` + `layout` blocks.
3. **Homepage:** jis page ka slug `home` hai, wahi `/` pe dikhta hai. Jab tak wo nahi banta, ek designed placeholder dikhta hai.

`admin`, `api`, `current-affairs`, `syllabus`, `thinkers` jaise reserved slugs top level pe allowed nahi hain.

## Roles

| Role | Access |
|------|--------|
| `admin` | Sab kuch. Pehla user apne aap admin banta hai. |
| `editor` | Content banana, edit aur publish karna |
| `ai-bot` | Sirf API key se drafts. Publish bhejega to bhi draft hi save hoga. |

## Code map

```
src/
├── access/roles.ts            role-based access
├── blocks/<name>/             config.ts (admin) + Component.tsx (UI) + schema.ts (AI Zod)
├── blocks/RenderBlocks.tsx    layout → React
├── collections/               Pages, CurrentAffairs, Topics, Units, Papers, Thinkers, Media, Users
├── globals/SiteSettings.ts    pipeline kill switch, autoPublish, daily cost cap
├── hooks/payload/             revalidate on publish, ai-bot draft guard
├── app/(frontend)/            public site: /, /[...slug]
├── components/layout/         Header, Footer, SmoothScroll (Lenis + GSAP), ThemeToggle
├── styles/tokens.css          design tokens ("The Living Journal")
└── seed/                      starter data
```

Asset licensing rules: [ASSETS.md](ASSETS.md)
