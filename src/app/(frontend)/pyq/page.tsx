import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PyqBankView } from '@/components/views/PyqBankView'
import { getPyqBank, parsePyqParams } from '@/lib/data/pyq'
import { getServerSideURL } from '@/lib/url'

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> }
export const metadata: Metadata = { title: 'PYQ Bank', description: 'UPSC Sociology Optional ke previous year questions, syllabus topic ke hisaab se.', alternates: { canonical: `${getServerSideURL()}/pyq` } }

export default async function PyqPage({ searchParams }: Props) {
  const raw = await searchParams
  const input = Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value]).filter(([, value]) => value !== undefined))
  const parsed = parsePyqParams(input)
  if (!parsed.success) notFound()
  const data = await getPyqBank(parsed.data)
  return <PyqBankView data={data} />
}
