import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1AgrarianClassStructure } from './topic-1'
import { topic2IndustrialClassStructure } from './topic-2'
import { topic3MiddleClassesInIndia } from './topic-3'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 6 — Social Classes in India',
  center: 'Social Classes in India',
  subtitle: 'Agrarian Formations • Industrial Classes & Labour • Middle Class Contradictions',
  branches: [
    {
      title: '1. Agrarian Class Structure',
      color: 'lavender',
      thinkers: ['Daniel Thorner', 'André Béteille', 'Jan Breman', 'Utsa Patnaik'],
      points: [
        'Thorner’s 3-fold typology: Malik (rentier/landowner), Kisan (working peasant), Mazdoor (labourer)',
        'Béteille’s Tanjore matrix: Shift from harmonic caste-class overlap to differentiated open classes',
        'Commercialization & Green Rev: Cash cropping, input squeeze, and Utsa Patnaik’s exploitation index',
        'Footloose Labour (Jan Breman): Dissolution of patron-client ties into neo-bondage and circular migration',
      ],
    },
    {
      title: '2. Industrial Capitalist Class',
      color: 'yellow',
      thinkers: ['Harish Damodaran', 'R. Vaidyanathan', 'Claude Markovits'],
      points: [
        'Colonial merchant roots: Parsi, Marwari, and Gujarati comprador capital in textiles and shipping',
        'Damodaran’s three streams: Traditional Bania, agrarian surplus capital, and knowledge tech firms',
        'Caste as Social Capital (Vaidyanathan): Trust, informal credit, and the process of Vaishyaization',
        'Persistent boardroom exclusion: Dalits, Muslims, and women structurally barred from large corporate boards',
      ],
    },
    {
      title: '3. Industrial Working Class & Precarity',
      color: 'mint',
      thinkers: ['Morris D. Morris', 'Jan Breman', 'Datta Samant', 'E.P. Thompson'],
      points: [
        'Early committed labour: Multi-generational factory workforce in Bombay, Kanpur, and Jamshedpur',
        'The 1982 Bombay Textile Strike watershed: Factory shutdowns and migration to informal powerlooms',
        'Informalization of the formal sector: Contract labourers comprising 70–80% of auto and factory floors',
        'The algorithmic gig economy: App-based piece-rate workers lacking statutory pensions and union safety',
      ],
    },
    {
      title: '4. Middle Classes & Democratic Ambivalence',
      color: 'pink',
      thinkers: ['B.B. Misra', 'André Béteille', 'Leela Fernandes', 'Pavan Varma'],
      points: [
        'Colonial origins to Nehruvian state: English-educated administrative babus to PSU technocrats',
        'Béteille’s paradox: Internal heterogeneity, linguistic divides, and transitional hypocrisy',
        'Post-1991 New Middle Class: Consumerist citizenship, gated enclaves, and politics of forgetting',
        'Democratic ambivalence: Dominance in civil society/RWAs alongside low electoral booth turnout',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 6 — Social Classes in India (Hinglish)',
  center: 'Social Classes in India',
  subtitle: 'Agrarian Formations • Industrial Classes & Labour • Middle Class Contradictions',
  branches: [
    {
      title: '1. Agrarian Class Structure',
      color: 'lavender',
      thinkers: ['Daniel Thorner', 'André Béteille', 'Jan Breman', 'Utsa Patnaik'],
      points: [
        'Thorner ka 3-tier model: Malik (zameendar), Kisan (khetahar kisan), Mazdoor (dehadhidar)',
        'Béteille ka Tanjore adhyayan: Harmonic system se tootkar disharmonic open class mein badlaav',
        'Green Revolution aur market: Cash crops, input laagat ka bojh aur kisaan aatmhatyaon ka sankat',
        'Footloose Labour (Jan Breman): Halipratha ka collapse aur seasonal circular migrant mazdoori',
      ],
    },
    {
      title: '2. Industrial Capitalist Varg',
      color: 'yellow',
      thinkers: ['Harish Damodaran', 'R. Vaidyanathan', 'Claude Markovits'],
      points: [
        'Merchant capital ki buniyaad: Parsi, Marwari aur Gujarati parivaron ka manufacturing mein dabdaba',
        'Damodaran ke 3 pathways: Traditional Bania, kheti ke munafay se bane udyogpati, aur IT capital',
        'Caste as Social Capital: Biradari ka aapsi vishwas, informal credit aur Vaishyaization ka daur',
        'Corporate boardrooms ka bahishkar: 90% se zyada directors unchi jati ke purush; Daliton ki andekhi',
      ],
    },
    {
      title: '3. Industrial Mazdoor Varg',
      color: 'mint',
      thinkers: ['Morris D. Morris', 'Jan Breman', 'Datta Samant', 'E.P. Thompson'],
      points: [
        'Early committed labour: Bombay, Kanpur aur Jamshedpur ke pakke textile v steel mazdoor bastiyan',
        '1982 Bombay Textile Strike: Mills ka collapse aur unorganized powerlooms mein production shift',
        'Formal sector ka thekedari-karan: Modern assembly line par 70-80% contract workers ka shoshan',
        'Platform gig economy: Zomato, Swiggy aur cab drivers; algorithmic control aur zero PF/ESI cover',
      ],
    },
    {
      title: '4. Madhyam Varg Aur Loktantra',
      color: 'pink',
      thinkers: ['B.B. Misra', 'André Béteille', 'Leela Fernandes', 'Pavan Varma'],
      points: [
        'Colonial babudom se Nehruvian PSUs tak: Desh-nirman ki sadgi aur secure sarkari naukriyan',
        'Béteille ka virodhabhas: Aantarik bhedbhav, bhasha ki khayi aur transitional samajik hypocrisy',
        '1991 ke baad ka New Middle Class: Consumerist citizenship, gated enclaves aur bastiyon ko hatana',
        'Loktantrik doglapann: Media aur RWAs mein zor-daar aawaz par chunav ke din voting se gayab rehna',
      ],
    },
  ],
}

export const unit16Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'social-classes-in-india',
  overview:
    'Comprehensive sociological analysis of class formation and transformation in India. Examines the agrarian class hierarchy through Daniel Thorner and André Béteille, the industrial capitalist and working classes through Harish Damodaran, R. Vaidyanathan, and Jan Breman, and the cultural contradictions of the Indian middle classes from colonial administration to post-1991 neoliberal consumerism.',
  overviewHinglish:
    'Bharat ke samajik vargon (social classes) ke udbhav aur badlaav ka vishleshan. Daniel Thorner aur André Béteille ke madhyam se kheti ke varg-dhanche, Harish Damodaran aur Jan Breman ke zariye industrial capitalists aur contractual mazdooron, aur Leela Fernandes v André Béteille ke dwara madhyam varg ke sanskritik virodhabhason aur consumerist citizenship ki padtaal karta hai.',
  studySequence: [
    {
      step: '1. Master Agrarian Class Formations',
      detail:
        'Deconstruct Daniel Thorner’s Malik-Kisan-Mazdoor typology, André Béteille’s Tanjore matrix of caste-class-power delinking, commercialization distress, footloose labour, and the caste-class nexus creating extreme rural poverty.',
    },
    {
      step: '2. Analyze Industrial Capitalists & Caste Networks',
      detail:
        'Trace the transition from colonial merchant capital to modern multi-caste capitalism using Harish Damodaran’s three trajectories, evaluate R. Vaidyanathan’s concept of Caste as Social Capital and Vaishyaization, and examine corporate boardroom exclusion.',
    },
    {
      step: '3. Trace Working-Class Transformation',
      detail:
        'Contrast early committed industrial labour in Bombay and Jamshedpur with contemporary contractualization, the watershed 1982 Bombay Textile Strike, informalization of formal manufacturing, and the rise of precarious platform gig workers.',
    },
    {
      step: '4. Decode Middle-Class Contradictions & Politics',
      detail:
        'Compare the Nehruvian public-sector middle class with the post-1991 New Middle Class (NMC), evaluate André Béteille’s insights on heterogeneity and transitional hypocrisy, and assess the middle class’s role in democracy and development.',
    },
    {
      step: '5. Solve 100% of Unit PYQs (2013–2023)',
      detail:
        'Review comprehensive, structured model answers for all 12 UPSC questions across the three topics in both academic English and accessible Roman Hinglish.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Kheti Ke Class Structure Ko Master Karo',
      detail:
        'Daniel Thorner ke Malik-Kisan-Mazdoor model, André Béteille ke Tanjore adhyayan, commercialization aur globalization ke asar, Jan Breman ke footloose labour, aur gaon ki extreme poverty ke caste-class nexus ko aasaan bhasha mein pakdo.',
    },
    {
      step: '2. Industrial Capitalists Aur Caste Networks Samjho',
      detail:
        'Colonial merchant capital se lekar Harish Damodaran ke 3 capitalist streams, R. Vaidyanathan ke Caste as Social Capital aur Vaishyaization, aur corporate boardrooms se Daliton v mahilaon ke bahishkar ka vishleshan karo.',
    },
    {
      step: '3. Mazdoor Varg Ke Badalte Swaroop Ko Jaano',
      detail:
        'Early committed textile aur steel mazdooron se lekar 1982 Bombay textile strike ke baad formal sector mein 70-80% thekedari (contractualization) aur app-based gig workers ke shoshan ko samjho.',
    },
    {
      step: '4. Madhyam Varg Ke Virodhabhas Aur Politics Ko Decode Karo',
      detail:
        'Purane Nehruvian sarkari middle class aur post-1991 New Middle Class ka farq samjho, André Béteille ke aantarik heterogeneity aur superficial emancipation ke arguments ko pakdo, aur loktantra mein inke doglepan ka vishleshan karo.',
    },
    {
      step: '5. Sabhi 12 Unit PYQs (2013–2023) Solve Karo',
      detail:
        'Teeno topics ke sabhi 12 UPSC sawaalon ko academic English aur natural Roman Hinglish mein structured model answers ke sath taiyar karo, jisme thinkers aur empirical field examples shamil hon.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u06-01-indian-class-pyramid.webp',
      title: 'Social Classes in India',
      titleHinglish: 'Social Classes in India — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 6 infographic: Social Classes in India — Agrarian, Industrial Capitalist & Middle Class Tiers',
      caption: 'Agrarian, Industrial Capitalist & Middle Class Tiers (Social Classes in India).',
      captionHinglish:
        'Agrarian, Industrial Capitalist & Middle Class Tiers — Social Classes in India ka visual saransh.',
    },
    {
      assetFile: 'p2-u06-02-caste-class-nexus-labour.webp',
      title: 'Caste–Class Interface & Workers',
      titleHinglish: 'Caste–Class Interface & Workers — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 6 infographic: Caste–Class Interface & Workers — Intersection of Caste, Class & Working Class Precarity',
      caption: 'Intersection of Caste, Class & Working Class Precarity (Caste–Class Interface & Workers).',
      captionHinglish:
        'Intersection of Caste, Class & Working Class Precarity — Caste–Class Interface & Workers ka visual saransh.',
    },
  ],
  topics: [
    topic1AgrarianClassStructure,
    topic2IndustrialClassStructure,
    topic3MiddleClassesInIndia,
  ],
}

export default unit16Notebook
