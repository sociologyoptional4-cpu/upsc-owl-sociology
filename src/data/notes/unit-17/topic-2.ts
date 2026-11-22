import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2TypesKinship: TopicNotebookSpec = {
  topicSlug: 'types-of-kinship-systems',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'lineage-and-descent-in-india',
    'family-and-marriage-in-india',
    'household-dimensions-of-family',
    'patriarchy-entitlements-division-of-labour',
    'contemporary-trends-in-kinship',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2TypesKinship
