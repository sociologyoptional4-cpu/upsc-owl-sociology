import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSyllabusTree, getTopicDetail, getTopicStaticParams } from '@/lib/data/syllabus'
import { PaperView } from '@/components/views/PaperView'
import { UnitView } from '@/components/views/UnitView'
import { TopicView } from '@/components/views/TopicView'
import { paperRouteSchema } from '@/lib/data/route-schemas'
import type { UnitPageData } from '@/lib/data/types'

export const revalidate = 3600
type Props = { params: Promise<{ paper: string; path?: string[] }> }
export async function generateStaticParams() { return getTopicStaticParams() }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = paperRouteSchema.safeParse(await params)
  if (!parsed.success || (parsed.data.path?.length ?? 0) > 2) return {}
  const tree = await getSyllabusTree()
  const paper = tree.find((item) => item.slug === parsed.data.paper)
  if (!paper) return {}
  const path = parsed.data.path ?? []
  const unit = path.length ? paper.units.find((item) => item.slug === path[0]) : undefined
  const topic = path.length === 2 ? unit?.topics.find((item) => item.slug === path[1]) : undefined
  const item = path.length === 0 ? paper : path.length === 1 ? unit : topic
  return item ? { title: item.title, description: 'UPSC Sociology Optional syllabus and study notes.', alternates: { canonical: item.href } } : {}
}
export default async function PaperRoute({ params }: Props) {
  const parsed = paperRouteSchema.safeParse(await params)
  if (!parsed.success) notFound()
  const { paper: paperSlug, path = [] } = parsed.data
  if (path.length > 2) notFound()
  const tree = await getSyllabusTree()
  const paper = tree.find((item) => item.slug === paperSlug)
  if (!paper) notFound()
  if (path.length === 0) return <PaperView data={paper} />
  const unit = paper.units.find((item) => item.slug === path[0])
  if (!unit) notFound()
  if (path.length === 1) return <UnitView data={{ paper: { code: paper.code, title: paper.title, slug: paper.slug, href: paper.href }, unit } satisfies UnitPageData} />
  const topic = await getTopicDetail(paperSlug, path[0], path[1])
  if (!topic) notFound()
  return <TopicView data={topic} />
}
