import { STARTER_BLOGS_PART_1 } from './part-1'
import { STARTER_BLOGS_PART_2 } from './part-2'
import { STARTER_BLOGS_PART_3 } from './part-3'
import { STARTER_BLOGS_PART_4 } from './part-4'
import type { StarterBlogSpec } from './types'

export type { BlogSectionSpec, StarterBlogSpec } from './types'

export const STARTER_BLOGS: StarterBlogSpec[] = [
  ...STARTER_BLOGS_PART_1,
  ...STARTER_BLOGS_PART_2,
  ...STARTER_BLOGS_PART_3,
  ...STARTER_BLOGS_PART_4,
]
