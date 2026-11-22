import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic5HiMindMap: MindMapData = {
  title: 'Topic 5 · Nrijatiyata Aur Pehchan Aandolan',
  center: 'Nrijatiyata Aur Pehchan Aandolan',
  subtitle: 'Ethnicity Ke Siddhant • Sons of the Soil • North-East Autonomy Accords • Aarthik Dabdaba Banam Pehchan',
  branches: [
    {
      title: 'Ethnicity Ki Samajshastriya Samajh',
      color: 'lavender',
      thinkers: ['Max Weber', 'Clifford Geertz', 'Paul Brass', 'Dipankar Gupta'],
      points: [
        'Primordialism (Geertz): khoon ke rishte, bhasha, sanskriti aur poorvajon ki pavitra pehchan',
        'Instrumentalism (Brass): netaon dwara satta aur sarkari daulat paane ke liye identity ka istemal',
        'Constructivism: colonial census aur rajneetik seemaon dwara fluid pehchan ko pakka karna',
        'Relative deprivation: aapsi tulna aur naukri na milne se paida hone wala bhed-bhav ka gussa',
      ],
    },
    {
      title: 'Myron Weiner: Sons of the Soil',
      color: 'yellow',
      thinkers: ['Myron Weiner', 'Dipankar Gupta', 'Sujata Patel', 'Ghanshyam Shah'],
      points: [
        'Bahaari logon ka virodh: sthaniya logon ko lagna ki bahaari log unka haq aur naukri chheen rahe hain',
        'Chaar structural kaaran: migration, white-collar job takrav, padhe-likhe berozgar aur netaon ka bhadkana',
        'Zameeni misaal: Bombay mein Shiv Sena (1966) aur Assam Aandolan (1979–85) AASU dwara',
        'Middle class darr: aam shehari yuvaon ki aarthik lachari ko sanskritik dushmani mein badalna',
      ],
    },
    {
      title: 'North-East Mein Autonomy Aur Sub-Ethnicity',
      color: 'mint',
      thinkers: ['Sanjib Baruah', 'B.K. Roy Burman', 'Udayon Misra', 'Virginius Xaxa'],
      points: [
        'Cosmetic federalism (Baruah): AFSPA ki fauji taqat aur bhrasht sarkari chande se paida "durable disorder"',
        'Internal exclusionary frontiers: naye aadiwasi rajya banne par chhote sub-ethnic groups par julm',
        'Autonomy Accords: Sixth Schedule, Bodo Accords aur Mizo Accord (1986) ke zariye netaon ka samjhauta',
        'Sub-tribal takrav: Bodo-Santhal takrav aur Manipur mein Meitei banam Kuki ka bhayanak sangharsh',
      ],
    },
    {
      title: 'Aarthik Daulat Par Pehchan Ka Parda',
      color: 'pink',
      thinkers: ['Paul Brass', 'Stuart Corbridge', 'Nandini Sundar', 'Andre Béteille'],
      points: [
        'Asli ladai: zameen, jungle, border vyapar aur sarkari thekon par qabza karne ki aarthik dushmani',
        'Zameen chhinna: aadiwasi zameen par gair-qanooni qabza aur forest mining ke khilaaf hinsa',
        'Netaon ka munafa: azaadi ke naare dekar kendra sarkar ke vikas fund ko aapas mein baantna',
        'Manipur sankat (2023): pahadi zameen, ST quota aur mantralaya ke control ki ladai par jaati ka rang',
      ],
    },
  ],
}

export const topic5HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-02-ecology-identity-movements.webp',
    alt: 'P2 Unit 13 infographic: Environmental & Identity Movements — Environmentalism of the Poor & Ethno-Identity Struggles',
    caption:
      'Bharat mein nrijatiya (ethnic) aandolan shehari "Sons of the Soil" nativist morchon se lekar North-East ke autonomy accords aur zameen ke aarthik takravon tak phailte hain.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 02',
  },
  {
    kind: 'md',
    body: `## Ethnicity (Nrijatiyata) Kya Hai: Primordialism Banam Instrumentalism

Aasaan shabdon mein samjho: Ethnicity ka matlab hai jab logon ka ek samooh yeh maanta hai ki unke poorvaj ek the, unki bhasha, sanskriti, itihaas ya dharm ek hai, aur is aadhar par woh dusron se alag hain. Samajshastri [[thinker:Max Weber]] ne kaha tha ki ethnic samooh woh log hain jo aapas mein khoon ka rishta ya sajha itihaas hone ka ek **subjective (dil se maana hua) vishwas** rakhte hain.

Sociology mein ethnicity ko samajhne ke do mukhya nazariye hain:
1. **Primordialist Nazariya (Clifford Geertz)**: Iska manna hai ki ethnic pehchan insaan ke khoon, bhasha aur jaddi zameen mein basi hoti hai. Yeh aisi cheez hai jise badla nahi ja sakta aur log iske liye marne-marne ko taiyar ho jate hain.
2. **Instrumentalist Nazariya (Paul Brass)**: Iska manna hai ki ethnic pehchan koi sadiyon purani pakki cheez nahi hai. Balki yeh ek **hathiyar (instrument)** hai jise chalak rajneetik neta aur elite tabqa apni kursi, vote-bank aur sarkari fund paane ke liye janta ke beech bhadkate hain.

Samajshastri [[thinker:Dipankar Gupta]] kehte hain ki neta bhale hi purani sanskriti aur poorvajon ka naam lein, par aag tabhi lagti hai jab janta ke beech **berozgari, zameen chhinne ka darr aur aarthik lachari** hoti hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Primordialist Lens (Geertz)',
    rightTitle: 'Instrumentalist Lens (Paul Brass)',
    rows: [
      {
        aspect: 'Pehchan Ka Swaroop',
        left: 'Janmjaat, khoon ka rishta, badla na ja sakne wala.',
        right: 'Banawati, badalne wala aur netaon dwara tay kiya gaya.',
      },
      {
        aspect: 'Ladai Ka Kaaran',
        left: 'Apne poorvajon, bhasha aur dharmik gaurav ki raksha.',
        right: 'Sarkari fund, mantri pad aur sansadhanon par qabza.',
      },
      {
        aspect: 'Sanskritik Prateek',
        left: 'Asli purani riwayatein jo virasat mein mili hain.',
        right: 'Selectively chune gaye naare jisse bheed ko uksaya ja sake.',
      },
      {
        aspect: 'Hal (Solution)',
        left: 'Alag ilaaqa dena, border banana, aapas mein doori.',
        right: 'Barabar aarthik vikas, naukriyan aur power-sharing.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Myron Weiner Ka "Sons of the Soil" Siddhant

Bharat ke sheharon aur rajyon mein bahaari logon ke khilaaf gusse ko samajhne ke liye American samajshastri [[thinker:Myron Weiner]] ki kitaab *Sons of the Soil: Migration and Ethnic Conflict in India* (1978) sabse mahatvapurna shodh hai.

Weiner ne yeh pata lagaya ki aakhir kyun kuch ilaqon mein sthaniya log bahaar se aaye shramikon aur babuon ke khilaaf hisak bagawat kar dete hain.

### Weiner Ke Chaar Structural Kaaran
1. **Bahaari Logon Ka Bada Inflow**: Kisi ilaqe mein achanak dusri bhasha ya sanskriti ke logon ka badi sankhya mein aana [[eg:1950s–60s mein Bombay mein South Indian logon ka aana ya Assam mein Bengali migrants ka aana]].
2. **White-Collar Naukriyon Ka Chhinna**: Aane wale bahaari log angrezi ya technical shiksha mein aage the, isliye bank, railway aur sarkari babu ki naukriyon par unka qabza ho gaya.
3. **Local Yuvaon Ki Relative Deprivation**: Gaon se padh-likhkar shehar aaye sthaniya Marathi ya Assamese naujawan berozgar ghoomte rahe aur unhe laga ki unke apne ghar mein unka haq mara ja raha hai.
4. **Rajneetik Netaon Ka Uphaar**: Bal Thackeray ya AASU jaise sanghatano ne is aarthik dukh ko sanskritik dushmani bana diya, yeh nara dekar ki "Mati Ke Bete" (Sons of the Soil) ko bahaariyon ne ghulam bana liya hai.

### Zameeni Misaal
- **Mumbai Mein Shiv Sena (1966)**: Bal Thackeray ne Marathi manoos ka mudda uthaya aur South Indian clerks (*"lungiwala"*) ke khilaaf dharne aur hamle kiye, 80% sarkari naukriyon mein Marathi quota maanga.
- **Assam Aandolan (1979–1985)**: AASU ne chhah saal tak school-college band karwa kar bahaari migrants ke khilaaf ladai ladi, jiska ant 1985 ke Assam Accord se hua.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 2 Angle: Bhasha Ka Punargathan Banam Sons of the Soil',
    body: 'UPSC ke answer mein yeh baat saaf karo: 1956 ka bhasha ke aadhar par rajyon ka banna (Linguistic Reorganisation) samvidhanik loktantra ka hissa tha; lekin "Sons of the Soil" ke naam par bahaari Bhartiya nagrikon ko peetna samvidhan ke Article 19(1)(e) (desh mein kahin bhi basne ka haq) ka ghor ullanghan hai.',
  },
  {
    kind: 'md',
    body: `## North-East Mein Nrijatiyata, Sub-Ethnicity Aur Autonomy Accords

Bharat ka North-East ilaqa anokhi aadiwasi vividhta aur alag-alag bhashaon ka garh hai. Samajshastri [[thinker:Sanjib Baruah]] (*Durable Disorder*) ne dikhaya ki azaadi ke baad kendra sarkar ne is ilaqe ko do hi cheezon se sambhala — ek **AFSPA ki fauji bandook** aur dusra **bhrasht netaon ko paisa baantna**, jise unhone ==Cosmetic Federalism== kaha.

### Sub-Ethnicity Aur Autonomy Accords Ka Chakkar
1. **Rajya Banane Ka Ulta Asar**: Bagawat ko shant karne ke liye kendra ne alag-alag aadiwasi rajya banaye (Nagaland 1963, Meghalaya 1972, Mizoram 1987). Lekin kisi bhi pahadi ilaqe mein sirf ek jaati nahi rehti. Jab ek badi aadiwasi jaati ne sarkar banayi, toh usne chhoti aadiwasi jaatiyon par julm shuru kiya.
2. **Sub-Ethnic Bagawat**: Naye rajyon ke andar se nayi ladai shuru ho gayi:
   - Assam ke andar Bodo logon ne alag Bodoland maanga, jiske baad Bodo Peace Accords (2003, 2020) hue.
   - Manipur mein valley mein rehne wale bahusankhyak **Meitei** aur pahadon mein rehne wale **Kuki-Naga** aadiwasiyon ke beech 2023 mein bhayanak jaati hinsa bhadak uthi zameen, jungle aur ST aarakshan ke mudde par.
3. **Sixth Schedule Councils Ki Kami**: Autonomous District Councils (ADCs) aadiwasiyon ki zameen bachane ke liye banaye gaye the, par aam aadiwasi ko fayda milne ke bajay wahan ke local netaon ne sara sarkari paisa aapas mein baant liya.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1956',
        title: 'States Reorganisation Act',
        text: 'Bhasha ke aadhar par rajyon ka gathan, jisse vernacular bhashaon ko pehchan mili.',
      },
      {
        year: '1966',
        title: 'Shiv Sena Ka Gathan',
        text: 'Bal Thackeray dwara Bombay mein "Sons of the Soil" morcha aur bahaariyon ka virodh.',
      },
      {
        year: '1985',
        title: 'Assam Accord',
        text: 'Chhah saal ke aandolan ke baad bahaari nagrikon ki pehchan ke liye agreement.',
      },
      {
        year: '2003 & 2020',
        title: 'Bodo Peace Accords',
        text: 'Assam ke andar Bodo samaj ke liye Bodoland Territorial Council ka nirmaan.',
      },
      {
        year: '2023',
        title: 'Manipur Ethnic Hinsa',
        text: 'Meitei aur Kuki samaj ke beech zameen, jungle aur ST quota par bhayanak ladai.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Pehchan Ka Parda: Aarthik Daulat Aur Satta Ki Asli Jung

Samajshastra ka ek nirdharit niyam hai: **Jaati, dharm aur bhasha ki ladaiyan aksar zameen aur daulat par qabza karne ki asli bhookh par parda daalti hain**.

Samajshastri [[thinker:Paul Brass]], Nandini Sundar aur Virginius Xaxa ne dikhaya ki identity ke naare neta log asli aarthik fayde ke liye lagate hain:
1. **Zameen Aur Jungle Par Qabza**: Aadiwasi ilaqon mein zameen hi sabse badi daulat hai. Bahaari logon ya dusre dharmo ke khilaaf hinsa aam taur par zameen par kabza karne, timber smuggling aur mining ke thekon ke liye bhadkayi jaati hai.
2. **Sarkari Theke Aur Naukriyon Par Monopoly**: Jahan koi private company nahi hoti, wahan sarkar ke PWD theke, transport license aur sarkari naukri hi kamayi ka ekmatra zariya hain. Sthaniya neta yeh tay karke ki kaun "asli nagrik" hai, saare theke apne biradari ke logon ko dilwate hain.
3. **Netaon Ka Bhrashtachar**: Insurgent groups aur neta log "azaadi" aur "aatm-samman" ka nara dekar national highways par trucks se gundagardi tax vasoolte hain aur kendra ke development packages ko hadap lete hain.
4. **Manipur 2023 Ka Asli Kaaran**: 2023 ke Manipur takrav mein dharmiya aur sanskritik naare the, par asli ladai Imphal valley ke Meitei logon ke pahadon mein zameen khareedne ke haq, aur pahadi Kuki aadiwasiyon dwara opium kheti tatha forest survey ke virodh se judi thi.`,
  },
  {
    kind: 'keyTerm',
    term: 'Sons of the Soil (Myron Weiner)',
    meaning:
      'Myron Weiner ka siddhant jo batata hai ki sheharon mein bahaari shramikon ke khilaaf gussa tab bhadakta hai jab local padhe-likhe yuvaon ko lagta hai ki unka rozgar bahaari log chheen rahe hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Cosmetic Federalism (Sanjib Baruah)',
    meaning:
      'Sanjib Baruah ka vichar jisme unhone bataya ki North-East mein kendra sarkar ne AFSPA ki fauji taqat aur bhrasht netaon ko paisa baant kar ek jhoothi shanti (durable disorder) banaye rakhi hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Instrumentalist Identity (Paul Brass)',
    meaning:
      'Paul Brass ka siddhant jo batata hai ki neta log chunav jeetne aur sarkari sansadhanon par qabza karne ke liye janta ke beech bhasha aur jaati ki aag bhadkate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Sub-Ethnic Fracturing',
    meaning:
      'Woh rajneetik chakravyuh jisme ek badi aadiwasi jaati ko rajya milne ke baad us rajya ke andar rehne wali chhoti aadiwasi biradariyan apne haq ke liye naya vidroh shuru kar deti hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Ethnic Takrav Ka Parda Kaise Kholein',
    body: 'UPSC ke har ethnic conflict wale answer mein 3 sawal zaroor uthao: (1) Zameen aur jungle par kiska dabdaba hai? (2) Sarkari theke aur naukriyan kis group ko mil rahi hain? aur (3) Local neta kaise bhed-bhav ka darr dikhakar apna vote-bank bana rahe hain?',
  },
  {
    kind: 'answerBox',
    intro:
      'Nrijatiya pehchan, aarthik dushmani aur North-East ke sangharshon par model answer structure:',
    points: [
      'Siddhantik buniyaad: Max Weber ke anusaar sajha poorvajon ka vishwas; Clifford Geertz ka emotional primordialism banam Paul Brass ka netaon dwara identity ko hathiyar banana (instrumentalism).',
      'Sons of the Soil ke kaaran: Myron Weiner ke chaar paimane (migration, white-collar naukri takrav, sthaniya berozgari aur netaon ka uphaar) Shiv Sena aur Assam morche mein pramanit hote hain.',
      'North-East ka vishleshan: Sanjib Baruah ka "cosmetic federalism" dikhata hai ki naye aadiwasi rajya banne ke baad chhoti sub-ethnic jaatiyon (jaise Bodo, Kuki) ne dominant jaati ke khilaaf bagawat ki.',
      'Aarthik dushmani par pehchan ka parda: Jaati aur dharmik naare aksar zameen chhinne, mining ke theke, border smuggling aur kendra ke fund par qabza karne ki ladai ko chupate hain.',
      'Samkaaleen misaal: Manipur ka 2023 sankat spasht karta hai ki ST darja, pahadi zameen ke kanoon aur rajneetik dabdabe ki ladai ko ethnic dushmani ka rang diya gaya.',
    ],
    conclusion:
      'Bharat mein ethnic shanti tabhi sthapit ho sakti hai jab kagazi territorial samjhauto se aage nikal kar har samooh ko zameen ka haq, rozgar aur barabar loktantrik hissa diya jaye.',
  },
]
