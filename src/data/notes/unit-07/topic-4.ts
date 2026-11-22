import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4SocialMovements: TopicNotebookSpec = {
  topicSlug: 'protest-social-movements-revolution',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['robert-k-merton', 'karl-marx', 'br-ambedkar', 'mn-srinivas'],
  relatedTopicSlugs: [
    'nation-state-citizenship-democracy',
    'power-elite-bureaucracy-pressure-groups',
    'robert-merton-functions-deviance',
    'backward-classes-and-dalit-movement',
    'environmental-movements',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}