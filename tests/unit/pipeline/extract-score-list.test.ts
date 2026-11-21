import { describe, expect, it } from 'vitest'

import { extractScoreList } from '@/pipeline/llm/deepseek'

const score = { id: '0', relevant: true, score: 0.9, paper: 'P2', candidateTopicSlugs: [], reason: 'x' }

describe('extractScoreList', () => {
  it('accepts a bare array of scores', () => {
    expect(extractScoreList([score])).toEqual([score])
  })
  it('accepts a wrapped list under any key', () => {
    expect(extractScoreList({ results: [score] })).toEqual([score])
  })
  it('wraps a single score object instead of grabbing its inner empty array', () => {
    expect(extractScoreList(score)).toEqual([score])
  })
  it('returns null when no score list exists', () => {
    expect(extractScoreList({ foo: [1, 2] })).toBeNull()
  })
})

import { stripNulls } from '@/pipeline/llm/openai'

describe('stripNulls', () => {
  it('removes null fields recursively', () => {
    expect(stripNulls({ a: 1, b: null, c: [{ d: null, e: 2 }] })).toEqual({ a: 1, c: [{ e: 2 }] })
  })
})
