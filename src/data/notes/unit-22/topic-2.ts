import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2PoliticalPartiesPressureGroupsElite: TopicNotebookSpec = {
  topicSlug: 'political-parties-pressure-groups-elite',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['mn-srinivas', 'vilfredo-pareto', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'nation-democracy-citizenship-india',
    'regionalism-and-decentralization',
    'power-elite-bureaucracy-pressure-groups',
    'backward-classes-and-dalit-movement',
    'middle-classes-in-india',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
