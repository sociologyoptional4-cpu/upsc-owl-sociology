import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.5 — Patriarchy, Entitlements & Division of Labour',
  center: 'Patriarchy & Division of Labour',
  subtitle: 'Brahminical Patriarchy • Seed & Earth Symbolism • Honour Killings • FLFP & Care Work',
  branches: [
    {
      title: 'Brahminical Patriarchy & Ambedkar',
      color: 'lavender',
      thinkers: ['Uma Chakravarti', 'B.R. Ambedkar', 'M.N. Srinivas', 'Kumkum Roy'],
      points: [
        'Chakravarti’s thesis: Caste hierarchy and gender subordination are co-constitutive pillars maintaining Brahminical purity',
        'Sexual surveillance: Strict control over upper-caste female sexuality prevents Pratiloma (inter-caste) pollution of bloodlines',
        'Ambedkar’s insight (1916): Endogamy is the mechanical essence of caste; Sati, child marriage, and widowhood enforced parity',
        'Subaltern contrast: Dalit women suffer dual exploitation—unpaid field labour for landlords alongside patriarchal domestic burdens',
      ],
    },
    {
      title: 'Cultural Symbolism: Seed and Earth',
      color: 'yellow',
      thinkers: ['Leela Dube', 'Patricia Uberoi', 'Bina Agarwal', 'Veena Das'],
      points: [
        'Beej-Kshetr metaphor: Man contributes active, generative "Seed" (caste/identity); woman is passive "Earth/Soil" (nurturer)',
        'Lineage monopoly: Children belong exclusively to the father’s patrilineage; the mother has no autonomous jural claim',
        'Socialization into subordination: Daughters internalize their status as transient guests (Paraya Dhan) destined for another hearth',
        'Property disenfranchisement: Women are culturally constructed as non-owners, justifying land alienation despite statutory reforms',
      ],
    },
    {
      title: 'Honour Killings & Violence',
      color: 'mint',
      thinkers: ['Prem Chowdhry', 'Pratiksha Baxi', 'Shakti Vahini (2018)', 'Reetika Khera'],
      points: [
        'Ideology of Izzat: Female chastity and marital conformity are constructed as the repository of community and lineage honour',
        'Khap Panchayats: Rural caste councils extra-judicially penalize inter-caste (Pratiloma) and same-gotra consensual unions',
        'Restoration of hegemony: Honour killings violently re-establish dominant-caste male supremacy against youth autonomy',
        'Judicial intervention: Supreme Court in Shakti Vahini (2018) declared Khap diktats and vigilante honour crimes unconstitutional',
      ],
    },
    {
      title: 'FLFP Paradox & Care Economy',
      color: 'pink',
      thinkers: ['Hanna Papanek', 'Claudia Goldin', 'Bina Agarwal', 'Amrita Pande'],
      points: [
        'Status Production: As family incomes rise, upper/dominant castes withdraw women from paid work to signal elevated status',
        'Unpaid care burden: NSSO Time Use Survey (2019) shows women spend 299 mins/day on unpaid domestic care vs 25 mins for men',
        'Surrogacy Act 2021: Banning commercial surrogacy moralizes motherhood while excluding queer, single, and live-in citizens',
        'Triple Talaq ban (2019): Socio-legal contestation between criminal justice deterrence and personal law secularization',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
    alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
    caption: 'Family, Marriage & Patriarchy in India: Uma Chakravarti’s Brahminical Patriarchy, the Seed-Earth ideology, and modern care economy entanglements.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Uma Chakravarti’s Concept of Brahminical Patriarchy

In Indian sociology, patriarchy cannot be analyzed as a universal, Western-style blanket oppression of women by men. In simple terms, patriarchy in India was historically engineered to protect the caste hierarchy: the higher the caste, the more violently it policed its women.

In her path-breaking 1993 essay *Conceptualising Brahmanical Patriarchy in Early India*, feminist historian ==Uma Chakravarti== established that caste hierarchy and gender subordination were twin structures that arose together:

1. **Preserving Purity of the Lineage:** Caste purity (*Jati shuddhata*) depends entirely on closed marriage boundaries (*endogamy*). If an upper-caste woman forms an alliance with a lower-caste man (a *Pratiloma* union), the ritual purity of the entire patrilineage is destroyed. Therefore, women’s sexuality was placed under strict surveillance.
2. **Scriptural Ideology (Stridharma and Manusmriti):** Ancient texts like the *Manusmriti* institutionalized absolute male control, declaring that a woman must never be independent—protected by her father in childhood, her husband in youth, and her sons in old age. Ideologies like *Pativrata* (worship of the husband) and the glorification of *Sati* persuaded women to internalize their own subordination as spiritual virtue.
3. **The Subaltern Duality:** While Brahminical patriarchy locked upper-caste women inside the domestic home to protect ritual purity, it systematically exposed lower-caste and Dalit women to economic exploitation in the fields and sexual predation by dominant-caste landlords [[eg:Dominant-caste landlords exercising customary sexual access over landless Dalit female agricultural laborers in feudal agrarian pockets]].

This analysis directly parallels [[thinker:BR Ambedkar]]'s famous 1916 paper *Castes in India: Their Mechanism, Genesis and Development*, where he proved that caste endogamy could only be sustained through the severe control of "surplus women"—culminating in Sati, enforced widowhood, and child marriage [[link:Paper 1 ↔ Paper 2 Link: Stratification and Gender]].`,
  },
  {
    kind: 'compare',
    leftTitle: 'Upper-Caste (Brahminical) Patriarchy',
    rightTitle: 'Lower-Caste / Subaltern Experience',
    rows: [
      {
        aspect: 'Primary Mechanism',
        left: 'Domestic confinement, purdah, and strict policing of female sexuality to preserve ritual caste purity',
        right: 'Economic exploitation in fields and public spaces; exclusion from ritual purity codes',
      },
      {
        aspect: 'Widowhood & Marriage',
        left: 'Enforced lifelong ascetic widowhood, tonsure, and historical Sati to prevent property claims',
        right: 'Customary widow remarriage (Chadar Andazi / Natra) permitted and economically necessary',
      },
      {
        aspect: 'Ideological Weapon',
        left: 'Pativrata, Stridharma, and ritual glorification of female sacrifice in scriptural texts',
        right: 'Direct physical coercion and sexual vulnerability to dominant-caste landowning men',
      },
      {
        aspect: 'Economic Labour',
        left: 'Withdrawn from manual labour to signal family status and ritual elevation (Status Production)',
        right: 'Engaged in strenuous wage labour in agriculture, construction, and domestic service',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Leela Dube’s "Seed and Earth" (Beej-Kshetr) Symbolism

Anthropologist ==Leela Dube== (*On the Construction of Gender*, 1986) unveiled how everyday linguistic metaphors and agricultural symbols naturalize gender inequality across patrilineal South Asia.

The dominant cultural metaphor is that of the ==Seed and Earth== (*Beej-Kshetr*):

* **The Man as Seed (Beej):** The male provides the active, potent, and generative seed. The seed determines the specific type of plant that grows—meaning the child's caste, clan (*Gotra*), lineage, name, and social identity belong exclusively to the father.
* **The Woman as Earth (Kshetr / Soil):** The female is merely the passive field or soil. Her body receives, nurtures, and shelters the seed, but imparts no autonomous lineage identity of its own.

### Sociological Consequences:
1. **Total Paternal Ownership:** Because the seed alone defines the crop, the father holds absolute jural ownership over the child. In cases of divorce or abandonment, the woman has no customary claim over her children [[eg:Traditional village elders granting child custody automatically to the father's family, viewing the mother as a temporary incubator]].
2. **Son Preference and Paraya Dhan:** The ideology dictates that only a son carries the ancestral seed into the next generation. A daughter is viewed as a transient guest (*Paraya Dhan*) whose nurturing merely prepares her to become the fertile field for another lineage's seed.
3. **Disenfranchisement from Land:** Because women are culturally categorized as "soil" rather than "seed-providers", their claims to inherit ancestral agricultural land are fiercely resisted by male agnates as an unnatural alienation of lineage property (Bina Agarwal).`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Caste Endogamy Imperative', text: 'Preserving ritual status requires rigid boundary closure between endogamous Jatis' },
      { label: 'Seed-Earth Naturalization', text: 'Cultural ideology frames men as generative seeds and women as passive, receptive soil' },
      { label: 'Sexual Surveillance', text: 'Women’s mobility and marital choices are policed to prevent Pratiloma (inter-caste) pollution' },
      { label: 'Violent Retribution', text: 'Consensual boundary transgression triggers vigilante honour crimes to restore lineage Izzat' },
    ],
  },
  {
    kind: 'md',
    body: `## Honour Killings: Violence and the Defense of Lineage Izzat

In rural North India (particularly Haryana, Punjab, Western UP, and Rajasthan), consensual inter-caste marriages—especially where a dominant-caste woman marries a Dalit man (*Pratiloma*)—frequently trigger extreme violent retribution known as ==honour killings==.

Sociologists like Prem Chowdhry and Pratiksha Baxi analyze honour crimes not as isolated acts of emotional anger, but as systemic institutional violence:

* **Woman’s Body as the Repository of Izzat:** The honour (*izzat*) of the family, lineage (*khandan*), and village community is symbolically invested in female chastity. A woman who chooses her own partner asserts bodily autonomy, which traditional patriarchs interpret as a public humiliation of their masculine authority.
* **Role of Khap Panchayats:** Unofficial caste councils (Khaps) function as extra-judicial vigilante courts. They enforce territorial and clan exogamy, sanctioning forced divorces, social boycotts (*Hukka-Paani bandh*), and execution of young couples under the banner of preserving customary morality.
* **Supreme Court Intervention (Shakti Vahini v. Union of India, 2018):** The Supreme Court ruled that two consenting adults possess a fundamental constitutional right to marry under Articles 19 and 21, declaring all Khap diktats and vigilante honour crimes strictly illegal and punishable under criminal law.`,
  },
  {
    kind: 'md',
    body: `## The Female Labour Force Participation (FLFP) Paradox & Unpaid Care

Despite spectacular economic growth and expanding female literacy over the past three decades, India's Female Labour Force Participation rate has remained stubbornly low, hovering between 25% and 32% (Periodic Labour Force Survey data).

Sociologists explain this paradox through distinct structural barriers:

1. **Status Production (Hanna Papanek):** In rising rural and semi-urban households, withdrawing women from manual wage labour is used as a potent symbol of upward caste and class mobility (the *Sanskritization of domesticity*). The husband’s ability to "keep his wife at home" signals financial prosperity.
2. **The Unpaid Care Deficit:** The NSSO Time Use Survey (2019) revealed that Indian women spend an average of **299 minutes per day** on unpaid domestic and caregiving work, compared to merely **25 minutes per day** for men. This staggering 10-to-1 ratio leaves women economically exhausted and professionally excluded.
3. **Surrogacy Act, 2021 & Reproductive Rights:** Sociologist Amrita Pande (*Wombs in Labor*) notes that by criminalizing commercial surrogacy and permitting only "altruistic surrogacy" for infertile heterosexual married Indian couples, the state paternalistically regulates female reproductive bodies while moralizing motherhood and excluding queer and single citizens.`,
  },
  {
    kind: 'keyTerm',
    term: 'Brahminical Patriarchy',
    meaning: 'Uma Chakravarti’s concept demonstrating how the caste hierarchy and gender subordination were engineered together to maintain the ritual purity of upper-caste lineages.',
  },
  {
    kind: 'keyTerm',
    term: 'Seed and Earth (Beej-Kshetr)',
    meaning: 'Leela Dube’s cultural metaphor where the male seed provides identity and ownership while the female earth is a passive field, naturalizing paternal monopoly over children.',
  },
  {
    kind: 'keyTerm',
    term: 'Status Production',
    meaning: 'Hanna Papanek’s thesis showing that withdrawing women from paid employment serves as a status-signaling device for families seeking upward caste and class mobility.',
  },
  {
    kind: 'keyTerm',
    term: 'Honour Crime',
    meaning: 'Systemic retributive violence orchestrated by patriarchal kin networks and caste councils to punish individuals who violate caste endogamy or gotra rules.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Ambedkar on Gender and Caste',
    body: 'Always link Uma Chakravarti’s Brahminical Patriarchy with Dr. B.R. Ambedkar’s 1916 thesis Castes in India. Ambedkar showed that endogamy creates the problem of "surplus men" and "surplus women"; to prevent surplus women from marrying outside the caste, Brahminical law created Sati, child marriage, and enforced widowhood.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Honour Killings Are NOT Crimes of Passion',
    body: 'Never describe honour killings in UPSC answers as sudden crimes of passion or individual rage. They are planned, calculated, and collectively endorsed community executions designed to protect caste boundaries and patriarchal land control.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Time Use Survey (2019) Data Point',
    body: 'Memorize the NSSO 2019 Time Use Survey metric: Indian women spend 299 minutes per day on unpaid domestic services compared to just 25 minutes spent by men. This 10x disparity is your sharpest empirical weapon when answering questions on the sexual division of labour.',
  },
  {
    kind: 'answerBox',
    intro: 'When answering a 20-mark question linking patriarchy, honour killings, and the maintenance of caste endogamy, utilize this 5-point sociological blueprint:',
    points: [
      'Establish the structural link between caste endogamy and gender control using Uma Chakravarti’s Brahminical Patriarchy and Dr. B.R. Ambedkar’s Castes in India.',
      'Deconstruct the cultural ideology of Izzat (family honour) and show how the female body is treated as the symbolic boundary of lineage purity.',
      'Explain the role of informal caste councils (Khap Panchayats) in policing Gotra, territorial exogamy, and Pratiloma (inter-caste) consensual marriages (Prem Chowdhry, Pratiksha Baxi).',
      'Analyze honour killing as collective patriarchal terrorism aimed at deterring youth autonomy and reinforcing dominant-caste agrarian hegemony.',
      'Contrast customary vigilante violence with constitutional fundamental rights under Articles 14, 19, and 21, highlighting the landmark Supreme Court ruling in Shakti Vahini (2018).',
    ],
    conclusion: 'Conclude that honour killings reflect the violent friction between a modern constitutional democracy guaranteeing individual choice and an entrenched agrarian patriarchy fiercely defending caste boundaries.',
  },
]

export const topic5En: TopicLangContent = {
  summary:
    'Patriarchy in India operates not as a detached gender hierarchy, but as an institutional matrix inextricably linked to caste reproduction, property entitlements, and the sexual division of labour. Pioneering feminist sociologists like Uma Chakravarti and Leela Dube demonstrate how Brahminical purity and cultural metaphors like "Seed and Earth" naturalize male dominance and justify violent boundary enforcement like honour killings. Today, these historical structures persist in modern economic forms, from depressed female labour participation to contested bio-political debates over surrogacy and unpaid care.',
  mindMap,
  sections,
}
