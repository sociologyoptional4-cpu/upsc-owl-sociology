import 'server-only'

import { cache } from 'react'
import { getPayloadClient } from '@/lib/queries'
import { resolveNav } from './nav-defaults'
import type { Navigation } from './types'

export const getNavigation = cache(async (): Promise<Navigation> => {
  const payload = await getPayloadClient()
  const value = await payload.findGlobal({ slug: 'navigation', depth: 0, draft: false, overrideAccess: false })
  return { header: resolveNav(value.header), footer: resolveNav(value.footer) }
})
