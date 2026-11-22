import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1AgrarianClassStructure: TopicNotebookSpec = {
  topicSlug: 'agrarian-class-structure',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'max-weber', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'agrarian-social-structure-land-reforms',
    'industrial-class-structure',
    'middle-classes-in-india',
    'rural-labour-bondage-migration',
    'peasants-and-farmers-movements',
    'poverty-deprivation-inequalities',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
