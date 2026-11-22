import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3Design: TopicNotebookSpec = {
  topicSlug: 'variables-sampling-hypothesis-reliability-validity',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'robert-k-merton', 'mn-srinivas', 'br-ambedkar'],
  relatedTopicSlugs: [
    'qualitative-and-quantitative-methods',
    'techniques-of-data-collection',
    'science-and-scientific-method',
    'positivism-and-its-critique',
    'emile-durkheim-social-fact-suicide',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}