import fs from 'node:fs'
import path from 'node:path'

/**
 * PRIVATE background (D15): handout pages for a topic, read from the local JSONL at runtime.
 * Never written to the repo, the DB or the public site. Only data/handouts-index.json (page numbers) is committed.
 */
const DEFAULT_HANDOUTS = '/Volumes/ssd t7/drives/sociology/_Handouts_Sociology2024byNishantSir_LevelupIAS_KING_R_QUEEN_P.jsonl'
const INDEX_FILE = path.resolve(process.cwd(), 'data/handouts-index.json')
const MAX_WORDS = 3500

type IndexRow = { topicSlug: string; pages: number[] }

let pagesCache: Map<number, string> | null = null

function loadPages(): Map<number, string> {
  if (pagesCache) return pagesCache
  const file = process.env.HANDOUTS_JSONL || DEFAULT_HANDOUTS
  if (!fs.existsSync(file)) {
    pagesCache = new Map()
    return pagesCache
  }
  const rows = fs.readFileSync(file, 'utf8').split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l) as { page: number; text: string })
  pagesCache = new Map(rows.map((r) => [r.page, r.text.replace(/[ \t]{2,}/g, ' ')]))
  return pagesCache
}

function loadIndex(): IndexRow[] {
  if (!fs.existsSync(INDEX_FILE)) return []
  return JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8')) as IndexRow[]
}

/** Background text for a topic, truncated to a word budget. Empty string when unavailable. */
export function handoutBackground(topicSlug: string): string {
  const row = loadIndex().find((r) => r.topicSlug === topicSlug)
  if (!row) return ''
  const pages = loadPages()
  const text = row.pages.map((p) => pages.get(p) ?? '').join('\n')
  const words = text.split(/\s+/)
  return words.slice(0, MAX_WORDS).join(' ')
}
