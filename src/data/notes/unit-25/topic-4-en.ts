import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic4EnMindMap: MindMapData = {
  title: 'Topic 4 · Caste Conflicts in Contemporary India',
  center: 'Caste Conflicts & Social Transformation',
  subtitle: 'Dominant Castes • Anand Teltumbde Analysis • Khairlanji & Una • Proximate Caste Clashes',
  branches: [
    {
      title: '1. Agrarian Transition & Dominant Castes',
      color: 'lavender',
      thinkers: ['M.N. Srinivas', 'Anand Teltumbde', 'Gail Omvedt', 'Christophe Jaffrelot'],
      points: [
        'Post-zamindari shift: Intermediate OBC agrarian castes (Jats, Marathas, Thevars) capturing village power',
        'Direct class-caste contradiction: Agrarian capital relying on cheap, docile Dalit farm labor',
        'Agrarian crisis & displacement: Dominant-caste youth facing farm distress channeling rage against Dalits',
        'Teltumbde’s "Republic of Caste": Atrocities as structural mechanism to preserve intermediate rural hegemony',
      ],
    },
    {
      title: '2. Upward Mobility & Backlash Dynamics',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Sukhadeo Thorat', 'Kancha Ilaiah'],
      points: [
        'Assertive assertion: Dalit educational gains, reservation jobs, and cultural refusal of untouchability',
        'Symbolic flashpoints: Riding horses in weddings, sporting mustaches, and celebrating Bhima Koregaon',
        'Rejection of degraded labor: Una (2016) rebellion refusing manual scavenging and carcass skinning',
        'Vengeful atrocities: Khairlanji (2006) and Tsundur (1991) punishing subaltern assertions of dignity',
      ],
    },
    {
      title: '3. Proximate Caste Conflicts & Sub-Categorization',
      color: 'mint',
      thinkers: ['F.G. Bailey', 'B.R. Ambedkar', 'Satish Deshpande'],
      points: [
        'Proximity thesis: Friction is sharpest between adjacent strata competing for the identical economic niche',
        'Ambedkar’s graded inequality: "Ascending reverence and descending contempt" fracturing solidarity',
        'Sub-caste quota friction: Madiga vs Mala (Telangana/Andhra) and Meena vs Gurjar (Rajasthan)',
        'Supreme Court 2024 verdict: Endorsing sub-classification of SCs to address intra-group inequalities',
      ],
    },
    {
      title: '4. Gender, Agrarian Labour & Legal Impunity',
      color: 'pink',
      thinkers: ['Sharmila Rege', 'Uma Chakravarti', 'Gopal Guru'],
      points: [
        'Triple burden: Dalit female agricultural workers vulnerable to sexual assault in fields and commons',
        'Rape as caste retribution: Stripping subaltern women to dishonor assertive lower-caste collectives',
        'PoA Act 1989 contestations: Upper-caste campaigns alleging false cases vs dismal national conviction rates',
        'Institutional bias: Police delays, delayed FIRs, and medical tampering shielding dominant perpetrators',
      ],
    },
  ],
}

export const topic4EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps (Challenges of Social Transformation).',
  },
  {
    kind: 'md',
    body: `## The Sociological Anatomy of Modern Caste Conflicts

Caste conflicts in post-independence India have undergone a profound structural mutation. In classical Indological and functionalist sociology (G.S. Ghurye, Louis Dumont), caste was depicted as a stable, consensus-based hierarchical order governed by ritual purity and pollution. Today, however, caste operates as a contested political and economic arena characterized by bitter confrontation, competitive mobilization, and violent atrocities.

Rather than enforcing traditional ritual distance, contemporary caste conflict revolves around ==Secular Resource Competition== — agricultural wages, control of village land and panchayats, state employment quotas, and the assertion of human dignity by historically oppressed communities.

### The Rise of Dominant Agrarian Castes

The post-colonial agrarian transition fundamentally reconfigured rural power dynamics. Anthropologist [[thinker:M.N. Srinivas]] formulated the concept of the ==Dominant Caste== to describe castes that possess substantial landholding, numerical preponderance, and modern political influence (e.g., Jats and Gujjars in western UP/Haryana, Marathas in Maharashtra, Thevars and Gounders in Tamil Nadu, Patidars in Gujarat, and Yadavs in Bihar).

With the abolition of absentee colonial zamindaris, intermediate Shudra/OBC castes consolidated ownership over cultivated land. However, this structural transformation replaced absentee feudal landlords with immediate, hands-on peasant proprietors whose economic survival depended upon extracting cheap, compliant labor from landless Dalits.

| Historical Phase | Dominant Antagonism | Sociological Character | Key Manifestation |
| :--- | :--- | :--- | :--- |
| **Colonial Era** | Absentee Zamindars vs Peasantry | Feudal revenue exploitation & tenancy rent | Anti-zamindari tenant rebellions |
| **Post-Independence (1950–80s)** | Upper Castes vs Backward Classes | Demand for agrarian land rights & political voice | Green Revolution & Socialist mobilization |
| **Post-Mandal (1990s–Present)** | Dominant Agrarian OBCs vs Assertive Dalits | Clash over wages, dignity, quotas, and political office | Violent atrocities (Khairlanji, Una, Tsundur) |

### Anand Teltumbde's Framework: The Republic of Caste

Public intellectual and management professor [[thinker:Anand Teltumbde]], in *The Republic of Caste*, provides a trenchant political economy explanation for the surge in atrocities against Dalits. Teltumbde argues that the neoliberal withdrawal of the state and the deepening crisis of Indian agriculture (collapsing crop margins, fragmentation of landholdings, youth unemployment) have severely destabilized the intermediate agrarian castes.

Feeling economically marginalized by corporate modernization yet unwilling to align with landless laborers, dominant-caste youths experience acute status anxiety. When upwardly mobile Dalits acquire education, enter government services through reservations, or reject customary demeaning caste duties, dominant-caste groups perceive this as an existential threat to their traditional village supremacy, responding with organized punitive violence.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Angle: The Politics of Symbolic Dignity',
    body: 'In UPSC answers, emphasize that caste atrocities today are rarely about food or water taboos alone. They are provoked by symbolic assertions of equality: a Dalit youth sporting a styled mustache, riding a horse during a wedding procession (Barat), or sitting on a chair in the village tea stall.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Subaltern Empowerment', text: 'Education, reservations, and welfare erode dependence' },
      { label: 'Refusal of Hegemony', text: 'Dalits reject manual scavenging & dead cattle skinning' },
      { label: 'Status Panic', text: 'Dominant landholders face agrarian crisis & labor shortage' },
      { label: 'Violent Retribution', text: 'Caste atrocities executed to enforce rural subordination' },
    ],
  },
  {
    kind: 'md',
    body: `## Landmark Flashpoints: Khairlanji and Una

Contemporary caste violence is crystallised in two seminal episodes that exposed the fragility of subaltern citizenship: Khairlanji (2006) and Una (2016).

### Khairlanji (2006): Retribution Against Assertive Autonomy

In the village of Khairlanji in Bhandara district, Maharashtra, four members of the Buddhist Dalit Bhotmange family — Surekha Bhotmange, her daughter Priyanka, and two sons — were brutally tortured and lynched by a mob of dominant Kunbi-Maratha villagers.

Sociological analyses revealed that the Bhotmanges had refused to allow their agricultural field to be converted into a public bullock cart pathway for dominant landholders, and had bravely stood as legal witnesses against dominant-caste perpetrators in an earlier dispute. The horrific atrocity was designed to serve as a collective spectacle of punishment, demonstrating that economic self-reliance and legal rights would not be tolerated in the agrarian hinterland.

### Una (2016): The Refusal of Degraded Labor

In July 2016, in Una, Gujarat, four Dalit youth belonging to the Sarvaiya family were stripped to the waist, tied to an SUV, and publicly flogged with iron rods by upper-caste *Gau Rakshaks* (cow vigilantes) while skinning a naturally deceased cow. 

The Una incident ignited a historic Dalit upsurge led by Jignesh Mevani under the slogan: *"Gai ki poonchh tum rakho, humein hamari zameen do"* (Keep your cow's tail, give us our land). Dalits dumped rotting animal carcasses outside government administrative headquarters across Gujarat, collectively refusing to perform traditional hereditary occupations of dead cattle removal and manual scavenging. This transformed an episode of caste violence into a radical structural critique of the agrarian division of labor.

[[eg:Following the Una agitation, thousands of Dalit families in Saurashtra signed formal pledges abandoning dead cattle disposal, forcing municipal authorities and caste panchayats to recognize their absolute refusal of hereditary ritual servitude.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Ritual Caste Oppression',
    rightTitle: 'Modern Agrarian-Secular Caste Conflict',
    rows: [
      {
        aspect: 'Core Mechanism',
        left: 'Ideological consensus around Dharmashastras and ritual purity/pollution',
        right: 'Physical coercion and punitive violence over secular resources and dignity',
      },
      {
        aspect: 'Primary Adversary',
        left: 'Brahmins and Kshatriyas enforcing scriptural untouchability',
        right: 'Dominant intermediate peasant castes (OBCs) policing village labor',
      },
      {
        aspect: 'Triggering Event',
        left: 'Ritual pollution (shadow falling on upper caste, temple entry)',
        right: 'Secular mobility (reservation job, land ownership, wedding horse, elections)',
      },
      {
        aspect: 'Subaltern Response',
        left: 'Sanskritization (emulating upper-caste cultural rituals)',
        right: 'Navayana Buddhism, militant legal mobilization, and labor strikes',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Proximate Caste Conflict Thesis

A profound sociological paradox of modern Indian politics is that the most bitter and protracted conflicts frequently erupt not between groups at the absolute polar extremes of the caste hierarchy (Brahmins versus Dalits), but between ==Contiguous or Proximate Castes== situated adjacent to one another on the middle and lower rungs.

Sociologist [[thinker:F.G. Bailey]] explained this through structural resource competition: social groups occupying distinct, distant ecological niches rarely clash, whereas groups competing for the identical economic space, electoral constituency, or bureaucratic quota experience acute territorial friction.

### Ambedkar's Theory of Graded Inequality

This fragmentation was brilliantly conceptualized by [[thinker:B.R. Ambedkar]] in his classic analysis of ==Graded Inequality== (*Annihilation of Caste*). Ambedkar argued that Hindu society is not a simple binary division between patricians and plebeians; it is an "ascending scale of reverence and a descending scale of contempt." 

Each intermediate caste looks up to the caste above it with deference while looking down upon the caste below it with revulsion. Consequently, subaltern strata find it extraordinarily difficult to forge unified class solidarity against the ruling elite, as intermediate groups jealously defend their microscopic status advantage over the castes immediately beneath them.

[[link:Paper 1 Stratification: Contrast Ambedkar's Graded Inequality with Karl Marx’s dialectical two-class polarization model.]]

### Sub-Categorization Agitations: Madiga vs Mala and Gurjar vs Meena

This proximate competition is vividly visible in contemporary quota politics across India:
- **Andhra Pradesh and Telangana**: The Madiga Reservation Porata Samiti (MRPS), representing the traditionally scavenging and leather-working Madiga community, fought for decades against the relatively upwardly mobile Mala community, arguing that Malas monopolized disproportionate SC quotas due to superior educational access. In August 2024, the Supreme Court upheld the constitutional validity of sub-classifying Scheduled Castes.
- **Rajasthan**: Violent clashes erupted between the pastoralist Gurjars (demanding Special Backward Class quotas) and the politically entrenched Meenas (who hold Scheduled Tribe status), reflecting bitter contestation over state bureaucratic entry.

### Agrarian Labour, Caste and Sexual Violence

In rural India, the intersection of caste hierarchy and agrarian labor is intensely gendered. As feminist scholars [[thinker:Uma Chakravarti]] and Sharmila Rege emphasize, Dalit women working as wage laborers in fields owned by dominant castes are systematically targeted for sexual assault. Rape is deployed not merely as an act of individual lust, but as an institutionalized technique of caste discipline, designed to terrorize subaltern male laborers into unquestioning obedience.`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Don’t Confuse Graded Inequality with Class Polarization',
    body: 'Never assume that all lower castes naturally form a united proletarian front. Ambedkar’s concept of Graded Inequality explains why sub-castes within SCs and OBCs actively fight each other for incremental state patronage, preventing cross-caste subaltern coalitions.',
  },
  {
    kind: 'keyTerm',
    term: 'Dominant Caste',
    meaning: 'M.N. Srinivas’s concept describing a caste that wields decisive economic power through landholding, numerical strength, and modern political influence in a local area.',
  },
  {
    kind: 'keyTerm',
    term: 'Graded Inequality',
    meaning: 'B.R. Ambedkar’s characterization of caste as an ascending scale of reverence and descending scale of contempt that prevents horizontal subaltern solidarity.',
  },
  {
    kind: 'keyTerm',
    term: 'The Republic of Caste',
    meaning: 'Anand Teltumbde’s analytical framework demonstrating how post-colonial state structures and neoliberal agrarian crisis intensify violent atrocities against assertive Dalits.',
  },
  {
    kind: 'keyTerm',
    term: 'Proximate Caste Conflict',
    meaning: 'Intense inter-caste friction occurring between contiguous strata on the hierarchy competing directly for identical agrarian, electoral, or reservation resources.',
  },
  {
    kind: 'keyTerm',
    term: 'SC/ST Prevention of Atrocities Act (1989)',
    meaning: 'Special criminal legislation designed to deter and punish violent, humiliating, and dispossessionary offenses committed against Scheduled Castes and Tribes.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: The Paradox of Upward Mobility',
    body: 'In Indian sociology, upward mobility does not automatically eradicate caste prejudice; rather, subaltern mobility destabilizes the traditional status quo, often triggering organized violent backlash from threatened dominant agrarian elites.',
  },
  {
    kind: 'answerBox',
    intro:
      'A model sociological answer evaluating modern caste conflicts, upward mobility backlashes, and proximate caste clashes must balance structural political economy with cultural dignity dynamics:',
    points: [
      'The transition from traditional ritual distance to secular competition over land, wages, and political representation forms the bedrock of modern caste conflict.',
      'M.N. Srinivas’s Dominant Caste thesis explains how land reforms empowered intermediate peasant castes (Marathas, Jats, Thevars), who replaced zamindars as the immediate oppressors of landless Dalits.',
      'Anand Teltumbde’s analysis demonstrates that neoliberal agrarian distress and youth underemployment trigger status panic among dominant castes, generating violent backlashes against subaltern assertiveness.',
      'Flashpoints like Khairlanji (2006) and Una (2016) reflect how Dalit rejection of degrading hereditary labor and assertions of civic equality provoke punitive collective violence.',
      'F.G. Bailey’s niche competition and B.R. Ambedkar’s Graded Inequality explain why proximate castes (Madiga vs Mala, intermediate OBCs vs Dalits) experience sharper daily friction than distant polar strata.',
    ],
    conclusion:
      'Resolving caste conflict requires moving beyond symbolic welfare toward comprehensive land redistribution, robust enforcement of the PoA Act, and universal formal employment creation.',
  },
]
