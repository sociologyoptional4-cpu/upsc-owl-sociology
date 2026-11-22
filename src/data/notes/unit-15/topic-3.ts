import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3ColonialPolicies: TopicNotebookSpec = {
  topicSlug: 'colonial-policies-and-tribes',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['karl-marx', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'tribes-definitional-problems',
    'tribes-geographical-spread',
    'tribal-integration-and-autonomy',
    'protests-and-movements-colonial-period',
    'environmental-movements',
    'crisis-of-development-displacement',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}
