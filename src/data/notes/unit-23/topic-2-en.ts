import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2EnMindMap: MindMapData = {
  title: 'Topic 2 · The Women’s Movement in Modern India',
  center: 'Women’s Movement in India',
  subtitle: 'Radha Kumar’s 4 Phases • Gandhi’s Moral Idiom • Dalit Feminist Standpoint • Digital & POSH Eras',
  branches: [
    {
      title: 'Phase 1: 19th Century Social Reform',
      color: 'lavender',
      thinkers: ['Radha Kumar', 'Raja Ram Mohan Roy', 'Jyotirao Phule', 'Savitribai Phule'],
      points: [
        'Reform by male elites: abolishing Sati (1829), widow remarriage (1856), and female education',
        'Women as objects: upper-caste domestic ideals preserved rather than dismantling patriarchy',
        'Radical subaltern voice: Jyotirao & Savitribai Phule opening schools for Shudra/Ati-Shudra girls',
        'Tarabai Shinde: *Stri Purush Tulana* (1882) offering India’s first indigenous feminist critique',
      ],
    },
    {
      title: 'Phase 2: Nationalist Mass Mobilization',
      color: 'yellow',
      thinkers: ['Mahatma Gandhi', 'Madhu Kishwar', 'Sarojini Naidu', 'Sujata Patel'],
      points: [
        'Mass entry into public life: Non-Cooperation, Salt Satyagraha, and liquor shop picketing',
        'Moral weaponization: Gandhi legitimizing women’s protest via self-sacrifice (*ahimsa*, Sita/Draupadi)',
        'Madhu Kishwar critique: mobilized women without challenging traditional domestic roles',
        'Autonomous national bodies: All India Women’s Conference (AIWC) demanding civil rights',
      ],
    },
    {
      title: 'Phase 3: The Autonomous Turn (1970s–80s)',
      color: 'mint',
      thinkers: ['Vina Mazumdar', 'Neera Desai', 'Flavia Agnes', 'Mary E. John'],
      points: [
        '*Towards Equality Report* (1974): exposed declining sex ratios and female economic marginalization',
        'Anti-violence campaigns: nationwide outrage against custodial rape (Mathura case, 1978)',
        'Autonomous collectives: Saheli, Manushi, and Forum Against Oppression of Women',
        'Legislative reform: Anti-Dowry amendments (498A) and criminal law overhauls (1983)',
      ],
    },
    {
      title: 'Phase 4: Intersectional & Digital Feminism',
      color: 'pink',
      thinkers: ['Gopal Guru', 'Sharmila Rege', 'Nivedita Menon', 'Ruth Manorama'],
      points: [
        'Dalit Feminist Standpoint: Guru & Rege exposing savarna hegemony and the "triple burden"',
        'Institutional protections: Vishaka Guidelines (1997) leading to the POSH Act (2013)',
        'Nirbhaya movement (2012): Justice Verma Committee reshaping criminal definitions of consent',
        'Digital & youth campaigns: #MeToo, *Pinjra Tod*, and challenging everyday structural sexism',
      ],
    },
  ],
}

export const topic2EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-01-indian-social-movements.webp',
    alt: 'P2 Unit 13 infographic: Peasant, Women & Dalit Movements — Peasants, Women & Dalit Assertions in Modern India',
    caption:
      'The women’s movement in India transitioned from male-led colonial social reform to autonomous grassroots agitation, and finally to intersectional Dalit feminism and digital campaigns.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Historical Evolution: Radha Kumar’s Four Phases

The women’s movement in India did not arise as an imitation of Western individualist suffragism. Instead, it developed through an indigenous struggle intertwined with anti-colonial nationalism, socio-religious reform, and post-independence democratic movements.

In her landmark historical-sociological study *The History of Doing: An Illustrated Account of Movements for Women's Rights and Feminism in India, 1800–1990*, sociologist [[thinker:Radha Kumar]] conceptualized the movement across distinct historical epochs.

### The Four Historical Phases
1. **First Phase (19th Century Social Reform)**: Spearheaded by male upper-caste social reformers (Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, Mahadev Govind Ranade). The focus was on eliminating barbaric customs—sati, child marriage, female infanticide, and enforced widowhood. Women were treated primarily as **recipients and objects of reform** rather than conscious subjects of history.
2. **Second Phase (Anti-Colonial Mass Mobilization, 1910s–1947)**: Under Mahatma Gandhi’s leadership, thousands of women stepped out of their domestic quarters to join satyagraha marches, picketed foreign cloth and liquor shops, and suffered colonial imprisonment. National organizations like the All India Women's Conference (AIWC, 1927) and the Women’s Indian Association (WIA) were established.
3. **Third Phase (The Autonomous Women’s Movement, 1970s–1980s)**: Catalyzed by the publication of the seminal **Towards Equality Report (1974)** by the Committee on the Status of Women in India (CSWI). This report shattered the post-independence developmental complacency by revealing declining female work participation, worsening sex ratios, and widespread violence. Autonomous women’s collectives emerged outside political party control to wage militant campaigns against custodial rape, dowry deaths, and domestic violence.
4. **Fourth Phase (Intersectional, Legal & Digital Feminism, 1990s–Present)**: Marked by the dismantling of universal sisterhood. Dalit and tribal women challenged upper-caste hegemony, institutionalizing the Dalit Feminist Standpoint. Concurrently, grassroots assertions merged with formal legal interventions (73rd Amendment Panchayati Raj quotas, POSH Act 2013) and contemporary digital hashtag campaigns (#MeToo, *Pinjra Tod*).`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1829',
        title: 'Sati Abolition Regulation',
        text: 'Colonial state bans widow immolation following sustained campaigns by Raja Ram Mohan Roy.',
      },
      {
        year: '1882',
        title: 'Tarabai Shinde’s Stri Purush Tulana',
        text: 'First radical critique of upper-caste patriarchal double standards published in Marathi.',
      },
      {
        year: '1974',
        title: 'Towards Equality Report',
        text: 'CSWI report reveals worsening socio-economic indicators, launching the autonomous women’s movement.',
      },
      {
        year: '1978–83',
        title: 'Mathura Rape Case & Section 498A',
        text: 'Grassroots campaigns force landmark criminal law amendments on custodial rape and dowry cruelty.',
      },
      {
        year: '2013',
        title: 'POSH Act & Criminal Law Reform',
        text: 'Post-Nirbhaya reforms expand sexual assault definitions and mandate workplace complaints committees.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Gandhi’s Mobilization of Women: The Patriarchal Bargain

A major sociological debate in Paper 2 examines how Mahatma Gandhi mobilized women on an unprecedented scale while simultaneously relying on traditional gender idioms.

Feminist scholar [[thinker:Madhu Kishwar]] in her influential essay *"Gandhi on Women"* observed that Gandhi performed a unique sociological feat: he legitimized women’s entry into public political agitation without alienating conservative patriarchal families.

### Sociological Analysis of the Gandhian Framework
- **Sanctification of Traditional Virtues**: Gandhi transformed traditional female suffering into a potent moral weapon. He argued that women possessed greater capacity for self-abnegation, quiet courage, and moral endurance (*satyagraha*) than men, invoking classical mythological archetypes like **Sita and Draupadi** rather than aggressive warriors.
- **Extension of the Domestic Domain**: By identifying spinning khadi (*charkha*), picketing liquor vends, and boycotting foreign goods as primary national duties, Gandhi effectively extended the domestic sphere into the public street.
- **The Kishwar-Patel Critique**: While acknowledging Gandhi's role in breaking purdah and domestic confinement, sociologists like [[thinker:Madhu Kishwar]] and Sujata Patel argue that Gandhi never advocated for structural equality within the domestic division of labour. He viewed woman primarily as the self-sacrificing mother and moral conscience of the family, leaving the patriarchal foundations of the household unchallenged.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Celebrating Gandhi Without Critical Evaluation',
    body: 'In 10- or 20-mark questions on Gandhi and women, avoid either total eulogy or blanket condemnation. Highlight that Gandhi brilliantly used non-violence to desexualize and morally elevate female public participation, but also point out that his moral idioms preserved traditional domestic boundaries.',
  },
  {
    kind: 'md',
    body: `## Caste-Class Fissures: "Why Dalit Women Talk Differently"

During the 1990s, the universal sisterhood assumed by mainstream Indian feminism was fundamentally challenged by subaltern scholars. In his landmark 1995 paper, political philosopher [[thinker:Gopal Guru]] asserted that ==Dalit women talk differently==, articulating a structural critique of both mainstream savarna feminism and patriarchal Dalit movements.

Concurrently, sociologist [[thinker:Sharmila Rege]] conceptualized the **Dalit Feminist Standpoint**, demonstrating that lived experiences of caste-based sexual humiliation and labour exploitation produce an epistemic perspective that cannot be represented by privileged outsiders.

### The Anatomy of the Fissure
1. **Upper-Caste Domination of Mainstream Feminism**: Guru argued that early feminist organizations were dominated by urban, educated, upper-caste (savarna) women who universalized their own concerns (e.g., domestic confinement, glass ceilings, equal property inheritance), while remaining blind to how caste purity and untouchability structure female oppression.
2. **Dalit Patriarchy**: Simultaneously, Dalit male leaders marginalized gender issues within Dalit politics, treating female assertiveness as a distraction from community solidarity and expecting Dalit women to endure domestic abuse in the name of the anti-caste struggle.
3. **The Concept of the "Triple Burden"**: Dalit women experience systemic violence at the intersection of three structures:
   - **Caste**: Targeted as objects of sexual humiliation and gang rape by dominant landed castes to punish asserting Dalit communities [[eg:The Tsundur, Khairlanji, and Hathras caste atrocities]].
   - **Class**: Concentrated at the bottom of the agrarian economy as low-paid agricultural coolies, manual scavengers, and brick-kiln labourers.
   - **Gender**: Bearing the brunt of domestic violence and unpaid domestic labour within their own households.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Mainstream Savarna Feminism',
    rightTitle: 'Dalit Feminist Standpoint (Guru / Rege)',
    rows: [
      {
        aspect: 'Social Location',
        left: 'Urban, upper-caste, English-educated middle class.',
        right: 'Rural and subaltern, Scheduled Caste and agrarian labour base.',
      },
      {
        aspect: 'Core Adversary',
        left: 'Patriarchal domestic authority, dowry extortion, glass ceilings.',
        right: 'Brahmanical patriarchy, dominant-caste violence, landlessness.',
      },
      {
        aspect: 'View of the State',
        left: 'Sought formal legal protections, civil equality, and workplace parity.',
        right: 'Views state apparatus as upper-caste aligned; demands structural redistribution.',
      },
      {
        aspect: 'Epistemology',
        left: 'Universal womanhood; assumes common oppression across all women.',
        right: 'Intersectionality; lived experience of caste makes universal sisterhood a myth.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Contemporary Frontiers: POSH, #MeToo, and Digital Feminism

In the 21st century, the women’s movement in India has increasingly engaged with institutional legal mechanisms and digital public spaces. The brutal 2012 Delhi gang rape (Nirbhaya case) catalyzed nationwide public protests, leading directly to the **Justice J.S. Verma Committee Report** and the Criminal Law (Amendment) Act 2013, which broadened legal definitions of sexual assault.

### Institutionalization: The POSH Act 2013
Originating from the Supreme Court’s *Vishaka v. State of Rajasthan (1997)* judgment following the gang rape of grassroots worker Bhanwari Devi, the **Prevention of Sexual Harassment (POSH) Act 2013** mandated:
- Compulsory Internal Complaints Committees (ICCs) in all workplaces employing 10 or more individuals.
- Protection extending to contractual, intern, and visiting women.
- **Sociological Limitation**: While POSH formalized safety in corporate boardrooms and universities, over **90% of working women in India** remain in the informal sector (domestic maids, construction workers, farm hands) where Local Complaints Committees (LCCs) remain largely dysfunctional or non-existent.

### Digital Campaigns and Hashtag Activism
From the 2018 Indian **#MeToo** explosion to university campaigns like ***Pinjra Tod*** (Break the Cage) and #IWillGoOut, digital feminism transformed public discourse:
- It bypassed traditional gatekeepers to publicly name predatory academics, journalists, and corporate managers.
- It questioned patriarchal notions of female protectionism and moral policing in university hostels.
- **Critical Caveat**: Sociologists like Nivedita Menon point out that digital activism suffers from a severe **class and digital divide**. It predominantly represents English-speaking urban women with smartphone access, while subaltern rural victims of caste violence remain outside its reach.`,
  },
  {
    kind: 'keyTerm',
    term: 'Four Phases of Women’s Movement (Radha Kumar)',
    meaning:
      'A historical-sociological framework tracing the Indian women’s struggle from 19th-century male-led social reform to nationalist mobilization, 1970s autonomous activism, and contemporary intersectional/digital feminism.',
  },
  {
    kind: 'keyTerm',
    term: 'Dalit Feminist Standpoint (Sharmila Rege)',
    meaning:
      'An epistemic perspective arguing that subaltern Dalit women occupy an intrinsically unique structural position at the intersection of caste, class, and patriarchy, which cannot be represented by savarna feminists.',
  },
  {
    kind: 'keyTerm',
    term: 'Towards Equality Report (1974)',
    meaning:
      'The landmark CSWI report that demolished the myth of post-independence gender progress by revealing declining female sex ratios, economic marginalization, and institutional neglect, sparking autonomous women’s groups.',
  },
  {
    kind: 'keyTerm',
    term: 'Patriarchal Bargain / Moral Idiom (Madhu Kishwar)',
    meaning:
      'The strategic accommodation in Gandhian nationalist mobilization where women were brought into public political agitations by valorizing traditional domestic virtues of sacrifice and purity rather than dismantling family patriarchy.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: The Triple Burden of Dalit Women',
    body: 'Whenever an exam question touches on gender inequality in India, always incorporate the intersection of Caste + Class + Gender (Gopal Guru and Sharmila Rege). Point out that gender violence is systematically weaponized as a tool of collective caste dominance in rural India.',
  },
  {
    kind: 'answerBox',
    intro:
      'Structured answer blueprint for evaluating the trajectory and internal fissures of the Indian women’s movement:',
    points: [
      'Historical trajectory: Radha Kumar’s framework charts the journey from 19th-century reform (women as objects) to Gandhian national struggle (moral mobilization) and 1970s autonomous collectives (Towards Equality Report).',
      'Gandhian mobilization paradox: Gandhi desexualized and moralized women’s participation through self-abnegation (Sita archetype), successfully breaking seclusion while leaving the domestic division of labour untouched (Madhu Kishwar).',
      'The Dalit feminist critique: Gopal Guru ("Dalit women talk differently") and Sharmila Rege shattered the myth of universal sisterhood, exposing how upper-caste hegemony overlooked the triple burden of caste, class, and domestic violence.',
      'Institutional strides: Landmark agitations forced legislative changes including Section 498A, Vishaka Guidelines, the POSH Act 2013, and the post-Nirbhaya criminal law reforms.',
      'Contemporary digital frontier: #MeToo and Pinjra Tod exposed informal patriarchal power in institutions, yet remain constrained by urban-elite digital divides, leaving 90% of informal female workers vulnerable.',
    ],
    conclusion:
      'The Indian women’s movement has evolved from philanthropic reform to a vibrant, pluralistic assertion of intersectional citizenship, bridging street activism, constitutional law, and digital spaces.',
  },
]
