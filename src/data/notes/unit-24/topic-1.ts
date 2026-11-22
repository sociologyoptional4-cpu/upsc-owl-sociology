import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1EnMindMap, topic1EnSections } from './topic-1-en'
import { topic1HiMindMap, topic1HiSections } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1PopulationSizeGrowth: TopicNotebookSpec = {
  topicSlug: 'population-size-growth-composition',
  summary:
    'Examines India’s position on the Demographic Transition curve, the debate on whether the youth bulge represents an economic dividend or demographic tax, Ashish Bose’s BIMARU asymmetry and federal political tensions, Census historical milestones from 1921 to NFHS-5, and sociological critiques of Malthusian pessimism.',
  summaryHinglish:
    'Demographic Transition curve par Bharat ki sthiti ka vishleshan: Yuva aabadi ka arthik laabh ya samajik bojh (demographic tax), Ashish Bose ke BIMARU rajyon ka kshetrīya fasla aur 2026 Delimitation vivad, 1921 ke "Great Divide" se lekar NFHS-5 ke 2.0 TFR tak ke Census milestones, aur Malthus ke khilaaf Marxian v samajshastriya aalochna.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'components-of-population-growth',
    'population-policy-family-planning',
    'emerging-population-issues',
    'poverty-deprivation-inequalities',
    'working-class-in-india',
  ],
  mindMap: topic1EnMindMap,
  mindMapHinglish: topic1HiMindMap,
  sections: topic1EnSections,
  sectionsHinglish: topic1HiSections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1PopulationSizeGrowth
