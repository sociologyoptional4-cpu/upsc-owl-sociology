import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2EnMindMap: MindMapData = {
  title: 'Topic 2 · Poverty, Deprivation & Inequalities in India',
  center: 'Poverty & Structural Inequalities',
  subtitle: 'Calorie vs Capability • Multidimensional Poverty (MPI) • Billionaire Raj • Caste-Gender Intersections',
  branches: [
    {
      title: '1. Beyond Calorie Lines to Capabilities',
      color: 'lavender',
      thinkers: ['Amartya Sen', 'Sabina Alkire', 'James Foster', 'Jean Drèze'],
      points: [
        'Calorie reductionism: Dandekar-Rath & Tendulkar lines obscuring non-food basic goods',
        'Capability Deprivation (Sen): Poverty as unfreedom and inability to lead a flourishing life',
        'Multidimensional Poverty (MPI): Alkire-Foster methodology across 12 social indicators',
        'NITI Aayog National MPI: Documenting steep deprivations in nutrition, sanitation, and clean fuel',
      ],
    },
    {
      title: '2. Wealth Polarization & The Billionaire Raj',
      color: 'yellow',
      thinkers: ['Thomas Piketty', 'Lucas Chancel', 'Karl Marx', 'Utsa Patnaik'],
      points: [
        'World Inequality Lab: Top 1% wealth share exceeding 40%, higher than British colonial era',
        'K-shaped recovery: Stock markets and capital profits booming while informal real wages stagnate',
        'Utsa Patnaik: Agrarian deflation and calorie compression among the rural proletariat',
        'Relative Deprivation (Runciman): Subjective discontent fueled by conspicuous elite consumption',
      ],
    },
    {
      title: '3. Caste-Class Intersectionality in Deprivation',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Jan Breman', 'Sukhadeo Thorat', 'Paul Attewell'],
      points: [
        'Ambedkar’s division of labourers: Caste fixes occupational hierarchies and blocks capital accumulation',
        'Footloose Labour (Breman): Circular seasonal migration trapping landless Dalits in bonded debt',
        'Market discrimination: Thorat & Attewell field experiments proving resume caste penalties',
        'Generational asset poverty: Landlessness among Musahars and Madigas reinforcing semi-feudal dependency',
      ],
    },
    {
      title: '4. Feminization of Poverty & Care Economy',
      color: 'pink',
      thinkers: ['Ashwini Deshpande', 'Bina Agarwal', 'Diane Elson'],
      points: [
        'Gender wage gap: Female workforce relegated to casual, low-productivity domestic and farm toil',
        'Assetlessness (Bina Agarwal): Lack of agricultural land titling denying institutional credit to women',
        'Pandemic asymmetry (Deshpande): Disproportionate female job losses and sluggish informal recovery',
        'Unpaid care penalty: Triple burden of cooking, fetching water, and eldercare draining human capital',
      ],
    },
  ],
}

export const topic2EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps (Challenges of Social Transformation).',
  },
  {
    kind: 'md',
    body: `## Poverty and Deprivation: Beyond the Calorie Line

For decades after independence, Indian poverty was conceptualized through narrow economic indices focused on minimum subsistence calories. The planning establishment relied on income thresholds necessary to consume 2,400 calories per day in rural areas and 2,100 calories in urban centers (Dandekar-Rath, Tendulkar Committee, and Rangarajan Committee). Sociologists argue that this headcount ratio reduced poverty to biological animal survival, completely ignoring structural unfreedoms, social dignity, and access to basic public infrastructure.

In contemporary sociology, poverty is understood not as an accidental lack of money, but as ==Structural Deprivation==. It is produced and sustained by institutional power asymmetries, historical caste exclusion, and unequal asset ownership.

### Amartya Sen's Capability Deprivation

Nobel laureate [[thinker:Amartya Sen]] revolutionized the study of poverty by shifting the analytic lens from income to ==Capability Deprivation==. Sen argued that income is merely an instrumental means; the real end of development is expanding substantive human freedoms — what people can actually *do* and *be* (functionings). 

Poverty is the systematic inability to realize elementary capabilities, such as avoiding premature mortality, being nourished, being educated, enjoying personal security, and participating in public life without shame. A person who is not hungry because of subsidized grain may still suffer chronic poverty if they lack quality schooling, safe drinking water, healthcare, or political voice.

[[eg:In rural Bihar, a landless Musahar worker receiving subsidized PDS grains remains structurally poor because lack of schooling, healthcare, and social dignity prevents their children from accessing non-hereditary modern employment.]]

### The Multidimensional Poverty Index (MPI)

Building upon Sen’s capability framework, Sabina Alkire and James Foster developed the ==Multidimensional Poverty Index (MPI)==, adapted in India by NITI Aayog. The National MPI measures poverty across three equal dimensions — Health, Education, and Standard of Living — evaluated through 12 specific indicators:

| Dimension | Indicators Tracked | Sociological Significance |
| :--- | :--- | :--- |
| **Health** | Nutrition, Child & Adolescent Mortality, Maternal Health | Measures physical vulnerability, biological reproduction, and bodily deprivation |
| **Education** | Years of Schooling, School Attendance | Captures cultural capital transmission and generational mobility barriers |
| **Standard of Living** | Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, Assets, Bank Account | Assesses infrastructure exclusion, time poverty, and domestic labor burdens |

According to NITI Aayog’s National MPI reports, multidimensional poverty has declined substantially, yet severe overlapping deprivations persist in rural central and eastern India, particularly in access to clean cooking fuels, modern sanitation, and adolescent nutrition.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Distinction: Absolute Poverty vs Relative Deprivation',
    body: 'Always differentiate between absolute poverty (biological lack of basic survival resources) and W.G. Runciman’s "Relative Deprivation" (subjective sense of deprivation when individuals compare their condition with reference groups). In globalized India, relative deprivation often generates sharper social friction than absolute poverty.',
  },
  {
    kind: 'compare',
    leftTitle: 'Income/Calorie Poverty Approach',
    rightTitle: 'Capability/MPI Poverty Approach',
    rows: [
      {
        aspect: 'Theoretical Base',
        left: 'Biological subsistence; minimum calories needed for physical work',
        right: 'Substantive human freedom and capability realization (Amartya Sen)',
      },
      {
        aspect: 'Measurement Focus',
        left: 'Unidimensional monthly per capita consumption expenditure (MPCE)',
        right: 'Multidimensional deprivations across health, education, and living standards',
      },
      {
        aspect: 'Policy Prescription',
        left: 'Subsidized grain handouts (PDS) and targeted cash transfers',
        right: 'Universal public goods: quality schools, healthcare, and asset creation',
      },
      {
        aspect: 'View of Poor',
        left: 'Passive welfare beneficiaries receiving basic biological sustenance',
        right: 'Rights-bearing democratic agents entitled to self-directed life choices',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Globalization and Emerging Inequalities: The Billionaire Raj

Economic liberalization since 1991 accelerated economic growth but simultaneously unleashed unprecedented wealth polarization. In their seminal studies for the World Inequality Lab, economists [[thinker:Thomas Piketty]] and Lucas Chancel demonstrated that contemporary India’s wealth and income inequality has surpassed even the peak of the British colonial era, dubbing modern India the ==Billionaire Raj==.

According to World Inequality Lab data (2024), the richest 1% of Indians hold over 40% of the total national wealth, while the bottom 50% own barely 6.5%. This creates what sociologists call a "K-shaped" economic dynamic: capital owners, corporate executives, and tech elites experience exponential wealth expansion, while the informal precariat contends with stagnant real wages and persistent underemployment.

[[link:Paper 1 Stratification: Connect Piketty’s capital accumulation dynamics with Karl Marx’s law of capitalist accumulation and reserve army of labour.]]

### Relative Deprivation and Consumerist Frustration

As sociologist [[thinker:Robert K. Merton]] demonstrated in his reference group theory, deprivation is not experienced in an absolute vacuum. Sociologist W.G. Runciman elaborated that ==Relative Deprivation== emerges when individuals perceive an illegitimate gap between their legitimate expectations and actual entitlements.

With the ubiquity of smartphones, social media, and commercial advertising, aspirational lifestyles of the urban upper-middle class are constantly beamed into rural and working-class households. When upward educational mobility fails to yield formal white-collar jobs, this aspirational mismatch triggers acute relative deprivation, fueling social alienation, substance abuse, and identity mobilization among agrarian youths.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Informalization of Work', text: '90%+ workers concentrated in unorganized sector' },
      { label: 'Hyper-Wealth Capture', text: 'Top 1% captures lion’s share of national capital gains' },
      { label: 'Digital Aspiration Boom', text: 'Smartphones project elite consumerist lifestyle' },
      { label: 'Relative Deprivation Shock', text: 'Educated youth face unemployment & structural frustration' },
    ],
  },
  {
    kind: 'md',
    body: `## Caste, Class and Gender: Interlocking Traps of Deprivation

Poverty in India cannot be decoded through class economics alone; it is deeply reinforced by caste hierarchy and patriarchal subordination.

### Caste and Class Intersectionality

Sociologist [[thinker:Jan Breman]], through five decades of ethnographic fieldwork in rural Gujarat (*Footloose Labour*), documented the structural traps confining landless agricultural laborers (predominantly Dalits) to intergenerational penury. Deprived of land ownership, rural subalterns are forced into seasonal circular migration to brick kilns, sugarcane fields, and urban construction sites. Breman observed that these migrant workers are kept in a perpetual state of "neo-bondage" through consumption advances from labor contractors (mukadams).

Furthermore, institutional discrimination in private urban labor markets persists despite formal constitutional equality. Groundbreaking audit studies by sociologists [[thinker:Sukhadeo Thorat]] and Paul Attewell sent thousands of identical resumes to private corporate firms, alternating only upper-caste and Dalit surnames. Dalit applicants had a substantially lower probability of receiving interview callbacks, proving that caste cultural capital continues to gatekeep formal employment opportunities.

[[eg:In rural Uttar Pradesh and Bihar, Dalit landless families remain tied to dominant caste landholders for residential sites and credit, perpetuating intergenerational agrarian servitude despite formal abolitions of bonded labour.]]

### The Feminization of Poverty and Pandemic Recovery

Sociologist [[thinker:Ashwini Deshpande]] and feminist economist [[thinker:Bina Agarwal]] have documented the alarming phenomenon of the ==Feminization of Poverty== in India. Women suffer from systemic asset poverty: less than 14% of agricultural operational landholders are women, denying female cultivators access to institutional bank credit, agricultural subsidies, and cooperative leadership.

During the COVID-19 pandemic and its aftermath, this structural asymmetry widened drastically. Ashwini Deshpande’s empirical research demonstrated that female workers suffered larger proportional employment losses during lockdowns and experienced a much slower, precarious return to work compared to men. Women were pushed into low-paying, distress-driven informal petty trade and unpaid household labor, severely curtailing female labor force participation (FLFPR). The unequal distribution of the unpaid care economy — water fetching, caregiving, cooking — imposes a crushing "time poverty" on subaltern women, foreclosing opportunities for skill acquisition and economic autonomy.`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Ashwini Deshpande on Female Labour Disadvantage',
    body: 'Ashwini Deshpande highlights three interlocking traps for Indian women: the "Sticky Floor" (trapped in bottom informal jobs), "Care Penalty" (unpaid domestic toil), and "Distress-Driven Work" (entry into work only during acute household crises).',
  },
  {
    kind: 'keyTerm',
    term: 'Capability Deprivation',
    meaning: 'Amartya Sen’s concept defining poverty as the systematic denial of substantive freedoms and elementary human capabilities, rather than merely low income.',
  },
  {
    kind: 'keyTerm',
    term: 'Multidimensional Poverty Index (MPI)',
    meaning: 'An assessment framework developed by Alkire-Foster and NITI Aayog that measures acute deprivations across 12 indicators in health, education, and living standards.',
  },
  {
    kind: 'keyTerm',
    term: 'Relative Deprivation',
    meaning: 'W.G. Runciman’s sociological concept describing feelings of injustice arising when individuals compare their life conditions against a superior reference group.',
  },
  {
    kind: 'keyTerm',
    term: 'Feminization of Poverty',
    meaning: 'The structural phenomenon wherein women bear a disproportionate burden of poverty due to lack of land titling, informal employment, and unpaid care duties.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour',
    meaning: 'Jan Breman’s term for migratory, unorganized, and disenfranchised rural workers who circulate endlessly between low-wage seasonal agricultural and urban jobs.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Don’t Reduce Poverty to a Government Headcount Line',
    body: 'Never write that poverty is solved simply because the percentage below $2.15/day or 2,100 calories has fallen. Sociologically, chronic poverty is reproduced through unequal land relations, caste market discrimination, and patriarchal care burdens.',
  },
  {
    kind: 'answerBox',
    intro:
      'A comprehensive sociological answer evaluating contemporary Indian poverty, deprivation, and inequalities must integrate multi-scalar analytical dimensions:',
    points: [
      'Transition from biological calorie thresholds (Tendulkar) to Amartya Sen’s Capability Deprivation and Alkire-Foster MPI reveals persistent structural exclusions in health and schooling.',
      'Thomas Piketty and Lucas Chancel’s World Inequality Lab findings demonstrate unprecedented wealth concentration, with the top 1% monopolizing over 40% of national assets.',
      'Robert K. Merton and W.G. Runciman’s Relative Deprivation lens explains how digital consumption aspirations clash with informal unemployment to generate acute subaltern alienation.',
      'Jan Breman’s "Footloose Labour" framework and Thorat-Attewell resume audit studies substantiate how caste hierarchy and labor market discrimination perpetuate intergenerational traps.',
      'Ashwini Deshpande and Bina Agarwal document the Feminization of Poverty, wherein lack of land titles and unequal care burdens resulted in uneven, precarious post-pandemic recovery.',
    ],
    conclusion:
      'Eradicating chronic Indian poverty requires dismantling the caste-capital nexus through universal public health, quality schooling, land titling, and fair labor formalization.',
  },
]
