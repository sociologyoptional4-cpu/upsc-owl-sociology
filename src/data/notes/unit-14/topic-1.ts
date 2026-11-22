import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1Perspectives: TopicNotebookSpec = {
  topicSlug: 'perspectives-on-caste',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'yogendra-singh', 'max-weber', 'karl-marx'],
  relatedTopicSlugs: [
    'features-of-caste-system',
    'untouchability-forms-and-perspectives',
    'indology-gs-ghurye',
    'structural-functionalism-mn-srinivas',
    'theories-of-stratification',
    'caste-conflicts',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
