import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic6HiMindMap: MindMapData = {
  title: 'Topic 6 · Niraksharta Aur Shiksha Mein Asamanta',
  center: 'Shiksha, Stratification & Asamanta',
  subtitle: 'Bourdieu Ka Cultural Capital • Krishna Kumar Ka Pathyakram • ASER Aur Functional Illiteracy • Pandemic Digital Khayi',
  branches: [
    {
      title: '1. Shiksha Ke Samajshastriya Sidhhant',
      color: 'lavender',
      thinkers: ['Pierre Bourdieu', 'Krishna Kumar', 'Émile Durkheim', 'Paulo Freire'],
      points: [
        'Functionalist bhram: School ko aisi jagah batana jahan sirf merit aur kshamata se aage badhte hain',
        'Cultural Capital (Bourdieu): Ameer gharon ki bhasha aur manners ko school "buddhimani" maan leta hai',
        'Banking education (Freire): Bacchon ke dimaag mein kitabi baatein thoonkna jisse sawal puchna band ho jaye',
        'Krishna Kumar ka critique: Kitabi padhai jo gaon aur kisan ke asli gyan ko bekar thehra deti hai',
      ],
    },
    {
      title: '2. Functional Illiteracy Ka Asli Sach',
      color: 'yellow',
      thinkers: ['Jean Drèze', 'Amartya Sen', 'A.K. Shiva Kumar', 'Rukmini Banerji'],
      points: [
        'Enrollment ka record: SSA aur RTE Act 2009 se primary school mein 95%+ bacche dakhil huye',
        'ASER (Pratham) ka aakda: Gaon ke Class 5 ke 50% bacche Class 2 ki kitaab tak nahi padh paate',
        'Drèze-Sen ka vishleshan: Ek hi kamre mein sabhi classes, teachers ki kami, aur zero accountability',
        'Ratta maar padhai: Bina samjhe exam pass karna jisse buniyaadi akshar gyan (FLN) nahi milta',
      ],
    },
    {
      title: '3. Jaati, Gender Aur Adivasi Asamanta',
      color: 'mint',
      thinkers: ['Sukhadeo Thorat', 'B.R. Ambedkar', 'Geetha Nambissan'],
      points: [
        'Mid-day meal mein bhedbhav: Sukhadeo Thorat kehte hain ki Dalit bacchon ko alag baithaya jata hai',
        'Linguistic alienation: Adivasi bacchon ko unki maatri-bhasha (Santhali, Gondi) mein na padhana',
        'Ladkiyon ka school chhootna: Shauchalaya na hona aur puberty ke baad ghar ka kaam sambhalna',
        'Dohra school system: Ameeron ke liye English private school aur garibon ke liye toote sarkari school',
      ],
    },
    {
      title: '4. Angrezi Ka Dabdaba Aur Digital Khayi',
      color: 'pink',
      thinkers: ['Krishna Kumar', 'Andre Béteille', 'Ashwini Deshpande'],
      points: [
        'Angrezi bhasha ka monopoly: Corporate aur MNC naukriyon ke liye English fluency ek gatekeeper hai',
        'Pandemic digital divide: Online padhai mein garib bacchon ke paas smartphone na hone se padhai band',
        'NEP 2020 ka rasta: Shuruati saalon mein maatri-bhasha mein padhai aur vocational skills par zor',
        'Foundational capability: Shiksha ko degree-baantne ki jagah loktantrik aatmasamman ka sadhan banana',
      ],
    },
  ],
}

export const topic6HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps — Niraksharta aur Shiksha ki Asamanta ka visual saransh.',
  },
  {
    kind: 'md',
    body: `## Shiksha Aur Samajik Asamanta: Samajshastriya Nazariya

Aasaan shabdon mein samjho: Samajshastra mein school koi aisi pavitra jagah nahi hai jahan sabhi bacchon ke sath barabar nyay hota hai. Functionalist vidwan jaise [[thinker:Émile Durkheim]] aur Talcott Parsons mante the ki school sabhi ko barabar mauka deta hai aur jo mehnat karta hai wo aage nikal jata hai. Lekin critical samajshastri yeh batate hain ki school asal mein pehle se ameer aur upper-caste parivaron ke fayde ke liye design kiye gaye hain.

School garibi aur jaati ke bhedbhav ko mitata nahi, balki use "Merit" (yogyata) ka naam dekar sahi thehrata hai. Jo baccha pehle se angrezi bolne wale ameer ghar se aata hai, use school "intelligent" maanta hai, aur gaon ke Dalit-Adivasi bacche ko "kamzor" ghoshit kar deta hai.

### Pierre Bourdieu: Cultural Capital Aur Asamanta Ka Punar-utpadan

French samajshastri [[thinker:Pierre Bourdieu]] ne bataya ki school meritocratic nahi hain. School ka syllabus aur exam us bhasha, manners aur sanskriti par bane hain jise Bourdieu ne ==Cultural Capital== kaha. 

Ameer aur savarna parivar ke bachhe yeh cultural capital apne ghar ke mahol se bachpan mein hi seekh lete hain. Jabki mazdoor, kisaan aur Dalit gharon ke bacchon ke paas yeh specific bhasha nahi hoti. Jab school dono ko ek hi paper se test karta hai, to ameer baccha aage nikal jata hai, aur samaj yeh samajhta hai ki yeh uska niji talent hai. Is tarah school vargiya asamanta ko aage badhata hai.

| Sidhhant | School Ko Kaisa Dekhta Hai | Mukhya Chintak | Samajik Parinaam |
| :--- | :--- | :--- | :--- |
| **Functionalism** | Barabar mauka aur yogyata ka aakalan | Durkheim, Parsons | Shram vibhajan ko yogyata ke aadhar par sahi batana |
| **Cultural Reproduction** | Cultural capital ko aage badhane wala filter | Bourdieu, Passeron | Parivar ki daulat ko "talent/merit" mein badalna |
| **Ideological State Apparatus** | Sarkar aur maalik ke aage jhukne ki training | Louis Althusser | Shoshan ke liye obedient majdoor tayyar karna |
| **Critical Pedagogy** | Sawal puchna aur chetna jagana (Liberation) | Paulo Freire, Krishna Kumar | Loktantrik badlav aur aazadi ka sadhan |

### Krishna Kumar: Bharatiya Shiksha Ka Rajnitik Agenda

Bharat ke mashhoor shiksha-samajshastri [[thinker:Krishna Kumar]] ne apni mashhoor kitabon *What is Worth Teaching?* aur *Political Agenda of Education* mein dikhaya ki colonial daur ki gulami aaj bhi hamare schoolon mein zinda hai. Unhone bataya ki hamari padhai "textbook-centric" hai, jahan teacher aur kitaab ko bhagwan maana jata hai aur bacche ko sirf ratta marne wala gulam banaya jata hai.

Is padhai mein gaon ke kheti ke anubhav, jungle ki samajh aur kisan ke gyan ko koi jagah nahi milti. Iske kaaran desh mein ek ==Two-Tier School System== ban gaya hai: ameer shehari varg ke liye mehnge English private schools, aur garib gaon ke Dalit-shramik bacchon ke liye toote-phootey sarkari schools.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Angrezi Bhasha Ka Monopoly (Linguistic Capital)',
    body: 'UPSC ke answer mein Angrezi ko sirf ek bhasha mat likho. Pierre Bourdieu ke hawaale se ise "Linguistic Capital" ke roop mein analyze karo: kaise Angrezi corporate aur global service jobs par kabza rakhne aur subaltern bacchon ko bahar rakhne ka filter ban gayi hai.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'School Mein Dakhila', text: 'RTE Act 2009 ke baad 95%+ bacchon ka primary admission' },
      { label: 'Suvidhaon Ka Abhav', text: 'Tooti chhat, ek kamre mein kayi classes aur teacher gayab' },
      { label: 'Ratta Maar System', text: 'Bina samjhe aage badhane ka niyam (No-detention)' },
      { label: 'Functional Illiteracy', text: 'Class 5 ka baccha Class 2 ki kitaab nahi padh pata (ASER)' },
    ],
  },
  {
    kind: 'md',
    body: `## Sarvajanik Dakhila Banam Functional Illiteracy Ka Paradox

Sarva Shiksha Abhiyan (SSA) aur ==Right to Education (RTE) Act, 2009== ke banne ke baad Bharat ne primary school dakhile mein 95% se zyada Gross Enrollment Ratio (GER) hasil kar liya. Desh ke lagbhag har gaon mein school khol diya gaya. Lekin samajshastri yeh sawal uthate hain ki dakhila milne se kya sach mein padhai hui?

Is sankat ko ==Functional Illiteracy== ya "Learning Poverty" kaha jata hai: bacche ke paas school jane ka certificate to hai, par wo aam zindagi mein akhbar padhne ya chhota-mota hisab karne ke qabil bhi nahi hai.

### ASER Report Ka Khulasa: Shiksha Ka Sankat

NGO Pratham ki har saal aane wali Annual Status of Education Report (ASER) ne hamare schoolon ki sachhai samne laayi hai:
- Gaon ke sarkari schoolon mein Class 5 mein padhne wale lagbhag 50% bacche Class 2 ki aasaan kitaab tak nahi padh paate.
- Class 5 ke lagbhag 75% bacche 3-digit ko 1-digit se divide (bhaag) karne ka basic hisab nahi kar paate.
- Pandemic ke baad bacchon ki foundational reading aur ganit ki kshamata aur zyada gir gayi.

Samajshastri [[thinker:Jean Drèze]] aur [[thinker:Amartya Sen]] ne apni kitaab *An Uncertain Glory* mein likha ki yeh asafalta sarkari laparwahi, teachers ki absenteeism, multi-grade classrooms (jahan ek hi teacher sabhi classes ko ek kamre mein padhata hai), aur bina samajhe paas karne ki aadat ka nateeja hai.

[[eg:UP aur Bihar ke gramin sarkari schoolon mein baccha Class 8 pass kar leta hai lekin wo Hindi ka akhbar ya bank ka challan form bina kisi ki madad ke nahi bhar pata.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Ameer Shehari English Private School',
    rightTitle: 'Gaon Ka Sarkari Vernacular School',
    rows: [
      {
        aspect: 'Cultural Capital',
        left: 'Flawless English, digital confidence aur leadership skills',
        right: 'Tooti-phooti local bhasha mein sirf board se utaar kar ratta marna',
      },
      {
        aspect: 'Infrastructure',
        left: 'AC smart class, robotics lab, swimming pool aur sports ground',
        right: 'Toota farsh, bijli-paani ki kami aur band pade shauchalaya',
      },
      {
        aspect: 'Bacchon Ka Samajik Varg',
        left: 'Upper caste, corporate officers aur bade vyapariyon ke bacche',
        right: 'Dalit, Adivasi, khetihar majdoor aur eent-bhatta shramik ke bacche',
      },
      {
        aspect: 'Future Career',
        left: 'IIT, IIM, National Law Universities ya videsh mein higher studies',
        right: 'High dropout rate; asangathit dihadi majdoori ya delivery boy',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Samajik Bhedbhav: Jaati, Gender, Adivasi Aur Digital Khayi

Bharat mein padhai ki kami sabhi ke sath ek jaisi nahi hai; yeh jaati aur ling ke purane dhabbe se juri hai:

### Jaati Aur Adivasi Bacchon Ka Shoshan

Samajshastri [[thinker:Sukhadeo Thorat]] ke field adhyayan batate hain ki sarkari schoolon ke andar bhi Dalit aur Adivasi bacchon ke sath chhua-chhoot hoti hai. Mid-day meal ke dauran Dalit bacchon ko alag panti mein baithaya jata hai ya unse jhadoo lagwaya jata hai.

Shiksha anthropologist [[thinker:Geetha Nambissan]] ne Adivasi bacchon ke ==Linguistic Alienation== (bhashayi alagav) ko ujagar kiya hai. Jab Santhal ya Gond baccha school aata hai, to wahan kitaabein aur master ki bhasha bilkul anjan (Odia, Hindi ya Telugu) hoti hai. Apni maatri-bhasha mein padhai na hone se Adivasi baccha ghabra kar school chhod deta hai.

### Ladkiyon Ka Dropout Aur Sanitation Ka Sankat

Primary school mein to ladkiyan barabar aati hain, lekin secondary school mein aate-aate ladkiyon ka dropout bohot zyada ho jata hai. Iska sabse bada kaaran hai: gaon ke schoolon mein ladkiyon ke liye saaf paani aur alag shauchalaya (WASH facilities) na hona. Iske alawa garib parivaron mein ladkiyon se chhote bhai-behen ki dekhbhal aur ghar ka khana banwaya jata hai.

### Krishna Kumar: Pandemic Aur Digital Khayi Ka Atyachar

COVID-19 pandemic ne Bharat ki shiksha ke bhedbhav ko nanga kar diya. Jab do saal tak school band rahe aur padhai smartphone par shift hui, to padhai private property ban gayi.

Samajshastri [[thinker:Krishna Kumar]] ne dikhaya ki isne ek "educational apartheid" (shiksha ki nafrati khayi) paida kar di. Azim Premji University ke surveys ne dikhaya ki gaon ke sarkari school ke 60% se zyada bacchon ke paas koi smartphone ya internet connection nahi tha. Mazdooron ke bacche do saal mein sabkuch bhool gaye aur bal-majdoori ya bal-vivah mein phans gaye, jabki ameer bacchon ki online classes uninterrupted chalti rahin.

[[link:Paper 1 Technology & Social Change: Pandemic digital divide dikhata hai ki asaman samaj mein technology barabari laane ke bajaye class khayi ko aur gehra karti hai.]]`,
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Foundational Literacy & Numeracy (FLN)',
    body: 'NEP 2020 aur NIPUN Bharat mission ka mukhya dhyan Class 3 tak Foundational Literacy and Numeracy (FLN) hasil karne par hai. Agar Class 3 tak padhna-ginna nahi aaya, to aage ki padhai bekar ho jaati hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Functional Illiteracy',
    meaning: 'School jane aur certificate milne ke bavajood aam zindagi mein akhbar padhne ya hisab karne ki kshamata ka na hona.',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Capital',
    meaning: 'Pierre Bourdieu ka term: ameer gharon ki bhasha aur manners jise school talent maan kar unhe aage badhata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Two-Tier School System',
    meaning: 'Krishna Kumar ka vishleshan: mehnge English private school banam garibon ke liye toote sarkari school.',
  },
  {
    kind: 'keyTerm',
    term: 'Learning Poverty',
    meaning: 'World Bank ka paimana jisme 10 saal ki umar tak simple text na padh paane wale bacchon ka anupaat naapa jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Linguistic Alienation',
    meaning: 'Geetha Nambissan ka concept: Adivasi bacchon ko unki maatri-bhasha ki jagah anjan state language mein padhane se paida hone wala tanav.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Literacy Rate Ko Shiksha Ki Jeet Mat Maano',
    body: 'Census 2011 ka 74% literacy rate sirf apna naam likh lene ko saaksharta maanta hai. Answer mein ASER data ka hawaala dekar functional illiteracy aur learning crisis ka sach likho.',
  },
  {
    kind: 'answerBox',
    intro:
      'Niraksharta, shiksha mein asamanta aur learning crisis par ek shreshth samajshastriya model answer ke mukhya bindu:',
    points: [
      'Émile Durkheim ke meritocratic model ke virudh Pierre Bourdieu ke Cultural Capital se samjhao ki school ameer sanskriti ko "talent" bata kar inequality ko badhate hain.',
      'Krishna Kumar ke textbook-centric pedagogy aur Two-Tier schooling framework se private-public khayi ko decode karo.',
      'ASER ke empirical data se dikhao ki RTE 2009 ke 95%+ enrollment ke bavajood Class 5 ke 50% bacche Class 2 ki kitaab nahi padh paate (functional illiteracy).',
      'Sukhadeo Thorat aur Geetha Nambissan ke adhyayanon se mid-day meal mein jaati bhedbhav aur Adivasi bacchon ke linguistic alienation ko ujagar karo.',
      'Krishna Kumar ke hawaale se pandemic digital divide ka vishleshan karo jisne garib bacchon ko padhai se bahar kar diya.',
    ],
    conclusion:
      'Shiksha ko loktantrik banane ke liye Common School System lagu karna, maatri-bhasha mein shuruati padhai karana aur digital sadhano ko public good banana anivarya hai.',
  },
]
