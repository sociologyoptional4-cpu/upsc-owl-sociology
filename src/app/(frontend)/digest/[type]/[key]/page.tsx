import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DigestView } from '@/components/views/DigestView'
import { getDigestView } from '@/lib/data/learning'

type Props = { params: Promise<{ type: string; key: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, key } = await params
  const data = await getDigestView(type, key)
  return data ? { title: data.title, description: data.intro.slice(0, 160), alternates: { canonical: `/digest/${type}/${key}` } } : {}
}

export default async function DigestPage({ params }: Props) {
  const { type, key } = await params
  const data = await getDigestView(type, key)
  if (!data) notFound()
  return <DigestView data={data} />
}
