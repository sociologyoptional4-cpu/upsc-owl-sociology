import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1NationDemocracyCitizenship } from './topic-1'
import { topic2PoliticalPartiesPressureGroupsElite } from './topic-2'
import { topic3RegionalismAndDecentralization } from './topic-3'
import { topic4Secularization } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 22 — Politics and Society in India',
  center: 'Politics & Society (India)',
  subtitle: 'State-Nation • Party Mobilization • Decentralization & PRIs • Secularization & Communalism',
  branches: [
    {
      title: '22.1 Nation, Democracy & Citizenship',
      color: 'lavender',
      thinkers: ['Alfred Stepan', 'Juan Linz', 'Yogendra Yadav', 'B.R. Ambedkar'],
      points: [
        'State-nation framework accommodating deep linguistic and religious pluralism',
        'Three democratic upsurges: universal franchise to Mandal to aspirational welfarism',
        'Ambedkar: Social democracy as indispensable precondition for substantive political democracy',
        'Contemporary documentation regimes (NRC/CAA) and vulnerable "paper citizens"',
      ],
    },
    {
      title: '22.2 Parties, Pressure Groups & Elites',
      color: 'yellow',
      thinkers: ['Rajni Kothari', 'M.N. Srinivas', 'Vilfredo Pareto', 'Suhas Palshikar'],
      points: [
        'Four mobilization epochs: Congress system to bullock capitalists to Mandal to Dominant Party 2.0',
        'Caste politicization: Traditional vertical vote banks transformed into horizontal caste associations',
        'Circulation of elites: Traditional anglicized rulers displaced by agrarian and subaltern elites',
        'Reservation jurisprudence (Mandal, EWS) and the sociological debate on a national Caste Census',
      ],
    },
    {
      title: '22.3 Regionalism & Decentralization',
      color: 'mint',
      thinkers: ['Paul Brass', 'Louise Tillin', 'Mahatma Gandhi', 'B.R. Ambedkar'],
      points: [
        'Paul Brass: Regionalism as elite-led sub-national assertion acting as federal safety valve',
        'Asymmetric federalism: Articles 371A–J and Sixth Schedule protecting borderland autonomies',
        '73rd & 74th Amendments: Over 3.1 million representatives and 1.4 million elected women leaders',
        'Grassroots bottlenecks: The 3Fs deficit (Funds, Functions, Functionaries) and Sarpanch-Pati proxy rule',
      ],
    },
    {
      title: '22.4 Secularization & Communalism',
      color: 'pink',
      thinkers: ['M.N. Srinivas', 'Rajeev Bhargava', 'Ashutosh Varshney', 'Paul Brass'],
      points: [
        'M.N. Srinivas: Sociological secularization (behavioral rationalization) vs constitutional secularism',
        'Principled distance: Context-sensitive state intervention vs anti-secularist critiques (Madan, Nandy)',
        'Paradox of modern India: Everyday functional secularization coexisting with resurgent public religion',
        'Communal violence: Ashutosh Varshney’s civic networks vs Paul Brass’s Institutionalized Riot Systems',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 22 — Bharat Mein Rajniti aur Samaj',
  center: 'Rajniti aur Samaj (Bharat)',
  subtitle: 'State-Nation • Party Mobilization • Satta Ka Vikendrikaran • Secularization aur Sampradayikta',
  branches: [
    {
      title: '22.1 Rashtra, Loktantra aur Nagrikta',
      color: 'lavender',
      thinkers: ['Alfred Stepan', 'Juan Linz', 'Yogendra Yadav', 'B.R. Ambedkar'],
      points: [
        'State-Nation framework: Sanvidhan dwara dharamik aur bhashayi vividhta ko sanrakshan',
        'Loktantrik lahrein: Universal adult franchise se Mandal aur aakankshi labharthi varg tak',
        'Ambedkar ki chetavni: Samajik loktantra ke bina rajnitik loktantra ret ka mahal hai',
        'Dastavezi niyam: NRC aur CAA ke dauran kagaz-heen garib nagrikon ki asuraksha',
      ],
    },
    {
      title: '22.2 Partiyan, Pressure Groups aur Elite',
      color: 'yellow',
      thinkers: ['Rajni Kothari', 'M.N. Srinivas', 'Vilfredo Pareto', 'Suhas Palshikar'],
      points: [
        'Chunavi daur: Congress system se Harit Kranti ke kisan, Mandal daur aur Dominant Party 2.0',
        'Jati ka rajnitikaran: Srinivas ke samanti vote bank se Kothari ke aadhunik jati sangathan tak',
        'Pareto ka circulation of elites: Angrezi babuon ki jagah zameeni kisan aur Dalit-Pichhde neta aaye',
        'Aarakshan ka vistar (Mandal, EWS, Rohini Aayog) aur Jati Janganna par samajshastriya bahas',
      ],
    },
    {
      title: '22.3 Kshetriyavad aur Vikendrikaran',
      color: 'mint',
      thinkers: ['Paul Brass', 'Louise Tillin', 'Mahatma Gandhi', 'B.R. Ambedkar'],
      points: [
        'Paul Brass: Kshetriyavad netaon dwara chalayi gayi sub-national assertion hai jo ekta bachati hai',
        'Asymmetric federalism: Articles 371A–J aur 6th Schedule dwara janjatiye reeti-riwajon ki suraksha',
        '73rd/74th Sanshodhan: 31 lakh se zyada pratinidhi aur 14 lakh se zyada mahila netaon ka uday',
        'Zameeni kami: 3Fs ki kami (Funds, Functions, Functionaries) aur Sarpanch-Pati pratha ka darr',
      ],
    },
    {
      title: '22.4 Secularization aur Sampradayikta',
      color: 'pink',
      thinkers: ['M.N. Srinivas', 'Rajeev Bhargava', 'Ashutosh Varshney', 'Paul Brass'],
      points: [
        'M.N. Srinivas: Rozmarra ke vyavhar mein badlav (secularization) banam kanooni secularism',
        'Principled distance: Sanvidhanik santulan banam T.N. Madan aur Ashis Nandy ki aalochnayein',
        'Modern virodhabhas: Office aur train mein scientific soch par sadakon par vishal public religion',
        'Dange kyun hote hain: Ashutosh Varshney ke civic networks banam Paul Brass ka staged IRS model',
      ],
    },
  ],
}

export const unit22Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'politics-and-society-india',
  overview:
    'Unit 22 examines the intricate dialectic between democratic politics, social structures, and cultural identities in post-colonial India. It covers Indian nation-building as a pluralist "state-nation", the deepening of democracy through successive lower-caste upsurges, and B.R. Ambedkar’s insistence on social democracy. It traces seven decades of political party mobilization, evaluating Rajni Kothari’s politicization of caste alongside M.N. Srinivas’s vote bank, pressure groups, and the circulation of elites. The unit also scrutinizes regionalism as an elite-led federal safety valve (Paul Brass), asymmetric federalism (Articles 371A–J), and the achievements and deficits of Panchayati Raj (the 3Fs crisis and Sarpanch-Pati phenomenon). Finally, it investigates M.N. Srinivas’s sociological secularization, Rajeev Bhargava’s principled distance, the paradox of everyday secularization coexisting with resurgent public religion, and sociological theories of communal riots (Ashutosh Varshney vs Paul Brass).',
  overviewHinglish:
    'Unit 22 aazad Bharat mein loktantrik rajniti, samajik bnavat aur sanskritik pehchanon ke aapsi rishton ka gehri samajshastriya vishleshan karti hai. Isme Bharat ke bahulata-vadi "state-nation" model, pichhde vargon dwara loktantra ke vistar (Yogendra Yadav ka Second Democratic Upsurge) aur B.R. Ambedkar ke samajik loktantra ko samjhaya gaya hai. Sath hi saat dashakon ke chunavi badlav, Rajni Kothari ke jati ke rajnitikaran, M.N. Srinivas ke vote bank, pressure groups aur Pareto ke circulation of elites ka adhyayan hai. Yeh unit kshetriyavad ko loktantrik safety valve (Paul Brass), asymmetric federalism aur Panchayati Raj ki kamzoriyon (3Fs deficit aur Sarpanch-Pati pratha) ko ujagar karti hai. Aakhir mein M.N. Srinivas ke sociological secularization, Rajeev Bhargava ke principled distance, modern public religion ke uday aur sampradayik dango par Ashutosh Varshney banam Paul Brass ke siddhanton ko vistaar se samjhaya gaya hai.',
  studySequence: [
    {
      step: '1. Master Nation-Building & Democratic Deepening',
      detail:
        'Contrast the Western assimilationist nation-state with India’s pluralist state-nation model (Stepan, Linz, Yadav); analyze Ambedkar’s warnings on social democracy and trace Yadav’s three democratic upsurges alongside contemporary documentation debates (Jayal, Sadiq).',
    },
    {
      step: '2. Trace Party Mobilization & Caste Dynamics',
      detail:
        'Chart the four epochs of political party mobilization from the Congress system to the labharthi coalition; evaluate Rajni Kothari’s politicization of caste versus M.N. Srinivas’s vote bank, reservation debates (Mandal, EWS), and the Caste Census controversy.',
    },
    {
      step: '3. Evaluate Federalism & Panchayati Raj',
      detail:
        'Examine Paul Brass’s thesis on regionalism as elite mobilization; analyze how asymmetric federalism (Art 371, 6th Schedule) preserves integrity; evaluate 73rd/74th PRIs alongside the 3Fs deficit and the Sarpanch-Pati phenomenon.',
    },
    {
      step: '4. Decipher Secularization & Communal Violence',
      detail:
        'Differentiate Srinivas’s sociological secularization from constitutional secularism; critique Bhargava’s principled distance via Madan and Nandy; explain the public religion paradox and contrast Varshney’s civic networks with Brass’s Institutionalized Riot Systems across all 16 PYQs.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Rashtra-Nirman aur Loktantrik Vistar Samjho',
      detail:
        'Western nation-state ke viprit Bharat ke state-nation model ko samjho; Ambedkar ke samajik loktantra, Yogendra Yadav ke teen democratic upsurges aur nagrikta dastavez (NRC/CAA) par Jayal aur Sadiq ke vicharon ko pakka karo.',
    },
    {
      step: '2. Party Mobilization aur Jati Ka Khel Dekho',
      detail:
        'Congress system se lekar naye labharthi varg tak ke chaar chunavi daur samjho; Rajni Kothari ke jati ke rajnitikaran banam Srinivas ke vote bank, aarakshan vivadon aur Caste Census ke samajshastriya tarkon ko tayar karo.',
    },
    {
      step: '3. Federalism aur Panchayati Raj Ka Mulyankan Karo',
      detail:
        'Paul Brass ke anusaar kshetriyavad ko loktantrik safety valve samjho; asymmetric federalism (Art 371, 6th Schedule) dekho; aur 73rd PRIs ke sath 3Fs deficit aur Sarpanch-Pati pratha ke zameeni reality ko samjho.',
    },
    {
      step: '4. Secularization aur Dango Ke Siddhant Master Karo',
      detail:
        'Srinivas ke dainik secularization ko sanvidhanik secularism se alag karo; Bhargava ke principled distance par Madan aur Nandy ke tark dekho; public religion ke uday aur Varshney banam Brass ke riot models ke sath sabhi 16 PYQs solve karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u12-01-politics-caste-federalism.webp',
      title: 'Democracy, Caste & Decentralization',
      titleHinglish: 'Democracy, Caste & Decentralization — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 12 infographic: Democracy, Caste & Decentralization — Party Phases, Vote Banks, PRIs & Asymmetric Federalism',
      caption: 'Party Phases, Vote Banks, PRIs & Asymmetric Federalism (Democracy, Caste & Decentralization).',
      captionHinglish: 'Party Phases, Vote Banks, PRIs & Asymmetric Federalism — Democracy, Caste & Decentralization ka visual saransh.',
    },
    {
      assetFile: 'p2-u12-02-secularism-communalism-india.webp',
      title: 'Secularization & Communalism in India',
      titleHinglish: 'Secularization & Communalism in India — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 12 infographic: Secularization & Communalism in India — Principled Distance vs Institutionalized Riot Systems',
      caption: 'Principled Distance vs Institutionalized Riot Systems (Secularization & Communalism in India).',
      captionHinglish: 'Principled Distance vs Institutionalized Riot Systems — Secularization & Communalism in India ka visual saransh.',
    },
  ],
  topics: [
    topic1NationDemocracyCitizenship,
    topic2PoliticalPartiesPressureGroupsElite,
    topic3RegionalismAndDecentralization,
    topic4Secularization,
  ],
}

export default unit22Notebook
