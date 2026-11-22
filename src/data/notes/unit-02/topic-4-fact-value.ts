import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4FactValue: TopicNotebookSpec = {
  topicSlug: 'fact-value-and-objectivity',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['max-weber', 'emile-durkheim', 'karl-marx', 'br-ambedkar', 'mn-srinivas'],
  relatedTopicSlugs: [
    'science-and-scientific-method',
    'positivism-and-its-critique',
    'non-positivist-methodologies',
    'sociology-and-common-sense',
    'untouchability-forms-and-perspectives',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}