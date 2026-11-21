import type { CollectionBeforeChangeHook } from 'payload'

import { hasRole, type Role } from '@/access/roles'

/**
 * The AI bot can never publish on its own (review-first mode).
 * Phase 2 adds `site-settings.autoPublish` to relax this for high-confidence items.
 */
export const forceBotDrafts: CollectionBeforeChangeHook = ({ data, req }) => {
  const user = req.user as { role?: Role } | null
  if (!hasRole(user, 'ai-bot')) return data
  if (data?._status !== 'published') return data
  req.payload.logger.warn('ai-bot tried to publish; saved as draft instead')
  return { ...data, _status: 'draft' }
}
