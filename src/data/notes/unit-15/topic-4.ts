import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4IntegrationAndAutonomy: TopicNotebookSpec = {
  topicSlug: 'tribal-integration-and-autonomy',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'yogendra-singh'],
  relatedTopicSlugs: [
    'tribes-definitional-problems',
    'tribes-geographical-spread',
    'colonial-policies-and-tribes',
    'crisis-of-development-displacement',
    'ethnicity-and-identity-movements',
    'regionalism-and-decentralization',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}
