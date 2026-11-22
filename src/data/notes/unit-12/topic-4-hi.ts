import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.4 — Colonial Kaal ke Samajik Sudhar Andolan',
  center: 'Colonial Social Reforms',
  subtitle: 'Liberal Sudharvad vs Radical Dalit-Shudra Chetna • Mahila Shiksha',
  branches: [
    {
      title: 'Upper-Caste Liberal Dhara',
      color: 'lavender',
      thinkers: ['Raja Rammohan Roy', 'Ishwar Chandra Vidyasagar', 'Dayanand Saraswati'],
      points: [
        'Brahmo Samaj (1828): Monotheism, tark par zor, Sati pratha ka ant (1829)',
        'Vidyasagar: Vidhwa punarvivah kanoon (1856) aur ladkiyon ke schools',
        'Arya Samaj (1875): Vedon ki or lauto, Shuddhi andolan, DAV schools',
        'Shastron ka sahara: Kanoon badalne ke liye purane granthon ka praman diya',
      ],
    },
    {
      title: 'Anti-Caste Radical Dhara',
      color: 'yellow',
      thinkers: ['Jyotirao Phule', 'Sri Narayana Guru', 'B.R. Ambedkar'],
      points: [
        'Satyashodhak Samaj (1873): Brahminical shoshan ke khilaf pehla krantikari bigul',
        'Savitribai aur Jyotirao: Pune mein pehla shudra-ati-shudra girls’ school (1848)',
        'SNDP Yogam (1903): Ezhava aawaz, "One Caste, One Religion, One God"',
        'Ambedkar: Mahad Satyagraha (1927) aur jati vyavastha ka jadd se vinash',
      ],
    },
    {
      title: 'Har Dharam mein Mahila Shiksha',
      color: 'mint',
      thinkers: ['Begum Rokeya', 'Sir Syed Ahmad Khan', 'Savitribai Phule'],
      points: [
        'Muslim sudhar: Aligarh Movement, Begum Rokeya ka Sakhawat School (1911)',
        'Sikh sudhar: Singh Sabha Movement (1873), Kanya Mahavidyalaya, Gurmukhi',
        'Parsi sudhar: Rahnumai Mazdayasnan Sabha (1851), mahilaon ke kanooni adhikar',
        'Hindu prayas: Bethune School, D.K. Karve ki pehli Women’s University (1916)',
      ],
    },
    {
      title: 'Samajik Seemayein aur Samiksha',
      color: 'pink',
      thinkers: ['Partha Chatterjee', 'Uma Chakravarti', 'Sumit Sarkar'],
      points: [
        'Shehri elite bias: Zyada tar andolan unchi jati ke Bhadralok tak seemit the',
        'Chatterjee: "Nationalist Resolution" ne aurat ko ghar ke andar qaid rakha',
        'Dharmik kheenchtan: Shuddhi aur Tabligh ne communalism ko badhava diya',
        'Zameen ke feudal dhanchhe aur jati ke aapsi vivaah ko nahi tod sake',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u02-02-reform-protest-timeline.webp',
    alt: 'P2 Unit 2 infographic: Colonial Reforms & Protest Movements — Socio-Religious Reforms & Anti-Colonial Peasant Resistance',
    caption:
      'Unneesween sadi ke samajik sudhar do alag dharaon mein bate the: ek unchi jatiyon ka shastriya sudhar aur doosra aam shoshiton ka radical jati-virodhi andolan.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 02',
  },
  {
    kind: 'md',
    body: `## 19th Century ke Samajik Sudhar Andolan kyun shuru huye?

Aasaan shabdon mein samjho: jab Angrezi Company ne Bharat par kabza jamaya, toh British afsaron aur Christian missionaries ne bhartiya samaj aur dharam par teekhe hamle kiye. Unhone kaha ki yeh samaj barbaric aur pichhda hai kyunki yahan ==sati pratha, kulin vivah, baal vivah, aur chhuachhut== jaisi buraaiyan phaili hui hain. Is hamle ke jawab mein bhartiya intellectuals ne chup baithne ke bajaye apne samaj aur dharam ki buraaiyon ko theek karne ke liye bade samajik andolan shuru kiye.

Samaj-shastra ke hisab se yeh sudhar koi ek jaise nahi the; yeh do bilkul alag dharon mein bate huye the: ek taraf ==unchi jati ka liberal sudharvad== tha jo shastron ka sahara lekar purani buraaiyan hatana chahta tha, aur doosri taraf ==radical anti-caste andolan== tha jisne Brahminical granthon ko khareej karke Shudron, Daliton aur mahilaon ki azaadi ka bigul phoonka. [[trap:Kabhi bhi 19th-century ke reforms ko ek akela manch mat likhna; elite Bhadralok aur zameeni Satyashodhak ke class aur caste motives mein zameen-aasman ka antar tha.]]

## Do Mukhya Dharaayein: Liberal Sudharvad vs Radical Dalit-Shudra Chetna

### 1. Unchi Jatiyon ka Liberal Sudharvad
Shehri padhe-likhe vargon jaise Raja Rammohan Roy, Ishwar Chandra Vidyasagar aur M.G. Ranade ne shuru kiya:
- **Brahmo Samaj (1828):** Raja Rammohan Roy ne shuru kiya; murti puja ka virodh, ek Ishwar mein vishwas, aur Sati pratha ke khilaf ladaai ladi jisse 1829 mein Lord William Bentinck ne Regulation XVII se Sati ko jurm banaya.
- **Prarthana Samaj (1867):** Bombay mein M.G. Ranade aur Bhandarkar ke netritva mein shuru hua; inter-caste khana, vidhwa punarvivah aur ladkiyon ki shiksha par zor diya par dharam ke bheetar reh kar.
- **Arya Samaj (1875):** Swami Dayanand Saraswati ne "Vedon ki or lauto" ka naara diya. Janm par aadhrit jati ka khandan kiya, murti puja aur baal vivah ka virodh kiya, DAV schools khole aur ==Shuddhi== (ghar wapsi) andolan chalaya.

### 2. Radical Anti-Caste Zameeni Dhara
Neechi jatiyon aur shoshit samaj ke krantikari netaon ne shuru kiya jo samajhte the ki shastra shoshan ka hathiyar hain:
- **Satyashodhak Samaj (1873, [[thinker:Jyotirao Phule]]):** Apni kitaab *Gulamgiri* (1873) mein Phule ne Brahminical hegemony ko nanga kiya aur use America ke ghulam pratha ke barabar bataya. Unhone Raja Bali ko kisanon ka nyay-priya raja bataya jise Aryan netaon ne dhokhe se mara tha. Phule ne bina pandit ke shaadi karwayi aur apni patni Savitribai Phule ke sath milkar 1848 mein Pune mein ladkiyon ka pehla school khola.
- **SNDP Yogam (1903, Sri Narayana Guru):** Kerala mein jahan Ezhava jati ke sath bhishan chhuachhut aur doori ka bhedbhav hota tha, Sri Narayana Guru ne naara diya: ==One Caste, One Religion, One God for Man==. 1888 mein Aruvippuram mein unhone bina Brahmin pandit ke shivling sthapit karke dharam par unchi jatiyon ki monopoly tod di.
- **Baba Saheb Ambedkar ka Sangharsh ([[thinker:B.R. Ambedkar]]):** Ambedkar ne Phule ki virasat ko aage badhate huye 1927 mein Mahad Talab ka Satyagraha kiya, *Manusmriti* jalayi, aur kaha ki jati ko shastron se theek nahi kiya ja sakta, use poori tarah todna (annihilation of caste) hi ekmatra rasta hai.

| Dimension | Upper-Caste Liberal Dhara (Brahmo / Prarthana) | Anti-Caste Radical Dhara (Satyashodhak / SNDP) |
| --- | --- | --- |
| Samajik aur Jati Aadhar | Shehri unchi jati ke Brahmin, Kayastha, Bhadralok | Shudra, Ati-Shudra, Ezhava, kisan aur Dalit |
| Shastron par Nazariya | Vedon aur Upanishadon se sudhar ko sahi thehraya | Shastron ko Brahminical shoshan ka hathiyar bataya |
| Jati par Stance | Thoda lachilapan aur kripa-drishti | Jati vyavastha ka jadd se vinash |
| Sangharsh ka Mancha | Assembly petitions, kanooni bahas, shastriya charcha | Zameeni schools, kisan sangathan, civic satyagraha |

## Jyotirao Phule: Kisanon ke Masiha aur Radical Sudharak

Aam kitabein Phule ko sirf ek school kholne wala batati hain, par samaj-shastra unhe kisanon ka pehla bada sociologist maanta hai:
- **Colonial Kheti ke Shoshan ka Pardafaash:** Apni 1883 ki kitaab *Shetkaryacha Asud* (The Cultivator’s Whipcord) mein Phule ne bataya ki kaise British sarkari tax aur gaon ke Brahmin Kulkarni (patwari) milkar Kunbi kisan ka khoon choos rahe the.
- **Modern Kheti ki Maang:** Phule ne sarkari nehrein, baandh, kheti ke modern colleges, behtar pashupalan aur saste karz ki maang ki taaki kisan sahukaron ke jaal se azaad ho sakein.
- **Sabhi ke Liye Shiksha:** [[thinker:Savitribai Phule]] aur Fatima Sheikh ke sath milkar unhone science, tark aur safai sikhane wale schools khole aur shiksha ko azaadi ka sabse bada hathiyar (*Trutiya Ratna*) bataya.

## Har Dharam mein Mahila Shiksha ki Shuruat

Mahila shiksha ki ladaai sirf kisi ek dharam tak seemit nahi thi; yeh Hindu, Muslim, Sikh aur Parsi sabhi samudayon mein ladi gayi:

### 1. Hindu Prayas
Ishwar Chandra Vidyasagar ne Bengal mein 35 se zyada girls’ schools khole aur Bethune School (1849) ke sachiv rahe. Maharashtra mein D.K. Karve ne vidhwaon ki padhai ke liye apni zindagi lagayi aur 1916 mein SNDT Women’s University banayi.

### 2. Muslim Samuday ke Prayas
Sir Syed Ahmad Khan ne Aligarh Movement chalaya. Unke baad Sheikh Abdullah aur unki patni Waheed Jahan Begum ne 1906 mein Aligarh Girls’ School khola. Wahin feminist lekhika [[thinker:Begum Rokeya Sakhawat Hossain]] ne *Sultana’s Dream* (1905) likha aur 1911 mein Calcutta mein Sakhawat Memorial Girls’ School khola taaki purdah-nasheen ladkiyan science aur aazadi seekh sakein.

### 3. Sikh aur Parsi Prayas
Punjab mein Singh Sabha Movement (1873) ne Kanya Mahavidyalaya khol kar ladkiyon ko Gurmukhi aur modern subjects padhaye. Bombay mein Parsi sanstha Rahnumai Mazdayasnan Sabha (1851) ne Naoroji Furdoonji ke sath milkar co-education aur ladkiyon ki shaadi ki umar badhane ke liye kaam kiya.

## Samaj-shastriya Samiksha: Uplabdhiyan vs Seemayein

Samajik sudharon ne naya rasta khola zaroor, par unme kai badi kamiyan bhi thin:

### 1. Mukhya Uplabdhiyan
- **Modern Public Sphere ka Janam:** Akhbaron aur sarvajanik bahason ke zariye ek aisi jagah bani jahan aam log kanoon aur dharam par bejhijhak bol sakte the (Habermas ka bourgeois public sphere).
- **Kanooni Suraksha:** Andolanon ke dabav se bade kanoon bane: Sati pratha ka ant (1829), Vidhwa Punarvivah Act (1856), Native Marriage Act (1872) aur Age of Consent Act (1891).
- **Nayi Mahila Chetna:** School khulne se mahilaon ko aage aane ka mauka mila; pehli mahila doctor (Anandi Gopal Joshi) aur samaj-sudharak ubhre.

### 2. Samajik Seemayein aur Virodhabhas
- **Partha Chatterjee ka "Nationalist Resolution":** Sociologist [[thinker:Partha Chatterjee]] ne bataya ki unchi jati ke netaon ne mahila shiksha ko ghar ke andar qaid kar diya (*Ghar* vs *Bahar*). Ladkiyon ko isliye padhaya gaya taaki woh ek sanskari, padhi-likhi patni aur maa ban sakein, jabki bahar ki dunya par mardon ka hi dabdaba raha.
- **Shastron ki Qaid:** Vidyasagar aur Roy jaise netaon ne azaadi aur insaaf ke bajaye shastron ke shlok dhoondhne mein saal bita diye, jisse purane granthon ki pakad aur mazboot ho gayi.
- **Communalism ka Khatra:** Arya Samaj ke Shuddhi andolan aur gauraaksha sabhaon ke jawab mein Tabligh aur Tanzim shuru huye, jisse dono samudayon ke beech nafrat badhi aur communalism ko hawa mili.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1828–1829',
        title: 'Brahmo Samaj aur Sati ka Ant',
        text: 'Raja Rammohan Roy ne Brahmo Samaj banaya; Regulation XVII se Sati par kanooni rok lagi.',
      },
      {
        year: '1848',
        title: 'Phule ka Pehla Girls’ School',
        text: 'Jyotirao aur Savitribai Phule ne Pune mein neechi jati ki ladkiyon ke liye pehla school shuru kiya.',
      },
      {
        year: '1856',
        title: 'Vidhwa Punarvivah Kanoon',
        text: 'Vidyasagar ke lagatar sangharsh se Hindu Widows’ Remarriage Act pass hua.',
      },
      {
        year: '1873',
        title: 'Satyashodhak Samaj ki Sthapna',
        text: 'Phule ne Gulamgiri kitaab likhi aur Brahminical dabdabe ke khilaf zameeni andolan chalaya.',
      },
      {
        year: '1875',
        title: 'Arya Samaj aur Aligarh Movement',
        text: 'Dayanand Saraswati ne Arya Samaj banaya; Sir Syed ne modern shiksha ka kendra sthapit kiya.',
      },
      {
        year: '1888–1903',
        title: 'Aruvippuram Shivling aur SNDP Yogam',
        text: 'Sri Narayana Guru ne Ezhava samaj ko dharamik barabari dila kar SNDP Yogam banaya.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Colonial Hamla', text: 'Angrezi afsaron aur missionaries ne bhartiya samaj ko barbaric bataya' },
      { label: 'Liberal Jawab', text: 'Roy aur Vidyasagar ne shastron ka sahara lekar Sati aur baal vivah par rok lagwayi' },
      { label: 'Radical Dalit Bigul', text: 'Phule aur Narayana Guru ne shastron ko khareej karke jati-ant ki ladaai ladi' },
      { label: 'Har Dharam mein Shiksha', text: 'Muslims (Rokeya), Sikhs (Singh Sabha) aur Parsis ne ladkiyon ke schools khole' },
      { label: 'Samvidhanik Manzil', text: 'Ambedkar ne inhi ladaaiyon ko azaad Bharat ke fundamental rights mein badal diya' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Satyashodhak Samaj',
    meaning:
      'Jyotirao Phule dwara 1873 mein sthapit satya-shodhak sangathan jo Shudron aur Ati-Shudron ko dharmik shoshan se azaad karana chahta tha.',
  },
  {
    kind: 'keyTerm',
    term: 'SNDP Yogam',
    meaning:
      'Kerala ke Ezhava samuday ka samajik andolan jise Sri Narayana Guru ne dharamik aur shaikshanik barabari ke liye chalaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Nationalist Resolution of Women’s Question',
    meaning:
      'Partha Chatterjee ka concept jisme mard netaon ne mahilaon ko modern sanskari maa banane ke liye padhaya, par azaadi nahi di.',
  },
  {
    kind: 'keyTerm',
    term: 'Shuddhi Movement',
    meaning:
      'Arya Samaj ka reconversion andolan jiska maksad dusre dharamon mein gaye logon ko wapas Vedic dharam mein laana tha.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Answer Strategy: Bhadralok aur Phule ko hamesha compare karein',
    body: 'UPSC ke 20-mark ke answer mein upper-caste liberal sudharvad (Brahmo Samaj) ko zameeni radical andolan (Satyashodhak Samaj) ke sath zaroor contrast karein. Dikhayein ki jahan Roy shastron ki safai chahte the, wahin Phule ne poori caste hierarchy ko todne ki maang ki.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Phule ki Krishi Kitaab yaad rakhein: Shetkaryacha Asud (1883)',
    body: 'Phule ko sirf caste reformer mat likhiye. Unki 1883 ki kitaab "Kisan ka Koda" (The Cultivator’s Whipcord) ka zikr karein jahan unhone nehron, baandhon aur saste sarkari karz ki maang ki thi.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Mahila shiksha ko sirf Hindu sudharakon tak seemit mat rakhna',
    body: 'Examiner achhe marks deta hai jab aap har dharam ke prayas dikhate hain: Begum Rokeya ka Sakhawat School (Muslim), Singh Sabha ka Kanya Mahavidyalaya (Sikh) aur Rahnumai Sabha (Parsi) zaroor quote karein.',
  },
  {
    kind: 'answerBox',
    intro:
      '19th century ke samajik sudhar andolanon ne bhartiya samaj mein sarvajanik charcha, kanooni suraksha aur jati-virodhi aawazon ki neev rakhi.',
    points: [
      'Do alag dharaayein: Upper-caste liberal netaon ne shastron ka sahara liya, jabki radical subalterns (Phule, Narayana Guru) ne Brahminical dabdaba toda.',
      'Phule ka complete model: Jati-ant ke sath kisanon ki modern kheti (nehrein, baandh) aur mahila shiksha ko aapas mein joda.',
      'Har dharam mein shiksha: Vidyasagar aur Phule ke alawa Begum Rokeya (Muslim), Singh Sabha (Sikh) aur Parsis ne ladkiyon ke school khole.',
      'Kanooni jeet: Sati ka ant (1829), Vidhwa Vivah (1856) aur Age of Consent (1891) ne modern civil kanoon ki shuruat ki.',
      'Seemayein (Chatterjee, Chakravarti): Mahilaon ko sanskari gharelu maa banaya gaya, aur revivalism se communalism ka khatra badha.',
    ],
    conclusion:
      'In kamiyon ke bawajood, inhi andolanon ne azaad Bharat ke samvidhanik loktantra aur barabari ke mulyon ki buniyad tayyar ki.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary:
    '19th century ke samajik sudhar andolanon ne ek aisi dynamic jagah banayi jahan unchi jati ke liberal shastriya sudhar aur zameeni Dalit-Shudra vidroh aapas mein takraye, jisne azaad Bharat mein mahila shiksha aur barabari ke kanoon ki zameen tayyar ki.',
  mindMap,
  sections,
}
