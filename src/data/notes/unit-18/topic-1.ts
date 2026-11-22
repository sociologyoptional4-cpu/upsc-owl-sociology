import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1ReligiousCommunities: TopicNotebookSpec = {
  topicSlug: 'religious-communities-in-india',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['yogendra-singh', 'mn-srinivas', 'br-ambedkar', 'emile-durkheim'],
  relatedTopicSlugs: [
    'problems-of-religious-minorities',
    'sociological-theories-of-religion',
    'types-of-religious-practices',
    'secularization-india',
    'modernization-of-indian-tradition',
    'ethnic-conflicts-communalism',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1ReligiousCommunities
