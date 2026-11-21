import type { Paginated, PaperCode, PyqItem, ThinkerChip, TopicChip } from './types'

export type BlogPastel = 'lavender' | 'yellow' | 'mint' | 'pink'

export type BlogCategoryChip = {
  id: number
  title: string
  slug: string
  href: string
  color: BlogPastel
  description: string | null
}

export type BlogTagChip = {
  id: number
  title: string
  slug: string
  href: string
  color: BlogPastel
}

export type BlogMedia = {
  url: string
  alt: string
  width: number
  height: number
}

export type BlogAuthor = {
  id: number
  name: string
  href: string
  bio: string | null
  avatar: BlogMedia | null
}

export type BlogCard = {
  id: number
  title: string
  slug: string
  href: string
  excerpt: string | null
  publishedAt: string
  updatedAt: string
  readingTime: number
  featured: boolean
  cover: BlogMedia | null
  category: BlogCategoryChip | null
  tags: BlogTagChip[]
  papers: PaperCode[]
  topics: TopicChip[]
  thinkers: ThinkerChip[]
  author: BlogAuthor | null
}

export type TocItem = {
  id: string
  text: string
  level: 2 | 3
}

export type ResolvedBlogBlocks = {
  thinkers: Record<number, { name: string; slug: string; href: string; era: string | null }>
  topics: Record<number, TopicChip>
  pyqs: Record<number, { id: number; year: number; paper: PaperCode; marks: number; question: string }>
  media: Record<number, BlogMedia>
}

export type BlogPostDetail = BlogCard & {
  content: unknown
  toc: TocItem[]
  faq: { question: string; answer: string }[]
  seo: {
    title: string | null
    description: string | null
    focusKeyword: string | null
    canonical: string | null
    noindex: boolean
    ogImageUrl: string | null
  }
  resolved: ResolvedBlogBlocks
  relatedPosts: BlogCard[]
  relatedTopics: TopicChip[]
  relatedPyqs: PyqItem[]
}

export type BlogHubFilters = {
  page: number
  category?: string
  paper?: PaperCode
  unit?: string
}

export type BlogHubData = {
  featured: BlogCard | null
  categories: BlogCategoryChip[]
  tags: BlogTagChip[]
  units: { slug: string; title: string; paper: PaperCode }[]
  posts: Paginated<BlogCard>
  filters: BlogHubFilters
}

export type BlogListData = {
  kind: 'category' | 'tag' | 'author'
  title: string
  description: string | null
  author?: BlogAuthor | null
  posts: Paginated<BlogCard>
}

export type BlogGapItem = {
  topicId: number
  topicTitle: string
  topicHref: string
  paper: PaperCode
  pyqCount: number
}
