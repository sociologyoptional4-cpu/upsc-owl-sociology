import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Social mobility measures movement across stratified ranks. Far from absolute opposites, "open" class societies retain hidden elite closures (Glass, Goldthorpe, Pew, WEF) while "closed" caste systems always hosted mobility via Sanskritisation, power capture, education, and democracy—making open versus closed a matter of degree.'

const mindMap: MindMapData = {
  title: 'Unit 5.4 · Social Mobility: Systems, Types & Drivers',
  center: 'Social Mobility',
  subtitle: 'Open vs Closed Ideal Types • Typologies • Education & Change',
  branches: [
    {
      title: 'Open vs Closed Myth',
      color: 'lavender',
      thinkers: ['Pitirim Sorokin', 'David Glass', 'John Goldthorpe', 'M.N. Srinivas'],
      points: [
        'Open (achievement/class) vs Closed (ascription/caste) are ideal types, not absolutes',
        'Open barriers: Glass short-range; Oxford 1:2:4 rule; Pew 4% climb; WEF India #76',
        'Closed mobility: Srinivas (Sanskritisation), Panikkar (dynasties), Shyam Lal',
        'Positional shift (Sanskritisation) vs Structural shift (democracy, land, markets)',
      ],
    },
    {
      title: 'Types of Social Mobility',
      color: 'yellow',
      thinkers: ['Pitirim Sorokin', 'S.M. Lipset', 'R. Bendix', 'Ralph H. Turner'],
      points: [
        'Vertical (up/down; embourgeoisement vs proletarianisation) vs Horizontal shift',
        'Intergenerational (across generations) vs Intragenerational (within one career)',
        'Absolute vs Relative; Structural (IT/boom) vs Individual; Long vs Short-range',
        'Ralph H. Turner: Sponsored (elite selection) vs Contest (open race)',
      ],
    },
    {
      title: 'Sorokin Drivers & Education',
      color: 'mint',
      thinkers: ['Pitirim Sorokin', 'B.R. Ambedkar', 'Pierre Bourdieu', 'Bowles & Gintis'],
      points: [
        'Sorokin’s 4 drivers: fertility gap, parent-child difference, environment, faulty rank',
        'Education as equaliser: skills, civic rights (Ambedkar, A.P.J. Kalam, RTE 2009)',
        'Education as gatekeeper: coaching divide, English fluency, IHDS SC/ST lag',
        'Urban anonymity, affirmative action, marriage, and Dalit/backward movements',
      ],
    },
    {
      title: 'Consequences & New Orders',
      color: 'pink',
      thinkers: ['Frank Parkin', 'Vilfredo Pareto', 'André Béteille', 'Thomas Piketty'],
      points: [
        'Parkin: Upward mobility acts as political safety valve, softening class revolt',
        'Pareto: Circulation of elites prevents decay; blocked circulation sparks upheaval',
        'WEF (Klaus Schwab): +10% global mobility boosts GDP growth by nearly 5%',
        'New hierarchy: caste opens into class while Western wealth & gig precarity re-close',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
    alt: 'Infographic panel showing Pitirim Sorokin open versus closed mobility ladder with vertical and horizontal movement alongside capitals, poverty, and exclusion',
    caption:
      'Sorokin’s mobility ladder tracks vertical climbing or sinking and horizontal shifts across societies that are never purely open or purely closed.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 02',
  },
  {
    kind: 'md',
    body: `## 1. What Is Social Mobility? Open vs Closed Systems Are Ideal Types

Imagine society as a multi-storey building where each floor carries different money, respect, and authority. [[thinker:Pitirim Sorokin]], in *Social and Cultural Mobility*, defines ==social mobility== as movement by people or groups between distinct social ranks—whether stepping across roles at a similar level or riding an elevator upward or downward.

Textbooks often sort societies into two opposing camps: ==open systems== (such as modern class economies, where education, enterprise, and merit allow individuals to climb regardless of birth) and ==closed systems== (such as traditional Hindu caste or medieval feudal estates, where birth fixes rank behind rigid endogamy and pollution rules). Yet sociological research proves a vital rule for UPSC answers: **no society is absolutely open or absolutely closed**; openness is a **matter of degree, not kind**.

### Why "Open" Class Societies Have Hidden Closures

- **Short-Range Limits ([[thinker:David Glass]], 1949):** Surveying English fathers and sons, Glass found substantial movement only across adjacent steps (e.g., manual worker’s son becoming clerk), while long-range leaps from bottom to top were rare.
- **The 1:2:4 Rule of Relative Hope ([[thinker:John Goldthorpe]] & [[thinker:David Lockwood]], Oxford 1972):** Although half of British sons shifted class amid postwar economic growth, Peter Kellner and Peter Wilby showed a professional’s son had four times the odds of reaching the top class compared with a working-class son—demonstrating intense ==elite self-recruitment==.
- **Sticky Floors and Ceilings (Pew 2012 & WEF 2020):** Pew’s *Pursuing the American Dream* found 43% of Americans born in the bottom income fifth stayed trapped there, 40% born at the top stayed at the top, and only 4% climbed from bottom to top. Similarly, the **WEF Global Social Mobility Index (2020)** ranked egalitarian Denmark 1st, the USA 27th, and India 76th out of 82 countries—matching India’s **IHDS surveys**, where intergenerational upward mobility remains markedly slower for SCs, STs, rural youth, and religious minorities.

### Why "Closed" Caste Systems Always Permitted Mobility

Conversely, traditional Indian caste was never as frozen as colonial textbooks claimed:
- **Varna Ideal vs Jati Reality ([[thinker:M.N. Srinivas]]):** While the fourfold *Varna* script looked rigid, local *Jatis* regularly shifted rank through ==Sanskritisation==—adopting vegetarianism, sacred threads, and Brahminical rituals after capturing agrarian land or local rule (e.g., Coorgs, Marathas, Yadavs, Noniyas of UP, Kolis of Surat).
- **Political Conquest & Renunciation ([[thinker:K.M. Panikkar]]):** History recorded non-Kshatriya dynasties (Nandas, Mauryas, Guptas) seizing thrones, while heterodox Bhakti sects, Buddhist/Christian conversion, or ascetic *Sanyasa* offered alternative exits.
- **De-Sanskritisation & Modern Shifts:** [[thinker:D.N. Majumdar]] and [[thinker:Shyam Lal]] documented groups shedding upper-caste rituals or entering reserved categories for state benefits, alongside [[thinker:M.N. Srinivas]]’s ==Westernisation== (modern courts, land markets, railway jobs). [[eg:After Independence, universal adult franchise, Dalit mobilisation, and affirmative action transformed isolated upward caste climbs into broad democratic challenges to traditional village hierarchy.]]

[[trap:When UPSC asks whether vertical mobility brings structural change in a closed system (2016 PYQ), distinguish carefully! Srinivas proved individual or single-jati Sanskritisation brings only *positional* rotation while keeping caste hierarchy intact—whereas mass democratic, educational, and economic mobility erodes ritual authority itself and reshapes the wider structure toward dispersed inequality (Yogendra Singh, André Béteille).]]

## 2. Typologies of Social Mobility

| Dimension | Paired Types | Meaning | Indian / Empirical Example |
| --- | --- | --- | --- |
| Direction | Vertical vs Horizontal | Changing income/status stratum (up/down) vs shifting role on same rank | Farm labourer -> IAS officer (Vertical) vs village labourer -> city construction worker (Horizontal) |
| Time Span | Intergenerational vs Intragenerational | Parent vs child position vs career trajectory within one life | Farmer’s daughter -> doctor (Inter) vs factory helper -> plant supervisor (Intra) |
| Benchmark | Absolute vs Relative | Own income/status rise vs standing relative to rising peers | Income rises 10x in IT yet peers grow faster; Luton Affluent Workers (1963) |
| Cause | Structural vs Individual | Macro economy/tech reshaping jobs vs personal skill/effort | 1991 IT boom creating white-collar roles vs clearing competitive exams |
| Institutional Gate | Sponsored vs Contest (R.H. Turner) | Elites pick future leaders early vs open ongoing mass race | British Oxbridge-private school grooming vs US public college contest |

Notice two paired directional shifts studied closely in modern capitalism: ==embourgeoisement== (working-class earners adopting middle-class incomes, though Goldthorpe & Lockwood’s 1963 Luton car workers proved high wages alone did not erase cultural class gaps) and ==proletarianisation== (salaried white-collar clerks losing autonomy, union shield, and status—like Lockwood’s *Black-Coated Worker* or today’s deskilled tech/AI-displaced routine staff).

## 3. Sources, Drivers & the Double-Edged Role of Education

What pushes people up or down the social ladder? [[thinker:Pitirim Sorokin]] identified four foundational engines:
1. **Demographic Factors:** Higher-status families historically have fewer children than lower-status families, creating an upper-middle demographic vacuum filled from below when bureaucracy expands ([[thinker:Max Weber]]).
2. **Parent-Child Dissimilarities:** Ability and ambition do not inherit automatically like land; capable youth from humble homes climb while unmotivated heirs slide.
3. **Changing Environment & Technology:** Shifting markets ruin old crafts (typewriter mechanics, horse-cart makers) while minting fortunes in software, logistics, and renewable energy.
4. **Faulty Distribution:** When capable talent is trapped below unfit elites, society needs ==channels of vertical circulation== ("like blood circulation in the human body") to avert violent revolution.

Among all modern channels—urban anonymity, constitutional reservations, marriage (*hypergamy*), and social movements—**education** plays the sharpest yet most paradoxical role:
- **Education as an Elevator:** Schools and public universities supply certified credentials, awareness of constitutional rights (RTE Act 2009), and meritocratic entry into professions—exemplified by [[thinker:B.R. Ambedkar]], A.P.J. Abdul Kalam, and first-generation OBC/Dalit civil servants. [[eg:In rural and semi-urban India, a young woman clearing state university or NEET exams not only raises her household income, she gains voice against early marriage and caste deference.]]
- **Education as a Gatekeeper:** Yet [[thinker:Pierre Bourdieu]] and neo-Marxists [[thinker:Samuel Bowles]] and [[thinker:Herbert Gintis]] expose how elite private English-medium schools, expensive Kota/Delhi coaching ecosystems, and family cultural capital reproduce existing privilege, leaving poorly funded government schools trailing behind.

## 4. Consequences & How Open and Closed Systems Are Transforming Today

High mobility strengthens economic efficiency—WEF chair **Klaus Schwab** estimated a 10% rise in global social mobility could lift world GDP nearly 5% by 2030. Politically, [[thinker:Frank Parkin]] showed upward mobility serves as a ==political safety valve==: ambitious working-class youth compete individually in exams instead of leading revolutions, while downwardly mobile middle-class families cling to middle-class identity rather than joining worker unions. Meanwhile, [[thinker:Vilfredo Pareto]] warned that ruling elites decay unless open ==circulation of elites== refreshes leadership.

Crucially, both open and closed systems are **converging into hybrid new hierarchies today**: India’s formerly closed caste system has opened politically and economically through cities, affirmative action, and markets, yet forged **new hierarchies** anchored in English fluency, coaching access, and caste-class hybrids; simultaneously, Western "open" meritocracies are **re-closing** via inherited wealth dynasties ([[thinker:Thomas Piketty]]), unpaid internships, and precarious gig work. [[link:Connect caste mobility and Sanskritisation directly to Paper 2 Unit 2 (Modernization of Indian Tradition) and Unit 4 (Caste System).]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Open System (Class Ideal Type)',
    rightTitle: 'Closed System (Caste / Estate Ideal Type)',
    rows: [
      {
        aspect: 'Basis of Rank',
        left: 'Achievement via education, market skill, and wealth',
        right: 'Ascription by birth, lineage, and ritual status',
      },
      {
        aspect: 'Normative Legitimacy',
        left: 'Legal equality of opportunity and free competition',
        right: 'Sacred hierarchy, endogamy, and hereditary duty',
      },
      {
        aspect: 'Boundaries & Interaction',
        left: 'Porous social circles; inter-strata marriage legally permitted',
        right: 'Strict commensality, spatial segregation, and endogamous closure',
      },
      {
        aspect: 'Hidden Reality (Not Absolute)',
        left: 'Pew 4% bottom-to-top rate, 1:2:4 elite self-recruitment, Bourdieu capital',
        right: 'Sanskritisation, royal conquest, conversion, and democratic reservations',
      },
      {
        aspect: 'Primary Transformation Today',
        left: 'Re-closing via inherited property, private schooling, and gig precarity',
        right: 'Opening via urbanisation and quotas while forming caste-class hybrids',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Structural Drivers',
        text: 'Demographic gap, tech change, and faulty distribution create pressure (Sorokin)',
      },
      {
        label: 'Mobility Elevators',
        text: 'Education, urban anonymity, markets, and reservations open paths',
      },
      {
        label: 'Positional vs Structural',
        text: 'Single-group rise rotates rank; mass movement alters system rules',
      },
      {
        label: 'System Consequences',
        text: 'Safety valve eases revolt (Parkin) & refreshes elites (Pareto) unless blocked',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Vertical vs Horizontal Mobility',
    meaning:
      'Vertical mobility shifts an individual or group up or down into a higher or lower socioeconomic stratum, whereas horizontal mobility alters role or location at roughly the same rank.',
  },
  {
    kind: 'keyTerm',
    term: 'Sanskritisation & Positional Change',
    meaning:
      'The process by which a lower or middle caste adopts upper-caste customs and rituals to claim higher local rank—producing positional rotation without abolishing the caste system itself.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Sponsored vs Contest Mobility',
    meaning:
      'Ralph H. Turner’s distinction between early elite selection and grooming for top offices (sponsored) versus an open competitive race where anyone may strive until late stages (contest).',
  },
  {
    kind: 'keyTerm',
    term: 'Circulation of Elites',
    meaning:
      'Pareto’s cycle whereby complacent ruling elites ("lions" or "foxes") lose vitality and are continuously replaced by rising counter-elites from below.',
    thinkerSlug: 'vilfredo-pareto',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'Sanskritisation results only in positional changes in the system and does not lead to any structural change.',
    context: 'Crucial distinction when assessing whether caste mobility alters caste hierarchy itself.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'vilfredo-pareto',
    quote: 'History is a graveyard of aristocracies.',
    context: 'Why blocked elite circulation eventually forces political or revolutionary turnover.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '7 Out of 8 Mobility PYQs Test One Core Thesis!',
    body: 'Notice how 2013, 2015, 2016, 2018, 2020, 2022, and 2024 all hammer the SAME core axis: "Open vs Closed systems are NOT absolutes." Always pair two proofs on each side—Open closures (Glass 1949, Goldthorpe 1:2:4 rule, Pew 2012, WEF India 76th) AND Closed mobility (Srinivas Sanskritisation, Panikkar dynasties, Shyam Lal De-sanskritisation, Census petitions, quotas).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Calling Education an Unqualified Equaliser',
    body: 'For the 2021 Education & Mobility PYQ, never write a one-sided GS essay praising literacy alone. Show both faces: education unlocks meritocratic climbs (Ambedkar, Kalam, RTE 2009) AND simultaneously reproduces class-caste privilege via English-medium schooling, coaching fees (Bourdieu), and IHDS rural/SC/ST deficits.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Data Trio to Drop in Mobility Answers',
    body: 'Memorise three killer numbers: (1) Goldthorpe Oxford 1972 "1:2:4 rule of relative hope", (2) Pew 2012 US study: 43% stuck at bottom, only 4% reach top quintile, and (3) WEF Global Social Mobility Index 2020: Denmark #1, USA #27, India #76 out of 82.',
  },
  {
    kind: 'answerBox',
    intro:
      'Social mobility reveals how far societies actually match professed ideals of merit and equality against inherited caste, class, gender, and spatial barriers.',
    points: [
      'Ideal Types, Not Absolutes: "Open" class systems still display elite self-recruitment (1:2:4 rule, Pew 4% climb), while "closed" caste systems permitted mobility via Sanskritisation, conquest, and conversion.',
      'Positional vs Structural Change: Individual or single-jati shifts leave traditional norms standing, whereas democratic quotas, land markets, and urbanisation transform wider structures.',
      'Multi-Dimensional Typology: Sociologists track vertical/horizontal, inter/intragenerational, absolute/relative, structural/individual, and sponsored/contest mobility.',
      'Education Paradox: Acts simultaneously as an upward elevator for marginalised first-generation learners and a gatekeeper rewarding Bourdieu’s cultural capital.',
      'New Convergence: Closed systems are marketising into caste-class hybrids even as open Western economies re-close around inherited wealth and gig-work precarity.',
    ],
    conclusion:
      'Expanding equitable health, schooling, and social protection—rather than leaving mobility to market luck—is essential to keep democratic societies genuinely open.',
  },
]

export const topic4En: TopicLangContent = { summary, mindMap, sections }