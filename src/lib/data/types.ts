import type { CurrentAffair, Topic, Thinker } from '@/payload-types'
import type { MindMapData, PyqAnswerItem, UnitInfographic, UnitStudyStep } from '@/lib/notes/notebook-types'
import type { BlogCard, ResolvedBlogBlocks, TocItem } from './blog-types'

export * from './blog-types'
export type { MindMapBranch, MindMapColor, MindMapData, PyqAnswerItem, UnitInfographic, UnitStudyStep } from '@/lib/notes/notebook-types'

export type PaperCode = 'P1' | 'P2'
export type TopicChip = { title: string; slug: string; href: string; paper: PaperCode }
export type ThinkerChip = { name: string; slug: string; href: string }
export type CACard = { id: number; headline: string; slug: string; date: string; href: string; summary: string | null; paper: PaperCode | 'Both' | null; topics: TopicChip[]; thinkers: ThinkerChip[]; isAiGenerated: boolean; sourceNames: string[] }
export type CAArticle = CACard & { sources: { name: string; url: string }[]; layout: NonNullable<CurrentAffair['layout']>; prev: { href: string; headline: string } | null; next: { href: string; headline: string } | null }
export type Paginated<T> = { items: T[]; page: number; totalPages: number; total: number }
export type IssueSummary = { date: string; number: number; count: number; href: string }
export type SyllabusTopic = { title: string; slug: string; href: string; caCount: number; summary?: string | null; pyqCount?: number; hasNotes?: boolean }
export type SyllabusUnit = { number: number; title: string; slug: string; href: string; topics: SyllabusTopic[] }
export type SyllabusPaper = { code: PaperCode; title: string; slug: string; href: string; units: SyllabusUnit[] }
export type TopicDetail = { title: string; slug: string; href: string; summary: string | null; paper: PaperCode; breadcrumbs: { label: string; href: string }[]; layout: NonNullable<Topic['layout']>; thinkers: ThinkerChip[]; relatedTopics: TopicChip[]; latestCA: CACard[]; caCount: number; posts?: BlogCard[]; notebookContent?: unknown; resolvedBlocks?: ResolvedBlogBlocks; toc?: TocItem[]; mindMap?: MindMapData | null; pyqAnswers?: PyqAnswerItem[]; prevTopic?: { title: string; href: string } | null; nextTopic?: { title: string; href: string } | null }
export type ThinkerCard = { name: string; slug: string; href: string; era: string | null; portrait: { url: string; alt: string; width: number; height: number } | null; keyIdeas: string[] }
export type ThinkerDetail = ThinkerCard & { layout: NonNullable<Thinker['layout']>; latestCA: CACard[]; topics: TopicChip[] }
export type HomeData = { issue: IssueSummary | null; latestCA: CACard[]; featuredThinker: ThinkerCard | null; syllabus: SyllabusPaper[] }
export type Navigation = { header: { label: string; href: string }[]; footer: { label: string; href: string }[] }
export type PaperPageData = SyllabusPaper
export type UnitPageData = { paper: { code: PaperCode; title: string; slug: string; href: string }; unit: SyllabusUnit; overview?: string | null; studySequence?: UnitStudyStep[]; mindMap?: MindMapData | null; infographics?: UnitInfographic[]; totalPyqs?: number }
export type ReviewItem = { id: number; kind: 'ca' | 'topic'; headline: string; date: string; relevance: number | null; summary: string | null; sources: { name: string; url: string }[]; topics: TopicChip[]; thinkers: ThinkerChip[]; model: string | null; promptVersion: string | null; createdAt: string; previewHref: string }
export type TodayStats = { lastRun: { startedAt: string; finishedAt: string | null; status: string; counts: Record<string, number>; costUsd: number; errors: { stage: string; message: string }[] } | null; pendingReview: number; publishedToday: number; costLast7Days: { date: string; usd: number }[] }
export type CoverageRow = { paper: 'P1' | 'P2'; unitTitle: string; topicTitle: string; topicHref: string; caCount: number; hasNotes: boolean; lastCaDate: string | null }
export type DigestView = { type: 'weekly' | 'monthly'; key: string; title: string; range: { from: string; to: string }; intro: string; groups: { topic: TopicChip; items: CACard[] }[]; pdfUrl: string | null; prev: string | null; next: string | null }
export type QuizView = { date: string; items: { question: string; options: string[]; answerIndex: number; explanation: string; caHref: string }[] }
export type PyqItem = { id: number; year: number; paper: PaperCode; qno: string; marks: number; question: string; topics: TopicChip[]; thinkers: ThinkerChip[] }
export type PyqBankData = { items: PyqItem[]; total: number; page: number; totalPages: number; filters: { paper?: PaperCode; topic?: string; year?: number }; facets: { years: { year: number; count: number }[]; topics: { slug: string; title: string; count: number }[] } }

export function relationDocs<T extends { id: number }>(items: (number | T)[] | null | undefined): T[] {
  return (items ?? []).filter((item): item is T => typeof item === 'object' && item !== null)
}
