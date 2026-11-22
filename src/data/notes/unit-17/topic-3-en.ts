import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.3 — Family and Marriage in India',
  center: 'Family & Marriage in India',
  subtitle: 'Joint Family Debate • Functional Jointness • Vivah vs Nikah • Digital Matrimonial Shifts',
  branches: [
    {
      title: 'Joint Family: Disintegration Debate',
      color: 'lavender',
      thinkers: ['Aileen Ross', 'William J. Goode', 'K.M. Kapadia', 'Saroj Kapoor'],
      points: [
        'Classical ideal: Multi-generational co-residence, common hearth (Chulah), joint coparcenary property, and shared worship',
        'Disintegration thesis: Urbanization, education, and wage labour fragment large domestic units into nuclear households',
        'Ross’s Bangalore study: Nuclear residential units experience diminished elder authority and heightened conjugal strain',
        'Goode’s convergence: Industrial capitalism inexorably nudges extended kin toward isolated conjugal family forms',
      ],
    },
    {
      title: 'Adaptation & Functional Jointness',
      color: 'yellow',
      thinkers: ['I.P. Desai', 'Milton Singer', 'M.S. Gore', 'M.N. Srinivas'],
      points: [
        'Desai’s Mahuva study: Physical residential nuclearity does not signify functional nuclearity; joint obligations endure',
        'Singer’s Madras industrialists: Modern entrepreneurs compartmentalize life, retaining joint property, rituals, and trusts',
        'Gore’s study of Aggarwals: Urban joint families preserve fraternal solidarity through shared business and mutual loans',
        'Remittance economy: Circular migration connects rural parental hearths with metropolitan wage-earning offspring',
      ],
    },
    {
      title: 'Marriage: Vivah vs Nikah',
      color: 'mint',
      thinkers: ['P.H. Prabhu', 'Asaf A.A. Fyzee', 'Flavia Agnes', 'Patricia Uberoi'],
      points: [
        'Hindu Vivah: Sacramental Sanskara aimed at Dharma, Praja, and Rati; historically indissoluble spiritual union',
        'Kanyadan & Kulvadhu: Ideology of gifting the virgin daughter and socialising the bride as the custodian of lineage honour',
        'Muslim Nikah: Bilateral civil contract based on offer (Ijab), acceptance (Qubul), and mandatory financial security (Mahr)',
        'Statutory evolution: Hindu Marriage Act 1955 introduced divorce; 2019 Act criminalized instantaneous Triple Talaq',
      ],
    },
    {
      title: 'Contemporary Transformations',
      color: 'pink',
      thinkers: ['Ravinder Kaur', 'Patricia Uberoi', 'Janaki Abraham', 'Yogendra Singh'],
      points: [
        'Modernized Endogamy: Digital matrimonial portals (Shaadi.com) reinforce caste, subcaste, and gotra filters online',
        'Love-cum-arranged marriages: Youth exercise self-choice while seeking parental approval to preserve kin networks',
        'Consumer capitalism: Proliferation of lavish "Big Fat Indian Weddings" and commercialization of dowry prestations',
        'Emerging forms: Legal recognition of live-in unions and queer relationship debates challenge heteronormative hegemony',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
    alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
    caption: 'Family, Marriage & Patriarchy in India: Structural transitions from classical jointness to functional adaptation, matrimonial shifts, and gendered domestic dynamics.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## The Joint Family Debate: Disintegration or Adaptation?

For decades, the Indian joint family was celebrated in classical texts as the unshakeable pillar of society—a household where grandfather, sons, grandsons, and their wives lived under a single roof, cooked on a single hearth (*chulah*), held common agricultural land, and worshipped common deities.

When rapid urbanization, industrial employment, and Western education took root, early sociologists assumed the joint family would inevitably collapse into Western-style nuclear households. This sparked one of Indian sociology's most vigorous debates:

### 1. The Disintegration Thesis
* **Aileen Ross (1961):** In her classic study *The Hindu Family in its Urban Setting*, Ross argued that urban life, industrial careers, and modern education in Bangalore eroded traditional elder authority. Younger educated couples demanded privacy, causing physical joint families to break down into smaller nuclear units.
* **William J. Goode (1963):** In *World Revolution and Family Patterns*, Goode claimed that industrialization across the globe demands geographical mobility and free individual labour, systematically undermining large extended families in favour of isolated conjugal units.

### 2. The Adaptation Thesis: Functional Jointness
* **I.P. Desai (1964):** In his landmark empirical study of Mahuva (Gujarat), Desai cautioned sociologists against confusing a *household* (a physical living arrangement) with a *family* (a social institution). Even when sons move out into independent houses, they maintain intense ==functional jointness==—sharing financial expenses, consulting elders on major decisions, participating in joint property, and performing family lifecycle rituals together.
* **Milton Singer (1972):** In *When a Great Tradition Modernizes*, Singer examined leading industrialist families in Madras. He found that modern capitalism did not destroy their joint families. Instead, business families practiced **compartmentalization**—they utilized modern Western technology and corporate organization in their factories, while maintaining traditional joint family rituals, common family trusts, and joint domestic worship at home [[eg:Prominent Indian business dynasties like the Tatas, Birlas, and Ambanis operating global conglomerates through tightly coordinated family councils and joint trusts]].
* **M.N. Srinivas and Yogendra Singh:** [[thinker:MN Srinivas]] and [[thinker:Yogendra Singh]] showed that modern remittances, telephone connectivity, and educational investments actually give the rural joint family new economic strength rather than causing its demise.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Disintegration Perspective (Ross, Goode)',
    rightTitle: 'Adaptation Perspective (Desai, Singer)',
    rows: [
      {
        aspect: 'Primary Focus',
        left: 'Residential nuclearity: Separate kitchens and urban flats viewed as proof of family collapse',
        right: 'Functional jointness: Inter-household obligations, remittances, and joint property rituals',
      },
      {
        aspect: 'Impact of Modernity',
        left: 'Industrialization and individualism inevitably destroy extended family ties',
        right: 'Families adapt dynamically through compartmentalization and multi-local networks',
      },
      {
        aspect: 'Elder Authority',
        left: 'Authoritarian Karta loses control as younger educated generations demand privacy',
        right: 'Elder authority shifts from autocratic command to consultative mentorship and crisis support',
      },
      {
        aspect: 'Contemporary Reality',
        left: 'Nuclear family emerges as the dominant, universal family pattern',
        right: 'The modified extended family flourishes, combining residential autonomy with kin solidarity',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Hindu Vivah vs Muslim Nikah: Sociological Contrasts

Marriage in India is not merely a legal contract between two individuals; it is an alliance between two kinship groups that carries deep spiritual and civil significance.

### 1. Hindu Vivah: A Sacramental Sanskara
* **Spiritual Union:** Traditionally, Hindu marriage is considered a sacred ritual (*Sanskara*), an indissoluble spiritual bond entered into for the fulfillment of *Dharma* (religious duties), *Praja* (progeny), and *Rati* (pleasure).
* **The Ideology of Kanyadan:** The central ceremony involves ==Kanyadan==—the ritual gifting of a maiden daughter by her father to the groom. This gift must be given without expectation of return, structurally positioning wife-givers as lower in status than wife-takers.
* **The Concept of Kulvadhu:** The newly married bride enters her husband's home as a ==Kulvadhu== (the daughter-in-law of the lineage), expected to subordinate her individual identity to uphold the prestige, honor, and purity of her husband's family.
* **Statutory Reforms:** The Hindu Marriage Act, 1955 dismantled the traditional indissolubility of Vivah by outlawing polygyny, legalizing judicial divorce, and recognizing inter-caste and inter-gotra marriages.

### 2. Muslim Nikah: A Socio-Religious Civil Contract
* **Contractual Nature:** In Islamic jurisprudence, ==Nikah== is fundamentally a civil contract based on mutual proposal (*Ijab*) and acceptance (*Qubul*) in the presence of witnesses.
* **Mahr as Economic Security:** The contract requires the groom to guarantee ==Mahr== (dower)—a sum of money or property pledged exclusively to the bride as her independent financial safeguard during and after marriage.
* **Dissolution of Marriage:** Because Nikah is a contract, it can be dissolved through established legal procedures: *Talaq* (repudiation by the husband), *Khula* (divorce initiated by the wife by returning Mahr), or *Mubarat* (mutual consent divorce).
* **Recent Legal Shift:** The Muslim Women (Protection of Rights on Marriage) Act, 2019 made instantaneous verbal triple talaq (*Talaq-e-Biddat*) void and punishable as a cognizable criminal offense.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Spatial Migration', text: 'Educated youth move to metropolitan cities for employment, establishing separate physical kitchens' },
      { label: 'Residential Autonomy', text: 'Couples enjoy domestic privacy in urban flats without direct daily elder surveillance' },
      { label: 'Functional Linkages', text: 'Regular bank remittances, co-financing of family property, and daily video calls maintain close bonds' },
      { label: 'Ritual Re-aggregation', text: 'Families assemble for weddings, Shraddha, and festivals, actively reaffirming joint lineage identity' },
    ],
  },
  {
    kind: 'md',
    body: `## Contemporary Transformations: Digital Matrimony & Changing Patterns

While modern India witnesses dramatic transformations in education, female employment, and legal rights, marriage patterns reflect a fascinating paradox of change and continuity:

### 1. Digital Matrimonial Platforms and Modernized Endogamy
Internet portals like *Shaadi.com*, *BharatMatrimony*, and *Jeevansathi* have largely replaced the traditional village matchmaker (*Nai* or *Pandit*). However, sociologists like Patricia Uberoi and Ravinder Kaur point out that these platforms have **not** dissolved caste endogamy. Instead, they provide sophisticated search filters for caste, sub-caste, Gotra, astrological compatibility, and income brackets—effectively creating ==modernized endogamy== [[eg:An urban professional using matrimonial website dropdowns to filter exclusively for vegetarian, software-engineer matches within their own sub-caste]].

### 2. "Love-cum-Arranged" Marriages
Rather than a stark binary between traditional arranged marriages and Western love marriages, modern young Indians overwhelmingly prefer "love-cum-arranged" unions. Couples date and choose their prospective partner independently, but subsequently orchestrate a formal arranged meeting where parents meet, conduct negotiations, and grant social legitimacy.

### 3. Conspicuous Consumption and the "Big Fat Indian Wedding"
Modern consumer capitalism has fueled lavish wedding expenditures. As [[thinker:Karl Marx]] noted regarding the commodification of social life, wedding rituals have become spectacular displays of class power and status competition. Families incur massive debts to stage multi-day celebrations, while commercial cash dowries continue to be exchanged under the euphemism of "wedding gifts" (*Streedhan*).`,
  },
  {
    kind: 'keyTerm',
    term: 'Functional Jointness',
    meaning: 'I.P. Desai’s concept demonstrating that families living in separate residential dwellings remain actively joint through mutual economic assistance, ritual solidarity, and shared obligations.',
  },
  {
    kind: 'keyTerm',
    term: 'Kanyadan',
    meaning: 'The ritual gift of a daughter by her father in classical Hindu marriage, symbolizing the selfless transfer of guardianship and reinforcing wife-giver asymmetry.',
  },
  {
    kind: 'keyTerm',
    term: 'Kulvadhu',
    meaning: 'The daughter-in-law viewed as the moral custodian of her marital family’s honor, lineage purity, and domestic traditions.',
  },
  {
    kind: 'keyTerm',
    term: 'Modernized Endogamy',
    meaning: 'The technological adaptation of traditional caste and sub-caste marriage boundaries through digital matrimonial search algorithms and filters.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Desai’s Mahuva Framework',
    body: 'Whenever UPSC asks about the disintegration of the joint family, cite I.P. Desai’s 1964 study of Mahuva. Desai categorized families not by roof alone, but into five degrees of jointness (ranging from complete residential jointness to functional/obligational jointness), proving that less than 20% of families were truly isolated nuclear units.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Confuse Household with Family',
    body: 'A household is a domestic residential group whose members share a roof and a common kitchen (Chulah). A family is a broader kinship group bound by rights, sentiments, and genealogical descent (Parivar). An individual living in a nuclear household can remain deeply embedded in a joint family.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Milton Singer’s Compartmentalization',
    body: 'Milton Singer’s study of Madras industrial entrepreneurs is your go-to citation for answering how the joint family supports industrialization. Singer showed that Indian industrialists do not experience cognitive dissonance: they compartmentalize Western professional norms at the office and traditional joint Hindu rituals at home.',
  },
  {
    kind: 'answerBox',
    intro: 'When answering a 20-mark question on whether the Indian joint family is disintegrating or adapting, structure your arguments as follows:',
    points: [
      'Define the traditional joint family (co-residence, common kitchen, coparcenary property, shared worship) as an idealized civilizational benchmark (Kapadia).',
      'Present the disintegration perspective (Aileen Ross, William Goode), citing rural-to-urban migration, individual wage labour, female education, and nuclear living.',
      'Counter with the adaptation thesis, utilizing I.P. Desai’s concept of "functional jointness" (co-residence is not equal to social isolation).',
      'Provide empirical proof of corporate adaptation using Milton Singer’s Madras study (compartmentalization, family trusts, business continuity).',
      'Analyze contemporary hybrid realities: Dispersed joint families, remittance economies, elderly care challenges, and digital WhatsApp kinship networks.',
    ],
    conclusion: 'Conclude that the Indian joint family has not disintegrated; rather, it has transformed from a rigid, monolithic residential unit into a dynamic, multi-local network of mutual economic and emotional solidarity.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'Family and marriage constitute the foundational institutional complex of Indian civilization. Far from disintegrating under the pressures of industrialization and urban modernity, the Indian joint family has demonstrated extraordinary structural resilience by adapting into "functional jointness" and multi-local economic networks. Simultaneously, while marriage is transitioning from strict scriptural sacrament toward individual choice and digital matchmaking, traditional endogamic boundaries and gendered obligations continue to be actively reproduced in modern guises.',
  mindMap,
  sections,
}
