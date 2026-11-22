import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 14.3 · Untouchability: Forms & Perspectives',
  center: 'Untouchability & Assertion',
  subtitle: 'Ambedkarite Sociology • Annihilation of Caste • Gandhi vs Ambedkar • Contemporary Forms & Assertion',
  branches: [
    {
      title: 'Ambedkar vs Mainstream Sociology',
      color: 'lavender',
      thinkers: ['B.R. Ambedkar', 'G.S. Ghurye', 'Louis Dumont'],
      points: [
        'Mainstream sociology treated caste as functional division of labour or consensus',
        'Ambedkar: Caste is not division of labour, but division of labourers',
        'Graded inequality: Ascending scale of reverence, descending scale of contempt',
        'Broken Men theory: Historical Buddhist pastoralists exiled outside villages',
      ],
    },
    {
      title: 'Annihilation of Caste (1936)',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Jat-Pat Todak Mandal'],
      points: [
        'Sub-caste abolition and inter-dining are trivial cosmetic remedies',
        'Caste is a notion sanctioned by sacred religious Shastras and Smritis',
        'Core remedies: Inter-caste marriage, destroying sanctity of scriptures',
        'State priesthood exam open to all castes; Navayana Buddhist conversion',
      ],
    },
    {
      title: 'Gandhi vs Ambedkar Debate',
      color: 'mint',
      thinkers: ['Mahatma Gandhi', 'B.R. Ambedkar'],
      points: [
        'Gandhi: Varnashrama is natural harmony; untouchability is a sinful excrescence',
        'Moral reform, change of heart, Harijan Sevak Sangh, temple entry',
        'Ambedkar: Untouchability is organic consequence of caste system itself',
        'Demanded legal rights, separate electorates (Poona Pact 1932), state power',
      ],
    },
    {
      title: 'Modern Forms & Dalit Assertion',
      color: 'pink',
      thinkers: ['Sukhadeo Thorat', 'Kanshi Ram', 'Milind Kamble'],
      points: [
        'Persistent forms: Mid-day meal segregation, manual scavenging, housing bias',
        'Political assertion: Bahujan Samaj Party (BSP) electoral mobilization',
        'Cultural assertion: Dalit literature, Panther movement, Casteless Collective',
        'Economic assertion: Dalit capitalism and DICCI (job-givers, not seekers)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u04-02-untouchability-annihilation.webp',
    alt: 'Untouchability, Jajmani and Annihilation of Caste infographic showing Ambedkarite praxis',
    caption:
      'From systemic untouchability to Ambedkarite praxis: diagnosing graded inequality, debating Gandhi, demolishing scriptural sanctity, and charting multi-dimensional contemporary Dalit assertions.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 14 Visual 02',
  },
  {
    kind: 'md',
    body: `## The Dark Underbelly of Caste: Understanding Untouchability

Untouchability is neither an accidental blemish on Indian society nor a simple misunderstanding between communities. At its root, untouchability is the most extreme, institutionalised form of structural violence and social exclusion ever devised, reducing millions of human beings to hereditary ritual pollution. While Article 17 of the Indian Constitution abolished untouchability in 1950, its shadow continues to haunt contemporary public and private spaces.

To understand untouchability sociologically, we must abandon comfortable orthodox assumptions. Mainstream colonial and Brahminical sociology often painted caste as a peaceful, functional division of social duties; [[thinker:B.R. Ambedkar]] shattered this illusion by proving that caste is a violent system that divides workers against workers. Examining his seminal critique, contrasting his philosophy with Mahatma Gandhi’s moral reformism, cataloguing modern subtle forms of untouchability, and mapping contemporary Dalit assertion reveals the living struggle for human dignity in India.

## Ambedkar’s Radical Sociological Critique of Caste

In works like *Castes in India: Their Mechanism, Genesis and Development* (1916) and *The Annihilation of Caste* (1936), [[thinker:B.R. Ambedkar]] offered an unapologetic, subaltern critique of mainstream sociology:

- **Division of Labourers vs Division of Labour:** Orthodox defenders claimed caste was merely a division of labour based on economic specialization. Ambedkar countered that caste is an unnatural ==division of labourers==. Unlike modern economic specialization, caste forcibly nails an individual to a hereditary occupation regardless of personal talent or choice, and hierarchically ranks labourers one above the other.
- **==Graded Inequality==:** Classical class struggle pits the rich against the poor. Ambedkar explained why lower castes in India failed to unite in a socialist revolution: caste is organised on an ==ascending scale of reverence and a descending scale of contempt==. Every intermediate caste looks down upon the caste below it and enjoys small privileges over it, preventing collective solidarity against the Brahminical summit.
- **Denial of Fraternity:** Ambedkar insisted that democracy is not merely a form of government, but an attitude of respect and reverence towards fellow humans. Caste completely annihilates fraternity (*maitri*), making empathy across jati boundaries impossible.
- **Origin of Untouchability (The Broken Men Theory):** In *The Untouchables* (1948), Ambedkar rejected racial and occupational theories. He argued that untouchables were originally "Broken Men"—remnants of defeated nomadic tribes who guarded village borders. Because they clung to Buddhism and consumed beef (refusing to adopt Brahminical vegetarianism as a marker of ritual purity), they were exiled outside village settlements and stamped with hereditary untouchability.

## Annihilation of Caste (1936): The Radical Blueprint

Invited to deliver the presidential address at the 1936 conference of the *Jat-Pat Todak Mandal* (an Arya Samaj reformist society in Lahore), Ambedkar wrote *The Annihilation of Caste*. When the organizers demanded that he delete criticisms of Hindu scriptures, Ambedkar refused, cancelled the address, and published the text independently.

Ambedkar’s central thesis was uncompromising:
1. **Cosmetic Reforms Are Useless:** Abolishing sub-castes (*up-jatis*) or organizing inter-caste dinners (*sahabhojan*) will never destroy caste. People do not observe caste out of ignorance or perversity; they observe it because they genuinely believe it is their sacred religious duty.
2. **Attacking the Root:** The real enemy is not the caste-practicing individual, but the sacred authority of the scriptures that sanction caste. Caste has a divine sanction in the *Vedas*, *Smritis*, and *Dharmashastras*. Therefore, caste cannot be destroyed without destroying the religious sanctity of these texts.
3. **Inter-Caste Marriage as Real Remedy:** Ambedkar identified endogamy as the enclosing wall of caste. He proclaimed that ==inter-caste marriage== (*roti-beti sambandh*) is the only genuine social solvent, because fusion of blood alone creates a sense of being kith and kin.
4. **Democratising the Priesthood:** Ambedkar proposed a radical institutional reform: Hindu priesthood should not be hereditary. The state should administer an open, merit-based examination for priests, granting licenses and civil salaries regardless of birth, open equally to men and women of all castes.
5. **The Final Exit (Religious Conversion):** Convinced that Hinduism was structurally incapable of treating Dalits as human equals, Ambedkar led half a million followers to embrace ==Navayana Buddhism== at Nagpur in 1956, rejecting Hindu pantheons and affirming rationalist humanist ethics.

## Gandhi vs Ambedkar on Untouchability

The historic debate between Mahatma Gandhi and Dr. B.R. Ambedkar represents two fundamentally opposed philosophies of social emancipation:

| Dimension | Mahatma Gandhi | Dr. B.R. Ambedkar |
| --- | --- | --- |
| **View of Untouchability** | A sinful aberration, moral disease, or excrescence on Hinduism | The logical, organic, and inevitable product of the caste system |
| **View of Caste (Varna)** | Defended *Varnashrama Dharma* as ideal non-competitive harmony | Demanded total annihilation of Varna and caste hierarchies |
| **Strategy for Emancipation** | Moral appeal, change of heart (*hriday parivartan*), Harijan welfare | Legal rights, constitutional safeguards, structural political power |
| **Role of Dalits** | Beneficiaries of caste-Hindu penance and service (*Harijan Seva*) | Autonomous agents of their own liberation: *"Educate, Agitate, Organise"* |
| **Political Representation** | Opposed separate electorates (fast unto death -> Poona Pact 1932) | Demanded independent political representation and separate electorates |
| **Religious Solution** | Internal purification within Hinduism; temple entry campaigns | Destruction of scriptural authority; conversion to Navayana Buddhism |

[[trap:Never depict Gandhi as pro-untouchability; show that Gandhi fought untouchability passionately through moral and spiritual reform, but differed irreconcilably with Ambedkar by attempting to save the idealized Varna system.]]

## Persistent Forms of Untouchability in Contemporary India

Despite stringent legislation—including the Protection of Civil Rights Act (1955) and the SC/ST (Prevention of Atrocities) Act (1989)—untouchability has adapted to modern institutions:

1. **Spatial Segregation:** In thousands of Indian villages, Dalit hamlets (*cheris*, *bastis*) remain strictly segregated on the outskirts, downwind and downstream. In urban metros, rental housing markets actively screen out Dalits through caste surnames and vegetarian covenants (studies by [[thinker:Sukhadeo Thorat]]).
2. **Ceremonial & Ritual Exclusion:** Denial of entry into public temples persists despite Article 25(2)(b). Dalits face violent assaults when asserting civil rights—such as riding horses during wedding processions (*baraat*), sporting mustaches, or wearing turbans.
3. **Commensal Discrimination:** Upper-caste parents frequently withdraw children or refuse mid-day meals cooked by Dalit cooks in government schools (Thorat & Joel Lee study). The infamous 'two-glass system' (separate tumblers for Dalits) persists in rural tea shops across Gujarat, Rajasthan, and Tamil Nadu.
4. **Occupational Stigma and Manual Scavenging:** Despite the Prohibition of Employment as Manual Scavengers Act (2013), thousands of Dalit workers, overwhelmingly Valmikis, are forced into cleaning dry latrines and sewer manholes without safety gear, leading to frequent asphyxiation deaths.
5. **Institutional & Digital Micro-Aggressions:** In elite universities and corporate offices, subtle bias manifests as institutional exclusion (highlighted by the Thorat Committee Report on AIIMS and protests following Rohith Vemula’s institutional death).

## Contemporary Dalit Assertions: Multi-Front Mobilization

Subaltern communities have responded to persistent exclusion through vibrant, multi-dimensional assertions:

- **Political & Electoral Assertion:** Initiated by the Republican Party of India (RPI) and masterminded by Kanshi Ram and Mayawati through the Bahujan Samaj Party (BSP), Dalits transformed from a clientelist vote bank into an autonomous political force commanding state power in Uttar Pradesh.
- **Militant Socio-Cultural Assertion:** Founded in Maharashtra in 1972 by Namdeo Dhasal and Arjun Dangle, the *Dalit Panthers* drew inspiration from the American Black Panther Party. They weaponized radical poetry and direct street action to defend Dalit settlements against upper-caste atrocities.
- **Literary & Artistic Counter-Culture:** Dalit literature shattered upper-caste aesthetic standards. Autobiographies like Omprakash Valmiki’s *Joothan*, Bama’s *Karukku*, and Baby Kamble’s *The Prisons We Broke* documented raw humiliation and resistance. Today, indie bands like *The Casteless Collective* and Bhim Geet use hip-hop and rock to broadcast anti-caste consciousness.
- **Economic Assertion (Dalit Capitalism):** Founded by Milind Kamble in 2005, the Dalit Indian Chamber of Commerce and Industry (DICCI) promotes subaltern entrepreneurship under the slogan *"Be Job Givers, Not Job Seekers"*, leveraging market capitalism to shatter traditional dependency on dominant-caste patronage. [[link:Link this in Paper 2 Unit 11 with Social Movements and Paper 1 Unit 8 with Social Protest.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Mahatma Gandhi (Harijan Reformism)',
    rightTitle: 'Dr. B.R. Ambedkar (Dalit Liberation)',
    rows: [
      {
        aspect: 'Diagnosis of Untouchability',
        left: 'Moral sin and aberration; can be purged without destroying Varna',
        right: 'Direct structural outcome of caste; cannot end without caste annihilation',
      },
      {
        aspect: 'Varna Ideology',
        left: 'Preserves idealized non-competitive division of social duties',
        right: 'Rejects Varna completely as institutionalised graded inequality',
      },
      {
        aspect: 'Locus of Agency',
        left: 'Upper-caste penance, remorse, and voluntary service (Harijan Seva)',
        right: 'Subaltern autonomous mobilization, legal rights, and state power',
      },
      {
        aspect: 'Political Representation',
        left: 'Joint electorates with reserved seats to preserve Hindu social unity',
        right: 'Independent political voice through separate electorates (Poona Pact 1932)',
      },
      {
        aspect: 'Scriptural Authority',
        left: 'Re-interpret Hindu texts metaphorically; purify tradition',
        right: 'Demolish sacred authority of Dharmashastras and Smritis',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Critique of Reformism', text: 'Exposed sub-caste abolition and inter-dining as superficial cosmetic fixes' },
      { label: 'Attacking Endogamy', text: 'Inter-caste marriage as the primary solvent to destroy biological caste purity' },
      { label: 'Scriptural De-Sanctification', text: 'Burning Manusmriti (1927) to shatter religious authority of Dharmashastras' },
      { label: 'State Priesthood', text: 'Democratising temple priesthood through competitive, secular state examinations' },
      { label: 'Navayana Buddhism', text: 'Mass conversion in Nagpur (1956) to establish rational humanist equality' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Division of Labourers',
    meaning:
      'B.R. Ambedkar’s concept defining caste as an unnatural social hierarchy that forcibly assigns individuals to hereditary callings and hierarchically divides workers against one another.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Graded Inequality',
    meaning:
      'Ambedkar’s formulation of caste hierarchy as an ascending scale of reverence and descending scale of contempt, which prevents subaltern unity by giving every intermediate caste a stake in oppressing those below.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Annihilation of Caste',
    meaning:
      'Ambedkar’s radical programmatic doctrine (1936) asserting that caste cannot be destroyed by cosmetic reforms, but requires abolishing endogamy, dismantling scriptural sanctity, and establishing democratic equality.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Navayana Buddhism',
    meaning:
      'The modern Buddhist movement initiated by B.R. Ambedkar in 1956, interpreting Buddhist Dhamma through social justice, human dignity, and rationalist egalitarianism.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Dalit Capitalism (DICCI)',
    meaning:
      'An economic assertion movement pioneered by Milind Kamble (DICCI) encouraging Dalit entrepreneurship under the motto "Be job givers, not job seekers" to break agrarian patron-client dependence.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Caste is not just a division of labour, it is a division of labourers.',
    context: 'Critiquing mainstream economic and sociological justifications of the caste system in Annihilation of Caste (1936).',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Answering Gandhi vs Ambedkar on Untouchability (2018 PYQ)',
    body: 'In 20-mark questions contrasting Gandhi and Ambedkar, avoid polemics. Structure the answer across 5 clear analytical axes: (1) Philosophical premise (moral sin vs structural product), (2) Varna framework (reformed Varna vs total annihilation), (3) Agency (upper-caste penance vs subaltern self-assertion), (4) Political method (Poona Pact / joint electorates vs separate electorates), and (5) Ultimate destination (reformed Hinduism vs Navayana conversion).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Constitutional Articles Precision',
    body: 'Always cite constitutional provisions accurately: Article 17 abolishes untouchability in all forms; Article 15 prohibits discrimination on grounds of caste; Article 25(2)(b) specifically mandates throwing open Hindu religious institutions and temples to all classes and sections of Hindus (do NOT confuse with Article 23 on forced labour!).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'The Logic of Graded Inequality',
    body: 'Remember Ambedkar’s key insight: Why didn’t the 80% oppressed masses overthrow the 20% elite? Because inequality is GRADED. Each caste has someone below it to despise and extract psychological satisfaction from. This structural fragmentation prevents horizontal working-class solidarity.',
  },
  {
    kind: 'answerBox',
    intro:
      'B.R. Ambedkar’s sociological examination of caste and untouchability redefined Indian sociology by replacing Brahminical functionalism with a critical, conflict-oriented subaltern theory of graded inequality.',
    points: [
      'Deconstructing division of labour: Proved that caste does not merely divide work, but violently fragments labourers into a birth-bound hierarchy that suffocates talent.',
      'Mechanism of graded inequality: Unpacked how an ascending scale of reverence and descending scale of contempt structurally frustrates united subaltern revolution.',
      'Radical annihilation blueprint: Identified religious scriptures as the ideological fortress of caste, advocating inter-caste marriage, scriptural de-sanctification, and state-certified priesthood.',
      'Debating Gandhi’s reformism: Countered moral Harijan benevolence with constitutional rights, autonomous political mobilization, and state-backed legal empowerment.',
      'Multi-dimensional contemporary assertion: Contemporary Dalits challenge persistent forms of untouchability across political (BSP), cultural (Panthers, Dalit literature), and economic (DICCI Dalit capitalism) frontiers.',
    ],
    conclusion:
      'Untouchability in 21st-century India is no longer met with passive fatalism; it faces multi-pronged subaltern resistance rooted in constitutional morality and Ambedkarite consciousness.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'Analyses B.R. Ambedkar’s radical sociological critique of caste and untouchability, the programmatic blueprint of Annihilation of Caste, the Gandhi-Ambedkar debate, persistent modern forms of discrimination, and multi-front contemporary Dalit assertions.',
  mindMap,
  sections,
}
