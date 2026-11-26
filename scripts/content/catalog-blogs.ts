import type { PaperCode } from '@/lib/data/types'

import { BLOG_PART_1 } from './catalog-blogs-p1'
import { BLOG_PART_2 } from './catalog-blogs-p2'
import { BLOG_PART_3 } from './catalog-blogs-p3'
import { BLOG_PART_4 } from './catalog-blogs-p4'

export type BlogBrief = {
  slug: string
  title: string
  categorySlug: string
  papers: PaperCode[]
  unitSlugs: string[]
  topicSlugs: string[]
  thinkerSlugs: string[]
  coverFilename: string
  publishedAt: string
  tagTitles: string[]
  angle: string
}

export const BLOG_CATALOG: BlogBrief[] = [
  ...BLOG_PART_1,
  ...BLOG_PART_2,
  ...BLOG_PART_3,
  ...BLOG_PART_4,
]
