import type { Metadata } from 'next'
import { getCAList, getRecentIssues } from '@/lib/data/current-affairs'
import { CAHubView } from '@/components/views/CAHubView'
import { PaperCode } from '@/lib/data/types'
import { caSearchSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600
type Search = { page?: string; limit?: string; paper?: string; topic?: string; thinker?: string; month?: string }
export async function generateMetadata(): Promise<Metadata> { return { title: 'Current Affairs', description: 'Roz ke current affairs, Sociology Optional syllabus se linked.', alternates: { canonical: '/current-affairs' } } }
export default async function CAHubPage({ searchParams }: { searchParams: Promise<Search> }) {
  const parsed = caSearchSchema.safeParse(await searchParams)
  const query = parsed.success ? parsed.data : {}
  const paper: PaperCode | undefined = query.paper
  const page = query.page ? Number(query.page) : 1
  const limit = query.limit ? Number(query.limit) : 12
  const [list, issues] = await Promise.all([getCAList({ page, limit, paper, topic: query.topic, thinker: query.thinker, month: query.month }), getRecentIssues(14)])
  return <CAHubView data={{ list, issues }} />
}
