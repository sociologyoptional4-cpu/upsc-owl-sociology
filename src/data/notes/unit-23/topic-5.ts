import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5EnMindMap, topic5EnSections } from './topic-5-en'
import { topic5HiMindMap, topic5HiSections } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5EthnicityIdentity: TopicNotebookSpec = {
  topicSlug: 'ethnicity-and-identity-movements',
  summary:
    'Examines the sociological conceptualization of ethnicity (primordialism vs instrumentalism), Myron Weiner’s "Sons of the Soil" nativist framework, the dynamics of sub-ethnicity and cosmetic federalism in North-East autonomy accords, and how ethnic rhetoric camouflages competition for scarce economic and political resources.',
  summaryHinglish:
    'Nrijatiyata (ethnicity) ki samajshastriya samajh (primordialism banam instrumentalism), Myron Weiner ka "Sons of the Soil" nativist model, North-East mein sub-ethnicity aur autonomy accords ki chunautiyan, tatha zameen aur daulat par qabza karne ki asli aarthik jung par pehchan ke parde ka vishleshan.',
  thinkerSlugs: ['max-weber', 'emile-durkheim', 'yogendra-singh'],
  relatedTopicSlugs: [
    'ethnic-conflicts-communalism',
    'colonial-policies-and-tribes',
    'political-parties-pressure-groups-elite',
    'protest-social-movements-revolution',
    'social-background-of-indian-nationalism',
  ],
  mindMap: topic5EnMindMap,
  mindMapHinglish: topic5HiMindMap,
  sections: topic5EnSections,
  sectionsHinglish: topic5HiSections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}

export default topic5EthnicityIdentity
