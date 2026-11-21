export type FeedItem = { title: string; description: string; link: string; date: string; source: string }
export function cleanText(value: string): string { return value.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/\s+/g, ' ').trim() }
export function isRecent(date: string, now = Date.now()): boolean { const time = Date.parse(date); return Number.isFinite(time) && time >= now - 48 * 60 * 60 * 1000 && time <= now + 60 * 60 * 1000 }
export function normalizeFeedItem(item: FeedItem): FeedItem { return { ...item, title: cleanText(item.title), description: cleanText(item.description).slice(0, 4000) } }
