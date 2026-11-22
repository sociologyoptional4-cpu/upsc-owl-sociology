import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3LineageAndDescent: TopicNotebookSpec = {
  topicSlug: 'lineage-and-descent',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'family-household-marriage',
    'types-and-forms-of-family',
    'patriarchy-and-sexual-division-of-labour',
    'lineage-and-descent-in-india',
    'types-of-kinship-systems',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}