import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4TalcottParsons: TopicNotebookSpec = {
  topicSlug: 'talcott-parsons-social-system',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'max-weber', 'robert-k-merton'],
  relatedTopicSlugs: [
    'emile-durkheim-social-fact-suicide',
    'max-weber-social-action-bureaucracy',
    'robert-merton-functions-deviance',
    'theories-of-social-change',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}