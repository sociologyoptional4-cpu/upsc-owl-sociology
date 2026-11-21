import { ingestItemSchema, type IngestItem } from '@/lib/ingest/schema'

export function copyGuard(text: string, source: string, minWords = 15): boolean {
  const words = (value: string) => value.toLowerCase().match(/[\p{L}\p{N}']+/gu) ?? []
  const sourceWords = words(source); const written = words(text)
  if (sourceWords.length < minWords || written.length < minWords) return true
  const grams = new Set<string>()
  for (let i = 0; i <= sourceWords.length - minWords; i += 1) grams.add(sourceWords.slice(i, i + minWords).join(' '))
  for (let i = 0; i <= written.length - minWords; i += 1) if (grams.has(written.slice(i, i + minWords).join(' '))) return false
  return true
}
export function validateWrittenItem(value: unknown, source: string): IngestItem {
  const item = ingestItemSchema.parse(value)
  if (!item.sources.length || !/^https?:/i.test(item.sources[0]!.url)) throw new Error('Original source URL is required')
  const strings = [item.headline, item.summary, ...item.layout.flatMap((block) => block.blockType === 'richText' ? [block.markdown] : block.blockType === 'summary' ? block.points.map((point) => point.text) : [])].join(' ')
  if (!copyGuard(strings, source)) throw new Error('15-word source overlap')
  return item
}
