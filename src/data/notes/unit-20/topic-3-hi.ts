import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3HiMindMap: MindMapData = {
  title: 'Paper 2 · Unit 20.3 — Kheti Mein Badalte Utpadan Ke Tareeqe',
  center: 'Mode of Production Debate',
  subtitle: 'Marxist Schema • Bhaduri vs Rudra vs Patnaik • Technology & Bazaar • Karz Ka Jaal',
  branches: [
    {
      title: 'Marxist Schema & Colonial Itihaas',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Daniel Thorner', 'Paresh Chattopadhyay', 'Hamza Alavi'],
      points: [
        'Mode of Production: forces of production (zameen, beej, machine) + relations of production (ownership, shoshan)',
        'Itihasik sawal: azaadi ke baad Bharat ki kheti feudal (samanti) thi ya capitalist (punjivadi)?',
        'Hamza Alavi: Colonial Mode of Production — kheti ka surplus British rajshahi ko bheja gaya, industry nahi bani',
        'Azaadi ke baad: super-modern tractors ke sath purani bataidari aur bandhua mazdoori ka ajeeb mel',
      ],
    },
    {
      title: 'The Great Debate: Teen Bade Nazariye',
      color: 'yellow',
      thinkers: ['Amit Bhaduri', 'Ashok Rudra', 'Utsa Patnaik', 'Pranab Bardhan'],
      points: [
        'Amit Bhaduri (Semi-Feudal thesis, West Bengal): bataidari, hamesha ka karz, interlocked markets, technology ka virodh',
        'Ashok Rudra (Capitalist thesis, Punjab): dihadi mazdoor, heavy machinery investment aur munafey ke liye kheti',
        'Utsa Patnaik (Labour Exploitation Criterion): pre-capitalist transitional phase aur formal subsumption of labour',
        'Triadic market interlinkage: zameendar hi khet deta hai, wahi khad ka karz deta hai aur saste mein fasal khareedta hai',
      ],
    },
    {
      title: 'Technology, Marketisation & Chhote Kisan',
      color: 'mint',
      thinkers: ['Geof Wood', 'Yogendra Singh', 'Bina Agarwal', 'Ashok Gulati'],
      points: [
        'Naye saadhan: rented tractors, submersible tubewells, Bt cotton beej aur chemical pesticides',
        'Corporate dakhla: PepsiCo potato aur broiler poultry jaisi contract farming aur e-NAM digital mandis',
        'Adverse incorporation (Geof Wood): mausam aur keede ka saara risk kisan ka, saara munafa corporate company ka',
        'Grameen garibi: kheti lagat (input cost) aasmaan chhoone aur fasal barbaad hone se kisan aatmhatya par majboor',
      ],
    },
    {
      title: 'Purani Bandagi Aur Soodkhori Kyun Zinda Hai?',
      color: 'pink',
      thinkers: ['Amit Bhaduri', 'Pranab Bardhan', 'Jan Breman', 'Max Weber'],
      points: [
        'Zameendar technology kyun rokte hain? Kheti sudharne se kisan ka karz toot jayega, aur soodkhori ka munafa chala jayega',
        'Interlocked contracts: loan chukane ke liye kisan ko market rate se 30% saste mein zameendar ko gehun bechna padta hai',
        'Dual economy: ek taraf Punjab-Gujarat ki agro-capitalist kheti, doosri taraf Bihar-Odisha ka semi-feudal karz',
        'Max Weber lens: formal contract ke peeche purana jaati-dabav aur majboori kaam karti hai',
      ],
    },
  ],
}

export const topic3HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u10-02-agrarian-modes-bondage.webp',
    alt: 'P2 Unit 10 infographic: Modes of Production & Rural Bondage — Mode of Production Debate & Rural Labour Precarity',
    caption:
      'Mode of Production Debate & Rural Labour Precarity: Semi-feudal bataidari aur interlocked karz se lekar capitalist kheti aur contract farming tak ka safar.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 20 Visual 02',
  },
  {
    kind: 'md',
    body: `## Kheti Mein Utpadan Ka Tareeqa (Mode of Production) Kya Hai?

Aasaan shabdon mein samjho: Marxist sociology mein ==Mode of Production== ka matlab hota hai ki koi samaj apni roti-rozi aur zarooratein paida karne ke liye kaisa aarthik aur samajik dhancha banata hai. Iske do hisse hote hain: pehla **Forces of Production** (yaani zameen, kudal, beej, tractor, paani, science aur mazdoor ki mehnat) aur doosra **Relations of Production** (yaani zameen ka maalik kaun hai, mazdoor kaun hai, aur ameer tabqa gareeb ki mehnat se apna munafa ya surplus kaise nikaalta hai — lagan se, soodkhori se, ya factory ki mazdoori se).

Azaadi ke baad Bharat ki kheti feudal (samanti) thi ya capitalist (punjivadi)? Is sawaal ne Bharat ke samajshastra aur economics mein ek bohot badi behas ko janm diya jise ==Indian Mode of Production Debate== (1969–1980s) kaha jaata hai.

Yeh behas aaj bhi zaroori hai, kyunki aaj ke Bharat mein ek taraf drone se dawa chhidakne wali corporate contract farming dikhti hai, aur doosri taraf wahi purana mahajan ka karz aur bataidar kisan ki aatmhatya dikhti hai.

## The Indian Mode of Production Debate

1960 ke aakhiri saalon mein *Economic and Political Weekly (EPW)* patrika mein shuru hui is behas mein teen bade scholars ne alag-alag daawe kiye.

### 1. Amit Bhaduri: Semi-Feudal Mode of Production

West Bengal ke 26 gaon ka adhyayan karke [[thinker:Amit Bhaduri]] (1973) ne kaha ki East India ki kheti na toh poori tarah feudal hai na capitalist; yeh ek ==Semi-Feudal Mode of Production== hai jiske chaar mukhya khambhe hain:

- **Bataidari (Sharecropping / *Bargadari*):** Kisan ke paas apni zameen nahi hoti. Wo zameendar ke khet par kheti karta hai aur fasal ka 50% ya usse zyada hissa lagan ke roop mein zameendar ko de deta hai.
- **Kisan Par Hamesha Ka Karz (Perpetual Indebtedness):** Chunki kisan ke hisse mein thoda sa hi anaaj bachta hai, isliye fasal aane se pehle ke 4 mahinon mein apne bachhon ka pet bharne ke liye use zameendar se hi mehange byaaj par anaaj aur cash udhaar (*khoraki* loan) lena padta hai, jis par saal ka 50% se 100% tak byaaj lagta hai.
- **Zameendar Ki Do-Tarfa Taqat:** Yahan zameendar hi khet ka maalik hai aur wahi gaon ka sabse bada soodkhor mahajan (moneylender) bhi hai. Is do-tarfa taqat se ==Interlocked Markets== banti hain (zameen + karz + fasal ka bazaar ek hi aadmi ke haath mein).
- **Zameendar dwara Technology Ka Virodh:** Bhaduri ne ek hairan karne wala sawaal poocha: Zameendar apne khet mein tubewell laga kar paidawar double kyun nahi karta? Unhone jawab diya ki agar kheti mein paidawar do-guni ho gayi, toh kisan ka pet bhar jayega aur wo karz lena band kar dega! Zameendar ko kheti ke anaaj se zyada munafa soodkhori ke byaaj se milta tha, isliye zameendar ne jaan-boojh kar kheti ko modern hone se roka taaki kisan hamesha uska ghulam bana rahe!

### 2. Ashok Rudra: Agrarian Capitalism Ka Uday

Bhaduri ki baat ko kaat-te hue [[thinker:Ashok Rudra]] ne Punjab aur Western UP ke gaon ka survey karke kaha ki yahan koi samantwad nahi bacha hai; yahan ek pakka ==Capitalist Mode of Production== aa chuka hai.

- **Capitalist Kisan:** Landlord ab ghar baith kar aaram nahi karta; wo tractor par baith kar khud kheti karta hai (*self-cultivation*).
- **Dihadi Mazdoor Aur Machine:** Wo batai par khet nahi deta, balki dihadi mazdooron ko cash dekar khet mein lagata hai aur kheti ke munafey se combine harvester aur tubewell khareedta hai.
- **Do-Vargiya Samaj:** Rudra ne kaha ki gaon mein ab do hi mukhya class hain — ek taraf **Capitalist Farmers** (bade ameer kisan) aur doosri taraf **Khetihar Mazdoor** (landless agricultural wage labourers).

### 3. Utsa Patnaik: Pre-Capitalist Transition Aur E-Criterion

Marxist scholar [[thinker:Utsa Patnaik]] ne Bhaduri aur Rudra dono ko adhoora bataya aur ek naya formula diya:

- **Labour Exploitation Criterion (E-Criterion):** Patnaik ne kaha ki zameen ke size se kisan ka varg tay nahi hota. Unhone formula banaya: ek kisan kitne mazdooron ka shoshan karta hai ya kitni parivaar ki mehnat use karta hai. Is aadhar par unhone landlords, rich peasants, middle peasants, small peasants aur landless labourers mein varg banaye.
- **Formal vs. Real Subsumption:** Unhone kaha ki bazaar aane se kheti par capital ka asar toh hua hai par yeh sirf *Formal Subsumption* hai. Zameendar kisan ko kheti sudharne ke liye nahi balki saste mein chusne ke liye use karte hain. Isliye Bharat ki kheti ek lambe ==Pre-Capitalist Transitional Phase== mein phansi hui hai.

| Scholar | Adhyayan Ka Kshetra | Mode of Production Ka Naam | Shoshan Ka Mukhya Zariya |
| --- | --- | --- | --- |
| Amit Bhaduri | West Bengal / East India | Semi-Feudal Mode of Production | Soodkhori (usury), lagatar karz, interlocked markets |
| Ashok Rudra | Punjab / North-West India | Capitalist Mode of Production | Dihadi mazdooron se surplus value nikalna, farm reinvestment |
| Utsa Patnaik | Pan-India / Haryana | Pre-Capitalist Transitional Phase | Formal subsumption of labour, rent aur merchant profit |
| Hamza Alavi | Post-Colonial Subcontinent | Colonial Mode of Production | British raj dwara kheti ka surplus lootna, industry na lagana |

## Technology, Bazaar Aur Chhote Kisan Ki Garibi

1990 ke economic reforms ke baad kheti mein modern technology aayi — rented tractors, submersible pump, hybrid Bt Cotton beej aur chemical dawaiyan. Sath hi PepsiCo (aaloo chips) aur corporate poultry jaise contract farming models aaye. Lekin is badli hui technology ne 86% chhote kisanon ki garibi aur aatmhatya ko badha diya.

### Chhote Kisan Par Badhti Garibi Ka Kaaran

Sociologist Geof Wood ise ==Adverse Incorporation== kehte hain — yaani kisan global capitalist market mein jud toh gaya hai, par aisi sharton par jahan uski barbadi pakki hai:

- **Lagat (Input Cost) Aasmaan Par:** Pehle beej aur gobar ghar ka hota tha. Ab hybrid beej, chemical khad aur spray bazaar se cash mein khareedna padta hai.
- **Risk Kisan Ka, Munafa Company Ka:** Contract farming mein agar mausam kharab hua ya keeda lag gaya (jaise Bt cotton par Pink Bollworm), toh fasal barbaad ho jaati hai par beej aur khad company apna pura paisa leti hai. Agar fasal achhi bhi hui, toh company aaloo ka size ya moisture check karke fasal reject kar deti hai.
- **Karz Ka Chakravyuh:** Bank se chhote kisan ko loan nahi milta, isliye wo local beej-khad ke dealer (*arhtiya*) se 24% se 36% byaaj par udhaar leta hai. Ek baar fasal kharab hone par kisan aisi soodkhori ke jaal mein phans jaata hai jisse nikalne ka koi rasta nahi bachta, jo aage chal kar Vidarbha, Marathwada aur Telangana mein kisan aatmhatyaon ka kaaran bana. [[eg:Maharashtra ke Yavatmal mein 2 acre ka kisan Bt cotton lagane ke liye 40,000 rupaye per acre ka karz leta hai; baarish na hone par fasal sookh jaati hai aur beej dealer ke karz ke darr se kisan zehar kha leta hai.]]

## Purani Samanti Bandagi Aur Interlocked Markets Kyun Zinda Hain?

Sochne wali baat yeh hai ki mobile UPI aur internet ke zamaane mein bhi purani soodkhori aur bandhua mazdoori kyun zinda hai?

- **Triadic Market Interlocking:** [[thinker:Pranab Bardhan]] aur Amit Bhaduri ke mutabiq, gaon mein koi azaad bazaar nahi hota. Wahan ek hi dabang zameendar teenon cheezon ko aapas mein baandh deta hai:
  1. **Zameen Ka Bazaar:** Wahi zameendar kisan ko khet batai par deta hai.
  2. **Karz Ka Bazaar:** Wahi kisan ko khad aur beej ke liye sood par paisa deta hai.
  3. **Fasal Ka Bazaar:** Shart yeh hoti hai ki fasal katne ke baad kisan mandi nahi ja sakta; use zameendar ko hi mandi ke rate se 20% se 30% saste mein anaaj bechna padega apna karz chukane ke liye.
- **Corporates dwara Risk Shift:** Badi corporate companies kheti ki zameen khud nahi khareedteen aur na mazdoor rakhteen, kyunki kheti mein sookhe aur baadh ka bohot khatra hota hai. Wo contract farming ke zariye saara mausam ka risk chhote kisan ke matthe daal deti hain aur khud safe munafa kamati hain.
- **Jaati-Varg Ka Gathjod:** Dalit aur pichhde kisanon ke paas shahar mein naukri pane ka koi rasta nahi hota. Koi doosra option na hone ki wajah se wo gaon ke usi dabang caste ke zameendar ke karz mein phans kar bandhua jaise halaat mein jeene par majboor rehte hain.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1969',
        title: 'Ashok Rudra Ne EPW Debate Shuru Ki',
        text: 'Punjab se empirical data dekar kaha ki Bharat mein capitalist kisan aur wage labour ka daur shuru ho chuka hai.',
      },
      {
        year: '1973',
        title: 'Amit Bhaduri Ka Semi-Feudal Model',
        text: 'West Bengal mein bataidari, hamesha ka karz aur zameendar dwara technology rokne ke chaar khambhe samjhaye.',
      },
      {
        year: '1976',
        title: 'Utsa Patnaik Ka E-Criterion',
        text: 'Labour Exploitation Criterion banaya aur kaha ki kheti pre-capitalist transitional daur mein atki hui hai.',
      },
      {
        year: '1982',
        title: 'Hamza Alavi — Colonial Mode of Production',
        text: 'Samjhaya ki British colonialism ne kheti ka surplus imperial centre ko bhej kar gaon ko backward banaye rakha.',
      },
      {
        year: '1995–Ab Tak',
        title: 'WTO, Bt Cotton Aur Contract Farming Ka Daur',
        text: 'GM crops aur beej-dealer credit se kheti input-heavy hui, jisse chhote kisanon mein aatmhatyaon ka sankat badha.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Semi-Feudal Mode (Amit Bhaduri)',
    rightTitle: 'Capitalist Kheti (Ashok Rudra)',
    rows: [
      {
        aspect: 'Munafey Ka Mukhya Zariya',
        left: 'Lagan (rent) aur soodkhori ke byaaj se ghulam banana',
        right: 'Hired wage labour ki mehnat se surplus value nikalna',
      },
      {
        aspect: 'Mazdoor Ka Roop',
        left: 'Bataidar (*bargadar*) jo karz ke bojh se zameendar se bandha hai',
        right: 'Azaad mobile mazdoor jo daily cash dihadi par kaam karta hai',
      },
      {
        aspect: 'Technology Ka Nazariya',
        left: 'Virodh: kheti sudhregi toh kisan ka karz toot jayega',
        right: 'Apnana: tractor, tubewell aur harvester mein andhadhund investment',
      },
      {
        aspect: 'Bazaar Ka Swaroop',
        left: 'Interlocked markets: zameen, karz aur fasal ek hi maalik ke haath mein',
        right: 'Open commercial mandis aur profit ka kheti mein re-investment',
      },
      {
        aspect: 'Mukhya Kshetra',
        left: 'Eastern Gangetic plains (West Bengal, Bihar, Odisha)',
        right: 'North-Western India (Punjab, Haryana, Western UP, Coastal Andhra)',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Mode of Production',
    meaning:
      'Marxist theory mein forces of production (tools, zameen, shram) aur relations of production (ownership aur shoshan ke rishte) ka aapas mein jurav.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Interlocked Markets',
    meaning:
      'Gaon ki aisi mandiyan jahan zameen ka patta, khad ka karz aur fasal ki khareed teeno ek hi dabang zameendar ke haath mein bandhe hote hain, jisse kisan bargain nahi kar pata.',
  },
  {
    kind: 'keyTerm',
    term: 'Labour Exploitation Criterion (E-Criterion)',
    meaning:
      'Utsa Patnaik ka mathematical formula jo parivaar ki mehnat aur hired mazdoor ki mehnat ke anupaat se kisan ke class ko naapta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Adverse Incorporation',
    meaning:
      'Geof Wood ka concept jo dikhata hai ki kaise chhota kisan modern capitalist mandi mein jud toh jaata hai par saara risk uske matthe aata hai aur sara munafa company le jaati hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The hand-mill gives you society with the feudal lord; the steam-mill, society with the industrial capitalist.',
    context: 'Samjhane ke liye ki utpadan ke saadhan badalne se samaj ke varg aur taqat ke rishte kaise badal jaate hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'The agrarian transition in India reflects a complex synthesis of traditional caste hierarchies with emerging capitalist market relations.',
    context: 'Dikhane ke liye ki modern contract farming purani jaati vyavastha ko mitati nahi balki usi ke kandhe par sawaar hoti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Strategy: Mode of Production Debate Ke Teen Mukhya Pillars',
    body: 'Jab bhi UPSC Mode of Production Debate par sawaal puche, toh teenon thinkers ko saaf-saaf cover karo: Amit Bhaduri (West Bengal, Semi-feudalism, usury), Ashok Rudra (Punjab, Agrarian Capitalism, wage labour) aur Utsa Patnaik (Pre-capitalist transition, E-criterion). Sath mein Hamza Alavi ka Colonial Mode of Production zaroor jodna.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Bharat Ko Sirf "Feudal" Ya "Capitalist" Mat Kaho',
    body: 'Yeh galat conclusion mat do ki poora Bharat capitalist ban gaya ya abhi bhi feudal hai. Bharat ka agrarian structure kshetriya roop se vibhajit hai: Punjab-Gujarat mein capitalist kheti hai, jabki Bihar-Odisha mein semi-feudal debt interlocking aur nayi corporate contract farming ek sath chal rahi hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Zameendar Ne Tubewell Kyun Nahi Lagaya? (Bhaduri Ka Formula)',
    body: 'Bhaduri ka sabse important point yaad rakho: Semi-feudal zameendar ne modern technology isliye roki kyunki paidawar badhne se kisan aatmanirbhar ho jata aur zameendar ka 100% byaaj wala soodkhori ka dhandha band ho jata!',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein kheti ke utpadan ke tareeqon par behas yeh dikhati hai ki kya azaadi ke baad Bharat ek aadhunik punjivadi kheti bana ya fir samanti shoshan ke jaal mein uljha raha.',
    points: [
      'Semi-feudal thesis (Amit Bhaduri): West Bengal ke adhyayan se dikhaya ki zameendar bataidari aur soodkhori se kisan ko bandhua banate hain aur technology ko jaan-boojh kar rokte hain.',
      'Capitalist thesis (Ashok Rudra): Punjab mein dikhaya ki kisan direct self-cultivation karte hain, tractor aur tubewell mein munafa reinvest karte hain aur wage labour se kheti karwate hain.',
      'Pre-capitalist transition (Utsa Patnaik): Labour Exploitation Criterion (E-criterion) ke zariye saabit kiya ki mandi aane ke bawajood formal subsumption of labour hai aur poora transformation nahi hua.',
      'Technology aur chhote kisan ki garibi: Bt cotton aur chemical fertilizer ne kheti lagat aasmaan par pahuncha di; "adverse incorporation" (Geof Wood) ke chalte sara mausam ka risk kisan ka aur munafa input-dealers aur corporates ka raha.',
      'Interlocked markets ki sthirta: Ek hi zameendar zameen ka patta deta hai, khad ka karz deta hai aur fasal saste mein khareed leta hai; yahi triadic link contract farming ke sath milkar garibi ko banaye rakhta hai.',
    ],
    conclusion:
      'Bharat ki kheti ek aisa ajeeb gathjod hai jahan hyper-modern corporate technology aur purani samanti jaati-soodkhori ek doosre ko mazboot karti hain.',
  },
]
