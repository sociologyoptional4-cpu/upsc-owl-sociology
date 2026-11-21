import Parser from 'rss-parser'
import type { FeedItem } from '../clean'
import { isRecent, normalizeFeedItem } from '../clean'

export type FeedSource = { id: number; name: string; feedUrl: string }
const parser = new Parser()
export async function fetchOne(source: FeedSource, now = Date.now()): Promise<FeedItem[]> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)
  try {
    const response = await fetch(source.feedUrl, { signal: controller.signal, headers: { 'user-agent': 'UPSC-OWL-Sociology/1.0 (RSS reader)' } })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const feed = await parser.parseString(await response.text())
    return feed.items.flatMap((item) => {
      const date = item.isoDate ?? item.pubDate ?? ''
      const link = item.link ?? ''
      if (!item.title || !link || !isRecent(date, now)) return []
      return [normalizeFeedItem({ title: item.title, description: item.contentSnippet ?? item.content ?? '', link, date, source: source.name })]
    })
  } finally { clearTimeout(timeout) }
}
export async function fetchFeeds(sources: FeedSource[]): Promise<{ items: FeedItem[]; errors: { source: string; message: string }[] }> {
  const outcomes = await Promise.all(sources.map(async (source) => {
    try { return { items: await fetchOne(source), error: null } }
    catch (error) { return { items: [], error: { source: source.name, message: error instanceof Error ? error.message : 'feed failed' } } }
  }))
  return { items: outcomes.flatMap((result) => result.items), errors: outcomes.flatMap((result) => result.error ? [result.error] : []) }
}
