import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1Methods: TopicNotebookSpec = {
  topicSlug: 'qualitative-and-quantitative-methods',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'max-weber', 'karl-marx', 'robert-k-merton', 'mn-srinivas'],
  relatedTopicSlugs: [
    'techniques-of-data-collection',
    'variables-sampling-hypothesis-reliability-validity',
    'positivism-and-its-critique',
    'fact-value-and-objectivity',
    'non-positivist-methodologies',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}