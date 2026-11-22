import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociology’s scope evolved from the Formalistic versus Synthetic debate into a holistic, relational lens that connects History, Social Anthropology, Political Science, Economics, and Psychology—and now spans India’s digital, urban, and global transformations.'

const mindMap: MindMapData = {
  title: 'Unit 1.2 · Scope & Other Social Sciences',
  center: 'Scope of Sociology',
  subtitle: 'Formal vs Synthetic → Holistic Relational Lens',
  branches: [
    {
      title: 'Two Classical Schools',
      color: 'lavender',
      thinkers: ['Georg Simmel', 'Max Weber', 'Émile Durkheim', 'Pitirim Sorokin'],
      points: [
        'Formalistic: study pure forms of interaction (Simmel, Vierkandt)',
        'Synthetic: general science integrating all social institutions (Durkheim, Hobhouse)',
        'Critique: form and content cannot be split; encyclopaedic claims turn vague',
        'Modern consensus: Alex Inkeles (institutions, processes, methods) + Merton',
      ],
    },
    {
      title: 'History & Anthropology',
      color: 'yellow',
      thinkers: ['G.E. Howard', 'E.H. Carr', 'A.L. Kroeber', 'M.N. Srinivas'],
      points: [
        'History: idiographic past events; Sociology: nomothetic structural patterns',
        'Bridge: Historical Sociology (Weber Protestant Ethic, Subaltern Studies)',
        'Anthropology: small/tribal fieldwork; Sociology: industrial/modern surveys',
        'India merged both via village ethnographies (Srinivas, Dube, Béteille)',
      ],
    },
    {
      title: 'Pol Sci, Economics & Psychology',
      color: 'mint',
      thinkers: ['Karl Marx', 'Mark Granovetter', 'G.H. Mead', 'Rajni Kothari'],
      points: [
        'Pol Sci: state and law vs Sociology: caste, class and elite power (Kothari)',
        'Economics: rational homo economicus vs Sociology: socially embedded markets',
        'Psychology: individual mind vs Sociology: social facts and collective norms',
        'Bridges: Political Sociology, Economic Sociology, Symbolic Interactionism',
      ],
    },
    {
      title: 'Globalisation & Indian Frontiers',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Arjun Appadurai', 'B.R. Ambedkar', 'Yogendra Singh'],
      points: [
        'Post-1991 shift: beyond rural caste monographs to digital and urban worlds',
        'New themes: gig labour algorithms, matrimonial apps, gated cities, climate displacement',
        'Subaltern & Dalit-feminist turns broke savarna village bias (Ambedkar, Rege)',
        'Core takeaway: Sociology is defined by its relational gaze across every domain',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-03-social-sciences.webp',
    alt: 'Comparison chart of Sociology versus Common Sense, History, and Psychology highlighting social context using unemployment example',
    caption:
      'Each sibling discipline studies one institutional angle; Sociology connects the hidden web of social context, norms, and relationships behind them all.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 03',
  },
  {
    kind: 'md',
    body: `## What "Scope" Means and Why Sociology’s Scope Is Unique

In any academic discipline, **scope** simply means two things: the boundaries of what the subject studies, and the specific angle from which it looks at reality. Most social sciences carve out one dedicated institution—Economics claims the market, Political Science claims the state, and Psychology claims the individual mind.

Sociology refuses to stay trapped inside a single institutional box. Its scope is ==uniquely relational and holistic== because human beings never experience economy, politics, family, or religion in separate compartments—they experience all of them together inside one interconnected web of social life. [[thinker:Robert Bierstedt]] captures this character clearly when he defines Sociology as a *social* (not natural), *categorical* (studying what is, not what ought to be), *pure* (building knowledge alongside applied insights), *abstract* (seeking underlying patterns), and *generalising* science. [[eg:Take youth unemployment in India: Economics tracks GDP growth and wage rates, Psychology measures exam anxiety, and Political Science analyses welfare policy—but Sociology connects labour markets, caste-class networks, family expectations, and coaching culture into one integrated picture.]]

## The Great Scope Debate: Formalistic vs Synthetic Schools

Soon after Sociology emerged in nineteenth-century Europe, scholars clashed fiercely over how wide or narrow its territory should be. If every other social science already studied law, trade, politics, and the mind, what was left exclusively for Sociology?

### 1. Formalistic (Specialistic) School: Study Forms, Not Content

Led by [[thinker:Georg Simmel]], [[thinker:Max Weber]], [[thinker:Alfred Vierkandt]], [[thinker:Leopold von Wiese]], and [[thinker:Ferdinand Tonnies]], this school argued that Sociology would turn into a messy, vague encyclopaedia if it tried to swallow every aspect of human life. To earn respect as an independent science, they insisted Sociology must narrow its focus strictly to the ==pure forms of social interaction==—such as competition, cooperation, conflict, subordination, and imitation—while leaving the concrete *content* (trade, war, worship, law) to Economics, History, or Law.

Think of this using a simple everyday analogy: a cup has a geometric *shape* (form), even though it may hold tea, water, or medicine (content). In the same way, the social form called **competition** follows remarkably similar rules whether the arena is a UPSC coaching batch in Delhi, a high-stakes IPL player auction, or an arranged-marriage portal! [[trap:Pitirim Sorokin’s decisive critique: unlike a cup and water, social forms and social contents cannot be separated in living society—competition in a temple committee, a capitalist market, and a parliament changes its very logic depending on its cultural and economic content.]]

### 2. Synthetic School: Society as an Interconnected Whole

Led by [[thinker:Emile Durkheim]], [[thinker:L.T. Hobhouse]], [[thinker:Morris Ginsberg]], and [[thinker:Pitirim Sorokin]], the Synthetic School argued that slicing human life into watertight disciplines destroys real understanding. In everyday Indian life, a farmer’s credit decision is simultaneously shaped by caste trust, monsoon anxiety, family marriage obligations, and state MSP policy—you cannot isolate the "economic" motive without falsifying reality.

Therefore, Sociology must act as a ==generalising and synthesising science== that maps how different social institutions reinforce or reshape one another:
- **Durkheim’s Three Pillars:** *Social Morphology* (population size, density, and spatial layout), *Social Physiology* (the functioning of religion, law, morals, and economy), and *General Sociology* (discovering universal social laws).
- **Ginsberg’s Four Divisions:** Social morphology, social control, social processes, and social pathology (crime, poverty, disorganisation).
- **Critique & Middle-Way Consensus:** Critics warned that an unlimited synthetic scope risked making Sociology an unfocused "jack of all trades". Today, [[thinker:Alex Inkeles]] and [[thinker:T.B. Bottomore]] offer the accepted middle path: Sociology focuses specifically on **social institutions, social processes, and research methods**, sharpened by [[thinker:Robert K. Merton]]’s *Middle-Range Theories* and [[thinker:C. Wright Mills]]’s *Sociological Imagination*.

## How Sociology Relates to Sibling Social Sciences

Before looking at the summary matrix below, see how each sibling discipline examines the **same Indian social reality**—such as a nationwide farmers’ protest, an election cycle, or youth unemployment—through a completely different lens, and how each eventually joins hands with Sociology.

### History: Unique Past Events vs Recurrent Structural Patterns

History asks *what exactly happened, in what chronological order, and why at that specific moment?* Using archives, royal records, diaries, and inscriptions, historians reconstruct unique events (*idiographic* method)—for instance, tracing the exact dates, leaders, and clauses of the 1928 Bardoli Satyagraha or the 2020–21 farm bills. Sociology uses those same movements to ask a *nomothetic* question: what recurring structural patterns of peasant mobilisation, caste leadership, and state response appear across centuries? As [[thinker:G.E. Howard]] famously remarked, history is past sociology and sociology is present history, while [[thinker:E.H. Carr]] noted that the more sociological history becomes and the more historical sociology becomes, the richer both grow—a bridge visible in [[thinker:Max Weber]]’s *Protestant Ethic*, Charles Tilly’s collective action studies, and Ranajit Guha’s *Subaltern Studies*.

### Social Anthropology: Colonial Twin Sisters Reunited

Historically, a colonial division of labour split the "twin sisters" ([[thinker:E.A. Hoebel]]): Social Anthropology studied small, pre-literate, non-Western tribal communities through long-term participant observation, while Sociology studied large, industrial Western cities through surveys and statistics. Look at a tribal forest protest in Bastar: classic anthropology documented clan rituals and sacred groves, whereas sociology tracked state mining policy and class displacement. Today that wall has collapsed—[[thinker:A.L. Kroeber]] called them two sides of the same coin, anthropologists now study tech firms and urban malls, and in India [[thinker:M.N. Srinivas]], S.C. Dube, and André Béteille merged ethnographic fieldwork with sociological theory through village studies.

### Political Science: Formal State Machinery vs Social Roots of Power

Political Science centres on constitutions, sovereignty, parliamentary rules, and formal governance—asking during an Indian election how seat-sharing, Election Commission rules, and party manifestos shape outcomes. Sociology looks behind the ballot box to uncover the ==informal social roots of power==: why voters mobilise around caste, region, gender, or patronage networks. Through [[thinker:Karl Marx]]’s class state, [[thinker:Max Weber]]’s legitimacy, [[thinker:Vilfredo Pareto]]’s elites, and Rajni Kothari’s *Caste in Indian Politics*, Political Sociology proves that state institutions always sit inside society, never above it.

### Economics: Rational Choice Models vs Socially Embedded Markets

Traditional Economics assumes an abstract rational actor (*homo economicus*) calculating prices, utility, and scarcity—analysing Indian unemployment through GDP growth, wage rigidity, and skill mismatch, or rural credit through interest rates. Economic Sociology, led by [[thinker:Max Weber]], Karl Polanyi, and Mark Granovetter’s idea of ==embeddedness==, shows that real markets never float in a social vacuum: credit, hiring, and business partnerships flow through kinship trust, caste guilds, and gendered norms of who is allowed to work outside the home.

### Psychology: The Individual Mind vs Collective Social Context

Psychology examines human behaviour from the inside out—measuring personality traits, IQ, emotional trauma, cognitive bias, and motivation inside a single person’s mind. If an aspirant faces severe burnout in Old Rajinder Nagar or Kota, Psychology diagnoses stress, anxiety, and coping styles; Sociology zooms out to show how credential inflation, parental status anxiety, job scarcity, and the coaching industry produce that distress structurally. [[thinker:Emile Durkheim]]’s *Suicide* proved that even the most intimate personal act varies systematically with social integration, while G.H. Mead, C.H. Cooley, and Erving Goffman built Social Psychology to show that the human self itself is forged through social interaction.

| Discipline | Core Focus | Typical Method | Shared Bridge / Sub-field |
| --- | --- | --- | --- |
| History | Unique past events & chronology | Archives, texts, historiography | Historical Sociology (Weber, Tilly, Subaltern) |
| Social Anthropology | Culture, kinship, small communities | Participant observation, ethnography | Indian Village Studies (Srinivas, Dube, Béteille) |
| Political Science | State, constitution, laws, sovereignty | Institutional & normative analysis | Political Sociology (Pareto, Lipset, Kothari) |
| Economics | Scarcity, rational choice, prices | Quantitative & deductive modelling | Economic Sociology (Weber, Polanyi, Granovetter) |
| Psychology | Individual mind, cognition, emotion | Lab experiments & clinical testing | Social Psychology (Mead, Cooley, Goffman) |

## Changing Scope under Globalisation in India

For decades after independence, Indian sociology revolved heavily around three classical anchors: rural village monographs, caste hierarchy, and the joint family. Following the 1991 liberalisation reforms, rapid urbanisation, and the cheap-data smartphone revolution, Indian society became intensely entangled with global capital, transnational migration, and digital platforms—forcing sociology’s scope to expand into new multidisciplinary frontiers:

- **Digital & Platform Labour:** [[eg:Swiggy-Zomato gig riders managed by opaque GPS algorithms, call-centre shift workers, and matrimonial apps encoding caste endogamy into search filters]] now sit alongside classical village studies.
- **Urbanisation, Migration & Climate Crisis:** Smart-city gentrification, circular interstate labour migration, urban slums, and ecological displacement are now urgent sociological fields ([[link:Paper 2 Unit 15: Crisis of development and displacement]]).
- **Transnational Diaspora & Culture:** [[thinker:Anthony Giddens]] and Arjun Appadurai’s *ethnoscapes* and *mediascapes* trace how NRI remittances, global media, and digital Hindutva or regional identities reshape families at home, reflecting [[thinker:Yogendra Singh]]’s thesis of selective synthesis rather than simple Westernisation.
- **Subaltern, Dalit & Feminist Turns:** [[thinker:B.R. Ambedkar]]’s critique of graded inequality and Sharmila Rege’s Dalit-feminist standpoint broke the upper-caste, village-centric monopoly of early Indian sociology.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Encyclopaedic Era', text: 'Comte crowned Sociology the Queen of Sciences' },
      { label: 'Boundary Debate', text: 'Formal (Simmel) vs Synthetic (Durkheim) school clash' },
      { label: 'Middle Consensus', text: 'Inkeles & Merton: structured focus + empirical theory' },
      { label: 'Hybrid Bridges', text: 'Political, Economic & Historical Sociology emerged' },
      { label: 'Global-Digital Lens', text: 'AI, gig work, climate & intersectionality frontiers' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Formalistic School (Simmel, Weber)',
    rightTitle: 'Synthetic School (Durkheim, Sorokin)',
    rows: [
      { aspect: 'View of Sociology', left: 'Specialised pure science with a fixed niche', right: 'General science synthesising social life' },
      { aspect: 'Subject Matter', left: 'Forms of interaction (competition, hierarchy)', right: 'Interconnections across all social institutions' },
      { aspect: 'Nature of Scope', left: 'Narrow, strictly delimited boundaries', right: 'Wide, holistic, and inclusive' },
      { aspect: 'Core Logic', left: 'Same interaction form recurs across contents', right: 'Society operates as an integrated whole' },
      { aspect: 'Major Critique', left: 'Form cannot exist cleanly apart from content', right: 'Risks becoming a vague jack of all trades' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Sociology (Classical View)',
    rightTitle: 'Social Anthropology (Classical View)',
    rows: [
      { aspect: 'Traditional Focus', left: 'Large, modern, industrial Western societies', right: 'Small, pre-literate, non-Western & tribal groups' },
      { aspect: 'Primary Methods', left: 'Surveys, questionnaires, census & statistics', right: 'Participant observation, thick ethnography' },
      { aspect: 'Insider vs Outsider', left: 'Studied researcher’s own complex society', right: 'Historically studied distant "other" cultures' },
      { aspect: 'Conceptual Tilt', left: 'Class, bureaucracy, stratification, modernity', right: 'Culture, kinship, myth, ritual, reciprocity' },
      { aspect: 'Contemporary Reality', left: 'Uses ethnography in tech firms & urban slums', right: 'Studies modern nations, cities & globalisation' },
      { aspect: 'Indian Synthesis', left: 'Srinivas, Dube, Béteille dissolved the divide', right: 'Indian village studies merged both traditions' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Idiographic vs Nomothetic',
    meaning: 'History is primarily idiographic (describing unique past events, dates, and actors), whereas Sociology is nomothetic (identifying recurring patterns, structures, and comparative generalisations).',
  },
  {
    kind: 'keyTerm',
    term: 'Embeddedness',
    meaning: 'Karl Polanyi and Mark Granovetter’s insight that economic actions never operate in a social vacuum; prices, credit, and markets are embedded inside social trust, kinship, and cultural norms.',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Perspective',
    meaning: 'Looking beyond isolated individual acts or single institutions to trace how broader social structures, norms, meanings, and power relations shape human behaviour.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The determining cause of a social fact should be sought among the social facts preceding it.',
    context: 'Durkheim’s foundational rule separating sociological explanation from psychological reductionism.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'Participant observation lets the sociologist look beyond book-view scriptures to the real field-view of Indian society.',
    context: 'Capturing how Indian sociology fused anthropological fieldwork with structural theory.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Three-Layer Formula for Sibling-Discipline Questions',
    body: 'Never leave a History, Pol Sci, Economics, or Psychology question as a plain differences list. Always structure 3 layers: (1) Classical distinction in focus and method, (2) Methodological convergence or bridge sub-field (such as Historical Sociology or Granovetter’s Embeddedness), and (3) One sharp Indian illustration like Rajni Kothari’s Caste in Politics.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid the Colonial Trap: Anthropology Is Not Just Tribes',
    body: 'In 2024 (#4) and 2013 (#25), many aspirants wrongly write that Anthropology only studies primitive tribes while Sociology studies modern cities. Remind the examiner that this was a colonial division of labour—modern Social Anthropology studies corporations and cities, and in India M.N. Srinivas united both.',
  },
  {
    kind: 'answerBox',
    intro: 'The scope of Sociology is not a static fence around one institution, but a dynamic relational perspective exploring how social structures, norms, and institutions interact.',
    points: [
      'Classical debate: Formalistic thinkers (Simmel, Weber) isolated pure forms of interaction, whereas Synthetic thinkers (Durkheim, Ginsberg) championed holistic synthesis.',
      'Unique vantage point: Sibling disciplines study isolated slices (state, market, psyche); Sociology studies their intersection and shared social context.',
      'Interdisciplinary bridges: Carr (History), Srinivas (Anthropology), Kothari (Pol Sci), Granovetter (Economics), and Mead (Psychology) show growing convergence.',
      'Global-Indian turn: Digital gig labour, migration, climate displacement, and Dalit-feminist critiques have widened Indian sociology well beyond rural villages.',
    ],
    conclusion: 'Ultimately, Sociology’s scope is defined less by a monopoly over one topic than by its comparative, structural way of seeing every human phenomenon.',
  },
]

export const topic2En: TopicLangContent = {
  summary,
  mindMap,
  sections,
}
