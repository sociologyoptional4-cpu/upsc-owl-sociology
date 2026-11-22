import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic5EnMindMap, topic5EnSections } from './topic-5-en'
import { topic5HiMindMap, topic5HiSections } from './topic-5-hi'
import { topic5PyqsEn } from './topic-5-pyqs-en'
import { topic5PyqsHi } from './topic-5-pyqs-hi'

export const topic5EthnicConflictsCommunalism: TopicNotebookSpec = {
  topicSlug: 'ethnic-conflicts-communalism',
  summary:
    'Sociologically interrogates ethnic conflicts, communalism, and religious revivalism in India, examining Bipan Chandra’s critique of communalism, Paul Brass’s Institutionalized Riot System, Steven Wilkinson’s electoral incentives, Ashutosh Varshney’s civic engagement thesis, and digital communalism.',
  summaryHinglish:
    'Bharat mein nrijatiya sangharsh, sampradayikta aur dharmik punarjagran ka samajshastriya adhyayan: Bipan Chandra ka critique, Paul Brass ka Institutionalized Riot System (IRS), Steven Wilkinson ka electoral incentive model, Ashutosh Varshney ki civic engagement theory, aur digital communalism.',
  thinkerSlugs: ['emile-durkheim', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'ethnicity-and-identity-movements',
    'problems-of-religious-minorities',
    'religious-communities-in-india',
    'religion-in-modern-society',
    'caste-conflicts',
  ],
  mindMap: topic5EnMindMap,
  mindMapHinglish: topic5HiMindMap,
  sections: topic5EnSections,
  sectionsHinglish: topic5HiSections,
  pyqAnswers: topic5PyqsEn,
  pyqAnswersHinglish: topic5PyqsHi,
}

export default topic5EthnicConflictsCommunalism
