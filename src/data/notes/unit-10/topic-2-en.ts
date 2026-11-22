import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.2 · Development and Dependency',
  center: 'Development & Dependency',
  subtitle: 'Modernisation • Dependency School • World-Systems • Sustainable Alternatives',
  branches: [
    {
      title: 'Modernisation Paradigm',
      color: 'lavender',
      thinkers: ['W.W. Rostow', 'Talcott Parsons', 'Daniel Lerner', 'Alex Inkeles'],
      points: [
        'Rostow 5 Stages of Growth: Traditional society to High Mass Consumption',
        'Parsons Pattern Variables: shift from Ascription to Achievement & Universalism',
        'Lerner & Inkeles: modern personality, empathy, literacy & psychic mobility',
        'Critique: Eurocentric teleology, blames victim, ignores colonial drain',
      ],
    },
    {
      title: 'Dependency & Underdevelopment',
      color: 'yellow',
      thinkers: ['Raúl Prebisch', 'Paul Baran', 'A.G. Frank', 'Cardoso & Faletto'],
      points: [
        'Prebisch-Singer ECLA Thesis: declining terms of trade for primary exporters',
        'Frank: Development of Underdevelopment; Metropolis-Satellite exploitation chains',
        'Rejection of Dual Society: capitalism penetrated every rural hinterland',
        'Cardoso: Associated-Dependent Development (Triple Alliance of MNCs, state & elite)',
      ],
    },
    {
      title: 'World-Systems Analysis',
      color: 'mint',
      thinkers: ['Immanuel Wallerstein', 'Samir Amin', 'Giovanni Arrighi'],
      points: [
        'Single global capitalist division of labour with Core, Semi-Periphery & Periphery',
        'Core extracts surplus via unequal exchange; Semi-Periphery acts as structural buffer',
        'Cyclical Kondratiev waves and secular trends; room for positional mobility',
        'Neo-dependency in digital era: technology monopolies and patent imperialism (TRIPS)',
      ],
    },
    {
      title: 'Sustainable & Human Alternatives',
      color: 'pink',
      thinkers: ['Amartya Sen', 'Mahbub ul Haq', 'Michael Cernea', 'Arturo Escobar'],
      points: [
        'Sen Capability Approach: Development as Freedom expanding substantive freedoms',
        'UNDP 2015 SDGs: 17 integrated goals balancing People, Planet, Prosperity & Peace',
        'Cernea IRR Model: 8 impoverishment risks in development-induced displacement',
        'Development Planning in India: Nehru-Mahalanobis to NITI Aayog bottom-up shift',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u10-01-social-change-theories.webp',
    alt: 'P1 Unit 10 infographic: Sociological Theories of Change — Evolutionary, Cyclical, Functionalist & Conflict Trajectories',
    caption: 'Evolutionary, Cyclical, Functionalist & Conflict Trajectories (Sociological Theories of Change).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 10 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Shifting Sociological Meaning of Development

Development is not merely a quantitative accounting of Gross Domestic Product (GDP) or industrial capital stock. Sociologically, development refers to structural transformations that enhance collective human welfare, dismantle oppressive social hierarchies, and expand substantive human choices. Over the past seven decades, the concept has evolved across four distinct intellectual generations:

1. **Economic Growth Model (1950s–1960s):** Equated development with rapid industrialisation, capital accumulation, and urbanisation.
2. **Basic Needs Approach (1970s):** Introduced by the International Labour Organization (ILO), prioritising primary education, potable water, food security, and sanitation over pure output statistics.
3. **Human Development & Capability Approach (1990s):** Pioneered by [[thinker:Amartya Sen]] and Mahbub ul Haq, defining development as the expansion of human capabilities — freedoms to lead lives individuals have reason to value (*Development as Freedom*).
4. **Sustainable Development & Post-Development (2000s–Present):** Recognising ecological planetary boundaries and critiquing the imperialist imposition of Western models (Arturo Escobar, Wolfgang Sachs).

## 1. Modernisation Theory: Internal Deficits and the Western Path

Emerging in the United States during the post-WWII Cold War era, Modernisation Theory sought to guide newly decolonised Third World nations toward Western-style liberal democratic capitalism.

- **W.W. Rostow’s Stages of Economic Growth (1960):** Subtitled *"A Non-Communist Manifesto"*, Rostow outlined five universal stages through which every society must progress:
  1. *Traditional Society:* Agrarian, low productivity, fatalistic worldview.
  2. *Preconditions for Take-off:* Commercial agriculture, infrastructure, and an entrepreneurial elite emerge.
  3. *Take-off:* Crucial 20–30 year industrial breakthrough with investment rates jumping from 5% to over 10% of national income.
  4. *Drive to Maturity:* Diversified industrial base, advanced technology diffusion.
  5. *Age of High Mass Consumption:* Dominance of durable consumer goods, social welfare, and mass consumerism (exemplified by the USA).
- **Talcott Parsons’s Pattern Variables:** Modernisation requires abandoning traditional expressive value orientations (Ascription, Diffuseness, Particularism, Affectivity) in favour of modern instrumental values (==Achievement, Specificity, Universalism, Affective Neutrality==).
- **Daniel Lerner & Alex Inkeles:** Lerner (*The Passing of Traditional Society*, 1958) identified the "mobile personality" endowed with high **empathy** through mass media exposure. Inkeles formulated the *Overall Modernity (OM) Scale*, demonstrating that factory schooling instils punctuality, rational planning, and openness to new experience.

[[trap:Modernisation theory committed the fundamental error of "blaming the victim." It diagnosed Third World poverty as the result of internal cultural deficiencies, ignoring how European colonial extraction had decapitalised those societies for centuries.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Confuse Undeveloped with Underdeveloped',
    body: 'A.G. Frank made a critical conceptual distinction: pre-colonial societies were undeveloped (possessing unutilised resources and autonomous economies). Underdevelopment is not an original state; it is an active historical condition created when European colonisers stripped local resources and subordinated indigenous economies to metropolitan capital.',
  },
  {
    kind: 'md',
    body: `## 2. Dependency Theory: The Development of Underdevelopment

Frustrated by declining economic fortunes in Latin America despite decades of Western aid, economists at the United Nations Economic Commission for Latin America (UN-ECLA) rejected modernisation assumptions. Led by Raúl Prebisch and Hans Singer, the **Prebisch-Singer Thesis** revealed that primary commodity exports suffer from secular declining terms of trade against expensive Western manufactured imports.

### Andre Gunder Frank (A.G. Frank): Metropolis-Satellite Exploitation
[[thinker:Andre Gunder Frank]] formulated the landmark theory of the ==Development of Underdevelopment==:
- **Refutation of the Dual Society Myth:** Modernisation scholars claimed Third World nations had a "dual economy" — a modern capitalist sector coexisting alongside a static, isolated feudal agrarian sector. Frank proved that capitalism penetrated every remote corner of the Third World during colonialism. Rural agrarian misery is not an untouched feudal relic; it was actively shaped by capitalist exploitation.
- **Chain of Metropolis-Satellite Relations:** Global capitalism operates as a cascading hierarchical pipeline:
  $$\\text{World Metropolis (New York, London)} \\longrightarrow \\text{National Metropolis (Mumbai, São Paulo)} \\longrightarrow \\text{Regional Satellite} \\longrightarrow \\text{Local Peasantry}$$
  At each link, economic surplus is sucked upward from peripheral satellites to the imperial metropolis.
- **Development During Isolation:** Frank empirically demonstrated that peripheral satellites experienced their strongest industrial growth precisely when ties to the core metropolis were weakened due to European wars or economic depressions (e.g., Latin American industrialisation during WWI and the 1930s Great Depression).
- **Prescription:** Frank argued that genuine development is impossible within the global capitalist web; peripheral nations must break the chain through socialist revolution and de-linking.

### Fernando Henrique Cardoso: Associated-Dependent Development
Cardoso and Enzo Faletto (*Dependency and Development in Latin America*, 1979) criticised Frank’s thesis as overly rigid and deterministic. Cardoso demonstrated that under contemporary international capitalism, ==Associated-Dependent Development== is possible. Through a **Triple Alliance** between multinational corporations (MNCs), local state apparatuses, and domestic capitalist elites, peripheral and semi-peripheral nations (e.g., Brazil, Mexico, and East Asian Tiger economies) can achieve significant industrial manufacturing, albeit accompanied by persistent domestic inequality and external debt.

## 3. Immanuel Wallerstein’s World-Systems Theory

Moving beyond the nation-state as the unit of analysis, [[thinker:Immanuel Wallerstein]] conceptualised the modern world as a single integrated **World-Economy** bound by a capitalist division of labour.

Wallerstein divided the global system into three structural zones:
1. **Core:** Advanced industrial nations (Western Europe, USA, Japan) enjoying high-technology manufacturing, high-wage skilled labour, and powerful state apparatuses that protect intellectual monopolies.
2. **Periphery:** Subordinate nations supplying agricultural raw materials, cheap labour, and minerals, governed by weak, unstable states prone to external manipulation.
3. **Semi-Periphery:** Intermediate industrialising nations (e.g., India, Brazil, South Africa, South Korea) that serve as a crucial political and economic buffer. They are exploited by the core while simultaneously extracting surplus from the periphery, preventing unified global polarization.
- **Positional Mobility:** Unlike Frank’s static pessimism, Wallerstein recognised that states can achieve upward mobility (e.g., South Korea moving from periphery to core) or suffer downward decline through cyclical Kondratiev waves and strategic state policies.`,
  },
  {
    kind: 'keyTerm',
    term: 'Development of Underdevelopment',
    meaning: 'A.G. Frank’s thesis that Third World poverty is not an original traditional state, but an active historical outcome of capitalist surplus drainage to metropolitan centres.',
  },
  {
    kind: 'keyTerm',
    term: 'Associated-Dependent Development',
    meaning: 'Cardoso’s concept that dependent semi-peripheral economies can achieve industrial growth through a triple alliance of the state, local elites, and multinational capital.',
  },
  {
    kind: 'keyTerm',
    term: 'Semi-Periphery',
    meaning: 'Wallerstein’s intermediate structural zone in the world-economy that acts as a political shock absorber, exploited by the core while exploiting the periphery.',
  },
  {
    kind: 'keyTerm',
    term: 'Capability Approach',
    meaning: 'Amartya Sen’s framework defining development as the expansion of substantive human freedoms and capabilities rather than mere growth in economic output.',
  },
  {
    kind: 'md',
    body: `## 4. Development Planning in India: Evolution and Challenges

Post-independence India pioneered state-led development planning within a democratic framework, evolving across distinct strategic phases:

- **The Nehru-Mahalanobis Strategy (1950s–1980s):** Prioritised heavy capital goods industries, the public sector commanding heights, import substitution, and land reforms to break colonial dependency and achieve self-reliance.
- **Crisis and Liberalisation (1991):** Balance-of-payment crises compelled the shift to Liberalisation, Privatisation, and Globalisation (LPG), curtailing the license raj and integrating India into global commodity chains.
- **NITI Aayog Paradigm (2015–Present):** Replaced the top-down Planning Commission with a bottom-up think tank emphasizing **Cooperative Federalism**, competitive benchmarking, and private-capital synergy.
- **Critical Evaluation:** While development planning built robust scientific institutions (IITs, ISRO, atomic energy) and achieved food self-sufficiency through the Green Revolution, it generated severe regional disparities, neglected foundational public healthcare/schooling (Dreze & Sen), and intensified development-induced displacement.

## 5. Development-Induced Displacement and Sustainable Development

Megaprojects — large dams, open-cast mining corridors, expressways, and Special Economic Zones (SEZs) — have displaced an estimated 60+ million people in independent India, predominantly tribal communities and landless agrarian labourers.

- **Michael Cernea’s Impoverishment Risks and Reconstruction (IRR) Model:** Identifies 8 structural risks in displacement:
  1. *Landlessness:* Loss of productive assets.
  2. *Joblessness:* Loss of wage employment.
  3. *Homelessness:* Loss of physical shelter.
  4. *Marginalisation:* Downward economic and social mobility.
  5. *Food Insecurity:* Nutritional decline.
  6. *Increased Morbidity & Mortality:* Waterborne and psychological diseases.
  7. *Loss of Common Property Resources (CPRs):* Destruction of community forests and grazing lands.
  8. *Social Disarticulation:* Shattering of kinship networks and social capital.

### Sustainable Development: The 2015 UNDP Agenda
The Brundtland Report (1987, *Our Common Future*) conceptualised sustainable development as progress fulfilling current societal requirements while safeguarding the capacity of upcoming generations to satisfy their vital needs. In 2015, the United Nations adopted the **2030 Agenda for Sustainable Development**, articulating **17 Sustainable Development Goals (SDGs)** that replace exploitative extractive development with an integrated triad:
- **Economic Viability:** Ending poverty (SDG 1) and decent work (SDG 8).
- **Social Equity:** Zero hunger (SDG 2), quality education (SDG 4), and gender equality (SDG 5).
- **Ecological Integrity:** Climate action (SDG 13), life below water (SDG 14), and life on land (SDG 15).
[[link:Connect this to Paper 2 Unit 7 on Development Planning and Mixed Economy, and Paper 2 Unit 14 on Crisis of Development: Displacement and Environmental Movements.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Modernisation Perspective',
    rightTitle: 'Dependency & World-Systems Perspective',
    rows: [
      {
        aspect: 'Cause of Poverty',
        left: 'Internal traditional values, lack of capital and fatalistic mindset',
        right: 'External historical extraction, unequal exchange & colonial drain',
      },
      {
        aspect: 'Role of the West',
        left: 'Benevolent mentor supplying technology, capital & institutional aid',
        right: 'Imperial core exploiting peripheral labour and natural resources',
      },
      {
        aspect: 'Prescribed Path',
        left: 'Adopting Western institutional forms, open trade & mass schooling',
        right: 'Autonomous industrial policy, regional alliances or socialist de-linking',
      },
      {
        aspect: 'View of Capitalism',
        left: 'The engine of rational efficiency, mass prosperity & democracy',
        right: 'Polarising world-economy producing wealth at core and misery at periphery',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Contemporary Relevance of Dependency in the Digital Age',
    body: 'In 2021 and 2020, UPSC asked whether dependency theory applies today. Highlight Neo-Dependency: Southern nations export raw data and low-cost gig labour while Northern Big Tech monopolies (Google, Microsoft, OpenAI) retain intellectual property, algorithms, and high-value cloud infrastructure.',
  },
  {
    kind: 'answerBox',
    intro: 'Core elements of Sustainable Development as articulated in UNDP’s 2015 SDG Framework:',
    points: [
      'Five Pillars (5 Ps): People (eradicating poverty and hunger), Planet (protecting climate and marine ecosystems), Prosperity (inclusive economic growth), Peace (just and transparent institutions), and Partnership (global cooperation).',
      'Universality and Indivisibility: Unlike the MDGs targeted solely at developing nations, the 17 SDGs apply universally to both global North and South, recognising that climate breakdown and inequality are indivisible global challenges.',
      'Leave No One Behind (LNOB): Prioritises the most marginalised social strata (women, persons with disabilities, indigenous tribes) through disaggregated data and targeted welfare delivery.',
      'Integration of Planetary Boundaries: Explicit recognition that economic growth must respect biological carrying capacities (SDGs 13, 14, 15).',
      'Democratisation of Science & Technology: Transfer of green technologies, climate finance, and open access to vaccines and agricultural innovations to prevent techno-apartheid.',
    ],
    conclusion: 'Sustainable development redefines progress from unbridled material extraction to equitable, regenerative human-ecological flourishing.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Development and dependency theories examine how global economic arrangements shape social change in post-colonial nations. Modernisation theorists (Rostow, Parsons, Lerner, Inkeles) viewed development as an evolutionary progression from traditional backwardness to Western industrial capitalism. Dependency theorists (Prebisch, Baran, A.G. Frank, Cardoso) dismantled this view, proving that Western development and Third World underdevelopment are interdependent outcomes of imperialist surplus extraction. Immanuel Wallerstein expanded this into World-Systems analysis, dividing the globe into Core, Semi-Periphery, and Periphery. In response to development-induced displacement (Cernea IRR model) and ecological crises, contemporary sociology champions Amartya Sen’s Capability Approach and the UNDP 2015 Sustainable Development Goals (SDGs).',
  mindMap,
  sections,
}
