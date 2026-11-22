import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2AgrarianStructure: TopicNotebookSpec = {
  topicSlug: 'agrarian-social-structure-land-reforms',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'mn-srinivas', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'indian-village-and-village-studies',
    'agrarian-class-structure',
    'rural-development-programmes',
    'green-revolution-and-social-change',
    'changing-modes-of-production-agriculture',
    'rural-labour-bondage-migration',
    'peasants-and-farmers-movements',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
