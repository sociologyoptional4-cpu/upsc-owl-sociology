import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3HiMindMap: MindMapData = {
  title: 'Topic 3 · Shiksha aur Samajik Badlaav',
  center: 'Education & Social Change',
  subtitle: 'Mobility vs Reproduction • Caste of Merit • RTE 2009 • NEP 2020',
  branches: [
    {
      title: 'Mobility vs Reproduction ki Behas',
      color: 'lavender',
      thinkers: ['B.R. Ambedkar', 'Émile Durkheim', 'Pierre Bourdieu', 'Louis Althusser'],
      points: [
        'Ambedkarite vishwas: "Shikshit bano, Sangharsh karo, Sangathit raho"',
        'Durkheim: moral socialization aur specialized division of labour ka niyam',
        'Bourdieu: cultural capital, habitus aur symbolic violence se asamaanata badhna',
        'Althusser: school ek Ideological State Apparatus (ISA) jo mazdoor varg ko dhalta hai',
      ],
    },
    {
      title: 'Stratified Schooling & Caste of Merit',
      color: 'yellow',
      thinkers: ['Ajantha Subramanian', 'Krishna Kumar', 'Satish Deshpande', 'Paulo Freire'],
      points: [
        'Schooling ka batwara: elite IB schools vs budget private schools vs sarakari school',
        'Krishna Kumar: textbook culture, ratta maar padhai aur subaltern gyan ka tiraskar',
        'Ajantha Subramanian: upper-caste privileges ka "casteless merit" mein badal jana',
        'Coaching factory (Kota, UPSC): lakho ki fees jo gareeb bachhon ko pehle hi bahaar karti hai',
      ],
    },
    {
      title: 'RTE Act (2009) aur Learning Gaps',
      color: 'mint',
      thinkers: ['Jean Drèze', 'Amartya Sen', 'Rukmini Banerji (ASER)', 'Shantha Sinha'],
      points: [
        'Article 21A: 6 se 14 saal ke bachhon ke liye muft aur anivarya shiksha ka maulik haqq',
        'Section 12(1)(c): private schools mein 25% EWS reservation aur samajik bhedbhav',
        '98% enrolment par ASER report ki sachayi: 5th class ka bachha 2nd ki kitab nahi padh pata',
        'No-detention policy ki behas: fail na karne ki neeti aur sikhne ki kamzori',
      ],
    },
    {
      title: 'NEP 2020 aur Digital Asamaanata',
      color: 'pink',
      thinkers: ['K. Kasturirangan', 'Yogendra Singh', 'Anita Rampal', 'Janaki Rajan'],
      points: [
        '5+3+3+4 naya structure: foundational literacy, numeracy aur vocational hunar',
        'Matribhasha ka vivaad: regional medium vs English corporate market ka dabdaba',
        'Digital divide: PM eVidya aur smart class jahan gaon mein light aur mobile hi nahi',
        'Higher education ka privatization aur commercialization se equity par asar',
      ],
    },
  ],
}

export const topic3HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u09-02-education-equality-india.webp',
    alt: 'P2 Unit 9 infographic: Education & Social Change in India — Gurukul to NEP 2020: Mobility vs Cultural Reproduction',
    caption:
      'Gurukul aur Macaulay ke babu-system se lekar RTE aur NEP 2020 tak, Bharat mein shiksha ek taraf samajik barabari ki seedhi banti hai toh doosri taraf jaati aur varg ki asamaanata ko dobara paida karne wali machine.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 19 Visual 02',
  },
  {
    kind: 'md',
    body: `## Aasaan Shabdon Mein Samjho: Kya Shiksha Har Bimari Ka Ilaaj Hai?

Aamtaur par hum sab mante hain ki shiksha gareebi aur jaativadi bhedbhav ko mitane ka sabse bada hathiyaar hai. [[thinker:B.R. Ambedkar]] ne khud apni zindagi se yeh sabit karke dikhaya aur subaltern samaj ko aitihasik naara diya: **"Shikshit bano, Sangharsh karo, Sangathit raho"**. Kothari Commission (1964–66) ne bhi kaha tha ki Bharat ka bhavishya uski classrooms mein tay ho raha hai, aur unhone sabhi ke liye ek saman **Common School System** aur GDP ka 6% shiksha par kharch karne ki sifarish ki thi.

Lekin samajshastri sawaal uthate hain: kya sach mein school har bachhe ko barabar mauka deta hai? Samajshastriya sachayi yeh hai ki shiksha jahan ek taraf aage badhne ka raasta kholti hai, wahi doosri taraf pehle se amir aur unchi jaati ke logon ke vishashadhikaron ko naye roop mein bachane wali ==Cultural Reproduction== ki factory bhi ban jati hai.

### Samajshastriya Nazariye: Functionalism vs Conflict Sociology

1. **Functionalist Nazariya (Durkheim & Parsons)**: [[thinker:Émile Durkheim]] ne kaha ki school bachhon ke andar samajik mulyon (collective conscience) ko daalta hai aur modern society ke specialized kaam sikhata hai. Parsons ke anusar classroom ek aisi jagah hai jahan jaati ya khandaan nahi dekha jata, balki mehnat aur merit ke hisab se status milta hai.
2. **Marxist Nazariya (Louis Althusser)**: [[thinker:Louis Althusser]] ne school ko capitalist rajya ka sabse bada **Ideological State Apparatus (ISA)** bataya, jo gareeb bachhon ko chupchap aagya manna aur amir bachhon ko hukoomat karna sikhata hai.
3. **Pierre Bourdieu ka Cultural Reproduction**: French samajshastri [[thinker:Pierre Bourdieu]] ne dikhaya ki school kabhi neutral nahi hote. Wo unhi bachhon ko "hushiyar" ya "meritorious" maante hain jinke paas pehle se amir parivar ka ==Cultural Capital== (achhi English bolna, formal tehzeeb, manners) hota hai. School is parivar se mili daulat ko "natural talent" maan leta hai, aur gaon ya jhuggi ke bachhe ko pehle hi pichhada ghoshit kar deta hai.

| Pehlu | Modernist / Functionalist Soch | Critical / Reproduction Soch |
| :--- | :--- | :--- |
| **Mukhya Kaam** | Barabari lane wali seedhi aur upward mobility ka engine | Jaati aur class privileges ko bachane aur filter karne wali machine |
| **"Merit" ka Sach** | Mehnat, lagan aur vyaktigat buddhimata | Khandani cultural aur economic daulat jise "talent" ka naam diya gaya |
| **Varg par Asar** | Gareebi mitana aur middle class ko bada karna | Peedi-dar-peedi amiri aur garibi ko barkarar rakhna |
| **Mukhya Thinkers** | Émile Durkheim, Talcott Parsons, B.R. Ambedkar | Pierre Bourdieu, Louis Althusser, Paulo Freire |

[[link:Paper 1 ke Unit 4 (Theories of Stratification) aur Unit 10 (Education and Social Change) se direct link karo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Barabari Lane Wali Shiksha (Equaliser)',
    rightTitle: 'Asamaanata Badhane Wali Shiksha (Reproduction)',
    rows: [
      {
        aspect: 'Samajik Mobility',
        left: 'Pehli-peedi ke Dalit, Adivasi aur gaon ke bachhon ko sarkari afsar aur doctor banati hai.',
        right: 'School ka batwara gareeb ko kam-darje ki degree aur amir ko global tech career deta hai.',
      },
      {
        aspect: 'Classroom ka Mahol',
        left: 'Scientific temper, critical thinking aur loktantrik chetna paida karta hai.',
        right: 'Krishna Kumar ka "textbook culture": sirf ratta marna aur aagya manna sikhata hai.',
      },
      {
        aspect: 'Bhasha ka Dabdaba',
        left: 'Matribhasha mein sikhne se cognitive dimag ka vikas tezi se hota hai.',
        right: 'English ka dabdaba: English bolne wale corporate amir bante hain, baki peeche rehte hain.',
      },
      {
        aspect: 'Higher Education',
        left: 'Reservation ke zariye premier colleges mein unchi jatiyon ka monopoly toota hai.',
        right: 'Kota aur Delhi ke lakho rupaye ke private coaching factories ne garibon ko bahar kar diya.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Stratified Schooling, Coaching Factories aur "The Caste of Merit"

Bharat mein sabhi bachhon ke liye ek jaisa school nahi hai; yahan shiksha ka ek gehra jaativadi aur class-divided pyramid kaam karta hai:

1. **Schooling ka Teen-Tier Batwara**:
   - *Tier 1: Elite Private Schools* (IB, Cambridge, top CBSE): Lakho ki fees, fluent English, international exposure, jo bachhon ko videsh aur IIT/IIM ke liye tayar karte hain.
   - *Tier 2: Budget Private Schools*: Chote sheharon aur mohallon mein khule private school, jahan na achhe teachers hain na labs, par log sarkari school ke darr se wahan paise bhejte hain.
   - *Tier 3: Vernacular Sarakari School*: Jahan fund ki kami hai, ek hi kamre mein sabhi classes chalti hain, aur jahan 90% bachhe Dalit, Adivasi ya atyant pichhade varg ke hote hain jo Mid-Day Meal ke sahare aate hain.
2. **Krishna Kumar aur "Textbook Culture"**: Apni kitaab *What is Worth Teaching* mein [[thinker:Krishna Kumar]] ne dikhaya ki hamare school gaon ke hunar aur kisan-dastkar ke gyan ko bekar mante hain. Teacher ek chota babu ban kar sirf textbook ratwata hai aur bachhon ki azaad soch mar jati hai.
3. **Ajantha Subramanian: The Caste of Merit**: Anthropologist [[thinker:Ajantha Subramanian]] ne apni mashhoor kitaab *The Caste of Merit: Engineering Education in India* (IIT Madras ke adhyayan) mein dikhaya ki kaise unchi jaati (khas kar Brahmin) ke logon ne sadiyon ke jaativadi social capital ko modern "casteless merit" mein badal liya. Unhone English aur engineering degrees ke dam par yeh dikhaya ki unki safalta unki "shuddh mehnat" hai, jabki reservation ko "anti-merit" aur bhrashtachar bata kar badnaam kiya.
4. **Coaching Market ka Bouncer**: [[eg:Kota, Hyderabad aur Karol Bagh ke coaching institutes saal ke 2 se 4 lakh rupaye fees lete hain JEE, NEET aur UPSC ke liye. Yeh private coaching factory ek ameer bouncer ki tarah kaam karti hai jo gareeb Dalit ya kisan ke bachhe ko entrance exam se pehle hi filter karke bahar phek deti hai.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Critical Edge: Ajantha Subramanian ka "The Caste of Merit"',
    body: 'Jab bhi higher education ya merit par sawaal aaye, Ajantha Subramanian ki study zaroor cite karo. Samjhao ki kaise unchi jaatiyon ne apne sadiyon ke sanskritik vishashadhikaron ko "casteless merit" ka chola pehna diya, aur backward classes ke reservation ko merit ke khilaf prachar kiya.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Tier 1: School ka Batwara',
        text: 'Elite English medium ICSE/CBSE schools banam zameeni suvidha-heen sarakari primary school.',
      },
      {
        label: 'Tier 2: Coaching Filter',
        text: 'Kota aur entrance coaching ki lakho ki fees, jo bina paise wale bachhon ko pehle hi bahar kar deti hai.',
      },
      {
        label: 'Tier 3: Elite Sansthan',
        text: 'IIT, IIM aur NLU mein upper-class cultural capital ka dabdaba, jise "casteless merit" kaha jata hai.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Neeti ke Kadam: RTE Act 2009 aur NEP 2020

Pichhle 15 saalon mein Bharat sarkar ne shiksha ke dhaanche ko badalne ke liye do bade kanoon aur neetiyan lagoo kiye hain:

### 1. Right to Education (RTE) Act, 2009
Article 21A ke tahat 6 se 14 saal ke bachhon ke liye muft aur anivarya shiksha ko maulik adhikaar banaya gaya.
- **Section 12(1)(c)**: Private unaided schools ke liye zaroori kiya gaya ki wo apni **entry-level ki 25% seats** gareeb (EWS) aur pichhade vargon ke bachhon ke liye reserve karein, jinki fees sarkar bharegi.
- **Zameeni Asar aur ASER ki Sachayi**: Desh mein enrolment to 98% pahunch gaya, par Pratham ki *ASER reports* ne sikhne ka gehra sankat dikhaya — gramin sarakari schools mein 5th class ke lagbhag 50% bachhe 2nd class ki Hindi kahani nahi padh paate aur basic bhag nahi kar paate. Sath hi private schools mein EWS bachhon ko teachers aur amir bachhon ke bhedbhav ka samna karna padta hai.

### 2. National Education Policy (NEP), 2020
NEP 2020 ne purane 10+2 system ko badal kar naya **5+3+3+4 structure** (Foundational, Preparatory, Middle, Secondary) banaya.
- **Mukhya Badlaav**: Bachpan ki dekhbhal (ECCE), Foundational Literacy aur Numeracy mission (NIPUN Bharat), vocational hunar, aur multidisciplinary higher education.
- **Samajshastriya Chintayein**:
  - *Matribhasha ka Vivaad*: NEP 5th class tak regional bhasha ya matribhasha mein padhane ki baat karti hai. Par jab tak bade private schools par English medium band nahi hota, tab tak amir bachhe English seekh kar corporate jobs le jayenge aur gaon ke bachhe bhasha ke chakkar mein peeche reh jayenge.
  - *Digital Divide*: NEP smart classes aur online degrees ko badhava deti hai, par COVID-19 ke daur mein dekha gaya ki gaon mein na internet tha na smartphone, jisse lakho Dalit aur garib ladkiyon ki padhai hamesha ke liye chhoot gayi.
  - *Privatization aur Reservation par Khamoshi*: NEP private aur videshi universities ko aane ka rasta kholti hai par wahan fees cap aur SC/ST reservation par saaf bolne se bachti hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Capital (Pierre Bourdieu)',
    meaning:
      'Ghar aur parivaar se mila bhasha gyan, style, aatmavishwas aur manners jo school mein bina mehnat ke unchi jaati aur amir bachhon ko "intelligent" sabit kar deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'The Caste of Merit (Ajantha Subramanian)',
    meaning:
      'Ajantha Subramanian ka concept jisme unchi jatiyon ne apne sadiyon ke jaativadi network ko modern technical degrees mein badal kar use "casteless merit" ka naam diya.',
  },
  {
    kind: 'keyTerm',
    term: 'Section 12(1)(c) RTE Act 2009',
    meaning:
      'RTE Act ka kanooni niyam jiske tahat sabhi private unaided schools ko 25% seats gareeb (EWS) bachhon ke liye reserve rakhni padti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Stratified Schooling',
    meaning:
      'Shiksha vyavastha ka fees, bhasha aur infrastructure ke aadhar par alag-alag tukdon mein batna jo samaj ke jaativadi aur class bhedbhav ko jyun ka tyun banaye rakhta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Ke Liye Date Check',
    body: 'Right to Education (RTE) Act 2009 mein pass hua tha aur 1 April 2010 se lagoo hua tha (kuch notes mein galti se ise 2019 likh diya jata hai). RTE 2009 aur NEP 2020 ke saal ko saaf-saaf likhna.',
  },
  {
    kind: 'answerBox',
    intro:
      'Model Answer Framework: Kya shiksha Bharat ki sabhi bimariyon ka akele ilaaj hai? NEP 2020 ke sandarbh mein samajshastriya mulyankan:',
    points: [
      'Mukti ka Hathiyaar: Ambedkar aur Jyotirao Phule ke mutabiq shiksha andhavishwas todne, aatm-samman jagane aur shoshit samaj ko rajneetik taaqat dene ka aadhar hai.',
      'Cultural Reproduction ki Chunauti: Bourdieu ke anusar jab tak samajik asamaanata hai, tab tak school amir ke privilege ko merit bana kar gareeb ko filter karta rahega.',
      'Schooling ka Batwara: Ek taraf elite IB schools aur doosri taraf toote-foote sarakari primary school samajik khayi ko mitane ke badle aur chouda karte hain.',
      'Coaching ka Commercial Bouncer: Kota model ke chalte medical aur engineering ke entrance exams amir parivaron ke liye aasan aur gareebon ke liye band darwaza ban chuke hain.',
      'NEP 2020 ke Sawal: Matribhasha ka niyam tab tak barabari nahi layega jab tak private schools par bhi lagoo na ho; sath hi digital gap aur GDP ke 6% spending ki kami bhedbhav badha sakti hai.',
    ],
    conclusion:
      'Shiksha samajik badlaav ke liye anivarya hai, par yeh akeli dava nahi ho sakti; iske sath zameen sudhaar, sabhi ke liye ek saman Common School System aur jaati-ant (Annihilation of Caste) ka sangharsh zaroori hai.',
  },
]
