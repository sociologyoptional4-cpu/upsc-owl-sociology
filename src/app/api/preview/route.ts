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
  const collection = url.searchParams.get('collection')
  if (collection !== 'current-affairs' && collection !== 'topics' && collection !== 'posts') return new Response('Unsupported collection', { status: 400 })
  const id = Number(url.searchParams.get('id'))
  if (!Number.isSafeInteger(id) || id < 1) return new Response('Invalid id', { status: 400 })
  const payload = await getPayload({ config })
  if (collection === 'topics') {
    const doc = await payload.findByID({ collection: 'topics', id, draft: true, depth: 2, overrideAccess: true })
    const unit = typeof doc.unit === 'object' ? doc.unit : null
    const paper = unit && typeof unit.paper === 'object' ? unit.paper : null
    if (!doc.slug || !unit?.slug || !paper?.slug) return new Response('Topic route is incomplete', { status: 404 })
    ;(await draftMode()).enable()
    redirect(`/syllabus/${paper.slug}/${unit.slug}/${doc.slug}`)
  }
  if (collection === 'posts') {
    const post = await payload.findByID({ collection: 'posts', id, draft: true, depth: 0, overrideAccess: true })
    if (!post.slug) return new Response('Post has no slug', { status: 404 })
    ;(await draftMode()).enable()
    redirect(`/blog/${post.slug}`)
  }
  const doc = await payload.findByID({ collection: 'current-affairs', id, draft: true, overrideAccess: true })
  if (!doc.slug) return new Response('Article has no slug', { status: 404 })
  const date = new Date(doc.date).toISOString().slice(0, 10)
  ;(await draftMode()).enable()
  redirect(`/current-affairs/${date}/${doc.slug}`)
}
