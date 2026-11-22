import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Samajik stratification ek saath economic class, Weberian status honour, samaj-nirmit gender aur masculinities, ethnicity aur racialisation par chalti hai—aur purani asmitaon ko mitane ke bajaye modernisation aksar caste, ethnicity aur race ko new middle class ke saath naye roop mein zinda rakhta hai.'

const mindMap: MindMapData = {
  title: 'Unit 5.3 · Dimensions of Stratification',
  center: 'Paanch Judte Aayam',
  subtitle: 'Class • Status Groups • Gender • Ethnicity • Race',
  branches: [
    {
      title: 'Class aur New Middle Class',
      color: 'lavender',
      thinkers: ['Max Weber', 'Daniel Bell', 'John Goldthorpe', 'Leela Fernandes'],
      points: [
        'Weber ke white-collar vistar ne Marx ki seedhi proletarianisation ko galat sabit kiya',
        'New middle class: economic cushion, degrees/coaching aur deferred gratification',
        'Goldthorpe & Lockwood (Luton): zyada pagar ke baad bhi mazdoor sanskriti alag rahi',
        'Lipset & India: middle-class asuraksha nationalist aur populist rajneeti ko badhati hai',
      ],
    },
    {
      title: 'Status Groups aur Modernity Paradox',
      color: 'yellow',
      thinkers: ['Max Weber', 'Yogendra Singh', 'M.N. Srinivas', 'André Béteille'],
      points: [
        'Status groups endogamy aur social closure se apni izzat aur lifestyle bachate hain',
        'Modernisation ne jaati, race aur ethnicity mitayi nahi—unhe politicise aur digital kiya',
        'Matrimonial apps, vote banks aur mohalle parampara aur market ko milate hain',
        'Natural farak (qad/rang/sex) vs social inequality (jaati/class inaam)',
      ],
    },
    {
      title: 'Gender, Masculinity aur Intersectionality',
      color: 'mint',
      thinkers: ['Raewyn Connell', 'Sylvia Walby', 'Patricia Hill Collins', 'S.M. Channa'],
      points: [
        'Gender: jeevan-bhar seekha gaya power dhancha, sirf sharirik sex nahi (Ann Oakley)',
        'Hegemonic masculinity mardon par kamane, rona chhipane aur dabdabe ka dabav daalti hai',
        'Devi-Dasi bhed (Channa) aur patriarchy ke 6 aayam (Walby) auraton ko baant-te hain',
        'Intersectionality (Crenshaw, Collins, Rege): jaati + class + race gender bhed badhate hain',
      ],
    },
    {
      title: 'Ethnicity aur Race (Dhundhli Seema)',
      color: 'pink',
      thinkers: ['W.E.B. Du Bois', 'Ali Rattansi', 'Clifford Geertz', 'Fredrik Barth'],
      points: [
        'UNESCO 1950 ne biological race todi aur socio-cultural ethnicity par focus laaya',
        'Dhundhli seema: "New Racism" (Rattansi) dharm, pehnave aur accent ko racialise karta hai',
        'Geertz (primordial khoon-rishte) vs Barth (fluid instrumental boundaries) vs Noel',
        'Global ubhaar: asaman vikas, migration ka darr aur identity politics',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
    alt: 'Infographic showing Bourdieu four capitals and overlapping intersectionality Venn diagram across class, status, gender, ethnicity, and race alongside mobility and exclusion',
    caption:
      'Class, status, gender, ethnicity aur race alag-alag dabbon mein nahi rehte—yeh Bourdieu ke capitals aur intersectional hierarchies mein aapas mein ghul kar kaam karte hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 02',
  },
  {
    kind: 'md',
    body: `## 1. Class, "New Middle Class" aur Status Groups

Aasaan shabdon mein samjho: har bada samaj logon ko daulat aur izzat dono ke paimane par naapta hai, par dono hamesha saath nahi chalte. Jahan ==economic class== sampatti, aamdani aur market skills par tiki hoti hai, wahin ==status groups== samajik samman, lifestyle aur biradari ke daayre se bante hain. Dono ko samajhne se pata chalta hai ki modern education aur naukriyon ke baad bhi purani pehchan kyun nahi mitti.

### Petty Bourgeoisie se "New Middle Class" Tak

Karl Marx ko laga tha ki chhote vyapari aur karigar (**old middle class** ya *petty bourgeoisie*) badi factories ke aage doob kar mazdoor ban jaayenge. Lekin [[thinker:Max Weber]] ne sahi bhavishyavani ki ki rational poonjiwad aur sarkar ki afsarshahi managers, engineers, teachers, accountants aur clerks ki ek badi ==New Middle Class== paida karegi—jise baad mein [[thinker:Daniel Bell]] ne middle-heavy "Middle Class Society" kaha.

New Middle Class ki soch ke chaar mukhya lakshan hain:
- **Economic Cushion aur Degree-Moh:** Yeh varg na roz ki roti ke liye tarasta hai na ameeron ki tarah paisa udaata hai; inki zindagi degree, coaching aur ==deferred gratification==—yaani 10th, IIT/NEET/CAT aur 20 saal ki ghar ki EMI ke liye aaj ke shauk tyaagne—par chalti hai. [[eg:Kisi bhi Bharatiya middle-class ghar mein nursery painting certificate se college degree tak sab files mein sambhaal kar rakhe jaate hain kyunki yahi unki asli virasat hai.]]
- **Hartal ke Bajaye Exam:** Yeh mazdooron ki tarah dharna-pradarshan ke bajaye padhai aur vyaktigat career ko badhava dete hain.
- **Sirf Zyada Pagar se Middle Class Nahi Bante:** 1963 mein Luton ke *Affluent Worker* adhyayan mein [[thinker:John Goldthorpe]] aur [[thinker:David Lockwood]] ne dikhaya ki achhi salary paane wale factory workers bhi white-collar moolyon aur club-socializing mein shamil nahi ho paaye.
- **Rajneetik Rukh:** [[thinker:Seymour Martin Lipset]] ne chetavani di ki upar ke ameer aur neeche ke garibon ke beech pisi middle class aksar ugra rashtravad ko chun-ti hai; Bharat mein [[thinker:Leela Fernandes]] dikhati hain ki 1991 ke baad ki consumerist new middle class urban rajneeti aur majoritarian agenda ko tezi se prabhavit karti hai.

### Status Groups aur Modernisation ka Virodhabhas

Purane modernisation siddhant maante the ki factories, shehar aur bazaar janm-aadharit pehchan ko mita kar sirf class chhod denge. Phir aaj Bharat, America aur Europe mein **jaati, ethnicity aur race** itne taqatwar kyun hain?
- **Selective Synthesis ([[thinker:Yogendra Singh]] aur [[thinker:M.N. Srinivas]]):** Modernity mein parampara gayab nahi hoti balki naya roop leti hai—jaatiyan ab caste associations, vote banks aur matrimonial apps par zinda hain. [[eg:Shaadi ke modern apps par salary aur IT-degree filter ke saath-saath jaati, up-jaati aur gotra ke checkboxes saath chalte hain—jahan class aur Weberian status closure mil jaate hain.]]
- **Shuruati Line par Virasat:** [[thinker:André Béteille]] kehte hain ki ==natural differences== (qad ya sehat) ke ulta, ==social inequality== jaati aur class ke janm ko mehangi padhai aur network mein badal kar khule bazaar mein bhi asamanata zinda rakhti hai.

## 2. Gender Stratification, Male Identity aur Intersectionality

Biological **sex** janm ke samay shareer ke angoon ko kehta hai, jabki ==gender== woh samaj-nirmit dhancha hai jo mard, aurat aur non-binary logon ke kaam, adhikar, kapde aur izzat ki seema tay karta hai ([[thinker:Ann Oakley]]). Samaj-shastri gender ko sirf alag-alag role nahi balki stratification maante hain kyunki yeh bina-pagar gharelu kaam, sampatti, suraksha aur faislon ki taqat ko asaman baant-ta hai.

Gender asamanata ko teen taqatein chalati hain:
- **Patriarchy ke Chhah Ghar ([[thinker:Sylvia Walby]]):** Patriarchy ek saath wage gap, unpaid gharelu shram, sanskritik niyam, mardana hinsa, state kanoon aur sexuality par niyantran se chalti hai.
- **Auraton ke Bheetar Parat:** [[thinker:Subhadra Mitra Channa]] ==Devi–Dasi== bhed dikhati hain jahan aagyakari upper-caste gharelu mahila ko "devi" maan kar izzat milti hai, jabki mehnatkash neechli-jaati mahilaon par stigma lagta hai.
- **Gender Mardana Pehchan ko Kaise Ghadta Hai ([[thinker:Raewyn Connell]]):** Gender sirf auraton ko nahi baandhta—Connell ki ==Hegemonic Masculinity== dikhati hai ki samaj ek kathor, bina-royee kamane wale aur dabdaba rakhne wale "asli mard" ka chitra thopta hai, jisse aam mard bhavnayein chhipane, khatra mol lene, kamzor dikhne wale ladkon ka mazak udane aur berozgari mein bhari mansik tanav jhelne par majboor hote hain. [[eg:College ya corporate mahaul mein kai yuva mard peer pressure mein tez bike chalaane, daaru peene ya apni depression chhipane par majboor hote hain kyunki kamzori dikhane par unki "mardangi" par sawaal uthta hai.]]

Par gender kabhi akela nahi chalta: [[thinker:Kimberlé Crenshaw]] aur [[thinker:Patricia Hill Collins]] ne ==Intersectionality== ke zariye saabit kiya ki class, jaati, race, viklangta aur sexuality ek saath mil kar asar daalte hain. Detroit ki Black working-class aurat ya Bihar ki bhoomiheen Dalit mahila mazdoor ([[thinker:Sharmila Rege]]) aisa compounded shoshan jhelti hai jo sirf "women" ya "workers" ko alag padhne par gayab ho jaata hai.

## 3. Race, Ethnicity aur Unki Dhundhli Seema

Itihas mein **race** ne twacha ke rang aur chehre ki banavat ke aadhar par manushyon ko baanta taaki slavery, colonialism, apartheid aur Nazi Holocaust ko sahi thehraya jaa sake. World War II ke baad **UNESCO ki 1950 ki mashhoor report *The Race Question*** ne scientists aur samaj-shastriyon ke saath biological racism ko jhootha saabit kiya—dikhaya ki buddhi aur chamdi ke rang ka koi rishta nahi hai, aur charcha ko ==ethnicity== (sajha bhasha, dharm, riti-riwaj aur purkhon ki kahani se juda samuday) ki taraf moda.

Lekin aaj samaj-shastri dekhte hain ki **race aur ethnicity ke beech ki rekha behad dhundhli (blurred) ho chuki hai**:
- **Naya Cultural Racism ([[thinker:Ali Rattansi]]):** Jahan khule rangbhed par kanooni rok hai, wahan ==New Racism== pehnave, hijab, khan-paan, dharm ya accent ko nishana bana kar cultural minorities ko alag-thalag dikhata hai.
- **Colonial Racialisation:** Bharat mein Angrezon ne Sikhs, Gurkhas, Jats, Rajputs aur Marathas jaise cultural-regional groups ko galat tareeke se biological "martial races" kaha; aaj metro shehron mein Northeast Indians par chehre ke aadhar par bhedbhaav ya minorities ko ek monolithic khatra dikhana ethnicity ke racialisation ka jeeta-jaagta saboot hai.
- **Institutional Racism:** [[thinker:W.E.B. Du Bois]] aur [[thinker:Geoff Egan]] ("total race society") dikhate hain ki kanooni barabari ke baad bhi housing, naukri, police aur mazak mein racial bhed chalta rehta hai.

| Dimension | Mukhya Aadhar | Seema Bachane ka Tareeka | Aaj ki Maujoodgi |
| --- | --- | --- | --- |
| Class | Sampatti, aamdani, degrees | Alag schooling, poonji virasat | Gig asuraksha vs degree-holder tech elites |
| Status Group | Samajik izzat, lifestyle, kul | Endogamy, khaas clubs, jaati niyam | Matrimonial filters, sanskritik bhed |
| Gender | Samaj-nirmit masculinity-femininity | Kaam ka ling-bantwara, suraksha rok | Unpaid care bojh, glass ceiling |
| Ethnicity | Sajha sanskriti, bhasha, itihas | Situational seema badalna (Barth) | Manipur takraav, bhasha/kshetra andolan |
| Race | Rang-roop aur sharirik chinha | Institutional aur cultural "New Racism" | Kiraye mein bhedbhaav, migrant profiling |

### Duniya Mein Ethnicity Kyun Aur Tez Ho Rahi Hai?

Smartphones aur global markets ke daur mein ethnic takraav kyun badh raha hai? Do purane siddhanton ke baad structural wajah samjho:
- **Primordialist Nazariya ([[thinker:Clifford Geertz]]):** Ethnicity ko khoon, parivar aur matribhasha ke gahre, prachin bhavnatmak bandhanon ("apne jaise ke prati aakarshan") se jodta hai jo aasani se nahi mitte.
- **Instrumentalist Nazariya ([[thinker:Fredrik Barth]]):** Maanta hai ki ethnic seemayein lachili hoti hain jinhe rajneetik aur aarthik fayde (jaise statehood ya reservation) ke hisaab se chuna jaata hai. [[eg:Haryana ka ek hi vyakti nadi-pani vivad mein Haryanvi, reservation maang mein Jat aur dharmik dhruvikaran mein Hindu pehchan ko sabse aage rakh kar ethnic seema badal leta hai.]]
- **Donald Noel aur Global Kaaran:** [[thinker:Donald Noel]] ke mutabik ethnic stratification tabhi ubharti hai jab chaar baatein milein—**contact**, **scarce resources ki competition**, **power farak**, aur **ethnocentrism** (doosron ke khan-paan, sharab ya shaadi-talaq niyamon ko kamtar maanna). Asaman vikas, sharanarthi darr aur vote-bank rajneeti Manipur (Kuki-Meitei-Naga), European nativism aur global conflicts mein ethnicity ko aur tez karte hain. [[link:Ise Paper 2 Unit 13 (Ethnicity and Identity Movements) aur Unit 15 (Ethnic Conflicts and Communalism) se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Primordialist Nazariya (Clifford Geertz)',
    rightTitle: 'Instrumentalist Nazariya (Fredrik Barth)',
    rows: [
      {
        aspect: 'Pehchan ka Srot',
        left: 'Khoon, rishtedari aur bhasha ke gahre prachin lagav',
        right: 'Labh aur satta ke liye haalaat ke hisaab se chune gaye daav',
      },
      {
        aspect: 'Seemaon ka Swaroop',
        left: 'Pakki, bhavnatmak aur tark se mushkil se badalne wali',
        right: 'Lachili, lagatar nayi banti aur context ke saath badalti hui',
      },
      {
        aspect: 'Netaon ki Bhoomika',
        left: 'Neta janta mein pehle se maujood gahri bhavnaon ko jagate hain',
        right: 'Neta seat, naukri ya rajya paane ke liye pehchan ko hathiyar banate hain',
      },
      {
        aspect: 'Indian Misaal',
        left: 'Ghanishth vyaparik ya bhashayi samudayon mein aam rishta-jod',
        right: 'Bodoland maang, jaati reservation ya dharmik muddon par pehchan badalna',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: '1. Group Contact',
        text: 'Migration, jeet ya vyapar se alag ethnic samuh aamne-saamne aate hain',
      },
      {
        label: '2. Scarce Competition',
        text: 'Zameen, naukri, makaan ya satta ke liye tez muqabla shuru hota hai',
      },
      {
        label: '3. Power Differential',
        text: 'Ek samuh ke paas sarkar, sena ya bazaar ki zyada taqat hoti hai',
      },
      {
        label: '4. Ethnocentrism',
        text: 'Apni sanskriti ko shreshth maan kar doosre samuh ko neeche rakha jaata hai',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'New Middle Class',
    meaning:
      'Rational bureaucracy aur modern bazaar se badhi white-collar professionals, managers aur specialists ki parat—jiski pehchan degree-nivesh aur deferred gratification hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Hegemonic Masculinity',
    meaning:
      'Raewyn Connell ka siddhant ki samaj ek bhavna-heen, kamane wale aur dabdaba rakhne wale aadarsh mard ka roop banata hai jo auraton aur saamanya mardon dono par dabav daalta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Intersectionality',
    meaning:
      'Patricia Hill Collins aur Kimberlé Crenshaw ka framework jo dikhata hai ki gender, class, jaati, race aur sexuality alag-alag nahi balki ek saath mil kar bhedbhaav rachte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Ethnic Boundaries',
    meaning:
      'Fredrik Barth ka vichar ki ethnicity sirf alag-thalag rehne se nahi balki insider aur outsider ke beech lagatar badalti sanskritik seemaon se banti hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Status honour is normally expressed by the fact that a specific style of life can be expected from all.',
    context: 'Class badhne ke baad bhi pehnava, khan-paan aur endogamy status diwar kaise bachate hain.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'I measure the progress of a community by the degree of progress which women have achieved.',
    context: 'Jaati-mukti aur mahila-mukti ko ek hi samajik badlaav ka hissa batane wala vichar.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2014–2023 PYQ Goldmine: Masculinity, Intersectionality aur Modernity Paradox',
    body: 'Gender ko sirf "women’s issues" tak mat rokna! 2014 PYQ seedhe poochta hai ki gender MALE identity ko kaise shape karta hai (Raewyn Connell ki hegemonic masculinity + breadwinner stress likho). 2019 Modernisation Paradox ke liye Yogendra Singh, M.N. Srinivas, Weberian status closure aur Barth ko jodo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Race ko Biological aur Ethnicity ko Sirf Cultural Maanna',
    body: 'UNESCO (1950) ke baad sociology biological race ko jhootha maanti hai—race aur ethnicity dono samaj-nirmit hain! Ali Rattansi ke "New Racism" mein pehnave, dharm aur accent ko hi racialise kiya jaata hai, jisse dono ki seema dhundhli ho jaati hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Quick Memory Hook: Donald Noel ka CCPE Formula',
    body: 'Jab batana ho ki shant sanskritik vividhta kab ethnic hierarchy mein badalti hai, Donald Noel ke 4 kadam yaad rakho—CCPE: Contact + Competition + Power Differential + Ethnocentrism.',
  },
  {
    kind: 'answerBox',
    intro:
      'Aaj ki samajik stratification ko sirf income brackets se nahi samjha jaa sakta; class, status groups, gender, ethnicity aur race ek saath mil kar taqat aur izzat baant-te hain.',
    points: [
      'Class aur New Middle Class: Bureaucracy se badhi white-collar middle class degrees aur deferred gratification par tiki hai aur populist politics ko prabhavit karti hai (Bell, Goldthorpe, Lipset).',
      'Status Groups aur Ascription: Modernisation jaati-status ko mitane ke bajaye matrimonial apps aur vote banks mein naye roop deta hai (Weber, Srinivas, Yogendra Singh).',
      'Gender aur Male Identity: Gender ek power hierarchy hai jo unpaid care work (Walby), intersectional bhedbhaav (Collins, Rege) aur mardon par hegemonic masculinity ka bojh (Connell) daalti hai.',
      'Race-Ethnicity Dhundhli Seema: UNESCO ke baad bhi Ali Rattansi ka New Racism dharm, bhasha aur pehnave ko racialise kar deta hai.',
      'Ethnicity ka Badhta Zor: Geertz ke gahre lagav aur Barth ke rajneetik chunaav, Noel ke resource takraav ke saath mil kar ethnicity ko aadhunik duniya mein tez banaye rakhte hain.',
    ],
    conclusion:
      'In paanchon aayamon ko ek saath padhne se economic reductionism door hota hai aur dikhta hai ki modern bazaar purani asmitaon ko kaise naye tareeke se istemal karta hai.',
  },
]

export const topic3Hi: TopicLangContent = { summary, mindMap, sections }