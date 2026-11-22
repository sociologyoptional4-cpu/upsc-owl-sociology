import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1Indology: TopicNotebookSpec = {
  topicSlug: 'indology-gs-ghurye',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'structural-functionalism-mn-srinivas',
    'marxist-sociology-ar-desai',
    'perspectives-on-caste',
    'features-of-caste-system',
    'colonial-policies-and-tribes',
    'tribal-integration-and-autonomy',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
