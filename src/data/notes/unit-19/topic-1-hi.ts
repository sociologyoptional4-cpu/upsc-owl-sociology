import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1HiMindMap: MindMapData = {
  title: 'Topic 1 · Development Planning aur Mixed Economy',
  center: 'Development Planning & Mixed Economy',
  subtitle: 'Nehruvian Modernity • Gandhian Swaraj • 1991 LPG • NITI Aayog',
  branches: [
    {
      title: 'Shuruati Nazariye',
      color: 'lavender',
      thinkers: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'P.C. Mahalanobis', 'B.R. Ambedkar'],
      points: [
        'Nehruvian model: heavy industry aur Five-Year Plans par state ka control',
        'Gandhian Gram Swaraj: gaon ki aatmanirbharta, charkha aur moral economy',
        'Mixed economy: public commanding heights ke sath private sector ka coexistence',
        'Mahalanobis strategy: colonial gulami se nikalne ke liye capital goods priority',
      ],
    },
    {
      title: 'Marxist aur Samajik Aalochna',
      color: 'yellow',
      thinkers: ['A.R. Desai', 'Pranab Bardhan', 'Gunnar Myrdal', 'Raj Krishna'],
      points: [
        'A.R. Desai: state-directed capitalist planning jo corporate hiton ko saadh rahi thi',
        'Pranab Bardhan: 3 dominant proprietary classes (capitalists, kulaks, babus)',
        'Gunnar Myrdal: soft state jo kanoon to banati hai par implement nahi karti',
        'Raj Krishna: License Raj aur red tape se gira hua "Hindu rate of growth" (~3.5%)',
      ],
    },
    {
      title: 'Neoliberal Turn (1991 LPG)',
      color: 'mint',
      thinkers: ['Leela Fernandes', 'Jan Breman', 'Neera Chandhoke', 'Stuart Corbridge'],
      points: [
        '1991 fiscal crisis: IMF structural adjustment aur License Raj ka ant',
        'Class badlaav: consumerist new middle class ka achanak uphaar (Fernandes)',
        'Labour informalisation: gig economy, thekedaari, footloose mazdoor (Breman)',
        'Regional asantulan: peninsular western states aage, eastern belt pichhadi',
      ],
    },
    {
      title: 'Yojana Aayog se NITI Aayog',
      color: 'pink',
      thinkers: ['Jean Drèze', 'Amartya Sen', 'Arvind Panagariya', 'Yogendra Singh'],
      points: [
        'Planning Commission (1950): top-down fund distribution aur strict targets',
        'NITI Aayog (2015): think tank, competitive aur cooperative federalism',
        'Aspirational Districts Programme: capital disbursement ke badle outcome metrics',
        'Sociological chinta: kalyankari state ka peechhe hatna aur asamaanata',
      ],
    },
  ],
}

export const topic1HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u09-01-planning-constitution-law.webp',
    alt: 'P2 Unit 9 infographic: Planning, Constitution & Law — State-Led Planning, Liberalization & Legal Social Engineering',
    caption:
      'India ka vikas model Soviet-style Five-Year Plans aur state-led commanding heights se badal kar neoliberal market facilitation aur NITI Aayog ke competitive federalism tak pahunch chuka hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 19 Visual 01',
  },
  {
    kind: 'md',
    body: `## Aasaan Shabdon Mein Samjho: Development Planning aur Mixed Economy Kya Hai?

Jab 1947 mein Bharat azaad hua, tab desh ke paas na to badi factories lagane ke liye private paisa tha, aur na hi angrezi shasan ke baad gareebi aur bhookhmari se nipatne ka koi aasaan raasta tha. Aise mein naye Bharat ne ek beech ka rasta chuna jise ==Mixed Economy== kaha gaya — yaani aisi vyavastha jahan sarkari planning aur private business dono milkar kaam karenge. Sarkar ne steel, bijli, railway aur baandh jaise bade projects apne haath mein rakhe jinhe **commanding heights of the economy** kaha gaya, taaki desh ka buniyadi dhaancha tezi se khada ho sake.

[[thinker:Jawaharlal Nehru]] ne bade baandhon aur steel plants ko "modern Bharat ke mandir" kaha tha. [[eg:Bhilai aur Rourkela ke steel plants aur Bhakra Nangal baandh is baat ke saboot the ki sarkar khud aage badhkar bhari udyog laga rahi thi, kyunki us daur mein koi bhi private company itna bada risk nahi le sakti thi.]] Lekin is vikas ke model par desh ke andar shuru se hi do bade vicharon ke beech takraav tha: Nehruvian Industrialisation aur Gandhian Gram Swaraj.

### Competing Visions: Nehruvian Industrial Model vs Gandhian Gram Swaraj

Azaadi ke turant baad Bharat ke vikas ke liye do bilkul alag dharayein samne aayi:

1. **Nehruvian Modernist Vision**: Nehru ji ka manna tha ki modern science, heavy factories aur tech ke bina Bharat gareebi aur jaativadi sankirnta se bahar nahi nikal sakta. Nehru gaon ko purani, pichhadi jagah mante the — aur unka yeh nazariya [[thinker:B.R. Ambedkar]] se kafi milta tha, jinhone gaon ko "agnorance, sankirnta aur communalism ka adda" kaha tha.
2. **Gandhian Moral Vision**: [[thinker:Mahatma Gandhi]] ne apni kitaab *Hind Swaraj* (1909) mein pashchimi industrial model ko seedhe kharij kiya. Gandhi ji ka manna tha ki factories insaan ko machine aur lalach ka gulam bana deti hain. Unhone **Gram Swaraj** ki baat ki — jahan har gaon aatmanirbhar ho, charkha aur cottage industries chalain, aur "mass production" ke badle "production by the masses" ho.

| Pehlu | Nehruvian Model | Gandhian Swaraj |
| :--- | :--- | :--- |
| **Mukhya Unit** | Nation-state aur modern shehari factory hubs | Aatmanirbhar gaon (*Gram Swaraj*) |
| **Aarthik Engine** | Bhaari udyog, baandh, power plants | Kutir udyog, charkha, khadi aur kheti |
| **Technology** | High technology, big machines aur scientific temper | Zaroorat anusar chote aujaar; mazdoor bachane wali machine se bachaav |
| **Samajik Dhaancha**| Industrial mazdoor varg aur technical babu | Ahinsak, cooperative, astitva-sambandhit moral community |
| **Gaon ka Nazariya**| Pichhada aur jaati-jakda; shehar se modern banana hoga | Bhartiya sabhyata ka astitva aur pavitra kendra |

[[link:Paper 1 ke Unit 10 (Development and Dependency) aur Paper 2 ke Unit 13 (Agrarian Social Structure & Land Reforms) se jodkar dekho.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Nehruvian Planning Model (1950–1991)',
    rightTitle: 'Gandhian Swaraj Vikalp',
    rows: [
      {
        aspect: 'Mukhya Siddhant',
        left: 'State-led heavy industrialization aur Five-Year Plans ka central control.',
        right: 'Gramin aatmanirbharta, kutir udyog aur moral restraint.',
      },
      {
        aspect: 'Varg Gatividhi',
        left: 'Sarkari afsarshahi, public-sector technocrats aur big industrial houses bane.',
        right: 'Gaon ke dastkar, kisan aur local panchayaton ko sashakt karna tha.',
      },
      {
        aspect: 'Paryavaran Asar',
        left: 'Bade baandh aur khanan ne lakhon adivasiyon ko visthapit kiya.',
        right: 'Prakriti ke sath santulan aur kam kharch par aadharit jeewan shaili.',
      },
      {
        aspect: 'Neeti mein Sthaan',
        left: 'Mahalanobis model ke zariye sarkar ki aadhikarik neeti bana.',
        right: 'Directive Principles (Art. 40) aur Khadi subsidy tak simit reh gaya.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Samajik Nazariye se Planning ki Aalochna

Sarkari planning ne gareebon ko sach mein azaad kiya ya sirf amiron ko aur amir banaya? Samajshastriyon ne is par gehri aalochnayein pesh ki hain:

#### 1. A.R. Desai: State Capitalism aur Welfare State ka Dhong
Marxist samajshastri [[thinker:A.R. Desai]] ne apni kitabon *State and Society in India* aur *India's Path of Development* mein saaf kaha ki azaad Bharat ka rajya asal mein ek **bourgeois-capitalist rajya** tha. Unka kehna tha ki:
- Planning koi samajwad nahi la rahi thi, balki yeh ==State Capitalism== tha jisme sarkar ne tax ke paise se steel, road aur bijli jaise mehnge aur risky projects khade kiye.
- In sarkari projects ka sasta labh private corporate houses (Tata, Birla aadi) ko diya gaya taaki unka profit badh sake.
- Land reforms ko adhoora chhoda gaya, jisse jotedar zamindar amir kulak kisan ban gaye aur khet-mazdoor gareeb hi reh gaye.

#### 2. Pranab Bardhan: Dominant Proprietary Classes ka Gathbandhan
Arthsastri [[thinker:Pranab Bardhan]] ne dikhaya ki planning ko 3 taaqatwar vargon ne aapas mein baant liya: (a) Industrial corporate class, (b) Gaon ke amir kisan (*kulaks*), aur (c) Safed-posh sarkari afsarshahi. Yeh teeno milkar sarkari subsidy aur resources lootate rahe aur aam janta pichhadti gayi.

#### 3. Gunnar Myrdal: Soft State aur Kanoon ki Lachari
[[thinker:Gunnar Myrdal]] ne apni kitaab *Asian Drama* mein Bharat ko **Soft State** kaha — yaani ek aisa desh jahan kanoon aur baatein to badi-badi aur pragatishil hoti hain, lekin amir aur dabang jaatiyon ke khilaf kadak kadam uthane ki kanooni ichhashakti nahi hoti.

[[trap:Exam mein kabhi bhi Nehru ke mixed economy model ko sachha socialism mat likhna — A.R. Desai ke mutabiq yeh corporate capitalism ko palne-posne wali state planning thi.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Answer Writing Tip: State ka Class Character',
    body: 'Planning par sawaal aane par samvidhan ke "Socialist" shabd aur zameeni samajik sachayi ka farq dikhao. A.R. Desai (State Capitalism), Pranab Bardhan (Dominant Proprietary Classes) aur Gunnar Myrdal (Soft State) ka hawala dekar samjhao ki planning ne aam janta se zyada elite varg ko taaqat di.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Daur 1: Nehruvian Planning (1950–1991)',
        text: 'State ki badshahat, Mahalanobis heavy model, License-Permit Raj, aur dhimi "Hindu rate of growth" (~3.5%).',
      },
      {
        label: 'Daur 2: 1991 LPG Badlaav',
        text: 'Forex crisis, IMF structural adjustment, de-licensing, privatization, MNCs ka aana aur New Middle Class ka janam.',
      },
      {
        label: 'Daur 3: NITI Aayog (2015 se Ab Tak)',
        text: 'Five-Year Plans khatam, policy think tank, competitive federalism, Aspirational Districts aur market-led governance.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## 1991 ke LPG Reforms aur "New Middle Class" ka Uphaar

1991 mein videshi mudra bhandar khatam hone ki kagar par tha, jiske baad Bharat ne License-Permit-Quota Raj ko tod kar ==Liberalisation, Privatisation, aur Globalisation (LPG)== ki neeti apnayi.

Is badlaav ne Bhartiya samajik taane-baane ko jhad-phoonk kar badal diya:
1. **Naye Madhyam Varg (New Middle Class) ka Uday**: Samajshastri [[thinker:Leela Fernandes]] ne dikhaya ki 1991 ke baad middle class ka matlab sarkari naukri aur saadha jeewan nahi raha, balki **consumer citizenship** ban gaya. [[eg:Gurugram aur Bengaluru jaise sheharon mein gated society ke flat, luxury malls, brand ke kapde aur weekends par pub jana middle-class status ka naya saboot ban gaya.]]
2. **Mazdooron ki Asuraksha (Labour Informalisation)**: [[thinker:Jan Breman]] ne dikhaya ki naye daur ne permanent naukriyan khatam karke thekedaari aur gig economy ko badhava diya, jisse 90% se zyada mazdoor bina kisi pension ya suraksha ke bhatakne par majboor ho gaye.
3. **Kshetriya Asamaanata (Regional Disparity)**: Private investment unhi rajyon mein gaya jahan pehle se ports aur sadkein theen (Maharashtra, Gujarat, Tamil Nadu, Karnataka), jabki Bihar aur UP jaise rajya saste mazdoor supply karne wale kshetr ban kar reh gaye.

## Yojana Aayog se NITI Aayog: Soch aur Dhaanche ka Badlaav

2015 mein sarkar ne 65 saal purane Planning Commission ko khatam karke **NITI Aayog** (National Institution for Transforming India) banaya:

- **Resource Baantne se Think Tank Tak**: Planning Commission ke paas rajyon ko budget aur plan money dene ki seedhi power thi. NITI Aayog ke paas koi fund distribution power nahi hai; yeh sirf ek strategic policy think tank hai.
- **Competitive aur Cooperative Federalism**: NITI Aayog ne alag-alag indices shuru kiye jaise *SDG India Index* aur *Aspirational Districts Programme*, jahan rajyon ko aapas mein compete karwaya jata hai.
- **Samajshastri Chinta**: [[thinker:Jean Drèze]] jaise vishleshakon ka kehna hai ki planning khatam hone se gareeb rajyon aur pichhadi aabadi ke liye samvedansheel redistributive justice kamzor hua hai aur policy making corporate consultants ke haath mein chali gayi hai.`,
  },
  {
    kind: 'keyTerm',
    term: 'Mixed Economy',
    meaning:
      'Aisi aarthik vyavastha jisme heavy aur basic udyog sarkar ke haath mein hote hain aur consumer goods private sector ke paas, taaki vikas bhi ho aur kisi ek ka monopoly na bane.',
  },
  {
    kind: 'keyTerm',
    term: 'State Capitalism (A.R. Desai)',
    meaning:
      'A.R. Desai ka Marxist concept jiske anusar azaad Bharat ki state planning ne janta ke tax se infra khada karke private capitalist class ke munafay aur zameen ko mazboot kiya.',
  },
  {
    kind: 'keyTerm',
    term: 'Cooperative & Competitive Federalism',
    meaning:
      'NITI Aayog ka governance framework jahan rajya aapas mein vikas indices (SDG Index, Aspirational Districts) par compete karte hain taaki private capital ko aakarshit kar sakein.',
  },
  {
    kind: 'keyTerm',
    term: 'Soft State (Gunnar Myrdal)',
    meaning:
      'Ek aisa rajya jo kanoon to bahut krantikari banata hai lekin dabang vargon aur samajik elitem ke khilaf unhe enforce karne ki kanooni aur rajneetik himmat nahi juta pata.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Ke Liye Yaad Rakhne Yogya Farq',
    body: 'Planning Commission ek centralized, top-down sanstha thi jo Five-Year Plans banati aur paise baant ti thi. NITI Aayog ek market-friendly think tank hai jo rankings aur competitive federalism par chalta hai aur koi direct fund nahi baantta.',
  },
  {
    kind: 'answerBox',
    intro:
      'Planning Commission se NITI Aayog ke transition par UPSC Paper 2 ka model framework:',
    points: [
      'Itihasik sandarbh: 1950 mein capital ki kami ke karan state ka aage aana zaroori tha; 1991 ke baad market aur private capital ko facilitate karne ki zaroorat bani.',
      'Sansthanik badlaav: Planning Commission fund baantne wali directive agency thi; NITI Aayog ek advisory think tank hai jo performance indices par focus karta hai.',
      'Varg sanrachna: Nehruvian daur mein sarkari babu aur public sector elite bane; NITI Aayog daur mein corporate governance aur PPP models ka dabdaba hai.',
      'Kshetriya asamaanata par asar: Gadgil formula se pichhade rajyon ko special assistance milti thi; competitive ranking se pehle se viksit peninsular states ko zyada faayda milta hai.',
      'Subaltern equity aalochna: Planning hatne se samajik suraksha aur redistributive schemes kamzor hone ka khatra bana rehta hai jab tak statutory rights majboot na hon.',
    ],
    conclusion:
      'NITI Aayog ne governance mein speed aur digital monitoring zaroor badhayi hai, par Bharat jaisi samajik asamaanata wale desh mein sachi pragati ke liye competitive ranking ke sath-sath redistributive kalyankari suraksha zaroori hai.',
  },
]
