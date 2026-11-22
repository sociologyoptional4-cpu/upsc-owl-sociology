import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.1 — Lineage and Descent in India',
  center: 'Lineage & Descent in India',
  subtitle: 'Descent vs Alliance • Patrilineal Corporate Units • Matrilineal Systems & Male Authority',
  branches: [
    {
      title: 'Descent vs Alliance Theory',
      color: 'lavender',
      thinkers: ['Meyer Fortes', 'E.E. Evans-Pritchard', 'Claude Lévi-Strauss', 'Louis Dumont'],
      points: [
        'Descent theory: Unilineal corporate groups transmit status, property, and ritual duties across generations',
        'Alliance theory: Enduring marital exchanges between exogamous groups create organic social solidarity',
        'North India reflects descent-heavy patrilineages, while South India institutionalizes perpetual affinal alliances',
        'Dumont critique: Indian kinship cannot be reduced to Africanist unilineal descent without understanding caste affinity',
      ],
    },
    {
      title: 'Patrilineage & Ancestor Solidarity',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'T.N. Madan', 'A.M. Shah', 'Patricia Uberoi'],
      points: [
        'Lineage (Vansh/Khandan): Demonstrated genealogical descent from a known common male ancestor',
        'Clan (Gotra): Stipulated mythical descent regulating strict exogamy and ritual boundary enforcement',
        'Ancestor cult: Pinda-daan and Shraddha rituals bind living agnates to dead forebears in perpetual solidarity',
        'Mitakshara coparcenary: Male birth-right in ancestral land contrasts with Dayabhaga post-mortem partition',
      ],
    },
    {
      title: 'Matrilineal Systems: Khasi & Nair',
      color: 'mint',
      thinkers: ['Tiplut Nongbri', 'Bina Agarwal', 'Kathleen Gough', 'Robin Fox'],
      points: [
        'Khasi Kur & Kpoh: Matrilineal descent where youngest daughter (Ka Khadduh) inherits ancestral hearth',
        'Nair Tharavad: Corporate property unit in Kerala linked through matrilineal bloodlines and Sambandham unions',
        'The Matrilineal Puzzle: Female descent line does not abolish male authority; power shifts to mother’s brother',
        'Karanavan in Tharavad and Kni/Lyngdoh in Khasi society retain ultimate managerial and political authority',
      ],
    },
    {
      title: 'Contemporary Transformations',
      color: 'pink',
      thinkers: ['Hindu Succession Amendment 2005', 'Reetika Khera', 'Flavia Agnes'],
      points: [
        'HSAA 2005 granted equal coparcenary rights to Hindu daughters, challenging traditional Mitakshara norms',
        'Customary resistance: Village Khaps and landowning castes pressure daughters to waive inheritance rights',
        'Erosion of matriliny: Kerala Joint Hindu Family System Abolition Act 1975 broke Tharavad joint holdings',
        'Urbanization and migration fragment unilineal corporate groups into dispersed, sentiment-based kinship ties',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-01-kinship-zones-karve.webp',
    alt: 'P2 Unit 7 infographic: Regional Kinship Zones of India — Regional Kinship Diversity & Descent Systems in India',
    caption: 'Regional Kinship Diversity & Descent Systems in India: Spatial distribution of patrilineal and matrilineal descent matrices across Indian zones.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Lineage and Descent: Conceptual Foundations

Kinship systems establish how individuals identify relatives, transfer material resources, and build enduring community bonds. In simple terms, ==descent== answers the question *"Whose child am I and to which group do I naturally belong?"* while ==lineage== defines the exact group of living relatives who can trace their ancestry step-by-step to a real, remembered ancestor.

In sociological theory, two rival paradigms explain how kinship systems maintain social order:

1. **Descent Theory (British Structural-Functionalism):** Formulated by [[thinker:Emile Durkheim]], Meyer Fortes, and E.E. Evans-Pritchard through African tribal ethnographies, this view argues that *unilineal descent groups* (patrilineages or matrilineages) act as stable legal corporations. These groups hold land collectively, defend political territory, worship common ancestral spirits, and recruit new members automatically through birth.
2. **Alliance Theory (French Structuralism):** Championed by Claude Lévi-Strauss and applied to India by Louis Dumont, alliance theory insists that kinship is not just about tracing biological bloodlines. Instead, kinship is created and renewed through *marriage alliances*—the reciprocal exchange of marriage partners between different clans that binds otherwise hostile groups into a cooperative social whole [[link:Paper 1 ↔ Paper 2 Link: Descent Theory vs Alliance Theory]].

| Analytical Dimension | Descent Theory (Fortes, Evans-Pritchard) | Alliance Theory (Lévi-Strauss, Dumont) |
| :--- | :--- | :--- |
| **Primary Social Tie** | Consanguineal (blood, parent-child links) | Affinal (marriage exchange, in-law ties) |
| **Basic Kin Group** | Unilineal corporate descent group (lineage) | Intermarrying alliance network of clans |
| **Property & Rights** | Inherited automatically through lineal descent | Negotiated through marital prestations and gifts |
| **Indian Expression** | Dominates North Indian patrilineages (Vansh) | Dominates South Indian Dravidian cross-cousin marriage |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Lineage (Vansh / Khandan)',
    rightTitle: 'Clan (Gotra)',
    rows: [
      {
        aspect: 'Genealogical Depth',
        left: 'Demonstrated descent: Exact generational links can be named back 5 to 7 generations',
        right: 'Stipulated descent: Common origin from a mythical sage (rishi) cannot be traced step-by-step',
      },
      {
        aspect: 'Corporate Functions',
        left: 'Owns joint property, holds common agricultural land, and shares ritual pollution upon death',
        right: 'Lacks joint property; functions primarily as an exogamous category regulating marriage choices',
      },
      {
        aspect: 'Ritual Role',
        left: 'Performs annual Shraddha rites and ancestral pinda-daan together at lineage shrines',
        right: 'Shares an exogamous totem or rishi name without participating in joint daily rituals',
      },
      {
        aspect: 'Daily Interaction',
        left: 'Localized, face-to-face community (Biradari/Khandan) residing in close residential proximity',
        right: 'Dispersed across thousands of villages, often cutting across wide regional boundaries',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Patrilineage and Ancestor Solidarity in Rural North India

In rural North India, patrilineal descent organizes both the physical landscape and the moral universe of agrarian society. Every male child is born into a ==patrilineage== (*Vansh* or *Khandan*), meaning his name, caste standing, village belonging, and economic livelihood flow exclusively through his father's male ancestors.

This patrilineal solidarity relies on four structural pillars:

* **Ancestral Cult and Pinda-Daan:** As observed by [[thinker:MN Srinivas]] in South India (*Okka*) and T.N. Madan among Kashmiri Pandits (*Kotra*), ritual obligations to dead ancestors keep the living agnates unified. An agnatic group shares ritual pollution (*sootak*) during births and deaths. The ritual necessity of a son (*putra*) to offer *pinda* during Shraddha ceremonies creates deep religious urgency for male progeny.
* **Mitakshara Coparcenary:** Traditional Hindu jurisprudence under the Mitakshara school awarded every male agnate an automatic share in ancestral property (*coparcenary*) right from the moment of conception [[eg:In a Punjab agrarian joint family, a newly born grandson immediately acquires legal rights in his grandfather's agricultural land]].
* **Sapinda Exogamy:** Patrilineages maintain ritual boundaries by strictly prohibiting marriage among *Sapindas*—relatives connected by sharing common body particles (usually up to 7 generations on the father's side and 5 on the mother's side).
* **Clan (Gotra) and Village Exogamy:** Members of the same patrilineal clan (*gotra*) view one another as brother and sister (*bhai-behen*). In rural Haryana and Western Uttar Pradesh, this rule extends to the entire village territorial boundary, strictly barring marriage within the village [[eg:Khap Panchayats violently sanctioning same-gotra or same-village couples under the guise of protecting lineage honour]].`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Agnatic Birth', text: 'Male child enters patrilineage, acquiring automatic coparcenary rights in ancestral soil' },
      { label: 'Sapinda Inscription', text: 'Ritual purity rules and gotra exogamy define external marital boundaries' },
      { label: 'Coparcenary Management', text: 'Senior male agnate acts as Karta, managing corporate land holdings for the lineage' },
      { label: 'Shraddha & Pinda-Daan', text: 'Funerary rites link living descendants to dead ancestors, cementing unilineal solidarity' },
    ],
  },
  {
    kind: 'md',
    body: `## Matrilineal Systems: The Khasi and Nair Realities

Matrilineal descent systems in India present a stark contrast to North Indian patriliny, but they are frequently misunderstood by students. In a ==matrilineal society==, descent, group identity, and inheritance pass through the mother's line, but this does **not** mean that women exercise sovereign political rule.

Anthropologist Robin Fox coined the term ==Matrilineal Puzzle== to describe the structural tension inherent in matrilineal societies: women carry the descent line and hold ancestral property, yet men continue to exercise political, legal, and jural authority.

### 1. The Khasi System of Meghalaya
* **Clan and Hearth:** The Khasi people trace descent through the female line (*Kur*), rooted in an apical ancestress (*Ka Iawbei*).
* **Ultimogeniture (Ka Khadduh):** Unlike patrilineal societies where the eldest son inherits, Khasi customary law gives the youngest daughter (==Ka Khadduh==) custody of the ancestral home (*Iing-Seng*) and family property. She is the custodian of lineage rituals and must care for aged parents.
* **Male Authority Intact:** Sociologist Tiplut Nongbri highlights that the Khasi woman is merely the custodian, not the absolute owner. The maternal uncle (==Kni==) exercises real executive power over property sales and lineage disputes, while political chieftainship (*Syiem*) remains exclusively male [[eg:Khasi women holding land titles while village Dorbar Shnong village councils remain completely male-dominated]].

### 2. The Nair Tharavad of Kerala
* **The Tharavad Corporation:** In pre-modern Kerala, the Nairs lived in large matrilineal joint estates called ==Tharavad==, consisting of a mother, her sons and daughters, and the children of those daughters.
* **Visiting Husbands (Sambandham):** Nair women engaged in customary unions (*Sambandham*) with Nambudiri Brahmin or Nair men. The husband had no legal rights over his wife or children; he visited by night and returned to his own maternal home during the day.
* **The Karanavan's Jural Monopoly:** All administration of the Tharavad's vast lands and tenants was monopolized by the eldest male maternal relative, the ==Karanavan==. As Kathleen Gough established, Nair matriliny was fundamentally a system where property was transferred between maternal uncles and their sisters' sons (*avunculate*), leaving the daily authority firmly in male hands.`,
  },
  {
    kind: 'keyTerm',
    term: 'Lineage (Vansh / Khandan)',
    meaning: 'A unilineal descent group whose members can accurately trace their genealogical connections back to a single known, historical common ancestor.',
  },
  {
    kind: 'keyTerm',
    term: 'Descent vs Alliance',
    meaning: 'Descent theory focuses on unilineal property and ancestor solidarity, whereas alliance theory views marriage exchange between exogamous groups as the foundation of social cohesion.',
  },
  {
    kind: 'keyTerm',
    term: 'Ka Khadduh',
    meaning: 'The youngest daughter in Khasi matrilineal society who inherits the ancestral family home and ritual custody, subject to the jural counsel of her maternal uncle.',
  },
  {
    kind: 'keyTerm',
    term: 'Karanavan',
    meaning: 'The senior maternal uncle in a Nair Tharavad who exercises absolute legal, financial, and disciplinary authority over family land and members.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Matriliny is NOT Matriarchy',
    body: 'Always avoid equating matriliny with matriarchy in UPSC answers. Matriliny is a mode of tracing descent and inheritance through women; matriarchy implies absolute political rule by women. In both Khasi and Nair societies, jural authority, religious priesthood, and political power resided with male agnates (maternal uncles and brothers), leaving women vulnerable to institutional patriarchy.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Terminological Precision: Tharavad vs Dharwad',
    body: 'Never confuse the matrilineal Nair joint household (Tharavad) with Dharwad (an urban industrial and educational district in North Karnataka). Miswriting Dharwad in kinship questions immediately signals poor conceptual preparation.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Hindu Succession (Amendment) Act, 2005',
    body: 'The HSAA 2005 revolutionized Indian descent laws by granting daughters equal coparcenary rights by birth in Mitakshara joint family property, on par with sons. However, Bina Agarwal’s field studies reveal that customary patrilineal norms often coerce rural daughters into signing away their rights to protect fraternal goodwill.',
  },
  {
    kind: 'answerBox',
    intro: 'A standard 15-mark UPSC question asks: "Examine how patrilineal descent and ancestor solidarity shape property transmission and marital alliances in rural North India." Structure your answer with these core sociological dimensions:',
    points: [
      'Define patrilineal descent as unilineal recruitment through male agnates, creating corporate units (Khandan/Vansh) that outlast individual lifespans.',
      'Analyze Mitakshara coparcenary rights where ancestral agricultural land is jointly owned by male agnates, viewing daughters as transient guests (Paraya Dhan).',
      'Demonstrate how ancestor solidarity (Pinda-daan, Shraddha, Sootak death pollution) binds living agnates together, creating intense moral pressure to produce male heirs.',
      'Contrast lineage-based Sapinda exogamy and Gotra/village exogamy in North India with Dravidian alliance structures, noting how North Indian alliances reinforce structural asymmetry between wife-givers and wife-takers.',
      'Highlight contemporary legislative friction: The Hindu Succession (Amendment) Act 2005 versus customary Khap panchayat resistance against female land alienation.',
    ],
    conclusion: 'Conclude by noting that while statutory law now recognizes gender equality in coparcenary, customary patrilineal ideologies of ancestor solidarity and village exogamy continue to govern the everyday agrarian reality of North India.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Lineage and descent form the organizational backbone of traditional Indian social structure. While descent defines membership and transmits rights through genealogical connection, lineage groups operationalize corporate property, ancestor solidarity, and marriage rules. Examining patrilineal North India alongside matrilineal exceptions like the Khasis and Nairs reveals how descent organizes social power while preserving male jural authority across diverse regional matrices.',
  mindMap,
  sections,
}
