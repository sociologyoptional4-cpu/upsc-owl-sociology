import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Deconstructs the conceptual and administrative dilemmas of defining tribal communities in India. Contrasts colonial isolationist categories with indigenous civilizational realities, analyzes the Tribe-Caste Continuum through Bailey, Sinha, and Béteille, critiques the outdated 1965 Lokur Committee criteria, and examines the sociological rationale behind identifying 75 Particularly Vulnerable Tribal Groups (PVTGs).'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 1 — Definitional Problems of Indian Tribes',
  center: 'Definitional Dilemmas of Tribes',
  subtitle: 'Colonial Construct • Tribe-Caste Continuum • Lokur Criteria • PVTG Precarity',
  branches: [
    {
      title: '1. Colonial Categories vs. Civilizational Realities',
      color: 'lavender',
      thinkers: ['Lucy Mair', 'Herbert Risley', 'Niharanjan Ray', 'Verrier Elwin'],
      points: [
        'Colonial gazetteers framed tribes as isolated, primitive, and politically autonomous bands',
        'Indian civilizational history shows millennia of continuous Janajati-Jati interaction',
        'Epic traditions record royal-tribal alliances (e.g. Mahabharata alliances, Shabari in Ramayana)',
        'Adivasi implies original inhabitant, Girijan highlights forest-dwelling ecological identity',
      ],
    },
    {
      title: '2. The Tribe-Caste Continuum',
      color: 'yellow',
      thinkers: ['F.G. Bailey', 'Surajit Sinha', 'André Béteille', 'N.K. Bose'],
      points: [
        'Bailey modeled continuum on structural command over land: clan-based vs. organic hierarchy',
        'Surajit Sinha traced Rajputisation and state-formation among Central Indian Bhils and Gonds',
        'N.K. Bose conceptualized the Hindu Method of Tribal Absorption via Jajmani economic security',
        'Béteille demonstrated that Indian tribes are integral segments of a civilizational matrix',
      ],
    },
    {
      title: '3. Official Criteria & Lokur Critique',
      color: 'mint',
      thinkers: ['L.K. Lokur', 'Virginius Xaxa', 'B.R. Ambedkar', 'Sachchidananda'],
      points: [
        'Lokur Committee (1965) established 5 criteria: primitive traits, distinctive culture, isolation, shyness, backwardness',
        'Outdated colonial bias penalizes educated, urbanized tribal groups like Rajasthan Meenas',
        'Shyness of contact pathologizes natural caution against predatory non-tribal exploitation',
        'Constitutional framework in Article 342 provides legal status without rigid sociological definition',
      ],
    },
    {
      title: '4. Particularly Vulnerable Groups (PVTGs)',
      color: 'pink',
      thinkers: ['U.N. Dhebar', 'Walter Fernandes', 'B.K. Roy Burman', 'L.P. Vidyarthi'],
      points: [
        'Dhebar Commission (1960–61) identified Primitive Tribal Groups (PTGs), renamed PVTGs in 2006',
        '75 recognized communities across 18 states and UTs facing acute demographic risk',
        'Four criteria: pre-agricultural technology, stagnant/declining population, low literacy, subsistence economy',
        'Targeted affirmative packages like PM-JANMAN seek to balance survival with cultural autonomy',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u05-01-tribes-spread-policies.webp',
    alt: 'P2 Unit 5 infographic: Tribes: Spread & Colonial Impact — Definitional Debates, Geographical Zones & Colonial Rupture',
    caption:
      'Definitional Debates, Geographical Zones & Colonial Rupture: Tracing the transition of Indian tribes from autonomous civilizational entities to colonial administrative categories.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 15 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Definitional Riddle: What Constitutes a Tribe in India?

In sociology, defining a tribal community in India is notoriously tricky because Western textbook definitions do not match Indian ground reality. In the West and Africa, anthropologists treated tribes as completely isolated, self-governing groups living outside any larger civilization. In sharp contrast, India's tribal communities have lived in continuous cultural, economic, and political exchange with mainstream caste society for thousands of years. Early British census administrators like [[thinker:Herbert Risley]] tried to box them into rigid racial or religious categories like "animists," yet census officers repeatedly admitted that no sharp line could divide a lower-caste peasant from a tribal cultivator.

The Indian Constitution itself does not define the word "tribe" sociologically. Under **Article 342**, the President of India simply notifies certain communities as ==Scheduled Tribes== (STs) for administrative and affirmative action purposes. Sociologically, this creates a fascinating paradox: a group is officially a tribe because the state recognizes it on a legal schedule, not because it conforms to a single pristine ethnographic formula.

Different vocabularies reflect these competing philosophies:
- **Adivasi (Original Inhabitants):** Coined in the 1930s by political activists like Jaipal Singh Munda, asserting indigenous priority over land and forests.
- **Vanavasi (Forest Dwellers):** Used by nationalist organizations to emphasize territorial residence while claiming tribes as integral limbs of Hindu civilization.
- **Girijan (Hill People):** Popularized by Mahatma Gandhi to accord dignity to secluded mountain populations.
- **Janajati:** The Hindi constitutional term, contrasting the localized *Jati* (caste) with the clan-based folk community (*Jana*).

Historian [[thinker:Niharanjan Ray]] pointed out that the word *Jana* appears in ancient Vedic literature to denote distinct territorial folk communities living alongside *Jatis*. In our great epics, tribal and royal lineages intermarried and formed military alliances, from Bhima marrying Hidimba in the Mahabharata to Rama accepting berries from Shabari in the Ramayana. Hence, Indian tribes were never wild savages living in vacuum; they were civilizational neighbours living on the ecological frontier.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Tribal Community (Janajati)',
    rightTitle: 'Caste Community (Jati)',
    rows: [
      {
        aspect: 'Social Structure',
        left: 'Egalitarian and segmentary; organized around unilineal clans without hereditary graded ranks.',
        right: 'Hierarchical and stratified; organized around ritual purity-pollution and hereditary varna rankings.',
      },
      {
        aspect: 'Economic Organization',
        left: 'Subsistence-oriented; hunting-gathering, pastoralism, or jhum cultivation with minimal surplus.',
        right: 'Surplus-generating; specialized occupational division of labor integrated via Jajmani interdependence.',
      },
      {
        aspect: 'Territory & Habitat',
        left: 'Defined ecological territory (forest hills, plateaus) with collective customary access rights.',
        right: 'Settled multi-caste villages and urban clusters where land is tied to private hereditary ownership.',
      },
      {
        aspect: 'Religious Beliefs',
        left: 'Animism, spirit and ancestor veneration, sacred groves (Sarna) intimately linked to nature.',
        right: 'Scriptural, temple-centric ritualism guided by Brahminical texts, karma, and sacred cosmologies.',
      },
      {
        aspect: 'Gender Relations',
        left: 'Relatively higher gender equality; bride-price customary, easy divorce, and active female market roles.',
        right: 'Strict patriarchal control; dowry inflation, hypergamy (anuloma), and rigid female chastity codes.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Tribe-Caste Continuum: Bailey, Sinha, and Béteille

Rather than treating tribe and caste as two mutually hostile, watertight compartments, modern Indian sociology views them as two ends of a continuous spectrum. This framework is known as the ==Tribe-Caste Continuum==. At one ideal pole sits a completely isolated, unstratified tribal band; at the other sits an orthodox, highly stratified Brahminical village. Most rural communities in India lie somewhere along the road between these two poles, sharing cultural traits and economic ties with both.

British anthropologist [[thinker:F.G. Bailey]] provided the first rigorous structural definition of this continuum in his 1960 study of Bisipara in highland Odisha (*Tribe, Caste, and Nation*). Bailey argued that the distinction does not lie in religion or language, but in **how people access and control land**:
1. **Tribal End (Segmentary System):** A person obtains rights to cultivate land solely by virtue of membership in a kin clan. Political allegiance is direct, egalitarian, and non-hierarchical.
2. **Caste End (Organic Stratification):** Access to land is unequal and mediated through a specialized division of labor where landowning dominant castes control dependent artisan and tenant service castes.

Sociologist [[thinker:Surajit Sinha]] enriched this analysis by examining how tribes in Central India transformed into states through a process he termed ==Rajputisation==. Sinha showed how powerful tribal chieftains among the Bhils, Gonds, and Bhumij accumulated agrarian surplus, invited Brahmin priests to manufacture mythical genealogies linking them to solar or lunar Rajput dynasties, and established feudal kingdoms. In this state-formation process, the tribal elite became high-caste Kshatriyas, while ordinary clan members were turned into lower-caste Shudra cultivators.

[[thinker:N.K. Bose]] explained the underlying economic pull in his classic paper *The Hindu Method of Tribal Absorption*. Bose argued that impoverished tribal groups voluntarily adopted Hindu customs and deities because the caste-based ==Jajmani System== guaranteed non-competitive livelihoods and economic security. In exchange for ritual subordination, the caste order assured the tribal group a monopoly over a specific trade, such as basket-making or metalwork. [[thinker:André Béteille]] concluded that in historical India, a tribe was never a separate society, but a structural segment of an expanding, absorptive civilizational order.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Isolated Tribal Band',
        text: 'Clan-based common land, subsistence foraging or shifting cultivation, egalitarian animist rituals.',
      },
      {
        label: 'Ecological & Market Contact',
        text: 'Exchange of forest produce at weekly haats, seasonal debt to non-tribal mahajans, adopting plow agriculture.',
      },
      {
        label: 'Rajputisation / Sanskritization',
        text: 'Chieftains invite Brahmins, adopt sacred threads and temple deities, while tribal commoners become tillers.',
      },
      {
        label: 'Integrated Caste (Jati)',
        text: 'Absorbed into regional varna hierarchy as distinct endogamous peasant or artisan castes (e.g. Shudra status).',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Official Identification Criteria: The Lokur Committee (1965) and its Critiques

To standardize the criteria for scheduling tribes across states, the Government of India constituted the Advisory Committee on the Revision of the Lists of Scheduled Castes and Scheduled Tribes, popularly known as the ==Lokur Committee==, in 1965. The committee laid down five benchmarks that continue to guide administrative scheduling today:

| Criterion | Official Benchmark (Lokur 1965) | Administrative Rationale | Contemporary Sociological Critique |
|---|---|---|---|
| **Primitive Traits** | Pre-agricultural tools, hunting-gathering. | Indicates early techno-economic stage. | Penalizes upward mobility (e.g. Meenas). |
| **Distinctive Culture** | Unique customs, folklore, languages, dance. | Preserves distinct identity outside mainstream. | Overlooks deep internal class differentiation. |
| **Geographical Isolation** | Habitation in secluded hill tracts and forests. | Ecological separation from broader society. | Broken by roads, state planning, and mining. |
| **Shyness of Contact** | Reluctance and hesitation with outsiders. | Signals desire to maintain cultural boundary. | Rational historical defense against diku usury. |
| **General Backwardness** | Severe poverty, illiteracy, health deficits. | Justifies targeted constitutional protections. | Conflates poverty with tribal cultural identity. |

### The Contemporary Sociological Critique

While administrative agencies still quote these five benchmarks, contemporary sociologists like [[thinker:Virginius Xaxa]] have demonstrated that the Lokur criteria are archaic, patronizing, and analytically bankrupt:

- **Penalizes Socio-Economic Mobility:** By demanding "primitive traits" and "backwardness," the criteria create a perverse incentive against modernization. If an educated tribal community achieves economic advancement, critics argue they should lose their ST status. [[eg:The Meenas of Rajasthan have utilized education to enter civil services and state administration, yet they retain deep tribal clan endogamy and cultural bonds.]]
- **Romantic Colonial Stereotyping:** Demanding "shyness of contact" treats tribal citizens like timid wildlife rather than sovereign constitutional subjects. As sociologists argue, so-called shyness was historically a rational protective response to predatory moneylenders, forest guards, and land grabbers.
- **Ignores Deep Internal Stratification:** The Lokur criteria treat each tribe as a uniform, homogeneous lump. In reality, modern tribes have sharp internal class divisions, featuring an educated urban elite alongside displaced rural landless laborers.

## Particularly Vulnerable Tribal Groups (PVTGs): Extreme Precarity

Within the 705 Scheduled Tribes across India, developmental progress has been extraordinarily uneven. While large agricultural tribes like the Santhals and Gonds organized powerful political movements, smaller hunter-gatherer and foraging groups faced systemic marginalization and near-extinction. Recognizing this acute vulnerability, the **Dhebar Commission (1960–61)** recommended creating a distinct sub-category, initially designated as *Primitive Tribal Groups* (PTGs) in 1973, and renamed ==Particularly Vulnerable Tribal Groups== (PVTGs) in 2006.

Currently, **75 communities across 18 States and the Union Territory of Andaman and Nicobar Islands** are classified as PVTGs. The Union Ministry of Tribal Affairs evaluates four specific indicators:
- Pre-agricultural level of technology (hunting, gathering, or digging sticks).
- Stagnant or declining population growth rate.
- Extremely low levels of literacy (often under 10–20%).
- Subsistence level of economy with negligible market surplus.

These groups range from micro-demographic island populations like the Great Andamanese, Sentinelese, Jarawas, and Shompen in the Bay of Bengal, to forest foraging bands in mainland India like the Birhor of Jharkhand, the Chenchus of Andhra Pradesh and Telangana, and the Maria Gond of Maharashtra. In 2023, the central government launched the **PM-JANMAN** (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan) with an outlay exceeding ₹24,000 crore to provide pucca housing, clean water, solar electricity, and road connectivity to PVTG habitations without violating their ecological sanctuary.`,
  },
  {
    kind: 'keyTerm',
    term: 'Adivasi',
    meaning:
      'Literal meaning "original inhabitants"; political-identity term coined in the 1930s asserting indigenous antiquity and customary sovereignty over ancestral jal, jungle, and jameen.',
  },
  {
    kind: 'keyTerm',
    term: 'Tribe-Caste Continuum',
    meaning:
      'Sociological concept developed by F.G. Bailey and Surajit Sinha positing that tribes and castes in India are polar ends of an interactive structural spectrum rather than mutually exclusive binaries.',
  },
  {
    kind: 'keyTerm',
    term: 'Hindu Method of Tribal Absorption',
    meaning:
      'N.K. Bose’s thesis explaining how autonomous tribes were integrated into Brahminical society as lower castes by the economic security and non-competitive division of labor of the Jajmani system.',
  },
  {
    kind: 'keyTerm',
    term: 'Particularly Vulnerable Tribal Groups (PVTGs)',
    meaning:
      'A targeted administrative category of 75 critically endangered tribal communities exhibiting pre-agricultural technology, stagnant populations, minimal literacy, and subsistence livelihoods.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Integration: Weberian Ideal Types & Bailey’s Spectrum',
    body: 'In UPSC answers, never present "Tribe" and "Caste" as empirical binaries. Frame them as Max Weber’s ideal types. Real-world Indian communities exhibit varying combinations of segmentary lineage power (Bailey’s tribal pole) and functional occupational hierarchy (Bailey’s caste pole). Citing Bisipara or Chota Nagpur demonstrates conceptual mastery.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Conflating "Adivasi" with Constitutional Terminology',
    body: 'Do not write in answers that "Adivasi is defined under Article 342 of the Constitution." The Constitution of India recognizes only "Scheduled Tribes". "Adivasi" is a socio-political self-assertion term. Examiners penalize candidates who confuse legal-constitutional categories with political vocabulary.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Mnemonic: The 5 Lokur Criteria (P-D-G-S-B)',
    body: 'Remember the 1965 Lokur benchmarks with the acronym PDGSB: (P)rimitive traits, (D)istinctive culture, (G)eographical isolation, (S)hyness of contact with outsiders, and socio-economic (B)ackwardness.',
  },
  {
    kind: 'answerBox',
    intro:
      'Defining tribal communities in India presents deep theoretical and empirical challenges because historical civilizational interaction dismantled clear boundaries between segmentary tribes and settled caste society.',
    points: [
      'Eurocentric inadequacy: Colonial definitions presupposed isolated, unstratified island bands, failing to capture millennia of Janajati-Jati interaction in Indian civilization.',
      'Constitutional pragmatism: Article 342 designates Scheduled Tribes based on presidential notifications for administrative affirmative action rather than strict sociological criteria.',
      'Tribe-Caste Continuum: F.G. Bailey demonstrated that tribes (segmentary clan command over land) and castes (hierarchical organic division of labor) represent polar ends of an economic-political continuum.',
      'Rajputisation and absorption: Surajit Sinha and N.K. Bose illustrated how tribal ruling elites achieved Kshatriya status while ordinary folk entered the caste order through Jajmani economic ties.',
      'Critique of Lokur criteria: The 1965 benchmarks (primitive traits, shyness of contact) promote archaic stereotypes, penalize educated mobile tribals, and overlook internal class differentiation.',
      'PVTG prioritization: Recognizing severe unevenness, 75 Particularly Vulnerable Tribal Groups were carved out based on pre-agricultural technology, stagnant population, and extreme socio-economic precarity.',
    ],
    conclusion:
      'Modern sociology rejects static colonial binaries, viewing tribal identity as an evolving constitutional and political negotiation between indigenous autonomy and developmental inclusion.',
  },
]

export const topic1En = {
  summary,
  mindMap,
  sections,
}
