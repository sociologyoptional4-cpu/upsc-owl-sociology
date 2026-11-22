import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 14.2 · Features of Caste System',
  center: 'Caste System Ke Lakshan',
  subtitle: 'Attributional vs Interactional • Jajmani Ka Patan • Non-Hindu Caste • Modern Continuance',
  branches: [
    {
      title: 'Attributional vs Interactional',
      color: 'lavender',
      thinkers: ['G.S. Ghurye', 'M.N. Srinivas', 'McKim Marriott'],
      points: [
        'Attributional: Endogamy aur pustaini kaam jaise sthir gunon ki soochi',
        'Interactional: Khan-paan, seva aur taqat ke dynamic len-den ka adhyayan',
        'Kitabi nazariya shastron ko dekhta hai; field view zameeni mukabla pakadta hai',
        'Marriott: Coded-substance ke aadan-pradan se tay hoti hai jati seema',
      ],
    },
    {
      title: 'Jajmani System Ka Khel',
      color: 'yellow',
      thinkers: ['William Wiser', 'Harold Gould', 'Thomas Beidelman'],
      points: [
        'Jajman (patron) aur Kamin (sevadar) ke beech pustaini anaaj-based rishta',
        'Wiser ka functionalist bhaichara vs Beidelman ka feudal shoshan',
        'Cash economy, Green Revolution aur shehri migration ne Jajmani todi',
        'Pustaini ghulami ki jagah modern contractual daily wage labour ne li',
      ],
    },
    {
      title: 'Discrete Castes & Non-Hindu Caste',
      color: 'mint',
      thinkers: ['Dipankar Gupta', 'Imtiaz Ahmad', 'Surinder Jodhka'],
      points: [
        'Gupta: Single hierarchy nahi, discrete castes horizontal antar par chalti hain',
        'Muddled hierarchies: Beech ki jaatiyon mein koi ek-doosre ko uncha nahi manta',
        'Muslim samaj mein batwara: Ashraf (khandani), Ajlaf (kamgar), Arzal (dalit)',
        'Sikh Jat kisan vs Mazhabi; Kerala aur Tamil Nadu ke Dalit Christians',
      ],
    },
    {
      title: 'Caste Ka Zinda Rehna Aur Badlaav',
      color: 'pink',
      thinkers: ['Rudolph & Rudolph', 'Rajni Kothari', 'Harish Damodaran'],
      points: [
        'Caste khatam nahi hui; substantialization se political pressure group bani',
        'Rudolph & Rudolph: Caste associations ne loktantrik hissedari badhayi',
        'Caste capitalism: Vyapar aur industry mein biradari ka social capital chalta hai',
        'Shaadi websites ke filters aur shehron mein kiraye ke makanon mein bhedbhav',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u04-02-untouchability-annihilation.webp',
    alt: 'Features, Jajmani and Untouchability infographic showing structural shifts and non-Hindu caste',
    caption:
      'Caste ka modern roop: traditional Jajmani gaon ki aapsi nirbharta se nikal kar discrete rajneetik pressure groups, non-Hindu social stratification aur digital caste networks tak ka safar.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 14 Visual 02',
  },
  {
    kind: 'md',
    body: `## Caste Ki Zinda Haqeeqat: Kitabi Niyamon Se Lekar Modern Rajneeti Tak

Aasaan shabdon mein samjho: Agar kisi aam insaan se poocho ki caste kya hai, toh woh kahega ki apni hi biradari mein shadi karna ya purane zamane ka kaam-dhandha. Par jab ek samajshastri parde ke peeche dekhta hai, toh pata chalta hai ki caste ek hi waqt mein sanskritik pehchan, aarthik sansadhanon par kabza aur chunaav jeetne ka sabse bada hathiyar hai. Factory, metro aur loktantra aane ke baad bhi caste khatam nahi hui, balki naye roop dhal kar aur mazboot ho gayi.

Caste system ke asali lakshanon ko samajhne ke liye samajshastra ne do alag raaste chune. Ek taraf yeh bahas hui ki kya caste purane shastron ke sthir lakshanon ki soochi hai ya gaon ke rozmarra ke len-den ka khel; doosri taraf purane Jajmani gaon ke tootne, gair-Hindu dharmon mein caste ke asar, aur loktantra mein caste ke political dabav samuh banne ki partal ki gayi.

## Methodological Divide: Attributional vs Interactional Approaches

Samajshastri caste ke lakshanon ko do mukhtalif chashmon se dekhte hain:

### 1. Attributional Approach (Lakshan-Aadharit Nazariya)
[[thinker:G.S. Ghurye]] dwara shuru kiya gaya aur baad mein [[thinker:Louis Dumont]] dwara aage badhaya gaya yeh nazariya manta hai ki caste sthir, dharmik aur sanskritik lakshanon ka ek jhund hai. Yeh caste ko ek band aur shastron par tika system manta hai.
- **Mukhya Focus:** Caste ke sthir gunon ki pehchan karna—jaise endogamy, pustaini pesha, hierarchy, khan-paan par rok, aur shuddhata-ashuddhata ke niyam.
- **Data Ka Srot:** Sanskrit Dharmashastra, Smritis, colonial gazetteers aur unchi jaatiyon ke granth.
- **Samajshastriya Dhang:** Yeh dekhta hai ki dharmik niyam ke mutabiq caste ko *kaisa hona chahiye*.

### 2. Interactional Approach (Len-Den Aadharit Nazariya)
[[thinker:M.N. Srinivas]], [[thinker:André Béteille]], aur [[thinker:McKim Marriott]] jaise field sociologists ne is nazariye ko aage badhaya. Inka manna tha ki caste shastron se nahi, balki gaon ke zameeni len-den aur aamne-saamne ke vyavahar se samjhi ja sakti hai.
- **Mukhya Focus:** Dynamic aur sthaniya len-den—jaise kaun kiske haath ka kachha ya pakka khana khata hai, kisse paani leta hai, aur zameen aur rajneetik taqat ritual darje ko kaise mod deti hai.
- **Data Ka Srot:** Gaon mein lambe waqt tak rehna (participant observation) aur zameeni survey.
- **Samajshastriya Dhang:** Dikhata hai ki hierarchy sthir nahi, balki har gaon mein taqat aur daulat ke aadhar par roz tay hoti hai.

| Aayam | Attributional Approach | Interactional Approach |
| --- | --- | --- |
| **Mukhya Thinkers** | G.S. Ghurye, Louis Dumont, Célestin Bouglé | M.N. Srinivas, André Béteille, McKim Marriott |
| **Paddhati (Method)** | Indology, granthon ka adhyayan, census data | Gaon ka fieldwork, participant observation |
| **Hierarchy Ka Roop** | Single, pan-India, band aur sthir | Sthaniya, lacheela, aur aapas mein ladta hua |
| **Secular Power Ka Role** | Dharmik shuddhata ke aage goun (secondary) | Sabse ahem; zameen aur rajneeti darja badal deti hain |
| **Mukhya Sankalpana** | Caste ke chhe structural attributes | Dominant Caste, transactional gift aur food exchange |

## Jajmani System: Gaon Ka Bhaichara Ya Feudal Shoshan?

Purane Bharat ke gaon mein caste system ko aarthik sahara ==Jajmani system== se milta tha. Yeh kheti karne wale patron parivaaron (*Jajman*) aur unhe seva ya dastkari dene wali kamgar jaatiyon (*Kamin* ya *Purjan*) ke beech ka ek pustaini, gair-bazari aarthik aur ritual rishta tha.

- **Functionalist Nazariya (William Wiser):** Apni kitab *The Hindu Jajmani System* (1936) mein Wiser ne ise ek sundar, aapsi sahyog wala parivaarik tana-bana bataya jahan har jati apna pustaini dharm (*swadharma*) nibhati thi aur badle mein anaaj, kapda aur ghar banane ki jagah milti thi.
- **Conflict Critique (Thomas Beidelman, Kathleen Gough):** Apni kitab *A Comparative Analysis of the Jajmani System* (1959) mein Beidelman ne functionalist bholepan ko dhwast kar diya. Unhone sabit kiya ki Jajmani gaon ke zameendaron ka banaya ek shoshankari feudal hathiyar tha, jahan karz aur zameen ke bal par nichli jaatiyon ko sadiyon tak pustaini bandhua mazdoor banaye rakha gaya.

### Jajmani Ka Patan Kyun Hua?
Pichhle 50 saalon mein Jajmani system lagbhag poori tarah khatam ho chuka hai:
1. **Paison Ki Arthavyavastha (Cash Economy):** Customary anaaj (*faslana*) ki jagah nagad mazdoori aayi, jisse pustaini ritual bandhan toot gaye.
2. **Factory Ka Saamaan:** Plastic ke bartan, readymade kapde aur modern machines ne kumhar, julaha aur teliyon ka kaam cheen liya.
3. **Green Revolution:** Badi kheti karne wale kisano ne customary rishton ki jagah market contract par din ki dihadi mazdoori shuru kar di.
4. **Shehron Ki Taraf Palayan:** Dalit aur kamgar yuva gaon ke apman se bachne ke liye shehron ke factory aur construction clusters mein chale gaye. [[eg:Punjab ya Western UP mein ab Dalit mazdoor Jat zameendar ke ghar pustaini begar karne ke bajaye brick-kiln ya shehri dihadi contract chunna pasand karte hain.]]

## Dipankar Gupta Ka Model: Discrete Castes Aur Muddled Hierarchies

Pehle mana jata tha ki poore Bharat mein ek hi seedhi hai jisme sabhi jaatiyan apni jagah janti hain. Apni kitab *Interrogating Caste* (2000) mein [[thinker:Dipankar Gupta]] ne is ek-tarfa hierarchy ko poori tarah nakar diya:

- **==Discrete Castes==:** Jaatiyan kisi ek seedhi ke dande nahi hain, balki alag-alag band cultural dweep hain. Har jati ke paas apni katha (*Jati Purana*) hai jo uske poorvajo ki veerta, shreshthata aur pavitrata ka bakhan karti hai.
- **==Muddled Hierarchies==:** Upar ke Brahmin aur neeche ke Dalit ko chhodkar beech ki tamam jaatiyon ka darja uljha hua (muddled) hai. Koi bhi madhyam jati doosri ko uncha nahi manti; sabhi khud ko baraabari ya aage manti hain. [[eg:North India mein Jaat, Gujjar aur Yadav teeno khud ko kshatriya vanshaj maante hain, aur koi bhi doosre ko apne se uncha maanne ko taiyar nahi hai.]]

## Gair-Hindu Samudaayon Mein Caste Ke Roop

Chahe Islam, Sikhism aur Christianity sidhhant ke roop mein janm-aadharit bhedbhav ko kharij karte hon, par Bharat ke samajik vatavaran ne in dharmon ke andar bhi caste jaisi daraarein paida kar di hain.

### 1. Bharatiya Muslim Samaj Mein Stratification
Sociologist [[thinker:Imtiaz Ahmad]] (*Caste and Social Stratification among Muslims in India*, 1973) ke shodh ne dikhaya ki Muslim samaj teen hisson mein banta hai:
- **Ashraf (Unche Khandan Ke):** Jo videshi ya Arab/Central Asian aagman ka daawa karte hain (Sayyid, Sheikh, Mughal, Pathan).
- **Ajlaf (Clean Dastkar Converts):** Bharat ki dastkar jaatiyon se convert hue log—jaise julaha (*Ansari*), darzi (*Idrisi*), aur kasai (*Qureshi*).
- **Arzal (Dalit Converts):** Ashprishya jaatiyon se convert hue log—jaise safai-karmi (*Halalkhor*) aur Lalbegi, jo aaj bhi alag kabristan aur samajik bhedbhav jhelte hain.
[[eg:Aaj ka Pasmanda Muslim aandolan Ashraf dabdabe ke khilaf Ajlaf aur Arzal musalmanon ke haq aur reservation ke liye aawaz utha raha hai.]]

### 2. Sikh Samaj Mein Caste
Guru Nanak ke barabari ke updeshon ke bawajood, Punjab mein kheti aur zameen ke aadhar par gehra bhedbhav hai ([[thinker:Surinder Jodhka]] aur Paramjit Singh Judge ki studies):
- **Jat Sikh:** Zameen ke maalik jo Shiromani Akali Dal aur gaon ke gurdwaras par dabdaba rakhte hain.
- **Mazhabi Aur Ramdasia Sikh:** Dalit sikh jo gaon ke kinare alag bastiyon mein rehte hain aur jinhone apne alag Mazhabi Gurdwaras aur Ravidassia Dera banaye hain.

### 3. Isai Samaj Mein Caste
Kerala aur Tamil Nadu mein Syrian Christians khud ko Brahminical vanshaj maante hain aur Dalit Christians ke saath roti-beti ka rishta nahi rakhte (George Alexander ki study). Yahan tak ki girjagharon mein baithne aur kabristan mein dafnane ke alag intezam dekhe gaye hain.

## Modern Bharat Mein Caste Ka Tikna Aur Badlaav

Caste aazad Bharat mein kyun khatam nahi hui? Kyunki caste ne apna purana ritual khol utar kar modern rajneeti aur aarthik taqat ka roop dharan kar liya hai.

- **Politicisation of Caste (Rajni Kothari):** *Caste in Indian Politics* (1970) mein Kothari ne dikhaya ki sirf rajneeti jati-vadi nahi banti, balki caste rajneetik ban jaati hai. Chunav jeetne ke liye voton ki sankhya chahiye, isliye bikhri hui jaatiyan bade horizontal vote bank ban gayi hain.
- **Caste Associations (Rudolph & Rudolph):** *The Modernity of Tradition* (1967) mein dikhaya gaya ki Nadar Mahajana Sangam ya Jat Mahasabha jaise caste sangathan modern pressure groups ban kar college seat, quota aur bank loan haasil karte hain.
- **==Substantialization of Caste==:** Jaisa ki [[thinker:Louis Dumont]] ne bhi note kiya, caste ab aapsi nirbharta wali vertical hierarchy nahi rahi, balki aapas mein ladne wale horizontal ethnic-like blocks (*caste-as-substance*) ban chuki hai.
- **Caste Capitalism (Harish Damodaran):** *India's New Capitalists* (2008) mein Damodaran ne dikhaya ki modern private business biradari ke bharose aur social capital par chalta hai—Marwari aur Chettiar se lekar Kamma, Reddy aur Patidar business networks tak.
- **Digital Daur Mein Caste:** Aaj ke Shaadi.com aur BharatMatrimony par sub-caste aur gotra ke filters hain, aur shehron ke posh apartments mein vegetarian ke naam par Dalit kirayedaron ko makan nahi diya jata. [[link:Ise Paper 1 Unit 7 ke Social Mobility aur Paper 2 Unit 7 ke Class Structure se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Caste (Organic Hierarchy)',
    rightTitle: 'Modern Transformed Caste (Segmentary Competition)',
    rows: [
      {
        aspect: 'Organizational Axis',
        left: 'Gaon ke andar aapsi vertical nirbharta',
        right: 'Poore rajya aur desh ke star par horizontal rajneetik labbandi',
      },
      {
        aspect: 'Aarthik Aadhar',
        left: 'Gair-bazari Jajmani ties aur pustaini anaaj hissa',
        right: 'Market contract, modern professions aur caste capitalism',
      },
      {
        aspect: 'Mukhya Vichardhara',
        left: 'Pavitra dharmik shuddhata, karma aur ashuddhata taboos',
        right: 'Loktantrik hissedari, nagrik adhikar aur jati aatmasamman',
      },
      {
        aspect: 'Rajneetik Roop',
        left: 'Gaon ki choupal par dominant caste ki informal panchayat',
        right: 'Formal caste associations, party vote banks aur federations',
      },
      {
        aspect: 'Shadi Aur Pehchan',
        left: 'Gaon ke buzurgon dwara zabardasti lagayi gayi endogamy',
        right: 'Desh bhar ke digital matrimonial networks aur biradari sabhaen',
      },
    ],
  },
  {
    kind: 'timeline',
    items: [
      {
        year: 'Pre-Colonial Daur',
        title: 'Local Jati & Jajmani Ties',
        text: 'Caste gaon ki kheti aur pustaini dastkari ke batware par chalti thi jise zameendar chalate the.',
      },
      {
        year: '1901',
        title: 'Risley Ka Census Ranking',
        text: 'Herbert Risley ne jaatiyon ko kramik shreni mein baanta, jisse jati sabhaon aur Sanskritization daawon ki baadh aayi.',
      },
      {
        year: '1950',
        title: 'Sanvidhanik Barabari',
        text: 'Article 15, 16 aur 17 ne bhedbhav aur ashprishyata ko kanoonan jurm banakar sabhi ko barabari di.',
      },
      {
        year: '1960s–1970s',
        title: 'Caste Associations Ka Uphar',
        text: 'Rudolph & Rudolph aur Kothari ne darshaya ki caste associations loktantrik rajneeti ke danda ban gaye.',
      },
      {
        year: '1990',
        title: 'Mandal Commission Ka Amal',
        text: 'OBCs ke liye 27% aarakshan ne jati pehchan ko sarkari sansadhan haasil karne ka mukhya hathiyar banaya.',
      },
      {
        year: '21st Century',
        title: 'Caste Capitalism & Digital Networks',
        text: 'Caste biradari ke business networks, matrimonial apps aur shehri housing segregation mein zinda hai.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Interactional Approach',
    meaning:
      'Samajshastra ka zameeni tareeqa jo caste hierarchy ko shastron ke bajaye rozmarra ke khane, paani aur taqat ke aamne-saamne ke vyavahar se samajhta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Jajmani System',
    meaning:
      'Purane gaon ka pustaini, gair-bazari aarthik tana-bana jahan zameendar patron (Jajman) kamgar jaatiyon (Kamin) se seva ke badle anaaj aur rashan deta tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Discrete Castes',
    meaning:
      'Dipankar Gupta ka sankalp jiske mutabiq jaatiyan kisi ek seedhi ke dande nahi, balki alag-alag aatmasamman aur veerta ki kathaon par chalne wale samuh hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Substantialization of Caste',
    meaning:
      'Caste ka purani gaon ki vertical nirbharta se badalkar modern loktantra mein horizontal, mukabla karne wale political ethnic blocks mein tabdeel hona.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote:
      'Modernisation in India has not displaced caste; rather, caste has adapted itself functionally to democratic institutions and modern communications.',
    context: 'Post-independence Bharat mein caste ke badalte sansthagath roop aur tikaupan ko darshate waqt.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Caste Persistence Par Answer Ka Structure (2024 / 2015 PYQs)',
    body: 'Jab sawaal aaye ki caste modern Bharat mein kyun zinda hai, apne answer ko 4 pillars mein baanto: (1) Rajneetik labbandi (Kothari ka politicisation of caste, vote banks), (2) Aarthik capital (Damodaran ka caste capitalism, biradari credit), (3) Samajik sansthaen (Shaadi websites par endogamy, gated societies), aur (4) Psychological identity (Gupta ka jati garv aur Jati Puranas).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Gair-Hindu Caste Par Galti Mat Karna',
    body: 'Kabhi yeh mat likhna ki doosre dharmon mein caste Hinduism jaisi hi hai. Yeh saaf karo ki Islam, Sikhism aur Christianity shastriya roop se barabari maante hain, par zameeni samajik sachhai mein endogamy, alag bastiyan aur bhedbhav (Pasmanda Muslim, Mazhabi Sikh, Dalit Christian) paya jata hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Beidelman vs Wiser Mnemonic',
    body: 'Wiser = Welfare & Harmony (Jajmani ka sundar functionalist roop). Beidelman = Bondage & Exploitation (Marxist-conflict nazariya jisme kisan ka shoshan dikhaya gaya). Dono ko aamne-saamne likhne se examiner poore marks deta hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Modern caste system kamzor ya khatam nahi hua; balki isne purana ritual roop chhod kar horizontal mukabla karne wale rashtriya dabav samuhon ka naya avatar le liya hai.',
    points: [
      'Attributional se interactional: Pavitrata ke kitabi paimanon se aage nikal kar zameeni taqat, zameen aur sansadhanon ke aamne-saamne ke faislon par aadharit hua.',
      'Purani arthavyavastha ka ant: Cash economy, Green Revolution aur shehron ki taraf palayan ne pustaini Jajmani patron-client bandhanon ko tod diya.',
      'Discrete pehchanon ka ubhaar: Single hierarchy toot gayi aur har jati apne garv, swatantra utpatti katha aur horizontal dabdabe par zinda hai.',
      'Gair-Hindu samudaayon mein phelav: Muslim samaj mein Ashraf-Ajlaf-Arzal batwara aur Sikh samaj mein Jat-Mazhabi bhedbhav yeh dikhata hai ki caste cultural boundary paar kar chuki hai.',
      'Chunavi aur market renewal: Adult franchise, Mandal aarakshan aur biradari business cartels ne caste ko loktantrik hissedari aur daulat kamane ka sabse tezi se chalne wala hathiyar bana diya.',
    ],
    conclusion:
      'Caste aaj isliye zinda nahi hai ki log anpadh ya pichhde hain, balki isliye zinda hai kyunki modernity ne caste ko taqat aur daulat haasil karne ke naye hathiyar thama diye hain.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Caste system ke buniyadi lakshanon ki partal: attributional aur interactional methods ka antar, Jajmani ka patan, discrete castes aur gair-Hindu caste formations, saath hi modern Bharat mein caste ke badalte roop aur tikaupan ka vishleshan.',
  mindMap,
  sections,
}
