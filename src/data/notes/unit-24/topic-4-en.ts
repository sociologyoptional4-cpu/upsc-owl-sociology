import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic4EnMindMap: MindMapData = {
  title: 'Topic 4 · Emerging Issues: Ageing, Sex Ratios, Mortality & Reproductive Health',
  center: 'Emerging Population Crises',
  subtitle: 'Ageing & Feminization • High-Tech Sexism & DEMARU • Three Delays in MMR/IMR • Reproductive Precarity',
  branches: [
    {
      title: 'Ageing & Feminization of Elderly',
      color: 'lavender',
      thinkers: ['Jean Drèze', 'Ashis Nandy', 'Irawati Karve', 'Mala Kapur Shankardass'],
      points: [
        'Demographic greying: 60+ population rising from 10.5% (2022) to >20% (347 million) by 2050',
        'Feminization of ageing: women live longer but face 54% widowhood, zero asset titles, and poverty',
        'Kinship erosion: nuclearisation and migration fracturing traditional joint family care (Karve)',
        'Support deficits: Maintenance Act 2007 implementation gaps and meager non-contributory pensions',
      ],
    },
    {
      title: 'Child Sex Ratio & High-Tech Sexism',
      color: 'yellow',
      thinkers: ['Amartya Sen', 'Ashish Bose', 'Tulsi Patel', 'Ravinder Kaur'],
      points: [
        'Sen’s "High-Tech Sexism": affluent states (Punjab, Haryana, Gujarat) lead sex-selective abortions',
        'Ashish Bose’s DEMARU states: Daughter Elimination MAnufacturing Republics vs BIMARU fertility',
        'Prosperity paradox: higher wealth and literacy correlate with sharper sex ratio deficits (CSR 919)',
        'Consequences: bride shortages, cross-region bride trafficking ("Paro/Karo" brides in Haryana)',
      ],
    },
    {
      title: 'MMR & IMR: The Three Delays',
      color: 'mint',
      thinkers: ['Sereen Thaddeus', 'Deborah Maine', 'Abhay Bang', 'T.K. Sundari Ravindran'],
      points: [
        'Three Delays Model: delay in deciding to seek care, delay in reaching facility, delay in treatment',
        'Social gradient of mortality: Dalit and Adivasi women suffer 30–50% higher MMR and infant deaths',
        'Maternal anemia crisis: over 57% women anemic (NFHS-5); patriarchal "eating last and least" norm',
        'Community healthcare interventions: Abhay Bang’s Home-Based Newborn Care (HBNC) via ASHAs',
      ],
    },
    {
      title: 'Reproductive Health Precarity',
      color: 'pink',
      thinkers: ['Leela Visaria', 'Mary John', 'Kalpana Ram', 'Sujata Patel'],
      points: [
        'Menstrual taboo & hygiene deficits: inadequate WASH facilities and shame causing reproductive tract infections',
        'Adolescent childbearing: early conception in rural pockets risking obstetric fistula and eclampsia',
        'Cervical and breast cancer deficit: lack of screening at rural Health & Wellness Centres',
        'Disrespectful maternity care: obstetric violence and lack of privacy in overburdened district hospitals',
      ],
    },
  ],
}

export const topic4EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-02-emerging-population-issues.webp',
    alt: 'P2 Unit 14 infographic: Sex Ratio, Ageing, Health & Migration — Missing Girls, Ageing Feminization, Health & Migration',
    caption:
      'Emerging demographic challenges in India encompass rapid population ageing, the feminization of elder vulnerability, high-tech sex selection, and persistent maternal-infant health inequalities.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 02',
  },
  {
    kind: 'md',
    body: `## The Greying of India: Eldercare and the Feminization of Ageing

Ageing is the biological, social, and psychological process of growing older, characterised by declining physiological capacity, shifting social roles, and increasing dependency. Demographically, a society is classified as "ageing" when the proportion of citizens aged 60 and above crosses 7% to 10%. India is undergoing a rapid demographic greying: according to the **UNFPA India Ageing Report 2023**, the elderly population stood at 149 million (10.5% of total population) in 2022 and is projected to **double to 347 million (20.8%) by 2050**. India faces the daunting prospect of "growing old before it grows rich."

The contemporary elderly experience a triple vulnerability:
1. **Financial Insecurity**: Over 70% of India's elderly worked in the informal sector, possessing no contributory pensions or provident funds. The state pension under the Indira Gandhi National Old Age Pension Scheme (IGNOAPS) provides an abysmal Rs. 200–500 per month.
2. **Health Deprivation**: Rising incidence of chronic non-communicable diseases (hypertension, diabetes, dementia, arthritis) creates catastrophic out-of-pocket health expenditures that drain household savings.
3. **Emotional Alienation**: The erosion of traditional joint families, rapid urbanization, and rural-to-urban youth out-migration have left millions of elders living alone in rural areas or confined to isolated urban apartments [[eg:empty-nest elderly in metropolitan high-rises relying on domestic help for daily survival]].

This demographic transition is deeply gendered, producing the **feminization of ageing**. Women have a higher life expectancy at 60 (19 years) than men (17.5 years), but lifetime patriarchal dispossession leaves them uniquely vulnerable. Over ==54% of elderly women are widows==, compared to less than 18% of elderly men. Deprived of property titles, financial literacy, and living with chronic ailments, elderly widows are frequently abandoned by families or forced into pilgrimage towns [[eg:the tragic concentration of destitute widows in Vrindavan and Varanasi documented by Jean Drèze]].`,
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Joint-Family Eldercare',
    rightTitle: 'Contemporary Market & Institutional Care',
    rows: [
      {
        aspect: 'Structural Basis',
        left: 'Patrilocal joint family; filial obligation (*seva*) rooted in dharma',
        right: 'Nuclear family erosion; commercial old-age homes and paid home attendants',
      },
      {
        aspect: 'Caregiver Profile',
        left: 'Unpaid, intensive domestic labor borne entirely by daughter-in-law',
        right: 'Gig careworkers, private assisted-living facilities, or lone self-care',
      },
      {
        aspect: 'Emotional Milieu',
        left: 'Inter-generational co-residence; grandparenting providing daily purpose',
        right: 'Acute isolation, empty-nest syndrome, and social invisibility',
      },
      {
        aspect: 'Access & Inequality',
        left: 'Universal familial absorption, though fraught with domestic neglect',
        right: 'Commodified care accessible only to wealthy upper-middle classes',
      },
    ],
  },
  {
    kind: 'md',
    body: `## High-Tech Sexism and DEMARU States: The Missing Girls Paradox

In 1990, Nobel laureate [[thinker:Amartya Sen]] published his groundbreaking thesis on **"Missing Women,"** estimating that over 100 million women were missing globally (over 40 million in India alone) due to severe gender discrimination in nutrition, healthcare, and survival. While earlier missing girls died from direct female infanticide or systemic neglect, the post-1980s era witnessed what Sen termed **==High-Tech Sexism==**: the marriage of patriarchal son preference with modern prenatal diagnostic ultrasound and amniocentesis technology.

This produced a startling sociological paradox: child sex ratio (CSR 0–6 years) declined most precipitously not in the poorest, most illiterate regions, but in India's most prosperous, educated, and agrarian-capitalist states [[link:Unit 18 Patriarchy, Entitlements & Division of Labour]]. Demographer [[thinker:Ashish Bose]] coined the acronym **DEMARU** (Daughter Elimination MAnufacturing Republics) for Punjab, Haryana, Himachal Pradesh, and Gujarat, contrasting them with the high-fertility BIMARU states:
- **Son Preference Drivers**: Sons are deemed essential for performing funeral rites (*pinda daan*), carrying the lineage, inheriting agricultural land, and serving as old-age social security.
- **Daughter Devaluation**: Escalating consumerist dowry demands turned daughters into an economic liability, captured in the insidious clinic slogan: *"Spend Rs. 500 now on ultrasound, save Rs. 500,000 later on dowry."*
- **Demographic Fallout**: In states like Haryana (where CSR plummeted below 820 in 2001), male marriage squeezes forced families to buy brides from poor eastern states. Sociologist [[thinker:Ravinder Kaur]] documents the rise of **"Paro" or "Karo" cross-region brides** trafficked from Assam, West Bengal, and Kerala, who face linguistic isolation, caste stigmatisation, and secondary citizenship in their marital households.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Delay 1: Deciding to Seek Care',
        text: 'Patriarchal restriction on female mobility, lack of money, and failure to recognise danger signs.',
      },
      {
        label: 'Delay 2: Reaching the Facility',
        text: 'Poor rural roads, lack of emergency ambulance transport, and vast geographic distances to CHCs.',
      },
      {
        label: 'Delay 3: Receiving Quality Care',
        text: 'Shortage of blood banks, absent obstetricians, and disrespectful treatment in district hospitals.',
      },
      {
        label: 'Outcome: Preventable Maternal Death',
        text: 'Catastrophic postpartum haemorrhage, sepsis, and eclampsia claiming vulnerable mothers.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Maternal and Infant Mortality: The Three Delays and Social Disparities

Maternal Mortality Ratio (MMR) and Infant Mortality Rate (IMR) are not mere public health metrics; they serve as structural barometers of female citizenship and health equality. India has made commendable progress: national MMR declined from ~130 in 2014–16 to **97 per 100,000 live births (SRS 2018–20)**, achieving the SDG target ahead of schedule, while IMR dropped to ~28 per 1,000.

However, aggregate national achievements mask severe socio-spatial inequalities. Public health researchers [[thinker:Sereen Thaddeus]] and [[thinker:Deborah Maine]] formulated the **Three Delays Model** to explain why preventable maternal deaths persist:
1. **Delay in Deciding to Seek Care**: Rooted in patriarchal domestic hierarchies. Pregnant women lack autonomy over finances and mobility; mothers-in-law and husbands decide whether hospitalisation is warranted. Furthermore, over 57% of Indian women suffer from nutritional anaemia (NFHS-5), driven by the patriarchal culture of women eating "last and least" [[trap:Assuming institutional delivery alone solves MMR; anemia kills women during delivery before surgery]].
2. **Delay in Reaching the Healthcare Facility**: Substandard rural transport, impassable roads in forested tribal belts, and non-availability of emergency 108 ambulances compel poor families to carry pregnant women on cots.
3. **Delay in Receiving Adequate Treatment**: Once at the facility, overburdened Community Health Centres (CHCs) suffer from severe deficits—over 70% lack specialist obstetricians, anaesthetists, or operational blood storage units, leading to fatal delays during postpartum haemorrhage.

The social gradient is stark: Dalit, Adivasi, and rural mothers experience 30% to 50% higher mortality rates than upper-caste urban women. Public health pioneer [[thinker:Abhay Bang]] demonstrated in Gadchiroli that community-embedded interventions like **Home-Based Newborn Care (HBNC)** delivered through grassroots health workers drastically slash infant deaths without expensive tertiary equipment.`,
  },
  {
    kind: 'keyTerm',
    term: 'Feminization of Ageing',
    meaning: 'The structural phenomenon wherein women form a growing majority of the elderly population but suffer disproportionate poverty, widowhood, and lack of asset ownership.',
  },
  {
    kind: 'keyTerm',
    term: 'High-Tech Sexism (Amartya Sen)',
    meaning: 'The perverse deployment of modern prenatal ultrasound and amniocentesis technology in affluent patriarchal societies to systematically abort female foetuses.',
  },
  {
    kind: 'keyTerm',
    term: 'DEMARU States (Ashish Bose)',
    meaning: 'An acronym for Daughter Elimination MAnufacturing Republics (Punjab, Haryana, Gujarat), coined by Ashish Bose to highlight the alarming crisis of sex-selective abortions in wealthy regions.',
  },
  {
    kind: 'keyTerm',
    term: 'Three Delays Model (Thaddeus & Maine)',
    meaning: 'The socio-medical framework attributing maternal deaths to delay in deciding to seek care, delay in reaching health facilities, and delay in receiving quality obstetric treatment.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Amartya Sen’s "Missing Women" Thesis',
    body: 'In UPSC answers, distinguish between pre-natal and post-natal discrimination. While Amartya Sen originally analysed excess female mortality through childhood neglect and unequal food allocation, post-1980s High-Tech Sexism shifted the locus of discrimination to pre-natal elimination via sex-selective abortions.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Treat Eldercare Merely as a Medical Problem',
    body: 'Avoid reducing population ageing to geriatric hospital beds. Sociologically, ageing in India is a crisis of broken filial contracts, property dispossession, loss of social status, and gendered loneliness, requiring comprehensive social security pensions rather than just clinical medicine.',
  },
  {
    kind: 'answerBox',
    intro:
      'A comprehensive sociological and policy roadmap to address India’s eldercare crisis and the feminization of ageing:',
    points: [
      'Universal Non-Contributory Social Pension: Elevate the IGNOAPS pension to a dignified Rs. 3,000 per month and index it to inflation, prioritizing single elderly widows and disabled elders.',
      'Community Eldercare & Day-Care Hubs: Establish village and municipal senior day-care centers providing subsidized meals, health monitoring, and social interaction to combat empty-nest isolation.',
      'Enforcing the Maintenance Act 2007: Strengthen Maintenance Tribunals with free legal aid and fast-track eviction of abusive children who dispossess elderly parents of home titles.',
      'National Long-Term Care & Geriatric Architecture: Integrate home-based palliative and geriatric care into Ayushman Arogya Mandirs (Health & Wellness Centres), training rural youth as certified eldercare companions.',
      'Property Rights & Housing for Widows: Guarantee joint title deeds, ancestral inheritance rights, and state-subsidized elder housing shelters to prevent destitute widow displacement.',
    ],
    conclusion:
      'A civilized society is judged by how it treats its elderly and its girl children. Ensuring dignified eldercare and eradicating high-tech sex selection are moral imperatives for India’s democratic and human development.',
  },
]
