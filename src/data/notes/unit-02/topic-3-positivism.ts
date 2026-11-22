import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3Positivism: TopicNotebookSpec = {
  topicSlug: 'positivism-and-its-critique',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'karl-marx', 'max-weber', 'robert-k-merton', 'vilfredo-pareto'],
  relatedTopicSlugs: [
    'science-and-scientific-method',
    'non-positivist-methodologies',
    'fact-value-and-objectivity',
    'emile-durkheim-social-fact-suicide',
    'modernity-and-emergence-of-sociology',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}