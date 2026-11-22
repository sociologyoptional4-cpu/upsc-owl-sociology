import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 6.3 · Labour and Society',
  center: 'Labour & Society',
  subtitle: 'Reserve Army & Feminists -> Globalization & Informalisation -> Gig, Codes & Migrants',
  branches: [
    {
      title: 'Classical & Feminist Lenses',
      color: 'lavender',
      thinkers: ['Karl Marx', 'Veronica Beechey', 'Irene Bruegel', 'Maria Mies'],
      points: [
        'Marx Reserve Army of Labour (floating, latent, stagnant) wages dabata hai',
        'Feminist view: mahilaon ko disposable buffer banaya ("last hired, first fired")',
        'Patriarchal breadwinner ideology se auraton ka kam daam aur unpaid care natural dikhta hai',
        'Bruegel nuance: pink-collar segmentation kabhi-kabhi female jobs ko recession mein bachata hai',
      ],
    },
    {
      title: 'Globalization & Informalisation',
      color: 'yellow',
      thinkers: ['Jan Breman', 'Guy Standing', 'Arjun Sengupta', 'S.V. Sethuraman'],
      points: [
        'Globalization se outsourcing, FDI deregulation aur jobless formal growth badha',
        'Bharat mein informalisation (~90% workforce; PSUs/MNCs mein contractualisation)',
        'Regulation ki zaroorat: garibi link (Sethuraman), kharab halat, gender wage gap',
        'Regulation ki mushkilein: cash data ki kami, global cost darr, zero union power',
      ],
    },
    {
      title: 'Gig Economy & New Economy',
      color: 'mint',
      thinkers: ['Guy Standing', 'Axel Bruns', 'Alvin Toffler', 'C. Wright Mills'],
      points: [
        'Tripartite gig model: Platform (Uber/Zomato) + Gig Worker + Client/Consumer',
        'Death of lifelong career; employeeless aur infrastructure-less corporations',
        'Worker trade-off: flexibility & multi-apping vs algorithmic whims & zero PF',
        'New Economy Produsage (Axel Bruns) & Prosumer (Toffler): user hi content creator',
      ],
    },
    {
      title: 'Migrant Labour & 4 Labour Codes',
      color: 'pink',
      thinkers: ['Jan Breman', 'Myron Weiner', 'Ashwini Deshpande', 'NCEUS'],
      points: [
        'Inter-state migrants ("footloose labour"): thekedar karz, bhasha aur nativist bhedbhav',
        'Ration/voting portability ki kami (pre-ONORC), slum badhali, Lockdown exodus crisis',
        'India ke 4 Labour Codes (2019–20) ne 29 central laws jode; gig workers ko pehchan',
        'Critique: 300-worker layoff limit aur strike notice rules se trade unions kamzor',
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
    body: `## Labour aur Samaj ka Rishta — Classical Class Struggle se Precariat Tak

Aasaan shabdon mein samjho: Labour (shram/kamgar varg) sirf economics ki kitaab mein likha koi kachcha maal nahi hai; koi samaj apne mehnatkash logon ke saath kaisa sulook karta hai, usse us samaj ka parivar, migration, garibi aur loktantra tay hota hai. [[thinker:Karl Marx]] ke liye labour samaj ki saari daulat ka rachayita hai jise capitalism ek bikau vastu bana deta hai. [[thinker:Émile Durkheim]] ke liye occupational groups aur associations aam nagrik aur state ke beech naitik bhaichare ka pul hain. Aaj 21st century mein [[thinker:Guy Standing]] chetate hain ki neoliberal globalization ne purane sthayi working class ko tod kar ek naya global ==Precariat== paida kar diya hai — karodon aise informal, contract, migrant aur gig workers jinke paas na kal ki naukri ki guarantee hai na social security net.

## Reserve Army of Labour aur Feminist Scholars ka Nazariya

*Das Kapital* (Volume 1, Chapter 25) mein **[[thinker:Karl Marx]]** ne samjhaya ki capitalism kabhi bhi sabhi logon ko poora rozgar nahi deta — use hamesha ek ==Reserve Army of Labour== (berozgar aur adha-berozgar logon ki fauj) ki zaroorat hoti hai. Marx ne iske teen roop bataye: **Floating** (jo factories se nikalte-ghuste rehte hain), **Latent** (gaon ke kisan jo kheti tootne par shehar aane ko taiyar baithe hain), aur **Stagnant** (behad aniyamit dihadi mazdoor). Yeh reserve army malikon ke liye do kaam karti hai: gate ke bahar khade berozgaron ka darr dikha kar andar kaam kar rahe mazdooron ki tankhwah (wages) dabaye rakhti hai aur union strikes ko todti hai.

1970–80 ke dashak mein **Feminist Scholars** ne Marx ke is concept ko aage badhate hue poochha: *Capitalism ki is Reserve Army mein sabse aasaan shikar kaun banta hai? Mahilayein!*

- **Mahilayein as Ideal Disposable Buffer ([[thinker:Veronica Beechey]]):** 1977 ke apne mashhoor paper mein Veronica Beechey ne dikhaya ki shadi-shuda mahilayein capitalism ke liye sabse pasandida "flexible reserve army" hain. Kyunki patriarchal parivar mein mard ko "mukhya kamane wala" (male breadwinner) aur aurat ko "gharelu patni" maana jaata hai, isliye jab yuddh ya boom mein labour chahiye toh auraton ko saste daam par bula lo, aur mandi (recession) aate hi sabse pehle unhe nikaal do (**"last hired, first fired"**) — weh chupchap wapas rasoi ke unpaid kaam mein chali jaati hain aur sadak par hangama bhi nahi hota!
- **Unpaid Domestic Work aur Housewifization ([[thinker:Mariarosa Dalla Costa]], [[thinker:Maria Mies]]):** Feminist thinkers ne dikhaya ki auraton ka unpaid gharelu kaam (khana, safai, bacchon ki parvarish) agle din factory ke liye mazdoor ko muft mein taiyar karta hai, aur unhe "housewife" keh kar informal sector mein kam mazdoori dena aasaan ho jaata hai.
- **Pink-Collar Segmentation Nuance ([[thinker:Irene Bruegel]], [[thinker:Sylvia Walby]]):** Irene Bruegel ne empirical data se ek barik baat jodi: kyunki mahilaon ko behad kam-tankhwah wale "pink-collar" service jobs (nursing, safai, typing, care) mein alag rakha jaata hai jahan mard aana nahi chahte, isliye kai baar factory recession mein mardon ki naukri pehle jaati hai aur sasti female service jobs bachi rehti hain — par weh hamesha low-paid precarity mein qaid rehti hain. [[eg:Bharat mein COVID-19 lockdown aur uske baad PLFS data ne dikhaya ki sankat aate hi formal aur urban jobs se sabse pehle mahilaon ko bahar kiya gaya aur unhe unpaid family labour mein dhakel diya gaya.]]

## Globalization, Informalisation of Labour aur Regulation ki Chunautiyan

Globalization ke baad Bharat jaise deshon mein (~90% total workforce aur ~80%+ non-agricultural labour) formal jobs badhne ke bajaye ==Informalisation of Labour== kyun badha? Iska jawab hai: **corporate cost-cutting & subcontracting**, **FDI ke liye state deregulation**, **jobless formal GDP growth**, **PSUs ka privatisation**, aur **First-World ki sweatshop outsourcing**. **Arjun Sengupta Committee (NCEUS)** ne dikhaya ki Bharat mein formal factories aur sarkari vibhagon ke andar bhi permanent staff hata kar thekedar ke contract mazdoor rakhne ka chalan (*informalisation of the formal sector*) tezi se badha hai.

| Informal Labour ko Regulate Karna Kyun Zaroori Hai? | Regulate Karne mein Mukhya Rukawatein Kya Hain? |
| --- | --- |
| **Garibi se seedha rishta (S.V. Sethuraman):** Kam dihadi ke kaaran informal workers BPL garibi mein phanse rehte hain | **Data ki bhari kami:** Nakad (cash) par chalne wali karodon chhoti units (<10 workers) ka pakka data milna mushkil |
| **Khatarnak working conditions:** Zero safety gear, 12-14 ghante kaam, na PF na bimari ki chhutti | **Global competitiveness khone ka darr:** Sakht minimum wage lagane par export orders Bangladesh/Vietnam jaane ka darr |
| **Gender wage gap aur child labour:** Mahilaon ka shoshan, perishable vending aur gharon mein chhupa bal-shram | **Zero collective bargaining:** Pepsi plant ke union ke ulte dhaba boys, street vendors aur domestic helps akele aur bikhre hain |

## Gig Economy aur New Economy mein Produsage

21st century ke labour market mein sabse bada badlaav ==Gig Economy== hai — jahan kaam chhote, flexible, short-term tasks ("gigs") mein banta hota hai aur **formal employer-employee rishta bilkul gayab** hota hai. [[eg:Uber/Ola ke drivers, Zomato/Swiggy ke delivery partners, Blinkit/Zepto ke 10-minute riders aur Urban Company ke technicians Bharat ke tezi se badhte gig workers hain (NITI Aayog ke mutabik 2029–30 tak inki sankhya 2.35 crore hogi).]]

- **Tripartite Model aur "Death of the Career":** Gig work mein 3 parties hoti hain — (1) **Digital Platform** (jaise Uber), (2) **Independent Gig Worker** (driver), aur (3) **Client/Consumer** (sawari) — aur ek trip khatam hote hi teeno ka koi long-term farz nahi rehta. Aaj **Employeeless aur Infrastructure-less Organizations** (Uber ki apni cars nahi, OYO/Airbnb ke apne hotels nahi) bina workers ko payroll par rakhe arbon kamati hain, jisne purane "lifelong career" ko khatam kar diya hai.
- **Companies ka Fayda vs Workers ki Social Security par Asar:** Companies ko sasta labour, zero office kharcha, zero PF/pension zimmedari aur ek click par hire-and-fire milta hai. Workers ko **working hours ki flexibility**, boss ki daant se azaadi aur **multi-apping** (ek saath Uber + Ola chalana) ka mauka toh milta hai, par unka **social security net** (job security, paid leave, health/accident insurance, pension) chhin jaata hai aur weh algorithm ke rating-darr mein jeete hain.
- **New Economy aur Produsage:** Digital duniya mein [[thinker:Alvin Toffler]] ke **Prosumer** aur [[thinker:Axel Bruns]] ke ==Produsage== ne producer aur consumer ki deewar mita di hai (Wikipedia, memes, citizen journalism, Instagram reels jahan user hi content banata aur dekhta hai). Yahan tak ki social media influencers (jaise catchphrases par brand banane wale creators) aur online teachers ko khud apni personality ko 24x7 ek **product ki tarah bechna** padta hai.

## Indian States mein Migrant Labourers ki Samasyayein aur Lockdown Crisis

Sociologist **[[thinker:Jan Breman]]** ne Bharat ke gaon se shehar bhatakne wale mazdooron ko ==Footloose Labour== kaha hai. UP, Bihar, Jharkhand aur Odisha se Delhi, Maharashtra, Gujarat, Punjab aur Tamil Nadu ke informal sectors (construction, eent-bhatta, powerloom, dhabas) mein jaane wale inter-state migrants ko kai bhari samasyayon ka samna karna padta hai:

- **Host States mein Rozmarra ki Chunautiyan:** Thekedar (*mukadam*) ke karz-advance (**neo-bondage**) mein bandh kar aana; pehle ration card aur welfare schemes ka doosre rajya mein na chalna; voting power na hone se local netaon ki berukhi; gandi jhuggi-bastiyan; bhasha ki dikkat; aur local **"Sons of the Soil" nativism** ([[thinker:Myron Weiner]]) tatha police ka bhedbhav. Gaon mein peeche chhooti patniyon par kheti aur parivar ka bojh (**feminization of agriculture**) aa jaata hai.
- **2020 COVID-19 Lockdown Crisis:** Achanak lockdown lagte hi jab informal dihadi aur construction band hua, toh migrants ke paas na bachat thi na formal job contract — makan-malikon ne kiraye ke liye nikaal diya, khane ka sankat khada hua, aur train-bus band hone se laakhon mazdoor tapti dhoop mein hazaron kilometer **paidar reverse migration** karne ko majboor hue. Isi jhatke ke baad **One Nation One Ration Card (ONORC)**, **e-Shram portal** aur PM SVANidhi ko tezi se laagu kiya gaya.

## Bharat ke 4 New Labour Codes (2019–2020)

Sarkar ne 29 purane central labour laws ko mila kar **4 Labour Codes** banaye hain: (1) **Code on Wages (2019)**, (2) **Industrial Relations Code (2020)**, (3) **Code on Social Security (2020)**, aur (4) **OSHWC Code (2020)**.

- **Sakaratmak Pehlu:** Pehli baar **Gig aur Platform Workers** ko kanooni pehchan aur Social Security Fund (aggregators ke turnover se 1–2% yogdaan); poore desh ke liye **National Floor Wage**; har worker ko likhit appointment letter; inter-state migrants ke liye portable welfare; aur suraksha ke saath mahilaon ko night-shift ki anumati.
- **Chintayein aur Critique:** Industrial Relations Code mein bina sarkari ijazat chhatni (layoff/retrenchment) ki seema **100 se badha kar 300 workers** kar di gayi hai, **Fixed-Term Employment (FTE)** ko badhava mila hai, aur hartal (strike) se pehle 14-din ka notice zaroori kiya gaya hai — trade unions ka kehna hai ki isse formal workers ka job tenure aur collective bargaining kamzor padega. [[link:Paper 2 Unit 10 aur Unit 11 mein rural bondage, migration aur working-class mobilisation ke saath ise seedhe jodo.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1867',
        title: 'Karl Marx — Reserve Army of Labour',
        text: 'Das Kapital Ch. 25 mein bataya ki floating, latent aur stagnant berozgaron ki fauj wages ko kaise dabaye rakhti hai.',
      },
      {
        year: '1977–1979',
        title: 'Beechey & Bruegel — Feminist Reserve Army Debate',
        text: 'Veronica Beechey ne shadi-shuda auraton ko disposable buffer bataya; Irene Bruegel ne pink-collar segmentation joda.',
      },
      {
        year: '1991–2007',
        title: 'LPG Reforms, Footloose Labour & NCEUS Report',
        text: 'Jan Breman ne circular migrants ka dard likha; Arjun Sengupta (NCEUS) ne formal sector ka informalisation dikhaya.',
      },
      {
        year: '2008–2011',
        title: 'Axel Bruns (Produsage) & Guy Standing (Precariat)',
        text: 'Social media produsage aur global gig/contract workers ke asurakshit Precariat varg ki theory di.',
      },
      {
        year: '2019–2020',
        title: 'India Enacts Four New Labour Codes',
        text: '29 central labour laws ko 4 codes mein joda; gig aur platform workers ko pehli baar social security mein shamil kiya.',
      },
      {
        year: '2020–2021',
        title: 'COVID-19 Lockdown Migrant Exodus & e-Shram',
        text: 'Migrants ke paidal palayan ne informal asuraksha ujagar ki; ONORC aur e-Shram portal tezi se laagu hue.',
      },
      {
        year: '2023–2024',
        title: 'State Gig Worker Welfare Acts (Rajasthan/Karnataka)',
        text: 'Zomato, Swiggy, Blinkit aur Uber riders ke liye platform-cess aadharit welfare boards ki shuruat.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Agrarian Distress', text: 'Kheti ghatne aur karz se gaon ki "latent reserve army" shehar ki taraf nikalti hai' },
      { label: 'Circular Migration', text: 'Thekedar advance se "footloose labour" shehri construction aur sweatshops mein bandhta hai' },
      { label: 'Platform / Gig Shift', text: 'Yuva bina employer-employee bond ke Uber, Zomato aur Blinkit ke tripartite gigs mein aate hain' },
      { label: 'Portable Social Net', text: 'ONORC, e-Shram aur Social Security Code 2020 se suraksha-kavach banane ki koshish' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Formal Employment',
    rightTitle: 'Platform / Gig Economy Work',
    rows: [
      {
        aspect: 'Contract ka Dhancha',
        left: 'Bipartite formal employer–employee contract aur lifelong career',
        right: 'Tripartite (Platform–Gig Worker–Client) short task ("death of career")',
      },
      {
        aspect: 'Assets aur Kharcha',
        left: 'Company khud factory, office, gaadi aur machines ki malik hoti hai',
        right: 'Employeeless & asset-light firm; worker khud apni bike, petrol aur phone laata hai',
      },
      {
        aspect: 'Nigrani aur Azaadi',
        left: '9-to-5 fixed shift aur samne baitha human supervisor',
        right: 'Login/multi-apping ki chhoot, par algorithm timer aur rating penalty ka darr',
      },
      {
        aspect: 'Social Security Net',
        left: 'Kanooni PF, ESI, paid leave, gratuity aur trade union ka haq',
        right: 'Koi PF ya paid sick leave nahi; Social Security Code 2020 se nayi shuruat',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Reserve Army of Labour',
    meaning:
      'Marx ka concept ki capitalism berozgaron ki fauj (floating, latent, stagnant) ko wages dabane ke liye use karta hai — feminists (Beechey, Bruegel) ne dikhaya ki mahilayein iski sabse lachili buffer hain.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'The Gig Economy (Tripartite Model)',
    meaning:
      'Short-term digital tasks par tiki vyavastha jahan Platform, Gig Worker aur Client bina formal employment bond ke judte hain aur employeeless corporations banti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Footloose Labour & Neo-Bondage (Jan Breman)',
    meaning:
      'Jan Breman ka concept jo Bharat ke gaon se shehar bhatakne wale seasonal migrant mazdooron aur thekedar ke advance-karz bandhan ko darshata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Produsage & Prosumer (Axel Bruns / Toffler)',
    meaning:
      'New digital economy (Wikipedia, Instagram, memes) mein producer aur consumer ki boundary mitna, jahan users khud content banate aur consume karte hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The condemnation of one part of the working class to enforced idleness by the overwork of the other part.',
    context: 'Das Kapital mein Marx batate hain ki kaise Reserve Army ka darr dikha kar kaam par lage mazdooron se zyada kaam nichoda jaata hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Caste system is not merely a division of labour; it is also a division of labourers.',
    context: 'Annihilation of Caste — Bharat ke informal aur migrant labour market mein jaati-aadharit shoshan samajhne ki kunji.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2013 PYQ Pattern: Migrants, Gig Economy, Labour Codes aur Feminist Reserve Army!',
    body: 'Topic 6.3 Paper 1 aur Paper 2 ko jodne wala sabse high-scoring area hai! Dekho recent PYQs: Indian states ke informal sectors mein labour migrants ki problems (2025), Gig economy aur social security net (2024), Lockdown migrant crisis (2021), New Labour Codes (2020), Reserve army par feminist scholars (2019), Regulating informal labour (2019), aur Globalization & informalisation (2017, 2016, 2013). Har answer mein Jan Breman, Guy Standing, Veronica Beechey aur 4 Labour Codes zaroor likho.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Gig Economy ya Migrants par Sirf GS Jaisa Answer Likhna!',
    body: 'Sociology Optional mein GS jaisa sadharan nibandh mat likhna! Gig Economy ke answer mein Tripartite Model (Platform–Worker–Client), "Death of the Career", "Employeeless Organizations" aur Algorithmic Alienation likho. Migrant Labour ke answer mein Jan Breman ka "Footloose Labour & Neo-Bondage", Myron Weiner ka "Sons of the Soil" nativism, aur B.R. Ambedkar ka "Division of Labourers" use karo.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: Bharat ke 4 Labour Codes (W-I-S-O)',
    body: '29 kanoonon ko jodne wale 4 Labour Codes W-I-S-O se yaad rakho: (1) Wages Code 2019 (National Floor Wage), (2) Industrial Relations Code 2020 (300-worker layoff threshold & Fixed-Term Employment), (3) Social Security Code 2020 (Gig & Platform worker fund), aur (4) OSHWC Code 2020 (Inter-state migrant safety & appointment letters).',
  },
  {
    kind: 'answerBox',
    intro:
      'Labour and Society ka sociological adhyayan yeh dikhata hai ki global capitalism, patriarchy, migration aur state ke labour laws kaise kamgar varg ki shakti aur social security ko badalte hain.',
    points: [
      'Reserve army aur feminist critique: Marx ne berozgaron ki fauj se wages dabna dikhaya; feminists (Veronica Beechey, Irene Bruegel, Maria Mies) ne sabit kiya ki patriarchal breadwinner ideology mahilaon ko sabse sasta disposable buffer banati hai.',
      'Globalization aur informalisation: Corporate subcontracting, FDI deregulation aur jobless growth ne Bharat ke ~90% kamgaron ko informal sector mein dhakela, jahan regulation zaroori hai par data aur cost-loss ki rukawatein hain.',
      'Gig economy ka ubhaar: Tripartite platform model (Uber, Zomato, Blinkit) ne employeeless firms aur flexible multi-apping toh di, par lifelong career aur social security net chheen liya.',
      'Migrant labour aur Lockdown crisis: Jan Breman ke "footloose" inter-state migrants thekedar karz, welfare non-portability, slum badhali aur nativist bhedbhav jhelte hain — jo 2020 ke Lockdown palayan mein khul kar samne aaya.',
      'Four Labour Codes ka santulan: Bharat ke 4 naye codes gig workers ko social security aur floor wage dete hain, haalanki 300-worker layoff limit aur FTE par trade unions ne tenure ghatne ki chinta jatayi hai.',
    ],
    conclusion:
      '21st century mein aarthik raftaar ke saath portable social security (ONORC, e-Shram), living wage aur collective voice ka mel hi nyayapurna labour society bana sakta hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Marx ki Reserve Army of Labour aur uske feminist critique (Beechey, Bruegel), globalization-driven informalisation, tripartite Gig Economy aur digital Produsage, inter-state migrant labourers ke Lockdown sankat aur Bharat ke 4 New Labour Codes ka vishleshan.',
  mindMap,
  sections,
}