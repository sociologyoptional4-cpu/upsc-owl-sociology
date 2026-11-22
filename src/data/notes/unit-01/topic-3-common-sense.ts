import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3En } from './topic-3-en'
import { topic3Hi } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3CommonSense: TopicNotebookSpec = {
  topicSlug: 'sociology-and-common-sense',
  summary: topic3En.summary,
  summaryHinglish: topic3Hi.summary,
  thinkerSlugs: ['emile-durkheim', 'robert-k-merton', 'karl-marx', 'mn-srinivas', 'br-ambedkar'],
  relatedTopicSlugs: [
    'modernity-and-emergence-of-sociology',
    'scope-and-other-social-sciences',
    'fact-value-and-objectivity',
    'non-positivist-methodologies',
    'perspectives-on-caste',
  ],
  mindMap: topic3En.mindMap,
  mindMapHinglish: topic3Hi.mindMap,
  sections: topic3En.sections,
  sectionsHinglish: topic3Hi.sections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}
