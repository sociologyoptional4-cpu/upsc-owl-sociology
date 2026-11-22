import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5EnMindMap, topic5EnSections } from './topic-5-en'
import { topic5HiMindMap, topic5HiSections } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5SlumsDeprivation: TopicNotebookSpec = {
  topicSlug: 'slums-and-urban-deprivation',
  summary:
    'Examines urban slums and socio-spatial deprivation in India, theoretical paradigms (Oscar Lewis, Charles Stokes, Mike Davis, Ashis Nandy), the paradox of civic exclusion alongside indispensable informal labour, and policy debates between builder-driven vertical redevelopment and community in-situ upgradation.',
  summaryHinglish:
    'Bharat mein kachhi bastiyon (slums) aur socio-spatial vanchhana ka adhyayan: Samajshastriya nazariye (Oscar Lewis, Charles Stokes, Mike Davis, Ashis Nandy), samajik bahi-shkar banam shramik taqat ka virodhabhas, aur builder-led vertical redevelopment banam community-led in-situ upgradation ki housing nitiyan.',
  thinkerSlugs: ['karl-marx', 'emile-durkheim', 'max-weber', 'br-ambedkar'],
  relatedTopicSlugs: [
    'growth-of-urban-settlements',
    'informal-sector-child-labour',
    'poverty-deprivation-inequalities',
    'dimensions-of-stratification',
    'equality-inequality-hierarchy-exclusion',
  ],
  mindMap: topic5EnMindMap,
  mindMapHinglish: topic5HiMindMap,
  sections: topic5EnSections,
  sectionsHinglish: topic5HiSections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}

export default topic5SlumsDeprivation
