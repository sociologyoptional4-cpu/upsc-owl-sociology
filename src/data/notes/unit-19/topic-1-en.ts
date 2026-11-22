import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1EnMindMap: MindMapData = {
  title: 'Topic 1 · Development Planning & Mixed Economy',
  center: 'Development Planning & Mixed Economy',
  subtitle: 'Nehruvian Modernity • Gandhian Swaraj • 1991 LPG • NITI Aayog',
  branches: [
    {
      title: 'Foundational Visions',
      color: 'lavender',
      thinkers: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'P.C. Mahalanobis', 'B.R. Ambedkar'],
      points: [
        'Nehruvian model: state-led heavy industrialisation and Five-Year Plans',
        'Gandhian Gram Swaraj: village self-sufficiency, charkha, and moral economy',
        'Mixed economy: public commanding heights alongside regulated private sector',
        'Mahalanobis strategy: capital goods priority to escape colonial dependency',
      ],
    },
    {
      title: 'Marxist & Institutional Critiques',
      color: 'yellow',
      thinkers: ['A.R. Desai', 'Pranab Bardhan', 'Gunnar Myrdal', 'Raj Krishna'],
      points: [
        'A.R. Desai: state-directed capitalist planning serving bourgeois interests',
        'Pranab Bardhan: proprietary classes coalition (capitalists, kulaks, bureaucrats)',
        'Gunnar Myrdal: soft state unable to enforce radical institutional reforms',
        'Raj Krishna: "Hindu rate of growth" (~3.5%) trapped by License Raj red tape',
      ],
    },
    {
      title: 'The Neoliberal Turn (1991 LPG)',
      color: 'mint',
      thinkers: ['Leela Fernandes', 'Jan Breman', 'Neera Chandhoke', 'Stuart Corbridge'],
      points: [
        '1991 fiscal crisis: IMF structural adjustment and dismantling of License Raj',
        'Class transformation: rise of consumerist new middle class (Fernandes)',
        'Labour informalisation: gig economy, contractualisation, footloose labour',
        'Spatial unevenness: industrial peninsular west vs lagging eastern heartland',
      ],
    },
    {
      title: 'From Yojana to NITI Aayog',
      color: 'pink',
      thinkers: ['Jean Drèze', 'Amartya Sen', 'Arvind Panagariya', 'Yogendra Singh'],
      points: [
        'Planning Commission (1950): top-down resource allocator and directive targets',
        'NITI Aayog (2015): policy think tank, competitive and cooperative federalism',
        'Aspirational Districts Programme: outcome metrics over capital disbursement',
        'Sociological critique: state retreat from redistribution and social equity',
      ],
    },
  ],
}

export const topic1EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u09-01-planning-constitution-law.webp',
    alt: 'P2 Unit 9 infographic: Planning, Constitution & Law — State-Led Planning, Liberalization & Legal Social Engineering',
    caption:
      'India’s development architecture shifted from Soviet-style Five-Year Plans and the commanding heights of the state to neoliberal market facilitation and competitive federalism under NITI Aayog.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 19 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Idea of Development Planning and Mixed Economy

When India achieved independence in 1947, the newly sovereign state inherited a traumatised, stagnant colonial economy marked by extreme poverty, recurrent famines, and virtually zero domestic heavy capital goods industry. To rebuild the nation, post-colonial leaders could not rely on private capital alone, which was small and cautious. Instead, they forged the ==Mixed Economy== model — an institutional compromise combining socialist-inspired ==state-led planning== with private enterprise, designed to propel rapid industrial growth while preventing private monopolies.

Under [[thinker:Jawaharlal Nehru]], the state occupied the **commanding heights of the economy**, building infrastructure like steel mills, dams, and power grids that private business lacked the resources to undertake. [[eg:Massive state-run projects such as the Bhilai and Rourkela steel plants, and the Bhakra-Nangal dam—famously hailed by Nehru as the "temples of modern India"—became living monuments to state-directed modernisation.]] Yet this post-colonial developmental consensus was never uncontested; it faced sharp intellectual resistance from both Gandhian decentralists and Marxist sociologists.

### Competing Visions: Nehruvian Industrialisation vs Gandhian Gram Swaraj

The debate on how to rebuild India exposed two sharply divergent civilisational philosophies:

1. **The Nehruvian Modernist Vision**: Rooted in Fabian socialism and modernization theory, Nehru saw large-scale industrialisation and scientific temper as the only paths to overcome poverty, caste backwardness, and global subjugation. For Nehru, the Indian village was historically stagnant and parochial — a stance shared even more emphatically by [[thinker:B.R. Ambedkar]], who famously denounced the village as a "den of ignorance, narrow-mindedness and communalism."
2. **The Gandhian Moral Vision**: [[thinker:Mahatma Gandhi]] in *Hind Swaraj* (1909) rejected Western industrial modernity as inherently exploitative, dehumanising, and ecologically predatory. Gandhi advocated **Gram Swaraj** (village republics), where economic life was organised around cottage crafts, the charkha (spinning wheel), production by the masses rather than mass production, and the principle of **trusteeship** where the wealthy hold property as stewards of society.

| Dimension | Nehruvian Model | Gandhian Swaraj |
| :--- | :--- | :--- |
| **Primary Unit** | Nation-state & modern urban-industrial hubs | Self-sufficient village republic (*Gram Swaraj*) |
| **Economic Engine** | Heavy machinery, dams, power (*Commanding Heights*) | Cottage industries, handloom, khadi & agriculture |
| **Technology Stance** | High technology, scientific temper & mechanisation | Appropriate small-scale tools; rejection of labour displacement |
| **Social Order** | Industrial working class & technocratic elite | Decentralised, cooperative, non-violent moral community |
| **View on Village** | Backward, caste-ridden; to be transformed by cities | Living heart of Indian civilisation; moral sanctuary |

[[link:Connects directly to Paper 1 Unit 10 (Development and Dependency) and Paper 2 Unit 13 (Agrarian Social Structure & Land Reforms).]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Nehruvian Planning Model (1950–1991)',
    rightTitle: 'Gandhian Swaraj Alternative',
    rows: [
      {
        aspect: 'Core Philosophy',
        left: 'State-led modernization, heavy industrialisation, and Five-Year Plans.',
        right: 'Village autonomy, decentralised cottage industries, and moral restraint.',
      },
      {
        aspect: 'Class Dynamics',
        left: 'Created public-sector technocrats, urban industrial workforce, and private corporate elite.',
        right: 'Aimed to empower rural artisans, peasant cultivators, and local panchayats.',
      },
      {
        aspect: 'Ecological Impact',
        left: 'Mega-dams and resource-intensive extraction displaced subaltern adivasis.',
        right: 'Ecologically sustainable, low-footprint production in harmony with nature.',
      },
      {
        aspect: 'Fate in Policy',
        left: 'Adopted as the official state planning framework via Mahalanobis model.',
        right: 'Marginalised to Khadi boards, cottage subsidies, and Directive Principles (Art. 40).',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Sociological Critiques of State-Directed Planning

Far from creating an egalitarian socialist society, the mixed economy produced deep structural contradictions that sociologists have dissected across theoretical traditions:

#### 1. A.R. Desai's Marxist Critique: The Myth of the Welfare State
In *State and Society in India: Essays in Dissent* and *India's Path of Development*, [[thinker:A.R. Desai]] argued that the post-colonial Indian state was fundamentally a **bourgeois-capitalist state**. For Desai, development planning did not intend to build socialism; rather, it was ==State Capitalism== designed to serve private capitalist interests:
- The public sector shouldered the massive financial risks of building heavy infrastructure (power, steel, railway haulage) that private capital could not afford in 1947.
- Once built, these state assets provided cheap raw materials, infrastructure, and inputs to private industrial conglomerates like the Tatas and Birlas.
- Land reforms were deliberately kept half-hearted, replacing absentee feudal landlords with a class of rich capitalist farmers (*kulaks*), leaving agricultural labourers and poor peasants dispossessed.

#### 2. Pranab Bardhan: The Coalition of Dominant Proprietary Classes
Political economist [[thinker:Pranab Bardhan]] demonstrated that planning was hijacked by a tripartite alliance: (a) the industrial capitalist class, (b) the rich agrarian peasantry, and (c) white-collar professionals and senior bureaucrats. State subsidies, public investments, and procurement prices were systematically looted and distributed as patronage among these three elites, strangling public capital formation.

#### 3. Gunnar Myrdal: The "Soft State" and Institutional Inertia
In *Asian Drama: An Inquiry into the Poverty of Nations*, [[thinker:Gunnar Myrdal]] categorised India as a **Soft State** — a regime that legislated radical, progressive social goals on paper but lacked the political willpower and institutional discipline to enforce obligations or challenge traditional caste and agrarian oligarchies.

[[trap:Never confuse Nehru's mixed economy with actual socialism — as A.R. Desai established, the private sector remained the dominant driver of production and profit, while the state absorbed capital risks.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Answer Angle: The Class Character of the Indian State',
    body: 'When answering questions on development planning, contrast the constitutional rhetoric of a "Socialist Republic" (42nd Amendment) with sociological realities. Cite A.R. Desai (State Capitalism), Pranab Bardhan (Dominant Proprietary Classes), and Gunnar Myrdal (Soft State) to illustrate how planning consolidated bourgeois-kulak hegemony rather than redistributive justice.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Phase 1: Nehruvian Planning (1950–1991)',
        text: 'State commanding heights, Mahalanobis heavy capital model, License-Permit Raj, Hindu rate of growth (~3.5%).',
      },
      {
        label: 'Phase 2: 1991 LPG Transition',
        text: 'Fiscal crisis, IMF structural adjustment, industrial de-licensing, privatization, FDI inflow, rise of new middle class.',
      },
      {
        label: 'Phase 3: NITI Aayog Era (2015–Present)',
        text: 'Dismantling of Five-Year Plans, think-tank model, competitive federalism, Aspirational Districts, market facilitation.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The 1991 LPG Reforms and the Rise of the New Middle Class

By 1991, severe balance-of-payments deficits and soaring fiscal crises compelled India to abandon the License-Permit-Quota Raj. Under the structural adjustment programme negotiated with the IMF and World Bank, the Indian state embraced ==Liberalisation, Privatisation, and Globalisation (LPG)==.

The sociological ramifications of the 1991 reforms radically transformed Indian social structure:
1. **The Emergence of the "New Middle Class"**: Sociologist [[thinker:Leela Fernandes]] (*India's New Middle Class*) argued that post-1991 middle-class identity shifted from state employment and frugality to assertive **consumer citizenship**. [[eg:Owning apartments in gated condominiums, shopping at luxury malls, and dining out became primary cultural markers of social status in metropolitan hubs like Bengaluru and Gurugram.]]
2. **Deepening Labour Informalisation**: [[thinker:Jan Breman]] documented how structural reforms triggered "footloose labour" — informalisation, precarious subcontracting, and the erosion of job security, pushing over 90% of workers into vulnerable unorganised jobs.
3. **Widening Regional and Spatial Disparities**: Investment concentrated heavily in coastal and western states with advanced physical infrastructure (Maharashtra, Gujarat, Tamil Nadu, Karnataka), while the eastern and central regions (Bihar, Jharkhand, Odisha) remained agrarian hinterlands providing migrant labour.

## From Planning Commission to NITI Aayog: Structural Shift

In 2015, the Union Government dissolved the 65-year-old Planning Commission and constituted the **NITI Aayog** (National Institution for Transforming India). This signified an epochal shift from centralized resource planning to an indicative, bottom-up think tank:

- **From Allocator to Knowledge Hub**: The Planning Commission exercised directive financial powers, distributing planned capital expenditure to states via formulas (e.g., Gadgil-Mukherjee). NITI Aayog has no financial allocation powers; those devolved directly to the Finance Commission.
- **Cooperative & Competitive Federalism**: NITI Aayog introduced indices such as the *Sustainable Development Goals (SDG) India Index* and the *Aspirational Districts Programme*, pitching states and districts into public competition for private investments and governance rankings.
- **Sociological Critique of NITI Aayog**: Sociologists and developmental economists like [[thinker:Jean Drèze]] argue that the retreat of central planning has weakened the state's constitutional obligation toward regional equity and targeted affirmative redistribution, handing policy framing increasingly to corporate-backed consultants.`,
  },
  {
    kind: 'keyTerm',
    term: 'Mixed Economy',
    meaning:
      'An economic system blending state-owned public enterprises in core infrastructure with regulated private capital, adopted in 1948–1956 to achieve rapid industrial growth without monopolistic concentration.',
  },
  {
    kind: 'keyTerm',
    term: 'State Capitalism (A.R. Desai)',
    meaning:
      'A Marxist conceptualisation demonstrating that state planning in post-colonial India used public resources to shoulder capital risks and construct foundational infrastructure primarily to nurture private bourgeois capitalism.',
  },
  {
    kind: 'keyTerm',
    term: 'Cooperative & Competitive Federalism',
    meaning:
      'A governance architecture championed by NITI Aayog where states collaborate with the Centre while competing against each other on developmental indices (SDG Index, Aspirational Districts) to attract private capital.',
  },
  {
    kind: 'keyTerm',
    term: 'Soft State (Gunnar Myrdal)',
    meaning:
      'A post-colonial state structure characterised by institutional indiscipline, legislative radicalism on paper, and an inability or unwillingness to enforce obligations against entrenched social elites.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Key Contrast to Remember in the Exam',
    body: 'Planning Commission was a centralized, top-down financial distributor operating Five-Year Plans. NITI Aayog is a market-oriented think tank relying on indices and competitive federalism without capital disbursement powers. Always evaluate both through the lens of social equity and regional disparities.',
  },
  {
    kind: 'answerBox',
    intro:
      'A model framework to evaluate the transition from Nehruvian Planning to NITI Aayog in UPSC Paper 2:',
    points: [
      'Historical context: Shift from post-colonial capital scarcity requiring state commanding heights (Mahalanobis model) to market-led globalization requiring regulatory facilitation.',
      'Institutional mechanics: Planning Commission exercised directive resource allocation; NITI Aayog operates as an advisory think tank emphasizing cooperative and competitive federalism.',
      'Sociological outcome on class: Nehruvian era birthed public-sector bureaucratic elites; NITI Aayog era aligns with neoliberal corporate governance and public-private partnerships (PPP).',
      'Impact on regional disparities: Formulaic central grants (Gadgil formula) provided equalizing cushions to backward states, whereas competitive index rankings tend to favor infrastructure-rich peninsular states.',
      'Subaltern equity critique: Retreat of state planning risks reducing social sector outlays (health, basic education) unless anchored by rights-based statutory entitlements.',
    ],
    conclusion:
      'While NITI Aayog fosters operational agility and technological benchmarking, genuine developmental planning in an unequal society like India requires combining competitive dynamism with robust state-backed redistributive equity.',
  },
]
