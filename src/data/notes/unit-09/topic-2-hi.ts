import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.2 · Types and Forms of Family',
  center: 'Types & Forms of Family',
  subtitle: 'Classical Typologies • Kolenda ke 12 Forms • Developed Societies • Commercial Marriage',
  branches: [
    {
      title: 'Classical & Structural Types',
      color: 'lavender',
      thinkers: ['G.P. Murdock', 'W.L. Warner', 'Talcott Parsons', 'Eugene Litwak'],
      points: [
        'Family of Orientation (janm ka ghar) vs Procreation (shaadi ke baad) — W.L. Warner',
        'Residence: Patrilocal, Matrilocal, Neolocal, Avunculocal, Duolocal (Nayar Tharavad)',
        'Marriage: Monogamy vs Polygamy (Polygyny & Fraternal/Non-fraternal Polyandry)',
        'Parsons isolated nuclear vs Litwak modified extended & Willmott dispersed extended',
      ],
    },
    {
      title: 'Indian Jointness & Kolenda',
      color: 'yellow',
      thinkers: ['Irawati Karve', 'Pauline Kolenda', 'T.N. Madan', 'F.G. Bailey'],
      points: [
        'Karve: ek chhat, ek chulha, saajha property, common puja aur 3-generation rishte',
        'Core marker debate: Kolenda (residence), Bailey (property), Madan (3-gen depth)',
        'Pauline Kolenda ke 12 Family Forms ne simple nuclear-vs-joint binary ko toda',
        'Nuclear, Sub-nuclear, Single-person, Supplemented, Lineal, Collateral & Lineal-Collateral',
      ],
    },
    {
      title: 'Forms in Developed Societies',
      color: 'mint',
      thinkers: ['Edmund Leach', 'Rhona Rapoport', 'Michael Young', 'Jeffrey Weeks'],
      points: [
        'Leach ka "Cereal Packet Family" UK mein 38% (1961) se ghat kar 21% (2010) reh gaya',
        'Rhona Rapoport: family diversity ke 5 dimensions (organisational, cultural, class, life-course, cohort)',
        'Single-person (~30%), cohabiting (~7% US), single-parent, DINK, LAT aur LGBTQ+ chosen families',
        'Blended / step-families (~15–16% US children under 13) aur Symmetrical Family',
      ],
    },
    {
      title: 'Ritual se Commercial Marriage',
      color: 'pink',
      thinkers: ['Anthony Giddens', 'Ulrich Beck', 'Zygmunt Bauman', 'K.M. Kapadia'],
      points: [
        'Pavitra dharmik Sanskara se bajar-aadharit commercial event aur contract mein badlaav',
        'Big Fat Indian Wedding industry: wedding planners, destination resorts, pre-wedding shoots',
        'Algorithmic matchmaking (Shaadi.com) jahan CTC salary aur brand dekha jaata hai',
        'Consumerist dowry (SUVs/cash), green-card instrumental marriages aur individualisation',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-02-contemporary-kinship-trends.webp',
    alt: 'P1 Unit 9 infographic: Contemporary Trends in Kinship — Late-Modern Shifts in Intimacy & Domestic Form',
    caption:
      'Developed Western deshon se lekar shehri Bharat tak, parivaar ab kisi ek "cereal packet" sanche mein nahi bandha — yeh diverse living arrangements aur commercialised marriage forms mein badal chuka hai.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 02',
  },
  {
    kind: 'md',
    body: `## Kya Har Parivaar ko Sirf "Nuclear" ya "Joint" ke Dabbe mein Rakha Jaa Sakta Hai?

Aasaan shabdon mein samjho: jab hum TV par cornflakes ya home loan ka ad dekhte hain, toh hamesha ek hi picture-perfect parivaar dikhaya jaata hai — office jaane wala pati, muskurati hui housewife patni aur do pyare bache. Anthropologist [[thinker:Edmund Leach]] ne is media stereotype ko ==Cereal Packet Image of the Family== naam diya. Lekin asli duniya mein parivaar kisi ek sanche mein nahi dhalta; property ke niyam, naukri ka migration, divorce, buzurgo ki lambi umar aur badalte kanoon parivaar ke darjanon alag-alag roop banate hain.

Chalo sabse pehle family ke classical sociological classifications samjhein, fir Pauline Kolenda ke 12 Indian types, developed societies ke naye family forms aur shaadi ke "ritual se commercial" banne ke safar ko dekhein.

## 1. Family ke Classical Sociological Typologies

Sociology aur anthropology mein parivaar ko paanch mukhya aayamon (axes) par baanta jaata hai:

- **Vyakti ke Jeevan-Chakr ke Hisab se ([[thinker:W.L. Warner]]):** ==Family of Orientation== woh parivaar hai jisme aapka janm hota hai aur maa-baap va bhai-behen ke beech aap bade hote hain; ==Family of Procreation== woh parivaar hai jise aap bade hokar shaadi aur bachon ke janm ke baad khud banate hain.
- **Shaadi ke Baad Residence Rules ke Hisab se:** **Patrilocal / Virilocal** (dulhan shaadi ke baad dulhe ke pitaji ke ghar aati hai — North India), **Matrilocal / Uxorilocal** (dulha shaadi ke baad dulhan ki maa ke ghar aata hai — Meghalaya ke Khasi aur Garo), **Neolocal** (pati-patni naya alag flat lete hain — Bengaluru/Gurgaon ke IT couples), **Avunculocal** (joda dulhe ke mama ke ghar rehta hai — Trobriand Islanders), aur **Duolocal / Natolocal** (pati aur patni dono apne-apne mayke mein hi rehte hain aur pati sirf raat mein visiting husband bankar aata hai — Kerala ka paramparagat Nayar *Tharavad*).
- **Authority aur Descent ke Hisab se:** **Patriarchal / Patrilineal** (pitaji/buzurg mard ka hukm aur vansh) banam **Matrilineal** (maa ke naam se vansh aur zameen, haalanki authority aksar mama ya *Karanavan* ke paas hoti hai).
- **Spouses ki Sankhya ke Hisab se ([[thinker:G.P. Murdock]]):** **Monogamous** (ek samay mein ek hi jeevan-saathi, ya West mein divorce-remarriage wali **Serial Monogamy**) banam **Polygamous** — jisme **Polygyny** (ek mard ki kai patniyan) aur **Polyandry** (ek aurat ke kai pati, jaise Dehradun ke Jaunsar-Bawar ke Khasa aur Nilgiri ke Toda tribes mein **Fraternal Polyandry**, jahan pahadi zameen ko batware se bachane ke liye sage bhai ek hi patni share karte hain) aate hain.
- **Industrialisation aur Extension ke Hisab se:** [[thinker:Talcott Parsons]] ne **Isolated Nuclear Family** bataya, toh [[thinker:Eugene Litwak]] ne ==Modified Extended Family== diya (jahan nuclear parivaar alag flats mein reh kar bhi phone, paise aur madad se jude rehte hain).

## 2. Bharatiya Joint Family aur Pauline Kolenda ke 12 Family Forms

Bharatiya samaj mein [[thinker:K.M. Panikkar]] aur [[thinker:P.H. Prabhu]] ne **joint family** ko Hindu sabhyata ka aadarsh (*Ramayana* ke Ram-Bharat se lekar *Hum Saath-Saath Hain* tak) bataya hai. [[thinker:Irawati Karve]] ke mutabik traditional joint family ki 5 pehchan hain: **ek chhat (common roof), ek rasoi (common chulha), saajha property, common family worship aur kam se kam teen peedhiyon (3 generations) ke rishtedar**. Scholars mein is baat par debate rahi ki sabse zaroori shart kaun si hai: [[thinker:Pauline Kolenda]] ne common residence par, [[thinker:F.G. Bailey]] ne common property par, [[thinker:T.N. Madan]] ne 3-generational depth par, aur [[thinker:I.P. Desai]] ne **functional jointness** (alag reh kar bhi aapsi zimmedari aur buzurgo ka adhikar manna) par zor diya.

[[thinker:Pauline Kolenda]] ne dikhaya ki Bharat ke gharon ko sirf "nuclear" ya "joint" kehna adhoora hai; unhone co-residing relatives ke hisab se **12 Distinct Family Forms** ki mashhoor suchi di:

| Category Group | Kolenda ke 12 Family Forms | Ghar mein Kaun-Kaun Saath Rehta Hai? |
| --- | --- | --- |
| Nuclear & Sub-Nuclear (1–3) | 1. Nuclear • 2. Sub-Nuclear • 3. Single-Person | (1) Couple + kuware bache; (2) Vidhwa maa + bache ya kuware bhai-behen; (3) Akela vyakti |
| Supplemented Nuclear (4–5) | 4. Supplemented Nuclear • 5. Supplemented Sub-Nuclear | (4) Nuclear family + koi vidhwa/kuwara rishtedar (jaise vidhwa maa); (5) Sub-nuclear + extra rishtedar |
| Core Joint Forms (6–8) | 6. Lineal Joint • 7. Collateral Joint • 8. Lineal-Collateral Joint | (6) Vertical: maa-baap + 1 shaadishuda beta; (7) Horizontal: 2+ shaadishuda bhai; (8) Maa-baap + 2+ shaadishuda bete |
| Supplemented Joint & Other (9–12) | 9. Supp. Lineal • 10. Supp. Collateral • 11. Supp. Lineal-Collateral • 12. Other | (9–11) Types 6–8 ke saath koi kuwara/vidhwa rishtedar (jaise vidhwa bua); (12) Baaki bache hue ghar |

[[eg:Aaj shehron mein jab ek shaadishuda beta apni patni, bachon aur apni vidhwa maa ke saath 3BHK flat mein rehta hai, toh woh pure nuclear family nahi hai — Pauline Kolenda ki bhasha mein woh **Supplemented Nuclear Family** hai!]] [[link:Paper 2 Unit 7 ke answers mein Kolenda ke 12 types likhne se examiner turant extra marks deta hai.]]

## 3. Developed Societies mein Family ke Naye Roop (2018 PYQ)

Aasaan shabdon mein samjho: America, Britain, Europe aur Japan jaise developed post-industrial samajon mein ab Edmund Leach ka "cereal packet family" minority ban chuka hai! [[thinker:Rhona Rapoport]] aur [[thinker:Robert Rapoport]] ne dikhaya ki aaj **family diversity ek global trend hai** jiske 5 dimensions hain (*organisational, cultural, class, life-course, cohort*). UK ke official data mein shaadishuda couple + dependent children wale ghar **1961 ke 38% se ghat kar 2010 mein sirf 21%** reh gaye, aur unki jagah yeh naye family forms ubhre hain:

- **Single-Person Households (Akele Rehne Wale):** US aur UK mein single-person households **1961 ke ~12% se badh kar 2010 tak ~29–30%** ho gaye. Wajah: late marriage (US mein first marriage ki average age mardon ke liye 30 aur auraton ke liye 28 saal hai), high career mobility, aur financially independent elderly widows (US mein 65+ umar ki 70% vidhwayein aaj pension aur welfare healthcare ke dum par akele rehti hain, jo 1910 mein sirf 12% thin).
- **Cohabiting Couples (Live-in Relationships):** Bina shaadi kiye saath rehne wale partners (~7% US adults). Isse marriage ki purani sacredness ghati hai aur US mein ~40% bache unmarried mothers ke ghar paida hote hain, jisse "illegitimate child" ka purana kalank khatam ho raha hai.
- **Single-Parent (Matrifocal) Households:** UK mein ~7–10% aur US ke poor Black communities mein ~30% households single mothers chalati hain (divorce ya unmarried motherhood ke baad).
- **Blended / Reconstituted Families (Step-Families):** High divorce rate (30–50%) ke baad jab log dobara shaadi karte hain (US mein ~40% shaadiyon mein kam se kam ek partner ki remarriage hoti hai — Parsons ka divorce paradox!), tab step-parents aur step-siblings se मिलकर **blended families** banti hain. **America mein 13 saal se kam umar ke lagbhag 15% se 16% bache blended families mein rehte hain.**
- **Symmetrical Family aur DINK Couples:** [[thinker:Michael Young]] aur [[thinker:Peter Willmott]] ne ==Symmetrical Family== term diya jahan pati-patni dono bahar kamate hain aur ghar ka kaam va faisle milkar baant-te hain. Saath hi career aur lifestyle ke liye voluntarily childfree rehne wale **DINK (Double Income, No Kids)** couples badhe hain (US mein 40–44 umar ki ~15% auratein childfree rehti hain).
- **Same-Sex Unions, Chosen Families & LAT:** LGBTQ+ couples ke legally recognised families aur [[thinker:Jeffrey Weeks]] ke ==chosen families== (supportive doston ka parivaar), **LAT (Living Apart Together)** couples, aur pets ko bache ki tarah paalne wale **multispecies households**.

## 4. Marriage ka Badalta Roop: ‘Ritual’ se ‘Commercial’ Outlook (2023 PYQ)

2023 mein UPSC ne ek behad shandaar sawaal poochha: *vivah ek ‘ritual’ (pavitra riti) se badal kar ‘commercial’ (bajaru/vyavsayik) kyun ban gaya hai?* Pehle shaadi gaon ke aangan mein pandit/qazi, kul-devta aur biradari ke beech hone wala ek dharmik sanskar thi. Aaj neoliberal capitalism, consumerism, Bollywood media aur individualism ne shaadi ko ek **multi-billion-dollar commercial industry** aur **calculated deal** bana diya hai:

- **"Big Fat Wedding" Industry aur Conspicuous Consumption ([[thinker:Thorstein Veblen]]):** Aaj shaadi aस्था se zyada daulat ke dikhawe (status display) ka event ban gayi hai — Udaipur ya Thailand mein destination weddings, corporate wedding planners, Sabyasachi lehengas, drone shoots, pre-wedding choreography aur Instagram reels ke liye banayi gayi Baudrillardian *hyperreality*.
- **Algorithmic & Corporate Matchmaking:** Parivaar ke panditji ya rishtedaron ki jagah ab *Shaadi.com, BharatMatrimony* aur *EliteMatrimony* jaise paid portals ne le li hai, jahan rishta gun-dosh se nahi balki **annual CTC package, NRI green-card, brand value aur credit score** ke filters se tay hota hai.
- **Rituals ka Commodification (Bollywood Effect):** Yash Raj aur Karan Johar ki filmon ne Punjabi *Karwa Chauth*, *Joota Chupai*, bachelor/bachelorette parties aur diamond ring proposals ko poore Bharat mein ek mehanga commercial trend bana diya hai.
- **Commercialised Dowry (Dahej ka Bajarikaran):** Anti-dowry laws ke bawajood consumerism ne dahej ko aur bada bana diya hai — jahan dulhe ki boli uske IAS/IIT/corporate package ke hisab se luxury SUVs, flats aur cash mein lagti hai (yahan tak ki kai jagah Muslim shaadiyon mein bhi Meher ko Rs 11 ka token rakh kar gaadi aur dahej maanga jaata hai).
- **Contractual & Instrumental Marriages:** Prenuptial agreements (property bachane ke contracts), videshi citizenship ya visa paane ke liye ki gayi **instrumental marriages**, aur [[thinker:Anthony Giddens]] ka conditional *pure relationship* dikhata hai ki shaadi mein sacred tyag ki jagah "cost-benefit calculation" badh gaya hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1949',
        title: 'G.P. Murdock — Nuclear & Polygamous Taxonomy',
        text: '250 samajon ke adhyayan se nuclear, polygyny, polyandry aur extended family forms ko classify kiya.',
      },
      {
        year: '1955–1960',
        title: 'Parsons vs Litwak — Isolated vs Modified Extended',
        text: 'Parsons ne isolated nuclear family bataya; Litwak ne dikhaya ki modified extended kin ties phone aur madad se zinda rehte hain.',
      },
      {
        year: '1968',
        title: 'Pauline Kolenda — 12 Indian Family Forms',
        text: 'Simple joint-vs-nuclear binary ko tod kar supplemented nuclear aur lineal-collateral samet 12 types diye.',
      },
      {
        year: '1973',
        title: 'Young & Willmott — The Symmetrical Family',
        text: 'Developed samajon mein dual-earner aur domestic kaam baantne wale conjugal parivaar ki pehchan ki.',
      },
      {
        year: '1982',
        title: 'Rhona & Robert Rapoport — Global Family Diversity',
        text: 'UK mein "cereal packet" nuclear family 38% (1961) se ghat kar 21% (2010) reh gayi; 5 dimensions of diversity ubhre.',
      },
      {
        year: '1990s–2020s',
        title: 'Blended, Chosen Families & Commercial Marriage',
        text: '~15–16% US bache blended families mein, ~30% single-person homes, LGBTQ+ chosen families aur multi-billion wedding industry.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Ritual Marriage Outlook',
    rightTitle: 'Contemporary Commercial Marriage Outlook',
    rows: [
      {
        aspect: 'Mool Bhavna (Core Meaning)',
        left: 'Pavitra dharmik Sanskara, Dharma aur vansh parampara',
        right: 'Status display (Veblen), lifestyle contract aur event management',
      },
      {
        aspect: 'Matchmaking ka Zariya',
        left: 'Buzurg, rishtedar aur kul-purohit (Pandit / Bicholiya)',
        right: 'Paid matrimonial apps (Shaadi.com), elite bureaus aur dating apps',
      },
      {
        aspect: 'Samaroh ka Swaroop',
        left: 'Ghar ke aangan aur biradari ke beech kai dinon ke riti-riwaj',
        right: 'Wedding planners dwara 2-day destination resort package aur pre-wedding shoot',
      },
      {
        aspect: 'Pasand ka पैमाना (Criteria)',
        left: 'Jaati, gotra, khandan ki izzat aur kundali milan',
        right: 'Annual CTC salary package, NRI visa status aur personal lifestyle',
      },
      {
        aspect: 'Len-Den (Exchange)',
        left: 'Symbolic Stridhan, Meher ya Bhaat ki parivarik rasmein',
        right: 'Commercialised dowry (SUVs/flats), gift registries aur pre-nuptial contracts',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Cereal Packet Image of the Family (Edmund Leach)',
    meaning:
      'Media aur vigyapanon mein dikhaya jaane wala stereotypic parivaar (kamaane wala pati, housewife patni aur do bache) jo asli duniya ki family diversity ko chhupata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Symmetrical Family (Michael Young & Peter Willmott)',
    meaning:
      'Developed industrial samajon ka woh modern nuclear parivaar jahan pati aur patni dono bahar naukri karte hain aur ghar ki zimmedariyan va faisle mil-baant kar lete hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Blended / Reconstituted Family',
    meaning:
      'Divorce ya spouse ki mrityu ke baad dobara shaadi karne se bana parivaar jisme step-parents aur step-siblings saath rehte hain (US mein 13 saal se chhote ~15–16% bache).',
  },
  {
    kind: 'keyTerm',
    term: 'Supplemented Nuclear Family (Pauline Kolenda)',
    meaning:
      'Kolenda ke 12 Indian family forms mein se ek, jisme ek nuclear couple aur unke bachon ke saath koi unmarried ya vidhwa rishtedar (jaise vidhwa maa) saath rehti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Mandatory Fact Check: Blended Families ka Sahi Data (15–16%)',
    body: '2018 ke PYQ ("new forms of family in developed societies") mein hamesha sahi demographic data likho: UK mein traditional married-with-children ghar 38% (1961) se ghat kar 21% (2010) reh gaye aur single-person households ~30% ho gaye; US mein 13 saal se kam umar ke ~15% se 16% (kabhi 50% mat likhna!) bache blended/step-families mein rehte hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: '2023 Commercial Marriage Question mein "Rituals Khatam Ho Gaye" Mat Likhna!',
    body: 'Jab "ritual to commercial" marriage par answer likho, toh yeh mat kaho ki rituals gayab ho gaye hain. Asal sociological point yeh hai ki rituals ka hi commodification ho gaya hai — Haldi, Mehendi, Sangeet aur Karwa Chauth ko Bollywood, wedding planners aur Instagram hyperreality ne ek commercial product bana diya hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Rapoport ke 5 Dimensions of Family Diversity (Mnemonic: OCCLC)',
    body: 'Developed societies mein family diversity samjhane ke liye Rhona aur Robert Rapoport ke 5 points yaad rakho: Organisational (dual-earner vs single-parent), Cultural/Ethnic, Class, Life-course (newlywed vs elderly widow living alone), aur Cohort.',
  },
  {
    kind: 'answerBox',
    intro:
      'Aadhunik samaj mein parivaar aur vivah kisi ek Western nuclear sanche mein dhalne ke bajaye developed deshon aur Bharat dono mein nayi vividhta (diversity) dikha rahe hain.',
    points: [
      'Classical & Indian typologies: Warner (orientation/procreation) aur Murdock ke residence/marriage types se aage badh kar Pauline Kolenda ke 12 family forms (supplemented nuclear, lineal-collateral joint) Bharatiya gharon ki asli banawat pakadte hain.',
      'Developed societies mein diversity (Rapoport): UK mein "cereal packet" family 38% (1961) se 21% (2010) par aa gayi; single-person households (~30%), cohabitation, lone-parent homes, DINK couples aur Young & Willmott ki Symmetrical Family tezi se badhe.',
      'Blended aur Chosen families: Divorce aur remarriage ne blended families (~15–16% US children under 13) banaye, jabki LGBTQ+ movement ne non-biological "chosen families" (Jeffrey Weeks) ko janm diya.',
      'Ritual se Commercial marriage: Consumer capitalism, destination wedding planners, CTC-filtered matrimonial apps, Bollywood hyperreality aur badhte dahej ne pavitra vivah sanskar ko status display aur market transaction mein badal diya hai.',
    ],
    conclusion:
      'Is प्रकार aaj family aur marriage koi pathar ki lakeer nahi, balki emotional zaroorat, bajar ki takaton aur sanskritik badlaav ke beech lagatar badalta hua ek lachila dhancha hain.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Family ke classical typologies (Warner, Murdock, Parsons, Litwak), Pauline Kolenda ke 12 Bharatiya family forms, developed societies mein ubharte naye family forms (Rapoport, Leach, Young & Willmott, blended aur chosen families) aur vivah ke "ritual se commercial" banne ka vishleshan.',
  mindMap,
  sections,
}