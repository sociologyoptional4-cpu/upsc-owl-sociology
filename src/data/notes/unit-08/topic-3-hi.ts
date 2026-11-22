import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 8.3 · Religion in Modern Society',
  center: 'Religion & Modernity',
  subtitle: 'Science • Secularisation • Revivalism • Fundamentalism',
  branches: [
    {
      title: 'Science & Religion Debate',
      color: 'lavender',
      thinkers: ['Ian Barbour', 'Stephen Jay Gould', 'Robert K. Merton', 'Talcott Parsons'],
      points: [
        'Parsons: Science (empirical means) vs Religion (non-empirical means to logical ends)',
        'Barbour 4 Models: Conflict (Dawkins), Independence (Gould NOMA), Dialogue, Integration',
        'Merton Thesis: Puritan ethos aur Royal Society ne modern science ko aage badhaya',
        'Ecklund survey aur ISRO ki Tirupati parampara dono ka seh-astitva dikhate hain',
      ],
    },
    {
      title: 'Secularisation Thesis',
      color: 'yellow',
      thinkers: ['Bryan Wilson', 'Steve Bruce', 'Karel Dobbelaere', 'M.N. Srinivas'],
      points: [
        'Wilson: woh prakriya jisme dharmik soch, pratha aur sansthaon ka mahatva ghat-ta hai',
        'Bruce ke 3 drivers: structural differentiation, societalization aur individualism',
        'Dobbelaere ke 3 levels: Macro (state/law), Meso (church reform), Micro (personal faith)',
        'Srinivas ka Indian secularisation aur David Martin ke global comparative trends',
      ],
    },
    {
      title: 'Critiques & Secularism',
      color: 'mint',
      thinkers: ['Thomas Luckmann', 'Grace Davie', 'T.N. Madan', 'Rajeev Bhargava'],
      points: [
        'Luckmann ka Invisible Religion aur Davie ka Believing without Belonging',
        'Herberg ka internal secularisation (US churches) aur measurement critiques',
        'Indian Secularism behas: T.N. Madan & Ashis Nandy vs Rajeev Bhargava Principled Distance',
        'Peter Berger ka U-turn: modernity godlessness nahi balki pluralism laati hai',
      ],
    },
    {
      title: 'Revivalism & Fundamentalism',
      color: 'pink',
      thinkers: ['José Casanova', 'Samuel Huntington', 'Anthony Giddens', 'Steve Bruce'],
      points: [
        'Resacralization aur Casanova ka de-privatization of public religion',
        'Kaaran: materialistic hedonism ka khalipan, right-wing politics (Hagia Sophia), technology',
        'Revivalism (andaruni sudhar) vs Communalism (political dushmani - Bipan Chandra)',
        'Fundamentalism: scriptural literalism vs late-modern risk (Giddens, Madan, Shupe, Bruce)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u08-02-religion-modern-science.webp',
    alt: 'P1 Unit 8 infographic: Religion, Science & Secularisation — Science, Secularization & Resacralization in Modernity',
    caption: 'Science, Secularization & Resacralization in Modernity — Religion, Science & Secularisation ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 8 Visual 02',
  },
  {
    kind: 'md',
    body: `## Classical Sociologists ko Kyun Laga Tha ki Dharm Khatam Ho Jayega?

Aasaan shabdon mein samjho: pre-modern kheti-bari wale samaj mein insaan har sawaal ke liye dharm ke paas jaata tha — barish kyun nahi hui, chechak (smallpox) ki bimari kyun phaili, raja ka hukm kyun maana jaaye, aur maut ke dukh ko kaise saha jaaye. Jab Enlightenment aur Industrial Revolution ke baad modern science, aspatal aur nation-state aaye, toh teeno classical founders — **Auguste Comte** (Law of Three Stages), **Karl Marx** (communism mein afeem ka ant) aur **Max Weber** (rationalisation aur *disenchantment of the world*) — ne bhavishyavani ki ki science badhne ke saath dharm dheere-dheere gayab ho jayega. Lekin 21st century mein aisa bilkul nahi hua! Isi uljhan se sociology ke 4 bade topics nikalte hain.

## 1. Science aur Religion: Dushman, Ajnabi ya Saathi?

Aam bolchal mein log sochte hain ki Science aur Religion ek doosre ke kattar dushman hain. Agar hum sirf gyaan ke tarike (epistemology) ko dekhein, toh farak saaf hai: **Science** empirical saboot, tark, universal rules aur [[thinker:Robert K. Merton]] ke *organised scepticism* par chalta hai jahan har niyam par sawaal uthaya jaa sakta hai ([[thinker:Karl Popper]]). Iske ulte **Religion** aastha, pavitra granth (revelation) aur sacredness par chalta hai jahan sawaal uthana mana hota hai. [[eg:Jab Galileo Galilei ne telescope se sabit kiya ki prithvi suraj ke chakkar lagati hai (heliocentric), toh medieval Catholic Church ne Bible ke khilaf bolne par unhe saza di.]]

Lekin sociology is "sirf dushmani" wale nazariye ko adhoora maanti hai! [[thinker:Talcott Parsons]] ne ek mashhoor line mein samjhaya: ==Science has empirical means to logical ends, and religion has non-empirical means to logical ends==. Iska matlab samjho: insaan ka maqsad (*logical end*) hamesha apni zindagi ko surakshit aur arth-purna banana hota hai. Jahan tak physical duniya ka kaam hai (bimari ka ilaj ya rocket udana), wahan insaan *empirical means* (Science) use karta hai. Lekin jab doctor ICU ke bahar kahe ki "ab dawa ke saath dua kijiye" — yani jahan empirical science ki seema khatam ho jaati hai (maut, kismat ka anyay, andaruni shanti) — wahan insaan *non-empirical means* (Religion) ka sahara leta hai taaki manasik santulan bana rahe!

### Ian Barbour ke Chaar Models (Science vs Religion)

Apni kitaab *When Science Meets Religion* (2000) mein [[thinker:Ian Barbour]] (aur [[thinker:John Polkinghorne]]) ne science aur dharm ke rishte ko 4 models mein baanta:

| Barbour Model | Mukhya Sociological Tark | Pramukh Thinkers | Udaharan / Empirical Evidence |
| --- | --- | --- | --- |
| 1. Conflict | Dono mein seedhi jang; science badhega toh dharm ghatega | Richard Dawkins, Peter Atkins, Auguste Comte | Galileo vivad; Creationism बनाम Darwin evolution |
| 2. Independence | Dono ke kshetra alag: Science = "Kaise" (facts), Religion = "Kyun" (values) | Stephen Jay Gould (NOMA), Talcott Parsons | Operation theatre mein surgery ke saath parivar ki prarthana |
| 3. Dialogue | Brahmand ki shuruat aur ethics par dono ke beech sammanjanak samvad | Alvin Plantinga, Faraday Institute | AI ethics, cloning aur climate change par sanjhi charcha |
| 4. Integration | Dono ek hi satya ke hisse; dharmik ethos ne modern science ko janm diya | Robert K. Merton (Merton Thesis), L. Principe | Puritan Protestants dwara UK Royal Society banana; Ramanujan & ISRO |

- **Stephen Jay Gould ka NOMA:** Independence model mein [[thinker:Stephen Jay Gould]] ne ==Non-Overlapping Magisteria (NOMA)== diya — science bahari bhautik duniya ke niyam khojta hai aur dharm andaruni naitik mulya (moral values) sikhata hai, isliye dono ka takrana zaroori nahi.
- **Merton Thesis aur Scientists ki Aastha:** [[thinker:Robert K. Merton]] ne *Science, Technology and Society in Seventeenth Century England* (1938) mein dikhaya ki **Puritan Protestantism ne hi modern experimental science ko paida kiya** kyunki Protestants maante the ki kudrat ke niyamon ko lab mein samajhna Bhagwan ki banayi duniya ki sabse badi bhakti hai (UK ki Royal Society ke shuruati founders mein bhari bahumat Protestants ka tha). Aaj bhi [[thinker:Elaine Howard Ecklund]] ke survey mein 76% American scientists kisi dharm ko maante hain aur 20th century ke 90%+ Nobel Prize winners aasthavan the! [[eg:Prachin Bharat mein Aryabhata, Sushruta aur Charaka rishi bhi the aur vaigyanik bhi; mahan ganitagya Srinivasa Ramanujan apne equations ko कुलदेवी Namagiri ki den maante the; aur ISRO scientists rocket launch se pehle Tirupati Balaji mein chhota model arpit karte hain.]]

## 2. Secularisation Thesis: Arth, Dimensions aur Global Trends

Sabse pehle ek bada confusion door karo: **Secularisation** ek *samajik prakriya (social process)* hai jisme samaj par dharm ki pakad dheeli padti hai, jabki **Secularism** ek *political-constitutional vichardhara* hai ki sarkar (state) kisi ek dharm ki nahi hogi. [[thinker:Bryan Wilson]] (1966) ki classic definition ke mutabik: ==Secularisation woh prakriya hai jiske tahat dharmik soch, dharmik pratha aur dharmik sansthayein apna samajik mahatva (social significance) kho deti hain==.

### Steve Bruce ke 3 Drivers aur Karel Dobbelaere ke 3 Levels

Modern samaj mein dharm ka asar kyun ghat-ta hai? [[thinker:Steve Bruce]] ne iske 3 structural kaaran bataye:

1. **Structural Differentiation (Disengagement):** Pehle education, kanoon, ilaj aur rajneeti sab Church/pujari ke haath mein the; modern samaj mein inke liye alag secular sansthayein (Supreme Court, university, AIIMS, Parliament) ban gayin.
2. **Societalization:** Jab chhote gaon (*Gemeinschaft*) ki jagah bade bureaucratic nation-state (*Gesellschaft*) le lete hain, toh mandir/church ki jagah sarkari daftar zindagi chalate hain. [[eg:Pehle bache ke janm par gaon ka pandit Namkaran karta tha; aaj hospital se chhutti milne se pehle Municipal Corporation (MCD) ke portal par birth certificate ke liye naam chadhana padta hai!]]
3. **Individualism & Pluralism:** Jab ek hi mohalle mein anek dharm saath rehte hain, toh kisi ek dharm ka "sirf hum hi sacche hain" wala daava kamzor pad jaata hai ([[thinker:Peter Berger]]).

Exam mein secularisation ke **Dimensions** likhne ke liye [[thinker:Karel Dobbelaere]] ke **3 Levels** sabse best hain:

- **Macro Level (Societal Secularisation):** Rajneeti, kanoon, economy aur shiksha se dharm ka alag ho jaana (disengagement).
- **Meso Level (Organisational Secularisation):** Dharmik sansthaon ka *andar se secular* ho jaana ([[thinker:Will Herberg]]). Aaj bheed jodne ke liye churches aur babas swarg-narak ke bajaye stress management, health aur career success sikhate hain. [[eg:Baba Ramdev ka bhagwa vastra pehan kar yoga wellness aur Patanjali FMCG business chalana, ya modern Indian weddings jahan 2,000 mehmaan cocktail aur Bollywood dance mein rehte hain aur asli pheron ke waqt pandal mein 20 log bachenge!]]
- **Micro Level (Personal Secularisation):** Logon ki niji zindagi mein church attendance aur roz ki pooja-vrat ghatna (Eurobarometer survey mein France 40%, Sweden 34%, Germany 27% aur Pew survey mein duniya ke ~1.1 billion log "nones"/atheist/agnostic hain; Ajanta-Ellora aur Khajuraho aaj mandir ke bajaye ASI ticket wale tourist spots hain).

### Bharat mein Secularisation (M.N. Srinivas) aur Critiques

[[thinker:M.N. Srinivas]] (*Social Change in Modern India*, 1966) ne dikhaya ki Bharat mein modern education, urbanisation, caste-free IT/factory jobs, mass media, reform movements (Phule, Periyar, [[thinker:B.R. Ambedkar]]) aur samvidhanik kanoonon (Untouchability ban, Hindu Code Bill) ne **ritual purity-pollution ko ghata kar secularisation** badhaya hai. Srinivas aur sociologists yeh bhi batate hain ki **Hindu samaj secularisation ke prati zyada lachila (susceptible)** hai kyunki yahan koi ek Pope, ek band kitaab ya bachpan ki compulsory madrasa/church training nahi hai, aur andaruni aalochna (Buddhism, Bhakti, Arya Samaj) va satire (jaise film *PK*) ko sehne ki lambi parampara hai.

[[thinker:David Martin]] ne global comparative study se dikhaya ki secularisation har jagah ek jaisa nahi hai — Western Europe mein church khali hue, par USA ameer hokar bhi deeply religious raha ("In God We Trust"), aur post-communist Russia/Ukraine mein dharm wapas lauta. Secularisation thesis ki **5 pramukh aalochnayein (Critiques)**:

1. **Measurement Problem:** Pre-modern zamane ka koi survey data nahi hai; purane Europe mein log dharm se zyada social izzat dikhane church jaate the.
2. **Invisible Religion ([[thinker:Thomas Luckmann]]):** Dharm mara nahi hai, bas public dikhawe se hat kar ghar ke andar private aastha (*The Invisible Religion*) ban gaya hai.
3. **Believing Without Belonging ([[thinker:Grace Davie]]):** Aaj laakhon log church ki membership liye bina Bhagwan ya karma mein yakeen rakhte hain.
4. **Indian Secularism ki Behas ([[thinker:T.N. Madan]] & [[thinker:Ashis Nandy]] बनाम [[thinker:Rajeev Bhargava]]):** Madan aur Nandy ne kaha ki South Asia mein dharm poori zindagi (*totalising way of life*) hai, isliye yahan Western secularism thopne se backlash aur fundamentalism badhta hai. Iske jawab mein **Rajeev Bhargava** ne Bharatiya Samvidhan ke ==Principled Distance== model (Articles 25–30) ka bachav kiya — jahan state sabhi dharmon ka samman karta hai par untouchability ya Triple Talaq jaisi kuprathaon ko khatam karne ke liye positive intervention bhi karta hai.

## 3. Religious Revivalism (Resacralization) aur Fundamentalism

1970s ke baad duniya bhar mein secularisation ke ulte dharm ki dhamakedar wapsi hui — jise sociology mein ==Resacralization== ya **Religious Revivalism** aur [[thinker:José Casanova]] (*Public Religions in the Modern World*, 1994) ke shabdon mein **de-privatization of religion** kaha jaata hai.

- **Revivalism ke Mukhya Kaaran:** (1) **Materialistic Hedonism se Thakan** (ameer deshon mein paise ke baad Maslow ke self-actualisation ke liye ISKCON, Transcendental Meditation aur Osho ki taraf jhukav); (2) **Clash of Civilizations** ([[thinker:Samuel Huntington]] ne Fukuyama ko galat sabit karte hue kaha ki Cold War ke baad duniya religious civilisations — Western, Islamic, Hindu, Sinic — ke beech takrayegi; 1970s ke Arab petrodollars se global Islamic revival aur US evangelical revival); (3) **Right-Wing Politics** [[eg:Turkey mein Erdogan ki AKP sarkar dwara 2020 mein 6th-century Hagia Sophia ko Atatürk ke secular museum se wapas masjid banana — jiski Karen Barkey ne sociological aalochna ki]]; aur (4) **Technology & Mega-Pilgrimages** (Zakir Naik ya Ramdev jaise televangelists, online darshan, helicopters aur trains ki wajah se 2019 Prayagraj Kumbh Mela mein 24 crore aur Iraq ke Arba'een mein 2.5 crore shradhaluon ka aana!).

### Revivalism बनाम Communalism बनाम Fundamentalism

Bharat ke context mein **Religious Revivalism** aur **Communalism** ([[thinker:Bipan Chandra]], [[thinker:T.K. Oommen]]) ka farak samajhna behad zaroori hai: **Revivalism** apne samuday ke *andar* jhank kar purani adhyatmik garima aur shuddhata ko jagata hai (jaise Arya Samaj ka *"Back to the Vedas"*, Swami Vivekananda, ya Deoband andolan). Lekin **Communalism** ek aisi modern political ideology hai jo dharm ka istemal *doosre dharm ke khilaf* nafrat aur vote-bank ke liye karti hai!

Ant mein, **Religious Fundamentalism** ("Kattarpan") modernity ke khilaf ek aakramak pratikriya hai jo **(1) Scriptural Literalism** (pavitra kitaab ke har shabd ko patthar ki lakeer manna), **(2) Exclusivism** (sirf humara dharm saccha hai), **(3) Science aur Liberals se Takraav** (Darwin evolution, abortion aur mahila azaadi ka virodh), aur **(4) Theocratic State** ki mang karta hai.

- **Fundamentalism ki 4 Sociological Theories:**
  1. **[[thinker:Anthony Giddens]] (Late Modernity & Risk):** Aaj ki "runaway world" (job insecurity, pandemic, badalte parivar) ki ghabrahat mein fundamentalism **"tradition defended in a traditional way"** ban kar logon ko jhoothi nishchint-ta deta hai.
  2. **[[thinker:T.N. Madan]] (Modernity ka Reaction):** Fundamentalism purane samaj mein nahi tha; jab secularisation dharm ko mitane ki koshish karta hai, tab dharm apni raksha mein fundamentalist roop leta hai.
  3. **[[thinker:Anson Shupe]] (Globalisation ke Khilaf):** Western/American cultural homogenisation ke khilaf local dharmik pehchan ka ugra virodh.
  4. **[[thinker:Steve Bruce]] (Multifactorial Model):** Fundamentalism tabhi bhadakta hai jab modernisation ke saath 4 cheezein milein: **(a) Single Sacred Text** (ek kendriya kitaab hone se literal consensus aasaan hota hai, jabki Hinduism ki anek kitaabein ise mushkil banati hain), **(b) Common External Enemy** (jaise US ke khilaf Taliban ya Israel-Hamas), **(c) berozgar/marginalised youth recruits**, aur **(d) political sheh**.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1633',
        title: 'Galileo Trial बनाम Church Dogma',
        text: 'Heliocentric science aur literalist Church ke beech shuruati Conflict Model ka pratik.',
      },
      {
        year: '1938',
        title: 'Robert K. Merton — The Merton Thesis',
        text: 'Sabit kiya ki 17th-century Puritan Protestant ethos ne experimental science aur UK Royal Society ko janm diya.',
      },
      {
        year: '1966–1967',
        title: 'Bryan Wilson, Srinivas & Luckmann',
        text: 'Wilson ne secularisation define kiya; Srinivas ne Indian ritual change dikhaya; Luckmann ne Invisible Religion diya.',
      },
      {
        year: '1978–1979',
        title: 'David Martin & Global Islamic/Evangelical Wave',
        text: '1979 Iranian Revolution, petrodollar revival aur US Christian Right ne global resacralization shuru kiya.',
      },
      {
        year: '1994–1999',
        title: 'Casanova, Huntington & Berger ka U-Turn',
        text: 'Casanova ka public religion, Huntington ka Clash of Civilizations aur Berger ka desecularization/pluralism thesis.',
      },
      {
        year: '2019–2025',
        title: 'Mega-Pilgrimages, Digital Faith & Political Revival',
        text: 'Prayagraj Kumbh mein 24 crore log, Hagia Sophia reconversion (2020) aur digital televangelism ka naya daur.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Modernisation', text: 'Science, factories aur shehri migration se gaon ki parampara tooti' },
      { label: 'Differentiation', text: 'Kanoon, school aur aspatal Church ke control se bahar aaye (Macro decline)' },
      { label: 'Privatisation', text: 'Dharm ghar ke andar Invisible Religion aur spiritual markets mein simta' },
      { label: 'Modernity Crisis', text: 'Materialistic khalipan, global risk aur cultural homogenisation ka darr' },
      { label: 'Resacralization', text: 'Public revivalism, identity politics aur fundamentalism ki tez wapsi' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Religious Revivalism',
    rightTitle: 'Communalism & Fundamentalism',
    rows: [
      {
        aspect: 'Mukhya Disha',
        left: 'Samuday ke andar adhyatmik garima, shuddhata aur sanskriti ko punarjivit karna',
        right: 'Doosre samuday ke khilaf political dushmani (Communalism) ya kattar literalism (Fundamentalism)',
      },
      {
        aspect: 'Sudhar ke Prati Rukh',
        left: 'Aksar mool granthon ke aadhar par andaruni kuprathaon (jaati, andh-vishwas) ko sudharta hai',
        right: 'Andaruni liberals aur sudharwad ka virodh karta hai; auraton par sakht pabandi lagata hai',
      },
      {
        aspect: 'Doosre Dharmon par Nazariya',
        left: 'Apne samaj ke nav-nirman par dhyan; pluralist desh mein shanti se reh sakta hai',
        right: 'Doosre dharmon ko dushman ya jhootha maanta hai; pluralism aur secularism ko nakarta hai',
      },
      {
        aspect: 'State ke Saath Rishta',
        left: 'Cultural autonomy aur civil society mein naitik aawaz chahta hai (Casanova)',
        right: 'Satta par kabza, alagavवाद ya Theocratic State (dharm-tantra) banana chahta hai',
      },
      {
        aspect: 'Udaharan',
        left: 'Arya Samaj, Swami Vivekananda ka Vedanta, Deoband shiksha, Singh Sabha',
        right: 'Partition ke communal dange (Bipan Chandra); Taliban, ISIS ya hinsaवादी kattarpan',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Secularisation',
    meaning:
      'Bryan Wilson aur M.N. Srinivas ke mutabik woh samajik prakriya jisme dharmik vishwas, pratha aur sansthaon ka samajik mahatva ghat-ta hai aur woh kanoon/rajneeti se alag ho jaate hain.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Non-Overlapping Magisteria (NOMA)',
    meaning:
      'Stephen Jay Gould ka Independence model ki science (bhautik duniya ke facts) aur religion (naitik mulya aur arth) do alag kshetra hain jinमे takraav zaroori nahi.',
  },
  {
    kind: 'keyTerm',
    term: 'Resacralization & De-Privatization',
    meaning:
      'Aadhunik samaj mein dharm ka punar-ubhaar (Stark) aur dharm ka private ghar se nikal kar wapas public rajneeti aur civil society mein aana (José Casanova).',
  },
  {
    kind: 'keyTerm',
    term: 'Religious Fundamentalism',
    meaning:
      'Secularisation aur globalisation ke khilaf ek modern defensive pratikriya (Giddens, Madan, Bruce) jo scriptural literalism, exclusivism aur patriarchy par tiki hoti hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'The Puritan ethos constituted an important element in the enhanced cultivation of science in seventeenth-century England.',
    context: 'Science, Technology and Society in Seventeenth Century England (1938) — Merton Thesis jisne Protestant dharm ko modern science ki maa bataya.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'mn-srinivas',
    quote: 'The term secularization implies that what was previously regarded as religious is now ceasing to be such, and it also implies a process of differentiation.',
    context: 'Social Change in Modern India (1966) — Bharat mein shuddh-ashuddh aur dharmik niyamon ke simatne ki vyakhya.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025–2013 PYQ Pattern: Science vs Religion (3x) & Secularisation (5x)',
    body: 'Dhyan do: UPSC ne 2013 mein do sawaal ("Is religion antithetical to science?" aur Parsons ka empirical vs non-empirical means quote) poochhe aur 2025 mein phir wahi sawaal ("Nature of relationship between science and religion in modern society") repeat kiya! Har Science-Religion answer mein 4 pillars likho: (1) Talcott Parsons (empirical vs non-empirical means to logical ends), (2) Ian Barbour ke 4 Models (Conflict, Independence/NOMA, Dialogue, Integration), (3) Robert K. Merton ka Puritan-Science thesis, aur (4) Indian examples (ISRO Tirupati, Ramanujan, Yoga/Ayurveda).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Secularisation aur Secularism ko Mix Karna',
    body: 'Exam mein Secularisation aur Secularism ko ek mat likh dena! Secularisation (Bryan Wilson, Steve Bruce, Karel Dobbelaere, M.N. Srinivas) samaj ke andar chalne wali sociological process hai. Secularism (T.N. Madan, Ashis Nandy, Rajeev Bhargava ka Principled Distance) state aur samvidhan ki political philosophy hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Karel Dobbelaere ke 3 Levels: Har Secularisation Answer ka ब्रह्मास्त्र',
    body: 'Chahe UPSC global trends of secularisation (2022) poochhe, dimensions of secularisation (2015), ya Bharat mein public aur personal spheres mein dharm (2023) — apna answer Dobbelaere ke 3 levels mein baanto: Macro (State/Law disengagement), Meso (Organizational secularisation — Will Herberg, Baba Ramdev, commercial festivals/weddings), aur Micro (Individual belief — Luckmann ka Invisible Religion & Grace Davie ka Believing without Belonging).',
  },
  {
    kind: 'answerBox',
    intro:
      'Aadhunik samaj mein dharm kisi seedhi rekha mein gayab hone ke bajaye scientific rationalisation, institutional secularisation aur public revivalism ke beech lagatar naye roop le raha hai.',
    points: [
      'Science aur Religion Conflict se Aage: Epistemological antar ke bawajood Ian Barbour ke 4 models, Gould ka NOMA, Parsons ke non-empirical means aur Merton ka Puritan-Science thesis dono ka gehra rishta dikhate hain.',
      'Secularisation ke Dimensions: Structural differentiation, societalization aur individualism (Steve Bruce) ke zariye secularisation Macro, Meso aur Micro levels (Karel Dobbelaere) par alag-alag raftar se chalta hai.',
      'Global aur Bharatiya Trends (David Martin, M.N. Srinivas): Western Europe mein church khali hue, par USA mein civic religion raha aur Bharat mein ritual secularisation ke saath Principled Distance (Rajeev Bhargava) chala.',
      'Resacralization aur Revivalism (José Casanova, Peter Berger): Materialistic hedonism ke khalipan, digital media aur right-wing politics ne public religion aur Kumbh jaise mega-pilgrimages ko nayi taqat di hai.',
      'Fundamentalism as Modern Reaction (Giddens, Madan, Bruce): Scriptural literalism aur kattarpan prachin avshesh nahi, balki late-modern uncertainty aur globalisation ke khilaf ek defensive pratikriya hai.',
    ],
    conclusion:
      'Nishkarsh mein, modernity sacred ko khatam nahi karti; balki dharm ko medieval monopoly se nikaal kar private chetna, pluralistic bazar aur public politics ke naye maidan mein laa khada karti hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Modern samaj mein dharm science ke saath sirf takraav nahi balki samvad aur integration (Barbour ke 4 models, Merton thesis) dikhata hai, Macro-Meso-Micro secularisation (Wilson, Bruce, Dobbelaere, Srinivas) se guzarta hai, aur resacralization, public revivalism (Casanova) va defensive fundamentalism (Giddens, Madan) ke roop mein wapas ubharta hai.',
  mindMap,
  sections,
}