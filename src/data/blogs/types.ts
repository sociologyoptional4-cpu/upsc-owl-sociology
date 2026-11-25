import type { PaperCode } from '@/lib/data/types'

export type BlogSectionSpec =
  | { markdown: string }
  | {
      block:
        | { blockType: 'blogCallout'; variant: 'tip' | 'yaadRakho' | 'galtiMat' | 'upscAngle'; title?: string; body: string }
        | { blockType: 'compare'; leftTitle: string; rightTitle: string; rows: { aspect: string; left: string; right: string }[] }
        | { blockType: 'keyTerm'; term: string; meaning: string }
        | { blockType: 'answerBox'; intro: string; points: { text: string }[]; conclusion: string }
    }

export type StarterBlogSpec = {
  slug: string
  title: string
  excerpt: string
  categorySlug: string
  tagTitles: string[]
  papers: PaperCode[]
  unitSlugs: string[]
  topicSlugs: string[]
  thinkerSlugs: string[]
  coverFilename: string
  coverAlt: string
  featured?: boolean
  publishedAt: string
  seo: { title: string; description: string; focusKeyword: string }
  faq: { question: string; answer: string }[]
  quiz: { question: string; options: string[]; answerIndex: number; explanation: string }[]
  sections: BlogSectionSpec[]
}
