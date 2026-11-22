import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 14.2 · Features of Caste System',
  center: 'Features of Caste System',
  subtitle: 'Attributional vs Interactional • Jajmani Breakdown • Non-Hindu Caste • Modern Continuance',
  branches: [
    {
      title: 'Attributional vs Interactional',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'M.N. Srinivas', 'McKim Marriott'],
      points: [
        'Attributional: Fixed structural qualities like endogamy and hereditary calling',
        'Interactional: Dynamic transactional patterns of food, services, and local power',
        'Book view catalogues timeless rules; field view uncovers live negotiation',
        'Marriott: Coded-substance exchanges define local jati boundaries',
      ],
    },
    {
      title: 'Jajmani System & Its Decline',
      color: 'yellow',
      thinkers: ['William Wiser', 'Harold Gould', 'Thomas Beidelman'],
      points: [
        'Hereditary non-market patron-client ties between Jajman and Kamins',
        'Functionalist harmony (Wiser) countered by exploitative coercion (Beidelman)',
        'Monetization, green revolution, and rural-urban migration broke ties',
        'Traditional barter of ritual service replaced by contractual wage labour',
      ],
    },
    {
      title: 'Discrete Castes & Non-Hindu Forms',
      color: 'mint',
      thinkers: ['Dipankar Gupta', 'Imtiaz Ahmad', 'Surinder Jodhka'],
      points: [
        'Gupta: Discrete castes assert horizontal difference over single hierarchy',
        'Muddled hierarchies: Contested status outside extreme top and bottom ranks',
        'Muslim stratification: Ashraf (noble), Ajlaf (clean), and Arzal (degraded)',
        'Sikh Jat landowners vs Mazhabis; Dalit Christians in Kerala and Tamil Nadu',
      ],
    },
    {
      title: 'Persistence & Transformation',
      color: 'pink',
      thinkers: ['Rudolph & Rudolph', 'Rajni Kothari', 'Harish Damodaran'],
      points: [
        'Caste does not disappear; it substantializes into political pressure groups',
        'Rudolph & Rudolph: Caste associations democratize representation',
        'Caste capitalism: Social capital drives modern business cartels and networks',
        'Digital persistence: Matrimonial algorithms and urban housing segregation',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u04-02-untouchability-annihilation.webp',
    alt: 'Features, Jajmani and Untouchability infographic showing structural shifts and non-Hindu caste',
    caption:
      'The modern evolution of caste: transitioning from traditional Jajmani occupational interdependence to discrete political interest groups, non-Hindu social stratification, and digital caste networks.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 14 Visual 02',
  },
  {
    kind: 'md',
    body: `## The Living Anatomy of Caste: From Static Rules to Dynamic Realities

Ask an ordinary citizen what defines caste, and they will likely mention marriage within the community or hereditary occupations. Yet when sociologists look beneath the surface, they discover that caste operates simultaneously as a cultural identity, an economic division of resources, and a fierce democratic voting bloc. Far from crumbling under the weight of industrial cities and constitutional democracy, caste has proved to be one of the most adaptive institutions in human history.

To understand how caste functions in real life, sociology moved past abstract textbook definitions. Scholars debated whether caste is an unchangeable list of classical attributes or a fluid set of everyday interactions, dissected the rise and fall of the traditional village economy, uncovered caste-like discrimination within non-Hindu religions, and mapped how modern politics transformed ancient hierarchies into powerful interest groups.

## Methodological Divide: Attributional vs Interactional Approaches

Sociologists approach the features of caste through two competing methodological lenses:

### 1. The Attributional Approach
Pioneered by [[thinker:G.S. Ghurye]] and later elaborated by structuralists like [[thinker:Louis Dumont]], this perspective views caste as an inherent cluster of fixed cultural and religious attributes. It treats the system as closed, static, and scripturally ordained.
- **Key Focus:** Identifying universal properties—such as endogamy, hereditary occupation, hierarchy, commensal restrictions, and concepts of ritual purity and pollution.
- **Data Source:** Classical Sanskrit texts, Dharmashastras, colonial gazetteers, and high-caste oral traditions.
- **Analytical Stance:** Evaluates what caste *ought to be* according to religious norms.

### 2. The Interactional Approach
Championed by field sociologists like [[thinker:M.N. Srinivas]], [[thinker:André Béteille]], and [[thinker:McKim Marriott]], this perspective analyses how real people and castes actually interact in specific, localized village settings.
- **Key Focus:** Dynamic, situational transactions—such as who accepts water, cooked food (*kachha* vs *pakka*), or ritual services from whom, and how wealth and political authority distort ritual rank.
- **Data Source:** Intensive village fieldwork, participant observation, and empirical surveys.
- **Analytical Stance:** Demonstrates that ranking is fluid, contested, and deeply shaped by secular economic leverage rather than passive scriptural obedience.

| Dimension | Attributional Approach | Interactional Approach |
| --- | --- | --- |
| **Pioneering Scholars** | G.S. Ghurye, Louis Dumont, Célestin Bouglé | M.N. Srinivas, André Béteille, McKim Marriott |
| **Primary Method** | Indology, textual analysis, colonial ethnography | Fieldwork, village participant observation |
| **View of Hierarchy** | Single, pan-Indian, closed, and static | Fluid, localized, situational, and contested |
| **Role of Secular Power** | Subordinate to sacred ritual purity | Decisive; economic and political muscle reshapes rank |
| **Core Concept** | Six structural attributes of caste | Dominant Caste, transactional food and gift exchange |

## The Jajmani System: Reciprocity or Feudal Coercion?

In pre-industrial rural India, caste features were sustained materially by the ==Jajmani system==—a traditional, non-market network of reciprocal economic, social, and ritual relationships between landowning patron families (*Jajmans*) and servicing artisan or labouring castes (*Kamins* or *Purjans*).

- **The Functionalist View (William Wiser):** In *The Hindu Jajmani System* (1936), Wiser portrayed the arrangement as a harmonious, interdependent organic community where each caste performed its hereditary duty (*swadharma*) in exchange for customary grain shares, clothing, and house sites, ensuring total village self-sufficiency.
- **The Conflict Critique (Thomas Beidelman, Kathleen Gough):** In *A Comparative Analysis of the Jajmani System* (1959), Beidelman demolished the romantic functionalist myth, proving that Jajmani was an asymmetric, coercive feudal apparatus. Landowning dominant castes maintained a monopoly over agrarian wealth and used customary debt to tie landless lower castes into hereditary servitude.

### Modern Decline of Jajmani
Over the last five decades, the Jajmani system has virtually collapsed across India due to:
1. **Monetization and Cash Economy:** Cash wages replaced customary grain allowances (*faslana*), severing moral-ritual obligations.
2. **Technological Displacement:** Factory-made plastic goods, chemical fertilizers, and modern barbershops displaced traditional potters, weavers, and service castes.
3. **Green Revolution and Land Commercialization:** Dominant farmers shifted from traditional patronage to profit-maximizing contractual day-labourers.
4. **Outward Migration:** Subaltern youth migrated to urban construction hubs and industrial clusters, escaping humiliating village surveillance. [[eg:In contemporary Punjab or Western Uttar Pradesh, Dalit agricultural workers prefer daily cash wage contracts or brick-kiln migration over hereditary ties with Jat landowners.]]

## Discrete Castes and Muddled Hierarchies: Dipankar Gupta's Model

Classical sociology assumed that everyone in India agreed on who stood higher or lower on the caste ladder. In *Interrogating Caste* (2000), [[thinker:Dipankar Gupta]] rejected this notion of a continuous, consensual hierarchy:

- **==Discrete Castes==:** Castes do not exist as smoothly linked rungs on a single ladder. Instead, they are discrete, bounded cultural entities. Each jati possesses distinct rituals, dress codes, marriage customs, and proud origin myths (*Jati Puranas*) that celebrate its own ancestral nobility and divine origin.
- **==Muddled Hierarchies==:** Outside the Brahmin at the apex and the Untouchable at the nadir, the intermediate caste universe is thoroughly muddled. No intermediate caste concedes ritual inferiority to its neighbours; each views the other's claims with skepticism or contempt. [[eg:In northern India, Jats, Gujjars, and Yadavs all claim martial Kshatriya heritage, and none agrees that the others are ritually superior.]]

## Caste Formations in Non-Hindu Religious Communities

Although egalitarian world religions like Islam, Sikhism, and Christianity doctrinally reject birth-based hierarchy, sociological field studies prove that the socio-cultural gravity of caste deeply penetrates non-Hindu communities across South Asia.

### 1. Caste Stratification Among Indian Muslims
Pioneered by sociologist [[thinker:Imtiaz Ahmad]] (*Caste and Social Stratification among Muslims in India*, 1973), research reveals a tripartite division mirroring Hindu hierarchy:
- **Ashrafs (Noble / High-Born):** Claim foreign lineage from the Prophet's family, companions, or Central Asian conquerors (Sayyids, Sheikhs, Mughals, Pathans).
- **Ajlafs (Clean Occupational Converts):** Indigenous convert artisan castes—such as weavers (*Ansaris*), tailors (*Idrisis*), and butchers (*Qureshis*).
- **Arzals (Degraded / Subaltern Converts):** Groups converted from Hindu untouchable castes—such as sweepers (*Halalkhors*) and scavengers (*Lalbegis*), who suffer persistent social exclusion, separate burial spaces, and intense stigma.
[[eg:The contemporary Pasmanda Muslim movement mobilized precisely against Ashraf hegemony, demanding social justice and affirmative action for marginalized Ajlaf and Arzal communities.]]

### 2. Caste Among Sikhs
Despite Guru Nanak's radical denunciation of caste, Punjabi Sikh society is stratified along occupational and landowning lines (studies by [[thinker:Surinder Jodhka]] and Paramjit Singh Judge):
- **Jat Sikhs:** Dominant agricultural landowners who hold political hegemony in the Shiromani Akali Dal and control rural gurdwaras.
- **Mazhabi and Ramdasia Sikhs:** Subaltern Dalit converts who face residential segregation on the village outskirts, leading them to construct independent Mazhabi Gurdwaras and spearhead the autonomous Ravidassia movement.

### 3. Caste Among Indian Christians
In Kerala and Tamil Nadu, Syrian Christians claim high-status Brahminical ancestry and historically maintained rigid commensal and marriage boundaries against Dalit Christians (studies by George Alexander). Dalit Christians frequently face separate church seating and segregated burial grounds.

## Continuance and Transformation of Caste in Modern India

Why has the caste system refused to vanish despite industrialisation, secular laws, and rapid urbanisation? Caste has survived because it shed its localized ritual skin and adapted into modern democratic and economic forms.

- **Politicisation of Caste (Rajni Kothari):** In *Caste in Indian Politics* (1970), Kothari showed that politics does not merely get caste-ridden; caste gets politicised. Democratic elections require numbers, transforming dispersed jatis into massive horizontal voting federations.
- **Caste Associations (Rudolph & Rudolph):** In *The Modernity of Tradition* (1967), Lloyd and Susanne Rudolph demonstrated that caste associations (e.g. Nadar Mahajana Sangam, Jat Mahasabha) act as modern pressure groups, securing college quotas, bank loans, and electoral tickets for their members.
- **==Substantialization of Caste==:** As [[thinker:Louis Dumont]] noted, caste evolved from a vertical, interdependent organic hierarchy into horizontal, competing ethnic-like blocks (*caste-as-substance*).
- **Caste Capitalism (Harish Damodaran):** In *India's New Capitalists* (2008), Damodaran demonstrated that modern private enterprise relies heavily on caste-based community capital and kinship trust networks—from Marwaris and Chettiars to new agrarian capitalists like Kammas, Reddys, and Patidars.
- **Digital Persistence:** Modern matrimonial websites (e.g., Shaadi.com, BharatMatrimony) provide explicit sub-caste and gotra filters, while urban housing societies subtly exclude Dalit tenants through vegetarian-only covenants. [[link:Connect this with Paper 1 Unit 7 on Social Mobility and Paper 2 Unit 7 on Class Structure.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Caste (Organic Hierarchy)',
    rightTitle: 'Modern Transformed Caste (Segmentary Competition)',
    rows: [
      {
        aspect: 'Organizational Axis',
        left: 'Vertical interdependence within village boundaries',
        right: 'Horizontal regional mobilization across state boundaries',
      },
      {
        aspect: 'Economic Base',
        left: 'Non-market Jajmani ties and hereditary grain shares',
        right: 'Market contracts, modern professions, and caste capitalism',
      },
      {
        aspect: 'Guiding Ideology',
        left: 'Sacred ritual purity, pollution taboos, and karma',
        right: 'Democratic representation, civil rights, and collective pride',
      },
      {
        aspect: 'Political Expression',
        left: 'Dominant caste informal council in village choupal',
        right: 'Formal caste associations, party vote banks, and federations',
      },
      {
        aspect: 'Marriage & Identity',
        left: 'Locally enforced endogamy through village elders',
        right: 'Nation-wide digital matrimonial networks and caste sabhas',
      },
    ],
  },
  {
    kind: 'timeline',
    items: [
      {
        year: 'Pre-Colonial Era',
        title: 'Local Jati & Jajmani Ties',
        text: 'Caste operated as a localized agrarian division of labour regulated by dominant landholding families.',
      },
      {
        year: '1901',
        title: 'Risley’s Census Enumeration',
        text: 'Herbert Risley catalogued castes by social precedence, triggering widespread jati petitions and Sanskritization claims.',
      },
      {
        year: '1950',
        title: 'Constitutional Abolition',
        text: 'Articles 15, 16, and 17 outlawed discrimination and untouchability, enshrining legal equality.',
      },
      {
        year: '1960s–1970s',
        title: 'Rise of Caste Associations',
        text: 'Rudolph & Rudolph and Rajni Kothari documented how caste federations mobilized for democratic political power.',
      },
      {
        year: '1990',
        title: 'Mandal Commission Implementation',
        text: '27% reservation for Other Backward Classes (OBCs) institutionalized caste identity as a primary vehicle for state resources.',
      },
      {
        year: '21st Century',
        title: 'Caste Capitalism & Digital Networks',
        text: 'Caste survives through community business networks, matrimonial algorithms, and diasporic caste associations.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Interactional Approach',
    meaning:
      'A field-based sociological method that examines caste hierarchy through observable, everyday transactions of food, water, and ritual deference in concrete local settings.',
  },
  {
    kind: 'keyTerm',
    term: 'Jajmani System',
    meaning:
      'A traditional hereditary, non-market rural network of patron-client exchanges where landowning patrons (Jajmans) received ritual and manual services from artisan castes (Kamins) in return for customary grain shares.',
  },
  {
    kind: 'keyTerm',
    term: 'Discrete Castes',
    meaning:
      'Dipankar Gupta’s concept arguing that castes exist as bounded, distinct social units asserting horizontal difference and ancestral pride rather than subscribing to a single consensual hierarchy.',
  },
  {
    kind: 'keyTerm',
    term: 'Substantialization of Caste',
    meaning:
      'The historical transformation of caste from a localized, vertical hierarchy of reciprocal interdependence into horizontal, competitive ethnic-like interest blocs.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote:
      'Modernisation in India has not displaced caste; rather, caste has adapted itself functionally to democratic institutions and modern communications.',
    context: 'Explaining the structural continuity and dynamic institutional transformation of caste in post-independence India.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Answering Continuance of Caste (2024 / 2015 PYQs)',
    body: 'When asked why caste continues in modern India, structure your answer around four pillars: (1) Political mobilization (Kothari’s politicisation of caste, vote banks), (2) Economic capital (Damodaran’s caste capitalism, informal credit), (3) Social institutions (endogamy via matrimonial sites, urban housing segregation), and (4) Psychological identity (Gupta’s discrete caste pride and Jati Puranas).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid Factual Error on Non-Hindu Caste',
    body: 'Never claim that non-Hindu religions practice caste identically to Hinduism. Clarify that while Islam, Sikhism, and Christianity doctrinally reject caste, empirical ground realities (Imtiaz Ahmad, Surinder Jodhka) demonstrate persistent endogamy, occupational specialization, and social exclusion (e.g., Pasmanda Muslims, Mazhabi Sikhs, Dalit Christians).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Beidelman vs Wiser Mnemonic',
    body: 'Wiser = Welfare & Harmony (functionalist view of Jajmani reciprocity). Beidelman = Bondage & Exploitation (Marxist-conflict view of coercive agrarian dominance). Citing both side-by-side demonstrates critical mastery in any 10- or 20-mark answer.',
  },
  {
    kind: 'answerBox',
    intro:
      'The modern caste system has not weakened or vanished; rather, it has transformed its institutional skin from a localized ritual hierarchy into a national network of horizontal competitive blocs.',
    points: [
      'Attributional to interactional: Shifted from static textual classifications of purity to dynamic, situational negotiations of power and local resource control.',
      'Collapse of traditional economy: Commercial agriculture, market cash wages, and urban migration dismantled the hereditary Jajmani patron-client ties.',
      'Emergence of discrete identities: Consensual ranking collapsed into discrete castes asserting horizontal difference, unique origin myths, and competitive pride.',
      'Pan-religious penetration: Pervades non-Hindu communities across India, manifesting as Ashraf-Ajlaf-Arzal cleavages among Muslims and Jat-Mazhabi divides among Sikhs.',
      'Democratic and capitalist renewal: Adult suffrage, Mandal reservations, and caste-based business cartels turned caste into an indispensable vehicle for democratic empowerment and capital accumulation.',
    ],
    conclusion:
      'Caste survives in modern India not because tradition is obstinate, but because modernity has provided caste with new political, economic, and digital tools to assert collective power.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Explores the core features of the caste system: contrasting attributional and interactional approaches, tracing the decline of the Jajmani system, unpacking discrete castes and non-Hindu caste dynamics, and evaluating the modern persistence and political transformation of caste.',
  mindMap,
  sections,
}
