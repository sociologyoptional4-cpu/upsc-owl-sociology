import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 14.3 · Untouchability: Forms & Perspectives',
  center: 'Ashprishyata Aur Dalit Sangharsh',
  subtitle: 'Ambedkarite Sociology • Annihilation of Caste • Gandhi vs Ambedkar • Modern Roop Aur Assertion',
  branches: [
    {
      title: 'Ambedkar vs Mainstream Sociology',
      color: 'lavender',
      thinkers: ['B.R. Ambedkar', 'G.S. Ghurye', 'Louis Dumont'],
      points: [
        'Mainstream sociology ne caste ko functional batwara ya aam-sahmati mana',
        'Ambedkar: Caste kaam ka nahi, balki mazdooron ka batwara (division of labourers) hai',
        'Graded inequality: Upar ki taraf izzat, neeche ki taraf ghin ka silsila',
        'Broken Men theory: Haraye gaye Buddhist pastoralists gaon ke bahar basaye gaye',
      ],
    },
    {
      title: 'Annihilation of Caste (1936)',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Jat-Pat Todak Mandal'],
      points: [
        'Up-jatiyan khatam karna ya saath khana beasar aur cosmetic upaaye hain',
        'Caste shastron aur Smritis dwara di gayi dharmik pavitrata par tiki hai',
        'Asali upaaye: Inter-caste marriage aur dharmagranthon ki pavitrata todna',
        'Sarkari priesthood exam sabhi ke liye; Navayana Buddhism mein conversion',
      ],
    },
    {
      title: 'Gandhi vs Ambedkar Debate',
      color: 'mint',
      thinkers: ['Mahatma Gandhi', 'B.R. Ambedkar'],
      points: [
        'Gandhi: Varnashrama aadarsh harmony hai; ashprishyata ek paap ya bimari hai',
        'Naitik sudhaar, hriday parivartan, Harijan Seva, mandir pravesh',
        'Ambedkar: Ashprishyata caste system ka zaroori aur kanooni nateeja hai',
        'Sanvidhanik adhikar, alag chunav (Poona Pact 1932) aur rajneetik taqat',
      ],
    },
    {
      title: 'Modern Roop Aur Dalit Assertion',
      color: 'pink',
      thinkers: ['Sukhadeo Thorat', 'Kanshi Ram', 'Milind Kamble'],
      points: [
        'Aaj ke roop: Mid-day meal bhedbhav, manual scavenging, shehri housing bias',
        'Rajneetik assertion: Bahujan Samaj Party (BSP) ki chunavi labbandi',
        'Sanskritik assertion: Dalit literature, Panther movement, Casteless Collective',
        'Aarthik assertion: Dalit capitalism aur DICCI (job giver bano, seeker nahi)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u04-02-untouchability-annihilation.webp',
    alt: 'Untouchability, Jajmani and Annihilation of Caste infographic showing Ambedkarite praxis',
    caption:
      'Sansthagath ashprishyata se Ambedkarite praxis tak: graded inequality ka vishleshan, Gandhi vs Ambedkar debate, shastriya aadhar ko chunauti aur modern daur mein multi-front Dalit assertion.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 14 Visual 02',
  },
  {
    kind: 'md',
    body: `## Caste Ka Sabse Kala Sach: Ashprishyata Ki Samajshastriya Partal

Aasaan shabdon mein samjho: Ashprishyata (Untouchability) Bharatiya samaj par koi aam daagh ya aapsi galatfehmi nahi hai. Asal mein yeh manav itihas ka sabse krur aur sansthagath shoshan hai, jisne karodon insaano ko janm ke aadhar par 'ashuddh' ghoshit karke unhe basic manav adhikaaron se vanchit kar diya. Sanvidhan ke Article 17 ne 1950 mein ise kanoonan khatam zaroor kiya, par iska saya aaj bhi shehri aur gramin samaj mein nazar aata hai.

Ashprishyata ko samajhne ke liye purani aam dharanaon ko chhodna hoga. Colonial aur Brahminical samajshastra ne aksar caste ko ek shant aur aapas mein judi hui vyavastha bataya; par [[thinker:B.R. Ambedkar]] ne is parde ko faad kar sabit kiya ki caste mazdooron ko aapas mein ladane aur unhe ghulam banane ka hathiyar hai. Ambedkar ke is teekhe vishleshan, Mahatma Gandhi ke naitik sudhaar se unke matbhed, aaj ke daur mein ashprishyata ke chhipe hue roop aur Dalit assertion ki ladayi ko samajhna har UPSC aspirant ke liye anivarya hai.

## Ambedkar Ka Radical Samajshastriya Nazariya

Apne lekhon *Castes in India* (1916) aur *Annihilation of Caste* (1936) mein [[thinker:B.R. Ambedkar]] ne mainstream samajshastra ko aaina dikhaya:

- **Division of Labourers vs Division of Labour:** Purane samajshastri kehte the ki caste kheti aur dastkari ka shant batwara (division of labour) hai. Ambedkar ne iska khandan karte hue kaha ki yeh kaam ka batwara nahi, balki ==mazdooron ka aprakritik batwara (division of labourers)== hai. Yeh vyavastha insaan ko uski marzi aur kshamata ke khilaf ek pustaini kaam mein baandh deti hai aur mazdooron ko ek-doosre ke upar-neeche kramik shreni mein baant deti hai.
- **==Graded Inequality (Kramik Asamanata)==:** Karl Marx ne rich aur poor ke do hisson mein batwara dekha tha. Par Ambedkar ne samjhaya ki Bharat mein shoshit varg kranti kyun nahi kar paaya: Bharat mein asamanata graded hai — yaani ==upar ki taraf izzat (ascending scale of reverence) aur neeche ki taraf ghin (descending scale of contempt)==. Har madhyam jati apne se neeche wali jati ko neecha dekhti hai aur uspar thodi taqat aazmati hai, jisse Brahminical dabdabe ke khilaf koi aam solidarity nahi ban paati.
- **Bhaichare (Fraternity) Ka Ant:** Ambedkar ne kaha ki loktantra sirf sarkari chunaav nahi, balki aapas mein izzat aur bhaichara (*maitri*) hai. Caste system ne is bhaichare ko poori tarah maar diya, jisse ek jati doosri jati ke dard ko apna nahi samajh sakti.
- **Ashprishyata Ki Utpatti (Broken Men Theory):** *The Untouchables* (1948) mein Ambedkar ne kisi racial ya occupational theory ko kharij kiya. Unka tark tha ki ashprishya log aitihasik roop se "Broken Men" the — yaani haraye gaye kabile jo gaon ke bahar pehredari karte the. Kyunki unhone Buddhism ko chuna aur beef khana jari rakha (jabki Brahmins ne shuddh dikhne ke liye shakahar apnaya), isliye unhe gaon se bahar karke unpar ashprishyata thop di gayi.

## Annihilation of Caste (1936): Ek Krantikari Blueprint

Lahore ke *Jat-Pat Todak Mandal* ne 1936 mein Ambedkar ko bhashan dene bulaya tha. Jab aayojakon ne kaha ki woh Hindu Dharmashastron ki aalochna hata dein, toh Ambedkar ne bhashan dene se inkar kar diya aur use khud chhapwaya.

Ambedkar ke is dastavej ke mukhya siddhant:
1. **Cosmetic Sudhaar Faltu Hain:** Sirf up-jatiyan khatam karna ya aapas mein saath khana khana (*sahabhojan*) caste ko khatam nahi kar sakta. Log caste isliye nahi maante ki woh bewakoof hain; woh isliye maante hain kyunki unhe lagta hai ki yeh unka sacred dharmik kartavya hai.
2. **Jadd Par Vaar:** Asali dushman bhedbhav karne wala aam vyakti nahi, balki woh dharmagranth hain jo caste ko pavitrata dete hain. *Vedas*, *Smritis* aur *Dharmashastras* jab tak pavitra maane jayenge, caste khatam nahi ho sakti.
3. **Inter-Caste Marriage Asali Upaaye:** Ambedkar ne endogamy ko caste ki asali deewar bataya. Unhone kaha ki ==inter-caste marriage== hi ekmatra asali hal hai, kyunki jab tak khoon ka milan nahi hoga, tab tak aapsi bhaichara paida nahi ho sakta.
4. **Priesthood Ka Loktantrikaran:** Ek krantikari sujhaav dete hue unhone kaha ki mandir ka pujari pustaini Brahmin nahi hona chahiye. Sarkar ko ek open civil service jaisa exam karwana chahiye jisme sabhi jaatiyon ke mard aur auratein merit se pujari ban sakein aur sarkari tankha payen.
5. **Dharmantaran (Final Exit):** Jab yeh saaf ho gaya ki orthodox Hinduism barabari nahi de sakta, toh Ambedkar ne 1956 mein Nagpur mein paanch lakh logon ke saath ==Navayana Buddhism== apnaya, jo tark aur manav barabari par aadharit tha.

## Gandhi vs Ambedkar: Ashprishyata Par Aitihasik Behas

Mahatma Gandhi aur Dr. B.R. Ambedkar ke beech ki behas do alag vichardharaon ka sangharsh thi:

| Aayam | Mahatma Gandhi | Dr. B.R. Ambedkar |
| --- | --- | --- |
| **Ashprishyata Ka Nazariya** | Hindu dharam par ek paap, bimari ya daagh jo mitaaya ja sakta hai | Caste system ka zaroori aur kanooni nateeja; bina caste tode nahi mit sakti |
| **Varna Vyavastha** | *Varnashrama Dharma* ko ek shant aur aadarsh batwara maante the | Varna ko puri tarah asamanata aur shoshan ka aadhar maan kar kharij kiya |
| **Azaadi Ka Tareeqa** | Savarna Hinduon ka hriday parivartan, pashchatap aur Harijan Seva | Sanvidhanik adhikar, kanooni taqat aur khud ki aawaz: *"Educate, Agitate, Organise"* |
| **Shoshit Samaj Ka Role** | Unchi jaatiyon ki daya aur seva ke labharthi | Apni mukti ke khud zimmedar aur autonomous rajneetik taqat |
| **Rajneetik Pratinidhitwa** | Separate electorates ka virodh (aamaran anshan -> Poona Pact 1932) | Shoshit varg ke liye alag rajneetik pratinidhitwa aur separate electorates |
| **Dharmik Hal** | Hindu dharam ke andar sudhaar aur mandir pravesh | Shastron ki pavitrata todna aur Navayana Buddhism mein conversion |

[[trap:Exam mein kabhi Gandhi ko ashprishyata ka samarthak mat likhna; Gandhi ne naitik aur aatmik star par iske khilaf lamba sangharsh kiya, par unka matbhed Ambedkar se Varna vyavastha ko bachane par tha.]]

## Aaj Ke Modern Bharat Mein Ashprishyata Ke Roop

Article 17 aur SC/ST Prevention of Atrocities Act (1989) ke bawajood, ashprishyata ne naye chhipe hue roop dhal liye hain:

1. **Spatial Segregation (Alag Basawat):** Hazaron gaon mein Dalit bastiyan gaon ke bahar paani aur hawa ke bahaav ke ulte rukh par rehti hain. Shehron ke posh ilaqon mein surname aur vegetarianism ke bahane Daliton ko makan kiraye par nahi diya jata ([[thinker:Sukhadeo Thorat]] ki study).
2. **Ritual Aur Ceremonial Rok:** Article 25(2)(b) ke bawajood mandiron mein ghusne se rokna. Dalit dulhe ke ghodi par baithne (*baraat*), moochh rakhne ya pagdi pehanne par gaon ke dominant log hinsa karte hain.
3. **Commensal Bhedbhav:** Sarkari schoolon mein Dalit rasoiye ke haath ka mid-day meal khane se upper caste bachhon ka inkar (Thorat & Joel Lee ki study). Tamil Nadu, Gujarat aur Rajasthan ke dhabon par Daliton ke liye 'do-glass system' (alag glass) abhi bhi chalta hai.
4. **Manual Scavenging Aur Gatar Ki Safai:** 2013 ke kanoon ke bawajood Valmiki samaj ke log bina suraksha upkaranon ke sewer saaf karne par majboor hain, jahan zehreli gas se mautein hoti hain.
5. **Institutional Micro-Aggressions:** Badi universities aur corporate offices mein subtle bhedbhav hota hai (Thorat Committee on AIIMS aur Rohith Vemula ke mamle iske udaharan hain).

## Samkaaleen Dalit Assertion: Char Mukhya Morche

Shoshit samudaayon ne is bhedbhav ka jawab chaar mukhya morchon par diya hai:

- **Rajneetik Morcha:** RPI se shuru hokar Kanshi Ram aur Mayawati ke netritva mein Bahujan Samaj Party (BSP) ne Daliton ko vote bank ke bajaye satta par kabza karne wali azad taqat banaya.
- **Socio-Cultural Sangharsh:** 1972 mein Maharashtra mein Namdeo Dhasal aur Arjun Dangle ne *Dalit Panthers* banaya (US ke Black Panthers se prerit). Unhone krantikari shayari aur zameeni lathiyon se Dalit bastiyon ki raksha ki.
- **Sanskritik Aur Sahityik Morcha:** Dalit sahitya ne shastriya sundaryashastra ko tod diya. Omprakash Valmiki ki *Joothan*, Bama ki *Karukku*, aur Baby Kamble ki aatm-kathayein apman aur ladayi ka aaina hain. Aaj ke daur mein *The Casteless Collective* jaise indie bands hip-hop aur rock se anti-caste chetna phaila rahe hain.
- **Aarthik Assertion (Dalit Capitalism):** 2005 mein Milind Kamble dwara banayi gayi DICCI (Dalit Indian Chamber of Commerce and Industry) ne नारा diya: *"Job givers bano, job seekers nahi"*, taaki purani aarthik lachari ko toda ja sake. [[link:Ise Paper 2 Unit 11 ke Social Movements aur Paper 1 Unit 8 ke Protest se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Mahatma Gandhi (Harijan Reformism)',
    rightTitle: 'Dr. B.R. Ambedkar (Dalit Liberation)',
    rows: [
      {
        aspect: 'Ashprishyata Ka Vishleshan',
        left: 'Samajik paap aur bimari jise Varna tode bina theek kiya ja sakta hai',
        right: 'Caste system ka sidha nateeja; bina caste tode khatam nahi ho sakti',
      },
      {
        aspect: 'Varna Vyavastha',
        left: 'Pertains non-competitive shant batwara; aadarsh roop ko bachana chahte the',
        right: 'Varna ko graded inequality aur shoshan ka hathiyar maan kar kharij kiya',
      },
      {
        aspect: 'Karyakarta Kaun Hai?',
        left: 'Upper caste ka pashchatap, seva aur daya (Harijan Seva)',
        right: 'Shoshit samaj ki khud ki azad taqat: Shikshit bano, Sangathit raho, Sangharsh karo',
      },
      {
        aspect: 'Rajneetik Pratinidhitwa',
        left: 'Hindu ekta bachane ke liye joint electorates mein aarakshan',
        right: 'Azad rajneetik aawaz ke liye separate electorates (Poona Pact 1932)',
      },
      {
        aspect: 'Shastron Ka Role',
        left: 'Dharmagranthon ki aadarsh vyakhya karke sudhaar lana',
        right: 'Dharmashastron aur Smritis ki pavitrata ko poori tarah todna',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Sudhaarwad Ka Virodh', text: 'Sahabhojan aur up-jati khatam karne ke upaayon ko khokhla bataya' },
      { label: 'Endogamy Par Vaar', text: 'Inter-caste marriage ko jati shuddhata todne ka sabse zaroori hathiyar mana' },
      { label: 'Shastron Ki Pavitrata', text: 'Manusmriti dahan (1927) se Dharmashastron ke dharmik aadhikar ko challenge kiya' },
      { label: 'Priesthood Ka Chunav', text: 'Mandiron ke pujariyon ke liye secular aur merit-based sarkari exam ki maang' },
      { label: 'Navayana Buddhism', text: 'Nagpur (1956) mein mass conversion ke zariye barabari aur aatmasamman ka marg' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Division of Labourers',
    meaning:
      'B.R. Ambedkar ka sankalp jo yeh batata hai ki caste sirf kaam ka batwara nahi, balki mazdooron ko kramik asamanata mein baant kar aapas mein ladane wali vyavastha hai.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Graded Inequality',
    meaning:
      'Ambedkar ka concept jisme hierarchy upar ki taraf izzat aur neeche ki taraf ghin par chalti hai, jisse har madhyam jati shoshan ka hissa ban jaati hai aur bagawat nahi hoti.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Annihilation of Caste',
    meaning:
      'Ambedkar ka 1936 ka krantikari blueprint jisme kaha gaya ki caste endogamy todkar, shastron ki pavitrata mita kar aur loktantrik barabari laakar hi khatam hogi.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Navayana Buddhism',
    meaning:
      'B.R. Ambedkar dwara 1956 mein Nagpur mein shuru kiya gaya Buddhist andolan jo samajik nyay, manav aatmasamman aur tarka-sangat barabari par aadharit hai.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Dalit Capitalism (DICCI)',
    meaning:
      'Milind Kamble dwara shuru kiya gaya aarthik andolan jo "Job giver bano, job seeker nahi" ke naare par Dalit vyapar ko badhava deta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Caste is not just a division of labour, it is a division of labourers.',
    context: 'Annihilation of Caste (1936) mein caste system ke aarthik justification ko todte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Gandhi vs Ambedkar Answer Ka Frame (2018 PYQ)',
    body: 'Gandhi aur Ambedkar ke 20-marker answer mein 5 spast aayam banao: (1) Philosophical aadhar (naitik paap vs structural shoshan), (2) Varna vyavastha (sudhri hui varna vs total vinash), (3) Agency (upper caste pashchatap vs Dalit swayam-shakti), (4) Rajneetik tareeqa (joint electorates vs separate electorates / Poona Pact), aur (5) Manzil (sudhra Hindu samaj vs Navayana conversion).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Sanvidhanik Articles Ka Sahi Prayog',
    body: 'Sanvidhan ke articles mein galti mat karna: Article 17 ashprishyata ko har roop mein ban karta hai; Article 15 caste bhedbhav par rok lagata hai; aur Article 25(2)(b) mandiron ko sabhi vargon ke liye kholne ka adhikar deta hai (Article 23 forced labour ke liye hai, confuse mat hona!).',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Graded Inequality Ka Formula',
    body: 'Ambedkar ka mukhya sawaal yaad rakho: 80% shoshit janta ne 20% elite ko kyun nahi ukhada? Kyunki inequality GRADED hai. Har jati ke paas apne se neeche koi na koi hota hai jisse woh shoshan karke aatmasantosh le sakti hai. Yeh batwara majdooron ko ek nahi hone deta.',
  },
  {
    kind: 'answerBox',
    intro:
      'Dr. B.R. Ambedkar ke samajshastriya vishleshan ne Brahminical functionalism ko dhwast karke Bharatiya samajshastra ko shoshit varg ke nazariye aur graded inequality ki krantikari samajh di.',
    points: [
      'Kaam ke batware ka khandan: Dikhaya ki caste sirf kaam ka nahi, balki mazdooron ka aprakritik batwara hai jo pratibha ko qaid karta hai.',
      'Graded inequality ka niyam: Samajik shreni mein upar izzat aur neeche ghin ke dhang ne shoshit jaatiyon ko aapas mein ladaya aur kranti ko roka.',
      'Annihilation ka thos blueprint: Dharmagranthon ki pavitrata ko todna, inter-caste marriage ko badhava dena aur mandiron ke pujariyon ke liye merit-based sarkari exam.',
      'Gandhi ke sudhaarwad se takraav: Naitik daya aur Harijan Seva ke bajaye sanvidhanik adhikar, aarakshan aur azad rajneetik taqat par zor diya.',
      'Aaj ka multi-front assertion: Daliton ne rajneetik (BSP), sanskritik (Dalit Panthers, sahitya) aur aarthik (DICCI Dalit capitalism) morchon par azaadi ka parcham lehrara hai.',
    ],
    conclusion:
      '21st century ke Bharat mein ashprishyata ko chupchap sehne ke bajaye Sanvidhan aur Ambedkarite chetna ke sahare har morche par lalkara ja raha hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Dr. B.R. Ambedkar ke radical samajshastriya nazariye, Annihilation of Caste ke krantikari blueprint, Gandhi-Ambedkar aitihasik debate, modern daur mein ashprishyata ke chhipe hue roop aur Dalit assertion ke chaar morchon ka samagra vishleshan.',
  mindMap,
  sections,
}
