import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Colonial daur ke revenue systems (Zamindari, Ryotwari, Mahalwari) se lekar 1947 ke baad ke land reforms tak Bharatiya agrarian social structure ke vikas ka vishleshan. P.C. Joshi ke teen ideological approaches, land reforms ke chaar pillars aur unke asar ko samajhata hai — kaise intermediate peasant castes ("bullock capitalists") ko shakti mili par khetihar mazdoor aur Dalit zameen se door reh gaye.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 2 — Agrarian Social Structure & Land Reforms',
  center: 'Agrarian Structure & Land Reforms',
  subtitle: 'Colonial Systems • P.C. Joshi Approaches • 4 Pillars • Selective Transformation',
  branches: [
    {
      title: '1. Agrarian Class & Colonial Systems',
      color: 'lavender',
      thinkers: ['Daniel Thorner', 'Lord Cornwallis', 'Thomas Munro', 'H. Venkatasubbiah'],
      points: [
        'Thorner ka triad: Malik (rentiers), Kisan (working peasants), Mazdoor (labourers)',
        'Teen colonial systems: Zamindari (1793), Ryotwari (1820), Mahalwari (1822)',
        'Venkatasubbiah ka Indistinguishability Thesis: 1940s tak sabhi mein shoshan ek jaisa ho gaya',
        'Official landholding: 85% small aur marginal (<2 ha), top 0.4% large (>10 ha)',
      ],
    },
    {
      title: '2. Ideological Approaches (P.C. Joshi)',
      color: 'yellow',
      thinkers: ['P.C. Joshi', 'Vinoba Bhave', 'Jawaharlal Nehru', 'Charan Singh'],
      points: [
        'Gandhian Approach: Trusteeship; Vinoba Bhave ka Bhoodan fail hua (pathrili, banjar zameen)',
        'Marxist Approach: Krantikari sangharsh aur zameen par kabza; Naxalite aandolan ne apnaya',
        'Radical Nationalist Approach: Kanoon banakar ceiling aur tenancy sudhar (sarkari model)',
        'Kanooni loopholes: Private property aur adalat ke stay orders ne reforms ko kamzor kiya',
      ],
    },
    {
      title: '3. Land Reforms ke Chaar Pillars',
      color: 'mint',
      thinkers: ['Gunnar Myrdal', 'Hare Krishna Konar', 'Walter Fernandes', 'N.C. Saxena'],
      points: [
        'Intermediaries ka ant: Behad safal; 20 million zamindaron ka dabdaba khatam hua',
        'Tenancy Reforms: Rent fix kiya par malikon ne kisanon ko pehle hi bedakhal kar diya',
        'Land Ceilings: Benami transfers aur bagiche/sugar mill ke exemptions se flop hua',
        'Chakbandi (Consolidation): Punjab-Haryana mein superhit; Eastern India mein patwari corruption se fail',
      ],
    },
    {
      title: '4. Asar & Selective Transformation',
      color: 'pink',
      thinkers: ['Lloyd & Susanne Rudolph', 'Paul Brass', 'Malcolm Adiseshiah', 'Yogendra Singh'],
      points: [
        'Bullock Capitalists ka uday: Intermediate jaatiyon (Jat, Yadav, Kurmi, Maratha) ko zameen mili',
        'Congress ki haar: Kisan jaatiyon ne regional parties banakar Congress ka ekchhatra raj toota',
        'Landlessness bani rahi: Dalit khetihar mazdoor aur mahila kisan zameen ke malikana haq se banchhit rahe',
        'Regional farq: Kerala aur Bengal (Operation Barga) mein safalta banam UP-Bihar mein evasion',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u03-02-land-tenure-reforms.webp',
    alt: 'P2 Unit 3 infographic: Land Tenure & Land Reforms — Colonial Revenue Systems to Post-1947 Land Reforms',
    caption:
      'Angrezi raj ke lagaan shoshan se lekar azaadi ke baad ke land reforms tak: kaise madhya varg ki kisan jaatiyon ko zameen mili par Dalit mazdoor khet se bedakhal rahe.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 3 Visual 02',
  },
  {
    kind: 'md',
    body: `## Agrarian Social Structure: Zameen, Izzat aur Shakti ka Khel

Aasaan shabdon mein samjho: gaon mein zameen sirf fasal ugane ka khet nahi hoti, balki poore gaon par hukumat chalane ka licence hoti hai. Jiske paas zameen hai, gaon ki panchayat mein uski baat suni jaati hai, uske ghar ke aage mazdoor sar jhukate hain, aur uski jaati ka dabdaba banta hai. Jiske paas zameen nahi hai, woh din-raat doosron ke khet mein pasina baha kar bhi do waqt ki roti ke liye mohtaaj rehta hai.

Is kisan samajik dharatal ko samajhne ke liye prasiddha economic historian [[thinker:Daniel Thorner]] ne Bharatiya kisanon ko teen categories mein baanta:
1. **Malik (Proprietors / Landlords):** Bade zameendar ya kisan malik jo khud khet mein hal nahi chalate. Unki aamdani zameen ke rent ya khetihar mazdooron (*mazdoors*) se karwaye kaam se aati hai. Yeh aam taur par unchi ya dabang intermediate jaatiyon ke hote hain.
2. **Kisan (Working Peasants):** Chhote aur madhyam kisan jinke paas zameen hoti hai aur woh apne parivar ke sath khet mein khoon-pasina bahate hain. Yeh sirf fasal kaatne ya bone ke waqt bahar ke mazdoor lagate hain.
3. **Mazdoor (Agricultural Labourers):** Bhoomiheen log jinke paas zameen ka ek tukda nahi hota aur woh doosron ke khet mein daily wage par kaam karke pet paalte hain. Inme se 90% se zyada log Dalit aur atyant pichhdi jaatiyon ke hote hain.

Sarkari data dekhoge toh aaj bhi yeh dharatal behad asaman hai: lagbhag **85% kisan Small aur Marginal category** (2 hectare se kam zameen) mein aate hain, jabki upar ke sirf **0.4% bade kisan** desh ki badi kheti zameen par kabza rakhte hain.

## Colonial Land Tenure Systems aur Indistinguishability Thesis

Angrez jab Bharat aaye toh unka ek hi maqsad tha — kheti se zyada se zyada lagaan nichodna. Iske liye colonial shashan ne Bharat mein teen bade lagaan systems shuru kiye:

1. **Zamindari System (Permanent Settlement, 1793):** [[thinker:Lord Cornwallis]] ne Bengal, Bihar aur coastal Odisha mein shuru kiya. Angrezon ne purane tax collectors (zamindaron) ko zameen ka pakka malik maan liya, bas shart yeh thi ki zamindar har saal Company ko tay lagaan dega. Isse Kolkata mein rehne wale aish-pasand absentee landlords paida hue jinhone zameen aage 50-50 sub-contractors ko baant di, aur asli khet jotne wale kisan ka shoshan aur begaari (*begar*) aam baat ho gayi.
2. **Ryotwari System (1820):** Sir Thomas Munro ne Madras aur Bombay presidency mein shuru kiya. Yahan beech ke zamindar ko hatakar seedhe kisan (*ryot*) se contract kiya gaya. Lekin sarkari lagaan itna zyada rakha gaya (fasal ka 45–55%) ki sukha padne par kisan lagaan nahi de paata tha.
3. **Mahalwari System (1822/1833):** Holt Mackenzie aur Lord William Bentinck ne Punjab, Western UP aur Central India mein banaya. Yahan revenue poore gaon ya khed (*mahal*) ke sath taye kiya jaata tha, aur gaon ka lambardar lagaan ikattha karta tha.

### H. Venkatasubbiah ka Thesis of Indistinguishability
Aam taur par log sochte hain ki Ryotwari Zamindari se behtar tha, par economic historian [[thinker:H. Venkatasubbiah]] ne sabit kiya ki **1940s aate-aate teeno systems ek jaise shoshankari ho gaye the**. Iska kaaran yeh tha ki:
- Bhaari cash lagaan chukane ke liye kisan ko gaon ke sahukar (moneylender) se karz lena padta tha.
- Jab fasal kharab hoti, toh sahukar British adalat ke zariye kisan ki zameen nilam karwa leta tha.
- Apna hi khet chhootne ke baad purana kisan usi zameen par sahukar ka bataidar ya mazdoor ban jaata tha.
- Is tarah chahe Bengal ka Zamindari ho ya Maharashtra ka Ryotwari, azaadi aate-aate sabhi ilaqon mein kisan ghor karz, begaari aur shoshan mein fans chuka tha, jisse Deccan Riots (1875) aur Tebhaga va Telangana jaise kisan aandolan bhadke.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Colonial Zamindari Model (Cornwallis)',
    rightTitle: 'Colonial Ryotwari Model (Munro)',
    rows: [
      {
        aspect: 'Malikana Haq',
        left: 'Bicholiye zamindaron ko zameen ka qanuni malik banaya gaya.',
        right: 'Seedhe khet jotne wale kisan (ryot) ke naam patta diya gaya.',
      },
      {
        aspect: 'Lagaan Vasooli',
        left: 'Company ko tay permanent tax; kisan ke sath zamindar jo chahe kare.',
        right: 'Sarkar seedhe kisan se fasal ka 50% tak bhaari lagaan leti thi.',
      },
      {
        aspect: 'Bicholiye (Intermediaries)',
        left: 'Sub-infeudation ki lambi ladi (50 darje tak rent lene wale).',
        right: 'Shuruat mein koi nahi, par baad mein sahukar ne zameen chheen li.',
      },
      {
        aspect: 'Aakhiri Natija',
        left: 'Kisan kangaal, kheti mein zero investment aur absentee landlordism.',
        right: 'Karz ke jaal mein fans kar ryot bhi sahukar ka bataidar bankar reh gaya.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Azaadi ke Baad Land Reforms: Teen Ideological Nazariye (P.C. Joshi)

1947 mein azaadi ke waqt desh ke saamne sabse bada sawal tha: is feudal agrarian dhanchenge ko kaise toda jaye? Samaj-shastri [[thinker:P.C. Joshi]] ne dikhaya ki land reforms ko lekar teen alag-alag vichardharayein saamne aayi:

| Ideological Nazariya | Mukhya Sidhhant aur Tarika | Pramukh Netritva & Aandolan | Zameeni Natija aur Samajik Sach |
|---|---|---|---|
| **1. Gandhian Approach** | Trusteeship; ameer zamindar apni marzi se zameen ka hissa daan kare (*bhoo-dan*). | [[thinker:Vinoba Bhave]] (Bhoodan & Gramdan Movement, 1951). | **Failure:** 50 million acre ka target tha, mila sirf 4 million, aur bata 1 million se kam; zyadatar zameen pathrili, banjar ya court case wali thi. |
| **2. Marxist Approach** | Krantikari class war; zamindaron ko hathiyar ke bal par hatakar zameen par kabza karna. | [[thinker:Karl Marx]] paradigm; Naxalbari (1967) aur Telangana revolt (1946–51). | **Localized Asar:** Sarkar ne aandolan daba diya, par isne netaon ko daraya ki agar kanoon nahi banaye toh kranti ho jayegi. |
| **3. Radical Nationalist Approach** | Loktantrik sansad ke kanoon; ceiling laga kar aur bicholiyon ko hatakar zameen baantna. | [[thinker:Jawaharlal Nehru]], Planning Commission, State Assemblies. | **Sarkari Model:** Zamindari toh tooti par unchi jaati ke vidhayakon ne loopholes dhoondh kar zameen bachaa li. |

## Land Reforms ke Chaar Mukhya Pillars

Sanvidhan ke Seventh Schedule ke anusaar **zameen State List (Entry 18) ka vishay hai**. Isliye har state ne apna alag kanoon banaya, jisse poore desh mein alag-alag natije nikle:

1. **Abolition of Intermediaries (Zamindari Khatma):** Yeh land reforms ka sabse safal hissa raha. 1950s ke shuruat mein kanoon pass karke feudal zamindaron ke visheshadhikar chheen liye gaye aur lagbhag **20 se 25 million superior tenants seedhe sarkar ke samparq mein aa gaye**. Begaari khatam hui. Lekin zamindaron ko mota compensation (muavza) diya gaya aur unhe "khud kheti karne" (self-cultivation) ke naam par hazaron acre zameen rakhne ki chhoot mil gayi.
2. **Tenancy Reforms (Bataidari Sudhar):** Iska maksad kisanon ko teen suraksha dena tha: (a) lagaan fasal ke 1/4th ya 1/5th se zyada na ho, (b) zameen se achanak bedakhal na kiya jaye, aur (c) lambe samay tak jotne wale ko malik banaya jaye ("land to the tiller"). **Ulta Asar:** Zamindaron ko darr laga ki agar kisan ke paas kagaz raha toh woh zameen chheen lega, isliye kanoon aane se pehle hi unhone lakhon kisanon ko dande ke bal par bedakhal kar diya aur unhe kachha unrecorded mazdoor bana diya.
3. **Land Ceilings (Zameen ki Hadbandi):** Ek parivar ke paas kitni maximum zameen ho sakti hai, iski limit taye karna aur bachi hui surplus zameen Dalit aur bhoomiheenon mein baantna. **Bhari Failure:** Zamindaron ne kanoon pass hone ki deri ka fayda uthaya aur apne naukar, kutte-billi aur rishtedaaron ke naam farzi registry (*benami transfers*) kar di. Saath hi aam ke bagiche, tea gardens, gausala aur sugar mill ke naam par hazaron bigha zameen ceiling se bacha li.
4. **Consolidation of Holdings (Chakbandi):** Khet ke alag-alag bikhre hue tukdon ko ek jagah jodhna taaki tractor chalana aur tube-well lagana aasan ho sake. Yeh **Punjab, Haryana aur Western UP** mein behad safal raha, jisne Green Revolution ka rasta khola. Par Bihar aur Bengal mein patwari ke bhrashtachar aur kisan ke purani upjao zameen chhootne ke darr se fail ho gaya.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: '1. Bicholiyon ka Ant',
        text: 'Zamindari tooti; 20M kisan seedhe sarkar se jude aur lagan tay hua.',
      },
      {
        label: '2. Tenancy Kanoon',
        text: 'Lagan fix hua; par malikon ne kanoon aate hi bataidaron ko nikal diya.',
      },
      {
        label: '3. Ceiling & Redistribution',
        text: 'Hadbandi lagai; par benami transfers aur bagiche ki chhoot se flop hui.',
      },
      {
        label: '4. Chakbandi (Consolidation)',
        text: 'Bikhre tukde jude; Punjab-Haryana mein Green Revolution ki neev bani.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Samajik aur Rajneetik Asar: Selective Badlaav banam Daliton ka Pichhadapan

Samaj-shastriyon ke analysis se saaf dikhta hai ki Bharat ke land reforms ne purane shahi zamindaron ko toh toda, par sabko barabar zameen nahi di. Isse ek **Selective Agrarian Transformation** hua:

### 1. "Bullock Capitalists" aur Intermediate Kisan Jaatiyon ka Uday
Political scientist [[thinker:Lloyd & Susanne Rudolph]] ne dikhaya ki land reforms ka asli fayda na toh purane Brahmin-Thakur zamindaron ko mila aur na hi Dalit khetihar mazdooron ko — balki **intermediate kisan jaatiyon** ko mila. Inme Western UP ke Jat, Bihar ke Yadav aur Kurmi, Maharashtra ke Maratha, aur Karnataka ke Vokkaliga shamil the. 5 se 15 acre zameen ke pakke malik ban kar inhon-ne parivar ki mehnat aur bailon ki taqat se kheti ko modern banaya aur gaon ki nayi shaktishali class ("Bullock Capitalists") ban gaye.

### 2. Congress ka Patan aur Regional Parties ka Janam
[[thinker:Paul Brass]] ne dikhaya ki kaise land reforms ne desh ki rajneeti badal di. Azaadi ke pehle Congress unchi jaatiyon aur shehri babuon ki party thi. Par jab intermediate kisan jaatiyon ke haath mein zameen aayi, toh unki rajneetik aakankshayein jaagi. [[thinker:Chaudhary Charan Singh]] ke netritva mein kisanon ne apni nayi regional parties banayi (jaise Lok Dal, Samajwadi Party, RJD), jisne 1977 mein pehli baar Central government mein Congress ka ekchhatra raj khatam kiya.

### 3. Asamanta ka Badhna aur Bhoomiheen Mazdooron ki Bebasi
Senior economist [[thinker:Malcolm Adiseshiah]] aur administrative expert [[thinker:N.C. Saxena]] ne bataya ki defensive evictions (zameen bachane ke liye ki gayi bedakhali) ne gaon ke gareebon ki halat aur kharab kar di. Jo kisan pehle surakshit hissedar tha, woh ab din ki dihadi mazdoori par majboor ho gaya. Dalit khetihar mazdooron ko surplus zameen mein se mushkil se 1–2% hissa mila.

### 4. Mahilaon ke Adhikar ki Undekhi
Sociologist [[thinker:S.L. Doshi & P.C. Jain]] aur Walter Fernandes ne dhyan dilaya ki land reform kanoon poori tarah patriarchy (pitrasattatmak) soch par bane the. Zameen ke patte sirf parivar ke purush mukhiya ke naam kiye gaye, jabki khet mein din-bhar kaam karne wali mahila kisan legally bhoomiheen hi reh gayi.

### 5. Regional Farq: Political Will aur Peasant Sangathan
Land reforms ka asar har state mein ek jaisa nahi tha:
- **Behad Safal (Kerala aur West Bengal):** Kerala (1969 Act) aur West Bengal (*Operation Barga* 1978 under Hare Krishna Konar) mein Left-wing kisan sangathanon (Kisan Sabhas) ne zameen par ladai ladi aur 1.4 million bataidaron (*bargadars*) ke naam kanooni register mein darj karwaye.
- **Flop (Hindi Heartland):** Bihar aur Uttar Pradesh mein sarkar aur police bade zamindaron ke dabav mein thi, isliye wahan Ranvir Sena jaise private sena ban gayi aur kanoon kagazon mein dab gaya.`,
  },
  {
    kind: 'keyTerm',
    term: 'Agrarian Class Triad (Malik-Kisan-Mazdoor)',
    meaning:
      'Daniel Thorner ka kisan samajik vargikaran: zameen ke haq aur physical kaam ke aadhar par banaye gaye teen varg — malik, jotne wala kisan, aur mazdoor.',
  },
  {
    kind: 'keyTerm',
    term: 'Thesis of Indistinguishability',
    meaning:
      'H. Venkatasubbiah ka aitihasik nishkarsh ki 1940s tak aate-aate bhaari lagaan aur sahukaron ke karz ke karan Zamindari, Ryotwari aur Mahalwari teeno systems ek jaise shoshankari ban gaye the.',
  },
  {
    kind: 'keyTerm',
    term: 'Bullock Capitalists',
    meaning:
      'Lloyd aur Susanne Rudolph ka shabd 2.5 se 15 acre zameen wale un madhyam kisanon ke liye jinhone parivar ki mehnat se rural economy aur rajneeti par kabza kiya.',
  },
  {
    kind: 'keyTerm',
    term: 'Benami Transfers & Self-Cultivation',
    meaning:
      'Kanooni loopholes jinke zariye zamindaron ne ceiling se bachne ke liye rishtedaaron ke naam zameen kar di ya khud kheti karne ke jhoothe kagaz banwaye.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The hand-mill gives you society with the feudal lord; the steam-mill, society with the industrial capitalist.',
    context: 'Kaise production ke saadhan aur technology hi samajik class structure aur shashan ko taye karte hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'Land reforms weakened traditional feudal aristocracies but empowered middle peasant castes rather than landless labourers.',
    context: 'Azaadi ke baad ke land reforms se kisan jaatiyon ki vargik tarakki aur Daliton ke pichhadapan ka mulyankan.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Integration: Mode of Production aur Class Dynamics',
    body: 'UPSC ke sawaalon mein Land Reforms ko Paper 1 ke Class aur Stratification se jodo. Thorner ka Malik-Kisan-Mazdoor Marx ke class model aur Weber ke status group dono ko reflect karta hai. Ceiling laws ka fail hona Marxist theory (A.R. Desai) ko sahi sabit karta hai ki sarkar shashak varg ke aage ghutne tek deti hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Land Reforms ko 100% Fail mat likhna',
    body: 'Answer likhte waqt emotions mein aakar yeh mat likh dena ki land reforms poori tarah fail ho gaye. Santulan rakho: (1) Zamindari tooti aur 20M kisan azad hue; (2) Tenancy aur Ceiling North India mein kamzor rahe; (3) West Bengal (Operation Barga) aur Kerala mein behtareen safalta mili.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Revision Mnemonic: P.C. Joshi ke 3 Approaches (G-M-R)',
    body: 'Land reforms ke teen dhang yaad rakhne ka formula G-M-R: G = Gandhian (Vinoba Bhave ka Bhoodan, moral appeal); M = Marxist (Naxalbari, kisan bagawat aur zameen par kabza); R = Radical Nationalist (Sarkari kanoon, parliamentary reforms, Nehruvian planning).',
  },
  {
    kind: 'answerBox',
    intro:
      'Azaadi ke baad ke land reforms ne paramparik colonial zamindari ko toda, par iska fayda sirf madhyam kisan jaatiyon ko mila aur Dalit khetihar mazdoor zameen se door rahe.',
    points: [
      'Bicholiyon ka ant: Zamindari abolition ne 20 million kisanon ko seedhe sarkar se joda aur feudal begaari pratha ko khatam kiya.',
      'Intermediate jaatiyon ka uday: Zameen ka malikana haq unchi jaatiyon se nikal kar Jat, Yadav, Kurmi aur Vokkaliga jaise madhyam kisanon ke paas gaya ("bullock capitalists").',
      'Defensive evictions aur mazdoori: Malikon ne kanoon se dar kar bataidaron ko khet se bedakhal kar diya, jisse woh dihadi mazdoor banne par majboor hue.',
      'Ceiling ki nakami: Benami registry aur aam ke bagichon ki chhoot ke chalte desh mein sirf 2% zameen hi dubara banti ja saki.',
      'Dalit aur mahilaon ki undekhi: Bhoomiheen Dalit mazdooron ko rajneetik shakti ke bina zameen nahi mili, aur mahilaon ko patte mein koi haq nahi mila.',
      'Regional farq: West Bengal (Operation Barga) aur Kerala mein peasant mobilization se safalta mili, jabki Bihar-UP mein zamindaron ne kanoon daba diya.',
    ],
    conclusion:
      'Land reforms ne gaon mein shashan karne wali jaatiyon ka chehra toh badal diya, par zameen ki aarthik asamanta aur kisan gareebi ko poori tarah khatam nahi kar sake.',
  },
]

export const topic2Hi = {
  summary,
  mindMap,
  sections,
}
