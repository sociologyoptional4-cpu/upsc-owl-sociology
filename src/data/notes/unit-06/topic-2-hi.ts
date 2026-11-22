import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 6.2 · Formal & Informal Organisation of Work',
  center: 'Formal vs Informal Work',
  subtitle: 'Bureaucracy & Peer Groups -> Dual Sector Economy -> Gender & WFH',
  branches: [
    {
      title: 'Organizational Structure Lens',
      color: 'lavender',
      thinkers: ['Max Weber', 'Elton Mayo', 'Peter Blau', 'R.K. Merton'],
      points: [
        'Weber formal bureaucracy: written rules, hierarchy, rational-legal authority',
        'Merton dysfunction: red tape aur niyamon ki andhi puja ("trained incapacity")',
        'Elton Mayo (Hawthorne): plant ke andar informal peer norms aur social control',
        'Peter Blau: lunch par informal salah-mashwara formal kaam ko tez karta hai',
      ],
    },
    {
      title: 'Economic Sector Lens',
      color: 'yellow',
      thinkers: ['Keith Hart', 'Arjun Sengupta', 'Jan Breman', 'S.V. Sethuraman'],
      points: [
        'Keith Hart (1971) ne Accra (Ghana) ke migrants par "informal sector" shabd diya',
        'SNA & ILO: chhota scale, low capital-labour split, kinship rishte, kanoon se bahar',
        'NCEUS (Arjun Sengupta): unincorporated <10-worker units (~90% Indian labour)',
        'Informalisation ke 7 kaaran: FDI competition, outsourcing, jobless growth',
      ],
    },
    {
      title: 'Gender in Formal & Informal',
      color: 'mint',
      thinkers: ['Sylvia Walby', 'Rosabeth Moss Kanter', 'Maria Mies', 'Naila Kabeer'],
      points: [
        'Formal offices: glass ceiling, motherhood penalty, pink-collar segregation',
        'Informal women: garibi ka gehra rishta, wage gap, perishable sabzi-phal bechna',
        'Formal se nikle mard informal sector mein aakar auraton ko aur neeche dhakelte hain',
        'Legal shield vs gaps: offices mein POSH Act 2013 vs invisible home-based workers',
      ],
    },
    {
      title: 'Tertiary Shift & Work From Home',
      color: 'pink',
      thinkers: ['Daniel Bell', 'Ashwini Deshpande', 'Rukmini Sen', 'ILO Convention 177'],
      points: [
        'Tertiary/service boom ne outsourcing, franchises aur gigs se formal unions kamzor kiye',
        'ILO Homework Convention: Industrial homework, Telework, Digital crowd-work',
        '3 ILO conditions: deconstructable tasks, saste tools, abundant skilled labour',
        'WFH ne formal/informal boundary mitayi; women par dual burden & shadow pandemic',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u06-02-formal-informal-labour.webp',
    alt: 'P1 Unit 6 infographic: Formal, Informal & Labour Shifts — Formal Contracts vs Informal Precarity',
    caption: 'Formal Contracts vs Informal Precarity — Formal, Informal & Labour Shifts ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 6 Visual 02',
  },
  {
    kind: 'md',
    body: `## Formal aur Informal Organisation of Work ke Do Sociological Arth

Aasaan shabdon mein samjho: jab UPSC **Formal and Informal Organisation of Work** par sawaal poochta hai, toh sociology mein iske **do alag par jude hue arth** hote hain. Pehla (**Organizational Structure Lens**): kisi ek hi office ya factory ke andar likhit niyamon aur boss-subordinate hierarchy (*formal organisation*) ke saath-saath canteen ki dosti, bhaichare aur unlikhit peer rules (*informal organisation*) ka chalna. Doosra (**Economic Sector Lens**): poore desh ki economy ka sarkar-niyantrit, PF-pension wali **Formal (Organised) Sector** aur bina contract ya social security wali **Informal (Unorganised) Sector** mein banta hona. [[trap:Zyadatar students exam mein sirf thele-rehdi walon par likh aate hain aur Elton Mayo tatha Peter Blau ka internal workplace wala angle bhool jaate hain — apne intro mein dono dimensions likhne se seedhe topper marks milte hain!]]

## Lens 1: Workplace ke Andar — Bureaucracy vs Informal Peer Groups

Har bada corporate office, ministry ya hospital ek ==Formal Organisation== ke roop mein banaya jaata hai jahan goals pane ke liye roles pehle se tay hote hain. [[thinker:Max Weber]] ne dikhaya ki modern formal organisation ka sabse shuddh roop rational-legal **Bureaucracy** hai — jahan likhit rules, clear hierarchy, merit recruitment aur personal zindagi se office ka algaav hota hai. Lekin kya koi office sirf rulebook se chalta hai?

- **[[thinker:Robert K. Merton]] aur Bureaucratic Dysfunction:** Merton ne chetaya ki jab babu niyamon ko hi bhagwan maan lete hain, tab ==trained incapacity== aur "red tape" (laal-feetashahi) paida hoti hai jisse aam janta ka kaam atak jaata hai.
- **[[thinker:Elton Mayo]] aur Factory ke Andar ka Informal Organisation:** Hawthorne ke **Bank Wiring Experiment** mein Mayo ne sabit kiya ki har formal factory ke andar ek taqatwar ==Informal Organisation== chalta hai. Workers apna group banate hain aur khud tay karte hain ki din mein kitna normal output dena hai — jo worker boss ko khush karne ke liye zyada kaam kare ("rate-buster"), dost use lunch par chhed kar ya baat band karke line par le aate hain!
- **[[thinker:Peter Blau]] aur [[thinker:Chester Barnard]]:** Sarkari tax department par study karte hue Peter Blau ne paya ki jab officers mushkil files par official rule tod kar lunch par apne saathiyon se informal salah lete the, toh unka darr kam hota tha aur **formal organisation ki efficiency badh jaati thi**.

## Lens 2: Economy ke Do Hisse — Formal aur Informal Sector

British anthropologist **[[thinker:Keith Hart]]** ne 1971 (published 1973) mein Ghana ki rajdhani Accra ke shehri migrants par study karte hue sabse pehle ==Informal Sector== shabd diya. Iski mukhya paribhashayein yaad rakho:

- **System of National Accounting (SNA) aur ILO Definition:** Informal sector mein weh chhoti ikaiyan (units) aati hain jo rozi-roti aur employment paida karne ke liye chalti hain, jahan capital aur labour mein bhed nahi hota, auzar sadharan hote hain, aur labour relations formal contract ke bajaye **casual rozgar, rishtedari (kinship) ya bhaichare** par tikte hain.
- **Arjun Sengupta Committee (NCEUS, India):** Bharat ke National Commission for Enterprises in the Unorganized Sector ke anusar unorganised sector mein weh sabhi unincorporated private dhandhe aate hain jo vyakti ya parivar chalate hain aur jahan **10 se kam workers** kaam karte hain (Bharat ke ~85–90% kamgar isi mein hain).
- **[[thinker:Nurul Amin]] aur [[thinker:S.V. Sethuraman]]:** Batate hain ki informal sector sarkari labour laws aur social security net se bahar rehta hai, isliye informality aur garibi (poverty) ke beech seedha rishta hai. [[eg:Chhote kisan, khet-mazdoor, cottage bidi rollers, construction workers, domestic helps, sadak kinare dhabas, puncture banane wale, home tutors aur Mangala Bazar jaise weekly haat Bharat ke informal sector ki jaan hain.]]

| Pehlu (Dimension) | Formal (Organised) Sector | Informal (Unorganised) Sector |
| --- | --- | --- |
| Entry aur Scale | Badi poonji, degree, large corporate ya PSU | Aasaan entry, kam poonji, <10 workers (NCEUS) |
| Labour Contract | Likhit appointment letter, tay ghante aur salary | Zubani baat, dihadi (daily wage) ya kinship rishta |
| Sarkari Niyam | Factory Acts, PF, ESI, paid leave aur pension | Labour laws aur tax se bahar; zero social security |
| Bargaining Power | Trade unions aur collective bargaining | Bikhre hue mazdoor; zero collective bargaining |

### Capitalism aur Tertiary Sector ne Informalisation Kyun Badhaya?

Pehle maana jaata tha ki jaise-jaise capitalism aur globalisation badhega, informal sector ghat-ta jayega. Lekin asal mein ulta hua — capitalism aur **Tertiary (Service) Sector ke uday** ne ==Informalisation== ko tezi se badhaya hai. Iske 7 structural kaaran hain:

1. **Intense Corporate Competition aur Subcontracting:** Global muqable mein kharcha bachane ke liye badi formal companies apna kaam informal contractors aur chhote sweatshops ko outsource kar deti hain.
2. **FDI ke liye State Deregulation:** Multinational companies (MNCs) aur FDI khinchne ki hod mein sarkarein labour laws ko lachila (deregulate) karti hain.
3. **Jobless Growth:** Bharat jaise deshon mein GDP toh badhi par formal factories mein ausreichend jobs nahi niklin, isliye yuva majboori mein thela, stall ya coaching jaisa informal self-employment kholte hain.
4. **Tertiary (Service) Sector ka Bikhrav:** Purani steel ya car factories mein 5,000 mazdoor ek chhat ke neeche hote the aur strong union banate the; aaj tertiary sector (retail malls, salons, cafes, security guards, delivery apps) chhote franchises aur third-party agencies mein bikhra hai jisne formal work ko kamzor kiya.
5. **Privatisation aur Economic Crises:** PSUs ke privatisation aur 2008 crash ya COVID-19 lockdown jaise sankaton mein chhatni (layoffs) hone par formal workers informal sector mein gir jaate hain.
6. **Aspiration–Inflation Gap:** Formal salary mehangai ke samne kam padne par log formal job ke baad informal side-gigs (jaise IT engineer dwara sham ko private tuition) karte hain.

## Formal aur Informal Workspaces mein Gender Bias

Kya modern formal corporate offices gender bias se mukt hain? Bilkul nahi! Feminist sociologists dikhati hain ki patriarchy formal aur informal dono jagah alag-alag roop mein kaam karti hai:

- **Formal Workspaces mein Gender Bias:** Kanooni barabari ke bawajood formal offices mein [[thinker:Rosabeth Moss Kanter]] ka **tokenism** aur invisible ==Glass Ceiling== dikhta hai jo mahilaon ko top CEO/boardroom positions tak pahunchne se rokta hai. Bacche ke janm ke baad career rukna (**Motherhood Penalty**), mahilaon ko sirf "pink-collar" roles (HR, reception, nursing, teaching) mein simatna, sham ki informal "Old Boys' Club" networking se bahar rakhna, aur sexual harassment (jiske liye Bharat mein **POSH Act 2013** banana pada) formal workspaces ke gender bias ko ujagar karte hain. [[eg:Bharat ke formal IT sector mein entry level par ~35-40% mahilayein hoti hain, par top C-suite leadership tak pahunchte-pahunchte yeh sankhya 10% se bhi neeche gir jaati hai.]]
- **Informal Sector mein Gender Equality ki Chunautiyan:** Informal sector mein patriarchy mahilaon ko padhai aur technical hunar se vanchit rakhti hai: (1) [[thinker:S.V. Sethuraman]] ke anusar informality aur **poverty ka rishta mahilaon ke liye kahin zyada gehra** hai, (2) ek hi kaam (construction ya domestic work) mein mardon se kam dihadi (**gender wage gap**) milti hai, (3) bazar mein mahilaon ko **perishable items** (sabzi, phal, phool jo sham tak sad jaayein) bechne ko milte hain jabki mard durable goods (joote, electronics) bechte hain, aur (4) jab globalisation se formal mard berozgar hokar informal sector mein aate hain, toh weh mahilaon ko aur neeche dhakel dete hain.

## ‘Work From Home’ (WFH) ne Formal aur Informal ko Kaise Redefine Kiya?

Aasaan shabdon mein samjho: log **Work From Home (WFH)** ko sirf IT sector aur COVID-19 ki den samajhte hain, jabki ghar se kaam karna Industrial Revolution se bhi purana hai (bidi rolling, kargah bunkar, choodiyan, patakhe, zari kadhai). **ILO Homework Convention (C177)** ke mutabik paid homework ke 3 roop hain: **Industrial Homework** (ghar par bidi/khilaune banana), **Telework** (remote call-centre/office), aur **Digital Crowd-Work** (platform coding). ILO ke anusar homework tabhi tikta hai jab 3 shartein poori hon: (1) kaam chhote tukdon mein toot sake (**deconstructable**), (2) auzar saste hon (silayi machine ya laptop), aur (3) sasta hunarmand labour uplabdh ho.

COVID-19 ke baad WFH ne formal aur informal work ki deewar tod di hai:

- **Formal Office ka Informalisation:** Bedroom se formal office ka kaam karne par Weberian bureaucracy ki "office vs ghar" boundary mit gayi — raat 11 baje WhatsApp par boss ke orders aane lage aur bijli-internet ka kharcha worker par aa gaya.
- **Gendered Dual Burden aur Shadow Pandemic:** [[thinker:Ashwini Deshpande]] aur [[thinker:Rukmini Sen]] ne dikhaya ki WFH ne mahilaon par bhari **Dual Burden** daal diya (ek haath se laptop meeting aur doosre se rasoi-bacche), aur lockdown mein domestic violence ke ufaan ko UN ne ==Shadow Pandemic== kaha.
- **Kaam ko "Non-Work" Maanna aur Child Labour:** Andhra Pradesh ke **Narsapur lace makers** par [[thinker:Maria Mies]] ki study dikhati hai ki ghar ke andar baith kar kiye gaye export production ko parivar aur dalal "auraton ka time-pass" (non-work) keh kar sasta nichodte hain, aur kaam factory se ghar ke band kamre mein jaane se **child labour** pakadna behad mushkil ho jaata hai. [[link:Paper 2 Unit 7 aur Unit 11 mein ise sexual division of labour aur informal child labour se jodo.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1920s–1932',
        title: 'Weber’s Bureaucracy vs Mayo’s Hawthorne',
        text: 'Weber ne formal likhit rules samjhaye; Elton Mayo ne formal factory ke andar informal peer groups khoje.',
      },
      {
        year: '1955',
        title: 'Peter Blau — Dynamics of Bureaucracy',
        text: 'Dikhaya ki officers ke beech informal salah-mashwara formal target ko zyada tezi se poora karta hai.',
      },
      {
        year: '1971–1973',
        title: 'Keith Hart Coins "Informal Sector"',
        text: 'Accra (Ghana) ke fieldwork se formal wage jobs ke bahar chalne wali shehri informal economy ko naam diya.',
      },
      {
        year: '1982',
        title: 'Maria Mies — Lace Makers of Narsapur',
        text: 'Ujagar kiya ki ghar se export lace banane wali mahilaon ko "housewives" keh kar kaise kam daam diya jaata hai.',
      },
      {
        year: '1996',
        title: 'ILO Homework Convention (C177)',
        text: 'Paid home-based work ko teen hisson mein baanta: industrial homework, telework aur digital crowd-work.',
      },
      {
        year: '2007',
        title: 'Arjun Sengupta (NCEUS) Report in India',
        text: 'Bharat ke unorganised sector (<10 workers) ko define kiya aur formal sector ke informalisation par chetaya.',
      },
      {
        year: '2020–Present',
        title: 'Pandemic WFH & Hybrid Work Redefinition',
        text: 'Formal office aur gharelu space ki boundary miti; women par dual burden aur UN "Shadow Pandemic" dikha.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Global & Tertiary Shift', text: 'Service economy, FDI competition aur outsourcing ne badi mills ko toda' },
      { label: 'Contractual Subcontracting', text: 'Formal companies 3rd-party agencies, franchises aur home-workers rakhti hain' },
      { label: 'Informalisation of Formal', text: 'Formal brand ke liye kaam karte hue bhi PF, tenure aur union haq khatam' },
      { label: 'WFH & Platform Blur', text: 'Ghar hi hybrid office bana; mahilaon par dual burden aur precarity badhi' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Formal Workspaces mein Gender Bias',
    rightTitle: 'Informal Sector mein Gender Challenges',
    rows: [
      {
        aspect: 'Mukhya Rukawat',
        left: 'Glass ceiling, motherhood penalty, tokenism (Kanter) aur old-boys club',
        right: 'Ashiksha, poonji/auzar ki kami, aur patriarchal aane-jaane ki rok',
      },
      {
        aspect: 'Kaam ka Prakar',
        left: 'Pink-collar jobs (HR, teaching, nursing, entry-level BPO)',
        right: 'Perishable thela (sabzi/phal), domestic help, home-based bidi/lace work',
      },
      {
        aspect: 'Mazdoori aur Pehchan',
        left: 'Top leadership promotion mein bhedbhav',
        right: 'Mardon se seedha kam dihadi; ghar ke kaam ko "non-work" maanna (Mies)',
      },
      {
        aspect: 'Kanooni Suraksha',
        left: 'Maternity Act aur POSH Act 2013 laagu (haalanki bachav ke raste nikale jaate hain)',
        right: 'Koi formal employer-employee rishta nahi; labour inspectors ki nazar se door',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Informal Sector (Keith Hart & NCEUS)',
    meaning:
      'Keith Hart (1971) dwara diya gaya shabd; Bharat mein Arjun Sengupta Committee (NCEUS) ke mutabik <10 workers wale unincorporated dhandhe jahan social security nahi hoti.',
  },
  {
    kind: 'keyTerm',
    term: 'Informalisation of the Formal Sector',
    meaning:
      'Jab badi formal companies aur sarkari vibhag bhi kharcha bachane ke liye permanent staff ki jagah contract, outsourced ya gig workers rakhne lagein.',
  },
  {
    kind: 'keyTerm',
    term: 'Homework (ILO Convention 177)',
    meaning:
      'Employer ke nirdesh par ghar baith kar paise ke liye kiya gaya kaam — isme industrial homework (bidi/lace), telework aur digital crowd-work aate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Housewifization of Labour (Maria Mies)',
    meaning:
      'Maria Mies ka Narsapur study se nikla concept ki ghar se kaam karne wali mahilaon ko "khali baithi housewives" bata kar unki mehnat ko kauriyon ke daam kharida jaata hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Bureaucracy develops the more perfectly, the more it is dehumanized.',
    context: 'Formal organisation mein bhavnao ko bahar rakhne ka niyam — jiske jawab mein workers informal peer groups banate hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'Adherence to the rules, originally conceived as a means, becomes transformed into an end-in-itself.',
    context: 'Formal bureaucracy mein laal-feetashahi (red tape) aur Peter Blau ke informal shortcuts ki zaroorat.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2015 PYQ Pattern: Gender, WFH aur Tertiary Informalisation Sabse Hot Themes!',
    body: 'Topic 6.2 mein 2025 Mains mein seedhe DO sawaal aaye: (1) developing societies mein informal sector ka sociological significance, aur (2) kya formal workspaces gender bias se free hain! Isse pehle 2021 mein WFH aur informal gender equality, 2020 mein capitalism aur informalisation, aur 2015 mein tertiary sector par sawaal aaye. Har answer mein Keith Hart, NCEUS, Maria Mies, Kanter aur Ashwini Deshpande ka naam zaroor shamil karein!',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: WFH ko Sirf IT Engineers tak Seemit Rakhna!',
    body: 'Work From Home (2021 PYQ) ke answer mein kabhi mat likhna ki WFH 2020 mein IT sector se shuru hua! ILO Homework Convention ke teeno roop likho: (1) Traditional Industrial Homework (bidi rolling, Narsapur lace makers, zari work), (2) Telework, aur (3) Digital Crowd-Work. Saath hi batao ki kaise home-based work mein child labour chhup jaata hai aur mahilaon par dual burden padta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'ILO ki 3 Homework Conditions (Mnemonic: D-C-A)',
    body: 'Companies kaam ghar par kab bhejti hain? D-C-A se yaad rakho: (1) Deconstructable production process (kaam aasani se chhote tukdon mein bat sake), (2) Cheap capital tools (silayi machine ya PC sasta ho), aur (3) Abundant skilled labour (duniya ke ~8% home-based workers mein 56% mahilayein hain).',
  },
  {
    kind: 'answerBox',
    intro:
      'Formal aur informal organisation of work workplace ke andar (Weberian bureaucracy vs Mayo ke peer groups) aur economy ke macro star (organised vs unorganised sector) dono jagah kaam karta hai.',
    points: [
      'Internal workplace dynamics: Max Weber ne formal rules aur hierarchy dikhayi, jabki Elton Mayo (Hawthorne) aur Peter Blau ne sabit kiya ki informal peer networks hi asli daily output tay karte hain.',
      'Macro-economic informal sector: Keith Hart aur Bharat ki Arjun Sengupta Committee (NCEUS, <10 workers) dikhate hain ki developing societies mein ~85-90% kamgar bina formal contract ke rozi-roti kamate hain.',
      'Capitalism aur tertiary informalisation: Global FDI competition, subcontracting, jobless growth aur service-sector franchises/gigs ne formal sector ke andar bhi informalisation badha diya hai.',
      'Dono sectors mein gender hierarchy: Formal offices mein glass ceiling, motherhood penalty aur pink-collar tokenism (Kanter) hai, toh informal sector mein wage gap, perishable vending aur housewifization (Maria Mies) hai.',
      'WFH redefinition: Work From Home ne formal office surveillance aur gharelu space ki seema mita di hai, jisse mahilaon par dual burden aur UN Shadow Pandemic (Ashwini Deshpande, Rukmini Sen) badha hai.',
    ],
    conclusion:
      'Formal aur informal ke beech ki khaayi patne ke liye universal social security, creche/care infrastructure aur home-based workers ko kanooni pehchan dena zaroori hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Workplace ke andar (Weber, Merton, Mayo, Blau) aur economy ke macro star (Keith Hart, NCEUS) par formal aur informal work organisation ka vishleshan — jisme capitalist/tertiary informalisation, gender bias aur Work From Home (WFH) ke badlaav shamil hain.',
  mindMap,
  sections,
}