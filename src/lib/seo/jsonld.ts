import type { CAArticle } from '@/lib/data/types'

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
