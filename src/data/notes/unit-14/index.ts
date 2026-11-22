import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1Perspectives } from './topic-1'
import { topic2Features } from './topic-2'
import { topic3Untouchability } from './topic-3'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 14 — Caste System',
  center: 'Caste System in India',
  subtitle: 'Classical Perspectives • Structural Features & Jajmani • Untouchability & Dalit Assertion',
  branches: [
    {
      title: '14.1 Perspectives on Caste',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'M.N. Srinivas', 'Louis Dumont', 'André Béteille'],
      points: [
        'Ghurye: Indological attributional model listing six structural features',
        'Srinivas: Field view of village life, Sanskritization, and Dominant Caste',
        'Dumont: Structuralist binary opposition of Pure vs Impure (status > power)',
        'Béteille & Gupta: Caste, Class, Power detachment and multiple contested hierarchies',
      ],
    },
    {
      title: '14.2 Features & Modernity',
      color: 'yellow',
      thinkers: ['Dipankar Gupta', 'William Wiser', 'Imtiaz Ahmad', 'Rudolph & Rudolph'],
      points: [
        'Attributional book-view vs interactional field transactions (food, services)',
        'Jajmani breakdown: Feudal coercion replaced by market cash wages and migration',
        'Pan-religious penetration: Ashraf-Ajlaf-Arzal among Muslims; Mazhabis among Sikhs',
        'Modern persistence: Politicisation, caste associations, and caste capitalism',
      ],
    },
    {
      title: '14.3 Untouchability & Ambedkar',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Mahatma Gandhi', 'Sukhadeo Thorat', 'Kanshi Ram'],
      points: [
        'Ambedkar: Caste is division of labourers governed by graded inequality',
        'Annihilation of Caste (1936): Inter-caste marriage, state priesthood, de-sanctifying Shastras',
        'Gandhi vs Ambedkar: Moral Harijan reform vs structural constitutional rights',
        'Persistent modern forms: Mid-day meal bias, manual scavenging, housing exclusion',
      ],
    },
    {
      title: 'PYQ Trends & Answer Formula',
      color: 'pink',
      thinkers: ['14 Questions Total', '5 Perspectives', '5 Features', '4 Untouchability'],
      points: [
        'Top repeat themes: Dumont vs Gupta (difference), Sanskritization, Ambedkarite critique',
        'Balance book view with subaltern realities: cite Sripuram, Rampur, and Navsarjan data',
        'Ground concepts in contemporary India: Pasmanda movement, DICCI, Shaadi.com filters',
        'Answer formula: Define concept -> Compare thinkers -> Empirical Indian proof -> Balanced end',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 14 — Caste System',
  center: 'Bharat Mein Caste System',
  subtitle: 'Classical Nazariye • Features Aur Jajmani • Ashprishyata Aur Dalit Assertion',
  branches: [
    {
      title: '14.1 Caste Par Nazariye',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'M.N. Srinivas', 'Louis Dumont', 'André Béteille'],
      points: [
        'Ghurye: Shastriya granthon se nikale gaye chhe sthir structural lakshan',
        'Srinivas: Gaon ka field view, Sanskritization aur Dominant Caste ka dabdaba',
        'Dumont: Pure vs Impure ka binary opposition jahan status taqat ko gher le',
        'Béteille & Gupta: Caste, Class, Power ka algaav aur discrete jati garv',
      ],
    },
    {
      title: '14.2 Features Aur Badlaav',
      color: 'yellow',
      thinkers: ['Dipankar Gupta', 'William Wiser', 'Imtiaz Ahmad', 'Rudolph & Rudolph'],
      points: [
        'Attributional book view vs interactional gaon ke khane-peene ka len-den',
        'Jajmani ka patan: Cash economy aur shehri palayan ne pustaini bandhan tode',
        'Gair-Hindu samaj: Muslim samaj mein Ashraf-Ajlaf-Arzal; Sikh Mazhabi daraar',
        'Modern roop: Caste associations, chunavi vote bank aur caste capitalism',
      ],
    },
    {
      title: '14.3 Ashprishyata Aur Ambedkar',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Mahatma Gandhi', 'Sukhadeo Thorat', 'Kanshi Ram'],
      points: [
        'Ambedkar: Kaam ka nahi, mazdooron ka batwara aur graded inequality ka jaal',
        'Annihilation of Caste: Inter-caste marriage, shastriya pavitrata todna, Navayana',
        'Gandhi vs Ambedkar: Naitik Harijan sudhaar vs sanvidhanik adhikar vad',
        'Modern bhedbhav: Mid-day meal chhuachhoot, manual scavenging, housing bias',
      ],
    },
    {
      title: 'PYQ Trends Aur Strategy',
      color: 'pink',
      thinkers: ['14 Total Sawaal', '5 Perspectives', '5 Features', '4 Untouchability'],
      points: [
        'Sabse zyada pooche gaye: Dumont vs Gupta (difference), Sanskritization, Ambedkar',
        'Book view ke saath subaltern reality balance karo: Sripuram, Rampur, Navsarjan survey',
        'Live Indian examples jodo: Pasmanda Muslim, DICCI vyapar, Shaadi.com gotra filters',
        'Answer formula: Define karo -> Thinkers compare karo -> Indian example -> Balanced end',
      ],
    },
  ],
}

export const unit14Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'caste-system',
  overview:
    'Unit 14 forms the intellectual bedrock of UPSC Sociology Paper 2. Here you explore how classical Indology and structural-functional fieldwork debated the nature of caste, how the traditional Jajmani economy gave way to horizontal caste associations and non-Hindu stratification, and how Dr. B.R. Ambedkar’s subaltern sociology of graded inequality and caste annihilation challenges conventional functionalist wisdom.',
  overviewHinglish:
    'Unit 14 UPSC Sociology Paper 2 ki sabse ahem neev hai. Yahin se aap samajhte hain ki Indological granthon aur zameeni fieldwork ne caste ko kaise alag dekha, Jajmani gaon tootkar modern chunavi vote bank aur gair-Hindu caste mein kaise badla, aur Dr. B.R. Ambedkar ke graded inequality aur caste annihilation ke krantikari vicharon ne mainstream samajshastra ko kaise badal kar rakh diya.',
  studySequence: [
    {
      step: '1. Master the Four Perspectives',
      detail:
        'Contrast Ghurye’s Indological attributes, Srinivas’s field dynamics (Sanskritization, Dominant Caste), Dumont’s binary opposition of Pure and Impure, and Béteille’s Weberian decoupling of Caste, Class, and Power in Sripuram.',
    },
    {
      step: '2. Unpack Features, Jajmani & Non-Hindu Caste',
      detail:
        'Compare attributional vs interactional methodologies, trace the economic collapse of the Jajmani system, examine Dipankar Gupta’s discrete castes, and document empirical caste stratification among Muslims, Sikhs, and Christians.',
    },
    {
      step: '3. Internalise Ambedkarite Praxis & Untouchability',
      detail:
        'Analyse Ambedkar’s diagnosis of caste as a division of labourers and graded inequality, study the radical blueprint of Annihilation of Caste, contrast Gandhi and Ambedkar, and catalog modern subtle forms of untouchability.',
    },
    {
      step: '4. Solve 14 UPSC PYQs',
      detail:
        'Practice all 14 past-year questions (2015–2024) using the rigorous 4-step answer framework: Conceptual definition -> Thinker debate -> Empirical Indian case study -> Forward-looking conclusion.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Chaar Mukhya Nazariye Pukhta Karo',
      detail:
        'Ghurye ke shastriya lakshan, Srinivas ka field view (Sanskritization, Dominant Caste), Dumont ka Pure vs Impure structuralism, aur Béteille ka Sripuram mein Caste-Class-Power algaav aapas mein compare karo.',
    },
    {
      step: '2. Features, Jajmani Aur Gair-Hindu Caste Samjho',
      detail:
        'Attributional vs interactional approach ka antar saaf karo, Jajmani system ke patan ke kaaran dekho, Dipankar Gupta ka discrete castes model samjho, aur Muslim, Sikh aur Isai samudaayon mein caste ke roop note karo.',
    },
    {
      step: '3. Ambedkarite Vichar Aur Ashprishyata Master Karo',
      detail:
        'Ambedkar ka division of labourers aur graded inequality samjho, Annihilation of Caste ke krantikari upaaye yaad karo, Gandhi-Ambedkar debate compare karo, aur modern daur mein ashprishyata ke chhipe roop dekho.',
    },
    {
      step: '4. 14 PYQs Practice Karo',
      detail:
        '2015 se 2024 tak ke sabhi 14 PYQs ko 4-step answer formula se practice karo: Define karo -> Thinkers compare karo -> Zameeni Indian udaharan -> Santulit conclusion.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u04-01-caste-thinkers-matrix.webp',
      title: 'Perspectives on Caste System',
      titleHinglish: 'Perspectives on Caste System — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 4 infographic: Perspectives on Caste System — Four Classical & Contemporary Frameworks on Caste',
      caption: 'Four Classical & Contemporary Frameworks on Caste (Perspectives on Caste System).',
      captionHinglish: 'Four Classical & Contemporary Frameworks on Caste — Perspectives on Caste System ka visual saransh.',
    },
    {
      assetFile: 'p2-u04-02-untouchability-annihilation.webp',
      title: 'Features, Jajmani & Untouchability',
      titleHinglish: 'Features, Jajmani & Untouchability — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 4 infographic: Features, Jajmani & Untouchability — Structural Exclusion, Non-Hindu Caste & Ambedkarite Praxis',
      caption: 'Structural Exclusion, Non-Hindu Caste & Ambedkarite Praxis (Features, Jajmani & Untouchability).',
      captionHinglish: 'Structural Exclusion, Non-Hindu Caste & Ambedkarite Praxis — Features, Jajmani & Untouchability ka visual saransh.',
    },
  ],
  topics: [topic1Perspectives, topic2Features, topic3Untouchability],
}

export default unit14Notebook
