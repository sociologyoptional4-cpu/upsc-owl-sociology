import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/url', () => ({
  getServerSideURL: () => 'https://sociology4upsc.com',
}))

import type { BlogPostDetail, TopicDetail } from '@/lib/data/types'
import { blogPostingJsonLd, breadcrumbJsonLd, syllabusTopicJsonLd } from '@/lib/seo/jsonld'
import { buildBlogKeywords, buildSiteKeywords } from '@/lib/seo/keywords'

const samplePost: BlogPostDetail = {
  id: 1,
  title: 'Karl Marx Alienation in India’s Gig Economy',
  slug: 'karl-marx-alienation-gig-economy-upsc',
  href: '/blog/karl-marx-alienation-gig-economy-upsc',
  excerpt: 'Marxian alienation applied to delivery riders and IT workers in India.',
  publishedAt: '2026-11-25T06:00:00.000Z',
  updatedAt: '2026-11-26T06:00:00.000Z',
  readingTime: 6,
  featured: false,
  papers: ['P1', 'P2'],
  category: { id: 1, title: 'Thinkers', slug: 'thinkers', href: '/blog/category/thinkers', color: 'yellow', description: null },
  tags: [{ id: 1, title: 'Karl Marx', slug: 'karl-marx', href: '/blog/tag/karl-marx', color: 'yellow' }],
  cover: null,
  author: null,
  content: {},
  resolved: { thinkers: {}, topics: {}, pyqs: {}, media: {} },
  toc: [],
  thinkers: [{ name: 'Karl Marx', slug: 'karl-marx', href: '/thinkers/karl-marx' }],
  topics: [{ title: 'Social Organisation of Work', slug: 'social-organisation-of-work', href: '/syllabus/paper-1/works-and-economic-life/social-organisation-of-work', paper: 'P1' }],
  relatedTopics: [{ title: 'Social Organisation of Work', slug: 'social-organisation-of-work', href: '/syllabus/paper-1/works-and-economic-life/social-organisation-of-work', paper: 'P1' }],
  relatedPosts: [],
  relatedPyqs: [],
  attachments: [],
  series: null,
  faq: [],
  quiz: [],
  seo: {
    title: 'Karl Marx Alienation & Gig Work | UPSC Sociology',
    description: 'Marxian alienation theory explained with Indian gig economy data.',
    focusKeyword: 'Karl Marx Alienation',
    canonical: null,
    ogImageUrl: null,
    noindex: false,
  },
}

describe('SEO keywords and rich JSON-LD helpers', () => {
  it('builds deduplicated blog & site keywords including competitor core phrases', () => {
    const kws = buildBlogKeywords(samplePost)
    expect(kws[0]).toBe('Karl Marx Alienation')
    expect(kws).toContain('UPSC Sociology Paper 1')
    expect(kws).toContain('UPSC Sociology Optional')
    expect(new Set(kws.map((k) => k.toLowerCase())).size).toBe(kws.length)
    expect(buildSiteKeywords()).toContain('Sociology Optional Notes')
  })

  it('outputs absolute HTTPS URLs in BreadcrumbList JSON-LD', () => {
    const ld = breadcrumbJsonLd([
      { label: 'Blog', href: '/blog' },
      { label: 'Thinkers', href: '/blog/category/thinkers' },
    ])
    expect(ld.itemListElement[0]!.item).toBe('https://sociology4upsc.com/blog')
    expect(ld.itemListElement[1]!.item).toBe('https://sociology4upsc.com/blog/category/thinkers')
  })

  it('enriches Article + BlogPosting JSON-LD with Speakable, wordCount, timeRequired, logo, and about entities', () => {
    const ld = blogPostingJsonLd(samplePost)
    expect(ld['@type']).toEqual(['Article', 'BlogPosting'])
    expect(ld.inLanguage).toBe('en-IN')
    expect(ld.isAccessibleForFree).toBe(true)
    expect(ld.timeRequired).toBe('PT6M')
    expect(ld.wordCount).toBe(1320)
    expect(ld.publisher.logo.url).toBe('https://sociology4upsc.com/opengraph-image')
    expect(ld.speakable.cssSelector).toContain('.blog-lead-excerpt')
    expect(ld.about?.length).toBe(2)
  })

  it('marks paywalled syllabus topics with Google Flexible Sampling hasPart selector', () => {
    const topic = {
      title: 'Social Organisation of Work',
      slug: 'social-organisation-of-work',
      href: '/syllabus/paper-1/works-and-economic-life/social-organisation-of-work',
      summary: 'Types of work and alienation.',
      paper: 'P1',
      breadcrumbs: [],
      layout: [],
      thinkers: [{ name: 'Karl Marx', slug: 'karl-marx', href: '/thinkers/karl-marx' }],
      relatedTopics: [],
      latestCA: [],
      caCount: 0,
    } satisfies TopicDetail

    const freeLd = syllabusTopicJsonLd(topic, false)
    expect(freeLd.isAccessibleForFree).toBe(true)
    expect('hasPart' in freeLd).toBe(false)

    const lockedLd = syllabusTopicJsonLd(topic, true)
    expect(lockedLd.isAccessibleForFree).toBe(false)
    expect(lockedLd.hasPart).toEqual([{ '@type': 'WebPageElement', isAccessibleForFree: false, cssSelector: '#unlock-pro' }])
  })
})
