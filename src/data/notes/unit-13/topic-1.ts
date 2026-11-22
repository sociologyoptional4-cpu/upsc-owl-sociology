import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1VillageStudies: TopicNotebookSpec = {
  topicSlug: 'indian-village-and-village-studies',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'br-ambedkar', 'karl-marx', 'yogendra-singh'],
  relatedTopicSlugs: [
    'agrarian-social-structure-land-reforms',
    'perspectives-on-caste',
    'structural-functionalism-mn-srinivas',
    'rural-development-programmes',
    'green-revolution-and-social-change',
    'changing-modes-of-production-agriculture',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
