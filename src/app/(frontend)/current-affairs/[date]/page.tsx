import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIssue, getRecentIssues } from '@/lib/data/current-affairs'
import { IssueView } from '@/components/views/IssueView'
import { dateParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600
type Props = { params: Promise<{ date: string }> }
export async function generateStaticParams() { return (await getRecentIssues(30)).map(({ date }) => ({ date })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { date } = await params; if (!dateParamSchema.safeParse(date).success) return {}; return { title: `Issue · ${date}`, description: `Sociology current affairs issue for ${date}.`, alternates: { canonical: `/current-affairs/${date}` } } }
export default async function IssuePage({ params }: Props) { const { date } = await params; if (!dateParamSchema.safeParse(date).success) notFound(); const data = await getIssue(date); if (!data) notFound(); return <IssueView data={data} /> }
