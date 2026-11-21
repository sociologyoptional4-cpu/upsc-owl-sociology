import { describe, expect, it } from 'vitest'

import { auditPost, auditSite, buildSeoReport, type PostSeoInput, type SiteSeoInput } from '@/lib/seo/audit'

const goodPost: PostSeoInput = {
  id: '1', title: 'Durkheim ka Suicide theory UPSC notes', slug: 'durkheim-suicide',
  seoTitle: 'Durkheim Suicide Theory: UPSC Sociology Notes', seoDescription: 'Durkheim ke suicide ke 4 prakar, anomie aur UPSC mein kaise pucha gaya, sab Hinglish mein ek jagah. Answer writing tips ke saath.',
  focusKeyword: 'Durkheim Suicide Theory', noindex: false, excerpt: 'x', wordCount: 900, topicCount: 1, tagCount: 3, faqCount: 2, hasCover: true,
}
const goodSite: SiteSeoInput = {
  siteUrl: 'https://upsc-owl-sociology.vercel.app', googleVerified: true, bingVerified: true, indexNow: true, cronSecret: true,
  publishedPosts: 5, draftPosts: 0, publishedTopicNotes: 98, totalTopics: 98,
}
const ids = (issues: { id: string }[]) => issues.map((i) => i.id)

describe('auditPost', () => {
  it('returns no issues for a well optimised post', () => {
    expect(auditPost(goodPost)).toEqual([])
  })

  it('flags a missing description as an error when excerpt is also missing', () => {
    const issues = auditPost({ ...goodPost, seoDescription: undefined, excerpt: undefined })
    expect(issues.find((i) => i.id === 'post.description.missing')?.severity).toBe('error')
  })

  it('falls back to the excerpt for description checks', () => {
    const issues = auditPost({ ...goodPost, seoDescription: undefined, excerpt: 'chhota' })
    expect(ids(issues)).toContain('post.description.length')
    expect(ids(issues)).not.toContain('post.description.missing')
  })

  it('warns when the title is longer than 60 chars', () => {
    expect(ids(auditPost({ ...goodPost, seoTitle: 'a'.repeat(61) }))).toContain('post.title.length')
  })

  it('warns when the focus keyword is absent from the title', () => {
    expect(ids(auditPost({ ...goodPost, focusKeyword: 'Weber bureaucracy' }))).toContain('post.keyword.title')
  })

  it('matches the keyword case-insensitively', () => {
    expect(ids(auditPost({ ...goodPost, focusKeyword: 'durkheim SUICIDE theory' }))).not.toContain('post.keyword.title')
  })

  it('warns on noindex, thin content and missing syllabus link', () => {
    const issues = ids(auditPost({ ...goodPost, noindex: true, wordCount: 120, topicCount: 0 }))
    expect(issues).toEqual(expect.arrayContaining(['post.noindex', 'post.thin', 'post.topics']))
  })
})

describe('auditSite', () => {
  it('returns no issues when everything is set', () => {
    expect(auditSite(goodSite)).toEqual([])
  })

  it('errors when there are no published posts', () => {
    expect(auditSite({ ...goodSite, publishedPosts: 0 }).find((i) => i.id === 'site.posts.none')?.severity).toBe('error')
  })

  it('flags missing search engine verification and IndexNow key', () => {
    const issues = ids(auditSite({ ...goodSite, googleVerified: false, bingVerified: false, indexNow: false }))
    expect(issues).toEqual(expect.arrayContaining(['site.google', 'site.bing', 'site.indexnow']))
  })

  it('errors on a localhost or missing SITE_URL', () => {
    expect(ids(auditSite({ ...goodSite, siteUrl: undefined }))).toContain('site.url')
    expect(ids(auditSite({ ...goodSite, siteUrl: 'http://localhost:3000' }))).toContain('site.url')
  })
})

describe('buildSeoReport', () => {
  it('scores 100 with no issues and lowers it per severity', () => {
    expect(buildSeoReport(goodSite, [goodPost]).score).toBe(100)
    const worse = buildSeoReport({ ...goodSite, publishedPosts: 0 }, [])
    expect(worse.score).toBeLessThan(100)
    expect(worse.counts.error).toBe(1)
  })

  it('sorts issues most severe first and never goes below 0', () => {
    const bad: PostSeoInput = { ...goodPost, seoTitle: 'a'.repeat(80), seoDescription: undefined, excerpt: undefined, noindex: true }
    const report = buildSeoReport({ ...goodSite, googleVerified: false }, Array.from({ length: 30 }, (_, n) => ({ ...bad, id: String(n) })))
    expect(report.issues[0].severity).toBe('error')
    expect(report.score).toBe(0)
  })
})
