import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic4EnMindMap, topic4EnSections } from './topic-4-en'
import { topic4HiMindMap, topic4HiSections } from './topic-4-hi'
import { topic4PyqsEn } from './topic-4-pyqs-en'
import { topic4PyqsHi } from './topic-4-pyqs-hi'

export const topic4InformalChildLabour: TopicNotebookSpec = {
  topicSlug: 'informal-sector-child-labour',
  summary:
    'Explores the sociology of the informal sector in India (Keith Hart vs Jan Breman’s dualism critique), distressed agrarian push migration, the feminization of precarious labour (Maria Mies), and Neera Burra’s structural analysis of child labour alongside the limits of the 2016 Child Labour Amendment Act and RTE 2009.',
  summaryHinglish:
    'Bharat ke informal sector ka samajshastriya vishleshan: Keith Hart banam Jan Breman ka dualism critique, kheti ke sankat se distressed migration, mahila shram ki precarity (Maria Mies), aur Neera Burra dwara bal shram ke structural karan tatha 2016 kanoon aur RTE Act 2009 ki seemayein.',
  thinkerSlugs: ['karl-marx', 'br-ambedkar', 'robert-k-merton'],
  relatedTopicSlugs: [
    'formal-and-informal-organisation-of-work',
    'rural-labour-bondage-migration',
    'working-class-in-india',
    'slums-and-urban-deprivation',
    'poverty-deprivation-inequalities',
  ],
  mindMap: topic4EnMindMap,
  mindMapHinglish: topic4HiMindMap,
  sections: topic4EnSections,
  sectionsHinglish: topic4HiSections,
  pyqAnswers: topic4PyqsEn,
  pyqAnswersHinglish: topic4PyqsHi,
}

export default topic4InformalChildLabour
