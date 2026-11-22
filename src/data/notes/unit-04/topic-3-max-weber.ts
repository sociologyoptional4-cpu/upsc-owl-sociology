import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3MaxWeber: TopicNotebookSpec = {
  topicSlug: 'max-weber-social-action-bureaucracy',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['max-weber', 'karl-marx', 'emile-durkheim', 'robert-k-merton'],
  relatedTopicSlugs: [
    'fact-value-and-objectivity',
    'non-positivist-methodologies',
    'theories-of-stratification',
    'power-elite-bureaucracy-pressure-groups',
    'sociological-theories-of-religion',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}