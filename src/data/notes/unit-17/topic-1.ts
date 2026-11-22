import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1LineageDescent: TopicNotebookSpec = {
  topicSlug: 'lineage-and-descent-in-india',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'emile-durkheim'],
  relatedTopicSlugs: [
    'types-of-kinship-systems',
    'family-and-marriage-in-india',
    'household-dimensions-of-family',
    'patriarchy-entitlements-division-of-labour',
    'lineage-and-descent',
    'structural-functionalism-mn-srinivas',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1LineageDescent
