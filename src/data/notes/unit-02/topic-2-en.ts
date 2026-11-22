import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Research methodology connects philosophical assumptions about social reality to concrete investigative rules—spanning macro-structural strands (Positivism, Functionalism, Marxism), micro-interpretive strands (Weber, Phenomenology, Ethnomethodology), and Feminist, Subaltern, and Post-Positivist approaches.'

const mindMap: MindMapData = {
  title: 'Unit 2.2 · Major Theoretical Strands of Research Methodology',
  center: 'Methodological Strands',
  subtitle: 'Ontology & Rules • Structural vs Action • Feminist & Plural Bridges',
  branches: [
    {
      title: 'What Methodology Means',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Émile Durkheim', 'Max Weber', 'C. Wright Mills'],
      points: [
        'System of rules, logic, and procedures—broader than mere data tools',
        'Connects Ontology (what reality is) to Epistemology (how we know it)',
        'Guides hypothesis design, sampling, interpretation, and bias checks',
        'Prevents random opinion-gathering or Mills abstracted empiricism',
      ],
    },
    {
      title: 'Macro-Structural Strands',
      color: 'yellow',
      thinkers: ['Émile Durkheim', 'Karl Marx', 'Talcott Parsons', 'Robert K. Merton'],
      points: [
        'Positivist-Functionalism: social facts shape actors; quantitative & comparative',
        'Merton middle-range theory pairs surveys with manifest/latent analysis',
        'Marxist Historical Materialism: dialectics, class base, structural conflict',
        'Critical Theory (Adorno): emancipation over passive status-quo measurement',
      ],
    },
    {
      title: 'Micro-Interpretive Strands',
      color: 'mint',
      thinkers: ['Max Weber', 'G.H. Mead', 'Alfred Schutz', 'Harold Garfinkel'],
      points: [
        'Weberian bridge: Verstehen + Ideal Types + value-neutral causal adequacy',
        'Symbolic Interactionism & Dramaturgy: symbols, self, front/back stage',
        'Phenomenology & Ethnomethodology: typifications, indexicality, breaching',
        'High ecological validity on lived meaning; low mechanical reliability',
      ],
    },
    {
      title: 'Feminist, Post-Positivist & India',
      color: 'pink',
      thinkers: ['Ann Oakley', 'Dorothy Smith', 'Sharmila Rege', 'M.N. Srinivas'],
      points: [
        'Feminist research: non-hierarchical interviews, care work, standpoint lens',
        'Post-Positivism: Popper falsification + Kuhn paradigms + triangulation',
        'Giddens Structuration unites macro structure and micro human agency',
        'India: Srinivas field view, Ambedkar & Guha subaltern caste-peasant lens',
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
      'Every research choice reflects a deeper methodological strand — moving from macro-structural Positivism through Post-Positivism to meaning-centred Interpretivism.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Is Methodology — and How Does It Differ From Methods?

Beginners often use "method" and "methodology" interchangeably, yet keeping them separate instantly sharpens sociological answers. A ==method== is simply a specific data-gathering tool — like a household questionnaire, an interview guide, or participant observation. ==Methodology==, by contrast, is the overarching ==system of logical rules, philosophical assumptions, and investigative procedures== that justifies why you chose that tool, what counts as valid evidence, and how bias will be controlled.

Think of building a bridge: a hammer or laser level is a *method*, whereas structural engineering — deciding weight assumptions, safety margins, and load calculations — is *methodology*. Every sociological strand rests on three linked choices:

- **Ontological Premise:** Is social reality an objective structure pressing down on individuals (like caste hierarchy or class markets), or a fluid construction continuously negotiated by actors in conversation?
- **Epistemological Stance:** Should sociologists measure external regularities from a detached distance, or step into actors’ shoes using empathetic interpretation (*Verstehen*) and non-hierarchical dialogue?
- **Procedural Rigour:** Methodology establishes transparent rules for concept operationalisation, sampling, evidence cross-checking, and theoretical falsification so sociology rises above casual common sense. [[trap:Using fancy regression tables without theoretical grounding produces what C. Wright Mills mocked as "abstracted empiricism" — numbers divorced from meaning or history.]]

## Strand 1: Macro-Structural Methodologies (Positivism, Functionalism, Marxism)

Macro-structural strands treat society as a real, external architecture that shapes individual behaviour long before any single person is born. Because structures like class, caste, and law constrain everyday choices from above, these researchers look for large-scale patterns using census tables, surveys, and historical comparisons rather than small conversational anecdotes.

### Functionalist-Positivist Strand

Rooted in [[thinker:Auguste Comte]] and [[thinker:Émile Durkheim]], this strand models sociology on systematic empirical science, examining how interconnected institutions maintain order or produce dysfunctions. Later scholars refined grand systems into empirically testable models: [[thinker:Talcott Parsons]] mapped systemic equilibrium while [[thinker:Robert K. Merton]] bridged grand theory and raw data through ==theories of the middle range==, distinguishing visible *manifest* goals from hidden *latent* consequences. [[eg:When an Indian sociologist analyses National Crime Records Bureau or PLFS employment datasets to track how rapid urbanisation shifts household size and youth distress, she is working inside the macro-empirical structural tradition.]]

### Marxist Historical-Materialist & Critical Strand

Like functionalists, [[thinker:Karl Marx]] placed objective structures — specifically the ==mode of production== and class relations — at the centre, yet turned methodology toward uncovering hidden contradictions and exploitation rather than equilibrium. Using dialectical materialism and historical records, Marxists trace how economic power shapes politics, law, and ideology. In India, [[thinker:A.R. Desai]] applied Marxist methodology to expose the class foundations of Indian nationalism and rural development schemes, while Frankfurt School thinkers [[thinker:Theodor Adorno]] and [[thinker:Max Horkheimer]] argued methodology must aim at ==human emancipation== rather than treating capitalist inequality as a neutral natural fact.

## Strand 2: Micro-Interpretive & Social Action Strands

Suppose a macro survey reports that 98% of adults in a region marry by age thirty. An interpretive sociologist asks: *"Does that single percentage tell us whether people married for companionship, dowry pressure, family honour, or economic security?"* Micro-interpretive strands reject mechanical structural determinism and place conscious ==human agency==, motives, and situational meanings at the heart of sociological inquiry.

- **Weber’s Methodological Bridge:** [[thinker:Max Weber]] uniquely bridged structural causation and subjective meaning. He insisted sociology use ==Verstehen== (empathetic understanding of actors’ motives) alongside ==Ideal Types== (analytical benchmarks like *rational bureaucracy* or *charismatic authority*) and value-neutral testing to achieve explanations adequate at both the level of meaning and the level of causality.
- **Symbolic Interactionism & Dramaturgy:** [[thinker:G.H. Mead]], [[thinker:Herbert Blumer]], and [[thinker:Erving Goffman]] examine how people build social identity through shared language, gestures, and impression management in face-to-face encounters. [[eg:Observing how a UPSC aspirant shifts posture, vocabulary, and dress between a casual hostel corridor (back stage) and a coaching mock interview board (front stage) requires interactionist fieldwork, not a questionnaire.]]
- **Phenomenology & Ethnomethodology:** Adapted from philosopher [[thinker:Edmund Husserl]] by [[thinker:Alfred Schutz]], phenomenology studies how actors classify sensory chaos into shared mental recipes (**typifications** and **intersubjectivity**). Extending this empirically, [[thinker:Harold Garfinkel]]’s ==ethnomethodology== examines the unspoken practical methods people use to build everyday order through **indexicality** (context-bound meaning), **reflexivity**, and **breaching experiments** — exposing how even official suicide or crime statistics rest on coroners’ and police officers’ common-sense judgements ([[thinker:J.M. Atkinson]]).
- **Are Non-Positivist Strands Scientific, Reliable, and Valid?** Because micro-ethnographies and breaching studies capture lived realities without artificial survey distortion, they achieve extraordinarily high ==ecological validity==. However, critics note they sacrifice mechanical ==reliability== (another researcher in a different town may not replicate identical field nuances) and struggle to explain macro power structures like global finance or state law. Still, non-positivism remains **rigorously systematic and empirical** — Weber’s causal ideal types, Schutz’s typificatory mapping, and triangulated ethnography follow transparent, falsifiable standards of evidence rather than arbitrary guesswork.

## Strand 3: Feminist, Subaltern, and Post-Positivist Syntheses

Modern sociology moves past a rigid battle between "numbers" and "meanings" by questioning whose perspective shapes research in the first place. Feminist, post-colonial, and post-positivist methodologies show that blind spots vanish when marginalised voices and multiple investigative tools enter together.

- **Distinctiveness of Feminist Methodology:** Led by [[thinker:Ann Oakley]], [[thinker:Dorothy Smith]], Sandra Harding, and in India [[thinker:Sharmila Rege]], feminist methodology exposes how traditional "malestream" sociology defined paid factory labour as "work" while erasing unpaid domestic care. Crucially, Oakley replaced cold, one-way questionnaire interrogation with **non-hierarchical, reciprocal interviewing**, empathetic rapport, and explicit **reflexivity** — treating women as active knowers rather than passive data mines while connecting personal pain (like domestic burden) to patriarchal structure. [[eg:Rege’s Dalit Feminist Standpoint insists that studying caste-patriarchy in Maharashtra through upper-caste surveys misses the distinct structural insights captured in Dalit women’s testimonios.]]
- **Post-Positivism & Methodological Triangulation:** Guided by [[thinker:Karl Popper]] (falsifiability), [[thinker:Thomas Kuhn]] (paradigm consciousness), and [[thinker:Andrew Sayer]] (critical realism), post-positivism accepts that absolute value-free certainty is impossible yet pursues near-objectivity through **triangulation** — combining surveys, archival records, and participant interviews on the same question.
- **Indian Synthesis & Structuration:** [[thinker:Anthony Giddens]]’s Structuration theory shows structure and agency continuously reproduce each other ([[link:matching Paper 2 Unit 1, where M.N. Srinivas’s ethnographic "field view" corrected G.S. Ghurye’s textual "book view" while B.R. Ambedkar and Ranajit Guha centred subaltern voices]]).

| Theoretical Strand | Core View of Reality | Preferred Tools | Key Thinkers & Indian Resonance |
| --- | --- | --- | --- |
| Positivist / Functionalist | External social facts constrain actors | Surveys, stats, comparative tables | Comte, Durkheim, Merton; Census/NFHS data |
| Marxist / Critical | Material contradictions & hidden power | Historical-dialectical & critique | Marx, Adorno; A.R. Desai on Indian nationalism |
| Interpretive / Micro | Meaning-driven agency & interaction | Verstehen, ethnography, breaching | Weber, Schutz, Goffman, Garfinkel; Village studies |
| Feminist & Subaltern | Situated, gendered & caste standpoints | Reflexive dialogue, oral testimony | Oakley, Smith; Sharmila Rege, Ambedkar, Guha |`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1848–1895',
        title: 'Marx & Durkheim — Structural Methodologies',
        text: 'Marx forged historical-dialectical critique; Durkheim codifed objective social facts and comparative statistics.',
      },
      {
        year: '1904–1922',
        title: 'Max Weber — Methodological Bridge',
        text: 'Joined Verstehen and Ideal Types with value-neutral causal explanation.',
      },
      {
        year: '1932–1934',
        title: 'Mead, Schutz & Popper — Micro & Post-Positivist Turns',
        text: 'Mead traced symbolic interaction; Schutz adapted phenomenology; Popper launched falsificationism.',
      },
      {
        year: '1959–1967',
        title: 'Goffman, Garfinkel & Kuhn — Everyday & Paradigm Shifts',
        text: 'Dramaturgy and Ethnomethodology mapped lived interaction; Kuhn exposed paradigm revolutions.',
      },
      {
        year: '1981–1998',
        title: 'Oakley, Giddens & Indian Standpoint Turn',
        text: 'Feminist interviewing, Giddens Structuration, and Rege/Guha subaltern methods bridged macro and micro lenses.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Positivist Macro', text: 'External structures measured via quantitative surveys & stats' },
      { label: 'Weberian Bridge', text: 'Verstehen + Ideal Types unite meaning with causal logic' },
      { label: 'Micro-Interpretive', text: 'Phenomenology, Dramaturgy & Ethnomethodology decode lived rules' },
      { label: 'Feminist & Subaltern', text: 'Non-hierarchical, reflexive inquiry centring marginalised standpoints' },
      { label: 'Triangulated Synthesis', text: 'Giddens & Post-Positivism blend quantitative patterns with qualitative depth' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Structural / Positivist Strand',
    rightTitle: 'Social Action / Interpretive Strand',
    rows: [
      {
        aspect: 'Reality Assumption',
        left: 'Society exists objectively prior to and outside individuals',
        right: 'Society is continually created through meaningful human action',
      },
      {
        aspect: 'Actor Image',
        left: 'Role-player guided by norms, socialisation, or class base',
        right: 'Active, conscious agent interpreting symbols and context',
      },
      {
        aspect: 'Primary Data Goal',
        left: 'Measure rates, correlations, and structural causality (reliability)',
        right: 'Grasp motives, lived meanings, and tacit rules (validity)',
      },
      {
        aspect: 'Core Techniques',
        left: 'Structured surveys, official statistics, macro-history',
        right: 'Participant observation, unstructured interviews, breaching tests',
      },
      {
        aspect: 'Classic Representatives',
        left: 'Auguste Comte, Émile Durkheim, Karl Marx, Talcott Parsons',
        right: 'Max Weber, G.H. Mead, Alfred Schutz, Erving Goffman, Garfinkel',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Research Methodology',
    meaning:
      'The coherent system of philosophical assumptions, logical principles, and investigative rules governing how sociologists select methods, validate evidence, and control bias.',
  },
  {
    kind: 'keyTerm',
    term: 'Theories of the Middle Range',
    meaning:
      'Robert K. Merton’s bridge between grand abstract theory and raw data gathering — building specific, empirically testable hypotheses on bounded social phenomena.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Feminist Standpoint Methodology',
    meaning:
      'An emancipatory, reflexive approach (Oakley, Smith, Rege) rejecting detached hierarchy in favour of reciprocal interviewing and insights rooted in marginalised gendered and caste lives.',
  },
  {
    kind: 'keyTerm',
    term: 'Methodological Triangulation',
    meaning:
      'Combining multiple data sources, theoretical lenses, or quantitative and qualitative methods to offset single-method blind spots and boost sociological credibility.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
    context: 'Anchor of Marxist and Critical methodology: inquiry must expose structural inequality rather than passively ratify the status quo.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2023 & 2021 PYQ Hits: Feminist Distinctiveness & Ethnomethodology Reliability!',
    body: 'For Feminist Method (2023), highlight four pillars: challenging androcentric bias, non-hierarchical rapport (Ann Oakley), reflexivity/standpoint (Dorothy Smith, Sharmila Rege), and emancipatory goal. For Ethnomethodology data (2021), nail the Reliability vs Validity contrast: breaching and field accounts yield super-rich ecological VALIDITY on tacit social rules, yet low standardisation limits statistical RELIABILITY.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Treating "Methodology" as Just Survey vs Interview',
    body: 'When UPSC asks about "methodology as a system of rules, principles and procedures" (2020), do not merely list questionnaires and case studies! Explain the deeper pipeline: Ontology -> Epistemology -> Logical Rules (falsification, neutrality, ideal types) -> Methods -> Peer Scrutiny.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '4-Way Strand Map for Any Paper 1 Answer',
    body: 'Whenever stuck on a broad methods question, deploy this 4-quadrant lens: (1) Positivist-Structural (Durkheim/Merton), (2) Conflict-Critical (Marx/Adorno/Desai), (3) Interpretive-Micro (Weber/Schutz/Garfinkel/Goffman), and (4) Feminist-Triangulated (Oakley/Popper/Giddens).',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociological methodology is not a single rigid recipe, but a spectrum of philosophical rules linking how we conceive society with how we gather and interpret evidence.',
    points: [
      'Rule-governed foundation: Methodology connects ontology, epistemology, and verification procedures, separating rigorous research from Mills’s abstracted empiricism or casual opinion.',
      'Macro-structural strand: Durkheimian functionalism and Marxist materialism treat social facts or economic structures as primary, using statistical comparison, surveys, and historical dialectics.',
      'Micro-interpretive strand: Weber’s Verstehen, symbolic interactionism, phenomenology, and ethnomethodology uncover subjective meanings with high validity, though with lower standardisation.',
      'Feminist & subaltern intervention: Ann Oakley, Dorothy Smith, and Sharmila Rege replace detached hierarchy with reciprocal dialogue, reflexivity, and marginalised standpoints.',
      'Contemporary synthesis: Following Giddens’s Structuration and post-positivist triangulation, best-practice sociology pairs statistical breadth with interpretive and reflexive depth.',
    ],
    conclusion:
      'Methodological pluralism is sociology’s greatest strength — matching macro patterns with micro meaning to capture multi-layered human reality.',
  },
]

export const topic2En: TopicLangContent = {
  summary,
  mindMap,
  sections,
}