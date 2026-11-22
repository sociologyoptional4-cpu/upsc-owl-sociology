import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2FormalAndInformalOrganisationOfWork: TopicNotebookSpec = {
  topicSlug: 'formal-and-informal-organisation-of-work',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['max-weber', 'robert-k-merton', 'karl-marx', 'emile-durkheim'],
  relatedTopicSlugs: [
    'social-organisation-of-work',
    'labour-and-society',
    'max-weber-social-action-bureaucracy',
    'patriarchy-and-sexual-division-of-labour',
    'informal-sector-child-labour',
    'working-class-in-india',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}