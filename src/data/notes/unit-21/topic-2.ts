import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2EnMindMap, topic2EnSections } from './topic-2-en'
import { topic2HiMindMap, topic2HiSections } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2UrbanSettlements: TopicNotebookSpec = {
  topicSlug: 'growth-of-urban-settlements',
  summary:
    'Analyzes trends in Indian urbanization, the demographic explosion of Census towns, debates on over-urbanization and industrial preconditions, M.S.A. Rao’s classification of urban impact on villages, and the empirical replication of rural caste and kinship imprints in urban spaces.',
  summaryHinglish:
    'Bharat mein shehari bastiyon ke vikas ka adhyayan: Janganana ke trends, Census towns ka tezi se uday, Over-Urbanization aur udyogik preconditions ki bahas, M.S.A. Rao ka gaon par shehari asar ka vargikaran, aur shehar mein gaon ke jaati-biradari rishton ka dohraav.',
  thinkerSlugs: ['emile-durkheim', 'max-weber', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'evolution-of-modern-industry',
    'slums-and-urban-deprivation',
    'changing-modes-of-production-agriculture',
    'rural-labour-bondage-migration',
    'social-mobility',
  ],
  mindMap: topic2EnMindMap,
  mindMapHinglish: topic2HiMindMap,
  sections: topic2EnSections,
  sectionsHinglish: topic2HiSections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2UrbanSettlements
