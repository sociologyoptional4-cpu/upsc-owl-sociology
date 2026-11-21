# 02 — Design System

## 1. Style direction: **"The Living Journal"**

Do duniya ka mel:
1. **Editorial / academic journal** — cream paper, serif headlines, margin notes, footnotes, issue numbers ("Daily Issue #214"). Sociology padhne waale ko "serious, trustworthy" lage.
2. **Living network** — society = nodes aur ties. 3D network hero, topics ke beech connecting lines, hover pe related cheezein "light up" hoti hain.

Ye kisi UPSC site jaisa nahi lagega (wo sab ya to sasta blue-white template hain ya cartoony). Hum **magazine + knowledge-graph** lagenge.

## 2. Color tokens

```css
:root {
  /* Surfaces */
  --paper:        #F6F1E7;   /* cream page background */
  --paper-raised: #FFFDF8;   /* cards */
  --paper-sunk:   #ECE4D3;   /* inset areas, code, tables */

  /* Ink */
  --ink:          #14213D;   /* deep navy — text & dark sections */
  --ink-soft:     #3D4A66;
  --ink-mute:     #7A8296;
  --rule:         #D9CFBC;   /* hairlines, borders */

  /* Accent */
  --saffron:      #E8833A;   /* primary action, "today" highlight */
  --saffron-deep: #C2621F;   /* hover/active */

  /* Semantic — har cheez ka apna rang (color = meaning, decoration nahi) */
  --paper-1:      #3B5BA9;   /* Paper 1: Fundamentals — indigo */
  --paper-2:      #2F7D6D;   /* Paper 2: Indian Society — teal-green */
  --thinker:      #8E4B8C;   /* thinker tags — plum */
  --pyq:          #B23A48;   /* PYQ badges — brick red */
  --ai-draft:     #C9A227;   /* AI-generated / under review — mustard */
}

[data-theme="dark"] {
  --paper: #0F1626; --paper-raised: #172036; --paper-sunk: #0B111E;
  --ink: #EFE8DA; --ink-soft: #C4BCAE; --ink-mute: #8C8A86; --rule: #2A3550;
}
```
Dark mode = "night reading room" (navy paper, cream ink) — ulta color nahi, apna mood. Contrast WCAG AA check hoga.

## 3. Typography (2 families + Hindi)

| Role | Font | Notes |
|------|------|-------|
| Display / headings | **Fraunces** (variable serif, `opsz` + `SOFT` axes) | Editorial character; bade sizes pe soft, chhote pe crisp |
| Body / UI | **Inter** (variable) | Padhne mein sabse saaf |
| Hindi / Devanagari | **Mukta** | Sirf Hindi toggle pe load (exception justified: bilingual audience) |

> Pehle Poppins socha tha — Poppins har dusri edtech site pe hai, isliye Fraunces + Inter se zyada "journal" character milega.

```css
--text-xs: 0.75rem;  --text-sm: 0.875rem;
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
--text-h3: clamp(1.5rem, 1.2rem + 1vw, 2rem);
--text-h2: clamp(2rem, 1.4rem + 2.4vw, 3.25rem);
--text-hero: clamp(3rem, 1rem + 7vw, 7.5rem);
--leading-body: 1.65;   /* long notes ke liye */
--measure: 68ch;        /* article width */
```
`next/font` se self-host, `display: swap`, sirf hero weight preload.

## 4. Spacing, radius, depth (uniform nahi — rhythm)

```css
--space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
--space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
--space-section: clamp(4rem, 3rem + 5vw, 10rem);

--radius-chip: 999px;   /* tags */
--radius-card: 14px;    /* cards */
--radius-sheet: 28px;   /* bade feature panels */

--shadow-paper: 0 1px 0 var(--rule), 0 8px 24px -12px rgb(20 33 61 / .18);
--shadow-float: 0 24px 60px -20px rgb(20 33 61 / .35);   /* floating items */
```
Texture: halka **paper grain** (SVG noise, 3% opacity) background pe. Section dividers = double hairline rules (journal style).

## 5. Signature components

| Component | Kya unique hai |
|-----------|----------------|
| **Issue Masthead** | Har din: "Daily Issue #214 · 21 Nov 2026 · 6 stories" — newspaper masthead feel |
| **CA Card** | Left mein date stamp (rubber-stamp style), right mein topic chips (Paper color), hover pe linked syllabus topic ki line "draw" hoti hai |
| **Topic Node chip** | Chhota dot + label; hover pe network mein related nodes highlight |
| **Thinker Card** | Cut-out portrait (alpha WebP) frame se **bahar nikalta** hai (overlap/depth), CSS 3D tilt on hover, back side pe 3 key ideas |
| **Margin Note** | Desktop pe article ke side mein hand-written style annotation ("UPSC 2019 mein pucha gaya!") |
| **PYQ Stamp** | Brick-red stamp badge "PYQ 2021 · 20M" |
| **AI Badge** | Mustard "AI draft · reviewed by Ujjawal" — transparency |
| **Streak Flame** | Daily reading streak, localStorage → baad mein account |

States: har button/card ka hover, focus-visible (saffron 2px ring + offset), active (press scale .98) design karenge.

## 6. Motion system

```css
--dur-fast: 150ms; --dur-base: 300ms; --dur-slow: 600ms; --dur-float: 6s;
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
```

| Kahan | Kya | Tool |
|-------|-----|------|
| Poori site | Smooth inertial scroll | Lenis (GSAP ticker se synced) |
| Hero | 3D network slowly rotate + mouse parallax | R3F |
| Floating cards/portraits | `translateY` 0 → -12px → 0, 6s, har item ka alag delay | CSS keyframes |
| Section reveal | Headline line-by-line mask reveal, cards stagger | GSAP ScrollTrigger |
| "How it works" | Pinned section, scroll pe pipeline steps animate | GSAP pin + scrub |
| Page change | Cross-fade + slight lift, shared element (card → page header) | Motion `layoutId` / View Transitions API |
| Numbers | Count-up (stories today, topics covered) | Motion |

**Rules:** sirf `transform`, `opacity`, `clip-path`, `filter` animate. `prefers-reduced-motion` → floating band, Lenis off, reveals instant. `will-change` sirf animation ke dauraan.

## 7. Floating visuals — kahan se aur kaise "valid" dikhenge

| Asset | Source | Treatment | Format |
|-------|--------|-----------|--------|
| Thinker portraits (Marx, Weber, Durkheim, Ghurye, Srinivas, Ambedkar…) | Wikimedia Commons **public domain** photos (license verify karke) | Background remove → duotone (ink + paper) ya AI illustration in one consistent style | WebP/AVIF with alpha, 2 sizes |
| Concept illustrations (caste, class, family, urbanisation) | Khud generate (image tool) in one style guide; ya unDraw (MIT-like license) recolored | Flat ink line-art + saffron accent | SVG |
| Animated characters (optional) | **Rive** — khud banao ya Rive community (license check) | Idle float, blink, cursor follow | `.riv` |
| Micro animations (tick, streak flame) | **Lottie** (LottieFiles free licence) | Tiny | `.lottie` |
| 3D props (book, globe) | Poly Pizza / Kenney (**CC0**) | Recolor to palette, Draco compress | `.glb` < 500 KB |

**Valid dikhne ka raaz:** sab assets ek hi visual language mein (same duotone, same line weight, same grain). Mix-match stock = sasta lagta hai. Har asset `ASSETS.md` mein: source URL, license, author, modification. GIF kabhi nahi.

## 8. 3D features (sirf 3 jagah)

1. **Hero "Society Network"** — ~80 instanced nodes (caste, class, gender, religion, family, state…), lines = ties. Mouse se halka tilt; hover pe node label. Aaj ke CA jis topic se jude hain, wo nodes **saffron pulse** karte hain → hero bhi daily update dikhta hai.
2. **Syllabus Galaxy** (`/syllabus`) — Paper 1 aur Paper 2 do clusters, units = rings, topics = stars. Click → camera fly-to → topic page. Mobile pe 2D radial tree.
3. **Thinker card tilt** — WebGL nahi, sirf CSS 3D (`perspective` + `rotateX/Y`) → sasta aur smooth.

**Performance rules:**
- `three` sirf `dynamic(() => import(...), { ssr: false })` se, hero dikhne pe.
- `useDeviceTier()` → `deviceMemory < 4` ya `hardwareConcurrency < 4` ya reduced-motion → static SVG fallback.
- `frameloop="demand"` jab idle; off-screen pe render band (IntersectionObserver).
- DPR cap 1.5, instancing, koi realtime shadows nahi.
- Budget: LCP < 2.5s, CLS < 0.1, INP < 200ms; landing JS < 150 KB gz (3D chunk alag, lazy).

## 9. Accessibility
- Semantic HTML (`header/nav/main/article/aside/footer`), skip link.
- Keyboard: tabs, quiz, galaxy (list alternative har 3D ke saath).
- Contrast AA dono themes mein; focus ring always visible.
- Alt text har image (AI pipeline bhi alt likhega).
