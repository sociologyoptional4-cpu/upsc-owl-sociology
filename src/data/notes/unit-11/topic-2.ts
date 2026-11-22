import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2StructuralFunctionalism: TopicNotebookSpec = {
  topicSlug: 'structural-functionalism-mn-srinivas',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'robert-k-merton', 'yogendra-singh'],
  relatedTopicSlugs: [
    'indian-village-and-village-studies',
    'perspectives-on-caste',
    'features-of-caste-system',
    'indology-gs-ghurye',
    'marxist-sociology-ar-desai',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
