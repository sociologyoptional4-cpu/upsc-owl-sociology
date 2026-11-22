import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3EnMindMap: MindMapData = {
  title: 'Topic 3 · Violence Against Women in India',
  center: 'Gendered Violence & Patriarchy',
  subtitle: 'Structural Theories • PWDVA 2005 & Marital Rape • POSH 2013 & Workplace • Digital & Intersectional Violence',
  branches: [
    {
      title: '1. Theoretical Frameworks of Gender Violence',
      color: 'lavender',
      thinkers: ['Sylvia Walby', 'Pierre Bourdieu', 'Johan Galtung', 'Sharmila Rege'],
      points: [
        'Walby’s six patriarchal structures: Male violence as institutional mechanism of gender control',
        'Bourdieu’s Symbolic Violence: Internalization of female submission as natural domestic virtue',
        'Structural Violence (Galtung): Systemic denial of female autonomy through economic dependence',
        'Dalit Feminist Standpoint: Sexual violence weaponized by dominant castes to police caste hierarchy',
      ],
    },
    {
      title: '2. Private Sphere: PWDVA 2005 & Marital Rape',
      color: 'yellow',
      thinkers: ['Flavia Agnes', 'Kalpana Kannabiran', 'B.R. Ambedkar'],
      points: [
        'PWDVA 2005 breakthrough: Recognizing domestic violence as civil wrong encompassing economic abuse',
        'Right to shared household: Protecting women against instant eviction without title requirements',
        'Marital rape paradox: Colonial exception shielding marital sexual coercion under conjugal privacy',
        'Implementation deficit: Shortage of Protection Officers and patriarchal pressure for reconciliation',
      ],
    },
    {
      title: '3. Public Spaces & Workplace: POSH Act 2013',
      color: 'mint',
      thinkers: ['Bhanwari Devi', 'Catherine MacKinnon', 'Nivedita Menon'],
      points: [
        'Vishaka trajectory: Bhanwari Devi gang-rape triggering 1997 Supreme Court workplace guidelines',
        'POSH Act 2013 architecture: Mandatory Internal Complaints Committees (ICC) and Local Committees (LC)',
        'Under-reporting barriers: Fear of retaliation, professional isolation, and organizational reputational cover-ups',
        'Informal sector exclusion: 90%+ female workers lacking functional grievance redressal in unorganized units',
      ],
    },
    {
      title: '4. Digital Frontier & Intersectional Atrocities',
      color: 'pink',
      thinkers: ['Uma Chakravarti', 'Gopal Guru', 'Mary John'],
      points: [
        'Cyber misogyny: Doxxing, targeted trolling, and AI deepfakes policing women’s political speech',
        'Intersectional atrocities: Upper-caste impunity in Mathura, Khairlanji, and Hathras cases',
        'Secondary victimization: Hostile police stations, humiliating cross-examinations, and delayed forensics',
        'Transformative justice: Moving beyond carceral feminism toward structural economic and cultural autonomy',
      ],
    },
  ],
}

export const topic3EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps (Challenges of Social Transformation).',
  },
  {
    kind: 'md',
    body: `## Sociological Foundations of Violence Against Women

Violence against women is not an aberration of deviant, mentally unstable individuals; sociologists understand it as a systemic, institutionalized mechanism used to maintain patriarchal power and male domination. Sociologist [[thinker:Sylvia Walby]], in her classic *Theorizing Patriarchy*, identified male violence as one of six interconnected patriarchal structures that police female mobility, labor, and sexuality.

Sociologist [[thinker:Pierre Bourdieu]] conceptualized ==Symbolic Violence==, explaining how gender inequality is sustained because subordinated women are conditioned through socialization to accept patriarchal norms as natural, moral, and sacred. In India, gender violence is further compounded by caste stratification and communal boundaries, rendering subaltern women doubly vulnerable.

### Arenas of Escalating Violence

Contemporary gender-based violence operates across three expanding frontiers:
1. **The Private Domestic Sphere**: Marital rape, dowry harassment, battering, and female foeticide, concealed behind the sacred veil of the family.
2. **Public and Institutional Spaces**: Street harassment (eve-teasing), workplace sexual coercion, and institutional hostility in educational campuses.
3. **The Digital Frontier**: Cyber-stalking, doxxing, non-consensual intimate image dissemination, and misogynistic digital harassment targeting outspoken women journalists and activists.

| Frontier of Violence | Manifestation Forms | Structural Driver | Legal Counterpart |
| :--- | :--- | :--- | :--- |
| **Domestic Sphere** | Intimate partner violence, dowry extortion | Conjugal entitlement & patriarchal family privacy | PWDVA 2005, Section 498A IPC/BNS |
| **Workplace** | Quid pro quo harassment, hostile work environment | Male institutional power & economic precarity | POSH Act 2013 (Vishaka Guidelines) |
| **Public Arena** | Stalking, assault, caste-based rape | Policing public spatial boundaries & caste dominance | SC/ST Prevention of Atrocities Act, BNS |
| **Digital Sphere** | Deepfakes, doxxing, coordinated abuse | Online anonymity & patriarchal backlash against voice | IT Act 2000, Section 66E/67 |

### The Dalit Feminist Standpoint on Intersectional Violence

Feminist sociologist [[thinker:Sharmila Rege]] and political theorist Gopal Guru formulated the ==Dalit Feminist Standpoint==, demonstrating that sexual violence in rural India is fundamentally weaponized by dominant landowning castes to crush subaltern assertiveness. 

When Dalit men organize for land rights, fair wages, or temple entry, dominant caste elites retaliate by publicly assaulting subaltern women, exploiting the patriarchal logic that equates a community’s honor with female bodily purity. Historic atrocities from the 1972 Mathura rape case to Khairlanji (2006) and Hathras (2020) illustrate how caste hegemony and patriarchal impunity converge in the Indian justice apparatus.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Sociological Concept: Carceral Feminism vs Structural Reform',
    body: 'In UPSC essays and answers, contrast "Carceral Feminism" (the demand for ever-harsher capital punishment and police powers, which often harms marginalized men without protecting women) with structural feminist interventions focusing on economic autonomy, shelter homes, and swift trial reforms (Flavia Agnes).',
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1972',
        title: 'Mathura Rape Case',
        text: 'Custodial rape of a minor tribal girl in a police station triggers nationwide autonomous women’s campaigns.',
      },
      {
        year: '1997',
        title: 'Vishaka Guidelines',
        text: 'Supreme Court issues workplace sexual harassment norms following the gang-rape of social worker Bhanwari Devi.',
      },
      {
        year: '2005',
        title: 'PWDVA Enactment',
        text: 'Protection of Women from Domestic Violence Act recognizes civil remedies and economic abuse.',
      },
      {
        year: '2013',
        title: 'POSH Act & Criminal Law Amendment',
        text: 'Enactment of POSH Act and Justice Verma Committee reforms following the Nirbhaya nationwide mobilization.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Domestic Sphere: PWDVA 2005 and Marital Rape Debates

For decades, criminal law treated domestic cruelty primarily through Section 498A of the IPC, which was restricted to dowry-related cruelty by the husband or his relatives. This left millions of women experiencing everyday emotional, physical, and economic abuse without legal remedy.

The enactment of the ==Protection of Women from Domestic Violence Act, 2005 (PWDVA)== marked a paradigm shift in Indian jurisprudence:
- **Comprehensive Definition of Violence**: It legally recognized physical, verbal, emotional, sexual, and economic abuse for the first time.
- **Civil Remedies**: It provided Protection Orders, Residence Orders (the right to reside in the shared household regardless of legal title), and interim maintenance.
- **Protection Officers**: It instituted specialized functionaries to assist survivors in navigating legal procedures without immediate police criminalization.

However, legal sociologist [[thinker:Flavia Agnes]] emphasizes that patriarchal implementation deficits undermine PWDVA. Protection Officers are chronically underfunded, overburdened with additional administrative duties, and often prioritize mandatory family counseling aimed at reconciling the survivor with the abuser over securing immediate safety.

[[eg:In rural districts, women filing domestic violence petitions are frequently pressured by village panchayats and police personnel to withdraw complaints to preserve family "izzat" (honor), trapping them in recurring intimate partner violence.]]

### The Marital Rape Paradox

The most glaring manifestation of patriarchal legal immunity is the retention of the ==Marital Rape Exception== in Indian criminal law (Section 375 Exception 2 of IPC, replicated in the Bharatiya Nyaya Sanhita). Under this colonial doctrine, sexual intercourse by a husband with his adult wife is legally deemed non-consensual rape only if the wife is living separately under a judicial decree.

Sociologists and feminist legal scholars like [[thinker:Kalpana Kannabiran]] argue that this exception treats the married woman as the chattel or physical property of her husband, reviving Sir Matthew Hale’s 17th-century doctrine of irrevocable implied consent upon marriage. While the Supreme Court delivered split verdicts on the issue, state opposition to criminalizing marital rape often invokes the preservation of the "sacred institution of Hindu marriage," prioritizing patriarchal domestic tranquility over female bodily integrity.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Carceral Criminal Law (Section 498A)',
    rightTitle: 'Civil Rights-Based Law (PWDVA 2005)',
    rows: [
      {
        aspect: 'Primary Focus',
        left: 'Punishing the abuser through arrest and criminal imprisonment',
        right: 'Securing immediate physical safety and economic subsistence for survivor',
      },
      {
        aspect: 'Scope of Abuse',
        left: 'Strictly defined cruelty connected primarily to dowry harassment',
        right: 'Physical, sexual, emotional, verbal, and economic deprivation',
      },
      {
        aspect: 'Housing Security',
        left: 'No provision for shelter; woman often thrown out upon filing FIR',
        right: 'Statutory Right to Reside in the Shared Household (Residence Orders)',
      },
      {
        aspect: 'Judicial Agency',
        left: 'Controlled by police, prosecution, and criminal court trial delays',
        right: 'Fast-track Magistrate orders, Protection Officers, and Service Providers',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Workplace Frontier: The POSH Act 2013 and Structural Silencing

The transition of women into formal and informal public employment challenged traditional patriarchal boundaries. The ==Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act)== was enacted following two decades of feminist mobilization sparked by the brutal gang-rape of grassroots social worker [[thinker:Bhanwari Devi]] in Rajasthan, who was assaulted for preventing child marriage.

The POSH Act requires every enterprise with ten or more employees to constitute an ==Internal Complaints Committee (ICC)== headed by a senior woman employee, and mandates district-level ==Local Committees (LC)== for establishments with fewer than ten workers and informal enterprises.

### Why Workplace Tormentors Remain Unreported

Despite comprehensive statutory provisions, sociologists document that women rarely report harassment. This institutional silence is reproduced by deep organizational and cultural barriers:
- **Asymmetric Power Hierarchies**: Harassers are frequently senior executives, managers, or department heads who wield discretionary power over promotions, performance appraisals, and career trajectories.
- **Fear of Professional Retaliation**: Complainants fear being labeled "troublemakers," facing hostile peer ostracism, or suffering retaliatory termination.
- **Defective and Compromised ICCs**: In many private firms, ICCs lack external independent members, leading to corporate cover-ups to preserve company brand reputation.
- **Informal Sector Invisibility**: Over 90% of working women in India are employed in the unorganized sector (agricultural labor, domestic service, brick kilns, street vending). District Local Committees exist largely on paper, leaving informal workers completely defenseless against contractor predation.

[[eg:In the garment export hubs of Bengaluru and Tiruppur, female assembly-line tailors endure constant verbal and physical harassment from male supervisors because complaining means instant wage withholding or dismissal.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Don’t Blame Culture Alone',
    body: 'Avoid attributing violence against women purely to "traditional cultural backwardness". Modern capitalist workplaces, digital platforms, and bureaucratic institutions reproduce sophisticated, modern forms of gender harassment through power asymmetry and contractual precarity.',
  },
  {
    kind: 'keyTerm',
    term: 'Symbolic Violence',
    meaning: 'Pierre Bourdieu’s concept where subtle, non-physical forms of domination are internalized by victims as natural, legitimate, and ethical.',
  },
  {
    kind: 'keyTerm',
    term: 'Dalit Feminist Standpoint',
    meaning: 'Sharmila Rege and Gopal Guru’s framework showing how caste hierarchy, patriarchal power, and state violence intersect in targeting subaltern women.',
  },
  {
    kind: 'keyTerm',
    term: 'Right to Shared Household',
    meaning: 'A pathbreaking civil entitlement under PWDVA 2005 guaranteeing a woman the legal right to remain in the marital residence regardless of title ownership.',
  },
  {
    kind: 'keyTerm',
    term: 'POSH Act 2013',
    meaning: 'Legislation mandating Internal Complaints Committees (ICCs) to prevent, prohibit, and redress workplace sexual harassment in India.',
  },
  {
    kind: 'keyTerm',
    term: 'Marital Rape Exception',
    meaning: 'A colonial legal provision in Indian criminal law exempting non-consensual sexual acts by a husband on his adult wife from being classified as rape.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Flavia Agnes on Implementation Gaps',
    body: 'Flavia Agnes points out: "Laws do not implement themselves." In India, progressive legislation on paper fails without specialized shelters, funded protection officers, and anti-patriarchal police sensitization.',
  },
  {
    kind: 'answerBox',
    intro:
      'A model sociological answer evaluating violence against women and the effectiveness of legal frameworks must integrate structural, institutional, and intersectional lenses:',
    points: [
      'Sylvia Walby and Pierre Bourdieu demonstrate that gender violence is an institutionalized mechanism of patriarchal control and symbolic violence, not isolated deviance.',
      'Sharmila Rege’s Dalit Feminist Standpoint exposes how sexual violence is deployed by dominant agrarian castes as a tool of collective caste discipline (Khairlanji, Hathras).',
      'PWDVA 2005 introduced landmark civil remedies like Residence Orders, but suffers from under-resourced Protection Officers and mandatory reconciliation pressures (Flavia Agnes).',
      'The retention of the Marital Rape Exception preserves patriarchal proprietary rights over women’s bodies under the guise of protecting conjugal harmony.',
      'The POSH Act 2013 faces structural reporting barriers due to corporate hierarchy, career retaliation, and near-total absence of functional Local Committees for the 90%+ informal female workforce.',
    ],
    conclusion:
      'Ending violence against women requires moving beyond carceral legislation toward dismantling patriarchal power asymmetries in homes, workplaces, and the criminal justice apparatus.',
  },
]
