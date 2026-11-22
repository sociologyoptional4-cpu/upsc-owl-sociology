import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1ScienceMethod } from './topic-1-science-method'
import { topic2Strands } from './topic-2-strands'
import { topic3Positivism } from './topic-3-positivism'
import { topic4FactValue } from './topic-4-fact-value'
import { topic5NonPositivist } from './topic-5-non-positivist'

const unitMindMap: MindMapData = {
  title: 'Paper 1 · Unit 2 — Sociology as Science',
  center: 'Sociology as Science',
  subtitle: 'Scientific Method • Strands • Positivism & Critiques • Fact, Value & Interpretivism',
  branches: [
    {
      title: '2.1 Science & Method Debate',
      color: 'lavender',
      thinkers: ['Robert K. Merton', 'Karl Popper', 'Thomas Kuhn', 'Andrew Sayer'],
      points: [
        'Empirical pillars + Merton CUDOS norms vs practical consciousness limits',
        'Exploratory, Explanatory, and Historical research designs compared',
        'Sayer open-system science (like meteorology) defends sociological rigour',
        'Popper falsification, Kuhn paradigms & Feyerabend pluralism critique naive science',
      ],
    },
    {
      title: '2.2 & 2.3 Positivism & Strands',
      color: 'yellow',
      thinkers: ['Auguste Comte', 'Émile Durkheim', 'Karl Marx', 'Ann Oakley'],
      points: [
        'Methodology as rules & ontology beyond tools; Macro vs Micro action strands',
        'Comte Law of Three Stages & Durkheim Suicide treat social facts as things',
        'Five critiques: Weber, Schutz-Garfinkel, Adorno Critical Theory, Popper, Oakley',
        'Post-positivist triangulation pairs NFHS/PLFS surveys with qualitative depth',
      ],
    },
    {
      title: '2.4 Fact, Value & Objectivity',
      color: 'mint',
      thinkers: ['Max Weber', 'Alvin Gouldner', 'Gunnar Myrdal', 'Howard Becker'],
      points: [
        'Values enter topic choice, framing, funding & readings (Gandhi vs Ambedkar)',
        'Weber splits Value Relevance (topic) from Value Neutrality (analysis duty)',
        'Gouldner Anti-Minotaur & Becker urge reflexive disclosure or marginalised stance',
        'Interpretive objectivity via Ideal Types, member validation & peer audit',
      ],
    },
    {
      title: '2.5 Non-Positivism & PYQs (27)',
      color: 'pink',
      thinkers: ['Max Weber', 'Erving Goffman', 'Alfred Schutz', 'Harold Garfinkel'],
      points: [
        'Weber Verstehen + Mead-Blumer symbols + Goffman front/back stage dramaturgy',
        'Schutz typifications/intersubjectivity + Garfinkel indexicality & breaching tests',
        'Atkinson coroner verdicts counter Durkheim’s objective suicide tables',
        '27 PYQs (2013–2025): balance empirical utility with human meaning & reflexivity',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 1 · Unit 2 — Sociology as Science',
  center: 'Sociology as Science',
  subtitle: 'Scientific Method • Strands • Positivism & Critique • Fact, Value & Interpretivism',
  branches: [
    {
      title: '2.1 Science & Method Debate',
      color: 'lavender',
      thinkers: ['Robert K. Merton', 'Karl Popper', 'Thomas Kuhn', 'Andrew Sayer'],
      points: [
        'Empirical pillars + Merton CUDOS norms banaam insaani consciousness dikkatein',
        'Exploratory, Explanatory aur Historical research designs ka farq',
        'Sayer open-system science (mausam vigyan jaisi) sociology ko science maanti hai',
        'Popper falsification, Kuhn paradigms & Feyerabend pluralism naive science todte hain',
      ],
    },
    {
      title: '2.2 & 2.3 Positivism & Strands',
      color: 'yellow',
      thinkers: ['Auguste Comte', 'Émile Durkheim', 'Karl Marx', 'Ann Oakley'],
      points: [
        'Methodology sirf tools nahi, niyamon ka system hai; Macro vs Micro strands',
        'Comte Law of Three Stages & Durkheim Suicide social facts ko things maante hain',
        '5 critiques: Weber, Schutz-Garfinkel, Adorno Critical Theory, Popper, Oakley',
        'Post-positivist triangulation NFHS/PLFS stats ko qualitative gehrai se jodti hai',
      ],
    },
    {
      title: '2.4 Fact, Value & Objectivity',
      color: 'mint',
      thinkers: ['Max Weber', 'Alvin Gouldner', 'Gunnar Myrdal', 'Howard Becker'],
      points: [
        'Topic, funding aur matlab mein value ghusti hai (Gandhi vs Ambedkar)',
        'Weber ne Value Relevance (topic) aur Value Neutrality (analysis) alag rakhe',
        'Gouldner Anti-Minotaur & Becker khuli reflexivity ya kamzoron ka paksh maangte hain',
        'Interpretive objectivity: Ideal Types, member validation & peer audit se aati hai',
      ],
    },
    {
      title: '2.5 Non-Positivism & PYQs (27)',
      color: 'pink',
      thinkers: ['Max Weber', 'Erving Goffman', 'Alfred Schutz', 'Harold Garfinkel'],
      points: [
        'Weber Verstehen + Mead-Blumer symbols + Goffman front/back stage dramaturgy',
        'Schutz typifications/intersubjectivity + Garfinkel indexicality & breaching tests',
        'Atkinson ke coroner verdicts Durkheim ke raw suicide stats ko challenge karte hain',
        '27 PYQs (2013–2025): empirical stats ko insaani meaning aur reflexivity se balance karo',
      ],
    },
  ],
}

export const unit02Notebook: UnitNotebookSpec = {
  paperCode: 'P1',
  unitSlug: 'sociology-as-science',
  overview:
    'Unit 2 unpacks the epistemological core of UPSC Sociology Optional: whether society can be studied like physical nature, how classical Positivism clashed with Post-Positivism and Interpretivism, why facts and values intertwine, and how contemporary sociologists combine statistical macro-surveys with reflexive Verstehen.',
  overviewHinglish:
    'Unit 2 UPSC Sociology Optional ka epistemological dil hai — yahan aap seekhte hain ki kya samaj ko physics ki tarah padha jaa sakta hai, Positivism ka Post-Positivism aur Interpretivism se takraav kaise hua, fact aur value kaise ulajhte hain, aur aaj ki sociology surveys ke saath Verstehen aur reflexivity kaise milati hai.',
  studySequence: [
    {
      step: '1. Clarify Science & Research Designs',
      detail: 'Master empirical criteria, Merton’s CUDOS ethos, open-system realism (Sayer), and Popper–Kuhn–Feyerabend critiques alongside Exploratory, Explanatory, and Historical designs.',
    },
    {
      step: '2. Map the Methodological Spectrum',
      detail: 'Trace how macro-structural strands (Durkheim, Marx, Merton) contrast with micro-interpretive and feminist/subaltern strands (Weber, Oakley, Rege, Srinivas).',
    },
    {
      step: '3. Crack Positivism vs Critiques',
      detail: 'Connect Comte and Durkheim’s postulates to the five critiques — Interpretive, Phenomenological (Atkinson vs Durkheim), Critical Theory, Post-Positivist, and Humanist.',
    },
    {
      step: '4. Balance Objectivity & Non-Positivism (27 PYQs)',
      detail: 'Contrast Weber’s value relevance/neutrality with Gouldner and Becker, decode Dramaturgy, Schutz, and Garfinkel, and practise all 27 PYQs (2013–2025).',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Science & Designs Saaf Karo',
      detail: 'Merton CUDOS, Sayer open-system science, aur Popper–Kuhn–Feyerabend critiques ke saath Exploratory, Explanatory aur Historical designs samjho.',
    },
    {
      step: '2. Methodological Spectrum Dekho',
      detail: 'Macro-structural (Durkheim, Marx, Merton) banaam micro-interpretive aur feminist/subaltern strands (Weber, Oakley, Rege, Srinivas) ka farq pakdo.',
    },
    {
      step: '3. Positivism aur 5 Critiques Jodo',
      detail: 'Comte-Durkheim ke postulates ko 5 critiques — Interpretive, Phenomenology (Atkinson vs Durkheim), Critical Theory, Post-Positivism, Humanist — se jodo.',
    },
    {
      step: '4. Objectivity, Micro Strands & 27 PYQs',
      detail: 'Weber value relevance/neutrality ko Gouldner-Becker se compare karo, Goffman-Schutz-Garfinkel samjho, aur sabhi 27 PYQs (2013–2025) revise karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p1-u02-01-science-spectrum.webp',
      title: 'Methodological Spectrum: Positivism to Interpretivism',
      titleHinglish: 'Positivism se Interpretivism tak Methodological Spectrum',
      badge: '01/02 · Methods',
      badgeHinglish: '01/02 · Vidhiyan',
      alt: 'Paper 1 Unit 2 poster comparing Positivism (Comte Durkheim), Post-Positivism (Popper Kuhn), and Non-Positivism (Weber Schutz Garfinkel Goffman)',
      caption: 'Three broad epistemic stances shape sociological inquiry: positivist objectivity, post-positivist falsification, and interpretive meaning-making.',
      captionHinglish: 'Sociology mein teen mukhya nazariye: positivist objectivity, post-positivist falsification aur interpretive Verstehen.',
    },
    {
      assetFile: 'p1-u02-02-objectivity-methods.webp',
      title: 'Fact, Value & Objectivity Debate',
      titleHinglish: 'Fact, Value aur Objectivity ka Vivad',
      badge: '02/02 · Objectivity',
      badgeHinglish: '02/02 · Nishpakshata',
      alt: 'Paper 1 Unit 2 poster illustrating Max Weber value relevance versus value neutrality alongside Durkheim Myrdal Gouldner Oakley objectivity debate',
      caption: 'Weber separates value-relevant topic choice from value-neutral analysis, while reflexivity counters hidden bias.',
      captionHinglish: 'Weber topic chunte waqt value-relevance aur analysis mein value-neutrality alag rakhte hain.',
    },
  ],
  topics: [
    topic1ScienceMethod,
    topic2Strands,
    topic3Positivism,
    topic4FactValue,
    topic5NonPositivist,
  ],
}

export default unit02Notebook