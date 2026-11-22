import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1ScienceMethod: TopicNotebookSpec = {
  topicSlug: 'science-and-scientific-method',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'robert-k-merton', 'max-weber', 'karl-marx', 'mn-srinivas'],
  relatedTopicSlugs: [
    'positivism-and-its-critique',
    'theoretical-strands-of-methodology',
    'qualitative-and-quantitative-methods',
    'variables-sampling-hypothesis-reliability-validity',
    'emile-durkheim-social-fact-suicide',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}