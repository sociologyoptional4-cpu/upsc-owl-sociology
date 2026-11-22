import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.3 · Nation, State, Citizenship, Democracy, Civil Society & Ideology',
  center: 'State & Democratic Order',
  subtitle: 'State & Nation • Citizenship • Democracy • Civil Society & Ideology',
  branches: [
    {
      title: 'State, Nation & Globalisation',
      color: 'lavender',
      thinkers: ['Max Weber', 'Benedict Anderson', 'Ernest Gellner', 'David McCrone'],
      points: [
        'Weber: State monopolises legitimate physical force within a territory',
        '4 Elements: Territory, Population, Government, Sovereignty (+ Recognition)',
        'Anderson: Nation as "Imagined Community"; McCrone: Ethnic vs Civic nations',
        'Deterritorialisation (IMF/EU/tech) vs Nation-state persistence (borders/Brexit)',
      ],
    },
    {
      title: 'Citizenship (T.H. Marshall)',
      color: 'yellow',
      thinkers: ['T.H. Marshall', 'Bryan Turner', 'Nira Yuval-Davis', 'Suraj Gogoi'],
      points: [
        'Subjects obey monarchs; Citizens hold legal rights against the state + duties',
        'Marshall 3 stages: Civil (18th C), Political (19th C), Social Rights (20th C)',
        'Tension with Social Class: citizenship equalises status, property keeps class',
        'Critiques: Anglocentric, male-centric (feminist) & Indian CAA-NRC debates',
      ],
    },
    {
      title: 'Democracy & Participation',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Alexis de Tocqueville', 'Milbrath & Goel', 'Yogendra Yadav'],
      points: [
        'Ambedkar: political democracy needs social democracy & constitutional morality',
        'Critiques: Plato mobocracy, Marx talking shops, Tocqueville majority tyranny',
        'Milbrath & Goel: Gladiators (active), Spectators (voters), Apathetics (none)',
        'Barriers: poverty, patriarchy, criminalisation & Levitsky democratic backsliding',
      ],
    },
    {
      title: 'Civil Society & Ideology',
      color: 'pink',
      thinkers: ['Antonio Gramsci', 'Rajni Kothari', 'Partha Chatterjee', 'Christophe Jaffrelot'],
      points: [
        'Third sector (non-state, non-market): NGOs, unions, media & voluntary sabhas',
        'Functions: watchdog, PILs, service delivery (fixing Rajiv Gandhi 15-paise leak)',
        'Chatterjee: elite "Civil Society" vs subaltern "Political Society" in India',
        'Transition in India: Nehruvian Ideology politics -> Mandal/Mandir Identity politics',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u07-02-state-citizenship-movements.webp',
    alt: 'P1 Unit 7 infographic: State, Citizenship & Movements — State-Society Pipeline & Collective Mobilization',
    caption: 'State-Society Pipeline & Collective Mobilization (State, Citizenship & Movements).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 7 Visual 02',
  },
  {
    kind: 'md',
    body: `## State, Nation, and Nation-State: How Do They Differ?

In everyday conversation people use "country", "state", and "nation" as if they mean the same thing, yet political sociology draws a razor-sharp boundary between them. A ==State== is a legal and political institution, whereas a ==Nation== is a cultural and psychological community of people who feel bound together by shared history, language, or destiny. When a cultural nation acquires its own sovereign political state so that cultural and political borders coincide, a ==Nation-State== is born.

- **The Sociological Concept of the State:** [[thinker:Max Weber]] famously defined the State as a human community that successfully claims the ==monopoly of the legitimate use of physical force== within a given territory, while [[thinker:Robert MacIver]] emphasized its mandatory authority to maintain universal social order. Every sovereign state rests on four essential elements: **Territory** (land, water, airspace — whether tiny Vatican City or vast Russia), **Population** (permanent residents), **Government** (the visible executive arm), and **Sovereignty** (supreme internal authority and external independence, which sub-national units like Haryana or Tamil Nadu lack), alongside a contested fifth element of **International Recognition** (Declarative vs Constitutive schools).
- **The Nation as an Imagined Community:** Following the **Treaty of Westphalia (1648)** and the breakup of multi-ethnic empires (Ottoman, Habsburg, Roman) under industrialisation, mass print education, and bureaucracy ([[thinker:Ernest Gellner]]), modern nations emerged. [[thinker:Benedict Anderson]] termed the nation an ==Imagined Community== because even though 140 crore Indians will never meet most fellow citizens face-to-face as in a village, print-capitalism, maps, and shared symbols make them imagine a deep horizontal comradeship.
- **Ethnic vs Civic Nations ([[thinker:David McCrone]]):** In *The Sociology of Nationalism*, McCrone contrasted **Ethnic Nations** (typical of 18th–19th century Europe like France or Germany, unified by a single language and homogeneous culture) with **Civic Nations** (typical of postcolonial states like India, where extreme linguistic and religious diversity is welded together through a **Single Constitution, Single Citizenship**, national symbols, common history teaching as noted by [[thinker:Émile Durkheim]], and iconic shared moments).

### Globalisation and Deterritorialisation: Is the Nation-State Dying?

Under late-20th-century globalisation, scholars like [[thinker:Arjun Appadurai]], [[thinker:Ulrich Beck]], and [[thinker:Kenichi Ohmae]] argued that ==deterritorialisation== — the weakening of territorial borders by global flows of capital, internet communication (Zoom/WhatsApp), climate risks, supranational bodies (European Union), and Bretton Woods conditions [[eg:India’s 1991 IMF Structural Adjustment Programme compelling economic liberalisation]] — has rendered the nation-state outdated. Yet the **Persistence Perspective** ([[thinker:Anthony Giddens]], [[thinker:Michael Mann]]) proves it is far too early to write the nation-state’s obituary: events like **Brexit**, "America First" economic nationalism, border closures and "vaccine nationalism" during COVID-19, and fierce territorial wars (Russia-Ukraine) demonstrate that the nation-state remains the supreme guarantor of security and citizenship.

## Citizenship: T.H. Marshall and Contemporary Indian Debates

In ancient monarchies people were passive **subjects** bound by obedience to a king; in modern democracies people are ==Citizens== — full legal members of a political community holding constitutionally guaranteed rights *against* the state alongside civic duties of allegiance. [[eg:In the Indian Constitution, Fundamental Rights under Articles 15, 16, 19, 29, and 30 belong exclusively to Indian citizens.]]

In his classic 1950 work *Citizenship and Social Class*, British sociologist [[thinker:T.H. Marshall]] traced the historical evolution of citizenship across three centuries:

- **1. Civil Rights (18th Century):** Rights necessary for individual freedom — personal liberty, freedom of speech, right to own property, and equality before the law (anchored in **Courts of Justice**).
- **2. Political Rights (19th Century):** Rights to participate in the exercise of political power as a voter or elected representative (anchored in **Parliament and Local Councils**).
- **3. Social Rights (20th Century):** Rights to economic welfare, education, healthcare, and a civilized standard of living (anchored in the **Welfare State and Educational System**).

Marshall highlighted a permanent paradox: **Citizenship is an architect of social equality, whereas Social Class is a system of inequality.** Welfare citizenship softens the sharpest edges of capitalism so workers stay loyal, yet class hierarchy persists because the legal right to private property remains intact.

- **Critiques & Indian CAA-NRC Debates:** Critics note that Marshall’s linear British timeline ignores **gender** ([[thinker:Sylvia Walby]] and [[thinker:Nira Yuval-Davis]] show women won political suffrage in the 20th century before full civil property rights), **active vs passive citizenship** from below ([[thinker:Bryan Turner]]), and **multicultural citizenship** ([[thinker:Will Kymlicka]]). [[eg:In contemporary India, debates around the Citizenship Amendment Act (CAA) and National Register of Citizens (NRC) — defended by proponents as protecting persecuted non-Muslim minorities from neighbouring countries and guarding finite national resources, yet critiqued by sociologists like Suraj Gogoi, Zygmunt Bauman’s lens on state delegitimization, and constitutional scholars for excluding Muslims and burdening undocumented poor citizens — show how citizenship remains a hotly contested site of identity and state power.]]

## Democracy as a Social Order and Barriers to Participation

Originating from the Greek *Demos* (people) and *Kratos* (rule), democracy was defined normatively by Abraham Lincoln as "government of the people, by the people, for the people" and procedurally by [[thinker:Samuel Huntington]] as a system where top decision-makers are chosen through periodic, fair, competitive elections under universal adult franchise. Yet as [[thinker:B.R. Ambedkar]] warned the Constituent Assembly, democracy is not merely a form of government — ==democracy is primarily a mode of associated living== (an order of society) rooted in liberty, equality, and fraternity. Without **Social and Economic Democracy** and ==Constitutional Morality== (upholding constitutional principles over majoritarian prejudice or hero-worship/"Bhakti in politics"), political democracy rests on sand.

### Theoretical Critiques and Democratic Backsliding

- **Classical & Conflict Critiques:** **Plato** dismissed democracy as *mobocracy* (warning via his Ship Analogy that passengers should not steer a ship in a storm by majority vote without an expert captain); **Karl Marx and Lenin** dismissed capitalist democracy as a bourgeois sham and parliaments as "talking shops"; and [[thinker:Alexis de Tocqueville]] (*Democracy in America*) warned of the ==Tyranny of the Majority==, where numerical majorities sideline minority sentiments.
- **Fallacy of Representativeness & Backsliding:** In first-past-the-post systems, a party securing ~35% of cast votes (representing barely 17–18 crore voters out of 140 crore people) wields 100% executive power. Today, [[thinker:Steven Levitsky]] and [[thinker:Daniel Ziblatt]] (*How Democracies Die*) highlight ==Democratic Backsliding== — where democracies erode not via military coups, but slowly through elected leaders weakening independent courts, media, and opposition.

### Why Do People Fail to Participate in Politics?

In *Political Participation*, [[thinker:Lester Milbrath]] and [[thinker:M.L. Goel]] classified citizens into three tiers: **Gladiators** (5–7% who contest elections, fundraise, and campaign), **Spectators** (60–70% who vote and debate politics on trains or tea stalls), and **Apathetics** (who abstain completely). Together with [[thinker:Sidney Verba]], [[thinker:Norman Nie]], and [[thinker:Jae-on Kim]] (who stressed political efficacy, resources, and conflict avoidance), sociologists identify key barriers preventing mass political participation in India:

- **Socio-Economic Deprivation & Illiteracy:** Daily wage survival leaves the poor with zero time or financial resources for prohibitively expensive election campaigns.
- **Patriarchy & Caste Intimidation:** Gender norms, character assassination, and "Sarpanch Pati" proxy syndrome restrict women, while dominant-caste booth capture or reprisals deter marginalized groups.
- **Criminalisation, Corruption & Digital Divide:** High numbers of legislators with criminal cases breed middle-class cynicism, reducing participation to a "30-minute voting ritual once in five years" — though [[thinker:Yogendra Yadav]]’s **First and Second Democratic Upsurges** and [[thinker:Christophe Jaffrelot]]’s **Silent Revolution** show that rural Dalits, Adivasis, and OBCs in India vote with greater enthusiasm than urban upper-middle classes!

## Civil Society and the Shift from Ideology to Identity Politics

Occupying the voluntary space above the private family yet outside the coercive State and profit-driven Market, ==Civil Society== is the **"Third Sector"** of the public sphere ([[thinker:Alexis de Tocqueville]], [[thinker:Jürgen Habermas]]). It encompasses NGOs (Mazdoor Kisan Shakti Sangathan, Bachpan Bachao Andolan, SEWA), trade unions, socio-religious service bodies (Ramakrishna Mission, Khalsa Aid), independent media, and public intellectuals.

| Phase in India | Nature of State–Civil Society Interface | Key Sociological Features & Examples |
| --- | --- | --- |
| Ancient & Colonial | Civilisational volunteerism (*Daan, Seva, Zakat*) & Reformism | [[thinker:Rajni Kothari]]: society self-regulated outside state; Brahmo/Arya Samaj & Gandhian *Daridra Narayan* constructive work |
| Nehruvian Era (1950–70s) | Collaborative developmental partnership | Welfare state led planned growth; voluntary bodies assisted state bureaucracy in literacy and relief |
| Emergency & 1980s | Confrontational watchdog & civil-liberties phase | PUCL, Chipko, and Narmada Bachao Andolan challenged state displacement and authoritarianism |
| Post-1991 Neoliberal Era | Roll-back of state, global NGOs & regulatory tightening | NGOs filled welfare gaps (fixing Rajiv Gandhi’s "15 paise per rupee" bureaucratic leakage), alongside FCRA scrutiny & digital activism |

- **Critiques of Civil Society (Gramsci, Amartya Sen, Partha Chatterjee):** [[thinker:Antonio Gramsci]] warned that the bourgeoisie uses civil society (schools, church, media) to manufacture **cultural hegemony**. [[thinker:Amartya Sen]] noted that many paper NGOs act as opaque fund-conduits created by retired bureaucrats or politicians. Most crucially, postcolonial theorist [[thinker:Partha Chatterjee]] argued that in India, rule-bound ==Civil Society== is an elite urban middle-class enclave, whereas the vast subaltern majority (slum dwellers, street vendors) negotiates survival with the state through messy, para-legal electoral bargaining in ==Political Society==.
- **Transition from Ideology to Identity Politics in India:** Finally, notice how Indian politics shifted from post-independence **Ideology Politics** (broad macro-debates over Socialism vs Capitalism, Nehruvian secular planning vs free market during the Congress System) toward **Identity Politics** (mobilisation around lived ascriptive identities of caste, religion, language, and tribe — DMK’s Dravidian pride, the 1980s–90s **Mandal** OBC/Dalit assertion of SP, RJD, and BSP, and **Mandir** cultural nationalism). [[link:Connect this to Paper 2 Unit 12: in contemporary India, ideology and identity do not exclude each other — they hybridise, as welfare delivery ("labharthi" politics) blends with caste census demands and cultural identity.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1648',
        title: 'Treaty of Westphalia',
        text: 'Established territorial sovereignty and non-interference as the legal foundation of the modern nation-state system.',
      },
      {
        year: '18th–20th C',
        title: 'T.H. Marshall’s Three Waves of Citizenship',
        text: 'Sequential expansion from Civil Rights (18th C courts) to Political Rights (19th C parliament) to Social Rights (20th C welfare state).',
      },
      {
        year: '1950–1967',
        title: 'Nehruvian Consensus & Congress System',
        text: 'Rajni Kothari’s One-Party Dominant System marked by macro-ideological nation-building and collaborative civil society.',
      },
      {
        year: '1967–1990s',
        title: 'First & Second Democratic Upsurges (Y. Yadav)',
        text: 'Rise of regional parties, OBC/Dalit identity politics (Mandal), and confrontational social-action civil society.',
      },
      {
        year: '1991–Present',
        title: 'Neoliberal Globalisation & Hybrid Politics',
        text: 'Global NGO networks, RTI/PIL activism, CAA-NRC citizenship debates, and synthesis of identity with welfare politics.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Ideology Politics',
    rightTitle: 'Identity Politics',
    rows: [
      {
        aspect: 'Core Mobilising Axis',
        left: 'Macro-economic and political doctrines on how society should be governed',
        right: 'Shared lived experiences and historical marginalisation of ascriptive groups',
      },
      {
        aspect: 'Primary Cleavages',
        left: 'Socialism vs Capitalism, State planning vs Free market, Left vs Right',
        right: 'Caste (Dalit/OBC), Religion, Language (Dravidian/Assamese), Tribe, Gender',
      },
      {
        aspect: 'Key Objective',
        left: 'Structural transformation or redistribution of economic and state policy',
        right: 'Dignity, Politics of Presence (Anne Phillips), reservation, and cultural recognition',
      },
      {
        aspect: 'Indian Trajectory',
        left: 'Dominant during 1950s–60s Nehruvian planning vs Swatantra/Left debates',
        right: 'Surged post-1967 and 1990s via Mandal, BSP, RJD, DMK, and Mandir mobilisation',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Monopoly of Legitimate Physical Force',
    meaning:
      'Max Weber’s foundational definition of the modern State as the sole institution authorized to use or license physical coercion within a defined territory.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Imagined Community',
    meaning:
      'Benedict Anderson’s concept of the nation as a socially constructed community imagined through print-capitalism and shared symbols among millions who never meet face-to-face.',
  },
  {
    kind: 'keyTerm',
    term: 'Civil, Political & Social Citizenship',
    meaning:
      'T.H. Marshall’s tripartite framework tracing how legal liberty (18th C), voting rights (19th C), and welfare entitlements (20th C) expanded equal status despite class inequality.',
  },
  {
    kind: 'keyTerm',
    term: 'Constitutional Morality & Social Democracy',
    meaning:
      'B.R. Ambedkar’s principle that political democracy cannot survive unless anchored in social equality, fraternity, and reverence for constitutional rules over majoritarian whim.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Civil Society vs Political Society',
    meaning:
      'Partha Chatterjee’s postcolonial distinction between the elite middle-class sphere of formal rights (civil society) and subaltern populations negotiating welfare via electoral bargaining (political society).',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Political democracy cannot last unless there lies at the base of it social democracy.',
    context: 'Constituent Assembly Speech (25 November 1949) — defining democracy as a social order rooted in liberty, equality, and fraternity.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '6 Repeat PYQs on Civil Society & Democracy (2024, 2023, 2021, 2017, 2013x2)!',
    body: 'Civil Society is UPSC’s single highest-yielding theme in Unit 7. In every answer, cover four layers: (1) Tocqueville & Habermas on the public sphere / watchdog role, (2) Indian service-delivery & judicial activism (PILs, RTI via MKSS, plugging Rajiv Gandhi’s 15-paise bureaucratic leakage), (3) 4-phase historical evolution in India (Rajni Kothari), and (4) Critical qualifiers — Gramsci’s hegemony, Amartya Sen’s NGO accountability critique, and Partha Chatterjee’s Civil vs Political Society.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Don’t Write That Globalisation Has Killed the Nation-State!',
    body: 'In PYQ 2015 ("Globalization involves deterritorialization"), never give a one-sided obituary of the nation-state. First explain deterritorialisation (Appadurai’s global flows, IMF/WTO conditionalities, EU, digital tech), and then immediately balance it with the Persistence Thesis (Giddens, Mann): Brexit, COVID-19 border closures, vaccine nationalism, and territorial sovereignty disputes prove the nation-state is transforming, not disappearing.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Milbrath & Goel’s Participation Pyramid: GSA',
    body: 'When asked why people don’t participate in democratic politics (PYQ 2020), draw Milbrath & Goel’s GSA pyramid: Gladiators (active contestants/campaigners), Spectators (5-year voters/train debaters), and Apathetics (non-voters), and link it to Verba, Nie & Kim’s 4 factors (Efficacy, Resources, Conflict Avoidance, Cooperation).',
  },
  {
    kind: 'answerBox',
    intro:
      'The modern democratic order rests on a dynamic institutional pipeline connecting the sovereign Nation-State, equal Citizenship, participatory Democracy, and a vigilant Civil Society.',
    points: [
      'State & Nation-State: Weber defines the state by its monopoly of legitimate force across Territory, Population, Government, and Sovereignty, while Anderson and McCrone show how civic nations like India unite multi-ethnic diversity under one Constitution.',
      'Marshall’s Citizenship Evolution: Traces the march from 18th-century Civil Rights to 19th-century Political Rights and 20th-century Social Welfare Rights, mediating class inequality while facing feminist and postcolonial critiques.',
      'Democracy as Social Order (Ambedkar): Goes beyond periodic elections (Huntington) to demand social democracy, constitutional morality, and overcoming socio-economic, patriarchal, and criminalisation barriers to participation (Milbrath & Goel).',
      'Civil Society’s Democratic Role: Acts as the non-state, non-market Third Sector (Tocqueville, Kothari) that deepens citizenship via RTI, PILs, and service delivery, despite elite limitations noted by Gramsci and Partha Chatterjee.',
      'Ideology to Identity Transition: Post-independence Indian politics evolved from Nehruvian macro-ideological debates toward subaltern caste/regional identity politics (Jaffrelot’s Silent Revolution), now converging with welfare governance.',
    ],
    conclusion:
      'Ultimately, a resilient democracy requires both an accountable constitutional state and an inclusive civil society that empowers ordinary citizens every day between elections.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'This topic unpacks how the modern State (Weber) and imagined Nation (Anderson, McCrone) anchor Citizenship (T.H. Marshall) and Democracy (Ambedkar), and how Civil Society and the shift from Ideology to Identity politics reshape state-society relations in India.',
  mindMap,
  sections,
}