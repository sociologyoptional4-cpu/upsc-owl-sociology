import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2TypesAndFormsOfFamily: TopicNotebookSpec = {
  topicSlug: 'types-and-forms-of-family',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'family-household-marriage',
    'lineage-and-descent',
    'contemporary-trends-in-kinship',
    'family-and-marriage-in-india',
    'household-dimensions-of-family',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}