import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4En } from './topic-4-en'
import { topic4Hi } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4EducationAndSocialChange: TopicNotebookSpec = {
  topicSlug: 'education-and-social-change',
  summary: topic4En.summary,
  summaryHinglish: topic4Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'karl-marx', 'br-ambedkar'],
  relatedTopicSlugs: [
    'theories-of-social-change',
    'agents-of-social-change',
    'education-and-social-change-india',
    'illiteracy-and-educational-disparities',
    'emile-durkheim-social-fact-suicide',
    'social-mobility',
  ],
  mindMap: topic4En.mindMap,
  mindMapHinglish: topic4Hi.mindMap,
  sections: topic4En.sections,
  sectionsHinglish: topic4Hi.sections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}
