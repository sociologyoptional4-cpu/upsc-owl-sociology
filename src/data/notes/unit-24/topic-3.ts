import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic3EnMindMap, topic3EnSections } from './topic-3-en'
import { topic3HiMindMap, topic3HiSections } from './topic-3-hi'
import { topic3PyqsEn } from './topic-3-pyqs-en'
import { topic3PyqsHi } from './topic-3-pyqs-hi'

export const topic3PopulationPolicy: TopicNotebookSpec = {
  topicSlug: 'population-policy-family-planning',
  summary:
    'Examines the historical evolution of India’s population policy from coercive sterilization targets during the Emergency to the rights-based and target-free paradigm of NPP 2000, Alka Basu and S.Y. Quraishi’s sociological critiques of coercive two-child laws, the institutionalized gender skew in surgical sterilisation (37.9% female vs 0.3% male), and the contentious debate on raising women’s legal marital age from 18 to 21.',
  summaryHinglish:
    'Bharat ki jansankhya neeti ka vishleshan: Emergency ke dauran jabran nasbandi quotas se lekar NPP 2000 ke adhikar-aadhrit Target-Free Approach tak ka safar, Alka Basu aur S.Y. Quraishi dwara Do-Bacche ke qanoon ki samajshastriya aalochna, nasbandi ka patriarchal gender asantulan (37.9% mahila banam 0.3% purush), tatha ladkiyon ki vivah ki qanooni umra 18 se 21 karne ke paksh-vipaksh ka samajshastriya mulyankan.',
  thinkerSlugs: ['br-ambedkar', 'karl-marx', 'yogendra-singh'],
  relatedTopicSlugs: [
    'population-size-growth-composition',
    'components-of-population-growth',
    'emerging-population-issues',
    'patriarchy-entitlements-division-of-labour',
    'violence-against-women',
  ],
  mindMap: topic3EnMindMap,
  mindMapHinglish: topic3HiMindMap,
  sections: topic3EnSections,
  sectionsHinglish: topic3HiSections,
  pyqAnswers: topic3PyqsEn,
  pyqAnswersHinglish: topic3PyqsHi,
}

export default topic3PopulationPolicy
