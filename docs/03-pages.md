# 03 — Pages (wireframes)

Har page ka: **URL · data source · kaise auto-update hota hai · wireframe**. Wireframes mobile-first socho; neeche desktop layout dikhaya hai.

## Sitemap

```
/                                   Home
/current-affairs                    CA hub (filters)
/current-affairs/2026-11-21         Daily issue
/current-affairs/2026-11-21/{slug}  CA article
/digest/weekly/2026-w47             Weekly digest (auto)
/digest/monthly/2026-11             Monthly compilation (auto, PDF bhi)
/syllabus                           3D galaxy + list
/syllabus/paper-1                   Paper overview
/syllabus/paper-1/{unit}            Unit page
/syllabus/paper-1/{unit}/{topic}    ★ Topic page (site ka dil)
/thinkers   /thinkers/{slug}        Thinkers
/concepts/{slug}                    Glossary term
/pyq                                PYQ bank (filters)
/practice                           Daily quiz + topic quizzes
/search                             Search
/{any-slug}                         CMS pages: about, mentorship, telegram, landing pages
/admin                              Payload admin
```

---

## 1. Home `/`
**Data:** global `homepage` + latest 6 `current-affairs` + featured topics + thinkers. **Update:** har CA publish pe `revalidateTag('home')`.

```
┌──────────────────────────────────────────────────────────────────────┐
│ AUM Sociology   Current Affairs  Syllabus  Thinkers  PYQ  Practice  ◐ │  header (sticky, blur)
├──────────────────────────────────────────────────────────────────────┤
│ DAILY ISSUE #214 · Sat 21 Nov 2026 · 6 stories mapped to syllabus     │  masthead strip
│                                                                      │
│  Society ko samjho,          ┌─────────── 3D NETWORK ────────────┐   │
│  roz ki khabron se.          │   ●caste ─── ●class               │   │
│                              │      \      /    ●gender (pulse)  │   │
│  [Aaj ka issue padho →]      │   ●family ─●state ── ●religion    │   │
│  [Telegram join]             └───────────────────────────────────┘   │
│        ┌ floating ┐  ┌ floating Marx ┐  ┌ floating PYQ ┐             │  3 floating cards
├──────────────────────────────────────────────────────────────────────┤
│ AAJ KA CURRENT AFFAIRS            [All] [Paper 1] [Paper 2]          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                               │
│ │21 NOV    │ │21 NOV    │ │21 NOV    │   CA cards (topic chips)      │
│ │headline  │ │headline  │ │headline  │                               │
│ │●P2 Caste │ │●P1 Weber │ │●P2 Agrar │                               │
│ └──────────┘ └──────────┘ └──────────┘          [Poora issue →]      │
├──────────────────────────────────────────────────────────────────────┤
│ SYLLABUS MAP — bento grid (bade-chhote tiles, coverage % bar)        │
│ ┌──────────────┬───────┬───────┐                                     │
│ │ Paper 1      │Unit 3 │Unit 7 │                                     │
│ │ 62% covered  ├───────┴───────┤                                     │
│ ├──────────────┤  Paper 2      │                                     │
├──────────────────────────────────────────────────────────────────────┤
│ THINKER OF THE WEEK — big portrait popping out of frame + 3 ideas    │
├──────────────────────────────────────────────────────────────────────┤
│ YE SAB APNE AAP KAISE HOTA HAI (pinned scroll, 4 steps animate)      │
│  News → AI filter → Syllabus link → Tumhare phone pe                 │
├──────────────────────────────────────────────────────────────────────┤
│ DAILY QUIZ (5 MCQ) · streak 🔥 · footer                              │
└──────────────────────────────────────────────────────────────────────┘
```

## 2. Current Affairs hub `/current-affairs`
**Data:** `current-affairs` paginated. Filters URL mein (`?paper=2&topic=caste&month=2026-11`) → shareable.

```
┌ Masthead: "The Archive" ──────────────────────────────────────────────┐
│ [Search…]  Paper ▾  Topic ▾  Thinker ▾  Month ▾       Grid ▦ / List ☰ │
├──────────┬────────────────────────────────────────────────────────────┤
│ CALENDAR │  21 Nov — Daily Issue #214 (6)                             │
│ heatmap  │  ┌card┐ ┌card┐ ┌card┐                                      │
│ (stories │  20 Nov — Daily Issue #213 (5)                             │
│  per day)│  ┌card┐ ┌card┐ …                     [Load more]          │
│ Weekly ▸ │                                                            │
│ Monthly ▸│                                                            │
└──────────┴────────────────────────────────────────────────────────────┘
```

## 3. Daily issue `/current-affairs/{date}`
Newspaper front page feel: 1 lead story bada, baaki columns. "Download PDF", "Share on Telegram". Prev/next day arrows.

## 4. CA article `/current-affairs/{date}/{slug}`
**Data:** single doc `layout` blocks. **Update:** edit → `revalidateTag('ca:{id}')` + linked topics.

```
┌──────────────────────────────────────────────────────────────┐
│ 21 NOV 2026 · ●P2 Caste & Class · ●Thinker: Ambedkar          │
│ HEADLINE (Fraunces, big)                                     │
│ Source: The Hindu ↗ · PIB ↗    [AI draft · reviewed ✓]        │
├────────────────────────────────────────────┬─────────────────┤
│ ① Khabar kya hai (3-4 lines summary)       │ MARGIN          │
│ ② Sociology angle (thinker + concept)      │ "PYQ 2019 mein  │
│ ③ Syllabus link → Topic card               │  pucha gaya!"   │
│ ④ Answer-writing value: intro/body points  │                 │
│ ⑤ Keywords table                           │ On this page ▸  │
│ ⑥ Practice: 1 mains Q + 2 MCQ (quiz block) │ (TOC sticky)    │
├────────────────────────────────────────────┴─────────────────┤
│ Related: same topic ke purane CA · Next story →               │
└──────────────────────────────────────────────────────────────┘
```

## 5. Syllabus `/syllabus`
3D Galaxy (desktop) / radial tree (mobile) + neeche full accessible list. Har topic ke saath coverage dot (kitne notes, kitne CA).

## 6. ★ Topic page `/syllabus/paper-2/{unit}/{topic}`
Site ka sabse important page. Static notes + **auto-growing** sections.

```
┌──────────────────────────────────────────────────────────────┐
│ Paper 2 › Unit 4 › Caste System                    ●P2       │
│ CASTE SYSTEM — big heading      progress: ✓ read  ☐ revise   │
├──────────────────────────────────────────────────────────────┤
│ [Notes] [Current Affairs (23)] [PYQs (11)] [Thinkers] [Quiz] │  tabs (URL ?tab=)
├────────────────────────────────────────────┬─────────────────┤
│ NOTES (blocks from CMS)                    │ Mini network:   │
│  - Definitions table                       │ related topics  │
│  - Perspectives: Ghurye / Srinivas /       │ ●Sanskritisation│
│    Dumont / Ambedkar (comparison table)    │ ●Dominant caste │
│  - Timeline                                │                 │
│  - Case studies                            │ Key thinkers    │
│                                            │ [Ghurye][Dumont]│
│ LATEST CA (auto, newest first) ▶ 3 cards   │                 │
│ PYQs (auto, by year) with stamps           │                 │
└────────────────────────────────────────────┴─────────────────┘
```
"Current Affairs (23)" count aur list **khud badhte hain** — koi manual edit nahi.

## 7. Thinkers `/thinkers` + `/thinkers/{slug}`
Index: floating portrait wall (masonry, gentle float, hover pe tilt + name). Detail: hero portrait out of frame, "Key ideas" cards, works timeline, "Is thinker se jude CA", PYQs.

## 8. Concepts `/concepts/{slug}`
Glossary: definition, kis thinker ka, kin topics mein, 1 example from recent CA. AI naye concepts **draft** bana sakta hai jab news mein naya term aaye (editor approve kare).

## 9. PYQ bank `/pyq`
Filters: year range slider, paper, topic, marks. Table/list view. Har question → linked topic + "AI answer outline" (collapsible, AI badge).

## 10. Practice `/practice`
Daily 5 MCQ (auto from today's CA), topic-wise quiz, streak, score history (localStorage → baad mein login).

## 11. Digests (fully auto)
- **Weekly** `/digest/weekly/2026-w47` — har Sunday cron: week ke top stories topic-wise group.
- **Monthly** `/digest/monthly/2026-11` — 1 tareekh ko: compilation + downloadable PDF.

## 12. CMS pages `/{slug}`
About, Mentorship, Telegram, Free Resources, kisi bhi campaign ka landing page — admin mein blocks se banao, URL turant live.

## 13. Search `/search`
Command-palette style (`⌘K` bhi): topics, CA, thinkers, PYQs ek saath, type-grouped results.

## 14. 404
"Ye page anomie mein kho gaya" + search box + random topic button. (Durkheim joke, brand voice.)

---

## Shared layout
- **Header:** logo, nav, search ⌘K, theme toggle, Hinglish/Hindi toggle (phase 3).
- **Footer:** Telegram CTA, sitemap links, "Content AI-assisted, human-reviewed" disclaimer, sources policy.
- **Breadcrumbs** har inner page pe; **JSON-LD** (Article, FAQ, Quiz, BreadcrumbList).
- **OG images** `next/og` se auto: title + date + paper color — har naye page ka apna share image.
