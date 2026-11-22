import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 11.2 · Structural Functionalism (M.N. Srinivas)',
  center: 'Field View & Village Studies',
  subtitle: 'Participant Observation • Sanskritization • Dominant Caste',
  branches: [
    {
      title: 'Theoretical Foundations',
      color: 'lavender',
      thinkers: ['A.R. Radcliffe-Brown', 'E.E. Evans-Pritchard', 'M.N. Srinivas'],
      points: [
        'Transplanted British social anthropology to study Indian villages empirically',
        'Replaced armchair textualism (Book View) with immersive fieldwork (Field View)',
        'Society viewed as an organism where institutions sustain equilibrium and order',
        'Shifted sociological focus from classical Varna to living local Jati dynamics',
      ],
    },
    {
      title: 'Coorg & Rampura Studies',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'Robert Redfield', 'Milton Singer'],
      points: [
        'Religion and Society among the Coorgs (1952): Okka solidarity & ritual distance',
        'Coined Sanskritization: positional mobility by adopting twice-born rituals',
        'The Remembered Village (1976): Reconstructed Rampura from memory after fire',
        'Documented Jajmani economic ties, inter-caste dispute resolution, and patron-client bonds',
      ],
    },
    {
      title: 'Key Concepts & Pioneers',
      color: 'mint',
      thinkers: ['M.N. Srinivas', 'S.C. Dube', 'André Béteille', 'McKim Marriott'],
      points: [
        'Dominant Caste: Numerical strength, land ownership, political clout, ritual status',
        'S.C. Dube (Shamirpet, 1955): Multi-caste integration & Community Development review',
        'André Béteille (Sripuram, 1965): Weberian shift from cumulative to dispersed inequality',
        'McKim Marriott (Kishangarhi): Universalization and Parochialization cycles',
      ],
    },
    {
      title: 'Critiques & Subaltern Pushback',
      color: 'pink',
      thinkers: ['B.R. Ambedkar', 'A.R. Desai', 'Gail Omvedt', 'David Hardiman'],
      points: [
        'Harmony bias: Glossed over caste violence, bonded labour, and feudal exploitation',
        'Romanticized village: Ambedkar called village a "sink of localism & den of ignorance"',
        'Status-quoist lens: Failed to predict or explain radical agrarian class insurgencies',
        'Micro-isolation: Neglected macro impacts of colonialism, capitalism, and state planning',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u01-02-book-field-synthesis.webp',
    alt: 'P2 Unit 1 infographic: Book View, Field View & Subalternity — Bridging Classical Texts, Fieldwork & Subaltern Voices',
    caption:
      'The transition from classical Sanskrit texts (Book View) to intensive village fieldwork (Field View) unveiled dynamic grassroots negotiations, later challenged by subaltern critiques.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 1 Visual 02',
  },
  {
    kind: 'md',
    body: `## What Is Structural Functionalism in the Study of Indian Society?

Structural functionalism is an approach that views society as a complex, integrated system whose institutional parts—such as caste, family, kinship, and village governance—work together to maintain social stability, solidarity, and equilibrium. Just as biological organs cooperate to sustain a living body, each social institution performs specific functions that preserve the continuous existence of the community. In Indian sociology, this paradigm transformed how scholars investigated social reality: instead of treating society as an abstract ideal codified in ancient scriptures, structural functionalists insisted that society must be observed directly in living, everyday contexts.

Pioneered in India by [[thinker:M.N. Srinivas]], this approach spearheaded the famous ==Field View== revolution against the traditional Indological ==Book View==. Having studied under G.S. Ghurye in Bombay before training at Oxford under [[thinker:A.R. Radcliffe-Brown]] and E.E. Evans-Pritchard, Srinivas adapted British social anthropology—originally developed through studies of African lineage systems—and applied it to the Indian countryside. During the 1950s and 1960s, village ethnographies became the undisputed golden age of Indian sociology, replacing scriptural speculations with meticulous empirical field notes.

## The Methodological Turn: From Book View to Field View

For over a century, colonial administrators and nationalist Indologists assumed that the four-fold Varna system outlined in the Dharmashastras reflected the real working of Indian society. Srinivas forcefully dismantled this assumption, showing that classical texts presented a top-down, prescriptive fantasy written by upper-caste priests.

- **The Indological Book View:** Assumed Indian society was static, uniform, and governed by immutable textual codes. It privileged the macro-level Varna model, viewing caste as a frozen hierarchy of Brahmin, Kshatriya, Vaishya, and Shudra.
- **The Empirical Field View:** Demonstrated that real social life operates through thousands of localized, competing, endogamous ==Jatis==. In the field, caste status was neither fixed nor universally agreed upon; rather, middle-tier jatis constantly contested their positions through economic dominance, ritual claims, and political alliances. [[eg:In a north Indian village, Jats are ritually Shudras in textual Varna theory, yet their overwhelming land ownership and political muscle make them the undisputed masters of village social life.]]

| Dimension | Book View (Indology) | Field View (Structural Functionalism) |
| --- | --- | --- |
| Primary Method | Sanskrit philology, textual exegesis, historical chronicles | Participant observation, deep ethnographic immersion |
| Core Focus | Normative rules: how society ought to function | Lived reality: how communities actually negotiate power |
| Operative Unit | Macro-level Varna hierarchy (4 universal categories) | Micro-level localized Jatis (thousands of fluid sub-groups) |
| View of Mobility | Caste is immutable and fixed by birth across lifetimes | Jatis achieve positional mobility through Sanskritization |
| Image of Village | Stagnant, self-sufficient "little republics" | Dynamic web of interdependent, competitive relationships |

## M.N. Srinivas’s Landmark Field Studies

### 1. The Coorg Study: Ritual Cohesion and Sanskritization

In *Religion and Society among the Coorgs of South India* (1952), Srinivas conducted fieldwork among the martial, cattle-sacrificing Coorgs (Kodavas) in Mysore:

- **The Okka as the Structural Pivot:** Srinivas showed that Coorg social structure was anchored in the ==Okka==—a patrilineal, patrilocal joint household sharing ancestral land and spirits. Social solidarity was reinforced through collective ancestral worship (*Karana* rituals).
- **Purity, Pollution, and Structural Distance:** Ritual statuses were maintained through elaborate notions of ritual purity (*Madi*) and impurity (*Pole*). The physical and social distance between castes prevented friction while maintaining systemic order.
- **Formulation of Sanskritization:** Srinivas observed that lower jatis and tribal groups sought upward mobility not by revolting against caste, but by adopting the vegetarian diet, teetotalism, sacred thread rituals, and marriage customs of twice-born (*dwija*) castes. While he initially termed this "Brahmanization," he revised it to ==Sanskritization== after noticing that lower groups frequently emulated Kshatriya, Vaishya, or local dominant models rather than Brahmins alone.

### 2. The Rampura Study: Dominant Caste and Jajmani Interdependence

In *The Remembered Village* (1976)—a sociological masterpiece written almost entirely from memory after a fire at Stanford’s Center for Advanced Study in 1970 destroyed three decades of field notes—Srinivas analyzed the multi-caste village of Rampura in Karnataka:

- **The Concept of the Dominant Caste:** Srinivas identified that local power was not held by ritually pure Brahmins, but by the landowning peasant caste of ==Okkaligas==. He established three core criteria for a [[thinker:M.N. Srinivas]] ==Dominant Caste==:
  1. Decisive numerical superiority in the local area.
  2. Substantial ownership of cultivable agricultural land.
  3. Political power and institutional influence, often serving as village headmen (*Patel*).
  4. Relatively high ritual status (though not necessarily at the summit). [[eg:Across contemporary India, dominant castes like Jats in Haryana and Western UP, Marathas in Maharashtra, Reddys and Kammas in Andhra Pradesh, and Yadavs in Bihar dominate electoral politics and rural institutions despite being non-Brahmins.]]
- **Jajmani Reciprocal Interdependence:** Srinivas documented how hereditary service relationships between landowning patrons (*Jajmans*) and servicing client castes (*Kamin* / *Purjan*—carpenters, barbers, potters, washermen) created mutual functional dependence, dampening overt class warfare through customary gift-exchange during life-cycle rituals.

## Other Major Structural-Functionalist Village Studies

Srinivas’s pioneering work inspired a generation of anthropologists who transformed 1950s India into a global laboratory for structural-functional field studies:

- **[[thinker:S.C. Dube]] (*Indian Village*, 1955):** Conducted a holistic, interdisciplinary study of Shamirpet near Hyderabad. Dube analyzed how caste, kinship, religion, and village autonomy interacted, emphasizing that despite multiple endogamous castes, the village maintained cohesive institutional integration. In *India’s Changing Villages* (1958), Dube critically evaluated the state’s Community Development Projects, exposing how rural elites captured development funds.
- **[[thinker:André Béteille]] (*Caste, Class, and Power*, 1965):** Studied Sripuram in Tanjore, Tamil Nadu. Applying a Weberian trinitarian framework, Béteille showed that in traditional Sripuram, caste, class, and power were ==cumulative== (Brahmins owned all land, held high ritual status, and controlled the panchayat). Under modern forces like land reforms and adult franchise, inequalities became ==dispersed==: non-Brahmins gained political power while lower-caste tenants acquired land, creating structural divergence.
- **[[thinker:McKim Marriott]] (*Village India*, 1955):** In his study of Kishangarhi (Uttar Pradesh), Marriott formulated the dual processes of ==Universalization== (local folk rituals of the Little Tradition travelling upward into classical Sanskrit Great Tradition) and ==Parochialization== (classical Great Tradition elements getting adapted and localized by village folk traditions).

## Critical Evaluation: The Radical and Subaltern Pushback

Despite its immense empirical contributions, the structural-functional paradigm faced severe theoretical critiques by the late 1960s:

- **The Harmony / Equilibrium Trap:** Structural functionalists assumed that villages were naturally self-correcting systems operating on moral consensus. [[trap:Candidates often forget to critique functionalism’s ideological bias: by treating caste and Jajmani ties as mutually beneficial interdependence, functionalists whitewashed centuries of brutal feudal exploitation, forced bonded labour (begar), and untouchability.]]
- **Ambedkar’s Blistering Rebuttal:** [[thinker:B.R. Ambedkar]] furiously contested the romanticization of the Indian village in the Constituent Assembly, declaring: *"What is the village but a sink of localism, a den of ignorance, narrow-mindedness and communalism?"* Ambedkar pointed out that for untouchables, the village was an open-air prison where upper-caste dominant groups enforced terror.
- **Status-Quoist Inability to Explain Conflict:** Because functionalism prioritised stability, it lacked the analytical tools to explain radical agrarian upheavals. It dismissed peasant insurgencies like the Tebhaga, Telengana, and Naxalbari movements as pathological deviances rather than systemic class contradictions.
- **Micro-Level Isolationism:** By treating each village as an insulated microcosm, structural functionalists ignored how macro-forces—such as colonial land revenue settlements, global commodity circuits, and capitalist industrialization—fundamentally dictated village realities from the outside.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1940–1948',
        title: 'Srinivas Fieldwork in Coorg & Rampura',
        text: 'Srinivas conducted immersive participant observation in Mysore, laying the empirical bedrock of modern Indian sociology.',
      },
      {
        year: '1952',
        title: 'Religion & Society among the Coorgs',
        text: 'Published his doctoral study under Radcliffe-Brown, introducing Sanskritization and structural-functional analysis to India.',
      },
      {
        year: '1955',
        title: 'Landmark Year of Village Studies',
        text: 'S.C. Dube published Indian Village (Shamirpet), while McKim Marriott edited Village India, inaugurating the golden age of ethnography.',
      },
      {
        year: '1959',
        title: 'The Dominant Caste in Rampura',
        text: 'Srinivas published his definitive paper in American Anthropologist conceptualizing the criteria of local dominant caste hegemony.',
      },
      {
        year: '1965',
        title: 'Béteille’s Caste, Class, and Power',
        text: 'André Béteille analyzed Sripuram, introducing Weberian multi-dimensional stratification to Indian village studies.',
      },
      {
        year: '1976',
        title: 'The Remembered Village',
        text: 'Srinivas published his reconstructed Rampura ethnography, demonstrating how memory can serve as a valid sociological archive.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'British Functionalism', text: 'Radcliffe-Brown’s comparative anatomy applied to Indian institutions' },
      { label: 'Field Immersion', text: 'Intensive participant observation replaces armchair Sanskrit textualism' },
      { label: 'Key Formulations', text: 'Sanskritization and Dominant Caste explain dynamic village mobility' },
      { label: 'Comparative Studies', text: 'Dube, Béteille, and Marriott enrich village stratification models' },
      { label: 'Subaltern & Marxist Critique', text: 'Ambedkar and Desai expose harmony bias, begar, and caste violence' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Sanskritization (Srinivas)',
    rightTitle: 'Dominant Caste Power (Srinivas)',
    rows: [
      {
        aspect: 'Primary Arena of Mobility',
        left: 'Cultural and ritual sphere: adopting dwija dietary and religious norms',
        right: 'Secular and political-economic sphere: controlling land and local governance',
      },
      {
        aspect: 'Nature of Social Change',
        left: 'Positional change: specific jati shifts rank within the unaltered caste order',
        right: 'Decisive regional hegemony: shaping local dispute settlement and elections',
      },
      {
        aspect: 'Reference Model',
        left: 'Twice-born Varnas: traditionally Brahmins, Kshatriyas, or Vaishyas',
        right: 'Numerical plurality combined with land ownership, often intermediate peasant jatis',
      },
      {
        aspect: 'Time Horizon',
        left: 'Inter-generational: typically takes one or two generations of sustained emulation',
        right: 'Immediate empirical reality: exercised daily through panchayats and patronage',
      },
      {
        aspect: 'Contemporary Trend',
        left: 'Weakening among youth due to secularisation and affirmative action pride',
        right: 'Strengthening into decisive vote-banks and political cartelization across states',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Structural Functionalism',
    meaning:
      'A sociological paradigm viewing society as a complex organism whose interconnected parts perform vital functions to maintain social order and equilibrium.',
  },
  {
    kind: 'keyTerm',
    term: 'Field View',
    meaning:
      'An empirical methodology pioneered by M.N. Srinivas that analyzes Indian society through direct participant observation in living communities rather than textual shastras.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Sanskritization',
    meaning:
      'The process by which a low or middle Hindu caste or tribe adopts the customs, rituals, ideology, and lifestyle of a twice-born caste to claim higher ritual rank.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Dominant Caste',
    meaning:
      'A local caste that yields decisive regional hegemony due to numerical superiority, extensive landownership, political muscle, and relatively respectable ritual status.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The Indian village was not an unchanging, isolated republic, but a dynamic web of interdependent castes and localized mobility.',
    context: 'Critiquing colonial Indological stereotypes through empirical fieldwork in Rampura and Coorg.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Sanskritization vs Structural Change',
    body: 'Whenever UPSC asks you to evaluate Sanskritization, always stress Srinivas’s crucial distinction: Sanskritization leads only to "positional change" for a specific jati within the system; it does NOT lead to "structural change" of the caste system itself. The hierarchy remains completely intact while individual groups shift chairs.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid This Confusion: Dominant Caste Is NOT Always Brahmin',
    body: 'Never equate dominant caste with ritual Brahmin supremacy! In fact, Srinivas explicitly demonstrated that dominant castes across India are overwhelmingly intermediate peasant castes (Okkaligas, Jats, Marathas, Reddys) who possess physical numbers, land, and muscle power despite modest ritual status.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'S.C. Dube vs M.N. Srinivas (Revision Shortcut)',
    body: 'Remember the contrast for 10-markers: Srinivas focused on dominant caste, Sanskritization, and memory-ethnography (Rampura); Dube (*Indian Village*, Shamirpet) focused on multi-caste functional integration and interdisciplinary evaluations of state-led Community Development planning.',
  },
  {
    kind: 'answerBox',
    intro:
      'M.N. Srinivas revolutionized Indian sociology by introducing the structural-functionalist field-view, replacing textual romanticism with empirical village ethnographies that decoded lived caste mobility and rural power.',
    points: [
      'Field-View Revolution: Rescued sociology from Indological armchair dogmatism through immersive participant observation in Coorg and Rampura.',
      'Conceptual Breakthroughs: Formulated Sanskritization (positional ritual mobility) and Dominant Caste (secular land-based hegemony).',
      'Debunking Colonial Myths: Disproved Henry Maine’s thesis of isolated village republics by demonstrating dynamic inter-village kinship and economic networks.',
      'Institutional Interdependence: Analyzed the Jajmani system and Okka lineage solidarity as mechanisms maintaining local functional equilibrium.',
      'Comparative Ethnographic Boom: Catalysed landmark village studies by S.C. Dube (Shamirpet), André Béteille (Sripuram), and McKim Marriott (Kishangarhi).',
      'Systemic Blind Spots: Critiqued by Ambedkar and Marxist scholars for its equilibrium bias, romanticizing villages, and sanitizing upper-caste violence.',
    ],
    conclusion:
      'Despite its conservative harmony bias, Srinivas’s field-view remains the foundational methodological baseline for all contemporary empirical sociology in India.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Structural-functionalism in India, pioneered by M.N. Srinivas, established the field-view revolution through intensive village studies, providing seminal concepts like Sanskritization and Dominant Caste while drawing sharp critiques for its harmony bias.',
  mindMap,
  sections,
}
