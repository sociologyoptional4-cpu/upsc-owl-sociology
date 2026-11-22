import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2TypesOfReligiousPractices: TopicNotebookSpec = {
  topicSlug: 'types-of-religious-practices',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'max-weber', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'sociological-theories-of-religion',
    'religion-in-modern-society',
    'religious-communities-in-india',
    'modernization-of-indian-tradition',
    'structural-functionalism-mn-srinivas',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}