import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1Emergence: TopicNotebookSpec = {
  topicSlug: 'modernity-and-emergence-of-sociology',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'scope-and-other-social-sciences',
    'sociology-and-common-sense',
    'positivism-and-its-critique',
    'karl-marx-historical-materialism',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
