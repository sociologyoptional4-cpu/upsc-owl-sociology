import type { BlogAuthor, BlogPostDetail, CAArticle, TopicDetail, UnitPageData } from '@/lib/data/types'
import { getServerSideURL } from '@/lib/url'

export function articleJsonLd(article: CAArticle) {
  return {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.headline,
    datePublished: article.date, description: article.summary ?? article.headline, mainEntityOfPage: article.href,
    citation: article.sources.map((source) => ({ '@type': 'CreativeWork', name: source.name, url: source.url })),
  }
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.label, item: item.href })) }
}

export function personJsonLd(author: BlogAuthor) {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: `${base}${author.href}`,
    ...(author.bio ? { description: author.bio } : {}),
    ...(author.avatar ? { image: author.avatar.url } : {}),
  }
}

export function blogPostingJsonLd(post: BlogPostDetail) {
  const base = getServerSideURL()
  const url = `${base}${post.href}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seo.title ?? post.title,
    description: post.seo.description ?? post.excerpt ?? post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: post.seo.ogImageUrl ? [new URL(post.seo.ogImageUrl, base).toString()] : [`${url}/opengraph-image`],
    author: post.author ? personJsonLd(post.author) : { '@type': 'Organization', name: 'UPSC OWL Sociology', url: base },
    publisher: { '@type': 'Organization', name: 'UPSC OWL Sociology', url: base },
    keywords: [post.seo.focusKeyword, ...post.tags.map((t) => t.title), ...post.topics.map((t) => t.title)].filter(Boolean).join(', '),
    ...(post.category ? { articleSection: post.category.title } : {}),
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

export const SITE_NAME = 'UPSC OWL Sociology'

/** Schema.org Article + Course lineage for syllabus topic pages. */
export function syllabusTopicJsonLd(topic: TopicDetail) {
  const base = getServerSideURL()
  const url = `${base}${topic.href}`
  const paperName = topic.paper === 'P1' ? 'Paper 1' : 'Paper 2'
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: topic.title,
    description: topic.summary ?? topic.title,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    inLanguage: 'en-IN',
    ...(topic.createdAt ? { datePublished: topic.createdAt } : {}),
    ...(topic.updatedAt ? { dateModified: topic.updatedAt } : {}),
    author: { '@type': 'Organization', name: SITE_NAME, url: base },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: base },
    isPartOf: {
      '@type': 'Course',
      name: `UPSC Sociology Optional — ${paperName}`,
      provider: { '@type': 'Organization', name: SITE_NAME, url: base },
    },
    ...(topic.thinkers.length > 0
      ? { about: topic.thinkers.map((t) => ({ '@type': 'Person', name: t.name, url: `${base}${t.href}` })) }
      : {}),
  }
}

/** Schema.org Course + LearningResource structure for syllabus unit hub pages. */
export function syllabusUnitJsonLd(unitData: UnitPageData) {
  const base = getServerSideURL()
  const url = `${base}${unitData.unit.href}`
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
      url: `${base}${t.href}`,
    })),
  }
}

/** Site-wide Organization + WebSite schema, rendered once in the root layout. */
export function siteJsonLd() {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${base}/#org`, name: SITE_NAME, url: base, sameAs: ['https://t.me/sociologyoptional4'] },
      { '@type': 'WebSite', '@id': `${base}/#site`, url: base, name: SITE_NAME, inLanguage: 'hi-Latn', publisher: { '@id': `${base}/#org` }, potentialAction: { '@type': 'SearchAction', target: `${base}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
    ],
  }
}
