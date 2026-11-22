import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2ProblemsMinorities: TopicNotebookSpec = {
  topicSlug: 'problems-of-religious-minorities',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'religious-communities-in-india',
    'ethnic-conflicts-communalism',
    'secularization-india',
    'nation-democracy-citizenship-india',
    'poverty-deprivation-inequalities',
    'social-mobility',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2ProblemsMinorities
