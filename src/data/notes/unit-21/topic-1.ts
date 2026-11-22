import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1EnMindMap, topic1EnSections } from './topic-1-en'
import { topic1HiMindMap, topic1HiSections } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1ModernIndustry: TopicNotebookSpec = {
  topicSlug: 'evolution-of-modern-industry',
  summary:
    'Examines the trajectory of modern industry in India from colonial deindustrialization, wealth drain, and enclave railway geography to Nehruvian heavy capital PSUs, the post-1991 neoliberal shift to IT services, and the persistence of caste and family conglomerates.',
  summaryHinglish:
    'Bharat mein aadhunik udyog ke vikas ka vishleshan: Angrezi shoshan, Drain Theory aur enclave udyogon se lekar Nehruvian PSUs, 1991 ke IT-services boom aur corporate houses mein jaati aur parivarik networks ki bhoomika tak.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'industrial-class-structure',
    'development-planning-mixed-economy',
    'social-organisation-of-work',
    'growth-of-urban-settlements',
    'working-class-in-india',
  ],
  mindMap: topic1EnMindMap,
  mindMapHinglish: topic1HiMindMap,
  sections: topic1EnSections,
  sectionsHinglish: topic1HiSections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1ModernIndustry
