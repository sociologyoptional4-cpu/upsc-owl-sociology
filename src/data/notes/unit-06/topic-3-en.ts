import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 6.3 · Labour and Society',
  center: 'Labour & Society',
  subtitle: 'Reserve Army & Feminists -> Globalization & Informalisation -> Gig, Codes & Migrants',
  branches: [
    {
      title: 'Classical & Feminist Lenses',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Veronica Beechey', 'Irene Bruegel', 'Maria Mies'],
      points: [
        'Marx Reserve Army of Labour (floating, latent, stagnant) depresses wages',
        'Feminist view: women used as disposable buffer ("last hired, first fired")',
        'Patriarchal breadwinner ideology naturalises women’s low pay & unpaid care',
        'Bruegel nuance: pink-collar segmentation can occasionally shield female jobs',
      ],
    },
    {
      title: 'Globalization & Informalisation',
      color: 'yellow',
      thinkers: ['Jan Breman', 'Guy Standing', 'Arjun Sengupta', 'S.V. Sethuraman'],
      points: [
        'Globalization drives outsourcing, FDI deregulation, and jobless formal growth',
        'Informalisation in India (~90% workforce; contractualisation inside PSUs/MNCs)',
        'Regulation need: poverty link (Sethuraman), hazardous conditions, gender gap',
        'Regulation hurdles: missing cash data, global cost fear, zero union bargaining',
      ],
    },
    {
      title: 'Gig Economy & New Economy',
      color: 'mint',
      thinkers: ['Guy Standing', 'Axel Bruns', 'Alvin Toffler', 'C. Wright Mills'],
      points: [
        'Tripartite gig model: Platform (Uber/Zomato) + Gig Worker + Client/Consumer',
        'Death of lifelong career; employeeless & infrastructure-less corporations',
        'Worker trade-off: flexibility & multi-apping vs algorithmic whims & zero PF',
        'New Economy Produsage (Axel Bruns) & Prosumer (Toffler): user creates content',
      ],
    },
    {
      title: 'Migrant Labour & 4 Labour Codes',
      color: 'pink',
      thinkers: ['Jan Breman', 'Myron Weiner', 'Ashwini Deshpande', 'NCEUS'],
      points: [
        'Inter-state migrants ("footloose labour"): debt bondage, language & nativist bias',
        'No ration/voting portability (pre-ONORC), slum squalor, Lockdown exodus crisis',
        'India’s 4 Labour Codes (2019–20) merge 29 central laws; recognize gig workers',
        'Critique: 300-worker layoff threshold & strike notice rules weaken unions',
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
    body: `## How Labour Shapes Society — From Classical Class Struggle to the Precariat

Labour is not merely an economic factor of production bought in a market; how a society treats its working people shapes its class structure, family life, migration flows, and democratic stability. For [[thinker:Karl Marx]], labour is the living creator of all social wealth, yet under capitalism workers are reduced to a commodity. For [[thinker:Émile Durkheim]], occupational groups and professional associations act as vital moral cushions between the isolated citizen and the distant state. In the 21st century, [[thinker:Guy Standing]] warns that neoliberal globalization has fractured the traditional working class into a new global ==Precariat== — millions of informal, contractual, migrant, and gig workers living without occupational security or social protection.

## Reserve Army of Labour and the Feminist Position

In *Das Kapital* (Volume 1, Chapter 25), **[[thinker:Karl Marx]]** argued that capitalism structurally requires a ==Reserve Army of Labour== (or *relative surplus population*) — a pool of unemployed and underemployed workers beyond those currently active in factories. Because machines continuously displace human workers, this reserve army (which Marx divided into **floating**, **latent** rural migrants, and **stagnant** casual labour) performs a crucial function for capitalists: the constant threat of replacement disciplines active workers, weakens trade union strikes, and depresses wages toward bare subsistence.

During the 1970s and 1980s, **Marxist-Feminist scholars** asked a sharp question: *who actually makes up this reserve army, and how does patriarchy shape it?*

- **Women as the Ideal Disposable Reserve ([[thinker:Veronica Beechey]]):** In her landmark 1977 essay, Veronica Beechey argued that married women form capital's preferred flexible reserve army because patriarchal family ideology defines the husband as the "primary breadwinner" and the wife as a "dependent homemaker". During wartime or economic booms, capital pulls women into factories; during recessions, they are the **"last hired and first fired"**, absorbed quietly back into unpaid housework without appearing in state unemployment riots.
- **Unpaid Reproductive Labour & Housewifization ([[thinker:Mariarosa Dalla Costa]], [[thinker:Selma James]], [[thinker:Maria Mies]]):** Feminist theorists showed that women's unpaid domestic cooking, cleaning, and child-rearing reproduce the active labour force daily at zero cost to capitalists, while labelling women "housewives" justifies paying them sub-minimum wages in informal home-based production.
- **Empirical Nuance — Sex-Segregated Buffers ([[thinker:Irene Bruegel]], [[thinker:Sylvia Walby]]):** Testing the reserve-army thesis empirically, Irene Bruegel noted a paradox: because women are crowded into low-paid, sex-segregated "pink-collar" service jobs (nursing, cleaning, clerical work), they are sometimes *less* likely than male heavy-manufacturing workers to be fired during industrial recessions, though they remain trapped in part-time precarity. [[eg:During India's COVID-19 lockdown and post-pandemic recovery, PLFS data showed female workers suffered sharper initial job losses and were pushed overwhelmingly into unpaid family labour or distress self-employment.]]

## Globalization, Informalisation of Labour, and Regulation Challenges

Why did late-20th-century globalization push labour into informal organisation rather than formal factories? Across developing nations — and especially in **India**, where roughly **90% of the workforce** (and over 80% of non-agricultural workers) is informal — globalization triggered ==Informalisation of Labour== through **corporate subcontracting**, **FDI-driven state deregulation**, **jobless formal growth**, **PSU privatisation**, and **global sweatshop outsourcing**. As the **Arjun Sengupta Committee (NCEUS)** highlighted, India witnessed rapid *"informalisation of the formal sector"*, where formal plants and government departments hire workers via third-party labour contractors without PF, pension, or tenure.

| Why Regulating Informal Labour Is Urgent | Why Regulating Informal Labour Is Difficult |
| --- | --- |
| **Poverty correlation (S.V. Sethuraman):** High BPL concentration and sub-minimum survival wages | **Data invisibility:** Millions of unrecorded cash-based micro-units (<10 workers) evade surveys |
| **Hazardous conditions:** Zero occupational safety, long hours, and zero health/accident cover | **Global cost competitiveness trap:** Strict wage laws risk losing export/FDI orders to rival nations |
| **Acute gender & child vulnerability:** Sharp female wage gaps, perishable vending, hidden home child labour | **Zero collective bargaining:** Scattered street vendors, dhaba boys, and domestic helps lack unions |

## The Gig Economy and Produsage in the New Economy

A defining 21st-century mutation of labour is the ==Gig Economy== — where work is organised around short-term, on-demand tasks mediated by digital algorithms, completely devoid of a formal long-term employer-employee bond. [[eg:Ride-hailing drivers on Uber/Ola, food-delivery riders on Zomato/Swiggy, 10-minute grocery riders on Blinkit/Zepto, and home-service technicians on Urban Company represent India's booming platform workforce (projected by NITI Aayog to reach 23.5 million by 2029–30).]]

- **The Tripartite Relationship & "Death of the Career":** Every gig involves three parties — (1) the **Platform/Aggregator**, (2) the **Independent Gig Worker**, and (3) the **Client/Consumer** — with zero long-term commitment beyond that single transaction. Giant **employeeless and infrastructure-less corporations** (Uber owns no cars; Airbnb/OYO own no hotels) de-link corporate revenue from payroll size, replacing lifelong corporate careers with fragmented gigs.
- **Organizational Gains vs Worker Precarity:** Platforms enjoy cheap labour, zero social security payouts, zero workspace costs, and instant algorithmic hiring/firing ("deactivation"). Workers gain **schedule flexibility**, freedom from a physical boss, and income hedging via **multi-apping**, yet lose job security, paid sick leave, and retirement safety nets while facing rating anxiety and road accidents.
- **Produsage and the Person as Product:** In the wider digital economy, [[thinker:Alvin Toffler]]'s **Prosumer** and [[thinker:Axel Bruns]]' ==Produsage== describe how users collaboratively produce and consume content (Wikipedia, Instagram reels, memes). Yet social media influencers (building brands around catchphrases) and online educators experience new alienation where **the person themselves becomes the 24x7 commodity**.

## Migrant Labour in Indian States & the Lockdown Crisis

Studied classically by **[[thinker:Jan Breman]]** as ==Footloose Labour==, circular inter-state labour migrants (moving from Bihar, UP, Odisha, and Jharkhand to Delhi, Maharashtra, Gujarat, Punjab, and Kerala) form the invisible backbone of India's informal construction, brick-kiln, garment, and agricultural sectors:

- **Structural Problems in Host States:** Recruited by middlemen (*thekedars/mukadams*) through debt advances (**neo-bondage**), migrants face non-portability of state welfare and voting rights, overcrowded slum squalor without sanitation, language barriers, police harassment, and nativist **"sons-of-the-soil"** hostility ([[thinker:Myron Weiner]]). Left-behind rural wives bear the heavy burden of "money-order economies" and **feminization of agriculture**.
- **The 2020 COVID-19 Lockdown Crisis:** When sudden lockdown halted informal cash wages overnight, millions of migrants faced immediate eviction by landlords, starvation, loss of daily livelihoods, and suspended public transport — forcing a tragic **reverse exodus on foot** across highways before policy interventions like Shramik trains, PM Garib Kalyan free rations, and **One Nation One Ration Card (ONORC)** were scaled up.

## India’s Four New Labour Codes (2019–2020)

To modernise colonial-era laws and balance Ease of Doing Business with worker welfare, the Government of India consolidated **29 central labour laws into 4 Labour Codes**: (1) **Code on Wages (2019)**, (2) **Industrial Relations Code (2020)**, (3) **Code on Social Security (2020)**, and (4) **Occupational Safety, Health and Working Conditions (OSHWC) Code (2020)**.

- **Positive Reforms:** Historic legal recognition of **gig and platform workers** with a dedicated Social Security Fund (aggregators contributing 1–2% of turnover); universal **National Floor Wage**; mandatory written appointment letters; gender-neutral night shifts with safety safeguards; and portable welfare for inter-state migrants.
- **Sociological Critiques:** Under the Industrial Relations Code, the threshold for prior government permission before layoffs/retrenchment or plant closure was raised from **100 to 300 workers**, and **Fixed-Term Employment (FTE)** was expanded — moves trade unions argue increase hire-and-fire flexibility, while mandatory 14-day strike notices weaken collective bargaining. [[link:Connect this directly with Paper 2 Unit 10 & Unit 11 on rural labour bondage, migration, working-class mobilisation, and informal sector policy in India.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1867',
        title: 'Karl Marx — Reserve Army of Labour',
        text: 'Das Kapital Ch. 25 explained how capital uses floating, latent, and stagnant surplus labour to depress wages.',
      },
      {
        year: '1977–1979',
        title: 'Beechey & Bruegel — Feminist Reserve Army Debate',
        text: 'Veronica Beechey showed married women act as capital’s flexible buffer; Irene Bruegel added occupational segmentation nuance.',
      },
      {
        year: '1991–2007',
        title: 'LPG Reforms, Footloose Labour & NCEUS Report',
        text: 'Jan Breman traced circular migrant precarity; Arjun Sengupta (NCEUS) documented informalisation of India’s formal sector.',
      },
      {
        year: '2008–2011',
        title: 'Axel Bruns (Produsage) & Guy Standing (Precariat)',
        text: 'Theorised user-generated digital labour and the global rise of insecure gig/contractual workers.',
      },
      {
        year: '2019–2020',
        title: 'India Enacts Four New Labour Codes',
        text: 'Merged 29 central labour laws into 4 codes; legally recognized gig and platform workers for social security.',
      },
      {
        year: '2020–2021',
        title: 'COVID-19 Lockdown Migrant Exodus & e-Shram',
        text: 'Reverse migration crisis spotlighted informal vulnerability, accelerating ONORC and the e-Shram national database.',
      },
      {
        year: '2023–2024',
        title: 'State Gig Worker Welfare Acts (Rajasthan/Karnataka)',
        text: 'Pioneered platform-levy welfare boards for Zomato, Swiggy, Blinkit, and Uber gig workers.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Agrarian Distress', text: 'Land fragmentation & rural debt push "latent reserve army" out of villages' },
      { label: 'Circular Migration', text: 'Thekedar advances bind "footloose labour" into urban construction & sweatshops' },
      { label: 'Platform / Gig Shift', text: 'Youth enter Uber, Zomato & Blinkit tripartite gigs without employer-employee bonds' },
      { label: 'Portable Social Net', text: 'ONORC, e-Shram & Code on Social Security aim to build portable welfare shields' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Formal Employment',
    rightTitle: 'Platform / Gig Economy Work',
    rows: [
      {
        aspect: 'Contractual Structure',
        left: 'Bipartite formal employer–employee contract with lifelong career ladder',
        right: 'Tripartite (Platform–Gig Worker–Client) per-task transaction ("death of career")',
      },
      {
        aspect: 'Assets & Overhead',
        left: 'Corporation owns factory/office infrastructure and tools',
        right: 'Employeeless & asset-light firm; worker brings own bike, car, fuel, and phone',
      },
      {
        aspect: 'Supervision & Autonomy',
        left: 'Fixed 9-to-5 clock shifts under physical human supervisor',
        right: 'Flexible login/multi-apping, but ruled by opaque algorithmic ratings & timers',
      },
      {
        aspect: 'Social Security Net',
        left: 'Mandatory PF, ESI, paid sick/maternity leave, gratuity, and union rights',
        right: 'No statutory PF or paid leave; emerging coverage under Social Security Code 2020',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Reserve Army of Labour',
    meaning:
      'Marx’s concept of the structural pool of unemployed/underemployed workers (floating, latent, stagnant) that disciplines active labour and keeps wages low — critiqued by feminists (Beechey, Bruegel) for using women as a disposable buffer.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'The Gig Economy (Tripartite Model)',
    meaning:
      'Short-term, task-based digital work connecting Platform, Independent Gig Worker, and Client without formal employment bonds, creating asset-light "employeeless" firms.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour & Neo-Bondage (Jan Breman)',
    meaning:
      'Jan Breman’s concept describing rural-to-urban circular migrant labourers in India trapped in informal seasonal work through contractor debt advances.',
  },
  {
    kind: 'keyTerm',
    term: 'Produsage & Prosumer (Axel Bruns / Toffler)',
    meaning:
      'The blurring of producer and consumer in the digital new economy (Wikipedia, Instagram, memes) where users collaboratively generate content that platforms monetize.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The condemnation of one part of the working class to enforced idleness by the overwork of the other part.',
    context: 'Das Kapital on how the Reserve Army of Labour empowers capitalists to extract maximum work from active employees.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Caste system is not merely a division of labour; it is also a division of labourers.',
    context: 'Annihilation of Caste — vital for explaining why India’s informal and migrant labour markets remain segmented by caste hierarchy.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2013 PYQ Pattern: Migrants, Gig Economy, Labour Codes & Feminist Reserve Army!',
    body: 'Topic 6.3 is a high-scoring current-affairs bridge between Paper 1 and Paper 2! Look at recent questions: problems of inter-state informal labour migrants (2025), Gig economy & social security net (2024), Lockdown migrant crisis (2021), New Labour Codes (2020), Reserve army of labour & feminist position (2019), Regulating informal labour (2019), and Globalization & informalisation (2017, 2016, 2013). Always integrate Jan Breman, Guy Standing, Veronica Beechey, and India’s 4 Labour Codes.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Writing Only General GS Points on Gig Economy or Migrants',
    body: 'To score 12+/20 in Sociology Optional, never write a generic GS essay on Zomato or migrant trains! Anchor your Gig Economy answer in the Tripartite Model (Platform–Worker–Client), "Death of the Career", "Employeeless Organizations", and Algorithmic Alienation. Anchor your Migrant answer in Jan Breman’s "Footloose Labour", Myron Weiner’s "Sons of the Soil" nativism, and B.R. Ambedkar’s "Division of Labourers".',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: India’s 4 Labour Codes (W-I-S-O)',
    body: 'Remember the 4 Labour Codes (merging 29 laws) via W-I-S-O: (1) Wages Code 2019 (National Floor Wage), (2) Industrial Relations Code 2020 (300-worker layoff threshold & Fixed-Term Employment), (3) Social Security Code 2020 (Gig & Platform worker fund), and (4) OSHWC Code 2020 (Inter-state migrant safety & appointment letters).',
  },
  {
    kind: 'answerBox',
    intro:
      'The sociology of labour and society examines how global capitalism, gender hierarchies, migration, and state laws reshape workers’ power, identity, and social security.',
    points: [
      'Reserve army and feminist critique: Marx showed capitalism uses unemployed pools to depress wages; feminists (Veronica Beechey, Irene Bruegel, Maria Mies) demonstrated how patriarchal breadwinner ideology turns women into a cheap, disposable buffer.',
      'Globalization and informalisation: Corporate subcontracting, FDI deregulation, and jobless formal growth pushed ~90% of India’s workforce into informal precarity, creating urgent regulation needs alongside data and cost-competitiveness hurdles.',
      'Gig economy transformation: The tripartite platform model (Uber, Zomato, Blinkit) creates asset-light employeeless firms and flexible multi-apping while stripping workers of formal career ladders and social security.',
      'Migrant labour vulnerabilities: Jan Breman’s "footloose" inter-state migrants face debt bondage, welfare non-portability, urban slum deprivation, and nativist hostility — starkly exposed during the 2020 Lockdown exodus.',
      'Four Labour Codes balance: India’s consolidated codes pioneer gig-worker social security and national floor wages, though raising layoff thresholds to 300 workers sparks debate over union bargaining power.',
    ],
    conclusion:
      'Building a humane 21st-century labour order requires coupling economic agility with portable social security, living wages, and democratic voice for every formal, informal, and platform worker.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'Analyses the relationship between labour and society through Marx’s Reserve Army of Labour and its feminist critique (Beechey, Bruegel), globalization-driven informalisation, the tripartite Gig Economy and digital Produsage, inter-state migrant vulnerabilities (Lockdown crisis), and India’s four New Labour Codes.',
  mindMap,
  sections,
}