import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3EnMindMap: MindMapData = {
  title: 'Topic 3 · Population Policy and Family Planning',
  center: 'Population Policy & Reproductive Rights',
  subtitle: 'Policy Evolution • Coercive Two-Child Debates • Gender Contraceptive Skew • Age of Marriage',
  branches: [
    {
      title: 'Evolution: Targets to Rights',
      color: 'lavender',
      thinkers: ['Pravin Visaria', 'Leela Visaria', 'M.S. Swaminathan', 'Ashish Bose'],
      points: [
        '1952: India first globally to launch official National Family Planning Programme (clinical mode)',
        '1976–77 Emergency trauma: aggressive vasectomy targets, police coercion, and public backlash',
        'Post-Emergency retreat: shift to "Family Welfare", maternal-child health (MCH), and CAFETERIA approach',
        'Cairo ICPD (1994) & NPP 2000: Target-Free Approach (TFA), reproductive rights, and gender autonomy',
      ],
    },
    {
      title: 'Coercive Two-Child Critiques',
      color: 'yellow',
      thinkers: ['Alka Basu', 'S.Y. Quraishi', 'Nirmala Buch', 'Jean Drèze'],
      points: [
        'State bills (Assam, UP draft): disincentives in panchayat elections, government jobs, and welfare',
        'Alka Basu: counter-productive; triggers sex-selective abortions, wife desertion, and unregistered births',
        'S.Y. Quraishi ("The Population Myth"): fertility decline is already spontaneous; debunks communal myths',
        'Panchayat disqualification paradox (Buch): poor, lower-caste women punished for decisions made by men',
      ],
    },
    {
      title: 'Extreme Contraceptive Gender Skew',
      color: 'mint',
      thinkers: ['Leela Visaria', 'Kavita Bhatia', 'Kamla Bhasin', 'Mary John'],
      points: [
        'NFHS-5 stark disparity: 37.9% female sterilization (tubectomy) vs barely 0.3% male vasectomy',
        'Patriarchal myths: vasectomy equated with loss of physical vigour, "manhood", and manual earning capacity',
        'State complicity: mass sterilization camps target rural poor women (e.g. 2014 Bilaspur tragedy)',
        'Lack of reversible spacing methods: condoms (~9.5%) and pills (~5.1%) remain vastly underpromoted',
      ],
    },
    {
      title: 'Age of Marriage Debate (18 to 21)',
      color: 'pink',
      thinkers: ['Jaya Jaitly', 'Mary John', 'Flavia Agnes', 'Madhu Kishwar'],
      points: [
        'Prohibition of Child Marriage Amendment Bill: proposal to raise female marital age from 18 to 21',
        'Proponents (Jaitly committee): lower MMR/IMR, higher college completion, and labour market entry',
        'Sociological critiques (John & Agnes): penal law weaponised by conservative parents against self-choice love',
        'Structural priority: access to free secondary schools and youth jobs delays marriage far more effectively',
      ],
    },
  ],
}

export const topic3EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-01-demographic-transition-policy.webp',
    alt: 'P2 Unit 14 infographic: Demographic Transition & Policy — Population Growth, Dividend & Shift from Targets to NPP 2000',
    caption:
      'The evolution of India’s population policy reflects a transition from top-down coercive clinical targets to a human-rights and reproductive-autonomy framework embedded in NPP 2000.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 01',
  },
  {
    kind: 'md',
    body: `## From Coercive Targets to Reproductive Rights: Evolution of India's Population Policy

India holds the unique historical distinction of being the first sovereign nation in the world to launch an official **National Family Planning Programme in 1952**. In its earliest phase, the program operated under a conservative "clinical approach," establishing family planning clinics that expected citizens to voluntarily seek birth control advice. When this failed to yield rapid results, the state shifted in the 1960s to an "extension approach," propagating the cafeteria menu of contraception (condoms, Lippes loop IUCDs, oral pills).

However, during the internal Emergency (1975–77), population policy took a disastrous authoritarian turn. Under intense political pressure and bureaucratically assigned quotas, state machinery orchestrated mass coercive vasectomy campaigns, rounding up poor, marginalised, and minority men [[eg:the tragic police excesses at Turkman Gate and forced sterilization camps]]. The intense democratic backlash brought down the government in 1977, resulting in a profound institutional trauma: family planning was hastily renamed **Family Welfare**, and overt population discourse became politically toxic for nearly two decades.

A fundamental philosophical revolution occurred in the 1990s, catalyzed by the ==1994 Cairo International Conference on Population and Development (ICPD)==. Demographers [[thinker:Pravin Visaria]] and [[thinker:Leela Visaria]] observed that Cairo demolished the technocratic Malthusian paradigm that treated women's wombs as demographic control sites. Instead, Cairo placed women's reproductive health, bodily autonomy, and gender equality at the center of demographic policy. This paradigm shift was formally codified in India’s **National Population Policy (NPP 2000)**, drafted under the guidance of M.S. Swaminathan.

| Policy Milestone | Operational Approach | Core Mechanism | Critical Sociological Evaluation |
| :--- | :--- | :--- | :--- |
| **First Plan (1952)** | Clinical Approach | Static clinics for voluntary advice | Urban, upper-class bias; failed to penetrate rural villages |
| **1960s–1970s** | Extension & Target Model | Bureaucratic targets, monetary incentives | Top-down administrative pressure on frontline health workers |
| **Emergency (1975–77)** | Coercive Sterilization | Forced vasectomy camps, denial of rations | Human rights violations; generated deep distrust of public health |
| **Cairo ICPD (1994)** | Rights-Based Consensus | Bodily autonomy, informed consent | Demolished demographic targets; prioritised women's empowerment |
| **NPP 2000** | Target-Free Approach (TFA) | Meeting unmet need, PRIs, MCH care | Shift from numerical control to holistic reproductive well-being |`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1952',
        title: 'Launch of First National Family Planning Programme',
        text: 'India became the first country worldwide to institutionalize state-sponsored birth control, initially using a clinical model.',
      },
      {
        year: '1976',
        title: 'National Population Policy (Emergency Quotas)',
        text: 'Aggressive, target-driven vasectomy drives led to widespread human rights violations and an enduring democratic backlash.',
      },
      {
        year: '1977',
        title: 'Rebranding as Family Welfare',
        text: 'Coercive quotas were abandoned; family planning was integrated into voluntary maternal and child healthcare (MCH).',
      },
      {
        year: '1996',
        title: 'Adoption of Target-Free Approach (TFA)',
        text: 'Numerical sterilization quotas for ANMs and healthcare workers were officially abolished nationwide.',
      },
      {
        year: '2000',
        title: 'National Population Policy 2000 (NPP 2000)',
        text: 'Codified voluntary informed consent, decentralized delivery via Panchayati Raj Institutions, and addressed unmet contraceptive needs.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Coercive Two-Child Debate: Basu and Quraishi's Critiques

Despite national fertility falling to replacement level (TFR 2.0 in NFHS-5), proposals for coercive two-child norms regularly resurface in state-level politics [[eg:the Assam Population and Employment Policy and the Uttar Pradesh Draft Population Control Bill]]. These proposals seek to bar individuals with more than two children from contesting local panchayat elections, applying for state government jobs, or receiving subsidized welfare benefits.

Leading demographers and sociologists vigorously critique this punitive approach:
- **Alka Basu's Unintended Consequences Thesis**: Sociologist [[thinker:Alka Basu]] demonstrated that coercive caps are structurally misogynistic. In a patriarchal society with intense son preference, a two-child limit compels families to practice sex-selective abortion of female foetuses to ensure that one of the two permitted children is a boy. Furthermore, men frequently abandon, divorce, or disown their wives to circumvent election disqualification rules [[trap:Assuming two-child laws promote modern families; Basu shows they deepen female vulnerability and sex selection]].
- **Nirmala Buch's Panchayat Field Studies**: Field research across states that implemented two-child disqualification for local bodies revealed that the law disproportionately punished poor, young, lower-caste and Dalit candidates, who have less control over their reproductive careers.
- **S.Y. Quraishi's Empirical Rebuttal**: In *The Population Myth: Islam, Family Planning and Politics in India* (2021), former Chief Election Commissioner [[thinker:S.Y. Quraishi]] dismantled the communal conspiracy theory of differential fertility. Quraishi proved using census data that fertility decline across all religious communities in India is driven by socio-economic indicators (female schooling, wealth, and healthcare access), not religious scriptures. Spontaneous fertility convergence is occurring across all groups.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Target-Driven Coercive Approach (1970s)',
    rightTitle: 'Reproductive Rights & Autonomy Paradigm (NPP 2000)',
    rows: [
      {
        aspect: 'Core Philosophy',
        left: 'Malthusian panic: demographic control to protect state resources',
        right: 'Human rights: reproductive agency, bodily dignity, and informed choice',
      },
      {
        aspect: 'Frontline Dynamics',
        left: 'ANMs and block officials coerced with punishment quotas',
        right: 'Community health workers (ASHAs) facilitating voluntary healthcare',
      },
      {
        aspect: 'Contraceptive Method',
        left: 'Aggressive terminal sterilization camps (tubectomy/vasectomy)',
        right: 'Cafeteria choice: modern spacing methods, IUCDs, oral pills, condoms',
      },
      {
        aspect: 'Gender Equity',
        left: 'Women treated as passive targets of state medical intervention',
        right: 'Empowering women through schooling, delayed marriage, and legal rights',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Stark Gender Skew in Sterilization: 37.9% Female vs 0.3% Male

A glaring structural pathology of India's family planning architecture is its extreme, institutionalised gender inequality. According to the National Family Health Survey (NFHS-5), **female sterilisation (tubectomy) accounts for 37.9% of all contraceptive use**, whereas **male sterilisation (vasectomy) languishes at a negligible 0.3%**, despite vasectomy being medically far simpler, non-invasive, cheaper, and carrying virtually zero surgical mortality compared to tubectomy.

Sociologists identify multiple patriarchal and structural causes for this disparity:
1. **The Cult of Physical Virility**: Deep-rooted patriarchal misconceptions falsely equate vasectomy with physical weakness, loss of manual earning capacity, and emasculation (loss of *mardangi*). Men, as primary breadwinners in manual agrarian labour, refuse surgery out of fear of physical debilitation.
2. **Externalisation of Reproductive Labour onto Women**: Patriarchal norms construct fertility, child-rearing, and contraception as solely women's domestic burdens [[link:Unit 18 Patriarchy, Entitlements & Division of Labour]]. Men consider contraception "a woman's headache."
3. **Institutional Complicity & Mass Camp Mode**: Public health systems find it administratively easier to round up vulnerable, uneducated rural women in assembly-line sterilisation camps rather than challenging male resistance. This administrative callousness led to catastrophic tragedies [[eg:the 2014 Bilaspur sterilization tragedy in Chhattisgarh where 13 poor rural women died in a government camp within hours due to contaminated antibiotics and surgical negligence]].
4. **Neglect of Spacing Contraception**: Public expenditure disproportionately subsidizes terminal female sterilization over reversible modern spacing methods (condoms at 9.5%, oral pills at 5.1%).`,
  },
  {
    kind: 'keyTerm',
    term: 'Target-Free Approach (TFA)',
    meaning: 'The policy paradigm adopted by India in 1996 that eliminated numerical contraceptive quotas for health workers, replacing them with client-centred reproductive healthcare.',
  },
  {
    kind: 'keyTerm',
    term: 'National Population Policy 2000 (NPP 2000)',
    meaning: 'India’s comprehensive macro-demographic policy framework focusing on meeting unmet contraceptive needs, universal primary education, and reducing infant and maternal mortality.',
  },
  {
    kind: 'keyTerm',
    term: 'Cairo ICPD Consensus (1994)',
    meaning: 'The global paradigm shift that replaced population control quotas with individual reproductive rights, women’s empowerment, and informed voluntary choice.',
  },
  {
    kind: 'keyTerm',
    term: 'Contraceptive Gender Skew',
    meaning: 'The severe structural asymmetry wherein female sterilization accounts for nearly 38% of contraceptive practice while male sterilization remains at 0.3%.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'S.Y. Quraishi on Demystifying Population Myths',
    body: 'In UPSC essays and Paper 2 answers on demography and religion, cite S.Y. Quraishi’s "The Population Myth" (2021). Quraishi proves that fertility is correlated with female schooling and wealth quintiles, not religion. Muslims in Kerala have a TFR of 2.25, which is far lower than Hindus in Bihar (TFR 2.88).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Critique the Age of Marriage Bill Sociologically',
    body: 'When evaluating the proposal to raise the female marriage age from 18 to 21 (Jaya Jaitly Committee), do not write solely in favor of the law. Highlight feminist critiques (Mary John, Flavia Agnes): without free colleges and safety, punitive criminal laws will be abused by conservative parents to cancel consensual self-choice and inter-caste marriages.',
  },
  {
    kind: 'answerBox',
    intro:
      'A transformative sociological strategy to eliminate gender skew and build a gender-equal family welfare system in India:',
    points: [
      'Normalizing Non-Scalpel Vasectomy (NSV): Launch aggressive, culturally resonant public campaigns that bust myths surrounding male emasculation and celebrate responsible male contraception.',
      'Shifting to Modern Spacing Methods: Reorient public health financing towards universal, free, and dignified distribution of oral contraceptives, injectable DMPA, and condoms through youth-friendly clinics.',
      'Abolishing Mass Sterilization Camps: Strictly enforce Supreme Court directives (*Devika Biswas v. Union of India*, 2016) banning shoddy sterilisation camps and mandating dignified hospital surgery.',
      'Male Engagement in Reproductive Counselling: Involve husbands and adolescent boys directly in reproductive health education through ASHA, ANM, and Anganwadi counselling sessions.',
      'Universal Girls’ Higher Education & Transport: Guarantee free secondary and college schooling with safe public transport, which organically delays marriage without punitive legalism.',
    ],
    conclusion:
      'Family planning will remain structurally defective as long as women bear 99% of surgical sterilisation burdens. Real reproductive justice demands transforming contraception from a female sacrifice into a shared, egalitarian responsibility.',
  },
]
