import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic6En } from './topic-6-en'
import { topic6Hi } from './topic-6-hi'
import { topic6PyqsEn } from './topic-6-pyqs-en'
import { topic6PyqsHi } from './topic-6-pyqs-hi'

export const topic6GhMead: TopicNotebookSpec = {
  topicSlug: 'mead-self-and-identity',
  summary: topic6En.summary,
  summaryHinglish: topic6Hi.summary,
  thinkerSlugs: ['max-weber', 'emile-durkheim'],
  relatedTopicSlugs: [
    'non-positivist-methodologies',
    'max-weber-social-action-bureaucracy',
    'talcott-parsons-social-system',
    'robert-merton-functions-deviance',
    'sociology-and-common-sense',
  ],
  mindMap: topic6En.mindMap,
  mindMapHinglish: topic6Hi.mindMap,
  sections: topic6En.sections,
  sectionsHinglish: topic6Hi.sections,
  pyqAnswers: topic6PyqsEn,
  pyqAnswersHinglish: topic6PyqsHi,
}