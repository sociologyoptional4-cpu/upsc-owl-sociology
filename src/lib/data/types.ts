import type { CurrentAffair, Topic, Thinker } from '@/payload-types'

export type PaperCode = 'P1' | 'P2'
export type TopicChip = { title: string; slug: string; href: string; paper: PaperCode }
export type ThinkerChip = { name: string; slug: string; href: string }
export type CACard = { id: number; headline: string; slug: string; date: string; href: string; summary: string | null; paper: PaperCode | 'Both' | null; topics: TopicChip[]; thinkers: ThinkerChip[]; isAiGenerated: boolean; sourceNames: string[] }
export type CAArticle = CACard & { sources: { name: string; url: string }[]; layout: NonNullable<CurrentAffair['layout']>; prev: { href: string; headline: string } | null; next: { href: string; headline: string } | null }
export type Paginated<T> = { items: T[]; page: number; totalPages: number; total: number }
export type IssueSummary = { date: string; number: number; count: number; href: string }
export type SyllabusTopic = { title: string; slug: string; href: string; caCount: number }
export type SyllabusUnit = { number: number; title: string; slug: string; href: string; topics: SyllabusTopic[] }
export type SyllabusPaper = { code: PaperCode; title: string; slug: string; href: string; units: SyllabusUnit[] }
export type TopicDetail = { title: string; slug: string; href: string; summary: string | null; paper: PaperCode; breadcrumbs: { label: string; href: string }[]; layout: NonNullable<Topic['layout']>; thinkers: ThinkerChip[]; relatedTopics: TopicChip[]; latestCA: CACard[]; caCount: number }
export type ThinkerCard = { name: string; slug: string; href: string; era: string | null; portrait: { url: string; alt: string; width: number; height: number } | null; keyIdeas: string[] }
export type ThinkerDetail = ThinkerCard & { layout: NonNullable<Thinker['layout']>; latestCA: CACard[]; topics: TopicChip[] }
export type HomeData = { issue: IssueSummary | null; latestCA: CACard[]; featuredThinker: ThinkerCard | null; syllabus: SyllabusPaper[] }
export type Navigation = { header: { label: string; href: string }[]; footer: { label: string; href: string }[] }
export type PaperPageData = SyllabusPaper
export type UnitPageData = { paper: { code: PaperCode; title: string; slug: string; href: string }; unit: SyllabusUnit }

export function relationDocs<T extends { id: number }>(items: (number | T)[] | null | undefined): T[] {
  return (items ?? []).filter((item): item is T => typeof item === 'object' && item !== null)
}
