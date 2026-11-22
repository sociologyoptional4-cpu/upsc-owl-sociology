import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2DevelopmentAndDependency: TopicNotebookSpec = {
  topicSlug: 'development-and-dependency',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh', 'br-ambedkar'],
  relatedTopicSlugs: [
    'theories-of-social-change',
    'agents-of-social-change',
    'development-planning-mixed-economy',
    'crisis-of-development-displacement',
    'karl-marx-historical-materialism',
    'formal-and-informal-organisation-of-work',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
