import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.3 — Bharat Mein Parivar Aur Vivah',
  center: 'Parivar Aur Vivah (Bharat)',
  subtitle: 'Joint Family Ki Bahas • Functional Jointness • Vivah vs Nikah • Digital Matrimony',
  branches: [
    {
      title: 'Joint Family: Patan Ki Bahas',
      color: 'lavender',
      thinkers: ['Aileen Ross', 'William J. Goode', 'K.M. Kapadia', 'Saroj Kapoor'],
      points: [
        'Shastriya Aadarsh: Teen peedhiyon ka ek chhat ke neeche rehna, saanjha chulha, pushtaini zameen aur milkar pooja karna',
        'Disintegration Model: Shehrikaran, factory ki naukri aur naye vicharon ne sanyukta gharo ko chhota kar diya',
        'Aileen Ross Ka Adhyayan: Bangalore ke shehri parivaron mein buzurgo ka dabdaba kam hua aur naye jodo ne privacy maangi',
        'Goode Ka Siddhant: Industrial capitalism akele mazdoor ki maang karta hai jisse extended parivar toot-te hain',
      ],
    },
    {
      title: 'Adaptation Aur Functional Jointness',
      color: 'yellow',
      thinkers: ['I.P. Desai', 'Milton Singer', 'M.S. Gore', 'M.N. Srinivas'],
      points: [
        'Desai Ka Mahuva Adhyayan: Chulha alag hone ka matlab rishte tootna nahi hai; aarthik aur naitik sahyog zinda rehta hai',
        'Singer Ke Madras Vyapari: Compartmentalization ke zariye factory mein modern science aur ghar mein sanyukta pooja',
        'Gore Ka Aggarwal Adhyayan: Dilli ke business parivar alag gharon mein reh kar bhi sanyukta business aur loans chalate hain',
        'Remittance Economy: Gaon mein baithe buzurgo ko har mahine shehar se paise bhejna sanyukta dori ko baandhe rakhta hai',
      ],
    },
    {
      title: 'Vivah: Sanskara Banam Contract',
      color: 'mint',
      thinkers: ['P.H. Prabhu', 'Asaf A.A. Fyzee', 'Flavia Agnes', 'Patricia Uberoi'],
      points: [
        'Hindu Vivah: Pavitra sanskara jiska lakshya Dharma, Praja aur Rati hai; kanooni roop se janam-janam ka atoot bandhan',
        'Kanyadan Aur Kulvadhu: Kanya ke nishkaam daan ka vichar aur bahu ko khaan-daan ki izzat aur shaan ka pehredar banana',
        'Muslim Nikah: Ek samajik-dharmik kanooni contract jisme Ijab (prastav), Qubul (manzoori) aur Mahr (suraksha) anivarya hai',
        'Kanooni Sudhaar: Hindu Marriage Act 1955 ne divorce diya; 2019 ke kanoon ne instant Triple Talaq ko asanvaidhanik maana',
      ],
    },
    {
      title: 'Aadhunik Badlaav Aur Matrimony',
      color: 'pink',
      thinkers: ['Ravinder Kaur', 'Patricia Uberoi', 'Janaki Abraham', 'Yogendra Singh'],
      points: [
        'Modernized Endogamy: Shaadi.com aur BharatMatrimony ne jaati, sub-caste aur gotra ke filters ko digital roop de diya',
        'Love-cum-Arranged Vivah: Yuva khud partner pasand karte hain par parivar ki aashirvaad aur raazi-khushi zaroori maante hain',
        'Big Fat Indian Wedding: Consumerism aur dikhawe ki shadiyan jahan lakho-crore kharch karke samajik rutba dikhaya jaata hai',
        'Naye Rishte: Live-in relationships ko court ki maanyata aur queer vivah ki aawazon ne puraane aadarsho ko jhanjhora hai',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
    alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
    caption: 'Family, Marriage & Patriarchy in India: Sanyukta parivar ka functional roop, Vivah aur Nikah ka antar, aur modern digital matrimony.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Sanyukta Parivar Ki Bahas: Patan Ya Naya Roop?

Puraane shastron aur kitaabon mein Bharatiya sanyukta parivar (joint family) ko ek aadarsh mana gaya tha—jahan dada, unke bete, potey aur unki patniyan ek hi makaan mein rehti thin, ek hi chulhe (*chulah*) ka khana khati thin, kheti ki saanjhi zameen par haq rakhti thin aur kuldevi ki ek sath pooja karti thin.

Jab shehron ka vikas hua, factory mein naukriyan aayin aur log gaon chhod kar jaane lage, toh samajshastriyon ko laga ki yeh sanyukta parivar ab khatam ho jayega. Yahin se shuru hui Bharat ke samajshastra ki sabse badi bahas:

### 1. Patan Ka Nazariya (Disintegration Thesis)
* **Aileen Ross (1961):** Apni mashhoor kitaab *The Hindu Family in its Urban Setting* mein Ross ne Bangalore ke parivaron ka adhyayan karke likha ki shehar ki daudti zindagi, padhai aur alag naukriyon ne ghar ke buzurgo ke dabdabe ko hila diya hai. Padhe-likhe yuva privacy chahte the, jisse bhedbhav aur tanaav badha aur sanyukta parivar toot kar chhote nuclear gharo mein badal gaye.
* **William J. Goode (1963):** Goode ka maanna tha ki industrialization ko aise mazdooron ki zaroorat hoti hai jo azaad ho kar kahin bhi ja sakein. Is aarthik dawaye ne poori duniya ki tarah Bharat ke bade parivaron ko bhi nuclear banne par majboor kiya.

### 2. Adaptation Aur Functional Jointness Ka Nazariya
* **I.P. Desai (1964):** Gujarat ke Mahuva kasbe par kiye gaye apne aitihasik adhyayan mein Desai ne saaf kiya ki chulha alag hone ka matlab parivar tootna nahi hai. Unhone bataya ki log alag makaan mein reh kar bhi ==functional jointness== nibhate hain—paise ki madad karna, bimaari mein daudna, zameen ke faisle milkar lena aur tyoharon par ek sath aana.
* **Milton Singer (1972):** Singer ne Madras ke bade udyogpatiyon (industrialists) ke parivaron ka adhyayan kiya. Unhone dikhaya ki factory aane se inke joint family toote nahi, balki unhone **compartmentalization** (algaav) seekh liya: factory mein woh modern Western management chalate the, aur sham ko ghar aakar poore khaan-daan ke sath aarti aur saanjhi rasmein nibhate the [[eg:Tata, Birla aur Ambani parivar jahan arabon-kharbon ka business parivarik trust aur sanyukta baithak se chalaya jaata hai]].
* **M.N. Srinivas Aur Yogendra Singh:** [[thinker:MN Srinivas]] aur [[thinker:Yogendra Singh]] ne bataya ki shehar se gaon bheje gaye paise (remittances) aur phone ke judav ne gaon ke joint family ko aarthik roop se aur zyada mazboot bana diya hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Patan Ka Nazariya (Ross, Goode)',
    rightTitle: 'Adaptation Ka Nazariya (Desai, Singer)',
    rows: [
      {
        aspect: 'Mukhya Dhyan',
        left: 'Alag chulha aur flat: Alag rehne ko hi parivar ka tootna maan lena',
        right: 'Functional jointness: Alag reh kar bhi aarthik sahyog aur naitik farz nibhana',
      },
      {
        aspect: 'Modernity Ka Asar',
        left: 'Shehrikaran aur factory culture ne sanyukta parivar ko poori tarah bikhair diya',
        right: 'Parivar ne compartmentalization ke zariye modern daur mein khud ko dhaal liya',
      },
      {
        aspect: 'Buzurgo Ki Taqat',
        left: 'Ghar ke mukhia (Karta) ka dabdaba khatam ho gaya kyunki bachhe azaadi chahte hain',
        right: 'Hukumat chalane ki jagah buzurga ab salahkar aur mushkil waqt ke sahare ban gaye hain',
      },
      {
        aspect: 'Zameeni Sach',
        left: 'Bharat mein ab sirf nuclear family hi bachegi aur vistarit parivar mar jayenge',
        right: 'Modified extended family tezi se phail rahi hai jo azaadi aur rishtedaari dono ko jode rakhti hai',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Hindu Vivah Banam Muslim Nikah: Samajshastriya Antar

Bharat mein vivah sirf do dilo ka milan ya kanooni dastakhat nahi hai; yeh do alag-alag sanskritik aur dharmik paramparaon ka aadhar hai.

### 1. Hindu Vivah: Ek Pavitra Sanskara
* **Aadhyatmik Bandhan:** Shastriya parampara mein Hindu vivah ek *Sanskara* (pavitra sanskar) hai, jise tooda nahi ja sakta. Iska mukhya uddeshya *Dharma* (dharmik farz nibhana), *Praja* (vansh aage badhana), aur *Rati* (anand) maana gaya hai.
* **Kanyadan Ka Siddhant:** Vivah ki sabse mukhya rasm ==Kanyadan== hai—pita dwara apni pavitra kanya ka daan bina kisi lalach ke var ko karna. Is daan ke chalte ladki wale hamesha ladke walon ke aage samajik roop se jhuke rehte hain.
* **Kulvadhu Ki Zimmeedari:** Nayi dulhan sasural mein ==Kulvadhu== ban kar aati hai, jisse yeh umeed ki jaati hai ki woh apne niji sapno ko chhod kar pati ke khaan-daan ki izzat, parampara aur pavitrata ko sambhale.
* **Kanooni Badlaav:** Hindu Marriage Act 1955 ne is sanskara mein kanooni badlaav kiye: ek se zyada shaadi par rok lagayi, divorce ki manzoori di, aur antar-jaatiye vivah ko kanooni haq diya.

### 2. Muslim Nikah: Ek Samajik-Dharmik Contract
* **Contract Ka Swaroop:** Islamic kanoon ke mutabiq ==Nikah== ek civil contract (samajik samjhauta) hai, jisme do gawahon ke saamne prastav (*Ijab*) aur manzoori (*Qubul*) zaroori hai.
* **Mahr Ki Aarthik Suraksha:** Nikah ke waqt dulha dulhan ko ==Mahr== dene ka pakka vaada karta hai. Mahr aurat ki apni niji sampatti hoti hai jise koi chheen nahi sakta, jo use shaadi ke baad aarthik azaadi deti hai.
* **Talaq Ki Vyavastha:** Kyunki Nikah ek contract hai, isliye iska khatma bhi kanoon ke tehat ho sakta hai: *Talaq* (pati dwara), *Khula* (patni dwara Mahr chhod kar liya gaya algaav), ya *Mubarat* (aapsi sehmati se).
* **Modern Kanooni Badlaav:** Muslim Women (Protection of Rights on Marriage) Act, 2019 ne bina waqt diye ek baar mein bole gaye teen talaq (*Talaq-e-Biddat*) ko kanooni roop se radd aur criminal jurm bana diya.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Shehri Migration', text: 'Naukri ke liye yuva shehar jaate hain aur wahan alag flat mein chulha jalate hain' },
      { label: 'Niji Azaadi', text: 'Pati-patni ko rozana ke buzurgana roktok se azaadi milti hai aur privacy milti hai' },
      { label: 'Aarthik Judav', text: 'Har mahine gaon paise bhejna aur zameen ke faisle milkar lena functional jointness banata hai' },
      { label: 'Tyohar & Mel', text: 'Shaadi, shradh aur chhuttio par sabhi log ek sath aakar sanyukta khaan-daan ki dori mazboot karte hain' },
    ],
  },
  {
    kind: 'md',
    body: `## Aaj Ke Daur Ke Badlaav: Digital Matrimony Aur Vivah Ke Naye Roop

Bharat mein padhai aur auraton ki naukri badhne ke bawajood vivah sanstha mein badlaav aur parampara ka anokha khel chal raha hai:

### 1. Digital Matrimonial Platforms Aur Modernized Endogamy
Aaj kal gaon ke bicholiye ya pandit ji ki jagah *Shaadi.com*, *BharatMatrimony*, aur *Jeevansathi* jaise websites ne le li hai. Lekin samajshastri Patricia Uberoi aur Ravinder Kaur dikhati hain ki in websites ne jaati ko khatam nahi kiya. Balki in par jaati, up-jaati, gotra, manglik dosh aur package ke filters laga kar log apni hi jaati mein rishta dhoondhte hain—jise ==modernized endogamy== kaha jaata hai [[eg:Ek software engineer matrimonial app par sirf apni sub-caste aur vegetarian filter laga kar shaadi dhoondhta hai]].

### 2. "Love-cum-Arranged" Vivah
Aaj kal ke Bharatiya yuva na toh poori tarah pashchimi love marriage karte hain aur na hi andhe hokar arranged marriage. Woh pehle khud partner pasand karte hain, fir parivar ko aapas mein milwa kar arranged marriage ka chola pehna dete hain taaki khaan-daan ki aashirvaad aur samajik sahara bana rahe.

### 3. Big Fat Indian Wedding Aur Consumerism
[[thinker:Karl Marx]] ke commodity fetishism ki tarah, aaj shaadi dikhave aur aarthik dabdabe ka zariya ban chuki hai. Pre-wedding shoots, 5-star destination weddings aur dahej ko "uphaar" (*Streedhan*) ke naam par dekar parivar karzon mein doob rahe hain taaki samaj mein rutba dikhaya ja sake.`,
  },
  {
    kind: 'keyTerm',
    term: 'Functional Jointness',
    meaning: 'I.P. Desai ka siddhant jiske mutabiq alag makaan mein rehne ke bawajood parivar aarthik, naitik aur dharmik roop se sanyukta rehte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Kanyadan',
    meaning: 'Hindu sanskara mein pita dwara kanya ka nishkaam daan jo ladki dene wale parivar ko samajik roop se hamesha jhuka kar rakhta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Kulvadhu',
    meaning: 'Bahu ko khaan-daan ki maryada, parampara aur sanskaron ki surakshakarmi maankar uski niji azaadi par naitik pehra lagana.',
  },
  {
    kind: 'keyTerm',
    term: 'Modernized Endogamy',
    meaning: 'Digital matrimonial portals ke zariye jaati aur gotra ke niyam ko aadhunik internet algorithm ke roop mein zinda rakhna.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Desai Ka Mahuva Adhyayan Yaad Rakhein',
    body: 'Jab bhi UPSC joint family ke disintegration par sawal pooche, I.P. Desai ke 1964 ke Mahuva adhyayan ka hawala zaroor dein. Desai ne saabit kiya tha ki 80% se zyada parivar kisi na kisi roop mein sanyukta zimmedariyan nibha rahe the.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Chulha Alag Hone Se Parivar Alag Nahi Hota',
    body: 'Household (ek chhat aur ek chulha) aur Family (dharmik aur khoon ke rishte) ke beech ka antar hamesha saaf likhein. Ek vyakti nuclear ghar mein rehte hue bhi joint parivar ka active hissa ho sakta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Milton Singer Ka Compartmentalization',
    body: 'Madras ke udyogpatiyon par Singer ka adhyayan batata hai ki Bharatiya vyapari factory mein Western science aur ghar aakar sanyukta Hindu rasmein dono ko ek sath bina kisi tanaav ke nibha lete hain.',
  },
  {
    kind: 'answerBox',
    intro: 'Sanyukta parivar ke badlaav par 20-mark sawal ka structure is tarah tay karein:',
    points: [
      'Shastriya joint family ke aadarsho ko define karein (ek chhat, ek chulha, saanjhi zameen aur pooja).',
      'Patan ke nazariye par Aileen Ross aur William Goode ke tarq pesh karein (shehrikaran, vyaktivad aur nuclear flat).',
      'I.P. Desai ke "functional jointness" se iska tod dein (alag reh kar bhi sahayog aur remittances).',
      'Milton Singer ke Madras study (compartmentalization aur corporate trusts) se aarthik vikas ke sath parivar ki dori dikhayein.',
      'Aaj ke naye roop darj karein: Dispersed family, WhatsApp groups, buzurgo ka sahara aur digital rishtedaari.',
    ],
    conclusion: 'Nishkarsh mein likhein ki Bharatiya joint family khatam nahi hui hai, balki rigid residential unit se badal kar ek lachile, multi-local sahayog network mein dhal chuki hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Parivar aur vivah Bharatiya sabhyata ki aisi sansthaen hain jo hazaron saal se samajik vyavastha ko sambhale hue hain. Industrialization aur shehrikaran ke aane par laga tha ki sanyukta parivar (joint family) toot kar pashchimi nuclear parivar ban jayega, lekin I.P. Desai aur Milton Singer ke adhyayan dikhate hain ki parivar toota nahi balki "functional jointness" mein badal gaya. Wahi shaadi ke maamle mein Hindu Vivah (sanskara) aur Muslim Nikah (contract) ke dharmik niyam aaj digital matrimonial portals aur badalte kanoon ke sath naye roop dhal rahe hain.',
  mindMap,
  sections,
}
