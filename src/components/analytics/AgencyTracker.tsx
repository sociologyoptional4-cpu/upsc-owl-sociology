'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

import { captureUtmParams } from '@/lib/analytics/agency-tracker'

function UtmPreserverInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchString = searchParams.toString()

  useEffect(() => {
    captureUtmParams(searchString ? `?${searchString}` : window.location.search)
  }, [pathname, searchString])

  return null
}

/** Preserves UTM query attribution across client-side navigations via sessionStorage. */
export function AgencyUtmPreserver() {
  return (
    <Suspense fallback={null}>
      <UtmPreserverInner />
    </Suspense>
  )
}
