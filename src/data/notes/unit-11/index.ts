import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1Indology } from './topic-1'
import { topic2StructuralFunctionalism } from './topic-2'
import { topic3MarxistSociology } from './topic-3'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 1 — Perspectives on Indian Society',
  center: 'Perspectives on Indian Society',
  subtitle: 'Indological Book View • Functional Field View • Marxist Dialectics',
  branches: [
    {
      title: '1. Indology (G.S. Ghurye)',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'Sir William Jones', 'Max Müller', 'P.V. Kane'],
      points: [
        'Decodes living social institutions through classical Sanskrit texts and epics',
        'Ghurye: 6 structural features of caste; disproved Risley’s racial determinism',
        'Conceptualized tribes as "backward Hindus", opposing British isolationism',
        'Theoretical pluralism: synthesized philology, diffusionism, and field surveys',
      ],
    },
    {
      title: '2. Structural Functionalism (M.N. Srinivas)',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'S.C. Dube', 'André Béteille', 'McKim Marriott'],
      points: [
        'Replaced armchair textualism (Book View) with empirical village fieldwork (Field View)',
        'Formulated Sanskritization as positional ritual mobility for subordinate jatis',
        'Identified Dominant Caste (Okkaligas) as secular rural power brokers',
        'Critiqued by Ambedkar for romanticizing villages and whitewashing caste violence',
      ],
    },
    {
      title: '3. Marxist Sociology (A.R. Desai)',
      color: 'mint',
      thinkers: ['A.R. Desai', 'Karl Marx', 'Ranajit Guha', 'Gail Omvedt'],
      points: [
        'Historical materialism: economic infrastructure shapes institutional superstructure',
        'Traced five dialectical phases in the social background of Indian nationalism',
        'Exposed post-colonial state as a capitalist "bourgeois-landlord state"',
        'Subaltern collective recovered autonomous peasant, tribal, and Dalit insurgencies',
      ],
    },
    {
      title: '4. PYQ Trends & Synthesis',
      color: 'pink',
      thinkers: ['13 Questions Total', '5 Ghurye', '4 Srinivas', '4 Desai'],
      points: [
        'Top themes: Theoretical pluralism (2025), Book vs Field view (2024, 2017), State & capital (2020)',
        'Always contrast Book View (ideals) with Field View (negotiations) and Marxist critique',
        'Ground answers in empirical cases: Rampura, Shamirpet, Sripuram, and tribal movements',
        'Micro structure: Core definition → Multi-dimensional arguments → Case study → Balanced critique',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 1 — Perspectives on Indian Society',
  center: 'Bharatiya Samaj ke Nazariye',
  subtitle: 'Indological Book View • Functional Field View • Marxist Dialectics',
  branches: [
    {
      title: '1. Indology (G.S. Ghurye)',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'Sir William Jones', 'Max Müller', 'P.V. Kane'],
      points: [
        'Prachin Sanskrit granthon aur shastron se samajik sansthaon ko samajhna',
        'Ghurye ne jaati ke 6 lakshan bataye aur Risley ke nasalvadi daave ko toda',
        'Adivasiyon ko "backward Hindus" bata kar mainstream integration par zor diya',
        'Theoretical pluralism: Shastron ke saath anthropometry aur ground survey joda',
      ],
    },
    {
      title: '2. Structural Functionalism (M.N. Srinivas)',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'S.C. Dube', 'André Béteille', 'McKim Marriott'],
      points: [
        'Book View ko kharij karke gaon ke immersive fieldwork se Field View kranti ki',
        'Sanskritization concept: Dwija jaati ke reeti apna kar positional mobility pana',
        'Dominant Caste: Zameen aur sankhya-bal ke dam par gaon ka faisla lene wali jaati',
        'Ambedkar ne aalochana ki ki isne gaon ke shoshan aur begar par parda daala',
      ],
    },
    {
      title: '3. Marxist Sociology (A.R. Desai)',
      color: 'mint',
      thinkers: ['A.R. Desai', 'Karl Marx', 'Ranajit Guha', 'Gail Omvedt'],
      points: [
        'Historical materialism: Aarthik buniyaad samajik aur kanooni imarat tay karti hai',
        'Bharatiya rashtravad ke vikas ke 5 dialectical aitihasik phases ko decode kiya',
        'Azaadi ke baad ke rajya ko capitalist "bourgeois-landlord state" saabit kiya',
        'Subaltern school ne kisan, adivasi aur Dalit vidroh ki azaad chetna ko samne laya',
      ],
    },
    {
      title: '4. PYQ Trends aur Revision',
      color: 'pink',
      thinkers: ['13 Total Sawaal', '5 Ghurye', '4 Srinivas', '4 Desai'],
      points: [
        'Sabse zaroori themes: Theoretical pluralism (2025), Book vs Field view (2024, 2017), State & capital (2020)',
        'Hamesha shastron ke aadarsh, gaon ke lenden aur Marxist shoshan ko balance karo',
        'Empirical field studies quote karo: Rampura, Shamirpet, Sripuram, aur kisan aandolan',
        'Answer formula: Clear definition → Multi-dimensional points → Indian case → Critical synthesis',
      ],
    },
  ],
}

export const unit11Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'perspectives-on-indian-society',
  overview:
    'Unit 11 serves as the methodological gateway to Paper 2, tracing how Indian society was studied through three contending lenses: the classical Sanskrit textualism of Indology (G.S. Ghurye), the empirical village ethnographies of Structural-Functionalism (M.N. Srinivas), and the conflict-oriented political economy of Marxist Sociology (A.R. Desai). Together, these perspectives reveal how civilizational continuity, lived village realities, and capitalist state contradictions intersect across modern India.',
  overviewHinglish:
    'Unit 11 Paper 2 ki methodological neev hai, jo yeh dikhati hai ki Bharatiya samaj ko teen mukhya nazariyon se kaise padha gaya: Indology ka prachin Sanskrit textualism (G.S. Ghurye), Structural-Functionalism ke zameeni gaon ke adhyayan (M.N. Srinivas), aur Marxist Sociology ka dwandvatmak class struggle lens (A.R. Desai). Yeh teenon milkar Bharat ki civilizational dharohar, gaon ki asliyat aur capitalist rajya ke virodhabhas ko samajhne ka poora dhancha taiyar karte hain.',
  studySequence: [
    {
      step: '1. Master the Indological Foundation',
      detail:
        'Understand how G.S. Ghurye used Sanskrit literature, anthropometry, and tribal assimilation ("backward Hindus") to formulate theoretical pluralism and critique colonial Orientalism.',
    },
    {
      step: '2. Decode the Field-View Revolution',
      detail:
        'Trace M.N. Srinivas’s transition from Book View to Field View through the Coorg and Rampura studies, mastering Sanskritization, Dominant Caste, and Jajmani equilibrium.',
    },
    {
      step: '3. Analyze Marxist & Subaltern Critique',
      detail:
        'Examine A.R. Desai’s five phases of nationalism and his critique of the post-colonial capitalist state, supplemented by Ranajit Guha’s Subaltern recovery of peasant agency.',
    },
    {
      step: '4. Practice 13 Unit PYQs',
      detail:
        'Solve all 13 UPSC questions (2014–2025) using multi-paradigm comparative matrices and rich empirical field references.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Indology ki Buniyaad Samjho',
      detail:
        'G.S. Ghurye ke Sanskrit granthon, anthropometry aur tribal assimilation ("backward Hindus") ke theoretical pluralism ko samjho.',
    },
    {
      step: '2. Field View Kranti ko Decode Karo',
      detail:
        'M.N. Srinivas ke Coorg aur Rampura studies se samjho ki Book View kaise toota, aur Sanskritization aur Dominant Caste ke concepts ko pakka karo.',
    },
    {
      step: '3. Marxist aur Subaltern Nazariya Dekho',
      detail:
        'A.R. Desai ke rashtravad ke 5 phase aur capitalist state ke analysis ko Ranajit Guha ke Subaltern autonomy ke saath jodo.',
    },
    {
      step: '4. Sabhi 13 PYQs Solve Karo',
      detail:
        '2014–2025 ke sabhi 13 UPSC sawaalon ko multi-paradigm comparison aur empirical case studies ke 4-step micro structure se practice karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u01-01-indian-perspectives-grid.webp',
      title: 'Perspectives on Indian Society',
      titleHinglish: 'Perspectives on Indian Society — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 1 infographic: Perspectives on Indian Society — Three Methodological Lenses on Indian Society',
      caption: 'Three Methodological Lenses on Indian Society (Perspectives on Indian Society).',
      captionHinglish: 'Three Methodological Lenses on Indian Society — Perspectives on Indian Society ka visual saransh.',
    },
    {
      assetFile: 'p2-u01-02-book-field-synthesis.webp',
      title: 'Book View, Field View & Subalternity',
      titleHinglish: 'Book View, Field View & Subalternity — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 1 infographic: Book View, Field View & Subalternity — Bridging Classical Texts, Fieldwork & Subaltern Voices',
      caption: 'Bridging Classical Texts, Fieldwork & Subaltern Voices (Book View, Field View & Subalternity).',
      captionHinglish: 'Bridging Classical Texts, Fieldwork & Subaltern Voices — Book View, Field View & Subalternity ka visual saransh.',
    },
  ],
  topics: [topic1Indology, topic2StructuralFunctionalism, topic3MarxistSociology],
}

export default unit11Notebook
