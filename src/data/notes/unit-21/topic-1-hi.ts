import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1HiMindMap: MindMapData = {
  title: 'Topic 1 · Bharat Mein Aadhunik Udyog Ka Vikaas',
  center: 'Aadhunik Udyog Ka Vikaas',
  subtitle: 'Colonial Deindustrialization • Nehruvian PSUs • 1991 Neoliberalism • Caste & Corporate Houses',
  branches: [
    {
      title: 'Colonial Daur & Deindustrialization',
      color: 'lavender',
      thinkers: ['Dadabhai Naoroji', 'R.C. Dutt', 'Amiya Kumar Bagchi', 'Karl Marx'],
      points: [
        'Drain Theory: Naoroji ne samjhaya kaise Bharat ka surplus Britain bheja gaya',
        'R.C. Dutt & Bagchi: desi handloom aur karigaron ka systematic vinash',
        'Colonial railway tariff: raw material port bhejne ki neeti, aantarik udyog thapp',
        'Enclave udyog: kewal Bombay (cotton) aur Calcutta (jute) ports tak seemit',
      ],
    },
    {
      title: 'Azaadi Ke Baad Ka Nehruvian Daur',
      color: 'yellow',
      thinkers: ['Jawaharlal Nehru', 'P.C. Mahalanobis', 'A.R. Desai', 'Gunnar Myrdal'],
      points: [
        'Mahalanobis model: Second Five-Year Plan mein heavy industry ko priority',
        'Aadhunik Bharat ke mandir: Bhilai, Rourkela, BHEL jaise public sector undertakings',
        'A.R. Desai ka critique: state capitalism ne private corporate ko khada kiya',
        'License Raj: bureaucratic permission aur quota se paida hui supply kami',
      ],
    },
    {
      title: '1991 Ka Neoliberal Badlaav',
      color: 'mint',
      thinkers: ['C.P. Chandrasekhar', 'Jayati Ghosh', 'Leela Fernandes', 'Pranab Bardhan'],
      points: [
        'License Raj ka ant: deregulation, disinvestment aur foreign investment (FDI)',
        'Premature deindustrialization: factory manufacturing chhodkar seedhe IT-services jump',
        'High-tech cluster: Bengaluru, Hyderabad aur Gurugram ke cyber corridors',
        'Labour informalisation: contractualization aur union power ka patan',
      ],
    },
    {
      title: 'Jaati Aur Corporate Gharane',
      color: 'pink',
      thinkers: ['Harish Damodaran', 'D.L. Sheth', 'B.R. Ambedkar', 'Max Weber'],
      points: [
        'Paramparik vyapari jaatiyan: Marwari, Parsi, Gujarati Bania, Chettiar dominance',
        'Kisan se capitalist: Patidar, Kamma, Reddy jaatiyon ka udyog mein pravesh',
        'Jaati as social capital: trust, loan aur boardrooms mein parivarik networking',
        'Dalit aur Adivasi vancchit: corporate ownership mein subalterns ki lagbhag zero hissedari',
      ],
    },
  ],
}

export const topic1HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
    alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
    caption:
      'Bharat mein aadhunik udyog ka vikas: angrezi daur ke hastshilp vinash se lekar Nehruvian public sector aur 1991 ke service-led corporate capitalism tak ka safari.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 01',
  },
  {
    kind: 'md',
    body: `## Colonial Daur Ka Jhatka: Deindustrialization Aur Drain of Wealth

Aasaan shabdon mein samjho: Bharat mein aadhunik udyog ka vikas Western Europe ki tarah kheti ke natural industrial development se nahi hua. Angrezi hukumat ne Bharat ki aarthik vyavastha ko zabardasti tod-marod kar kacha maal (raw material) export karne aur Britain ki factory mein bane kapde bechne ka captive market bana diya. Hamare jo karigar aur weavers pure vishwa mein mashhoor the, unka rozgar chheen gaya aur unhe absorb karne ke liye desh mein koi factories maujood nahi thi.

Desh ke shuruati rashtravadi vidwano ne is aarthik shoshan ko gehrai se samjhaya. *Poverty and Un-British Rule in India* mein [[thinker:Dadabhai Naoroji]] ne ==Drain of Wealth== ka siddhant diya, jisme bataya gaya ki kaise kisanon aur shramikon se nichoda gaya tax aur surplus bina kisi aarthik badle ke Britain bheja ja raha tha. Sath hi [[thinker:R.C. Dutt]] ne *The Economic History of India* mein dikhaya ki angrezo ki tariff policy aisi thi ki Manchester ke machine wale kapde par koi tax nahi tha, jabki Bharat ke hathkargha par bhari tax laga diya gaya.

### Deindustrialization Ki Samajik Hakikat
Samajshastri aur aarthik itihaskar [[thinker:Amiya Kumar Bagchi]] ne Gangetic Bihar aur Bengal ke aankdon se ==Deindustrialization== ko saabit kiya:
- 18th century ke ant se lekar 20th century ke shuruat tak kheti par nirbhar aabadi ka anupaat tezi se badha.
- Jin julahon aur karigaron ke dhandhe band hue, unke paas shehar mein koi factory job nahi thi; unhe majbooran gaon lautkar kheti mein majdoori ya bataidari (sharecropping) karni padi.
- [[thinker:Karl Marx]] ne bhi apne lekhon mein likha ki British steam engine aur science ne Bharat ke gaon ke us aatmanirbhar dhache ko tod diya jahan kheti aur hathkargha ek sath chalte the.

### Colonial Railways Aur Asantulit Udyog Ka Naksha
Halaanki [[thinker:Karl Marx]] ne socha tha ki railway Bharat mein aadhunik udyog ka pathpradarshak banegi, par angrezo ne railways ko imperial extractivism ke hisab se bichhaya. Dalhousie ki railway line gaon ke kache maal ko seedhe teen bandargahon—Calcutta, Bombay aur Madras—se jodti thi.

Railway ke bhade (freight charges) mein chhal kiya gaya: kache maal ko port tak le jana aur videshi maal ko gaon tak lana sasta tha, lekin desh ke andar ek rajya se doosre rajya mein desi maal bechna behad mehnga. Is wajah se Bharat mein sirf **enclave udyog** bane—Calcutta mein Hooghly ke kinare jute mills, Bombay aur Ahmedabad mein cotton textile mills, aur Chota Nagpur mein koyla-loha khadan. Desh ka baaki bada hissa udyogik roop se sookha reh gaya.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Organic Western Industrialization',
    rightTitle: 'Colonial Indian Trajectory',
    rows: [
      {
        aspect: 'Shuruat Ka Karan',
        left: 'Kheti ke surplus aur nayi technology se organic dhang se factories bani.',
        right: 'Colonial policy ne desi karigaron ko barbad karke Manchester ka market banaya.',
      },
      {
        aspect: 'Majdooron Ka Safar',
        left: 'Kheti se nikalne wale log shehari factories mein rozgar paane lage.',
        right: 'Deindustrialization ke karan shahr ke karigar wapas gaon ki kheti par bojh ban gaye.',
      },
      {
        aspect: 'Desh Ka Vikas',
        left: 'Transport network ne pure desh ke aantarik bazaar ko aapas mein joda.',
        right: 'Kewal coastal port shehar viksit hue; aantarik ilaqa udyog-viheen chhoot gaya.',
      },
      {
        aspect: 'Sarkar Ka Role',
        left: 'Apne gharelu udyogon ko bachaane ke liye bahar ke maal par import duty lagayi.',
        right: 'Free-trade imperialism ke zariye videshi maal ko khuli chhoot aur desi par tax.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Azaadi Ke Baad Ka Daur: Nehruvian PSUs Aur "Aadhunik Bharat Ke Mandir"

1947 mein azaadi ke samay Bharat ke paas consumer goods (jaise kapda aur cheeni) banane ki thodi factories to thi, lekin loha, steel, machine-tools aur cement banane ka koi aadhar nahi tha. Is kami ko poora karne ke liye Prime Minister [[thinker:Jawaharlal Nehru]] aur statistician [[thinker:P.C. Mahalanobis]] ne **Second Five-Year Plan (1956–1961)** banaya, jisme public sector ko ==Commanding Heights of the Economy== par rakha gaya.

Nehru ne steel plants aur mega dams ko **aadhunik Bharat ke mandir** kaha. [[eg:Bhilai, Rourkela, aur Durgapur ke vishal steel karkhane, BHEL aur ONGC jaise sarkari udyog pichhde ilaqon mein isliye lagaye gaye taaki wahan vikas ki nayi lehar shuru ho sake.]]

### Nehruvian Model Ke Samajik Pehlu
1. **Organized Working Class Ka Uday**: Public Sector Enterprises ne permanent nokari, sarkari colony, pension, healthcare aur Daliton/Adivasiyon ke liye constitutional reservation diya, jisne ek surakshit working-class tabqa taiyar kiya.
2. **State Capitalism Banam Samajwad**: Marxist samajshastri [[thinker:A.R. Desai]] ne bataya ki Nehru ka model asli samajwad nahi tha, balki **state capitalism** tha. Sarkar ne heavy infrastructure banane ka bhari kharch aur risk khud uthaya, aur fir saste daam par bijli, steel aur transport provide karke Tata-Birla jaise private punjipatiyon ko munafa kamane ka maidan diya.
3. **License-Permit Raj**: Monopoly rokne ke naam par jo licensing banayi gayi, usne aam logon ke liye red-tapism, rishwatkhori aur quota-raj paida kiya, jisse purane corporate gharanon ko bina competition ke fayda mila.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Step 1: Colonial Deindustrialization (1800–1947)',
        text: 'Desi karigaron ka patan, kheti par badhta bojh, port cities mein enclave udyog (cotton, jute).',
      },
      {
        label: 'Step 2: Nehruvian State Capitalism (1950–1990)',
        text: 'Mahalanobis heavy capital model, sarkari PSUs, License-Permit Raj, permanent organized labour.',
      },
      {
        label: 'Step 3: Post-1991 Neoliberal IT/Services',
        text: 'De-licensing, FDI, high-tech cyber corridors, premature deindustrialization aur labour contractualization.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## 1991 Ka Neoliberal Turn: Services Ka Boom Aur Asurakshit Shram

1991 ke aarthik sankat ke baad Bharat ne License Raj khatam kiya aur Liberalisation, Privatisation, Globalisation (LPG) ki raah chuni. East Asia (China, South Korea) ki tarah factory-manufacturing par focus karne ke bajay Bharat seedhe kheti se tertiary services sector (IT, BPO, Software) mein chhalang laga gaya.

Bengaluru, Hyderabad, Gurugram aur Pune jaise shehar high-tech export hubs ban gaye. Lekin samajshastriyon ne is model ki kamzori ko samne laya:
- **Premature Deindustrialization**: Desh ki GDP mein manufacturing 15–17% par hi atak gayi, jiski wajah se kheti se nikalne wale lakho yuvaon ko factory mein regular nokari nahi mil saki.
- **Gated Tech Elite Banam Slums**: Ek taraf AC office aur gated apartments hain, to theek unke bagal mein paani aur gutter se vancchit kachhi bastiyan aur jhuggi-jhopdiyan.
- **Contractualization**: Global competition ke bahane private companies ne permanent nokri khatam karke contractual aur platform gig work badhaya, jahan koi provident fund ya pension nahi milti.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Bharat Ka Service Sector Miracle Ya Adhoora Vikas?',
    body: 'Exam mein IT boom ki tareef karte hue critical sociology bhool mat jana. Service sector padhe-likhe urban middle class ko hi rozgar deta hai. 90% aabadi ke liye factory manufacturing na badhna ek structural crisis hai, jise Dani Rodrik "Premature Deindustrialization" kehte hain.',
  },
  {
    kind: 'md',
    body: `## Jaati, Parivar Aur Corporate Conglomerates

Modernization theory ka dawa tha ki aadhunik factories aane se purani jaati vyavastha toot jayegi aur class system banega. Par Bharat mein corporate capitalism ne jaati aur parivar ke nakshe ko todne ke bajay use apna tool bana liya.

*India's New Capitalists* mein [[thinker:Harish Damodaran]] ne dikhaya ki Bharat mein corporate business ka vikas alag-alag jaatiyon ke networks se juda hai:
1. **Paramparik Vyapari Jaatiyan**: Marwari, Gujarati Bania, Parsi aur Chettiar parivaron ne apne paramparik hundi system aur parivarik vishwas ko aadhunik corporate empire (jaise Birla, Ambani, Godrej) mein tabdeel kar liya.
2. **Kheti Se Industry Mein Aane Wali Jaatiyan**: Green Revolution ke munafey se kisan jaatiyon ne udyog mein kadam rakha—Andhra-Telangana mein Kammas aur Reddys (pharma aur infrastructure), Gujarat mein Patidars (diamond aur textile), aur Tamil Nadu mein Gounders (Tirupur knitwear exports).
3. **Jaati As Social Capital**: Jaati ke networks saste loan, vishwasu manager aur boardroom control banaye rakhne mein kaam aate hain.
4. **Subalterns Ki Vanchhana**: D.L. Sheth aur Surinder Jodhka ke studies dikhate hain ki corporate boards aur equity ownership mein Dalit, Adivasi aur Muslim lagbhag gayab hain, jo saabit karta hai ki market meritocracy nahi balki caste social capital par chalta hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Deindustrialization (R.C. Dutt / Bagchi)',
    meaning:
      'Colonial daur ki wah aarthik prakriya jisme British factory products ne Bharat ke paramparik julahon aur karigaron ko barbad kar diya aur majbooran kheti par bhed diya.',
  },
  {
    kind: 'keyTerm',
    term: 'Temples of Modern India (Nehru)',
    meaning:
      'Nehru dwara Bhilai, Rourkela steel plants aur Bhakra Nangal dams ko diya gaya naam, jo aadhunik udyog aur scientific temper ke prateek mane gaye.',
  },
  {
    kind: 'keyTerm',
    term: 'Enclave Industrialization',
    meaning:
      'Aise alag-thalag udyogik shehar (jaise colonial Bombay aur Calcutta) jo kewal videshi raw material export se jude the aur aam gaon ke vikas se bilkul kate hue the.',
  },
  {
    kind: 'keyTerm',
    term: 'India’s New Capitalists (Harish Damodaran)',
    meaning:
      'Bharat mein traditional Bania vyapariyon ke alawa krishi jaatiyon (Patidar, Kamma, Gounder) ke udyogik punjivad mein pravesh ka samajshastriya vishleshan.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Galti Mat Karna: Caste In Corporate India',
    body: 'Corporate sector ko pure meritocracy mat likhna. Harish Damodaran aur Surinder Jodhka ke hawale se dikhao ki caste kinship ek unwritten social capital hai jo credit access aur boardroom seats ko regulate karta hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Western aur Indian industrialization ki tulna karne ke liye ek balanced framework:',
    points: [
      'Aitihasik utpatti: Western industrialization kheti ke surplus aur technological revolution se organic tarike se nikla; Bharat mein colonial shoshan aur deindustrialization ne ise thopa.',
      'Shramik absorption: Western factories ne gaon ke majdooron ko absorb kiya; Bharat mein hathkargha tootne par karigar wapas kheti par bojh banne gaye.',
      'Bhougolik vikas: West mein transport ne desh ke kone-kone ko aapas mein joda; Bharat mein colonial railway ne kewal port sheharon (Bombay, Calcutta) ko extractivism ke liye banaya.',
      'Azaadi ke baad ka state role: Nehruvian model ne PSUs (Mahalanobis plan) ke zariye heavy machine banayi, jise A.R. Desai ne State Capitalism bataya.',
      '1991 ke baad ka services jump: Bharat ne labour-intensive manufacturing chhodkar seedhe IT/services mein chhalang lagayi, jisse 90% shramik asurakshit informal sector mein reh gaye.',
    ],
    conclusion:
      'Aadhunik Bharat ka udyogik dhancha do-muha hai: ek taraf high-tech IT aur corporate conglomerates hain, aur doosri taraf vast labour precarity aur jaati-aadhrit business control.',
  },
]
