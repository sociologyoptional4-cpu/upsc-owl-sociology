import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2En } from './topic-2-en'
import { topic2Hi } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2Scope: TopicNotebookSpec = {
  topicSlug: 'scope-and-other-social-sciences',
  summary: topic2En.summary,
  summaryHinglish: topic2Hi.summary,
  thinkerSlugs: ['max-weber', 'emile-durkheim', 'karl-marx', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'modernity-and-emergence-of-sociology',
    'sociology-and-common-sense',
    'science-and-scientific-method',
    'indology-gs-ghurye',
    'structural-functionalism-mn-srinivas',
  ],
  mindMap: topic2En.mindMap,
  mindMapHinglish: topic2Hi.mindMap,
  sections: topic2En.sections,
  sectionsHinglish: topic2Hi.sections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}
