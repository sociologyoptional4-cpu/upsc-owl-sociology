import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1TheoriesOfSocialChange } from './topic-1'
import { topic2DevelopmentAndDependency } from './topic-2'
import { topic3AgentsOfSocialChange } from './topic-3'
import { topic4EducationAndSocialChange } from './topic-4'
import { topic5ScienceTechnologyAndSocialChange } from './topic-5'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 10 — Social Change in Modern Society',
  center: 'Social Change in Modern Society',
  subtitle: 'Theories • Development & Dependency • Agents • Education • Science & Technology',
  branches: [
    {
      title: '10.1 Theories of Change',
      color: 'lavender',
      thinkers: ['Herbert Spencer', 'Auguste Comte', 'Émile Durkheim', 'Vilfredo Pareto', 'Karl Marx'],
      points: [
        'Evolutionary unilinear models (Comte, Spencer, Morgan) vs Multilinear adaptation',
        'Cyclical civilisational dynamics: Spengler seasons, Toynbee minority & Pareto elite circulation',
        'Functionalist moving equilibrium (Parsons) vs Marxist class struggle as history’s motor',
        'Tradition-Modernity dialectic: Yogendra Singh orthogenetic/heterogenetic model',
      ],
    },
    {
      title: '10.2 Development & Dependency',
      color: 'yellow',
      thinkers: ['W.W. Rostow', 'A.G. Frank', 'Fernando Henrique Cardoso', 'Immanuel Wallerstein', 'Amartya Sen'],
      points: [
        'Modernisation stages (Rostow) & pattern variables (Parsons) blaming internal deficits',
        'A.G. Frank: Development of Underdevelopment & Metropolis-Satellite surplus extraction',
        'Wallerstein World-Systems: Core, Semi-Periphery & Periphery capitalist division of labour',
        'Sustainable development: 2015 UNDP SDGs (5 Ps) & Cernea IRR displacement model',
      ],
    },
    {
      title: '10.3 Agents of Social Change',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'M.N. Srinivas', 'Theodor Adorno', 'Manuel Castells'],
      points: [
        'Traditional institutions: caste mutating into modern democratic pressure associations',
        'State and Law as social engineering: Arts 14, 15(3), 243D; Child Labour Act 2016 loopholes',
        'Traditional mass media: Frankfurt School Culture Industry & Habermas Public Sphere refeudalisation',
        'New Media: Castells Mass Self-Communication & leaderless viral protests vs digital misogyny',
      ],
    },
    {
      title: '10.4 & 10.5 Education & Science',
      color: 'pink',
      thinkers: ['Louis Althusser', 'Pierre Bourdieu', 'William F. Ogburn', 'Ulrich Beck', 'Robert K. Merton'],
      points: [
        'Education: Durkheim moral solidarity vs Bowles-Gintis Correspondence Principle & Bourdieu habitus',
        'NEP 2020: 5+3+3+4, vocational tracks & debunking education as a standalone panacea',
        'Technological determinism vs SCOT; Ogburn Cultural Lag in AI, biotechnology & surveillance',
        'COVID-19 & Risk Society: manufactured uncertainties, robotic sanitation & vaccine apartheid',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 10 — Aadhunik Samaj Mein Samajik Parivartan',
  center: 'Social Change in Modern Society',
  subtitle: 'Theories • Development & Dependency • Agents • Education • Science & Technology',
  branches: [
    {
      title: '10.1 Parivartan Ke Siddhant',
      color: 'lavender',
      thinkers: ['Herbert Spencer', 'Auguste Comte', 'Émile Durkheim', 'Vilfredo Pareto', 'Karl Marx'],
      points: [
        'Evolutionary model (Comte, Spencer) saral se jatil vishishtikaran aur unilinear ki kamzoriyan',
        'Cyclical model: Spengler sabhyata ki aayu, Toynbee challenge-response aur Pareto elite circulation',
        'Functionalist moving equilibrium (Parsons) banam Marxian varg sangharsh aur kranti',
        'Parampara aur Aadhunikatva: Yogendra Singh ka aantarik v baahari badlaav ka samvaad',
      ],
    },
    {
      title: '10.2 Vikas Aur Nirbharta',
      color: 'yellow',
      thinkers: ['W.W. Rostow', 'A.G. Frank', 'Fernando Henrique Cardoso', 'Immanuel Wallerstein', 'Amartya Sen'],
      points: [
        'Modernisation theory: Rostow ke 5 stages aur Parsons ke aadhunik pattern variables',
        'A.G. Frank: Development of Underdevelopment aur Metropolis-Satellite shoshan ki chain',
        'Wallerstein World-Systems: Core, Semi-Periphery aur Periphery ka global shram batwara',
        'Satat vikas: UNDP 2015 SDGs (5 Ps), Amartya Sen ki capabilities aur Cernea ka IRR model',
      ],
    },
    {
      title: '10.3 Parivartan Ke Agent',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'M.N. Srinivas', 'Theodor Adorno', 'Manuel Castells'],
      points: [
        'Paramparik sansthaayein: jaati ka naya roop bankar loktantrik pressure group banna',
        'Sanvidhan aur Kanoon: Art 14, 15(3), 243D; Bal Shram kanoon 2016 ke family loopholes',
        'Traditional media: Adorno Culture Industry aur Habermas Public Sphere ka patan',
        'New Media: Castells Mass Self-Communication, viral andolan aur digital gender divide',
      ],
    },
    {
      title: '10.4 & 10.5 Shiksha Aur Vigyan',
      color: 'pink',
      thinkers: ['Louis Althusser', 'Pierre Bourdieu', 'William F. Ogburn', 'Ulrich Beck', 'Robert K. Merton'],
      points: [
        'Shiksha: Durkheim moral solidarity banam Bowles-Gintis Correspondence aur Bourdieu Cultural Capital',
        'NEP 2020: 5+3+3+4 model aur shiksha ko sabhi bimaariyon ka panacea maanne ka khodan',
        'Ogburn Cultural Lag: machine tezi se daudti hai, kanoon piche chhoot jata hai (AI, surrogacy)',
        'COVID-19 & Risk Society: Beck ka manufactured risk, robotic sanitation aur vaccine apartheid',
      ],
    },
  ],
}

export const unit10Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'social-change-in-modern-society',
  overview:
    'Unit 10 synthesises the foundational sociological inquiry into how and why human societies transform over time. You will examine the grand theoretical lineages of change (evolutionary, cyclical, functionalist, conflict, and dialectical); master the sharp debates between modernization orthodoxies and Latin American dependency theories (A.G. Frank, Wallerstein, Cardoso); evaluate the transformative efficacy of institutional agents like the state, constitutional law, and digital media; critically deconstruct schooling through functionalist meritocracy versus Marxist cultural reproduction (NEP 2020); and analyse how exponential science and technology generate cultural lag, address ancient taboos, and produce manufactured risks in late modernity.',
  overviewHinglish:
    'Unit 10 samajshastra ke is mool sawal ko decode karta hai ki manav samaj samay ke sath kaise aur kyun badalta hai. Yahan aap samajik parivartan ke mukhya siddhant (Evolutionary, Cyclical, Functionalist, Conflict aur Dialectical) padhenge; Modernisation aur Dependency theories (A.G. Frank, Wallerstein, Cardoso) ke aapsi takraav ko samjhenge; sanvidhan, kanoon, traditional sansthaon aur social media ki shakti ka mulyankan karenge; shiksha ke meritocracy banam class reproduction (NEP 2020) ke parde ko dekhenge; aur vigyan v takneek dwara paida hone wale Cultural Lag, andhvishwas se ladai aur COVID-19 jaise manufactured risks ka vishleshan karenge.',
  studySequence: [
    {
      step: '1. Master the 4 Paradigms of Social Change',
      detail:
        'Compare evolutionary unilinear models (Comte, Spencer) with multilinear adaptation, master cyclical thinkers (Spengler, Toynbee, Pareto, Sorokin), and contrast Parsonsian moving equilibrium with Marxian dialectical class contradiction.',
    },
    {
      step: '2. Deconstruct Development and Dependency',
      detail:
        'Contrast Rostow’s 5-stage modernization with A.G. Frank’s metropolis-satellite chain, evaluate Cardoso’s associated development, Wallerstein’s core-periphery world-system, Cernea’s displacement IRR model, and UNDP 2015 SDGs.',
    },
    {
      step: '3. Analyse Agents of Transformation & Protest Forms',
      detail:
        'Examine how traditional caste and family mutate into modern pressure groups, evaluate constitutional provisions for women (Arts 14, 15, 243D) and child labour loopholes (2016 Act), and link Castells’s Network Society with social media protests.',
    },
    {
      step: '4. Interrogate Education, Science & Late Modernity',
      detail:
        'Contrast Durkheimian moral solidarity with Bowles-Gintis and Bourdieu’s cultural capital, evaluate NEP 2020 and online education, and apply Ogburn’s cultural lag and Ulrich Beck’s Risk Society to AI and the pandemic.',
    },
    {
      step: '5. Solve All 45 Solved PYQs (Paper 1 ↔ Paper 2)',
      detail:
        'Practice all 45 past UPSC questions (2013–2025) across all 5 topics, integrating Paper 2 linkages on development planning, displacement movements, women’s empowerment, and educational disparities.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Samajik Parivartan Ke 4 Mukhya Models Pakke Karo',
      detail:
        'Evolutionary unilinear model (Comte, Spencer) ki seemayein samjho, Cyclical chintakon (Spengler, Toynbee, Pareto, Sorokin) ko yaad karo, aur Parsons ke moving equilibrium ko Marx ke varg sangharsh ke sath tulna karo.',
    },
    {
      step: '2. Vikas Aur Nirbharta Ka Takraav Samjho',
      detail:
        'Rostow ke modernisation model ke virodh mein A.G. Frank ka underdevelopment, Cardoso ka associated development, Wallerstein ka World-Systems model, Cernea ka visthapan IRR model aur 2015 SDGs ko tayar karo.',
    },
    {
      step: '3. Parivartan Ke Agents Aur Naye Andolanon Ko Jodo',
      detail:
        'Jaati aur parivar ke badalte loktantrik roop ko samjho, mahila kanoon (Art 14, 15, 243D) aur bal shram ke 2016 loopholes dekho, aur Castells ke Mass Self-Communication se social media protests ka vishleshan karo.',
    },
    {
      step: '4. Shiksha, Vigyan Aur Risk Society Ka Mulyankan Karo',
      detail:
        'Durkheim ke moral consensus banam Bourdieu ke cultural capital aur Bowles-Gintis ke correspondence principle ko samjho, NEP 2020 ka panacea daava kharij karo, aur Ogburn ke cultural lag ko AI aur COVID-19 se jodo.',
    },
    {
      step: '5. Sabhi 45 PYQs (Paper 1 ↔ Paper 2) Solve Karo',
      detail:
        '2013–2025 ke sabhi 45 PYQs dono bhashaon mein likhne ka abhyas karo, jisme Paper 2 ke development planning, visthapan andolan, mahila utthan aur shiksha asamanta ke overlaps shamil hain.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u10-01-social-change-theories.webp',
      title: 'Sociological Theories of Change',
      titleHinglish: 'Sociological Theories of Change — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P1 Unit 10 infographic: Sociological Theories of Change — Evolutionary, Cyclical, Functionalist & Conflict Trajectories',
      caption: 'Evolutionary, Cyclical, Functionalist & Conflict Trajectories (Sociological Theories of Change).',
      captionHinglish: 'Evolutionary, Cyclical, Functionalist & Conflict Trajectories — Sociological Theories of Change ka visual saransh.',
    },
    {
      assetFile: 'p1-u10-02-agents-education-tech.webp',
      title: 'Education, Science, Media & Tech',
      titleHinglish: 'Education, Science, Media & Tech — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P1 Unit 10 infographic: Education, Science, Media & Tech — Agents of Transformation in Modern Society',
      caption: 'Agents of Transformation in Modern Society (Education, Science, Media & Tech).',
      captionHinglish: 'Agents of Transformation in Modern Society — Education, Science, Media & Tech ka visual saransh.',
    },
  ],
  topics: [
    topic1TheoriesOfSocialChange,
    topic2DevelopmentAndDependency,
    topic3AgentsOfSocialChange,
    topic4EducationAndSocialChange,
    topic5ScienceTechnologyAndSocialChange,
  ],
}

export default unit10Notebook
