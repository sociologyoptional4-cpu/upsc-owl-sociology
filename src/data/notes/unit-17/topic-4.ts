import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4HouseholdDimensions: TopicNotebookSpec = {
  topicSlug: 'household-dimensions-of-family',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'lineage-and-descent-in-india',
    'types-of-kinship-systems',
    'family-and-marriage-in-india',
    'patriarchy-entitlements-division-of-labour',
    'types-and-forms-of-family',
    'emerging-population-issues',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}

export default topic4HouseholdDimensions
