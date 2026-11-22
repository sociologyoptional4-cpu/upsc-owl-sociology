import { z } from 'zod'

const nonEmptyString = z.string().trim().min(1)
const paperCodeSchema = z.enum(['P1', 'P2'])
const yearSchema = z.number().int().min(1950).max(2100)

export const noteLangSchema = z.enum(['en', 'hi'])
export type NoteLang = z.infer<typeof noteLangSchema>

export const mindMapColorSchema = z.enum(['lavender', 'yellow', 'mint', 'pink'])
export type MindMapColor = z.infer<typeof mindMapColorSchema>

export const mindMapBranchSchema = z.object({
  title: nonEmptyString,
  color: mindMapColorSchema,
  thinkers: z.array(nonEmptyString).optional(),
  points: z.array(nonEmptyString).min(1),
})
export type MindMapBranch = z.infer<typeof mindMapBranchSchema>

export const mindMapDataSchema = z.object({
  title: nonEmptyString,
  center: nonEmptyString,
  subtitle: nonEmptyString.optional(),
  branches: z.array(mindMapBranchSchema).min(1),
})
export type MindMapData = z.infer<typeof mindMapDataSchema>

export const unitInfographicSchema = z.object({
  title: nonEmptyString,
  titleHinglish: z.string().nullable().optional(),
  caption: z.string().nullable().optional(),
  captionHinglish: z.string().nullable().optional(),
  badge: z.string().nullable().optional(),
  badgeHinglish: z.string().nullable().optional(),
  url: nonEmptyString,
  width: z.number().int().nonnegative(),
  height: z.number().int().nonnegative(),
})
export type UnitInfographic = z.infer<typeof unitInfographicSchema>

export const unitStudyStepSchema = z.object({
  step: nonEmptyString,
  detail: z.string().nullable().optional(),
})
export type UnitStudyStep = z.infer<typeof unitStudyStepSchema>

export const pyqAnswerItemSchema = z.object({
  year: yearSchema,
  paper: paperCodeSchema,
  marks: z.number().int().positive(),
  question: nonEmptyString,
  theme: z.string().nullable().optional(),
  intro: nonEmptyString,
  points: z.array(nonEmptyString).min(1),
  thinkers: z.string().nullable().optional(),
  example: z.string().nullable().optional(),
  conclusion: nonEmptyString,
})
export type PyqAnswerItem = z.infer<typeof pyqAnswerItemSchema>

export const notebookSectionSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('md'), body: nonEmptyString }),
  z.object({
    kind: z.literal('callout'),
    variant: z.enum(['tip', 'yaadRakho', 'galtiMat', 'upscAngle']),
    title: nonEmptyString.optional(),
    body: nonEmptyString,
  }),
  z.object({
    kind: z.literal('thinkerQuote'),
    thinkerSlug: nonEmptyString,
    quote: nonEmptyString,
    context: nonEmptyString.optional(),
  }),
  z.object({
    kind: z.literal('compare'),
    leftTitle: nonEmptyString,
    rightTitle: nonEmptyString,
    rows: z
      .array(
        z.object({
          aspect: nonEmptyString,
          left: nonEmptyString,
          right: nonEmptyString,
        }),
      )
      .min(1),
  }),
  z.object({
    kind: z.literal('timeline'),
    items: z
      .array(
        z.object({
          year: nonEmptyString,
          title: nonEmptyString,
          text: nonEmptyString.optional(),
        }),
      )
      .min(1),
  }),
  z.object({
    kind: z.literal('flow'),
    direction: z.enum(['horizontal', 'vertical']).optional(),
    steps: z
      .array(
        z.object({
          label: nonEmptyString,
          text: nonEmptyString.optional(),
        }),
      )
      .min(2),
  }),
  z.object({
    kind: z.literal('keyTerm'),
    term: nonEmptyString,
    meaning: nonEmptyString,
    thinkerSlug: nonEmptyString.optional(),
  }),
  z.object({
    kind: z.literal('answerBox'),
    intro: nonEmptyString,
    points: z.array(nonEmptyString).min(1),
    conclusion: nonEmptyString,
  }),
  z.object({
    kind: z.literal('figure'),
    assetFile: nonEmptyString,
    alt: nonEmptyString,
    caption: nonEmptyString,
    credit: nonEmptyString.optional(),
  }),
  z.object({
    kind: z.literal('pyqEmbed'),
    years: z.array(yearSchema),
    limit: z.number().int().positive().optional(),
  }),
])
export type NotebookSection = z.infer<typeof notebookSectionSchema>

export const topicNotebookSpecSchema = z.object({
  topicSlug: nonEmptyString,
  summary: nonEmptyString,
  summaryHinglish: nonEmptyString,
  thinkerSlugs: z.array(nonEmptyString),
  relatedTopicSlugs: z.array(nonEmptyString),
  mindMap: mindMapDataSchema,
  mindMapHinglish: mindMapDataSchema,
  sections: z.array(notebookSectionSchema),
  sectionsHinglish: z.array(notebookSectionSchema),
  pyqAnswers: z.array(pyqAnswerItemSchema),
  pyqAnswersHinglish: z.array(pyqAnswerItemSchema),
})
export type TopicNotebookSpec = z.infer<typeof topicNotebookSpecSchema>

export const unitInfographicSpecSchema = z.object({
  assetFile: nonEmptyString,
  title: nonEmptyString,
  titleHinglish: nonEmptyString,
  caption: z.string(),
  captionHinglish: z.string(),
  badge: z.string(),
  badgeHinglish: z.string(),
  alt: nonEmptyString,
})

export const unitNotebookSpecSchema = z.object({
  paperCode: paperCodeSchema,
  unitSlug: nonEmptyString,
  overview: nonEmptyString,
  overviewHinglish: nonEmptyString,
  studySequence: z.array(unitStudyStepSchema),
  studySequenceHinglish: z.array(unitStudyStepSchema),
  mindMap: mindMapDataSchema,
  mindMapHinglish: mindMapDataSchema,
  infographics: z.array(unitInfographicSpecSchema),
  topics: z.array(topicNotebookSpecSchema),
})
export type UnitNotebookSpec = z.infer<typeof unitNotebookSpecSchema>
