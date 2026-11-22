import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1HiMindMap: MindMapData = {
  title: 'Topic 1 · Jansankhya Ka Aakar, Vridhi, Sanrachna Aur Vitaran',
  center: 'Jansankhya Gatishilta Aur Sankraman',
  subtitle: 'Transition Curve • Demographic Dividend vs Tax • Regional Asymmetries • Malthus vs Marx',
  branches: [
    {
      title: 'Demographic Transition Curve',
      color: 'lavender',
      thinkers: ['Warren Thompson', 'Frank Notestein', 'C.P. Blacker', 'Kingsley Davis'],
      points: [
        'Paanch-stariya model: Bharat Stage 2 (visphot) se Stage 3 (late expanding) mein aa chuka hai',
        'Mrityu dar gir kar ~6.0/1000 ho gayi jabki janam dar ghat kar ~19.5/1000 par aayi',
        'NFHS-5 aitihasik sanket: Kul Prajanan Dar (TFR) 2.0 par pahuñchi (replacement 2.1 se kam)',
        'Asantulit badlav: Dakshin Bharat Stage 4 mein hai jabki Uttar ke rajya Stage 3 mein atke hain',
      ],
    },
    {
      title: 'Dividend Ya Demographic Bojh',
      color: 'yellow',
      thinkers: ['David Bloom', 'Jeffrey Williamson', 'Ashish Bose', 'C.P. Chandrasekhar'],
      points: [
        'Anukool nirbharta anupaat: 67% aabadi 15–64 saal ke working-age mein; median age 28.2 saal',
        'Avsar ki khidki: 2041–2050 ke aaspaas band hogi jaise prajanan dar giregi aur greying badhegi',
        'Demographic tax ka sankat: bina naukari ki vridhi, asangathit rojgari, kam mahila LFPR (~32.8%)',
        'Koushal ka abhav: 5% se kam yuva formal vocational training prapt hain; anomie ka darr',
      ],
    },
    {
      title: 'Kshetrīya Asamanta Aur BIMARU',
      color: 'mint',
      thinkers: ['Ashish Bose', 'K.S. James', 'Alka Basu', 'Jean Drèze'],
      points: [
        'Ashish Bose (1985): Bihar, MP, Rajasthan, UP (ab EAG) rashtriya pragati ko roke hue the',
        'Tez prajanan antar: Bihar (TFR 2.98), UP (2.35) banam Kerala (1.8), Tamil Nadu (1.4)',
        'Samajshastriya asar: Uttar se Dakshin aur Paschim ki ore vishal purush circular migration',
        'Rajneetik tanav: 2026 Delimitation freeze khatam hona aur 15th Finance Commission tax vivad',
      ],
    },
    {
      title: 'Malthus Banam Samajshastriya Aalochna',
      color: 'pink',
      thinkers: ['Thomas Malthus', 'Karl Marx', 'Ester Boserup', 'Amartya Sen'],
      points: [
        'Malthus ki nirashawadita: anaj ki arithmetic vridhi banam aabadi ki geometric vridhi',
        'Marxian aalochna: koi prakritik niyam nahi; punjiwad relative surplus aabadi paida karta hai',
        'Boserup thesis: aabadi ka dabav kheti mein naye aavishkar aur gahanta lata hai',
        'Amartya Sen: aakal anaj ki kami se nahi, balki entitlement failure aur asaman vitaran se aata hai',
      ],
    },
  ],
}

export const topic1HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u14-01-demographic-transition-policy.webp',
    alt: 'P2 Unit 14 infographic: Demographic Transition & Policy — Population Growth, Dividend & Shift from Targets to NPP 2000',
    caption:
      'Bharat ka jansankhyikiya safar mrityu dar mein tezi se giravat se lekar replacement level prajanan dar tak phailta hai, jo ek vishal yuva shakti ke sath gahri kshetrīya asamanata ko darshata hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 24 Visual 01',
  },
  {
    kind: 'md',
    body: `## Demographic Transition Curve Par Bharat Ki Sthiti

Aasaan shabdon mein samjho, demographic transition ka matlab hai kisi samaj ka unchi janam dar aur unchi mrityu dar ke purane daur se nikal kar dheere-dheere kam janam dar aur kam mrityu dar ke aadhunik daur mein pravesh karna. [[thinker:Frank Notestein]] aur [[thinker:Warren Thompson]] ke is sidhant ke mutabiq, jab koi desh kheti-badi aur garibi se nikal kar aadhuniki-karan ki ore badhta hai, toh behtar swasthya suvidhaon se pehle mrityu dar girti hai aur baad mein samajik badlav se janam dar bhi ghatne lagti hai. Bharat pichle sau saalon mein is vishal parivartan ka sakshi raha hai.

Aaj Bharat purna roop se **Stage 3 (Late Expanding Transition)** mein khada hai aur dheere-dheere **Stage 4 (Low Fluctuating)** ki dehleej par dastak de raha hai. Mass vaccination, antibiotics aur mahamari par niyantran ke chalte rashtriya Crude Death Rate (CDR) ghat kar lagbhag 6.0 per 1,000 par aa gayi hai. Sath hi, Crude Birth Rate (CBR) bhi lagatar girte hue lagbhag 19.5 per 1,000 par pahuñch gayi hai. Iska sabse bada saboot yeh hai ki ==NFHS-5 (2019–21) ke anusaar Bharat ki Total Fertility Rate (TFR) gir kar 2.0 ho chuki hai==, jo biological replacement benchmark (2.1) se bhi neeche hai.

| Demographic Stage | Aitihasik Daur | CBR / CDR Ka Roop | Samajshastriya Karan Aur Halat |
| :--- | :--- | :--- | :--- |
| **Stage 1: High Stationary** | 1921 se pehle | CBR ~48, CDR ~47 | Aakal, mahamari (1918 Spanish flu), subsistence kheti |
| **Stage 2: Early Expanding** | 1951–1981 | CBR ~40, CDR ~15 | Penicillin, DDT se mrityu dar giri; "Jansankhya Visphot" |
| **Stage 3: Late Expanding** | 1991–2020 | CBR ~22, CDR ~7 | Mahila shiksha, shahrikaran aur chhote parivar ka chalan |
| **Stage 4: Low Stationary** | Ab Ubharta Daur | CBR ~14, CDR ~7 | Replacement TFR (<2.1), lifestyle bimariyan, buzurg samaj |

Lekin dhyan rahe, yeh rashtriya ausat ek gahre kshetrīya batware ko chhupata hai. Kerala, Tamil Nadu aur Andhra Pradesh jaise dakshin ke rajya Stage 4 mein hain jahan aabadi mein buzurg badh rahe hain, jabki Uttar Bharat ke bade rajya abhi bhi Stage 3 ke beech mein hain.`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'NFHS-5 Replacement Level Ka Meel Ka Patthar',
    body: 'NFHS-5 (2019–21) ke anusar Bharat ka rashtriya TFR gir kar 2.0 par aa chuka hai. Sirf 5 rajyon (Bihar 2.98, Meghalaya 2.91, UP 2.35, Jharkhand 2.26 aur Manipur 2.17) ko chhodkar, desh ke lagbhag sabhi rajyon ne bina kisi jabran qanoon ke replacement rate hasil kar liya hai.',
  },
  {
    kind: 'md',
    body: `## Demographic Dividend: Arthik Khazana Ya Samajik Bojh?

Saral bhasha mein, demographic dividend ka matlab hota hai aabadi ka woh sunehra daur jab kaam karne wale logon (15 se 64 saal) ki sankhya baccho aur buzurgon ki tulna mein sabse zyada ho jati hai. [[thinker:David Bloom]] aur [[thinker:Jeffrey Williamson]] kehte hain ki jab dependency ratio kam hota hai, toh parivar aur sarkar dono ki bachat aur nivesh kshamata tezi se badhti hai. Bharat ki ausat umra (median age) aaj sirf 28.2 saal hai aur kareeb 67% aabadi working-age bracket mein hai, jo lagbhag 2041–2050 tak barkarar rahegi.

Lekin samajshastri chetavni dete hain ki sirf yuvaon ki badi aabadi hona apne aap mein vikas ki guarantee nahi hai. Agar in yuvaon ko achhi shiksha, behtar swasthya aur sammanjanak naukariyan na milein, toh yahi laabh ek ==demographic tax ya samajik bojh== ban jata hai. Samajshastri [[thinker:C.P. Chandrasekhar]] ke mutabiq Bharat ka vikas "jobless growth" (bina rojgari ke vikas) ka shikar raha hai. PLFS report ke anusaar 88% se adhik yuva asangathit kshetra ki anishchit naukariyon mein hain, aur mahilaon ki bhagidari (FLFPR) sirf lagbhag 32.8% hai. Jab padhe-likhe yuvaon ko naukari nahi milti [[eg:Railway group-D aur peon ke pado ke liye lakhon engineers aur post-graduates ka line lagana]], toh yuvaon mein anomie, aakrosh aur social deviance paida hota hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Demographic Dividend (Samridhi Ka Avsar)',
    rightTitle: 'Demographic Tax / Bojh (Samajik Sankat)',
    rows: [
      {
        aspect: 'Nirbharta Anupaat',
        left: 'Kaam karne wale 15–64 saal ke yuvaon ka vishal anupaat (~67%)',
        right: 'Dakshin mein tez budhapa jabki Uttar mein ashikshit-ankushal yuva',
      },
      {
        aspect: 'Arthik Disha',
        left: 'Parivarik bachat mein tezi, udyamita aur formal industrial investments',
        right: 'Jobless growth, low wages aur gig economy ka temporary asurakshit rojgari',
      },
      {
        aspect: 'Mahila Bhagidari',
        left: 'Uchh shiksha prapt mahilaon ka aatmanirbhar banna aur kaam mein aana',
        right: 'Patriarchal gharelu bojh ke chalte low female labour force participation (~32.8%)',
      },
      {
        aspect: 'Samajik Sthirta',
        left: 'Naya madhyam varg, samajik gatishilta aur loktantrik utsah',
        right: 'Berozgari se paida hone wala yuva aakrosh, paper leak andolan aur hinsa',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Kshetrīya Asamanata: Ashish Bose Aur BIMARU Ka Sankalp

1985 mein vishisht demographer [[thinker:Ashish Bose]] ne Prime Minister Rajiv Gandhi ke samne **BIMARU** (Bihar, Madhya Pradesh, Rajasthan, Uttar Pradesh) shabd ka prayog kiya tha. Bose ka kehna tha ki jab tak Bharat ke yeh char bade rajya aabadi sthirikaran mein aage nahi aayenge, tab tak poore desh ka vikas aage nahi badh sakta. In char rajyon mein desh ki lagbhag 40% se zyada aabadi rehti thi jahan mahila saksharta behad kam thi aur shishu mrityu dar bahut unchi thi.

Jahan ek taraf Kerala, Tamil Nadu aur Karnataka ne mahila shiksha aur primary healthcare ke zariye apna TFR 1.4–1.8 tak pahuncha diya, wahi Uttar Bharat ke rajya kayi dashak peeche chhut gaye [[link:Unit 20 Industrialization & Urbanization]]. Is kshetrīya bhedbhav ke teen behad mahatvapurna samajshastriya aur samvidhanik asar hain:
1. **Antar-Rajya Labour Migration**: Bihar aur UP se karodon yuva majdoor har saal Kerala, Maharashtra aur Gujarat jate hain kyonki wahan ke aadhunik udyog aur kheti mein local majdooron ki kami hai [[eg:Kerala ke construction aur rubber kheti mein Bengali aur Bihari shramikon ka dabdaba]].
2. **2026 Delimitation Ka Vivad**: 1976 mein Sansad ki seato ko freeze kar diya gaya tha (jise 84th Amendment dwara 2026 tak badhaya gaya) taaki aabadi niyantran karne wale Dakshin ke rajyon ki seats kam na hon. Agar 2026 ke baad nayi aabadi ke hisab se seats banti hain, toh Uttar Bharat ka rajneetik dabdaba bahut zyada badh jayega.
3. **Finance Commission Ka Tanav**: 15th Finance Commission ne tax batware ke liye 2011 ke census ko aadhar banaya, jisse Dakshin ke rajyon ne virodh kiya ki unhe aabadi sambhalne ke jurmane ke roop mein kam tax mil raha hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1881',
        title: 'Pehla Synchronous All-India Census',
        text: 'W.C. Plowden ke netritva mein British Bharat ke sabhi praanto aur riyasato mein ek sath jansankhya ganana ki shuruat hui.',
      },
      {
        year: '1921',
        title: "'Year of the Great Divide' (Mahan Vibhajak Varsh)",
        text: 'Bharat ke itihas ka akela dashak (1911–1921) jab 1918 ke Spanish flu aur aakal ke karan aabadi mein nakaratmak vridhi (-0.31%) hui; iske baad se mrityu dar lagatar girti gayi.',
      },
      {
        year: '1951–1981',
        title: 'Jansankhya Visphot Ka Daur',
        text: 'Azadi ke baad penicillin, DDT aur aakal niyantran se mrityu dar 27 se gir kar 14 ho gayi, jabki janam dar 35 se upar bani rahi, jisse tez aabadi vridhi hui.',
      },
      {
        year: '2000',
        title: 'National Population Policy (NPP 2000)',
        text: 'Jabran nasbandi ke target system ko purna roop se samapt karke mahilaon ke prajanan adhikar aur swasthya par aadharit Target-Free Approach apnaya gaya.',
      },
      {
        year: '2021',
        title: 'NFHS-5: Replacement Level Ka Nishana',
        text: 'Rashtriya Total Fertility Rate 2.0 par pahuñch gayi, jisse yeh saaf ho gaya ki mahila shiksha aur behtar swasthya bina kisi kanooni zabardasti ke jansankhya ko sthir kar sakte hain.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Malthus Ka Nirashawad Banam Samajshastriya Aalochna

1798 mein [[thinker:Thomas Malthus]] ne apni prasiddha pustak *Essay on the Principle of Population* mein yeh tarka diya tha ki manushya ki aabadi geometric gati (1, 2, 4, 8, 16...) se badhti hai jabki anaj ka utpadan sirf arithmetic gati (1, 2, 3, 4, 5...) se badhta hai. Malthus ka manna tha ki agar samaj "preventive checks" (brahmacharya, der se vivah) nahi apnayega, toh prakriti swayam "positive checks" (aakal, mahamari, yuddh aur bhukhmari) bhej kar santulan banayegi. Uske mutabiq garibi garibon ke bholepan aur zyada bacche paida karne ka natija thi.

Samajshastriyon aur rajneetik arthshastriyon ne is niyam ko kadi aalochna di hai:
- **Marxian Aalochna Aur Relative Surplus Aabadi**: [[thinker:Karl Marx]] ne Malthus ke kisi bhi "prakritik niyam" ko poori tarah kharij kiya. Marx ne bataya ki garibi aur berozgari prakriti ki wajah se nahi, balki punjiwadi vyavastha (capitalism) ke karan hoti hai. Punjiwad machine-karan dwara jaanbujhkar ek **industrial reserve army of labour** tayar karta hai taaki majdooron ki bargaining power kam rahe aur unhe kam majdoori par dabaya ja sake [[trap:Yeh sochna ki garibi aabadi se aati hai; Marx ne dikhaya ki punjiwadi asaman vitaran aabadi ko faltu banata hai]].
- **Ester Boserup Ka Innovation Model**: [[thinker:Ester Boserup]] ne sabit kiya ki aabadi ka dabav aakal nahi lata, balki kheti mein nayi takneek, sinchai aur behtar faslon ke aavishkar ko janam deta hai.
- **Amartya Sen Ka Entitlement Approach**: [[thinker:Amartya Sen]] ne *Poverty and Famines* (1981) mein darshaya ki 1943 ka Bengal aakal anaj ki kami se nahi, balki garibon ke anaj khareedne ke haq (entitlements) khatam hone aur black-marketing ki wajah se hua tha [[eg:Bharat ke FCI godaamon mein sadta anaj banam garib baccho mein kuposhan]].`,
  },
  {
    kind: 'keyTerm',
    term: 'Demographic Transition',
    meaning: 'Woh samajshastriya prakriya jismein koi desh aadhuniki-karan ke dauran unchi janam aur mrityu dar se nikal kar kam janam aur mrityu dar ki sthiti mein pahuñchta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Demographic Dividend',
    meaning: 'Woh arthik mauka jab kisi desh mein kaam-kaji umra ke logon (15–64 saal) ka hissa nirbhar aabadi (baccho aur buzurgon) se kafi zyada ho jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Year of the Great Divide (1921)',
    meaning: '1921 ka aitihasik saal, jiske pehle Bharat ki aabadi aakal aur mahamari ke karan sthir aur ghat-ti-badhti rehti thi, lekin jiske baad se mrityu dar lagatar girti gayi aur aabadi badhti gayi.',
  },
  {
    kind: 'keyTerm',
    term: 'BIMARU Rajya',
    meaning: '1985 mein Ashish Bose dwara Bihar, MP, Rajasthan aur UP ke liye diya gaya shabd, jo unki kam saksharta, unchi prajanan dar aur pichhde samajik soochkanko ko darshata hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2026 Delimitation Aur Sanghiyavadi Vivad',
    body: 'UPSC Paper 2 ke Uttar mein hamesha aabadi ke badlav ko Bharatiya federalism se jodein. 2026 mein sansad ke seato ka pariseeman (delimitation) hone par jansankhya niyantran karne wale Dakshin Bharat ke rajyon ko seats ka nuksan aur Uttar Bharat ko labh milne ka samvidhanik khatra hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Garibon Par Aabadi Ka Dosh Mat Daalo',
    body: 'Kabhi bhi garib parivaron ke zyada baccho ko unka aalas ya anpadh-pan mat kaho. Samajshastriya drishti se shishu mrityu dar zyada hone par garib parivar insurance ke roop mein zyada bacche paida karte hain, aur bacche unke liye kamai aur budhape ka aadhar hote hain.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat ke yuva aabadi ke laabh ko ek sthayi demographic dividend mein badalne ka samajshastriya blueprint:',
    points: [
      'Gunnwatta-purna Madhyamik Aur Uchh Shiksha: Ratta maar padhai ke bajaye vocational training, cognitive skills aur digital koushal par public expenditure badhana.',
      'Formal Rojgar Ka Vistar: Kheti par nirbharta kam karne ke liye labour-intensive manufacturing, food processing aur green jobs mein formal naukariyan paida karna.',
      'Mahilaon Ka Shaktikaran: Saste public crèches, surakshit transport aur barabar vetan dekar mahila labour force participation rate (FLFPR) ko badhana.',
      'Kshetrīya Samanta: EAG rajyon (Bihar, UP, MP) mein primary healthcare, ladkiyon ke schools aur bijli-sadak ke infrastructure mein vishisht nivesh karna.',
      'Portable Samajik Suraksha: Doosre rajyon mein kaam karne wale circular migrant aur informal shramikon ke liye swasthya bima, ration aur pension ko rashtriya sthar par portable banana.',
    ],
    conclusion:
      'Demography koi bandha hua kismat nahi hai, balki ek khuli hui khidki hai. Bharat ka yuva tabhi sachhe roop mein desh ka vikas kar sakta hai jab rajya shiksha, mahila barabari aur formal rojgari mein aitihasik nivesh kare.',
  },
]
