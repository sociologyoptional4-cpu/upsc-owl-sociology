import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1SocialOrganisationOfWork } from './topic-1'
import { topic2FormalAndInformalOrganisationOfWork } from './topic-2'
import { topic3LabourAndSociety } from './topic-3'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 6 — Works and Economic Life',
  center: 'Works & Economic Life',
  subtitle: 'Historical Work Modes • Formal vs Informal • Gig, Migrants & Labour Codes',
  branches: [
    {
      title: '6.1 Social Organisation of Work',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'F.W. Taylor', 'Robert Blauner'],
      points: [
        'Slave (chattel war captives) -> Feudal (land-bound serfs) -> Capitalist wage labour',
        'Marx alienation & limits of working day; Durkheim organic solidarity; Weber iron cage',
        'Taylorism ("One Best Way") & Fordism vs Elton Mayo Hawthorne human relations',
        'Blauner inverted-U automation curve, Bell post-industrial services & C.W. Mills',
      ],
    },
    {
      title: '6.2 Formal & Informal Work',
      color: 'yellow',
      thinkers: ['Max Weber', 'Peter Blau', 'Keith Hart', 'Maria Mies'],
      points: [
        'Workplace lens: Weberian bureaucracy vs Mayo & Peter Blau informal peer networks',
        'Economic sector lens: Keith Hart (1971) & NCEUS Arjun Sengupta (<10 workers)',
        'Gender bias: formal glass ceiling (Kanter) vs informal perishable vending & wage gap',
        'WFH & ILO Homework (C177): blurs boundaries; dual burden & Shadow Pandemic',
      ],
    },
    {
      title: '6.3 Labour and Society',
      color: 'mint',
      thinkers: ['Karl Marx', 'Veronica Beechey', 'Jan Breman', 'Guy Standing'],
      points: [
        'Marx Reserve Army of Labour & feminist critique (Beechey, Bruegel, Maria Mies)',
        'Globalization & 7 drivers of informalisation; need vs hurdles in regulation',
        'Tripartite Gig Economy (Uber/Zomato), employeeless firms & Axel Bruns Produsage',
        'Inter-state migrant crisis ("footloose labour") & India’s 4 New Labour Codes',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['26 Questions Total', '11 Work Modes', '6 Formal/Informal', '9 Labour & Society'],
      points: [
        'High-yield repeats: Informalisation & globalization (6), Feudal vs Capitalist/Slave (4)',
        'Contemporary hotspots: Gender bias/feminization (4), Gig/Automation/WFH (4), Migrants (2)',
        'Bridge Paper 1 theory (Marx, Weber, Mayo, Blauner) with Paper 2 Indian data (NCEUS)',
        'Micro structure: Define -> Classical & Feminist Lens -> Indian Example -> Policy End',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 6 — Works and Economic Life',
  center: 'Works & Economic Life',
  subtitle: 'Historical Work Modes • Formal vs Informal • Gig, Migrants & Labour Codes',
  branches: [
    {
      title: '6.1 Social Organisation of Work',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'F.W. Taylor', 'Robert Blauner'],
      points: [
        'Slave (chattel war captives) -> Feudal (zameen se bandhe serfs) -> Capitalist wage work',
        'Marx alienation & limits of working day; Durkheim organic solidarity; Weber iron cage',
        'Taylorism ("One Best Way") & Fordism vs Elton Mayo Hawthorne human relations',
        'Blauner inverted-U automation curve, Bell post-industrial services & C.W. Mills',
      ],
    },
    {
      title: '6.2 Formal & Informal Work',
      color: 'yellow',
      thinkers: ['Max Weber', 'Peter Blau', 'Keith Hart', 'Maria Mies'],
      points: [
        'Workplace lens: Weberian bureaucracy vs Mayo & Peter Blau informal peer networks',
        'Economic sector lens: Keith Hart (1971) & NCEUS Arjun Sengupta (<10 workers)',
        'Gender bias: formal glass ceiling (Kanter) vs informal perishable vending & wage gap',
        'WFH & ILO Homework (C177): formal/informal boundary miti; dual burden & Shadow Pandemic',
      ],
    },
    {
      title: '6.3 Labour and Society',
      color: 'mint',
      thinkers: ['Karl Marx', 'Veronica Beechey', 'Jan Breman', 'Guy Standing'],
      points: [
        'Marx Reserve Army of Labour & feminist critique (Beechey, Bruegel, Maria Mies)',
        'Globalization & informalisation ke 7 kaaran; regulation ki zaroorat aur mushkilein',
        'Tripartite Gig Economy (Uber/Zomato), employeeless firms & Axel Bruns Produsage',
        'Inter-state migrant crisis ("footloose labour") & Bharat ke 4 New Labour Codes',
      ],
    },
    {
      title: 'PYQ Trends (2013–2025)',
      color: 'pink',
      thinkers: ['26 Total Sawaal', '11 Work Modes', '6 Formal/Informal', '9 Labour & Society'],
      points: [
        'Sabse zyada repeat: Informalisation & globalization (6), Feudal vs Capitalist/Slave (4)',
        'New hotspots: Gender bias/feminization (4), Gig/Automation/WFH (4), Migrants (2)',
        'Paper 1 theory (Marx, Weber, Mayo, Blauner) ko Paper 2 Indian data (NCEUS) se jodo',
        'Answer formula: Define -> Classical & Feminist Lens -> Indian Example -> Policy End',
      ],
    },
  ],
}

export const unit06Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'works-and-economic-life',
  overview:
    'Unit 6 bridges classical sociological theory with contemporary economic transformations. Here you trace how human work evolved from slave and feudal orders to Taylorist factories and post-industrial knowledge services, how formal bureaucracies interact with the vast informal sector, and how globalization, feminization, platform gig work, circular migration, and India’s four New Labour Codes reshape labour and society today.',
  overviewHinglish:
    'Unit 6 classical sociological theory ko aaj ki badalti economy se jodta hai — yahan aap samajhte hain ki insaani kaam Slave aur Feudal samaj se nikal kar Taylorist factories aur post-industrial service/knowledge economy tak kaise aaya, formal bureaucracy aur informal sector kaise chalte hain, aur globalization, feminization, gig platforms (Uber/Zomato), migrant labourers aur Bharat ke 4 New Labour Codes aaj ke samaj ko kaise badal rahe hain.',
  studySequence: [
    {
      step: '1. Compare Historical Modes & Shop-Floor Theories',
      detail:
        'Master the contrast matrices across Slave, Feudal, and Industrial-Capitalist work, then pair Marx, Durkheim, and Weber with Taylorism, Fordism, Elton Mayo’s Hawthorne studies, and Robert Blauner’s inverted-U automation curve.',
    },
    {
      step: '2. Decode Both Lenses of Formal & Informal Work',
      detail:
        'Study formal vs informal inside the workplace (Weber, Merton, Mayo, Peter Blau) and across the macro-economy (Keith Hart, NCEUS Arjun Sengupta), paying special attention to gender bias (Kanter, Maria Mies) and ILO Homework / WFH.',
    },
    {
      step: '3. Connect Globalization, Gig Economy & Indian Labour',
      detail:
        'Link Marx’s Reserve Army of Labour and its feminist critique (Veronica Beechey, Irene Bruegel) with the tripartite Gig Economy, Axel Bruns’ Produsage, Jan Breman’s footloose migrant labourers, and India’s 4 Labour Codes.',
    },
    {
      step: '4. Practise All 26 PYQs (2013–2025)',
      detail:
        'Rehearse all 26 solved PYQs using the 4-part structure: Conceptual definition -> Classical & contemporary thinkers -> Grounded Indian empirical example (Narsapur, Tiruppur, Blinkit/Zomato, e-Shram) -> Balanced policy conclusion.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Historical Modes aur Shop-Floor Theories Compare Karo',
      detail:
        'Slave, Feudal aur Industrial-Capitalist work ke comparison tables pakke karo, aur fir Marx, Durkheim, Weber ke saath Taylorism, Fordism, Elton Mayo ke Hawthorne experiments aur Robert Blauner ka inverted-U curve samjho.',
    },
    {
      step: '2. Formal aur Informal Work ke Dono Lenses Samjho',
      detail:
        'Office ke andar (Weber, Merton, Mayo, Peter Blau) aur economy ke macro star (Keith Hart, NCEUS Arjun Sengupta) dono par formal vs informal padho — khas kar gender bias (Kanter, Maria Mies) aur WFH / ILO Homework Convention.',
    },
    {
      step: '3. Globalization, Gig Economy aur Indian Labour Jodo',
      detail:
        'Marx ki Reserve Army aur feminist critique (Veronica Beechey, Irene Bruegel) ko tripartite Gig Economy, Axel Bruns ke Produsage, Jan Breman ke footloose migrants aur Bharat ke 4 Labour Codes ke saath link karo.',
    },
    {
      step: '4. Sabhi 26 PYQs (2013–2025) Practice Karo',
      detail:
        'Definition -> Classical & feminist thinkers -> Indian example (Narsapur lace makers, Tiruppur garments, Zomato/Blinkit riders, ONORC/e-Shram) -> Balanced policy conclusion ke formula se saare 26 PYQs revise karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u06-01-work-organization.webp',
      title: 'Evolution of Work Organization',
      titleHinglish: 'Evolution of Work Organization — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P1 Unit 6 infographic: Evolution of Work Organization — Historical Shift in Social Organization of Work',
      caption: 'Historical Shift in Social Organization of Work (Evolution of Work Organization).',
      captionHinglish: 'Historical Shift in Social Organization of Work — Evolution of Work Organization ka visual saransh.',
    },
    {
      assetFile: 'p1-u06-02-formal-informal-labour.webp',
      title: 'Formal, Informal & Labour Shifts',
      titleHinglish: 'Formal, Informal & Labour Shifts — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P1 Unit 6 infographic: Formal, Informal & Labour Shifts — Formal Contracts vs Informal Precarity',
      caption: 'Formal Contracts vs Informal Precarity (Formal, Informal & Labour Shifts).',
      captionHinglish: 'Formal Contracts vs Informal Precarity — Formal, Informal & Labour Shifts ka visual saransh.',
    },
  ],
  topics: [
    topic1SocialOrganisationOfWork,
    topic2FormalAndInformalOrganisationOfWork,
    topic3LabourAndSociety,
  ],
}

export default unit06Notebook