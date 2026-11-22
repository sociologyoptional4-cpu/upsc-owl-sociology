import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 11.3 · Marxist Sociology (A.R. Desai)',
  center: 'Dialectical aur Marxist Nazariya',
  subtitle: 'Historical Materialism • Rashtravad ke 5 Phase • Capitalist State',
  branches: [
    {
      title: 'Dialectical Buniyaad',
      color: 'lavender',
      thinkers: ['Karl Marx', 'A.R. Desai', 'D.D. Kosambi', 'Ramkrishna Mukherjee'],
      points: [
        'Aarthik infrastructure (mode of production) kanooni aur rajneetik superstructure ko tay karta hai',
        'Forces aur relations of production ke beech ka virodhabhas samajik badlav laata hai',
        'Functionalist harmony aur consensus ki jagah class exploitation aur sangharsh par zor diya',
        'Indology ki sthir dharana ko todte hue sansthaon ko aitihasik class dynamics mein dekha',
      ],
    },
    {
      title: 'Rashtravad ke 5 Phase',
      color: 'yellow',
      thinkers: ['A.R. Desai', 'R.P. Dutt', 'Bipan Chandra'],
      points: [
        'Rashtravad koi aalaukik cheez nahi, balki British colonial aarthik policies ka byproduct tha',
        'Phase 1–2: Ram Mohan Roy ke reformist elite se lekar INC ke early moderate vakilon tak',
        'Phase 3: Swadeshi andolan jisme lower-middle class aur naujawan jud gaye',
        'Phase 4–5: Gandhi ji ka mass movement jise industrial capitalist class ne fund aur steer kiya',
      ],
    },
    {
      title: 'Azaadi ke Baad ka Capitalist State',
      color: 'mint',
      thinkers: ['A.R. Desai', 'Charles Bettelheim', 'Pranab Bardhan'],
      points: [
        'Welfare State aur Socialist Pattern of Society ke sarkari daave ko be-naqab kiya',
        'Mixed economy asal mein state-assisted capitalism tha jo private monopolies ko subsidy deta tha',
        'Land reforms aur Green Revolution ne kisan mazdooron ko bechakar Kulaks ko ameer banaya',
        'Samvidhan ne property rights ko suraksha di aur police ke dam par mazdoor andolan kuchle',
      ],
    },
    {
      title: 'Subaltern Nazariya aur Aalochana',
      color: 'pink',
      thinkers: ['Ranajit Guha', 'David Hardiman', 'B.R. Ambedkar', 'Gail Omvedt'],
      points: [
        'Subaltern school ne economic reductionism theek karke grassroots autonomy ko aage laya',
        'Daliton, adivasiyon aur kisan vidrokhiyon ko historical agency dekar sociology enrich ki',
        'Desai par jaati ko kewal economic class mein sametne ka aarop laga (Ambedkar critique)',
        'Dharmik bhavnaon, bhasha aur kshetriyata ki azaad taqat ko thoda kam aanka gaya',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u01-01-indian-perspectives-grid.webp',
    alt: 'P2 Unit 1 infographic: Perspectives on Indian Society — Three Methodological Lenses on Indian Society',
    caption:
      'A.R. Desai ke Marxist nazariye ne Indology ke aadarshvad aur functionalism ke gaon-prem ko tod kar dikhaya ki kaise rajya aur aarthik dharatal capitalist class ke hit mein kaam karte hain.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 1 Visual 01',
  },
  {
    kind: 'md',
    body: `## Marxist Sociology Kya Hai, aur Isne Bharatiya Samajshastra ko Kaise Badla?

Aasaan shabdon mein samjho: Marxist sociology samaj ko kisi shant ya taalmel se chalte hue parivaar ki tarah nahi dekhti, balki ise aarthik shoshan, varg sangharsh (class struggle) aur aapas ke virodhabhas (contradictions) ke aaine mein dekhti hai. [[thinker:Karl Marx]] ke historical materialism ke anusaar, kisi bhi samaj ki asli buniyaad uska aarthik dhancha (mode of production aur property relations) hoti hai; kanoon, rajneeti, dharm aur jaati toh is aarthik buniyaad par tiki hui imarat (superstructure) hain. Bharat mein is nazariye ne ek nayi roshni daali: jab Indology purane granthon ki pooja kar rahi thi aur structural-functionalism gaon ke shant bhaichare ke geet gaa raha tha, tab Marxist vidwano ne seedha sawal poocha—zameen kiski hai, munafa kiski jeb mein jata hai, aur sarkari police kiske hit mein kisanon par lathi chalati hai?

Bharat mein is kranti ke agrani vidwan the Bombay University ke professor [[thinker:A.R. Desai]] (1915–1994). Desai ne Bharatiya samajshastra mein ==Dialectical Perspective== (dwandvatmak nazariya) shuru kiya. Unka saaf kehna tha ki Bharat ki samajik sansthaon ko kewal prachin shastron ya akele gaon ke adhyayan se nahi samjha ja sakta; humein yeh dekhna hoga ki British raj ke capitalism ne yahan ke aarthik dharatal ko kaise toda aur azaadi ke baad Bharatiya rajya (State) ne kaise ameer capitalists ka rasta saaf kiya.

## A.R. Desai ke "Dialectical Perspective" ke Mukhya Lakshan

Apni mahan kitabon *Social Background of Indian Nationalism* (1948) aur *Rural Sociology in India* (1969) mein Desai ne historical materialism ka upyog kiya:

- **Aarthik Buniyaad ki Prathamikta:** Desai ne bataya ki parivaar, jaati ya sarkar mein hone wale badlav asal mein zameen ke kanoon, technology aur production ke rishton mein hone wale badlavon se nikalte hain.
- **Dwandvatmak Virodhabhas (Dialectical Contradiction):** Samaj dheere-dheere bina kisi jhatke ke nahi badalta. Jab production ke auyar (forces of production) aage nikal jate hain aur purane property relations unhe rokte hain, tab varg sangharsh peda hota hai, jisse purani vyavastha toot-ti hai aur naya samaj banta hai.
- **Aitihasik Context mein Samaj ko Dekhna:** Desai ne is baat ko bilkul kharij kiya ki Bharat hazaron saal se ek sthir ya adhyatmik desh raha hai. Unhone dikhaya ki yahan ki jaati aur kisan vyavastha samay-samay par badli hai—pehle pre-colonial feudalism, fir British loot, aur azaadi ke baad modern market capitalism.
- **Jaati ko Class ke Aaine mein Dekhna:** Shastron ke aadarshvadi purity-pollution ke bajaye, Desai ne jaati ko zameen aur shram ke shoshan se jod kar dekha. [[eg:Agrarian Bharat mein shuru se yahi dekha gaya ki ucch jaati ke paas kheti ki sari zameen hoti thi, jabki Dalit aur pichhde log unke khet par bina zameen ke bandhua mazdoor bankar kaam karte the.]]

| Aayam | Structural Functionalism (Srinivas) | Marxist / Dialectical Sociology (Desai) |
| --- | --- | --- |
| Samaj ki Chhavi | Santulit, jura hua organism jo sthirta chahta hai | Bhedbhav aur shoshan se bhara hua varg-sangharsh |
| Mukhya Focus | Samajik order, sanskritik mobility (Sanskritization) | Aarthik shoshan, property rights aur class struggle |
| Jaati ka Nazariya | Jajmani parsparikta aur ritual ranking | Kheti ke shoshan ko chupane wala ek vichardharak naqab |
| Rajya (State) ka Role | Janta ki bhalai karne wali ek neutral welfare agency | Ameer capitalists aur landlords ke hit mein kaam karne wala instrument |
| Badlav ki Disha | Dheema sanskritik lachilapan aur modern azaadi | Kisan-mazdoor aandolanon aur kranti se bada badlav |

## Bharatiya Rashtravad ke Paanch Aitihasik Phase

*Social Background of Indian Nationalism* (1948) mein Desai ne dikhaya ki rashtravad koi aakash se gira hua adhyatmik jazba nahi tha, balki British colonial shasan ka ek aarthik natija tha. Angrezon ne railway chalayi, kanoon banaye, kheti ka commercialization kiya aur modern schools khole; isse gaon ki aatmanirbharta tooti aur naye modern varg (classes) peda hue. Desai ne rashtravad ke vikas ke 5 dialectical phases bataye:

1. **Phase 1 (19th Century ki shuruat se 1885):** Bahut narrow social base tha, jiska netritva Raja Ram Mohan Roy jaise aadhunik vicharon wale intellectuals ne kiya. Yeh varg modern education, press ki azaadi aur kanooni sudhar chahta tha, jo ubharte hue modern middle class ki apekshaon ko darshata tha.
2. **Phase 2 (1885 se 1905):** 1885 mein Indian National Congress (INC) bani. Is daur mein padhe-likhe liberal vakil aur doctors (Moderate leaders) ka dabdaba tha. Unka rasta peaceful petitions aur prayers ka tha, aur unki maang civil service aur councils mein Bharatiya ameer varg ko hissa dilane tak seemit thi.
3. **Phase 3 (1905 se 1918):** Swadeshi andolan aur Lal-Bal-Pal ka extremist daur shuru hua. Andolan ka aadhar shehri lower-middle class aur chhatron tak faila. Polite petitions ki jagah boycott, hartal aur rashtriya shiksha ne li.
4. **Phase 4 (1918 se 1934):** Gandhi ji ke netritva mein Non-Cooperation aur Civil Disobedience ka mass movement chala. Lakho kisan aur factory mazdoor sadkon par utre; par Desai ne dikhaya ki is poore aandolan ki steering Bharat ke bade industrial capitalists ke haath mein thi. Capitalists ne Congress ko funding di taaki janta ka gussa kisi socialist kranti mein na badal jaye.
5. **Phase 5 (1934 se 1939 aur aage):** Congress ke andar varg virodhabhas khul kar samne aaya. Congress Socialist Party, Communist Party, All India Kisan Sabha aur trade unions ne azaad kisan-mazdoor aandolan shuru kiye. Mazdooron ko yeh ehsas hua ki Congress ki bourgeois leadership unhe kewal pressure group ki tarah use kar rahi hai, par asli azaadi ameer varg ke liye taiyar ho rahi hai.

## Azaadi ke Baad ka Capitalist State aur Vikas ka Rasta

*India’s Path of Development: A Marxist Approach* (1984) mein Desai ne "Socialist Pattern of Society" aur "Welfare State" ke sarkari naaron ki dhajjiyan uda deen:

- **Welfare State ka Sach:** Desai ne welfare state ke 3 paimane rakhe: (1) har nagrik ko roti, kapda, makaan aur rozgar ki guarantee; (2) ameer-gareeb ke antar ko lagatar ghatana; aur (3) janta ko asli loktantrik shakti dena. Bharat in teeno paimanon par poori tarah fail saabit hua.
- **Poonjiwadi Vikas ka Rasta (Capitalist Path of Development):** Desai ne bataya ki azaadi ke baad ka Bharatiya rajya ek ==bourgeois-landlord state== tha:
  - **Gramin Ilaqe mein Kulaks ka Udhyan:** Zamindari khatam toh hui, par zameen gareeb khet-mazdoor ko nahi mili; balki madhyam aur ucch jaati ke rich farmers (Kulaks) mazboot ho gaye. Green Revolution aur Community Development ki sarkari subsidies ne ameer kisanon ko aur ameer banaya, jabki chote kisan zameen se bedakhal hokar mazdoor ban gaye.
  - **Mixed Economy ka Asli Chehra:** Sarkari sector (Public sector) koi samajwad nahi tha; yeh private capitalists ki sewa ke liye banaya gaya tha. Railway, steel, bijli aur baandh jaise bhari udyog sarkar ne apne kharche par banaye kyunki private tatun ke paas itna paisa nahi tha. Fir sarkar ne inhi cheezon ko saste daam par Tata-Birla ko becha taaki unka munafa asmaan chhooye.
  - **Bourgeois Samvidhan aur Daman:** Samvidhan mein Fundamental Rights ke zariye private property aur vyapar ki azaadi ko toh adalat se surakshit kanooni haq banaya gaya, par samaan rozi-roti aur barabari ko Directive Principles ke naam par bina kisi guarantee ke chhod diya gaya. Mazdoor jab bhi strike karte the, police unpar lathiyan chalati thi.

## Marxist aur Subaltern Nazariye ne Samajshastra ko Kaise Amrit Diya

1970 ke dashak tak Bharatiya samajshastra structural-functionalism ke gaon-prem aur Indology ke shastron se thak chuka tha. Tab Marxist aur Subaltern nazariyon ne ise naya jeevan diya:

- **Class aur Political Economy ko Centre mein Lana:** Marxist sociology ne dikhaya ki samajik sachai samajhne ke liye mandir aur mantra dekhne se kaam nahi chalega; zameen, mazdoori, karz aur police ki lathi ko dekhna padega.
- **Subaltern Perspective (Neeche se Itihas):** [[thinker:Ranajit Guha]] (*Elementary Aspects of Peasant Insurgency*), David Hardiman aur [[thinker:Gail Omvedt]] ne traditional Marxism ki kamiyon ko door kiya. Unhone dikhaya ki kisan aur Dalit sirf communist party ke order par nahi chalte the; unka apna azaad aatm-samman aur vidrokhi chetna thi, jo colonial masters aur Congressi netaon dono ke khilaf barabar ladi.
- **Dalit aur Shoshit Vargon ko Aawaz:** In dono nazariyon ne milkar Daliton, adivasiyon aur kisan mahilaon ko kitabon ke chote footnote se nikal kar itihas ke mukhya kirdaar ke roop mein sthapit kiya.

## Desai ke Marxist Nazariye ki Seemayein aur Aalochana

Halanki Desai ne ek kadi aur behtareen aarthik tasveer pesh ki, par unke is dharatal par bhi kuch zaroori aalochanaen samne aayi:

- **Economic Reductionism (Har Cheez ko Paisa Samajhna):** Desai ne jaati ko sidhe economic class maan liya, jaise jaati aur kuch nahi bas garibi hai. [[trap:B.R. Ambedkar ka mashhoor quote yaad rakhein: Ambedkar ne kaha tha ki jaati kewal "division of labour" nahi hai, balki yeh "division of labourers" hai—ek aisi seedhi jisme log ek doosre se nafrat karne ke liye dharmik roop se train kiye gaye hain, jisse mazdoor class aapas mein kabhi ek nahi ho pati.]]
- **Sanskritik aur Dharmik Aayamon ko Kam Aankna:** Dharm, bhasha aur kshetriyata ke jazbaat logon ke dilon mein kitne gehre hain, ise Desai ne kewal "bourgeois propaganda" maan liya; yahi kaaran hai ki communalism aur dharamik punarjagran ko unka model theek se decode nahi kar saka.
- **European Sanche mein Bharat ko Fit Karna:** Unhone European itihas ke stages (feudalism to capitalism) ko Bharat par lagane ki koshish ki, jabki Bharat ka jaati-dhancha aur paramparaen European feudalism se kafi alag aur jatil thin.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1948',
        title: 'Social Background of Indian Nationalism',
        text: 'A.R. Desai ne apni PhD thesis mein historical materialism ke zariye rashtravad ke vikas ko samjhaya.',
      },
      {
        year: '1960',
        title: 'Recent Trends in Indian Nationalism',
        text: 'Azaadi ke baad monopoly capitalist class aur sarkar ke aapas ke gathjod ka khulasa kiya.',
      },
      {
        year: '1969',
        title: 'Rural Sociology in India',
        text: 'Gaon ke adhyayan ko functional harmony se nikal kar kisan sangharsh aur kheti ki class divide par laya.',
      },
      {
        year: '1975',
        title: 'State and Society in India: Essays in Dissent',
        text: 'Emergency ke aaspas rajya ke damankari aur anti-democratic chehre ko be-naqab kiya.',
      },
      {
        year: '1979–1986',
        title: 'Peasant Struggles in India',
        text: 'Sadiyon se chale aa rahe adivasi aur kisan vidrokhi aandolanon ka vyavasthit itihas likha.',
      },
      {
        year: '1984',
        title: 'India’s Path of Development',
        text: 'Welfare State ke naare ko jhootha sabit karke dikhaya ki Bharat poonjiwadi raah par chal raha hai.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Colonial Loot', text: 'British capitalism ne gaon ki arthvyavastha tod kar naye classes peda kiye' },
      { label: 'Bourgeois INC', text: 'Congress ke netritva ko industrial capitalists ne fund aur steer kiya' },
      { label: 'Capitalist State', text: '1947 ke baad sarkar ne Tata-Birla ke munafey ke liye infrastructure banaya' },
      { label: 'Kulakization', text: 'Land reforms aur Green Revolution ne kisan mazdooron ko bechakar Kulaks banaye' },
      { label: 'Subaltern Kranti', text: 'Ranajit Guha aur Omvedt ne kisanon aur Daliton ki azaad chetna ko samne laya' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Desai’s Marxist Sociology',
    rightTitle: 'Subaltern Studies (Ranajit Guha)',
    rows: [
      {
        aspect: 'Mukhya Adhyayan ki Ikai',
        left: 'Economic class structure, mode of production, national political parties',
        right: 'Grassroots chetna, local star par azaad vidroh, lok-sanskriti',
      },
      {
        aspect: 'Kisanon ki Bhoomika',
        left: 'Kisanon ko sangharsh jeetne ke liye party vanguard ki zaroorat hoti hai',
        right: 'Kisan rajneeti shuru se hi autonomous aur azaad dharatal par chalti hai',
      },
      {
        aspect: 'Rashtravad par Nazariya',
        left: 'Sabhi vargon ka movement jise national industrial bourgeoisie ne steer kiya',
        right: 'Elite logon ka kanooni daayra jisne janta ke azaad vidroh ko dabaya',
      },
      {
        aspect: 'Sanskriti ko Dekhna',
        left: 'Ideological superstructure jo zyadatar aarthik buniyaad se tay hota hai',
        right: 'Prateekon, lok-dharm aur vidroh ki ek azaad sanskritik shakti',
      },
      {
        aspect: 'Kiske Khilaf Ladai Thi',
        left: 'Functionalist consensus models aur capitalist vikas ke naare',
        right: 'Colonial afsaron ka itihas aur Congressi netaon ki jhoothi prashansa',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Dialectical Perspective',
    meaning:
      'Historical materialism par aadharit samajshastriya tareeqa jo samajik badlav ko material virodhabhas aur class struggle se dekhta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Bourgeois-Landlord State',
    meaning:
      'A.R. Desai ke anusaar azaadi ke baad ka Bharatiya rajya jo shehri capitalists aur gramin landlords ke hiton ki raksha karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Capitalist Path of Development',
    meaning:
      'Desai ka yeh siddhant ki Bharat ka mixed economy model samajwadi nahi, balki private monopoly capitalism ko badhava dene wala rasta tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Subaltern Perspective',
    meaning:
      'Ranajit Guha dwara vikasit nazariya jo elite itihas ko kharij karke kisanon, Daliton aur adivasiyon ki azaad chetna ko samne laata hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The history of all hitherto existing society is the history of class struggles.',
    context: 'A.R. Desai ke dialectical analysis ki moolbhoot buniyaad rakhte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC 20-Marker Strategy: "Welfare State" par Desai ka prahar',
    body: 'Desai par state-related sawal aane par (2020, 2017) unke 3 criteria zaroor likhein: (1) garibi aur berozgari se azaadi, (2) aarthik as समानता mein kami, aur (3) janta ka loktantrik control. Dikhayein ki kaise mixed economy ne Tata-Birla ko sasta maal diya aur kisan mazdooron ko bech diya.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Desai ko kewal Communist mat kehna',
    body: 'UPSC answers mein Desai ko kewal ek rajneetik neta ki tarah na pesh karein. Unhone G.S. Ghurye ke under PhD ki, Indian Sociological Society ke adhyaksh rahe, aur unka data-based analysis (trade unions, land records, Constituent Assembly debates) behad pramanik tha.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Desai ke Rashtravad ke 5 Phase (Yaad rakhne ka tareeqa: 1 se 5)',
    body: 'Order yaad rakhein: (1) Ram Mohan Roy ka reformist elite, (2) 1885 Moderate vakilon ki INC, (3) 1905 Swadeshi extremist daur, (4) 1920s Gandhian mass agitations jisme capitalist funding thi, aur (5) 1930s Socialist/Kisan Sabha vidroh.',
  },
  {
    kind: 'answerBox',
    intro:
      'A.R. Desai ne dialectical perspective ke zariye Bharatiya samajshastra ko consensus aur shastron ki ghulami se azaad karke historical materialism ki thos zameen par lakar khada kiya.',
    points: [
      'Aarthik Buniyaad: Dikhaya ki jaati, parivaar aur rajye ke rishte zameen aur aarthik shoshan ke dharatal par tike hain.',
      'Rashtravad ka Class Analysis: Rashtravad ke 5 aitihasik phase bataye jo colonial capitalism ke aane se peda hue the.',
      'Capitalist State ka Khulasa: "Welfare State" aur "Socialist Pattern" ke naaron ko tod kar ise bourgeois-landlord rajya saabit kiya.',
      'Kisan Mazdooron ka Shoshan: Dikhaya ki Land reforms aur Green Revolution ne ameer Kulaks ko badhava diya aur gareeb mazdooron ko beghar kiya.',
      'Subaltern Nazariye ka Rasta: Ranajit Guha aur Gail Omvedt ke liye zameen taiyar ki taaki woh grassroots Dalit-Adivasi vidroh ko samne la sakein.',
      'Economic Reductionism ki Kami: Jaati ko kewal economic class maan kar Ambedkar ke purity-pollution aur religious hegemony ke critique ko kam aanka.',
    ],
    conclusion:
      'Is kami ke bawajood, aaj ke neoliberal daur mein Bharat ke capitalist vikas ke virodhabhas ko samajhne ke liye Desai ka dialectical model sabse mazboot hathiyar hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'A.R. Desai ne Marxist historical materialism ke zariye Bharatiya samaj ka adhyayan kiya; unhone rashtravad ke 5 phases ko samjhaya aur azaadi ke baad ke capitalist state ke shoshan ko be-naqab karke ek teekha dwandvatmak vikalp pesh kiya.',
  mindMap,
  sections,
}
