import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5En } from './topic-5-en'
import { topic5Hi } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5NonPositivist: TopicNotebookSpec = {
  topicSlug: 'non-positivist-methodologies',
  summary: topic5En.summary,
  summaryHinglish: topic5Hi.summary,
  thinkerSlugs: ['max-weber', 'emile-durkheim', 'mn-srinivas'],
  relatedTopicSlugs: [
    'positivism-and-its-critique',
    'theoretical-strands-of-methodology',
    'fact-value-and-objectivity',
    'max-weber-social-action-bureaucracy',
    'mead-self-and-identity',
  ],
  mindMap: topic5En.mindMap,
  mindMapHinglish: topic5Hi.mindMap,
  sections: topic5En.sections,
  sectionsHinglish: topic5Hi.sections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}