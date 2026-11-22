import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1Concepts: TopicNotebookSpec = {
  topicSlug: 'equality-inequality-hierarchy-exclusion',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'max-weber', 'robert-k-merton'],
  relatedTopicSlugs: [
    'theories-of-stratification',
    'dimensions-of-stratification',
    'social-mobility',
    'robert-merton-functions-deviance',
    'untouchability-forms-and-perspectives',
    'poverty-deprivation-inequalities',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}