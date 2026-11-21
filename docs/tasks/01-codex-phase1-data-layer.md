# Task 01 — Commit Phase 0, then build the Phase 1 data layer and routes

**Kisko:** Codex 6.0 · **Time:** ~1-2 ghante · **Iske baad:** Claude views design karega (task 03)

Neeche wala poora block copy karke Codex mein paste karo.

---

## PROMPT

````text
FIRST: read AGENTS.md (memory protocol + ownership), docs/memory/STATE.md, docs/memory/DECISIONS.md and the tail of docs/memory/LOG.md. Claim your files under "Active" in STATE.md before editing anything.
LAST: release your claim in STATE.md, mark the task status in docs/tasks/README.md, and append your entry to docs/memory/LOG.md (format in AGENTS.md). Include these memory files in your final commit.

You are working in the repo at "/Users/ujjawalchaudhary/sociology website" (note the space in the path; quote it).
Stack: Next.js 16 App Router + Payload CMS 3.94 (embedded, /admin + /api) + Postgres (local DB `aum_sociology`, URL in .env) + Tailwind v4 + TypeScript strict.
Read first: README.md, docs/README.md, docs/01-architecture.md, docs/03-pages.md, docs/tasks/README.md (ownership rules).

HARD RULES
- Do NOT edit design-owned files: src/components/**, src/styles/**, src/blocks/*/Component.tsx, src/hooks/useReducedMotion.ts. Exception: you CREATE the stub view files listed in Part C (only if they don't exist yet).
- Never commit .env or sociology_hinglish.mp4. Never print secrets.
- No `any`. Validate inputs (route params) with Zod. Immutable updates. Functions < 50 lines.
- Commit message format: `<type>: <description>` (feat, fix, chore, test, docs). End every commit message with:
  Co-Authored-By: Codex <noreply@openai.com>
- After schema changes run `npm run generate:types`. Before finishing run: `npx tsc --noEmit`, `npx eslint src tests`, `npm run test:unit`, `npm run build`. All must pass.

PART A — Commit Phase 0 (do this first)
1. Add `/sociology_hinglish.mp4` to .gitignore.
2. `git add -A` and commit: `feat: phase 0 foundation (payload cms, blocks, roles, design tokens)`. This is the ONLY time you use `git add -A`; another agent may start right after this commit.
3. From here on, stage only the files you claimed in STATE.md (`git add <paths>`), never `-A`.

PART B — Data layer: src/lib/data/
Create these files. All functions are server-only (`import 'server-only'`), use `getPayloadClient()` from src/lib/queries.ts, call the Local API with `overrideAccess: false` and `draft: false` (public reads), wrap exported readers in React `cache()`, and return the plain view-model types below (NOT raw Payload docs). Dates are 'YYYY-MM-DD' strings in Asia/Kolkata.

// src/lib/data/types.ts
export type PaperCode = 'P1' | 'P2'
export type TopicChip = { title: string; slug: string; href: string; paper: PaperCode }
export type ThinkerChip = { name: string; slug: string; href: string }
export type CACard = {
  id: number; headline: string; slug: string; date: string; href: string
  summary: string | null; paper: PaperCode | 'Both' | null
  topics: TopicChip[]; thinkers: ThinkerChip[]
  isAiGenerated: boolean; sourceNames: string[]
}
export type CAArticle = CACard & {
  sources: { name: string; url: string }[]
  layout: import('@/payload-types').CurrentAffair['layout']
  prev: { href: string; headline: string } | null   // older story (by date, then id)
  next: { href: string; headline: string } | null   // newer story
}
export type Paginated<T> = { items: T[]; page: number; totalPages: number; total: number }
export type IssueSummary = { date: string; number: number; count: number; href: string }
export type SyllabusTopic = { title: string; slug: string; href: string; caCount: number }
export type SyllabusUnit = { number: number; title: string; slug: string; href: string; topics: SyllabusTopic[] }
export type SyllabusPaper = { code: PaperCode; title: string; slug: string; href: string; units: SyllabusUnit[] }
export type TopicDetail = {
  title: string; slug: string; href: string; summary: string | null; paper: PaperCode
  breadcrumbs: { label: string; href: string }[]
  layout: import('@/payload-types').Topic['layout']
  thinkers: ThinkerChip[]; relatedTopics: TopicChip[]
  latestCA: CACard[]          // newest 6 linked current affairs
  caCount: number
}
export type ThinkerCard = { name: string; slug: string; href: string; era: string | null
  portrait: { url: string; alt: string; width: number; height: number } | null; keyIdeas: string[] }
export type ThinkerDetail = ThinkerCard & {
  layout: import('@/payload-types').Thinker['layout']
  latestCA: CACard[]; topics: TopicChip[]   // topics whose `thinkers` include this thinker
}
export type HomeData = { issue: IssueSummary | null; latestCA: CACard[];
  featuredThinker: ThinkerCard | null; syllabus: SyllabusPaper[] }

URLs (single source of truth, export from src/lib/data/urls.ts):
- CA article: /current-affairs/{date}/{slug};  daily issue: /current-affairs/{date};  hub: /current-affairs
- Paper: /syllabus/{paperSlug}; unit: /syllabus/{paperSlug}/{unitSlug}; topic: /syllabus/{paperSlug}/{unitSlug}/{topicSlug}
- Thinker: /thinkers/{slug}
Issue number = whole days between LAUNCH_DATE ('2026-11-21', constant in src/lib/data/issue.ts) and the date, plus 1.

Functions to export:
- current-affairs.ts:
  getCAList(params: { page?: number; limit?: number (default 12, max 48); paper?: PaperCode; topic?: string /*slug*/; thinker?: string /*slug*/; month?: string /*YYYY-MM*/ }): Promise<Paginated<CACard>>
  getIssue(date: string): Promise<{ issue: IssueSummary; items: CACard[] } | null>
  getRecentIssues(limit = 30): Promise<IssueSummary[]>          // dates that have ≥1 published CA, newest first
  getCAArticle(date: string, slug: string): Promise<CAArticle | null>  // must match BOTH date and slug
  getCAStaticParams(limit = 100): Promise<{ date: string; slug: string }[]>
- syllabus.ts:
  getSyllabusTree(): Promise<SyllabusPaper[]>     // caCount = published CA linked to the topic; one query per collection, no N+1
  getTopicDetail(paperSlug: string, unitSlug: string, topicSlug: string): Promise<TopicDetail | null>  // 404 (null) if the chain doesn't match
  getTopicStaticParams(): Promise<{ paper: string; path: string[] }[]>
- thinkers.ts: getThinkers(): Promise<ThinkerCard[]>; getThinkerDetail(slug: string): Promise<ThinkerDetail | null>
- home.ts: getHomeData(): Promise<HomeData>   // latestCA = 6 newest; featuredThinker = site-settings.featuredThinker or first thinker

PART B2 — Schema/hook changes
- site-settings global: add `featuredThinker` (relationship → thinkers). Keep its read access as is; read it server-side with overrideAccess: true only inside getHomeData.
- Add revalidation (reuse src/hooks/payload/revalidate.ts):
  topics → its topic URL + its paper/unit URLs + '/syllabus' + '/'
  thinkers → '/thinkers' + its URL + '/'
  current-affairs (extend existing caPaths) → also the daily issue URL and every linked topic URL (look the topics up by id; keep it in one query)
  units/papers → '/syllabus'
- Add a `navigation` global (header + footer link arrays: label, href with validateHref from src/lib/href.ts) and seed it with: Current Affairs, Syllabus, Thinkers, About. Export getNavigation() from src/lib/data/navigation.ts returning { header: {label,href}[]; footer: {label,href}[] }.

PART C — Routes (wiring only) + stub views
Create these route files under src/app/(frontend)/. Each: Zod-validate params (date = /^\d{4}-\d{2}-\d{2}$/, slugs = /^[a-z0-9-]+$/), call the data function, notFound() on null, export generateMetadata (title + description + canonical via alternates), export `revalidate = 3600`, generateStaticParams where listed, and render ONLY the view component with a single `data` prop.
| Route file | Data | View (create stub) | static params |
| current-affairs/page.tsx | getCAList(searchParams) + getRecentIssues(14) | src/components/views/CAHubView.tsx | — (searchParams → dynamic) |
| current-affairs/[date]/page.tsx | getIssue | src/components/views/IssueView.tsx | last 30 issues |
| current-affairs/[date]/[slug]/page.tsx | getCAArticle | src/components/views/CAArticleView.tsx | getCAStaticParams |
| syllabus/page.tsx | getSyllabusTree | src/components/views/SyllabusView.tsx | — |
| syllabus/[paper]/[[...path]]/page.tsx | path length 0 → paper view, 1 → unit view, 2 → getTopicDetail, else notFound | PaperView.tsx, UnitView.tsx, TopicView.tsx | getTopicStaticParams |
| thinkers/page.tsx | getThinkers | src/components/views/ThinkersView.tsx | — |
| thinkers/[slug]/page.tsx | getThinkerDetail | src/components/views/ThinkerView.tsx | all thinkers |
| page.tsx (home) | KEEP current behaviour: if a published CMS page with path 'home' exists render it; otherwise render <HomeView data={await getHomeData()} /> instead of HomeFallback | src/components/views/HomeView.tsx | — |
Stub view = `export function XView({ data }: { data: T }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }` with the correct T imported from src/lib/data/types.ts. Claude will replace the stubs.
Also update src/components/layout/Header.tsx ONLY by replacing the hard-coded NAV const with a `nav` prop typed `{label: string; href: string}[]`; pass getNavigation().header from the layout. Do not change any className.

PART D — SEO plumbing
- src/app/sitemap.ts (all published pages, CA, topics, thinkers, issues) and src/app/robots.ts (disallow /admin, /api).
- src/lib/seo/jsonld.ts: helpers articleJsonLd(CAArticle), breadcrumbJsonLd(items). Expose them; Claude will place the <script type="application/ld+json"> tags in the views.

PART E — Seed + tests
- Extend src/seed (idempotent) with 3 PUBLISHED sample current affairs on 3 different dates (headline prefixed "[Sample]", summary, 1 source each with a real homepage URL like https://pib.gov.in, linked to existing topics/thinkers, layout = summary + callout blocks) so every view has data.
- Unit tests (tests/unit, vitest, AAA style): urls.ts, issue number math, the Zod param schemas, the view-model mappers (map a fake Payload doc → CACard; missing relations → empty arrays, never throw).
- Integration test (tests/int): getCAArticle returns null when date and slug don't match.

DONE WHEN
- `npm run seed` then `npm run dev`: /current-affairs, /current-affairs/<date>, an article URL, /syllabus, /syllabus/paper-2, a unit URL, a topic URL, /thinkers, /thinkers/karl-marx all return 200 with JSON stubs; a wrong date/slug combo returns 404.
- Publishing a CA in /admin updates its topic page and the home page without a rebuild.
- tsc, eslint, unit tests and build all pass. Commit as `feat: phase 1 data layer, routes and seo plumbing`.
- Finally print a short report: files created, any contract changes you had to make (there should be none; if unavoidable, list them exactly), and anything left undone.
````
