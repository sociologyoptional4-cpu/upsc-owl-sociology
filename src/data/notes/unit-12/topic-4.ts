import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4SocialReforms: TopicNotebookSpec = {
  topicSlug: 'social-reforms',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'untouchability-forms-and-perspectives',
    'patriarchy-and-sexual-division-of-labour',
    'womens-movement',
    'backward-classes-and-dalit-movement',
    'education-and-social-change-india',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}
