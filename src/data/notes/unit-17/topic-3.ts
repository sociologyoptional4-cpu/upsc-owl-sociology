import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3FamilyMarriage: TopicNotebookSpec = {
  topicSlug: 'family-and-marriage-in-india',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'yogendra-singh', 'karl-marx'],
  relatedTopicSlugs: [
    'lineage-and-descent-in-india',
    'types-of-kinship-systems',
    'household-dimensions-of-family',
    'patriarchy-entitlements-division-of-labour',
    'family-household-marriage',
    'contemporary-trends-in-kinship',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3FamilyMarriage
