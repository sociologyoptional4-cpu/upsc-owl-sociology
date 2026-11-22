import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1TheoriesOfPower } from './topic-1'
import { topic2PowerElite } from './topic-2'
import { topic3NationState } from './topic-3'
import { topic4SocialMovements } from './topic-4'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 7 — Politics and Society',
  center: 'Politics and Society',
  subtitle: 'Power Theories • Elites & Parties • State & Civil Society • Social Movements',
  branches: [
    {
      title: '7.1 Theories of Power',
      color: 'lavender',
      thinkers: ['Max Weber', 'Talcott Parsons', 'Karl Marx', 'Steven Lukes'],
      points: [
        'Weber: Power (Macht) vs legitimate Authority (Traditional, Charismatic, Legal)',
        'Zero-sum (Marx/Weber) vs Variable-sum Bank & Money analogy (Parsons)',
        'Marxist tools: Althusser RSA/ISA, Poulantzas relative autonomy, Westergaard candy',
        'Lukes 3 Faces (decision, agenda, desire), Foucault capillary power & Dahl polyarchy',
      ],
    },
    {
      title: '7.2 Elites, Bureaucracy & PGs',
      color: 'yellow',
      thinkers: ['Vilfredo Pareto', 'Gaetano Mosca', 'Robert Michels', 'C. Wright Mills'],
      points: [
        'Classical Elites: Pareto (Lions/Foxes circulation), Mosca (ruling class), Michels (Iron Law)',
        'C.W. Mills Power Elite: institutional command posts (Military, Corporate, Executive)',
        'Weberian Bureaucracy vs Merton goal displacement & committed bureaucracy risk',
        'Political Parties vs Pressure Groups (Almond & Powell 4 types, Weiner community PGs)',
      ],
    },
    {
      title: '7.3 State, Citizenship & Democracy',
      color: 'mint',
      thinkers: ['Benedict Anderson', 'T.H. Marshall', 'B.R. Ambedkar', 'Partha Chatterjee'],
      points: [
        'State (4 elements + legitimate force) vs Nation (Anderson Imagined Community; McCrone)',
        'Globalisation deterritorialisation debate & T.H. Marshall Civil/Political/Social citizenship',
        'Democracy as social order (Ambedkar) & participation barriers (Milbrath & Goel GSA)',
        'Civil Society (Tocqueville/Kothari/Chatterjee) & Ideology to Identity politics shift',
      ],
    },
    {
      title: '7.4 Protest, Movements & Revolution',
      color: 'pink',
      thinkers: ['Neil J. Smelser', 'Charles Tilly', 'Alain Touraine', 'Theda Skocpol'],
      points: [
        'Blumer 4 forms; Smelser 6 Value-Added steps & Resource Mobilization (McCarthy/Zald)',
        'Life cycle & 5 Endings: Success, Failure, Co-optation, Repression, Mainstreaming',
        'New Social Movements (NSM) vs Guha "Environmentalism of the Poor" & Dalit assertion',
        'Digital social media protests (Castells vs Olson slacktivism) & Revolution (Skocpol)',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 7 — Politics and Society',
  center: 'Politics and Society',
  subtitle: 'Power Theories • Elites & Parties • State & Civil Society • Social Movements',
  branches: [
    {
      title: '7.1 Theories of Power',
      color: 'lavender',
      thinkers: ['Max Weber', 'Talcott Parsons', 'Karl Marx', 'Steven Lukes'],
      points: [
        'Weber: Power (Macht) vs legitimate Authority (Traditional, Charismatic, Legal)',
        'Zero-sum (Marx/Weber) vs Variable-sum Bank & Money analogy (Parsons)',
        'Marxist tools: Althusser RSA/ISA, Poulantzas relative autonomy, Westergaard candy',
        'Lukes ke 3 Faces (decision, agenda, desire), Foucault capillary power & Dahl polyarchy',
      ],
    },
    {
      title: '7.2 Elites, Bureaucracy & PGs',
      color: 'yellow',
      thinkers: ['Vilfredo Pareto', 'Gaetano Mosca', 'Robert Michels', 'C. Wright Mills'],
      points: [
        'Classical Elites: Pareto (Lions/Foxes circulation), Mosca (ruling class), Michels (Iron Law)',
        'C.W. Mills Power Elite: institutional command posts (Military, Corporate, Executive)',
        'Weberian Bureaucracy vs Merton goal displacement & committed bureaucracy khatra',
        'Political Parties vs Pressure Groups (Almond & Powell ke 4 types, Weiner community PGs)',
      ],
    },
    {
      title: '7.3 State, Citizenship & Democracy',
      color: 'mint',
      thinkers: ['Benedict Anderson', 'T.H. Marshall', 'B.R. Ambedkar', 'Partha Chatterjee'],
      points: [
        'State (4 elements + legitimate force) vs Nation (Anderson Imagined Community; McCrone)',
        'Globalisation deterritorialisation behas & T.H. Marshall Civil/Political/Social citizenship',
        'Democracy as social order (Ambedkar) & participation barriers (Milbrath & Goel GSA)',
        'Civil Society (Tocqueville/Kothari/Chatterjee) & Ideology se Identity politics ka safar',
      ],
    },
    {
      title: '7.4 Protest, Movements & Revolution',
      color: 'pink',
      thinkers: ['Neil J. Smelser', 'Charles Tilly', 'Alain Touraine', 'Theda Skocpol'],
      points: [
        'Blumer ke 4 roop; Smelser ki 6 Value-Added shartein & Resource Mobilization',
        'Life cycle & 5 Endings: Success, Failure, Co-optation, Repression, Mainstreaming',
        'New Social Movements (NSM) vs Guha "Environmentalism of the Poor" & Dalit assertion',
        'Digital social media protests (Castells vs Olson slacktivism) & Revolution (Skocpol)',
      ],
    },
  ],
}

export const unit07Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'politics-and-society',
  overview:
    'Unit 7 decodes the sociological foundations of political power, asking who truly governs society and how ordinary citizens contest domination. Moving from classical theories of power and authority (Weber, Parsons, Marx, Lukes, Foucault) to ruling elites, bureaucracies, political parties, pressure groups, nation-states, citizenship, civil society, and social movements, this unit directly bridges Paper 1 political theory with Paper 2 Indian democratic transformation.',
  overviewHinglish:
    'Unit 7 rajneeti aur samaj ke rishte ko samvidhan ki kitabon se bahar nikaal kar zameeni haqeeqat se jodta hai — samaj mein power asal mein kiske paas hai, elites aur pressure groups sarkar kaise chalate hain, State, Nation, Citizenship aur Civil Society loktantra ko kaise tikate hain, aur aam janta Social Movements ke zariye badlaav kaise laati hai.',
  studySequence: [
    {
      step: '1. Master Power & Authority Lenses',
      detail: 'Contrast Weber’s 3 authorities and zero-sum power with Parsons’s variable-sum Bank analogy, Marxist RSA/ISA, Lukes’s 3 Faces, and Dahl’s Pluralism.',
    },
    {
      step: '2. Compare Elites, Parties & Pressure Groups',
      detail: 'Map Pareto’s Lions/Foxes circulation, Mosca, Michels’s Iron Law, and C.W. Mills’s institutional command posts against Almond & Powell’s and Myron Weiner’s pressure-group typologies.',
    },
    {
      step: '3. Connect State, Citizenship & Civil Society',
      detail: 'Link Weber’s State and Anderson’s Imagined Nation to T.H. Marshall’s citizenship triad, Ambedkar’s social democracy, Milbrath & Goel’s participation pyramid, and Civil vs Political Society.',
    },
    {
      step: '4. Practise All 32 PYQs (2013–2025)',
      detail: 'Revise Smelser’s 6 movement conditions, the 5 ways movements end, New Social Movements vs Indian environmentalism, digital protests, and all 32 solved model answers.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Power aur Authority ke Models Samjho',
      detail: 'Weber ki 3 authorities aur zero-sum power ki tulna Parsons ke variable-sum Bank analogy, Marxist RSA/ISA, Lukes ke 3 Faces aur Dahl ke Pluralism se karo.',
    },
    {
      step: '2. Elites, Parties aur Pressure Groups Compare Karo',
      detail: 'Pareto ke Lions/Foxes circulation, Mosca, Michels ke Iron Law aur C.W. Mills ke command posts ko Almond & Powell tatha Myron Weiner ke pressure-group models se jodo.',
    },
    {
      step: '3. State, Citizenship aur Civil Society Jodo',
      detail: 'Weber ke State aur Anderson ke Imagined Nation se lekar T.H. Marshall ki citizenship, Ambedkar ki social democracy, Milbrath & Goel ke GSA pyramid aur Civil Society ko revise karo.',
    },
    {
      step: '4. Sabhi 32 PYQs (2013–2025) Practice Karo',
      detail: 'Smelser ki 6 shartein, movement khatam hone ke 5 raste, NSMs vs Indian environmentalism, digital protests aur sabhi 32 PYQ model answers practice karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u07-01-power-theories-elites.webp',
      title: 'Theories of Power & Elites',
      titleHinglish: 'Theories of Power & Elites — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P1 Unit 7 infographic: Theories of Power & Elites — Competing Frameworks of Political Power',
      caption: 'Competing Frameworks of Political Power (Theories of Power & Elites).',
      captionHinglish: 'Competing Frameworks of Political Power — Theories of Power & Elites ka visual saransh.',
    },
    {
      assetFile: 'p1-u07-02-state-citizenship-movements.webp',
      title: 'State, Citizenship & Movements',
      titleHinglish: 'State, Citizenship & Movements — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P1 Unit 7 infographic: State, Citizenship & Movements — State-Society Pipeline & Collective Mobilization',
      caption: 'State-Society Pipeline & Collective Mobilization (State, Citizenship & Movements).',
      captionHinglish: 'State-Society Pipeline & Collective Mobilization — State, Citizenship & Movements ka visual saransh.',
    },
  ],
  topics: [topic1TheoriesOfPower, topic2PowerElite, topic3NationState, topic4SocialMovements],
}

export default unit07Notebook