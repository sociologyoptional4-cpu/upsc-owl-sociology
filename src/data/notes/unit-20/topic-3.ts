import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3EnMindMap, topic3EnSections } from './topic-3-en'
import { topic3HiMindMap, topic3HiSections } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3ModesOfProduction: TopicNotebookSpec = {
  topicSlug: 'changing-modes-of-production-agriculture',
  summary:
    'Explores the Marxist mode of production framework in Indian agriculture: the classic Mode of Production Debate between Amit Bhaduri (semi-feudal thesis), Ashok Rudra (agrarian capitalism), and Utsa Patnaik (pre-capitalist transition), alongside the contemporary dynamics of technology, marketisation, smallholder adverse incorporation, and the persistence of interlocked debts with contract farming.',
  summaryHinglish:
    'Bharat ki kheti mein Marxist mode of production framework ka vistaar se vishleshan: Amit Bhaduri (semi-feudal model), Ashok Rudra (agrarian capitalism) aur Utsa Patnaik (pre-capitalist transition) ke beech ki aitihasik behas, aur sath hi technology, mandikaran, chhote kisanon ka adverse incorporation aur corporate contract farming ke beech purani soodkhori ka gathjod.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'agrarian-social-structure-land-reforms',
    'agrarian-class-structure',
    'rural-development-programmes',
    'green-revolution-and-social-change',
    'rural-labour-bondage-migration',
  ],
  mindMap: topic3EnMindMap,
  mindMapHinglish: topic3HiMindMap,
  sections: topic3EnSections,
  sectionsHinglish: topic3HiSections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3ModesOfProduction
