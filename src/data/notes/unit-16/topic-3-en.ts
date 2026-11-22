import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Examines the historical genesis, structural composition, and sociopolitical role of the Indian middle class. Contrasts the Nehruvian public-sector middle class with the post-1991 neoliberal “New Middle Class”, evaluates André Béteille’s analysis of its internal heterogeneity and cultural contradictions, explores the shift toward consumerist citizenship through Leela Fernandes and Pavan Varma, and assesses its ambivalent impact on Indian democracy and development.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 3 — Middle Classes in India',
  center: 'Middle Classes in India',
  subtitle: 'Colonial Genesis • Nehruvian Bureaucrats • Neoliberal NMC • Democratic Ambivalence',
  branches: [
    {
      title: '1. Genesis & Historical Evolution',
      color: 'lavender',
      thinkers: ['B.B. Misra', 'A.R. Desai', 'Yogendra Singh'],
      points: [
        'Colonial administrative creation: English-educated babus, lawyers, teachers, and clerks',
        'Nehruvian developmental era: Public sector engineers, bank managers, and state bureaucrats',
        'Ethos of ascetic nation-building: Modest lifestyles, job security, and faith in state-led planning',
        'Post-1991 market turn: Private corporate executives, IT technocrats, and media professionals',
      ],
    },
    {
      title: '2. Béteille on Heterogeneity & Contradictions',
      color: 'yellow',
      thinkers: ['André Béteille', 'Dipankar Gupta', 'Max Weber'],
      points: [
        'Extreme internal stratification: Upper managerial elite vs. lower clerical/sales functionaries',
        'Cross-cutting fractures: Linguistic, religious, and emerging Dalit/OBC middle-class cohorts',
        'Transitional hypocrisy: Public condemnation of corruption paired with private kinship patronage',
        'Superficial emancipation: Educated professional women constrained by domestic patriarchy',
      ],
    },
    {
      title: '3. The Post-1991 "New Middle Class" (NMC)',
      color: 'mint',
      thinkers: ['Leela Fernandes', 'Pavan Varma', 'Amita Baviskar'],
      points: [
        'Consumerist citizenship: Identity defined through shopping malls, branded goods, and foreign travel',
        'Gated communities: Spatial secession from the city into privatized islands of affluence',
        'Politics of forgetting (Fernandes): Active expulsion of urban informal poor and slum dwellers',
        'Pavan Varma’s critique: Collapse of civic idealism into hyper-individualistic consumption',
      ],
    },
    {
      title: '4. Role in Democracy & Development',
      color: 'pink',
      thinkers: ['Christophe Jaffrelot', 'Partha Chatterjee', 'Sudipta Kaviraj'],
      points: [
        'Engine of services growth: Driving high-tech services, knowledge hubs, and domestic aggregate demand',
        'Civil society activism: Resident Welfare Associations (RWAs) and anti-corruption mobilizations',
        'Anti-populist biases: Disdain for democratic reservations, subaltern assertion, and welfare subsidies',
        'Electoral paradox: Vocal public influence and media dominance alongside lower voter turnout',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u06-01-indian-class-pyramid.webp',
    alt: 'Social classes in India depicting the middle-class tier situated between capitalists and the subaltern masses',
    caption:
      'Middle-Class Stratification: Situated between large corporate capitalists and the agrarian/industrial working poor, the middle class acts as both driver of consumption and arbiter of cultural hegemony.',
  },
  {
    kind: 'md',
    body: `## The Indian Middle Class: Concept and Historical Genesis

The middle class in India is a multifaceted and internally fractured social category. Unlike the Western bourgeoisie, which arose out of the industrial revolution and indigenous capitalist enterprise, the Indian middle class was originally an administrative and educational creation of British colonial rule. It expanded through state employment in independent India and underwent a dramatic cultural and economic metamorphosis following the 1991 economic reforms.

In his classic historical study *The Indian Middle Classes: Their Growth in Modern Times* (1961), historian [[thinker:B.B. Misra]] demonstrated that the colonial state required an army of English-educated intermediaries to run its administrative machinery, judiciary, and revenue departments. This created a Western-educated professional middle class dominated by upper castes (Brahmins, Kayasthas, Banias), who staffed the civil service, legal courts, universities, and press. While this class spearheaded the anti-colonial national movement under Gandhi and Nehru, it remained sociologically detached from the rural masses.

Following independence in 1947, Prime Minister Jawaharlal Nehru’s commitment to state-led socialist planning, import substitution, and public sector industrialization nurtured what sociologists call the **Old Middle Class**. This cohort was characterized by:
1. Direct or indirect employment in the state machinery, PSUs, public banks, and nationalized educational institutions.
2. An ethos of austere developmental patriotism, job security, fixed pensions, and modest consumer aspirations.
3. High social and cultural capital derived from bureaucratic authority rather than conspicuous private wealth.

| Middle Class Dimension | Old Nehruvian Middle Class (1950–1990) | Post-1991 New Middle Class (NMC) |
| :--- | :--- | :--- |
| **Primary Employment** | Civil services, Public Sector Undertakings (PSUs), government colleges, nationalized banks | Multinational corporations (MNCs), IT/ITeS services, finance, media, and private entrepreneurship |
| **Economic Ethos** | Modest savings, long-term security, public transport, and state subsidized services | Conspicuous consumption, credit-card lifestyle, private healthcare, and gated enclave residences |
| **Attitude to State** | Viewed the state as the benevolent guardian, employer, and provider of public goods | Views the state with suspicion; favors deregulation, privatization, and low corporate taxation |
| **Civic Mobilization** | Trade union affiliations, bureaucratic associations, and secular developmentalism | Resident Welfare Associations (RWAs), anti-corruption movements, and urban clean-up campaigns |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Old Middle Class (Pre-1991)',
    rightTitle: 'New Middle Class (Post-1991)',
    rows: [
      {
        aspect: 'Economic Base',
        left: 'Salaried public sector employees, teachers, railway/bank clerks, and defense staff.',
        right: 'Private sector corporate managers, IT software engineers, consultants, and media elites.',
      },
      {
        aspect: 'Cultural Outlook',
        left: 'Frugality, state-dependent welfare, high cultural capital, and traditional literary tastes.',
        right: 'Hedonistic consumerism, brand consciousness, international tourism, and Western lifestyles.',
      },
      {
        aspect: 'Spatial Habitat',
        left: 'Government housing colonies (e.g. CPWD quarters), municipal townships, and open urban mohallas.',
        right: 'Private gated communities with private security, dedicated power backup, and clubhouses.',
      },
      {
        aspect: 'Social Vision',
        left: 'Nation-building ethos, support for public sector expansion, and constitutional secularism.',
        right: 'Meritocratic individualism, disdain for affirmative action (reservations), and market hegemony.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### André Béteille on Heterogeneity and Cultural Contradictions

Sociologist [[thinker:André Béteille]] provides the most rigorous critique of the illusion of a homogeneous Indian middle class. In essays collected in *Antinomies of Society* (2000) and *The Idea of Natural Inequality*, Béteille emphasizes that the Indian middle class is characterized by deeper internal differentiation than its Western counterparts.

#### 1. Internal Fractures along Income, Status, and Caste
Béteille demonstrates that the middle class is not a single community of interest:
- **Income and Occupational Stratification**: It spans top-tier corporate CEOs, judges, and senior IAS officers earning lucrative salaries at one end, and low-paid primary school teachers, retail clerks, and municipal bill collectors at the other.
- **Linguistic and Cultural Cleavages**: An English-speaking, cosmopolitan upper-middle-class elite commands entry into global corporations and prestigious institutions, while a vernacular-educated lower-middle class remains confined to provincial bureaucracy and regional markets.
- **The Caste-Class Dynamic**: While the upper middle class was historically monopolized by Savarna Hindus, affirmative action (Mandal Commission reservations in 1990) facilitated the entry of Other Backward Classes (OBCs) and Scheduled Castes into state jobs, creating a contested, diverse middle-class landscape.

#### 2. Cultural Contradictions and the "Transitional" Character
In Western sociology, the middle class was historically celebrated as the "harbinger of modernity," championing universalism, individual merit, and the rule of law. However, Béteille argues that the Indian middle class occupies a contradictory, **transitional** state:
- **Universalist Discourse vs. Particularist Practice**: Middle-class citizens loudly condemn corruption, bribery, and nepotism in television debates, yet actively deploy caste networks, kinship connections, and personal influence (*sifarish*) to secure school admissions, hospital beds, and government jobs for family members.
- **Superficial Emancipation of Women**: Béteille notes that the emancipation of middle-class women is largely superficial. While women acquire university degrees, enter corporate workplaces, and adopt modern attire, their personal autonomy remains heavily constrained by family patriarchy, mandatory arranged endogamous marriage, and the unequal domestic burden of caregiving.

[[eg:A middle-class professional who vigorously protests against government corruption at Jantar Mantar simultaneously pays an illegal cash donation (capitation fee) to secure a private medical seat for their child.]]

[[link:Paper 1 Parsons & Merton ↔ Paper 2 Middle Class: Béteille’s demonstration of public universalism vs. private particularism mirrors Talcott Parsons’ pattern variables (Universalism vs. Particularism).]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Colonial Babudom',
        text: 'English-educated upper-caste intermediaries serving British revenue and judicial apparatus.',
      },
      {
        label: 'Nehruvian State Era',
        text: 'Expansion of public sector, universities, and civil services; modest lifestyle and security.',
      },
      {
        label: '1991 Neoliberal Rupture',
        text: 'MNC explosion, consumer credit, private media, and the rise of the assertive New Middle Class.',
      },
      {
        label: 'Gated Cosmopolitanism',
        text: 'Privatized enclaves, civil society RWAs, and exclusionary environmentalist urban politics.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### The Post-Liberalization "New Middle Class" (NMC)

The 1991 New Economic Policy represented a tectonic watershed for middle-class life-chances, consumption patterns, and political ideology. Sociologists [[thinker:Leela Fernandes]] (*India’s New Middle Class: Democratic Politics in an Era of Economic Reform*, 2006) and [[thinker:Pavan Varma]] (*The Great Indian Middle Class*, 1998) have analyzed this transformation:

1. **Consumerist Citizenship**: As Fernandes argues, the New Middle Class (NMC) defines its social citizenship not through political participation or civic solidarity, but through practices of ==Conspicuous Consumption==. Owning luxury SUVs, international holiday travel, branded smartphones, and dining in upscale restaurants became vital cultural markers of having "arrived."
2. **Spatial Secession into Gated Enclaves**: Fleeing decaying municipal infrastructure, the NMC retreats into private gated townships (e.g. DLF CyberCity in Gurgaon, Hiranandani in Mumbai, Whitefield in Bengaluru) featuring private security, private water filtration, dedicated power generators, and exclusive clubhouses. This constitutes what sociologists call spatial apartheid.
3. **The "Politics of Forgetting" and Urban Cleansing**: Fernandes demonstrates that the NMC asserts its hegemony over urban spaces by actively erasing the urban informal working class. Through Resident Welfare Associations (RWAs) and judicial Public Interest Litigations (PILs), the middle class demands the eviction of street vendors, demolition of informal settlements, and privatization of public parks in the name of "clean and green" world-class cities ([[thinker:Amita Baviskar]]).

### Role of the Middle Class in India's Democracy and Development

The relationship between the Indian middle class, democratic institutions, and economic development is deeply ambivalent:

#### As an Engine of Economic Growth and Innovation
The Indian middle class has provided the human capital driving India’s service-led economic boom. It has supplied the software engineers, pharmaceutical scientists, financial analysts, and entrepreneurs who positioned India as an IT superpower. Its expanding purchasing power sustains domestic aggregate demand, attracting global manufacturing and investment.

#### Ambivalence in Democratic Politics
- **Civil Society vs. Political Society**: As political theorist [[thinker:Partha Chatterjee]] notes, the middle class populates "Civil Society"—formal NGOs, RWAs, courts, and English media—advancing rights-based governance and anti-corruption campaigns (e.g., the 2011 India Against Corruption movement). However, it regards "Political Society"—the electoral mobilization of the subaltern masses through caste coalitions and welfare subsidies—as vulgar and corrupt.
- **Anti-Reservation and Meritocratic Hegemony**: The middle class champions an ideology of "pure merit," using it as a veiled justification to oppose constitutional reservations for SCs, STs, and OBCs, while ignoring how its own success rests on accumulated caste cultural capital.
- **Disillusionment and Low Voter Turnout**: Despite dominating television discourse and policy drafting, urban middle-class polling booths consistently register lower voter turnouts than impoverished rural and slum constituencies, reflecting a deep-seated cynicism toward electoral politics.

[[eg:During municipal elections in Bengaluru or South Delhi, voter turnout in upscale gated communities often hovers around 40–45%, while neighboring informal settlements record turnouts exceeding 70%.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'New Middle Class (NMC)',
    meaning:
      'The post-1991 generation of corporate, IT, and financial professionals characterized by conspicuous consumption, globalized lifestyles, and faith in market deregulation.',
  },
  {
    kind: 'keyTerm',
    term: 'Superficial Emancipation',
    meaning:
      'André Béteille’s critique of the status of middle-class Indian women, whose modern education and professional jobs coexist with patriarchal domestic subjugation.',
  },
  {
    kind: 'keyTerm',
    term: 'Politics of Forgetting',
    meaning:
      'Leela Fernandes’s concept describing how the urban new middle class reclaims municipal spaces by forcibly clearing informal street vendors and slums from public view.',
  },
  {
    kind: 'keyTerm',
    term: 'Consumerist Citizenship',
    meaning:
      'The sociological shift wherein an individual’s identity, social worth, and national belonging are validated through market purchasing power rather than civic engagement.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Middle Class and Subaltern Welfare Debates',
    body:
      'In UPSC answers, highlight the sharp ideological tension between the middle class’s condemnation of pro-poor welfare schemes as "freebies" (revadi culture) versus its enthusiastic support for corporate tax cuts and state-subsidized urban flyovers and airports.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid Treating the Middle Class as a Single Caste Group',
    body:
      'Do not assume the middle class is exclusively upper-caste today. Ensure you mention the significant rise of the "Dalit and OBC middle class" resulting from Mandal reservations and public education.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Béteille’s Core Paradox',
    body:
      'The Indian middle class displays public universalism (speaking against nepotism in webinars and exams) while practicing private particularism (leveraging kinship and caste networks for personal advancement).',
  },
  {
    kind: 'answerBox',
    intro:
      'A comprehensive answer on the salient features and role of the middle class in India’s democracy and development must balance economic dynamism with sociological critiques:',
    points: [
      'Historical transition from the colonial English-educated bureaucracy and Nehruvian PSU technocracy to the post-1991 private corporate and IT elite.',
      'Profound internal heterogeneity (André Béteille) fractured across income levels, language, region, and the emergence of Dalit/OBC middle classes.',
      'Cultural contradictions characterized by transitional hypocrisy: preaching rule of law while utilizing informal family influence and patriarchal control.',
      'Adoption of consumerist citizenship and spatial secession into private gated communities, divorcing the middle class from shared public infrastructure.',
      'Pioneering role as an engine of service-sector economic growth, IT export competitiveness, and managerial innovation.',
      'Democratic ambivalence manifested in high civil society activism (RWAs, anti-corruption PILs) alongside low electoral turnout and hostility toward subaltern welfare politics.',
    ],
    conclusion:
      'The Indian middle class remains a contradictory social force: indispensable as a technological and entrepreneurial catalyst for economic development, yet politically vulnerable to insular elitism and social detachment from the subaltern majority.',
  },
]

export const topic3En = { summary, mindMap, sections }
