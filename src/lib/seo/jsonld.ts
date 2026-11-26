import type { BlogAuthor, BlogPostDetail, CAArticle, TopicDetail, UnitPageData } from '@/lib/data/types'
import { getServerSideURL } from '@/lib/url'
import { buildBlogKeywords } from './keywords'

export const SITE_NAME = 'UPSC OWL Sociology'

function toAbsUrl(href: string, base: string): string {
  return new URL(href, base).toString()
}

export function articleJsonLd(article: CAArticle) {
  const base = getServerSideURL()
  const fullUrl = toAbsUrl(article.href, base)
  const about = [
    ...article.topics.map((t) => ({ '@type': 'Thing', name: t.title, url: toAbsUrl(t.href, base) })),
    ...article.thinkers.map((t) => ({ '@type': 'Person', name: t.name, url: toAbsUrl(t.href, base) })),
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.summary ?? article.headline,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    url: fullUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': fullUrl },
    author: { '@type': 'Organization', name: SITE_NAME, url: base },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: base,
      logo: { '@type': 'ImageObject', url: `${base}/opengraph-image` },
    },
    keywords: [
      article.paper === 'P1' ? 'UPSC Sociology Paper 1' : article.paper === 'P2' ? 'UPSC Sociology Paper 2' : 'UPSC Sociology Optional',
      'UPSC Sociology Current Affairs',
      ...article.topics.map((t) => t.title),
      ...article.thinkers.map((t) => t.name),
    ].join(', '),
    ...(about.length > 0 ? { about } : {}),
    citation: article.sources.map((source) => ({ '@type': 'CreativeWork', name: source.name, url: source.url })),
  }
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: toAbsUrl(item.href, base),
    })),
  }
}

export function personJsonLd(author: BlogAuthor) {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: toAbsUrl(author.href, base),
    ...(author.bio ? { description: author.bio } : {}),
    ...(author.avatar ? { image: toAbsUrl(author.avatar.url, base) } : {}),
  }
}

export function blogPostingJsonLd(post: BlogPostDetail) {
  const base = getServerSideURL()
  const url = toAbsUrl(post.href, base)
  const keywords = buildBlogKeywords(post).join(', ')
  const about = [
    ...post.relatedTopics.map((t) => ({ '@type': 'Thing', name: t.title, url: toAbsUrl(t.href, base) })),
    ...post.thinkers.map((t) => ({ '@type': 'Person', name: t.name, url: toAbsUrl(t.href, base) })),
  ]
  const minutes = Math.max(1, post.readingTime)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seo.title ?? post.title,
    description: post.seo.description ?? post.excerpt ?? post.title,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    timeRequired: `PT${minutes}M`,
    wordCount: Math.max(350, minutes * 220),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: post.seo.ogImageUrl ? [toAbsUrl(post.seo.ogImageUrl, base)] : [`${url}/opengraph-image`],
    author: post.author ? personJsonLd(post.author) : { '@type': 'Organization', name: SITE_NAME, url: base },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: base,
      logo: { '@type': 'ImageObject', url: `${base}/opengraph-image` },
    },
    keywords,
    ...(post.category ? { articleSection: post.category.title } : {}),
    ...(about.length > 0 ? { about } : {}),
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.blog-lead-excerpt'] },
  }
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** Schema.org Article + Course lineage (+ paywall signal when locked) for syllabus topic pages. */
export function syllabusTopicJsonLd(topic: TopicDetail, isPaywalled = false) {
  const base = getServerSideURL()
  const url = toAbsUrl(topic.href, base)
  const paperName = topic.paper === 'P1' ? 'Paper 1' : 'Paper 2'
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: topic.title,
    description: topic.summary ?? topic.title,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    inLanguage: 'en-IN',
    isAccessibleForFree: !isPaywalled,
    ...(isPaywalled
      ? { hasPart: [{ '@type': 'WebPageElement', isAccessibleForFree: false, cssSelector: '#unlock-pro' }] }
      : {}),
    ...(topic.createdAt ? { datePublished: topic.createdAt } : {}),
    ...(topic.updatedAt ? { dateModified: topic.updatedAt } : {}),
    author: { '@type': 'Organization', name: SITE_NAME, url: base },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: base,
      logo: { '@type': 'ImageObject', url: `${base}/opengraph-image` },
    },
    isPartOf: {
      '@type': 'Course',
      name: `UPSC Sociology Optional — ${paperName}`,
      provider: { '@type': 'Organization', name: SITE_NAME, url: base },
    },
    ...(topic.thinkers.length > 0
      ? { about: topic.thinkers.map((t) => ({ '@type': 'Person', name: t.name, url: toAbsUrl(t.href, base) })) }
      : {}),
  }
}

/** Schema.org Course + LearningResource structure for syllabus unit hub pages. */
export function syllabusUnitJsonLd(unitData: UnitPageData) {
  const base = getServerSideURL()
  const url = toAbsUrl(unitData.unit.href, base)
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Unit ${unitData.unit.number}: ${unitData.unit.title}`,
    description: unitData.overview ?? unitData.unit.title,
    url,
    provider: { '@type': 'Organization', name: SITE_NAME, url: base },
    inLanguage: 'en-IN',
    ...(unitData.createdAt ? { dateCreated: unitData.createdAt } : {}),
    ...(unitData.updatedAt ? { dateModified: unitData.updatedAt } : {}),
    hasPart: unitData.unit.topics.map((t) => ({
      '@type': 'LearningResource',
      name: t.title,
      url: toAbsUrl(t.href, base),
    })),
  }
}

/** Site-wide Organization + WebSite schema, rendered once in the root layout. */
export function siteJsonLd() {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${base}/#org`, name: SITE_NAME, url: base, sameAs: ['https://t.me/sociologyoptional4', 'https://t.me/ur8884'] },
      { '@type': 'WebSite', '@id': `${base}/#site`, url: base, name: SITE_NAME, inLanguage: 'hi-Latn', publisher: { '@id': `${base}/#org` }, potentialAction: { '@type': 'SearchAction', target: `${base}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
    ],
  }
}
