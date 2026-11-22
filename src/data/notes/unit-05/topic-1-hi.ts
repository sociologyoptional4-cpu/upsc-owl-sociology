import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociology dikhati hai ki natural farak aur samajik inequality ek nahi hote—power, graded hierarchy, Amartya Sen ki capability deprivation, Bourdieu ke chaar capitals aur social exclusion mil kar garibi aur bedakhali ko peedhi-dar-peedhi pakka karte hain.'

const mindMap: MindMapData = {
  title: 'Unit 5.1 · Equality, Inequality, Hierarchy, Poverty & Exclusion',
  center: 'Core Stratification Concepts',
  subtitle: 'Farak -> Inequality -> Hierarchy -> Exclusion aur Deprivation',
  branches: [
    {
      title: 'Equality aur Inequality',
      color: 'lavender',
      thinkers: ['Jean-Jacques Rousseau', 'Peter Saunders', 'André Béteille', 'Wilkinson & Pickett'],
      points: [
        'Saunders: Formal Equality, Opportunity aur Outcome (opportunity se unequal outcomes)',
        'Rousseau & Béteille: nature farak banati hai; samaj use inequality mein badalta hai',
        'Béteille: Harmonic vs Disharmonic systems; Cumulative vs Dispersed inequality',
        'Weber: Life-chances (opportunities) vs Life-style (status habits)',
      ],
    },
    {
      title: 'Hierarchy aur Stratification',
      color: 'yellow',
      thinkers: ['Louis Dumont', 'B.R. Ambedkar', 'Dipankar Gupta', 'Ralf Dahrendorf'],
      points: [
        'Stratification conscious groups ki parat hai; hierarchy posts ya ritual grade hai',
        'Dumont: Homo Hierarchicus caste ko purity/pollution ki ritual hierarchy maanta hai',
        'Ambedkar: Graded inequality neechli jaatiyon ko aapas mein jodne se rokti hai',
        'Gupta: Discrete castes aur muddled hierarchies ek fixed ladder ko todti hain',
      ],
    },
    {
      title: 'Poverty aur Deprivation',
      color: 'mint',
      thinkers: ['Amartya Sen', 'Pierre Bourdieu', 'Oscar Lewis', 'Herbert Gans'],
      points: [
        'Absolute (BPL/Tendulkar/Rangarajan) vs Relative poverty (Townsend, MPI)',
        'Oscar Lewis (Culture of Poverty) vs Valentine & Liebow (Situational Constraints)',
        'Merton & Stouffer: Reference group tulna se ubharti relative deprivation',
        'Sen (Capability Deficit) vs Bourdieu (Economic, Social, Cultural, Symbolic Capital)',
      ],
    },
    {
      title: 'Social Exclusion aur Self-Exclusion',
      color: 'pink',
      thinkers: ['Haralambos', 'John Veit-Wilson', 'Ashley Tellis', 'Gayle Rubin'],
      points: [
        'Sirf paise ki kami nahi—rights, banks, schools aur dignity se systemic bedakhali',
        'Forced exclusion (untouchability, trans abandonment) vs self-exclusion (ghettos)',
        'Veit-Wilson: Weak (vyakti ko jodo) vs Strong (excluding structures todo)',
        'Paper 2 link: Art 17, RTE 2009, NALSA 2014 aur affirmative action',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u05-02-mobility-dimensions-exclusion.webp',
    alt: 'Four-panel diagram showing Bourdieu capitals, mobility ladder, absolute vs relative poverty, Oscar Lewis vs situational constraints, capability approach, and structural vs self-exclusion',
    caption:
      'Garibi, capability ki kami, Bourdieu ke chaar capitals aur forced vs self-exclusion mil kar kamzor vargon ko samaj ke mukhya dhaare se bahar rakhte hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 5 Visual 02',
  },
  {
    kind: 'md',
    body: `## Natural Difference se Social Inequality aur Stratification Tak

Aasaan shabdon mein samjho: ek hi ghar mein paida hue do bhai-behanon ko dekho. Kudrat kisi ko lamba banati hai, kisi ki awaaz meethi karti hai aur kisi ka rang saaf ya saanvla rakhti hai — yeh sirf ==natural differences== hain, inmein koi oonch-neech nahi hoti. Inequality tab shuru hoti hai jab samaj kisi ek trait ko zyada izzat, paise ya taqat se jod deta hai aur doosre ko kamtar maan leta hai. [[thinker:André Béteille]] bilkul saaf kehte hain ki nature sirf variety banati hai, use ==social inequality== mein badalne ka kaam samaj aur uske niyam karte hain.

UPSC answers mein chaar basic shabdon ka farak hamesha clear rakho:
- **Equality ke Teen Roop:** [[thinker:Harold Laski]] ke mutabik equality ka matlab hai ki koi bhi vyakti itna taqatwar na ho ki woh padosi ke basic citizenship rights cheen le. [[thinker:Peter Saunders]] teen levels batate hain: ==Formal Equality== (kanoon ke aage sab barabar, purani Manusmriti ki caste-based saza ke ulta), ==Equality of Opportunity== (sabko barabar shuruat ka mauka, jaise open UPSC exam), aur ==Equality of Outcome== (ant mein sabko barabar inaam). [[trap:Agar perfect Equality of Opportunity mil bhi jaaye, tab bhi Outcome hamesha unequal rahega—jaise UPSC Prelims mein laakhon students ek hi paper dete hain, par aakhri list mein kuch sau log hi power aur status paate hain.]]
- **Natural vs Moral Inequality:** [[thinker:Jean-Jacques Rousseau]] ne umr ya sehat ke chhote natural farak ko chhod kar asli samasya ==moral ya political inequality== ko bataya, jo sampatti aur visheshadhikar se samaj khud banata hai. [[eg:Shaadi ke ads mein "fair" skin ki maang ya jobs mein fluent English accent ko tarjeeh dena neutral difference ko social inequality banane ki rozmarra ki misaal hai.]]
- **Individual Inequality vs Social Stratification:** Agar samaj mein log bas alag-alag salary paate hain par unmein koi group pehchan nahi hai, toh woh sirf individual inequality hai. ==Social stratification== tab banti hai jab oonche-neeche varg ya jaatiyan ek ==collective stratum== banati hain jinke common interests, alag lifestyle aur apni pehchan hoti hai. [[thinker:Richard Wilkinson]] aur [[thinker:Kate Pickett]] apni kitaab *The Spirit Level* mein dikhate hain ki zyada inequality wale ameer deshon mein bhi stress, crime aur social distrust badhta hai.
- **Harmonic vs Disharmonic Systems:** [[thinker:André Béteille]] ke mutabik traditional Bharat ek ==harmonic system== tha jahan jaati ki asamanata aur dharmik niyam ek doosre ko sahi thehrate the, jabki aaj ka Bharat ek ==disharmonic system== hai jahan Samvidhan barabari kehta hai par zameen par gahri asamanata hai — saath hi purani ==cumulative inequality== dheere-dheere ==dispersed inequality== ki taraf badh rahi hai.

### Life-Chances vs Life-Style

[[thinker:Max Weber]] ne samjhaya ki bazaar ki halat aur samajik izzat zindagi ko do alag tareekon se shape karte hain. **Life-chances** woh thos mauke hain jinse aapki sehat, acchi school-college padhai, safe ghar aur lambi umr tay hoti hai. **Life-style** aapke rehne-sehne, kapde, bolchal, khan-paan aur shauk ka woh tareeka hai jisse aapka status group apni alag shaan dikhata hai.

[[eg:Bengaluru mein barabar 12 lakh kamaane wale do parivaron ke life-chances health insurance aur flat kharidne mein lagbhag barabar ho sakte hain, par unke life-style bilkul alag honge—ek paramparik purohit parivar classical sangeet aur shakahari niyamon par zor dega, jabki startup manager marathon, specialty coffee aur club membership chunta hai.]]

## Hierarchy: Official Command, Purity aur Muddled Scales

Aam bhasha mein log hierarchy aur stratification ko ek hi maan lete hain, lekin sociology dono mein farak karti hai. ==Hierarchy== kisi office ya ritual vyavastha mein posts aur ranks ka seedha oopar-neeche ka kram hai jahan aadesh aur palan chalta hai, aur adhikaar vyakti ke bajaye uski kursi ya pad se jude hote hain. Jaise ek young IAS officer District Collector ki kursi par baithte hi us pad ki saari taqat pa leta hai.

Samajik hierarchy par teen bade nazariye sabse mahatvapurna hain:
- **Ritual Hierarchy ([[thinker:Louis Dumont]]):** *Homo Hierarchicus* mein Dumont ne kaha ki Hindu jaati vyavastha Western class se alag ek pure religious hierarchy hai jo sirf ==purity aur pollution== ke siddhant par tiki hai.
- **Graded Inequality ([[thinker:B.R. Ambedkar]]):** Ambedkar ne dikhaya ki jaati sirf kaam ka bantwara nahi balki kaam karne walon ka ==graded division== hai, jahan upar badhti izzat aur neeche badhti ghrina hai. Har beech ki jaati apne se neeche wali jaati par shreshth hone ka ghamand rakhti hai, isliye shoshit varg ekjut ho kar top ke khilaf lad nahi paate.
- **Muddled Hierarchies ([[thinker:Dipankar Gupta]]) aur Authority ([[thinker:Ralf Dahrendorf]]):** Gupta ne Dumont ko challenge kiya ki Bharat mein purity ka koi ek sarvamanya scale nahi hai; har jaati apni gaurav-katha batati hai aur Brahmin shreshthata ko chunauti deti hai, jisse ==muddled hierarchies== dikhti hain. Wahin Dahrendorf ke mutabik modern factories aur states mein ==authority structures== aur political-ideological power hierarchy chalati hain.

## Garibi, Deprivation, Sen vs Bourdieu

Garibi ka matlab sirf jeb khali hona ya kam calories khana nahi hai — sociology ise izzat ke saath jeene ke maukoon se vanchit hone ke roop mein dekhti hai. Policy mein ==absolute poverty== ek fixed survival basket rakhti hai (pehle 2400 rural / 2100 urban kcal; baad mein ==Tendulkar Committee 2009== ne pure calorie maap se hat kar food, education aur health kharch joda aur 21.9% BPL maana, aur ==Rangarajan Committee 2014== ne 29.5%), jabki ==relative poverty== ([[thinker:Peter Townsend]]) dikhati hai ki kya koi parivar apne samaj ke aam jeewan-star (jaise internet, saaf bijli-pani) se pichhad gaya hai. Bharat ka ==NITI Aayog Multidimensional Poverty Index (MPI)== 12 indicators par sehat, padhai aur jeevan-star naapta hai.

Garibi peedhiyon tak kyun chalti rehti hai, is par chaar siddhant takrate hain:
- **Culture of Poverty ([[thinker:Oscar Lewis]]):** Kehte hain ki gareeb parivaron mein nirasha, kismat-bharosa aur turant kharch karne ki ek alag subculture aadat ban jaati hai.
- **Situational Constraints ([[thinker:Charles Valentine]], [[thinker:Elliot Liebow]]):** Lewis ko kharij karte hain: agar mazdoor bachaye hue ₹50 se na makaan kharid sakta hai na doctor, toh aaj sukh par kharch karna kamzori nahi balki haalaat ka rational faisla hai.
- **Functional aur Marxist Nazariya:** [[thinker:Herbert Gans]] dikhate hain ki garibi ameer aur middle-class ke liye saste safai-kaam aur NGO/welfare jobs chalati hai, jabki [[thinker:Karl Marx]] gareebon ko capitalism ki ==reserve army of labour== aur bikhre hue ==lumpenproletariat== ka hissa maante hain.
- **Vicious Circle ([[thinker:Ragnar Nurkse]], [[thinker:Ken Coates]]):** Kuposhan aur school chhootna kam aamdani ka jaal dobara paida karta hai.

| Nazariya | Mukhya Focus | Bade Thinkers | Lambi Garibi ki Wajah |
| --- | --- | --- | --- |
| Capability Deprivation | Sehat, shiksha, azaadi ki kami | Amartya Sen | Income ke bawajood jeevan jeene ki kshamta na banna |
| Social Capital Deprivation | Pahunch aur elite networks ki kami | Pierre Bourdieu | Bharose, sifarish aur hiring circles se bahar rehna |
| Subcultural Thesis | Kismat-wadi aadatein | Oscar Lewis | Peedhi-dar-peedhi seekhi gayi laachari |
| Situational Constraints | Ruke hue zameeni raaste | Valentine, Liebow | Asurakshit rozgar ke beech samajhdari bhara faisla |

Aamdani se aage, **deprivation** ya toh absolute hoti hai (roti, kapda, makaan ki kami) ya ==relative deprivation== — jab log khud ki tulna kisi **reference group** se karke khud ko pichhda mehsoos karte hain ([[thinker:Samuel Stouffer]] ki *The American Soldier*; [[thinker:Robert K. Merton]] aur [[thinker:W.G. Runciman]]). UPSC 2025 ke liye sabse zaroori tulna yeh hai: [[thinker:Amartya Sen]] chronic garibi ko ==capability deprivation== maante hain (swasth rehne, padhne, aur bina sharm samaj mein chalne ki asli azaadi na hona), jabki [[thinker:Pierre Bourdieu]] ise ==chaar capitals== ke asaman virasat se jodte hain: economic (paisa), ==social capital== (connections, *pahunch* ya *jugaad*), ==cultural capital== (mahange school, English accent, "legitimate taste"), aur ==symbolic capital== (samajik izzat aur degrees).

## Social Exclusion, Self-Exclusion aur Policy Jawab

[[thinker:Haralambos]] ke mutabik ==social exclusion== woh structural prakriya hai jisse logon ko samaj ke aam haqon, banks, schools, nyay aur sarvajanik jagahon se bahar (*bedakhal*) kar diya jaata hai — chahe paise ki kami ho ya na ho. [[eg:Waiting for a Visa mein B.R. Ambedkar ne likha ki unhe aur unke bhai-behanon ko gaon ke pani se roka gaya aur bailgaadi khud chalani padi kyunki gaadiwan unhe chhoona nahi chahta tha—yahi untouchability ka poorn exclusion hai.]] Bharat mein transgender vyakti toh aksar apne hi parivar ka sahara kho dete hain jo Dalit ya minority bachon ko mil jaata hai; prachin *Ardhanarishvara* aur *Badhai* parampara ke bawajood colonial Criminal Tribes/Section 377 niyamon ne unhe haashiye par dhakela, jise 2014 ke NALSA faisle se nayi kanuni pehchan mili ([[thinker:Ashley Tellis]], [[thinker:Gayle Rubin]]).

Hamesha **forced exclusion** aur **self-exclusion** ka farak saaf likho:
- **Forced Exclusion:** Jab taqatwar sansthayein jaati, ling, viklangta, dharm ya gareebi ke kaaran kiraya, naukri, mandir pravesh ya credit dene se rok dein.
- **Self-Exclusion (Ghettoisation):** Jab baar-baar ke bhedbhaav se toote samuh suraksha ke liye apne hi bastiyon mein simat jaate hain (Old Delhi ya Old Kanpur ke *mohalle*, America ke Black ghettos) ya Sentinelese-Jarawa jaise aadivasi mukhya dhaare se door rehte hain; wahin ameer gated colonies mein khud ko band karna privilege bachane wali elite self-exclusion hai.

[[thinker:John Veit-Wilson]] ne policy ke do roop bataye: **weak version** (sirf excluded vyakti ko training dekar main-stream mein laana) aur **strong version** (un taqaton aur sansthaon ko badalna jo exclusion paida karti hain — jaise Article 17, RTE Act 2009, SC/ST Atrocities Act aur MGNREGA). [[link:Ise seedhe Paper 2 Unit 4 (Untouchability) aur Unit 15 (Poverty, Deprivation and Inequalities) se jodo.]]`,
  },
  {
    kind: 'compare',
    leftTitle: 'Life-Chances (Aarthik Dhancha)',
    rightTitle: 'Life-Style (Status Sanskriti)',
    rows: [
      {
        aspect: 'Sociological Aadhar',
        left: 'Max Weber ki market position aur economic class',
        right: 'Weber ke status group ki izzat aur Bourdieu ka habitus',
      },
      {
        aspect: 'Asli Tatva',
        left: 'Sehat, acchi shiksha, aamdani, aur lambi umr ke mauke',
        right: 'Pehnava, bolne ka andaaz, khan-paan aur leisure pasand',
      },
      {
        aspect: 'Pehchan ka Paimana',
        left: 'Life expectancy, infant mortality aur college access',
        right: 'Rozana ke signals jo insider aur outsider tay karein',
      },
      {
        aspect: 'Indian Misaal',
        left: 'Private vs khasta-haal gaon ke hospital; English coaching',
        right: 'Classical music, club membership, shakahari shuddhata',
      },
      {
        aspect: 'Mobility par Asar',
        left: 'Aane wali peedhi ke career aur aarthik badhotri ki chabi',
        right: 'Barabar paisa hone par bhi shaadi aur social closure rokta hai',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Janm aur Capital Kami',
        text: 'Kam economic, cultural ya caste capital ke saath shuruat (Bourdieu, Ambedkar)',
      },
      {
        label: 'Capability Deprivation',
        text: 'Kuposhan, kamzor schooling aur digital-sehat kami asli azaadi ghatati hai (Sen)',
      },
      {
        label: 'Systemic Exclusion',
        text: 'Formal loans, surakshit ghar aur elite job networks se darwaze band',
      },
      {
        label: 'Defensive Self-Exclusion',
        text: 'Ghettoisation aur bharose ki kami se peedhiyon tak mobility ruk jaati hai',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Life-Chances vs Life-Style',
    meaning:
      'Life-chances bazaar ki sthiti se milne wale sehat, shiksha aur kamai ke mauke hain, jabki life-style kisi status group ki izzat dikhane wala khan-paan, pehnava aur sanskriti hai.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'Graded Inequality',
    meaning:
      'Jaati ki woh seedhi jahan har beech ki shreni apne se neeche wali ko kamtar samajhti hai, jisse shoshit jaatiyan upar ke khilaf ekjut nahi ho paatin.',
    thinkerSlug: 'br-ambedkar',
  },
  {
    kind: 'keyTerm',
    term: 'Relative Deprivation',
    meaning:
      'Kisi reference group se apni sthiti ki tulna karne par mehsoos hone wali kami ya anyay ki bhavna, bhale hi basic zarooratein poori hon.',
    thinkerSlug: 'robert-k-merton',
  },
  {
    kind: 'keyTerm',
    term: 'Capability Deprivation',
    meaning:
      'Amartya Sen ka siddhant ki garibi sirf kam cash nahi balki swasth jeene, seekhne aur samaj mein izzat se bhag lene ki azaadiyon ka abhaav hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Social Exclusion',
    meaning:
      'Woh samajik dhancha jo kuch samuhon ko aam shiksha, banking, nyay aur sarvajanik maukoon se vyavasthit roop se bahar rakhta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Caste system is not merely division of labour. It is also a division of labourers.',
    context: 'Jaati kaise kaam ke saath-saath insaanon ko bhi oonchi-neechi shreniyon mein baantti hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'The history of all hitherto existing society is the history of class struggles.',
    context: 'Garibi aur asamanata ko kudrati niyam ke bajaye sampatti ke shoshan se jodne wala kathan.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC 2025 Lens: Sen + Bourdieu + Ambedkar = Topper Answer',
    body: 'Jab UPSC garibi, deprivation ya hierarchy par sawaal pooche (jaise 2025 Sen vs Bourdieu PYQ), toh sirf GS Economics wali BPL line mat likho. Answer ko Amartya Sen (capability deficit), Pierre Bourdieu (four capitals), R.K. Merton (relative deprivation), aur Ambedkar-Dumont-Gupta (graded vs ritual hierarchy) se anchor karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karna: Poverty aur Social Exclusion ek nahi hain',
    body: 'Kam aamdani ko poora social exclusion mat samajhna. Ek ameer Dalit parivar ko metro shehar mein kiraye ka ghar na milna ya padhe-likhe transgender vyakti ka ghar se nikaala jana bina aarthik garibi ke bhi poorn social exclusion hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Data aur Kanooni Anchor Yaad Rakho',
    body: 'Tendulkar Committee (2009) pure calorie maap se hat kar food-education-health kharch par aayi (21.9% BPL), Rangarajan ne 29.5% bataya aur NITI Aayog ka MPI 12 indicators dekhta hai. Veit-Wilson ke strong vs weak exclusion ke saath Article 17 aur RTE Act 2009 zaroor likho.',
  },
  {
    kind: 'answerBox',
    intro:
      'Equality, inequality, hierarchy, poverty, deprivation aur exclusion ek-doosre se judi kadiyan hain jo batati hain ki insaani farak kaise pakke anyay mein badalta hai.',
    points: [
      'Equality aur Inequality: Opportunity ki barabari bhi shuruati farak ke kaaran alag outcomes deti hai; samaj natural farak ko moral inequality banata hai (Rousseau, Béteille).',
      'Hierarchy aur Power: Hierarchy posts ya ritual grade ko oopar-neeche sajati hai—chahe Dumont ki purity ho, Gupta ki muddled scales ya Ambedkar ki graded inequality.',
      'Poverty aur Poor Living: Calorie/BPL se aage Sen ki capability kami aur Bourdieu ke social-cultural capital ka abhaav lambi garibi ko samjhate hain.',
      'Forced vs Self-Exclusion: Systemic exclusion kamzor vargon ko aam nagrikta se kaat kar kabhi defensive ghettoisation ya self-exclusion mein dhakelta hai.',
      'Policy Upay: Strong anti-exclusion model (Veit-Wilson) mein capability investment ke saath bhedbhaav-virodhi kanoon aur jan-andolan dono zaroori hain.',
    ],
    conclusion:
      'In chhah concepts ko saath rakhne se garib ko dosh dene wale myths toot-te hain aur samajik nyay ki thos neev banti hai.',
  },
]

export const topic1Hi: TopicLangContent = { summary, mindMap, sections }