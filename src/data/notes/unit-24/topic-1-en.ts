import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1EnMindMap: MindMapData = {
  title: 'Topic 1 · Population Size, Growth, Composition and Distribution',
  center: 'Population Dynamics & Transitions',
  subtitle: 'Transition Curve • Demographic Dividend vs Tax • Regional Asymmetries • Malthus vs Marx',
  branches: [
    {
      title: 'Demographic Transition Curve',
      color: 'lavender',
      thinkers: ['Warren Thompson', 'Frank Notestein', 'C.P. Blacker', 'Kingsley Davis'],
      points: [
        'Five-stage model: India transition from Stage 2 (explosion) to Stage 3 (late expanding)',
        'Crude Death Rate fallen to ~6.0/1000 while Crude Birth Rate dropped to ~19.5/1000',
        'NFHS-5 national milestone: Total Fertility Rate reached 2.0 (below replacement 2.1)',
        'Uneven transition: Peninsular South in Stage 4 while northern states lag in Stage 3',
      ],
    },
    {
      title: 'Dividend vs Demographic Tax',
      color: 'yellow',
      thinkers: ['David Bloom', 'Jeffrey Williamson', 'Ashish Bose', 'C.P. Chandrasekhar'],
      points: [
        'Favourable dependency ratio: 67% population in 15–64 age group; median age 28.2 years',
        'Window of opportunity: closes around 2041–2050 as fertility drops and greying accelerates',
        'Demographic tax danger: jobless growth, informalisation, low female LFPR (~32.8% PLFS)',
        'Skill deficit: less than 5% formally vocationally trained; risks social unrest and anomie',
      ],
    },
    {
      title: 'Regional Cleavages & BIMARU',
      color: 'mint',
      thinkers: ['Ashish Bose', 'K.S. James', 'Alka Basu', 'Jean Drèze'],
      points: [
        'Ashish Bose (1985) coinage: Bihar, MP, Rajasthan, UP (now EAG) holding back national indices',
        'Sharp fertility divergence: Bihar (TFR 2.98), UP (2.35) vs Kerala (1.8), Tamil Nadu (1.4)',
        'Sociological fallout: mass male circular labour migration from North to South/West',
        'Political friction: 2026 Delimitation freeze end and 15th Finance Commission tax disputes',
      ],
    },
    {
      title: 'Malthus vs Sociological Critiques',
      color: 'pink',
      thinkers: ['Thomas Malthus', 'Karl Marx', 'Ester Boserup', 'Amartya Sen'],
      points: [
        'Malthusian pessimism: arithmetic food vs geometric population; positive & preventive checks',
        'Marxian critique: no universal law; capitalism creates relative surplus population / reserve army',
        'Boserup thesis: population density stimulates agricultural intensification and innovation',
        'Amartya Sen: famine and poverty stem from entitlement failure and distribution, not sheer numbers',
      ],
    },
  ],
}

export const topic1EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-01-demographic-transition-policy.webp',
    alt: 'P2 Unit 14 infographic: Demographic Transition & Policy — Population Growth, Dividend & Shift from Targets to NPP 2000',
    caption:
      'India’s demographic trajectory illustrates a dramatic transition from mortality decline to sub-replacement fertility, creating a historic youth bulge alongside deep regional cleavages.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 01',
  },
  {
    kind: 'md',
    body: `## India on the Demographic Transition Curve

Demographic transition describes how human societies move from a regime of high births and high deaths to low births and low deaths as they modernise and industrialise. In classical demographic theory formulated by [[thinker:Frank Notestein]] and [[thinker:Warren Thompson]], this transformation proceeds through distinct stages that reflect underlying economic and public health advancements. India entered the twentieth century trapped in Stage 1 of fluctuating high mortality and high fertility, but over the last century has undergone an astonishing transition that reshapes its social architecture.

Today, India stands firmly in **Stage 3 (Late Expanding Transition)** and is crossing into **Stage 4 (Low Fluctuating)**. The national Crude Death Rate (CDR) has tumbled to approximately 6.0 per 1,000 due to mass vaccination, antibiotic access, epidemic control, and improved famine management. Simultaneously, the Crude Birth Rate (CBR) has dropped steadily to around 19.5 per 1,000, bringing the national Total Fertility Rate (TFR) to ==2.0 in NFHS-5 (2019–21)==, which is below the biological replacement benchmark of 2.1 children per woman.

| Demographic Stage | Historical Period | CBR / CDR Profile | Sociological Driver & Structural Condition |
| :--- | :--- | :--- | :--- |
| **Stage 1: High Stationary** | Pre-1921 | CBR ~48, CDR ~47 | Famines, epidemics (1918 Spanish flu), subsistence agrarianism |
| **Stage 2: Early Expanding** | 1951–1981 | CBR ~40, CDR ~15 | DDT, antibiotics, famine relief drop deaths; high "population explosion" |
| **Stage 3: Late Expanding** | 1991–2020 | CBR ~22, CDR ~7 | Female literacy, urbanization, nuclear families drop birth rate |
| **Stage 4: Low Stationary** | Emerging (South) | CBR ~14, CDR ~7 | Replacement TFR (<2.1), lifestyle diseases, greying society |

However, this national aggregate conceals a stark geographic duality. While southern states like Kerala, Tamil Nadu, and Andhra Pradesh are experiencing Stage 4 low fertility and rapid population ageing, large Empowered Action Group (EAG) states in the northern Hindi heartland remain in middle-to-late Stage 3, producing an uneven demographic landscape.`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'NFHS-5 Replacement Milestone',
    body: 'According to NFHS-5 (2019–21), India’s national Total Fertility Rate (TFR) dropped to 2.0. Except for five states (Bihar 2.98, Meghalaya 2.91, UP 2.35, Jharkhand 2.26, and Manipur 2.17), all Indian states and Union Territories have achieved sub-replacement fertility without coercive national population laws.',
  },
  {
    kind: 'md',
    body: `## Demographic Dividend: Economic Goldmine or Demographic Nightmare?

A demographic dividend occurs when a country’s dependency ratio drops drastically because the share of working-age adults (15–64 years) expands relative to dependent children and the elderly. Economists [[thinker:David Bloom]] and [[thinker:Jeffrey Williamson]] demonstrated that this window creates an extraordinary surge in productivity, household savings, and fiscal revenue. With a median age of 28.2 years and over 67% of its citizens in the working-age bracket, India is currently navigating the peak of its demographic dividend, projected to last until approximately 2041–2050.

Yet sociologists caution that a youth bulge does not automatically translate into prosperity. If the state fails to provide quality education, dignified employment, and universal healthcare, the demographic dividend degrades into a ==demographic tax or liability==. Sociologist [[thinker:C.P. Chandrasekhar]] points out that India’s growth model exhibits "jobless growth," where high GDP expansion fails to generate formal employment. According to the Periodic Labour Force Survey (PLFS), over 88% of working youth remain trapped in precarious informal jobs, and female labour force participation (FLFPR) hovers at a modest ~32.8%, meaning half the country's youth potential is severely underutilized. When educated young individuals find no avenues for mobility [[eg:millions of graduates and engineers competing for peon and railway group-D vacancies]], demographic energy curdles into youth alienation, paper leaks, and social unrest.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Demographic Dividend (Potential Asset)',
    rightTitle: 'Demographic Tax / Liability (Structural Trap)',
    rows: [
      {
        aspect: 'Dependency Ratio',
        left: 'Shrinking child dependency with massive 15–64 workforce (~67%)',
        right: 'Premature ageing in southern states while North remains underskilled',
      },
      {
        aspect: 'Economic Drivers',
        left: 'Surge in household savings, formal entrepreneurship & capital investments',
        right: 'Jobless growth, sub-contracting, and low-wage service informality (gig work)',
      },
      {
        aspect: 'Gender Participation',
        left: 'Rising female tertiary education translating into productive careers',
        right: 'Persistent U-shaped curve; patriarchal domestic burdens and low FLFPR',
      },
      {
        aspect: 'Social Stability',
        left: 'Upward social mobility, expanding middle class, and civic participation',
        right: 'Educated youth alienation, street protests, and anomic social deviance',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Regional Demography: Ashish Bose and the BIMARU Asymmetry

In 1985, demographer [[thinker:Ashish Bose]] coined the acronym **BIMARU** (Bihar, Madhya Pradesh, Rajasthan, and Uttar Pradesh) in a presentation to Prime Minister Rajiv Gandhi to spotlight that national population stabilization was impossible without addressing the northern heartland. Bose observed that these four contiguous states accounted for over 40% of India's population and suffered from abysmal female literacy, crippling infant mortality, and entrenched patriarchal family structures.

While the southern states (Kerala, Tamil Nadu, Karnataka) harnessed female education and public primary healthcare to bring TFR down to 1.4–1.8, the northern states lagged by decades [[link:Unit 20 Industrialization & Urbanization]]. This regional divergence creates three profound sociological and constitutional consequences:
1. **Inter-State Migration Waves**: Millions of young male circular migrants move continuously from Bihar and UP to Kerala, Tamil Nadu, Maharashtra, and Gujarat to fill acute deficits in construction, agriculture, and manufacturing [[eg:Bengali and Bihari workers running Kerala's rubber and construction sectors]].
2. **The 2026 Delimitation Dilemma**: Parliamentary representation was frozen in 1976 (and extended by the 84th Constitutional Amendment until 2026) to prevent penalizing southern states for successful family planning. Lifting the freeze threatens to grant massive political dominance to the high-fertility North, sparking intense federal anxiety.
3. **Fiscal Devolution Friction**: The 15th Finance Commission used the 2011 Census rather than the 1971 Census for tax allocation, triggering protests from southern states that their fiscal contributions subsidize underperforming northern social infrastructure.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1881',
        title: 'First Synchronous All-India Census',
        text: 'Supervised by W.C. Plowden, institutionalising decennial population enumeration across British provinces and princely states.',
      },
      {
        year: '1921',
        title: "The 'Year of the Great Divide'",
        text: 'The only census decade (1911–1921) recording negative population growth (-0.31%) due to the 1918 influenza pandemic and famine; mortality rates dropped permanently thereafter.',
      },
      {
        year: '1951–1981',
        title: 'High Population Explosion Phase',
        text: 'Post-independence public health interventions caused death rates to collapse from ~27 to 14, while birth rates remained stubbornly above 35, triggering rapid demographic expansion.',
      },
      {
        year: '2000',
        title: 'National Population Policy (NPP 2000)',
        text: 'A landmark shift from coercive sterilisation quotas to a target-free, reproductive-health, and human-rights paradigm.',
      },
      {
        year: '2021',
        title: 'NFHS-5: Sub-Replacement Milestone',
        text: 'National Total Fertility Rate fell to 2.0, proving that female literacy, child survival, and voluntary choices drive demographic transition without coercive laws.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Malthusian Pessimism vs Sociological Critiques

In 1798, [[thinker:Thomas Malthus]] published his influential *Essay on the Principle of Population*, arguing that human population expands geometrically (1, 2, 4, 8, 16...) while food production expands merely arithmetically (1, 2, 3, 4, 5...). Malthus claimed that unless societies applied "preventive checks" (moral restraint, delayed marriage, celibacy), nature would inevitably intervene through "positive checks" (famines, pestilence, wars, and misery) to restore biological equilibrium. He viewed poverty as the natural outcome of the poor breeding beyond their resources.

Sociologists and political economists offer sharp critiques of this naturalistic determinism:
- **Marxian Critique of Relative Surplus Population**: [[thinker:Karl Marx]] rejected any universal "natural law of population." Marx asserted that poverty and surplus labour are created by capitalism, which constantly generates an **industrial reserve army of labour** through mechanisation to suppress wages and discipline workers [[trap:Assuming overpopulation causes poverty; Marx showed capitalist maldistribution causes surplus unemployment]].
- **Ester Boserup's Innovation Model**: Agrarian economist [[thinker:Ester Boserup]] demonstrated that population pressure stimulates agricultural innovation, crop rotation, and irrigation technology rather than inevitable catastrophe ("necessity is the mother of invention").
- **Amartya Sen's Entitlement Approach**: [[thinker:Amartya Sen]] proved in *Poverty and Famines* (1981) that famines like the 1943 Bengal famine did not occur due to lack of food availability, but due to collapse of exchange entitlements, hoarding, and socio-economic deprivation [[eg:India maintaining overflowing FCI granaries while widespread child stunting persists]].`,
  },
  {
    kind: 'keyTerm',
    term: 'Demographic Transition',
    meaning: 'The macro-sociological model tracing the shift from high birth and death rates to low birth and death rates during modernization and industrial development.',
  },
  {
    kind: 'keyTerm',
    term: 'Demographic Dividend',
    meaning: 'The economic growth potential that arises when the share of the working-age population (15–64) exceeds the non-working dependent age groups.',
  },
  {
    kind: 'keyTerm',
    term: 'Year of the Great Divide (1921)',
    meaning: 'The historic demographic milestone of 1921, separating the pre-1921 era of fluctuating, stagnant population from the post-1921 era of sustained mortality reduction and population growth.',
  },
  {
    kind: 'keyTerm',
    term: 'BIMARU States',
    meaning: 'An acronym coined by demographer Ashish Bose in 1985 for Bihar, Madhya Pradesh, Rajasthan, and Uttar Pradesh, highlighting structural deficits in health, literacy, and fertility transition.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'The 2026 Delimitation & Federalism Debate',
    body: 'In UPSC Paper 2, always connect demographic divergence between North and South to constitutional federalism. The prospective 2026 Lok Sabha delimitation threatens to reward high-fertility northern states with additional seats while diminishing the political voice of southern states that successfully implemented national family planning priorities.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid Malthusian Biological Reductionism',
    body: 'Never blame high fertility solely on the ignorance or cultural backwardness of the poor. Sociologically, poor households reproduce rationally: high infant mortality requires insurance births, children contribute to family labour, and sons provide the only viable old-age social security in the absence of a universal welfare net.',
  },
  {
    kind: 'answerBox',
    intro:
      'A holistic sociological framework to translate India’s youth bulge into an enduring demographic dividend rather than a demographic tax:',
    points: [
      'Universal Quality Secondary & Higher Education: Shift public expenditure towards cognitive skills, vocational training, and critical thinking, moving beyond mere enrolment metrics.',
      'Formal Job Creation & Industrial Deepening: Promote labour-intensive manufacturing, agro-processing, and green energy sectors to absorb youth transitioning out of low-productivity agriculture.',
      'Unlocking Female Workforce Potential: Provide affordable public childcare, safe urban public transit, and equal wages to reverse the sharp decline in female labour force participation.',
      'Regional Convergence & Fiscal Equalization: Target specialized social investments into EAG states (Bihar, UP, MP) in primary healthcare, female schooling, and rural electrification.',
      'Universal Social Protection Floor: Guarantee portable healthcare, pensions, and housing for circular and informal gig workers moving across state borders.',
    ],
    conclusion:
      'Demography is not destiny; it is an open opportunity window. India’s youth dividend will yield lasting human development only if backed by aggressive public investment in social infrastructure, female empowerment, and formal employment.',
  },
]
