import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1EnMindMap, topic1EnSections } from './topic-1-en'
import { topic1HiMindMap, topic1HiSections } from './topic-1-hi'
import { topic1PyqsEn } from './topic-1-pyqs-en'
import { topic1PyqsHi } from './topic-1-pyqs-hi'

export const topic1PeasantsFarmers: TopicNotebookSpec = {
  topicSlug: 'peasants-and-farmers-movements',
  summary:
    'Examines the trajectory of agrarian mobilization in India from colonial anti-zamindari and anti-usury uprisings to the 1980s New Farmers movements fighting adverse terms of trade, and the 2020–21 historic pan-agrarian assertion against corporate deregulation.',
  summaryHinglish:
    'Bharat mein kisaan aandolano ka aitihasik vikas: Colonial daur ke zamindari aur sahukari virodhi vidrohon se lekar 1980s ke "Naye Kisaan" (MSP aur subsidy) aandolan aur 2020–21 ke teen krishi kanoon virodhi vishal loktantrik morche tak ka vishleshan.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'protest-social-movements-revolution',
    'agrarian-social-structure-land-reforms',
    'agrarian-class-structure',
    'green-revolution-and-social-change',
    'protests-and-movements-colonial-period',
  ],
  mindMap: topic1EnMindMap,
  mindMapHinglish: topic1HiMindMap,
  sections: topic1EnSections,
  sectionsHinglish: topic1HiSections,
  pyqAnswers: topic1PyqsEn,
  pyqAnswersHinglish: topic1PyqsHi,
}

export default topic1PeasantsFarmers
