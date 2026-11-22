import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4EnMindMap, topic4EnSections } from './topic-4-en'
import { topic4HiMindMap, topic4HiSections } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4EnvironmentalMovements: TopicNotebookSpec = {
  topicSlug: 'environmental-movements',
  summary:
    'Examines the trajectory of Indian environmental movements as an "Environmentalism of the Poor", analyzing Guha and Gadgil’s three ideological strands, the Chipko movement and ecofeminist debates (Vandana Shiva vs Bina Agarwal), and the contemporary extractive development triangle (Niyamgiri, Hasdeo).',
  summaryHinglish:
    'Bharat mein paryavaran aandolano ka vishleshan: "Garibon Ka Paryavaranvad", Guha aur Gadgil ke teen vicharik dhaare, Chipko andolan aur ecofeminism vivad (Vandana Shiva banam Bina Agarwal), tatha extractive development triangle (Niyamgiri, Hasdeo) par adhyayan.',
  thinkerSlugs: ['karl-marx', 'max-weber', 'yogendra-singh'],
  relatedTopicSlugs: [
    'colonial-policies-and-tribes',
    'tribal-integration-and-autonomy',
    'protest-social-movements-revolution',
    'rural-labour-bondage-migration',
    'science-technology-and-social-change',
  ],
  mindMap: topic4EnMindMap,
  mindMapHinglish: topic4HiMindMap,
  sections: topic4EnSections,
  sectionsHinglish: topic4HiSections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}

export default topic4EnvironmentalMovements
