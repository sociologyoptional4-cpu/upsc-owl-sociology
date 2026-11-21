import type { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { getPublishedPageByPath } from '@/lib/queries'
import { getHomeData } from '@/lib/data/home'
import { HomeView } from '@/components/views/HomeView'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedPageByPath('home')
  return page?.seo?.description ? { description: page.seo.description } : {}
}

/** Homepage = the CMS page with slug "home". Until it exists, a designed placeholder shows. */
export default async function HomePage() {
  const page = await getPublishedPageByPath('home')
  if (!page) return <HomeView data={await getHomeData()} />
  return <RenderBlocks blocks={page.layout} />
}
