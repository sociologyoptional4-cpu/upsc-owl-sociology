import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2EnMindMap, topic2EnSections } from './topic-2-en'
import { topic2HiMindMap, topic2HiSections } from './topic-2-hi'
import { topic2PyqsEn } from './topic-2-pyqs-en'
import { topic2PyqsHi } from './topic-2-pyqs-hi'

export const topic2ComponentsGrowth: TopicNotebookSpec = {
  topicSlug: 'components-of-population-growth',
  summary:
    'Examines the determinants of human fertility through Kingsley Davis and Judith Blake’s 11 intermediate variables framework, Amitabh Kundu’s research on circular labour migration and exclusionary urbanisation, lessons from the 2020 reverse migration, the sociological realities of marriage vs autonomous female migration, and the interlocking dynamics of female literacy, child survival, and marital age.',
  summaryHinglish:
    'Jansankhya vridhi ke mukhya ghatako ka vishleshan: Kingsley Davis aur Judith Blake ke 11 madhyavarti charon ka framework, Amitabh Kundu ka circular shram pravasan aur shahri bahishkar, 2020 lockdown reverse migration ke samajshastriya sabak, patrilocal vivah pravasan banam swatantra mahila shram gatishilta, tatha mahila saksharta, shishu jeevan-raksha aur vivah ki umra ka aapsi sambandh.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'mn-srinivas'],
  relatedTopicSlugs: [
    'population-size-growth-composition',
    'population-policy-family-planning',
    'emerging-population-issues',
    'rural-labour-bondage-migration',
    'informal-sector-child-labour',
  ],
  mindMap: topic2EnMindMap,
  mindMapHinglish: topic2HiMindMap,
  sections: topic2EnSections,
  sectionsHinglish: topic2HiSections,
  pyqAnswers: topic2PyqsEn,
  pyqAnswersHinglish: topic2PyqsHi,
}

export default topic2ComponentsGrowth
