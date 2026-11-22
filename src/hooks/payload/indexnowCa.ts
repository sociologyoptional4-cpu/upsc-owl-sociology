import type { CollectionAfterChangeHook } from 'payload'

import { pingIndexNow } from '@/lib/blog/indexnow'
import { getServerSideURL } from '@/lib/url'

/** First publish of a current affair → IndexNow ping (Bing/Yandex). Google finds it via the sitemap. Fails soft. */
export const pingCurrentAffair: CollectionAfterChangeHook = async ({ doc, previousDoc, req, context }) => {
  if (doc._status !== 'published' || previousDoc?._status === 'published' || context?.skipExternal || !doc.slug) return doc
  const date = new Date(doc.date).toISOString().slice(0, 10)
  const base = getServerSideURL()
  try { await pingIndexNow([`${base}/current-affairs/${date}/${doc.slug}`, `${base}/current-affairs`]) } catch (error) {
    req.payload.logger.warn(`IndexNow (current affair) failed: ${error instanceof Error ? error.message : 'unknown'}`)
  }
  return doc
}
