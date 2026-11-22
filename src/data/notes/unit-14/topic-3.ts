import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3Untouchability: TopicNotebookSpec = {
  topicSlug: 'untouchability-forms-and-perspectives',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'karl-marx'],
  relatedTopicSlugs: [
    'perspectives-on-caste',
    'features-of-caste-system',
    'backward-classes-and-dalit-movement',
    'caste-conflicts',
    'constitution-law-and-social-change',
    'equality-inequality-hierarchy-exclusion',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}
