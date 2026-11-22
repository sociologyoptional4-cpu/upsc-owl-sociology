import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic4HiMindMap: MindMapData = {
  title: 'Paper 2 · Unit 20.4 — Grameen Shram, Bandhua Mazdoori Aur Migration',
  center: 'Rural Labour & Precarity',
  subtitle: 'Kheti Ka Sankat • Neo-Bondage • Footloose Mazdoor • Kheti Ka Streekaran',
  branches: [
    {
      title: 'Agrarian Distress & Karz Ka Bojh',
      color: 'lavender',
      thinkers: ['P. Sainath', 'B.R. Ambedkar', 'Pranab Bardhan', 'Utsa Patnaik'],
      points: [
        'Kheti ka sanrachnatmak sankat: diesel aur beej ki badhti lagat, sasti fasal aur mausam ki maar',
        'Multi-agency karz ka jaal: local mahajan, private micro-finance aur pesticide dealer ka 36–100% byaaj',
        'B.R. Ambedkar: gaon mein Dalit mazdooron par samajik boycott aur aarthik lachari ka shikanja',
        'P. Sainath: kisan aatmhatyaayein kisi individual ki naakami nahi balki policy-driven institutional murder hain',
      ],
    },
    {
      title: 'Jan Breman: Neo-Bondage & Footloose Labour',
      color: 'yellow',
      thinkers: ['Jan Breman', 'T.K. Oommen', 'Gail Omvedt', 'Karl Marx'],
      points: [
        'Purani Hali pratha (pushtaini, lifelong patron-client gulaami) se naye seasonal neo-bondage tak',
        'Peshgi (cash advance): barsaat ke mahinon mein thekedar (mukadam/sardar) se roti ke liye liya gaya advance',
        'Shoshan ke kendra: South Gujarat ke ganna khet aur Punjab-Haryana-NCR ke eent-bhatte (brick kilns)',
        'Bina azaadi ki azaadi: mazdoor formal taur par azaad hai par karz aur bhrasht accounting ke chalte bandhua hai',
      ],
    },
    {
      title: 'Chhipa Hua Bandhua Mazdoori & 1976 Ka Kanoon',
      color: 'mint',
      thinkers: ['G. Haragopal', 'Upendra Baxi', 'B.R. Ambedkar'],
      points: [
        'Bonded Labour System (Abolition) Act 1976: kanooni ban, karz ki maafi aur rehabilitation ka wada',
        'Chhipe hue roop: piece-rate oral contracts, fasal ke baad settlement ka lalach aur armed pehredari',
        'Sarkari denial: District Magistrates bhatte ke maalik aur netaon ke dabav mein bandhua hone se inkar karte hain',
        'Rehabilitation ki naakami: chhoote hue Dalit mazdooron ko zameen ya kaam na milne par wo wapas usi jaal mein phans jaate hain',
      ],
    },
    {
      title: 'Kheti Ka Streekaran & Grameen Asantosh',
      color: 'pink',
      thinkers: ['Bina Agarwal', 'Jayati Ghosh', 'Surinder S. Jodhka', 'Paramjit Singh Judge'],
      points: [
        'Mard shahar gaye: mard mazdoori ke liye shahar nikal gaye; gaon mein auraton ne 70%+ kheti sambhali',
        'Double burden: ghar ka chulha, bachhon aur buzurgon ki dekhbhal ke sath khet mein kudal chalana',
        'Zameen ke patte ka na hona: auraton ke paas <13% zameen ke kanooni patte hain; unhe "kisan" nahi maana jaata',
        'Grameen asantosh: legal MSP guarantee, corporate land acquisition ke khilaf border par historic andolan',
      ],
    },
  ],
}

export const topic4HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u10-02-agrarian-modes-bondage.webp',
    alt: 'P2 Unit 10 infographic: Modes of Production & Rural Bondage — Mode of Production Debate & Rural Labour Precarity',
    caption:
      'Mode of Production Debate & Rural Labour Precarity: Grameen sankat, Jan Breman ke neo-bondage aur kheti ke streekaran (feminisation of agriculture) ka samajshastriya adhyayan.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 20 Visual 02',
  },
  {
    kind: 'md',
    body: `## Samkaleen Bharat Mein Grameen Mazdoor Ka Sankat

Aasaan shabdon mein samjho: gaon ke samajik dhanchhe mein khetihar mazdoor sabse neeche aur sabse lachar sthiti mein khada hai. Sadiyon se chali aa rahi jaati-vyavastha ke chalte unhe zameen ke malkiyat se door rakha gaya; nateeja yeh hua ki **Dalit (Scheduled Castes)**, **Adivasi (Scheduled Tribes)** aur **Most Backward Classes (MBCs)** ke log sirf apni kudal aur shareer ki mehnat par zinda hain.

Aaj ke Bharat mein purane gaon ke aapsi bhaichare aur jajmani suraksha ke dhaage toot chuke hain, aur doosri taraf sheharon mein aisi koi factory ya formal naukri nahi hai jahan inhein izzat se kaam mil sake. Nateeja yeh hai ki grameen mazdoor kheti ke sankat, soodkhori ke jaal, naye dhang ki bandhua mazdoori aur ghumantu (footloose) migration mein phansa hua hai.

## Kheti Ka Sankat Aur Karz Ka Chakravyuh

Senior journalist aur sociologist [[thinker:P. Sainath]] ne dikhaya ki Bharat ke gaon mein jo sankat dikhta hai wo kisi kam baarish ya kismat ka dosh nahi hai; yeh sarkar ki lopsided economic policies ka nateeja hai:

- **Lagat Aur Fasal Ke Daam Ka Faasla:** Diesel, beej aur chemical khad par subsidy khatam hone se kheti ki lagat chaar guna ho gayi, par jab kisan fasal lekar mandi pahunchta hai toh daam achanak gir jaate hain.
- **Micro-Finance Aur Soodkhor Mahajan:** Ghar mein bimaari aane par, buzurg ke antim sanskar ya beti ki shaadi ke dahez ke liye gareeb parivaar private moneylenders aur micro-finance walon se 36% se 100% tak ke byaaj par loan leta hai.
- **Common Property Resources (CPRs) Ka Chheen Jana:** Pehle khetihar mazdoor gaon ki shamilat (gram sabha) zameen par apni bakri-bhains chara leta tha aur jungle se lakdi le aata tha. Jabse gaon ki common zameen real-estate aur udyogon ko bech di gayi, gareebon ka aakhiri sahara bhi chheen gaya.
- **Daliton Par Aarthik Boycott:** Jaisa ki [[thinker:B.R. Ambedkar]] ne kaha tha, gaon jaatiwad aur atyachar ka adda hai. Jab koi Dalit mazdoor kanooni minimum wage maangta hai ya upper caste ki begari karne se mana karta hai, toh dominant castes gaon mein uski *nakabandi* kar deti hain — khet mein kaam band, dukan se ration band aur kuan se paani band, jisse mazboor hokar use gaon chhod kar bhagna padta hai.

## Jan Breman: Footloose Labour Aur "Neo-Bondage" Ka Naya Roop

Dutch sociologist [[thinker:Jan Breman]] ne South Gujarat ke gaon mein 50 saal tak field research karke dikhaya ki kaise purani gulaami badal kar naye capitalism ka hathiyar ban gayi.

### Purani Hali Pratha Se Neo-Bondage Tak

- **Purani *Hali* Pratha:** Harit Kranti se pehle Anavil Brahmin zameendar (*Dhani*) aur tribal Halpati mazdoor (*Hali*) ke beech ek pushtaini rishta hota tha. Yeh shoshankari toh tha, par zameendar mazdoor ko saal-bhar do waqt ki roti, jhopdi aur shadi ka loan deta tha aur bimaari mein bacha leta tha.
- **Modern Neo-Bondage Ka Janm:** Kheti commercial hone ke baad zameendaron ne Halpatis ko nikal phenka aur unke sath purane rishte tod diye. Iski jagah unhone ek naya depersonalised bandhua model banaya jise Breman ne ==Neo-Bondage== kaha.

### Neo-Bondage Ka Kaam Karne Ka Tareeqa

Purane samanti bandagi ke mukable neo-bondage **depersonalised, temporary (seasonal), aur thekedaron ke zariye** chalta hai:

- **Peshgi (Cash Advance) Ka Fanda:** Barsaat ke mahinon mein jab gaon mein koi kaam nahi hota aur ghar mein chulha jalna band ho jaata hai, tab thekedar (*mukadam* ya *sardar*) Odisha ke KBK belt ya Bihar ke gaon mein pahunchta hai. Wo gareeb parivaar ko 20,000 se 50,000 rupaye ka cash advance deta hai.
- **Mausami Gulaami:** Yeh advance lete hi mazdoor agle 6 se 8 mahinon ke liye thekedar ka bandhua ban jaata hai. Poora parivaar — pati, patni aur chhotey bachhey — gaadiyon mein baith kar door South Gujarat ke ganna khet ya Punjab-Haryana ke eent-bhatton (brick kilns) mein bhej diye jaate hain.
- **Piece-Rate Par Shoshan:** Yahan koi ghanta tay nahi hota; 1,000 eent pathne par ya ek truck ganna kaatne par paisa milta hai. Parivaar subah 3:00 baje se raat tak 14–16 ghante thand aur dhoop mein kaam karta hai.
- **Pehredari Aur Farzi Accounting:** Mazdoor plastic ki tirpal ke neeche sote hain jahan na peene ka paani hota hai na toilet. Thekedar ke lathait un par nazar rakhte hain. Season ke aakhir mein thekedar khane-peene ka hisab laga kar farzi diary dikhata hai aur kehta hai ki paisa barabar ho gaya ya tum par abhi bhi karz bacha hai, jisse agle saal wapas aane ka naya advance lena padta hai.
- **Kagazi Azaadi Par Asli Bandagi:** Mazdoor kanooni taur par azaad hai ki season ke baad ghar ja sake, par gareebi aur karz use dobara usi thekedar ke aage hath phailane par majboor karti hai.

| Pehlu | Purani Feudal Bandagi (*Hali* / *Kamia*) | Modern Neo-Bondage (Jan Breman) |
| --- | --- | --- |
| Avadhi (Duration) | Jeevan-bhar aur peedhi-dar-peedhi (baap se bete tak) | Short-term aur mausam ke hisab se (6 se 8 mahine) |
| Samajik Sambandh | Master aur serf ka aamne-saamne ka rishta; protection ka wada | Thekedar (*mukadam*) ke zariye transactional aur impersonal contract |
| Bandhne Ka Zariya | Jaati-vyavastha aur paramparik shadi-byah ka udhaar | Barsaat mein roti ke liye liya gaya cash advance (*peshgi*) |
| Kaam Ki Jagah | Zameendar ka apna gaon aur khet | Door-daraaz ke commercial bhatte, ganna mills aur highways |
| Mazdoor Ki Unit | Akela mard mazdoor jo zameendar ke ghar ka kaam bhi kare | Poora parivaar (pati, patni, bachhey) jo piece-rate par eent banaye |

## Chhipi Hui Bandhua Mazdoori Aur 1976 Ka Kanoon

1976 mein parliament ne ==Bonded Labour System (Abolition) Act== pass karke saari bandhua mazdoori ko gair-kanooni ghoshit kiya aur karz maaf kar diya. Phir bhi yeh bimari zinda kyun hai?

- **Kanooni Chhal (Semantic Disguise):** Malik ab kisi ko "bandhua" nahi bolte; wo ise "advance wage contract" ya "apprentice scheme" (jaise Tamil Nadu ke spinning mills ki badnaam *Sumangali* scheme) kehte hain.
- **Sarkari Afsaron Ka Denial:** District Magistrate aur local police apne zile mein bandhua mazdoori hone se inkar kar dete hain, kyunki FIR darj karne par district ka naam kharab hota hai aur bhatta maalik unke political aqaon ko fund dete hain.
- **Rehabilitation Ki Naakami:** 1976 ke kanoon ke Section 21 ke tehat chhudaye gaye mazdoor ko zameen aur rozgar dena tha. Sarkari taur par mila thoda sa cash kharch ho jaata hai aur zameen sirf kagaz par milti hai. Nateeja yeh ki bhookha mazdoor dobara usi ya kisi doosre thekedar ke paas wapas chala jaata hai.
- **Dalit-Adivasi Vulnerability:** Rescued bandhua mazdooron mein se 90% se zyada Dalit aur Adivasi hote hain jinke paas na legal awareness hai na court ladne ka paisa.

## Kheti Ka Streekaran (Feminisation of Agriculture) Aur Grameen Aakrosh

Bharat ke gaon mein ek bohot bada badlaav aa raha hai jise kheti ka ==Streekaran== (*Feminisation of Agriculture*) kaha jaata hai, aur sath hi kisanon ka aakrosh bhi badh raha hai.

### Kheti Ke Streekaran Ke Kaaran

Feminist samajshastri [[thinker:Bina Agarwal]] aur Jayati Ghosh ne dikhaya ki kheti ab mardon ke bajaye mahilaon ke kandhon par tik gayi hai:

- **Mardon Ka Shehari Migration:** Gaon mein kheti se ghar ka kharcha na chalne par mard shahar mein building banane ya rikshaw chalane chale jaate hain. Gaon mein fasal bona, nindai-gudai, katai aur pashupalan ka saara kaam auratein sambhalti hain.
- **Do-Tarfa Bojh (Double Burden):** Aurat subah paani bharti hai, khana banati hai, bachhon ko sambhalti hai aur din bhar khet mein kamar tod mehnat karti hai.
- **Kisan Ka Darja Na Milna:** 70% se zyada kheti ka kaam mahilaayein karti hain, par desh ki sirf 13% zameen par mahilaon ke naam kanooni patte hain. Patta mard ke naam hone ki wajah se sarkar aurat ko "kisan" nahi maanti; use "unpaid family helper" likha jaata hai, jisse use na bank se loan milta hai na PM-KISAN ka paisa milta hai aur na sukhe ka compensation milta hai.

### Grameen Asantosh Aur Kisan Andolan

Sath hi desh bhar mein kisanon ka gussa ubaal par hai. Surinder S. Jodhka aur Paramjit Singh Judge ne bataya ki 2020–2021 ka Delhi border par kisan andolan kisanon ke astitva ki ladai thi:

- **Corporate Kabze Ka Darr:** Kisanon ko darr tha ki government APMC mandiyan band hone par corporate monopolies unki fasal ko audhe-paune daam par khareedengi.
- **MSP Ki Kanooni Guarantee:** Swaminathan Commission ke $C_2 + 50\%$ formula ke tahat kanooni MSP ki maang par sabhi chhotey aur bade kisan ek manch par aaye.
- **Zameen Bachao Andolan:** Greater Noida ke Bhatta Parsaul se lekar highways tak, expressways aur corporate corridors ke liye sarkari land acquisition ke khilaf gaon-gaon mein ladaai chhid gayi hai. [[link:Ise Paper 2 Unit 8 ke Peasants and Farmers’ Movements se relate karo.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1976',
        title: 'Bonded Labour System (Abolition) Act',
        text: 'Bandhua mazdoori par statutory ban laga, purane karz legally khatam kiye gaye aur rehabilitation ka kanoon bana.',
      },
      {
        year: '1985',
        title: 'Jan Breman — Of Peasants, Migrants and Paupers',
        text: 'South Gujarat ke survey se dikhaya ki purana Hali system toot gaya aur wage precarity shuru hui.',
      },
      {
        year: '1996',
        title: 'Jan Breman — Footloose Labour Landmark Book',
        text: 'Neo-bondage, circular migration aur informal economy mein mazdoor ke shoshan ka theoretical model pesh kiya.',
      },
      {
        year: '2004',
        title: 'Swaminathan Commission (National Commission on Farmers)',
        text: 'C2+50% par legal MSP aur mahila kisanon ko zameen ke patte dene ki historic sifarish ki.',
      },
      {
        year: '2020–2021',
        title: 'Delhi Border Ka Itihasik Kisan Andolan',
        text: 'Teen farm laws ke khilaf kisanon ka shantipoorn satyagraha jiske aage sarkar ko kanoon wapas lene pade.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Purani Feudal Bandagi (Hali / Kamia)',
    rightTitle: 'Modern Capitalist Neo-Bondage (Jan Breman)',
    rows: [
      {
        aspect: 'Bandagi Ki Avadhi',
        left: 'Pushtaini aur jeevan-bhar (baap se bete tak chalne wali)',
        right: 'Mausam ke hisab se short-term (har saal 6 se 8 mahine)',
      },
      {
        aspect: 'Samajik Sambandh',
        left: 'Aamne-saamne ka patron-client rishta; zameendar khana aur suraksha deta tha',
        right: 'Thekedar (*mukadam*) ke zariye chalta formal cash contract',
      },
      {
        aspect: 'Fande Ka Tareeqa',
        left: 'Purani jaati-parampara aur shaadi-byah ka purana udhaar',
        right: 'Barsaat mein zinda rehne ke liye liya gaya cash advance (*peshgi*)',
      },
      {
        aspect: 'Kaam Ki Zameen',
        left: 'Zameendar ka apna gaon aur pushtaini khet',
        right: 'Door-daraaz ke commercial bhatte aur ganna khet jahan koi janta nahi',
      },
      {
        aspect: 'Mazdoor Ka Parivaar',
        left: 'Akela mard mazdoor jo khet aur haveli ka kaam sambhale',
        right: 'Pati, patni aur bachhey sab milkar piece-rate par eent banate hain',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour',
    meaning:
      'Jan Breman ka concept jo un laakhon ghumantu mazdooron ko darshata hai jo gaon mein kheti na hone par sheharon ke informal sector mein bhatakne par majboor hote hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Neo-Bondage',
    meaning:
      'Capitalist kheti aur udyogon mein thekedaron dwara cash advance (peshgi) dekar karwayi jane wali mausam-aadhrit bandhua mazdoori, jo eent-bhatton aur ganna mills mein aam hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Feminisation of Agriculture',
    meaning:
      'Mardon ke shehari migration ke baad kheti ka 70%+ mehnat ka kaam mahilaon ke kandhon par aa jana, par unhe kanooni taur par zameen ka patta ya kisan ka darja na milna.',
  },
  {
    kind: 'keyTerm',
    term: 'Triadic Debt-Labour Lockin',
    meaning:
      'Barsaat mein advance dena, transport karna aur farzi hisab dikha kar mazdoor ko har saal usi thekedar ka bandhua banaye rakhne ka chakravyuh.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'What is a village but a sink of localism, a den of ignorance, narrow-mindedness and communalism?',
    context: 'Dikhane ke liye ki kyun Dalit khetihar mazdoor gaon mein atyachar aur shoshan jhel kar shehar ki taraf bhagte hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The capital-relation presupposes a complete separation between the workers and the ownership of the conditions for the realization of their labour.',
    context: 'Samjhane ke liye ki be-zameen mazdoor apni mehnat bechne aur neo-bondage mein phansne par kyun majboor hota hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The traditional patron-client bonds of the village have eroded into purely contractual and often ruthless economic calculations.',
    context: 'Gaon ke purane aapsi jajmani rishton ke toot kar nange cash shoshan mein badalne par roshni daalte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Jan Breman Ka Neo-Bondage: Exam Scoring Formula',
    body: 'UPSC jab bhi bonded labour ya migration par sawaal kare, toh sirf 1976 ke kanoon ka ratta mat lagao. Jan Breman ka Gujarat aur brick kilns ka fieldwork likho: purani Hali pratha aur naye neo-bondage ka comparison table banao aur peshgi advance ka role samjhao.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Kheti Ke Streekaran Ko "Women Empowerment" Mat Samajhna!',
    body: 'Yeh galti kabhi mat karna ki kheti mein mahilaon ka badhna unka empowerment hai. Bina Agarwal aur Jayati Ghosh ne saaf kaha hai ki yeh lachari ka migration hai, jisme aurat par double burden aata hai par use zameen ka patta aur kisan ka darja nahi milta.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Bandhua Mazdoori Zinda Kyun Hai? 4-D Formula',
    body: 'Bandhua mazdoori ke 4 kaaran yaad rakho: Disguised contracts (advance wage kehna), Denial by administration (babu aur police ka inkar), Deficient rehabilitation (chhoote hue mazdoor ko zameen na milna), aur Dalit/Adivasi caste lachari.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein grameen shramik kheti ke gambhir sankat, chhipe hue neo-bondage aur lachari-bhare circulatory migration ke chakravyuh mein phansa hua hai.',
    points: [
      'Kheti ke sankat ke mukhya kaaran: Subsidy khatam hone se lagat badhi, mausam aur daam ke jhatkon ne chhote kisanon ko soodkhor mahajanon ke 36–100% byaaj wale jaal mein dhakela (P. Sainath).',
      'Jan Breman ka neo-bondage: Purana pushtaini Hali rishta toot gaya aur uski jagah thekedaron (mukadam) dwara barsaat mein diye gaye cash advance (peshgi) se brick kilns aur ganna khet mein seasonal gulaami shuru hui.',
      '1976 ke kanoon ki naakami: Bonded Labour Abolition Act ke bawajood administrative denial aur chhoote hue Dalit mazdooron ko zameen na milne ke chalte mazdoor dobara usi thekedar ke paas wapas laut jaate hain.',
      'Kheti ka streekaran: Mardon ke shehari migration ke baad mahilaayein 70%+ kheti karti hain, par 13% se kam zameen ke patte hone ke chalte unhe kisan ka darja aur bank loan nahi milte (Bina Agarwal).',
      'Grameen asantosh: Stagnant farm income aur corporate contract farming ke darr se Swaminathan Commission ki C2+50% MSP guarantee aur land acquisition ke khilaf border protests jaise kisan andolan khade hue.',
    ],
    conclusion:
      'Grameen shramikon ki halat tabhi sudhregi jab land reforms poore honge, migrant mazdooron ka universal registration hoga aur mahila kisanon ko zameen ke kanooni adhikar milenge.',
  },
]
