import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.3 — Colonial Kaal ke Vidroh aur Andolan',
  center: 'Colonial Protests & Peasant Movements',
  subtitle: 'Kisan Sankat • Tribal Millenarianism • Subaltern Insurgency',
  branches: [
    {
      title: 'Colonial Loot aur Agrarian Sankat',
      color: 'lavender',
      thinkers: ['A.R. Desai', 'D.N. Dhanagare', 'Kathleen Gough'],
      points: [
        'Permanent Settlement, Ryotwari aur Mahalwari ne zameen ko bazaar ka maal banaya',
        'Sahukaron (Mahajans) ke karz jaal ne kisanon ko be-zameen mazdoor banaya',
        'Forest Acts (1865, 1878) ne adivasiyon ke Jal, Jangal, Zameen par daka dala',
        'Commercial cash crops (neel, jute) aur bheed bhare tax ne akal (famines) laaye',
      ],
    },
    {
      title: 'Tribal aur Millenarian Vidroh',
      color: 'yellow',
      thinkers: ['Birsa Munda', 'Sidhu-Kanhu', 'K.S. Singh'],
      points: [
        'Santhal Hul (1855–56): 60,000 adivasiyon ne mahajanon aur police ke khilaf talwar uthayi',
        'Munda Ulgulan (1899–1900): Khuntkatti zameen bachaane ke liye millenarian ladai',
        'Charismatic netritva: Birsa ne avatar ban kar Angrezi goli ko paani hone ka dawah kiya',
        'Diku (bahari shoshak) mukt Munda Raj aur swarnim yug wapas laane ka sankalp',
      ],
    },
    {
      title: 'Kisan Andolan: Champaran se Tebhaga',
      color: 'mint',
      thinkers: ['Jacques Pouchepadass', 'Sunil Sen', 'D.N. Dhanagare'],
      points: [
        'Champaran (1917): Tinkathia neel pratha ke khilaf middle kisanon ki ladai',
        'Gandhi ji ne madhyastha ban kar gaon ke dard ko rashtriya manch se joda',
        'Tebhaga (1946–47): Bengal ke bataidaron ne fasal ka do-tihaai hissa maanga',
        'Telangana (1946–51): Nizam ke zamindaron aur Vetti (begaari) ke khilaf hathiyarband andolan',
      ],
    },
    {
      title: 'Subaltern Nazariya aur Alochnayein',
      color: 'pink',
      thinkers: ['Ranajit Guha', 'Gayatri Spivak', 'Sumit Sarkar'],
      points: [
        'Guha: Elementary Aspects — kisanon ke paas apni aazad rajnitik chetna thi',
        'Char mukhya code: Negation, Ambiguity, Modality aur Territorial Solidarity',
        'Marx ke "potato sack" vichar ka khandan; Third World mein kisanon ne kranti ki',
        'Spivak aur feminist critique: Purush netaon ka gungaan aur mahilaon ki upeksha',
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
      'Jungle ke pahadon se lekar dhan ke kheton tak, aam kisanon aur adivasiyon ne Angrezi loot, sahukaron aur forest kanoon ke khilaf aazad ladai ladi.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 02',
  },
  {
    kind: 'md',
    body: `## Kya Colonial Daur mein Bhartiya Kisan chupchaap zulm seh rahe the?

Aasaan shabdon mein samjho: saalon tak Angrezi itihaskaron ne yeh dikhane ki koshish ki ki bhartiya kisan kismat ke bharose jeene wala, shaant aur daba hua insaan tha jo karma ke naam par har zulm chupchaap seh leta tha. Samaj-shastra aur ground reality is jhooth ko poori tarah todti hai. Shehron ke netaon ke azaadi maangne se kayi saal pehle, Bharat ke gaon aur jungle hathiyarband vidrohon se dahak rahe the. Colonial daur mein kisanon aur adivasiyon ne apni zameen, jungle aur samman ki hifazat ke liye sainkadon bade andolan kiye.

Yeh andolan koi achanak phootne wale andhe dange nahi the; balki yeh shoshan ke khilaf ek sochi-samjhi rajnitik ladai thi. Jab Angrezi afsaron ne zameen par naap-tol karke cash rent thopa, jungle ke kanoon banakar adivasiyon ko be-ghar kiya, aur mahajanon ne purani zameenein chheen li, tab kisanon aur adivasiyon ne apni biradari, paramparik hathiyar aur shapat lekar direct attack kiya. [[trap:Early kisan aur adivasi vidrohon ko sirf law-and-order ka danga mat likhna; unke paas apna ideology, target aur azaad rajnitik vision tha.]]

## Colonial Kheti ke Niyam aur Adivasiyon ki Be-dahali

British shasan ne bhartiya gaon ki zindagi ko teen bade jhatke diye:

### 1. Zameen ka Bazaar Banna aur Lagan ka Bojh
Permanent Settlement (Bengal/Bihar), Ryotwari (Madras/Bombay) aur Mahalwari systems ne zameen ko khareedne-bechne wala bazaar ka maal bana diya. Lagan har haal mein cash mein dena padta tha, chahe sukha pade ya baadh aaye. Is chakkar mein kisan sahukaron (Mahajans aur Sahukars) ke karz jaal mein fans gaye, aur zameenein chheen kar unhe bataidar ya mazdoor bana diya gaya.

### 2. Kheti ka Vyaparikaran (Commercialization) aur Famines
British factories ka pet bharne ke liye kisanon ko anaaj chhod kar cash crops (neel, afeem, kapas, jute) ugane par majboor kiya gaya. [[eg:Bihar ke kisanon ko Tinkathia system ke tehat apni sabse upjao 3/20 zameen par neel ugana padta tha, bhale hi kisan ke bache bhookhe mar rahe hon]]. Jab global market gira, toh laakhon kisan bhookhmari ke shikar ho gaye.

### 3. Adivasiyon ki Loot aur Forest Acts
1865 aur 1878 ke Forest Acts ne sadiyon purane tribal junglon ko sarkari property ghoshit kar diya. Jhum kheti, pashu charana, aur jungle se mahua ya lakdi laana jurm bana diya gaya. Bahar se aaye thekedaron, sahukaron aur police (jinhe adivasi ==Diku== kehte the) ne adivasiyon se muft mein begaari (==Vetti== ya ==Begar==) karwayi aur unki zameenein hadap li.

## Tribal aur Millenarian Vidroh: Swarnim Yug ki Talaash

Jab colonial zulm ne adivasi samaj ka dharatal tod diya, tab kai jagahon par ==millenarian movements== ubhre — aise dharmik-samajik vidroh jahan ek charismatic neta aakar kehta hai ki jaldi hi ek chamatkar hoga, dushman khatam ho jayenge aur ek pavitra swarnim yug laut aayega:

| Andolan | Mukhya Neta | Saal aur Kshetra | Mukhya Samajik Kaaran |
| --- | --- | --- | --- |
| Santhal Hul | Sidhu aur Kanhu Murmu | 1855–1856, Damin-i-Koh (Bengal-Bihar) | 60,000 Santhal adivasiyon ne mahajanon aur Angrezi sena ke khilaf vidroh karke azaad rajya ghoshit kiya |
| Munda Ulgulan | Birsa Munda | 1899–1900, Chotanagpur Plateau | Khuntkatti (samudayik kheti) adhikar bachaane ke liye millenarian ladai; Birsa ne avatar ghoshit kiya |
| Rampa Rebellion | Alluri Sitarama Raju | 1922–1924, Godavari (Andhra) | Madras Forest Act aur begaari ke khilaf adivasiyon ki guerrilla ladai |

Samaj-shastri K.S. Singh batate hain ki Birsa Munda ne paramparik Munda dharm aur anti-colonial ladai ko anokhe tareeqe se joda. Birsa ne ailaan kiya ki Angrezon ki goliyan paani ban jayengi aur bahari Dikuon ka ant hokar azaad *Munda Raj* sthapit hoga.

## 20th Century ke Badi Kisan Ladaiyon ka Samaj-shastra

20th century aate-aate kisan andolan local ladaaiyon se aage badhkar sangathit aur ideological roop lene lage:

### 1. Champaran Kisan Andolan (1917–1918)
Sociologist [[thinker:Jacques Pouchepadass]] ne Champaran ke internal class structure ka vishleshan kiya. Champaran koi sabse gareeb mazdooron ka achanak phoota gussa nahi tha; iski shuruat aur kharcha Raj Kumar Shukla jaise sampann aur middle kisanon ne uthaya tha, jinhe gora planters ke gair-kanooni tax (*Tawan* aur *Sharahbeshi*) se nuksan ho raha tha. Mahatma Gandhi ne ek external charismatic madhyastha ka kaam kiya, jinhone ground par jaakar saboot ikatthe kiye aur local kisan dukh ko national politics se jod diya.

### 2. Tebhaga Andolan (1946–1947)
Bengal ke bataidaron (==Bargadars==) ne Communist party se judi Bengal Provincial Kisan Sabha ke jhande tale andolan kiya. Unki maang Floud Commission ki report lagu karne ki thi: yaani kisan ko fasal ka do-tihaai (==Tebhaga==) hissa mile aur jotedaron ko sirf ek-tihaai. *"Nij khamare dhan tolo"* (dhan apne aangan mein kuto) ke naare ne Rajbansi, Namasudra aur adivasi mahilaon ko morche par la khada kiya.

### 3. Telangana Armed Struggle (1946–1951)
Andhra Mahasabha aur CPI ke netritva mein Telangana ka hathiyarband sangharsh Hyderabad ke Nizam aur zalim zamindaron (==Deshmukhs==) ke khilaf hua. Gareeb kisanon, Daliton aur Lambada adivasiyon ne begaari (==Vetti==) aur karz gulami ke khilaf lathiyan aur bandookein uthayi. 3,000 se zyada gaon azaad karwaye gaye aur 10 lakh acre se zyada zameen kisanon mein baanti gayi.

## Ranajit Guha ka Subaltern Paradigm: Niche se Dekha Gaya Itihas

Apni kitaab *Elementary Aspects of Peasant Insurgency in Colonial India* (1983) mein itihaskar [[thinker:Ranajit Guha]] ne dono tarah ke itihaskaron (colonial aur Marxist) ki dhar-pakar ki:

- **Classical Marxism ka khandan:** [[thinker:Karl Marx]] ne kisanon ko "aloo ki bori" (sack of potatoes) kaha tha, jiska matlab tha ki kisan akele akele rehte hain aur unme kranti karne ki taqat nahi hoti. Guha ne saabit kiya ki Third World mein (China, Vietnam, Bharat) factory mazdooron ne nahi, balki kisanon ne azaadi ki sabse badi ladaaiyan ladi hain.
- **Autonomous Subaltern Domain:** Guha ne bataya ki colonial daur mein do alag-alag duniya chal rahi thi: ek elite domain (Congress aur Angrezi afsar) aur doosra swatantra subaltern domain (kisan, adivasi aur Dalit).
- **Insurgency ke Char Mukhya Code:**
  1. **Negation:** Kisanon ne shoshak ki satta ke prateekon ko toda — kacheri jalayi, lagan ke kagaz phade, aur zamindar ki haweli par kabza kiya.
  2. **Ambiguity:** Sarkari kanoon jise dacoity ya crime kehta tha, kisan use samajik nyay aur dharm ki ladai maante the.
  3. **Modality:** Vidroh aam janta ke beech dhol baja kar, aag jala kar aur ped ki shaakhon (*Dharra*) ke sandesh bhej kar khule aam kiya jaata tha.
  4. **Solidarity aur Territoriality:** Poori biradari ek hokar ladti thi; jo koi police ka sath deta tha, uska huka-paani band kar diya jaata tha.

## Alochnayein: Spivak aur Feminist Nazariya

Post-colonial thinker [[thinker:Gayatri Chakravorty Spivak]] ne apne mashhoor lekh *Can the Subaltern Speak?* (1988) mein chetavani di ki subaltern itihaskaron ne kisan vidrohi ko ek aadarsh aur pavitra hero bana kar pesh kiya. Iske alawa, feminist samaj-shastriyon ne bataya ki subaltern school ne mard kisanon ki bahaduri ke geet toh gaaye, par kisan aurat ke us dard ko bhool gaye jahan use zamindar ke shoshan ke sath-sath ghar ke bheetar patriarchy ki maar bhi jhelni padti thi.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1855–1856',
        title: 'Santhal Hul Vidroh',
        text: 'Sidhu aur Kanhu ke netritva mein 60,000 Santhalon ne Mahajanon aur Angrezi sena ke khilaf teer-kaman uthaye.',
      },
      {
        year: '1875',
        title: 'Deccan Riots',
        text: 'Pune aur Ahmednagar ke kisanon ne Marwari sahukaron ke bahi-khaate chheen kar aag ke hawale kiye.',
      },
      {
        year: '1899–1900',
        title: 'Birsa Munda ka Ulgulan',
        text: 'Chotanagpur mein Khuntkatti zameen adhikar bachane aur Dikuon ko bhagane ke liye millenarian andolan.',
      },
      {
        year: '1917–1918',
        title: 'Champaran Neel Satyagraha',
        text: 'Middle kisanon ne Gandhiji ke sath milkar zalim Tinkathia lagan vyavastha ko radd karwaya.',
      },
      {
        year: '1946–1947',
        title: 'Tebhaga Andolan',
        text: 'Bengal ke bataidaron ne Communist Kisan Sabha ke jhande tale fasal ka 2/3 hissa lene ki ladai ladi.',
      },
      {
        year: '1946–1951',
        title: 'Telangana Kisan Hathiyarband Sangharsh',
        text: 'Hyderabad mein Nizam, Deshmukhs aur Vetti (begaari) ke khilaf kisanon ne 3,000 gaon azaad karwaye.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Elite Nationalist Rajniti',
    rightTitle: 'Subaltern Kisan Vidroh',
    rows: [
      {
        aspect: 'Netritva aur Varg',
        left: 'Shehri padhe-likhe vakeel, poonjipati vyapari aur bade zamindar',
        right: 'Gareeb kisan, khet-mazdoor, bataidar aur adivasi samuday',
      },
      {
        aspect: 'Andolan ke Tareeqe',
        left: 'Constitutional petitions, assembly mein bahas, anushasit ahimsa',
        right: 'Direct action, guerrilla ladaai, bahi-khaate jalana, fasal par kabza',
      },
      {
        aspect: 'Vichardhara',
        left: 'Liberal democracy, modern rashtravad, private property kanoon',
        right: 'Moral economy, biradari ki ekta, millenarian avatari prophecies',
      },
      {
        aspect: 'Aitihasik Agency',
        left: 'Formal political parties aur akhbaron ke zariye aawaz uthana',
        right: 'Swatantra samudayik ladaai jo formal parties ke bina chali',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Insurgency',
    meaning:
      'Ranajit Guha ka concept jiske mutabiq kisan vidroh elite netaon ki kripa se nahi, balki unki apni aazad samajik chetna se chalta tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Millenarian Movement',
    meaning:
      'Aisa dharmik-samajik andolan jisme ek charismatic neta achanak zulm khatam hone aur swarnim yug aane ki prophecy karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Tinkathia System',
    meaning:
      'Champaran mein British planters dwara thopi gayi vyavastha jisme kisan ko 3/20 hisse par neel ki kheti karni padti thi.',
  },
  {
    kind: 'keyTerm',
    term: 'Vetti / Begar',
    meaning:
      'Colonial afsaron aur feudal zamindaron dwara neechi jatiyon aur adivasiyon se karwayi jaane wali muft begaari.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Guha aur Marx ke kisan nazariye ko zaroor compare karein',
    body: 'Kisan andolan par answer likhte waqt Ranajit Guha ke vicharon ko Karl Marx ke "sack of potatoes" wale vichar ke sath tulna karein. Dikhayein ki kaise Guha ne Third World ke kisan ko ek sachha krantikari saabit kiya.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Guha ke 4 Insurgency Codes ka Mnemonic: N-A-M-S',
    body: 'Guha ke char codes yaad rakhein: Negation (satta ke prateek todna), Ambiguity (jurm ko nyay maanna), Modality (dhol aur aag se khuli ladaai), aur Solidarity (biradari ki aapsi ekta).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Champaran ko sirf sabse gareeb kisanon ka andolan mat likhna',
    body: 'Jacques Pouchepadass ne saabit kiya hai ki Champaran ki aag Raj Kumar Shukla jaise middle aur prosperous kisanon ne shuru ki thi jinhe gora planters ke tax se chot pahunchi thi; gareeb bataidar baad mein sath jude.',
  },
  {
    kind: 'answerBox',
    intro:
      'Colonial daur ke kisan aur adivasi andolan ek swatantra subaltern rajniti the, jinhone Angrezi loot, forest kanoon aur feudal shoshan ko sidhi chunauti di.',
    points: [
      'Shoshan ke kaaran: British lagan kanoon (Zamindari/Ryotwari) aur Forest Acts ne karz, be-zameeni aur begaari ko janam diya.',
      'Millenarian vidroh (Santhal, Munda): Adivasiyon ne Birsa Munda jaise avatari netaon ke sath milkar Dikuon ko bhagane aur Khuntkatti bachaane ki ladaai ladi.',
      'Champaran ka samaj-shastra (Pouchepadass): Middle kisanon ke gusse aur Gandhi ji ki madhyasthata ne Tinkathia neel vyavastha ko toda.',
      'Radical sangharsh: Tebhaga ke bataidaron aur Telangana ke hathiyarband kisanon ne Jotedaron aur Nizam ke Deshmukhs ke khilaf zameen par kabza kiya.',
      'Subaltern school (Ranajit Guha): Kisanon ko shaant ya bechara maanne ki galatfehmi tod kar unhe aazad chetna wale krantikari saabit kiya.',
    ],
    conclusion:
      'Kisanon aur adivasiyon ne chupchaap zulm nahi saha, balki unke inhi balidaanon ne swatantra Bharat ke loktantra aur bhoomi-sudhar ki neev rakhi.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Colonial daur ke kisan aur adivasi andolan ek aazad subaltern chetna ka prateek the, jahan millenarian vishwas, direct action aur biradari ki ekta se Angrezi loot aur zamindari zulm ka muqabla kiya gaya.',
  mindMap,
  sections,
}
