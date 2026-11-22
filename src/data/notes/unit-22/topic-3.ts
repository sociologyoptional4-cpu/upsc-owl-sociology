import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3RegionalismAndDecentralization: TopicNotebookSpec = {
  topicSlug: 'regionalism-and-decentralization',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'nation-democracy-citizenship-india',
    'political-parties-pressure-groups-elite',
    'ethnic-conflicts-communalism',
    'tribal-integration-and-autonomy',
    'sociological-theories-of-power',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}
