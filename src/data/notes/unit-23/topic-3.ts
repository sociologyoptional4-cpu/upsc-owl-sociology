import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3EnMindMap, topic3EnSections } from './topic-3-en'
import { topic3HiMindMap, topic3HiSections } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3BackwardClassesDalit: TopicNotebookSpec = {
  topicSlug: 'backward-classes-and-dalit-movement',
  summary:
    'Examines the trajectory of Dalit and Backward Class assertions from early anti-caste cultural revolts (Phule, Periyar, Ambedkar) to Dravidian anti-Brahminism, North Indian Mandal mobilization, Dalit Panther radicalism, and contemporary debates over electoral co-optation and sub-categorization.',
  summaryHinglish:
    'Dalit aur Pichhde Vargon ke aandolan ka vishleshan: Shuruati jaati-virodhi vidrohon (Phule, Periyar, Ambedkar) se lekar Dakshin ke Dravidian morche, Uttar Bharat ke Mandal aarakshan, Dalit Panthers ki bagawat aur chunavi co-optation tatha sub-categorization ke naye mod tak.',
  thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'yogendra-singh'],
  relatedTopicSlugs: [
    'perspectives-on-caste',
    'features-of-caste-system',
    'caste-conflicts',
    'social-mobility',
    'political-parties-pressure-groups-elite',
  ],
  mindMap: topic3EnMindMap,
  mindMapHinglish: topic3HiMindMap,
  sections: topic3EnSections,
  sectionsHinglish: topic3HiSections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3BackwardClassesDalit
