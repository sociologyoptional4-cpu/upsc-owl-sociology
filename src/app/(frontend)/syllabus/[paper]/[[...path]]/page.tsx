import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSyllabusTree, getTopicDetail, getTopicStaticParams, getUnitPageData } from '@/lib/data/syllabus'
import { PaperView } from '@/components/views/PaperView'
import { UnitView } from '@/components/views/UnitView'
import { TopicView } from '@/components/views/TopicView'
import { paperRouteSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600
type Props = { params: Promise<{ paper: string; path?: string[] }> }

export async function generateStaticParams() {
  return getTopicStaticParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = paperRouteSchema.safeParse(await params)
  if (!parsed.success || (parsed.data.path?.length ?? 0) > 2) return {}
  const { paper: paperSlug, path = [] } = parsed.data
  if (path.length === 1) {
    const unitData = await getUnitPageData(paperSlug, path[0]!)
    if (!unitData) return {}
    return {
      title: unitData.unit.title,
      description: unitData.overview ?? 'UPSC Sociology Optional unit guide, mind map and chapter notes.',
      alternates: { canonical: unitData.unit.href },
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
  return topic ? { title: topic.title, description: topic.summary ?? 'UPSC Sociology Optional syllabus and study notes.', alternates: { canonical: topic.href } } : {}
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
  const topic = await getTopicDetail(paperSlug, path[0]!, path[1]!)
  if (!topic) notFound()
  return <TopicView data={topic} />
}
