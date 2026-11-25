import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProAccessStatus } from '@/lib/billing/subscriptions'
import { getSyllabusTree, getTopicDetail, getUnitPageData } from '@/lib/data/syllabus'
import { PaperView } from '@/components/views/PaperView'
import { UnitView } from '@/components/views/UnitView'
import { TopicView } from '@/components/views/TopicView'
import { paperRouteSchema } from '@/lib/data/route-schemas'

export const dynamic = 'force-dynamic'
type Props = { params: Promise<{ paper: string; path?: string[] }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = paperRouteSchema.safeParse(await params)
  if (!parsed.success || (parsed.data.path?.length ?? 0) > 2) return {}
  const { paper: paperSlug, path = [] } = parsed.data
  if (path.length === 1) {
    const unitData = await getUnitPageData(paperSlug, path[0]!)
    if (!unitData) return {}
    const description = unitData.overview ?? 'UPSC Sociology Optional unit guide, mind map and chapter notes.'
    return {
      title: unitData.unit.title,
      description,
      alternates: { canonical: unitData.unit.href },
      openGraph: {
        title: unitData.unit.title,
        description,
        url: unitData.unit.href,
        type: 'article',
        ...(unitData.createdAt ? { publishedTime: unitData.createdAt } : {}),
        ...(unitData.updatedAt ? { modifiedTime: unitData.updatedAt } : {}),
      },
    }
  }
  const tree = await getSyllabusTree()
  const paper = tree.find((item) => item.slug === paperSlug)
  if (!paper) return {}
  if (path.length === 0) {
    return { title: paper.title, description: 'UPSC Sociology Optional syllabus and study notes.', alternates: { canonical: paper.href } }
  }
  const unit = paper.units.find((item) => item.slug === path[0])
  const topic = unit?.topics.find((item) => item.slug === path[1])
  if (!topic) return {}
  const description = topic.summary ?? 'UPSC Sociology Optional syllabus and study notes.'
  return {
    title: topic.title,
    description,
    alternates: { canonical: topic.href },
    openGraph: {
      title: topic.title,
      description,
      url: topic.href,
      type: 'article',
    },
  }
}

export default async function PaperRoute({ params }: Props) {
  const parsed = paperRouteSchema.safeParse(await params)
  if (!parsed.success) notFound()
  const { paper: paperSlug, path = [] } = parsed.data
  if (path.length > 2) notFound()
  if (path.length === 0) {
    const tree = await getSyllabusTree()
    const paper = tree.find((item) => item.slug === paperSlug)
    if (!paper) notFound()
    return <PaperView data={paper} />
  }
  if (path.length === 1) {
    const unitData = await getUnitPageData(paperSlug, path[0]!)
    if (!unitData) notFound()
    return <UnitView data={unitData} />
  }
  const tree = await getSyllabusTree()
  const unit = tree.find((item) => item.slug === paperSlug)?.units.find((item) => item.slug === path[0])
  if (!unit?.isLocked) {
    const topic = await getTopicDetail(paperSlug, path[0]!, path[1]!)
    if (!topic) notFound()
    return <TopicView data={topic} />
  }
  const access = await getProAccessStatus()
  const topic = await getTopicDetail(paperSlug, path[0]!, path[1]!, !access.unlocked)
  if (!topic) notFound()
  return <TopicView data={topic} isPaywalled={!access.unlocked} />
}
