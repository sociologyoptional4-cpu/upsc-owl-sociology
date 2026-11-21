import { timingSafeEqual } from 'node:crypto'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@/payload.config'

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const secret = url.searchParams.get('secret') ?? ''
  const expected = process.env.PREVIEW_SECRET ?? ''
  if (!expected || secret.length !== expected.length || !timingSafeEqual(Buffer.from(secret), Buffer.from(expected))) return new Response('Unauthorized', { status: 401 })
  if (url.searchParams.get('collection') !== 'current-affairs') return new Response('Unsupported collection', { status: 400 })
  const id = Number(url.searchParams.get('id'))
  if (!Number.isSafeInteger(id) || id < 1) return new Response('Invalid id', { status: 400 })
  const payload = await getPayload({ config })
  const doc = await payload.findByID({ collection: 'current-affairs', id, draft: true, overrideAccess: true })
  if (!doc.slug) return new Response('Article has no slug', { status: 404 })
  const date = new Date(doc.date).toISOString().slice(0, 10)
  ;(await draftMode()).enable()
  redirect(`/current-affairs/${date}/${doc.slug}`)
}
