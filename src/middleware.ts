import { NextResponse, type NextRequest } from 'next/server'

import {
  checkSyllabusRateLimit,
  isBlockedScraperUa,
  isBulkSyllabusApiRequest,
  isVerifiedSearchBot,
} from '@/lib/security/syllabus-shield'

const SYLLABUS_API_PREFIXES = ['/api/topics', '/api/units', '/api/papers'] as const

function isSyllabusApiPath(pathname: string): boolean {
  return SYLLABUS_API_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

function resolveClientKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const ip = forwarded || request.headers.get('x-real-ip') || 'anon'
  const sid = request.cookies.get('upscowl_sid')?.value
  return sid ? `${ip}:${sid}` : ip
}

function handleSyllabusApi(request: NextRequest, pathname: string, ua: string | null): NextResponse {
  if (request.cookies.has('payload-token')) return NextResponse.next()
  if (isBlockedScraperUa(ua) || isBulkSyllabusApiRequest(pathname, request.nextUrl.searchParams)) {
    return NextResponse.json(
      { error: 'Bulk syllabus export is restricted. Read individual topics at https://owlupsc.com/syllabus.' },
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

  const { allowed, retryAfterSeconds } = checkSyllabusRateLimit(resolveClientKey(request), pathname)
  if (!allowed) {
    return new NextResponse(
      'Too Many Requests — You have accessed too many syllabus pages in 60 seconds. Please wait a moment and continue reading on Upscowl.',
      {
        status: 429,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Retry-After': String(retryAfterSeconds),
          'Cache-Control': 'no-store',
        },
      },
    )
  }

  const response = NextResponse.next()
  response.headers.set('X-Content-Protection', 'upscowl-shield')
  if (!request.cookies.has('upscowl_sid')) {
    response.cookies.set('upscowl_sid', crypto.randomUUID(), {
      httpOnly: true,
      sameSite: 'lax',
      path: '/syllabus',
      maxAge: 60 * 60 * 24,
    })
  }
  return response
}

export const config = {
  matcher: ['/syllabus/:path*', '/api/topics/:path*', '/api/units/:path*', '/api/papers/:path*'],
}
