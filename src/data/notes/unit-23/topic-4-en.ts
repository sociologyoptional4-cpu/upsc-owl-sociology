import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic4EnMindMap: MindMapData = {
  title: 'Topic 4 · Environmental Movements in Modern India',
  center: 'Environmental Movements',
  subtitle: 'Environmentalism of the Poor • Three Strands • Chipko & Ecofeminism • Extractive Development Triangle',
  branches: [
    {
      title: 'Environmentalism of the Poor',
      color: 'lavender',
      thinkers: ['Ramachandra Guha', 'Joan Martinez-Alier', 'Ronald Inglehart', 'Madhav Gadgil'],
      points: [
        'Inglehart critique: rejects post-materialist leisure conservation of affluent Western nations',
        'Material survival: ecological conflicts are struggles over basic livelihood (water, forest, land)',
        'Biomass economy: rural subalterns depend directly on natural ecosystems for daily sustenance',
        'State extractivism: colonial and post-colonial state diverting resources to urban-industrial elites',
      ],
    },
    {
      title: 'Three Ideological Strands (Guha & Gadgil)',
      color: 'yellow',
      thinkers: ['Ramachandra Guha', 'Madhav Gadgil', 'Sunderlal Bahuguna', 'Medha Patkar'],
      points: [
        'Crusading Gandhians: moral critique of industrialism, non-violent satyagraha, village self-reliance',
        'Ecological Marxists: class conflict, capitalist accumulation, militant mobilization against corporate loot',
        'Appropriate Technologists: intermediate eco-technology, decentralization, community resource governance',
        'Syncretic blending: grassroots movements combining Gandhian ethics with Marxist class struggle',
      ],
    },
    {
      title: 'Chipko & Gender: Ecofeminism Debates',
      color: 'mint',
      thinkers: ['Vandana Shiva', 'Bina Agarwal', 'Chandi Prasad Bhatt', 'Gaura Devi'],
      points: [
        'Chipko (1973): Himalayan peasant women hugging trees to protect hill ecology and local fuel/fodder',
        'Vandana Shiva’s ecofeminism: biological and spiritual connection between *Prakriti* and female nurture',
        'Bina Agarwal’s critique: "Feminist Environmentalism" rooted in gendered division of labour, not biology',
        'Global relevance: localized Gandhian conservation as an ethical antidote to global climate crisis',
      ],
    },
    {
      title: 'The Extractive Development Triangle',
      color: 'pink',
      thinkers: ['Amita Baviskar', 'Walter Fernandes', 'Nandini Sundar', 'Felix Padel'],
      points: [
        'Extractive triangle: state-corporate nexus, resource dispossession, and indigenous identity',
        'Niyamgiri agitation: Dongria Kondh tribals asserting sacred mountain rights against Vedanta mining',
        'Hasdeo Arand: central Indian adivasi resistance protecting fragile biodiversity against coal blocks',
        'Narmada Bachao Andolan: challenging megadams, development displacement, and ecological refugees',
      ],
    },
  ],
}

export const topic4EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-02-ecology-identity-movements.webp',
    alt: 'P2 Unit 13 infographic: Environmental & Identity Movements — Environmentalism of the Poor & Ethno-Identity Struggles',
    caption:
      'Indian environmental movements represent an "Environmentalism of the Poor", where ecological defense is inseparable from material survival, forest rights, and indigenous cultural identity.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 02',
  },
  {
    kind: 'md',
    body: `## Environmentalism of the Poor vs Western Post-Materialism

Environmental sociology in the Global South departs radically from Western paradigms of ecological activism. In Western sociology, [[thinker:Ronald Inglehart]]’s theory of **Post-Materialism** posits that environmentalism emerges only after societies achieve high levels of industrial wealth, allowing citizens to prioritize aesthetic quality of life, leisure conservation, and wilderness preservation (e.g., bird watching, eco-tourism).

In sharp contrast, sociologists [[thinker:Ramachandra Guha]] and [[thinker:Joan Martinez-Alier]] formulated the concept of ==Environmentalism of the Poor==:
- In India, environmental movements are not leisure pursuits; they are fierce **struggles for material survival, livelihood, and human dignity**.
- The vast majority of India’s rural population—peasants, pastoralists, artisanal fishers, and tribal forest-dwellers—live in a **biomass-based subsistence economy**. Their daily physical sustenance depends directly on access to common property resources (*jal, jangal, jameen*).
- When the state or private corporations divert rivers for mega-dams, clear forests for bauxite or coal mining, or privatize coastal waters for commercial trawlers, they do not just alter the landscape—they evict subaltern communities from their very means of life, turning them into destitute **ecological refugees**.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Western Post-Materialist Environmentalism',
    rightTitle: 'Indian Environmentalism of the Poor',
    rows: [
      {
        aspect: 'Social Catalyst',
        left: 'Affluence, post-industrial leisure, aesthetic values (Inglehart).',
        right: 'Resource scarcity, existential threat to daily livelihoods (Guha).',
      },
      {
        aspect: 'Primary Focus',
        left: 'Preserving pristine wilderness ("parks without people"), carbon footprints.',
        right: 'Securing access to common property: water, fuel, fodder, and fertile soil.',
      },
      {
        aspect: 'Adversary',
        left: 'Consumer pollution, greenhouse gas emissions, general industrial waste.',
        right: 'State-corporate extractivism, top-down development projects, land grab.',
      },
      {
        aspect: 'Social Base',
        left: 'Educated urban middle classes, scientists, transnational NGOs.',
        right: 'Adivasis, peasant women, marginal farmers, artisanal fisherfolk.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Ideological Strands of Indian Environmentalism: Guha and Gadgil

In their influential work *This Fissured Land: An Ecological History of India*, [[thinker:Madhav Gadgil]] and [[thinker:Ramachandra Guha]] categorized the ideological currents of the Indian environmental movement into three major philosophical strands.

### The Three Ideological Strands
1. **Crusading Gandhians**:
   - Led by figures like [[thinker:Sunderlal Bahuguna]] and Chandi Prasad Bhatt.
   - **Core Philosophy**: Rejects Western industrialism and consumer capitalism as morally bankrupt and ecologically destructive. Draws upon traditional Hindu and Gandhian moral idioms of self-restraint (*aparigraha*), non-violence, and village self-reliance (*gram swaraj*).
   - **Methods**: Non-violent satyagraha, fasts, padayatras, and appeal to moral conscience.
2. **Ecological Marxists (Eco-Socialists)**:
   - Led by grassroots activists like Medha Patkar (*Narmada Bachao Andolan*), Shankar Guha Niyogi (*Chhattisgarh Mukti Morcha*), and A.K. Roy.
   - **Core Philosophy**: Views environmental destruction as an inevitable consequence of capitalist primitive accumulation and bourgeois class exploitation. Argues that ecological protection without structural wealth redistribution is a bourgeois sham.
   - **Methods**: Militant collective bargaining, mass rallies, strikes, and direct confrontation with the state-corporate nexus.
3. **Appropriate Technologists**:
   - Championed by institutions like the Centre for Science and Environment (CSE, founded by Anil Agarwal and Sunita Narain).
   - **Core Philosophy**: Avoids both romantic anti-industrialism and dogmatic Marxism. Advocates for pragmatic, decentralized, intermediate technologies (e.g., traditional rainwater harvesting, micro-hydel, community forestry) that combine modern scientific data with traditional community wisdom.
   - **Methods**: Policy research, public interest litigation (PIL), participatory resource mapping, and advocacy.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Synthesis: Grassroots Syncretism',
    body: 'In examination answers, emphasize that on the ground, movements rarely fit purely into one strand. For instance, the Narmada Bachao Andolan brilliantly blended Gandhian non-violent dharnas (Jal Satyagraha) with Marxist class critique of corporate contractors and CSE-style technical water audits.',
  },
  {
    kind: 'md',
    body: `## Chipko, Ecofeminism, and the Feminist Environmentalism Debate

The **Chipko Movement (1973)** in the Garhwal Himalayas remains the global symbol of indigenous ecological resistance. Rural peasant women, led by Gaura Devi, famously hugged trees in Reni village to prevent state-licensed commercial loggers from felling the forest.

While the movement achieved historic success—prompting a 15-year ban on commercial felling above 1,000 meters in Uttar Pradesh hills—it ignited an intense theoretical debate within feminist sociology.

### Vandana Shiva’s Ecofeminism
In *Staying Alive: Women, Ecology and Survival in India*, physicist and activist [[thinker:Vandana Shiva]] argued that:
- Western reductionist science and patriarchal developmental models carry out violence against both Nature (*Prakriti*) and women.
- Women possess an innate, biological, and cosmic affinity with Nature because both are nurturing, life-giving principles.
- In Chipko, women mobilized naturally because their feminine essence rebelled against masculine industrial forestry that valued dead timber over living soil and water.

### Bina Agarwal’s Critique: Feminist Environmentalism
Economist and sociologist [[thinker:Bina Agarwal]] rejected Shiva’s ecofeminism as **essentialist, ahistorical, and upper-caste**:
1. **Material Division of Labour, Not Biology**: Agarwal argued that hill women hugged trees not because of mystical cosmic feminine traits, but because of the harsh **material division of labour**. Men had migrated for cash jobs, leaving women responsible for collecting fuel, fodder, and drinking water. Deforestation doubled their daily physical toil.
2. **Exclusion of Subaltern Realities**: Shiva’s formulation borrowed heavily from Brahmanical cosmology (*Prakriti/Purusha*), ignoring that lower-caste and tribal women relate to natural resources through concrete property relations and wage labour rather than Vedic metaphysics.
3. **Feminist Environmentalism**: Agarwal advocated for an analytical paradigm where women’s environmental struggles are understood as responses to specific material property rights, gendered work allocations, and state policy distortions.`,
  },
  {
    kind: 'md',
    body: `## The Extractive Development Triangle: Tribal Identity and Environmental Justice

In contemporary 21st-century India, environmental conflicts have intensified around what sociologists term the ==Extractive Development Triangle==: the collision between **state-corporate extractivism**, **environmental degradation**, and **adivasi cultural survival**.

Sociologists [[thinker:Amita Baviskar]] (*In the Belly of the River*) and Walter Fernandes document that Scheduled Tribes constitute roughly **8.6% of India’s population but account for over 40% of all development-displaced persons**.

### Case Studies in Subaltern Ecological Resistance
- **Niyamgiri Movement (Odisha)**: The Dongria Kondh adivasis waged a historic battle against the state-sponsored bauxite mining project of multinational Vedanta on the sacred Niyamgiri hills. In 2013, the Supreme Court delivered a landmark ruling directing that the religious and cultural rights of the tribals be decided by local **Gram Sabhas**. In unanimous resolutions across 12 tribal villages, the Dongria Kondh rejected mining, asserting that their supreme deity *Niyam Raja* resides in the sacred mountain ecology.
- **Hasdeo Arand Movement (Chhattisgarh)**: Known as the "lungs of Central India," Hasdeo Arand represents an ongoing clash where indigenous Gond tribals are resisting open-cast coal block allocations. Protesters argue that coal mining destroys elephant corridors, contaminates water tables, and violates the Forest Rights Act (FRA 2006) and PESA (1996).`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: '1. Resource Enclosure',
        text: 'State leases mineral-rich forest land to corporate conglomerates for mining or mega-dams.',
      },
      {
        label: '2. Ecological Rupture',
        text: 'Destruction of customary commons, deforestation, water contamination, and forced displacement.',
      },
      {
        label: '3. Subaltern Mobilization',
        text: 'Adivasis and peasants mobilize using Gandhian satyagraha, cultural identity, and padayatras.',
      },
      {
        label: '4. Legal Assertion',
        text: 'Deploying constitutional rights via FRA 2006, PESA, and Gram Sabha self-determination.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Environmentalism of the Poor (Guha & Martinez-Alier)',
    meaning:
      'A sociological concept demonstrating that Southern environmental movements are material struggles over basic survival and natural resources, distinct from affluent Western leisure conservation.',
  },
  {
    kind: 'keyTerm',
    term: 'Ecofeminism vs Feminist Environmentalism',
    meaning:
      'The theoretical debate where Vandana Shiva posits a cosmic/biological bond between women and nature, while Bina Agarwal demonstrates that women’s environmental action stems from the material gendered division of labour.',
  },
  {
    kind: 'keyTerm',
    term: 'Ecological Refugees',
    meaning:
      'Vulnerable communities (primarily adivasis and small peasants) forcibly evicted from their ancestral lands by large dams, mines, and industrial corridors without viable rehabilitation.',
  },
  {
    kind: 'keyTerm',
    term: 'Extractive Triangle',
    meaning:
      'The institutional collision in resource-rich subaltern belts where state power and corporate capital extract minerals, causing ecological destruction and threatening indigenous survival.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Linking Climate Ethics to Chipko',
    body: 'In questions asking about the contemporary relevance of Chipko in the era of global climate change, cite its localized ecological stewardship, decentralized village biomass management, and ethical restraint as a grassroots antidote to carbon-heavy corporate development.',
  },
  {
    kind: 'answerBox',
    intro:
      'Comprehensive answer framework for analyzing the extractive development triangle and Indian environmentalism:',
    points: [
      'Material basis: Indian environmentalism is an "Environmentalism of the Poor" (Guha & Martinez-Alier), fighting for basic livelihood (jal, jangal, jameen) rather than Western post-materialist leisure conservation.',
      'Ideological currents: Gadgil and Guha’s three strands—Crusading Gandhians (moral self-restraint), Ecological Marxists (class conflict against extractivism), and Appropriate Technologists (pragmatic intermediate science).',
      'Ecological gender dynamics: Chipko demonstrated female grassroots agency, which Vandana Shiva viewed as essentialist ecofeminism and Bina Agarwal grounded in the material gendered division of labour.',
      'The extractive triangle: The nexus of state-corporate mineral exploitation, environmental destruction, and tribal dispossession (as documented by Amita Baviskar and Walter Fernandes).',
      'Constitutional resistance: Subaltern communities deploy statutory protections—PESA 1996, FRA 2006, and Gram Sabha resolutions (e.g., Niyamgiri)—to resist ecological enclosures.',
    ],
    conclusion:
      'Indian environmental movements demonstrate that ecological sustainability is inseparable from democratic decentralization, subaltern livelihood security, and indigenous cultural self-determination.',
  },
]
