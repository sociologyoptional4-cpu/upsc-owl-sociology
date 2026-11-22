import type { LexNode, LexRoot } from './text'
import { lexicalToPlain } from './text'

export type PreservationResult = { ok: boolean; reasons: string[]; lostNumbers?: string[] }
export type PreservationOptions = { minWordRatio?: number; knownText?: string; softNumberLoss?: boolean }

const WORD = /[\p{L}\p{N}]+/gu
const NUMBER = /\d[\d,.]*\d|\d/g

const words = (text: string): string[] => (text.toLowerCase().match(WORD) ?? [])
const numbers = (text: string): string[] => (text.match(NUMBER) ?? []).map((n) => n.replace(/[.,]+$/, ''))

/** Capitalised words that are not the first word of a sentence: our proxy for "proper names". */
function properNames(text: string): Set<string> {
  const names = new Set<string>()
  // "Key Findings: ..." style labels are layout, not names.
  const body = text.replace(/^[^:.\n]{1,60}:/gm, ' ')
  for (const sentence of body.split(/(?<=[.!?:;—–(\n])\s*(?=\p{L})/u)) {
    const tokens = (sentence.match(/[\p{L}][\p{L}'-]*/gu) ?? []).map((token) => token.replace(/['’]s$/i, ''))
    tokens.slice(1).forEach((token) => { if (/^\p{Lu}[\p{Ll}'-]{2,}$/u.test(token)) names.add(token.toLowerCase()) })
  }
  // A word that also appears lower-case somewhere is a common word used as a label, not a name.
  const lower = new Set((text.match(/(?<![\p{L}])\p{Ll}[\p{L}'-]+/gu) ?? []).map((w) => w.toLowerCase().replace(/s$/, '')))
  return new Set([...names].filter((name) => !lower.has(name.replace(/s$/, ''))))
}

/**
 * Beautify/enrich gate: the AI may re-structure, never rewrite facts.
 *  - ≥ minWordRatio (default 97%) of the original words survive
 *  - every number/year of the original survives (unless softNumberLoss: then it is reported in `lostNumbers`)
 *  - no new number/year (except allowed / known text) and no new proper name
 */
export function checkPreservation(original: string, updated: string, allowedNumbers: string[] = [], opts: PreservationOptions = {}): PreservationResult {
  const minRatio = opts.minWordRatio ?? 0.97
  const reasons: string[] = []
  const originalWords = words(original)
  const updatedBag = new Map<string, number>()
  for (const word of words(updated)) updatedBag.set(word, (updatedBag.get(word) ?? 0) + 1)
  let kept = 0
  for (const word of originalWords) {
    const left = updatedBag.get(word) ?? 0
    if (left > 0) { kept += 1; updatedBag.set(word, left - 1) }
  }
  const ratio = originalWords.length === 0 ? 1 : kept / originalWords.length
  if (ratio < minRatio) reasons.push(`only ${(ratio * 100).toFixed(1)}% of the original words survived (need ${Math.round(minRatio * 100)}%)`)

  // "(1) ... (2) ..." enumerations may become a numbered list, so they are not facts.
  const originalNumbers = new Set(numbers(original.replace(/\(\d\)/g, ' ')))
  const updatedNumbers = new Set(numbers(updated))
  const lost = [...originalNumbers].filter((n) => !updatedNumbers.has(n))
  if (lost.length && !opts.softNumberLoss) reasons.push(`numbers lost: ${lost.slice(0, 6).join(', ')}`)
  const allowed = new Set([...allowedNumbers, ...numbers(opts.knownText ?? '')])
  const added = [...updatedNumbers].filter((n) => !originalNumbers.has(n) && !allowed.has(n))
  if (added.length) reasons.push(`numbers added: ${added.slice(0, 6).join(', ')}`)

  const originalWordSet = new Set([...words(original), ...words(opts.knownText ?? '')])
  // "Ambedkarite" from "Ambedkar": a derived form of a known word is not a new name.
  const derived = (name: string): boolean => [...originalWordSet].some((word) => word.length >= 5 && name.startsWith(word))
  const newNames = [...properNames(updated)].filter((name) => !originalWordSet.has(name) && !derived(name))
  if (newNames.length) reasons.push(`new proper names: ${newNames.slice(0, 6).join(', ')}`)
  return { ok: reasons.length === 0, reasons, lostNumbers: lost }
}

/** Compares original and beautified Lexical docs, ignoring AI-written titles/labels (headings of blocks). */
export function checkLexicalPreservation(original: LexRoot, updated: LexRoot, allowedNumbers: string[] = [], opts: PreservationOptions = {}): PreservationResult {
  return checkPreservation(lexicalToPlain(original), lexicalToPlain(updated, { skipFieldKeys: ['title', 'leftTitle', 'rightTitle', 'label', 'aspect'], skipHeadings: Boolean(opts.knownText !== undefined) }), allowedNumbers, opts)
}

export type { LexNode }
