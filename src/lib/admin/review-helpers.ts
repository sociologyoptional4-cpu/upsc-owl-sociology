import type { Payload } from 'payload'

/** Counts pending review items using the exact same criteria as /api/admin/review-queue. */
export async function countPendingReview(payload: Payload): Promise<{ ca: number; topics: number; total: number }> {
  const [ca, topics] = await Promise.all([
    payload.find({
      collection: 'current-affairs',
      where: { and: [{ reviewStatus: { equals: 'pending' } }, { _status: { equals: 'draft' } }] },
      limit: 1,
      depth: 0,
      draft: true,
      select: { reviewStatus: true },
      overrideAccess: true,
    }),
    payload.find({
      collection: 'topics',
      where: { and: [{ reviewStatus: { equals: 'pending' } }, { _status: { equals: 'draft' } }] },
      limit: 200,
      depth: 0,
      draft: true,
      select: { reviewStatus: true, _status: true, layout: true },
      overrideAccess: true,
    }),
  ])
  const topicCount = topics.docs.filter((doc) => doc.reviewStatus === 'pending' && Boolean(doc.layout?.length)).length
  return { ca: ca.totalDocs, topics: topicCount, total: ca.totalDocs + topicCount }
}

/** Counts pending, non-errored blog-organize jobs waiting in payload-jobs. */
export async function countQueuedBlogJobs(payload: Payload): Promise<number> {
  try {
    const res = await payload.find({
      collection: 'payload-jobs',
      where: {
        and: [
          { taskSlug: { equals: 'blog-organize' } },
          { completedAt: { exists: false } },
          { hasError: { not_equals: true } },
        ],
      },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    })
    return res.totalDocs
  } catch {
    return 0
  }
}
