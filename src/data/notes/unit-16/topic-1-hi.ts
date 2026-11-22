import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Bharat ke agrarian class structure ka vishleshan colonial semi-feudal daur se lekar contemporary capitalist agriculture tak karta hai. Daniel Thorner ke Malik-Kisan-Mazdoor model ki tulna André Béteille ke framework se karta hai, commercialization aur globalization ke prabhav ko dekhata hai, aur caste-class nexus se paida hone wali gaon ki extreme poverty aur footloose labour ki padtaal karta hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 1 — Agrarian Class Structure (Hinglish)',
  center: 'Agrarian Class Structure',
  subtitle: 'Thorner Typology • Béteille Matrix • Capitalist Transition • Caste-Class Nexus',
  branches: [
    {
      title: '1. Daniel Thorner Ka Agrarian Model',
      color: 'lavender',
      thinkers: ['Daniel Thorner', 'Karl Marx', 'Utsa Patnaik'],
      points: [
        'Teen paimanon par aadharit: income ka source, physical field work, aur zameen par control',
        'Malik (Proprietor): Bade absentee rentiers aur gaon ke rich landowners jo khud hal nahi chalate',
        'Kisan (Working Peasant): Parivar ki mehnat par aadharit khet; subsistence aur zaroorat par market bikri',
        'Mazdoor (Agricultural Labourer): Zameen-heen mazdoor, bataidar, aur debt bondage wale farm hands',
      ],
    },
    {
      title: '2. André Béteille Ka Samajik Framework',
      color: 'yellow',
      thinkers: ['André Béteille', 'Max Weber', 'M.N. Srinivas'],
      points: [
        'Do zaroori pehlu: Technological arrangements aur social arrangements of production',
        'Sripuram (Tanjore) study: Traditional harmonic overlap se modern disharmonic system mein badlaav',
        'West Bengal ke Jotedars ka udbhav: Ek aisi intermediate agrarian power jo barga vyavastha chalati thi',
        'Bharat ke gaon ko Western binary class models (bourgeois vs proletarian) mein zabardasti fit karne ka virodh',
      ],
    },
    {
      title: '3. Commercialization Aur Neoliberal Daur',
      color: 'mint',
      thinkers: ['Jan Breman', 'Bina Agarwal', 'Utsa Patnaik', 'K. Nagaraj'],
      points: [
        'Green Revolution se globalization tak: Cash crops, mehnge inputs, aur global market price volatility',
        'Mechanization aur labour displacement: Billings & Singh ke anusaar khet mazdoori mein 50% tak girawat',
        'Footloose Labour (Jan Breman): Paternalistic ties ka tootna aur seasonal circular migration ka badhna',
        'Agrarian distress ka feminization: Purushon ke shahar jaane se gaon mein mahilayein kam majoori par phans gayi',
      ],
    },
    {
      title: '4. Caste-Class Nexus Aur Extreme Poor',
      color: 'pink',
      thinkers: ['B.R. Ambedkar', 'Gail Omvedt', 'Jan Breman', 'Sukhadeo Thorat'],
      points: [
        'Cumulative inequality: Unchi jati ke paas zameen ka malkana, Daliton ke hisse zameen-heenta',
        '70% se zyada gaon ke Dalit parivar zameen-heen khet mazdoor ki tarah zindagi guzar rahe hain',
        'Wage demand par institutionalized hinsa: Ranvir Sena jaise militias aur social boycotts (Kilvenmani, Bathani Tola)',
        'Purani Halipratha aur Kamiya pratha ka modern advance (peshgi) bondage mein badal jana',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u06-01-indian-class-pyramid.webp',
    alt: 'Bharat ka agrarian class pyramid Malik, Kisan aur Mazdoor categories ke sath',
    caption:
      'Agrarian Class Pyramid: Bade zameendaron (Maliks) se lekar chhote kisano (Kisans) aur zameen-heen mazdooron (Mazdoors) ka structural hierarchy.',
  },
  {
    kind: 'md',
    body: `## Bharat Mein Agrarian Class Structure Ko Samjho

Aasaan shabdon mein samjho: Agrarian class structure ka matlab hai gaon ke andar zameen, kheti ke saadhan aur labour ka bantwara kaisa hai. Gaon mein zameen sirf ek aarthik cheez nahi hoti, balki yeh izzat, samajik rutba aur political power tay karti hai. Pehle sociologists sochte the ki Bharat ke gaon ko sirf caste ke chashme se dekha ja sakta hai, lekin reality yeh hai ki kheti aur zameen se juda class structure bhi utna hi zinda aur taqatwar hai.

Angrezon ke aane se pehle gaon mein zameen bechne ya neelam karne wali private property nahi thi; customary adhikar chalte the. Lekin British rule ne ==Permanent Settlement (Zamindari)==, ==Ryotwari== aur ==Mahalwari== systems lagakar zameen ko khareedne-bechne wali property bana diya. Isse gaon mein do dhure ban gaye: ek taraf aish karne wale absentee Zamindars aur doosri taraf behad shoshit kisaan aur zameen-heen mazdoor.

Aazadi ke baad zamindari abolition hua, par political jugalbandi ki wajah se zameen ka sahi bantwara nahi ho paya. Iske baad 1960s mein ==Green Revolution== aayi aur 1991 mein economic reforms, jisne kheti ko poori tarah capitalist market se jod diya. Aaj Bharat ka rural class structure kafi tez badlaav ke daur se guzar raha hai.

| Agrarian Varg | Kamai Ka Mukhya Zariya | Physical Labour Ka Nature | Caste Ka Mel |
| :--- | :--- | :--- | :--- |
| **Malik (Bade Kisaan / Landlord)** | Badi zameen, fasal ka surplus, lagan aur kiraya | Khud hal nahi chalate; mazdooron se kaam karwate hain | Upper castes (Brahmin, Rajput) aur dominant castes (Jat, Patidar, Maratha) |
| **Kisan (Chhota / Madhyam Peasant)** | Apni zameen ka chhota-mota tukda; parivar ka gujara | Parivar ke log khud khet mein pasina bahate hain | Intermediate backward castes (OBCs, traditional farming castes) |
| **Mazdoor (Khet Mazdoor)** | Zameen bilkul nahi ya na ke barabar (<1 acre); dehadhi | Sirf aur sirf physical mazdoori par aashrit | Scheduled Castes (Dalits), Adivasi, aur lower MBCs |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Daniel Thorner: Economic Typology (1956)',
    rightTitle: 'André Béteille: Sociological Matrix (1974)',
    rows: [
      {
        aspect: 'Mukhya Focus',
        left: 'Production ke economic relations: zameen par haq, income ka source, aur physical labour.',
        right: 'Technological arrangements aur social relations ka aapas mein mel; Caste-Class-Power nexus.',
      },
      {
        aspect: 'Varg Categories',
        left: 'Teen vargon ka seedha model: Malik (malik), Kisan (khetahar kisan), aur Mazdoor (dehadhidar).',
        right: 'Multi-layered dynamic model: Landlords, owner-cultivators, tenants, sharecroppers, aur wage labourers.',
      },
      {
        aspect: 'Field Evidence',
        left: 'All-India macro analysis jo Census aur NSSO ke broad agrarian data par aadharit thi.',
        right: 'Tamil Nadu ke Sripuram (Tanjore) aur West Bengal ke gaon ka intensive micro fieldwork.',
      },
      {
        aspect: 'Badlaav Ka Dhang',
        left: 'Dekhaya ki irrigated belts mein capitalist farmers aur wage exploitation kaise ubhre.',
        right: 'Dekhaya ki modern daur mein caste rank, class status, aur political power ek-doosre se alag ho rahe hain.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Daniel Thorner Ka Malik-Kisan-Mazdoor Model

1956 mein [[thinker:Daniel Thorner]] ne Bharat ke gaon ke liye ek behtareen 3-tier classification diya. Thorner ne kaha ki sirf acreage (kitni bigha zameen hai) ginne se baat nahi banegi, kyunki sukhe Rajasthan ke 50 bigha aur Punjab ke nehari 5 bigha ki keemat bilkul alag hoti hai. Isliye unhone teen practical paimane banaye:
1. **Income ka source**: Kiraya (rent), business ka munaafa (profit), ya dehadhi majduri (wages).
2. **Zameen par control**: Pakka malkana haq, kirayedari (tenancy), ya poori tarah zameen-heen hona.
3. **Khet mein physical labour**: Khet mein bilkul haath na lagana, parivar ke sath kheti karna, ya doosron ke khet mein mazdoori karna.

In teen paimanon par unhone teen varg banaye:
- **Malik (Proprietors / Landlords)**: Zameen ke malkana haq se moti aamdani kamate hain. Yeh do tarah ke hote hain: *absentee landlords* jo shahar mein rehte hain aur kiraya vasoolte hain, aur *resident rich farmers* jo gaon mein rehkar kheti supervise karte hain. Malik khet mein khud hal chalane ko apni shaan ke khilaf samajhte hain.
- **Kisan (Working Peasants)**: Chhote aur madhyam kisan jinki kheti mukhya roop se unke parivar ki mehnat par chalti hai. Yeh apne gujare ke liye anaj ugate hain aur tax ya zaroori kharche nikalne ke liye thoda anaj mandi mein bechte hain.
- **Mazdoor (Agricultural Labourers)**: Gaon ka proletarian varg jiske paas zameen nahi hoti. Yeh Malik aur rich Kisan ke khet mein dehadhi par kaam karte hain. Inme bandhua mazdoor aur daily wage casual labourers dono aate hain.

[[eg:Western UP ke ganna belt mein Jat bade kisaan Malik ki tarah kheti supervise karte hain aur Bihar ke migrant Mazdoors se katai karwate hain, jabki chhote Saini kisaan Kisan ki tarah khud khet meinote hain.]]

### André Béteille Ka Samajik Matrix

[[thinker:André Béteille]] ne European Marxist model (bourgeoisie vs proletariat) ko Bharat ke gaon par andhadhundh thopne ka virodh kiya. Apni kitaab *Caste, Class, and Power* (1965) aur *Studies in Agrarian Social Structure* (1974) mein Béteille ne bataya ki agrarian structure ko do aapas mein jude pehluon se samajhna hoga:
1. **Technological Arrangements**: Mitti ki urvarata, tube-well ya nehar ka paani, fasal chakra aur kheti ke auzaar.
2. **Social Arrangements of Production**: Zameen par kanooni haq, kirayedari ke samjhote aur kisan-mazdoor ke beech samajik sambandh.

Sripuram (Tanjore delta) ke apne adhyayan mein Béteille ne dekha ki aazadi se pehle ek **harmonic system** tha: Brahmin zameen ke maalik (Mirasdars) the, Non-Brahmin kisan the, aur Adi-Dravida (Dalit) zameen-heen mazdoor the. Lekin modern kanoon, adult suffrage aur cash market ne is system ko todkar **disharmonic system** bana diya—aaj kisi ki caste se uska class status direct tay nahi hota.

Béteille ne Bengal ke ==Jotedars== ka bhi vishleshan kiya. Yeh aam zamindaron se alag aise rich peasant intermediate power holders the jo gaon mein rehkar barga vyavastha (sharecropping) chalate the aur rural credit v anaj vyapar ko control karte the.

[[link:Paper 1 Stratification ↔ Paper 2 Agrarian Structure: Max Weber ka multi-dimensional model (Class, Status, Party) seedhe André Béteille ke Caste, Class, aur Power se judta hai.]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Colonial Land Settlements',
        text: 'Zamindari aur Ryotwari ne zameen ko private commodity banakar kisano ko kangaal kiya.',
      },
      {
        label: 'Aazadi Ke Baad Reforms',
        text: 'Bade zamindaron ka dabdaba kam hua; intermediate tenant castes dominant landowners ban gaye.',
      },
      {
        label: 'Green Revolution Tech',
        text: 'High-yield seeds aur tractors ne kheti ko market se joda; mechanization ne mazdoori ghati.',
      },
      {
        label: 'Neoliberal Global Market',
        text: 'Cash crops ki aafat, input laagat mein bhari badhotari, aur footloose migrant labour ka phailav.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Commercialization, Globalization Aur Badalta Agrarian Structure

Global market aur corporate supply chains ke aane se Bharat ke gaon ka aarthik tana-bana badal gaya hai. Jahan colonial daur mein commercialization jabardasti tha (jaise Neel aur Afeem ki kheti), wahin aaj yeh corporate contract farming, hybrid beej aur chemicals ke zariye chal raha hai.

Is badlaav ke mukhya pehlu:
- **Agrarian Capitalists Ka Udbhav**: Intermediate dominant castes (Patidars, Jats, Marathas, Kammas) ne kheti ke munaafe ko cold storages, transport, agro-processing aur private colleges mein lagaya.
- **De-peasantization Aur Proletarianization**: Chhote aur seemant (marginal) kisaan diesel, keetnashak aur beej ki badhti laagat jhel nahi pate. Fasal fail hone par zameen bechkar ya girvi rakhkar mazdoor banne par majboor ho jate hain. [[thinker:Utsa Patnaik]] ne ise apne *Labour Exploitation Criterion* se sabit kiya.
- **Footloose Labour Ka Sankat**: [[thinker:Jan Breman]] ne South Gujarat mein dekha ki Anavil Brahmin zameendaron aur Halpati adivasi mazdooron ke beech ki purani Halipratha (patron-client rishta) khatam ho chuki hai. Iski jagah ek naya be-sahara varg ubhra hai jise Breman ne ==Footloose Labour== kaha—yeh log saal bhar ganna katai, eent-bhatthe aur construction sites ke beech ghoomte rehte hain.
- **Agrarian Distress Ka Feminization**: [[thinker:Bina Agarwal]] kehti hain ki jab purush rozi-roti ke liye shahron ki taraf migrate karte hain, toh gaon mein mahilayein bina kisi zameen ke kanooni malkana haq ya bank loan ke khet mazdoori mein phansi reh jati hain.

### Caste Aur Class Ka Gathbandhan Aur Extreme Poverty

Gaon ke andar "extreme poor" (behad gareeb) koi aam aarthik ghatna nahi hai; yeh jati vyavastha aur class shoshan ke aapsi gathbandhan ka nateeja hai. [[thinker:B.R. Ambedkar]] ne saaf kaha tha ki caste sirf division of labour nahi hai, yeh to **division of labourers** hai.

Gaon mein zameen-heen mazdooron mein sabse badi sankhya Daliton aur Adivasiyon ki hai:
1. **Aitihasik Sampatti Se Vanchit Rakhna**: Dharmashastron ke niyam ke chalte lower castes ko sadiyon tak zameen aur sampatti rakhne se roka gaya, jisse unki dependency bani rahi.
2. **Naye Roop Mein Debt Bondage**: Halanki kanoonan bandhua mazdoori banned hai, par seasonal advance (*peshgi*) ke zariye pure parivar ko eent-bhatthe ya ganna katai mein bandhua bana liya jata hai.
3. **Majoori Mangne Par Hinsa**: Jab Dalit mazdoor statutory minimum wage ya izzat mangte hain, toh dominant landed castes Ranvir Sena jaise private militias khade karti hain ya *nakabandi* (social boycott) karke unka paani aur kaam band kar deti hain.

[[eg:Kilvenmani (1968, Tamil Nadu), Bathani Tola (1996, Bihar), aur Tsundur (1991, Andhra Pradesh) mein hinsa is baat ka saboot hai ki jab zameen-heen Dalit mazdooron ne behtar majoori mangi toh unpar khula qatle-aam hua.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'Malik-Kisan-Mazdoor',
    meaning:
      'Daniel Thorner ka diya hua teen-vargi model jo aamdani ke source, physical labour aur zameen par adhikar ke aadhar par gaon ki aabadi ko baanta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour',
    meaning:
      'Jan Breman ka concept jisme unorganized migrant mazdoor bina kisi suraksha ke gaon ki kheti, eent-bhatthon aur shahar ke construction mein ghoomte rehte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Feminization of Agriculture',
    meaning:
      'Purushon ke shahar migrate karne ki wajah se gaon ke kheti kamo mein mahila mazdooron ka anupat badhna, jiska vishleshan Bina Agarwal ne kiya.',
  },
  {
    kind: 'keyTerm',
    term: 'Jotedar',
    meaning:
      'Bengal ke madhyam zameendar-capitalist jo gaon mein rehkar barga vyavastha (sharecropping) chalate the aur local anaj vyapar v credit ko control karte the.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Land Reforms Aur Regional Class Dynamics',
    body:
      'UPSC ke uttar mein dhyan dein ki land reforms poore desh mein ek jaise nahi rahe: Kerala aur West Bengal (Operation Barga) mein tenancy reforms ne bargadaron ko haq dilaya, jabki North India mein dominant peasant castes ne political power ke dam par badi holdings bacha li.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Kisan Varg Ko Ek Jaisa Mat Samjho',
    body:
      'Kabhi bhi poore kisan samaj ko ek uniform group mat maano. Mote kisan (capitalist farmers) jo MSP aur subsidised bijli se kamate hain, unki tulna zameen-heen dehadhidar mazdooron se alag karke likho.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Caste-Class Confluence Formula',
    body:
      'Ritual Chhuachhut + Zameen-heenta + Karze Ka Jaal = Gaon Ki Extreme Poverty. Bharat ke gaon se gareebi tab tak khatam nahi ho sakti jab tak caste-based discrimination ko jad se na mitaya jaye.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat ke badalte agrarian class structure par ek shandar UPSC uttar mein technology aur caste relations dono ka santulit vishleshan hona chahiye:',
    points: [
      'Jajmani aur Halipratha jaise purane patron-client rishton ka khatam hona aur unki jagah be-reham contractual dehadhi mazdoori ka aana.',
      'Intermediate dominant castes (Jats, Marathas, Patidars) ka rural capitalist oligarchs ban kar sugar mills, cooperatives aur rajneeti par qabza karna.',
      'Zameen ke chhote tukde hone se marginal kisano ka semi-proletarianization hona, jisme wo kheti ke sath shehron mein mazdoori karte hain.',
      'Antar-rajya circular, footloose migrant labour ka tezi se badhna (jaise Bihar aur Eastern UP ke mazdoor Punjab aur Haryana ke khet mein jana).',
      'Kheti ki badhti laagat, fasal ke gair-bharosemand daam aur karze ke jaal se kisaan aatmhatya aur agrarian distress ka tevar.',
      'Kheti ka mahila-karan (feminization) hona, jahan mahilayein khet mein kadi mehnat karti hain par zameen ka kanooni haq unhe nahi milta.',
    ],
    conclusion:
      'Bharat ka agrarian class structure ek lambe aur asaman capitalist transition se guzar raha hai, jahan purane samajik bhedbhav naye aarthik shoshan ke roop mein dhal rahe hain.',
  },
]

export const topic1Hi = { summary, mindMap, sections }
