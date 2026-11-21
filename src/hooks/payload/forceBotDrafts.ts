import type { CollectionBeforeChangeHook } from 'payload'

import { hasRole, type Role } from '@/access/roles'

type Settings = { autoPublish?: boolean | null; autoPublishMinRelevance?: number | null }

/** The bot publishes only after endpoint validation and an explicit settings threshold. */
export const forceBotDrafts: CollectionBeforeChangeHook = async ({ data, req }) => {
  const user = req.user as { role?: Role } | null
  if (!hasRole(user, 'ai-bot') || data?._status !== 'published') return data
  const validated = req.context?.ingestValidated === true
  const relevance = typeof data.aiMeta === 'object' && data.aiMeta !== null && 'relevance' in data.aiMeta
    ? (data.aiMeta as { relevance?: unknown }).relevance
    : null
  let settings: Settings = {}
  try {
    settings = await req.payload.findGlobal({ slug: 'site-settings', overrideAccess: true }) as Settings
  } catch {
    // Fail closed when settings are unavailable.
  }
  const threshold = settings.autoPublishMinRelevance ?? 0.8
  if (validated && settings.autoPublish === true && typeof relevance === 'number' && relevance >= threshold) return { ...data }
  req.payload.logger.warn('ai-bot publish blocked by review safeguards')
  return { ...data, _status: 'draft' }
}
