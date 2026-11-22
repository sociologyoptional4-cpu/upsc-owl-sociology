import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { ALL_UNIT_NOTEBOOKS } from '@/data/notes'
import { unit01Notebook } from '@/data/notes/unit-01'
import type { LexNode } from '@/lib/blog/text'
import { applyNotebookMarkup } from '@/lib/notes/notebook-builder'
import { mindMapDataSchema, type NotebookSection, unitNotebookSpecSchema } from '@/lib/notes/notebook-types'
import { resolveStaticMediaUrl } from '@/lib/notes/static-media'
import { mapPyqToTopic } from '../../scripts/pyq/mapping'
import { parsePyqJsonl } from '../../scripts/pyq/read-data'

function checkSections(sections: NotebookSection[]): void {
  for (const section of sections) {
    if (section.kind === 'thinkerQuote') {
      const words = section.quote.trim().split(/\s+/).filter(Boolean).length
      expect(words).toBeLessThanOrEqual(25)
    }
    if (section.kind === 'md') {
      const marked = applyNotebookMarkup([{ type: 'text', text: section.body }])
      for (const node of marked) {
        expect(node.text ?? '').not.toContain('[[')
        expect(node.text ?? '').not.toContain('==')
      }
    }
  }
}

describe('notebook markup converter', () => {
  it('converts all 5 colour markers while preserving existing formatting without collision', () => {
    const input: LexNode[] = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            format: 2,
            text: 'Look at [[thinker:C.W. Mills]] on ==Sociological Imagination== vs [[eg:Aarav metro delay]] and [[trap:reductionism]] linking [[link:Paper 2 Urbanization]].',
          },
        ],
      },
    ]

    const out = applyNotebookMarkup(input)
    const nodes = out[0]?.children ?? []
    const findNode = (snippet: string) => nodes.find((n) => n.text === snippet)

    const thinker = findNode('C.W. Mills')
    expect(thinker?.$).toEqual({ color: 'plum' })
    expect(thinker?.format).toBe(3)

    const concept = findNode('Sociological Imagination')
    expect(concept?.$).toEqual({ highlight: 'yellow' })
    expect(concept?.format).toBe(3)

    const eg = findNode('Aarav metro delay')
    expect(eg?.$).toEqual({ highlight: 'mint' })

    const trap = findNode('reductionism')
    expect(trap?.$).toEqual({ highlight: 'pink' })

    const link = findNode('Paper 2 Urbanization')
    expect(link?.$).toEqual({ color: 'blue' })
    expect(link?.format).toBe(3)

    for (const node of nodes) {
      expect(Boolean(node.$?.color && node.$?.highlight)).toBe(false)
    }
  })
})

describe('Unit 1 bilingual notebook spec and PYQ mapping', () => {
  it('validates the full bilingual Unit 1 spec (English priority + Hinglish), assets, quotes, and all 25 PYQs in both languages', () => {
    expect(unitNotebookSpecSchema.safeParse(unit01Notebook).success).toBe(true)
    expect(unit01Notebook.topics.map((t) => t.topicSlug)).toEqual([
      'modernity-and-emergence-of-sociology',
      'scope-and-other-social-sciences',
      'sociology-and-common-sense',
    ])

    expect(mindMapDataSchema.safeParse(unit01Notebook.mindMap).success).toBe(true)
    expect(mindMapDataSchema.safeParse(unit01Notebook.mindMapHinglish).success).toBe(true)
    expect(unit01Notebook.studySequenceHinglish.length).toBe(unit01Notebook.studySequence.length)

    for (const info of unit01Notebook.infographics) {
      const assetPath = path.resolve(process.cwd(), 'public/assets/infographics', info.assetFile)
      expect(fs.existsSync(assetPath)).toBe(true)
      expect(info.titleHinglish.length).toBeGreaterThan(0)
    }

    for (const topic of unit01Notebook.topics) {
      expect(mindMapDataSchema.safeParse(topic.mindMap).success).toBe(true)
      expect(mindMapDataSchema.safeParse(topic.mindMapHinglish).success).toBe(true)
      checkSections(topic.sections)
      checkSections(topic.sectionsHinglish)
    }

    const jsonlPath = path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')
    const unit1Jsonl = parsePyqJsonl(fs.readFileSync(jsonlPath, 'utf8')).filter((r) => r.unit === 1)
    expect(unit1Jsonl).toHaveLength(25)
    const expectedSet = new Set(unit1Jsonl.map((r) => `${r.year}::${r.question.trim()}`))

    const answersEn = unit01Notebook.topics.flatMap((t) => t.pyqAnswers)
    expect(answersEn).toHaveLength(25)
    expect(unit01Notebook.topics.map((t) => t.pyqAnswers.length)).toEqual([9, 10, 6])
    expect(new Set(answersEn.map((a) => `${a.year}::${a.question.trim()}`))).toEqual(expectedSet)

    const answersHi = unit01Notebook.topics.flatMap((t) => t.pyqAnswersHinglish)
    expect(answersHi).toHaveLength(25)
    expect(unit01Notebook.topics.map((t) => t.pyqAnswersHinglish.length)).toEqual([9, 10, 6])
    expect(new Set(answersHi.map((a) => `${a.year}::${a.question.trim()}`))).toEqual(expectedSet)
  })

  it('maps C.W. Mills Sociological Imagination PYQ to sociology-and-common-sense', () => {
    const q = '"The sociological imagination enables us to grasp history and biography and the relationship between the two in a society.” – C.W.Mills. Explain.'
    expect(mapPyqToTopic(1, q)).toBe('sociology-and-common-sense')
  })
})

describe('All 25 UPSC Sociology Units Notebook Suite', () => {
  it('validates that all 25 units (98 topics) are authored, schema-valid, bilingual, and resolve static infographic URLs', () => {
    expect(ALL_UNIT_NOTEBOOKS).toHaveLength(25)

    const allTopics = ALL_UNIT_NOTEBOOKS.flatMap((u) => u.topics)
    expect(allTopics).toHaveLength(98)

    let totalPyqsEn = 0
    let totalPyqsHi = 0

    for (const unit of ALL_UNIT_NOTEBOOKS) {
      const parsed = unitNotebookSpecSchema.safeParse(unit)
      expect(parsed.success).toBe(true)
      expect(mindMapDataSchema.safeParse(unit.mindMap).success).toBe(true)
      expect(mindMapDataSchema.safeParse(unit.mindMapHinglish).success).toBe(true)

      for (const info of unit.infographics) {
        const assetPath = path.resolve(process.cwd(), 'public/assets/infographics', info.assetFile)
        expect(fs.existsSync(assetPath)).toBe(true)
        expect(resolveStaticMediaUrl(info.assetFile)).toBe(`/assets/infographics/${info.assetFile}`)
        expect(info.titleHinglish.length).toBeGreaterThan(0)
      }

      for (const topic of unit.topics) {
        expect(mindMapDataSchema.safeParse(topic.mindMap).success).toBe(true)
        expect(mindMapDataSchema.safeParse(topic.mindMapHinglish).success).toBe(true)
        checkSections(topic.sections)
        checkSections(topic.sectionsHinglish)

        totalPyqsEn += topic.pyqAnswers.length
        totalPyqsHi += topic.pyqAnswersHinglish.length
        expect(topic.pyqAnswers.length).toBe(topic.pyqAnswersHinglish.length)
      }
    }

    expect(totalPyqsEn).toBe(597)
    expect(totalPyqsHi).toBe(597)
  })
})
