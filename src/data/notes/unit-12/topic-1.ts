import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1SocialBackground: TopicNotebookSpec = {
  topicSlug: 'social-background-of-indian-nationalism',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'marxist-sociology-ar-desai',
    'modernization-of-indian-tradition',
    'protests-and-movements-colonial-period',
    'social-reforms',
    'peasants-and-farmers-movements',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
