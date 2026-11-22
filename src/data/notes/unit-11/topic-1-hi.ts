import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 11.1 · Indology (G.S. Ghurye)',
  center: 'Indological Nazariya',
  subtitle: 'Prachin Granth • Sanskritik Mel • Theoretical Pluralism',
  branches: [
    {
      title: 'Buniyaad aur Orientalism',
      color: 'lavender',
      thinkers: ['William Jones', 'Max Müller', 'Henry Maine', 'P.V. Kane'],
      points: [
        'Asiatic Society of Bengal (1784) ne Sanskrit granthon ka systematic adhyayan shuru kiya',
        'Angrezi afsaron ne raaj chalane aur Bharat ko static dikhane ke liye shastras ka sahara liya',
        'Bharatiya rashtravadi vidwano ne shastron se apni sanskritik pehchan ka bachav kiya',
        'Maanta hai ki prachin granthon mein hi vartamaan samajik sanrachna ki chaabi chhipi hai',
      ],
    },
    {
      title: 'Ghurye ka Yogdaan',
      color: 'yellow',
      thinkers: ['G.S. Ghurye', 'Herbert Risley', 'Irawati Karve', 'K.M. Kapadia'],
      points: [
        'Caste and Race in India (1932): Jaati vyavastha ke 6 mukhya lakshan bataye',
        'Herbert Risley ke nasalvadi siddhant ko anthropometry aur data se kharij kiya',
        'Scheduled Tribes (1943): Adivasiyon ko "backward Hindus" maana, algaavvaad ka virodh kiya',
        'Indian Sadhus (1953): Sadhu-mathon ko desh ko jodane wale sanskritik pull ke roop mein dekha',
      ],
    },
    {
      title: 'Theoretical Pluralism',
      color: 'mint',
      thinkers: ['G.S. Ghurye', 'W.H.R. Rivers', 'M.N. Srinivas', 'A.R. Desai'],
      points: [
        'Sanskrit Indology ke saath diffusionism, itihas aur physical measurements ka mishran kiya',
        'Field surveys: Mahadev Kolis aur Haveli taluka ke rururban ilaqon ka ground survey kiya',
        'Alag-alag vichardharaon ke chhatron ko badhava diya: Srinivas (functionalism), Desai (Marxism)',
        'Kisi ek dogmatic theory mein bandhne ke bajaye multi-method approach apnaya',
      ],
    },
    {
      title: 'Aalochana aur Seemayein',
      color: 'pink',
      thinkers: ['M.N. Srinivas', 'B.R. Ambedkar', 'Louis Dumont', 'Kancha Ilaiah'],
      points: [
        'Book View vs Field View (Srinivas): Granth aadarsh batate hain, ground reality nahi',
        'Brahmanical dabdaba (Ambedkar): Dalit, Buddhist aur Charvaka paramparaon ko nazarandaz kiya',
        'Mili-juli tehzeeb ko bhulana: Ganga-Jamuni tehzeeb aur Sufi-Bhakti yogdaan ko kam aanka',
        'A-historical aur sthir: Jaati aur bhedbhav ko samajik sanstha maan kar justified thehrana',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u01-01-indian-perspectives-grid.webp',
    alt: 'P2 Unit 1 infographic: Perspectives on Indian Society — Three Methodological Lenses on Indian Society',
    caption:
      'Indian sociology ke teen mukhya nazariye: Indology ka textual framework, Structural-Functionalism ka gaon-aadhaarit field view, aur Marxism ka class struggle lens.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 1 Visual 01',
  },
  {
    kind: 'md',
    body: `## Indology Kya Hai, aur Isne Bharatiya Samaj ke Adhyayan ko Kaise Disha Di?

Aasaan shabdon mein samjho: Indology ka matlab hai Bharatiya samaj, paramparaon aur sanskriti ko hamare ==prachin granthon, shastron, vedon aur dharmashastron== ke zariye samajhna. Indologists ka manna hai ki Bharat koi aam samaj nahi hai; iski apni ek anokhi civilizational soul hai, jise samjhe bina aap jaati, parivaar, ya gotra jaise sansthaon ko sirf upar-upar se nahi samajh sakte. Agar aapko yeh janna hai ki aaj ka samaj kaise chalta hai, toh pehle yeh dekhna hoga ki ==Manusmriti, Upanishad aur Ramayana-Mahabharata== mein uske kya aadarsh likhe gaye the.

1920 ke dashak mein jab Bharat ke vishwavidyalayon mein Sociology shuru hui, usse lagbhag 150 saal pehle se hi angrezon ne Bharat ke granthon ko padhna shuru kar diya tha. Jab British East India Company ko yahan raaj karna tha, toh unhe laga ki agar yahan revenue lena hai aur adalat chalani hai, toh native logon ke dharmik kanoon samajhne padenge. [[trap:UPSC aspirants aksar sochte hain ki Indology G.S. Ghurye ne shuru ki thi; sach yeh hai ki Sir William Jones ne 1784 mein Asiatic Society of Bengal banakar ise shuru kiya tha, par Ghurye ne ise academic sociology ka hissa banaya.]] Halanki, colonial vidwano ne Bharat ko ek pichhda aur sthir samaj dikhane ke liye shastron ka sahara liya, jabki Bharatiya rashtravadi vidwano ne unhi shastron se Bharat ke gaurav aur sanskritik taqat ko sabit kiya.

## Itihasik Vikas: Colonial Orientalism se Nationalist Pratikriya Tak

### 1. Angrezi Hukumat aur Colonial Orientalism

18th century ke aakhri dashakon mein Bengal mein Company ke afsaron ko property disputes aur vivaah ke mamle suljhane ke liye kanoon chahiye the. Lok-paramparaon (oral traditions) ko samajhne ke bajaye, unhone panditon ki madad se Sanskrit granthon ka angrezi anuvad karwaya.

- **Sir William Jones aur Charles Wilkins:** 1784 mein Asiatic Society of Bengal ki sthapna hui; Wilkins ne 1785 mein *Bhagavad Gita* ka anuvad kiya, jisse shastron ko padhna hi samaj samajhne ka ekmatra rasta maan liya gaya.
- **Max Müller aur Sacred Books of the East:** Müller ne 50 volumes ki kitabein sambhadit keen, jisse duniya mein yeh chhavi bani ki Bharat sirf adhyatmik, pooja-path aur paralaukik baaton mein uljha hua ek stagnant samaj hai.
- **Sir Henry Maine:** *Ancient Law* (1861) mein unhone Bharatiya gaon ko "little republics" (aatmanirbhar, chote ganrajya) kaha, jo hazaron saal se bina kisi badlav ke jaati ke aadhar par chal rahe hain.

### 2. Bharatiya Rashtravadiyon ka Jawab

20th century ki shuruat mein Bharatiya vidwano ne angrezon ke is daave ko chunauti di ki Bharat hamesha se pichhda aur barbaric raha hai. [[thinker:P.V. Kane]] (*History of Dharmasastra*), Jadunath Sarkar aur [[thinker:G.S. Ghurye]] ne prachin granthon ko khol kar dikhaya ki Bharat mein nyaya, nagar-niyojan aur samajik vyavastha ka ek behtareen dhancha sadiyon se maujood tha. [[eg:Swami Vivekananda aur Sri Aurobindo ne Gita aur Upanishad ka anuvad kisi sanyas ya fatalism ke liye nahi, balki rashtra-nirman ke dynamic aadhar ke roop mein kiya.]]

| Aayam | Western Colonial Indology | Indian Nationalist / Ghurye Indology |
| --- | --- | --- |
| Mukhya Uddeshya | Raaj chalana aur colonial shasan ko justify karna | Sanskritik aatm-samman aur desi samajshastra ka vikas |
| Samaj ki Chhavi | Andhavishwasi, sthir, aur badlav se door | Nirantar chalne wali, dynamic aur jeevant sabhyata |
| Granthon ka Upyog | Yeh dikhana ki Bharatiya reeti-riwaaz tarkheen hain | Samajik sanrachna aur aadarsh mulya samajhna |
| Jaati ka Nazariya | Ek rigid racial hierarchy jo desh ko aage nahi badhne deti | Ek anokhi vyavastha jisne hazaron saal samaj ko jode rakha |

## G.S. Ghurye: Indological Approach mein Bada Yogdaan

[[thinker:G.S. Ghurye]] ko "Father of Indian Sociology" maana jaata hai. Unhone Bombay University mein Sociology department ko Bharat ki sabse badi academic nursery banaya. Sanskrit mein MA hone aur Cambridge mein W.H.R. Rivers se anthropology seekhne ke karan, Ghurye ke paas shastron ki gehri samajh bhi thi aur comparative sociology ki takneek bhi.

### 1. Jaati Vyavastha ke Chhah Mukhya Lakshan

Apni mashhoor kitaab *Caste and Race in India* (1932) mein Ghurye ne jaati vyavastha ke 6 buniyadi lakshan bataye:

1. **Segmental Division of Society (Khandatmak Vibhajan):** Samaj alag-alag jaatiyon mein bata hai, jahan sadasyata janam se tay hoti hai aur vyakti apni jaati ke niyam maanne ke liye baadhya hota hai.
2. **Hierarchy (Sanskritik Padanukram):** Sabhi jaatiyan barabar nahi hain; unka ek pakka darja hai, jisme Brahmin sabse upar maane gaye hain.
3. **Khan-Paan aur Mel-Jol par Pabandi:** Is baat ke kathor niyam the ki kaun kiske haath ka pakka (ghee mein bana) ya kachcha (paani mein bana) khana aur paani le sakta hai. [[eg:Uttar Bharat ke gaon mein Brahmin Thakur ke ghar ka pakka bhojan swikar kar leta hai, par kisi artisan jati ke haath ka kachcha khana nahi khata.]]
4. **Civil and Religious Disabilities & Privileges:** Neechi maani jane wali jaatiyon par mandir pravesh ya kuen ke paani par pabandiyan thin, jabki ucch jaatiyon ko visheshadhikar prapt the.
5. **Peshon ke Chunaav ki Azaadi ka Abhav:** Har jaati ka pesha uske janam se taye tha—chamde ka kaam, safai, ya purohiti jaati se baandh di gayi thi.
6. **Endogamy (Antarvivah):** Apni hi jaati ke andar vivah karna sabse zaroori niyam tha, jisne jaati vyavastha ko hazaron saal tak zinda rakha.

### 2. Jaati, Nasal aur Herbert Risley ki Aalochana

Colonial afsar [[thinker:Herbert Risley]] ka manna tha ki jaati asal mein ek nasalvadi (racial) seedhi hai, jahan Aryan nasal sabse upar aur Dravidian nasal sabse neeche thi. Usne naak ki naap (nasal index) se jaati tay karne ka daava kiya. Ghurye ne empirical data se Risley ko galat sabit kiya: unhone dikhaya ki ek hi bhashai ilaqe (jaise Maharashtra ya Bengal) mein ucch aur neechi jaatiyon ki physical banavat mein koi bada antar nahi tha, balki do alag-alag rajyon ke logon mein zyada antar tha. Isse unhone sabit kiya ki jaati nasal nahi, balki ek aitihasik aur sanskritik vyavastha hai.

### 3. Adivasiyon par Nazariya: "Backward Hindus"

*The Aborigines "So-Called" and Their Future* (1943) mein Ghurye ne tribal policy par apna drishtikon rakha:

- **Verrier Elwin ka Algaavvaad:** Angrez anthropologist Verrier Elwin ka kehna tha ki adivasiyon ko bahari logon se bachane ke liye "National Park" jaise alag ilaqon mein band rakha jaye.
- **Ghurye ka Assimilationist Lens:** Ghurye ne iska kadi aalochana ki aur kaha ki adivasi koi alag nasal nahi hain, balki woh ==backward Hindus== hain jo sadiyon se Hindu samaj ke saath ghul-mil rahe hain. Bhil, Gond aur Santhal tribes ne Hindu devi-devtaon aur reeti-riwaazon ko apnaya hai, isliye unhe alag rakhne ke bajaye shiksha aur vikas se mukhya-dhara mein jodna chahiye. [[link:Paper 2 Unit 5 ke Tribal Integration debate mein Ghurye aur Nehru ke Panchsheel ki tulna ki jaati hai.]]

### 4. Indian Sadhus aur Sanskritik Ekta

Apni kitaab *Indian Sadhus* (1953) mein Ghurye ne dikhaya ki Adi Shankaracharya ke Dashnami akhade aur sadhu parampara ne sadiyon tak desh ke alag-alag hisson ko aapas mein jode rakha. Jab rail aur akhbar nahi the, tab yahi sanyasi desh ke ek kone se doosre kone tak sanskritik sandesh pahunchate the.

## Ghurye aur "Theoretical Pluralism" (Siddhantatmak Vividhta)

Bahut se aalochak Ghurye ko sirf ek armchair Indologist keh dete hain, par sach yeh hai ki Ghurye ==Theoretical Pluralism== ke pakshdhar the. Unhone kabhi kisi ek theory ki ghulami nahi ki, balki shastron, itihas, diffusionism aur ground survey sabhi ka sahara liya.

- **Shastron ke Saath Field Survey:** *The Mahadev Kolis* (1957) mein Ghurye ne Maharashtra ke koli adivasiyon ke beech ground par jaakar unki kinship aur paramparaon ka direct survey kiya.
- **Rururban Community ka Adhyayan:** *Anatomy of a Rururban Community* (1963) mein unhone Pune ke paas Haveli taluka ke gaon aur shehar ke aapas ke rishton ka empirical study kiya.
- **Chhatron ko Poori Azaadi:** Unhone apne chhatron par apni theory nahi thopi; yahi kaaran hai ki unke chhatra [[thinker:M.N. Srinivas]] structural-functionalist bane, [[thinker:A.R. Desai]] Marxist bane, aur [[thinker:Irawati Karve]] ne kinship aur anthropometry par kaam kiya.

## Indology ki Seemayein aur Kadi Aalochana

Halanki Indology ne Bharatiya samajshastra ko ek desi zameen di, par aage chalkar iski gehri kamiyan samne aayi:

- **"Book View" ka Dhokha:** [[thinker:M.N. Srinivas]] ne dikhaya ki shastra yeh batate hain ki samaj kaisa ==hona chahiye== (prescriptive norm), jabki asliyat mein log kaise jeete hain (descriptive reality) woh zameen par jaakar hi pata chalta hai. [[eg:Shastron mein likha hai ki varnashrama ke hisab se sab chalein, par gaon mein economic zarooratein aur jajmani rishte shastron ke niyam todte hain.]]
- **Brahmanical Dabdaba aur Dalit Awaazein:** [[thinker:B.R. Ambedkar]] aur [[thinker:Kancha Ilaiah Shepherd]] ne aalochana ki ki Sanskrit granth kewal ucch jaati ke purohit varg ke hiton ko darshate hain. Indology ne Dalit, Shudra, Buddhist aur Charvaka jaise vidrokhi vicharon ko ghaas nahi dali.
- **Ganga-Jamuni Tehzeeb ko Bhulana:** Indology ne "Bharatiya sanskriti" ko sirf Vedic-Hindu parampara tak seemit kar diya, jisse Islam, Christianity, Sikhism aur Sufi-Bhakti ka jo anmol yogdaan Bharat ko banane mein raha, woh dhab gaya.
- **Stagnant aur Status-Quoist:** Granth yeh dikhate hain ki samaj hamesha se shant aur vyavasthit tha, jisse jaati shoshan, kisan aandolan aur krantiyon ko samajhne mein yeh nazariya kamzor saabit hota hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1784',
        title: 'Asiatic Society of Bengal ki Sthapna',
        text: 'Sir William Jones ne prachin Sanskrit granthon ke systematic adhyayan ki neev rakhi.',
      },
      {
        year: '1861–1871',
        title: 'Henry Maine ka Kaam',
        text: 'Ancient Law mein Bharatiya gaon ko aatmanirbhar aur sthir ganrajya ke roop mein pesh kiya gaya.',
      },
      {
        year: '1919–1924',
        title: 'Bombay Sociology Department',
        text: 'Patrick Geddes ke baad 1924 mein G.S. Ghurye ne kamaan sambhali aur Indology ko aage badhaya.',
      },
      {
        year: '1932',
        title: 'Caste and Race in India',
        text: 'Ghurye ne jaati ke 6 lakshan bataye aur Herbert Risley ke nasalvadi daave ko kharij kiya.',
      },
      {
        year: '1943',
        title: 'The Aborigines "So-Called"',
        text: 'Ghurye ne adivasiyon ko "backward Hindus" bataya aur Verrier Elwin ke algaavvaad ka virodh kiya.',
      },
      {
        year: '1952–1953',
        title: 'Sociological Bulletin aur Indian Sadhus',
        text: 'Indian Sociological Society banayi aur sadhu akhadon dwara sanskritik ekta ko samjhaya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Colonial Orientalism', text: 'Jones aur Müller ne raaj chalane ke liye granthon ka anuvad kiya' },
      { label: 'Rashtravadi Bachav', text: 'Kane, Sarkar aur Ghurye ne prachin dharohar se aatm-samman jagaya' },
      { label: 'Academic Sanstha', text: 'Ghurye ne Sanskrit aur British anthropology ko milakar sociology banayi' },
      { label: 'Theoretical Pluralism', text: 'Textual gyan ke saath survey, physical traits aur sadhu adhyayan jode' },
      { label: 'Field View Chunauti', text: 'Srinivas aur Ambedkar ne Book View ke Brahmanical bias ko be-naqab kiya' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Indological Approach (Book View)',
    rightTitle: 'Structural-Functionalist Approach (Field View)',
    rows: [
      {
        aspect: 'Data ka Mukhya Srot',
        left: 'Prachin Sanskrit shastra, Upanishad, Smriti aur granth',
        right: 'Gaon mein jaakar direct observation, baat-cheet aur fieldwork',
      },
      {
        aspect: 'Samajik Drishtikon',
        left: 'Prescriptive: samaj kaisa hona chahiye (dharma aur aadarsh)',
        right: 'Descriptive: zameen par log sach mein kaise rehte hain',
      },
      {
        aspect: 'Adhyayan ki Ikai',
        left: 'Badi civilizational parampara, Varna vyavastha aur mulya',
        right: 'Chota gaon, jatiyon ke aapas ke rishte aur dominant caste',
      },
      {
        aspect: 'Jaati par Nazariya',
        left: 'Kartavyon ka bhed jo samaj ko sthirta aur santulan deta hai',
        right: 'Parsparik nirbharta ke saath-saath pratidwandwita aur mobility',
      },
      {
        aspect: 'Badlav ko Dekhna',
        left: 'Sanskritik assimilation aur dheeme sanskritik badlav',
        right: 'Sanskritization, Westernization aur rajneetik lammbandi',
      },
      {
        aspect: 'Sabse Badi Kami',
        left: 'Brahmanical textual bias; Dalit aur shramikon ki aawaaz gayab',
        right: 'Harmony bias; gaon ke shoshan aur macro rajneeti ko kam dekhna',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Indology',
    meaning:
      'Prachin dharmik granthon, shastron aur sahitya ke aadhar par Bharatiya samaj aur sanskriti ka vyavasthit adhyayan.',
  },
  {
    kind: 'keyTerm',
    term: 'Book View',
    meaning:
      'Samaj ko kitabon aur granthon ke aadarsh niyam ke aadhar par dekhna, bina zameeni sachai dekhe.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Backward Hindus',
    meaning:
      'G.S. Ghurye ka tribal concept, jiska manna hai ki adivasi koi alag prajati nahi balki Hindu samaj ke pichhde ang hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Theoretical Pluralism',
    meaning:
      'Kisi ek dogmatic theory mein bandhe bina shastron, empirical survey, itihas aur physical data ka multi-method upyog.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC 2025 Tip: "Theoretical Pluralism" par kya likhein?',
    body: 'Agar Ghurye par theoretical pluralism ka sawal aaye, toh sirf Caste and Race mat likho! Unke alag-alag auyaron ko dikhao: (1) Sanskrit shastra, (2) Herbert Risley ke khilaf anthropometry, (3) Rivers ka diffusionism, (4) Mahadev Kolis aur Haveli taluka ka ground survey, aur (5) Srinivas aur Desai jaise vipreet vichardhara ke chhatron ko azaadi dena.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Indology ko kewal Pooja-Path Mat Samajhna',
    body: 'Aspirants aksar likhte hain ki Indology dharmik adhyayan hai. Sociology mein Indology ek samajik paddhati hai, jo yeh dekhti hai ki dharmashastron ke niyam parivaar, gotra, jaati aur vivah ko zameen par kaise chalate the.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Elwin vs Ghurye Tribal Vivad (Short trick: Zoo vs School)',
    body: '1940 ke dashak ka mashhoor vivaad yaad rakho: Verrier Elwin adivasiyon ko "National Park" mein alag rakhna chahte the (anthropological zoo), jabki Ghurye ne unhe "backward Hindus" bata kar school, hospital aur vikas se mukhya dhara mein jodna zaroori maana.',
  },
  {
    kind: 'answerBox',
    intro:
      'G.S. Ghurye dwara aage badhaya gaya Indological nazariya prachin Sanskrit granthon ke aadhar par Bharatiya samaj ki gehrai ko samajhne ki pehli mazboot koshish tha.',
    points: [
      'Textual Buniyaad: Colonial Orientalist stereotyping ke khilaf jakar Dharmashastron se Bharat ke sanskritik gaurav ko samjhaya.',
      'Jaati ke 6 Lakshan: Jaati vyavastha ki barik sanrachna samjhayi aur anthropometry se Risley ke nasalvadi daave ko tod diya.',
      'Adivasiyon ka Assimilation: Adivasiyon ko "backward Hindus" bata kar sadiyon se chal rahi sanskritik ekta ko ujagar kiya.',
      'Theoretical Pluralism: Shastron ke saath-saath physical measurements, itihas aur gaon ke ground surveys ka behtareen prayog kiya.',
      'Bombay School ki Neev: Srinivas aur Desai jaise mahan samajshastriyon ko azaad mahol dekar naye nazariyon ki zameen taiyar ki.',
      'Field View ki Chunauti: Srinivas ke Field View aur Ambedkar ke Dalit critique ne iske Brahmanical Book View ki seemaon ko samne laya.',
    ],
    conclusion:
      'Akela Indology kaafi nahi hai, lekin jab ise ground fieldwork ke saath joda jaye, toh yeh Bharatiya samaj ki jadon ko samajhne ke liye behad zaroori hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Indology prachin Sanskrit granthon aur sanskriti ke zariye Bharatiya samaj ko samajhta hai; G.S. Ghurye ne ise theoretical pluralism ke saath vikasit kiya, jabki baad mein field view aur Dalit vidwano ne iske book view bias ki aalochana ki.',
  mindMap,
  sections,
}
