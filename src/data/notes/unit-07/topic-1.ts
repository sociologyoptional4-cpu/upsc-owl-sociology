import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1TheoriesOfPower: TopicNotebookSpec = {
  topicSlug: 'sociological-theories-of-power',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['max-weber', 'karl-marx', 'vilfredo-pareto', 'emile-durkheim'],
  relatedTopicSlugs: [
    'power-elite-bureaucracy-pressure-groups',
    'nation-state-citizenship-democracy',
    'max-weber-social-action-bureaucracy',
    'theories-of-stratification',
    'political-parties-pressure-groups-elite',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}