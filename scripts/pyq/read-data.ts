import fs from 'node:fs'
import { z } from 'zod'

const rowSchema = z.object({ record_type: z.string(), sequence: z.number().int().positive(), unit: z.number().int().min(1).max(10), source_number: z.number().int().positive().nullable().optional(), year: z.number().int().min(1900).max(2100).nullable(), question: z.string().trim().min(1) })
export type SourcePyq = Omit<z.infer<typeof rowSchema>, 'year'> & { year: number; qno: string }

export function parsePyqJsonl(input: string): SourcePyq[] {
  const rows = input.split('\n').filter((line) => line.trim()).flatMap((line, index) => {
    let parsed: unknown
    try { parsed = JSON.parse(line) } catch { throw new Error(`Invalid PYQ JSON on line ${index + 1}`) }
    if (typeof parsed !== 'object' || parsed === null || !('record_type' in parsed) || parsed.record_type !== 'question') return []
    return [rowSchema.parse(parsed)]
  })
  const resolved = rows.map((row, index) => {
    if (row.year !== null) return { ...row, year: row.year }
    const neighbor = rows.filter((candidate) => candidate.year !== null && candidate.unit === row.unit)
      .sort((a, b) => Math.abs((a.source_number ?? a.sequence) - (row.source_number ?? row.sequence)) - Math.abs((b.source_number ?? b.sequence) - (row.source_number ?? row.sequence)))[0]
    if (!neighbor?.year) throw new Error(`Could not infer missing year on question row ${index + 1}`)
    return { ...row, year: neighbor.year }
  })
  const perYear = new Map<number, number>()
  return resolved.map((row) => {
    const sequence = (perYear.get(row.year) ?? 0) + 1
    perYear.set(row.year, sequence)
    return { ...row, qno: String(sequence) }
  })
}

export function readPyqJsonl(file: string): SourcePyq[] {
  return parsePyqJsonl(fs.readFileSync(file, 'utf8'))
}

export function pyqImportData(row: SourcePyq, unitId: number, topicId?: number) {
  return { year: row.year, paper: 'P1' as const, qno: row.qno, section: null, marks: 10, question: row.question, unit: unitId, topics: topicId ? [topicId] : [], _status: 'published' as const }
}
