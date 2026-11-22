import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2IndustrialClassStructure: TopicNotebookSpec = {
  topicSlug: 'industrial-class-structure',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'max-weber', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'agrarian-class-structure',
    'middle-classes-in-india',
    'social-organisation-of-work',
    'formal-and-informal-organisation-of-work',
    'working-class-in-india',
    'theories-of-stratification',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
