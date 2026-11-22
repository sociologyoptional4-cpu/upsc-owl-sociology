import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.3 — Colonial Protests & Movements',
  center: 'Colonial Protests & Peasant Resistance',
  subtitle: 'Agrarian Dislocation • Tribal Millenarianism • Subaltern Insurgency',
  branches: [
    {
      title: 'Colonial Dislocation & Agrarian Crisis',
      color: 'lavender',
      thinkers: ['A.R. Desai', 'D.N. Dhanagare', 'Kathleen Gough'],
      points: [
        'Permanent Settlement, Ryotwari, and Mahalwari commercialized land',
        'Moneylenders (Mahajans) and debt traps caused massive de-peasantization',
        'Forest Acts (1865, 1878) criminalized Adivasi customary rights (Jal, Jangal, Zameen)',
        'Extortionate cash rents and commercialization sparked recurring rural famines',
      ],
    },
    {
      title: 'Tribal & Millenarian Uprisings',
      color: 'yellow',
      thinkers: ['Birsa Munda', 'Sidhu-Kanhu', 'K.S. Singh'],
      points: [
        'Santhal Hul (1855–56): 60,000 tribals revolted against Mahajans and British troops',
        'Munda Ulgulan (1899–1900): Millenarian struggle to restore Khuntkatti land rights',
        'Charismatic leadership: Birsa claimed divine avatar status to challenge colonial power',
        'Millenarian promise of an imminent Golden Age and end to Diku exploitation',
      ],
    },
    {
      title: 'Peasant Mobilization: Champaran to Tebhaga',
      color: 'mint',
      thinkers: ['Jacques Pouchepadass', 'Sunil Sen', 'D.N. Dhanagare'],
      points: [
        'Champaran (1917): Middle-peasant grievance against Tinkathia indigo contracts',
        'Gandhi as charismatic mediator bridging rural distress with national politics',
        'Tebhaga (1946–47): Sharecroppers demanded two-thirds harvest from Jotedars',
        'Telangana (1946–51): Armed peasant struggle against Nizam feudalism and Vetti',
      ],
    },
    {
      title: 'Subaltern Historiography & Critiques',
      color: 'pink',
      thinkers: ['Ranajit Guha', 'Gayatri Spivak', 'Sumit Sarkar'],
      points: [
        'Guha: Elementary Aspects — peasants had autonomous political consciousness',
        'Four codes of insurgency: Negation, Ambiguity, Modality, and Solidarity',
        'Critique of Marx’s "sack of potatoes" view; peasants led Third World revolutions',
        'Spivak & feminist critique: Male bias and romanticizing unorganized violence',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u02-02-reform-protest-timeline.webp',
    alt: 'P2 Unit 2 infographic: Colonial Reforms & Protest Movements — Socio-Religious Reforms & Anti-Colonial Peasant Resistance',
    caption:
      'From forest hills to rice fields, subaltern peasants and Adivasis waged fierce, autonomous resistance against colonial taxation, landlordism, and forest robbery.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 02',
  },
  {
    kind: 'md',
    body: `## Were Colonial Peasants Passive Victims of Imperial Rule?

For over a century, colonial administrators and early imperial historians portrayed the Indian peasantry as fatalistic, inert, and politically dormant, supposedly submitting meekly to the cosmic order of karma. Sociological and historical evidence decisively shatters this myth. Long before urban intellectuals organized constitutional petitions, India's rural countryside was aflame with armed rebellions, millenarian revolts, and agrarian uprisings. The colonial period witnessed hundreds of organized protests driven by subaltern communities fighting for their land, forests, and human dignity.

These uprisings were not mindless riots; they were rational, politically conscious responses to structural violence. When British revenue settlements commodified fertile land, when foreign timber merchants cleared sacred groves, and when usurious moneylenders seized generational holdings, peasants and tribals mobilized through traditional kinship ties, sacred oaths, and guerrilla warfare. [[trap:Do not dismiss early tribal and peasant uprisings as mere law-and-order disturbances or accidental riots; they possessed coherent ideologies, strategic targets, and autonomous political goals.]]

## Colonial Agrarian Policies and Tribal Exclusions

British colonial exploitation transformed the Indian countryside through three structural disruptions:

### 1. Commodification of Land and Cash Revenue
Colonial revenue systems—the Permanent Settlement (Zamindari) in Bengal and Bihar, the Ryotwari system in Madras and Bombay, and the Mahalwari system in the North-West—treated land as private, alienable property. Fixed cash revenue demands forced peasants into the clutches of moneylenders (Mahajans and Sahukars). When crop failures occurred, land was confiscated and auctioned, transforming independent peasants into landless tenants and bonded sharecroppers.

### 2. Commercialization of Agriculture and Famines
British capitalism forced Indian cultivators to shift from food crops to cash crops (indigo, opium, cotton, and jute) to feed European factories. [[eg:Peasants in Bihar were coerced under the Tinkathia system to cultivate indigo on 3/20th of their best land, even when synthetic German dyes crashed global prices, plunging entire villages into chronic starvation.]]

### 3. Tribal Dispossession and Forest Laws
The Indian Forest Acts of 1865 and 1878 nationalized communal forest tracts, declaring ancestral tribal habitats state property. Shifting cultivation (*Jhum*), cattle grazing, and the collection of minor forest produce (*Mahua*, timber) were criminalized. The influx of non-tribal outsiders (==Dikus==)—contractors, moneylenders, and colonial police—subjected Adivasis to forced unfree labour (==Begar== or ==Vetti==) and pervasive land alienation.

## Tribal and Millenarian Uprisings: The Search for a Golden Age

When traditional social arrangements collapsed under colonial pressure, tribal communities frequently organized ==millenarian movements==—rebellions inspired by charismatic leaders promising the imminent miraculous end of foreign rule and the restoration of a sacred, egalitarian golden age:

| Movement | Key Leadership | Year & Region | Core Sociological Driver |
| --- | --- | --- | --- |
| Santhal Hul | Sidhu and Kanhu Murmu | 1855–1856, Damin-i-Koh (Bengal & Bihar) | Armed revolt of 60,000 Santhals against Mahajans and British troops; declared independent Santhal Raj |
| Munda Ulgulan | Birsa Munda | 1899–1900, Chotanagpur Plateau | Millenarian uprising to reclaim Khuntkatti (communal land) rights; Birsa proclaimed divine avatar |
| Rampa Rebellion | Alluri Sitarama Raju | 1922–1924, Godavari Agency (Andhra) | Guerrilla resistance against 1882 Madras Forest Act and exploitation of tribal forest produce collectors |

Sociologist K.S. Singh observed that Birsa Munda’s movement brilliantly synthesized traditional Munda religious cosmology with anti-colonial agrarian defense. Birsa declared that British bullets would turn to water and prophesied that the alien Diku exploiters would be driven out, restoring the autonomous *Munda Raj*.

## Sociological Dynamics of Twentieth-Century Peasant Struggles

As the national movement matured, peasant struggles shifted from localized defensive rebellions to structured, ideologically articulated agrarian campaigns:

### 1. The Champaran Peasant Movement (1917–1918)
Sociologist [[thinker:Jacques Pouchepadass]] analyzed the internal class dynamics of Champaran. Rather than a spontaneous eruption of the most destitute farmhands, Champaran was initiated and financed by substantial and middle peasants (such as Raj Kumar Shukla) who possessed sufficient resources to resist European planters’ illegal exactions (*Tawan* and *Sharahbeshi*). M.K. Gandhi acted as an external charismatic mediator, using systematic non-violent satyagraha and empirical fact-finding to bridge localized agrarian grievances with pan-Indian nationalist politics.

### 2. The Tebhaga Movement (1946–1947)
In Bengal, sharecroppers (==Bargadars==) mobilized under the leadership of the Communist-affiliated Bengal Provincial Kisan Sabha. Their central demand was the implementation of the Floud Commission recommendation: retaining a two-thirds (==Tebhaga==) share of the harvested paddy instead of surrendering half to the parasitic landlords (==Jotedars==). Slogans like *"Nij khamare dhan tolo"* (thresh paddy in our own yards) mobilized Rajbansi, Namasudra, and tribal women into militant picketing brigades.

### 3. The Telangana Armed Struggle (1946–1951)
Led by the Andhra Mahasabha and the Communist Party of India (CPI), the Telangana struggle erupted against the autocratic Nizam of Hyderabad and feudal landlords (==Deshmukhs== and ==Dorashanulu==). Poor peasants, Dalits, and Lambada tribals organized armed guerrilla squads against forced unpaid labour (==Vetti==) and debt bondage (*Bhagela*). Over 3,000 villages established autonomous peasant soviets (*Gram Rajyams*), redistributing over one million acres of land before Indian military intervention in 1948.

## Ranajit Guha's Subaltern Paradigm: History From Below

In his seminal 1983 study *Elementary Aspects of Peasant Insurgency in Colonial India*, historian [[thinker:Ranajit Guha]] mounted a profound sociological critique of both colonial and Marxist historiography:

- **Critique of Classical Marxism:** [[thinker:Karl Marx]] had famously described the peasantry as a "sack of potatoes," assuming they were atomized, backward-looking, and devoid of revolutionary potential. Guha pointed out that across non-industrialized Third World nations (China, Vietnam, India), peasants, not urban factory workers, drove monumental anti-imperial revolutions.
- **The Autonomous Subaltern Domain:** Guha demonstrated that colonial politics operated on two parallel tracks: an elite domain (dominated by British officials and Congress bourgeois leaders) and an autonomous subaltern domain (led by peasants, tribals, and Dalits).
- **Four Elementary Codes of Insurgency:** Guha analyzed the specific cognitive codes governing peasant rebellion:
  1. **Negation:** Peasants defined their identity by systematically destroying symbols of landlord authority—burning revenue records, sacking cutcheries, and tearing debt bonds.
  2. **Ambiguity:** Rebellious violence was viewed by the state as crime, but by the subalterns as sacred, collective justice.
  3. **Modality:** Rebellions followed public, theatrical forms—sounding buffalo horns, beating drums, and sending warning branches (*Dharra*).
  4. **Solidarity and Territoriality:** Insurgents enforced total community participation, treating anyone who aided the colonial police as a traitor to the soil.

## Critical Appraisals: Spivak and the Feminist Critique

Post-colonial theorist [[thinker:Gayatri Chakravorty Spivak]] (*Can the Subaltern Speak?*, 1988) offered a trenchant critique of the early Subaltern Studies project. Spivak argued that early subaltern historians tended to romanticize the peasant rebel as a unified, pristine sovereign subject, creating an essentialist myth. Furthermore, feminist sociologists exposed a severe male bias: subaltern history celebrated the martial exploits of armed peasant men while completely ignoring how peasant women faced dual subordination from both colonial landlords and patriarchal kin within the household.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1855–1856',
        title: 'Santhal Hul Rebellion',
        text: '60,000 Santhals led by Sidhu and Kanhu rose against British troops and usurious Mahajans in the Rajmahal Hills.',
      },
      {
        year: '1875',
        title: 'Deccan Riots',
        text: 'Peasants in Pune and Ahmednagar systematically seized and burned debt contracts held by Marwari moneylenders.',
      },
      {
        year: '1899–1900',
        title: 'Birsa Munda’s Ulgulan',
        text: 'Millenarian uprising in Chotanagpur against the destruction of communal Khuntkatti land systems by British Dikus.',
      },
      {
        year: '1917–1918',
        title: 'Champaran Indigo Satyagraha',
        text: 'Middle peasants joined M.K. Gandhi to dismantle the coercive Tinkathia system imposed by British planters.',
      },
      {
        year: '1946–1947',
        title: 'Tebhaga Movement',
        text: 'Bengal Bargadars demanded two-thirds share of produce from Jotedars in a radical communist-led agitation.',
      },
      {
        year: '1946–1951',
        title: 'Telangana Peasant Armed Struggle',
        text: 'Armed peasant guerrilla uprising against Nizam feudalism, Deshmukhs, and Vetti (forced labour) in Hyderabad state.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Elite Nationalist Politics',
    rightTitle: 'Subaltern Peasant Insurgency',
    rows: [
      {
        aspect: 'Leadership & Class Base',
        left: 'Urban educated bourgeoisie, lawyers, merchants, and landlords',
        right: 'Poor peasants, agricultural labourers, sharecroppers, and Adivasis',
      },
      {
        aspect: 'Methods of Protest',
        left: 'Constitutional petitions, legislative debates, disciplined non-violence',
        right: 'Direct action, guerrilla warfare, burning debt records, seizing harvests',
      },
      {
        aspect: 'Ideological Frame',
        left: 'Liberal constitutionalism, modern nationalism, bourgeois property rights',
        right: 'Moral economy, traditional kinship solidarity, millenarian prophecies',
      },
      {
        aspect: 'Historical Agency',
        left: 'Mediated through political parties, formal resolutions, and press statements',
        right: 'Autonomous collective mobilizations operating outside institutional politics',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Insurgency',
    meaning:
      'Ranajit Guha’s concept of peasant resistance driven by autonomous political consciousness rather than elite direction.',
  },
  {
    kind: 'keyTerm',
    term: 'Millenarian Movement',
    meaning:
      'A religious or social movement prophesying the imminent, miraculous overthrow of an oppressive order and the dawn of a golden age.',
  },
  {
    kind: 'keyTerm',
    term: 'Tinkathia System',
    meaning:
      'A colonial agrarian arrangement in Champaran compelling tenants to cultivate indigo on 3/20th of their total landholdings.',
  },
  {
    kind: 'keyTerm',
    term: 'Vetti / Begar',
    meaning:
      'System of unfree, unpaid forced labour extracted by colonial officials and feudal landlords from lower-caste and tribal cultivators.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Exam Angle: Contrast Guha with Classical Marxist Historiography',
    body: 'Whenever UPSC asks about colonial peasant movements or Ranajit Guha, explicitly highlight Guha’s departure from Marx’s dismissal of the peasantry as a "sack of potatoes." Emphasize how Guha restored autonomous political subjectivity to colonized peasants.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Guha’s 4 Elementary Aspects of Insurgency: N-A-M-S',
    body: 'Memorize Guha’s four structural codes of peasant insurgency: Negation (destroying symbols), Ambiguity (inverting criminal tags into justice), Modality (public theatrical rituals), and Solidarity (community policing against traitors).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Treat Champaran as Purely Poor Peasant Destitution',
    body: 'Sociologist Jacques Pouchepadass proved that Champaran was organized and financed by rich and middle peasants who had the economic cushion to resist European planters. Poor sharecroppers joined once the movement gained momentum.',
  },
  {
    kind: 'answerBox',
    intro:
      'Colonial protests and peasant movements constituted an autonomous domain of subaltern politics, resisting imperial extraction, landlordism, and forest dispossession.',
    points: [
      'Structural triggers: Colonial revenue settlements (Zamindari/Ryotwari) and Forest Acts (1865, 1878) created debt bondage, land alienation, and forest robbery.',
      'Millenarian defense (Santhal, Munda): Adivasi rebellions used charismatic prophecy and traditional cosmology to reclaim Khuntkatti rights and expel Dikus.',
      'Class dynamics of Champaran (Pouchepadass): Middle-peasant leadership combined with Gandhi’s charismatic mediation to dismantle Tinkathia indigo coercion.',
      'Radical 20th-century struggles: Tebhaga sharecroppers and Telangana armed guerrillas mounted direct challenges against Jotedar and Deshmukh feudalism.',
      'Subaltern historiography (Ranajit Guha): Demolished the myth of peasant passivity by identifying four structural codes of autonomous insurgency.',
    ],
    conclusion:
      'Far from being passive bystanders, colonial peasants and tribals forged vital grassroots traditions of resistance that permanently shaped India’s democratic trajectory.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'Colonial protests and peasant insurgencies formed an autonomous subaltern sphere where peasants and tribals deployed millenarian beliefs, direct action, and community solidarity to dismantle landlordism and imperial dispossession.',
  mindMap,
  sections,
}
