import { NextResponse, type NextRequest } from 'next/server'

import {
  isBlockedScraperUa,
  isBulkSyllabusApiRequest,
  isVerifiedSearchBot,
} from '@/lib/security/syllabus-shield'

const SYLLABUS_API_PREFIXES = ['/api/topics', '/api/units', '/api/papers'] as const

function isSyllabusApiPath(pathname: string): boolean {
  return SYLLABUS_API_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

function handleSyllabusApi(request: NextRequest, pathname: string, ua: string | null): NextResponse {
  if (request.cookies.has('payload-token')) return NextResponse.next()
  if (pathname.startsWith('/api/topics') || isBlockedScraperUa(ua) || isBulkSyllabusApiRequest(pathname, request.nextUrl.searchParams)) {
    return NextResponse.json(
      { error: 'Syllabus notes API requires admin or Pro access at https://sociology4upsc.com/pro.' },
      { status: 403, headers: { 'Cache-Control': 'no-store' } },
    )
  }
  return NextResponse.next()
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl
  const ua = request.headers.get('user-agent')

  if (isSyllabusApiPath(pathname)) {
    return handleSyllabusApi(request, pathname, ua)
  }

  if (isVerifiedSearchBot(ua)) return NextResponse.next()

  if (isBlockedScraperUa(ua)) {
    return new NextResponse('Automated scraping of Upscowl syllabus content is prohibited.', {
      status: 403,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  }

  const response = NextResponse.next()
  response.headers.set('X-Content-Protection', 'upscowl-shield')
  return response
}

export const config = {
  matcher: ['/syllabus/:path*', '/api/topics/:path*', '/api/units/:path*', '/api/papers/:path*'],
}
