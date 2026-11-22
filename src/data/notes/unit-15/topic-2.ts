import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2GeographicalSpread: TopicNotebookSpec = {
  topicSlug: 'tribes-geographical-spread',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'yogendra-singh'],
  relatedTopicSlugs: [
    'tribes-definitional-problems',
    'colonial-policies-and-tribes',
    'tribal-integration-and-autonomy',
    'environmental-movements',
    'ethnicity-and-identity-movements',
    'regionalism-and-decentralization',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
