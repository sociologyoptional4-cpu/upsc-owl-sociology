import 'server-only'

import { cache } from 'react'

import { getPayloadClient } from '@/lib/queries'
import { buildGlossary, termsFromLayout, termsFromLexical, type GlossaryLetter } from './glossary-build'
import { urls } from './urls'

/** Published blog keyTerm blocks + topic keyTerms tables → A-Z glossary. */
export const getGlossary = cache(async (): Promise<GlossaryLetter[]> => {
  const payload = await getPayloadClient()
  const [posts, topics] = await Promise.all([
    payload.find({ collection: 'posts', where: { _status: { equals: 'published' } }, limit: 1000, depth: 0, draft: false, overrideAccess: false, select: { title: true, slug: true, content: true } }),
    payload.find({ collection: 'topics', where: { _status: { equals: 'published' } }, limit: 1000, depth: 2, draft: false, overrideAccess: false, select: { title: true, slug: true, layout: true, unit: true } }),
  ])
  const raw = [
    ...posts.docs.flatMap((post) => (post.slug ? termsFromLexical(post.content, { title: post.title, href: `/blog/${post.slug}` }) : [])),
    ...topics.docs.flatMap((topic) => {
      const unit = typeof topic.unit === 'object' && topic.unit ? topic.unit : null
      const paper = unit && typeof unit.paper === 'object' && unit.paper ? unit.paper : null
      if (!topic.slug || !unit?.slug || !paper?.slug) return []
      return termsFromLayout(topic.layout, { title: topic.title, href: urls.topic(paper.slug, unit.slug, topic.slug) })
    }),
  ]
  return buildGlossary(raw)
})
