import OpenAI from 'openai'
import type { Payload } from 'payload'
import { z } from 'zod'

import { beautifyOutputSchema, type BeautifyOutput } from '@/blocks/blog/schema'
import { env } from '@/lib/env'

import { blogCost, budgetExhausted, logBlogRun, type Usage } from './ledger'
import { makeBlockNode, markdownToBlogLexical } from './markdown'
import { checkLexicalPreservation } from './preserve'
import { countBlocks, lexicalToMarkdown, lexicalToPlain, type LexNode, type LexRoot } from './text'

export const BEAUTIFY_PROMPT_VERSION = 'blog-beautify.v1'

const INSTRUCTIONS = `You are a layout editor for a UPSC Sociology Optional blog (Hinglish, Roman script). You RESTRUCTURE, you do not rewrite.
Return ONLY one JSON object: {"sections": [ {"markdown": "..."} | {"block": {...}} , ... ]}.
Hard rules:
- Keep EVERY sentence, number, year and proper name of the original. Do not add facts, numbers, years or names. Do not translate.
- "markdown" sections hold the original text (headings ##/###, lists, tables, **bold**). Wrap 3-8 key phrases in ==double equals== to highlight them.
- Use blocks where the text already says it: blogCallout (tip/yaadRakho/galtiMat/upscAngle), compare (two-sided tables), timeline (dated sequences), flow (process / concept chain), keyTerm (a defined term), thinkerQuote (a short quote ≤ 25 words, thinkerSlug from the allowed list), answerBox (answer-writing structure).
- A block may reuse sentences from the original; it must not introduce new content. Do not output pyqEmbed/figure/youtube.
- Order of ideas stays the same.`

async function generate(markdown: string, thinkerSlugs: string[], hint: string): Promise<{ output: BeautifyOutput; usage: Usage }> {
  const client = new OpenAI({ apiKey: env.OPENAI_API_KEY })
  const shape = JSON.stringify(z.toJSONSchema(beautifyOutputSchema, { target: 'draft-7' }))
  const result = await client.responses.create({
    model: env.WRITER_MODEL ?? 'gpt-4.1-mini',
    instructions: `${INSTRUCTIONS}\n\nJSON Schema:\n${shape}${hint ? `\n\nYour previous output was rejected: ${hint}. Fix it.` : ''}`,
    input: `Restructure this post as one json object.\n${JSON.stringify({ allowedThinkerSlugs: thinkerSlugs, markdown })}`,
    text: { format: { type: 'json_object' } },
  })
  const output = beautifyOutputSchema.parse(JSON.parse(result.output_text))
  return { output, usage: { input: result.usage?.input_tokens ?? 0, output: result.usage?.output_tokens ?? 0 } }
}

async function toLexical(payload: Payload, output: BeautifyOutput, thinkerIds: Map<string, number>): Promise<{ root: LexNode }> {
  const children: LexNode[] = []
  for (const section of output.sections) {
    if ('markdown' in section) {
      children.push(...((await markdownToBlogLexical(payload, section.markdown)).root.children ?? []))
      continue
    }
    const { blockType, ...rest } = section.block
    const { thinkerSlug, ...fields } = rest as Record<string, unknown> & { thinkerSlug?: string }
    const thinker = thinkerSlug ? thinkerIds.get(thinkerSlug) : undefined
    if (blockType === 'thinkerQuote' && !thinker) continue // unknown thinker: drop the block, text stays in the markdown sections
    children.push(makeBlockNode(blockType, { ...fields, ...(thinker ? { thinker } : {}) }))
  }
  return { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children } as LexNode }
}

/** "✨ AI se sajao": saves a NEW draft version (restore = Payload version restore). Never publishes. */
export async function beautifyPost(payload: Payload, postId: number): Promise<{ sections: number }> {
  const startedAt = new Date()
  const usage: Usage = { input: 0, output: 0 }
  try {
    const doc = await payload.findByID({ collection: 'posts', id: postId, draft: true, depth: 0, overrideAccess: true })
    const original = doc.content as LexRoot
    if (countBlocks(original) > 0) throw new Error('Post mein pehle se blocks hain. Pehle purana version restore karo ya blocks hatao, phir "AI se sajao" chalao.')
    const markdown = lexicalToMarkdown(original)
    if (!markdown) throw new Error('Post khali hai.')
    if (await budgetExhausted(payload)) throw new Error('Daily AI budget khatam (site-settings.maxDailyUsd).')
    const thinkers = await payload.find({ collection: 'thinkers', limit: 500, depth: 0, overrideAccess: true, pagination: false })
    const thinkerIds = new Map(thinkers.docs.flatMap((t) => (t.slug ? [[t.slug, t.id] as const] : [])))

    let hint = ''
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const generated = await generate(markdown, [...thinkerIds.keys()], hint)
      usage.input += generated.usage.input; usage.output += generated.usage.output
      const content = await toLexical(payload, generated.output, thinkerIds)
      const gate = checkLexicalPreservation(original, content as LexRoot)
      if (gate.ok) {
        await payload.update({ collection: 'posts', id: postId, data: { content: content as never }, draft: true, overrideAccess: true, context: { disableRevalidate: true, skipExternal: true } })
        await logBlogRun(payload, { startedAt, ok: true, costUsd: blogCost('openai', usage), usage, promptVersion: BEAUTIFY_PROMPT_VERSION })
        return { sections: generated.output.sections.length }
      }
      hint = gate.reasons.join('; ')
    }
    throw new Error(`Preservation check fail hua, content nahi badla: ${hint}`)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'beautify failed'
    await logBlogRun(payload, { startedAt, ok: false, costUsd: blogCost('openai', usage), usage, error: message, promptVersion: BEAUTIFY_PROMPT_VERSION }).catch(() => null)
    throw error
  }
}

export { lexicalToPlain }
