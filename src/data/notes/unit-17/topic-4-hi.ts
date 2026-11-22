import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 17.4 — Parivar Ka Household Dimension',
  center: 'Household Dimension (A.M. Shah)',
  subtitle: 'Household vs Family • Developmental Cycle • Kolenda Ke 12 Types • Census Trends',
  branches: [
    {
      title: 'Household vs Family: A.M. Shah',
      color: 'lavender',
      thinkers: ['A.M. Shah', 'Meyer Fortes', 'I.P. Desai', 'K.M. Kapadia'],
      points: [
        'Household (Ghar/Chulah): Ek chhat ke neeche rehna, ek hi chulhe par khana pakana aur rozana ka hisaab share karna',
        'Family (Kutumb/Parivar): Rishtedaari, dharmik farz, purkhon ki zameen aur naitik bandhano ka vishaal daayra',
        'Census Ka Dhokha: Census mein ghar ka average size 4.8 aane ka matlab yeh nahi hai ki joint family mar chuka hai',
        'Multi-Household Parivar: Ek hi sanyukta khaan-daan ke sadasya alag-alag shehron mein alag chulha jala sakte hain',
      ],
    },
    {
      title: 'Ghar Ka Developmental Cycle',
      color: 'yellow',
      thinkers: ['A.M. Shah', 'Meyer Fortes', 'T.N. Madan', 'M.N. Srinivas'],
      points: [
        'Processual View: Ghar koi sthir dabba nahi hai; yeh peedhi-dar-peedhi badalta, phailta aur toot-ta rehta hai',
        'Expansion (Fusion): Naye jode ki shaadi se nuclear unit lineal joint (dada-pota) household mein badal jaata hai',
        'Fission (Partition): Pita ki maut ya aapsi tanaav ke baad bhai chulha alag karke naye nuclear ghar bana lete hain',
        'Chakra Ka Dohraav: Wahi naya bana chhota ghar agle bees saal mein fir se bada sanyukta ghar ban jaata hai',
      ],
    },
    {
      title: 'Kolenda Ke 12 Parivarik Roop',
      color: 'mint',
      thinkers: ['Pauline Kolenda', 'F.G. Bailey', 'Patricia Uberoi', 'Bina Agarwal'],
      points: [
        'Binary Ki Aalochna: Sirf "nuclear" ya "joint" kehna Bharatiya gharelu zindagi ki sachai ko chhipa deta hai',
        'Barah Shreniyan: Single-person, sub-nuclear, supplemented nuclear, lineal joint se lekar collateral joint tak',
        'Supplemented Nuclear: Pati-patni, bachhe aur sath mein boorhi maa—yeh Bharat ka sabse aam parivarik roop hai',
        'Sanyukta Aadhar: Kolenda ke aakde dikhate hain ki sanyukta aur supplemented ghar aaj bhi Bharat ki neev hain',
      ],
    },
    {
      title: 'Census Trends Aur Naye Roop',
      color: 'pink',
      thinkers: ['Jan Breman', 'Reetika Khera', 'Yogendra Singh', 'Census 2011'],
      points: [
        'Ghat-ta Aakar: National average 1981 mein 5.7 se gir kar 2011 mein 4.8 aur NFHS-5 mein ~4.4 sadasya reh gaya hai',
        'Single-Person Ghar: Der se shaadi, corporate jobs, aur buzurga vidhwaon ke akelepan se akele rehne wale badhe hain',
        'Skip-Generation Ghar: Gaon mein kheti kharab hone par maa-baap shehar chale jaate hain aur dada-dadi bachhe paalte hain',
        'Buzurgo Ki Lambi Umar: Life expectancy 32 se 70 saal pahunchne se peedhiyon ka sath lamba hua par dekhbhaal ka tanaav badha',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u07-02-indian-family-patriarchy.webp',
    alt: 'P2 Unit 7 infographic: Family, Marriage & Patriarchy in India — Joint Family Debate, Brahminical Patriarchy & Entitlements',
    caption: 'Family, Marriage & Patriarchy in India: A.M. Shah ka developmental cycle, Kolenda ka gharelu vargikaran aur badalte demographic aakde.',
    credit: 'UPSC OWL Sociology Visual Series',
  },
  {
    kind: 'md',
    body: `## Household Banam Family: A.M. Shah Ka Siddhant

Puraane daur mein British Census afsaron aur shuruaati vidwano ne ek badi galati ki: unhone "Household" aur "Family" ko ek hi cheez maan liya. Jab census mein dekha gaya ki Bharat mein har ghar mein ausatan 4 se 5 log hi rehte hain, toh unhone jhat se ailaan kar diya ki Bharat ka sanyukta parivar mar gaya hai.

Bharatiya samajshastri ==A.M. Shah== ne apni kitaab *The Household Dimension of the Family in India* (1973) mein is galatfehmi ki dhajjiyaan uda di. Unhone saaf kiya ki dono mein zameen-aasman ka farak hai:

* **Household (Ghar / Chulah):** Ek gharelu, aarthik aur physical unit. Isme woh log aate hain jo ek chhat ke neeche rehte hain, ek hi chulhe (*chulah*) par paka khana milkar khate hain, aur rozana ka kharcha ek sath chalate hain (commensality).
* **Family (Kutumb / Parivar):** Ek vishaal samajik, kanooni aur dharmik sanstha. Isme woh sabhi log aate hain jo ek hi purkhe ke khoon se jude hain, pushtaini zameen mein coparcenary hissa rakhte hain, aur aapas mein naitik farz nibhate hain.

A.M. Shah ne dikhaya ki ek hi sanyukta parivar alag-alag ilaaqon mein kayi households mein phaila ho sakta hai [[eg:Teen bhai jo naukri ke chalte Dilli, Mumbai aur gaon mein alag chulha jalate hain, par zameen saanjhi hai, baap ko paise bhejte hain aur har tyohar par gaon aakar sanyukta parivar nibhate hain]]. Isliye sirf chulha alag dekh kar yeh keh dena ki parivar toota hai, ek samajshastriya galati (*ecological fallacy*) hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Household (Ghar / Chulah)',
    rightTitle: 'Family (Parivar / Kutumb)',
    rows: [
      {
        aspect: 'Mukhya Pehchan',
        left: 'Ek chhat ke neeche rehna aur ek hi chulhe ka khana khana (Commensality)',
        right: 'Vansh, kanooni adhikar aur aapsi dharmik-bhavnatmak rishte (Genealogy)',
      },
      {
        aspect: 'Bhoogolik Seema',
        left: 'Sirf us ek makaan ya flat tak simit jahan log roz sote aur khate hain',
        right: 'Hazaaron kilometer door alag-alag shehron aur deshon mein phail sakta hai',
      },
      {
        aspect: 'Sthayitva (Stability)',
        left: 'Lachila; naukri badalne, ladai hone ya transfer se aasaani se toot jata hai',
        right: 'Sthayi; chulha tootne ke bawajood pushtaini zameen aur purkhon se juda rehta hai',
      },
      {
        aspect: 'Rozana Ka Kaam',
        left: 'Roz ka khana pakana, safai, bachho ko school bhejna aur domestic kharcha',
        right: 'Vansh aage badhana, shadiyon ke gathbandhan banana aur sankat mein sahara dena',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Gharelu Samooh Ka Developmental Cycle (Vikas Chakra)

Meyer Fortes ke vicharon ko aage badhate hue A.M. Shah ne samjhaya ki Bharatiya parivar ko kabhi bhi ek sthir dabba mat samjho. Har ghar apni zindagi mein ek ==developmental cycle== (phailne aur tootne ke chakra) se guzarta hai:

### Vikas Chakra Ke Mukhya Charn:
1. **Shuruat (Inception):** Ek naye jode ki shaadi hoti hai aur woh apne chhote bachho ke sath ek naya chhota ghar shuru karte hain (*nuclear household*).
2. **Vistar (Expansion / Fusion):** Jab bete bade hote hain, unki shaadi hoti hai aur bahuyein ghar aati hain, toh wahi chhota ghar ab bada *lineal joint household* (dada-baap-beta) ban jaata hai. Potey-poti paida hone se ghar ka aakar aur gehra ho jata hai.
3. **Collateral Sanyukta Phase:** Pita ki maut ke baad sabhi shaadishuda bhai kuch saalon tak ek sath milkar rehte hain, jise *collateral joint household* kehte hain.
4. **Algaav (Fission / Partition):** Samay ke sath jagah ki kami, patniyon ke aapsi tanaav ya kharche ke hisaab-kitab ko lekar bhai chulha alag kar lete hain aur property baant kar alag-alag *nuclear households* bana lete hain.
5. **Naya Janm:** Har naya bana nuclear ghar agle 20-25 saalon mein fir se bada sanyukta parivar banega.

Iska matlab yeh hua ki gaon mein kisi nuclear ghar ko dekh kar yeh mat socho ki sanyukta parivar khatam ho gaya; woh ghar sirf apne vikas chakra ke ek daur se guzar raha hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Nuclear Shuruat', text: 'Naya shaadishuda joda apne bachho ke sath akele chulhe par ghar shuru karta hai' },
      { label: 'Lineal Vistar', text: 'Bete bade hote hain, bahuyein aati hain aur ghar lineal joint family ban jaata hai' },
      { label: 'Collateral Phase', text: 'Buzurg pita ke guzarne ke baad shaadishuda bhai kuch saal tak saanjha chulha chalate hain' },
      { label: 'Chulhe Ka Batwara', text: 'Tanaav aur jagah ki kami se chulha alag hota hai aur naye nuclear units ban jaate hain' },
    ],
  },
  {
    kind: 'md',
    body: `## Pauline Kolenda Ka 12-Prakar Ka Parivarik Vargikaran

American anthropologist ==Pauline Kolenda== ne apni kitaab *Regional Differences in Family Structure in India* (1987) mein saaf kiya ki Bharat ke parivaron ko sirf "nuclear" ya "joint" kehna zameeni sachai ke sath na-insaafi hai.

Unhone Bharat ke gharelu daayre ko **12 structural forms** mein vargikrit kiya:

| Kolenda Ka Household Type | Gharelu Sadasya Aur Samajshastriya Arth |
| :--- | :--- |
| **1. Single-Person** | Ek akele vyakti ka ghar (jaise buzurga vidhwa ya akela pardesi mazdoor) |
| **2. Sub-Nuclear** | Puraane toote hue ghar ka hissa (jaise vidhwa maa aur uske kunwaare bachhe) |
| **3. Supplemented Sub-Nuclear** | Sub-nuclear parivar ke sath kisi anya ristedar ka rehna (jaise vidhwa maa, beta aur vidhwa behan) |
| **4. Nuclear** | Pati-patni aur unke kunwaare bachhe |
| **5. Supplemented Nuclear** | Nuclear parivar ke sath koi ek buzurga ya kunwaara rishtedaar (jaise boorhi maa)—Bharat mein sabse aam |
| **6. Lineal Joint** | Do peedhiyon ke shaadishuda jode (mata-pita aur unka shaadishuda beta aur bahu) |
| **7. Collateral Joint** | Do ya do se zyada shaadishuda bhai jo apne bachho ke sath ek chhat ke neeche rehte hain |
| **8. Lineal-Collateral Joint** | Mata-pita aur unke do ya zyada shaadishuda bete aur unke bachhe |
| **9–11. Supplemented Joint Forms** | Kisi bhi joint ghar ke sath kisi anya vidhwa ya kunwaare rishtedaar ka rehna |
| **12. Other / Anyata** | Aise ajeeb-o-gareeb rishte jo classical shreniyon mein fit nahi baithte |

Kolenda ke field studies ne dikhaya ki jab hum ==supplemented nuclear household== (jahan boorhi maa ya chhota bhai sath rehta hai) ko ginte hain, toh Bharat mein sanyukta parivar ki buniyaad behad mazboot dikhayi deti hai.`,
  },
  {
    kind: 'md',
    body: `## Census Trends: Ghat-ta Aakar Aur Ubharte Naye Roop

Bharat ki demographic tasveer pichhle chaar dashakon mein tezi se badli hai:

### 1. Household Ke Aakar Mein Girawat
Census aur National Family Health Survey (NFHS) ke aakde dikhate hain ki gharon ka ausatan aakar lagatar kam hua hai:
* **1981 Census:** 5.7 sadasya prati ghar.
* **2011 Census:** 4.8 sadasya prati ghar (gaon mein 4.9, shehar mein 4.6).
* **NFHS-5 (2019–21):** ~4.4 sadasya prati ghar.

### 2. Single-Person Households Ka Badhna
Shehron mein akele rehne walo ki taadad tezi se badhi hai, jiske teen bade kaaran hain:
* **Der Se Shaadi:** Shehro mein padhe-likhe yuva 30 saal tak akele flat rent par le kar rehte hain.
* **Buzurg Mahilaon Ka Akelapan:** Mahilaon ki umar mardon se zyada hoti hai aur aamtaur par patni pati se chhoti hoti hai, isliye lakho buzurga vidhwaayein gaon aur shehron mein akeli rehti hain.
* **Pardesi Mazdoor:** Bihar aur UP se akele shehar gaye mazdoor jahan kamre ka kiraya zyada hone se parivar ko gaon chhodna padta hai [[eg:Surat ke textile mill mein ek hi kamre mein 8-10 akele mazdoor milkar rehte hain]].

### 3. Skip-Generation Ghar Aur Buzurgo Ki Lambi Umar
* **Skip-Generation Households:** Gaon mein kheti kharab hone par yuva mata-pita shehar katori-bhaat khati majdoori karne chale jaate hain, aur gaon mein dada-dadi ke sahare bachhe chhod jaate hain (Jan Breman ka *footloose labour*).
* **Buzurgo Ki Lambi Umar:** Azaadi ke waqt ausatan umar (life expectancy) 32 saal thi jo aaj 70 saal se paar ho gayi hai. Isse mata-pita 30-40 saal tak apne baalig bachho ke sath rehte hain, jisse chhote shehri 2-BHK flaton mein dekhbhaal aur tanaav ki nayi samasyaen paida ho rahi hain.`,
  },
  {
    kind: 'keyTerm',
    term: 'Household vs Family',
    meaning: 'A.M. Shah ka siddhant jo ek chhat ke commensal ghar (Chulah) aur vishaal kanooni-dharmik khaan-daan (Parivar) ke antar ko saaf karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Developmental Cycle',
    meaning: 'Meyer Fortes aur A.M. Shah ka vichar jiske mutabiq har ghar peedhi-dar-peedhi phailne, judne aur tootne ke daur se guzarta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Supplemented Nuclear Household',
    meaning: 'Pauline Kolenda ka sabse aam roop jahan nuclear parivar ke sath boorhi vidhwa maa ya kunwaara bhai ek chhat ke neeche rehta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Skip-Generation Household',
    meaning: 'Aisa gharelu roop jahan beech ki peedhi (mata-pita) majdoori ke liye shehar chali jaati hai aur buzurga dada-dadi gaon mein poto ko paalte hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Census Aakdon Par Shah Ki Chetawni',
    body: 'UPSC ke answers mein A.M. Shah ka Census par vishleshan zaroor likhein. Census wale sirf ek chulhe ko ginte hain. Ek 4 logon ka nuclear ghar aksar gaon ke joint khaan-daan ka hi hissa hota hai jo har mahine paise bhejta hai aur unke faisle maanta hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Lineal Joint Banam Collateral Joint',
    body: 'Lineal Joint aur Collateral Joint ko aapas mein mix mat karna. Lineal joint mein peedhiyon ka vistar hota hai (baap aur shaadishuda beta). Collateral joint mein barabari ke shaadishuda bhai pita ke guzarne ke baad ek sath rehte hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Kolenda Ka Supplemented Nuclear Model',
    body: 'Pauline Kolenda ne dikhaya ki Bharat mein sabse zyada "supplemented nuclear" ghar paye jaate hain. Yeh nuclear azaadi aur sanyukta naitik farz (khaaskar boorhi maa ki dekhbhaal) ke beech ka pul bante hain.',
  },
  {
    kind: 'answerBox',
    intro: 'A.M. Shah ke household model aur developmental cycle par 20-mark sawal ka structure is tarah banayein:',
    points: [
      'Household (chulha aur ek makaan) aur Family (dharmik aur khoon ke rishte) ke buniyaadi farak se uttar shuru karein.',
      'Census ke chhote aakar (4.8 log) ko sanyukta parivar ka patan maan lene ki galati (ecological fallacy) ko expose karein.',
      'Developmental cycle ke sabhi charan samjhao: Inception (nuclear) -> Expansion (lineal joint) -> Collateral phase -> Fission (chulha alag hona).',
      'Pauline Kolenda ke 12-prakar ke vargikaran se dikhao ki kaise "supplemented nuclear" roop parivarik sanyuktata ko bachata hai.',
      'Aaj ke demographic badlaav darj karo: Majdoori ke chalte skip-generation ghar aur lambi umar (longevity) ke chalte buzurgo ki dekhbhaal ke sankat.',
    ],
    conclusion: 'Nishkarsh mein likhein ki Bharat mein ghar koi band kamra nahi balki ek ghoomta hua chakra hai jahan makaan tootte hain par parivar ke sanyukta bandhan zinda rehte hain.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary:
    'Household parivar ka woh zameeni roop hai jahan rozana ki zindagi, khana-peena aur aapsi dekhbhaal hoti hai. A.M. Shah ne Bharat ke samajshastra mein ek bada yogdan diya jab unhone "Household" (ek chulhe par khana khane wala ghar) aur "Family" (dharmik aur khoon ke rishte) ke farak ko saaf kiya. Unka "developmental cycle" yeh dikhata hai ki ghar samay ke sath badhte aur bante rehte hain. Pauline Kolenda ke 12 prakar aur Census ke badalte aakde yeh saabit karte hain ki akelepan aur migration ke daur mein bhi sanyukta rishte alag-alag roop mein zinda hain.',
  mindMap,
  sections,
}
