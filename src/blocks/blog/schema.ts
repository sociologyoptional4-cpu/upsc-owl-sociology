import { z } from 'zod'

/**
 * Zod schemas for blocks the AI beautifier may emit. Relations use slugs (resolved server-side);
 * `pyqEmbed` and `figure` are owner-only and never AI-generated.
 */
const text = (max: number) => z.string().trim().min(1).max(max)

export const blogBlockSchema = z.discriminatedUnion('blockType', [
  z.object({ blockType: z.literal('blogCallout'), variant: z.enum(['tip', 'yaadRakho', 'galtiMat', 'upscAngle']), title: text(80).optional(), body: text(800) }),
  z.object({ blockType: z.literal('thinkerQuote'), thinkerSlug: z.string().regex(/^[a-z0-9-]+$/), quote: text(300).refine((q) => q.split(/\s+/).length <= 25, 'quote > 25 words'), context: text(160).optional() }),
  z.object({
    blockType: z.literal('compare'), leftTitle: text(60), rightTitle: text(60),
    rows: z.array(z.object({ aspect: text(80), left: text(300), right: text(300) })).min(1).max(10),
  }),
  z.object({ blockType: z.literal('timeline'), items: z.array(z.object({ year: text(20), title: text(100), text: text(300).optional() })).min(1).max(12) }),
  z.object({ blockType: z.literal('flow'), direction: z.enum(['horizontal', 'vertical']).default('horizontal'), steps: z.array(z.object({ label: text(60), text: text(160).optional() })).min(2).max(8) }),
  z.object({ blockType: z.literal('keyTerm'), term: text(80), meaning: text(500), thinkerSlug: z.string().regex(/^[a-z0-9-]+$/).optional() }),
  z.object({ blockType: z.literal('answerBox'), intro: text(500), points: z.array(z.object({ text: text(400) })).min(1).max(8), conclusion: text(500) }),
])

export type BlogBlockInput = z.infer<typeof blogBlockSchema>

/** One beautifier section: either plain markdown or a validated block. */
export const beautifyOutputSchema = z.object({
  sections: z.array(z.union([z.object({ markdown: z.string().min(1).max(20_000) }), z.object({ block: blogBlockSchema })])).min(1).max(120),
})

export type BeautifyOutput = z.infer<typeof beautifyOutputSchema>

const faqItem = z.object({ question: text(200), answer: text(800) })

export const organizeOutputSchema = z.object({
  paperCodes: z.array(z.enum(['P1', 'P2'])).max(2).default([]),
  unitSlugs: z.array(z.string()).max(4).default([]),
  topicSlugs: z.array(z.string()).max(3).default([]),
  thinkerSlugs: z.array(z.string()).max(6).default([]),
  category: z.string().max(80).optional(),
  tags: z.array(z.string().max(40)).max(6).default([]),
  excerpt: z.string().max(300).default(''),
  seoTitle: z.string().max(60).default(''),
  seoDescription: z.string().max(160).default(''),
  focusKeyword: z.string().max(80).default(''),
  faq: z.array(faqItem).max(5).default([]),
  internalLinks: z.array(z.object({ anchorText: text(80), href: z.string().max(300) })).max(8).default([]),
  social: z.object({
    xThread: z.array(z.string().max(280)).max(8).default([]),
    instagramSlides: z.array(z.object({ title: z.string().max(80), text: z.string().max(240) })).max(8).default([]),
    linkedin: z.string().max(1500).default(''),
    telegram: z.string().max(900).default(''),
  }).default({ xThread: [], instagramSlides: [], linkedin: '', telegram: '' }),
})

export type OrganizeOutput = z.infer<typeof organizeOutputSchema>
