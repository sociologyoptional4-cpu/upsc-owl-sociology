# 11 · Blog AI Studio (one-click "AI se poora banao")

Owner pastes a draft (English/Hinglish, often a news item). One click → Notion-style, simple, colourful study note wired into notes, PYQs, thinkers and current affairs, plus a real photo and AI infographic / mind map. Always a NEW draft version; never publishes; never invents facts.

## Pipeline (panel runs 3 API calls in sequence so each stays < 60 s)
```
1 POST /api/blog/organize  DeepSeek  topics/units/thinkers/papers/category/tags/SEO/FAQ/social (fills EMPTY fields; output clamped to schema limits)
2 POST /api/blog/enrich    OpenAI    memory pack → news-first rewrite, 4 colour markers, thinkers, PYQ embed, Mains answerBox,
                                     Prelims callout, CA link, gate, DeepSeek fact review → warnings
3 POST /api/blog/images    OpenAI + Wikimedia Commons   real photo (cover, only if owner gave none) + 2 AI infographic/mind-map blocks
+ POST /api/blog/attach-media   panel drop zone: pasted images → Media → cover (first) / figure blocks
```
Memory pack (`src/lib/blog/evidence.ts`): notes snippets (`src/data/notes`, plain text), PYQs related by the post's topics/thinkers/unit, approved current affairs. Add a notebook → add it to `NOTEBOOKS` in `corpus.ts`.

## Rules / contracts
- Draft is the main content. News drafts: "What happened" (all facts/numbers) → "Why it matters" → static linkage. If the final rewrite still loses draft numbers/words the original text is kept under "Original khabar / draft".
- Markers: `==x==` yellow · `{{eg|x}}` green · `{{trap|x}}` pink · `{{thinker:slug|x}}` plum link · `{{link:/path|x}}` sky link (path from pack only). Block fields are plain text (`unmark`).
- Gate (`preserve.ts`): word ratio ≥ 0.25, numbers kept (soft on 3rd attempt → warnings), no invented numbers/names (known = draft + memory + thinker names). 3 attempts, last one saves + warns.
- Photos: Commons only, licences CC0 / PD / CC BY / CC BY-SA → `media.license/credit/sourceUrl`; DeepSeek picks the accurate candidate. AI images: `IMAGE_MODEL` (default `gpt-image-2`, low quality), credit "AI-generated (OpenAI)".
- Models: `WRITER_MODEL` (use `gpt-5.4-mini`+), DeepSeek `chat_template_kwargs:{thinking:false}` (reasoning mode ate max_tokens → "no content").

## Root-cause fixes bundled
1. `richTextEditor`/`blogEditor` used `rootFeatures` (empty in `editorConfigFactory.fromEditor`) → markdown→Lexical made raw paragraphs everywhere. Now `defaultFeatures`.
2. DB pool `max: 1`: hooks querying without `req` deadlocked publish (500). All hooks pass `req`.
3. Media URLs were `http://localhost:3000/...` → `next/image` 400 → no cover/infographics. Same-origin path when no S3.
4. OG image declares the cover's real width/height.

## Later
Live web examples (needs a source + copy-guard), dual Hinglish/English output, embeddings retrieval when the corpus is large.
