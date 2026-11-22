import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1FamilyHouseholdMarriage: TopicNotebookSpec = {
  topicSlug: 'family-household-marriage',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'types-and-forms-of-family',
    'lineage-and-descent',
    'patriarchy-and-sexual-division-of-labour',
    'contemporary-trends-in-kinship',
    'family-and-marriage-in-india',
    'household-dimensions-of-family',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}