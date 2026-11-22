import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 11.2 · Structural Functionalism (M.N. Srinivas)',
  center: 'Field View aur Gaon ka Adhyayan',
  subtitle: 'Participant Observation • Sanskritization • Dominant Caste',
  branches: [
    {
      title: 'Theoretical Buniyaad',
      color: 'lavender',
      thinkers: ['A.R. Radcliffe-Brown', 'E.E. Evans-Pritchard', 'M.N. Srinivas'],
      points: [
        'British social anthropology ko Bharatiya gaon ke empirical study mein lagaya',
        'Armchair textualism (Book View) ko immersive fieldwork (Field View) se badla',
        'Samaj ko ek jeev (organism) maana jahan sansthaen sthirta aur santulan banaye rakhti hain',
        'Sociology ka focus prachin Varna se hatakar zameeni Jati dynamics par laya',
      ],
    },
    {
      title: 'Coorg aur Rampura Studies',
      color: 'yellow',
      thinkers: ['M.N. Srinivas', 'Robert Redfield', 'Milton Singer'],
      points: [
        'Religion and Society among the Coorgs (1952): Okka ki ekta aur ritual distance samjhaya',
        'Sanskritization concept diya: ucch jaati ke riwaaz apna kar positional mobility pana',
        'The Remembered Village (1976): Aag mein notes jalne ke baad Rampura ko yaad se likha',
        'Jajmani aarthik lenden, gaon ke vivad suljhana aur patron-client rishte samjhaye',
      ],
    },
    {
      title: 'Mukhya Concepts aur Scholars',
      color: 'mint',
      thinkers: ['M.N. Srinivas', 'S.C. Dube', 'André Béteille', 'McKim Marriott'],
      points: [
        'Dominant Caste: Sankhya bal, zameen par kabza, rajneetik dabdaba aur ritual status',
        'S.C. Dube (Shamirpet, 1955): Multi-caste integration aur Community Development parikshan',
        'André Béteille (Sripuram, 1965): Cumulative se dispersed inequality ka Weberian badlav',
        'McKim Marriott (Kishangarhi): Universalization aur Parochialization ka chakra',
      ],
    },
    {
      title: 'Aalochana aur Subaltern Virodh',
      color: 'pink',
      thinkers: ['B.R. Ambedkar', 'A.R. Desai', 'Gail Omvedt', 'David Hardiman'],
      points: [
        'Harmony bias: Jaati hinsa, begar (bonded labour) aur shoshan par parda daala',
        'Gaon ka romanticization: Ambedkar ne gaon ko "sink of localism & den of ignorance" kaha',
        'Status-quoist nazariya: Kisan vidroh aur krantikari sangharshon ko samjha nahi paya',
        'Micro-isolation: British colonialism aur capitalism ke macro asar ko nazarandaz kiya',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u01-02-book-field-synthesis.webp',
    alt: 'P2 Unit 1 infographic: Book View, Field View & Subalternity — Bridging Classical Texts, Fieldwork & Subaltern Voices',
    caption:
      'Prachin shastron ke Book View se nikal kar gaon ke zameeni Field View tak ka safar, jise baad mein subaltern aur Dalit vidwano ne gehri chunauti di.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 1 Visual 02',
  },
  {
    kind: 'md',
    body: `## Bharatiya Samaj mein Structural Functionalism Kya Hai?

Aasaan shabdon mein samjho: Structural Functionalism samaj ko ek zinda shareer (living organism) ki tarah dekhta hai. Jaise shareer ke alag-alag ang (dil, fefde, dimag) milkar shareer ko zinda aur swasth rakhte hain, waise hi samaj ke alag-alag hisse—jaise jaati, parivaar, rishtedaari, dharm aur gaon ki panchayat—ek doosre se jud kar samaj mein shanti, sthirta aur santulan (equilibrium) banaye rakhte hain. Is nazariye ne Bharatiya samajshastra ko kitabon ke band kamron se nikal kar dhoop aur dhool bhare gaon ki zameeni sachai tak pahunchaya.

Bharat mein is kranti ke janak the [[thinker:M.N. Srinivas]]. Ghurye ke paas Bombay mein padhne ke baad Srinivas Oxford gaye, jahan unhone British social anthropologists [[thinker:A.R. Radcliffe-Brown]] aur E.E. Evans-Pritchard se participant observation ki takneek seekhi. 1950 aur 1960 ke dashak mein Srinivas ne yeh sabit kiya ki Bharat ko samajhne ke liye prachin Sanskrit granth padhna kaafi nahi hai; humein asli gaon mein jakar logon ke beech rehna hoga. Is tarah Indology ke ==Book View== ke khilaf zameeni ==Field View== ka aagaz hua.

## Methodological Badlav: Book View se Field View Tak

Lagbhag 150 saal tak colonial afsar aur Indologists yeh maante rahe ki Manusmriti mein likha 4 Varna ka model (Brahmin, Kshatriya, Vaishya, Shudra) hi Bharat ki asliyat hai. Srinivas ne is bhram ko toda aur bataya ki shastra kewal ek aadarshvadi tasveer dikhate hain jo purohit varg ne apne faayde ke liye likhi thi.

- **Indology ka Book View:** Samaj ko sthir, badlav-heen aur shastron ke hisab se chalta hua maanta tha. Yeh macro-level par 4 Varna ki baat karta tha, jaise jaatiyan hamesha ke liye freeze ho chuki hon.
- **Empirical Field View:** Zameen par jaakar dekha toh pata chala ki log 4 Varna mein nahi, balki hazaron choti-choti ==Jatiyon== mein jeete hain. Gaon ke andar jaati ka darja pakka nahi tha; beech ki jaatiyan zameen, taqat aur rajneeti ke dum par apna darja upar uthane ke liye hamesha sangharsh karti rehti thin. [[eg:North India ke gaon mein Jat log Varna ke hisab se Shudra maane jate hain, par zameen par unka itna dabdaba aur kisan shakti hai ki gaon ki sari samajik vyavastha unhi ke ird-gird ghumti hai.]]

| Aayam | Book View (Indology) | Field View (Structural Functionalism) |
| --- | --- | --- |
| Mukhya Method | Sanskrit shastra, panditon se anuvad, itihasik granth | Gaon mein rehkar direct observation aur interviews |
| Mukhya Focus | Normative niyam: samaj kaisa hona chahiye | Zameeni sachai: log sach mein power kaise chalate hain |
| Adhyayan ki Ikai | Macro-level Varna model (4 universal shreniyan) | Micro-level localized Jatis (hazaron dynamic jaatiyan) |
| Badlav par Nazariya | Jaati rigid hai, janam se maut tak badal nahi sakti | Sanskritization ke zariye jaatiyan upar uth sakti hain |
| Gaon ki Chhavi | Aatmanirbhar aur sthir "chote ganrajya" (little republics) | Aapas mein jude hue, dynamic aur prati-spardhi rishte |

## M.N. Srinivas ke Do Aitihasik Field Studies

### 1. Coorg Study: Dharam aur Sanskritization

Apni Oxford thesis *Religion and Society among the Coorgs of South India* (1952) mein Srinivas ne Karnataka ke pahaadi Coorg (Kodava) samuday ka adhyayan kiya:

- **Okka ki Samajik Sanrachna:** Srinivas ne dikhaya ki Coorg samaj ki sabse badi taqat unka ==Okka== hai—ek pitra-vanshiya (patrilineal) joint family jahan sabhi purush purvajon ki zameen aur aatmaon (*Karana*) ki pooja se aapas mein jude rehte hain.
- **Shuddhata aur Ashuddhata (Madi aur Pole):** Unhone dekha ki samajik doori banaye rakhne ke liye shuddhata (*Madi*) aur ashuddhata (*Pole*) ke kathor niyam the, jo alag-alag jaatiyon ke beech bina ladai-jhagde ke santulan banaye rakhte the.
- **Sanskritization ka Janm:** Srinivas ne dekha ki neechi jaatiyan ya adivasi samuday jaati vyavastha ko todte nahi the; balki woh shakahar, janeu dharan karna, sharaab chhodna aur dwija (twice-born) jaatiyon ke reeti-riwaaz apna kar apne liye ucch ritual darja mangte the. Pehle unhone ise "Brahmanization" kaha, par baad mein badal kar ==Sanskritization== kar diya, kyunki log kewal Brahmin nahi balki Rajput ya local dominant jaatiyon ki bhi nakal karte the.

### 2. Rampura Gaon ka Adhyayan: Dominant Caste aur Jajmani Vyavastha

*The Remembered Village* (1976) Srinivas ki sabse charchit kitaab hai. 1970 mein Stanford vishwavidyalaya mein lage aag mein unke 30 saal ke field notes jal kar raakh ho gaye, par unhone poori kitaab apni yaaddasht (memory) ke dam par doobara likhi.

- **Dominant Caste (Prabhavi Jaati) ka Siddhant:** Srinivas ne Rampura gaon mein dekha ki asali taqat purohit Brahmin ke haath mein nahi thi, balki kheti karne wale ==Okkaliga== kisanon ke haath mein thi. Unhone [[thinker:M.N. Srinivas]] ke ==Dominant Caste== ke teen buniyadi aadhar bataye:
  1. Local ilaqe mein sankhya bal (numerical strength) zyada hona.
  2. Kheti yogya zameen ka bada hissa unke kabze mein hona.
  3. Rajneetik dabdaba aur gaon ke mukhiya ya police patel ke pad par hona.
  4. Ritual status mein theek-thaak darja hona (chahe Brahmin na bhi hon). [[eg:Aaj ke daur mein Haryana ke Jat, Maharashtra ke Maratha, Andhra ke Reddy aur Bihar ke Yadav local politics aur zameen ke dam par undisputed dominant castes hain.]]
- **Jajmani Vyavastha ki Interdependence:** Unhone dikhaya ki kheti karne wale patron (*Jajman*) aur unhe sewa dene wale (*Kamin* jaise badhai, lohar, nai, dhobi) sadiyon se chawal, anaj aur tyoharon par daan ke zariye jude the, jisse gaon mein seedhi class war nahi hoti thi aur ek functional equilibrium bana rehta tha.

## Doosre Bado Structural-Functionalist Adhyayan

Srinivas ki is pehal ne 1950 ke dashak mein gaon ke adhyayan ki baadh la di:

- **[[thinker:S.C. Dube]] (*Indian Village*, 1955):** Telangana ke Shamirpet gaon ka holistic adhyayan kiya. Dube ne dikhaya ki alag-alag jaatiyan hone ke bawajood gaon mein ek gahra institutional integration tha. Baad mein *India’s Changing Villages* (1958) mein unhone Community Development Projects (CDP) ki kamiyon ko be-naqab kiya ki kaise gaon ke ameer log sarkari paise ko hadap lete hain.
- **[[thinker:André Béteille]] (*Caste, Class, and Power*, 1965):** Tamil Nadu ke Tanjore zile ke Sripuram gaon ka Weberian nazariye se adhyayan kiya. Béteille ne dikhaya ki pehle zameen, jaati aur taqat ek hi haath mein thin (Brahmins had everything = ==cumulative inequality==). Par modern kanoon, adult franchise aur non-Brahmin movement se ab yeh taqatein bikhar chuki hain (==dispersed inequality==)—ab zameen aur rajneetik vote-bank doosri jaatiyon ke paas chala gaya hai.
- **[[thinker:McKim Marriott]] (*Village India*, 1955):** UP ke Kishangarhi gaon mein unhone dikhaya ki gaon ki lok-paramparaen upar jakar Sanskrit shastron ka hissa banti hain (==Universalization==) aur shastron ke niyam gaon mein aakar local rang mein dhal jate hain (==Parochialization==).

## Kadi Aalochana: Radical aur Subaltern Nazariye ka Virodh

1960 ke dashak ke aate-aate structural-functionalist model ki kamiyan khul kar samne aane lagin:

- **Harmony aur Equilibrium ka Dhokha:** Is paradigm ne gaon ko shant aur aapas mein prem se chalta hua dikhaya. [[trap:Exams mein hamesha likhein ki Jajmani ko functional cooperation batana shoshan ko chupana tha; isne sadiyon se chale aa rahe begar (bonded labour), asprishyata aur dande ke dam par shoshan par parda daala.]]
- **Ambedkar ka Karara Jawab:** [[thinker:B.R. Ambedkar]] ne Samvidhan Sabha mein gaon ko romanticize karne walon ko jhidakate hue kaha tha: *"Gaon kya hai? Yeh sankirnata, agyanta aur jaativad ka ek sasta adda hai!"* Daliton ke liye gaon koi shanti ka sthal nahi balki ek khuli jail thi jahan dominant caste unpar zulm karti thi.
- **Kisan Sangharshon ko na Samajh Pana:** Yeh model sthirta dekhne ka aadi tha, isliye Tebhaga, Telangana aur Naxalbari jaise kisan vidrohon ko yeh sirf ek "asamanaya rog" maanta tha, na ki class struggle.
- **Micro-Level Isolation:** Har gaon ko ek alag tapu maan liya gaya, jisse yeh samajh nahi aaya ki British land revenue policies, global bazar aur capitalism ne gaon ki aarthik reerh ko bahar se kaise tod diya tha.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1940–1948',
        title: 'Coorg aur Rampura mein Srinivas ka Fieldwork',
        text: 'Mysore ke ilaqon mein ghul-mil kar participant observation kiya aur modern Indian sociology ki neev rakhi.',
      },
      {
        year: '1952',
        title: 'Religion & Society among the Coorgs',
        text: 'Apni PhD thesis mein Sanskritization aur functional solidarity ke siddhant ko duniya ke samne laya.',
      },
      {
        year: '1955',
        title: 'Village Studies ka Swarnim Varsh',
        text: 'S.C. Dube ne Indian Village (Shamirpet) likha aur McKim Marriott ne Village India compile kiya.',
      },
      {
        year: '1959',
        title: 'The Dominant Caste in Rampura',
        text: 'American Anthropologist mein paper chhaap kar prabhavi jaati ke niyam aur shartein samjhayi.',
      },
      {
        year: '1965',
        title: 'Béteille ka Caste, Class, and Power',
        text: 'André Béteille ne Sripuram mein cumulative se dispersed inequality ka Weberian model diya.',
      },
      {
        year: '1976',
        title: 'The Remembered Village',
        text: 'Notes jalne ke baad yaaddasht ke dum par Rampura gaon ki behtareen ethnographic tasveer pesh ki.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'British Functionalism', text: 'Radcliffe-Brown ka organism model Bharatiya sansthaon par lagaya' },
      { label: 'Field Immersion', text: 'Shastron ki jagah gaon mein jakar direct observation shuru kiya' },
      { label: 'Naye Concepts', text: 'Sanskritization aur Dominant Caste se jaati ki mobility samjhayi' },
      { label: 'Gaon ke Studies', text: 'Dube, Béteille aur Marriott ne stratification ke alag model diye' },
      { label: 'Dalit-Marxist Virodh', text: 'Ambedkar aur Desai ne equilibrium bias aur begar ke shoshan ko ujagar kiya' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Sanskritization (Srinivas)',
    rightTitle: 'Dominant Caste Power (Srinivas)',
    rows: [
      {
        aspect: 'Mobility ka Mukhya Chetra',
        left: 'Sanskritik aur dharmik chetra: dwija jaatiyon ke khana aur reeti apnana',
        right: 'Secular aur rajneetik chetra: zameen par kabza aur panchayat chalana',
      },
      {
        aspect: 'Badlav ka Asar',
        left: 'Positional change: poori vyavastha wahi rehti hai, bas ek jati upar aati hai',
        right: 'Regional dabdaba: kanoon, vivad aur chunav mein faisla lene ki taqat',
      },
      {
        aspect: 'Kiski Nakal Hoti Hai',
        left: 'Twice-born varnas: aamtaur par Brahmin, Kshatriya ya Vaishya aadarsh',
        right: 'Sankhya aur zameen ke dam par intermediate kisan jatis ki taqat',
      },
      {
        aspect: 'Samay ki Seema',
        left: 'Peedhi-dar-peedhi: kam se kam ek ya do generation lagte hain izzat pane mein',
        right: 'Tatkaal zameeni sachai: daily kheti, panchayat aur dabangai se dikhta hai',
      },
      {
        aspect: 'Aaj ka Rujhan',
        left: 'Aadhunikikaran aur Dalit aatm-samman ke karan ab nakal ka shauk kam ho raha hai',
        right: 'Vote-bank politics aur reservation ke mudde par yeh taqat aur mazboot hui hai',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Structural Functionalism',
    meaning:
      'Samajshastra ka woh nazariya jo samaj ko aapas mein jude angon ka organism maanta hai, jo samajik santulan banaye rakhte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Field View',
    meaning:
      'M.N. Srinivas dwara sthapit zameeni tareeqa, jo kitabon ke bajaye gaon ke direct observation se samajik sachai ko khojta hai.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Sanskritization',
    meaning:
      'Woh prakriya jisme koi neechi jaati ya kabile ke log ucch ya dwija jaati ke reeti-riwaaz apna kar ritual darja badhane ki koshish karte hain.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Dominant Caste',
    meaning:
      'Local ilaqe ki aisi jaati jiske paas aabadi ka bal, kheti ki zameen, rajneetik taqat aur theek-thaak ritual darja hota hai.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The Indian village was not an unchanging, isolated republic, but a dynamic web of interdependent castes and localized mobility.',
    context: 'Rampura aur Coorg ke zameeni adhyayan se colonial stereotypes ko todte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Positional Change vs Structural Change',
    body: 'Jab bhi exam mein Sanskritization par sawal aaye, Srinivas ka yeh farq zaroor likhein: Sanskritization se kewal "positional change" hota hai (kisi ek jati ka darja thoda badalta hai); par jaati vyavastha ka "structural change" nahi hota. Seedhi wahi rehti hai, bas log thoda upar-neeche hote hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Dominant Caste ka matlab Brahmin nahi hota!',
    body: 'Aspirants aksar yeh galti karte hain ki dominant caste ko Brahmin samajh lete hain. Srinivas ne saaf dikhaya tha ki Bharat ke zyadatar ilaqon mein dominant castes kisan jaatiyan (Okkaliga, Jat, Maratha, Reddy) hain, jinka ritual darja madhyam hai par zameen aur taqat sabse zyada hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'S.C. Dube vs M.N. Srinivas (Revision Tip)',
    body: '10-marker answer ke liye yaad rakhein: Srinivas ne dominant caste aur Sanskritization par zor diya (Rampura); jabki S.C. Dube ne Shamirpet mein sabhi jaatiyon ke aapas ke taalmel aur Nehru ke Community Development Projects ke ground reality par focus kiya.',
  },
  {
    kind: 'answerBox',
    intro:
      'M.N. Srinivas ne structural-functionalist field-view ke zariye Bharatiya samajshastra ki disha badal di, jisse gaon ki zameeni taqat aur jaati mobility ke naye aayam samne aaye.',
    points: [
      'Field-View Kranti: Participant observation ke zariye Indology ke band kitabi dharanaon ko zameeni sachai se badal diya.',
      'Sanskritization Concept: Dikhaya ki jaati vyavastha bilkul jam chuki sthir vyavastha nahi hai, balki isme positional mobility sambhav hai.',
      'Dominant Caste ki Pehchan: Zameen aur sankhya-bal ke aadhar par kisan jaatiyon ke zameeni dabdabe ko samjhaya.',
      'Colonial Jhooth ka Kharijan: Henry Maine ke "isolated little republics" wale daave ko galat sabit karke inter-village rishte dikhaye.',
      'Village Studies ka daur: S.C. Dube (Shamirpet), André Béteille (Sripuram) aur McKim Marriott (Kishangarhi) ke adhyayanon ka rasta khola.',
      'Equilibrium Bias ki Kami: Ambedkar aur Marxist vidwano ne aalochana ki ki isne feudal begar aur Dalit shoshan par parda daala.',
    ],
    conclusion:
      'Harmony bias ke bawajood, Srinivas ka Field View aaj bhi Bharat ke samajik dharatal ko samajhne ke liye sabse mazboot buniyad hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Structural-functionalism ne M.N. Srinivas ke netritva mein gaon ke empirical fieldwork dwara Field View kranti ki shuruat ki; isne Sanskritization aur Dominant Caste jaise vishal concepts diye, par harmony bias ke liye kadi aalochana bhi jheli.',
  mindMap,
  sections,
}
