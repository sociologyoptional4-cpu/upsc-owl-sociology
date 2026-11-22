import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1NationDemocracyCitizenship: TopicNotebookSpec = {
  topicSlug: 'nation-democracy-citizenship-india',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'political-parties-pressure-groups-elite',
    'regionalism-and-decentralization',
    'nation-state-citizenship-democracy',
    'perspectives-on-caste',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
