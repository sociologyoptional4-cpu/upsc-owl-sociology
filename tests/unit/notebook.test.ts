import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { unit01Notebook } from '@/data/notes/unit-01'
import type { LexNode } from '@/lib/blog/text'
import { applyNotebookMarkup } from '@/lib/notes/notebook-builder'
import { mindMapDataSchema, unitNotebookSpecSchema } from '@/lib/notes/notebook-types'
import { mapPyqToTopic } from '../../scripts/pyq/mapping'
import { parsePyqJsonl } from '../../scripts/pyq/read-data'

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

describe('Unit 1 notebook spec and PYQ mapping', () => {
  it('validates the full Unit 1 notebook spec, media assets, quotes, and all 25 PYQs', () => {
    expect(unitNotebookSpecSchema.safeParse(unit01Notebook).success).toBe(true)
    expect(unit01Notebook.topics.map((t) => t.topicSlug)).toEqual([
      'modernity-and-emergence-of-sociology',
      'scope-and-other-social-sciences',
      'sociology-and-common-sense',
    ])

    expect(mindMapDataSchema.safeParse(unit01Notebook.mindMap).success).toBe(true)
    for (const info of unit01Notebook.infographics) {
      const assetPath = path.resolve(process.cwd(), 'public/assets/infographics', info.assetFile)
      expect(fs.existsSync(assetPath)).toBe(true)
    }

    for (const topic of unit01Notebook.topics) {
      expect(mindMapDataSchema.safeParse(topic.mindMap).success).toBe(true)
      for (const section of topic.sections) {
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

    const jsonlPath = path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')
    const unit1Jsonl = parsePyqJsonl(fs.readFileSync(jsonlPath, 'utf8')).filter((r) => r.unit === 1)
    expect(unit1Jsonl).toHaveLength(25)

    const allAnswers = unit01Notebook.topics.flatMap((t) => t.pyqAnswers)
    expect(allAnswers).toHaveLength(25)
    expect(unit01Notebook.topics.map((t) => t.pyqAnswers.length)).toEqual([9, 10, 6])

    const expectedSet = new Set(unit1Jsonl.map((r) => `${r.year}::${r.question.trim()}`))
    const actualSet = new Set(allAnswers.map((a) => `${a.year}::${a.question.trim()}`))
    expect(actualSet).toEqual(expectedSet)
  })

  it('maps C.W. Mills Sociological Imagination PYQ to sociology-and-common-sense', () => {
    const q = '"The sociological imagination enables us to grasp history and biography and the relationship between the two in a society.” – C.W.Mills. Explain.'
    expect(mapPyqToTopic(1, q)).toBe('sociology-and-common-sense')
  })
})
