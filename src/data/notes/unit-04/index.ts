import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1KarlMarx } from './topic-1-karl-marx'
import { topic2EmileDurkheim } from './topic-2-emile-durkheim'
import { topic3MaxWeber } from './topic-3-max-weber'
import { topic4TalcottParsons } from './topic-4-talcott-parsons'
import { topic5RobertMerton } from './topic-5-robert-merton'
import { topic6GhMead } from './topic-6-gh-mead'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 4 — Sociological Thinkers',
  center: 'Six Sociological Thinkers',
  subtitle: 'Classical Trio (Marx, Durkheim, Weber) • Mid-Century Systems & Self (Parsons, Merton, Mead)',
  branches: [
    {
      title: '4.1–4.2 Materialism vs Solidarity',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Émile Durkheim'],
      points: [
        'Marx: Historical Materialism, Base–Superstructure, Surplus Value, Alienation',
        'Marx: Class-in-itself -> Class-for-itself & Commodity Fetishism',
        'Durkheim: External coercive Social Facts & Suicide axes (Integration × Regulation)',
        'Durkheim: Mechanical -> Organic solidarity, Arunta totemism & Civic Religion',
      ],
    },
    {
      title: '4.3 Interpretive Action & Capitalism',
      color: 'yellow',
      thinkers: ['Max Weber', 'Robert K. Merton'],
      points: [
        'Verstehen, Ideal Types, Value-Relevance vs Value-Neutrality, Causal Pluralism',
        '4 Social Actions, Rationalisation, Disenchantment & Bureaucratic Iron Cage',
        '3 Authorities (Traditional, Charismatic, Rational-Legal) & Class-Status-Party',
        'Protestant Ethic (Calling, Asceticism) vs Marxian materialism',
      ],
    },
    {
      title: '4.4–4.6 Systems, Strain & Symbolic Self',
      color: 'mint',
      thinkers: ['Talcott Parsons', 'Robert K. Merton', 'G.H. Mead'],
      points: [
        'Parsons: Social System, AGIL prerequisites, Cybernetic Hierarchy, Pattern Variables',
        'Merton: Middle-Range Theory, Manifest/Latent vs Unanticipated Consequences',
        'Merton: 5 Strain Adaptations (C-I-R-R-R) & Reference Group / Marginal Man',
        'Mead: Significant Symbols, Play/Game stages, Generalized Other & "I" vs "Me"',
      ],
    },
    {
      title: 'PYQ Strategy (70 Questions · 2013–2025)',
      color: 'pink',
      thinkers: ['16 Weber', '14 Merton', '13 Marx', '12 Durkheim', '8 Parsons', '7 Mead'],
      points: [
        'Master cross-thinker pairs: Marx–Durkheim (DOL/Anomie), Marx–Weber–Durkheim (Religion)',
        'Merton & Parsons frequently test applied Indian contexts (traffic, corruption, university)',
        'Keep technical distinctions razor sharp: Ideal Type != ideal; Dysfunction != latent function',
        'Always close classical debates with Indian empirical illustrations and balanced critiques',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 4 — Sociological Thinkers',
  center: 'Chhah Sociological Thinkers',
  subtitle: 'Classical Trio (Marx, Durkheim, Weber) • Systems aur Self (Parsons, Merton, Mead)',
  branches: [
    {
      title: '4.1–4.2 Materialism vs Solidarity',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Émile Durkheim'],
      points: [
        'Marx: Historical Materialism, Base–Superstructure, Surplus Value, 4-star Alienation',
        'Marx: Class-in-itself se Class-for-itself aur Commodity Fetishism',
        'Durkheim: External coercive Social Facts aur Suicide ke 4 prakar (Integration × Regulation)',
        'Durkheim: Mechanical se Organic solidarity, Arunta totemism aur Civic Religion',
      ],
    },
    {
      title: '4.3 Interpretive Action aur Capitalism',
      color: 'yellow',
      thinkers: ['Max Weber', 'Robert K. Merton'],
      points: [
        'Verstehen, Ideal Types, Value-Relevance vs Neutrality, Causal Pluralism',
        '4 Social Actions, Rationalisation, Disenchantment aur Bureaucracy ka Iron Cage',
        '3 Authorities (Traditional, Charismatic, Rational-Legal) aur Class-Status-Party',
        'Protestant Ethic (Calling, Asceticism) dwara Marx ke materialism se samvad',
      ],
    },
    {
      title: '4.4–4.6 Systems, Strain aur Symbolic Self',
      color: 'mint',
      thinkers: ['Talcott Parsons', 'Robert K. Merton', 'G.H. Mead'],
      points: [
        'Parsons: Social System, AGIL shartein, Cybernetic Hierarchy, Pattern Variables',
        'Merton: Middle-Range Theory, Manifest/Latent vs Unanticipated Consequences',
        'Merton: 5 Strain Adaptations (C-I-R-R-R) aur Reference Group / Marginal Man',
        'Mead: Significant Symbols, Play/Game charan, Generalized Other aur "I" vs "Me"',
      ],
    },
    {
      title: 'PYQ Strategy (70 Sawaal · 2013–2025)',
      color: 'pink',
      thinkers: ['16 Weber', '14 Merton', '13 Marx', '12 Durkheim', '8 Parsons', '7 Mead'],
      points: [
        'Comparative jodiyaan pakki karo: Marx–Durkheim (DOL/Anomie), Teeno par Dharm',
        'Merton aur Parsons par applied Indian sawal aate hain (traffic, corruption, university)',
        'Technical bhed saaf rakho: Ideal Type != adarsh; Dysfunction != latent function',
        'Har classical theory ko Indian examples aur balanced aalochna ke saath khatam karo',
      ],
    },
  ],
}

export const unit04Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'sociological-thinkers',
  overview:
    'Unit 4 forms the theoretical backbone of UPSC Sociology Optional, uniting the three classical founders—Karl Marx, Émile Durkheim, and Max Weber—with mid-century masters Talcott Parsons, Robert K. Merton, and G.H. Mead. Mastering their concepts, cross-debates, and Indian applications unlocks virtually every unit across Paper 1 and Paper 2.',
  overviewHinglish:
    'Unit 4 poori UPSC Sociology Optional ki theoretical reedh hai—jahan teen classical founders (Karl Marx, Émile Durkheim, Max Weber) ke saath mid-century ke mahaan thinkers Talcott Parsons, Robert K. Merton aur G.H. Mead judte hain. Inke concepts, aapsi takraav aur Indian examples par pakad Paper 1 aur Paper 2 ke har unit mein madad karti hai.',
  studySequence: [
    {
      step: '1. Compare the Classical Trio',
      detail: 'Master Marx (conflict/materialism), Durkheim (moral solidarity/social facts), and Weber (interpretive action/rationalisation) side by side.',
    },
    {
      step: '2. Link Macro Systems to Strain',
      detail: 'Contrast Parsons’ grand AGIL equilibrium and Pattern Variables with Merton’s middle-range dysfunctions, strain modes, and reference groups.',
    },
    {
      step: '3. Ground Agency via Mead',
      detail: 'Trace how Mead’s Preparatory–Play–Game stages and "I"–"Me" dialogue rescue human consciousness from pure structural determinism.',
    },
    {
      step: '4. Drill All 70 PYQs',
      detail: 'Practise comparative triads (religion, anomie, division of labour) and applied Indian scenarios (Kota distress, gig work, urban traffic, corruption).',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Classical Trio Compare Karo',
      detail: 'Marx (conflict/materialism), Durkheim (solidarity/social facts) aur Weber (Verstehen/rationalisation) ko aamne-saamne rakh kar samjho.',
    },
    {
      step: '2. Systems se Strain Jodo',
      detail: 'Parsons ke AGIL aur Pattern Variables ko Merton ki middle-range theory, dysfunctions, 5 strain modes aur reference groups se compare karo.',
    },
    {
      step: '3. Mead se Agency Samjho',
      detail: 'Preparatory–Play–Game charanon aur "I"–"Me" ke samvad se dekho ki insaan apni socialisation khud kaise ghadta hai.',
    },
    {
      step: '4. Sabhi 70 PYQs Practice Karo',
      detail: 'Comparative sawaal (Dharm, Anomie, DOL) aur Indian applications (Kota, gig economy, traffic, corruption) par micro answers likho.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u04-01-marx-durkheim-weber.webp',
      title: 'Founding Trio: Marx, Durkheim & Weber',
      titleHinglish: 'Founding Trio: Marx, Durkheim aur Weber',
      badge: '01/02 · Classics',
      badgeHinglish: '01/02 · Classics',
      alt: 'Paper 1 Unit 4 poster summarizing Karl Marx historical materialism alienation, Emile Durkheim social facts suicide, and Max Weber verstehen bureaucracy',
      caption:
        'The three classical giants diagnosed modernity through capitalism (Marx), moral solidarity (Durkheim), and rationalisation (Weber).',
      captionHinglish: 'Marx (capitalism), Durkheim (solidarity) aur Weber (rationalisation) ne modern samaj ke teen pillars rakhe.',
    },
    {
      assetFile: 'p1-u04-02-parsons-merton-mead.webp',
      title: 'Parsons AGIL, Merton Strain & Mead Self',
      titleHinglish: 'Parsons AGIL, Merton Strain aur Mead Self',
      badge: '02/02 · Systems & Self',
      badgeHinglish: '02/02 · Systems & Self',
      alt: 'Paper 1 Unit 4 poster summarizing Talcott Parsons AGIL pattern variables, Robert K Merton 5 strain modes, and GH Mead Preparatory Play Game stages',
      caption:
        'Mid-century synthesis connected macro equilibrium (Parsons) with middle-range deviance (Merton) and symbolic interaction (Mead).',
      captionHinglish: 'Parsons ke macro system se Merton ki middle-range theory aur Mead ke symbolic self tak safar.',
    },
  ],
  topics: [
    topic1KarlMarx,
    topic2EmileDurkheim,
    topic3MaxWeber,
    topic4TalcottParsons,
    topic5RobertMerton,
    topic6GhMead,
  ],
}

export default unit04Notebook