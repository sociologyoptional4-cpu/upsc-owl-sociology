import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Bharat mein tribal aabadi ke bhaugolik, kshetriya aur paryavaraniya phailav ko samajhata hai. Virginius Xaxa Committee ke paanch-zone model, Central India ke Fifth Schedule aur North-East ke Sixth Schedule ke aapsi farq, vibhinn jungle-pahadi ilaqon ke aarthik guzare, aur bhashayi v rang-roop ki vividhta ko aasaan Hinglish mein kholta hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 2 — Geographical Spread & Cultural Diversity of Indian Tribes',
  center: 'Bhaugolik Phailav & Vividhta',
  subtitle: 'Xaxa 5-Zone Model • Central vs NE Farq • Rozi-Roti ke Dhang • Bhashayi Belts',
  branches: [
    {
      title: '1. Demographic Paimana & Xaxa ke 5 Zones',
      color: 'lavender',
      thinkers: ['Virginius Xaxa', 'B.S. Guha', 'K.S. Singh', 'Nirmal Kumar Bose'],
      points: [
        'Census 2011: 10.42 crore Scheduled Tribes jo Bharat ki kul aabadi ka 8.6% bante hain',
        'Central Region (52.5%): MP, Chhattisgarh, Jharkhand, Odisha — khaniyon ki zameen, sabse zyada be-dakhli',
        'Western Region (27.6%): Rajasthan, Gujarat, Maharashtra — Bhil, Meena; kheti aur shehron se gehra judav',
        'NE/Himalayan (14.4%), Southern (5.3%), aur Island (0.1%) milkar bura dhancha banate hain',
      ],
    },
    {
      title: '2. Central India banam North-East ka Farq',
      color: 'yellow',
      thinkers: ['Verrier Elwin', 'Myron Weiner', 'Walter Fernandes', 'Sanjib Baruah'],
      points: [
        'Central India (Fifth Schedule): STs apne hi rajyon mein 10-30% minority hain, non-tribal bahumat se ghire',
        'North-East (Sixth Schedule): Mizoram, Nagaland jaise pahadi rajyon mein 70-94% tribal bahumat hai',
        'Sarkari adhikar: Sixth Schedule ke ADCs ke paas kanoon banane ki taqat hai, Fifth Schedule ke TAC kamzor hain',
        'Diku dakhal: Central India mein mining khori aur zameen chhinna aam hai, NE mein Inner Line Permit ki suraksha',
      ],
    },
    {
      title: '3. Paryavaran aur Rozi-Roti ke Dhang',
      color: 'mint',
      thinkers: ['Julian Steward', 'Christoph von Fürer-Haimendorf', 'L.P. Vidyarthi', 'Madhav Gadgil'],
      points: [
        'Jungle mein kanda-mool shikar: Jarawa aur Birhor mein barabari aur jungle ko maa manne ka vishwas',
        'Jhum kheti: Naga aur Garo mein youth dormitories (Morung) ke zariye saajha mehnat ka chalan',
        'Hal wali sthayi kheti: Santhal aur Munda mein Manjhi/Munda mukhiya aur Sarhul-Karma tyohar',
        'Ghumantu pashupalan (Transhumance): Gaddi aur Bakarwal mausam ke hisab se pahadon par aana-jana karte hain',
      ],
    },
    {
      title: '4. Bhashayi aur Rang-Roop ki Vividhta',
      color: 'pink',
      thinkers: ['George Grierson', 'Suniti Kumar Chatterji', 'B.S. Guha', 'Herbert Risley'],
      points: [
        'Austro-Asiatic: Santhali, Mundari, Ho aur Meghalaya ki Khasi bhasha jo Bharat ki sabse purani boli hai',
        'Tibeto-Burman: Himalayan border aur North-East mein boli jaane wali 100 se zyada surili boliyan',
        'Dravidian tribal boliyan: Central aur South ki Gondi, Kurukh (Oraon) aur Toda bhasha',
        'Colonial race theories ko nakarna: Khoon ki purity nahi, paryavaran ke mutabiq sharir ka dhalna hi sach hai',
      ],
    },
  ],
}

const sectionsHinglish: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u05-01-tribes-spread-policies.webp',
    alt: 'P2 Unit 5 infographic: Tribes: Spread & Colonial Impact — Definitional Debates, Geographical Zones & Colonial Rupture',
    caption:
      'Bhaugolik Zones aur Paryavaran: Bharat ke tribal ilaqon ka naksha, unka administrative darja aur unke guzar-basar ke alag-alag tarike.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 15 Visual 01',
  },
  {
    kind: 'md',
    body: `## Aabadi Ka Paimana Aur Virginius Xaxa Ke Paanch Kshetra

Aasaan shabdon mein samjho, Bharat ki tribal aabadi koi chota-mota kabile ka tola nahi hai, balki ek vishal jansankhya hai. **2011 Census ke mutabiq Bharat mein 10.42 crore Scheduled Tribes hain**, jo hamari **kul aabadi ka 8.6%** hissa bante hain. Yeh aabadi poore Europe ke bade-bade deshon se bhi zyada hai aur 705 se zyada alag-alag samudayon mein bati hui hai. Yeh log kisi ek rajya mein band nahi hain; registan ki dhoop se lekar Himalaya ki baraf, Chota Nagpur ke patharon aur Andaman ke samundar tak phaile hue hain.

Saal 2014 mein mashhoor sociologist [[thinker:Virginius Xaxa]] ki adhyakshta wali High-Level Committee ne inke phailav aur paryavaran ke hisab se Bharat ko paanch bado kshetron mein baanta:

| Kshetra | Kaun-Kaun Se Rajya Aate Hain | Desh Ki Tribal Aabadi Ka % | Mukhya Samuday | Mukhya Rozi-Roti Ka Dhang |
|---|---|---|---|---|
| **Central Region (Madhya)** | Madhya Pradesh, Chhattisgarh, Jharkhand, Odisha, Andhra Pradesh, Telangana | **52.5%** | Gond, Santhal, Munda, Oraon, Ho, Baiga, Kol | Sthayi kheti, jungle ki vanopaj, mining mazdoori |
| **Western Region (Pashchim)** | Rajasthan, Gujarat, Maharashtra, Goa, Dadra & Nagar Haveli | **27.6%** | Bhil, Meena, Garasia, Warli, Katkari, Dhodia | Kheti, shehri majduri, pashupalan |
| **Himalayan / North-Eastern** | Assam, Meghalaya, Nagaland, Mizoram, Manipur, Arunachal, Tripura, Sikkim, J&K, HP, Uttarakhand | **14.4%** | Naga, Mizo, Khasi, Garo, Bodo, Gaddi, Gujjar-Bakarwal | Jhum kheti, terrace farming, pashupalan (transhumance) |
| **Southern Region (Dakshin)** | Tamil Nadu, Karnataka, Kerala | **5.3%** | Toda, Kota, Kurumba, Irula, Kadar, Chenchu | Jungle ki vanopaj, chai bagan mazdoori, choti kheti |
| **Island Region (Dweep)** | Andaman and Nicobar Islands, Lakshadweep | **0.1%** | Great Andamanese, Onge, Jarawa, Sentinelese, Nicobarese | Machhli pakadna, nariyal kheti, shikar kanda-mool |

Isme **Central Region** sabse bada garh hai jahan aadhi se zyada tribal aabadi rehti hai. Lekin kismat ki vidambana dekho: yeh wahi ilaaqa hai jahan koyla, loha, bauxite aur mineral sabse zyada hain, isliye factories aur dams ke naam par sabse zyada be-dakhal aur barbad bhi yahi ke tribal hue hain.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Central Indian Scheduled Areas (Fifth Schedule)',
    rightTitle: 'North-Eastern Tribal Belts (Sixth Schedule)',
    rows: [
      {
        aspect: 'Aabadi Ka Anupaat',
        left: 'Tribals apne hi rajya mein 10% se 30% minority hain, charon taraf gair-tribal aabadi rehti hai.',
        right: 'Tribals rajya mein 70% se 94% tak bhari bahumat (majority) mein hain (jaise Mizoram, Nagaland).',
      },
      {
        aspect: 'Sarkari Azaadi & Councils',
        left: 'Tribes Advisory Councils (TAC) sirf salahkaar hain; asli taqat state government aur Governor ke paas hoti hai.',
        right: 'Autonomous District Councils (ADCs) ke paas zameen, kanoon banane aur court chalane ki poori taqat hai.',
      },
      {
        aspect: 'Bahari Log (Diku) & Zameen',
        left: 'Mining aur udyog ke naam par bahari logon (dikus) ka bhari aana-jana; zameen par zabardast kabze.',
        right: 'Inner Line Permit (ILP) aur Article 371A/371G ki vajah se bahari log wahan zameen khareed hi nahi sakte.',
      },
      {
        aspect: 'Aitihasik Rishta',
        left: 'Hazaron saal se gaon ki caste society ke sath len-den aur Sanskritization ka lamba daur.',
        right: 'Brahminical caste system se hamesha door rahe; modern daur mein missionary schools se Christian bane.',
      },
      {
        aspect: 'Aandolan Ka Mudda',
        left: 'Aarthik shoshan, zameen loot, displacement aur Sarna dharam ki pehchan ke khilaaf aawaz.',
        right: 'Naga, Mizo accords, ethnic nationalism aur seema par azaadi/autonomy ke rajneetik andolan.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Paryavaran Aur Rozi-Roti Ke Alag-Alag Rang

Samaj-shastra yeh sikhata hai ki kisi bhi tribal samaj ka culture koi hawa mein nahi banta, balki wo unke aas-paas ke jungle aur pahaad ke sath zinda rehne ka tarika hai. Aasaan shabdon mein, log jungle mein kanda-mool dhoondhte hain, pahadi dhalan par jhum kheti karte hain, ya bhed-bakriyan charate hain—yahi tay karta hai ki unka parivaar kaisa hoga, unka neta kaun hoga aur unke devata kaise honge. Sociologist [[thinker:Julian Steward]] ne isko *Cultural Ecology* kaha:

### 1. Jungle Mein Shikar Aur Kanda-Mool: Foraging Bands
Andaman ke **Jarawa aur Sentinelese**, Jharkhand ke **Birhor**, aur Andhra ke **Chenchu** jaise samuday jungle ke kanda-mool, shehad aur shikar par jeete hain. Kyunki jungle mein koi gehu-chawal ka bada godown nahi ban sakta, isliye inke samaj mein koi unch-neech ya ameer-gareeb nahi hota. Sab barabar hote hain, shikar mil-baant kar khate hain aur jungle ko devi-devata ki tarah poojte hain. [[eg:Birhor log jungle mein apne chote camps (*tanda*) lagate hain aur jab ek ilaaqe ke kanda-mool khatam hone lagte hain, toh wo camp utha kar doosre jungle chale jaate hain taaki jungle dubara panap sake.]]

### 2. Jhum Kheti (Shifting Cultivation): Saajha Mehnat Aur Morung
North-East aur Central India ke pahadon mein rehne wale **Naga, Garo aur Baiga** jhum kheti karte the. Pahadi jungle ko kaat kar jalaana aur kheti karna akele ke bas ki baat nahi thi, isliye sari zameen poore kabile ki saajha malkiyat hoti thi. Gaon ke naujawanon ko ek sath milkar kaam karna sikhane ke liye youth dormitories hoti theen—jaise Nagaland mein *Morung* aur Bastar mein *Ghotul*, jahan sangeet, kheti aur samajik farz sikhaye jaate the.

### 3. Sthayi Hal Wali Kheti: Gaon Ke Mukhiya Aur Tyohar
**Santhal, Munda, Oraon aur Bhil** jaise bade samuday sadiyon pehle maidanon mein sthayi kheti karne lage. Kheti se anaaj bacha toh aabadi badhi, aur gaon ko sambhalne ke liye vansh-aadhari mukhiya ban gaye—jaise Santhalon mein *Manjhi* aur Mundas mein *Munda* aur *Pahan*. Inke tyohar kheti aur mausam se jud gaye, jaise sal ke pedon par phool aane par ==Sarhul== manana aur dhaan ki fasal aane par ==Karma== ki pooja karna.

### 4. Ghumantu Pashupalan: Transhumance Ka Pahar-Maidan Chakkarr
Himalaya ke pahadon mein Himachal ke **Gaddi** aur Kashmir ke **Bakkarwal** mausam ke hisab se safar karte hain, jise transhumance kehte hain. Garmiyon mein jab baraf pighalti hai toh wo hazaron bhed-bakriyan lekar oopar ke hare-bhare bugyalon (alpine pastures) mein chale jaate hain; sardi aate hi wapas neeche ghaatiyon mein aa jaate hain. Inka poora samaj unke chote deron aur pashuon ke charaagaahon par tika hota hai.`,
  },
  {
    kind: 'flow',
    direction: 'vertical',
    steps: [
      {
        label: 'Bhaugolik Paryavaran & Zameen',
        text: 'Ghane jungle, sukhe pathar, dhalan wale barsati pahaad ya barafili chotiyan.',
      },
      {
        label: 'Rozi-Roti Ka Mode of Subsistence',
        text: 'Kanda-mool shikar, ped kaat kar jhum kheti, bail-hal ki sthayi kheti ya ghumantu charwahi.',
      },
      {
        label: 'Samajik Aur Parivaarik Dhancha',
        text: 'Barabari wale shikar jhund, youth dormitories (Morung/Ghotul) ya gaon ke Manjhi/Munda mukhiya.',
      },
      {
        label: 'Dharmik Pooja Aur Tyohar',
        text: 'Jungle ke rooh-aatma ki pooja, Sarna thaan par sal ped ki aarti (Sarhul) ya pashuon ki aashish lena.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Bhasha Aur Rang-Roop Ki Be-Misaal Vividhta

Angrez afsaron ne sabhi tribals ko ek hi lakdi se haankne ki koshish ki, par samaj-shastra dikhata hai ki unke andar bhasha aur dhang ka zabardast farq hai. Bhasha-vigyani [[thinker:George Grierson]] ke *Linguistic Survey of India* ne sabit kiya ki Bharat ki tribal boliyan chaar alag bhasha-parivaaron se nikli hain:

1. **Austro-Asiatic Bhasha Parivaar:** Yeh Bharat ki sabse purani bhashaon mein se ek hai, jise Chota Nagpur ke **Santhali, Mundari, Ho, Korku** aur Meghalaya ke **Khasi** bolte hain. Inki bhashaon mein jungle, ped-paudhon aur janwaron ke liye be-hadd barik shabd milte hain.
2. **Tibeto-Burman Bhasha Parivaar:** North-East aur Himalayan borderland ke 100 se zyada samuday yeh bhasha bolte hain, jaise **Naga, Mizo, Garo, Bodo, Lepcha aur Ladakhi**. Yeh surili (tonal) bhashayein hain jinke paas lok-geeton aur zubani itihas ka khazana hai.
3. **Dravidian Bhasha Parivaar:** Central aur South India ke pahadon mein rehne wale **Gond (Gondi), Oraon (Kurukh) aur Nilgiri ke Toda** yeh boliyan bolte hain. Shehron se door rehne ke bawajood inka vyakaran classical dakshin Bharatiya bhashaon se milta hai.
4. **Indo-Aryan Bhasha Parivaar:** Wo janjatiyan jo sadiyon se maidan ke kisanon ke sath ghul-mil gayeen, jaise **Bhil (Bhili), Meena, Banjara aur Tharu**, inki boliyan Hindi, Gujarati aur Rajasthani se milti-julti hain.

### Colonial Race Theories Ki Asliyat

19th century ke colonial afsaron jaise [[thinker:Herbert Risley]] aur **B.S. Guha** ne tribals ko naak aur sir naap kar *Proto-Australoid* (Gond, Santhal), *Mongoloid* (North-East ke log) aur *Negrito* (Andaman ke dweepvasi) jaise dabbon mein baant diya tha.

Modern sociology aur DNA research ne in purani racial theories ko koodedaan mein phenk diya hai. Asliyat yeh hai ki Bharat ki aabadi sadiyon ke aapsi mel-milap se bani hai. Jise angrez "racial trait" kehte the, wo dar-asal garam dhoop, malaria aur pahadi mausam mein zinda rehne ke liye sharir ka qudrati badlav tha, koi unch-neech nahi.`,
  },
  {
    kind: 'keyTerm',
    term: 'Virginius Xaxa Five-Zone Model',
    meaning:
      'Bharat ke tribals ko unki aabadi aur paryavaran ke aadhar par Central (52.5%), Western (27.6%), NE/Himalayan (14.4%), Southern (5.3%) aur Island (0.1%) mein baantne wala model.',
  },
  {
    kind: 'keyTerm',
    term: 'Fifth vs. Sixth Schedule',
    meaning:
      'Samvidhan ka batwara: Fifth Schedule Central India mein Governor ko control deta hai, jabki Sixth Schedule North-East ke pahadi zilon ko apni Autonomous Councils chalane ka adhikar deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Ecology',
    meaning:
      'Julian Steward ka siddhant jo dikhata hai ki samaj ke tyohar, clan aur niyam dar-asal unke jungle aur pahaad ke sath guzar-basar karne ka functional dhang hote hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Transhumance',
    meaning:
      'Mausami charwahi: Himalayan tribes jaise Gaddi aur Bakarwal ka garmi mein oopar bugyalon mein jana aur sardi aate hi neeche ghaatiyon mein lautna.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Link: Cultural Ecology Se Answer Chamkao',
    body: 'UPSC ke answer mein tribal diversity ko sirf naach-gane ki tarah mat likho. Julian Steward ke "Cultural Ecology" se jodo aur dikhao ki Bastar ka Ghotul ya Nagaland ka Morung dar-asal saajha kheti aur jungle sambhalne ki zaroorat se paida hue the.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Percentage Aur Total Aabadi Ka Farq Samjho',
    body: 'Rajya ki percentage aur kul aabadi mein confuse mat hona. Mizoram mein rajya ki aabadi ke hisab se sabse zyada STs hain (~94.4%) aur Lakshadweep mein UT ke hisab se (~94.8%), lekin sabse zyada ST log Madhya Pradesh mein rehte hain (1.53 crore se zyada). Examiner dono dekhta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Xaxa Ke 5 Zones Ka Mnemonic (C-W-H-S-I)',
    body: 'Aabadi ke hisab se CWHSI yaad rakho: Central (52.5%), Western (27.6%), Himalayan/NE (14.4%), Southern (5.3%) aur Island (0.1%).',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein tribal communities ka bhaugolik aur paryavaraniya phailav yeh dikhata hai ki yahan ke jungle, pahaad aur zameen ne unke samajik taane-baane ko kaise alag-alag roop diya.',
    points: [
      'Bhaari aabadi: 2011 Census ke mutabiq 10.42 crore STs (kul jansankhya ka 8.6%) hain, jo 705 se zyada alag-alag samudayon mein phaile hue hain.',
      'Virginius Xaxa ke 5 kshetra: Bharat ko Central (52.5%), Western (27.6%), Himalayan/NE (14.4%), Southern (5.3%) aur Island (0.1%) mein unke paryavaran ke mutabiq baanta gaya.',
      'Central India ka dard: Aadhi se zyada tribal aabadi yahin rehti hai, aur desh ke saare koyla-loha minerals yahin hone ki vajah se sabse zyada be-dakhli aur displacement yahin hua.',
      'North-East ka alag nazariya: Central India ke minority status ke ulte North-East ke pahadon mein STs 70-94% bahumat mein hain aur Sixth Schedule ke ADCs se surakshit hain.',
      'Paryavaran aadharit rozi-roti: Shikar karne wale Birhor se lekar jhum kheti karne wale Naga, hal chalane wale Santhal aur bhed charane wale Gaddi tak sabka jeevan unke pahaad se tay hota hai.',
      'Chaar bhasha parivaar: Austro-Asiatic, Tibeto-Burman, Dravidian aur Indo-Aryan bhashayein colonial afsaron ke ek-jaise hone ke daawe ko jhootha sabit karti hain.',
    ],
    conclusion:
      'Sabhi tribals ke liye ek jaisi policy banana samaj-shastra ke khilaf hai; har kshetra ke paryavaran, aabadi aur azaadi ke mutabiq alag vikas ki zaroorat hai.',
  },
]

export const topic2Hi = {
  summary,
  mindMap,
  sections: sectionsHinglish,
}
