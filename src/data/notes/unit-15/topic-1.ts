import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1DefinitionalProblems: TopicNotebookSpec = {
  topicSlug: 'tribes-definitional-problems',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'perspectives-on-caste',
    'features-of-caste-system',
    'untouchability-forms-and-perspectives',
    'tribes-geographical-spread',
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
