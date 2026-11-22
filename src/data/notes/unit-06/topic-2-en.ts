import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 6.2 · Formal & Informal Organisation of Work',
  center: 'Formal vs Informal Work',
  subtitle: 'Bureaucracy & Peer Groups -> Dual Sector Economy -> Gender & WFH',
  branches: [
    {
      title: 'Organizational Structure Lens',
      color: 'lavender',
      thinkers: ['Max Weber', 'Elton Mayo', 'Peter Blau', 'R.K. Merton'],
      points: [
        'Weber formal bureaucracy: written rules, hierarchy, rational-legal authority',
        'Merton dysfunction: red tape and over-conformity ("trained incapacity")',
        'Elton Mayo (Hawthorne): informal peer norms and social sanctions inside plant',
        'Peter Blau: informal consultative networks actually speed up formal work',
      ],
    },
    {
      title: 'Economic Sector Lens',
      color: 'yellow',
      thinkers: ['Keith Hart', 'Arjun Sengupta', 'Jan Breman', 'S.V. Sethuraman'],
      points: [
        'Keith Hart (1971) coined "informal sector" studying Accra urban self-employed',
        'SNA & ILO: small scale, low capital-labour split, kinship ties, outside state law',
        'NCEUS (Arjun Sengupta): unincorporated <10-worker units (~90% of Indian labour)',
        '7 drivers of informalisation: FDI competition, outsourcing, jobless growth',
      ],
    },
    {
      title: 'Gender in Formal & Informal',
      color: 'mint',
      thinkers: ['Sylvia Walby', 'Rosabeth Moss Kanter', 'Maria Mies', 'Naila Kabeer'],
      points: [
        'Formal workspaces: glass ceiling, motherhood penalty, pink-collar segregation',
        'Informal women: stronger poverty link, gender wage gap, perishable vending',
        'Displaced formal male workers push women down the informal hierarchy',
        'Legal shield vs gaps: POSH Act 2013 in offices vs invisible home-based workers',
      ],
    },
    {
      title: 'Tertiary Shift & Work From Home',
      color: 'pink',
      thinkers: ['Daniel Bell', 'Ashwini Deshpande', 'Rukmini Sen', 'ILO Convention 177'],
      points: [
        'Tertiary/service boom weakens formal unions via outsourcing, franchises & gigs',
        'ILO Homework Convention: Industrial homework, Telework, Digital crowd-work',
        '3 ILO conditions: deconstructable tasks, cheap tools, abundant skilled labour',
        'WFH blurs formal/informal boundary; women face dual burden & shadow pandemic',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u06-02-formal-informal-labour.webp',
    alt: 'P1 Unit 6 infographic: Formal, Informal & Labour Shifts — Formal Contracts vs Informal Precarity',
    caption: 'Formal Contracts vs Informal Precarity (Formal, Informal & Labour Shifts).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 6 Visual 02',
  },
  {
    kind: 'md',
    body: `## Two Sociological Meanings of Formal and Informal Organisation of Work

When UPSC asks about the **formal and informal organisation of work**, sociologists analyse the phrase at two distinct yet connected levels. First, at the **micro-organizational level**, it compares the official rulebook hierarchy of an office or factory (*formal structure*) with the spontaneous peer friendships and unwritten norms that arise among colleagues inside that same workplace (*informal structure*). Second, at the **macro-economic level**, it contrasts the state-regulated, salaried, and socially protected **Formal (Organised) Sector** with the unprotected, cash-based **Informal (Unorganised) Sector**. [[trap:Many candidates write only about street vendors and forget Elton Mayo and Peter Blau's internal workplace sociology — addressing both lenses in your introduction guarantees an edge in 10- and 20-mark answers!]]

## Lens 1: Inside the Workplace — Bureaucracy vs Informal Peer Networks

Every large corporate firm, civil service department, or hospital is designed as a ==Formal Organisation== — a deliberately planned structure of roles coordinated to achieve specific goals. [[thinker:Max Weber]] argued that modern formal organisations take the shape of rational-legal **Bureaucracy**, characterised by written rules, clear hierarchy of offices, technical recruitment, salaried careers, and strict separation between official duty and personal life. Yet formal rules rarely tell the whole story of how daily work actually gets done:

- **[[thinker:Robert K. Merton]] on Bureaucratic Dysfunction:** Merton noted that excessive devotion to formal rules produces ==trained incapacity== and "red tape", where officials treat rule-following as an end in itself and fail to adapt to practical client needs.
- **[[thinker:Elton Mayo]] and the Informal Organisation Within:** In the Hawthorne **Bank Wiring Experiment**, Mayo proved that inside every formal plant operates a powerful ==Informal Organisation==. Workers form cliques, share tea-break gossip, and enforce unwritten group norms on daily output — teasing "rate-busters" who work too fast and helping slower peers so management cannot pit workers against each other.
- **[[thinker:Peter Blau]] and [[thinker:Chester Barnard]]:** Studying government tax enforcement agencies, Peter Blau discovered that when officials faced complex cases, consulting peers informally over lunch — even though forbidden by official rules — reduced anxiety and **increased formal organizational efficiency**.

## Lens 2: Across the Economy — The Formal and Informal Sectors

British anthropologist **[[thinker:Keith Hart]]** first coined the term ==Informal Sector== in 1971 (published 1973) while studying rural migrants in Accra, Ghana, who survived outside regular wage jobs through petty trading and self-employment. Standard definitions capture its structural core:

- **System of National Accounting (SNA) & ILO Definition:** The informal sector consists of small-scale units producing goods and services primarily to generate survival income and employment, operating with rudimentary tools, little separation between capital and labour, and **casual, kinship, or personal relations** rather than formal legal contracts.
- **Arjun Sengupta Committee (NCEUS, India):** India's National Commission for Enterprises in the Unorganized Sector defines the unorganised sector as all unincorporated private enterprises owned by individuals or households operating on a proprietary/partnership basis and employing **fewer than 10 workers** (accounting for roughly 85–90% of India's workforce).
- **[[thinker:Nurul Amin]] & [[thinker:S.V. Sethuraman]]:** Highlight that informal enterprises operate outside state tax nets, minimum-wage laws, and social security protections, creating a direct empirical link between informality and material poverty. [[eg:Roadside dhabas, weekly Mangala Bazar street vendors, domestic workers, construction labourers, home-based bidi rollers, and neighbourhood puncture-repair shops are classic pillars of India's informal economy.]]

| Dimension | Formal (Organised) Sector | Informal (Unorganised) Sector |
| --- | --- | --- |
| Entry & Scale | High capital, credentials, large corporate/PSU units | Easy entry, low capital, <10 workers (NCEUS) |
| Labour Contract | Written appointment letter, fixed hours & salary | Verbal, casual, daily-wage or kinship-based |
| State Regulation | Covered by factory laws, PF, ESI, paid leave | Outside tax/labour inspection; zero social security |
| Bargaining Power | Trade unions and collective bargaining | Fragmented workers; zero collective bargaining |

### Why Has Capitalism & the Tertiary Boom Increased Informalisation?

Classical modernization theorists assumed economic growth would steadily absorb informal workers into formal factories. Empirically, neoliberal capitalism and the **rise of the Tertiary (service) sector** have driven massive ==Informalisation== — even inside formal firms — through seven structural pressures:

1. **Global Cost Competition & Subcontracting:** To cut overhead costs, formal MNCs and retail chains subcontract production, cleaning, security, and logistics to informal workshops and third-party contractors.
2. **State Deregulation for FDI:** Developing states relax labour inspections and flexibilise hiring/firing rules to attract foreign investment.
3. **Jobless Growth:** High GDP growth driven by capital-intensive IT and finance creates few formal mass jobs, pushing youth into informal self-employment.
4. **Tertiary Sector Fragmentation:** Unlike giant Fordist steel or auto factories where thousands of workers unionised under one roof, the tertiary sector (retail, hospitality, food delivery, beauty salons, domestic care, coaching) is dispersed across micro-franchises, contractual agencies, and app-based gigs, weakening formal unionism.
5. **Privatisation & Economic Crises:** PSU disinvestment and shocks like the 2008 crash or COVID-19 lockdowns retrench formal employees into the informal economy.
6. **Aspiration–Inflation Gap:** Stagnant formal salaries push white-collar employees to take informal side-gigs (moonlighting, private tuitions).

## Gender Bias in Formal and Informal Workspaces

Are modern formal offices meritocratic spaces free of gender bias? Far from it. Feminist sociologists show that both formal and informal workspaces reproduce patriarchal hierarchy, though in different forms:

- **Gender Bias in Formal Workspaces:** Despite constitutional equality and corporate diversity pledges, formal organisations exhibit what [[thinker:Rosabeth Moss Kanter]] called **tokenism** and vertical segregation — the invisible ==Glass Ceiling== blocking women from top boardrooms, alongside the **Glass Cliff** and **Motherhood Penalty** (career stalls after maternity leave). Horizontally, women are crowded into "pink-collar" roles (HR, receptionist, primary teaching, nursing), face subtle locker-room exclusion from informal male mentor networks ("Old Boys' Club"), and encounter workplace sexual harassment requiring legal enforcement under India's **POSH Act (2013)**. [[eg:Even in India's formal IT-BPM sector, women constitute nearly 35–40% at entry level but drop below 10–15% at C-suite executive levels due to mid-career care penalties.]]
- **Gender Inequality Challenges in the Informal Sector:** In the informal economy, patriarchy denies women technical skills and credit, clustering them at the very bottom. As [[thinker:S.V. Sethuraman]] and feminist scholars note: (1) the **informality–poverty link is far sharper for women**, (2) stark **gender wage gaps** persist even in identical tasks (male construction workers or cooks paid more than women), (3) women street vendors are relegated to **perishable goods** (vegetables, flowers that rot by evening) while men dominate higher-margin non-perishables (shoes, electronics), and (4) when economic crises displace formal male workers into the informal sector, women are pushed even further down.

## How ‘Work From Home’ (WFH) Redefines Formal and Informal Work

Popular imagination treats **Work From Home (WFH)** as a post-2020 IT invention, yet home-based production is ancient — predating factories and surviving in traditional bidi-rolling, lace-making, embroidery, and bangle industries. Under the **ILO Homework Convention (C177)**, remunerated homework thrives wherever three conditions meet: (1) **deconstructable production process**, (2) **inexpensive capital tools** (a sewing machine or a laptop), and (3) **abundant skilled labour**. Sociologists classify homework into three types: **Industrial Homework** (craft/garment piece-work), **Telework** (remote service/call centres), and **Digital Crowd-Work** (platform coding/freelancing).

Before COVID-19, ILO estimated home-based workers at ~7.9% of global employment (56% women). The post-pandemic WFH surge forced sociology to **redefine the boundary between formal and informal work**:

- **Informalisation of the Formal Office:** Formal corporate employees working from bedrooms lost the spatial and temporal separation of Weberian bureaucracy — office hours bled into midnight WhatsApp messages, electricity/internet costs shifted to households, and informal family interruptions merged with formal Zoom meetings.
- **Formal Surveillance inside the Private Home:** Conversely, algorithmic time-trackers and webcam monitoring brought formal Taylorist control right inside the private living room.
- **Gendered Dual Burden & Shadow Pandemic:** [[thinker:Ashwini Deshpande]] and [[thinker:Rukmini Sen]] highlighted how WFH imposed a crushing **dual burden** on women — juggling formal office targets alongside unpaid cooking and childcare — while the UN termed the lockdown surge in domestic abuse the ==Shadow Pandemic==. Moreover, as [[thinker:Maria Mies]] showed in her study of **Narsapur lace makers** in Andhra Pradesh, paid work done inside the home is culturally dismissed as "housewives' leisure", while shifting factory tasks into private homes makes detecting **child labour** far harder for state inspectors. [[link:Link this with Paper 2 Unit 7 & Unit 11 on sexual division of labour and India's informal sector and child labour challenges.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1920s–1932',
        title: 'Weber’s Bureaucracy vs Mayo’s Hawthorne',
        text: 'Weber formalised rational-legal rules; Elton Mayo discovered informal peer groups operating inside formal factories.',
      },
      {
        year: '1955',
        title: 'Peter Blau — Dynamics of Bureaucracy',
        text: 'Showed that informal consultation among civil servants resolves formal bottlenecks and boosts efficiency.',
      },
      {
        year: '1971–1973',
        title: 'Keith Hart Coins "Informal Sector"',
        text: 'Ethnography of Accra (Ghana) revealed a vibrant urban economy operating outside formal wage contracts.',
      },
      {
        year: '1982',
        title: 'Maria Mies — Lace Makers of Narsapur',
        text: 'Exposed how patriarchal ideology disguises women’s export-oriented home production as unpaid leisure.',
      },
      {
        year: '1996',
        title: 'ILO Homework Convention (C177)',
        text: 'Defined paid home-based work across industrial homework, telework, and digital platform crowd-work.',
      },
      {
        year: '2007',
        title: 'Arjun Sengupta (NCEUS) Report in India',
        text: 'Defined India’s unorganised sector (<10 workers, unincorporated) and highlighted "informalisation of the formal".',
      },
      {
        year: '2020–Present',
        title: 'Pandemic WFH & Hybrid Work Redefinition',
        text: 'Blurred formal bureaucracy and domestic space; spotlighted dual burden and the UN "Shadow Pandemic".',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Global & Tertiary Shift', text: 'Service economy, FDI competition & outsourcing fragment giant factories' },
      { label: 'Contractual Subcontracting', text: 'Formal firms hire 3rd-party agencies, franchises & home-based workers' },
      { label: 'Informalisation of Formal', text: 'Workers inside formal supply chains lose PF, tenure & union voice' },
      { label: 'WFH & Platform Blur', text: 'Home becomes hybrid workspace; gendered dual burden & precarity rise' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Gender Bias in Formal Workspaces',
    rightTitle: 'Gender Challenges in Informal Sector',
    rows: [
      {
        aspect: 'Core Structural Barrier',
        left: 'Glass ceiling, motherhood penalty, tokenism (Kanter) & old-boys network',
        right: 'Illiteracy, lack of credit/tools, patriarchal mobility restrictions',
      },
      {
        aspect: 'Occupational Clustering',
        left: 'Pink-collar roles (HR, teaching, nursing, entry-level BPO)',
        right: 'Perishable street vending (vegetables), domestic work, home piece-work',
      },
      {
        aspect: 'Wage & Recognition',
        left: 'Promotion gap at leadership tiers despite formal equal-pay rules',
        right: 'Direct daily wage gap vs men; home work dismissed as "non-work" (Mies)',
      },
      {
        aspect: 'Legal & Welfare Shield',
        left: 'Maternity Benefit Act & POSH Act 2013 apply (though evasion occurs)',
        right: 'No formal employer-employee bond; invisible to labour inspectors',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Informal Sector (Keith Hart & NCEUS)',
    meaning:
      'Coined by Keith Hart (1971) and defined in India by NCEUS (Arjun Sengupta) as unincorporated private units with under 10 workers lacking social security.',
  },
  {
    kind: 'keyTerm',
    term: 'Informalisation of the Formal Sector',
    meaning:
      'The growing trend where formal corporate and state organisations hire workers on casual, outsourced, or gig contracts without social security.',
  },
  {
    kind: 'keyTerm',
    term: 'Homework (ILO Convention 177)',
    meaning:
      'Remunerated work carried out at home per employer specifications — spanning industrial piece-work (bidis), telework, and digital crowd-work.',
  },
  {
    kind: 'keyTerm',
    term: 'Housewifization of Labour (Maria Mies)',
    meaning:
      'Maria Mies’ concept from Narsapur showing how capital treats home-based female producers as "housewives passing free time" to pay sub-subsistence rates.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Bureaucracy develops the more perfectly, the more it is dehumanized.',
    context: 'Explaining why formal organisations separate official rules from personal emotion — prompting informal peer coping.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Adherence to the rules, originally conceived as a means, becomes transformed into an end-in-itself.',
    context: 'Social Theory and Social Structure on bureaucratic red tape and the need for informal workplace flexibility.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2015 PYQ Pattern: Gender, WFH, and Tertiary Informalisation Dominate!',
    body: 'Look closely at recent UPSC questions in Topic 6.2: 2025 asked TWO questions here — sociological significance of the informal sector in developing societies, and whether formal workspaces are free of gender bias! Earlier years asked about WFH redefining formal/informal work (2021), gender equality in the informal sector (2021), capitalism driving informalisation (2020), and the tertiary sector weakening formal work (2015). Always combine Keith Hart/NCEUS with Maria Mies, Kanter, and Ashwini Deshpande.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Thinking WFH Applies Only to IT Software Engineers',
    body: 'In UPSC answers on Work From Home (2021 PYQ), never limit WFH to corporate laptop workers! Explicitly cite the ILO Homework Convention’s three categories: (1) Traditional Industrial Homework (rolling bidis, Narsapur lace makers, Zari embroidery), (2) Telework (remote call centres), and (3) Digital Crowd-Work. Note how home-based work hides child labour and imposes a gendered dual burden.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'ILO’s 3 Conditions for Homework (Mnemonic: D-C-A)',
    body: 'Remember why employers shift work to homes via D-C-A: (1) Deconstructable production process (tasks easily split), (2) Cheap capital equipment (sewing machine or home PC owned by worker), and (3) Abundant skilled labour (56% of global home-based workers are women).',
  },
  {
    kind: 'answerBox',
    intro:
      'The formal and informal organisation of work operates both inside workplaces (Weberian bureaucracy vs Mayo’s peer cliques) and across the macro-economy (regulated formal sector vs unprotected informal sector).',
    points: [
      'Internal organizational dynamics: While Max Weber highlighted formal written rules and hierarchy, Elton Mayo (Hawthorne) and Peter Blau proved that informal peer groups regulate output and solve bottlenecks.',
      'Macro-economic duality: Coined by Keith Hart and measured in India by the Arjun Sengupta Committee (NCEUS, <10 workers), the informal sector absorbs ~85–90% of developing-world labour through kinship and casual ties.',
      'Capitalism and tertiary informalisation: Global FDI competition, corporate subcontracting, jobless growth, and dispersed service-sector gigs have expanded informalisation even inside formal firms.',
      'Gendered hierarchy across both sectors: Formal offices suffer from glass ceilings, motherhood penalties, and pink-collar tokenism (Kanter), while informal female workers face severe wage gaps, perishable vending, and housewifization (Maria Mies).',
      'WFH redefinition: Post-pandemic Work From Home blurs formal bureaucratic supervision with informal domestic space, heightening women’s dual burden and the UN Shadow Pandemic (Ashwini Deshpande, Rukmini Sen).',
    ],
    conclusion:
      'Bridging the formal–informal divide requires universal portable social security, gender-sensitive care infrastructure, and legal recognition of home-based workers.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Examines formal and informal work organisation across micro-workplace dynamics (Weber, Merton, Mayo, Blau) and macro-economic sectors (Keith Hart, NCEUS), detailing capitalist/tertiary informalisation, gender bias across formal and informal workspaces, and how Work From Home redefines organizational boundaries.',
  mindMap,
  sections,
}