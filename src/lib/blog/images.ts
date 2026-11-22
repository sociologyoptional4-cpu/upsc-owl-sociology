import OpenAI from 'openai'
import type { Payload } from 'payload'

import { env } from '@/lib/env'
import { slugify } from '@/lib/slug'

import type { ImageSuggestion } from './enrich'
import { blogCost, budgetExhausted, logBlogRun, type Usage } from './ledger'
import { makeBlockNode } from './markdown'
import { fetchCommonsPhoto } from './photos'
import type { LexNode, LexRoot } from './text'

export const IMAGE_PROMPT_VERSION = 'blog-images.v1'
const MAX_IMAGES = 2
const CREDIT = 'AI-generated (OpenAI) for UPSC OWL Sociology'

/** Image prompt from validated labels only: the model draws, it does not get to invent content. */
export function imagePrompt(s: ImageSuggestion): string {
  const layout = s.kind === 'mindmap'
    ? 'a mind map: one central rounded node and branches radiating to the other labels'
    : 'a clear infographic: boxes or steps connected by arrows, with simple flat icons'
  return `Clean flat educational ${layout}, for a UPSC Sociology study note. Warm cream background, bold black outlines, pastel yellow, lavender, mint and pink boxes. Title: "${s.title}". Use EXACTLY these short labels, spelled correctly, and no other text: ${s.labels.map((l) => `"${l}"`).join(', ')}. Large readable lettering, no watermark, no logos.`
}

async function generateOne(client: OpenAI, suggestion: ImageSuggestion, usage: Usage): Promise<Buffer> {
  const result = await client.images.generate({ model: env.IMAGE_MODEL ?? 'gpt-image-2', prompt: imagePrompt(suggestion), size: '1024x1024', quality: 'low', n: 1 })
  usage.input += result.usage?.input_tokens ?? 0
  usage.output += result.usage?.output_tokens ?? 0
  const b64 = result.data?.[0]?.b64_json
  if (!b64) throw new Error('Image model ne picture nahi di')
  return Buffer.from(b64, 'base64')
}

const headingText = (node: LexNode): string => (node.type === 'text' ? node.text ?? '' : (node.children ?? []).map(headingText).join(''))

/** Index to insert after: the end of the section that starts at the heading matching `afterHeading`; falls back to the end. */
export function insertionIndex(children: LexNode[], afterHeading: string): number {
  const wanted = afterHeading.replace(/^#+\s*/, '').trim().toLowerCase()
  const start = children.findIndex((n) => n.type === 'heading' && wanted && headingText(n).trim().toLowerCase().includes(wanted))
  if (start === -1) return children.length
  const next = children.findIndex((n, i) => i > start && n.type === 'heading')
  return next === -1 ? children.length : next
}

const countInfographics = (children: LexNode[]): number => children.filter((n) => n.type === 'block' && n.fields?.blockType === 'infographic').length

/** Step 3 of the studio: real Commons photo (cover, if owner gave none) + AI infographics/mind maps as Media + infographic blocks. */
export async function attachImages(payload: Payload, postId: number): Promise<{ added: number }> {
  const startedAt = new Date()
  const usage: Usage = { input: 0, output: 0 }
  try {
    const doc = await payload.findByID({ collection: 'posts', id: postId, draft: true, depth: 0, overrideAccess: true })
    const root = (doc.content as LexRoot)?.root
    const children = [...(root?.children ?? [])]
    const suggestions = (((doc.aiSuggestions as { imageSuggestions?: ImageSuggestion[] } | null)?.imageSuggestions) ?? []).filter((s) => Array.isArray(s.labels) && s.labels.length >= 3)
    const room = Math.max(0, MAX_IMAGES - countInfographics(children))
    const todo = suggestions.slice(0, room)
    if (!root) return { added: 0 }
    if (await budgetExhausted(payload)) throw new Error('Daily AI budget khatam (site-settings.maxDailyUsd).')
    // No owner image yet: a real, licence-checked photo of the subject becomes the cover. Never blocks the step.
    const hasOwnerImage = Boolean(doc.cover) || children.some((n) => n.type === 'block' && ['figure', 'gallery'].includes(String(n.fields?.blockType)))
    const photoQuery = (doc.aiSuggestions as { photoQuery?: string } | null)?.photoQuery ?? ''
    const photoId = hasOwnerImage ? null : await fetchCommonsPhoto(payload, `${doc.title}\n${doc.excerpt ?? ''}`, photoQuery || doc.title, usage).catch((error: unknown) => {
      payload.logger.warn(`commons photo skipped: ${error instanceof Error ? error.message : 'unknown'}`)
      return null
    })

    const client = new OpenAI({ apiKey: env.OPENAI_API_KEY })
    const made = await Promise.all(todo.map(async (suggestion) => {
      const data = await generateOne(client, suggestion, usage)
      const name = `${slugify(doc.title).slice(0, 40)}-${suggestion.kind}-${Date.now().toString(36)}.png`
      const media = await payload.create({ collection: 'media', overrideAccess: true, data: { alt: `${suggestion.title}: ${suggestion.caption || suggestion.labels.join(', ')}`.slice(0, 200), license: 'own', credit: CREDIT }, file: { data, mimetype: 'image/png', name, size: data.length } })
      return { suggestion, mediaId: media.id }
    }))

    for (const { suggestion, mediaId } of made) {
      const block = makeBlockNode('infographic', { image: mediaId, title: suggestion.title, caption: suggestion.caption || undefined, credit: CREDIT, downloadable: true })
      children.splice(insertionIndex(children, suggestion.afterHeading), 0, block)
    }
    const coverId = doc.cover ? null : photoId ?? made[0]?.mediaId ?? null
    const cover = coverId ? { cover: coverId } : {}
    await payload.update({ collection: 'posts', id: postId, data: { content: { root: { ...root, children } } as never, ...cover }, draft: true, overrideAccess: true, context: { disableRevalidate: true, skipExternal: true, skipBlogOrganize: true } })
    await logBlogRun(payload, { startedAt, ok: true, costUsd: blogCost('openai', usage), usage, promptVersion: IMAGE_PROMPT_VERSION })
    return { added: made.length + (photoId ? 1 : 0) }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'image step failed'
    await logBlogRun(payload, { startedAt, ok: false, costUsd: blogCost('openai', usage), usage, error: message, promptVersion: IMAGE_PROMPT_VERSION }).catch(() => null)
    throw error
  }
}
