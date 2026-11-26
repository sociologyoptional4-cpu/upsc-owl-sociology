import { NextResponse, type NextRequest } from 'next/server'

import {
  isBlockedScraperUa,
  isProtectedContentApiPath,
  isUnauthorizedHotlink,
  isVerifiedSearchBot,
} from '@/lib/security/syllabus-shield'

const ASSET_PATH_PREFIXES = ['/assets/', '/api/media/file/'] as const

function isAssetPath(pathname: string): boolean {
  return ASSET_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

function handleProtectedApi(request: NextRequest, ua: string | null): NextResponse {
  if (request.cookies.has('payload-token')) return NextResponse.next()
  if (isBlockedScraperUa(ua) || !request.cookies.has('payload-token')) {
    return NextResponse.json(
      { error: 'Protected content API requires admin access. Read online at https://sociology4upsc.com.' },
      { status: 403, headers: { 'Cache-Control': 'no-store' } },
    )
  }
  return NextResponse.next()
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl
  const ua = request.headers.get('user-agent')

  if (isProtectedContentApiPath(pathname)) {
    return handleProtectedApi(request, ua)
  }

  if (isAssetPath(pathname)) {
    const referer = request.headers.get('referer')
    const host = request.headers.get('host')
    if (isUnauthorizedHotlink(referer, host)) {
      return new NextResponse('Direct asset hotlinking is prohibited.', {
        status: 403,
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
      })
    }
    return NextResponse.next()
  }

  if (isVerifiedSearchBot(ua)) return NextResponse.next()

  if (isBlockedScraperUa(ua)) {
    return new NextResponse('Automated cloning or scraping of UPSC OWL Sociology content is prohibited.', {
      status: 403,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  }

  const response = NextResponse.next()
  response.headers.set('X-Content-Protection', 'upscowl-shield')
  return response
}

export const config = {
  matcher: [
    '/syllabus/:path*',
    '/blog/:path*',
    '/current-affairs/:path*',
    '/thinkers/:path*',
    '/pyq/:path*',
    '/glossary/:path*',
    '/assets/:path*',
    '/api/media/file/:path*',
    '/api/topics/:path*',
    '/api/units/:path*',
    '/api/papers/:path*',
    '/api/posts/:path*',
    '/api/current-affairs/:path*',
    '/api/pyqs/:path*',
    '/api/thinkers/:path*',
    '/api/pages/:path*',
    '/api/digests/:path*',
    '/api/quizzes/:path*',
    '/api/graphql/:path*',
    '/api/graphql-playground/:path*',
  ],
}
