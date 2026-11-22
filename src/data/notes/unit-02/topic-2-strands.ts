import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2Strands: TopicNotebookSpec = {
  topicSlug: 'theoretical-strands-of-methodology',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber', 'robert-k-merton', 'br-ambedkar'],
  relatedTopicSlugs: [
    'science-and-scientific-method',
    'positivism-and-its-critique',
    'non-positivist-methodologies',
    'qualitative-and-quantitative-methods',
    'perspectives-on-caste',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}