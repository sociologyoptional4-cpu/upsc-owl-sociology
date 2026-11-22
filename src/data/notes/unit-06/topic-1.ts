import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1SocialOrganisationOfWork: TopicNotebookSpec = {
  topicSlug: 'social-organisation-of-work',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber'],
  relatedTopicSlugs: [
    'formal-and-informal-organisation-of-work',
    'labour-and-society',
    'karl-marx-historical-materialism',
    'emile-durkheim-social-fact-suicide',
    'max-weber-social-action-bureaucracy',
    'evolution-of-modern-industry',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}