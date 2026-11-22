import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 14.1 · Perspectives on Caste: Ghurye, Srinivas, Dumont, Béteille',
  center: 'Perspectives on Caste',
  subtitle: 'Textual Indology • Field Functionalism • Structural Hierarchy • Multidimensional Power',
  branches: [
    {
      title: 'Indological & Attributional',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'Celestin Bougle', 'Herbert Risley'],
      points: [
        'Ghurye: Caste as segmental division, hierarchy, and endogamy',
        'Book view relies heavily on classical Hindu scriptures and Smritis',
        'Caste viewed as an enduring civilizational feature of Hindu ethos',
        'Critiqued for overstating consensus and ignoring ground conflict',
      ],
    },
    {
      title: 'Structural-Functional & Field View',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'McKim Marriott', 'S.C. Dube'],
      points: [
        'Shifted sociology from library texts to village participant observation',
        'Sanskritization: positional mobility by mimicking twice-born ritual habits',
        'Dominant Caste: numerical strength, land, and local political muscle',
        'Reveals dynamic local flexibility beneath rigid scriptural Varna',
      ],
    },
    {
      title: 'Structuralist Hierarchy',
      color: 'mint',
      thinkers: ['Louis Dumont', 'Celestin Bougle', 'Dipankar Gupta'],
      points: [
        'Dumont: Caste organized by binary opposition of Pure and Impure',
        'Homo Hierarchicus vs Western egalitarian Homo Equalis',
        'Religious status encompasses political and economic power',
        'Gupta counter: Multiple contested hierarchies and discrete caste pride',
      ],
    },
    {
      title: 'Weberian & Conflict Lenses',
      color: 'pink',
      thinkers: ['Andre Beteille', 'Max Weber', 'Dipankar Gupta'],
      points: [
        'Beteille: Tripartite framework of Caste (status), Class, and Power',
        'Harmonic system (norm matches reality) vs Disharmonic (norm clashes)',
        'Modern India is disharmonic: constitutional equality vs lived caste rank',
        'Detachment of power and wealth from traditional Brahminical ritual rank',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u04-01-caste-thinkers-matrix.webp',
    alt: 'Perspectives on Caste System showing Ghurye, Srinivas, Dumont, and Beteille frameworks',
    caption:
      'Four classical and contemporary sociological frameworks decode caste: from Indological scriptural attributes to empirical fieldwork, structuralist binary opposition, and multi-dimensional power stratification.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 14 Visual 01',
  },
  {
    kind: 'md',
    body: `## Decoding Caste: From Sacred Scripture to the Village Field

Caste is not a frozen relic of ancient scriptures, nor is it merely an occupational division of labour. At its core, the Indian caste system is an intricate web of social relations that connects birth-ascribed status, ritual cleanliness, marriage rules, and economic control. How sociologists understand this institution depends entirely on whether they read ancient texts from a library desk or step directly into dusty village courtyards to observe real power in action.

Over the past century, four distinct perspectives have dominated the sociological study of caste in India. The Indological approach read sacred texts to catalogue timeless attributes; structural functionalists left their libraries to document dynamic village transactions; structuralists treated caste as an ideological grammar of pure versus impure; and Weberian scholars unpacked how caste splits apart into class and political power in a democratic republic.

## The Indological & Attributional Lens: G.S. Ghurye

[[thinker:G.S. Ghurye]] pioneered the formal sociological study of caste in his 1932 classic, *Caste and Race in India*. Drawing on Sanskrit scriptures, colonial ethnographies, and historical texts, Ghurye formulated an ==attributional approach==, arguing that caste can be understood by listing its essential, defining institutional attributes.

Ghurye identified six core structural features of the caste system:
1. **Segmental Division of Society:** Society is divided into self-contained segments whose membership is fixed strictly by birth, not by individual achievement.
2. **Hierarchy:** An elaborate ladder of ritual rank places Brahmins at the summit and untouchable groups at the bottom.
3. **Restrictions on Feeding and Social Intercourse:** Elaborate taboos govern commensality, dictating who can accept *kachha* (water-cooked) or *pakka* (ghee-cooked) food from whom.
4. **Civil and Religious Disabilities and Privileges:** Strict segregation of residential spaces, ban on lower castes drawing water from village wells, and exclusive religious privileges reserved for upper castes.
5. **Lack of Unrestricted Choice of Occupation:** Hereditary linkage between specific sub-castes (*jatis*) and their traditional callings.
6. **Restrictions on Marriage (Endogamy):** Ghurye considered strict endogamy—marrying exclusively within one's own sub-caste—to be the central essence and enclosing wall of the entire system.

[[trap:A common examination mistake is treating Ghurye's attributes as lived village reality; critics like M.N. Srinivas pointed out that Ghurye provided a 'book view' written from an upper-caste literary perspective, largely ignoring everyday contestation.]]

## The Structural-Functional & Field-View Lens: M.N. Srinivas

Frustrated with the static 'book view' of Indologists, [[thinker:M.N. Srinivas]] revolutionised Indian sociology by championing the ==field view== through intensive participant observation in Rampur (*The Remembered Village*) and among the Coorgs. Srinivas demonstrated that while the pan-Indian scriptural *Varna* model has only four static tiers, real social life operates through thousands of fluid, local *Jatis*.

Srinivas introduced two indispensable analytical tools:

- **==Sanskritization==:** The process by which a low or middle caste alters its customs, dietary habits, rituals, and lifestyle in the direction of a high, twice-born (*Dvija*) caste, claiming higher ritual rank over one or two generations. [[eg:When the Lingayats of Karnataka, the Patidars of Gujarat, or Yadavs of Uttar Pradesh adopted vegetarianism, sacred threads, and Vedic rituals, they used Sanskritization to claim ritual mobility.]]
- **==Dominant Caste==:** Srinivas observed that real local influence does not belong automatically to the ritual Brahmin. A caste becomes dominant when it combines four decisive attributes: significant numerical strength, control over agricultural land, modern education or political connections, and a ritual status that is not excessively low. [[eg:The Jats in Haryana, Vokkaligas in Karnataka, and Marathas in Maharashtra exercise decisive local hegemony over village panchayats and agricultural labour despite not being Brahmins.]]

## The Structuralist Sacerdotal Lens: Louis Dumont

In *Homo Hierarchicus* (1966), French structuralist [[thinker:Louis Dumont]] argued that caste is not a utilitarian social structure or a collection of empirical attributes, but an overarching civilizational ideology. Dumont contrasted modern Western society, which he termed ==Homo Equalis== (founded on egalitarian individualism), with traditional Indian society, which he named ==Homo Hierarchicus== (founded on holistic hierarchy).

According to Dumont:
- **==Binary Opposition of Pure and Impure==:** Caste hierarchy is governed by a single structural principle: the absolute religious opposition between ritual purity (personified by the Brahmin) and ritual pollution (embodied by the Untouchable).
- **Status Encompasses Power:** In Western society, political and economic power dictates social status. In India, Dumont asserted, sacred ritual status stands conceptually superior to secular power: the King (*Kshatriya*) wields physical force, yet must bow before the spiritual purity of the Priest (*Brahmin*).
- **Consensual Ideology:** Dumont controversially claimed that all castes, including lower and untouchable groups, willingly accept and internalise this purity-pollution ideology as the legitimate order of things.

| Perspective | Key Proponent | Primary Method | Central Premise | Major Blindspot |
| --- | --- | --- | --- | --- |
| **Indological / Attributional** | G.S. Ghurye | Scriptural analysis & Sanskrit texts | Caste defined by six timeless cultural attributes | Treats caste as static; adopts upper-caste book view |
| **Structural-Functional** | M.N. Srinivas | Village fieldwork & participant observation | Caste is dynamic, localized, and shaped by Dominant Caste | Tends to emphasize village equilibrium over radical conflict |
| **Structuralist Sacerdotal** | Louis Dumont | Structural semiotics & comparative ideology | Pure vs Impure binary opposition; status encompasses power | Assumes universal consensus; ignores Dalit resistance and material exploitation |
| **Weberian & Multidimensional** | André Béteille | Stratification field analysis (Sripuram) | Caste, Class, and Power interlock and progressively detach | Must balance macro-political trends with regional diversities |

## The Weberian Multidimensional Lens: André Béteille

Studying the Tamil village of Sripuram in his seminal work *Caste, Class, and Power* (1965), [[thinker:André Béteille]] challenged Dumont's single-principle hierarchy by deploying [[thinker:Max Weber]]'s tripartite model of social stratification:

1. **Caste (Status / Honour):** The ritual hierarchy determined by birth, commensality, and pollution.
2. **Class (Economic Wealth):** Position in the agrarian economy, dividing landowners (*Mirashidars*), tenant cultivators, and landless wage labourers.
3. **Power (Political Authority):** Control over village panchayats, political party networks, and state patronage.

In traditional Sripuram, these three axes completely overlapped: the Brahmins owned the fertile wet land, commanded supreme ritual honour, and held political authority. Modernization, adult franchise, and non-Brahmin political movements (such as the Dravidian movement) systematically detached these axes: backward castes captured political office and non-Brahmins bought land, while many Brahmins migrated to urban clerical jobs.

### Harmonic vs Disharmonic Social Systems

In his 1971 treatise *Harmonic and Disharmonic Social Systems*, Béteille delivered a masterstroke critique of Dumont:
- **Harmonic Social System:** A society where the normative order (shared ideology and values) is consistent with the existential reality (the actual distribution of resources and power). Traditional India was a ==harmonic system of inequality==: scriptures legitimized hierarchy, and society was openly unequal.
- **Disharmonic Social System:** A society where the normative order clashes head-on with existential reality. Modern India is profoundly ==disharmonic==: the Indian Constitution guarantees fundamental equality, liberty, and adult suffrage (normative equality), while the existential ground reality remains deeply fractured by caste prejudice, rural landlessness, and caste atrocities. [[link:Link this in Paper 1 Unit 5 with Weberian status groups and Davis-Moore functionalist debates on stratification.]]

## Dipankar Gupta's Counter-Critique: Hierarchy vs Difference

Sociologist [[thinker:Dipankar Gupta]] (*Interrogating Caste*, 2000) directly confronted Dumont's sacerdotal consensus. Gupta argues that Dumont mistook the Brahmin's self-serving ideology for society-wide consensus.

- **Principle of Difference Over Hierarchy:** In contemporary India, castes operate primarily on the principle of ==difference== rather than shared hierarchy. Each caste possesses its own origin legend (*Jati Purana*) claiming noble descent, valour, and unique virtues.
- **Multiple Hierarchies:** There is no single universally accepted ladder. A Dalit or backward caste does not accept that it is inherently polluted; it views the Brahmin's claim as an illegitimate imposition backed by historical coercion.
- **Muddled Hierarchies:** Outside the extreme ends of the Brahmin and the Untouchable, the middle tiers are perpetually fluid, contested, and muddled. Castes mobilize horizontally as competing interest groups, trading ritual deference for democratic political leverage.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Louis Dumont (Homo Hierarchicus)',
    rightTitle: 'Dipankar Gupta (Interrogating Caste)',
    rows: [
      {
        aspect: 'Core Principle',
        left: 'Single universal hierarchy rooted in Pure vs Impure',
        right: 'Multiple discrete castes organized around horizontal difference',
      },
      {
        aspect: 'Consensus vs Contestation',
        left: 'Consensual ideology accepted by all strata including Dalits',
        right: 'No consensus; each caste has its own glorifying origin myth',
      },
      {
        aspect: 'Status vs Power',
        left: 'Religious status strictly encompasses political and economic power',
        right: 'Power and material interests drive caste pride and political competition',
      },
      {
        aspect: 'Methodological Basis',
        left: 'Structuralist analysis of classical texts and ritual codes',
        right: 'Empirical sociology of contemporary politics and rural conflict',
      },
      {
        aspect: 'View of Modernity',
        left: 'Substantialization of caste without structural destruction',
        right: 'Caste transformed into competing ethnic vote banks and pressure groups',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Indology (Ghurye)', text: 'Textual analysis of Sanskrit scriptures listing 6 structural attributes' },
      { label: 'Field View (Srinivas)', text: 'Village fieldwork reveals fluid Jatis, Sanskritization, and Dominant Caste' },
      { label: 'Structuralism (Dumont)', text: 'Ideological binary of Pure vs Impure where ritual status encompasses power' },
      { label: 'Weberian Triad (Béteille)', text: 'Caste, Class, and Power detach, creating a disharmonic social order' },
      { label: 'Difference & Pride (Gupta)', text: 'Multiple contesting hierarchies replace single sacerdotal consensus' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Attributional Approach',
    meaning:
      'A methodological framework pioneered by G.S. Ghurye that defines the caste system through an inventory of fixed, birth-based institutional attributes such as endogamy and commensal taboos.',
  },
  {
    kind: 'keyTerm',
    term: 'Sacerdotal View',
    meaning:
      'A perspective, epitomised by Louis Dumont, that interprets caste as a sacred religious hierarchy where ritual purity takes precedence over economic or military power.',
  },
  {
    kind: 'keyTerm',
    term: 'Dominant Caste',
    meaning:
      'M.N. Srinivas’s concept describing a local caste group that exercises decisive hegemony through land ownership, numerical strength, political connections, and respectable ritual status.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Disharmonic Social System',
    meaning:
      'André Béteille’s concept describing a society where the normative ideology (e.g. constitutional equality) clashes directly with lived existential reality (e.g. entrenched caste hierarchy).',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote:
      'Sanskritization is the process by which a low caste changes its customs, ritual, ideology, and way of life in the direction of a high caste.',
    context: 'Explaining dynamic positional mobility within the traditional ritual framework in Rampur and Coorg.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Scoring Edge: Contrast Dumont with Béteille and Gupta',
    body: 'Whenever UPSC asks about caste hierarchy (e.g., 2023, 2022, 2017), never write a one-sided essay praising Dumont. Always present Dumont’s structural purity-pollution thesis first, then immediately counter it with Béteille’s Sripuram findings (detachment of caste, class, and power) and Dipankar Gupta’s thesis of multiple hierarchies and discrete caste pride.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid Common Pitfall: Sanskritization vs Westernization',
    body: 'Do not equate Sanskritization with modernization. Srinivas was emphatic: Sanskritization causes positional change for a specific jati, but structural change in the overall system does NOT occur. It reinforces traditional ritual hierarchy rather than abolishing it.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Béteille’s Formula: Normative vs Existential',
    body: 'Harmonic = Normative Order matches Existential Reality (Traditional India: unequal values, unequal society). Disharmonic = Normative Order clashes with Existential Reality (Modern India: egalitarian Constitution, unequal society). This mismatch fuels social movements and democratic caste mobilisations.',
  },
  {
    kind: 'answerBox',
    intro:
      'The sociological analysis of the Indian caste system has progressed from an essentialist textual inventory toward dynamic empirical, structural, and political-economic frameworks.',
    points: [
      'Indological base (Ghurye): Framed caste through six defining attributes rooted in Sanskrit texts, identifying endogamy as the ultimate structural boundary.',
      'Field-view transition (Srinivas): Displaced the static book view by uncovering village realities of Sanskritization and secular hegemony exercised by Dominant Castes.',
      'Structuralist ideology (Dumont): Conceptualised caste as a holistic civilizational grammar governed by the binary opposition of Pure and Impure, wherein status encompasses power.',
      'Multidimensional Weberian critique (Béteille): Used Sripuram fieldwork to show how caste, class, and power have decoupled, creating a disharmonic modern society.',
      'Contemporary shift (Gupta): Exposed the absence of hierarchical consensus, proving that modern castes interact through discrete horizontal difference and competing pride.',
    ],
    conclusion:
      'Contemporary Indian sociology views caste not as a frozen sacred ladder, but as a resilient, democratically negotiated site of identity, contestation, and electoral assertion.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Examines the four classical perspectives on caste—Ghurye’s Indological attributes, Srinivas’s field-view dynamics, Dumont’s purity-pollution structuralism, and Béteille’s multi-dimensional Weberian stratification—supplemented by Dipankar Gupta’s critique of hierarchical consensus.',
  mindMap,
  sections,
}
