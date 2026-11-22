import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.2 · Types and Forms of Family',
  center: 'Types & Forms of Family',
  subtitle: 'Classical Typologies • Kolenda’s 12 Forms • Developed Society Diversity • Commercial Marriage',
  branches: [
    {
      title: 'Classical & Structural Types',
      color: 'lavender',
      thinkers: ['G.P. Murdock', 'W.L. Warner', 'Talcott Parsons', 'Eugene Litwak'],
      points: [
        'Orientation (born into) vs Procreation (formed by marriage) — W.L. Warner',
        'Residence: Patrilocal, Matrilocal, Neolocal, Avunculocal, Duolocal (Nayar Tharavad)',
        'Marriage form: Monogamous vs Polygamous (Polygyny & Fraternal/Non-fraternal Polyandry)',
        'Parsons isolated nuclear vs Litwak modified extended & Willmott dispersed extended',
      ],
    },
    {
      title: 'Indian Jointness & Kolenda',
      color: 'yellow',
      thinkers: ['Irawati Karve', 'Pauline Kolenda', 'T.N. Madan', 'F.G. Bailey'],
      points: [
        'Karve: common roof, kitchen (chulha), property, worship, and multi-generational kin',
        'Debate on core marker: Kolenda (residence), Bailey (property), Madan (3-gen depth)',
        'Pauline Kolenda’s 12-Fold Typology breaks rigid nuclear-vs-joint binary',
        'Nuclear, Sub-nuclear, Single-person, Supplemented, Lineal, Collateral & Lineal-Collateral',
      ],
    },
    {
      title: 'Forms in Developed Societies',
      color: 'mint',
      thinkers: ['Edmund Leach', 'Rhona Rapoport', 'Michael Young', 'Jeffrey Weeks'],
      points: [
        'Beyond Leach’s "Cereal Packet Family" (dropped from 38% in 1961 to 21% in 2010 in UK)',
        'Rhona Rapoport: 5 dimensions of family diversity (organisational, cultural, class, life-course, cohort)',
        'Single-person (~30%), cohabiting (~7% US), single-parent, DINK, LAT, and same-sex chosen families',
        'Blended / reconstituted step-families (~15–16% of US children under 13) & Symmetrical Family',
      ],
    },
    {
      title: 'Ritual to Commercial Marriage',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Ulrich Beck', 'Zygmunt Bauman', 'K.M. Kapadia'],
      points: [
        'Shift from sacred clan dharma / ritual sacrament to contractual, market-driven commercial event',
        'Big Fat Indian Wedding industry: wedding planners, destination resorts, pre-wedding shoots',
        'Algorithmic matchmaking (Shaadi.com, Jeevansathi) & rising consumerist dowry/status display',
        'Instrumental marriages (visa/citizenship), pre-nups, and late-modern individualisation',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-02-contemporary-kinship-trends.webp',
    alt: 'P1 Unit 9 infographic: Contemporary Trends in Kinship — Late-Modern Shifts in Intimacy & Domestic Form',
    caption:
      'Across both developed Western nations and urbanising India, the family has moved far beyond a single textbook mould into diverse living arrangements and commercialised marital forms.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 02',
  },
  {
    kind: 'md',
    body: `## Why Can’t We Fit Every Family into a Simple "Nuclear vs Joint" Box?

When television commercials sell breakfast cereal or housing loans, they almost always show one stereotypic picture: a smiling breadwinner husband, a homemaker wife, and two biological children. Anthropologist [[thinker:Edmund Leach]] famously mocked this media stereotype as the ==Cereal Packet Image of the Family==. In real life, human societies organise domestic life in dozens of distinct ways depending on property rules, migration, divorce, ageing, and cultural norms.

To bring scientific order to this variety, sociologists classify families across five classical axes before examining how late-modern developed societies and Indian households have evolved.

## 1. Classical Sociological Typologies of the Family

Every individual actually belongs to two nuclear families across a lifetime, and societies structure residence, authority, and marriage along clear rules:

- **By Individual’s Life Perspective ([[thinker:W.L. Warner]]):** The ==Family of Orientation== is the family into which you are born and socialised alongside your parents and siblings; the ==Family of Procreation== is the family you establish as an adult through marriage and parenthood.
- **By Post-Marital Residence:** **Patrilocal / Virilocal** (bride moves into the groom’s father’s household — mainstream North India), **Matrilocal / Uxorilocal** (groom moves into the bride’s mother’s household — Khasis and Garos of Meghalaya), **Neolocal** (couple sets up an independent flat — urban IT professionals), **Avunculocal** (couple resides with the groom’s maternal uncle — Trobriand Islanders), and **Duolocal / Natolocal** (husband and wife continue living in their respective natal homes while the husband visits at night — traditional Kerala Nayar *Tharavad*).
- **By Authority & Descent:** **Patriarchal / Patrilineal** (male elder authority, father-to-son lineage) versus **Matrilineal** (mother-to-daughter descent, though authority often rests with the maternal uncle or *Karanavan*).
- **By Marriage Form ([[thinker:G.P. Murdock]]):** **Monogamous** (one spouse at a time, or **Serial Monogamy** via divorce and remarriage in the West) versus **Polygamous** — comprising **Polygyny** (one man, multiple wives) and **Polyandry** (one woman, multiple husbands, such as **Fraternal Polyandry** among the Khasas of Jaunsar-Bawar and Todas of the Nilgiris, where brothers share a wife to prevent fragmentation of hill land).
- **By Extension Across Industrialisation:** [[thinker:Talcott Parsons]] highlighted the **Isolated Nuclear Family**; [[thinker:Eugene Litwak]] countered with the ==Modified Extended Family== (nuclear households staying closely connected via phone, money, and visits without co-residence); and [[thinker:Peter Willmott]] identified the **Dispersed Extended Family**.

## 2. Indian Family Typologies: The Joint Family & Pauline Kolenda’s 12 Forms

In Indian sociology, [[thinker:K.M. Panikkar]] and [[thinker:P.H. Prabhu]] described the **joint family** as the civilizational ideal of Hindu society (celebrated from the *Ramayana* and *Mahabharata* to *Hum Saath-Saath Hain*). [[thinker:Irawati Karve]] defined the traditional joint family by five markers: **common roof, common kitchen (*chulha*), common property, common family worship, and three-or-more-generational kinship depth**. Scholars debated which single marker is primary: [[thinker:Pauline Kolenda]] stressed common residence, [[thinker:F.G. Bailey]] stressed common property ownership, [[thinker:T.N. Madan]] stressed three-generational depth, and [[thinker:I.P. Desai]] stressed **functional jointness** (mutual obligations and shared authority even across separate roofs).

Arguing that a crude "nuclear vs joint" binary distorts Indian reality, [[thinker:Pauline Kolenda]] constructed a celebrated **12-Fold Typology of Indian Families** based on exact co-residing relatives:

| Category Group | Kolenda’s Family Types (1 to 12) | Exact Structural Composition |
| --- | --- | --- |
| Nuclear & Sub-Nuclear (1–3) | 1. Nuclear • 2. Sub-Nuclear • 3. Single-Person | (1) Couple + unmarried children; (2) Widow + children or unmarried siblings; (3) One person living alone |
| Supplemented Nuclear (4–5) | 4. Supplemented Nuclear • 5. Supplemented Sub-Nuclear | (4) Nuclear + unmarried/widowed relative (e.g., widowed mother); (5) Sub-nuclear + another unmarried/widowed kin |
| Core Joint Forms (6–8) | 6. Lineal Joint • 7. Collateral Joint • 8. Lineal-Collateral Joint | (6) Vertical: parents + 1 married son; (7) Horizontal: 2+ married brothers; (8) Parents + 2+ married sons & wives |
| Supplemented Joint & Other (9–12) | 9. Supp. Lineal • 10. Supp. Collateral • 11. Supp. Lineal-Collateral • 12. Other | (9–11) Any of types 6–8 plus unmarried/widowed relatives (e.g., widowed Bua); (12) Residual unclassified households |

[[eg:In most urban Indian apartments where a married couple lives with their children and the husband’s widowed mother, the household is not a pure nuclear family — in Pauline Kolenda’s typology it is a **Supplemented Nuclear Family**!]] [[link:Use Kolenda’s 12 types directly in Paper 2 Unit 7 answers to show empirical nuance.]]

## 3. New Forms of Family in Developed Societies

In developed post-industrial societies (UK, USA, Western Europe, Japan), [[thinker:Rhona Rapoport]] and [[thinker:Robert Rapoport]] demonstrated that **family diversity is now a global norm** across five dimensions: *organisational, cultural/ethnic, social class, life-course, and cohort*. In the UK, the stereotypic "cereal packet" married couple with dependent children dropped from **38% of households in 1961 to just 21% in 2010**, replaced by a rich mosaic of new family forms:

- **Single-Person Households:** Rising in the US/UK from **~12% in 1961 to ~29–30% by 2010** due to career mobility, delayed marriage (US average marriage age: 30 for men, 28 for women), divorce, and financially independent elderly widows (~70% of US widows over 65 live alone today, up from 12% in 1910, backed by pensions and welfare state healthcare).
- **Cohabiting Couples (Unmarried Living-In):** Partners sharing a household without formal marriage (~7% of US adults), leading to ~40% of US births occurring outside formal marriage and erasing old stigma around "illegitimacy."
- **Single-Parent (Matrifocal / Lone-Parent) Households:** Constituting ~7–10% of UK households and ~30% among poor Black American communities, overwhelmingly headed by mothers following divorce or unmarried motherhood.
- **Reconstituted / Blended Families (Step-Families):** Formed when divorced or widowed parents remarry (about 40% of US marriages involve remarriage for at least one partner). **Roughly 15% to 16% of American children under age 13 live in blended families**, navigating complex step-parent and step-sibling dynamics.
- **Symmetrical & Dual-Earner / DINK Families:** [[thinker:Michael Young]] and [[thinker:Peter Willmott]] coined the ==Symmetrical Family== for dual-earner homes where spouses share both paid work and domestic chores more conjugally, alongside voluntary childfree **DINK (Double Income, No Kids)** couples (~15% of US women aged 40–44 remain childfree).
- **Same-Sex Unions & Chosen Families ([[thinker:Jeffrey Weeks]]):** Legally recognised LGBTQ+ marriages and supportive non-biological ==chosen families==, alongside **LAT (Living Apart Together)** couples and **pet-inclusive households**.

## 4. Transformation of Marriage: From ‘Ritual’ to ‘Commercial’ in Outlook

One of the sharpest recent UPSC questions (2023) asks why marriage has transformed from **‘ritual’ to ‘commercial’** in its outlook. Historically, marriage was an austere socio-religious ritual (*Sanskara* or sacrament) embedded in kin obligations, village priests, and community food-sharing. Today, neoliberal capitalism, consumer culture, media imagery, and individualisation have turned marriage into both a **multi-billion-dollar commercial spectacle** and a **calculated economic transaction**:

- **The "Big Fat Wedding" Industry & Conspicuous Consumption ([[thinker:Thorstein Veblen]]):** Weddings have shifted from sacred courtyard rites to curated luxury events managed by corporate wedding planners — featuring exotic destination resorts (Udaipur, Bali), designer lehengas, drone cinematography, pre-wedding shoots, and choreographed Sangeets designed for Instagram display.
- **Algorithmic & Commercial Matchmaking:** Traditional family *Pandits* and kinship matchmakers (*Bicholiyas*) have been superseded by subscription-based corporate portals (*Shaadi.com, BharatMatrimony, EliteMatrimony*) and dating apps that filter partners like market profiles by CTC salary packages, visa status, and lifestyle metrics.
- **Cinema, Media & Standardisation of Rituals:** As Karan Johar and Yash Raj films commercialised North Indian customs, festivals like *Karwa Chauth*, *Joota Chupai*, and bachelor parties diffused across castes and regions as consumer spectacles (linked to [[thinker:Jean Baudrillard]]’s *hyperreality* and sign-value consumption).
- **Commercialisation of Dowry & Status Exchange:** Despite the Dowry Prohibition Act (1961), consumer capitalism has inflated dowry (*Dahej*) into vulgar displays of SUVs, luxury electronics, and cash across classes and communities (even reducing Islamic *Meher* to a token sum while demanding dowry goods).
- **Contractual & Instrumental Calculation:** Prenuptial agreements, transactional "green-card / citizenship" instrumental marriages, and career-linked hypergamy treat marriage as a calculated utility contract ([[thinker:Anthony Giddens]]’s conditional relationship and [[thinker:Zygmunt Bauman]]’s *Liquid Love*).`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1949',
        title: 'G.P. Murdock — Universal Nuclear Core',
        text: 'Classified nuclear, polygamous (polygyny/polyandry), and extended family forms across 250 societies.',
      },
      {
        year: '1955–1960',
        title: 'Parsons vs Litwak — Isolated vs Modified Extended',
        text: 'Parsons argued industrial mobility requires isolated nuclear families; Litwak proved modified extended kin ties persist.',
      },
      {
        year: '1968',
        title: 'Pauline Kolenda — 12-Fold Indian Family Typology',
        text: 'Replaced crude nuclear/joint binary with 12 exact household types including supplemented nuclear and lineal-collateral joint.',
      },
      {
        year: '1973',
        title: 'Young & Willmott — The Symmetrical Family',
        text: 'Identified dual-earner conjugal households sharing paid work and home life in developed industrial societies.',
      },
      {
        year: '1982',
        title: 'Rhona & Robert Rapoport — Global Family Diversity',
        text: 'Demonstrated 5 dimensions of family diversity as the "cereal packet norm" declined to 21% of UK homes by 2010.',
      },
      {
        year: '1990s–2020s',
        title: 'Chosen Families, Blended Homes & Commercial Weddings',
        text: 'Rise of LGBTQ+ chosen families (Weeks), ~15–16% US children in blended families, single-person homes (~30%), and commercial marriage industry.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Ritual Outlook on Marriage',
    rightTitle: 'Contemporary Commercial Outlook on Marriage',
    rows: [
      {
        aspect: 'Core Meaning & Purpose',
        left: 'Sacred religious Sanskara / Dharma and lineage continuity',
        right: 'Conspicuous status display, lifestyle match, and market contract',
      },
      {
        aspect: 'Matchmaking Agency',
        left: 'Elders, kinship networks, and family priest (Pandit/Bicholiya)',
        right: 'Paid matrimonial portals (Shaadi.com), elite bureaus, dating apps',
      },
      {
        aspect: 'Ceremonial Execution',
        left: 'Multi-day community rituals in ancestral courtyard',
        right: '2-day destination resort package by professional wedding planners',
      },
      {
        aspect: 'Selection Criteria',
        left: 'Caste/gotra rules, family reputation, and astrological kundali',
        right: 'Annual CTC package, NRI visa status, lifestyle, and brand parity',
      },
      {
        aspect: 'Gift & Exchange System',
        left: 'Symbolic ritual gifts (Stridhan, Meher, Bhaat) within kin duty',
        right: 'Commercialised dowry (cars, luxury flats), Registry gifts, pre-nups',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Cereal Packet Image of the Family (Edmund Leach)',
    meaning:
      'The stereotypical media image of a happy breadwinner father, homemaker mother, and two children — which hides the real empirical diversity of modern households.',
  },
  {
    kind: 'keyTerm',
    term: 'Symmetrical Family (Michael Young & Peter Willmott)',
    meaning:
      'A modern stage of nuclear family life in developed societies where both spouses work outside the home and share domestic chores and decision-making more equally.',
  },
  {
    kind: 'keyTerm',
    term: 'Blended / Reconstituted Family',
    meaning:
      'A family formed when divorced or widowed parents remarry, bringing step-parents and step-siblings together (~15–16% of US children under 13 live in blended families).',
  },
  {
    kind: 'keyTerm',
    term: 'Supplemented Nuclear Family (Pauline Kolenda)',
    meaning:
      'One of Kolenda’s 12 Indian family forms consisting of a core nuclear couple and their unmarried children living with one or more unmarried, widowed, or divorced relatives.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Mandatory Data Correction for Exam Answers: Blended Families',
    body: 'When writing on new forms of family in developed societies (2018 PYQ), cite accurate demographic data: in the UK, traditional married-with-children households dropped from 38% (1961) to 21% (2010) while single-person households reached ~30%; in the US, roughly 15% to 16% (never write 50%!) of children under age 13 live in blended/step-families.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Don’t Say "Ritual Is Dead" in the 2023 Commercial Marriage Question!',
    body: 'When explaining the shift from "ritual" to "commercial" in marriage (2023 PYQ), avoid a one-sided claim that rituals have vanished. Show how rituals themselves have been commercialised (commodification of Haldi, Mehendi, Sangeet, and Karwa Chauth via Bollywood and Instagram hyperreality) alongside algorithmic matchmaking (CTC filters) and consumerist dowry.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Rapoport’s 5 Dimensions of Family Diversity (Mnemonic: OCCLC)',
    body: 'Rhona and Robert Rapoport identified 5 types of family diversity in developed societies: Organisational (dual-earner vs single-parent), Cultural/Ethnic (South Asian, Afro-Caribbean, Western), Class (middle vs working class), Life-course (newlywed vs empty-nest retirees), and Cohort/Generational.',
  },
  {
    kind: 'answerBox',
    intro:
      'Far from converging on a single Western nuclear mould, family and marriage forms have diversified across both developed post-industrial nations and transitional societies like India.',
    points: [
      'Classical & Indian typologies: Beyond Warner’s orientation/procreation and Murdock’s residence/marriage types, Pauline Kolenda’s 12-fold typology (supplemented nuclear, lineal-collateral joint) captures India’s nuanced household reality.',
      'Plurality in developed societies (Rapoport): The "cereal packet" nuclear family fell from 38% (1961) to 21% (2010) in the UK, giving way to single-person homes (~30%), cohabitation, single-parent families, DINKs, and Young & Willmott’s Symmetrical Family.',
      'Blended & Chosen families: High divorce and remarriage produced blended/reconstituted families (~15–16% of US children under 13), while LGBTQ+ activism established non-biological "chosen families" (Jeffrey Weeks).',
      'Ritual-to-Commercial shift in marriage: Neoliberal consumerism, wedding planners, Bollywood hyperreality, CTC-filtered matrimonial apps, and inflated dowry have commodified sacred wedding rites into status spectacles.',
    ],
    conclusion:
      'Contemporary families and marriages must therefore be understood not as a single fixed structure, but as an adaptive spectrum balancing intimacy, market forces, and cultural heritage.',
  },
]

export const topic2En: TopicLangContent = {
  summary:
    'Maps classical family typologies (Warner, Murdock, Parsons, Litwak), Pauline Kolenda’s 12 Indian household forms, new family diversity in developed societies (Rapoport, Leach, Young & Willmott, blended and chosen families), and the radical transformation of marriage from ritual sacrament to commercial spectacle.',
  mindMap,
  sections,
}