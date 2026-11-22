import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1VillageStudies } from './topic-1'
import { topic2AgrarianStructure } from './topic-2'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 3 — Rural and Agrarian Social Structure',
  center: 'Rural & Agrarian Social Structure',
  subtitle: 'Colonial Revenue • Village Debates • Land Reforms • Agrarian Stratification',
  branches: [
    {
      title: '1. Idea of Village & Little Republics',
      color: 'lavender',
      thinkers: ['Charles Metcalfe', 'Henry Maine', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Colonial administrators romanticized villages as isolated, unchanging "Little Republics"',
        'Empirical 1950s field studies disproved autarky through exogamy, haats, and state linkages',
        'Ambedkar exposed the village as a den of inequity; Gandhi championed moral Gram Swaraj',
        'Béteille civilizational microcosm vs Dipankar Gupta "dying village" nocturnal dormitories',
      ],
    },
    {
      title: '2. Colonial Land Tenure Systems',
      color: 'yellow',
      thinkers: ['Lord Cornwallis', 'Thomas Munro', 'Holt Mackenzie', 'H. Venkatasubbiah'],
      points: [
        'Zamindari (1793): Absentee landlordism, multi-tier sub-infeudation, and forced begar',
        'Ryotwari (1820) and Mahalwari (1822): Direct peasant and village revenue extraction',
        'Venkatasubbiah’s Thesis of Indistinguishability: All converged into debt-ridden distress',
        'Commercialisation and moneylenders sparked militant peasant revolts across British India',
      ],
    },
    {
      title: '3. Post-Independence Land Reforms',
      color: 'mint',
      thinkers: ['P.C. Joshi', 'Vinoba Bhave', 'Jawaharlal Nehru', 'Hare Krishna Konar'],
      points: [
        'P.C. Joshi’s 3 approaches: Gandhian Bhoodan, Marxist insurrection, Radical Nationalist statutes',
        'Four pillars: Intermediary abolition (success), tenancy reforms, ceilings, consolidation',
        'Ceiling sabotage: Widespread benami transfers, fictitious relatives, and orchard exemptions',
        'Regional divergence: Left mobilization in Kerala/Bengal vs Hindi heartland landlord evasion',
      ],
    },
    {
      title: '4. Agrarian Stratification & Politics',
      color: 'pink',
      thinkers: ['Daniel Thorner', 'Lloyd & Susanne Rudolph', 'Paul Brass', 'Malcolm Adiseshiah'],
      points: [
        'Thorner’s triad: Malik (rentiers), Kisan (working peasants), Mazdoor (landless labourers)',
        'Rise of "Bullock Capitalists": Intermediate castes (Jats, Yadavs, Kurmis) gained dominance',
        'Political realignment: Peasant parties displaced Congress single-party hegemony (Charan Singh)',
        'Persistence of landlessness: Defensive evictions and exclusion of Dalit and female tillers',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 3 — Rural and Agrarian Social Structure',
  center: 'Gramin aur Kisan Samajik Dhancha',
  subtitle: 'Colonial Lagaan • Gaon ki Behes • Land Reforms • Kisan Vargikaran',
  branches: [
    {
      title: '1. Gaon ka Khayal & Little Republics',
      color: 'lavender',
      thinkers: ['Charles Metcalfe', 'Henry Maine', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Colonial afsaron ne gaon ko akele, thahre hue "Little Republics" bata kar loot justify ki',
        '1950s ke field studies ne sabit kiya: rishtedaari, haat aur shashan se gaon hamesha jude the',
        'Ambedkar ne gaon ko bhedbhav aur gutbazi ka adda bataya; Gandhi ne Gram Swaraj chaha',
        'Béteille ka sanskritik aaina banam Dipankar Gupta ka ujadta "nocturnal dormitory" gaon',
      ],
    },
    {
      title: '2. Colonial Lagaan Vyavastha',
      color: 'yellow',
      thinkers: ['Lord Cornwallis', 'Thomas Munro', 'Holt Mackenzie', 'H. Venkatasubbiah'],
      points: [
        'Zamindari (1793): Calcutta ke absentee landlords, sub-infeudation aur kisan par atyachar',
        'Ryotwari (1820) aur Mahalwari (1822): Kisan aur gaon par bhaari cash lagaan ka bojh',
        'Venkatasubbiah ka Thesis: 1940s tak sahukar ke karz se teeno systems ek jaise shoshankari hue',
        'Kisanon ki kangaali se Tebhaga, Telangana aur Deccan ke aitihasik kisan vidroh bhadke',
      ],
    },
    {
      title: '3. Azaadi ke Baad Land Reforms',
      color: 'mint',
      thinkers: ['P.C. Joshi', 'Vinoba Bhave', 'Jawaharlal Nehru', 'Hare Krishna Konar'],
      points: [
        'P.C. Joshi ke 3 approaches: Vinoba ka Bhoodan, Marxist class war, aur sarkari kanoon',
        'Chaar pillars: Zamindari khatma (safal), tenancy sudhar, hadbandi ceiling, chakbandi',
        'Ceiling ki chori: Benami farzi registry aur bagichon ki chhoot se ameer zameendar bach gaye',
        'State-wise farq: Kerala aur Bengal (Operation Barga) safal banam UP-Bihar mein evasion',
      ],
    },
    {
      title: '4. Kisan Varg & Rajneetik Badlaav',
      color: 'pink',
      thinkers: ['Daniel Thorner', 'Lloyd & Susanne Rudolph', 'Paul Brass', 'Malcolm Adiseshiah'],
      points: [
        'Thorner ka triad: Malik (rent lene wale), Kisan (khet jotne wale), Mazdoor (bhoomiheen)',
        'Bullock Capitalists ka uday: Intermediate kisan jaatiyon (Jat, Yadav, Kurmi) ko taqat mili',
        'Rajneeti mein kranti: Regional parties ne Congress ka ekchhatra raj khatam kiya (Charan Singh)',
        'Bhoomiheenta barkarar: Defensive evictions se Dalit aur mahila kisan zameen se door rahe',
      ],
    },
  ],
}

export const unit13Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'rural-and-agrarian-social-structure',
  overview:
    'Unit 3 unpacks the political economy and sociology of rural India. It deconstructs the colonial myth of self-sufficient "Little Republics" through the 1950s golden age of village studies, analyzes the convergence of colonial revenue systems (Zamindari, Ryotwari, Mahalwari), and evaluates how post-independence land reforms empowered intermediate "bullock capitalist" peasant castes while leaving landless Dalits and tenant insecurity largely intact.',
  overviewHinglish:
    'Unit 3 gaon aur kheti ke samajik-rajneetik taane-baane ko kholta hai. Yeh colonial afsaron ke "Little Republics" wale dhol ko 1950s ke empirical village studies se dismantle karta hai, angrezi lagaan vyavasthaon (Zamindari, Ryotwari, Mahalwari) ke aapsi shoshan ko samjhata hai, aur dikhata hai ki azaadi ke land reforms ne kaise madhyam kisan jaatiyon ("bullock capitalists") ko shakti di par Dalit khetihar mazdooron ko zameen se banchhit chhod diya.',
  studySequence: [
    {
      step: '1. Deconstruct the Idea of the Village',
      detail:
        'Contrast Metcalfe’s colonial "Little Republics" myth with the 1950s empirical field view, and compare the competing visions of Gandhi, Ambedkar, Nehru, and Béteille.',
    },
    {
      step: '2. Master Colonial Revenue Evolution',
      detail:
        'Compare Zamindari, Ryotwari, and Mahalwari systems, and apply H. Venkatasubbiah’s Thesis of Indistinguishability to explain how all three converged into de facto usurious landlordism by the 1940s.',
    },
    {
      step: '3. Evaluate Land Reforms Across 4 Pillars',
      detail:
        'Examine P.C. Joshi’s three ideological approaches (Gandhian, Marxist, Radical Nationalist) and critically assess the uneven outcomes of intermediary abolition, tenancy acts, ceilings, and consolidation.',
    },
    {
      step: '4. Practice All 9 Unit PYQs (2016–2024)',
      detail:
        'Solve all 9 UPSC questions across both chapters using structured 4-step answers that link historical institutional shifts to contemporary agrarian distress and intermediate caste politics.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Gaon ke Khayal ko Samjho',
      detail:
        'Metcalfe ke colonial "Little Republics" myth ko 1950s ke field studies se todna seekho, aur Gandhi, Ambedkar, Nehru aur Béteille ke takraate hue vicharon ko compare karo.',
    },
    {
      step: '2. Colonial Lagaan ka Sach Dekho',
      detail:
        'Zamindari, Ryotwari aur Mahalwari ki tulna karo, aur H. Venkatasubbiah ke Thesis of Indistinguishability se samjho ki 1940s tak sabhi mein shoshan ek jaisa kyun ho gaya.',
    },
    {
      step: '3. Land Reforms ke Chaar Pillars ko Evaluate Karo',
      detail:
        'P.C. Joshi ke 3 approaches (Gandhian, Marxist, Radical Nationalist) ko samjho aur zamindari abolition, tenancy, ceiling aur chakbandi ke adhoore natijon ka vishleshan karo.',
    },
    {
      step: '4. Sabhi 9 Unit PYQs (2016–2024) Solve Karo',
      detail:
        'Dono topics ke 9 UPSC sawaalon ko 4-step micro framework se practice karo, jisme intermediate castes ("bullock capitalists") aur Dalit bhoomiheenta ke zameeni points shamil hon.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u03-01-village-studies-debate.webp',
      title: 'Indian Village & Village Studies',
      titleHinglish: 'Indian Village & Village Studies — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 3 infographic: Indian Village & Village Studies — Myth of Little Republics vs Field Realities',
      caption: 'Myth of Little Republics vs Field Realities (Indian Village & Village Studies).',
      captionHinglish: 'Myth of Little Republics vs Field Realities — Indian Village & Village Studies ka visual saransh.',
    },
    {
      assetFile: 'p2-u03-02-land-tenure-reforms.webp',
      title: 'Land Tenure & Land Reforms',
      titleHinglish: 'Land Tenure & Land Reforms — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 3 infographic: Land Tenure & Land Reforms — Colonial Revenue Systems to Post-1947 Land Reforms',
      caption: 'Colonial Revenue Systems to Post-1947 Land Reforms (Land Tenure & Land Reforms).',
      captionHinglish: 'Colonial Revenue Systems to Post-1947 Land Reforms — Land Tenure & Land Reforms ka visual saransh.',
    },
  ],
  topics: [topic1VillageStudies, topic2AgrarianStructure],
}

export default unit13Notebook
