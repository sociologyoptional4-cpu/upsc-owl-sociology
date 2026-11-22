import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.1 — Social Background of Indian Nationalism',
  center: 'Social Background of Indian Nationalism',
  subtitle: 'Colonial Unification • Desai’s Five Phases • Subaltern & Dalit Contestation',
  branches: [
    {
      title: 'Colonial Modernity & Infrastructure',
      color: 'lavender',
      thinkers: ['A.R. Desai', 'Benedict Anderson', 'Bernard Cohn'],
      points: [
        'Railways (1853), telegraph, and postal networks broke regional isolation',
        'Vernacular and English press created an imagined national community',
        'Colonial state codified caste and religion, constructing traditionalism',
        'English education produced modern bourgeois intelligentsia and lawyers',
      ],
    },
    {
      title: 'Desai’s Historical Materialism',
      color: 'yellow',
      thinkers: ['A.R. Desai', 'Karl Marx'],
      points: [
        'Materialist thesis: new classes emerged from colonial economic disruptions',
        'Phase 1–2: Liberal intelligentsia and emerging industrial bourgeoisie (INC 1885)',
        'Phase 3–4: Militant Swadeshi middle class expanded to Gandhian mass peasantry',
        'Phase 5: Post-1934 radical class polarisation, working-class unions, and communalism',
      ],
    },
    {
      title: 'Subaltern & Anti-Caste Critiques',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Ranajit Guha', 'Partha Chatterjee'],
      points: [
        'Ranajit Guha: Elite historiography ignored autonomous peasant and tribal agency',
        'Ambedkar: Swaraj without social democracy means Brahmin-bourgeois hegemony',
        'Non-Brahmin assertions (Periyar, Phule) challenged upper-caste nationalism',
        'Subaltern consciousness operated through negation, solidarity, and direct rebellion',
      ],
    },
    {
      title: 'Exam Themes & Historiographical Debates',
      color: 'pink',
      thinkers: ['Nicholas Dirks', 'Sumit Sarkar', 'Bipan Chandra'],
      points: [
        'Cambridge School (Seal, Gallagher) reduced nationalism to factional elite patronage',
        'Marxist school (Desai, Dutt) spotlighted contradictory bourgeois leadership',
        'Nationalist school (Chandra) emphasised anti-imperialist pan-Indian integration',
        'Constructed tradition: Census (Risley 1901) and ethnographic surveys fixed caste identities',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u02-01-colonial-modernization-chain.webp',
    alt: 'P2 Unit 2 infographic: Colonialism & Indian Modernization — Colonial Impact & Yogendra Singh Tradition-Modernity',
    caption:
      'Colonial administrative unification, modern transport, and capitalist property relations unintentionally laid the social groundwork for Indian nationalism.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Was the Social Background of Indian Nationalism?

Indian nationalism did not appear out of thin air, nor was it merely a romantic revival of ancient cultural pride. Before British rule, the subcontinent was a patchwork of diverse kingdoms, self-sufficient village communities, and localized identities where people identified primarily by caste, lineage, language, or religious sect. The rise of ==Indian nationalism== was a complex historical and sociological process wherein diverse social classes and communities gradually recognized a common adversary in British colonialism and forged a collective political identity.

Paradoxically, the material and administrative mechanisms introduced by the British to exploit India laid the very foundation for anti-colonial unity. When the colonial state laid railway tracks, set up printing presses, introduced uniform criminal law, and opened English-medium universities, its goal was efficient extraction and administrative control. Yet these exact tools enabled Indians across provinces to communicate, share grievances, and imagine themselves as one nation. [[trap:Nationalism in India was neither an elite gift from Western education alone, nor a spontaneous unified awakening of the entire population at once; it was an uneven, class-differentiated social process.]]

## Material Transformation: Infrastructure, Print Media, and Education

British rule dismantled India's pre-capitalist agrarian isolation through three powerful institutional interventions:

### 1. Modern Transport and Communication Networks
The introduction of the Indian Railways in 1853, alongside the uniform postal and electric telegraph systems, physically bridged the vast distances between Indian regions. For millennia, physical isolation had reinforced local social rigidities. The train compartment forced people of different castes, regions, and faiths to sit side by side, creating what sociologists call physical and ritual desegregation. [[eg:When a Bengali civil servant, a Punjabi merchant, and a Tamil clerk travelled in the same third-class rail compartment, local caste purity rules collapsed under the sheer pressure of modern transit.]]

### 2. Print Media and the Vernacular Public Sphere
Political scientist [[thinker:Benedict Anderson]] highlighted that modern nations are ==imagined communities== forged through print-capitalism. In India, vernacular and English newspapers—such as Bal Gangadhar Tilak's *Kesari* and *Mahratta*, or Surendranath Banerjee's *The Bengalee*—allowed citizens in Madras to read about agrarian distress in Punjab on the same morning. Print created a unified discursive field where colonial exploitation could be systematically analyzed and shared across linguistic boundaries.

### 3. English Education and the New Intelligentsia
Macaulay’s 1835 Minute on Education sought an indigenous bureaucratic layer culturally anglicised across tastes, outlooks, and cognitive dispositions to staff subaltern colonial posts. Instead, Western education paradoxically exposed Indian youth to Enlightenment philosophies of liberty, equality, and national self-determination. Thinkers like Raja Rammohan Roy, Dadabhai Naoroji, and later M.K. Gandhi turned the colonizer's political language against colonial subjugation itself.

## A.R. Desai's Marxist Framework: Five Dialectical Phases

In his pioneering work *Social Background of Indian Nationalism* (1948), Marxist sociologist [[thinker:A.R. Desai]] argued that nationalism was the political expression of new social classes born out of colonial capitalist transformation. Desai rejected both the romantic nationalist view and the colonial view, formulating a five-phase dialectical trajectory:

| Phase | Time Period | Leading Social Class Base | Ideological & Political Character |
| --- | --- | --- | --- |
| Phase 1 | Early 19th Century to 1885 | Narrow Westernized intelligentsia | Pioneered by Raja Rammohan Roy; liberal reformism, faith in British justice |
| Phase 2 | 1885 to 1905 | Modern bourgeois intelligentsia & professional elite | Formation of Indian National Congress (1885); constitutional prayers and petitions |
| Phase 3 | 1905 to 1918 | Lower middle class, students, and urban youth | Swadeshi movement, militant nationalism (Lal-Bal-Pal), boycott of foreign goods |
| Phase 4 | 1918 to 1934 | Broad peasant masses and working-class base | Gandhian mass mobilizations (Non-Cooperation, Civil Disobedience); capitalist hegemony |
| Phase 5 | 1934 to 1947 | Polarized classes: trade unions, socialists, vs capitalists | Growth of radical socialist-communist currents alongside rising communal mobilization |

Desai demonstrated that while the Indian bourgeoisie led the nationalist struggle, it simultaneously constrained radical agrarian revolts to safeguard its own class interests. [[link:Compare this in Paper 2 Unit 1 with Desai’s critique of the post-colonial capitalist state serving the ruling classes.]]

## Colonial Administrators and the "Construction of Traditionalism"

Did British rulers merely record pre-existing Indian traditions, or did they actively construct the traditionalism that marked Indian society as backward? Subaltern and post-colonial sociologists like [[thinker:Bernard Cohn]] and [[thinker:Nicholas Dirks]] demonstrated that the colonial state deployed an "epistemological conquest" to justify imperial dominance:

- **The Decennial Census (1901):** H.H. Risley used anthropometric measurements to classify thousands of fluid, localized jatis into rigid, hierarchical varna categories. This frozen classification sparked fierce petitions among caste sabhas for upward ranking, actively deepening caste consciousness.
- **Codification of Anglo-Hindu Law:** Early British jurists like William Jones and H.T. Colebrooke privileged conservative Brahminical texts (such as the *Manusmriti*) over localized customary laws, imposing orthodox textual rigidity upon diverse rural communities.
- **The Ideology of the Civilizing Mission:** By presenting India as an unchanging, fatalistic society frozen in oriental despotism, colonial rulers argued that only British paternalism could maintain order.

## The Subaltern and Anti-Caste Challenge to Mainstream Nationalism

Mainstream nationalist historiography long celebrated the anti-colonial struggle as a seamless, unified campaign led by elite Congress leaders. However, revisionist sociological perspectives exposed deep internal fractures:

- **Subaltern School ([[thinker:Ranajit Guha]]):** Guha argued that colonial historiography suffered from elite bias. Alongside the elite nationalist domain ran an autonomous subaltern domain led by peasants and tribals whose resistance operated through direct action, traditional symbols, and territorial solidarity rather than constitutional petitions.
- **[[thinker:B.R. Ambedkar]]'s Dalit Critique:** Ambedkar famously cautioned that political swaraj without structural social democracy would simply replace the British colonial yoke with upper-caste Brahminical dominance. He insisted that the annihilation of caste and constitutional safeguards for Depressed Classes must precede or accompany national freedom. [[eg:Ambedkar’s clash with Gandhi over the Poona Pact (1932) highlighted that for millions of Dalits, internal social freedom from caste violence was just as urgent as freedom from British rule.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1835',
        title: 'Macaulay’s Minute on Education',
        text: 'Introduced English education to produce colonial clerks, inadvertently creating an anti-colonial intellectual elite.',
      },
      {
        year: '1853',
        title: 'Introduction of Railways & Telegraph',
        text: 'Physical infrastructure built for British raw material extraction compressed geographic distance and broke village isolation.',
      },
      {
        year: '1885',
        title: 'Formation of Indian National Congress',
        text: 'Desai’s Phase 2: Moderate bourgeois professionals established the first pan-Indian constitutional political platform.',
      },
      {
        year: '1901',
        title: 'Risley’s Census Classification',
        text: 'Colonial state hierarchically ranked castes, hardening social identities and sparking modern caste-based mobilization.',
      },
      {
        year: '1905–1908',
        title: 'Swadeshi & Boycott Agitation',
        text: 'Desai’s Phase 3: Militant nationalism mobilized urban lower-middle-class youth against Bengal partition.',
      },
      {
        year: '1920–1934',
        title: 'Gandhian Mass Mobilizations',
        text: 'Desai’s Phase 4: Non-Cooperation and Civil Disobedience drew millions of rural peasants and workers into national politics.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Colonial Extraction', text: 'British land revenue, railways, and English education introduced for imperial control' },
      { label: 'New Social Classes', text: 'Industrial bourgeoisie, professional middle class, rural proletariat, and peasantry emerge' },
      { label: 'National Consciousness', text: 'Print media and modern transit connect isolated regional grievances into pan-Indian identity' },
      { label: 'Bourgeois Hegemony', text: 'Congress channelizes mass energy while moderating radical structural agrarian demands' },
      { label: 'Subaltern Challenge', text: 'Dalits (Ambedkar) and peasants (Kisan Sabhas) contest elite control of the national narrative' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Social Background of Nationalism',
    meaning:
      'A.R. Desai’s materialist paradigm demonstrating that Indian nationalism arose from the collision of colonial capitalism with pre-capitalist Indian social structures.',
  },
  {
    kind: 'keyTerm',
    term: 'Colonial Construction of Tradition',
    meaning:
      'The sociological process through which colonial census, legal codes, and ethnography formalized fluid social customs into rigid, backward traditionalism.',
  },
  {
    kind: 'keyTerm',
    term: 'Print-Capitalism',
    meaning:
      'Benedict Anderson’s concept of how mass vernacular print media allowed geographically separated citizens to imagine themselves as a single political community.',
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Autonomy',
    meaning:
      'Ranajit Guha’s concept asserting that peasant and tribal politics operated independently of elite nationalist leadership with its own distinct consciousness.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Never Treat Indian Nationalism as Monolithic',
    body: 'In 20-mark answers, avoid describing nationalism as a single harmonious movement. Always evaluate it through competing lenses: Marxist (Desai’s class phases), Subaltern (Guha’s autonomous domain), Anti-caste (Ambedkar’s critique of Brahmin-bourgeois hegemony), and Cambridge School (factional patronage competition).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Desai’s 5 Phases Revision Mnemonic (I-B-S-M-P)',
    body: 'Remember A.R. Desai’s five phases: Intelligentsia reform (pre-1885) -> Bourgeois moderates (1885) -> Swadeshi militants (1905) -> Mass Gandhian peasantry (1920) -> Polarized class struggles (post-1934).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Confuse Risley’s Census with Mere Scientific Recording',
    body: 'Herbert Risley’s 1901 census was not neutral data gathering; it was an exercise in colonial power. By assigning definitive social prestige to castes, the British encouraged competitive caste claims that fragmented anti-colonial unity.',
  },
  {
    kind: 'answerBox',
    intro:
      'Indian nationalism developed through the complex interaction between colonial institutional interventions, new capitalist class relations, and subaltern resistance.',
    points: [
      'Material infrastructure: Railways, postal communication, and print media unified fragmented markets and fostered an imagined national community.',
      'Class dynamics (A.R. Desai): Capitalist transformation spawned a commercial bourgeoisie, urban intelligentsia, and peasantry who led five dialectical phases.',
      'Colonial construction of tradition: Epistemic tools like Risley’s 1901 Census and Anglo-Hindu law codified fluid identities to justify colonial rule.',
      'Subaltern domain (Ranajit Guha): Peasants and tribals fought colonialism through autonomous mobilizations that differed from elite constitutional politics.',
      'Dalit assertion (B.R. Ambedkar): Challenged mainstream nationalism to address structural caste hierarchy and ensure substantive social democracy.',
    ],
    conclusion:
      'Thus, Indian nationalism was not an elite monolith but an arena of intense social contestation that ultimately synthesized anti-imperialism with aspirations for social justice.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Indian nationalism grew as colonial administrative unification, print-capitalism, and capitalist class differentiation collided with traditional hierarchies, producing both elite constitutional movements and autonomous subaltern resistance.',
  mindMap,
  sections,
}
