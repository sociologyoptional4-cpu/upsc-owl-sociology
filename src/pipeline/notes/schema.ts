import { z } from 'zod'

/** What the notes writer must return. The runner turns it into the batch-1 layout. */
export const noteOutputSchema = z.object({
  summary: z.string().min(40).max(500),
  points: z.array(z.string().min(10).max(400)).min(3).max(6),
  bodyMarkdown: z
    .string()
    .min(600)
    .max(12_000)
    .refine((md) => !/<[a-z!/][^>]*>/i.test(md), 'No raw HTML in bodyMarkdown')
    .refine((md) => !/^#\s/m.test(md), 'Use ## or ### headings only'),
  keyTerms: z
    .array(z.object({ term: z.string().min(1).max(80), meaning: z.string().min(5).max(400), thinker: z.string().max(80).optional() }))
    .min(3)
    .max(6),
  answerTip: z.string().min(40).max(700),
  thinkerSlugs: z.array(z.string().regex(/^[a-z0-9-]+$/)).max(6).default([]),
})

export type NoteOutput = z.infer<typeof noteOutputSchema>

/** Markdown tables: header + separator, ≤ 4 columns, ≤ 8 data rows (Task N1 rule). */
export function tablesWithinLimits(markdown: string): boolean {
  const blocks = markdown.split(/\n{2,}/).filter((b) => /^\s*\|.*\|\s*$/m.test(b) && /\|\s*-{3,}/.test(b))
  return blocks.every((block) => {
    const rows = block.trim().split('\n').filter((l) => l.trim().startsWith('|'))
    const columns = (rows[0]?.split('|').length ?? 2) - 2
    return columns <= 4 && rows.length - 2 <= 8
  })
}
