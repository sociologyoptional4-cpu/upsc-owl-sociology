import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.5 · Vigyan, Takneek Aur Samajik Parivartan (Science, Tech & Social Change)',
  center: 'Science, Tech & Change',
  subtitle: 'Determinism vs SCOT • Cultural Lag • Andhvishwas Banam Vigyan • Mahila & Pandemic',
  branches: [
    {
      title: 'Vaidhhantik Behas',
      color: 'lavender',
      thinkers: ['Thorstein Veblen', 'William F. Ogburn', 'Robert Heilbroner', 'Bijker & Pinch'],
      points: [
        'Technological Determinism: takneek khud azaad hokar samaj aur itihaas ko chalaati hai',
        'Social Construction of Technology (SCOT): takneek nishpaksh nahi, samajik varg aur gender use banate hain',
        'Merton CUDOS Norms: Communalism, Universalism, Disinterestedness aur Organised Scepticism',
        'Jacques Ellul: aadhunik technique manav ko apne anukool dhalne wala swatantra daanav hai',
      ],
    },
    {
      title: 'Ogburn Ka Cultural Lag',
      color: 'yellow',
      thinkers: ['William F. Ogburn', 'Alvin Toffler', 'Daniel Bell'],
      points: [
        'Material Culture (gaadi, factory, AI) rocket ki tezi se aage nikalta hai',
        'Non-Material Culture (kanoon, sanskriti, dharamik soch) bailgaadi ki gati se chalta hai',
        'Beech ke fasle (gap) se samaj mein tanaav, naitik sankat aur kanooni khali-pan banta hai',
        'Aaj ki prasangikta: AI deepfakes, surrogacy, data privacy aur gene-editing kanoon',
      ],
    },
    {
      title: 'Taboos, Rationality & Pandemic',
      color: 'mint',
      thinkers: ['Ulrich Beck', 'Narendra Dabholkar', 'Jawaharlal Nehru', 'Anthony Giddens'],
      points: [
        'Scientific temper (Art 51A(h)): robot drainage se chhuachhoot todna, genetics se jaati shuddhata ka khodan',
        'Andhvishwas ka digital roop: cyber-astrology, online puja booking aur WhatsApp mob lynching',
        'COVID-19 Pandemic: prakriti ke aage manav lachari vs tezi se bani mRNA vaccines aur CoWIN app',
        'Ulrich Beck Risk Society: manufactured risks — takneeki tarakki hi naye global khatre paida karti hai',
      ],
    },
    {
      title: 'Gender, Work & Loktantra',
      color: 'pink',
      thinkers: ['Ruth Schwartz Cowan', 'Judy Wajcman', 'Shoshana Zuboff', 'Anil Gupta'],
      points: [
        'Ruth Cowan "More Work for Mother": mixer aur washing machine aane par bhi gharelu kaam ke ghante nahi ghate',
        'Garbhavastha takneek: contraceptive goli ne azaadi di, par ultrasound se kanya bhrun-hatya badhi (PC-PNDT)',
        'Gig economy aur WFH: mahilaon ko aamdani mili par sath mein "second shift" ka dohra bojh mila',
        'Takneek Ka Loktantrikaran: Honey Bee Network aur open-source vs Big Tech surveillance capitalism',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u10-02-agents-education-tech.webp',
    alt: 'P1 Unit 10 infographic: Education, Science, Media & Tech — Agents of Transformation in Modern Society',
    caption: 'Agents of Transformation in Modern Society (Education, Science, Media & Tech).',
    credit: 'UPSC OWL Studio · Paper 1 Unit 10 Visual 02',
  },
  {
    kind: 'md',
    body: `## Samajshastra Vigyan Aur Takneek Ko Kaise Dekhta Hai?

Aasaan shabdon mein samjho: vigyan aur takneek koi aisi cheezein nahi hain jo samaj se alag chal rahi hon. Samajshastra mein **vigyan (science)** ka matlab hai nishpaksh praman, prayog aur tark par aadhrit gyan; aur **takneek (technology)** ka matlab hai us gyan se banaye gaye auzaar, machinein, internet aur algorithms.

Samajshastra ke samne do mukhya sawal hain: kya machinein insaan ki kismat tay karti hain (Determinism), ya phir samaj ke ameer aur taqatwar log yeh tay karte hain ki kaun si takneek banegi aur kaun si nahi (Social Construction)?

## 1. Technological Determinism Banam Social Construction of Technology (SCOT)

- **Technological Determinism (Takneeki Niyativaad):** [[thinker:Thorstein Veblen]], [[thinker:William F. Ogburn]] aur Robert Heilbroner (*"Do machines make history?"*) jaise vicharak maante hain ki takneek ek azaad taqat hai. Jab koi nayi machine aati hai, toh samaj ko uske hisab se badalna hi padta hai. Karl Marx ne *The Poverty of Philosophy* mein likha tha: *"Haath ki chakki feudal zamindar deti hai, aur bhaap ka engine industrial poonjipati deta hai."*
- **Social Construction of Technology (SCOT):** Wiebe Bijker aur Trevor Pinch ne is soch ko kharij kiya. Unka kahna hai ki machine khud-b-khud nahi aati; bazaar ka munafa, fauji zarooratein aur shasak varg ki marzi tay karti hai ki kaun si technology aayegi. Takneek asal mein ==samajik sambandhon ka zinda roop== hai.
- **Robert K. Merton Ka Sociology of Science:** [[thinker:Robert K. Merton]] ne apni research *Science, Technology and Society in 17th-Century England* (1938) mein saabit kiya ki vigyan ka vikas tabhi hua jab Protestant (Puritan) dharmik moolyon ne prayog aur kadi mehnat ko pavitra maana. Merton ne vigyan ke chaar mool niyam bataye jise ==CUDOS norms== kehte hain:
  - *Communalism:* Vigyan ki khoj kisi akele ki jaayedaad nahi, poore samaj ki dharohar hai.
  - *Universalism:* Satya ko nishpaksh paimanon se parakha jata hai, na ki scientist ki jaati ya desh se.
  - *Disinterestedness:* Scientist sach ke liye kaam karta hai, niji lalach ke liye nahi.
  - *Organised Scepticism:* Har daave par sawal uthana aur thos praman maangna.

[[trap:Answer mein keval technological determinism mat likhna. Hamesha yeh dikhao ki takneek ko chalane wale bazaar ke hit, kanoon aur samajik sanskriti hote hain.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Material Culture Aur Non-Material Culture Ka Farak Samjho',
    body: 'Ogburn ke Cultural Lag theory mein Material culture ka matlab hai thos cheezein — machine, mobile, railway, internet. Non-material culture ka matlab hai kanoon, sanskriti, dharmik vishwas aur parivarik moolya. Material culture tezi se badal jata hai jabki soch aur kanoon dheere-dheere badalte hain.',
  },
  {
    kind: 'md',
    body: `## 2. William F. Ogburn Ka Cultural Lag Siddhant: Kya Yeh Aaj Sach Hai?

[[thinker:William F. Ogburn]] ne apni 1922 ki pustak *Social Change with Respect to Culture and Original Nature* mein ==Cultural Lag== ka siddhant diya:
1. **Material Culture Rocket Ki Speed Se Badalta Hai:** Factory aur nayi takneek bohot tezi se aage daudti hain.
2. **Non-Material Culture Bailgaadi Ki Gati Se Chalta Hai:** Kanoon, sanskritik aadat aur soch bohot dheemi gati se badalte hain.
3. **Maladjustment Ka Fasla (Gap):** Dono ke beech jo samay ka fasla banta hai, use Cultural Lag kehte hain, jisse samaj mein tanaav, naitik bhatkao aur kanooni sankat paida hote hain.

### Kya Cultural Lag 21vin Sadi Mein Sahi Baithta Hai?
Aaj Ogburn ka siddhant 100 saal pehle se bhi zyada sach lagta hai:
- **Artificial Intelligence (AI) Aur Deepfakes:** AI aur deepfakes har mobile mein pahunch gaye, lekin unhe rokne wale copyright kanoon aur criminal acts abhi tak adhoore hain.
- **Surrogacy Aur Test Tube Baby:** In Vitro Fertilisation (IVF) aur commercial surrogacy se bachhe paida karne ki takneek aa gayi, lekin bache ke legal rights aur naitik niyam banne mein dashakon lag gaye.
- **Personal Data Aur Privacy:** Social media ne karodon logon ka private data chori karna shuru kar diya, jabki data privacy kanoon (jaise Bharat ka DPDP Act 2023) banne mein saalon lag gaye.

## 3. Vigyan Aur Takneek: Andhvishwas Aur Taboos Ke Khilaaf Hathiyar

Vigyan ne purane andhvishwas aur jaativaadi chhuachhoot par gehra prahar kiya hai, lekin andhvishwas ne bhi takneek ka naya roop dharan kar liya hai.

- **Nehru Ka "Scientific Temper":** Pandit Jawaharlal Nehru ne vaigyanik dristikon (Scientific Temper) ko samajik sudhar ka mool aadhar banaya, jise sanvidhan ke **Article 51A(h)** mein har nagrik ka mool kartavya ghoshit kiya gaya.
- **Jaati-Ashuddhata Aur Taboos Par Hamla:**
  - *Sanitation Takneek:* Bandicoot jaise robots aur modern suction machines gutter safayi ke kaam ko mechanise karti hain, jisse Daliton se manual scavenging karwane ki purani jaativaadi shuddhata-ashuddhata ki pratha par chot padti hai.
  - *Medical Science:* Vigyan ne saabit kiya ki koodh ya mansik bimaari kisi purva-janam ke paap ya devi ke shraap se nahi, balki bacteria aur chemical imbalance se hoti hai, jisse andhvishwas toota.
  - *Genetics:* DNA research ne saabit kar diya ki kisi bhi jaati ya nasal ka khoon alag nahi hota; sabhi manav ek hi aadi-purvaaj ki santaan hain.
- **Andhvishwas Ka Digitalisation:** Dr. Narendra Dabholkar jaise rationalists ne dikhaya ki takneek aane se andhvishwas khatam nahi hota balki aadhunik roop le leta hai. Aaj internet par cyber-astrology apps, online Kundali match, aur online puja booking apps chal rahi hain. WhatsApp afwahon ke chalte aadiwasi mahilaon ko daayan bata kar maarna yeh dikhata hai ki takneek andhvishwas ko aur tezi se phaila sakti hai.

## 4. COVID-19 Pandemic: Prakriti, Vigyan Aur Manav Lachari

COVID-19 ne yeh dikha diya ki manav vigyan ne prakriti par poori jeet haasil nahi ki hai.

### Ulrich Beck Ka Risk Society
[[thinker:Ulrich Beck]] ne apni kitaab *Risk Society* (1992) mein bataya tha ki aadhunik samaj aisi vipattiya paida karta hai jise manav takneek khud create karti hai (**Manufactured Risks**):
- **Prakriti Ke Aage Bebasi:** Jungle kaatne aur industrial farming se janwaron ke virus insaanon mein aaye, jisne is ghamand ko tod diya ki science ne prakriti ko jeet liya hai.
- **Vigyan As Life-Saver:** Vigyan ne mahino ke andar virus ka DNA decode karke mRNA vaccines banayi. Bharat ke **CoWIN** platform ne 200 crore se zyada vaccine doses ka digital record sambhala.
- **Kala Sach — Vaccine Apartheid Aur Digital Divide:** Western pharmaceutical companiyon ne TRIPS patent nahi chhode, jisse gareeb deshon ko vaccine ke liye tadapna pada. Sath hi Aarogya Setu jaise apps ne digital surveillance aur privacy ke naye khatre khade kiye.

## 5. Takneek Aur Bharatiya Samaj Mein Mahilaon Ki Sthiti

Takneek ne mahilaon ki zindagi par do-tarfa asar daala hai:
- **Gharelu Machinein (Ruth Cowan Ka Paradox):** Ruth Cowan ne *More Work for Mother* mein dikhaya ki washing machine aur mixer aane se mahilaon ke kaam ke ghante nahi ghate, kyunki safayi ke standards badh gaye. Bharat mein automated roti-maker aur dishwasher aane ke bawjood purush-pradhan soch yeh keh kar machine reject karti hai ki "maa ke haath ka swad nahi hai."
- **Ultrasound Aur Kanya Bhrun-Hatya:** Contraceptive pills ne mahilaon ko family planning ki azaadi di, lekin ultrasound takneek ka ghalat istemaal karke laakhon bacchiyon ko pet mein hi maar diya gaya, jiske liye sarkar ko *PC-PNDT Act 1994* banana pada.
- **WFH Aur Gig Economy:** IT sector aur Work From Home ne mahilaon ko aamdani di, lekin sath hi unka dohra bojh badha diya — office ki file ke sath-sath bache aur rasoi ka kaam bhi unhi ke sir aa gaya.
[[link:Ise Paper 2 ke Unit 7 Green Revolution and Social Change aur Unit 15 Illiteracy and Educational Disparities se jodo.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'Technological Determinism',
    meaning: 'Yeh soch ki takneek ek azaad taqat hai jo insaani samaj, kanoon aur sanskriti ko apne anusaar badalne par majboor karti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'CUDOS Norms',
    meaning: 'Robert K. Merton ke anusaar vigyan ke chaar sansthatmak niyam: Communalism, Universalism, Disinterestedness aur Organised Scepticism.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Manufactured Uncertainty',
    meaning: 'Ulrich Beck ka vichar ki aadhunik sankat (climate change, pandemics) prakriti ke nahi balki manav takneek ki upaj hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Scientific Temper',
    meaning: 'Tarkik, prayogik aur sawal uthane wali soch jise Nehru ne badhava diya aur Sanvidhan ke Article 51A(h) mein shamil kiya gaya.',
  },
  {
    kind: 'compare',
    leftTitle: 'Technological Determinism (Veblen, Ogburn)',
    rightTitle: 'Social Construction of Technology (Bijker, Wajcman)',
    rows: [
      {
        aspect: 'Mool Dharana',
        left: 'Takneek ek azaad taqat hai jo manav samaj ko badalti hai',
        right: 'Takneek samajik hiton, varg shoshan aur gender se banti hai',
      },
      {
        aspect: 'Karye-Kaaran Sambandh',
        left: 'Machine ka vikas → Samajik sansthaon ka uske hisab se dhalna',
        right: 'Samajik taqat aur munafa → Machine ka design aur istemaal',
      },
      {
        aspect: 'Manav Kshamata',
        left: 'Lachar; insaan ko machine ke niyam maanne hi padte hain',
        right: 'Sachet; manav aur andolan takneek ke roop ko badal sakte hain',
      },
      {
        aspect: 'Sankat Ka Hal',
        left: 'Sanskriti ko tezi se machine ke barabar lana',
        right: 'Takneek ke malikana haq aur design ko loktantrik banana',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Strategy: Andhvishwas Aur Taboos Ke Prashnon Ka Santulit Answer',
    body: 'Keval takneek ki tareef mat karein. Robotic sanitation aur genetics ke positive prabhav batate hue yeh zaroor dikhayein ki cyber-astrology aur WhatsApp mob lynching se andhvishwas modern ban gaya hai; isliye takneek ke sath rational social reforms zaroori hain.',
  },
  {
    kind: 'answerBox',
    intro: 'Vigyan aur Takneek samajik andhvishwas aur taboos ko kaise mitati aur badhati hain:',
    points: [
      'Bimaariyon Ka Vaigyanik Ilaj: Medical science ne koodh aur mansik bimaari ko devi shraap ke bajaye rog saabit karke andhvishwas ko toda.',
      'Manual Scavenging Ka Ant: Bandicoot jaise robots sewer safayi karke sadiyon purani jaativaadi ashuddhata ke aadhar par prahar karte hain.',
      'Metros Aur Public Transport: Metro aur railway ne unchi-neechi jaatiyon ko ek sath baithne par majboor kiya, jisse physical chhuachhoot toota.',
      'Andhvishwas Ka Modernization: Internet ke zariye cyber-kundali, online astrology apps aur WhatsApp afwahon se andhvishwas naye roop mein bik raha hai.',
      'Pitrasattatmak Durupyog: Ultrasound takneek ka durupyog karke kanya bhrun-hatya karna yeh dikhata hai ki takneek purani patriarchal soch ke aage lachar ho sakti hai.',
    ],
    conclusion: 'Takneek badlaav ka auzaar hai, parantu andhvishwas ko jad se mitane ke liye sanvidhanik humanism aur samajik jagrukta anivarya hai.',
  },
]

export const topic5Hi: TopicLangContent = {
  summary:
    'Vigyan aur takneek aadhunik samajik badlaav ke mukhya engine hain jo samajik sansthaon ke sath nirantar samvaad mein rehte hain. Samajshastra mein yeh behas hai ki kya takneek khud samaj ko chalati hai (Technological Determinism: Veblen, Ogburn) ya samajik varg use banate hain (SCOT: Bijker, Wajcman). William F. Ogburn ka Cultural Lag siddhant aaj AI, data privacy aur surrogacy ke daur mein poori tarah sahi saabit hota hai jahan machine tezi se aage nikal jati hai aur kanoon peeche chhoot jata hai. Nehru ke Scientific Temper (Art 51A(h)) aur robotic sanitation ne chhuachhoot par chot ki hai, lekin andhvishwas cyber-astrology bankar naye roop mein bik raha hai. COVID-19 pandemic ne Ulrich Beck ke Risk Society ke tahat dikhaya ki vigyan jahan jeevan-rakshak hai, wahin manufactured risks aur vaccine apartheid se nipatne ke liye takneek ka loktantrikaran anivarya hai.',
  mindMap,
  sections,
}
