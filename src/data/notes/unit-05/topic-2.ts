import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2Theories: TopicNotebookSpec = {
  topicSlug: 'theories-of-stratification',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['karl-marx', 'max-weber', 'emile-durkheim', 'vilfredo-pareto', 'mn-srinivas'],
  relatedTopicSlugs: [
    'equality-inequality-hierarchy-exclusion',
    'dimensions-of-stratification',
    'karl-marx-historical-materialism',
    'max-weber-social-action-bureaucracy',
    'talcott-parsons-social-system',
    'perspectives-on-caste',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}