import type { PaperCode } from '@/lib/data/types'

type PaperTone = { dot: string; text: string; border: string; bg: string; label: string }

const TONES: Record<PaperCode | 'Both', PaperTone> = {
  P1: { dot: 'bg-paper-1', text: 'text-paper-1', border: 'border-paper-1', bg: 'bg-paper-1', label: 'Paper 1' },
  P2: { dot: 'bg-paper-2', text: 'text-paper-2', border: 'border-paper-2', bg: 'bg-paper-2', label: 'Paper 2' },
  Both: { dot: 'bg-ink', text: 'text-ink', border: 'border-ink', bg: 'bg-ink', label: 'P1 + P2' },
}

/** Semantic color per paper (D5 in DECISIONS.md). */
export function paperTone(paper: PaperCode | 'Both' | null | undefined): PaperTone {
  return TONES[paper ?? 'Both']
}
