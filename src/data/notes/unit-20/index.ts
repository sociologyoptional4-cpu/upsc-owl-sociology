import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1RuralDev } from './topic-1'
import { topic2GreenRev } from './topic-2'
import { topic3ModesOfProduction } from './topic-3'
import { topic4RuralLabour } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 20 — Rural and Agrarian Transformation in India',
  center: 'Rural & Agrarian Transformation',
  subtitle: 'Development Schemes • Green Revolution • Mode of Production • Labour & Bondage',
  branches: [
    {
      title: '20.1 Rural Development Schemes',
      color: 'lavender',
      thinkers: ['S.C. Dube', 'A.R. Desai', 'Daniel Thorner', 'B.S. Baviskar'],
      points: [
        'CDP (1952): top-down bureaucratic engineering; S.C. Dube & A.R. Desai expose caste-class blind spots',
        'Balwant Rai Mehta Committee (1957): democratic decentralisation and 3-tier Panchayati Raj',
        'Cooperative movement: Daniel Thorner’s elite capture vs B.S. Baviskar’s cooperative capitalism in Maharashtra',
        'From IRDP leakages to rights-based MGNREGA (2005) and DAY-NRLM women’s Self-Help Groups',
      ],
    },
    {
      title: '20.2 Green Revolution & Social Change',
      color: 'yellow',
      thinkers: ['Francine Frankel', 'Lloyd & Susanne Rudolph', 'Vandana Shiva', 'Ashish Bose'],
      points: [
        'Harit Kranti: Mexican HYV seeds and tube-well irrigation ending PL-480 ship-to-mouth crisis',
        'Francine Frankel: capital-intensity deepened rich-poor polarization and triggered tenant evictions',
        'Rudolph & Rudolph: rise of "bullock capitalists" and militant farm lobbies (Tikait’s BKU, Sharad Joshi)',
        'Ecological violence (Vandana Shiva), falling water tables, "cancer train", and plunging child sex ratios',
      ],
    },
    {
      title: '20.3 Mode of Production Debate',
      color: 'mint',
      thinkers: ['Amit Bhaduri', 'Ashok Rudra', 'Utsa Patnaik', 'Hamza Alavi'],
      points: [
        'Amit Bhaduri (West Bengal): semi-feudal mode, perpetual tenant debt, and landlord resistance to technology',
        'Ashok Rudra (Punjab): agrarian capitalism with hired wage labour and capital reinvestment in tractors',
        'Utsa Patnaik: Labour Exploitation Criterion diagnosing an uneven pre-capitalist transitional phase',
        'Modern era: corporate contract farming, adverse incorporation (Geof Wood), and triadic interlocked debt',
      ],
    },
    {
      title: '20.4 Rural Labour, Bondage & Migration',
      color: 'pink',
      thinkers: ['P. Sainath', 'Jan Breman', 'Bina Agarwal', 'B.R. Ambedkar'],
      points: [
        'Agrarian distress: input cost inflation, falling real wages, and smallholder farmer suicides (P. Sainath)',
        'Jan Breman: shift from traditional Hali to seasonal "neo-bondage" in brick kilns and sugarcane cutting',
        'Bonded Labour Abolition Act (1976): persistent disguised debt contracts and administrative denial',
        'Feminisation of agriculture: male out-migration leaves women doing 70%+ farm work without land titles',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 20 — Bharat Mein Grameen Aur Kheti Badlaav',
  center: 'Rural & Agrarian Transformation',
  subtitle: 'Vikas Karyakram • Harit Kranti • Mode of Production • Mazdoori Aur Bandagi',
  branches: [
    {
      title: '20.1 Grameen Vikas Karyakram',
      color: 'lavender',
      thinkers: ['S.C. Dube', 'A.R. Desai', 'Daniel Thorner', 'B.S. Baviskar'],
      points: [
        'CDP (1952): top-down afsarshahi; S.C. Dube aur A.R. Desai ne caste aur class ke blind spots ujagar kiye',
        'Balwant Rai Mehta Committee (1957): democratic decentralisation aur 3-tier Panchayati Raj ki sifarish',
        'Sahakari samitiyan: Daniel Thorner ka elite capture vs B.S. Baviskar ka Maharashtra sugar cooperative capitalism',
        'IRDP ke leakages se lekar rights-based MGNREGA (2005) aur DAY-NRLM mahila Self-Help Groups tak ka safar',
      ],
    },
    {
      title: '20.2 Harit Kranti Aur Samajik Badlaav',
      color: 'yellow',
      thinkers: ['Francine Frankel', 'Lloyd & Susanne Rudolph', 'Vandana Shiva', 'Ashish Bose'],
      points: [
        'Harit Kranti: HYV dwarf beej aur sinchai se anaaj aatmanirbharta aayi par PL-480 lachari tooti',
        'Francine Frankel: capital-heavy technology ne ameer-gareeb khai badhai aur bataidaron ko nikala',
        'Rudolph & Rudolph: "bullock capitalists" aur dominant caste kisan lobbies (BKU, Tikait) ka uday',
        'Paryavaran ka vinash (Vandana Shiva), girta ground water, "cancer train" aur adverse child sex ratio',
      ],
    },
    {
      title: '20.3 Mode of Production Debate',
      color: 'mint',
      thinkers: ['Amit Bhaduri', 'Ashok Rudra', 'Utsa Patnaik', 'Hamza Alavi'],
      points: [
        'Amit Bhaduri (West Bengal): semi-feudal bataidari, soodkhori ka karz aur zameendar dwara technology ka virodh',
        'Ashok Rudra (Punjab): wage labour aur machinery reinvestment ke sath agrarian capitalism ka uday',
        'Utsa Patnaik: Labour Exploitation Criterion aur formal subsumption ke sath pre-capitalist transitional phase',
        'Samkaleen sthiti: corporate contract farming, adverse incorporation (Geof Wood) aur interlocked karz ka jaal',
      ],
    },
    {
      title: '20.4 Grameen Shram, Bandagi Aur Migration',
      color: 'pink',
      thinkers: ['P. Sainath', 'Jan Breman', 'Bina Agarwal', 'B.R. Ambedkar'],
      points: [
        'Kheti ka sankat: lagat badhna, sthir aamadni aur chhote kisanon ki aatmhatyaayein (P. Sainath)',
        'Jan Breman: purani Hali pratha se naye seasonal "neo-bondage" (eent-bhatte aur ganna khet) tak',
        '1976 Abolition Act: kanoon ke bawajood peshgi advance aur chhipi hui bandhua mazdoori zinda hai',
        'Kheti ka streekaran: mardon ke migration ke baad auratein 70%+ kheti karti hain par patte nahi hain',
      ],
    },
  ],
}

export const unit20Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'rural-and-agrarian-transformation',
  overview:
    'Explores the socio-economic and political transformation of rural India from post-independence Community Development Programmes and the cooperative movement debate to the class, regional, and ecological contradictions of the Green Revolution. Dissects the classic Indian Mode of Production Debate (semi-feudal vs capitalist agriculture) and examines contemporary rural distress, Jan Breman’s concept of neo-bondage among footloose seasonal migrants, and the feminisation of agriculture.',
  overviewHinglish:
    'Azaad Bharat ke grameen samaj mein aaye krantikari badlaavon ka samajshastriya vishleshan: CDP aur Sahakari Andolan (Thorner vs Baviskar) se lekar Harit Kranti ke vargiya aur ecological paradoxes tak. Sath hi Indian Mode of Production Debate (Amit Bhaduri, Ashok Rudra, Utsa Patnaik), Jan Breman ka neo-bondage aur footloose seasonal migration, tatha kheti ke streekaran (feminisation of agriculture) aur samkaleen kisan andolan ki gehri partal.',
  studySequence: [
    {
      step: '1. Master State Programmes & Cooperatives',
      detail:
        'Compare S.C. Dube’s and A.R. Desai’s critiques of the 1952 CDP. Contrast Daniel Thorner’s thesis of elite capture with B.S. Baviskar’s findings on cooperative capitalism in Maharashtra sugar cooperatives, and examine the shift to rights-based MGNREGA and women’s SHGs (DAY-NRLM).',
    },
    {
      step: '2. Deconstruct Green Revolution Paradoxes',
      detail:
        'Unpack the technocratic victory narrative using Francine Frankel’s class polarization thesis, the Rudolphs’ concept of "bullock capitalists", Vandana Shiva’s ecological violence critique, and Ashish Bose’s analysis of plunging child sex ratios in affluent North-West India.',
    },
    {
      step: '3. Dissect the Mode of Production Debate',
      detail:
        'Structure the classic EPW debate across Amit Bhaduri (semi-feudalism and interlocked markets), Ashok Rudra (agrarian capitalism and wage labour), and Utsa Patnaik (Labour Exploitation Criterion and transitional pre-capitalism), linking it to contemporary contract farming and Geof Wood’s adverse incorporation.',
    },
    {
      step: '4. Analyze Labour Precarity, Neo-Bondage & Feminisation',
      detail:
        'Contrast traditional feudal servitude (Hali system) with Jan Breman’s concept of seasonal neo-bondage in brick kilns and sugarcane fields. Investigate why bonded labour persists despite the 1976 Act, and evaluate Bina Agarwal’s framework on the feminisation of agriculture and land rights.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Sarkari Yojanaayein Aur Cooperatives Samjho',
      detail:
        '1952 ke CDP par S.C. Dube aur A.R. Desai ki critiques revise karo. Daniel Thorner ke elite capture aur B.S. Baviskar ke Maharashtra sugar cooperatives ki tulna karo, aur MGNREGA tatha DAY-NRLM mahila SHGs ke rights-based badlaav ko samjho.',
    },
    {
      step: '2. Harit Kranti Ke Paradoxes Decode Karo',
      detail:
        'Sarkari aatmanirbharta ke daawe ke peeche Francine Frankel ka vargiya dhruvav, Rudolphs ka "bullock capitalists", Vandana Shiva ka ecological vinash, aur Punjab-Haryana mein girte child sex ratio ke paradoxes ko tayyar karo.',
    },
    {
      step: '3. Mode of Production Debate Ki Behas Pakdo',
      detail:
        'Amit Bhaduri (semi-feudal model aur soodkhori), Ashok Rudra (agrarian capitalism aur wage labour) aur Utsa Patnaik (Labour Exploitation Criterion) ke teenon models yaad karo aur unhe corporate contract farming se jodo.',
    },
    {
      step: '4. Mazdoori, Neo-Bondage Aur Streekaran Parakh Lo',
      detail:
        'Purani Hali pratha aur Jan Breman ke modern neo-bondage (eent-bhatte, ganna khet, peshgi advance) ka comparison table banao. 1976 ke kanoon ki kamiyan aur Bina Agarwal ka kheti ke streekaran (feminisation of agriculture) framework master karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u10-01-rural-schemes-green-rev.webp',
      title: 'CDP, Cooperatives & Green Revolution',
      titleHinglish: 'CDP, Cooperatives & Green Revolution — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 10 infographic: CDP, Cooperatives & Green Revolution — State Programmes & the Paradoxes of Green Revolution',
      caption:
        'State Programmes & the Paradoxes of Green Revolution (CDP, Cooperatives & Green Revolution).',
      captionHinglish:
        'State Programmes & the Paradoxes of Green Revolution — CDP, Cooperatives & Green Revolution ka visual saransh.',
    },
    {
      assetFile: 'p2-u10-02-agrarian-modes-bondage.webp',
      title: 'Modes of Production & Rural Bondage',
      titleHinglish: 'Modes of Production & Rural Bondage — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 10 infographic: Modes of Production & Rural Bondage — Mode of Production Debate & Rural Labour Precarity',
      caption:
        'Mode of Production Debate & Rural Labour Precarity (Modes of Production & Rural Bondage).',
      captionHinglish:
        'Mode of Production Debate & Rural Labour Precarity — Modes of Production & Rural Bondage ka visual saransh.',
    },
  ],
  topics: [
    topic1RuralDev,
    topic2GreenRev,
    topic3ModesOfProduction,
    topic4RuralLabour,
  ],
}

export default unit20Notebook
