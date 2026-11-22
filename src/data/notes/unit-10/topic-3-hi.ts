import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 10.3 · Samajik Parivartan Ke Agent (Agents of Social Change)',
  center: 'Agents of Social Change',
  subtitle: 'Paramparik Sansthaayein • Kanoon & Sanvidhan • Mass Media • Social Media & Protests',
  branches: [
    {
      title: 'Paramparik Sansthaayein',
      color: 'lavender',
      thinkers: ['M.N. Srinivas', 'Lloyd & Susanne Rudolph', 'A.M. Shah', 'José Casanova'],
      points: [
        'Jaati ka naya roop: shuddhata-ashuddhata kam hui, lekin vote-bank aur pressure group majboot hue',
        'Parivar ka lachilapan: alag rehne ke baad bhi sanyukt parivar ke aarthik aur aatmik sambandh qayam',
        'Dharmik sansthaayein: samajik kalyan, aashram aur rajnitik labhbandi ke naye roop',
        'Mool nishkarsh: parampara khatam nahi hui balki aadhunik roop dharan kar chuki hai',
      ],
    },
    {
      title: 'State, Sanvidhan Aur Kanoon',
      color: 'yellow',
      thinkers: ['B.R. Ambedkar', 'Roscoe Pound', 'Max Weber', 'Upendra Baxi'],
      points: [
        'Kanoon as Social Engineering: sanvidhan ke zariye sadiyon purane bhedbhav par hamla',
        'Mahila Suraksha: Art 14, 15(3), 243D (Panchayat reservation), Hindu Succession Act 2005',
        'Bal Shram: Art 24, RTE Act 2009, Child Labour Act 2016 ka family enterprise loophole',
        'Kanooni Seemayein: kanoon aur zameeni sach ka fasla (jaise Pradhan Pati pratha)',
      ],
    },
    {
      title: 'Traditional Mass Media',
      color: 'mint',
      thinkers: ['Theodor Adorno', 'Max Horkheimer', 'Jürgen Habermas', 'Stuart Hall'],
      points: [
        'Frankfurt School Culture Industry: consumerism ko badhana aur aam janta ka dimaag shaant karna',
        'Habermas Public Sphere: tarkik samvaad ka corporate PR aur TV sensationalism mein badalna',
        'Stuart Hall: Encoding/Decoding model (Dominant, Negotiated aur Oppositional dristikon)',
        'Vikasvadi Media: Krishi Darshan, community radio aur gaon-gaon tak awareness',
      ],
    },
    {
      title: 'New Media, Feminism & Protests',
      color: 'pink',
      thinkers: ['Manuel Castells', 'Clay Shirky', 'Judy Wajcman', 'Evgeny Morozov'],
      points: [
        'Castells Network Society: Mass Self-Communication aur horizontal aawazein (Nirbhaya, Kisan Andolan)',
        'New Media Par Feminist Sawal: masculine algorithms, troll armies aur online badnami',
        'Gender Digital Divide: smartphone aur internet access mein mahilaon ka pichhadna',
        'Slacktivism Ki Seema: Morozov ke anusar keval like aur share karne se zameeni kranti nahi aati',
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
    body: `## Samajik Parivartan Ke Agent (Agents of Social Change) Kaun Hain?

Aasaan shabdon mein samjho: samajik parivartan ke "agents" woh sansthaayein, kanoon, andolan ya madhyam hain jo samaj ke puraane dhaancho, soch aur niyam-kanoon ko badalne mein aage rehte hain. Jaise azaadi ke baad sanvidhan ne jaati-chhuachhoot par kanooni rok lagayi, jaise internet aur mobile ne gaon-gaon tak naye vichar pahunchaye, ya jaise mahila sangathanon ne gharelu hinsa ke khilaaf aawaz uthayi — yeh sabhi samajik parivartan ke taqatwar agent hain.

Samajshastra mein ise **Structure versus Agency** ki behas se samjha jata hai. [[thinker:Anthony Giddens]] ne apni *Structuration Theory* mein dikhaya ki manav agent keval samaj ke niyam nahi maante, balki apne prayason se naye niyam aur sanrachnaayein banate hain.

## 1. Paramparik Sansthaayein: Kamzor Huin Ya Naya Roop Liya?

Modernisation ke shuruati vidvaano ka maanna tha ki factory aur shahar aane se paramparik sansthaayein — jaise jaati, sanyukt parivar aur dharm — poori tarah khatam ho jayengi. Lekin Bharatiya samajshastra ne dikhaya ki yeh sansthaayein mari nahi hain, balki unhone aadhunik roop dharan kar liya hai.

- **Jaati Ka Naya Loktantrik Roop:** [[thinker:M.N. Srinivas]] ne dikhaya ki shehron mein roti-beti aur chhuachhoot ke purane niyam kamzor hue hain, lekin chunav jeetne aur reservation maangne ke liye jaati ek majboot pressure group ban gayi hai. [[thinker:Lloyd Rudolph]] aur [[thinker:Susanne Rudolph]] ne ise ==Modernity of Tradition== kaha — jaise Nadar ya Jat sabhayein ab modern interest groups bankar rajneeti ko prabhavit karti hain.
- **Parivar Ka Lachilapan:** A.M. Shah ne saabit kiya ki shehron mein log alag flat mein zaroor rehte hain (**nuclearisation of residence**), lekin sukh-dukh, paise ki zaroorat aur shaadi-byah mein poora khandaan ek sath khada hota hai (**jointness of sentiment**).
- **Dharmik Sansthaayein:** [[thinker:José Casanova]] ne bataya ki dharm chup-chaap ghar ke andar nahi baitha; aaj dharmik sansthaayein hospital, school, anti-corruption andolan aur TV channels chala kar samajik v rajnitik badlaav la rahi hain.

[[trap:Answer mein kabhi yeh mat likhna ki Bharat mein jaati ya parivar khatam ho gaye hain. Hamesha yeh dikhao ki unhone aadhunik loktantra aur bazaar ke mutabiq naye hathiyar apna liye hain.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Kanoon Banna Aur Samaj Ka Badalna Ek Cheez Nahi Hai',
    body: 'Roscoe Pound ne "law in books" (kitaabi kanoon) aur "law in action" (zameeni kanoon) ka farak bataya. Sirf kanoon bana dene se samajik badlaav nahi aata jab tak ki police, prashasan aur aam logon ki purani jaativaadi aur pitrasattatmak soch na badle.',
  },
  {
    kind: 'md',
    body: `## 2. Rajya, Sanvidhan Aur Kanoon: Social Engineering Ke Hathiyar

Post-colonial Bharat mein sarkar aur sanvidhan samajik kranti ke sabse mukhya madhyam rahe hain. [[thinker:B.R. Ambedkar]] ne sanvidhan ko keval sarkari kitaab nahi, balki sadiyon purane jaativaadi aur ling-bhed ko todne ka krantikari hathiyar banaya.

### Mahila Shashaktikaran Ke Sanvidhanik Kadam Aur Zameeni Hakikat
Sanvidhan ka Article 14 (Samanta), Article 15(1) (Bhedbhav par rok), Article 15(3) (Mahilaon ke liye vishesh niyam), aur Article 21 (Garimapoorna jeevan) mahilaon ko barabari dete hain.
- **Kanooni Sudhar:** *Hindu Succession (Amendment) Act 2005* ne betiyon ko paitrik sampatti mein barabar ka haq diya; *Domestic Violence Act 2005 (PWDVA)* ne gharelu hinsa ko apradh banaya; aur *POSH Act 2013* ne workplace par suraksha di.
- **Panchayat Aarakshan:** 73rd aur 74th Sanvidhanik Sanshodhan (Article 243D) ke zariye Panchayaton mein mahilaon ko kam se kam 33% (kai rajyon mein 50%) aarakshan diya gaya, jisse 14 lakh se zyada mahilayein gaon ki sarkar chala rahi hain.
- **Samajik Seemayein:** Kagaz par barabari milne ke bawjood zameen par ==Pradhan Pati pratha== (mahila mukhiya ke badle pati ya dewar ka raj chalana), mahilaon ki kam labour force participation (~37%), aur unpaid gharelu kaam ka bojh unhe aage aane se rokta hai.

### Kya Kanoon Bharat Se Bal Shram (Child Labour) Mita Paya Hai?
Article 24 karkhanon aur mines mein 14 saal se kam umar ke bachhon ke kaam par rok lagata hai, jise Right to Education (Article 21A, RTE Act 2009) se majboot kiya gaya.
- **Child Labour Amendment Act 2016:** Is kanoon ne sabhi commercial jagahon par 14 saal se kam ke bachhon par rok lagayi.
- **Kanoon Ka Bada Jhol (Loophole):** Kailash Satyarthi (*Bachpan Bachao Andolan*) aur samajshastriyon ne aalochana ki ki 2016 ke kanoon mein yeh chhoot de di gayi ki bachha school ke baad "family enterprise" (parivarik dhandhe) mein madad kar sakta hai. Bharat mein 80% se zyada bal shram kheti, carpet-bunai aur bidi-rolling jaise parivarik kshetron mein hi hota hai. Is loophole ne parivarik kaam ke naam par shoshan ko kanooni bana diya. Garibi aur sarkari schoolon ki kharab halat bal shram ki asli jad hain.

## 3. Mass Media Aur Social Media: Culture Industry Se Network Society Tak

Media samajik chetana ko ghadne aur badalne ka sabse shaktishali aayna hai.

### Traditional Mass Media: Frankfurt School Ki Aalochana
- **Theodor Adorno & Max Horkheimer (Culture Industry):** Inhone dikhaya ki commercial media (TV, films, radio) ek factory ki tarah consumer goods bechta hai. Yeh aam janta ke dimaag ko naye sapne aur jhoothi zarooratein (**false needs**) dekar shaant kar deta hai taaki log capitalism ke khilaaf aandolan na karein.
- **Jürgen Habermas Aur Public Sphere:** Habermas ne bataya ki 18vin sadi mein coffee-houses aur azaad akhbaron mein janta nishpaksh behas karti thi (**Public Sphere**). Aadhunik corporate media aur TV news channels ne is rational samvaad ko TRP-aadhrit tamasha bana diya (**Refeudalisation of Public Sphere**).
- **Stuart Hall Ka Encoding/Decoding Model:** Hall ne dikhaya ki janta murkh nahi hai; log media ke sandesh ko teen dhang se samajhte hain: **Dominant** (sarkar/corporate ki baat maan lena), **Negotiated** (thodi baat maanna, thoda apna dimaag lagana), ya **Oppositional** (poori tarah media ke jhooth ko kharij karna).

### Social Media Aur Protests: Manuel Castells Ki Network Society
[[thinker:Manuel Castells]] ne apni kitaab *Networks of Outrage and Hope* (2012) mein dikhaya ki social media (X/Twitter, WhatsApp, YouTube) ne andolan karne ka tareeka badal diya hai:
- **Mass Self-Communication Aur Horizontal Networks:** Ab sarkar ya TV channels ki ijazat nahi chahiye; aam log bina kisi bade neta ke aapas mein judte hain. [[eg:2012 ka Nirbhaya aandolan, Arab Spring, #MeToo andolan, aur 2020–21 ka kisan aandolan hashtag activism aur viral videos ke zariye aam logon dwara chalaaye gaye.]]
- **Social Media Ka Kala Pehlu (Slacktivism & Surveillance):** Evgeny Morozov ne chetavani di ki social media par keval post like ya share karne ko log kranti samajh lete hain (**Slacktivism**), jisse zameeni badlaav nahi aata. Iske alawa IT-cells, deepfakes, trolling aur Pegasus jaise sarkari surveillance ne loktantra par dabav banaya hai.

### New Media Par Feminist Chintan: Kya New Media Masculine Hai?
Feminist vidvaano (Judy Wajcman, Shoshana Zuboff) ne dikhaya ki New Media dikhne mein azaad hai par iska dhaancha purush-pradhan (masculine) hai:
1. **Purush-Kendrit Design:** Silicon Valley aur Big Tech companiyon ke 80% algorithms purush engineers banate hain, jisme unki patriarchal soch coding mein ghul jati hai.
2. **Cyber-Bullying Aur Online Misogyny:** Aawaz uthane wali mahila patrakaron aur netriyon ko character assassination, rape threats aur deepfake photos se daraya jata hai taaki woh chup ho jayein.
3. **Gender Digital Divide:** Bharat mein NFHS-5 (2019–21) ke anusar keval 54% mahilaon ne internet ka upyog kiya hai, jabki purushon mein yeh 70% se zyada hai.
4. **Pratirodh Ka Hathiyar:** In rukawaton ke bawjood mahilayein #MeToo aur #PinjraTod jaise social media abhiyan chala kar sadiyon ki chuppi tod rahi hain.`,
  },
  {
    kind: 'keyTerm',
    term: 'Culture Industry',
    meaning: 'Adorno aur Horkheimer ka vichar ki commercial media standardised manranjan bech kar aam logon ki krantikari soch ko shaant kar deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Mass Self-Communication',
    meaning: 'Manuel Castells ka niyam jisme har vyakti internet ke sahare bina kisi traditional gatekeeper ke laakhon logon tak apni baat pahunchata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Pradhan Pati',
    meaning: 'Panchayat mein chuni gayi mahila representative ke badle uske pati ya purush rishtedar dwara sarkari satta chalane ki samajik pratha.',
  },
  {
    kind: 'keyTerm',
    term: 'TechnoFeminism',
    meaning: 'Judy Wajcman ka model jo dikhata hai ki takneek aur gender ek doosre ko banate hain, aur takneek ko mahila azaadi ke liye badla ja sakta hai.',
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Mass Media',
    rightTitle: 'New Media / Social Media',
    rows: [
      {
        aspect: 'Sanchar Ka Disha',
        left: 'Upar se neeche, ek taraf se laakhon tak (one-to-many)',
        right: 'Sabhi ka sabhi se aapsi samvaad (many-to-many networks)',
      },
      {
        aspect: 'Niyantran Aur Censor',
        left: 'Bade corporate malikon aur sarkar ke sakht niyantran mein',
        right: 'Decentralized algorithms, viral videos aur user-generated content',
      },
      {
        aspect: 'Andolan Ka Dhang',
        left: 'Formal party, neta aur trade union ki hierarchy par tika',
        right: 'Bina neta ka, spontaneous, hashtag-aadhrit viral andolan',
      },
      {
        aspect: 'Loktantrik Khatra',
        left: 'Jhoothi sahmati ka nirman (manufacturing of consent)',
        right: 'Echo chambers, cyber-bullying aur sarkari digital surveillance',
      },
    ],
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Upendra Baxi Ke Nazariye Se Kanoon Ka Vishleshan Karein',
    body: 'UPSC ke kanoon-sambandhit prashnon mein jurist Upendra Baxi ka model lagayein: dikhayein ki progressive kanoon adhikar ki chetana zaroor jagata hai, lekin zameeni badlaav ke liye sarkari budget aur samajik andolan dono ka hona anivarya hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Kanoon Bharat se Bal Shram (Child Labour) ko poori tarah kyun nahi mita paya:',
    points: [
      'Garibi Aur Asangathit Rozgar: Jab tak gareeb parivaron ke maata-pita ko sammanjanak tankhwah nahi milti, tab tak bachhe parivar ki roti ke liye kaam karne par majboor rehte hain.',
      '2016 Ke Kanoon Ka Parivarik Chhoot Loophole: Family enterprise mein kaam karne ki chhoot ne dhabon, kheti aur karkhanon mein hone wale shoshan ko kanooni roop de diya.',
      'Sarkari Schoolon Ki Lachar Halat: RTE Act 2009 ke bawjood gaon ke schoolon mein padhai ka ghatiya star aur teacheron ki kami bachhon ko school chhodkar majdoori mein dhakelti hai.',
      'Labour Inspection Ki Badi Kami: Bal shram gaon aur asangathit bhattiyon mein phaila hai jahan inspector pahunchte hi nahi ya bhrashtachar ke kaaran aankhein moond lete hain.',
      'Samajik Aur Jaativaadi Soch: Karigar aur pichhdi jaatiyon mein bachpan se kaam sikhane ko apradh nahi balki paramparik hunar maanna bal shram ko samajik manyata deta hai.',
    ],
    conclusion: 'Bal shram ka khatma keval police aur kanoon se nahi, balki garibi unmulon aur behtareen muft sarkari shiksha se hi sambhav hoga.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Samajik parivartan ke agent woh sansthaayein, kanoon aur madhyam hain jo samajik sanrachna ko badalte hain. Jaati aur parivar jaisi paramparik sansthaayein mithi nahi hain balki unhone vote-bank aur pressure group ka aadhunik roop dharan kar liya hai (Srinivas, Rudolphs). Aadhunik rajya aur sanvidhan social engineering ke madhyam hain (Ambedkar, Pound), parantu mahila kanoon (Art 14, 15, 243D) aur bal shram rokne ke prayas Pradhan Pati pratha, parivarik chhoot ke loopholes aur garibi ke kaaran zameen par chunauti jhelte hain. Traditional mass media jahan Culture Industry (Adorno, Habermas) ke zariye sahmati banata tha, wahin New Media viral aur horizontal andolan khade karta hai (Castells), bhale hi isme masculine algorithms aur digital divide ki nayi rukawatein hon (Wajcman).',
  mindMap,
  sections,
}
