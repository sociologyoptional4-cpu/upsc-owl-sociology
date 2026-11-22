import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Social mobility samajik parat mein upar-neeche ya barabar sthan badalne ko naapti hai. Bilkul alag hone ke bajaye, "open" class samajon mein bhi elite closure chhipa rehta hai (Glass, Goldthorpe, Pew, WEF) jabki "closed" jaati vyavastha mein bhi Sanskritisation, satta, shiksha aur loktantra se mobility hoti rahi hai—isliye yeh kind nahi balki degree ka farak hai.'

const mindMap: MindMapData = {
  title: 'Unit 5.4 · Social Mobility: Systems, Types & Drivers',
  center: 'Social Mobility',
  subtitle: 'Open vs Closed Ideal Types • Prakar • Shiksha aur Badlaav',
  branches: [
    {
      title: 'Open vs Closed ka Bhram',
      color: 'lavender',
      thinkers: ['Pitirim Sorokin', 'David Glass', 'John Goldthorpe', 'M.N. Srinivas'],
      points: [
        'Open (achievement/class) aur Closed (ascription/jaati) ideal types hain, purna sach nahi',
        'Open rukawat: Glass short-range; Oxford 1:2:4 rule; Pew 4% climb; WEF India #76',
        'Closed mein gati: Srinivas (Sanskritisation), Panikkar (rajvansh), Shyam Lal',
        'Positional badlaav (Sanskritisation) vs Structural badlaav (loktantra, zameen, bazaar)',
      ],
    },
    {
      title: 'Social Mobility ke Prakar',
      color: 'yellow',
      thinkers: ['Pitirim Sorokin', 'S.M. Lipset', 'R. Bendix', 'Ralph H. Turner'],
      points: [
        'Vertical (upar/neeche; embourgeoisement vs proletarianisation) vs Horizontal badlaav',
        'Intergenerational (peedhiyon ke beech) vs Intragenerational (ek hi career mein)',
        'Absolute vs Relative; Structural (IT/boom) vs Individual; Long vs Short-range',
        'Ralph H. Turner: Sponsored (elite chunaav) vs Contest (khuli daud)',
      ],
    },
    {
      title: 'Sorokin ke Drivers aur Shiksha',
      color: 'mint',
      thinkers: ['Pitirim Sorokin', 'B.R. Ambedkar', 'Pierre Bourdieu', 'Bowles & Gintis'],
      points: [
        'Sorokin ke 4 engine: fertility gap, parent-child farak, mahol, faulty distribution',
        'Shiksha as ladder: skills, haq ki samajh (Ambedkar, A.P.J. Kalam, RTE 2009)',
        'Shiksha as gatekeeper: coaching divide, English fluency, IHDS SC/ST pichhadpan',
        'Shahri anonymity, reservation, shaadi aur Dalit/pichhda andolan',
      ],
    },
    {
      title: 'Asar aur Nayi Vyavastha',
      color: 'pink',
      thinkers: ['Frank Parkin', 'Vilfredo Pareto', 'André Béteille', 'Thomas Piketty'],
      points: [
        'Parkin: Upward mobility political safety valve ban kar kranti rokti hai',
        'Pareto: Circulation of elites satta ko sadne se bachati hai; rokne par vidroh',
        'WEF (Klaus Schwab): +10% global mobility se GDP lagbhag 5% badhti hai',
        'Naya dhancha: jaati class mein khul rahi hai, West mein daulat-gig se bandish badhi',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
    alt: 'Infographic panel showing Pitirim Sorokin open versus closed mobility ladder with vertical and horizontal movement alongside capitals, poverty, and exclusion',
    caption:
      'Sorokin ki mobility seedhi dikhati hai ki un samajon mein bhi upar-neeche aur barabar gati chalti hai jo na poori tarah khule hain na poori tarah band.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 02',
  },
  {
    kind: 'md',
    body: `## 1. Social Mobility Kya Hai? Open aur Closed Systems Sirf Ideal Types Hain

Aasaan shabdon mein samjho: samaj ko ek bahu-manzila imarat maano jiski har manzil par alag paisa, izzat aur taqat hai. [[thinker:Pitirim Sorokin]] apni kitaab *Social and Cultural Mobility* mein ==social mobility== ko kisi vyakti ya samuh ka ek samajik sthan se doosre sthan par jaana batate hain—chahe ek hi manzil par kamra badalna ho ya lift se upar-neeche aana.

Kitabein aksar samajon ko do ulte hisson mein baant-ti hain: ==open systems== (jaise modern class economies jahan shiksha aur mehnat se koi bhi upar chadhe) aur ==closed systems== (jaise paramparik Hindu jaati ya feudal estates jahan janm se hi darja tay ho). Lekin empirical research ek pakka UPSC niyam saabit karti hai: **koi bhi samaj na poori tarah open hota hai na poori tarah closed**; yeh fark **kind ka nahi, degree ka hota hai**.

### "Open" Class Samajon Mein Chhipi Diwarein

- **Short-Range Seema ([[thinker:David Glass]], 1949):** England mein baap aur beton ke kaam ki tulna mein Glass ne paaya ki log aksar paas ki seedhi par hi hile (mazdoor ka beta clerk bana), jabki sabse neeche se top tak long-range chhalang behad kam thi.
- **Relative Hope ka 1:2:4 Niyam ([[thinker:John Goldthorpe]] & [[thinker:David Lockwood]], Oxford 1972):** Bhale hi aadhe beton ne vikas ke daur mein class badli, par Peter Kellner aur Peter Wilby ne dikhaya ki ek professional ke bete ke top par pahunchne ke chances ek mazdoor ke bete se chaar guna zyada the—yaani pakki ==elite self-recruitment==.
- **Sticky Floor aur Ceiling (Pew 2012 aur WEF 2020):** Pew ke *Pursuing the American Dream* survey mein 43% garib American sabse neechle 20% mein atke rahe, 40% ameer top mein tike rahe, aur sirf 4% neeche se top par pahunche. Isi tarah **WEF Global Social Mobility Index (2020)** mein Denmark 1st, USA 27th aur Bharat 82 deshon mein 76th raha—aur Bharat ke **IHDS surveys** dikhate hain ki SC, ST, minorities aur gaon mein intergenerational badhotri kaafi dheemi hai.

### "Closed" Jaati Vyavastha Mein Bhi Hamesha Gati Rahi

Ulte, paramparik Bharatiya jaati kabhi itni pathar jaisi band nahi thi jitna colonial kitabon ne dikhaya:
- **Varna Aadarsh vs Jati Haqeeqat ([[thinker:M.N. Srinivas]]):** Chaar *Varna* ka dhancha sthir dikhta tha, par zameeni *Jatis* ne zameen ya rajneetik satta paane ke baad ==Sanskritisation==—shakahari bhojan, janeu aur Brahminical riti-riwaj apna kar—apna sthan upar uthaya (jaise Coorg, Maratha, Yadav, UP ke Noniya aur Surat ke Koli).
- **Rajneetik Jeet aur Sanyas ([[thinker:K.M. Panikkar]]):** Itihas mein Nanda, Maurya aur Gupta jaise non-Kshatriya vanshon ne rajgaddi jeet kar naya darja paaya, jabki Bhakti andolan, dharm-parivartan aur *Sanyas* ne alag rasta khola.
- **De-Sanskritisation aur Aadhunik Badlaav:** [[thinker:D.N. Majumdar]] aur [[thinker:Shyam Lal]] ne dikhaya ki kai samuh reservation laabh ke liye rituals chhod kar neeche darj hue, jabki [[thinker:M.N. Srinivas]] ki ==Westernisation== (kanoon, bikau zameen, railway naukri) ne naye raaste khole. [[eg:Azadi ke baad voting adhikar, Dalit andolanon aur reservation ne chhoti-moti jaati badhotri ko vyapak loktantrik badlaav mein badal diya.]]

[[trap:Jab UPSC pooche ki kya closed system mein vertical mobility structural change laati hai (2016 PYQ), toh barik farak likho! Srinivas ke mutabik akeli Sanskritisation sirf *positional* badlaav laati hai aur jaati-dhancha zinda rakhti hai—par loktantra, shiksha aur bazaar se hui badi samuhik mobility ritual satta ko tod kar structure ko dispersed inequality ki taraf badalti hai (Yogendra Singh, André Béteille).]]

## 2. Social Mobility ke Mukhya Prakar

| Paimana | Jode hue Prakar | Arth | Indian / Empirical Misaal |
| --- | --- | --- | --- |
| Disha | Vertical vs Horizontal | Oonche-neeche stratum mein badlaav vs usi level par kaam/jagah badalna | Kisan mazdoor -> IAS (Vertical) vs gaon mazdoor -> shehar construction worker (Horizontal) |
| Samay | Intergenerational vs Intragenerational | Maa-baap aur bachon ki tulna vs ek hi zindagi mein promotion | Kisan ki beti -> doctor (Inter) vs factory helper -> plant supervisor (Intra) |
| Tulna | Absolute vs Relative | Apni aamdani badhna vs aas-paas ke logon ke muqable sthiti | Aamdani 10 guna badhe par dost 20 guna badhein; Luton Affluent Workers (1963) |
| Kaaran | Structural vs Individual | Economy-tech badlaav se naye pad vs vyaktigat mehnat/degree | 1991 IT boom se white-collar jobs vs UPSC exam nikaalna |
| Gatekeeper | Sponsored vs Contest (R.H. Turner) | Elite pehle se chune bachon ko aage badhayein vs sabke liye khuli race | British Oxbridge-public school grooming vs US open college contest |

Modern poonjiwad mein do ulte disha badlaav yaad rakho: ==embourgeoisement== (mazdooron ki aamdani badh kar middle-class lifestyle chhoona, par Goldthorpe-Lockwood ke 1963 Luton car workers study ne dikhaya ki sirf zyada pagar se white-collar status nahi milta) aur ==proletarianisation== (salaried white-collar clerks ki job security aur shaan ghatna—jaise Lockwood ka *Black-Coated Worker* ya aaj routine IT staff par AI/automation ka khatra).

## 3. Mobility ke Srot, Kaaran aur Shiksha ka Do-Dhaari Kirdar

Log upar ya neeche kaise khisakte hain? [[thinker:Pitirim Sorokin]] ne chaar bade engine bataye:
1. **Demographic Factors:** Oonche vargon mein bachon ki sankhya kam aur neechle vargon mein zyada hoti hai, isliye jab bureaucracy badhti hai ([[thinker:Max Weber]]) toh neeche ke yuva khali middle-level pad bharte hain.
2. **Parent-Child Farak:** Pratibha zameen ki tarah virasat mein nahi milti; garib ghar ke tez bache upar badhte hain aur aalsi ameer waris neeche aate hain.
3. **Mahol aur Technology Badalna:** Badalta bazaar purane hunar (typewriter repair) khatam karke naye sector (coding, logistics) mein daulat banata hai.
4. **Faulty Distribution:** Jab kaabil log neeche dabe hon aur kamzor upar baithe hon, toh kranti rokne ke liye ==vertical circulation ke channels== ("shareer mein khoon ki tarah") zaroori hote hain.

Shahri anonymity, reservation kanoon, shaadi (*hypergamy*) aur jan-andolanon ke beech **shiksha (education)** sabse tez par sabse virodhabhasi engine hai:
- **Seedhi ke Roop Mein Shiksha:** School aur universities degrees, Samvidhan ki samajh (RTE Act 2009) aur barabar mauke deti hain—jaise [[thinker:B.R. Ambedkar]], A.P.J. Abdul Kalam aur pehli peedhi ke OBC/Dalit afsar. [[eg:Gaon ya chhote qasbe ki ek ladki jab university ya NEET exam clear karti hai, toh woh sirf aamdani nahi badhati, balki kam umr ki shaadi aur jaati dabav ke khilaf awaaz bhi paati hai.]]
- **Gatekeeper ke Roop Mein Shiksha:** Wahin [[thinker:Pierre Bourdieu]] aur Neo-Marxists [[thinker:Samuel Bowles]]-**Herbert Gintis** dikhate hain ki mehangi English-medium schools, Kota/Delhi coaching ki fees aur elite cultural capital purani asamanata dobara paida karte hain—jisse sarkari school ke SC/ST aur garib chhatra pichhad jaate hain.

## 4. Asar aur Aaj Open-Closed Systems Mein Badlaav

Tez mobility aarthik tarakki badhati hai—WEF chairman **Klaus Schwab** ke mutabik global mobility mein 10% sudhar 2030 tak world GDP lagbhag 5% badha sakta hai. Rajneetik taur par [[thinker:Frank Parkin]] dikhate hain ki upward mobility ek ==political safety valve== hai: yuva kranti karne ke bajaye competitive exams ki race mein lag jaate hain, aur neeche khiske log bhi middle-class pehchan pakde rehte hain. Wahin [[thinker:Vilfredo Pareto]] maante hain ki khuli ==circulation of elites== ke bina purane shasak sad kar gir jaate hain.

Aaj open aur closed systems **nayi hybrid hierarchies mein badal rahe hain**: Bharat ka purana band jaati system shehrikaran, bazaar aur reservation se khula hai, par ab English-medium, coaching fees aur tech access ki **nayi hierarchies** ban rahi hain; wahin West ke "open" samaj [[thinker:Thomas Piketty]] ki virasati daulat aur gig-economy asuraksha se **dobara band** ho rahe hain. [[link:Caste mobility aur Sanskritisation ko seedhe Paper 2 Unit 2 (Modernization of Indian Tradition) aur Unit 4 (Caste System) se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Open System (Class Ideal Type)',
    rightTitle: 'Closed System (Caste / Estate Ideal Type)',
    rows: [
      {
        aspect: 'Darje ka Aadhar',
        left: 'Shiksha, bazaar ki yogyata aur kamai se achievement',
        right: 'Janm, vansh aur ritual shuddhata se ascription',
      },
      {
        aspect: 'Samajik Manyata',
        left: 'Kanooni barabari aur khuli pratiyogita ka aadarsh',
        right: 'Dharmik hierarchy, endogamy aur pushtaini kaam',
      },
      {
        aspect: 'Seema aur Mel-Jol',
        left: 'Khule daayre; alag-alag class mein shaadi kanoonan azaad',
        right: 'Khan-paan, basti aur shaadi par sakht endogamous rok',
      },
      {
        aspect: 'Asli Zameeni Sach',
        left: 'Pew 4% chhalang, 1:2:4 elite self-recruitment, Bourdieu capital',
        right: 'Sanskritisation, rajneetik jeet, dharm-badlaav aur reservation',
      },
      {
        aspect: 'Aaj ka Naya Badlaav',
        left: 'Virasati daulat, mehangi padhai aur gig-work se nayi bandish',
        right: 'Shehrikaran aur kanoon se khulav, saath mein caste-class hybrids',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Structural Drivers',
        text: 'Demographic gap, tech badlaav aur faulty distribution dabav banate hain (Sorokin)',
      },
      {
        label: 'Mobility Elevators',
        text: 'Shiksha, shahri anonymity, bazaar aur reservation raaste kholte hain',
      },
      {
        label: 'Positional vs Structural',
        text: 'Ek jaati ka chadhna rank badalta hai; mass movement dhancha badalta hai',
      },
      {
        label: 'Samaj par Asar',
        text: 'Safety valve vidroh rokta hai (Parkin) aur elites tazgi paate hain (Pareto)',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Vertical vs Horizontal Mobility',
    meaning:
      'Vertical mobility kisi vyakti ya samuh ko oonche ya neeche aarthik-samajik stratum mein le jaati hai, jabki horizontal mobility lagbhag usi level par kaam ya sthan badalti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Sanskritisation & Positional Change',
    meaning:
      'Jab koi neechli ya beech ki jaati oonchi jaati ke riti-riwaj apna kar apna sthan upar badhati hai—jisse system ke andar jagah badalti hai par jaati-dhancha nahi tootta.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Sponsored vs Contest Mobility',
    meaning:
      'Ralph H. Turner ka farak: pehle se elite chunaav aur grooming se oonche pad milna (sponsored) banaam sabke liye khuli lambi daud (contest).',
  },
  {
    kind: 'keyTerm',
    term: 'Circulation of Elites',
    meaning:
      'Pareto ka chakra jisme aalsi ho chuke purane shasak ("lions" ya "foxes") lagatar neeche se ubharne wale naye kaabil counter-elites se badle jaate hain.',
    thinkerSlug: 'vilfredo-pareto',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'Sanskritisation results only in positional changes in the system and does not lead to any structural change.',
    context: 'Yeh parakhne ke liye zaroori ki kya jaati mobility khud jaati vyavastha ko todti hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'vilfredo-pareto',
    quote: 'History is a graveyard of aristocracies.',
    context: 'Jab elite circulation ruk jaaye toh satta ka girna tay maana jaata hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '8 mein se 7 PYQs Ek Hi Core Thesis Poochte Hain!',
    body: '2013, 2015, 2016, 2018, 2020, 2022 aur 2024 sab ek hi sach par ghoomte hain: "Open aur Closed systems bilkul pure nahi hote." Dono taraf do-do pakke saboot rakho—Open closures (Glass 1949, Goldthorpe 1:2:4 rule, Pew 2012, WEF India 76th) AUR Closed mobility (Srinivas Sanskritisation, Panikkar dynasties, Shyam Lal De-sanskritisation, Census, quotas).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Shiksha ko Sirf Barabari ki Machine Mat Maanna',
    body: '2021 Education & Mobility PYQ mein sirf literacy ki tareef mat likhna. Dono pehlu dikhao: shiksha neeche ke logon ko upar uthati hai (Ambedkar, Kalam, RTE 2009) AUR mehangi English schools, Kota coaching fees (Bourdieu) tatha IHDS SC/ST gaps se purani class-jaati diwarein bhi doharati hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Answers Chamkane Wale Teen Solid Aankde',
    body: 'Yeh teen numbers yaad rakho: (1) Goldthorpe Oxford 1972 ka "1:2:4 rule of relative hope", (2) Pew 2012 US study: 43% sabse neeche atke aur sirf 4% neeche se top pahunche, aur (3) WEF Global Social Mobility Index 2020: Denmark #1, USA #27, Bharat #76 (82 mein se).',
  },
  {
    kind: 'answerBox',
    intro:
      'Social mobility dikhati hai ki samaj merit aur barabari ke apne vaadon ko janm-aadharit jaati, class, gender aur kshetra ki diwaron ke beech kitna poora kar paata hai.',
    points: [
      'Ideal Types, Pure Sach Nahi: "Open" class systems mein bhi elite self-recruitment (1:2:4 rule, Pew 4% climb) dikhta hai, jabki "closed" jaati mein Sanskritisation, satta aur dharm-badlaav se gati rahi.',
      'Positional vs Structural Change: Ek jaati ka chadhav purane niyam bachaye rakhta hai, jabki loktantrik reservation, zameen bazaar aur shahrikaran poora dhancha badalte hain.',
      'Vividh Prakar: Sociology vertical/horizontal, inter/intragenerational, absolute/relative, structural/individual aur sponsored/contest mobility ko naapti hai.',
      'Shiksha ka Virodhabhas: First-generation garib chhatron ke liye elevator hone ke saath yeh Bourdieu ke cultural capital se elite gatekeeper bhi banti hai.',
      'Naya Sangam: Closed systems bazaar aur quotas se caste-class hybrids ban rahe hain, wahin West ki open economy virasati daulat aur gig asuraksha se fir band ho rahi hai.',
    ],
    conclusion:
      'Bazaar ke bharose chhodne ke bajaye universal sehat, quality school aur social security mein nivesh hi samaj ko sachmuch khula bana sakta hai.',
  },
]

export const topic4Hi: TopicLangContent = { summary, mindMap, sections }