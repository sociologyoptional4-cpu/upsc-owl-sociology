import { createHash } from 'node:crypto'

export function normalizeSourceUrl(input: string): string {
  const url = new URL(input)
  url.hash = ''
  for (const key of [...url.searchParams.keys()]) if (/^utm_/i.test(key)) url.searchParams.delete(key)
  url.hostname = url.hostname.toLowerCase()
  url.pathname = url.pathname.replace(/\/$/, '') || '/'
  return url.toString()
}

export function sourceHash(input: string): string {
  return createHash('sha256').update(normalizeSourceUrl(input)).digest('hex')
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (!a.length || a.length !== b.length) return 0
  const dot = a.reduce((sum, value, index) => sum + value * b[index]!, 0)
  const normA = Math.sqrt(a.reduce((sum, value) => sum + value * value, 0))
  const normB = Math.sqrt(b.reduce((sum, value) => sum + value * value, 0))
  return normA && normB ? dot / (normA * normB) : 0
}
