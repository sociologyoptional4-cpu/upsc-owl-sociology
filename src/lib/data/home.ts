import 'server-only'

import { cache } from 'react'
import { getPayloadClient } from '@/lib/queries'
import { getCAList, getRecentIssues } from './current-affairs'
import { getSyllabusTree } from './syllabus'
import { getThinkers } from './thinkers'
import type { HomeData } from './types'

export const getHomeData = cache(async (): Promise<HomeData> => {
  const [list, issues, syllabus, thinkers] = await Promise.all([
    getCAList({ limit: 6 }), getRecentIssues(1), getSyllabusTree(), getThinkers(),
  ])
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 1, overrideAccess: true })
  const featured = settings.featuredThinker
  const featuredThinker = (typeof featured === 'object' && featured
    ? thinkers.find((thinker) => thinker.slug === featured.slug)
    : null) ?? thinkers[0] ?? null
  return { issue: issues[0] ?? null, latestCA: list.items, featuredThinker, syllabus }
})
