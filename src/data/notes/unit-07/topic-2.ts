import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2PowerElite: TopicNotebookSpec = {
  topicSlug: 'power-elite-bureaucracy-pressure-groups',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['vilfredo-pareto', 'max-weber', 'robert-k-merton', 'yogendra-singh'],
  relatedTopicSlugs: [
    'sociological-theories-of-power',
    'nation-state-citizenship-democracy',
    'max-weber-social-action-bureaucracy',
    'political-parties-pressure-groups-elite',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}