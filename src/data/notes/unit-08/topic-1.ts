import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1SociologicalTheoriesOfReligion: TopicNotebookSpec = {
  topicSlug: 'sociological-theories-of-religion',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'karl-marx', 'max-weber', 'br-ambedkar', 'yogendra-singh'],
  relatedTopicSlugs: [
    'types-of-religious-practices',
    'religion-in-modern-society',
    'emile-durkheim-social-fact-suicide',
    'max-weber-social-action-bureaucracy',
    'karl-marx-historical-materialism',
    'problems-of-religious-minorities',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}