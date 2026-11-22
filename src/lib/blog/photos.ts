import type { Payload } from 'payload'
import { z } from 'zod'

import type { Usage } from './ledger'
import { callDeepSeek } from './organize'

const API = 'https://commons.wikimedia.org/w/api.php'
const UA = 'UPSC-OWL-Sociology/1.0 (blog image fetch)'
const MAX_BYTES = 8 * 1024 * 1024

export type License = 'public-domain' | 'cc0' | 'cc-by' | 'cc-by-sa'
export type PhotoCandidate = { title: string; description: string; url: string; pageUrl: string; mime: string; license: License; licenseName: string; artist: string }

const strip = (html: unknown): string => (typeof html === 'string' ? html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() : '')

/** Commons licence name → our Media licence (ASSETS.md policy). Anything else is skipped. */
export function mapLicense(name: string): License | null {
  if (/^cc0/i.test(name)) return 'cc0'
  if (/public domain|^pd/i.test(name)) return 'public-domain'
  if (/^cc by-sa/i.test(name)) return 'cc-by-sa'
  if (/^cc by/i.test(name)) return 'cc-by'
  return null
}

const pageSchema = z.object({
  title: z.string(),
  imageinfo: z.array(z.object({ mime: z.string(), width: z.number(), thumburl: z.string().optional(), url: z.string(), descriptionurl: z.string(), extmetadata: z.record(z.string(), z.object({ value: z.unknown() })).optional() })).min(1),
})

export async function searchCommons(query: string): Promise<PhotoCandidate[]> {
  const params = new URLSearchParams({ action: 'query', generator: 'search', gsrsearch: `${query} filetype:bitmap`, gsrnamespace: '6', gsrlimit: '12', prop: 'imageinfo', iiprop: 'url|extmetadata|mime|size', iiurlwidth: '1280', format: 'json', formatversion: '2' })
  const res = await fetch(`${API}?${params}`, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(20_000) })
  if (!res.ok) throw new Error(`Commons search failed (${res.status})`)
  const pages = ((await res.json()) as { query?: { pages?: unknown[] } }).query?.pages ?? []
  return pages.flatMap((raw) => {
    const page = pageSchema.safeParse(raw)
    if (!page.success) return []
    const info = page.data.imageinfo[0]
    const meta = info.extmetadata ?? {}
    const licenseName = strip(meta.LicenseShortName?.value)
    const license = mapLicense(licenseName)
    if (!license || !/^image\/(jpeg|png|webp)$/.test(info.mime) || info.width < 640) return []
    return [{ title: page.data.title.replace(/^File:/, '').replace(/\.\w+$/, ''), description: strip(meta.ImageDescription?.value).slice(0, 200), url: info.thumburl ?? info.url, pageUrl: info.descriptionurl, mime: info.mime, license, licenseName, artist: strip(meta.Artist?.value).slice(0, 80) || 'Unknown' }]
  })
}

/** DeepSeek picks the candidate that actually shows the subject (or none): search rank alone is often off-topic. */
async function pick(subject: string, candidates: PhotoCandidate[], usage: Usage): Promise<PhotoCandidate | null> {
  if (!candidates.length) return null
  const system = 'Pick the ONE image that most accurately shows the subject of a news/study article. Reject unrelated, decorative, map-of-elsewhere, logo or document scans unless the subject is that. Return ONLY json {"index": n} (0-based) or {"index": -1} if none fits.'
  const reply = await callDeepSeek(system, JSON.stringify({ subject, images: candidates.map((c, i) => ({ i, title: c.title, description: c.description })) }))
  usage.input += reply.usage.input; usage.output += reply.usage.output
  const index = z.object({ index: z.number().int() }).safeParse(JSON.parse(reply.content))
  return index.success && index.data.index >= 0 ? candidates[index.data.index] ?? null : null
}

/** Finds, licence-checks and uploads the best Commons photo for a post. Returns the Media id or null. */
export async function fetchCommonsPhoto(payload: Payload, subject: string, query: string, usage: Usage): Promise<number | null> {
  if (!query.trim()) return null
  const chosen = await pick(subject, (await searchCommons(query)).slice(0, 8), usage)
  if (!chosen) return null
  const res = await fetch(chosen.url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(30_000) })
  if (!res.ok) return null
  const data = Buffer.from(await res.arrayBuffer())
  if (data.length > MAX_BYTES) return null
  const ext = chosen.mime.split('/')[1] === 'jpeg' ? 'jpg' : chosen.mime.split('/')[1]
  const media = await payload.create({
    collection: 'media', overrideAccess: true,
    data: { alt: chosen.description || chosen.title, license: chosen.license, credit: `${chosen.artist} · ${chosen.licenseName} · Wikimedia Commons`, sourceUrl: chosen.pageUrl },
    file: { data, mimetype: chosen.mime, name: `commons-${chosen.title.slice(0, 50).replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.${ext}`, size: data.length },
  })
  return media.id
}
