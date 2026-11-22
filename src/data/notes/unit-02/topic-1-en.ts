import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Science relies on empirical observation, verification, and causal reasoning—yet applying laboratory physics directly to conscious human societies faces real hurdles, prompting post-positivist, realist, historical, and feminist rethinking.'

const mindMap: MindMapData = {
  title: 'Unit 2.1 · Science, Scientific Method & Its Critique',
  center: 'Sociology as Science',
  subtitle: 'Empirical Pillars • Practical Hurdles • Post-Positivist & Realist Critique',
  branches: [
    {
      title: 'What Makes Knowledge Scientific',
      color: 'lavender',
      thinkers: ['Francis Bacon', 'Robert K. Merton', 'Auguste Comte', 'Émile Durkheim'],
      points: [
        'Empirical evidence, verification, replicability, causality, and cumulative logic',
        'Merton CUDOS norms: Communalism, Universalism, Disinterestedness, Organized Skepticism',
        'Induction (Bacon: specific to general) vs Hypothetico-Deductive (Popper)',
        'Exploratory (new terrain) vs Explanatory (causal) vs Historical designs',
      ],
    },
    {
      title: 'Case For Sociology as Science',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Max Weber', 'Andrew Sayer', 'Elton Mayo'],
      points: [
        'Social facts show measurable regularities (Durkheim Suicide statistics)',
        'Field experiments track real settings without artificial petri dishes',
        'Sayer Open Systems: like meteorology, sociology finds probabilistic mechanisms',
        'Biological and psychological variability does not disqualify scientific status',
      ],
    },
    {
      title: 'Practical Hurdles in Social Research',
      color: 'mint',
      thinkers: ['Max Weber', 'C. Wright Mills', 'Gunnar Myrdal'],
      points: [
        'Conscious humans interpret stimuli rather than reacting like inanimate matter',
        'No safe lab controls: cannot stage riots or isolate caste from income easily',
        'No standard SI units (joules/kilograms) for love, religiosity, or nationalism',
        'Social desirability bias, Hawthorne reactivity, and culture-specific laws',
      ],
    },
    {
      title: 'Philosophical & Feminist Critiques',
      color: 'pink',
      thinkers: ['Karl Popper', 'Thomas Kuhn', 'Paul Feyerabend', 'Ann Oakley'],
      points: [
        'Popper: black swan shows induction fails; falsifiability demarcates science',
        'Kuhn: science shifts via paradigm revolutions; sociology stays pre-paradigmatic',
        'Feyerabend: methodological pluralism ("anything goes") opposes rigid dogma',
        'Feminist critique: androcentric blind spots (Darwin, Freud, unpaid housework)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u02-01-science-spectrum.webp',
    alt: 'Paper 1 Unit 2 poster comparing Positivism (Comte Durkheim), Post-Positivism (Popper Kuhn), and Non-Positivism (Weber Schutz Garfinkel Goffman)',
    caption:
      'Debating whether sociology is a science moves across three stances: classical positivist naturalism, post-positivist falsification, and interpretive meaning-making.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Do We Mean by Science and the Scientific Method?

Before asking whether sociology qualifies as a science, clarify what science actually is. Science is not merely a laboratory full of test tubes or a bundle of fixed dogmas; it is a ==systematized, self-correcting method of producing knowledge== grounded in sensory observation, logical inference, and public scrutiny. Unlike religion or magic, which appeal to sacred authority or revelation, scientific claims remain open to testing and revision by anyone anywhere.

Think of scientific status as resting on six core traits alongside [[thinker:Robert K. Merton]]’s institutional ethos of science:

- **Six Methodological Pillars:** Science is ==empirical== (anchored in observable data), ==testable and provisional== (open to being disproved), ==cumulative== (building on prior discoveries), ==causal== (linking variables systematically), ==objective== (minimising personal bias), and ==replicable== (yielding consistent findings when repeated).
- **Merton’s CUDOS Ethos:** Scientists ideally obey four norms — **Communalism** (shared public knowledge, never private monopoly), **Universalism** (claims judged by evidence, not caste, race, or gender), **Disinterestedness** (pursuing truth over fame or profit), and **Organized Skepticism** (questioning every claim relentlessly).
- **Induction vs Deduction:** Classical scientists following [[thinker:Francis Bacon]] used **inductive reasoning** — moving bottom-up from repeated cases (observing hundreds of falling apples or white swans) to a general law. Modern inquiry pairs this with **hypothetico-deductive reasoning**, testing specific predictions downward from a hypothesis and discarding whatever contradicts evidence.

## Research Designs: Exploratory, Explanatory, and the Historical Method

Because social life cannot be squeezed into a single laboratory mould, sociologists rely on distinct designs depending on what puzzle they face. When a field is poorly understood, researchers map broad patterns first; when relationships are clearer, they test why one factor drives another; and when institutions evolve across centuries, they turn to archival history.

- **Exploratory Design:** Used when very little prior research exists and the goal is to clarify concepts, frame hypotheses, and spot emerging trends using open interviews or small pilot studies. [[eg:When India’s quick-commerce boom exploded after 2021, an exploratory sociologist spent weeks chatting informally with Blinkit and Zepto riders at dark stores before designing a formal nationwide survey.]]
- **Explanatory Design:** Used when a problem is already mapped and the researcher tests *why* it happens by isolating independent and dependent variables with statistical or structured controls. [[eg:An explanatory study tests whether household debt, caste exclusion, or coaching costs drive school dropout disparities across rural Bihar and Maharashtra.]]
- **The Historical Method:** Essential for macro-institutions like capitalism, patriarchy, or caste that unfold over centuries rather than inside a 30-day survey. Combining archives, inscriptions, census records, and comparative cases — as [[thinker:Karl Marx]] did for capitalism, [[thinker:Max Weber]] did in *The Protestant Ethic*, and [[thinker:Irawati Karve]] or [[thinker:Ranajit Guha]] did for Indian kinship and peasant revolts — reveals long-run structural causality. [[trap:Historical data faces surviving-record bias (ancient chronicles record kings and upper castes far more than landless labourers) and cannot be re-run under controlled lab conditions.]]

| Feature | Exploratory Design | Explanatory Design | Historical Method |
| --- | --- | --- | --- |
| Primary Purpose | Discover patterns & frame questions | Test cause-and-effect hypotheses | Trace institutional origins & long change |
| Core Question | What is happening here? | Why does X produce Y? | How did this institution evolve over time? |
| Typical Tools | Open interviews, pilots, ethnography | Surveys, multivariate stats, field tests | Archives, manuscripts, comparative records |
| Indian Example | Studying mental stress of gig riders | Measuring wage gap across caste & gender | Explaining colonial agrarian zamindari shifts |

## Can Natural Science Methods Work in Sociology?

This question sparked sociology’s fiercest founding debate. On one side, positivists argued that human conduct follows observable social rules just as planets follow gravity; on the other, humanists countered that conscious human beings think, feel, and invent meanings that cannot be weighed on a scale. Evaluating both sides shows why sociology is scientific in spirit, yet distinct in method.

### Practical & Methodological Hurdles in Sociological Research

Even a committed quantitative sociologist immediately hits five real-world obstacles that physicists never encounter:

- **Consciousness & Variable Meanings:** A steel pen melts identically over a candle every single time, whereas humans attach subjective meaning before acting. [[eg:A sudden shove in a jubilant India–Pakistan cricket stadium triggers laughter, whereas the same shove on a dark empty lane triggers fear, caste-dignity protest, or police complaint.]]
- **Barriers to Controlled Experiments:** Researchers cannot lock communities inside petri dishes, artificially provoke communal riots, or destabilise marriages to observe outcomes. Furthermore, too many tangled variables operate simultaneously — isolating how education raises income in India requires controlling for caste networks, parental wealth, school quality, and regional labour markets — and people alter their conduct the moment they know they are watched (the ==Hawthorne Effect==).
- **Absence of Standardized Units:** Physics runs on universal SI units like kilograms, metres, and joules, whereas sociology has no "10 joules of religiosity" or "7 metres of marital affection". Survey scales from 1 to 10 remain subjective: one cautious respondent’s "6" may reflect deeper devotion than another’s "8".
- **Respondent Bias & Cultural Non-Universality:** People tailor answers to seek social approval or hide stigma. [[eg:A male commuter asked about reserved women’s coaches in the Delhi Metro may soften blunt opposition before a female interviewer, while victims of marital violence or LGBTQ respondents often underreport due to social stigma, or rate marriage rosily after one pleasant movie outing.]] Worse, correlations rarely travel unchanged across cultures: higher domestic violence strongly raises divorce in US cities, yet often coexists with low divorce in India due to familism and economic dependence.

### Why Sociology Still Qualifies as a Science

Despite these hurdles, rejecting sociology’s scientific status mistakes *physics* for *all of science*. Biology tolerates individual variation across blood cells, while astronomy and geology study distant stars and tectonic shifts without running lab experiments. As realist philosopher [[thinker:Andrew Sayer]] argued, science comes in two forms: **closed-system sciences** (chemistry and lab physics) that isolate variables artificially, and **open-system sciences** (meteorology, seismology, and sociology) that uncover real hidden mechanisms operating amid messy natural environments. Just as weather models predict monsoon trends probabilistically without controlling the sky, [[thinker:Émile Durkheim]]’s *Suicide* (1897) proved that statistical comparison uncovers real structural forces like integration and anomie, while field studies (Elton Mayo at Hawthorne, or educational vouchers in Rajasthan) enable controlled comparison ethically.

## Major Critiques of the Classical Scientific Method

During the twentieth century, philosophers of science and feminist scholars challenged not just sociology’s scientific pretensions, but the textbook image of natural science itself:

- **[[thinker:Karl Popper]] — Falsification Over Inductivism:** Watching 2,000 white swans across Delhi ponds never proves *"All swans are white"*, yet spotting one black swan destroys the claim. In *The Logic of Scientific Discovery*, Popper argued true science advances not by piling up confirmations (which astrology or rigid ideology easily finds), but by proposing bold, risky hypotheses capable of **falsification** — leaving all scientific truth tentative and provisional.
- **[[thinker:Thomas Kuhn]] — Paradigms and Scientific Revolutions:** In *The Structure of Scientific Revolutions*, Kuhn showed that science is not a calm, steady march toward eternal truth. Scientists work inside a shared worldview (**paradigm**) and often brush aside contradicting data as mere "outliers" to protect careers until mounting anomalies force a sudden **paradigm shift** — from Newtonian mechanics to quantum physics, or Pluto’s reclassification and Zealandia’s recognition. Because Marxists, functionalists, and interactionists share no single dominant frame, Kuhn considered sociology ==pre-paradigmatic==.
- **[[thinker:Paul Feyerabend]] — Epistemological Anarchism:** Arguing that rigid textbook rules stifle discovery, Feyerabend noted that many breakthroughs (Pasteur’s vaccine, Nobel’s blasting gelatine) involved hunches, luck, and breaking rules — advocating methodological pluralism (*"anything goes"*).
- **Feminist & Postmodern Critiques:** Scholars like [[thinker:Ann Oakley]] and Antoinette Brown Blackwell exposed how supposedly "objective" science carried androcentric bias — from Darwin claiming male evolutionary superiority and Freud’s Oedipus frame to biology’s passive-egg mythology and classical sociology excluding unpaid household work until women entered the field. [[thinker:Jean-François Lyotard]] added that big corporate or state funding (such as fossil-fuel lobbies funding climate reports) turns science into a contested power-laden narrative rather than pure detached truth.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1620',
        title: 'Francis Bacon — Novum Organum',
        text: 'Codified inductive empiricism: gather systematic sensory observations before generalising natural laws.',
      },
      {
        year: '1838–1895',
        title: 'Comte & Durkheim — Positivist Sociology',
        text: 'Comte crowned sociology Queen of Sciences; Durkheim operationalised scientific rules via Suicide (1897).',
      },
      {
        year: '1934',
        title: 'Karl Popper — Logic of Scientific Discovery',
        text: 'Replaced naive verification with Falsificationism and hypothetico-deductive provisional knowledge.',
      },
      {
        year: '1942',
        title: 'Robert K. Merton — CUDOS Ethos',
        text: 'Identified institutional norms sustaining open scientific scrutiny: Communalism, Universalism, Disinterestedness, Skepticism.',
      },
      {
        year: '1962',
        title: 'Thomas Kuhn — Paradigm Shifts',
        text: 'Argued normal science protects reigning paradigms until crises trigger scientific revolutions; called sociology pre-paradigmatic.',
      },
      {
        year: '1975–1981',
        title: 'Feyerabend, Oakley & Critical Realism',
        text: 'Pluralism ("anything goes"), feminist critiques of male-stream bias, and Sayer’s open-system science reshaped methodology.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Research Puzzle', text: 'Define concept and spot gaps in existing sociological literature' },
      { label: '2. Falsifiable Hypothesis', text: 'Frame testable link between variables (poverty, caste, attainment)' },
      { label: '3. Design Choice', text: 'Select exploratory, explanatory, historical, or field methods' },
      { label: '4. Empirical Test', text: 'Collect survey, ethnographic, or archival data while tracking bias' },
      { label: '5. Provisional Theory', text: 'Publish openly for peer scrutiny, replication, and revision' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Closed-System Science (Physics)',
    rightTitle: 'Open-System Science (Sociology)',
    rows: [
      {
        aspect: 'Subject Matter',
        left: 'Inanimate matter obeying stable mechanical forces',
        right: 'Conscious human actors assigning fluid cultural meanings',
      },
      {
        aspect: 'Lab Control',
        left: 'Variables isolated artificially inside petri dishes or labs',
        right: 'Multiple intertwined causes (caste, class, gender) in live society',
      },
      {
        aspect: 'Measurement',
        left: 'Universal SI units (kilogram, metre, joule, second)',
        right: 'Subjective Likert scales, proxies, and qualitative narratives',
      },
      {
        aspect: 'Generalisations',
        left: 'Universal laws stable across time and geography',
        right: 'Probabilistic, historically and culturally bounded patterns',
      },
      {
        aspect: 'Observer Impact',
        left: 'Atoms ignore microscope; observer remains external',
        right: 'Hawthorne reactivity, stigma, and researcher socialisation affect data',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Scientific Method',
    meaning:
      'A systematic, empirical, and publicly verifiable cycle of observation, hypothesis formulation, testing, and logical inference aimed at provisional causal explanation.',
  },
  {
    kind: 'keyTerm',
    term: 'CUDOS Norms',
    meaning:
      'Merton’s four institutional imperatives of science — Communalism, Universalism, Disinterestedness, and Organized Skepticism — protecting truth from dogma.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Falsification Principle',
    meaning:
      'Karl Popper’s demarcation rule stating a claim is scientific only if empirical evidence could conceivably prove it false, unlike unfalsifiable dogma.',
  },
  {
    kind: 'keyTerm',
    term: 'Paradigm Shift',
    meaning:
      'Thomas Kuhn’s concept of a revolutionary break in which anomalies topple an old scientific consensus and establish a new guiding worldview.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Most institutions demand unqualified faith; but the institution of science makes skepticism a virtue.',
    context: 'Capturing Organized Skepticism — why sociological claims must invite evidence-based challenge rather than deference.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025 & 2023 PYQ Formula: Avoid Simple Yes/No Verdicts!',
    body: 'Whenever UPSC asks "Is Sociology a Science?" or whether natural-science methods apply, avoid one-sided answers. Define science broadly (empirical, causal, verifiable, open-system per Sayer), showcase Durkheim’s scientific rigour alongside field experiments, explain consciousness/measurement/ethical limits, bring in Popper–Kuhn–feminist critiques of natural science itself, and conclude that sociology is a distinct, reflexive social science.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Confusing "No Lab" With "Not Scientific"',
    body: 'Students often claim sociology cannot be a science because it lacks laboratory experiments. Counter this immediately using Astronomy, Geology, and Meteorology (Andrew Sayer’s open-system sciences) plus sociological field experiments, comparative historical analysis, and statistical controls.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Mnemonic for Practical Limits: CEMOR',
    body: 'Remember 5 practical limits of scientific method in sociology with CEMOR: Consciousness & meaning, Ethical/lab experiment limits, Measurement without SI units, Observer/respondent bias (Delhi Metro/stigma), and Regional/cultural specificity of laws.',
  },
  {
    kind: 'answerBox',
    intro:
      'Science is a disciplined, empirically grounded, and self-correcting quest for causal explanation; while sociology cannot copy physics labs mechanically, it qualifies as an open-system social science.',
    points: [
      'Core criteria & CUDOS: Systematic empiricism, falsifiability (Popper), replicability, and Merton’s institutional norms guide sociological inquiry beyond common sense.',
      'Empirical demonstration: Durkheim’s Suicide (1897), large-scale surveys (NFHS/PLFS), and field experiments reveal structural regularities invisible to casual observation.',
      'Real methodological barriers: Human consciousness, ethical limits on controlled labs, non-standardized units, Hawthorne reactivity, and cultural specificity restrict universal laws.',
      'Reassessing science itself: Post-positivists (Popper, Kuhn, Feyerabend) and feminist scholars show even natural science is provisional, paradigm-bound, and socially situated.',
      'Balanced resolution: Following Sayer’s open-system model and Weberian rigor, sociology blends quantitative testing with interpretive depth and historical sensitivity.',
    ],
    conclusion:
      'Sociology stands firmly as a scientific discipline — uniquely bridging explanatory rigour with interpretive respect for human meaning.',
  },
]

export const topic1En: TopicLangContent = {
  summary,
  mindMap,
  sections,
}