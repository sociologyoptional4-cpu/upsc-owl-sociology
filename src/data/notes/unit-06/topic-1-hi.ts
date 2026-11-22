import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 6.1 · Social Organisation of Work',
  center: 'Organisation of Work',
  subtitle: 'Slave & Feudal Modes -> Factory & Taylorism -> Post-Industrial Shift',
  branches: [
    {
      title: 'Meaning & Historical Modes',
      color: 'lavender',
      thinkers: ['Karl Marx', 'M.I. Finley', 'Marc Bloch', 'Max Weber'],
      points: [
        'Work: physical/mental effort se zaroorat poori karna; feminists unpaid care jodti hain',
        'Slave society: war prisoners ko chattel property banaya; physical darr aur zero incentive',
        'Feudal society: serfs zameen se bandhe, fasal mein hissa aur dharmik ideology',
        'Capitalist society: free wage labour, factory separation aur surplus value extraction',
      ],
    },
    {
      title: 'Industrial Capitalism & Classics',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Émile Durkheim', 'Max Weber', 'Harry Braverman'],
      points: [
        'Marx: 4-fold alienation, limits of working day, aur Braverman ka deskilling',
        'Durkheim: mechanical se organic solidarity; tez badlaav mein anomic division',
        'Weber: Protestant work ethic ("work is worship") aur bureaucratic iron cage',
        'Family ka production unit se private urban consumption unit mein badlaav',
      ],
    },
    {
      title: 'Shop-Floor Management',
      color: 'mint',
      thinkers: ['F.W. Taylor', 'Henry Ford', 'Elton Mayo', 'Peter Drucker'],
      points: [
        'Taylorism: time-and-motion stopwatch study, "one best way" aur mental revolution',
        'Fordism: moving assembly line, mass production par bhari thakan aur monotony',
        'Elton Mayo (Hawthorne): social belonging, friendly supervision aur peer norms',
        'Toyotism & Post-Fordism: flexible specialization, just-in-time aur team circles',
      ],
    },
    {
      title: 'Post-Industrial & Contemporary',
      color: 'pink',
      thinkers: ['Daniel Bell', 'Robert Blauner', 'C. Wright Mills', 'Goldthorpe'],
      points: [
        'Bell & Touraine: manufacturing se service/knowledge economy (white/golden collar)',
        'Blauner inverted-U curve: printing low -> auto peak -> chemical automation low',
        'C.W. Mills: Personality Market & Hochschild emotional labour in service jobs',
        'Affluent Worker (Goldthorpe), feminization of work aur AI/automation debate',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u06-01-work-organization.webp',
    alt: 'P1 Unit 6 infographic: Evolution of Work Organization — Historical Shift in Social Organization of Work',
    caption: 'Historical Shift in Social Organization of Work — Evolution of Work Organization ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 6 Visual 01',
  },
  {
    kind: 'md',
    body: `## Work kya hai aur Sociology mein iska Organisation kyun padhte hain?

Aasaan shabdon mein samjho: aam bolchaal mein log samajhte hain ki "kaam" (work) sirf wohi hai jiske badle mahine ke aakhir mein salary mile. Lekin Sociology ki nazar mein ==Work== har woh kaam hai jisme insaan apni sharirik (physical) ya mansik (mental) mehnat laga kar aisi cheezein (goods) ya sevaayein (services) banata hai jo insaani zarooraton ko poora karein. Ek hi kriya context ke hisab se work ya leisure ho sakti hai: bathroom mein gaana leisure hai, par Lata Mangeshkar ka studio mein gaana work hai; pita ka ghar par beti ko padhana care hai, par school mein salary par padhana paid work hai. [[trap:Work ko sirf ghar ke bahar ki paid naukri maanna auraton ke rozmarra ke unpaid domestic housework ko gayab kar deta hai — Ann Oakley aur Sylvia Walby jaisi feminist sociologists ne isi bias ka kadda virodh kiya.]]

Insaan tab bhi kaam kyun karta hai jab uske paas pushtaini daulat ho? Rozi-roti ke alawa work modern samaj mein hamari ==primary social identity== tay karta hai ("Aap kya karte hain?"), 24 ghante ka daily routine banata hai, dosti aur workplace rishton ka manch deta hai, aur samaj mein "nikamma" kehlane ke social exclusion se bachata hai. [[thinker:Karl Marx]] ne creative labour ko insaan ka ==species-essence== (*khuddari aur rachnatmak aatma*) maana, jabki [[thinker:Max Weber]] ne dikhaya ki Protestant Reformation ke baad mehnat ko "Work is Worship" ka dharmik darja mila. [[eg:Aaj Mukesh Ambani ya PM Narendra Modi ka 18-18 ghante kaam karne ki image dikhana, aur Mahatma Gandhi ka Young India (1925) mein "Wealth without Work" ko paap batana, modern work ethic ki taqat dikhata hai.]]

## Itihas ke Teen Modes: Slave, Feudal aur Industrial-Capitalist Samaj

Itihas mein alag-alag samajon ne kaam ka batwara, auzaron ki malikiyat aur munafe (surplus) ki vasooli teen bade tareeqon se ki hai. **Slave**, **Feudal** aur **Industrial-Capitalist** vyavastha ki tulna se saaf dikhta hai ki kaam kaise khuli ghulami se zameeni bandhan aur fir bazar ke contract tak pahuncha.

### 1. Slave Society (Ghulam Samaj) mein Work Organisation

Aasaan shabdon mein samjho: prachin Rome aur Greece ya baad ke American plantations mein kaam ==chattel slavery== par tika tha, jahan ghulam (slave) apne malik (master) ki kanooni sampatti hota tha — bilkul jaanwar ya kheti ke auzar ki tarah. Naye ghulam yuddh (tribal warfare) mein haare hue qaidiyon ko bana kar laaye jaate the, aur malik aksar ghulamon ko parivar basane ya bacche paida karne (reproduction) se rokte the taaki unka kunba mil kar bagawat na kar de.

Kyunki ghulam chahe jitni bhi mehnat kare, use sirf zinda rehne bhar ka khana milta tha, isliye zyada anaj ugane ka **koi personal incentive nahi tha**. Poori vyavastha kode ke darr aur hathiyarband hinsa par tiki thi; jaise hi yuddh mein haar ka khatra badha aur ghulamon ki kami hui, yeh kam-efficiency wali vyavastha toot gayi. [[thinker:M.I. Finley]] ne dikhaya ki haath ke kaam ko ghulamon ki pehchan maanne ke kaaran elite varg ne technology ki jagah sirf darshan aur rajneeti ko mahatva diya.

### 2. Feudal Society (Samanti Samaj) mein Work Organisation

Jab ghulami ka dhancha bikhra, tab Europe mein ==Feudalism== (aur Bharat mein jaati-aadharit ==Jajmani vyavastha==) ubhri jisme samaj Landowning Lords (*haves*) aur kheti karne wale Serfs (*have-nots*) mein banta tha. Sabse bada farak yaad rakho: **Serf malik ki niji sampatti (chattel) nahi tha** — use bazar mein kharida ya becha nahi jaa sakta tha. Serfs ko sharirik azaadi thi, weh parivar basa sakte the, hal-bail jaise chhote auzar rakh sakte the, aur unke bacche hi agli peedhi ke serfs bante the.

Kheti aur craft guilds (*shrenis*) mein poora **parivar ek single unit of production** ki tarah saath kaam karta tha. Serfs ko sharecropping (fasal ka ek hissa) milta tha, isliye unke paas ghulamon ke muqable zyada ugane ka built-in incentive tha. Roz-roz talwar chalane ke bajaye feudal lords ne **organised religion (Church ya dharmik karma)** ke ideological control se serfs ko shant aur aagyakari banaya. [[eg:Bhartiya gaon mein Jajmani system ke tehat Kamin (service castes) aur Jajman (landowners) ke beech fasal ke hisse aur pushtaini dharmik farz ka rishta feudal work organisation jaisa hi tha.]]

### 3. Industrial-Capitalist Society mein Work Organisation

Industrial Revolution ne kheti aur gharelu dhandhon ko tod kar kaam ko shehri factories aur badi machines mein shift kar diya. ==Industrial Capitalism== mein kaam ka batwara janm ya jaati (**ascription**) ke bajaye degree, skill aur merit (**achievement**) par hone laga, aur parivar production unit se badal kar **unit of consumption** (saath baith kar car, flat aur TV kharidne wali ikai) ban gaya.

| Pehlu (Dimension) | Slave Society | Feudal Society | Industrial-Capitalist Society |
| --- | --- | --- | --- |
| Mukhya Class Split | Masters vs Chattel Slaves | Landowning Lords vs Bound Serfs | Bourgeoisie vs Wage Proletariat |
| Worker ka Legal Status | Niji sampatti; zero bodily autonomy | Zameen se bandha; becha nahi ja sakta | Kanooni taur par azaad wage-earner |
| Labour ki Supply | Yuddh aur bahari qaidi (warfare) | Parivar mein natural biological janm | Khula labour market aur migration |
| Incentive aur Control | Zero incentive; seedhi sharirik hinsa | Fasal mein hissa; dharmik ideology | Nakad salary; bhookh ka darr aur rules |

## Industrial Work par Classical aur Managerial Theories

Founding sociologists aur management thinkers ne factory ke kaam ko alag-alag chashme se dekha:

- **[[thinker:Karl Marx]] aur Limits of the Working Day:** *Das Kapital* mein Marx ne dikhaya ki mazdoor kanooni roop se azaad hai par pet palne ke liye apni labour-power bechne ko majboor hai. Malik pehle kaam ke ghante 16–18 ghante tak khinch kar ==Absolute Surplus Value== nichodte the; jab mazdoor andolanon aur Factory Acts se working day 8 ghante par simta, tab malikon ne machines aur speed badha kar ==Relative Surplus Value== nikalna shuru kiya. Extreme division of labour se 4-tarfa **Alienation** (product, process, khud ke species-essence aur saathi mazdooron se algaav) hota hai, jise [[thinker:Harry Braverman]] ne **degradation and deskilling of work** kaha.
- **[[thinker:Émile Durkheim]] aur Organic Solidarity:** Durkheim ke mutabik complex division of labour purane *mechanical solidarity* ki jagah ==organic solidarity== (ek-doosre par nirbharta) laata hai, basharte badlaav itna tez na ho ki **anomic division of labour** ban jaaye.
- **[[thinker:Max Weber]] aur Bureaucratic Iron Cage:** Weber ne Protestant ethic se nikle anushasit capitalism ko modern workplace bureaucracy ke thande ==iron cage== mein badalte dekha.
- **[[thinker:F.W. Taylor]] (Scientific Management / Taylorism) aur [[thinker:Henry Ford]] (Fordism):** Taylor ne management ko andaze ki jagah exact science banaya (Gulick aur Urwick ke **POSDCORB** ki tarah). Taylorism ke 4 principles the: (1) stopwatch se time-and-motion study karke kaam ka **"One Best Way"** nikalna, (2) scientific worker selection, (3) scientific training, aur (4) management-worker cooperation jisse munafe ka aakar badhe (**Mental Revolution**). Henry Ford ne ise moving assembly line (**Fordism**) par lagaya. Production toh khoob badha, par mazdoor ("machine ka purza" banne se) aur purane managers (apni satta ghatne se) dono ne iska virodh kiya. [[eg:Aaj Amazon warehouse ya Blinkit dark stores mein scanner timer ke ishare par daudte packagers "Digital Taylorism" ka samna karte hain.]]
- **[[thinker:Elton Mayo]] (Human Relations Approach):** Western Electric ke Hawthorne plant (1927–32) mein light aur rest breaks ghata-badha kar Mayo ne ==Hawthorne Effect== khoja — workers ki productivity kam roshni mein bhi badhi kyunki unhe mehsoos hua ki unpar dhyan diya jaa raha hai. Unke **Bank Wiring Experiment** ne sabit kiya ki har formal factory ke andar ek **informal organisation** hota hai jahan doston ka group tay karta hai ki din mein kitna kaam karna hai, aur zyada kaam karne wale ("rate-busters") ko lunch par chhed kar control karta hai. Yahi modern HR departments ki buniyaad bana.

## Post-Industrial Shift, Technology aur Aaj ke Badlaav

20th century ke madhya ke baad Western duniya (aur GDP ke lihaz se Bharat bhi) blue-collar factory manufacturing se aage badh kar white- aur golden-collar **Tertiary (services), Quaternary (knowledge/R&D) aur Quinary (top policy/CEO decisions)** sectors mein aa gayi — jise [[thinker:Daniel Bell]] aur [[thinker:Alain Touraine]] ne ==Post-Industrial Society== aur [[thinker:Peter Drucker]] ne **Knowledge Economy** kaha.

Kya nayi technology hamesha alienation badhati hai? Marx ke sidhe graph ko test karne ke liye **[[thinker:Robert Blauner]]** (*Alienation and Freedom*, 1964) ne 4 industries compare ki aur **Inverted-U Curve** paya: craft *printing* mein alienation kam tha, *textiles* mein badha, assembly-line *automobiles* mein choti (peak) par pahuncha, lekin fully automated *chemical plants* mein wapas gir gaya kyunki pipelines ki monitoring mein workers ko badi zimmedari aur freedom mehsoos hoti thi! Saath hi welfare laws, unions aur 8-hour week ne [[thinker:John Goldthorpe]] aur [[thinker:David Lockwood]] ke ==Affluent Worker== ko janm diya, aur Infosys Bangalore jaise modern campuses gym, food courts aur job rotation se monotony ghatate hain.

Fir bhi service economy ke apne dard hain: [[thinker:C. Wright Mills]] ne ==Personality Market== ke bare mein chetaya jahan bank salespersons ya air hostesses ko nakli muskaan bechni padti hai ([[thinker:Arlie Hochschild]] ka **Emotional Labour**), aur [[thinker:Herbert Marcuse]] ne kaha ki mass media hamare leisure time ko bhi alienate kar deta hai. Globalisation ke daur mein ==Feminization of Work== ([[thinker:Guy Standing]]), AI automation, **The Great Resignation** aur **Quiet Quitting** ne kaam ki duniya ko naye sire se badal diya hai. [[link:Paper 2 Unit 11 mein ise Bharat ke service-led growth aur informal manufacturing ke saath jod kar dekho.]]`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: 'Ancient Era',
        title: 'Slave Mode of Production',
        text: 'Greco-Roman estates mein yuddh se pakde chattel slaves; kode ka darr aur zero production incentive.',
      },
      {
        year: '9th–15th Century',
        title: 'Feudalism & Jajmani Guilds',
        text: 'Serfs zameen se bandhe par fasal mein hissa; Church ya dharmik parampara se ideological control.',
      },
      {
        year: '1760–1867',
        title: 'Factory Capitalism & Marx’s Capital',
        text: 'Ghar aur factory alag hue; working day ki seema (16h se 8h) aur alienation par sangharsh.',
      },
      {
        year: '1911–1913',
        title: 'Taylorism & Fordist Assembly Line',
        text: 'F.W. Taylor ka Scientific Management ("One Best Way") aur Henry Ford ki moving assembly line.',
      },
      {
        year: '1927–1932',
        title: 'Elton Mayo’s Hawthorne Studies',
        text: 'Sabit kiya ki informal peer groups aur friendly supervision lighting ya bonus se zyada asar daalte hain.',
      },
      {
        year: '1964–1973',
        title: 'Blauner’s Curve & Bell’s Post-Industrialism',
        text: 'Blauner ka inverted-U automation curve aur Daniel Bell ka service/knowledge economy thesis.',
      },
      {
        year: '2020s',
        title: 'AI Automation, Gig Work & Quiet Quitting',
        text: 'Algorithmic control, remote work, feminization of labour aur post-pandemic Quiet Quitting.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Craft & Feudal Work', text: 'Simple division of labour; parivar hi production unit; kam alienation' },
      { label: 'Taylorist / Fordist Factory', text: 'Stopwatch fragmentation & assembly line; choti par Marxian alienation' },
      { label: 'Mayo & Welfare Capitalism', text: 'Informal peer groups, unions, 8-hour day aur affluent worker comfort' },
      { label: 'Automated & Knowledge Work', text: 'Blauner chemical automation + Bell service economy & emotional labour' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Taylorism / Scientific Management (F.W. Taylor)',
    rightTitle: 'Human Relations Approach (Elton Mayo)',
    rows: [
      {
        aspect: 'Worker ka Nazariya',
        left: 'Akela "economic man" jo sirf paise aur bonus se chalta hai',
        right: 'Social insaan jo doston ki izzat aur group norms se chalta hai',
      },
      {
        aspect: 'Core Method',
        left: 'Time-and-motion stopwatch study se "One Best Way" thopna',
        right: 'Hawthorne experiments aur Bank Wiring mein informal group dekhna',
      },
      {
        aspect: 'Supervision Style',
        left: 'Sakht top-down nigrani aur kaam ke chhote tukde karna',
        right: 'Friendly two-way baat-cheet aur modern HR team-building',
      },
      {
        aspect: 'Alienation par Asar',
        left: 'Deskilling, thakan aur insaan ko machine ka purza banana',
        right: 'Informal bhaichare aur sunvayi se alienation ko kam karna',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Species-Essence & Alienation',
    meaning:
      'Marx ka vichar ki rachnatmak kaam insaan ki aatma hai, par capitalism mazdoor ko uske product, process, khud se aur saathiyon se kaat deta hai.',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Taylorism (Scientific Management)',
    meaning:
      'F.W. Taylor ka scientific model jo stopwatch se kaam tod kar "One Best Way" nikalta hai; Henry Ford ne ise assembly line par lagaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Hawthorne Effect & Informal Group',
    meaning:
      'Elton Mayo ki khoj ki workers observation aur friendly supervision se motivate hote hain aur har formal plant ke andar informal peer norms chalte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Blauner’s Inverted-U Curve',
    meaning:
      'Robert Blauner ka empirical curve ki alienation printing (craft) se auto assembly line tak badhta hai par chemical automation mein wapas gir jaata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Personality Market & Emotional Labour',
    meaning:
      'C.W. Mills aur Arlie Hochschild ka concept ki service economy mein workers ko saamaan bechne ke liye apni nakli muskaan aur vyaktitva bechna padta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The worker becomes all the poorer the more wealth he produces.',
    context: '1844 Manuscripts mein Marx batate hain ki capitalist factory mein mazdoor jitna maal banata hai utna hi andar se khokhla hota jaata hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'emile-durkheim',
    quote: 'The division of labour is not merely an economic rule, but the chief source of social solidarity.',
    context: 'Modern samaj mein alag-alag peshe (occupations) kaise logon ko organic solidarity mein jodte hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2014 PYQ Pattern: Historical Modes ko Modern Trends se Jodo!',
    body: 'Topic 6.1 mein UPSC do tarah ke sawaal poochta hai: (1) Slave, Feudal aur Capitalist work organisation ka comparison (2014, 2015, 2018, 2024), aur (2) modern dynamics jaise Taylorism (2023), degradation of work (2022), feminization (2022), globalization (2023) aur automation (2024). Har answer mein Marx/Braverman ke saath Blauner, Bell aur C.W. Mills zaroor likho!',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Serf aur Slave ko Ek Mat Samajhna!',
    body: 'Kabhi mat likhna ki Feudal Lord serfs ka malik tha! Slave (ghulam) chattel property tha jise bazar mein becha jaa sakta tha aur bacche paida karne ki azaadi nahi thi. Serf zameen se bandha tha par becha nahi jaa sakta tha, uska apna parivar aur hal-auzar hote the, aur use fasal mein hissa milta tha.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: Blauner ki 4 Industries (P-T-A-C)',
    body: 'Robert Blauner ka inverted-U alienation curve P-T-A-C code se yaad rakho: Printing (craft = low alienation) -> Textiles (machine = medium) -> Automobiles (assembly line = peak alienation) -> Chemicals (continuous automation = low alienation).',
  },
  {
    kind: 'answerBox',
    intro:
      'Social organisation of work yeh dikhata hai ki alag-alag samaj production, division of labour, authority aur surplus extraction ko kaise organize karte hain.',
    points: [
      'Historical shift: Work yuddh-aadharit chattel slavery (physical coercion, zero incentive) se feudal serfdom (family production unit, religious control) aur fir contract-based industrial capitalism tak aaya.',
      'Classical lenses: Marx ne surplus value, limits of working day aur alienation dikhaya; Durkheim ne organic solidarity vs anomie; Weber ne bureaucratic iron cage.',
      'Managerial models: F.W. Taylor ke Scientific Management aur Fordism ne task tod kar production badhaya, jabki Elton Mayo ke Hawthorne studies ne informal peer groups ko samne rakha.',
      'Post-industrial & automation turn: Daniel Bell ne knowledge/service sectors ka ubhaar bataya, aur Robert Blauner ne dikhaya ki advanced automation alienation ghata sakti hai (inverted-U).',
      '21st-century trends: C.W. Mills ka personality market, feminization of work, aur AI/gig automation aaj work autonomy ko naye sire se paribhashit kar rahe hain.',
    ],
    conclusion:
      'Technological efficiency ke saath worker ki khuddari (dignity) aur social security ka santulan hi modern economic life ki sabse badi chunauti hai.',
  },
]

export const topic1Hi: TopicLangContent = {
  summary:
    'Slave, Feudal aur Industrial-Capitalist samajon mein kaam ke sangathan ki tulna, jisme Marx, Durkheim, Weber, Taylorism, Elton Mayo, Blauner ke automation curve aur post-industrial service/knowledge economy ka vishleshan hai.',
  mindMap,
  sections,
}