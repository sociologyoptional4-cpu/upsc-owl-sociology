import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.1 · Samajik Parivartan Ke Siddhant (Theories of Social Change)',
  center: 'Social Change Theories',
  subtitle: 'Evolutionary • Cyclical • Functionalist • Conflict & Modernity',
  branches: [
    {
      title: 'Evolutionary (Kramik Vikas)',
      color: 'lavender',
      thinkers: ['Auguste Comte', 'Herbert Spencer', 'L.H. Morgan', 'Émile Durkheim'],
      points: [
        'Comte 3 Stages Law: Theological se Metaphysical aur Positive stage tak vikas',
        'Spencer Social Darwinism: saral homogeneity se jatil heterogeneity ka universal niyam',
        'Morgan: Savagery -> Barbarism -> Civilization tak material tarakki',
        'Durkheim: aabadi aur moral density badhne se Mechanical se Organic solidarity',
      ],
    },
    {
      title: 'Cyclical (Chakriya Siddhant)',
      color: 'yellow',
      thinkers: ['Oswald Spengler', 'Arnold Toynbee', 'Vilfredo Pareto', 'Pitirim Sorokin'],
      points: [
        'Spengler Decline of the West: sabhi sabhyataon ki 1,000 saal ki organic aayu',
        'Toynbee: Challenge and Response; Creative Minority banam Dominant Minority',
        'Pareto Circulation of Elites: satta mein Sheron (Lions) aur Lomadiyon (Foxes) ka chakkar',
        'Sorokin Cultural Dynamics: Ideational, Idealistic aur Sensate ka pendulum',
      ],
    },
    {
      title: 'Functionalist (Santulan)',
      color: 'mint',
      thinkers: ['Talcott Parsons', 'William F. Ogburn', 'Wilbert Moore', 'Neil Smelser'],
      points: [
        'Parsons Moving Equilibrium: differentiation, adaptive upgrading aur value generalization',
        'Ogburn Cultural Lag: bhautik technology tez badalti hai, non-material culture piche chhoot jata hai',
        'Dharana: samaj mein santulan rehta hai aur parivartan kramik v samjhauta-aadhrit hota hai',
        'Aalochana: sthapit vyavastha ka samarthan, sangharsh aur achanak kranti ko nazarandaz karna',
      ],
    },
    {
      title: 'Conflict & Modernity Dialectic',
      color: 'pink',
      thinkers: ['Karl Marx', 'Ralf Dahrendorf', 'Lewis Coser', 'Yogendra Singh'],
      points: [
        'Marx: utpadan ke sadhanon aur sambandhon ke virodhabhas se varg sangharsh aur kranti',
        'Dahrendorf: sansthaon mein adhikar (authority) ka batwara aur niyamak badlaav',
        'Parampara aur Aadhunikatva: Yogendra Singh ka orthogenetic v heterogenetic model',
        'Postmodernists: Lyotard aur Baudrillard ka progress ke grand meta-narrative par prashna',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u10-01-social-change-theories.webp',
    alt: 'P1 Unit 10 infographic: Sociological Theories of Change — Evolutionary, Cyclical, Functionalist & Conflict Trajectories',
    caption: 'Evolutionary, Cyclical, Functionalist & Conflict Trajectories (Sociological Theories of Change).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 10 Visual 01',
  },
  {
    kind: 'md',
    body: `## Samajik Parivartan (Social Change) Ka Asli Matlab Kya Hai?

Aasaan shabdon mein samjho: samajik parivartan ka matlab kisi vyakti ka personal badlaav ya chhota-mota fashion nahi hai. Iska arth hai samaj ke mool dhaancho, sansthaon, niyam-kanoon, aur parivarik v aarthik sambandhon mein aane wala gehra aur sthayi badlaav. Jaise kheti-badi wale gaon se factory-aadhrit shahri samaj banna, ya jaati-vyavastha ke dabdabe ke beech loktantrik matadhikar ka aana — yeh sabhi samajik parivartan ke thos roop hain.

Sociology ka janam hi tab hua jab French Revolution aur Industrial Revolution ne puraane European samaj ko jad se hila diya. Tab samajshastriyon ke samne do bade sawal the: kya samaj hamesha aage hi badhta hai (Evolution), kya yeh mausam ki tarah chakkar lagata hai (Cycles), ya phir aapsi takraav aur kranti se badalta hai (Conflict)?

## 1. Evolutionary Theories: Saralta Se Jatilta Ki Taraf

Shuruati samajshastriyon ne biology ke vikasvadi siddhant se prerna lekar yeh mana ki samaj kramik roop se saral dhang se jatil aur unnat avastha ki or badhta hai.

- **Auguste Comte Ka Teen Avasthaon Ka Niyam (Law of Three Stages):** [[thinker:Auguste Comte]] ne kaha ki manav soch aur samaj teen charano se guzar kar vikasit hota hai:
  1. *Theological Stage:* Jahan har ghatna ko bhagwan ya devi-shaktiyon ki marzi maana jata tha.
  2. *Metaphysical Stage:* Jahan abstract darshanik vicharon aur prakritik adhikaaron par charcha shuru hui.
  3. *Positive (Scientific) Stage:* Jahan vigyan, thos praman aur prayog ke aadhar par samaj chalta hai.
- **Herbert Spencer Aur Social Darwinism:** Spencer ne Charles Darwin ke siddhant ko samaj par lagoo kiya. Unka mool niyam tha ki sabhi cheezein ==saral aur ek-jaise dhaancho (homogeneity) se vishisht v alag-alag dhaancho (heterogeneity)== ki or badhti hain. Jaise pehle *Simple Society* (bina kisi neta ke aadi-manav toliyan), phir *Compound Society* (kabile ke sardar), uske baad *Doubly Compounded* (rajshahi aur nagar-rajya), aur aakhir mein *Trebly Compounded* (aadhunik industrial desh).
- **Lucius Henry Morgan:** Morgan ne takneeki vikas ke aadhar par unilinear raasta bataya: ==Savagery (Jangli avastha) → Barbarism (Barbar avastha) → Civilization (Sabhyata)==.
- **Émile Durkheim Ka Sanrachnatmak Vikas:** [[thinker:Émile Durkheim]] ne bataya ki aabadi ka aakaar (Volume) aur aapsi milan ki tevrata (Moral Density) badhne se samaj ==Mechanical Solidarity== (ek-jaise niyam, sakht dand) se badal kar ==Organic Solidarity== (shram vibhajan aur aapsi nirbharta) mein dhal jata hai.

| Chintak | Mool Vikasvadi Raasta | Parivartan Ka Mukhya Kaaran | Aakhiri Avastha |
| --- | --- | --- | --- |
| Auguste Comte | Theological → Metaphysical → Positive | Manav gyan aur soch ki pragati | Vaigyanik industrial samaj |
| Herbert Spencer | Simple → Compound → Trebly Compounded | Sanrachna ka vibhedikaran aur talmel | Audyogik sanvida-aadhrit vyavastha |
| L.H. Morgan | Savagery → Barbarism → Civilization | Utpadan ke auzaar aur takneek | Aadhunik sabhyata |
| Émile Durkheim | Mechanical Solidarity → Organic Solidarity | Aabadi aur bheed-bhaad ka tevar | Jatil shram vibhajan aur Organic ekta |

[[trap:Unilinear evolution ko bina soche sach mat maan lena. In siddhanton par sabse bada aakraman yeh hai ki yeh Eurocentric the — inhone Western capitalism ko sabse shreshth maana aur baaki deshon ko pichhda bataya.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Unilinear Aur Multilinear Mein Farak Yaad Rakho',
    body: 'Classical unilinear vicharak maante the ki sabhi samajon ko ek hi seedhi chadhni padegi. Lekin modern neo-evolutionists (Julian Steward, Leslie White) ne dikhaya ki har samaj ka paryavaran, itihaas aur sthiti alag hoti hai — isliye alag-alag raaste (Multilinear Evolution) bante hain.',
  },
  {
    kind: 'md',
    body: `## 2. Cyclical Theories: Sabhyataon Ka Janam, Jawani Aur Patan

Evolutionary chintakon ke viprit, chakriya vicharak yeh nahi maante the ki badlaav ka matlab hamesha tarakki hi hota hai. Jaise ritu badalti hai ya ped ke patte jhadte hain, vaise hi sabhyatayein janam leti hain, vikasit hoti hain aur phir nasht ho jati hain.

### Oswald Spengler: Sabhyata Ki Umar
[[thinker:Oswald Spengler]] ne apni prasiddha kitaab *The Decline of the West* (1918) mein likha ki har sabhyata ek jeev ki tarah hoti hai jiski umar lagbhag 1,000 saal hoti hai. Yeh chaar mausamon se guzarti hai: **Basant** (janam v dharmik shraddha), **Garmi** (yuva aashavaad aur darshan), **Patjhad** (paripakwata aur shahar), aur **Sardi** (thandi aadhunik dimaagdari, be-rooh megacities aur vinash). Spengler ne chetavani di ki Western samaj apni sardi mein pahunch chuka hai.

### Arnold Toynbee: Challenge and Response
[[thinker:Arnold Toynbee]] ne 21 sabhyataon ka adhyayan karke kaha ki sabhyata ka marzi se girna tay nahi hota. Sabhyata ke samne hamesha chunoitiyan (challenges) aati hain:
- **Creative Minority:** Jab shasak varg mein nayi soch aur rachnatmak kshamata hoti hai, toh log khushi se unka sath dete hain aur sabhyata aage badhti hai.
- **Dominant Minority:** Lekin jab shasak apni rachnatmakta kho baithte hain, toh woh dande ke bal par police aur fauj ke sahare raj karte hain. Toynbee ne kaha: *"Sabhyataon ka qatl nahi hota, woh aatmhatya karti hain."*

### Vilfredo Pareto: Satta Ka Chakravyuh (Circulation of Elites)
[[thinker:Vilfredo Pareto]] ke anusaar, itihaas mein satta hamesha do tarah ke logon ke beech ghoomti rehti hai:
- **Lomadi (Foxes - Class I Residue):** Chalak, kootnitigya aur tod-jod karne wale neta jo dimag aur chalaki se raj karte hain. Lekin unme sahas ki kami hoti hai.
- **Sher (Lions - Class II Residue):** Himmatwale, kattar aur fauji anushasan wale neta jo takat ke bal par raj karte hain. Samay ke sath unki zidd unka patan karti hai.
- Samaj mein yeh chakkar chalta rehta hai — lomadiyan sheron ko hatati hain, aur phir sher laut aate hain.

### Pitirim Sorokin: Cultural Dynamics Ka Pendulum
[[thinker:Pitirim Sorokin]] ne kaha ki samaj ek ghadi ke pendulum ki tarah teen sanskritik sthitiyon ke beech jhulata rehta hai:
1. **Sensate Culture:** Jahan kewal bhautik such, indriyon ka anand, paise aur science ko hi sach maana jata hai.
2. **Ideational Culture:** Jahan aatmik shanti, bhagwan ki bhakti aur tyag ko shreshth maana jata hai.
3. **Idealistic Culture:** Dono ka behtareen santulan (golden mean).
Jab Sensate samaj hadd se zyada lalchi aur khokhla ho jata hai, toh samaj wapas aatmikta (Ideational) ki or lautne lagta hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Circulation of Elites',
    meaning: 'Pareto ka niyam ki itihaas ameer aur taqatwar varg ka kabristan hai, jahan lomadi (chalak) aur sher (balshali) baari-baari satta mein aate hain.',
    thinkerSlug: 'vilfredo-pareto',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Lag',
    meaning: 'Ogburn ka siddhant ki bhautik takneek tez gati se badalti hai jabki sanskritik kanoon aur moolya peeche chhoot jate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Moving Equilibrium',
    meaning: 'Parsons ka niyam ki samaj baahari dhabbon ko pacha kar naye santulan par pahunchta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Tradition-Modernity Dialectic',
    meaning: 'Yogendra Singh aur Rudolphs ka model jisme parampara aur aadhunikatva ek doosre ko naye dhang se dhalte hain.',
    thinkerSlug: 'yogendra-singh',
  },
  {
    kind: 'md',
    body: `## 3. Functionalist Dristikon: Santulan Aur Sudhar

Functionalist chintak samaj ko ek sharir ki tarah dekhte hain. Yahan badlaav kisi ladai-jhagde se nahi, balki naye mahaul mein khud ko dhalne (adaptation) ke liye hota hai taaki vyavastha bani rahe.

### Talcott Parsons: Moving Equilibrium Aur Sanrachnatmak Vibhedikaran
[[thinker:Talcott Parsons]] ne bataya ki badlaav chaar kadiyon se guzarta hai:
- **Structural Differentiation:** Pehle ek hi sanstha saare kaam karti thi. [[eg:Puraane samay mein sanyukt parivar hi kheti sikhata tha, doctor ka kaam karta tha aur dharmik shiksha deta tha; aaj school, hospital aur factory ne alag-alag zimmedari baant li hai.]]
- **Adaptive Upgrading:** Nayi vishisht sansthaayein zyada kshamata ke sath kaam karti hain.
- **Inclusion:** Piche chhoote vargon ko nagrikta aur aarthik adhikaar diye jate hain.
- **Value Generalization:** Sabhi alag logon ko jode rakhne ke liye sanvidhan aur maanav adhikaar jaise sarvabhoumik moolya apnaye jate hain.

### William F. Ogburn: Cultural Lag Ka Siddhant
[[thinker:William F. Ogburn]] ne culture ke do hisse bataye:
1. **Material Culture:** Gaadi, mobile phone, internet, factory.
2. **Non-Material Culture:** Paramparik soch, kanoon, parivarik moolya.
Material culture rocket ki speed se daudta hai, lekin soch bailgaadi ki gati se chalti hai. Beech ke is fasle ko ==Cultural Lag== kehte hain. [[eg:AI aur deepfake technology sabke haath mein aa gayi, lekin privacy aur copyright ke kanoon abhi tak poori tarah taiyar nahi hain.]]

## 4. Conflict Theories: Virodhabhas Aur Kranti

Marxist chintak functionalist santulan ko jhootha maante hain. Unke anusaar badlaav aapsi sahmatise nahi, balki shoshan aur varg-sangharsh se aata hai.

- **Karl Marx Aur Historical Materialism:** [[thinker:Karl Marx]] ne siddha kiya ki jab utpadan ki nayi takneek (**Forces of Production**) puraani maalik-mazdoor vyavastha (**Relations of Production**) ke bheetar nahi samati, toh varg sangharsh hota hai. Majdoor kranti karke puraani satta ko ukhad fenkte hain aur naya yug shuru hota hai.
- **Ralf Dahrendorf:** Dahrendorf ne bataya ki aadhunik samaj mein keval paise ki ladai nahi hai; har sanstha mein adhikar (authority) rakhne wale aur aadesh manne walo ke beech sangharsh hota hai.
- **Lewis Coser:** Coser ne dikhaya ki sangharsh hamesha bura nahi hota; yeh samaj ke dabav ko nikalne wala safety-valve banta hai aur kanooni sudhar karwata hai.

## 5. Parampara Aur Aadhunikatva Ka Aapsi Sambandh

Puraane Western vidvaan sochte the ki aadhunik hone ke liye parampara ko poori tarah mitana padega. Bharat ke samajshastriyon ne is dharana ko kharij kar diya.

[[thinker:Yogendra Singh]] ne apni pustak *Modernization of Indian Tradition* mein do tarah ke badlaav bataye:
- **Orthogenetic Changes:** Jo sanskriti ke andar se ubhre (jaise Bhakti aandolan, Arya Samaj sudhar).
- **Heterogenetic Changes:** Jo baahar ke sampark se aaye (angrezi shiksha, railway, kanoon).
Singh ne dikhaya ki Bharat mein parampara khatam nahi hui, balki aadhunik dhang se dhal gayi. [[thinker:Lloyd Rudolph]] aur [[thinker:Susanne Rudolph]] ne ise ==Modernity of Tradition== kaha — jaise puraani jaatiyan ab chunav ladne aur reservation maangne wale modern pressure groups ban gayi hain. [[link:Ise Paper 2 ke Unit 1 Perspectives on Indian Society aur Unit 6 Modernization of Indian Tradition se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Evolutionary & Functionalist Model',
    rightTitle: 'Conflict & Dialectical Model',
    rows: [
      {
        aspect: 'Mukhya Driver',
        left: 'Aabadi ka badhna, shram vibhajan aur aapsi sahmati',
        right: 'Aarthik virodhabhas, shoshan aur varg sangharsh',
      },
      {
        aspect: 'Gati Aur Swaroop',
        left: 'Dheemi, kramik aur santulan-banane wali pragati',
        right: 'Achanak aane wali, todfod bhari aur krantikari chhalang',
      },
      {
        aspect: 'Sangharsh Ka Role',
        left: 'Ek bimaari ya temporary dharra jise theek karna hai',
        right: 'Itihaas ka asal engine aur badlaav ki asli taqat',
      },
      {
        aspect: 'Antim Manzil',
        left: 'Sabhi ka aadhunik audyogik loktantra mein dhalna',
        right: 'Shoshan ka ant (Communism) ya adhikar ke naye samikaran',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Strategy: Unilinear Models Ki Kamzoriyan Kaise Likhein?',
    body: 'UPSC ke 2024 aur 2017 ke prashnon mein unilinear theories ki seemayein puchi gayi thin. Answer mein Spencer aur Comte ki kami batate hue Julian Steward ka multilinear model aur Yogendra Singh ka Bharatiya model zaroor quote karein.',
  },
  {
    kind: 'answerBox',
    intro: 'Unilinear theories of social change ki pramukh seemayein (limitations):',
    points: [
      'Eurocentric Bias: Yeh model Europe ke audyogik vikas ko hi aakhiri sach maanta hai aur baaki sabhyataon ko anpadh ya pichhda karar deta hai.',
      'Ek Hi Raaste Ka Bhram: Sabhi deshon ka itihaas, bhoogol aur sthiti alag hoti hai; sab ek hi patri par nahi chal sakte.',
      'Leapfrogging Ki Undekhi: Pichhde samaj seedhe aadhunik takneek apnate hain (jaise Bharat ne landline ka lamba intazar kiye bina seedhe 4G/5G mobile apnaya).',
      'Patan Aur Ulte Badlaav Ko Na Samajhna: Unilinear model sabhyataon ke vinash, dharmik kattarvaad ya paryavaran vinash jaise ulte daur ko explain nahi kar sakta.',
      'Aakhiri Manzil Ka Jhooth: Samaj kabhi bhi sthir (static) nahi hota; Comte ka positive stage ya Marx ka communism aane ke baad bhi badlaav chalta rehta hai.',
    ],
    conclusion: 'Aadhunik samajshastra ek-tarfa seedhi ke bajaye vibhinn sanskritik v aarthik raaston (multiple modernities) ko maanta hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Samajik parivartan ke siddhant yeh samjhate hain ki manav samaj samay ke sath kaise aur kyun badalta hai. Classical vikasvadi (Comte, Spencer, Morgan, Durkheim) ne ise saral se jatil ki or ek-tarfa pragati maana. Chakriya chintakon (Spengler, Toynbee, Pareto, Sorokin) ne vikasvadi daave ko nakaar kar dikhaya ki sabhyatayein janam leti hain aur unka patan bhi hota hai. Functionalists (Parsons, Ogburn) ne badlaav ko moving equilibrium aur cultural lag ke madhyam se dekha. Conflict chintakon (Marx, Dahrendorf, Coser) ne bataya ki aarthik virodh aur varg sangharsh hi itihaas ka asli engine hain. Bharat jaise vikasasheel samaj mein badlaav parampara aur aadhunikatva ke aapsi taalmel (Yogendra Singh) se hota hai.',
  mindMap,
  sections,
}
