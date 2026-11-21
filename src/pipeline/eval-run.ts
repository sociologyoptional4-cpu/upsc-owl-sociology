import 'dotenv/config'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import { loadConfig } from './config'
import { scoreItems } from './llm/deepseek'
import type { FeedItem } from './clean'

type Row = { id: string; title: string; description: string; expected: { relevant: boolean; paper: string; topicSlugs: string[] } }
type Evaluation = { precision: number; recall: number; method: string }
const base = path.dirname(fileURLToPath(import.meta.url))
const rows = JSON.parse(await readFile(path.join(base, 'eval/relevance-set.json'), 'utf8')) as Row[]
const topicIndex = JSON.parse(await readFile(path.join(base, 'eval/topic-slugs.json'), 'utf8')) as { seedTopics: { slug: string }[]; syllabusTopics: { slug: string }[] }
const allowedTopics = [...topicIndex.seedTopics, ...topicIndex.syllabusTopics].map(({ slug }) => slug)

function metrics(predicted: boolean[], method: string): Evaluation {
  const tp = rows.filter((row, index) => row.expected.relevant && predicted[index]).length
  const fp = rows.filter((row, index) => !row.expected.relevant && predicted[index]).length
  const fn = rows.filter((row, index) => row.expected.relevant && !predicted[index]).length
  return { precision: tp / Math.max(1, tp + fp), recall: tp / Math.max(1, tp + fn), method }
}

async function runModelEvaluation(): Promise<Evaluation> {
  const [config, prompt] = await Promise.all([loadConfig(), readFile(path.join(base, 'llm/prompts/scorer.v1.md'), 'utf8')])
  const items: FeedItem[] = rows.map((row) => ({ title: row.title, description: row.description, link: `https://eval.invalid/${row.id}`, date: new Date().toISOString(), source: 'evaluation set' }))
  const results: boolean[] = []
  for (let start = 0; start < items.length; start += 20) {
    const scored = await scoreItems(config, items.slice(start, start + 20), allowedTopics, prompt)
    for (const score of scored.items) results[start + Number(score.id)] = score.relevant
  }
  return metrics(results, `DeepSeek ${config.SCORER_MODEL}`)
}

function runOfflineBaseline(): Evaluation {
  const irrelevant = /cricket|shares|film star|celebrity|gold prices|collision|smartphone|striker|commodity futures|football|burglary|theft|music video|candidate wins party nomination|party leaders|weather office|currency weakens|actor denies/i
  return metrics(rows.map((row) => !irrelevant.test(row.title)), 'local rule baseline; no model calls')
}

const result = process.argv.includes('--offline') ? runOfflineBaseline() : await runModelEvaluation()
console.info(JSON.stringify(result, null, 2))
