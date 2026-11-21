import { sourceHash } from '@/lib/ingest/hash'
import type { FeedItem } from './clean'

export function uniqueFeedItems(items: FeedItem[]): FeedItem[] {
  const hashes = new Set<string>()
  return items.filter((item) => {
    try { const hash = sourceHash(item.link); if (hashes.has(hash)) return false; hashes.add(hash); return true } catch { return false }
  })
}
export function hasNearDuplicate(embedding: number[], existing: number[][], threshold = 0.88): boolean {
  const norm = (a: number[], b: number[]) => { if (!a.length || a.length !== b.length) return 0; const dot = a.reduce((s, x, i) => s + x * b[i]!, 0); const x = Math.sqrt(a.reduce((s, v) => s + v * v, 0)); const y = Math.sqrt(b.reduce((s, v) => s + v * v, 0)); return x && y ? dot / (x * y) : 0 }
  return existing.some((value) => norm(embedding, value) >= threshold)
}
