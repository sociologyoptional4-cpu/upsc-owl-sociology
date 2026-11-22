import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.3 · Lineage and Descent',
  center: 'Lineage & Descent',
  subtitle: 'Descent Types • Lineage vs Clan • Descent vs Alliance Theory • Matriliny & Male Authority',
  branches: [
    {
      title: 'Descent & Corporate Groups',
      color: 'lavender',
      thinkers: ['W.H.R. Rivers', 'G.P. Murdock', 'Meyer Fortes', 'E.E. Evans-Pritchard'],
      points: [
        'Descent = structural rule linking child to parents’ social group automatically at birth',
        'Lineage = corporate group tracing demonstrable genealogical links to a known ancestor',
        'Clan / Gotra = putative/mythical ancestor; Phratry (cluster of clans); Moiety (two halves)',
        'Functions: social placement, property inheritance, exogamy, ancestor worship, dispute control',
      ],
    },
    {
      title: 'Four Types of Descent',
      color: 'yellow',
      thinkers: ['Irawati Karve', 'Leela Dube', 'A.R. Radcliffe-Brown', 'Tiplut Nongbri'],
      points: [
        'Unilineal: Patrilineal (mainstream India; Seed-Earth analogy) vs Matrilineal (Nayar, Khasi, Garo)',
        'Double Unilineal: Patrilineal for property + Matrilineal for ritual (Todas of Nilgiri Hills)',
        'Bilateral / Cognatic: Traced equally through father & mother (Dimasa Kachari of Assam/Nagaland)',
        'Ambilineal: Individual chooses either father’s or mother’s group (Tiwa Lalung of Assam/Meghalaya)',
      ],
    },
    {
      title: 'Descent vs Alliance Theory',
      color: 'mint',
      thinkers: ['A.R. Radcliffe-Brown', 'Meyer Fortes', 'Claude Lévi-Strauss', 'Louis Dumont'],
      points: [
        'Descent Theory (British: Radcliffe-Brown, Fortes, Evans-Pritchard): vertical blood lineages hold society together',
        'Alliance Theory (French: Lévi-Strauss, Dumont): incest taboo forces horizontal exchange of women across groups',
        'Elementary structures (positive cross-cousin rules) vs Complex structures (negative bans + class/choice)',
        'Indian synthesis: North stresses descent/hypergamy + Bhaat affinity; South institutionalises alliance',
      ],
    },
    {
      title: 'Male Authority in Matriliny',
      color: 'pink',
      thinkers: ['Audrey Richards', 'Kathleen Gough', 'David Schneider', 'Tiplut Nongbri'],
      points: [
        'Matriliny (mother’s descent line) is NEVER Matriarchy (rule by women); male authority persists!',
        'Shift from Husband-Father to Maternal Uncle / Brother (Avuncular Authority — Karanavan / Kni)',
        'Audrey Richards "Matrilineal Puzzle": tension between husband-wife bond and brother-sister control',
        'Kerala Nayar Tharavad (Karanavan) & Meghalaya Khasi (Ka Khadduh custodian, Mama Kni decision-maker, Durbar Shnong)',
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
      'Lineage and descent rules determine who inherits ancestral identity and property vertically, while alliance rules govern how families weave horizontal solidarity through marriage.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 01',
  },
  {
    kind: 'md',
    body: `## What Are Descent, Lineage, and Clan — and Why Do Societies Need Them?

The moment a baby is born in any society, people immediately ask: *whose child is this, what surname or clan will the baby carry, and whose property will the child inherit?* Sociologists call the cultural blueprint that answers these questions ==Descent==: the socially recognised rule or principle that automatically links an individual at birth to a specific group of relatives through his or her parents. While **descent** is the *rule* of recruitment, a ==Lineage== (*Khandan* or *Vansh*) is the concrete **corporate social group** formed by all living and deceased descendants who can trace their exact, step-by-step genealogical tree back to a **known, real common ancestor**.

Across societies, descent groups scale up from small verifiable trees into wider symbolic brotherhoods:

- **Lineage vs Clan (*Gotra*) vs Phratry vs Moiety:** In a **Lineage**, members know the exact historical ancestor (usually 4 to 7 generations back) and share tangible obligations like ancestral land, collective worship (*Kuldevta*), or *Pagdi* succession rites. When the common ancestor lies so far back in the mist of time that connection is mythical or putative rather than step-by-step (such as claiming descent from Vedic sage *Bharadwaj* or *Kashyap* in an Indian ==Gotra==, or a totemic animal in tribal clans), sociologists call the group a **Clan (Sib)**. A cluster of related clans forms a **Phratry**, and when an entire tribe is divided into exactly two reciprocal halves for marriage and ritual, each half is called a **Moiety** (e.g., among the Bondos of Odisha or Australian Aboriginals).

## 1. The Four Types of Descent Systems (With Indian Ethnographic Illustrations)

Societies do not trace ancestry in only one way. Anthropologists classify descent rules into four major systems:

- **1. Unilineal Descent (Patrilineal & Matrilineal):** Ancestry is traced exclusively through **one parent’s line**. In **Patrilineal (Agnatic) Descent** — dominant across mainstream India — surname, lineage membership, and ancestral property pass from father to son. As [[thinker:Leela Dube]] showed through her famous ==Seed-Earth Analogy==, patrilineal South Asia views the father as providing the active "seed" (*Bija*) that owns the child’s blood, reducing the mother to the passive "earth" (*Kshetra*) and turning daughters into temporary *Paraya Dhan*. In **Matrilineal (Uterine) Descent** — practiced by the **Nayars, Tiyas, and Moplahs of Kerala** and the **Khasis, Garos, and Jaintias of Meghalaya** — family name and ancestral property flow through the mother’s line.
- **2. Double Unilineal (Duolineal) Descent:** Every individual belongs simultaneously to *two* unilineal groups for different purposes — tracing property or secular rights through the father’s patrilineage while tracing ritual roles or movable wealth through the mother’s matrilineage (e.g., the **Yakö of Nigeria** and aspects of the **Todas of the Nilgiri Hills in Tamil Nadu**).
- **3. Bilateral (Cognatic) Descent:** Ancestry and kinship duties are traced equally through **both the father’s and the mother’s sides** without forming exclusive corporate lineages (common in modern Western nuclear families and among the **Dimasa Kachari of Assam and Nagaland**).
- **4. Ambilineal (Optative) Descent:** An individual can **actively choose** in adulthood whether to affiliate with the father’s descent group or the mother’s descent group depending on land availability and prestige (practiced by the **Tiwa / Lalung tribe of Assam and Meghalaya** and Samoans).

## 2. Rules of Descent vs Rules of Alliance: The Great Kinship Debate (2015 PYQ)

One of the classic theoretical battles in kinship sociology — tested directly by UPSC in 2015 — is between **British Descent Theory** (which argues vertical blood lineages hold society together) and **French Alliance Theory** (which argues horizontal marriage exchanges hold society together).

- **Descent Theory ([[thinker:A.R. Radcliffe-Brown]], [[thinker:Meyer Fortes]], [[thinker:E.E. Evans-Pritchard]]):** Developed by British structural-functionalists studying stateless African tribes (such as Evans-Pritchard’s *Nuer* and Fortes’s *Tallensi*), Descent Theory argues that the primary building blocks of social order are **vertical corporate descent groups (lineages and clans)**. Marriage is treated as secondary — its main job is simply to produce legitimate children who perpetuate the vertical lineage, maintain political boundaries, and transmit ancestral property across generations.
- **Alliance Theory ([[thinker:Claude Lévi-Strauss]], [[thinker:Louis Dumont]]):** Developed in Lévi-Strauss’s *The Elementary Structures of Kinship* (1949), Alliance Theory argues that the universal **incest taboo** is not merely a negative biological ban, but a positive sociological rule that forces families to give away their sisters and daughters in marriage to other groups — creating **horizontal reciprocal solidarity ("exchange of women")**. Lévi-Strauss distinguished **Generalized Exchange** (Group A gives brides to B, B to C, C to A — asymmetrical) from **Restricted Exchange** (direct two-way sister exchange between Group A and B — symmetrical).
- **Conceptual Issues in Applying Descent vs Alliance to India ([[thinker:Louis Dumont]], [[thinker:T.N. Madan]]):** Early Indian studies suffered from a British functionalist bias that overemphasised harmonious blood lineages (African model) while ignoring three ground realities: (1) **Immense power of Affinal Ties** even in patrilineal North India — e.g., the maternal uncle (*Mama*) bringing ceremonial *Bhaat* gifts and brothers-in-law (*Jeejaji/Saala*) holding deep influence; (2) **Fictive Kinship** (*Muh-bola bhai* or village Rakhi brother offering emotional refuge to a newlywed bride in an alien village); (3) **Internal Lineage Conflict** over ancestral land rather than automatic brotherhood; and (4) **Avoidance (*Sasur/Jeth*) vs Joking Relationships (*Devar-Bhabhi*)** that manage power and emotional play inside the household.

| Analytical Dimension | Rules of Descent (Descent Theory) | Rules of Alliance (Alliance Theory) |
| --- | --- | --- |
| Primary Theorists | A.R. Radcliffe-Brown, Meyer Fortes, Evans-Pritchard | Claude Lévi-Strauss, Louis Dumont, Rodney Needham |
| Core Axis of Kinship | Vertical consanguineal (blood) continuity across generations | Horizontal affinal (marital) reciprocity between groups |
| Fundamental Engine | Corporate lineage ownership of land, political order & status | Universal incest taboo compelling exchange of brides |
| View of Marriage | Secondary mechanism to recruit new heirs into the lineage | Primary glue weaving alliance networks across clans |
| Indian Illustration | North Indian patrilineal *Gotra/Vansh* & Coorg *Okka* | South Indian Dravidian cross-cousin preferential marriage |

## 3. Is Male Authority Absent in Matrilineal Society? (2021 & 2015 Repeat PYQ!)

A very common everyday misconception is to confuse **Matriliny** with **Matriarchy**. In UPSC (asked word-for-word in both 2015 and 2021!), you must state clearly: **No — male authority is NOT absent in matrilineal societies.** Matriliny is a rule of descent and property transmission through women, whereas matriarchy (complete political and domestic rule by women) has never existed as a documented societal system. In matrilineal societies, **male authority simply shifts from the Husband-Father to the Mother’s Brother (Maternal Uncle — Avuncular Authority)**.

- **The "Matrilineal Puzzle" ([[thinker:Audrey Richards]], [[thinker:David Schneider]], [[thinker:Kathleen Gough]]):** Coined by anthropologist Audrey Richards (1950), the ==Matrilineal Puzzle== arises because matriliny combines two conflicting rules: descent and property pass through women, yet **executive decision-making authority remains vested in men (brothers and maternal uncles)**. A woman’s brother must control her and her children to govern the lineage estate, yet her husband desires conjugal loyalty — creating structural tension between the **brother-sister bond** and the **husband-wife bond**.
- **Case 1 — The Nayars of Kerala (*Tharavad* & *Karanavan*):** As studied by [[thinker:Kathleen Gough]] and [[thinker:Irawati Karve]], the traditional Nayar matrilineal household (**Tharavad**) consisted of a woman, her sisters, her brothers, and the sisters’ children (with duolocal "visiting husbands" through *Sambandham* unions who held zero economic or disciplinary power). Yet the *Tharavad* was ruled not by the senior woman, but by the eldest resident maternal uncle/brother — the ==Karanavan== — who exercised absolute legal, financial, and disciplinary authority over land and children!
- **Case 2 — The Khasis and Garos of Meghalaya (*Ka Khadduh* vs *Mama Kni* & *Nokma*):** Among the Khasis (studied by [[thinker:Tiplut Nongbri]]), ancestral property passes by **ultimogeniture** to the youngest daughter (**Ka Khadduh**) and residence is matrilocal (where a live-in husband often feels subordinate). However, as Nongbri proves, *Ka Khadduh* is merely the **custodian** (*custodian of ancestral religion and house*), while actual authority to sell, partition, or manage property and discipline children rests with her maternal uncle/elder brother (**Mama / Kni**). Moreover, traditional Khasi village councils (**Durbar Shnong**) and chieftainships (*Syiem*) strictly exclude women from public political office! Similarly, among the matrilineal **Garos**, while the heiress daughter (*Nokna*) holds the lineage title, her husband (**Nokrom** — usually her father’s sister’s son) manages the estate as the male head (*Nokma*).`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Rule of Descent', text: 'Cultural principle linking newborn to father’s (patrilineal) or mother’s (matrilineal) line' },
      { label: 'Lineage (Vansh)', text: 'Corporate group tracing exact, step-by-step genealogy to a known real ancestor' },
      { label: 'Clan (Gotra)', text: 'Exogamous group claiming putative/mythical descent from a sage or totem' },
      { label: 'Alliance Network', text: 'Incest taboo & exogamy compel marriage exchange with outside clans (Lévi-Strauss)' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Patrilineal System (Mainstream North India)',
    rightTitle: 'Matrilineal System (Kerala Nayar / Meghalaya Khasi)',
    rows: [
      {
        aspect: 'Lineage & Surname Trace',
        left: 'Through father’s line (Agnatic / Father -> Son)',
        right: 'Through mother’s line (Uterine / Mother -> Daughter)',
      },
      {
        aspect: 'Seat of Male Authority',
        left: 'Paternal authority: Father / Eldest Patriarch (Karta)',
        right: 'Avuncular authority: Maternal Uncle / Brother (Karanavan or Kni)',
      },
      {
        aspect: 'Property Inheritance',
        left: 'Traditionally male coparceners (now reformed via 2005 Act)',
        right: 'Joint Tharavad women or youngest daughter (Khasi Ka Khadduh)',
      },
      {
        aspect: 'Post-Marital Residence',
        left: 'Patrilocal / Virilocal (bride moves to groom’s house)',
        right: 'Duolocal (historical Nayar) or Matrilocal (Khasi/Garo)',
      },
      {
        aspect: 'Core Structural Tension',
        left: 'Subjugation of incoming bride (Kulvadhu) & fraternal partition',
        right: 'Audrey Richards’s "Matrilineal Puzzle" (Husband vs Maternal Uncle)',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Lineage vs Clan (Gotra)',
    meaning:
      'A lineage is a corporate kin group whose members trace demonstrable step-by-step descent from a known common ancestor, whereas a clan (gotra) claims putative descent from a mythical or remote ancestor.',
  },
  {
    kind: 'keyTerm',
    term: 'Alliance Theory (Claude Lévi-Strauss & Louis Dumont)',
    meaning:
      'The structuralist theory arguing that the universal incest taboo and marriage rules ("exchange of women") create horizontal reciprocal alliances between groups as the true glue of kinship.',
  },
  {
    kind: 'keyTerm',
    term: 'Matrilineal Puzzle (Audrey Richards)',
    meaning:
      'The structural tension in matrilineal societies caused by combining female descent/inheritance with male executive authority vested in the mother’s brother (avuncular power) rather than the husband.',
  },
  {
    kind: 'keyTerm',
    term: 'Seed-Earth Analogy (Leela Dube)',
    meaning:
      'The cultural metaphor in patrilineal South Asia that equates the father with the active "seed" owning the child’s blood and lineage, while reducing the mother to a passive nurturing "earth/field".',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'How to Nail the Repeat PYQ: "Is Male Authority Absent in Matrilineal Society?"',
    body: 'UPSC asked this exact question in 2015 and 2021! Follow this 4-step winning template: (1) Open by distinguishing Matriliny (descent rule) from Matriarchy (power rule — a myth); (2) Introduce Audrey Richards’s "Matrilineal Puzzle" and Avuncular Authority (Mother’s Brother); (3) Substantiate with two Indian case studies — Kerala Nayar Tharavad ruled by the Karanavan (Kathleen Gough) and Meghalaya Khasis where Ka Khadduh is only a custodian under Mama/Kni and women are barred from Durbar Shnong (Tiplut Nongbri); (4) Close with modern erosion of matriliny toward patriarchy.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Mandatory Factual Fixes: Tharavad (Not Dharwad) & Todas of Nilgiris',
    body: 'Never write "Dharwad" for Kerala’s Nayar matrilineal household — the correct term is Tharavad (headed by the Karanavan). Also note that the pastoral Toda tribe (studied for double unilineal features and fraternal polyandry) lives in the Nilgiri Hills of Tamil Nadu (not Kerala).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: '4 Types of Descent in India — Instant Examples',
    body: '1. Unilineal: Patrilineal (North Indian Hindus) & Matrilineal (Nayars of Kerala, Khasis/Garos of Meghalaya); 2. Double Unilineal: Todas of Nilgiri Hills; 3. Bilateral: Dimasa Kachari (Assam/Nagaland); 4. Ambilineal: Tiwa/Lalung (Assam/Meghalaya).',
  },
  {
    kind: 'answerBox',
    intro:
      'Lineage and descent rules form the vertical spine of kinship by recruiting individuals into corporate ancestral groups, while alliance rules weave horizontal marital reciprocity across clans.',
    points: [
      'Conceptual hierarchy: Descent is the rule of ancestral recruitment (unilineal, double unilineal, bilateral, ambilineal), whereas Lineage (known ancestor) and Clan/Gotra (mythical ancestor) are concrete corporate groups.',
      'Descent vs Alliance debate: British Descent theorists (Radcliffe-Brown, Fortes, Evans-Pritchard) prioritised vertical blood lineages, whereas French Alliance theorists (Lévi-Strauss, Dumont) prioritised horizontal marriage exchange driven by the incest taboo.',
      'Indian conceptual nuances: Applying African descent models blindly to India ignores strong affinal roles (Mama’s Bhaat), fictive kinship (Muh-bola bhai in exogamous villages), internal land disputes, and avoidance-joking rules.',
      'Male authority in Matriliny: Matriliny is never matriarchy — as Audrey Richards ("Matrilineal Puzzle"), Kathleen Gough (Nayar Karanavan), and Tiplut Nongbri (Khasi Mama/Kni and Durbar Shnong) show, executive authority remains firmly male via avuncular control.',
    ],
    conclusion:
      'Understanding kinship requires synthesising both vertical descent and horizontal alliance while recognising how patriarchal authority persists even across matrilineal frameworks.',
  },
]

export const topic3En: TopicLangContent = {
  summary:
    'Examines descent systems (unilineal, double, bilateral, ambilineal), corporate lineages and clans, the theoretical debate between British Descent Theory (Radcliffe-Brown, Fortes) and French Alliance Theory (Lévi-Strauss, Dumont), and why male authority persists in matrilineal societies through the "Matrilineal Puzzle" (Richards, Gough, Nongbri).',
  mindMap,
  sections,
}