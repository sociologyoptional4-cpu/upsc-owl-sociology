import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 1.1 · Modernity & Emergence of Sociology',
  center: 'Birth of Sociology',
  subtitle: 'Teen Krantiyan -> Naya Samaj -> Naya Vigyan',
  branches: [
    {
      title: 'Intellectual Forces',
      color: 'lavender',
      thinkers: ['Montesquieu', 'Rousseau', 'Auguste Comte', 'Irving Zeitlin'],
      points: [
        'Renaissance humanism aur printing press ne Church ki monopoly todi',
        'Scientific Revolution ne dikhaya ki nature empirical rules se chalta hai',
        'Enlightenment ne reason, progress aur individual rights par zor diya',
        'Conservative reaction (Bonald, Maistre) ne order aur tradition ko bachaya',
      ],
    },
    {
      title: 'Material & Political Shocks',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'Max Weber', 'F. Tönnies'],
      points: [
        'French Revolution (1789) ne divine monarchy khatam ki aur order crisis laaya',
        'Industrial Revolution ne kaam ko ghar se factories mein shift kiya',
        'Shehri slums, wage labour aur class struggle ne gaon ke rishte badle',
        'Joint family nuclear units mein simti; divorce aur anomie badhe',
      ],
    },
    {
      title: 'Founding Thinkers & Lenses',
      color: 'mint',
      thinkers: ['Auguste Comte', 'Karl Marx', 'Émile Durkheim', 'Max Weber'],
      points: [
        'Comte ne Sociology naam diya (1839); Law of Three Stages banaya',
        'Marx: modernity matlab capitalism, alienation aur class struggle',
        'Durkheim: mechanical se organic solidarity; tez badlaav mein anomie ka darr',
        'Weber: rationalisation, bureaucracy aur modernity ka iron cage',
      ],
    },
    {
      title: 'Beyond Europe: USA & India',
      color: 'pink',
      thinkers: ['Robert Park', 'G.S. Ghurye', 'M.N. Srinivas', 'Yogendra Singh'],
      points: [
        'USA (Chicago School): shehri crime, slums aur social reformism par focus',
        'Eurocentrism critique: colonialism aur Ibn Khaldun ko ignore kiya gaya',
        'India: Bombay aur Lucknow Schools ne Indology aur fieldwork joda',
        'Aaj ki modernity: Swiggy-Zomato gig economy aur digital caste networks',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u1-02-emergence.webp',
    alt: 'Timeline showing Enlightenment, French Revolution, and Industrial Revolution leading to Sociology and Auguste Comte portrait',
    caption:
      'Sociology kisi ek thinker ka khayal nahi tha — Europe ki teen badi krantiyon ke takraav se janmi ek nayi jaroorat thi.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 1 Visual 02',
  },
  {
    kind: 'md',
    body: `## Modernity kya hai aur Sociology ki zaroorat kyun padi?

Aasaan shabdon mein samjho: aaj se char sau saal pehle ke kisi traditional gaon ki zindagi socho. Wahan aapke janm se hi tay ho jaata tha ki aap kya kaam karoge, kisse shaadi hogi, aur samaj mein aapki izzat kitni hogi — kisan ka beta kisan hi rehta tha aur raja ka hukm Bhagwan ki marzi maana jaata tha. Jab 16th se 19th century ke beech yeh purana dhancha toota, tab ==Modernity== aayi — ek aisi nayi vyavastha jahan janm ke bajaye ==tark (reason), science, vyakti ki azaadi, contracts, capitalism, nation-state aur anjaan shehri zindagi== centre mein aa gaye.

Jab laakhon log gaon chhod kar factory shehron mein aaye aur janta ne rajaon ke takht palat diye, tab dharm aur purani philosophy yeh samjhaane mein fail ho gayi ki achanak gareebi, hartal aur suicides kyun badh rahe hain. Yahin se ek aise vigyan ki zaroorat padi jo badalte samaj ke niyam pakad sake. [[trap:Sirf European Enlightenment ko credit dena adhoora sach hai — colonialism aur non-Western traditions jaise 1377 ke Ibn Khaldun ka Asabiyyah (social cohesion) bhi samaj-shastra ki neev mein the.]] Phir bhi modern academic discipline ke roop mein sociology Europe ki teen krantiyon ka result thi.

## Teen Krantiyan jinse Sociology nikli

### 1. Intellectual Kranti aur Conservative Reaction

Aasaan shabdon mein samjho: samaj par science tab tak apply nahi ho sakti jab tak insaan yeh na maane ki samaj ke niyam Bhagwan ne pathar par nahi likhe, balki insaanon ne banaye hain aur unhe samjha jaa sakta hai. Renaissance aur printing press ne Church ke gyaan par sawaal uthana sikhaya, aur Scientific Revolution ne dikhaya ki jaise suraj-chand niyamon se chalte hain, waise hi duniya tark se samjhi jaa sakti hai.

Lekin interesting baat yeh hai ki Sociology sirf un logon se nahi bani jo naya badlaav chahte the — balki unse bhi bani jo badlaav se darr rahe the! [[thinker:Irving Zeitlin]] batate hain ki France ki kranti ke baad conservative thinkers ko darr laga ki agar har koi sirf apni azaadi sochega toh parivar, dharm aur samaj bikhar jayega; isi darr mein unhone woh concepts khoj nikale jo samaj ko jod kar rakhte hain.

- **Enlightenment Pioneers:** [[thinker:Montesquieu]], [[thinker:Voltaire]] aur [[thinker:Rousseau]] ne ==reason, observation aur social contract== ko centre rakha aur maana ki samaj ko tark se sudhara jaa sakta hai.
- **Conservative Reaction:** [[thinker:Louis de Bonald]] aur [[thinker:Joseph de Maistre]] ne kranti ka virodh karte hue community, authority, family aur moral order par zor diya — yahi baad mein sociology ke core pillars bane.
- **Robert Nisbet ka Synthesis:** Progress aur order ki isi takraav se sociology ke 5 foundational unit-ideas nikle: community, authority, status, sacred aur alienation.

### 2. Political Kranti: French Revolution (1789)

Aasaan shabdon mein samjho: sadiyon tak raja aur Church ka darr samaj ko ek chatri ki tarah baandhe hue tha. 1789 ki French Revolution ne jab raja ko hataya aur Liberty, Equality, Fraternity ka ailaan kiya, toh logon ko citizenship toh mili par saath hi khooni chaos aur political uthal-puthal bhi aa gayi. Sawaal yeh khada hua ki jab purana darr aur parampara khatam ho jaaye, tab anjaan log shanti se ek saath kaise rahenge?

- **Social Order ka Crisis:** Feudal estates tootne se gulam praja ab sawal poochhne wale citizens ban gayi, jisse political stability ka naya crisis khada hua.
- **Comte ka Jawab:** [[thinker:Auguste Comte]] ne 1839 mein "sociology" shabd isi maqsad se diya ki ==Order aur Progress== ko ek saath laane wale scientific rules khoje jaa sakein.

### 3. Economic Kranti: Industrial Revolution aur Parivar mein Badlaav

Aasaan shabdon mein samjho: French Revolution ne rajneeti badli toh Industrial Revolution ne aam insaan ki roti, ghar aur rozmarra ki zindagi palat di. Bhaap ke engine aur factories ne kisanon ko gaon se nikaal kar dhuyen bhare shehron mein bheja jahan zindagi ghanton ki mazdoori par tik gayi. [[eg:Jaise aaj Bihar ya UP se youth Gurgaon ki factories aur Bengaluru ke gig-work mein jaata hai — haath mein cash aata hai par gaon ka suraksha-kavach chhoot jaata hai]], waise hi Europe mein slums aur class conflict badhe.

Ab step-by-step samjho ki **Industrial Society ne Western European Family ko kaise badla**. Pehle poora parivar ek hi khet ya craft workshop mein saath kaam karta tha — ghar hi kaam ki jagah, school aur sahara tha. Factory aane par kaam aur ghar pehli baar alag hue aur parivar teen hisson mein badal gaya:

- **Step 1 — Production se Consumption Unit:** Kaam factories mein jaane se ghar ab sirf aaram, kharche aur bachon ki parvarish ki jagah ban gaya; [[thinker:Friedrich Engels]] ne kaha ki mard ko bahar paid wage aur aurat ko ghar ke unpaid kaam mein simatne se gender inequality aur badhi.
- **Step 2 — Extended Kin se Nuclear Mobility:** Shehr ke chhote rooms aur job ke liye baar-baar shehar badalne se joint parivar tik nahi paaye, isliye [[thinker:Talcott Parsons]] ke mutabik ==isolated nuclear family== industrial economy ke liye zyada fit bani.
- **Step 3 — Authority, Choice aur Laslett Nuance:** Jab beta zameen ke intezar ke bajaye factory se khud kamane laga, toh shaadi mein baap ki pakad ghatti gayi aur pasand ki shaadi badhi (saath hi divorce bhi dikha); par historian [[thinker:Peter Laslett]] ne dikhaya ki chhote nuclear households Europe mein factories se pehle bhi the, isliye industry ne unhe paida nahi kiya balki tezi se badhaya. [[link:Paper 2 Unit 9 mein dekho ki Bharat mein urbanisation ne joint family ko mitane ke bajaye functional jointness mein kaise badla (I.P. Desai, A.M. Shah).]]

## Classical Thinkers: Ek Hi Modernity, Chaar Alag Diagnosis

Chaar bade founders ne ek hi badalte Europe ko dekha, par har ek ne alag wajah aur alag khatra pehchana — ek-ek karke aasaan bhasha mein samjho:

- **[[thinker:Auguste Comte]]:** Kranti ke baad France mein baar-baar hone wale dangon se pareshan Comte ne maana ki jab tak log andh-vishwas ya khokhle naaron ki jagah thos scientific sabooton se samaj ko nahi samjhenge, shanti nahi aayegi. [[eg:Jaise aaj NITI Aayog garibi ya kuposhan sudharne ke liye andaze ke bajaye data dashboards use karta hai, Comte sociology ko samaj sudhar ka positive science banana chahte the.]]
- **[[thinker:Karl Marx]]:** Marx ne dekha ki mazdoor din-raat factory mein ameer malikon ke liye maal banate hain par khud bhookhe rehte hain; unhone samjhaya ki capitalism insaan ko uske apne kaam aur insaniyat se kaat kar ==alienation== mein dhakel deta hai. [[eg:Tiruppur ya Surat ke garment worker ko dekho jo din bhar mehange jackets silta hai par na ek kharid sakta hai na kaam ki raftar tay kar sakta hai — yahi Marx ka alienation hai.]]
- **[[thinker:Émile Durkheim]]:** Durkheim ne poochha ki shehar ameer aur azaad hone ke baad bhi loneliness aur suicide kyun badhte hain? Unka jawab tha ==anomie== — jab badlaav itna tez ho ki purane naitik niyam toot jaayein aur naye rules ban na paayein, toh insaan dishaheen mehsoos karta hai. [[eg:Kota ke coaching hostels ya bade shehron mein akele rehne wale students jab bina samajik sahare ke bhari dabav jhelte hain, tab anomie saaf dikhti hai.]]
- **[[thinker:Max Weber]]:** Weber ko factory malik se zyada modernity ke thande rules, files aur calculation ki chinta thi; unhone chetavani di ki zaroorat se zyada efficiency insaan ko azaadi dene ke bajaye bureaucracy ke ==iron cage== mein qaid kar leti hai. [[eg:Aaj Bharat mein Swiggy-Zomato riders par app ka timer, rating penalty aur algorithm control Weber ke Iron Cage aur Marx ke Alienation ko ek saath zinda dikhata hai.]]

| Thinker | Modernity ka Central Engine | Sabse Bada Khatra | Key Concept |
| --- | --- | --- | --- |
| Auguste Comte | Scientific & moral evolution | Intellectual anarchy | Law of Three Stages |
| Karl Marx | Industrial capitalism | Exploitation & dehumanisation | Alienation & Class Struggle |
| Émile Durkheim | Rising division of labour | Tez badlaav mein normlessness | Anomie & Organic Solidarity |
| Max Weber | Bureaucratic calculation | Meaning aur freedom ka khona | Rationalisation & Iron Cage |

## Europe se USA aur Bharat tak ka Safar

Aasaan shabdon mein samjho ki Europe aur America ki sociology mein itna farak kyun tha: Europe mein sadiyon purana rajtantra aur feudalism toot raha tha, isliye wahan ke thinkers ne itihas aur capitalism par bade-bade macro-theories likhe. Lekin America mein koi purana rajtantra ya feudal jaagirdari nahi thi — wahan 1880–1920 ke beech shehron mein achanak laakhon immigrants, slums, crime aur racial tanav bhar gaye, isliye University of Chicago mein sociology ek practical shehar-sudhar mission ban gayi.

- **USA aur Chicago School:** [[thinker:Albion Small]], [[thinker:Robert Park]], [[thinker:Ernest Burgess]] aur reformer [[thinker:Jane Addams]] (Hull House) ne Chicago ki bastiyon mein empirical fieldwork karke ==social reformist orientation== ko aage badhaya.
- **Bharat mein Indian Synthesis:** [[thinker:G.S. Ghurye]], [[thinker:Radhakamal Mukerjee]], [[thinker:M.N. Srinivas]] aur [[thinker:Yogendra Singh]] ne Western theories ki andhi nakal ki jagah texts aur gaon ke fieldwork ko jod kar colonial modernity aur jaati-parivar ke badlaav ko samjha.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1377',
        title: 'Ibn Khaldun — Muqaddimah',
        text: 'Ilm al-umran aur Asabiyyah (social cohesion) ke zariye non-European proto-sociology ki shuruat.',
      },
      {
        year: '1400–1600',
        title: 'Renaissance & Humanism',
        text: 'Religious dogma par sawaal, printing press aur human reason ka ubhaar.',
      },
      {
        year: '1543–1687',
        title: 'Scientific Revolution',
        text: 'Copernicus se Newton tak: observation aur universal natural laws ka bharosa.',
      },
      {
        year: '1715–1789',
        title: 'European Enlightenment',
        text: 'Montesquieu, Voltaire, Rousseau: reason, empiricism aur social contract.',
      },
      {
        year: '1789',
        title: 'French Revolution',
        text: 'Monarchy & Church privilege khatam; citizenship aur social order ka naya crisis.',
      },
      {
        year: '1760–1840',
        title: 'Industrial Revolution',
        text: 'Factories, urbanisation, working class aur traditional family ka tootna.',
      },
      {
        year: '1838–1839',
        title: 'Comte coins "Sociology"',
        text: 'Social Physics se Positive Philosophy: samaj ka scientific study shuru.',
      },
      {
        year: '1892–1920s',
        title: 'USA Chicago School',
        text: 'Urban surveys, crime, race aur social reformist sociology ka ubhaar.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Enlightenment', text: 'Reason + empiricism ne sikhaya ki samaj badla ja sakta hai' },
      { label: 'French Rev (1789)', text: 'Old political hierarchy tooti -> Order ka sawaal utha' },
      { label: 'Industrial Rev', text: 'Factories, slums & nuclear family ne naye crises paida kiye' },
      { label: 'Conservative Push', text: 'Bonald-Maistre ne community & moral order bachane par zor diya' },
      { label: 'Sociology Born', text: 'Comte, Marx, Durkheim, Weber ne systematic discipline banaya' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Pre-Modern / Traditional Society',
    rightTitle: 'Modern Industrial Society',
    rows: [
      {
        aspect: 'Authority & Knowledge',
        left: 'Church, sacred tradition, divine kingship',
        right: 'Reason, science, secular constitutional law',
      },
      {
        aspect: 'Social Status',
        left: 'Ascribed by birth (estate, caste)',
        right: 'Achieved via education, market & merit',
      },
      {
        aspect: 'Economy & Work',
        left: 'Agrarian, household craft, guild ties',
        right: 'Factory wage labour, high division of labour',
      },
      {
        aspect: 'Solidarity (Durkheim)',
        left: 'Mechanical (likeness, strong collective conscience)',
        right: 'Organic (interdependence, individual autonomy)',
      },
      {
        aspect: 'Family & Residence',
        left: 'Rural community (Gemeinschaft), extended kin',
        right: 'Urban cities (Gesellschaft), nuclear units',
      },
      {
        aspect: 'Key Risk',
        left: 'Stagnation, dogma, rigid hierarchy',
        right: 'Anomie, alienation, bureaucratic iron cage',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Modernity',
    meaning:
      '18th–19th century ke baad ubhri samajik vyavastha jo reason, science, industrial capitalism, nation-state aur individual rights par tiki hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Law of Three Stages',
    meaning:
      'Auguste Comte ka niyam ki manav soch Theological (supernatural) se Metaphysical (abstract forces) aur fir Positive (scientific observation) stage mein jaati hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Anomie',
    meaning:
      'Tez industrial ya economic badlaav ke dauraan jab purane norms kamzor pad jaayein aur naye rules na banein — normlessness ki sthiti.',
    thinkerSlug: 'emile-durkheim',
  },
  {
    kind: 'keyTerm',
    term: 'Rationalisation & Iron Cage',
    meaning:
      'Tradition aur values ki jagah efficiency, rules aur bureaucracy ka badhna — jo azaadi dene ke bajaye insaan ko naye pinjre mein band kar sakta hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
    context: 'Enlightenment philosophy ko real industrial class struggle aur social transformation se jodne ka ailaan.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'Indian tradition is not frozen; it adapts to modernisation through selective synthesis of old and new institutions.',
    context: 'Paper 1 ki European modernity theory ko Indian social transformation se jodne wala bridge.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2013 PYQ Pattern: Sirf Enlightenment mat likhna!',
    body: 'Har teesre saal UPSC poochta hai ki Sociology Enlightenment/Renaissance ka product hai. 20-marker mein hamesha dono sides dikhao: (1) Enlightenment ka reason + progress, (2) Zeitlin ka Conservative Reaction (order & community), aur (3) Material shocks (French + Industrial Rev). Last mein non-Western critique (colonialism, Ibn Khaldun) add karne se topper marks milte hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Comte ne sab banaya!',
    body: 'Students likh dete hain ki Comte ne akela Sociology shuru kiya. Yaad rakho: Comte ne naam diya (1839), par Saint-Simon ne foundation rakhi, aur real empirical & theoretical pillars Marx, Durkheim aur Weber ne khade kiye.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Robert Nisbet ke 5 Unit-Ideas (Revision Mnemonic: CASAS)',
    body: 'Enlightenment + Conservative reaction ke takraav se Sociology ko 5 foundational ideas mile: Community (Tönnies), Authority (Weber), Status (Marx/Weber), Sacred (Durkheim), aur Alienation (Marx). Exam mein kisi bhi Emergence answer mein ye 5 words bullet point bana do!',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociology 18th–19th century Europe ke "Great Transformation" ki aulad hai, jab feudalism tootne se intellectual, political aur economic crisis ek saath aaye.',
    points: [
      'Intellectual base: Renaissance humanism aur Scientific Revolution ne empirical enquiry di; Enlightenment ne reason & progress ko centre mein rakha.',
      'Conservative reaction (Zeitlin): Bonald aur Maistre ne chaos ke darr se tradition, community aur moral order par dhyan khincha.',
      'Political shock (French Rev 1789): Monarchy khatam hone se citizenship badhi par social order ka crisis aaya — Comte ke Positivism ka trigger.',
      'Economic shock (Industrial Rev): Factories, urbanisation, slums aur nuclear family ke ubhaar par Marx (alienation), Durkheim (anomie) aur Weber (rationalisation) ne respond kiya.',
      'Critical nuance: Eurocentric narrative se aage dekhein toh colonialism aur Ibn Khaldun jaisi traditions bhi samaj-shastra ki history ka hissa hain.',
    ],
    conclusion:
      'Aaj bhi digital capitalism aur globalisation ke daur mein Sociology nayi "late modernity" ke sawaalon ko samajhne ka sabse zaroori auzar bani hui hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Sociology Europe ki teen krantiyon — Enlightenment, French Revolution aur Industrial Revolution — ke takraav se janmi, aur baad mein USA ke reformism aur India ke postcolonial context mein phaili.',
  mindMap,
  sections,
}
