import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { mapPyqToTopic } from '../../scripts/pyq/mapping'
import { parsePyqJsonl, pyqImportData } from '../../scripts/pyq/read-data'
import { parsePyqParams } from '@/lib/data/pyq-params'

describe('PYQ import', () => {
  const sourcePath = path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')
  const rows = parsePyqJsonl(fs.readFileSync(sourcePath, 'utf8'))

  it('validates all 365 questions and generates unique per-year question numbers', () => {
    expect(rows).toHaveLength(365)
    expect(new Set(rows.map(({ year, qno }) => `${year}:${qno}`)).size).toBe(365)
  })

  it('retains the unit relationship when keyword matching has no topic', () => {
    const row = rows.find((candidate) => mapPyqToTopic(candidate.unit, candidate.question) === null)
    const data = pyqImportData(row ?? rows[0]!, 42)
    expect(data.unit).toBe(42)
    expect(data.topics).toEqual([])
  })

  it('maps Unit 4 by thinker instead of the source subtopic label', () => {
    expect(mapPyqToTopic(4, 'Explain Weber ideal type')).toBe('max-weber-social-action-bureaucracy')
  })

  it('accepts valid filters and rejects unsupported values', () => {
    expect(parsePyqParams({ paper: 'P1', year: '2025', page: '2' }).success).toBe(true)
    expect(parsePyqParams({ paper: 'P3', limit: '500' }).success).toBe(false)
  })
})
