import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.5 · Contemporary Trends in Kinship',
  center: 'Contemporary Trends in Kinship',
  subtitle: 'Transformation of Intimacy • Filiocentric & Live-In • Queer Kinship • Indian Marriage Shifts',
  branches: [
    {
      title: 'Intimacy & Late Modernity',
      color: 'lavender',
      thinkers: ['Anthony Giddens', 'Ulrich Beck', 'Zygmunt Bauman', 'Talcott Parsons'],
      points: [
        'Giddens: Pre-industrial pragmatic marriage -> Modern romantic love -> Late-modern Plastic Sexuality & Pure Love',
        'Plastic sexuality decouples sex from reproduction via contraception; Pure Relationship lasts while mutually satisfying',
        'Beck & Beck-Gernsheim ("Normal Chaos of Love") & Bauman ("Liquid Love" fragility)',
        'Parsons’s Divorce Paradox: high Western divorce (30–50%) + high remarriage (~40%) proves high expectations from marriage',
      ],
    },
    {
      title: 'Filiocentric & Demographic Shifts',
      color: 'yellow',
      thinkers: ['Philippe Ariès', 'Viviana Zelizer', 'Michael Young', 'Rhona Rapoport'],
      points: [
        'Filiocentric Family (2024 PYQ): child-centred democratic home where child’s schooling/wellbeing drives decisions',
        'Late marriage (US avg: 30 men, 28 women), declining fertility, ~40% US births outside marriage, ~15% childfree (DINK)',
        'Blended families (~15–16% US children under 13), single-person homes (~30%), and 70% elderly widows living alone',
        'Institutionalisation of Live-In Relationships: S. Khushboo, Indra Sarma, DV Act 2005 & UCC Uttarakhand registration',
      ],
    },
    {
      title: 'Queer Kinship & Same-Sex Debate',
      color: 'mint',
      thinkers: ['Judith Butler', 'Michel Foucault', 'Jeffrey Weeks', 'Kath Weston'],
      points: [
        'Foucault (History of Sexuality) & Judith Butler (Queer Theory challenging Heteronormativity); Kinsey & Bagemihl (450+ species)',
        'Queer Kinship (2025 PYQ): Jeffrey Weeks & Kath Weston ("Families We Choose"), Sasha Roseneil (friendship-intimacy blur)',
        'India trajectory: IPC Sec 377 (1860) -> Naz Foundation (2009/10) -> Koushal (2013) -> Puttaswamy -> Navtej Johar (2018) -> Supriyo (2023)',
        'Indian scholarship: Shakuntala Devi (1977), Ruth Vanita & Saleem Kidwai, Suparna Bhaskaran, Maya Sharma, Ashley Tellis',
      ],
    },
    {
      title: 'Indian Marriage & Across-Region',
      color: 'pink',
      thinkers: ['Irawati Karve', 'I.P. Desai', 'Amrita Pande', 'Janice Raymond'],
      points: [
        'Indian marriage trends (2025 PYQ): rising age, 2-day condensed rituals, Shaadi.com apps, "arranged with a difference", sologamy',
        'Across-Region Marriages (2020 PYQ): blending Karve’s North-South zones vs cross-region bride trafficking (Paro / Molki brides)',
        'ART & Surrogacy: commercial exploitation (>70% housemaids — Raymond, Sarojini & Das) vs agency (Pande) & Surrogacy Act 2021',
        'Transnational "Gulf wives" female-headed homes, virtual WhatsApp kinship, and low divorce (<3–5%) but rising urban petitions',
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
      'In late modernity, kinship and intimacy have shifted from rigid lifetime institutional prescriptions toward plastic sexuality, filiocentric democracy, live-in arrangements, and queer chosen families.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 02',
  },
  {
    kind: 'md',
    body: `## How Are Intimacy, Marriage, and Kinship Changing in Late Modernity?

For centuries, marriage and kinship followed a fixed script written by elders, religion, and lineage rules. You married at a young age within your caste or clan, stayed together for life regardless of personal happiness, and obeyed a strict generational hierarchy. Over the past five decades, **industrialisation, female financial autonomy, contraceptive and reproductive technologies, judicial interventions, and digital media** have rewritten that script across both Western and Indian societies.

To understand why UPSC asked **12 PYQs from this single topic** between 2013 and 2025 (including three questions in 2025 alone!), let us unpack five major theoretical and empirical shifts.

## 1. Anthony Giddens: Transformation of Intimacy, Plastic Sexuality & Pure Love

In *The Transformation of Intimacy* (1992), sociologist [[thinker:Anthony Giddens]] traced how human intimacy evolved across three historical stages:

- **Stage 1 — Pre-Industrial Pragmatic Marriage:** Guided by economic survival, agricultural labour, property alliances, and lineage reproduction rather than personal romance.
- **Stage 2 — Modern Industrial "Romantic Love":** Popularised by 19th–20th-century novels and cinema (from Western "knight in shining armour" fiction to Shah Rukh Khan romances in India), it centred on finding a unique lifetime "soulmate" built around idealised gender archetypes.
- **Stage 3 — Contemporary Late-Modern ==Plastic Sexuality== and ==Pure Relationships==:** The invention of modern contraceptives (pills, condoms) and Assisted Reproductive Technologies (ART) broke the biological chain linking sexual intercourse to pregnancy. Sexuality became **"plastic"** — mouldable, flexible, and detached from reproduction, enabling premarital sex, open relationships, and queer expression. Simultaneously, lifetime sacred vows gave way to the **Pure Relationship**: an alliance entered into for its own sake that lasts only as long as both partners derive sufficient emotional satisfaction and communication from it (echoed by [[thinker:Zygmunt Bauman]]’s *Liquid Love*).

| Historical Era (Giddens) | Primary Basis of Union | Core Sociological Features |
| --- | --- | --- |
| Pre-Industrial Society | Pragmatic Survival & Alliance | Family-arranged economic, security, and reproductive unit |
| Modern Industrial Society | Romantic Love ("Soulmate") | Lifetime pair-bond idealised by novels and cinema |
| Contemporary Late Modernity | Plastic Sexuality & Pure Love | Contraceptive decoupling of sex from reproduction; conditional intimacy |

## 2. The Filiocentric Family, Demographic Shifts & Talcott Parsons’s Divorce Paradox

In 2024, UPSC asked why modern families have become not just nuclear and neolocal, but also ==Filiocentric== (child-centred). In traditional patriarchal joint families, authority flowed strictly top-down from the eldest patriarch, and children were expected to obey silently. Today, declining fertility (1–2 children per couple), dual incomes, and what [[thinker:Viviana Zelizer]] calls the **"economically priceless, emotionally sacred child"** have placed the child at the centre of household decision-making!

- **Why Modern Families Are Filiocentric (2024 PYQ):** First, **democratisation of parent-child ties** — instead of a father moving his family like luggage when transferred, parents today hold dining-table negotiations with their child ("John/Aarav") to coax consent. Second, **hyper-investment & competitive anxiety** — residential choice (neolocal flats near top schools or Kota/Delhi coaching hubs), family budgets, vacations, and consumption revolve around the child’s education and happiness ([[thinker:Philippe Ariès]], [[thinker:Ulrich Beck]]).
- **Global Demographic & Divorce Trends:** In the West, average age at first marriage has risen to **30 for men and 28 for women** (US Census), institutionalising premarital dating, rising voluntary childlessness (**DINKs** — ~15% of US women aged 40–44), **~40% of US births occurring outside formal marriage**, **single-person households reaching ~29–30%**, and **~70% of US widows over 65 living alone** (up from 12% in 1910 due to pensions and welfare healthcare).
- **[[thinker:Talcott Parsons]]’s Divorce Paradox:** Why do Western societies have a **30–50% divorce rate** while India’s divorce rate remains **below 3–5%**? Does the West undervalue marriage? Parsons argued the exact opposite: high divorce reflects **extremely high emotional expectations from marriage** (confirmed by **Edmund Leach’s overloaded circuit** and Pew data showing **~40% of US marriages involve remarriage** for one or both spouses, creating **blended families** for **~15–16% of US children under 13**). Conversely, low divorce in traditional societies often masks **"Empty Shell Marriages"** where couples stay together in name only under economic and patriarchal compulsion.

## 3. Institutionalisation of Live-In Relationships & Judicial Interventions (2019 & 2014 PYQs)

What do sociologists mean by the ==Institutionalisation of Live-In Relationships==? When unmarried cohabitation (~7% of US adults and a growing urban phenomenon in Indian metros like Bengaluru, Mumbai, and Delhi NCR) moves from a secret, stigmatised deviance to a **socially recognised, legally regulated, and normatively structured living arrangement** with defined rights and duties, it becomes *institutionalised*.

In India, the judiciary and legislature have spearheaded this institutionalisation while balancing individual liberty (Article 21) with social protection:

- **Protection of Women from Domestic Violence Act (PWDVA, 2005):** Extended legal protection, residence rights, and maintenance to women in **"relationships in the nature of marriage" (live-in relationships)**.
- **Landmark Supreme Court Judgments:** In *Lata Singh v. State of UP (2006)* and *S. Khushboo v. Kanniammal (2010)*, the Supreme Court ruled that consensual adult live-in cohabitation is part of the fundamental right to life and privacy under Article 21 and is neither a crime nor immoral. In *Tulsa v. Durghatiya (2008)* and *Bharatha Matha (2010)*, the Court granted **legitimacy and property inheritance rights to children born out of long-term live-in relationships**. In *Indra Sarma v. V.K.V. Sarma (2013)*, the Court laid down guidelines distinguishing genuine long-term domestic cohabitation from casual arrangements. Most recently, **Uttarakhand’s Uniform Civil Code (UCC, 2024)** introduced mandatory official registration of live-in relationships, formally codifying them into state law!

## 4. Queer Kinship, Same-Sex Marriages & Population Dynamics (Two 2025 PYQs!)

In 2025, UPSC asked two direct questions on queer sociology: (1) *How does queer kinship challenge traditional kinship?* and (2) *How are same-sex marriages related to population dynamics in India?*

- **Theoretical Foundations ([[thinker:Michel Foucault]], [[thinker:Judith Butler]], [[thinker:Alfred Kinsey]]):** In *The History of Sexuality*, Foucault showed how 19th-century Western law and psychiatry criminalised and medicalised non-reproductive sex. In the 1990s, **Queer Theory** led by [[thinker:Judith Butler]] (*Gender Trouble*) challenged ==Heteronormativity== — the ideological assumption that heterosexuality and the male-female reproductive binary are the only "natural" bedrock of society. Empirical science backs fluidity: **Alfred Kinsey** (1948/1953) found 46% of male respondents reacted to both sexes and 10% were exclusively homosexual for at least 3 years, while biologist **Bruce Bagemihl** documented homosexual behaviour across **450+ animal species** (and ancient Indian temple art at Khajuraho/Ajanta, *Kama Sutra*, and *Shikhandi* show pre-colonial acceptance before British Victorian **IPC Section 377 of 1860** imported legal homophobia).
- **How Queer Kinship Challenges Traditional Kinship (2025 PYQ — [[thinker:Jeffrey Weeks]], [[thinker:Kath Weston]], [[thinker:Sasha Roseneil]]):** Traditional kinship (G.P. Murdock, Radcliffe-Brown, Lévi-Strauss) rested on **biogenetic blood ties, heterosexual procreation, patrilineal descent, and gendered division of labour**. Queer kinship subverts all four: (1) **"Families We Choose" / Chosen Families** (Kath Weston, Jeffrey Weeks) replace coercive biological lineages that reject queer youth with voluntary networks of friends, partners, and supportive peers; (2) **Decoupling Marriage, Sex, and Procreation** via ART, surrogacy, and adoption; (3) **Dismantling Gendered Roles** (refuting Talcott Parsons’s claim that a child needs a male "instrumental" father and female "expressive" mother); and (4) **Blurring Friendship and Romantic Intimacy** (Sasha Roseneil).
- **Legal & Movement Trajectory in India:** Following **Shakuntala Devi**’s pioneering 1977 book *The World of Homosexuals*, post-1990s LPG liberalisation, diaspora/internet safe spaces (**Suparna Bhaskaran**), queer literature (**Ruth Vanita & Saleem Kidwai**), and Deepa Mehta’s film *Fire* (1996) catalysed activism — while **Maya Sharma** proved working-class lesbian realities against "elite myth" claims and **Ashley Tellis** critiqued the movement for ignoring caste/class exclusions. Legally, India moved from **IPC Sec 377 (1860)** -> **Delhi HC Naz Foundation (2009/2010)** -> **SC Suresh Kumar Koushal recriminalisation (2013)** -> **Puttaswamy Right to Privacy (2017)** -> **Navtej Singh Johar decriminalisation (2018)** -> **Supriyo v. Union of India (2023)** (where the Supreme Court affirmed queer dignity against coercion/conversion therapy like Baba Ramdev’s claims, though leaving statutory marriage and joint adoption recognition to Parliament).
- **Same-Sex Marriages and Population Dynamics in India (2025 PYQ):** Conservative critics (including the 2023 open letter by 20+ retired judges) argue same-sex marriage threatens demographic replacement, natural fertility, and public health (citing NACO’s 4.4% HIV prevalence among 25 lakh official MSM). However, sociological demography refutes the "depopulation myth": (1) India is the world’s most populous nation (~1.44 billion) with fertility declining due to female education, urbanisation, and contraception (NFHS-5 TFR = 2.0), NOT homosexuality; (2) Forcing closeted gay/lesbian individuals into compulsory heterosexual marriages produces traumatised **"empty shell marriages"** without changing innate orientation; (3) Legalising same-sex marriage and **adoption rights** actually *improves* population quality and child welfare by giving thousands of India’s orphaned/abandoned children stable two-parent homes, curbing STD spread through stable monogamous recognition, and halting queer brain-drain migration!

## 5. Recent Trends in Indian Marriage & Across-Region Marriages (2025 & 2020 PYQs)

How do recent marriage trends in India differ from traditional practices, and what happens when marriages cross regional boundaries?

- **Recent Indian Marriage Trends vs Traditional Practices (2025 PYQ):** (1) **Rising age of marriage & educational hypergamy**; (2) **"Arranged marriages with a difference"** (parents and algorithmic portals like *Shaadi.com* screen caste/gotra, while youth hold veto and dating power); (3) **Shortening & standardisation of rituals** (condensing 7-day village rites into 2-day Bollywood-style destination packages); (4) **Widening circle of endogamy** (marrying across sub-castes within a broad caste cluster) alongside rising inter-caste, court, and inter-faith unions; (5) **Primacy of conjugal romance** over filial/fraternal bonds; (6) **Unconventional micro-trends** — **Sologamy** (marrying oneself, e.g., Kshama Bindu in Gujarat), **DINK/childfree marriages**, **open/long-distance marriages**, **pet-parenting**, and **commercialised dowry**.
- **Consequences of Across-Region Marriages on Indian Kinship (2020 PYQ):** Driven by pan-Indian IT/corporate mobility (e.g., a Punjabi software engineer marrying a Tamil colleague in Bengaluru), **Voluntary Urban Across-Region Marriages** trigger a **convergence of Irawati Karve’s Northern and Southern kinship zones** — replacing strict 4-gotra or cross-cousin rules with bilateral, bilingual, neolocal conjugality while dispersing kin thousands of miles apart (bridged by virtual WhatsApp kinship). Conversely, **Distress Rural Across-Region Marriages ("Bride Trafficking" / *Paro* or *Molki* brides — studied by Ravinder Kaur and Prem Chowdhry)** occur where skewed sex ratios in Haryana, Punjab, and Western UP compel poor grooms to buy brides from distant Assam, Bengal, Bihar, or Odisha — stripping these brides of natal kin protection, language familiarity, and fictive village brothers, and exposing them to caste-ethnic marginalisation and domestic exploitation.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1860 & 1977',
        title: 'Colonial IPC Sec 377 & Shakuntala Devi’s Study',
        text: 'British Victorian morality criminalised unnatural sex (1860); Shakuntala Devi authored "The World of Homosexuals" (1977) urging decriminalisation.',
      },
      {
        year: '1992',
        title: 'Anthony Giddens — The Transformation of Intimacy',
        text: 'Conceptualised the shift from pragmatic and romantic love to contraceptive "plastic sexuality" and conditional "pure relationships".',
      },
      {
        year: '2005–2013',
        title: 'Institutionalisation of Live-In Relationships in India',
        text: 'PWDVA 2005 ("nature of marriage"), S. Khushboo (2010), and Indra Sarma (2013) granted legal protection and child legitimacy to live-in couples.',
      },
      {
        year: '2009–2018',
        title: 'Naz Foundation to Navtej Singh Johar Landmark',
        text: 'Delhi HC decriminalised Sec 377 (2009), reversed in Koushal (2013), before SC permanently decriminalised homosexuality in Navtej Johar (2018).',
      },
      {
        year: '2021',
        title: 'Surrogacy (Regulation) Act, 2021',
        text: 'Banned commercial surrogacy in India to prevent exploitation of poor women (>70% housemaids), permitting only altruistic surrogacy.',
      },
      {
        year: '2023–2024',
        title: 'Supriyo Marriage Equality Case & UCC Live-In Registration',
        text: 'SC heard same-sex marriage pleas in Supriyo (2023); Uttarakhand UCC (2024) mandated formal registration of live-in relationships.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Kinship & Marriage Norms',
    rightTitle: 'Contemporary Late-Modern & Queer Kinship Trends',
    rows: [
      {
        aspect: 'Basis of Intimacy (Giddens)',
        left: 'Pragmatic lineage duty & lifelong sacred sacrament',
        right: 'Plastic sexuality (decoupled from birth) & conditional Pure Relationship',
      },
      {
        aspect: 'Household Power Axis',
        left: 'Patriarchal, elder-centric, filial & fraternal primacy',
        right: 'Conjugal symmetry, neolocal residence & Filiocentric (child-centred) home',
      },
      {
        aspect: 'Cohabitation & Legitimacy',
        left: 'Strict taboo on premarital sex and non-marital cohabitation',
        right: 'Institutionalised live-in relationships protected by Courts & DV Act 2005',
      },
      {
        aspect: 'Kinship Recruitment',
        left: 'Heteronormative blood (consanguineal) and marriage (affinal) ties',
        right: 'Queer "Chosen Families" (Weeks/Weston), ART/IVF, and blended step-families',
      },
      {
        aspect: 'Spatial & Regional Scope',
        left: 'Strict caste endogamy & regional zone rules (Karve)',
        right: 'Across-region marriages (IT professionals & distress Molki brides) + virtual kin',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Plastic Sexuality & Pure Relationship (Anthony Giddens)',
    meaning:
      'Plastic sexuality is sexuality freed from reproduction via modern contraception; a Pure Relationship is an egalitarian bond continued only as long as it delivers mutual emotional satisfaction.',
  },
  {
    kind: 'keyTerm',
    term: 'Filiocentric Family (2024 PYQ)',
    meaning:
      'A modern nuclear and neolocal family orientation where household budgets, residential choices, and democratised dining-table decisions revolve around the child’s aspirations and emotional well-being.',
  },
  {
    kind: 'keyTerm',
    term: 'Heteronormativity & Queer Chosen Families (Judith Butler, Jeffrey Weeks)',
    meaning:
      'Heteronormativity is the ideological belief that heterosexuality is the only normal default; Queer Chosen Families (Weeks, Kath Weston) are supportive non-biological kin networks formed by choice.',
  },
  {
    kind: 'keyTerm',
    term: 'Institutionalisation of Live-In Relationships',
    meaning:
      'The socio-legal process whereby unmarried cohabitation gains normative recognition, child legitimacy, and statutory protection (e.g., Domestic Violence Act 2005, S. Khushboo 2010, UCC 2024).',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'How to Tackle the Three 2025 PYQs in This Topic!',
    body: 'UPSC asked 3 questions here in 2025: (1) For "Queer kinship challenging traditional kinship", contrast Murdock/Lévi-Strauss’s biogenetic heteronormativity with Judith Butler, Jeffrey Weeks/Kath Weston ("Chosen Families"), and Sasha Roseneil; (2) For "Same-sex marriage & population dynamics", refute depopulation fears using NFHS-5 (TFR 2.0 driven by education/contraception), Parsons’s empty-shell marriages, NACO MSM health formalisation, and orphan adoption dividends; (3) For "Recent Indian marriage trends", cover "arranged with a difference", 2-day commercialised rituals, across-region unions, sologamy, DINKs, and live-in recognition.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Two Critical Exam Nuances: Across-Region Marriages & Surrogacy Act 2021',
    body: '1. In the 2020 "Across-Region Marriage" PYQ, always show BOTH classes: (a) Urban IT/corporate inter-regional love marriages blending Karve’s North-South zones, and (b) Rural distress cross-region marriages (Haryana/Punjab skewed sex ratio leading to "Paro/Molki" brides bought from Assam/Bihar/Bengal — Ravinder Kaur). 2. On ART/Surrogacy, contrast Janice Raymond ("reproductive objects") with Amrita Pande’s agency study and cite the Surrogacy (Regulation) Act 2021 banning commercial surrogacy.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Indian LGBT Movement & Legal Milestones Timeline',
    body: 'Law: 1860 IPC Sec 377 -> 2009/10 Delhi HC (Naz Foundation) -> 2013 SC (Suresh Koushal) -> 2017 Puttaswamy (Privacy) -> 2018 Navtej Singh Johar (Decriminalised) -> 2023 Supriyo (Marriage equality hearing). Scholars: Shakuntala Devi (1977), Ruth Vanita & Saleem Kidwai, Suparna Bhaskaran (diaspora/TV), Maya Sharma (working-class lesbians), Ashley Tellis (caste/class critique).',
  },
  {
    kind: 'answerBox',
    intro:
      'Contemporary kinship and marriage are undergoing a profound structural transition from compulsory, lifetime, heteronormative obligations toward democratised, choice-based, and technologically mediated relationships.',
    points: [
      'Intimacy transformation (Anthony Giddens): Contraceptive "plastic sexuality" and conditional "pure relationships" (alongside Bauman’s Liquid Love and Parsons’s divorce-remarriage paradox) have reshaped marital expectations.',
      'Filiocentric & Symmetrical turn: Modern nuclear and neolocal households increasingly operate as democratic, child-centred (filiocentric) units (Ariès, Zelizer) while accommodating single-person (~30%), DINK, and blended (~15–16% US children) forms.',
      'Institutionalisation of Live-In ties: Judicial interventions (S. Khushboo 2010, Indra Sarma 2013, Tulsa child legitimacy), the Domestic Violence Act (2005), and UCC registration have institutionalised unmarried cohabitation in India.',
      'Queer Kinship & Population Dynamics: Challenging heteronormativity (Judith Butler, Foucault), queer "chosen families" (Jeffrey Weeks, Kath Weston) and ART decouple kinship from biology without harming national demography — instead offering adoption welfare and reducing empty-shell marriages.',
      'Indian marriage & cross-region shifts: "Arranged marriages with a difference", commercialised 2-day destination rites, and across-region marriages (both urban zone-blending and rural distress "Molki" brides — Ravinder Kaur) highlight India’s hybrid modernity.',
    ],
    conclusion:
      'Far from witnessing the collapse of kinship, contemporary society is expanding the moral and legal canvas of who counts as family.',
  },
]

export const topic5En: TopicLangContent = {
  summary:
    'Synthesises contemporary kinship trends: Anthony Giddens’s plastic sexuality and pure relationships, Parsons’s divorce paradox, filiocentric (child-centred) nuclear families, the judicial institutionalisation of live-in relationships in India, queer kinship and same-sex marriage debates (Foucault, Butler, Weeks, Weston, Navtej Johar to Supriyo), Assisted Reproductive Technologies and the Surrogacy Act 2021, and across-region marriages.',
  mindMap,
  sections,
}