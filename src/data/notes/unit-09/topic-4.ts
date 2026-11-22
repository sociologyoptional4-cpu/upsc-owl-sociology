import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4PatriarchyAndDivisionOfLabour: TopicNotebookSpec = {
  topicSlug: 'patriarchy-and-sexual-division-of-labour',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'family-household-marriage',
    'types-and-forms-of-family',
    'lineage-and-descent',
    'contemporary-trends-in-kinship',
    'patriarchy-entitlements-division-of-labour',
    'violence-against-women',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}