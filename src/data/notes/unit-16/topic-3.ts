import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3MiddleClassesInIndia: TopicNotebookSpec = {
  topicSlug: 'middle-classes-in-india',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['max-weber', 'karl-marx', 'yogendra-singh', 'mn-srinivas'],
  relatedTopicSlugs: [
    'agrarian-class-structure',
    'industrial-class-structure',
    'theories-of-stratification',
    'dimensions-of-stratification',
    'social-organisation-of-work',
    'backward-classes-and-dalit-movement',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}
