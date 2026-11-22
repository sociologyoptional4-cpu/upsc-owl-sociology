import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3AgentsOfSocialChange: TopicNotebookSpec = {
  topicSlug: 'agents-of-social-change',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'max-weber', 'karl-marx', 'mn-srinivas'],
  relatedTopicSlugs: [
    'theories-of-social-change',
    'education-and-social-change',
    'science-technology-and-social-change',
    'constitution-law-and-social-change',
    'protest-social-movements-revolution',
    'womens-movement',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}
