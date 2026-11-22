import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1KarlMarx: TopicNotebookSpec = {
  topicSlug: 'karl-marx-historical-materialism',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber', 'robert-k-merton'],
  relatedTopicSlugs: [
    'modernity-and-emergence-of-sociology',
    'emile-durkheim-social-fact-suicide',
    'max-weber-social-action-bureaucracy',
    'theories-of-stratification',
    'marxist-sociology-ar-desai',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}