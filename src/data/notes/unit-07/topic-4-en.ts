import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.4 · Protest, Agitation, Social Movements, Collective Action & Revolution',
  center: 'Collective Mobilisation',
  subtitle: 'Blumer & Smelser • Life Cycle • Old vs New Movements • Digital & Revolution',
  branches: [
    {
      title: 'Collective Action & Theories',
      color: 'lavender',
      thinkers: ['Herbert Blumer', 'Gustave Le Bon', 'Neil J. Smelser', 'Charles Tilly'],
      points: [
        'Blumer 4 forms: Crowd (emotion), Public (issue), Mass (media), Social Movement',
        'Le Bon Deindividuation (crowd contagion) & Merton/Runciman Relative Deprivation',
        'Resource Mobilization (McCarthy, Zald, Jenkins): leaders as entrepreneurs',
        'Smelser 6 Value-Added conditions + Tilly/McAdam Political Opportunity Structure',
      ],
    },
    {
      title: 'Life Cycle, Ideology & End',
      color: 'yellow',
      thinkers: ['Herbert Blumer', 'Armand Mauss', 'Charles Tilly', 'Mancur Olson'],
      points: [
        'Stages: Emergence -> Coalescence -> Bureaucratization -> Outcomes -> Decline',
        '5 Endings: Success, Failure, Co-optation (Kejriwal/IAC), Repression, Mainstreaming',
        'Ideology as "social glue" (Fevicol): diagnoses reality & rationalises methods',
        'Challenges: Free-rider problem (Olson), inertia ("sah lenge"), fatigue & split',
      ],
    },
    {
      title: 'New Social Movements (NSM)',
      color: 'mint',
      thinkers: ['Alain Touraine', 'Jürgen Habermas', 'Anthony Giddens', 'Ramachandra Guha'],
      points: [
        'Post-1960s shift: economic redistribution -> post-materialist quality of life/identity',
        'Support base: young (18–30) educated new middle class in decentralized networks',
        'Critique (Jean Cohen) & Guha: Indian environmentalism is livelihood-based ("empty belly")',
        'India paradox: Primordial means (caste/religion/dharna) for Progressive agendas',
      ],
    },
    {
      title: 'Digital Era, Dalits & Revolution',
      color: 'pink',
      thinkers: ['Manuel Castells', 'B.R. Ambedkar', 'Theda Skocpol', 'Pitirim Sorokin'],
      points: [
        'Social media: fast borderless hashtag mobilisation vs slacktivism & echo chambers',
        'Dalit protests: Sanskritisation -> Bhakti -> Phule/Ambedkar -> Dalit Panthers/BSP',
        'Revolution (Skocpol): fundamental socio-economic restructuring (Industrial/French/1917)',
        'Not revolutions: Military coups, 1947 transfer of power, or Green Revolution',
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
    body: `## From Fleeting Crowd to Sustained Social Movement

Whenever ordinary people act together to express anger or achieve a shared goal, sociologists call it ==Collective Action==. Yet not every street gathering is a social movement. [[thinker:Herbert Blumer]] distinguished four distinct forms of collective action: a **Crowd** (driven by a momentary emotion like panic or sudden anger [[eg:when a Delhi crowd pelts stones at a bus right after an accident and disperses by evening]]), a **Public** (people debating a common issue), a **Mass** (dispersed individuals consuming the same mass media), and a ==Social Movement==.

What separates **Protest**, **Agitation**, and a **Social Movement**? As [[thinker:Ralph Turner]] noted, a **Protest** is an expression of disapproval against something an individual feels powerless to stop alone [[eg:hostel students protesting bad mess food or a JNU fee hike, or Mumbai citizens protesting tree-felling in Aarey Forest]], while an **Agitation** is a purposeful campaign of stirrings (dharnas, marches) to press a demand. A ==Social Movement== (*Jan Andolan*) is far larger: it is a **sustained collective effort**, operating through a **formal or informal organisation** and guided by an **ideology**, aimed at **bringing about or resisting change** in the existing social order [[eg:from the formally organised Indian National Congress freedom struggle to the informally networked #MeToo movement, or resistance movements like anti-CAA and Narmada Bachao Andolan]].

## How Does Collective Discontent Transform into a Social Movement? (5 Core Theories)

Discontent exists in every society every day, yet social movements are rare. Why? Five sociological theories explain the exact conditions required to turn raw anger into an organised movement:

- **1. Deindividuation & Crowd Psychology ([[thinker:Gustave Le Bon]]):** In *The Crowd*, Le Bon showed that inside a dense crowd, personal accountability dissolves into anonymity (**deindividuation**); a feeling of invincibility and an emotional **contagion effect** sweep through participants, making friendly neighbours capable of extreme collective acts.
- **2. Relative Deprivation Theory ([[thinker:Robert K. Merton]], [[thinker:W.G. Runciman]], [[thinker:M.S.A. Rao]]):** Absolute poverty rarely sparks revolt on its own; people rebel when they compare themselves with a reference group and perceive an unjust gap between what they *feel entitled to* and what they *actually receive*.
- **3. Resource Mobilization Theory ([[thinker:John McCarthy]], [[thinker:Mayer Zald]], [[thinker:J. Craig Jenkins]]):** Grievance is merely dry grass; a movement ignites only when leaders act like **entrepreneurs** via Social Movement Organizations (SMOs) to mobilise scarce resources — money, cadres, media coverage, and infrastructure. [[eg:Corruption anger existed for decades in India, but in 2011 Anna Hazare and Arvind Kejriwal acted as movement entrepreneurs in India Against Corruption (IAC) to mobilise funds, TV cameras, and Ramlila Maidan logistics.]]
- **4. Political Opportunity Structure ([[thinker:Charles Tilly]], [[thinker:Doug McAdam]]):** Even with resources and **insurgent consciousness**, movements succeed only when the political system opens cracks — such as elite factionalism, approaching elections, or declining state repression.
- **5. Structural Strain / Value-Added Theory ([[thinker:Neil J. Smelser]]):** Smelser identified **six cumulative conditions** that must combine step-by-step for a full social movement to emerge:
  1. **Structural Conduciveness:** An enabling environment [[eg:dense cities like Delhi with media hubs, student campuses, and democratic rights are far more conducive than isolated villages or totalitarian regimes]].
  2. **Structural Strain:** Deep collective anguish or relative deprivation ("non-changa" conditions).
  3. **Generalized Belief:** A shared diagnosis naming the enemy and solution [[eg:the Anna movement uniting a rickshaw puller’s ₹50 police bribe and corporate scams under one word: "Corruption"]].
  4. **Precipitating Factor:** A sudden spark that brings people onto the street [[eg:Rosa Parks’s arrest sparking the US Civil Rights movement, George Floyd/Trayvon Martin sparking Black Lives Matter, or the 2012 Nirbhaya tragedy sparking women’s safety protests]].
  5. **Mobilization for Action:** Physical or digital coordination of rallies, sit-ins, and alliances.
  6. **Failure of Social Control:** Weakening of state or patriarchal policing [[eg:traditional parental restrictions failing to stop young women from marching at India Gate during Nirbhaya protests, or police failing to prevent the Red Fort blockade during farm protests]].

## Life Cycle of a Social Movement, Ideology, and Why Movements End

Following [[thinker:Herbert Blumer]], [[thinker:Armand Mauss]], and [[thinker:Charles Tilly]], every social movement passes through a **Life Cycle**: **1. Emergence** (initial spark) $\rightarrow$ **2. Coalescence** (defining grievances and launching organized rallies) $\rightarrow$ **3. Bureaucratization** (forming registered trusts, office-bearers, and regular funding) $\rightarrow$ **4. Outcomes & Decline**.

How do social movements come to an end? Sociologists identify **Five Pathways to Decline**:

1. **Success:** Demands are fully met and the movement dissolves [[eg:Samyukta Kisan Morcha ending its border sit-in after the Union government repealed the three Farm Bills in 2021]].
2. **Failure / Fatigue:** Government refuses to yield and participant exhaustion sets in [[eg:Anti-CAA Shaheen Bagh protests ending amid state firmness and COVID-19 lockdown]].
3. **Co-optation:** Movement leaders are absorbed into the ruling establishment with posts or enter mainstream electoral power [[eg:Arvind Kejriwal and IAC activists transitioning into the Aam Aadmi Party government]].
4. **Repression:** The state deploys brute force (RSA) to crush the movement [[eg:heavy state repression of the Khalistan or Naxalite movements]].
5. **Mainstreaming:** The movement’s core goals become universally accepted societal values [[eg:post-Nirbhaya consensus on women’s public safety and fast-track courts]].

### Role of Ideology and Key Challenges

At the heart of every movement lies ==Ideology== — a coherent mental lens ("coloured glasses/chashma") that interprets reality, acts as **social glue (like Fevicol)** binding diverse participants, frames goals, and legitimises tactics [[eg:Naxalite Maoist ideology justifies armed violence against class enemies, whereas Gandhian Satyagraha ideology strictly mandates non-violence]]. Yet every movement faces severe internal challenges: human inertia (*"sah lenge thoda"*), cultural legitimacy of old evils [[eg:families rationalising dowry as a daughter’s rightful share of movable wealth]], [[thinker:Mancur Olson]]’s ==Free-Rider Problem== (citizens wanting a corruption-free India while sitting in AC rooms liking Facebook posts, assuming others will take police lathis on the street), participant fatigue (which Gandhi countered via his **Struggle–Truce–Struggle** strategy), leadership ego clashes, and fragile charismatic leadership.

## Old vs New Social Movements (NSMs) and the Digital Era

Since the late 1960s in post-industrial Western democracies, theorists like [[thinker:Alain Touraine]], [[thinker:Jürgen Habermas]], [[thinker:Simon Howarth]], [[thinker:Anthony Giddens]] (global risk society), and [[thinker:Jan Pakulski]] & [[thinker:Malcolm Waters]] observed the rise of ==New Social Movements (NSMs)== that differ sharply from 19th-century working-class movements:

| Dimension | Old Social Movements (OSMs) | New Social Movements (NSMs) |
| --- | --- | --- |
| Primary Focus & Issues | Materialist economic redistribution (wages, land, labour rights) | Post-materialist quality of life, identity, environment, peace, LGBTQ+ |
| Social Support Base | Working class, peasants, historically depressed lower strata | Young (18–30), educated "new middle class" professionals & students |
| Target & Organisation | Target the State via rigid, centralized bureaucratic trade unions/parties | Target Civil Society & lifestyle via decentralized, non-hierarchical networks |
| Geographic Reach | Local or national class/anti-colonial struggles | Transnational/global reach powered by digital social media (#MeToo, BLM) |

- **Indian Specificity & Critiques of NSMs:** First, [[thinker:Jean L. Cohen]] argued that NSMs are not wholly "new" because feminist and LGBTQ+ movements still fight for material workplace pay and jobs. Second, in India, as [[thinker:Ramachandra Guha]] and [[thinker:Madhav Gadgil]] (*Ecology and Equity*) proved, environmental movements like **Chipko** or **Narmada Bachao Andolan** are NOT post-materialist Western middle-class lifestyle movements — they are **"Environmentalism of the Poor"** ("empty-belly environmentalism") where Adivasis and peasants fight for material survival (*jal, jangal, zameen*) alongside ecological conservation! Third, Indian movements display a unique paradox of ==Primordial Means for Progressive Agendas==: groups mobilise via traditional caste or religious solidarities and *dharna/anshan*, yet demand modern secular constitutional rights (education, government jobs, equal citizenship as in Jat/Maratha reservation or anti-CAA protests).
- **Social Movements in the Digital Era ([[thinker:Manuel Castells]]):** Social media (WhatsApp, X, Instagram) has revolutionised protest through lightning-fast leaderless mobilisation (*Networks of Outrage and Hope*), global viral hashtags (#MeToo, #BlackLivesMatter, Farmers’ Digital Tractor Rally), and low-cost crowdfunding. Yet digital activism faces severe sociological challenges: **"Slacktivism / Clicktivism"** (Mancur Olson’s free-riding via effortless likes without street durability), leaderless fragility (easily outmanoeuvred by state agencies), algorithmic **echo chambers** and fake-news polarization, the **digital divide** excluding offline rural poor, and state **internet shutdowns** or digital surveillance.

## Dalit Protest Movements and the Sociological Concept of Revolution

- **Protest Movements and Changing Status of Dalits:** Across two centuries, Dalit collective action transformed caste hierarchy through four waves: (1) **Bhakti & Neo-Vedantic Reform** (Ravidas, Chokhamela, Kabir), (2) **Anti-Brahmanical Radicalism & Autonomous Mobilisation** ([[thinker:Jyotirao Phule]]’s Satyashodhak Samaj, [[thinker:B.R. Ambedkar]]’s Mahad Satyagraha 1927, Kalaram Temple entry, and slogan *"Educate, Agitate, Organize"*), (3) **Militant Cultural Assertion** (1970s **Dalit Panthers** in Maharashtra and Dalit literature redefining "Dalit" from pollution to revolutionary pride), and (4) **Political Power & Digital Assertion** (Kanshi Ram and Mayawati’s BAMCEF/DS4/BSP capturing UP’s highest office, and contemporary youth assertion like the 2018 SC/ST Act Bharat Bandh).
- **What Is a Sociological Revolution?** A ==Revolution== is not a mere change of prime ministers or a military coup; as [[thinker:Theda Skocpol]] defined it, a revolution is a rare, rapid, and **fundamental restructuring of a society’s economic, political, and social class relations** involving the collapse of the old social order. Violence often accompanies it (as in the **1789 French Revolution** or **1917 Bolshevik Revolution**, which Lenin called *"festivals of the oppressed"*), yet physical violence is NOT mandatory — the **Industrial Revolution** was a true sociological revolution because it overhauled family, economy, and class without war. Conversely, **military coups** (as in Pakistan), **India’s 15 August 1947 transfer of power** (which kept bureaucracy, caste, and property relations largely intact), and the **Green Revolution** are NOT sociological revolutions. Finally, contrast Marx’s celebration of revolution with [[thinker:Pitirim Sorokin]], who compared revolution to a severe social fever that damages the social organism and advocated peaceful incremental reform.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Emergence', text: 'Structural strain + precipitating spark (Nirbhaya / Rosa Parks) ignites protest' },
      { label: '2. Coalescence', text: 'Generalized belief & SMOs rally crowds into organized collective action' },
      { label: '3. Bureaucratization', text: 'Formal office-bearers, funding channels, and sustained strategy form' },
      { label: '4. Five Endings', text: 'Success (SKM), Failure, Co-optation (IAC->AAP), Repression, or Mainstreaming' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Social Movement (Jan Andolan)',
    rightTitle: 'Sociological Revolution (Kranti)',
    rows: [
      {
        aspect: 'Scope of Change',
        left: 'Seeks partial reform, policy change, or resistance within the existing order',
        right: 'Brings near-total, fundamental restructuring of class, state, and social relations',
      },
      {
        aspect: 'Pace & Frequency',
        left: 'Common in democracies; unfolds gradually through sustained campaigns',
        right: 'Historically rare and rapid systemic overturn (Theda Skocpol)',
      },
      {
        aspect: 'Relation to the State',
        left: 'Pressures or bargains with the state via constitutional or civil disobedience tools',
        right: 'Overthrows the old regime/mode of production to install a new social order',
      },
      {
        aspect: 'Classic Examples',
        left: 'Chipko, RTI Movement, Samyukta Kisan Morcha, #MeToo',
        right: 'French Revolution (1789), Bolshevik Revolution (1917), Industrial Revolution',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Value-Added / Structural Strain Theory',
    meaning:
      'Neil J. Smelser’s six-factor model (conduciveness, strain, generalized belief, precipitating spark, mobilization, failure of social control) explaining how collective action becomes a movement.',
  },
  {
    kind: 'keyTerm',
    term: 'Resource Mobilization Theory',
    meaning:
      'McCarthy, Zald, and Jenkins’s framework arguing that grievances become social movements only when entrepreneurial leaders mobilize money, media, cadres, and organizations (SMOs).',
  },
  {
    kind: 'keyTerm',
    term: 'Free-Rider Problem',
    meaning:
      'Mancur Olson’s dilemma where individuals support a movement’s goal from the comfort of home ("slacktivism") while leaving the risks and costs of street protest to others.',
  },
  {
    kind: 'keyTerm',
    term: 'New Social Movements (NSMs)',
    meaning:
      'Post-1960s decentralized movements (Touraine, Habermas) led by the educated new middle class around post-materialist quality-of-life, ecological, and identity issues.',
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Revolution',
    meaning:
      'Theda Skocpol’s concept of a rapid, fundamental transformation of a society’s state, class, and social structures — distinct from a mere military coup or transfer of office.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Educate, Agitate, Organize; have faith in yourself and never lose hope.',
    context: 'All-India Depressed Classes Conference (1942) — the ideological triad of Dalit collective mobilization.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2023 Hat-Trick Trend: Digital Era & Social Media Protests!',
    body: 'UPSC asked about social media and digital-era social movements three years in a row (2023, 2024, 2025)! Always present a two-sided sociological balance: (1) Transformative power (Manuel Castells’s "Networks of Outrage and Hope", borderless speed, bypassing traditional media gatekeepers in #MeToo, Arab Spring, and Farmers’ protest), and (2) Structural limits (Mancur Olson’s "Clicktivism/Slacktivism", leaderless lack of bargaining durability vs Charles Tilly’s organized movements, algorithmic echo chambers, rural digital divide, and state internet shutdowns).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Never Call Indian Environmentalism Purely "Post-Materialist"!',
    body: 'When applying New Social Movement (NSM) theory to India or Environmentalism (PYQ 2022, 2018), do not blindly copy Western "post-materialist lifestyle" claims. Quote Ramachandra Guha and Madhav Gadgil ("Environmentalism of the Poor") and Jean Cohen to show that Indian movements like Chipko, Narmada Bachao Andolan, and anti-POSCO fuse NSM ecological survival with Old Social Movement bread-and-butter livelihood rights of Adivasis and peasants.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Smelser’s 6 Steps (CS-GP-MF) & 5 Ways Movements End (SF-CRM)',
    body: 'For PYQ 2015 (how collective action becomes a movement), use Neil Smelser’s CS-GP-MF: Conduciveness, Strain, Generalized belief, Precipitating spark, Mobilization, Failure of social control. For PYQ 2020 (how movements end), use SF-CRM: Success, Failure/fatigue, Co-optation, Repression, and Mainstreaming!',
  },
  {
    kind: 'answerBox',
    intro:
      'From localized protests to transformative revolutions, collective action is the vital engine through which marginalized citizens challenge entrenched power hierarchies.',
    points: [
      'Blumer & Smelser’s Pipeline: Collective action transitions from fleeting crowds to sustained social movements when Smelser’s 6 value-added conditions combine with Resource Mobilization (McCarthy & Zald) and Political Opportunity (Tilly).',
      'Life Cycle & 5 Endings: Movements evolve through Emergence, Coalescence, and Bureaucratization before ending via Success (Farm laws repeal), Failure, Co-optation (IAC -> AAP), Repression, or Mainstreaming (Nirbhaya norms).',
      'Ideology & Challenges: Ideology acts as social glue rationalizing goals and methods, while movements battle the Free-Rider problem (Olson), participant fatigue, and state repression.',
      'NSMs & Indian Paradox: While Western NSMs focus on post-materialist identity and ecology, Indian movements combine "Environmentalism of the Poor" (Guha) with primordial mobilisation for progressive constitutional agendas.',
      'Digital Protests & Revolution: Social media accelerates networked protests (Castells) despite slacktivism risks, while true Revolutions (Skocpol) fundamentally restructure class and social relations beyond mere coups.',
    ],
    conclusion:
      'Whether through Ambedkarite Dalit assertion, ecological defense, or digital hashtags, social movements remain the extra-parliamentary conscience of modern democracy.',
  },
]

export const topic4En: TopicLangContent = {
  summary:
    'This topic traces how raw collective discontent transforms into organized social movements (Smelser, McCarthy & Zald, Tilly), how movements evolve and end across their life cycle, how New Social Movements and digital-era protests operate in the West and India, and how sociological revolutions differ from mere regime changes.',
  mindMap,
  sections,
}