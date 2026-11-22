import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.1 · Family, Household & Marriage',
  center: 'Family, Household & Marriage',
  subtitle: 'Functionalism vs Critical/Feminist • Household Cycle • Indian Kinship Zones',
  branches: [
    {
      title: 'Functional & Critical Theories',
      color: 'lavender',
      thinkers: ['G.P. Murdock', 'Talcott Parsons', 'Edmund Leach', 'R.D. Laing'],
      points: [
        'Murdock (250 societies): 4 vital functions — sexual, reproductive, economic, educational',
        'Parsons: 2 irreducible functions — primary socialisation & personality stabilisation',
        'Critical: Vogel & Bell (scapegoating), Leach (overloaded circuit), Laing (gangster nexus), Cooper',
        'David Morgan (Family Practices / doing family) & David Cheal (implicit family talk)',
      ],
    },
    {
      title: 'Marxist & Feminist Critique',
      color: 'yellow',
      thinkers: ['Friedrich Engels', 'Margaret Benston', 'Fran Ansley', 'Ann Oakley'],
      points: [
        'Engels: monogamy emerged with private property to ensure undisputed paternal inheritance',
        'Benston: unpaid domestic labour means one capitalist wage buys two workers & cuts bargaining power',
        'Ansley: wives act as emotional "takers of shit", venting male worker alienation safely',
        'Oakley (mother-housewife alienation) & Jessie Bernard (His vs Her marriage)',
      ],
    },
    {
      title: 'Family vs Household & Cycle',
      color: 'mint',
      thinkers: ['A.M. Shah', 'I.P. Desai', 'M.S. Gore', 'Pauline Kolenda'],
      points: [
        'Family = kin/affective bond; Household = co-resident commensal unit (common roof & kitchen)',
        'A.M. Shah: Developmental Cycle via expansion, shrinking, fission, and fusion',
        'Census reality: average Indian household is 4.8 members (Normal, Institutional, Houseless)',
        'I.P. Desai (Functional Jointness) & Gore/Singer/Srinivas (industrial compatibility)',
      ],
    },
    {
      title: 'Marriage & Kinship Zones',
      color: 'pink',
      thinkers: ['Irawati Karve', 'K.M. Kapadia', 'T.N. Madan', 'Louis Dumont'],
      points: [
        'Hindu Vivah as sacred Sanskara (Dharma, Praja, Rati & 3 Rinas) vs Muslim Nikah as civil contract',
        'Karve’s 4 Kinship Zones: Northern (Indo-Aryan), Southern (Dravidian), Central, Eastern',
        'North: 4-gotra & village exogamy, hypergamy (bride-takers superior), expanding kin circle',
        'South: cross-cousin & uncle-niece preferential marriage, village endogamy, consolidated kin',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-01-family-lineage-patriarchy.webp',
    alt: 'P1 Unit 9 infographic: Family, Lineage & Patriarchy — Classical Functionalism vs Feminist & Lineage Perspectives',
    caption:
      'Classical functionalists celebrated the family as society’s emotional cushion, whereas critical, Marxist, and feminist sociologists exposed its hidden domestic burdens, power politics, and lineage hierarchies.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Are Kinship, Family, and Marriage — and Why Are They So Deeply Cherished?

Almost every social institution faces fierce public criticism: citizens routinely mock politicians, workers distrust big corporations, and reformers question religious orthodoxy. Yet across cultures, the ==family== remains uniquely cherished because it is our very first social world — the primary cradle that feeds us, teaches us our mother tongue, and stands by us in crisis. Sociologically, the family is embedded inside a wider web called ==kinship== (rishtedari): a structured system of social relationships based on blood ties (==consanguineal kin==, like parents and siblings) and marriage ties (==affinal kin==, like spouses and in-laws).

Through comparative cross-cultural work, anthropologist [[thinker:G.P. Murdock]] mapped degrees of kinship around an individual (Ego): **8 primary kin** (father, mother, brother, sister, husband, wife, son, daughter — also highlighted in India by [[thinker:S.C. Dube]]), **33 secondary kin** (primary kin of primary kin, such as *Mama* or *Dadaji*), and **151 tertiary kin** (such as first cousins or *Par-dadaji*). Together, kinship, marriage, and family regulate sexual behaviour, property inheritance, and social identity.

## Theoretical Perspectives on the Family: From Warmth to Power Politics

### 1. The Functionalist Lens: G.P. Murdock and Talcott Parsons

In the mid-20th century, functionalist sociologists asked why some form of family exists in every known human society. They argued that the family survives because it performs indispensable survival tasks for both individuals and the larger social order.

- **[[thinker:G.P. Murdock]] (*Social Structure*, 1949):** Studying **250 societies** ranging from small hunting tribes to industrial nations, Murdock defined the family by four markers — **common residence, economic cooperation, reproduction, and a socially approved sexual relationship** between at least two adults of both sexes with their biological or adopted children. He identified **four universal vital functions**: (1) **Sexual** (channelising desire via marriage to prevent disruptive jealousy), (2) **Reproductive** (supplying new members), (3) **Economic** (gendered division of labour), and (4) **Educational** (primary socialisation like toilet training and language). [[trap:Murdock’s rigid definition is challenged by empirical exceptions: Israeli Kibbutz communal child-rearing, ~30% female-headed households among poor Black Americans, matrilineal Nayar Tharavads in Kerala, childfree couples, and same-sex families.]]
- **[[thinker:Talcott Parsons]] (Basic & Irreducible Functions):** When industrialisation shifted production, schooling, and healthcare out of the home, critics claimed the family was losing its purpose. Parsons countered that the modern ==isolated nuclear family== shed secondary tasks only to specialise in **two basic and irreducible functions**: (1) **Primary Socialisation of the Young** (patiently instilling core societal norms in toddlers with warmth no school can replicate), and (2) **Stabilisation of Adult Personalities** (acting as an unconditional emotional recharge station — the *"warm bath theory"* — after exhausting, transactional workdays). [[eg:When a tired corporate employee or teacher returns home from Delhi traffic and is hugged tightly by his 5-year-old daughter simply for existing rather than for his salary, Parsons’s personality stabilisation is at work.]]

### 2. Critical & Dysfunctional Perspectives: The Dark Side of the Home

By the 1960s and 1970s, critical sociologists and psychiatrists challenged Parsons’s rosy "warm bath" image, showing how the isolated family can become a pressure cooker of anxiety, conformity, and trauma.

- **[[thinker:Ezra Vogel]] and [[thinker:Norman Bell]] (Emotional Scapegoating):** Studying children with schizophrenia, they showed how parents with unresolved marital conflicts project their hostility onto a child — turning the child into an ==emotional scapegoat== (*bali ka bakra*). [[eg:A frustrated mother scolding her young son, "Tum bilkul apne baap jaise nalayak ban rahe ho," releases marital tension so the marriage survives, but inflicts deep psychological scarring on the child.]]
- **[[thinker:Edmund Leach]] (Overloaded Electrical Circuit):** In *A Runaway World?*, Leach compared the modern isolated nuclear family to an **overloaded electrical circuit** ready to blow a fuse. Unlike joint families where aunts, grandparents, and cousins cushion tension, nuclear spouses pile every expectation (lover, best friend, therapist, financier) onto one partner while teaching children to distrust the outside world, producing suspicious citizens travelling in metros with cold "poker faces."
- **[[thinker:R.D. Laing]] (Gangster Model & Family Nexus):** In *The Politics of the Family*, Laing compared family coalitions to rival underworld gangs that inflict emotional violence under the guise of "protective love" — such as a father shaming a son over 10th-board marks (*"Sharma ji ka beta dekho"*) while the mother forms a defensive alliance.
- **[[thinker:David Cooper]] (*The Death of the Family*):** Cooper argued that =="bringing up a child is bringing down a person"== — through the **interiorisation of the family**, parents crush a child’s innate artistic or revolutionary spark to force safe, conformist careers.
- **[[thinker:David Morgan]] (Family Practices) & [[thinker:David Cheal]] (Family Talk):** Moving beyond static structure, Morgan reframed family from a noun to an active verb — **"doing family"** through mundane everyday practices of caring, cooking, and lounging with fluid boundaries. Cheal added that ==family talk== relies on deep implicit shared history. [[eg:When a mother wakes her husband at 1:00 AM and says just one word — "Milk!" — he immediately knows the container is on his bedside and the baby is hungry, because implicit family talk compresses a whole paragraph into one word.]]

### 3. Marxist & Feminist Perspectives: Property, Unpaid Labour, and His/Her Marriage

Marxist and feminist scholars ask a sharp question: *functional for whom?* They reveal how the family serves both capitalism and patriarchy.

- **[[thinker:Friedrich Engels]] (*The Origin of the Family, Private Property and the State*):** Tracing evolution from early sexual promiscuity to agricultural surplus, Engels argued that ==monogamous marriage== was invented by men once **private property** emerged, so fathers could control women’s sexuality and guarantee undisputed biological paternity for inheritance.
- **Marxist Feminists ([[thinker:Margaret Benston]], [[thinker:Fran Ansley]], [[thinker:Angela Davis]], [[thinker:Diane Feeley]]):** First, working-class families biologically **reproduce labour power** (Davis) and train children into blind obedience (*"Haanji Papa"* at home becoming *"Yes Boss"* at the office — Feeley). Second, family responsibility crushes a male worker’s bargaining power so he cannot strike, while women’s unpaid cooking and cleaning mean **"one wage buys the capitalist the labour of two persons"** (Benston). Third, [[thinker:Fran Ansley]] famously argued that wives act as **"takers of shit"** — absorbing the alienated male worker’s workplace rage at home so capitalist bosses sleep safely.
- **Liberal & Radical Feminists ([[thinker:Ann Oakley]], [[thinker:Jessie Bernard]]):** Oakley exposed how early gender socialisation (*guns for boys, kitchen sets for girls*) traps women in the monotonous, unpaid **mother-housewife role**, calling its widespread boredom "public health crisis number one." [[thinker:Jessie Bernard]] proved that every marriage actually contains **two marriages — "His Marriage" and "Her Marriage"**: married men live longer, healthier, happier lives than single men (net beneficiaries), whereas married women suffer higher stress and poorer health than unmarried women (net losers).

| Theoretical Lens | Key Thinkers | Core View of Family | Key Concept / Metaphor |
| --- | --- | --- | --- |
| Functionalist | G.P. Murdock, T. Parsons | Harmonious bedrock of social stability | 4 Vital & 2 Irreducible Functions |
| Critical / Psy | Vogel & Bell, Leach, Laing, Cooper | Pressure cooker of conflict & conformity | Scapegoating, Overloaded Circuit, Gangster Nexus |
| Marxist Feminist | Engels, Benston, Fran Ansley | Superstructure serving capitalism | Private Property, One Wage Buys Two, Takers of Shit |
| Feminist / Practice | Ann Oakley, Jessie Bernard, D. Morgan | Site of gender asymmetry & daily action | Mother-Housewife Role, His/Her Marriage, Doing Family |

## Distinguishing Family and Household: A.M. Shah’s Developmental Cycle

In everyday conversation we use "family" and "household" as synonyms, but in sociology they are strictly distinct concepts. As [[thinker:A.M. Shah]] argued in *The Household Dimension of the Family in India*, the word **"family"** is semantically ambiguous because people use it for co-residents, non-resident parents/children, wide kinship networks, or entire lineages. By contrast, a ==household== is an exact, empirically measurable **co-residential and commensal unit** — defined by the Census of India as a group of persons who normally live together under **one roof** and eat food cooked in a **common kitchen** (*common chulha*).

- **Why "Household" Is Methodologically Superior:** Unlike a family (which must be related by blood/marriage and cannot be a single person), a household can include unrelated domestic helps, can consist of a **single-person unit**, or can be classified by the Census into **Normal**, **Institutional** (hostels, PGs, jails, ashrams), and **Houseless** (pavement dwellers). Moreover, India has over a century of decadal Census data on households (since 1881), revealing an all-India average household size of **4.8 members** (4.9 rural, 4.6 urban; out of 24.8 crore households in 2011, 17.3 crore had one married couple and 4.7 crore had two or more married couples).
- **The Developmental Cycle of the Household (Process View):** Supported by [[thinker:A.M. Shah]], [[thinker:I.P. Desai]], [[thinker:K.M. Kapadia]], and [[thinker:M.S. Gore]], the process view rejects freezing Indian homes into a rigid "nuclear vs joint" binary. Every household moves through a dynamic **developmental life cycle** driven by four processes: **Expansion** (births, adoption, or a bride entering via *in-marriage*), **Shrinking** (deaths or a daughter leaving via *out-marriage*), **Fission** (brothers partitioning the house due to space or conflict), and **Fusion** (a widowed parent or separated sister moving back in). [[eg:A 3-generation 8-member Indian home shrinks to a 4-member nuclear household when grandparents pass away and sisters marry out, then expands back into a 3-generation joint household as soon as the son marries and has a baby!]]
- **Structural Adaptation Studies in India:** Countering Western modernisation theorists ([[thinker:William J. Goode]], [[thinker:Aileen Ross]] in Bengaluru) who predicted rapid nuclearisation, Indian field studies proved the joint family adapts: [[thinker:I.P. Desai]] (Mahua, Gujarat) coined ==Functional Jointness== (brothers living in separate flats in Mumbai or Delhi yet sharing authority, festive rituals, and medical/wedding expenses); [[thinker:M.S. Gore]] (Agrawals of Delhi), [[thinker:Milton Singer]] (Madras industrialists), and [[thinker:M.N. Srinivas]] (Coorg *Okka*) showed how joint families pool capital and trust to thrive in modern capitalism. [[link:Connect this directly with Paper 2 Unit 7 (Systems of Kinship in India) and Pauline Kolenda’s 12-fold typology of Indian families.]]

## Institution of Marriage & Irawati Karve’s Four Kinship Zones

Is marriage in India still a sacred bond? Traditionally, Hindu marriage (==Vivah==) is a religious **sacrament** (*Sanskara*) performed before sacred fire (*Agni*) with *Saptapadi* (seven steps), aimed at three hierarchical goals — **Dharma** (religious duty), **Praja** (progeny to repay ancestral debt or *Pitru Rina* alongside *Deva Rina* and *Rishi Rina*), and **Rati** (sexual pleasure) — and anchored in rituals like *Kanyadan* and the *Kulvadhu* role. By contrast, Islamic marriage (==Nikah==) is a **civil contract** (*Nikahnama*) requiring explicit consent (*Qubool*), witnesses, and **Meher** (financial security paid to the bride). Today, education, the Hindu Marriage Act 1955 (legalising divorce), court marriages, matrimonial apps, and destination weddings have partially secularised marriage into a companionate bond, yet sacred rituals and parental blessings remain deeply resilient.

In her landmark book *Kinship Organization in India* (1953), anthropologist [[thinker:Irawati Karve]] divided India into **four kinship zones** along linguistic, geographical, and marital lines, noting that while rules differ sharply, the **joint family ideal** unifies all four:

- **1. Northern Zone (Indo-Aryan / Sanskritic — Hindi, Punjabi, Bengali, Pahadi):** Strict separation between blood (*Bhaiya/Pitaji*) and affinal terms (*Saala/Sasurji*); generation-ranked hierarchy; **Four-Gotra Exogamy** (avoiding self, mother’s, Dadi’s, and Nani’s gotra), **Sapinda Exogamy**, and **Village Exogamy**; strict ban on cousin marriage or daughter exchange; **Hypergamy (Anuloma)** where bride-takers (*Daamaad*) outrank bride-givers; bride enters a household of strangers in an **ever-expanding kinship circle**.
- **2. Southern Zone (Dravidian — Tamil, Telugu, Kannada, Malayalam):** No village exogamy and no 4-gotra ban; **preferential cross-cousin marriage** (mother’s brother’s child or father’s sister’s child) and **elder sister’s daughter (uncle-niece) marriage**; age relative to Ego (*Anna*) matters more than generation; blood relatives become in-laws, so the bride marries into a familiar, supportive home with relative equality between bride-givers and bride-takers in a **consolidated, inward-looking kin circle** (plus matrilineal pockets like Kerala Nayar *Tharavads*).
- **3. Central Zone (Rajasthan, Gujarat, MP, Maharashtra, Odisha):** A transitional hybrid bridging North and South — e.g., Rajasthan Jats follow 2-gotra exogamy and Baniyas 4-gotra, while Maharashtra Kunbis and Marathas allow cross-cousin marriage and Gujarat practices *Nantra* (levirate).
- **4. Eastern Zone (Scattered Austro-Asiatic / Mundari & Mon-Khmer tribes):** Mundari tribes (Santhal, Ho, Munda) are patrilineal with youth dormitories (*Gitiora*) and bride-price/service marriage, whereas Mon-Khmer **Khasis of Meghalaya** practice matriliny and **ultimogeniture** (youngest daughter *Ka Khadduh* inherits ancestral property).`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Phase 1: 3-Gen Joint', text: 'Grandparents, parents, and unmarried siblings live under one roof (8 members)' },
      { label: 'Phase 2: Shrinking', text: 'Grandparents pass away and sisters leave via out-marriage -> Nuclear unit (4 members)' },
      { label: 'Phase 3: Expansion', text: 'Son marries (in-marriage) and has a child -> Back to 3-Gen Joint household (6 members)' },
      { label: 'Phase 4: Fission / Fusion', text: 'Brothers split kitchen (fission) or widowed parent rejoins (fusion) — A.M. Shah' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'North Indian Kinship Zone (Irawati Karve)',
    rightTitle: 'South Indian Kinship Zone (Irawati Karve)',
    rows: [
      {
        aspect: 'Linguistic & Spatial Base',
        left: 'Indo-Aryan / Sanskritic belt across North India',
        right: 'Dravidian language states of Peninsular South India',
      },
      {
        aspect: 'Exogamy & Village Rules',
        left: 'Strict Four-Gotra, Sapinda, and Village Exogamy',
        right: 'Clan exogamy only; marriages within same village permitted',
      },
      {
        aspect: 'Cousin & Preferential Marriage',
        left: 'All cousin marriages strictly taboo as incestuous',
        right: 'Cross-cousin and uncle-niece (mama-bhanji) marriages preferred',
      },
      {
        aspect: 'Kinship Terminology',
        left: 'Clear split between consanguineal (blood) and affinal (in-law) terms',
        right: 'Overlapping terms ranked by age relative to Ego rather than generation',
      },
      {
        aspect: 'Bride-Giver vs Bride-Taker',
        left: 'Hypergamous hierarchy: bride-takers superior, one-way dowry flow',
        right: 'Relative symmetry and direct exchange of daughters between clans',
      },
      {
        aspect: 'Bride’s Position & Kin Circle',
        left: 'Bride enters strangers’ house; ever-expanding kinship circle',
        right: 'Bride enters familiar kin circle; consolidated inward-looking network',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Irreducible Functions of Family (Talcott Parsons)',
    meaning:
      'The two core tasks that no external agency can replace in modern industrial society: Primary Socialisation of children and Stabilisation of Adult Personalities ("warm bath theory").',
  },
  {
    kind: 'keyTerm',
    term: 'Developmental Cycle of the Household (A.M. Shah)',
    meaning:
      'The processual view that Indian households are not frozen as nuclear or joint, but continuously expand, shrink, fission, and fuse across their demographic life course.',
  },
  {
    kind: 'keyTerm',
    term: 'Functional Jointness (I.P. Desai)',
    meaning:
      'A modern adaptation where kin live in separate urban nuclear residences yet remain functionally united through shared authority, mutual financial obligations, and collective rituals.',
  },
  {
    kind: 'keyTerm',
    term: 'Family Practices (David Morgan)',
    meaning:
      'Conceptualising family not as a rigid structural noun ("the family") but as an active everyday verb ("doing family") through routine acts of care, emotion, and shared talk.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The joint household adapts actively to modern education and urban enterprise rather than vanishing into Western individualism.',
    context: 'Showing through the Coorg Okka and urban middle-class networks how Indian kinship reshapes modernity.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'How to Score 14+/20 on Theoretical Perspectives on Family',
    body: 'Never stop at Murdock and Parsons! Structure your answer across 5 lenses: (1) Functionalist (Murdock’s 4 functions, Parsons’s 2 irreducible functions), (2) Critical/Psychiatric (Vogel & Bell’s scapegoating, Leach’s overloaded circuit, Laing’s gangster nexus, Cooper’s death of family), (3) Marxist Feminist (Engels on private property, Benston’s one wage buys two, Ansley’s takers of shit), (4) Feminist (Oakley’s housewife alienation, Bernard’s His/Her marriage), and (5) Interactionist/Practice (Morgan’s doing family & Cheal’s family talk).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Exam Trap: Confusing Family with Household',
    body: 'When UPSC asks to distinguish Family and Household (2018, 2016), do not just write "joint vs nuclear". Anchor your answer in A.M. Shah: Family is an affective kinship group defined by blood/marriage, whereas Household is a Census-measurable commensal and co-residential unit sharing one roof and one kitchen (which can be a single person or include unrelated domestic workers).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook for Indian Family Studies (2015 PYQ)',
    body: 'Remember the acronym GDS-SKR: Gore (Agrawals of Delhi), Desai (Mahua functional jointness), Shah (Household developmental cycle), Singer (Madras industrialists), Kolenda (12 family types), and Ross (Bengaluru nuclearisation).',
  },
  {
    kind: 'answerBox',
    intro:
      'Family, household, and marriage form the institutional core of kinship, mediating between biological reproduction, emotional security, property inheritance, and macro-economic change.',
    points: [
      'Functionalist baseline: G.P. Murdock (250 societies) established 4 vital functions, while Talcott Parsons identified 2 irreducible functions — primary socialisation and adult personality stabilisation.',
      'Critical & Feminist counter-lens: Vogel & Bell (scapegoating), Leach (overloaded circuit), Laing (gangster nexus), Benston (unpaid domestic labour), Ansley (takers of shit), and Bernard (His vs Her marriage) expose hidden hierarchies.',
      'Practice turn: David Morgan’s "Family Practices" and David Cheal’s "Family Talk" shift analysis from static household boxes to fluid everyday acts of "doing family".',
      'Household vs Family (A.M. Shah): Household is a precise co-residential/commensal unit moving through a developmental cycle (expansion, shrinking, fission, fusion), while I.P. Desai highlights functional jointness.',
      'Regional & Marital diversity: Irawati Karve’s 4 kinship zones contrast North India’s exogamous, hypergamous expanding kin circle with South India’s cross-cousin, consolidated kin system alongside sacred-to-contractual shifts in marriage.',
    ],
    conclusion:
      'Rather than disintegrating under modernity, family and marriage are continuously renegotiating their boundaries between structural obligation and individual agency.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Explores kinship, family, household, and marriage through functionalist (Murdock, Parsons), critical (Leach, Laing, Cooper), Marxist-feminist (Engels, Benston, Ansley, Oakley, Bernard), and practice lenses (David Morgan), alongside A.M. Shah’s household developmental cycle and Irawati Karve’s four Indian kinship zones.',
  mindMap,
  sections,
}