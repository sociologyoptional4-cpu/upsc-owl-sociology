import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5En } from './topic-5-en'
import { topic5Hi } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5ContemporaryTrendsInKinship: TopicNotebookSpec = {
  topicSlug: 'contemporary-trends-in-kinship',
  summary: topic5En.summary,
  summaryHinglish: topic5Hi.summary,
  thinkerSlugs: ['karl-marx', 'max-weber', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'family-household-marriage',
    'types-and-forms-of-family',
    'lineage-and-descent',
    'patriarchy-and-sexual-division-of-labour',
    'family-and-marriage-in-india',
    'emerging-population-issues',
  ],
  mindMap: topic5En.mindMap,
  mindMapHinglish: topic5Hi.mindMap,
  sections: topic5En.sections,
  sectionsHinglish: topic5Hi.sections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}