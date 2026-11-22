import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3Dimensions: TopicNotebookSpec = {
  topicSlug: 'dimensions-of-stratification',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['karl-marx', 'max-weber', 'br-ambedkar', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'equality-inequality-hierarchy-exclusion',
    'theories-of-stratification',
    'social-mobility',
    'patriarchy-and-sexual-division-of-labour',
    'middle-classes-in-india',
    'ethnic-conflicts-communalism',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}