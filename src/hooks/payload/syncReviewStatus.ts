import type { CollectionBeforeChangeHook } from 'payload'

/** Clears stale `pending` review state when an editor publishes a doc directly in the CMS form. */
export const syncReviewStatus: CollectionBeforeChangeHook = ({ data, originalDoc }) => {
  if (!data || data._status !== 'published') return data
  const current = data.reviewStatus ?? originalDoc?.reviewStatus
  if (current !== 'pending') return data
  return { ...data, reviewStatus: 'approved', rejectReason: null }
}
