import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 7.2 · Power Elite, Bureaucracy, Pressure Groups & Parties',
  center: 'Elites & Political Actors',
  subtitle: 'Pareto/Mosca/Michels • C.W. Mills • Bureaucracy • Parties & Pressure Groups',
  branches: [
    {
      title: 'Classical & Modern Elites',
      color: 'lavender',
      thinkers: ['Vilfredo Pareto', 'Gaetano Mosca', 'Robert Michels', 'C. Wright Mills'],
      points: [
        'Pareto: Governing vs Non-governing elites; Lions (danda) vs Foxes (chalaki)',
        'Circulation of Elites: quality decay + trait imbalance ("graveyard of aristocracies")',
        'Mosca (political formula) & Michels (sangathan mein Iron Law of Oligarchy)',
        'C.W. Mills: institutional command posts (Military + Corporate + Federal Govt)',
      ],
    },
    {
      title: 'Bureaucracy & State Arm',
      color: 'yellow',
      thinkers: ['Max Weber', 'Robert K. Merton', 'Alvin Gouldner', 'Michel Crozier'],
      points: [
        'Weber: rational-legal ideal type (hierarchy, written rules, merit, impersonality)',
        'Merton: trained incapacity & goal displacement (niyam hi lakshya ban jaate hain)',
        'Political Neutrality vs "Committed Bureaucracy" ka khatra',
        'Indian reality: colonial steel frame se e-governance aur lateral entry tak',
      ],
    },
    {
      title: 'Political Parties',
      color: 'mint',
      thinkers: ['Max Weber', 'Maurice Duverger', 'Rajni Kothari', 'Yogendra Yadav'],
      points: [
        'Elections lad kar legitimate tarike se state power capture karti hain',
        'Functions: political socialisation, interest aggregation, recruitment & watchdog',
        'Widening base: chunav jeetne ke liye narrow base se "Sarvajan" appeal tak',
        'Indian journey: Congress system (Kothari) -> coalitions -> dominant party daur',
      ],
    },
    {
      title: 'Pressure Groups (PGs)',
      color: 'pink',
      thinkers: ['Gabriel Almond', 'G.B. Powell', 'Myron Weiner', 'S.E. Finer'],
      points: [
        'Bina election lade bahar se policy par dabav banate hain ("Anonymous Empire")',
        'Almond & Powell ke 4 types: Associational, Non-Associational, Institutional, Anomic',
        'Myron Weiner: Bharat mein Mass PGs par Community associations (caste/religion) bhari',
        'Parties ke saath Antagonistic Cooperation: 5 saal ke beech loktantra zinda rakhte hain',
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
    body: `## Classical Elite Theory: Har Samaj ko Mutthi Bhar Log Hi Kyun Chalate Hain?

Aasaan shabdon mein samjho: aap rajneeti dekho, business dekho, Bollywood dekho ya cricket — har kshetra mein sabse upar baithe chand log poore system ko chalate hain. Sociology mein ==Elite== ka matlab sirf ameer hona nahi hai; [[thinker:Vilfredo Pareto]] ke shabdon mein, jo log apne-apne kaam ke kshetra mein sabse top par (**highest indices in their branch of activity**) khade hote hain, wahi elite hain. Classical Elite theorists ([[thinker:Vilfredo Pareto]], [[thinker:Gaetano Mosca]], aur [[thinker:Robert Michels]]) ka manna hai ki chahe shasan ka naam rajtantra ho, communism ho ya democracy — ==elite rule har samaj mein anivarya (inevitable) hai== kyunki aam janta (masses) asangathit hoti hai aur bhedon ki tarah netritva chahti hai.

### 1. Vilfredo Pareto: Lions, Foxes aur Circulation of Elites

Pareto ne samaj ko Elites aur Non-Elites (masses) mein baanta, aur fir Elites ke do hisse kiye — **Governing Elites** (jo seedhe ya aamne-saamne sarkar aur shasan chalate hain) aur **Non-Governing Elites** (jaise Virat Kohli ya A.R. Rahman jo apne field mein top hain par sarkar nahi chalate). Machiavelli se prerna lekar Pareto ne bataya ki Governing Elites apne psychological traits (*residues*) ke aadhar par do tarah ke hote hain:

- **Lions (Residue of Persistence of Aggregates):** Yeh dande, brute force, nirnayak action aur parampara ke dum par shasan karte hain aur virodh ko kuchal dete hain. [[eg:Fauji tanashah ya strongman image aur surgical-strike style wale neta Pareto ke Lions hain.]]
- **Foxes (Residue of Combinations):** Yeh dande ke bajaye chalaki, manipulation, kutniti, samjhauton aur jod-tod se sarkar chalate hain. [[eg:Gathbandhan ke daur mein P.V. Narasimha Rao ya Manmohan Singh/Sonia Gandhi dwara alag-alag parties ko sadh kar sarkar chalana Foxes ki shaili hai.]]

Lekin koi bhi elite hamesha kursi par kyun nahi tik paata? Pareto ne mashhoor line kahi — **"History is a graveyard of aristocracies"** (Itihas kulino ka kabristan hai) — aur ==Circulation of Elites== ka siddhant diya. Lions aur Foxes (ya governing aur non-governing elites) ke beech lagatar adla-badli do kaaranon se hoti hai:

- **Quality Decay (Guno ka Patan):** Satta milne ke baad elites aalsi aur aaram-talab ho jaate hain — Lions apni taqat kho dete hain aur Foxes apni chalaki.
- **Imbalance of Traits:** Shasan chalane ke liye danda aur dimaag dono chahiye; sirf Lions ki sarkar bahut rigid hokar chatur Foxes ke jaal mein phans jaati hai, aur sirf Foxes ki sarkar sankat ke waqt kamzor padkar Lions dwara palat di jaati hai. [[eg:Business duniya mein purane gharano ki jagah Flipkart, Ola aur Paytm jaise unicorn startups ka aana, ya UP-Bihar ki rajneeti mein Badri Narayan aur Christophe Jaffrelot ke mutabik purane Savarna elites ki jagah OBC aur Dalit elites ka ubharna Circulation of Elites ka zinda saboot hai.]]

### 2. Mosca, Michels aur Classical Trio ki Tulna

Jahan Pareto ne psychology par zor diya, wahin [[thinker:Gaetano Mosca]] (*The Ruling Class*) ne kaha ki mutthi bhar minority karodon ki majority par isliye raj kar leti hai kyunki **minority organized hoti hai** aur majority bikhri hui! Ruling class apni satta ko jayaz dikhane ke liye ek naitik kahaani ya **"Political Formula"** (jaise Bhagwan ki marzi ya "janta ka shasan") banati hai, aur neeche se **"Sub-Elite"** (civil servants, managers, intellectuals) ki madad leti hai. Doosri taraf [[thinker:Robert Michels]] ne European socialist parties ko padh kar ==Iron Law of Oligarchy== diya: jaise hi koi party ya union bada hota hai, tez faisle lene aur sangathan chalane ki majboori ke kaaran satta chand top netaon (oligarchy) ke haath mein chali jaati hai.

| Thinker | Elite Rule ka Mukhya Kaaran | Core Concept / Mechanism | Social Change & Masses par Nazariya |
| --- | --- | --- | --- |
| Vilfredo Pareto | Psychological traits (Residues) | Lions vs Foxes; Circulation of Elites | Cyclical badlaav; masses hamesha passive rehti hain |
| Gaetano Mosca | Minority ki organizational shamta | Ruling Class, Sub-Elite & Political Formula | Sub-elite se nayi bharti; loktantra ko thoda mahatva |
| Robert Michels | Bade sangathan ki administrative zaroorat | Iron Law of Oligarchy | Har party/union ant mein chand netaon ki jaagir ban jaati hai |

## Modern Elite Theory: C. Wright Mills ka "Power Elite"

1956 ki mashhoor kitab *The Power Elite* mein American sociologist [[thinker:C. Wright Mills]] ne maana ki America jaise loktantra ko bhi chand elites hi chalate hain, par unhone Pareto ke psychological theory ko kharij kar diya. Mills ne kaha: **"Elites rule in institutional terms rather than psychological terms."** Yaani elites isliye taaqatwar nahi hain ki unka dimaag Lion ya Fox jaisa hai, balki isliye kyunki woh samaj ke 3 sabse vishal institutions ke top ==command posts== (kursiyon) par baithe hain:

- **1. The Federal Government (Central Political Executive)**
- **2. Big Business Corporations (Corporate Giants)**
- **3. The Top Military Establishment (Top Generals)**

Mills ne dikhaya ki elite rule koi kudrati ya hamesha rehne wala niyam nahi hai; 19th century America mein economic, political aur military power chhote businesses, states aur local militias mein banti hui thi, jo 20th century mein centralize hokar ek unified ==Power Elite== ban gayi. Yeh teeno elites aapas mein do tarah se jude hote hain:

- **Similar Social Background & Revolving Door:** America ke top elites ek hi racial-religious background (**WASP** — White Anglo-Saxon Protestant) se aate hain, ek hi Ivy League colleges mein padhte hain, aapas mein rishtedari karte hain, aur government cabinet se retire hokar corporate boards mein baith jaate hain.
- **Military Capitalism (Convergence of Interests):** America ki economy hathiyaron aur yuddh par tiki hai; jung hone se corporates, military generals aur neta teeno ko fayda hota hai, aur Hiroshima atom bomb ya Federal Reserve interest rates jaise bade faisle band kamre mein bina janta se poochhe liye jaate hain.
- **Kya Mills ka Model Bharat par Laagu Hota Hai?** [[eg:Azaadi ke turant baad Bharat mein Doon School aur St. Stephen’s se aane wala ek chhota elite zaroor tha; par 1970s aur 1990s ke Mandal uday ke baad Bharatiya political elites (Narendra Modi, Sonia Gandhi, Mayawati, Lalu Yadav, Mamata Banerjee) ki bhasha, jaati aur background bilkul alag-alag hain — isliye Bharat par Mills ke closed Power Elite se zyada Elite Pluralism laagu hota hai.]]

## Bureaucracy: Sarkar ka Sthayi Dhancha aur Uske Dysfunctions

Neta aur partiyan har 5 saal mein badalti rehti hain, par shasan ki rozmarra ki gaadi ==Bureaucracy== (naukarशाही) chalati hai. [[thinker:Max Weber]] ne bureaucracy ko **Legal-Rational Authority** ka sabse shuddh aur efficient roop bataya, jiske 6 pillars hain: fixed hierarchy, likhit rules, merit-based exam recruitment, full-time salary career, office aur niji sampatti ka alag hona, aur ==impersonality== (bina kisi bhedbhav ya jazbaat ke niyam lagana).

Lekin zameen par bureaucracy aksar sust aur bejaan kyun dikhti hai?

- **Merton ke Dysfunctions ([[thinker:Robert K. Merton]]):** Niyamon ki andhi pooja karne se ==goal displacement== aur ==trained incapacity== paida hoti hai — babu log niyam (red tape) ko hi bhagwan maan lete hain aur asli lakshya (janta ki madad) bhool jaate hain. [[eg:Jab kisi buzurg vidhwa ka angutha Aadhaar machine par घिस jaane ke kaaran use rashan dene se mana kar diya jaaye, toh yeh Merton ka goal displacement hai.]]
- **Political Neutrality vs Committed Bureaucracy:** Multi-party democracy mein civil servants se **political neutrality** ki umeed ki jaati hai taaki sarkar badalne par bhi prashasan nishpaksh chale. 1970s mein Indira Gandhi ke daur mein **"committed bureaucracy"** (ruling party ki vichardhara ke prati wafadar afsar) ki maang uthi, jise sociologists ne loktantra ke liye bada khatra bataya (` + '[[link:Ise Paper 1 Unit 4 Weberian bureaucracy aur Paper 2 Unit 12 governance se jodo.]]' + `).

## Political Parties aur Pressure Groups: Antagonistic Cooperation

Loktantra mein aam nagrik aur state ke beech do sabse bade pul (bridges) kaam karte hain:

- **Political Parties:** [[thinker:Max Weber]] ke mutabik woh sangathan jo elections lad kar legitimate tarike se **state power capture** karna chahte hain. Parties ke 8 bade kaam hain: political sensitization, political socialization, interest articulation, **interest aggregation** (alag-alag vargon ki maangon ko jod kar manifesto banana), political recruitment (NSUI/ABVP jaise student wings se naye neta lana), two-way communication, sarkar chalana, aur opposition watchdog banna. [[eg:Plural society mein chunav jeetne ke liye parties ko apna base chaurda karna padta hai — jaise BSP ne shuruati "Tilak, Taraju aur Talwar" ke ugra naare se badal kar Satish Chandra Mishra ko saath lekar "Sarvajan Hitay" ka rasta apnaya.]]
- **Pressure Groups (Interest Groups):** Woh sangathan jo **khud election nahi ladte aur na hi kursi chahte hain**, balki bahar se sarkar aur bureaucrats par dabav daal kar apne members ke hit mein policies banwate hain. [[thinker:S.E. Finer]] ne inhe **"Anonymous Empire"** aur Richard Lambert ne **"Unofficial Government"** kaha. Yeh petitions, dharna-pradarshan, media articles, election funding/lobbying aur ministries ko expert data dekar kaam karte hain.

### Pressure Groups ke Prakar aur Bharatiya Rajneeti

[[thinker:Gabriel Almond]] aur [[thinker:G.B. Powell]] ne pressure groups ko 4 hisson mein baanta:

1. **Associational PGs:** Formally registered sangathan jo kisi khas varg ke hiton ke liye ladte hain [[eg:udhyogpatiyon ke liye FICCI aur CII; mazdooron ke liye AITUC aur BMS; doctors ke liye IMA; kisanon ke liye Samyukta Kisan Morcha]].
2. **Non-Associational PGs:** Janm, jaati, dharm ya bhasha par aadharit informal sangathan [[eg:Maratha Seva Sangh, Karni Sena, ya All India Muslim Personal Law Board]].
3. **Institutional PGs:** Sarkar ke apne ang jo samvidhanik tarike se apne vibhag ke liye dabav banate hain [[eg:IAS Association, fauj ka OROP lobby]].
4. **Anomic PGs:** Jab naraz groups kanoon haath mein lekar tod-phod, chakka-jam ya hinsa par utar aayein [[eg:ULFA ya ugra dange]].

[[thinker:Myron Weiner]] ne Bharat par adhyayan karke dikhaya ki jahan Western countries mein **Mass Associations** (economic/professional groups) haavi hain, wahin Bharat mein **Community Associations** (caste, dharm aur bhasha ke groups) sabse taaqatwar hain jinhe partiyan vote-bank ki tarah palati hain. Fir bhi, Political Parties aur Pressure Groups ke beech ==Antagonistic Cooperation== ka rishta hota hai — maangon ko lekar takraav (antagonism) bhi chalta hai, aur vote-base, policy input tatha naye dalon ke janam (jaise India Against Corruption se AAP, RSS se Jana Sangh/BJP, ya BAMCEF/DS4 se BSP) ke zariye sahyog (cooperation) bhi chalta hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1896–1916',
        title: 'Pareto & Mosca — Classical Elite Theory',
        text: 'Minority rule ki anivaryata, Governing vs Non-Governing elites, Lions vs Foxes aur Ruling Class ka siddhant diya.',
      },
      {
        year: '1911',
        title: 'Robert Michels — Iron Law of Oligarchy',
        text: 'Dikhaya ki socialist parties mein bhi sangathan bada hone par satta chand netaon ke haath mein simat jaati hai.',
      },
      {
        year: '1922',
        title: 'Max Weber — Legal-Rational Bureaucracy',
        text: 'Rules, merit aur impersonality par tiki modern bureaucracy ko state ka sabse efficient dhancha bataya.',
      },
      {
        year: '1956',
        title: 'C. Wright Mills — The Power Elite',
        text: 'Psychology ki jagah Military, Big Business aur Federal Government ke institutional command posts ko elite power ka source bataya.',
      },
      {
        year: '1961–1966',
        title: 'Dahl, Almond & Weiner — Pluralism & Pressure Groups',
        text: 'Polyarchy, ANIA pressure group typology aur Bharat mein Community Associations ke dabdabe ka vishleshan kiya.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Political Parties',
    rightTitle: 'Pressure Groups (Interest Groups)',
    rows: [
      {
        aspect: 'Mukhya Lakshya',
        left: 'Elections lad kar seedhe sarkar banana aur satta chalana',
        right: 'Bina election lade bahar se sarkar ki policies ko prabhavit karna',
      },
      {
        aspect: 'Social Base & Scope',
        left: 'Bahut vyapak (wide); anek vargon ke hiton ko aggregate karti hain',
        right: 'Seemit aur specific; sirf apne members ke sectional interest ki chinta',
      },
      {
        aspect: 'Accountability & Structure',
        left: 'Election Commission mein registered; seedhe janta ke prati jawabdeh',
        right: 'Formal ya informal; sirf apne sadasyon ke prati jawabdeh',
      },
      {
        aspect: 'Ideology & Umar',
        left: 'Vyapak political ideology zaroori; dashakon tak chalti hain',
        right: 'Mudde par aadharit; maang poori hone par khatam ya shant ho sakti hain',
      },
      {
        aspect: 'Indian Examples',
        left: 'BJP, Congress, BSP, DMK, CPI(M)',
        right: 'FICCI, CII, Bharatiya Kisan Union, IMA, Maratha Seva Sangh',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Circulation of Elites',
    meaning:
      'Vilfredo Pareto ka siddhant ("History is a graveyard of aristocracies") jiske tahat satta mein baithe elites ke kamzor padne par naye elites (aur Lions-Foxes) unki jagah lete rehte hain.',
    thinkerSlug: 'vilfredo-pareto',
  },
  {
    kind: 'keyTerm',
    term: 'Iron Law of Oligarchy',
    meaning:
      'Robert Michels ka niyam ki koi bhi bada sangathan ya political party chahe kitni hi democratic shuruat kare, ant mein chand top leaders (oligarchy) ke kabze mein aa jaati hai.',
  },
  {
    kind: 'keyTerm',
    term: 'The Power Elite',
    meaning:
      'C. Wright Mills ka concept jahan Military, Big Corporates aur Federal Executive ke top command posts par baithe log ek gathbandhan banakar desh ke bade faisle lete hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Trained Incapacity & Goal Displacement',
    meaning:
      'Robert K. Merton dwara bataye gaye bureaucracy ke dosh jahan afsar niyamon (red tape) ko hi sab kuch maan kar janta ki seva ka asli lakshya bhool jaate hain.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Anonymous Empire (Pressure Groups)',
    meaning:
      'S.E. Finer dwara pressure groups ko diya gaya naam kyunki yeh bina chune gaye parde ke peeche se kanoon aur policies ko gehraai se prabhavit karte hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'vilfredo-pareto',
    quote: 'History is a graveyard of aristocracies.',
    context: 'The Mind and Society (1916) — har governing elite ka patan aur circulation tay hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2016 PYQ Favourite: Pressure Groups Threat hain ya Necessity?',
    body: 'UPSC baar-baar poochta hai ki pressure groups loktantra ke liye khatra hain ya zaroorat (2025, 2022, 2017, 2014). Hamesha dono paksh likho: (1) Kyun zaroori hain (5 saal ke elections ke beech rozmarra ki accountability, kamzor vargon ki aawaz, FICCI/IMA/SKM jaisa policy input), aur (2) Kab khatra bante hain (corporate crony lobbying, Myron Weiner ke caste/communal vote-bank blackmail, aur Anomic violence).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Classical vs Modern Elite Theory: Psychology aur Institution ko mix mat karna!',
    body: 'PYQ 2020 ("Elites rule in institutional terms rather than psychological terms") mein students C.W. Mills ki jagah sirf Pareto likh aate hain. Yaad rakho: Pareto aur Mosca elite rule ko vyakti ke psychological traits ya sangathan se jodkar eternal maante hain; C.W. Mills psychology ko kharij karke dikhate hain ki modern elite ki taqat uski kursi (Military, Corporate, Federal Executive command posts) se aati hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Almond & Powell ke 4 Pressure Groups (Mnemonic: ANIA)',
    body: 'Pressure Group ke har answer mein Gabriel Almond aur G.B. Powell ka ANIA classification zaroor likho: Associational (FICCI, AITUC, BKU), Non-Associational (caste/religion sabhas), Institutional (IAS/Army associations), aur Anomic (dange, chakka jam) — saath mein Maurice Duverger ke "Pseudo-Pressure Groups" (paise lekar lobbying karne wale media/PR groups).',
  },
  {
    kind: 'answerBox',
    intro:
      'Modern political sociology yeh samjhati hai ki loktantra mein shasan elites, sthayi bureaucracy, political parties aur pressure groups ke aapsi talmel aur takraav se kaise chalta hai.',
    points: [
      'Classical Elite Trio: Pareto (Lions/Foxes & Circulation), Mosca (Ruling Class & Political Formula) aur Michels (Iron Law of Oligarchy) minority rule ko anivarya maante hain.',
      'Modern Institutional Elite (C.W. Mills): Psychology ki jagah Big Business, Military aur Federal Executive ke command posts ke gathbandhan ko Power Elite batata hai.',
      'Bureaucratic Steel Frame: Weber ki legal-rational bureaucracy nishpaksh prashasan deti hai, par Merton ke goal displacement (red tapism) aur "committed bureaucracy" se ise khatra rehta hai.',
      'Parties vs Pressure Groups: Parties elections jeet kar satta paane ke liye interests aggregate karti hain, jabki Pressure Groups (Almond & Powell ke 4 types) bahar se antagonistic cooperation ke zariye policy badalte hain.',
      'Indian Synthesis: Rajni Kothari, Myron Weiner aur Yogendra Singh dikhate hain ki Bharat mein multi-party coalitions, community pressure groups aur naye Dalit-OBC elites ne elite monopoly ko pluralist bargaining mein badal diya hai.',
    ],
    conclusion:
      'Loktantra ki majbooti isi mein hai ki internal party democracy, neutral bureaucracy aur jagruk pressure groups ke zariye elite concentration par lagatar ankush rakha jaaye.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Yeh topic Classical Elite theories (Pareto, Mosca, Michels) aur C.W. Mills ke institutional Power Elite ki tulna Weberian bureaucracy, political parties aur pressure groups ki pluralist bargaining se karta hai.',
  mindMap,
  sections,
}