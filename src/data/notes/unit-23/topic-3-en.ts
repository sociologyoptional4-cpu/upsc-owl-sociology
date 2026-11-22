import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3EnMindMap: MindMapData = {
  title: 'Topic 3 · Backward Classes and Dalit Movements in India',
  center: 'Backward Classes & Dalit Movements',
  subtitle: 'Anti-Caste Counter-Hegemony • Ambedkar’s Mobilization • Dravidian vs Mandal • Electoral Co-optation',
  branches: [
    {
      title: 'Historical Origins & Anti-Caste Ideology',
      color: 'lavender',
      thinkers: ['Jyotirao Phule', 'Periyar E.V. Ramasamy', 'Sri Narayana Guru', 'B.R. Ambedkar'],
      points: [
        'Phule’s Satyashodhak Samaj (1873): counter-hegemony against Brahmanical cultural dominance',
        'Periyar’s Self-Respect Movement (1925): Tamil rationalism, anti-Hindi, and anti-Brahmin agitation',
        'SNDP Yogam (1903): Sri Narayana Guru’s "One Caste, One Religion, One God" uplift of Ezhavas',
        'Ambedkar’s emancipatory turn: Mahad Satyagraha (1927), Kalaram Temple entry, and Navayana conversion',
      ],
    },
    {
      title: 'Dalit Assertion: Panthers to Bahujan Power',
      color: 'yellow',
      thinkers: ['Namdeo Dhasal', 'Arjun Dangle', 'Kanshi Ram', 'Gail Omvedt'],
      points: [
        'Dalit Panthers (1972): militant confrontation, revolutionary poetry, and Black Panther influence',
        'Broadening the subaltern: defining Dalit to include all oppressed (SC, ST, workers, landless poor)',
        'Kanshi Ram & BSP: "Bahujan Samaj" (*85% vs 15%*), capturing state power in Uttar Pradesh',
        'Symbolic politics: installation of Ambedkar statues, memorial parks, and subaltern dignity',
      ],
    },
    {
      title: 'Dravidian Mobilization vs North Indian Mandal',
      color: 'mint',
      thinkers: ['M.S.S. Pandian', 'Rajni Kothari', 'Christophe Jaffrelot', 'Lloyd & Susanne Rudolph'],
      points: [
        'Dravidian trajectory: socio-cultural counter-hegemony dismantling Brahmin administrative monopoly',
        'North Indian OBC rise: Green Revolution "bullock capitalists" (Yadavs, Kurmis, Jats) demanding power',
        'Mandal Commission (1990): 27% OBC quotas transforming Indian democracy into the "Silent Revolution"',
        'Contrasting focus: Dravidian cultural transformation vs Northern state power (*bhagidari*) emphasis',
      ],
    },
    {
      title: 'Contemporary Debates & Emerging Crises',
      color: 'pink',
      thinkers: ['Ghanshyam Shah', 'Gail Omvedt', 'Badri Narayan', 'Surinder Jodhka'],
      points: [
        'Electoral co-optation: Omvedt & Shah on radical anti-caste aims reduced to opportunistic seat-sharing',
        'Creamy layer & sub-categorization: Supreme Court (2024) validating sub-quotas for Madigas/Valmikis',
        'Dalit Capitalism (DICCI): Milind Kamble advocating entrepreneurship over state patronage',
        'Agrarian violence: dominant OBC intermediate castes committing atrocities against asserting Dalits',
      ],
    },
  ],
}

export const topic3EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-01-indian-social-movements.webp',
    alt: 'P2 Unit 13 infographic: Peasant, Women & Dalit Movements — Peasants, Women & Dalit Assertions in Modern India',
    caption:
      'Dalit and Backward Class mobilizations evolved from early anti-caste cultural revolts to post-Mandal political empowerment and contemporary struggles over sub-categorization.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 01',
  },
  {
    kind: 'md',
    body: `## Social and Historical Origins of Anti-Caste Assertions

Dalit and Backward Class movements in India represent a profound democratic revolt against the hereditary inequalities, ritual degradation, and economic exploitation institutionalized by the caste system. Rather than seeking upward mobility within the Hindu hierarchy through Sanskritisation, these movements sought the structural dismantling of Brahmanical supremacy.

Sociologist [[thinker:Gail Omvedt]] in *Dalits and the Democratic Revolution* demonstrated that anti-caste mobilization developed along distinct regional, cultural, and ideological trajectories in western and southern India during the 19th and early 20th centuries.

### Major Historical Streams of Early Anti-Caste Mobilization
1. **Jotirao Phule and the Satyashodhak Samaj (1873)**: In Maharashtra, Phule formulated the first comprehensive counter-hegemonic critique of Brahmanism (*Brahmanache Kasab* and *Gulamgiri*). He forged a united subaltern front of the **Shudras (OBC peasant castes)** and **Ati-Shudras (Untouchables)**, establishing schools for lower-caste girls and instituting priest-less marriage ceremonies.
2. **Periyar E.V. Ramasamy and the Self-Respect Movement (1925)**: In Tamil Nadu, Periyar severed ties with the Congress to inaugurate the *Suyamariyathai* (Self-Respect) movement. He wedded anti-Brahminism to atheistic rationalism, burning copies of the *Manusmriti* and the *Ramayana*, rejecting Sanskrit hegemony, and demanding proportional quotas in state employment.
3. **Sri Narayana Guru and the SNDP Yogam (1903)**: In Kerala, Sri Narayana Guru mobilized the oppressed Ezhava community under the egalitarian banner of **"One Caste, One Religion, One God for Man"**, spearheading temple-entry agitations (*Aruvippuram installation*) and combining spiritual autonomy with modern education.
4. **Dr. B.R. Ambedkar’s Rights-Based Paradigm**: [[thinker:B.R. Ambedkar]] elevated the struggle from philanthropic charity to an autonomous political battle for civil rights, constitutional safeguards, and state representation. Through the **Mahad Satyagraha (1927)** for civic access to public drinking water and the **Kalaram Temple Entry Satyagraha (1930)**, Ambedkar proved that caste inequality was enforced through civic exclusion. His foundational thesis in *The Annihilation of Caste* (1936) argued that caste cannot be reformed from within Hinduism; this culminated in his historic mass conversion to Buddhism (*Navayana*) in Nagpur in 1956.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1873',
        title: 'Satyashodhak Samaj',
        text: 'Jotirao Phule mobilizes Shudras and Ati-Shudras in Maharashtra against priestly hegemony.',
      },
      {
        year: '1925',
        title: 'Self-Respect Movement',
        text: 'Periyar launches rationalist, anti-Brahmin mobilization in the Madras Presidency.',
      },
      {
        year: '1927',
        title: 'Mahad Satyagraha',
        text: 'Dr. B.R. Ambedkar asserts civil water rights at Chhadar tank and burns the Manusmriti.',
      },
      {
        year: '1972',
        title: 'Dalit Panther Movement',
        text: 'Militant youth organization formed in Bombay by Namdeo Dhasal and Arjun Dangle.',
      },
      {
        year: '1990',
        title: 'Mandal Commission Implementation',
        text: 'V.P. Singh government implements 27% OBC reservations, triggering the "Silent Revolution".',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Comparing Trajectories: Dravidian Anti-Brahminism vs North Indian Mandal Mobilization

A central comparative question in Indian political sociology concerns the structural contrast between the **Southern Dravidian non-Brahmin movement** and the **North Indian Other Backward Classes (OBC) mobilization**.

French political scientist [[thinker:Christophe Jaffrelot]] characterized the rise of the backward castes as India's **"Silent Revolution"**, yet the regional trajectories differed markedly in their cultural depth, class composition, and political goals.

| Comparative Dimension | Dravidian Non-Brahmin Movement (South) | North Indian Mandal-Era OBC Assertion |
| :--- | :--- | :--- |
| **Historical Inception** | Early 20th century (Justice Party 1916, Self-Respect 1925) | Late 20th century (post-Green Revolution 1970s, Mandal 1990) |
| **Ideological Thrust** | Cultural-counter-hegemony: Tamil identity, atheism, rationalism | Political representation (*bhagidari*), quotas in bureaucracy |
| **Primary Target** | Brahmin monopoly over ritual, cultural, and administrative life | Upper-caste (Dwija) monopoly over Central government jobs |
| **Socio-Economic Base** | Broad non-Brahmin coalition (landed elites, backward classes) | Newly prosperous agrarian "bullock capitalists" (Yadavs, Kurmis) |
| **Outcome on Hierarchy** | Radical dismantling of Brahmin dominance; entrenched regional parties | Capture of state electoral power; persistent caste and communal friction |

### Sociological Analysis of the Divergence
- **Cultural Hegemony**: In the South, because Brahmins formed barely 3% of the population, the Dravidian movement succeeded in painting them as alien "Aryan colonizers." The movement established a pervasive Tamil sub-nationalism that radically reorganized vernacular culture, temple administration, and public rituals.
- **The Agrarian-Mandal Nexus in the North**: In North India, upper castes constituted over 20% of the population. Backward class assertion was triggered by the economic surplus of the Green Revolution. Peasants from intermediate castes (Yadavs, Kurmis, Koeris, Jats) used their newfound wealth to challenge upper-caste Congress dominance, as theorized by [[thinker:Lloyd & Susanne Rudolph]]. Their goal was explicitly political (*"Satta hamari, raj tumhara nahi chalega"*), focusing on state employment rather than a radical critique of Hinduism.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Distinction: Backward Class Assertion vs Dalit Liberation',
    body: 'Never conflate OBC and Dalit movements in Paper 2 answers. While both challenge upper-caste privilege, intermediate OBC dominant castes (e.g., Thevars in Tamil Nadu, Marathas in Maharashtra, Yadavs in Bihar/UP) are often the direct agrarian oppressors of landless Dalits in rural localities, as documented by M.N. Srinivas and Andre Béteille.',
  },
  {
    kind: 'md',
    body: `## The Radical Turn to Electoral Co-optation: Dalit Panthers to the BSP

Following Ambedkar’s demise, Dalit politics underwent a dramatic cycle oscillating between radical confrontation and electoral pragmatism.

### The Dalit Panthers (1972)
Inspired by the Black Panther movement in the United States, young literary radicals [[thinker:Namdeo Dhasal]] and Arjun Dangle formed the **Dalit Panthers** in the slums of Bombay in 1972:
- **Ideological Manifesto**: The Panthers expanded the definition of *Dalit* beyond Scheduled Castes to encompass all oppressed segments of society—Scheduled Tribes, neo-Buddhists, landless agricultural workers, poor peasants, and exploited women.
- **Militant Confrontation**: They deployed revolutionary street activism, organized self-defense squads against upper-caste rural pogroms, and created the **Dalit Literature Movement**, using raw vernacular poetry to expose upper-caste hypocrisy.
- **Fracture and Collapse**: By the late 1970s, the Panthers splintered over the ideological conflict between pure Marxist class struggle (Dhasal) and Buddhist cultural identity (Raja Dhale).

### Kanshi Ram and the Bahujan Samaj Party (BSP)
Recognizing the limitations of fractured militant groups, [[thinker:Kanshi Ram]] engineered a strategic political vehicle:
- First, he organized government employees under **BAMCEF (1978)** to create a dedicated cadre and intellectual resource pool.
- Next, he formed the **DS-4 (1981)** for agitation, culminating in the founding of the **Bahujan Samaj Party (BSP) in 1984**.
- **The "Bahujan" Formula**: Kanshi Ram mobilized the demographic majority (*"Jiski jitni sankhya bhaari, utni uski hissedari"*), uniting SCs, STs, OBCs, and religious minorities (85%) against the 15% upper-caste elite. Under Mayawati, the BSP formed four governments in Uttar Pradesh.

### The Omvedt-Shah Critique: Co-optation vs Structural Emancipation
Eminent sociologists [[thinker:Gail Omvedt]] and [[thinker:Ghanshyam Shah]] critically evaluated the trajectory of Dalit political power:
1. **Symbolic Dignity vs Material Redistribution**: The BSP successfully created subaltern pride by installing thousands of Ambedkar statues, establishing memorials (Ambedkar Samajik Parivartan Sthal in Lucknow), and renaming districts after anti-caste icons. However, it completely neglected land redistribution, rural wage increases, and health/education infrastructure for the rural poor.
2. **Electoral Opportunism and Dilution**: To capture power, the BSP diluted its radical *Bahujan* ideology into *Sarvajan* (coalitions with Brahmins and landed castes), transforming a transformative social movement into an opportunistic electoral machine.
3. **Creation of a Subaltern Creamy Layer**: Electoral reservations and state power fostered an elite stratum of Dalit politicians and bureaucrats, leaving the vast majority of rural, landless Dalits vulnerable to continuing agrarian atrocities [[eg:Massacres in Tsundur, Melavalavu, and Khairlanji]].`,
  },
  {
    kind: 'compare',
    leftTitle: 'Radical Emancipation (Ambedkar / Panthers)',
    rightTitle: 'Electoral Politics (BSP / Contemporary)',
    rows: [
      {
        aspect: 'Primary Goal',
        left: 'Annihilation of caste, religious conversion, structural land reform.',
        right: 'Capturing governmental power (*satta*), quota preservation.',
      },
      {
        aspect: 'Strategic Method',
        left: 'Counter-hegemonic cultural revolt, street agitation, self-respect.',
        right: 'Electoral arithmetic, opportunistic alliances (*Sarvajan* formula).',
      },
      {
        aspect: 'Economic Focus',
        left: 'State socialism, nationalization of land, radical redistribution.',
        right: 'Affirmative action jobs, Dalit capitalism (DICCI), vendor quotas.',
      },
      {
        aspect: 'Class Trajectory',
        left: 'Subaltern mass mobilization centered on landless agricultural labourers.',
        right: 'Leadership captured by educated middle class and political elites.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Satyashodhak Samaj (1873)',
    meaning:
      'The Truth-Seekers Society founded by Jotirao Phule in Maharashtra to emancipate Shudras and Ati-Shudras from priestly Brahmanical exploitation through vernacular education and cultural revolt.',
  },
  {
    kind: 'keyTerm',
    term: 'Dalit Panther Movement (1972)',
    meaning:
      'A militant urban youth organization in Maharashtra that combined Marxist class analysis with Ambedkarite consciousness, redefining "Dalit" as an inclusive category for all oppressed subaltern groups.',
  },
  {
    kind: 'keyTerm',
    term: 'Electoral Co-optation (Omvedt & Shah)',
    meaning:
      'The sociological process wherein radical anti-caste movements are absorbed into mainstream parliamentary democracy, prioritizing symbolic representation and seat-sharing over structural land and economic transformation.',
  },
  {
    kind: 'keyTerm',
    term: 'Sub-Categorization of Scheduled Castes',
    meaning:
      'The constitutional and political demand to divide reservation quotas among SC groups to prevent monopolization by relatively advanced communities (e.g., Mahars, Chamars) over marginalized sub-groups (e.g., Madigas, Valmikis).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Current Debates in Dalit Politics',
    body: 'In contemporary questions, always cite: (1) The Supreme Court’s 2024 verdict allowing sub-classification within SCs/STs to address intra-group inequality (Madiga agitation), (2) Dalit Capitalism (DICCI - Milind Kamble) seeking empowerment through markets, and (3) Youth assertions like the Bhim Army (Chandrashekhar Azad) reviving direct street mobilization.',
  },
  {
    kind: 'answerBox',
    intro:
      'Structured model answer for evaluating the ideological diversity and contemporary challenges of Dalit movements:',
    points: [
      'Historical foundations: Anti-caste assertions originated in counter-hegemonic cultural movements led by Phule (Satyashodhak), Periyar (Self-Respect), and Sri Narayana Guru (SNDP), rejecting Sanskritisation.',
      'Ambedkar’s constitutional paradigm: Dr. Ambedkar transformed subaltern mobilization into an autonomous political struggle for civil rights, affirmative action, and religious conversion (Navayana Buddhism).',
      'The radical interlude: The Dalit Panthers (1972) injected militant Marxist-Ambedkarite consciousness and literary realism, defining Dalit as all exploited working-class subalterns.',
      'Electoral co-optation critique: Gail Omvedt and Ghanshyam Shah demonstrated that while Kanshi Ram’s BSP provided immense symbolic dignity, electoral power diluted radical anti-caste goals into transactional coalitions without altering land relations.',
      'Emerging frontiers: Contemporary challenges include intra-Dalit inequalities (sub-categorization demands of Madigas), market-oriented Dalit capitalism (DICCI), and street-level resistance against dominant-caste violence.',
    ],
    conclusion:
      'Dalit movements in India have successfully reshaped constitutional democracy and dismantled social deference, yet the battle against institutionalized rural atrocities and economic precarity remains ongoing.',
  },
]
