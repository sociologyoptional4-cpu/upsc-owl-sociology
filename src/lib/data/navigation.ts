import 'server-only'

import { cache } from 'react'
import { getPayloadClient } from '@/lib/queries'
import type { Navigation } from './types'

export const getNavigation = cache(async (): Promise<Navigation> => {
  const payload = await getPayloadClient()
  const value = await payload.findGlobal({ slug: 'navigation', depth: 0, draft: false, overrideAccess: false })
  const links = (items: typeof value.header) => {
    const list = (items ?? []).filter((item) => item.label && item.href).map(({ label, href }) => ({ label, href }))
    return list.some((item) => item.href === '/blog') ? list : [...list, { label: 'Blog', href: '/blog' }]
  }
  return { header: links(value.header), footer: links(value.footer) }
})
