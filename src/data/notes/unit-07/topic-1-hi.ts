import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.1 · Sociological Theories of Power',
  center: 'Power & Authority',
  subtitle: 'Coercion vs Legitimacy • Zero-Sum vs Variable-Sum • Mukhya Models',
  branches: [
    {
      title: 'Weber & Authority',
      color: 'lavender',
      thinkers: ['Max Weber', 'Steven Lukes', 'Michel Foucault'],
      points: [
        'Power (Macht): virodh ke bawajood apni marzi manwana (constant-sum)',
        'Authority (Herrschaft): Power + Legitimacy jise log farz samajh kar maanein',
        '3 Ideal Types: Traditional, Charismatic aur Legal-Rational authority',
        'Lukes ke 3 Faces (decision, agenda, desire) & Foucault ka capillary power',
      ],
    },
    {
      title: 'Functional & Variable-Sum',
      color: 'yellow',
      thinkers: ['Talcott Parsons', 'Émile Durkheim', 'Hannah Arendt'],
      points: [
        'Power kisi vyakti ki nahi balki poore samaj ki collective resource hai',
        'Bank & Money analogy: janta vote deposit karti hai aur vikas ka interest paati hai',
        'Variable-sum: collective goals poore hone par sabki power ek saath badhti hai',
        'Critique (Giddens): dominant groups dwara power ke galat istemal ko chhupata hai',
      ],
    },
    {
      title: 'Marxist & Elite Lenses',
      color: 'mint',
      thinkers: ['Karl Marx', 'Louis Althusser', 'Nicos Poulantzas', 'Vilfredo Pareto'],
      points: [
        'Marxist zero-sum: economic base par kabza hi political power deta hai',
        'Althusser: Repressive (RSA: danda/police) vs Ideological (ISA: school/media)',
        'Poulantzas: relative autonomy of state & Westergaard ki welfare candy',
        'Elite theories: Pareto (Lions/Foxes), Mosca, Michels & C.W. Mills',
      ],
    },
    {
      title: 'Pluralism & Hierarchy',
      color: 'pink',
      thinkers: ['Robert Dahl', 'David Marsh', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Classical Pluralism (Dahl): polyarchy jahan anek groups bargain karte hain',
        'Elite Pluralism (Marsh): alag-alag samajik vargon ke apne-apne representative elites',
        'Hierarchy kaise banti hai: force, resources aur ideological hegemony se',
        'Indian context: dominant caste ka dabdaba vs Bahujan democratic assertion',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u07-01-power-theories-elites.webp',
    alt: 'P1 Unit 7 infographic: Theories of Power & Elites — Competing Frameworks of Political Power',
    caption: 'Competing Frameworks of Political Power — Theories of Power & Elites ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 7 Visual 01',
  },
  {
    kind: 'md',
    body: `## Power aur Authority mein kya farak hai?

Aasaan shabdon mein samjho: ghar ho, office ho ya desh ki rajneeti — jab koi vyakti ya group doosron ke virodh ke bawajood apni baat manwa le, toh use ==Power== kehte hain. Lekin sirf darr ya dande ke dum par koi bhi vyavastha lambe samay tak nahi chal sakti; jab us power ko samaj ki naitik swikriti (legitimacy) mil jaati hai aur log use sahi maan kar khud obey karte hain, tab woh ==Authority== ban jaati hai.

[[thinker:Max Weber]] ne political sociology ki shuruat isi farak se ki. Sadak par bandook dikha kar paise chheenne wala daku raw power dikha raha hai, lekin traffic rule todne par challan kaatne wala constable ya faisla sunane wala judge legitimate authority use kar raha hai. [[eg:Jab Bharat ke karodon log bina kisi police ke dande ke chupchap income tax bharte hain ya polling booth ki lambi line mein khade rehte hain, toh wahan Weber ki legal-rational authority kaam kar rahi hoti hai.]] Weber ne legitimacy ke source ke aadhar par Authority ke 3 Ideal Types bataye:

- **Traditional Authority:** Jahan satta ka aadhar sadiyon purani parampara aur riwaj hote hain ("aisa hi hamesha se chalta aaya hai"). [[eg:Gaon ke paramparagat mukhiya, joint family ke sabse buzurg karta ya Khap panchayat ke faisle traditional authority par tikte hain.]]
- **Charismatic Authority:** Jahan log kisi neta ke chamatkari vyaktitva, bahaduri ya sant-swabhav se prabhavit hokar uske peeche chalte hain. Kyunki charisma ek vyakti tak seemit hota hai, neta ke baad use rules ya parampara mein badalna padta hai jise ==routinisation of charisma== kehte hain. [[eg:Azaadi ki ladai mein Mahatma Gandhi ya tribal andolan mein Birsa Munda ki appeal charismatic authority ki misaal hai.]]
- **Legal-Rational Authority:** Jahan satta kisi vyakti ya khandan ki nahi, balki likhit kanoon, samvidhan aur kursi (formal office) ki hoti hai. [[eg:Ek IAS District Collector ya Prime Minister ke paas kursi par rehte hue bhari taqat hoti hai, par retirement ya election haarne ke agle hi din woh aam nagrik ban jaata hai.]]

## Kya Power ek Fixed Pie hai ya Badhne wala Resource? (Zero-Sum vs Variable-Sum)

Sociology ki sabse badi behas yeh hai ki samaj mein kul power ki matra fixed (seemith) hoti hai ya badhayi jaa sakti hai? Ise samajhne ke do nazariye hain — ==Zero-Sum (Constant-Sum)== aur ==Variable-Sum== concept of power.

### 1. Zero-Sum Concept of Power (Max Weber aur Karl Marx)

Aasaan shabdon mein samjho: zero-sum ka matlab hai ki samaj mein power ek fixed roti ki tarah hai — agar ek group ka tukda badhega, toh doosre group ka tukda utna hi ghatega. [[thinker:Max Weber]] ke liye power doosre ke resistance ko harana hai, isliye ek ki jeet doosre ki haar hoti hai. [[thinker:Karl Marx]] ne ise seedhe economy se joda: jo class economy (zameen, factory, capital) par kabza rakhti hai, wahi state aur political power chalati hai ("The state is but a committee for managing the common affairs of the whole bourgeoisie").

Lekin sawaal uthta hai ki mutthi bhar ameer capitalists karodon mazdooron par bina roz ke vidroha ke raj kaise kar lete hain? Neo-Marxist thinkers ne iske 3 bade raaz khole:

- **Althusser ke RSA aur ISA ([[thinker:Louis Althusser]]):** Capitalist state do hathiyaron se status quo bachata hai — pehla ==Repressive State Apparatus (RSA)== (police, fauj, jail aur dande ki taqat), aur doosra ==Ideological State Apparatus (ISA)== (schools, education curriculum, dharm aur media jo bachpan se aam logon ke dimaag ki aisi conditioning karte hain ki unhe capitalism bilkul sahi aur natural lagne lagta hai).
- **Welfare State ek "Candy" hai ([[thinker:John Westergaard]] aur [[thinker:Henrietta Resler]]):** Modern states jo minimum wage, labour laws ya free rashan/LPG cylinder dete hain, woh asli satta-sajhedari nahi hai. Jaise toy mall mein rote hue bache ko mehanga khilona dene ke bajaye maa-baap 5 rupaye ki candy dekar chup kara dete hain, waise hi welfare concessions mazdooron ka gussa thanda karke revolutionary potential ko khatam kar dete hain.
- **Relative Autonomy of the State ([[thinker:Nicos Poulantzas]]):** Aksar big industrialists khud Prime Minister ki kursi par nahi baithte. Poulantzas batate hain ki capitalists aapas mein fiercely compete karte hain (jaise ek telecom ya infra giant doosre ke khilaf); isliye ek alag political class (relative autonomy) zaroori hai jo neutral umpire bankar poore capitalist system ko bachaye aur janta ke saamne "Sabka Saath, Sabka Vikas" ka democratic bharosa banaye rakhe. [[eg:Jab sarkar SEBI ya CCI ke zariye kisi ek corporate ki manmani rokti hai taaki poore market par bharosa bana rahe, toh yeh Poulantzas ki relative autonomy hai.]]

### 2. Variable-Sum Concept of Power (Talcott Parsons)

Iske bilkul ulat, functionalist [[thinker:Talcott Parsons]] kehte hain ki power kisi ek vyakti ya class ki jaagir nahi hai, balki poore samaj ki ==generalized societal resource== hai jisse collective goals (vikas, suraksha, garibi unmulan) poore kiye jaate hain.

- **Bank aur Money Analogy:** Parsons power ki tulna paise se aur netaon ki tulna Bank se karte hain. Jaise aam log apna paisa bank mein deposit karte hain taaki bank use invest karke sabko interest de, waise hi citizens elections mein apna vote रूपी power netaon mein deposit karte hain. Jab sarkar sadak, school, Swachh Bharat ya Ujjwala jaisi collective suvidhayein banati hai, toh poore samaj ki power aur shamta ek saath badhti hai (Win-Win dynamic). [[eg:Bharat mein UPI digital payments aur rural electrification ne sarkar aur aam dukandar dono ki shamta ek saath badhayi — yahi variable-sum power hai.]]
- **Deposit Wapas Lena:** Agar bank interest na de toh log paisa nikaal kar doosre bank mein daal dete hain; waise hi agar neta vikas na karein toh janta agle election mein apna power deposit wapas le leti hai. [[trap:Anthony Giddens critique karte hain ki Parsons ka yeh "sab changa si" model is baat ko chhupa deta hai ki taaqatwar elites aksar janta ke "power bank" ko apne swarth ke liye hijack kar lete hain.]]

| Dimension | Zero-Sum / Constant-Sum Power | Variable-Sum Power |
| --- | --- | --- |
| Core Premise | Kul power fixed hai; ek ka fayda doosre ka seedha nuksan | Collective cooperation se poore samaj ki power badh sakti hai |
| Mukhya Thinkers | Karl Marx, Max Weber, C. Wright Mills | Talcott Parsons, Émile Durkheim |
| State ka Role | Dominant class ya elites ke haath ki kathputli | Janta ke collective goals poore karne wala legitimate bank |
| Indian Example | Dabang zamindar dwara bhoomiheen mazdooron ko dabana | Polio eradication ya UPI se poore desh ki shamta badhna |

## Open Power se Chhupe Hue Hierarchy Tak: Steven Lukes aur Foucault

Kya power sirf tab dikhti hai jab koi neta khuleaam aadesh de ya Parliament mein bill pass ho? Modern sociologists batate hain ki samajik hierarchy (jaati, class, patriarchy) ko banaye rakhne wali sabse gahri power toh aankhon se dikhti hi nahi!

[[thinker:Steven Lukes]] ne apni kitab *Power: A Radical View* mein kaha ki Weber ne power ka sirf pehla chehra dekha, jabki power ke ==Three Faces (Dimensions)== hote hain:

- **First Dimension (Open Decision-Making):** Khuli behas ya voting mein kaun jeeta? (Jaise Parliament mein bill pass hona).
- **Second Dimension (Agenda-Setting / Secretive Face):** Bachrach aur Baratz ke aadhar par Lukes batate hain ki asli taaqat uske paas hai jo band kamre mein yeh tay karta hai ki Parliament ya media mein kis mudde par behas hogi aur kis mudde ko table par aane hi nahi diya jayega. [[eg:Jab corporate lobbies ya political parties election funding ya berozgari ke asli muddon ko agenda se hi gayab kar dein, toh yeh doosra chehra hai.]]
- **Third Dimension (Shaping Desires / Insidious Face):** Sabse khatarnak power woh hai jo shoshit insaan ki soch aur ichhaon ko hi aisa dhaal de ki woh apni ghulami ko apna dharm ya khushi maan le — bilkul [[thinker:Antonio Gramsci]] ke ==hegemony== ki tarah. [[eg:Jab patriarchy auraton ko yeh vishwas dila de ki chupchap tyag karna aur rasoi tak seemit rehna hi unka sabse bada gaurav hai, ya caste system shoshit jaatiyon ko pichhle janam ke karma ke naam par inequality swikar kara de, tab bina police ke hierarchy chalti rehti hai.]]

Postmodern thinker [[thinker:Michel Foucault]] isse bhi aage gaye. Unhone kaha ki power sirf Parliament ya raja ke mehal mein nahi baithi hoti — power ==capillary== (nas-nas mein behne wali) hai jo har hospital, school, jail (Panopticon) aur bhasha/discourse mein maujood hai. Jo तय karta hai ki kaun "normal" hai aur kaun "pagal" ya "criminal", wahi knowledge-power ke zariye samaj ko discipline karta hai. [[eg:Aaj Aadhaar biometrics, CCTV cameras aur delivery apps ke rating algorithms bina kisi dande ke har nagrik aur worker ko khud-ba-khud discipline mein rakhte hain.]]

## Elite Theory vs Pluralism: Modern Democracy Asal Mein Kaun Chalata Hai?

Marxism aur Functionalism ke alawa do aur bade models modern democracy ka post-mortem karte hain:

- **Classical Elite Theory ([[thinker:Vilfredo Pareto]], [[thinker:Gaetano Mosca]], [[thinker:Robert Michels]]):** Marx ko jawab dete hue inhone kaha ki itihas mein kabhi barabari nahi aa sakti; har samaj ko hamesha mutthi bhar elites hi chalate hain kyunki aam janta (masses) bhed-bakriyon ki tarah hoti hai jise netritva ki zaroorat hoti hai. Pareto ne **Lions** (dande/force wale) aur **Foxes** (chalaki/manipulation wale) elites ke beech circulation samjhaya, jabki Michels ne ==Iron Law of Oligarchy== diya ki kisi bhi badi party ya sangathan mein faisle lene ki majboori ke kaaran satta chand top netaon ke haath mein simat jaati hai.
- **Pluralism aur Elite Pluralism ([[thinker:Robert Dahl]], [[thinker:David Marsh]]):** Elite theory ke nirashawad ko kharij karte hue Dahl ne kaha ki modern industrial democracy ek ==polyarchy== hai — yahan power kisi ek elite ke paas nahi, balki trade unions, kisan sangathan, business chambers aur caste associations jaise anek pressure groups mein banti hoti hai, aur sarkar ek broker (bicholiye) ki tarah sabke beech compromise karati hai. **Elite Pluralism** manta hai ki har group ke upar elites zaroor hote hain, par woh koi "cozy club" nahi balki alag-alag samajik vargon (Dalit, OBC, kisan, vyapari) ke imandar representatives hote hain. [[link:Paper 2 Unit 12 mein dekho ki Bharat mein BSP, RJD, BKU aur FICCI jaise anek sangathan kaise democratic bargaining ko zinda rakhte hain.]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Face 1 (Open)', text: 'Parliament ya court ke khule faisle aur voting (Weber/Dahl)' },
      { label: '2. Face 2 (Agenda)', text: 'Band kamre mein tay karna ki kis mudde par behas hi nahi hogi' },
      { label: '3. Face 3 (Desires)', text: 'Dimaag ki conditioning taaki shoshit khud hierarchy maan le (Lukes/Gramsci)' },
      { label: '4. Capillary Power', text: 'Rozmarra ke norms, surveillance aur knowledge se discipline (Foucault)' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Marxist & Elite Models of Power',
    rightTitle: 'Functionalist & Pluralist Models of Power',
    rows: [
      {
        aspect: 'Power kiske paas hai?',
        left: 'Bourgeoisie class (Marx) ya mutthi bhar elites (Pareto/Mills) ke haath mein',
        right: 'Poore samaj (Parsons) ya anek competing pressure groups (Dahl) mein faili hui',
      },
      {
        aspect: 'Power ka Nature',
        left: 'Zero-sum / Constant-sum: elites ki taqat janta ki bechargi par tiki hai',
        right: 'Variable-sum (Parsons) ya bargaining aur compromise ka khula bazaar (Pluralism)',
      },
      {
        aspect: 'Democratic State ka Role',
        left: 'Capitalists ki managing committee ya elite rule chhupane ka mukhauta',
        right: 'Collective goals ka bank ya alag-alag groups mein balance banane wala broker',
      },
      {
        aspect: 'Welfare Schemes par Nazariya',
        left: 'Mazdooron ka vidroha rokne ke liye di gayi sasti candy (Westergaard)',
        right: 'Janta ke vote deposit ka interest aur pressure groups ki safal bargaining',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Power vs Authority (Macht vs Herrschaft)',
    meaning:
      'Power virodh ke bawajood apni marzi thopne ki shamta hai, jabki Authority woh legitimate power hai jise log apna naitik farz samajh kar swikar karte hain.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Variable-Sum Concept of Power',
    meaning:
      'Talcott Parsons ka functionalist siddhant ki power poore samaj ki collective poonji hai jo vikas aur sahyog ke saath badhti ya ghat-ti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Repressive & Ideological State Apparatuses (RSA & ISA)',
    meaning:
      'Louis Althusser ka bhed: RSA dande aur police se control karta hai, jabki ISA school, dharm aur media ke zariye dimaagi conditioning karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Three Dimensions of Power',
    meaning:
      'Steven Lukes ka model: (1) khule faisle lena, (2) agenda set karke mudde dabana, aur (3) logon ki ichhaon ko dhaal kar inequality natural dikhana.',
  },
  {
    kind: 'keyTerm',
    term: 'Polyarchy & Elite Pluralism',
    meaning:
      'Robert Dahl ka model jahan satta anek groups mein banti hoti hai; Elite Pluralism manta hai ki diverse elites apne-apne samajik vargon ka sachcha pratinidhitva karte hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Power is the chance of a man or a number of men to realize their own will in a social action even against resistance.',
    context: 'Economy and Society — Weber ki constant-sum power definition.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Advanced Industrial ya Indian Society mein kaunsa model sabse fit hai?',
    body: 'Jab UPSC poochhe ki kaunsa power model sabse applicable hai (PYQ 2019), toh sirf Marxism (bahut cynical) ya sirf Functionalism ("sab changa si") ko mat chuno. Best answer hai Elite Pluralism / Polyarchy (Dahl, David Marsh) ko endorse karna — aur saath mein C.W. Mills aur Poulantzas ka critique jodna ki aaj bhi big corporates aur command-post elites ka palda bhari rehta hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Elite Pluralism ko Classical Elite Theory mat samajh lena!',
    body: 'Naam mein "Elite" dekh kar dhokha mat khana! Classical Elite Theory (Pareto, Mosca) democracy ko jhootha dikhawa maanti hai. Lekin Elite Pluralism asal mein Pluralism ka hi naam hai — yeh manta hai ki desh chala toh chand neta hi rahe hain, par woh alag-alag castes, classes aur regions (jaise Dalit, OBC, kisan, vyapari) ke sachche pratinidhi hain jo aapas mein bargain karte hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: Power ke 4 Chashme (MW-PM-EP-LF)',
    body: 'Yaad rakho MW-PM-EP-LF: Marx & Weber = Zero-Sum takraav; Parsons = Money-in-Bank Variable-Sum; Elite vs Pluralism = Monopoly vs Polyarchy; Lukes & Foucault = 3 Faces & Capillary discourse jo social hierarchy banate hain.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociological theories of power samvidhan ki kitabi baaton se aage badh kar yeh dekhti hain ki samaj mein power kahan se aati hai, legitimacy kaise paati hai aur kiske hiton ki raksha karti hai.',
    points: [
      'Weberian base: Raw coercive power aur legitimate authority (Traditional, Charismatic, Legal-Rational) mein farak karke constant-sum view deta hai.',
      'Functionalist Variable-Sum (Parsons): Power ko bank deposit jaisa collective resource manta hai jo shared goals poore hone par sabke liye badhta hai.',
      'Marxist Zero-Sum (Marx, Althusser, Poulantzas): Power ka source economic ownership hai, jise RSA, ISA, welfare candy aur relative state autonomy se bachaya jaata hai.',
      'Elite vs Pluralist behas: Pareto, Mosca, Michels aur Mills elite monopoly dikhate hain, jabki Dahl ka Pluralism pressure groups ke beech polyarchic bargaining dikhata hai.',
      'Radical & Postmodern gahrai: Steven Lukes ke 3 faces aur Foucault ka capillary knowledge-power samjhate hain ki chhupe hue norms caste, class aur patriarchy ki hierarchy kaise tikate hain.',
    ],
    conclusion:
      'Bharat jaise loktantra mein power kisi ek model se nahi, balki pluralist bargaining aur structural elite inequalities ke lagatar takraav se chalti hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Sociological theories of power yeh samjhati hain ki power ek fixed zero-sum sangharsh hai (Weber, Marx, Elite theorists), samajik sahyog se badhne wala resource hai (Parsons), pressure groups ke beech bargaining ka bazaar hai (Dahl), ya chhupe hue norms aur discourse ke zariye hierarchy tikane wala jaal hai (Lukes, Foucault).',
  mindMap,
  sections,
}