import OpenAI from 'openai'
import type { Payload } from 'payload'
import { z } from 'zod'

import { blogBlockSchema } from '@/blocks/blog/schema'
import { env } from '@/lib/env'

import { toLexical } from './beautify'
import { loadMemoryPack, packKnownText, type MemoryPack } from './evidence'
import { blogCost, budgetExhausted, logBlogRun, type Usage } from './ledger'
import { makeBlockNode } from './markdown'
import { callDeepSeek } from './organize'
import { checkLexicalPreservation } from './preserve'
import { lexicalToMarkdown, lexicalToPlain, stripUnknownMarkers, unmark, type LexNode, type LexRoot } from './text'

export const ENRICH_PROMPT_VERSION = 'blog-enrich.v4'
const MEDIA_BLOCKS = new Set(['infographic', 'gallery', 'figure', 'youtube'])
const MIN_WORD_RATIO = 0.25 // simplifying rewrites most words; facts/numbers/names are guarded separately
const HOUSE_WORDS = 'UPSC Mains Prelims GS Paper PYQ Ek line me Sociology Optional OWL'
const LAST_ATTEMPT = 2

const INSTRUCTIONS = `You are the editor of "UPSC OWL Sociology", a UPSC Sociology Optional site. Turn the author's draft into a clear, Notion-style study note that is wired into the owner's own notes, past-year questions (PYQs) and current affairs.
Return ONLY one JSON object: {"sections": [ {"markdown":"..."} | {"block":{...}} | {"pyqIds":[n,...]} , ... ], "imageSuggestions": [...], "photoQuery": "..."}.
Language: SAME as the draft, strictly: an English draft gets English ONLY (no Hindi words at all); a Hinglish draft gets Roman-script Hinglish. Never mix in the other language. Use sentence case in headings and bold labels (capitalise only real names).
Style: short sentences, plain words, short paragraphs, ## / ### headings, bullets where natural, explain jargon in a few words.
Facts: KEEP every fact, number, date, year and name of the draft (dates like 21 November 2026 must stay). Add a fact, number or name ONLY if it appears in memory.notes, memory.pyqs, memory.currentAffairs or the draft. Never invent anything else.
THE DRAFT IS THE MAIN CONTENT. Memory only supports it. At least half of the note must be about the draft itself; never replace the draft's subject with a memory topic.
Structure (skip a part only when memory/draft cannot support it):
 1. First section: a blogCallout block, variant "tip", title "Ek line me" - the whole idea in 2 sentences, naming the draft's actual subject.
 2. If the draft is a news report / current affair: "## What happened" (Hinglish: "## Khabar kya hai") retelling ALL key facts of the news in simple words - who, what, where, when, every number and date, every named person/body; then "## Why it matters" (Hinglish: "## Iska matlab kya hai") elaborating the meaning, background and the debate around it. Only after that, the static sociology sections, each opening with one line that ties back to the news (e.g. "In this news, ...").
    If the draft is not news: body sections with ## headings that follow the draft's own order.
 3. Thinkers: where a thinker from allowedThinkers is relevant, write why he/she matters here, e.g. "{{thinker:max-weber|Weber}} argued ..., which is why this matters here". Max 6 thinkers.
 4. PYQ: if memory.pyqs is not empty you MUST add one {"pyqIds":[...]} section (1-3 ids from memory.pyqs, the most relevant) after the relevant section, then one sentence on how to answer it.
 5. Mains: one answerBox block (intro, points, conclusion) showing how to write this in an answer, built only from draft and memory.
 6. Prelims: one blogCallout variant "tip" titled "Prelims angle" with the kind of question that can come (no new facts).
 7. Current affairs: ONLY if memory.currentAffairs has a relevant item, one sentence linking it with {{link:PATH|headline}}, PATH copied exactly from memory. If none, write nothing about it (never a "no item available" line).
 8. One everyday/real-life example per big idea as {{eg|...}} (illustrative; NO numbers and NO proper names in it).
Inline markers, REQUIRED, at least 8 per post (aim 12-25), including at least 2 {{trap|...}} (critiques/limits/common mistakes), written literally in markdown text. Example: "==Resilience== is how a system recovers. {{eg|A village rebuilding after a flood}} shows it. {{trap|Do not confuse it with stability}}."
 ==x== core concept (yellow) · {{thinker:slug|Name}} thinker (slug ONLY from allowedThinkers) · {{eg|x}} everyday example (green) · {{trap|x}} critique/limit/common mistake (pink) · {{link:PATH|x}} current-affairs link.
Other blocks allowed when the text supports them: compare, timeline, flow, keyTerm, thinkerQuote (≤25 words, thinkerSlug from allowed list), blogCallout (yaadRakho, galtiMat, upscAngle). Never output infographic/gallery. Block fields are plain text: no ==, {{ }} or [[ ]] markers inside blocks.
"imageSuggestions": exactly 2 {"afterHeading": exact text of one of your ## headings, "kind": "infographic" (process/comparison/steps) or "mindmap" (centre + branches), "title": ≤6 words, "labels": 3-9 SHORT labels (1-4 words each, taken from the post, no invented facts), "caption": one sentence}. They are turned into real pictures automatically.
"photoQuery": 2-5 plain English words to search a real photo of the draft's main subject on Wikimedia Commons (e.g. "A-level exam hall students").`

export const imageSuggestionSchema = z.object({
  afterHeading: z.string().max(120),
  kind: z.enum(['infographic', 'mindmap']).default('infographic'),
  title: z.string().max(80),
  labels: z.array(z.string().max(40)).min(3).max(9),
  caption: z.string().max(160).default(''),
})
export type ImageSuggestion = z.infer<typeof imageSuggestionSchema>

const outputSchema = z.object({
  sections: z.array(z.union([z.object({ markdown: z.string().min(1).max(20_000) }), z.object({ pyqIds: z.array(z.number().int()).min(1).max(5) }), z.object({ block: blogBlockSchema })])).min(1).max(120),
  imageSuggestions: z.array(imageSuggestionSchema).max(3).default([]),
  photoQuery: z.string().max(80).default(''),
})
export type EnrichOutput = z.infer<typeof outputSchema>
type Section = EnrichOutput['sections'][number]

async function generate(markdown: string, thinkers: { slug: string; name: string }[], pack: MemoryPack, hint: string): Promise<{ output: EnrichOutput; usage: Usage }> {
  const client = new OpenAI({ apiKey: env.OPENAI_API_KEY })
  const shape = JSON.stringify(z.toJSONSchema(outputSchema, { target: 'draft-7' }))
  const memory = { notes: pack.notes.map((s) => s.text), pyqs: pack.pyqs, currentAffairs: pack.currentAffairs }
  const result = await client.responses.create({
    model: env.WRITER_MODEL ?? 'gpt-4.1-mini',
    instructions: `${INSTRUCTIONS}\n\nJSON Schema:\n${shape}${hint ? `\n\nYour previous output was rejected: ${hint}. Fix it.` : ''}`,
    input: `Rewrite this draft as one json object.\n${JSON.stringify({ allowedThinkers: thinkers, memory, markdown })}`,
    text: { format: { type: 'json_object' } },
  })
  return { output: outputSchema.parse(JSON.parse(result.output_text)), usage: { input: result.usage?.input_tokens ?? 0, output: result.usage?.output_tokens ?? 0 } }
}

/** Every string inside a block loses inline markers (blocks render plain text). */
function unmarkDeep<T>(value: T): T {
  if (typeof value === 'string') return unmark(value) as T
  if (Array.isArray(value)) return value.map(unmarkDeep) as T
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, unmarkDeep(v)])) as T
  return value
}

/** Sections → Lexical, resolving PYQ embeds against the memory pack and stripping markers that point outside it. */
async function build(payload: Payload, sections: Section[], pack: MemoryPack, thinkerIds: Map<string, number>): Promise<{ root: LexNode }> {
  const pyqIds = new Set(pack.pyqs.map((p) => p.id))
  const paths = new Set(pack.currentAffairs.map((c) => c.path))
  const slugs = new Set(thinkerIds.keys())
  const children: LexNode[] = []
  for (const section of sections) {
    if ('pyqIds' in section) {
      const ids = section.pyqIds.filter((id) => pyqIds.has(id))
      if (ids.length) children.push(makeBlockNode('pyqEmbed', { pyqs: ids }))
      continue
    }
    const clean = 'markdown' in section ? { markdown: stripUnknownMarkers(section.markdown, slugs, paths) } : { block: unmarkDeep(section.block) }
    children.push(...((await toLexical(payload, { sections: [clean] }, thinkerIds)).root.children ?? []))
  }
  return { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children } as LexNode }
}

const reviewSchema = z.object({ warnings: z.array(z.object({ claim: z.string().max(300), reason: z.string().max(200) })).max(8).default([]) })

/** Non-blocking DeepSeek fact review: flags sentences the draft/memory do not support. Failure never blocks the save. */
async function review(original: string, result: string, pack: MemoryPack, usage: Usage): Promise<{ claim: string; reason: string }[]> {
  try {
    const system = 'You fact-check an edited UPSC Sociology note. List sentences in "edited" that state a fact, name, year or number supported by NEITHER "draft" NOR "memory". Ignore style, examples marked as illustrative, and exam tips. Return ONLY json {"warnings":[{"claim":"...","reason":"..."}]}; empty list if all supported.'
    const reply = await callDeepSeek(system, JSON.stringify({ draft: original, memory: packKnownText(pack), edited: result }))
    usage.input += reply.usage.input; usage.output += reply.usage.output
    return reviewSchema.parse(JSON.parse(reply.content)).warnings
  } catch {
    return []
  }
}

function keepOriginal(original: LexRoot, built: { root: LexNode }): { root: LexNode } {
  const heading = { type: 'heading', tag: 'h2', version: 1, format: '', indent: 0, direction: 'ltr', children: [{ type: 'text', text: 'Original khabar / draft', format: 0, version: 1, detail: 0, mode: 'normal', style: '' }] } as unknown as LexNode
  const [first, ...rest] = built.root.children ?? []
  return { root: { ...built.root, children: [...(first ? [first] : []), heading, ...(original?.root?.children ?? []), ...rest] } }
}

const isMedia = (node: LexNode): boolean => node.type === 'block' && MEDIA_BLOCKS.has(String(node.fields?.blockType))

/** Splits owner/AI media blocks (pictures, video) off the text so they are never rewritten, remembering where they sat. */
function splitMedia(original: LexRoot): { text: LexRoot; media: { node: LexNode; ratio: number }[] } {
  const children = original?.root?.children ?? []
  const media = children.flatMap((node, index) => (isMedia(node) ? [{ node, ratio: children.length ? index / children.length : 1 }] : []))
  return { text: { root: { ...(original?.root ?? { type: 'root' }), children: children.filter((node) => !isMedia(node)) } }, media }
}

function putMediaBack(built: { root: LexNode }, media: { node: LexNode; ratio: number }[]): { root: LexNode } {
  const children = [...(built.root.children ?? [])]
  const total = children.length
  media.forEach(({ node, ratio }, i) => children.splice(Math.min(children.length, Math.round(ratio * total) + i), 0, node))
  return { root: { ...built.root, children } }
}

const idsOf = (list: unknown): number[] => (Array.isArray(list) ? list.map((v) => (typeof v === 'number' ? v : (v as { id?: number } | null)?.id)).filter((n): n is number => typeof n === 'number') : [])

/** "🎨 AI se enrich karo": news-first rewrite + colours + thinkers + PYQs + current affairs from memory. Saves a NEW draft version; never publishes. */
export async function enrichPost(payload: Payload, postId: number): Promise<{ sections: number; warnings: number; imageSuggestions: EnrichOutput['imageSuggestions'] }> {
  const startedAt = new Date()
  const usage: Usage = { input: 0, output: 0 }
  const deepseekUsage: Usage = { input: 0, output: 0 }
  try {
    const doc = await payload.findByID({ collection: 'posts', id: postId, draft: true, depth: 0, overrideAccess: true })
    const { text: original, media } = splitMedia(doc.content as LexRoot)
    const markdown = lexicalToMarkdown(original)
    if (!markdown) throw new Error('Post khali hai. Pehle Content ya "ChatGPT se paste" me text daalo.')
    if (await budgetExhausted(payload)) throw new Error('Daily AI budget khatam (site-settings.maxDailyUsd).')
    const found = await payload.find({ collection: 'thinkers', limit: 500, depth: 0, overrideAccess: true, pagination: false })
    const thinkers = found.docs.flatMap((t) => (t.slug ? [{ slug: t.slug, name: t.name }] : []))
    const ids = new Map(found.docs.flatMap((t) => (t.slug ? [[t.slug, t.id] as const] : [])))
    const topicDocs = await payload.find({ collection: 'topics', where: { id: { in: idsOf(doc.topics) } }, limit: 20, depth: 0, overrideAccess: true })
    const pack = await loadMemoryPack(payload, `${doc.title}\n${markdown}`, { topicIds: idsOf(doc.topics), topicSlugs: topicDocs.docs.flatMap((t) => (t.slug ? [t.slug] : [])), thinkerIds: idsOf(doc.thinkers), unitIds: idsOf(doc.units) })
    const knownText = `${packKnownText(pack)}\n${thinkers.map((t) => t.name).join('\n')}\n${HOUSE_WORDS}`

    let hint = ''
    for (let attempt = 0; attempt < 3; attempt += 1) {
      let generated: Awaited<ReturnType<typeof generate>>
      try {
        generated = await generate(markdown, thinkers, pack, hint)
      } catch (error) {
        if (!(error instanceof z.ZodError) && !(error instanceof SyntaxError)) throw error
        hint = error instanceof z.ZodError ? error.issues.slice(0, 5).map((i) => `${i.path.join('.')}: ${i.message}`).join('; ') : 'not valid JSON'
        continue
      }
      usage.input += generated.usage.input; usage.output += generated.usage.output
      const built = await build(payload, generated.output.sections, pack, ids)
      const gate = checkLexicalPreservation(original, built as LexRoot, [], { minWordRatio: MIN_WORD_RATIO, knownText, softNumberLoss: attempt === LAST_ATTEMPT })
      // Last attempt: save the draft anyway and surface what the gate disliked; the owner reviews before publishing.
      if (!gate.ok && attempt < LAST_ATTEMPT) { hint = gate.reasons.join('; '); continue }
      const gateWarnings = gate.ok ? [] : gate.reasons.map((reason) => ({ claim: `Safety check: ${reason}`, reason: 'AI ne 3 baar try kiya; is hisse ko ek baar padh lo' }))
      // If the rewrite dropped the draft's facts, the student would lose the context: keep the original text on top.
      const lostDraft = (gate.lostNumbers ?? []).length > 0 || gate.reasons.some((r) => r.includes('words survived'))
      const content = putMediaBack(lostDraft ? keepOriginal(original, built) : built, media)
      const lost = (gate.lostNumbers ?? []).length ? [{ claim: `Ye numbers/dates naye version me nahi hain: ${(gate.lostNumbers ?? []).join(', ')}`, reason: 'zaroori hon to wapas daal do' }] : []
      const warnings = [...gateWarnings, ...lost, ...(await review(markdown, lexicalToPlain(built as LexRoot), pack, deepseekUsage))]
      const suggestions = { ...((doc.aiSuggestions as object | null) ?? {}), error: undefined, imageSuggestions: generated.output.imageSuggestions, photoQuery: generated.output.photoQuery, warnings, enrichedAt: new Date().toISOString() }
      await payload.update({ collection: 'posts', id: postId, data: { content: content as never, aiSuggestions: suggestions, ...(doc.aiStatus === 'failed' ? { aiStatus: 'done' as const } : {}) }, draft: true, overrideAccess: true, context: { disableRevalidate: true, skipExternal: true, skipBlogOrganize: true } })
      await logBlogRun(payload, { startedAt, ok: true, costUsd: blogCost('openai', usage) + blogCost('deepseek', deepseekUsage), usage, promptVersion: ENRICH_PROMPT_VERSION })
      return { sections: generated.output.sections.length, warnings: warnings.length, imageSuggestions: generated.output.imageSuggestions }
    }
    throw new Error(`Safety check fail hua, content nahi badla: ${hint}`)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'enrich failed'
    await logBlogRun(payload, { startedAt, ok: false, costUsd: blogCost('openai', usage), usage, error: message, promptVersion: ENRICH_PROMPT_VERSION }).catch(() => null)
    throw error
  }
}
