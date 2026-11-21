import type { LexNode, LexRoot } from './text'
import { lexicalToPlain } from './text'

export type PreservationResult = { ok: boolean; reasons: string[] }

const WORD = /[\p{L}\p{N}]+/gu
const NUMBER = /\d[\d,.]*\d|\d/g

const words = (text: string): string[] => (text.toLowerCase().match(WORD) ?? [])
const numbers = (text: string): string[] => (text.match(NUMBER) ?? []).map((n) => n.replace(/[.,]+$/, ''))

/** Capitalised words that are not the first word of a sentence: our proxy for "proper names". */
function properNames(text: string): Set<string> {
  const names = new Set<string>()
  for (const sentence of text.split(/(?<=[.!?\n])\s+/)) {
    const tokens = sentence.match(/[\p{L}][\p{L}'-]*/gu) ?? []
    tokens.slice(1).forEach((token) => { if (/^\p{Lu}[\p{Ll}'-]{2,}$/u.test(token)) names.add(token.toLowerCase()) })
  }
  return names
}

/**
 * Beautify gate: the AI may re-structure, never rewrite facts.
 *  - ≥ 97% of the original words survive
 *  - every number/year of the original survives
 *  - no new number/year (except allowed PYQ years) and no new proper name
 */
export function checkPreservation(original: string, updated: string, allowedNumbers: string[] = []): PreservationResult {
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
  if (ratio < 0.97) reasons.push(`only ${(ratio * 100).toFixed(1)}% of the original words survived (need 97%)`)

  const originalNumbers = new Set(numbers(original))
  const updatedNumbers = new Set(numbers(updated))
  const lost = [...originalNumbers].filter((n) => !updatedNumbers.has(n))
  if (lost.length) reasons.push(`numbers lost: ${lost.slice(0, 6).join(', ')}`)
  const allowed = new Set(allowedNumbers)
  const added = [...updatedNumbers].filter((n) => !originalNumbers.has(n) && !allowed.has(n))
  if (added.length) reasons.push(`numbers added: ${added.slice(0, 6).join(', ')}`)

  const originalWordSet = new Set(words(original))
  const newNames = [...properNames(updated)].filter((name) => !originalWordSet.has(name))
  if (newNames.length) reasons.push(`new proper names: ${newNames.slice(0, 6).join(', ')}`)
  return { ok: reasons.length === 0, reasons }
}

/** Compares original and beautified Lexical docs, ignoring AI-written titles/labels (headings of blocks). */
export function checkLexicalPreservation(original: LexRoot, updated: LexRoot, allowedNumbers: string[] = []): PreservationResult {
  return checkPreservation(lexicalToPlain(original), lexicalToPlain(updated, { skipFieldKeys: ['title', 'leftTitle', 'rightTitle', 'label', 'aspect'] }), allowedNumbers)
}

export type { LexNode }
