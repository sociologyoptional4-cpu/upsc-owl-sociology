import type { MindMapData } from '@/lib/notes/notebook-types'

export const topic1MindMapEn: MindMapData = {
  title: 'Unit 3.1 · Qualitative & Quantitative Methods',
  center: 'Research Methods & Pluralism',
  subtitle: 'Epistemology → Numbers vs Meanings → Triangulation',
  branches: [
    {
      title: 'Epistemology & Positivism',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Émile Durkheim', 'Karl Popper', 'Thomas Kuhn'],
      points: [
        'Method (tool) vs Methodology (philosophical logic guiding choice)',
        'Positivism treats social facts as measurable external realities',
        'Post-positivism: Popper falsification and Kuhn paradigm shifts',
        'Value neutrality tension: Weber vs Gouldner and Myrdal critiques',
      ],
    },
    {
      title: 'Quantitative Methodology',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Karl Marx', 'C. Wright Mills', 'J.M. Atkinson'],
      points: [
        'Tools: Census, NFHS surveys, structured interviews, experiments',
        'Strengths: macro patterns, statistical correlation, high reliability',
        'Limitations: reductionism, soft-stat distortion, Hawthorne reactivity',
        'Mills warned against abstracted empiricism detached from theory',
      ],
    },
    {
      title: 'Qualitative & Feminist Turns',
      color: 'mint',
      thinkers: ['Max Weber', 'Alfred Schutz', 'Ann Oakley', 'Glaser & Strauss'],
      points: [
        'Interpretivism: Verstehen, Phenomenology, Ethnomethodology, Dramaturgy',
        'Tools: Ethnography, unstructured interviews, FGD, Grounded Theory',
        'Oakley replaced cold detachment with collaborative feminist rapport',
        'Critique: small samples, researcher bias, Hindess critique of relativism',
      ],
    },
    {
      title: 'Mixed Methods & Triangulation',
      color: 'pink',
      thinkers: ['Alan Bryman', 'Norman Denzin', 'Eileen Barker', 'M.N. Srinivas'],
      points: [
        'Methodological pluralism blends surveys with ethnographic depth',
        'Denzin typology: Data, Investigator, Theory, Method triangulation',
        'Barker combined participant observation and surveys on Moonies',
        'Indian link: consumer behaviour and gig-economy studies use both',
      ],
    },
  ],
}

export const topic1MindMapHi: MindMapData = {
  title: 'Unit 3.1 · Qualitative & Quantitative Methods',
  center: 'Research Methods & Pluralism',
  subtitle: 'Epistemology → Numbers vs Meanings → Triangulation',
  branches: [
    {
      title: 'Epistemology & Positivism',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Émile Durkheim', 'Karl Popper', 'Thomas Kuhn'],
      points: [
        'Method (auzar) vs Methodology (research ki poori soch aur logic)',
        'Positivism social facts ko external aur measurable maanta hai',
        'Post-positivism: Popper ki falsification aur Kuhn ke paradigm shifts',
        'Objectivity debate: Weber ki value neutrality vs Gouldner ki critique',
      ],
    },
    {
      title: 'Quantitative Methodology',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Karl Marx', 'C. Wright Mills', 'J.M. Atkinson'],
      points: [
        'Tools: Census, NFHS surveys, structured interviews, field experiments',
        'Taakat: bade scale ke trends, statistical correlation, high reliability',
        'Kamiyan: human feelings gayab, soft-stats manipulation, Hawthorne effect',
        'Mills ne bina theory wale abstracted empiricism ko criticize kiya',
      ],
    },
    {
      title: 'Qualitative & Feminist Turns',
      color: 'mint',
      thinkers: ['Max Weber', 'Alfred Schutz', 'Ann Oakley', 'Glaser & Strauss'],
      points: [
        'Interpretivism: Verstehen, Phenomenology, Ethnomethodology, Dramaturgy',
        'Tools: Ethnography, unstructured interviews, FGD, Grounded Theory',
        'Ann Oakley ne cold objectivity ki jagah collaborative feminist rapport rakha',
        'Critique: chhota sample, bias ka darr aur Hindess ki relativism critique',
      ],
    },
    {
      title: 'Mixed Methods & Triangulation',
      color: 'pink',
      thinkers: ['Alan Bryman', 'Norman Denzin', 'Eileen Barker', 'M.N. Srinivas'],
      points: [
        'Methodological pluralism numbers aur lived stories ko saath jodta hai',
        'Denzin types: Data, Investigator, Theory aur Method triangulation',
        'Eileen Barker ne Moonies cult par observation aur survey dono lagaye',
        'Indian use: consumer behaviour aur gig workers par mixed research',
      ],
    },
  ],
}