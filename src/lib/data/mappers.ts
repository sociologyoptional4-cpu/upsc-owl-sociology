import type { CurrentAffair, Paper, Topic, Thinker, Unit } from '@/payload-types'
import type { CACard, PaperCode, TopicChip, ThinkerChip } from './types'
import { relationDocs } from './types'
import { urls } from './urls'
import { formatDateIST } from './issue'

type TopicWithUnit = Topic & { unit?: number | (Unit & { paper?: number | Paper }) }
const isPaperCode = (value: unknown): value is PaperCode => value === 'P1' || value === 'P2'

export function mapTopicChip(topic: TopicWithUnit): TopicChip | null {
  if (!topic.slug || typeof topic.unit !== 'object' || !topic.unit || typeof topic.unit.paper !== 'object' || !topic.unit.paper || !isPaperCode(topic.unit.paper.code) || !topic.unit.slug) return null
  return { title: topic.title, slug: topic.slug, paper: topic.unit.paper.code, href: urls.topic(topic.unit.paper.slug ?? '', topic.unit.slug, topic.slug) }
}

export function mapThinkerChip(thinker: Thinker): ThinkerChip | null {
  return thinker.slug ? { name: thinker.name, slug: thinker.slug, href: urls.thinker(thinker.slug) } : null
}

export function mapCACard(doc: CurrentAffair): CACard {
  const date = formatDateIST(doc.date)
  const slug = doc.slug ?? ''
  return {
    id: doc.id, headline: doc.headline, slug, date, href: urls.article(date, slug), summary: doc.summary ?? null,
    paper: doc.paper ?? null,
    topics: relationDocs(doc.topics).map((topic) => mapTopicChip(topic as TopicWithUnit)).filter((item): item is TopicChip => item !== null),
    thinkers: relationDocs(doc.thinkers).map(mapThinkerChip).filter((item): item is ThinkerChip => item !== null),
    isAiGenerated: Boolean(doc.isAiGenerated), sourceNames: (doc.sources ?? []).map((source) => source.name),
  }
}
