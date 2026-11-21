import 'dotenv/config'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { sourceHash } from '@/lib/ingest/hash'
import type { IngestItem } from '@/lib/ingest/schema'
import { canSpend, estimateCost } from './cost'
import { uniqueFeedItems, hasNearDuplicate } from './dedupe'
import type { FeedItem } from './clean'
import { loadConfig, type PipelineConfig } from './config'
import { scoreItems, type Score } from './llm/deepseek'
import { embedTitles, writeItem } from './llm/openai'
import { apiRequest, getDailySpend, sendIngest } from './publish'
import { fetchFeeds, type FeedSource } from './sources/fetch-feeds'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const readPrompt = (name: string) => readFile(path.join(root, 'src/pipeline/llm/prompts', name), 'utf8')
type Settings = { pipelineEnabled?: boolean; maxDailyUsd?: number }
type Run = { id: number }
type Existing = { sourceHash?: string; embedding?: number[] }
type State = { counts: Record<'fetched' | 'deduped' | 'scored' | 'kept' | 'written' | 'failedValidation' | 'published', number>; tokens: { input: number; output: number; cached: number }; cost: number; errors: { stage: string; message: string }[] }
type Topics = { slugs: string[]; titles: string[] }
type Prompts = { scorer: string; writer: string; style: string; examples: string }

async function getTopics(config: PipelineConfig): Promise<Topics> {
  const result = await apiRequest<{ docs: { slug: string; title: string; summary?: string }[] }>(config, '/api/topics?limit=1000&depth=0')
  return { slugs: result.docs.map(({ slug }) => slug).filter(Boolean), titles: result.docs.map((topic) => `${topic.slug}: ${topic.title}${topic.summary ? ` — ${topic.summary}` : ''}`) }
}

async function getThinkerSlugs(config: PipelineConfig): Promise<string[]> {
  const result = await apiRequest<{ docs: { slug: string }[] }>(config, '/api/thinkers?limit=1000&depth=0')
  return result.docs.map(({ slug }) => slug).filter(Boolean)
}

async function getPrompts(): Promise<Prompts> {
  const [scorer, writer, style, examples] = await Promise.all(['scorer.v1.md', 'writer.v1.md', 'style-guide.md', 'gold-examples.md'].map(readPrompt))
  return { scorer, writer, style, examples }
}

async function markSources(config: PipelineConfig, sources: FeedSource[], errors: { source: string; message: string }[]): Promise<void> {
  const updates = await Promise.allSettled(sources.map((source) => apiRequest(config, `/api/pipeline/sources/${source.id}`, { method: 'PATCH', body: JSON.stringify({ lastFetchedAt: new Date().toISOString(), lastError: errors.find((error) => error.source === source.name)?.message ?? null }) })))
  return void updates
}

async function nearDeduplicate(config: PipelineConfig, candidates: FeedItem[], old: Existing[], state: State, dailySpend: number, maxUsd: number): Promise<{ candidates: FeedItem[]; embeddings: Map<string, number[]> }> {
  const estimate = estimateCost({ input: candidates.length * 30, output: 0 }, config.PRICE_OPENAI_EMBEDDING, 0)
  if (!canSpend(dailySpend + state.cost, estimate, maxUsd)) throw new Error('Daily budget would be exceeded before embeddings')
  const result = await embedTitles(config, candidates.map((item) => item.title))
  state.cost += estimateCost({ input: result.inputTokens, output: 0 }, config.PRICE_OPENAI_EMBEDDING, 0)
  state.tokens.input += result.inputTokens
  const retained = old.flatMap((doc) => Array.isArray(doc.embedding) ? [doc.embedding] : [])
  const embeddings = new Map<string, number[]>()
  const kept = candidates.filter((item, index) => {
    const embedding = result.embeddings[index]
    if (!embedding || hasNearDuplicate(embedding, retained)) { state.counts.deduped += 1; return false }
    retained.push(embedding); embeddings.set(sourceHash(item.link), embedding); return true
  })
  return { candidates: kept, embeddings }
}

async function writeCandidate(config: PipelineConfig, source: FeedItem, score: Score, topics: Topics, thinkers: string[], prompts: Prompts, state: State, dailySpend: number, maxUsd: number): Promise<IngestItem> {
  const estimate = estimateCost({ input: 6000, output: 2500 }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  if (!canSpend(dailySpend + state.cost, estimate, maxUsd)) throw new Error('Daily budget would be exceeded before writing')
  let result
  try { result = await writeItem(config, source, score.paper, topics.slugs, thinkers, prompts.writer, prompts.style, prompts.examples) }
  catch (firstError) {
    const retry = estimateCost({ input: 7000, output: 2500 }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
    if (!canSpend(dailySpend + state.cost + estimate, retry, maxUsd)) throw firstError
    state.cost += estimate
    result = await writeItem(config, source, score.paper, topics.slugs, thinkers, prompts.writer, prompts.style, prompts.examples, firstError instanceof Error ? firstError.message : 'schema validation failed')
  }
  const item = result.item
  if (item.topicSlugs.some((slug) => !topics.slugs.includes(slug)) || item.thinkerSlugs.some((slug) => !thinkers.includes(slug))) throw new Error('Writer returned an unknown syllabus or thinker slug')
  const itemCost = estimateCost({ input: result.inputTokens, output: result.outputTokens }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  state.cost += itemCost; state.tokens.input += result.inputTokens; state.tokens.output += result.outputTokens; state.tokens.cached += result.cachedTokens
  const localDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(source.date))
  return { ...item, date: localDate, paper: score.paper, relevance: score.score, model: config.WRITER_MODEL, promptVersion: 'writer.v1', costUsd: itemCost, sources: [{ name: source.source, url: source.link }] }
}

async function createNotes(config: PipelineConfig, candidates: FeedItem[], embeddings: Map<string, number[]>, settings: Settings, state: State, dailySpend: number): Promise<IngestItem[]> {
  const maxUsd = settings.maxDailyUsd ?? 1
  const [topics, thinkers, prompts] = await Promise.all([getTopics(config), getThinkerSlugs(config), getPrompts()])
  const scorerEstimate = estimateCost({ input: 12000, output: 2000 }, config.PRICE_DEEPSEEK_INPUT, config.PRICE_DEEPSEEK_OUTPUT)
  if (!canSpend(dailySpend + state.cost, scorerEstimate, maxUsd)) throw new Error('Daily budget would be exceeded before scoring')
  const result = await scoreItems(config, candidates.slice(0, 20), topics.slugs, prompts.scorer)
  state.tokens.input += result.inputTokens; state.tokens.output += result.outputTokens
  state.cost += estimateCost({ input: result.inputTokens, output: result.outputTokens }, config.PRICE_DEEPSEEK_INPUT, config.PRICE_DEEPSEEK_OUTPUT)
  state.counts.scored = result.items.length
  const selected = result.items.filter((score) => score.relevant && score.score >= 0.6).sort((a, b) => b.score - a.score).slice(0, config.MAX_ITEMS_PER_DAY)
  state.counts.kept = selected.length
  return writeSelected(config, selected, candidates, topics, thinkers, prompts, embeddings, state, dailySpend, maxUsd)
}

async function writeSelected(config: PipelineConfig, scores: Score[], candidates: FeedItem[], topics: Topics, thinkers: string[], prompts: Prompts, embeddings: Map<string, number[]>, state: State, dailySpend: number, maxUsd: number): Promise<IngestItem[]> {
  const output: IngestItem[] = []
  for (const score of scores) {
    const source = candidates[Number(score.id)]
    if (!source) continue
    if (score.candidateTopicSlugs.some((slug) => !topics.slugs.includes(slug))) { state.errors.push({ stage: 'score', message: 'Scorer returned an unknown topic slug' }); continue }
    try { output.push({ ...(await writeCandidate(config, source, score, topics, thinkers, prompts, state, dailySpend, maxUsd)), embedding: embeddings.get(sourceHash(source.link)) }) }
    catch (error) { state.counts.failedValidation += 1; state.errors.push({ stage: 'write', message: error instanceof Error ? error.message.slice(0, 240) : 'writer failed' }) }
  }
  state.counts.written = output.length
  return output
}

async function main(): Promise<void> {
  const config = loadConfig()
  const settings = await apiRequest<Settings>(config, '/api/globals/site-settings')
  if (!settings.pipelineEnabled) { console.info('Pipeline disabled in site settings'); return }
  const run = config.DRY_RUN ? null : await apiRequest<Run>(config, '/api/pipeline-runs', { method: 'POST', body: JSON.stringify({ startedAt: new Date().toISOString(), status: 'running', promptVersion: 'writer.v1', counts: {}, tokens: {}, costUsd: 0 }) })
  const state: State = { counts: { fetched: 0, deduped: 0, scored: 0, kept: 0, written: 0, failedValidation: 0, published: 0 }, tokens: { input: 0, output: 0, cached: 0 }, cost: 0, errors: [] }
  const dailySpend = await getDailySpend(config)
  try {
    const sources = (await apiRequest<{ docs: FeedSource[] }>(config, '/api/pipeline/sources')).docs
    const feeds = await fetchFeeds(sources)
    state.errors.push(...feeds.errors.map(({ source, message }) => ({ stage: `feed:${source}`, message })))
    if (!config.DRY_RUN) await markSources(config, sources, feeds.errors)
    state.counts.fetched = feeds.items.length
    const unique = uniqueFeedItems(feeds.items); state.counts.deduped = feeds.items.length - unique.length
    const hashes = unique.map((item) => sourceHash(item.link))
    const [exact, old] = await Promise.all([
      apiRequest<{ docs: Existing[] }>(config, `/api/current-affairs?where[sourceHash][in]=${encodeURIComponent(hashes.join(','))}&limit=100&depth=0`),
      apiRequest<{ docs: Existing[] }>(config, '/api/current-affairs?where[embedding][exists]=true&limit=1000&depth=0'),
    ])
    const knownHashes = new Set(exact.docs.map((doc) => doc.sourceHash).filter((value): value is string => Boolean(value)))
    const pending = unique.filter((item) => !knownHashes.has(sourceHash(item.link))).slice(0, 100)
    const filtered = pending.length ? await nearDeduplicate(config, pending, old.docs, state, dailySpend, settings.maxDailyUsd ?? 1) : { candidates: [], embeddings: new Map<string, number[]>() }
    const items = filtered.candidates.length ? await createNotes(config, filtered.candidates, filtered.embeddings, settings, state, dailySpend) : []
    if (items.length && run) await sendIngest(config, run.id, items.slice(0, 10))
    if (config.DRY_RUN) console.info(JSON.stringify({ wouldWrite: items.map(({ headline, paper }) => ({ headline, paper })), counts: state.counts, spendEstimateUsd: state.cost }))
  } catch (error) { state.errors.push({ stage: 'run', message: error instanceof Error ? error.message.slice(0, 240) : 'pipeline failed' }) }
  if (run) await finishRun(config, run.id, state)
}

async function finishRun(config: PipelineConfig, id: number, state: State): Promise<void> {
  const status = state.errors.length ? (state.counts.written ? 'partial' : 'failed') : 'ok'
  await apiRequest(config, `/api/pipeline-runs/${id}`, { method: 'PATCH', body: JSON.stringify({ finishedAt: new Date().toISOString(), status, counts: state.counts, tokens: state.tokens, costUsd: state.cost, errors: state.errors }) })
}

void main().catch((error: unknown) => { console.error(error instanceof Error ? error.message : 'Pipeline failed'); process.exitCode = 1 })
