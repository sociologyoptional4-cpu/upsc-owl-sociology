import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4EnMindMap, topic4EnSections } from './topic-4-en'
import { topic4HiMindMap, topic4HiSections } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4EmergingIssues: TopicNotebookSpec = {
  topicSlug: 'emerging-population-issues',
  summary:
    'Examines the structural challenges of demographic ageing, eldercare support systems, and the feminization of ageing; Amartya Sen’s "High-Tech Sexism" and Ashish Bose’s DEMARU states in explaining skewed Child Sex Ratios; the Three Delays model explaining maternal and infant mortality disparities across caste and class lines; and the neglected realities of women’s reproductive health in India.',
  summaryHinglish:
    'Ubharti jansankhyikiya chunautiyon ka vishleshan: Bharat mein badhte budhape ki samasya, eldercare sahayata aur budhape ka mahilakaran (feminization of ageing), Amartya Sen ka "High-Tech Sexism" aur Ashish Bose ke DEMARU rajyon mein Child Sex Ratio ka sankat, mata aur shishu mrityu dar mein The Three Delays model aur jatiya-vargiya asamanata, tatha mahilaon ke prajanan swasthya ki chhipi hui haqeeqat.',
  thinkerSlugs: ['br-ambedkar', 'emile-durkheim', 'mn-srinivas'],
  relatedTopicSlugs: [
    'population-size-growth-composition',
    'components-of-population-growth',
    'population-policy-family-planning',
    'patriarchy-entitlements-division-of-labour',
    'violence-against-women',
  ],
  mindMap: topic4EnMindMap,
  mindMapHinglish: topic4HiMindMap,
  sections: topic4EnSections,
  sectionsHinglish: topic4HiSections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}

export default topic4EmergingIssues
