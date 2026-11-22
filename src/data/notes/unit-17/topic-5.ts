import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5En } from './topic-5-en'
import { topic5Hi } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5PatriarchyLabour: TopicNotebookSpec = {
  topicSlug: 'patriarchy-entitlements-division-of-labour',
  summary: topic5En.summary,
  summaryHinglish: topic5Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'max-weber'],
  relatedTopicSlugs: [
    'lineage-and-descent-in-india',
    'types-of-kinship-systems',
    'family-and-marriage-in-india',
    'household-dimensions-of-family',
    'patriarchy-and-sexual-division-of-labour',
    'violence-against-women',
    'womens-movement',
  ],
  mindMap: topic5En.mindMap,
  mindMapHinglish: topic5Hi.mindMap,
  sections: topic5En.sections,
  sectionsHinglish: topic5Hi.sections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}

export default topic5PatriarchyLabour
