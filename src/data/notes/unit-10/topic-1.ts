import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1En } from './topic-1-en'
import { topic1Hi } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1TheoriesOfSocialChange: TopicNotebookSpec = {
  topicSlug: 'theories-of-social-change',
  summary: topic1En.summary,
  summaryHinglish: topic1Hi.summary,
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'vilfredo-pareto', 'yogendra-singh'],
  relatedTopicSlugs: [
    'development-and-dependency',
    'agents-of-social-change',
    'karl-marx-historical-materialism',
    'emile-durkheim-social-fact-suicide',
    'talcott-parsons-social-system',
    'modernization-of-indian-tradition',
  ],
  mindMap: topic1En.mindMap,
  mindMapHinglish: topic1Hi.mindMap,
  sections: topic1En.sections,
  sectionsHinglish: topic1Hi.sections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}
