import 'server-only'

import { getPayload } from 'payload'
import { cache } from 'react'

import config from '@payload-config'
import type { Page } from '@/payload-types'

export const getPayloadClient = cache(async () => getPayload({ config }))

/** Published page by its full path ("about", "guides/answer-writing", "home"). */
export const getPublishedPageByPath = cache(async (path: string): Promise<Page | null> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    where: { and: [{ path: { equals: path } }, { _status: { equals: 'published' } }] },
    limit: 1,
    depth: 1,
    draft: false,
    overrideAccess: false,
  })
  return result.docs[0] ?? null
})

/** Paths to prerender at build time. New pages still work on demand (dynamicParams). */
export async function getPrerenderPagePaths(limit = 200): Promise<string[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    where: { _status: { equals: 'published' } },
    limit,
    depth: 0,
    select: { path: true },
    overrideAccess: false,
  })
  return result.docs.map((doc) => doc.path).filter((p): p is string => Boolean(p) && p !== 'home')
}
