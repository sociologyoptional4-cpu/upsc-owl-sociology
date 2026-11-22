import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5En } from './topic-5-en'
import { topic5Hi } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5ScienceTechnologyAndSocialChange: TopicNotebookSpec = {
  topicSlug: 'science-technology-and-social-change',
  summary: topic5En.summary,
  summaryHinglish: topic5Hi.summary,
  thinkerSlugs: ['robert-k-merton', 'karl-marx', 'max-weber'],
  relatedTopicSlugs: [
    'theories-of-social-change',
    'agents-of-social-change',
    'science-and-scientific-method',
    'education-and-social-change',
    'formal-and-informal-organisation-of-work',
    'contemporary-trends-in-kinship',
  ],
  mindMap: topic5En.mindMap,
  mindMapHinglish: topic5Hi.mindMap,
  sections: topic5En.sections,
  sectionsHinglish: topic5Hi.sections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}
