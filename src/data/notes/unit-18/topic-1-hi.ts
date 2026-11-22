import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 18.1 — Bharat Mein Dharmik Samuday (Hinglish)',
  center: 'Dharmik Samuday Aur Samaj',
  subtitle: 'Demographic Pluralism • Rozmarra Ka Syncretism • Islam Aur Christianity Mein Jaati • Sarna Code Demand',
  branches: [
    {
      title: 'Demography Aur Cultural Pluralism',
      color: 'lavender',
      thinkers: ['Yogendra Singh', 'Amartya Sen', 'T.K. Oommen', 'Bipan Chandra'],
      points: [
        'Census 2011 aakde: Hindu 79.8%, Muslim 14.2%, Christian 2.3%, Sikh 1.7%, Buddhist 0.7%, Jain 0.4%',
        'Cultural Pluralism: Salad-bowl / mosaic model jisme har samuday apni pehchan bachaye rakhta hai',
        'Unity in Diversity: Zabaradasti homogenize karne ki jagah overlapping paramparaon ka dynamic balance',
        'Heterogenetic aur orthogenetic badlav milkar composite Ganga-Jamuni Tehzeeb banate hain',
      ],
    },
    {
      title: 'Rozmarra Ka Syncretism Aur Saajha Astha',
      color: 'yellow',
      thinkers: ['T.N. Madan', 'Ashis Nandy', 'J.J. Roy Burman', 'Asghar Ali Engineer'],
      points: [
        'Textual religion vs Lived religion: Kitabi kanoon sakht hain par aam log mil-jul kar pooja karte hain',
        'Saajhi pavitra jagah: Ajmer Sharif Dargah, Velankanni shrine, Sabarimala-Vavar Swami sangam',
        'Bhakti-Sufi aandolan: Sant Kabir aur Guru Nanak ne dharmik kattarta todkar samaanta sikhayi',
        'Nandy ka logic: Aadhunik bureaucratic secularism se pehle gaon-dehat mein natural vernacular sahansheelta thi',
      ],
    },
    {
      title: 'Islam Aur Christianity: Jaati Ka Asar',
      color: 'mint',
      thinkers: ['Imtiaz Ahmad', 'Rowena Robinson', 'Ghaus Ansari', 'Louis Dumont'],
      points: [
        'Muslim Samaj Mein Jaati: Ashraf (khandani ameer), Ajlaf (peshevar converts), aur Arzal (dalit converts)',
        'Pasmanda Aandolan: Backward aur Dalit Muslim ka Ashraf dabdabe ke khilaf aawaz uthana',
        'Christianity Mein Jaati: Syrian Christian khud ko upper-caste mante hain jabki Dalit Christian doyam darja jhelte hain',
        'Kshetriya Riti-Riwaj: Kerala ke Mappila Muslim mein matriliny aur Nagaland mein tribal customary Christian milan',
      ],
    },
    {
      title: 'Hindu Vividhta Aur Sarna Ki Maang',
      color: 'pink',
      thinkers: ['B.R. Ambedkar', 'M.N. Srinivas', 'Verrier Elwin', 'K.S. Singh'],
      points: [
        'Hindu Dharm Ki Aantarik Vividhta: Shaiva, Vaishnava, Shakta mat aur Arya Samaj jaise sudhar aandolan',
        'Little vs Great Tradition: Gramadevata aur dehati pooja vs Vedic Brahmanical sanskritik parampara',
        'Sarna Dharam: Adivasiyon ki prakriti pooja (Jaherthan, Sal ke ped, Bongas) jisme koi murti ya caste nahi hoti',
        'Census Code Ki Ladai: Jharkhand mein Sarna Code pass karke alag census column ki purzor maang',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u08-01-religious-communities-web.webp',
    alt: 'P2 Unit 8 infographic: Bharat Ke Dharmik Samuday — Demographic Pluralism & Syncretic Traditions in India',
    caption: 'Demographic Pluralism & Syncretic Traditions in India — Bharat Ke Dharmik Samuday ka visual naksha.',
  },
  {
    kind: 'md',
    body: `### 1. Jan-Sankhya Vividhta Aur Cultural Pluralism Ka Nazariya

Aasaan shabdon mein samjho: Bharat duniya ke lagbhag sabhi bade dharmo ka ghar hai. Lekin yahan alag-alag dharmo ko kisi ek bhatti mein pighlaakar ek jaisa nahi banaya gaya, balki Bharat ek rang-birange mosaic ya "salad bowl" ki tarah viksit hua. Samajshastra mein isko ==Cultural Pluralism== kehte hain—ek aisi vyavastha jahan vividh dharmik aur sanskritik samuday apni khas pehchan banaye rakhte hue ek sanjha samvidhanik chhatri ke neeche barabari se rehte hain.

Census 2011 ke mutabiq Bharat ka dharmik aakda is prakar hai:
- **Hindu**: 79.8% (96.63 crore — pan-Indian bahusankhyak)
- **Muslim**: 14.2% (17.22 crore — duniya ki teesri sabse badi Muslim aabadi)
- **Christian**: 2.3% (2.78 crore — South India, North-East aur coastal belts mein kendrit)
- **Sikh**: 1.7% (2.08 crore — mukhya roop se Punjab, Haryana aur Delhi mein)
- **Buddhist**: 0.7% (84 lakh — maharashtrian Neo-Buddhists aur Himalayan Buddhist)
- **Jain**: 0.4% (45 lakh — vyapar aur shahri kshetron mein prabhavshali)
- **Anya Dharm (ORP)**: 0.7% (jisme Sarna, Donyi-Polo aur Sanamahi jaise indigenous tribal dharam shamil hain)
- **Dharm Nahi Bataya**: 0.2%

| Dharmik Samuday | Census 2011 Bhagidari | Mukhya Kshetra | Samajshastriya Visheshata |
| :--- | :--- | :--- | :--- |
| **Hindu** | 79.8% | Desh ke adhiktam rajya | Sectarian vibhajan (Shaiva, Vaishnava, Shakta); varna-jati hierarchy; Great-Little traditions |
| **Muslim** | 14.2% | UP, Bengal, Bihar, Kerala, Assam, J&K | Ashraf-Ajlaf-Arzal shreni; Pasmanda chetna; Sufi dargah aur bhashai apnapan |
| **Christian** | 2.3% | Kerala, Goa, Tamil Nadu, Nagaland, Mizoram | Syrian vs Dalit Christian bhedbhav; alag kabristan; North-East mein tribal indigenization |
| **Sikh** | 1.7% | Punjab, Haryana, Delhi | Langar aur Sangat ki barabari; Jat banam Mazhabi Sikh samajik doori |
| **Buddhist** | 0.7% | Maharashtra, Ladakh, Sikkim | Ambedkar ka Navayana dharmantharan; jati-viheen samaj ka aavahan |
| **Jain** | 0.4% | Maharashtra, Rajasthan, Gujarat | Digambara aur Shvetambara; Ahimsa parampara; unchi shiksha aur corporate udyam |

Jane-mane samajshastri [[thinker:Yogendra Singh]] ne bataya tha ki Bharatiya sanskriti ki taqat koi bandhi hui homogeneity nahi hai, balki *orthogenetic* (deshi) aur *heterogenetic* (bahar se aayi) paramparaon ka lagaatar samvaad hai. Bharat ka "Unity in Diversity" melting-pot nahi balki thali ya salad-bowl jaisa hai, jahan har katori ka apna swaad aur pehchan barkarar rehti hai [[eg:Purani Delhi ke Chandni Chowk mein ek hi sadak par Sis Ganj Gurdwara, Gauri Shankar Mandir, Baptist Church aur Fatehpuri Masjid sadiyon se aamne-saamne khade hain]].`,
  },
  {
    kind: 'compare',
    leftTitle: 'Melting Pot (Pighlaane Wala Model)',
    rightTitle: 'Cultural Pluralism (Salad Bowl Model)',
    rows: [
      {
        aspect: 'Mool Soch',
        left: 'Minorities ko apni purani pehchan mita kar dominant sanskriti mein ghul-mil jana chahiye',
        right: 'Sabhi dharmik v bhashai samooh apni khas pehchan bachaye rakhte hue ek rashtra ka hissa bante hain',
      },
      {
        aspect: 'Vividhta Par Nazariya',
        left: 'Bhed aur vividhta ko vikas mein rukawat ya rashtriya suraksha ke liye khatra mana jaata hai',
        right: 'Vividhta ko samajik sampatti aur sanskritik dharohar ke roop mein celebrate kiya jaata hai',
      },
      {
        aspect: 'State Ki Bhumika',
        left: 'Sarkar zabardasti ek bhasha, ek dharam aur ek jaisi sanskritik aachar-sanhita thopti hai',
        right: 'Sarkar sabhi sampradayon ko barabar sanrakshan aur adhikar (Article 25–30) deti hai',
      },
      {
        aspect: 'Bharatiya Sandarbh',
        left: 'Samvidhan nirmataon ne is model ko Bharat ki atma ke viruddh mankar kharij kiya',
        right: 'Ganga-Jamuni tehzeeb aur composite culture ke roop mein zameeni taur par laagu hai',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 2. Rozmarra Ka Syncretism Aur Saajha Pavitra Kshetra

Samajshastra mein do cheezon ka farak samajhna zaroori hai: ek hota hai ==Textual Religion== (kitabi niyam, panditon aur maulviyon ke kanoon) aur doosra hota hai ==Lived Religion== (aam log rozmarra ki zindagi mein dharam ko kaise jeete hain). Bharat mein chahe shastron ke kanoon kitne bhi sakht rahe hon, zameeni satah par logo ne hamesha ek-doosre ki aastha ko apnaya hai. Is aapsi mel-jol ko ==Syncretism== kaha jaata hai.

Vicharvan [[thinker:Ashis Nandy]] ne spasht kiya ki Bharat ke gaon-dehat mein aapsi bhaichara kisi western secularism ke dande se nahi, balki purani aam sahansheelta (*vernacular tolerance*) se chalta tha. Samajshastri [[thinker:T.N. Madan]] ne bhi dikhaya ki South Asia mein dharmo ki simayein hamesha khuli rahi hain aur aam janmanas ne sabhi fakiron aur sants ko sar aankhon par bithaya [[eg:Ajmer Sharif mein Khwaja Moinuddin Chishti ki Dargah par aane wale 60 pratishat se zyada shradhalu gair-Muslim hote hain jo mannat ka dhaga bandhte hain]].

Syncretism ke prateek:
1. **Sufi Dargah Aur Pir-Fakir**: Dargah aisi jagah bani jahan jati aur dharam ke bhed toot jaate hain. Delhi mein Nizamuddin Auliya ya Mumbai mein Haji Ali par Hindu, Muslim aur Sikh sabhi dua mangte hain.
2. **Saajhi Tirth Yatra**: Kerala mein Sabarimala Mandir jane wale har Ayyappa bhakt ko pehle Muslim yoddha Vavar Swami ki masjid mein jaakar mattha tekna padta hai tabhi uski yatra poori maani jaati hai.
3. **Velankanni Mata Ka Shrine**: Tamil Nadu ke Velankanni Church mein lakho Hindu aur Muslim aakar baal mundwate hain (tonsure) aur chandan ka lep lagate hain, jo aam South Indian mandiron ki parampara hai.
4. **Lok Tyohar Aur Sahyog**: Bihar ke Chhath Puja mein soop banane wale adhiktam dastakar Muslim hote hain, aur Maharashtra-Karnataka ke gaon mein Moharram ke taziye uthane aur tasha bajane mein Hindu naujawan barabar hissa lete hain.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Barabari Ka Siddhant',
        text: 'Islam aur Christianity kitabi taur par jaati-paati aur chhua-chhoot ko poori tarah nakarte hain',
      },
      {
        label: 'Varna Vyavastha Se Takrav',
        text: 'Bharat ke dharmantharit samuday apne purane peshe aur jati ke sanskar lekar naye dharam mein gaye',
      },
      {
        label: 'Aantarik Shrenikaran',
        text: 'Islam mein Ashraf-Ajlaf-Arzal aur Christianity mein Syrian banam Dalit Christian ka bhed bana',
      },
      {
        label: 'Pasmanda Aur Dalit Aandolan',
        text: 'Shoshit varg ne dharmo ke andar upper-caste dabdabe ke khilaf arakshan aur adhikar maange',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 3. Islam Aur Christianity: Jaati Aur Sthaniya Riti-Riwaj Ka Asar

Indian Sociology ka sabse bada kathan yeh hai ki Bharat ki mitti mein aate hi barabari sikhane wale dharmo par bhi jati vyavastha ka asar pad gaya. 

#### A. Bharatiya Muslim Samaj Mein Jaati Aur Shrenikaran
Prasiddha samajshastri [[thinker:Imtiaz Ahmad]] ne apni kitabon mein sabut ke sath sabit kiya ki Bharatiya Musalman koi ek saman samuday nahi hain, balki unme teen shreniyan hain:
1. **Ashraf (Khandani Shreshtha)**: Jo log Central Asia ya Arab se aane ka dava karte hain—*Sayyid*, *Sheikh*, *Mughal*, aur *Pathan*. Inhone zameenein, dharam ki gaddiyan aur unche pad sambhale.
2. **Ajlaf (Peshevar Pichhde Converts)**: Bharat ke dastakar aur kisaan jinhone Islam apnaya, jaise *Julaha/Ansari* (bunkar), *Dhobi*, *Teli*, *Darzi*, aur *Kunjra/Rayeen*.
3. **Arzal (Dalit Converts)**: Jo log safai ya chamde ke kam se jude the, jaise *Halalkhor* aur *Lalbegi*. Inke sath bhedbhav aur samajik doori barkarar rahi.

Is shoshan ke khilaf aaj **Pasmanda Muslim Aandolan** khada hua hai, jo Ashraf elite ke dabdabe ko chunauti deta hai aur pichhde Musalmano ke liye samajik nyaay ki maang karta hai. Saath hi shadiyon mein *Haldi*, *Mehendi*, aur *Sehra* jaise riwaj sidhe local Hindu sanskriti se aate hain, aur Kerala ke Mappila Musalman matriliny (marumakkathayam) ka palan karte hain.

#### B. Christianity Aur Jaati Ka Roop
- **Syrian Christians (Kerala)**: Yeh khud ko St. Thomas ke daur ke unchi jaati ke Brahmin vanshaj batate hain, zameendari me aage rahe hain aur shadi ke mamle mein sakht endogamy rakhte hain.
- **Dalit Christians**: 19th aur 20th sadi mein chhua-chhoot se bachne ke liye converted Dalit, lekin church ke andar bhi unhe alag baithna pada (dual pews), alag kabristan mein dafnaya gaya aur unhe padri banne ke kam mauke mile (Rowena Robinson ki research).
- **North-East Tribal Christians**: Nagaland aur Mizoram mein Christianity ne varna vyavastha nahi apnayi balki unke kabile ke riwajon aur aam bhasha ke sath talmel baithaya.`,
  },
  {
    kind: 'md',
    body: `### 4. Hindu Dharm Ki Vividhta Aur Sarna Dharam Ki Maang

Hindu dharm koi ek kitab ya ek sangthan se bandha dharam nahi hai, balki yeh anek paramparaon ka sangam hai.

#### A. Hindu Dharm Ki Aantarik Vividhta
- **Sampradayik Dhare**: *Vaishnavism* (Vishnu/Ram/Krishna ki Bhakti aur ahimsa), *Shaivism* (Shiva ki vairagya pooja), aur *Shaktism* (Devi Durga/Kali ki shakti pooja) ke alag-alag aachar-vichar hain.
- **Sudhar Aandolan**: 19th sadi mein Swami Dayanand Saraswati ka *Arya Samaj* (murti-pooja virodh, Shuddhi), Raja Ram Mohan Roy ka *Brahmo Samaj*, aur Ramakrishna Mission ne naye roop diye.
- **Little vs Great Tradition**: Gaon ke log aksar Vedic mantron se door *Gramadevatas* (Sheetla Mata, Mariamman, Kuldevata) ki pooja karte hain, jisko samajshastra mein Little Tradition kaha jata hai.
- **Dalit Aalochna**: [[thinker:B.R. Ambedkar]] aur Kancha Ilaiah ne dikhaya ki mainstream Hindu dharam mein unchi jaatiyon ne shudron aur atishudron ka shoshan dharmik niyam banakar kiya.

#### B. Adivasiyon Ka Sarna Dharam Aandolan
Jharkhand, Odisha aur Bengal ke Adivasi (Santhal, Munda, Oraon, Ho) pichhle kai saalon se Census mein alag **Sarna Religion Code** ki maang kar rahe hain.
- **Sarna Dharm Kya Hai?**: Sarna poori tarah prakriti ki pooja hai. Adivasi log Sal ke pavitra pedon ke jhurmut (*Jaherthan* ya *Sarna Sthal*) mein *Singbonga* aur *Dharmi* (Dharti Mata) ki pooja karte hain. Yahan na koi murti hai, na mandir, na varna vyavastha, aur na hi koi pandit.
- **Census Ka Sankat**: 1931 ke British Census tak adivasiyon ko "Animist" ke alag column mein rakha jata tha. Lekin aazadi ke baad unhe zabardasti Hindu column ya "Others" mein daal diya gaya.
- **Dohra Khatra**: Adivasi netaon ka kehna hai ki ek taraf unhe Hindu sangthan sanskritize kar rahe hain aur doosri taraf Christian missionary convert kar rahe hain. Isliye Jharkhand Vidhansabha ne 2020 mein alag Sarna Code ka prastav pass kiya taaki unki zameen (CNT/SPT Act), bhasha aur jungle-prakriti ki azaad pehchan hamesha ke liye bach sake.`,
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Pluralism',
    meaning: 'Ek aisi samajik vyavastha jahan sabhi dharmik aur sanskritik samooh apni khas pehchan bachaye rakhte hue ek hi rashtra ke andar barabar samman aur adhikar ke sath rehte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Everyday Syncretism',
    meaning: 'Aam logon ke rozmarra ke jeevan mein dharmo ki simayein bhulakar Dargahon, tirth-sthano aur tyoharon par aapas mein mil-jul kar aastha vyakta karne ki parampara.',
  },
  {
    kind: 'keyTerm',
    term: 'Ashraf-Ajlaf-Arzal Shreni',
    meaning: 'Imtiaz Ahmad dwara darshaya gaya Bharatiya Muslim samaj ka teen-stariya jaati vibhajan: Ashraf (khandani elite), Ajlaf (peshevar pichhde), aur Arzal (Dalit converts).',
  },
  {
    kind: 'keyTerm',
    term: 'Sarna Religion Code',
    meaning: 'Jharkhand v aas-paas ke Adivasiyon dwara Census mein alag dharmik column ki maang taaki unki prakriti-pooja aur swatantra kabilai pehchan ko suraksha mil sake.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Sambandh',
    body: 'Paper 1 mein Durkheim ki Collective Effervescence aur Weber ke Status Groups padhe jaate hain. Paper 2 mein unhe seedhe jodo: Sufi Dargah par aane wali bheed Durkheim ka samajik jodaav dikhati hai, jabki Ashraf-Pasmanda aur Syrian-Dalit Christian ka vibhajan Weberian status hierarchy ka zinda sabut hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galat Aakdon Aur Dharnao Se Bacho',
    body: 'Kabhi mat socho ki Islam ya Christianity mein Bharat aakar jaati khatam ho gayi; Imtiaz Ahmad ka hawala zaroor do. Aur aakde yaad rakho: Bharat mein Christian aabadi 2.3% hai, na ki 23%.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Sarna Dharm Ki Khas Pehchan',
    body: 'Sarna ko Hindu dharm ka hissa ya up-shakha mat maano. Yeh prakriti-pooja (animism) par aadharit azaad kabilai vishwas hai jisme murti, mandir ya jati vyavastha ka koi astitva nahi hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Bharat mein cultural pluralism koi achanak bana niyam nahi hai, balki sadiyon purani zameeni sahansheelta aur samvidhanik suraksha par tika hua jinda tana-bana hai.',
    points: [
      'Samvidhanik Sanrakshan: Article 25 se 30 har nagrik ko dharam manne aur alp-sankhyakon ko apne sanskritik v shaikshik sansthan chalane ki poori azaadi dete hain.',
      'Rozmarra Ka Mel-Jol: Kitabi kanoon se pare Sufi Dargah, Marian tirth aur gramin melo par Hindu, Muslim aur Sikh ek sath milkar sadiyon se pooja karte aaye hain.',
      'Dharmo Ke Andar Ka Shrenikaran: Pluralism sirf alag dharmo ke beech nahi balki unke andar bhi hai—jaise Muslim samaj mein Ashraf-Ajlaf aur Christian samaj mein Syrian-Dalit.',
      'Sarna Code Ki Maang: Adivasi chetna yeh spasht karti hai ki Bharat ki vividhta mein prakriti-poojak kabilai paramparaon ko bhi barabar ka darja milna chahiye.',
      'Majoritarianism Ki Chunauti: Bahusankhyakvaad aur kattar dhrubeekaran is composite sanskriti ko todkar samaj ko nafrat mein baantne ka khatra paida karte hain.',
    ],
    conclusion: 'Bharat ke "Unity in Diversity" ko bachane ke liye salad-bowl model ko mazboot karna hoga, jahan har samuday ki garima aur azaadi surakshit rahe.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Bharat ke dharmik samudayon ka samajshastriya adhyayan: Census 2011 aakde, cultural pluralism banam melting-pot, Dargahon aur tirth sthalo par rozmarra ka syncretism, Islam (Ashraf/Ajlaf/Arzal) aur Christianity (Syrian/Dalit) mein jaati vyavastha, Hindu dharm ki aantarik vividhta, aur Adivasiyon ki Sarna Religion Code maang.',
  mindMap,
  sections,
}

export default topic1Hi
