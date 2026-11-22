import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2Techniques: TopicNotebookSpec = {
  topicSlug: 'techniques-of-data-collection',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'emile-durkheim', 'karl-marx', 'max-weber'],
  relatedTopicSlugs: [
    'qualitative-and-quantitative-methods',
    'variables-sampling-hypothesis-reliability-validity',
    'non-positivist-methodologies',
    'structural-functionalism-mn-srinivas',
    'indian-village-and-village-studies',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}