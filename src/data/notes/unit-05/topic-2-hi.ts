import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Stratification ke siddhant is sawaal par takrate hain ki kya asaman inaam yogyata ko chalaane wala jaroori device hai (Parsons, Davis & Moore), status quo bachane wala bahaana (Tumin), poonjiwadi shoshan ka maidan (Marx), ya class, status aur party ka multi-dimensional khel (Weber)—jabki feminist aalochak dikhate hain ki purane siddhant mahilaon ke unpaid kaam ko nazarandaz karte rahe.'

const mindMap: MindMapData = {
  title: 'Unit 5.2 · Theories of Social Stratification',
  center: 'Samaj Mein Parat Kyun Hai',
  subtitle: 'Functional Jaroorat vs Conflict aur Power Monopoly',
  branches: [
    {
      title: 'Structural-Functionalism',
      color: 'lavender',
      thinkers: ['Talcott Parsons', 'Kingsley Davis', 'Wilbert Moore', 'Melvin Tumin'],
      points: [
        'Parsons: Value consensus samuhik lakshyon ke yogdaan ko inaam deta hai',
        'Davis & Moore (1945): Role allocation aur lambi training ke liye unconscious device',
        'Tumin (1953): Importance naapna mumkin nahi; privilege pratibha ko rokta hai',
        'Empirical tests: Rosenfeld (Israeli Kibbutz) aur Djilas (USSR bloc New Class)',
      ],
    },
    {
      title: 'Marxist Conflict Theory',
      color: 'yellow',
      thinkers: ['Karl Marx', 'Friedrich Engels', 'Louis Althusser', 'Erik Olin Wright'],
      points: [
        'Production sadhanon ka malikana haq Bourgeoisie aur Proletariat mein baantta hai',
        'Surplus value ki loot ko false consciousness aur state ideology chhupati hai',
        'Class-in-itself -> Class-for-itself: polarization aur kranti ka rasta',
        'Neo-Marxists: Wright (contradictory class locations), Dahrendorf (authority)',
      ],
    },
    {
      title: 'Weberian Tripartite Model',
      color: 'mint',
      thinkers: ['Max Weber', 'Margaret Stacey', 'Frank Parkin', 'W.G. Runciman'],
      points: [
        'Power ke teen aayam: Class (market), Status (izzat) aur Party (sangathan)',
        'Chaar market classes: propertied, white-collar, petty bourgeoisie, manual labour',
        'Status groups lifestyle aur social closure chalate hain (Hindu jaati charam roop)',
        'Marx ki aalochna: bureaucracy se middle class badhti hai; socialism mein officer raaj',
      ],
    },
    {
      title: 'Status-Quo, Gender aur India',
      color: 'pink',
      thinkers: ['Joan Acker', 'Sylvia Walby', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Gender-blindness: Goldthorpe ke male-head rule ne auraton ka kaam chhupaya',
        'Status-quo bias: functionalism maujooda asamanata ko "efficiency" batata hai',
        'India fit: Davis-Moore ascriptive caste mein fail; UPSC/IT mein bhi coaching bias',
        'Paper 2 link: Caste-class nexus, kisan elites aur post-1991 IT professionals',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-01-stratification-theories.webp',
    alt: 'Comparison chart of Functionalist Davis and Moore with Melvin Tumin critique, Marxist class polarization and surplus value, and Weberian class status party framework',
    caption:
      'Stratification ke har siddhant ka alag jawab hai: kya oonche-neeche inaam yogyata ko mehnat ke liye utsahit karte hain, ya sampatti, status closure aur taqat ki monopoly bachate hain?',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 01',
  },
  {
    kind: 'md',
    body: `## 1. Structural-Functionalist Theory: Asamanata ek Samajik Device ke Roop Mein

Aasaan shabdon mein samjho: ek neurosurgeon ya airline pilot ko safai-karmi ya clerk se itni zyada salary aur izzat kyun milti hai? Structural-functionalists ek chaunkaane wala jawab dete hain — unke mutabik oonch-neech kisi saazish se nahi chalti, balki samaj ko chalaane ke liye zaroori hai ki kathin aur zimmedari wale kaamon par yogy logon ko laane ke liye alag inaam rakhe jaayein.

### Talcott Parsons: Value Consensus Model

[[thinker:Talcott Parsons]] ke mutabik har samaj ==value consensus== par chalta hai — yaani is baat par aam sahmati ki kya cheez achhi aur mahatvapurna hai. Har samaj unhi mulyon ke hisaab se samuhik lakshya banata hai (jaise America mein aarthik tarakki ya shikari kabile mein bahaduri), aur jo log un lakshyon mein bada yogdaan dete hain, unhe zyada izzat, paisa aur adhikar milta hai. [[eg:Aaj ki corporate economy mein jo tech founders digital payment apps banate hain unhe aam clerk se hazaaron guna zyada paisa milta hai kyunki samaj innovation aur growth ko sabse bada mulya maanta hai.]] Niche ke log thoda naaraaz bhi hon, tab bhi shared values samaj ko jode rakhti hain.

### Kingsley Davis & Wilbert Moore (1945): Role Allocation aur Unconscious Device

Apne mashhoor paper *Some Principles of Stratification* mein [[thinker:Kingsley Davis]] aur [[thinker:Wilbert Moore]] kehte hain ki stratification ==universal, inevitable aur ek unconscious device== hai jisse samaj apni sabse badi zaroorat poori karta hai: ==effective role allocation and performance==. Bartan dhona ya gate sambhalna koi bhi kar sakta hai, par brain surgery, administration ya fighter-jet udana lambi aur kathin training maangta hai.

Samaj kaabil yuvaon ko itni kathin padhai aur bhari zimmedari ke liye kaise taiyar karta hai?
- **Functional Importance ke Do Paimane:** Koi pad tab zyada mahatvapurna hota hai jab (1) uski skill rare ho aur kam log use seekh paayein (ek doctor nurse ka kaam kar sakta hai, par nurse doctor ka nahi), aur (2) baaki logon ka kaam uske faislon par tika ho (managers par staff ki nirbharta).
- **Teen Functional Inaam:** Samaj bade padon par ==sustenance and comfort== (zyada pagar), ==humour and diversion== (aaram aur suvidha), aur ==self-respect and ego expansion== (samajik shaan) jod deta hai. [[eg:Bharat mein UPSC aspirants 2–4 saal ki corporate salary—lagbhag ₹12–20 lakh ka nuksan—chhod kar din-raat padhte hain kyunki IAS ya IPS banne ke baad milne wali izzat, taqat aur suraksha us tyag ki bharpaai kar deti hai.]]
- **Motivation aur Ekta:** Oonche inaam pad par baithe logon ko mehnat karte rehne ki prerna dete hain aur upar-neeche ka chain of command shanti rakhta hai.

### Melvin Tumin ki Aalochna aur Status-Quo ka Aarop

1953 mein [[thinker:Melvin Tumin]] ne Davis aur Moore ke har daave ki pol kholi aur dikhaya ki functionalism aksar maujooda ==status quo== ko sahi thehrane ka bahaana ban jaata hai:
- **Importance ka Golmal Paimana:** Kaun sabit karega ki ek film star ya hedge-fund CEO ek primary school teacher, sainik ya sewer saaf karne wale se zyada zaroori hai? Pagar samajik upyogita se nahi, ==bargaining power== se tay hoti hai.
- **Pratibha ko Rokna:** Ameer parivar acche school, poshan aur coaching par kabza kar lete hain; is tarah stratification garib, Dalit ya mahilaon ki pratibha ko ubharne se pehle hi daba deta hai.
- **Training Khud Ek Inaam Hai:** College-university ki padhai apne aap mein azaadi, dosti aur gyaan deti hai, aur shuruati career mein kharch jaldi vasool ho jaata hai—isliye umrbhar bhari asamanata beja hai.
- **Ekta Nahi, Darar:** Kam inaam aur rukawat dekh kar neechle vargon mein bharose ki jagah jalan, shanka aur takraav paida hota hai.
- **Universality par Empirical Saboot:** Bina private property wale samajon mein bhi power-rank ubhra: [[thinker:Eva Rosenfeld]] ne Israeli **Kibbutzim** mein *leader-managers* aur aam members ke beech taqat ka farak dekha, aur [[thinker:Milovan Djilas]] (*The New Class*) tatha [[thinker:Frank Parkin]] ne dikhaya ki communist USSR bloc mein party bureaucrats ek nayi shoshak shreni ban gaye.

[[trap:Jab UPSC pooche ki Davis-Moore aaj ke Bharat par kitna fit baithta hai (2016 PYQ), toh seedha "haan" ya "na" mat likho. Dikhao ki yeh janm-aadharit jaati vyavastha par bilkul fail hai, 1991 ke baad IT, corporate aur UPSC competition ko kuch had tak samjhata hai, par mehangi English schooling aur coaching fees aaj bhi asli merit ko bigaadti hain.]]

## 2. Marxist Theory: Class Polarization aur Surplus ki Loot

Jahan functionalists stratification ko ek sahyogi seedhi maante hain, wahin [[thinker:Karl Marx]] ise ek sangharsh ka maidan kehte hain jahan malik log mazdooron ki mehnat ka munafa loot-te hain. Marx ke mutabik har itihasik samaj (prachin aadi samaj ko chhod kar) do mukhya vargon mein bant-ta hai, jinka aadhar ==means of production== (zameen, factory, machines, poonji) par malikana haq hai.

Poonjiwad mein ==Bourgeoisie== poonji ke malik hain aur ==Proletariat== sirf apna shram bechte hain; dono ke beech **antagonistic cooperation** hota hai kyunki mazdoor ki pagar badhne se malik ka munafa ghatta hai. Mazdoor ke unpaid shram se nikla surplus malik ki jeb mein jaata hai, aur school, dharm, media—jise [[thinker:Louis Althusser]] ==Ideological State Apparatuses (ISAs)== kehte hain—mazdooron ko ==false class consciousness== mein rakhte hain. Par tez competition chhote dukaandaron (*petty bourgeoisie*) ko neeche dhakelta hai (**class polarization**), jisse shramik ek bhautik ==class-in-itself== se jaagruk ==class-for-itself== ban kar kranti se poonjiwad ulat dete hain. [[eg:Jab Bharat ke shehron mein hazaaron delivery riders kam hoti gig-kamai par WhatsApp groups bana kar ek saath app log-off strike karte hain, toh ek bikhri class-in-itself ekjut class-for-itself banne lagti hai.]] Baad ke Neo-Marxists jaise [[thinker:Erik Olin Wright]] ne managers ko **contradictory class locations** mein rakha aur [[thinker:Ralf Dahrendorf]] ne sampatti ke bajaye corporate **authority** ko sangharsh ka kendra bataya.

## 3. Weberian Theory: Class, Status aur Party ke Teen Aayam

[[thinker:Max Weber]] Marx ke sangharsh-waad se sehmat the, par unhone har cheez ko sirf factory malikane tak simatne se inkaar kiya. Ek ameer kabaadi vyapari aur kam salary wale Oxford-educated IAS ya professor ka paisa barabar ho sakta hai, par samajik izzat aur shaadi ke daayron mein zameen-aasman ka farak hota hai! Isliye Weber ne power ko teen aayamon mein baanta: ==Class (Market)==, ==Status Group (Izzat)== aur ==Party (Rajneetik Sangathan)==.

| Pehlu | Marxian Stratification | Weberian Stratification |
| --- | --- | --- |
| Mukhya Aadhar | Production ke sadhanon ka malikana haq | Multi-dimensional: Class, Status aur Party |
| Classes ki Sankhya | Do mukhya virodhi varg (Bourgeoisie, Proletariat) | Market continuum (propertied, professionals, petty bourgeoisie, manual) |
| Samuhik Ekta | Class laazmi taur par krantikari community banegi | Class sirf market sthiti hai; asli community Status Group banta hai |
| Middle Class ka Bhavishya | Proletariat mein doob jaayegi (proletarianisation) | Rational bureaucracy aur skills ke saath tezi se failegi |
| Socialism ka Natija | Private property mitne se stratification khatam | State socialism mein bureaucratic afsaron ka raaj aur badhega |

Weber ke teenon pillars ko alag-alag samjho:
- **Class (Market Position aur Life-Chances):** Ek jaisi market skill ya sampatti rakhne wale log ek class banate hain (jaise shareholders, doctors, chhote vyapari, mazdoor), jisse unke life-chances tay hote hain—bina zaroori hue ki unmein ekta ho.
- **Status Group (Social Honour aur Closure):** Status groups ek jaisi ==style of life== aur izzat baant-te hain aur ==social closure== se apni seema bachate hain—jaise apni hi biradari mein shaadi, khaas clubs, aur naye ameer (*nouveaux riches*) ko "gawar" maankar bahar rakhna. [[eg:Weber ne paramparik Bharat ki jaati vyavastha ko status group ka sabse pakka roop bataya jahan Brahmin kam paise ke bawajood izzat mein aage rehte the—aur England mein Margaret Stacey ne ek hi working class ke andar "respectable" aur "rough" status groups dekhe.]]
- **Party (Organised Political Power):** Political parties, trade unions, caste sabhaayein aur pressure groups soch-samajh kar taqat haasil karne ko bante hain aur class ya status se paar jaa sakte hain.

## 4. Kya Stratification Theory Gender-Blind Hai? (Feminist Aalochna)

Lambi sadi tak bade-bade stratification siddhanton ne ghar ke mukhiya mard ki naukri ko poore parivar ki rank maan liya, jisse mahilaon ki mehnat aur bhedbhaav theory se gayab ho gaya. Feminist samaj-shastriyon ne iske chaar bade chhed pakde:
- **Male-Head "Conventional" Rule:** [[thinker:John Goldthorpe]] auraton ki class unke pati ke kaam se naapte the; [[thinker:Joan Acker]] ne ise "intellectual sexism" kaha kyunki isse kamane wali auraton aur alag female labour market ki sachai chhip jaati hai.
- **Unpaid Care Work ki Andekhi:** Davis-Moore ne manager ke kaam ko toh mahatvapurna maana, par ghar ki rasoi, parvarish aur care work ko gina hi nahi jiske bina koi mazdoor subah kaam par pahunch hi nahi sakta ([[thinker:Ann Oakley]], [[thinker:Christine Delphy]]).
- **Sirf Capitalism par Dosh:** Marxists ne mahila shoshan ko sirf poonjiwad se joda; [[thinker:Heidi Hartmann]] aur [[thinker:Sylvia Walby]] ne dikhaya ki patriarchy capitalism se purani hai aur ghar, hinsa tatha state ke zariye khud ek alag system chalati hai.
- **Intersectional Taqat:** [[thinker:Patricia Hill Collins]] aur [[thinker:Sharmila Rege]] ne saabit kiya ki gender akela nahi chalta—class, jaati, race aur gender mil kar alag asar daalte hain (isi dabav ke baad UK census ne 2000 mein auraton ki class unke apne job se naapni shuru ki). [[link:Patriarchy aur sexual division of labour ko gehrai se Paper 1 Unit 9 aur Paper 2 Unit 7 mein jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Davis & Moore (Functionalist Paksh)',
    rightTitle: 'Melvin Tumin (Aalochnamak Jawab)',
    rows: [
      {
        aspect: 'Asamanata ka Janm',
        left: 'Samaj ko chalaane aur efficiency ke liye unconscious device',
        right: 'Purana elite privilege, bargaining power aur closure',
      },
      {
        aspect: 'Functional Importance',
        left: 'Rare skill aur doosron ki nirbharta se objectively naapi jaaye',
        right: 'Subjective rai hai; zaroori safai aur care work ko kamtar aanka jaata hai',
      },
      {
        aspect: 'Pratibha ki Khoj',
        left: 'Oonche inaam limited talent ko kathin padon ki taraf khinchte hain',
        right: 'Talent bahut hai, par class-jaati-gender barriers garibon ko rok dete hain',
      },
      {
        aspect: 'Training ka Tyag',
        left: 'Lambi bina-pagar padhai ke badle umrbhar oonchi kamai zaroori hai',
        right: 'Padhai khud izzat aur sukhad anubhav deti hai; cost jaldi vasool ho jaati hai',
      },
      {
        aspect: 'Samaj par Asar',
        left: 'Shared values ke saath samaj ko shanti se jodti hai',
        right: 'Nechle vargon mein shanka, alagav, status-quo aur sangharsh badhati hai',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Aarthik Shoshan',
        text: 'Poonjipati surplus value nikaalte hain aur petty traders doobte hain (Polarisation)',
      },
      {
        label: 'Class-in-Itself',
        text: 'Mazdoor ek jaisi mushkil jhelte hain par false consciousness se bikhre rehte hain',
      },
      {
        label: 'Class-for-Itself',
        text: 'Union aur sangharsh se asli class jaagrukta aur ekta banti hai',
      },
      {
        label: 'Kranti aur Badlaav',
        text: 'Bahusankhyak shramik private productive property khatam karte hain',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Role Allocation',
    meaning:
      'Davis aur Moore ka woh functional mechanism jisme samaj kathin aur zaroori padon par oonchi pagar-izzat rakh kar kaabil logon ko unki taraf aakarshit karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Class-in-Itself vs Class-for-Itself',
    meaning:
      'Marx ka farak: ek objective shreni jo saman aarthik haalat baant-ti hai (in-itself), banaam ek jaagruk aur sangathit political varg jo apne haq ke liye ladta hai (for-itself).',
    thinkerSlug: 'karl-marx',
  },
  {
    kind: 'keyTerm',
    term: 'Status Group & Social Closure',
    meaning:
      'Saman samajik izzat aur lifestyle wala samuday jo shaadi, dosti aur elite padon ko apne bheetar band rakh kar baaki logon ko bahar rakhta hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'The New Class',
    meaning:
      'Milovan Djilas ka siddhant ki private poonji khatam karne ke baad bhi ek-party communist deshon mein afsarshahi aur party netaon ka ek naya shoshak varg ban gaya.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'max-weber',
    quote: 'Classes, status groups, and parties are phenomena of the distribution of power within a community.',
    context: 'Marx ke ek-aayami aarthik nazariye ke khilaf Weber ka teen-starīya power model.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The ideas of the ruling class are in every epoch the ruling ideas.',
    context: 'Batata hai ki shasak varg ki vichardhara kaise shoshan ko aam common sense bana deti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Sabse Zyada Pooche Jaane Wale 3 Angles',
    body: 'Unit 5 ke ek-chauthai se zyada PYQs yahin se aate hain! Teen jod hamesha taiyar rakho: (1) Davis-Moore + Tumin + India fit (2016/2018/2019/2025), (2) Marx vs Weber par class/status/party/bureaucracy (2014/2015/2017/2019/2021), aur (3) 2025 ke liye Feminist gender-blindness critique (Joan Acker, Goldthorpe, Sylvia Walby).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Weber Marx ke Poori Tarah Ulta Nahi The',
    body: 'Yeh mat likhna ki Weber ne aarthik sangharsh ko mana kiya. Weber Marx se sehmat the ki bazaar ki taqat se class conflict hota hai—unka tark tha ki sirf sampatti akeli stratification nahi chalati, aur socialism aane par bureaucratic taqat aur badh sakti hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Functional Universality Todne Wale Do Pakke Saboot',
    body: 'Jab bhi aaye ki kya stratification har samaj mein laazmi hai, yeh do studies zaroor likho: Eva Rosenfeld ki Israeli Kibbutzim study (bina private sampatti ke bhi leader-managers ke paas zyada power-izzat thi) aur Milovan Djilas ki Yugoslavia/Eastern bloc par The New Class.',
  },
  {
    kind: 'answerBox',
    intro:
      'Stratification ke teenon mukhya siddhant—structural-functionalist, Marxist aur Weberian—samajik asamanata ke alag pehlu dikhate hain, jabki empirical aur feminist aalochanaayein unki seemaayein kholti hain.',
    points: [
      'Structural-Functionalism (Parsons, Davis & Moore): Shared values aur role allocation ke zariye asamanata ko unconscious aur upyogi batata hai—par aksar status quo ko sahi thehrata hai.',
      'Functionalist Critique (Tumin, Rosenfeld, Djilas): "Importance" ko subjective batata hai, caste-class barriers se pratibha rukna dikhata hai, aur bina sampatti wale samajon mein bhi power hierarchy sabit karta hai.',
      'Marxist Theory (Marx, Wright, Althusser): Asamanata ki jad production sadhanon ke malikana haq, surplus ki loot, ideological state control aur class struggle mein dekhta hai.',
      'Weberian Model (Weber, Parkin, Stacey): Power ko Class (market), Status Group (closure) aur Party mein baant kar middle class ke badhne aur bureaucracy ke khatre ko samjhata hai.',
      'Feminist Sudhar (Acker, Walby, Collins): Male-head bias ko tod kar unpaid domestic kaam, gender labour divide aur intersectional patriarchy ko centre mein laata hai.',
    ],
    conclusion:
      'Functional incentives, Marxian shoshan, Weberian closure aur feminist intersectionality ko milane se hi aaj ki jaati, class aur global asamanata poori tarah samajh aati hai.',
  },
]

export const topic2Hi: TopicLangContent = { summary, mindMap, sections }