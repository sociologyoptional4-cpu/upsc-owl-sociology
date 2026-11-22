import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4Mobility: TopicNotebookSpec = {
  topicSlug: 'social-mobility',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'yogendra-singh', 'max-weber', 'karl-marx', 'br-ambedkar', 'vilfredo-pareto'],
  relatedTopicSlugs: [
    'equality-inequality-hierarchy-exclusion',
    'theories-of-stratification',
    'dimensions-of-stratification',
    'education-and-social-change',
    'modernization-of-indian-tradition',
    'perspectives-on-caste',
    'backward-classes-and-dalit-movement',
    'illiteracy-and-educational-disparities',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}