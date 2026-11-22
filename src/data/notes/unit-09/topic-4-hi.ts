import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.4 · Patriarchy and Sexual Division of Labour',
  center: 'Patriarchy & Division of Labour',
  subtitle: 'Walby ke 6 Structures • Murdock vs Oakley • Kandiyoti & Dube • Workplace, Tech & Development',
  branches: [
    {
      title: 'Theorising Patriarchy',
      color: 'lavender',
      thinkers: ['Sylvia Walby', 'Carol Hanisch', 'Deniz Kandiyoti', 'Kamla Bhasin'],
      points: [
        'Walby: 6 structures — Household production, Paid work, State, Culture, Sexuality, Violence',
        'Private Patriarchy (ghar mein qaid) se Public Patriarchy (office/state mein bhedbhav) ka safar',
        'Carol Hanisch ("The personal is political") & Michelle Miller (sexist jokes se misogyny normal banti hai)',
        'Deniz Kandiyoti: "Patriarchal Bargain" (saas/auraton dwara apni kursi bachane ke liye bahu/beti par niyam thopna)',
      ],
    },
    {
      title: 'Sexual Division of Labour',
      color: 'yellow',
      thinkers: ['G.P. Murdock', 'Talcott Parsons', 'Ann Oakley', 'Veronica Beechey'],
      points: [
        'Murdock (224 samaj): mard ki muscle ताकत aur aurat ki pregnancy/lactation se division universal hai',
        'Ann Oakley ka jawab: yeh biological nahi balki social hai! 38 samajon mein cooking dono karte hain',
        'Oakley: unpaid mother-housewife boredom & pink-collar jobs (nurse, primary teacher, receptionist)',
        'Veronica Beechey: auratein capitalism ki "Reserve Army of Labour" hain + Hochschild ka "Second Shift"',
      ],
    },
    {
      title: 'Indian Socialisation & Caste',
      color: 'mint',
      thinkers: ['Leela Dube', 'Uma Chakravarti', 'B.R. Ambedkar', 'Gopal Guru'],
      points: [
        'Leela Dube: Seed-Earth Analogy, Paraya Dhan, mitti vs peetal ka bartan, Annapurna tyag ki bhavna',
        'Uma Chakravarti ("Brahminical Patriarchy") & B.R. Ambedkar (endogamy ke liye Sati, widowhood, bal-vivah)',
        'Subhadra Channa ("Devi-Dasi dichotomy"), Simone de Beauvoir ("Religion is the opium of women")',
        'Gopal Guru ("Dalit Women Talk Differently") & NFHS-5 (~29–31% spousal violence; wife-beating justification)',
      ],
    },
    {
      title: 'Workplace, Tech & Development',
      color: 'pink',
      thinkers: ['Michelle Ryan', 'Elizabeth Stanko', 'Lisa Adkins', 'Judy Wajcman'],
      points: [
        'Workplace: Glass Ceiling, Michelle Ryan ka "Glass Cliff", ILO Motherhood Penalty & 23% LFPR gap (50% S. Asia)',
        'Elizabeth Stanko (harassment = male territory) & Lisa Adkins (sexualisation of women’s work)',
        'WEF Global Gender Gap 2023: 68.4% closed (131 saal lagenge); India rank 127/146; UN 1980 (66% kaam, 1% property)',
        'Tech & New Media: GSMA 2023 (40% mobile internet gap), Khap phone bans, sex-selection vs WFH agency',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-01-family-lineage-patriarchy.webp',
    alt: 'P1 Unit 9 infographic: Family, Lineage & Patriarchy — Classical Functionalism vs Feminist & Lineage Perspectives',
    caption:
      'Classical functionalists ne mard aur aurat ke kaam ke batware ko kudrati bataya, jabki feminist sociologists ne dikhaya ki patriarchy ke 6 structures kaise ghar se lekar office aur internet tak auraton ko peeche rakhte hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 01',
  },
  {
    kind: 'md',
    body: `## Patriarchy aur Sexual Division of Labour kya hain?

Aasaan shabdon mein samjho: ==Patriarchy== (पितृसत्ता) shabd Greek ke *patri* (father) aur *archy* (rule) se bana hai — jiska purana matlab tha parivaar ke andar pitaji ya buzurg mard ka ekchhatra raaj, par aaj sociology mein iska matlab hai samaj ke har kshetra mein mardon ka varchasva. Apni mashhoor kitab *Theorizing Patriarchy* (1990) mein [[thinker:Sylvia Walby]] ne iski sabse sateek paribhasha di: **"Patriarchy social structures aur practices ka woh system hai jisme mard auraton par shasan (dominate) karte hain, unhe dabate (oppress) hain aur unka shoshan (exploit) karte hain."** Isi se juda hai ==Sexual Division of Labour== (gender-based division of labour): woh samajik vyavastha jahan bina tankhwah wala ghar ka kaam (rasoi, safai, bachon aur buzurgo ki seva) auraton ke hisse daal diya jaata hai aur bahar ki kamaai, property va satta mardon ko di jaati hai.

Yeh bhedbhav kitna gehra hai? **1980 ki United Nations Report** ka mashhoor aakda yaad rakho: **auratein duniya ki aabadi ka 50% hain, duniya ke kul kaam ke ghanton ka do-tihai (66%) kaam karti hain, par unhe duniya ki aamdani ka sirf 10% aur duniya ki sampatti (property) ka sirf 1% milta hai** (Bharat mein bhi auraton ke naam sirf ~22% property hai aur woh mardon se 3 se 7 guna zyada unpaid domestic kaam karti hain). Jaisa ki Bharatiya feminist [[thinker:Kamla Bhasin]] ("Azaadi" slogan) ne samjhaya, feminism ka maqsad patriarchy ki jagah matriarchy laana nahi, balki **gender equality (barabari)** sthapit karna hai.

## 1. Sylvia Walby ke 6 Structures of Patriarchy aur Interpersonal Relations

Sawaal yeh hai ki jab aaj ladkiyan padh-likh kar naukri mein aa rahi hain, tab bhi patriarchy khatam kyun nahi hoti? [[thinker:Sylvia Walby]] samjhati hain ki patriarchy koi ek deewar nahi hai — yeh **6 aapas mein jude hue structures** par tiki hai, aur modern samaj mein yeh **Private Patriarchy** (aurat ko ghar ki chahar-deewari mein band rakhna) se badal kar **Public Patriarchy** (aurat ko bahar aane dena par office, bajar aur state mein neeche rakhna) ban gayi hai:

- **1. Household Production:** Ghar ke andar patni aur maa ke unpaid domestic labour (rasoi, bartan, bachon ki parvarish) ka mard seedha fayda uthate hain — bina kisi salary, chhutti ("holiday") ya promotion ke.
- **2. Paid Work:** Naukri ke bajar mein bhi auraton ko kam tankhwah aur kam darje wali **pink-collar jobs** mein dhakela jaata hai. [[thinker:Ann Oakley]] ne dikhaya ki auraton ki paid jobs asal mein unke gharelu kaam ka hi vistar hain — ghar mein bimar ki seva se **nurse**, chhote bachon ko sambhalne se **primary school teacher**, aur mehmaan ke swagat se **receptionist**!
- **3. The Patriarchal State:** Parliament, police, judiciary aur bureaucracy mein mardon ka bolbala hone ke karan auraton ke haq ke kanoon zameen par dhang se laagu nahi hote.
- **4. Culture aur Religion:** Dharm aur media aurat ko mard ki nazar se tolte hain. [[thinker:Karen Armstrong]] aur [[thinker:Simone de Beauvoir]] (*The Second Sex* — **"Religion is the opium of women"**) ne dikhaya ki sabhi dharmon mein Supreme God, prophets aur pandit/pope/imam mard hain, menstruation ko taboo maana jaata hai, aur *Karwa Chauth* jaise vrat auraton ko agle janm ke moksha ka lalach dekar pati ki gulami sweekar karna sikhate hain. Bharat mein [[thinker:Subhadra Channa]] ise **Devi-Dasi dichotomy** kehti hain — mandir mein Devi (Lakshmi/Durga) banakar pooja, par ghar mein Dasi jaisa vyavahar!
- **5. Sexuality:** Samaj ke **sexual double standards** — jahan sexually active mard ko "stud" keh kar shabashi milti hai, wahin apni marzi se jeene wali aurat ko "loose character" keh kar badnaam kiya jaata hai.
- **6. Male Violence:** Domestic violence patriarchy ka sabse nanga hathiyar hai. UN Women aur Bharat ke **NFHS-5** data ke mutabik **har teesri aurat (~29%–31%) apne hi ghar mein spousal violence jhelti hai**, aur Telangana (84%), Andhra (84%) va Karnataka (77%) jaise rajyon mein toh khud auratein bhi "saas-sasur ki seva na karne ya bina poochhe bahar jaane" par pati dwara pitai ko sahi thehrati hain!

Rozmarra ke interpersonal relations mein [[thinker:Carol Hanisch]] ka nara =="The personal is political"== dikhata hai ki ghar ke andar pati ka thappad koi "personal parivarik mamla" nahi balki political power ka pradarshan hai (jaise TV serial *Anupamaa* mein dikhaya gaya). Saath hi [[thinker:Michelle B. Miller]] batati hain ki WhatsApp ke **"nagging/spendthrift wife" jokes**, **"Alia Bhatt / dumb blonde" memes**, Bollywood (*3 Idiots* ka *chamatkar/balatkar* joke) aur maa-behen ki gaaliyan (**linguistic misogyny**) hansi-mazaak ki aad mein misogyny aur hinsa ko normal banati hain.

## 2. Kya Sexual Division of Labour Kudrati (Biological) Hai ya Samajik? (Murdock vs Oakley)

Aasaan shabdon mein samjho: aakhir truck driver aur civil engineer mard kyun bante hain aur rasoi va nursing auraton ke hisse kyun aati hai? Is par sociology ki sabse badi takkar **G.P. Murdock** aur **Ann Oakley** ke beech hai:

- **Functionalist / Biological Tark ([[thinker:G.P. Murdock]], [[thinker:Talcott Parsons]], [[thinker:Lionel Tiger]] & [[thinker:Robin Fox]]):** Duniya ke **224 samajon** ka study karke Murdock ne kaha ki sexual division of labour universal aur biological hai — mard ke sharir mein zyada muscular strength hoti hai isliye shikar, yuddh aur bhari kaam mard ko mile; jabki aurat ke sharir mein womb (9 mahine ki pregnancy) aur lactation (doodh pilana) hone se uski mobility rukti hai, isliye ghar ke aas-paas ke kaam (cooking, cleaning, child-care) aurat ko mile. Parsons ne ise male **instrumental** aur female **expressive** role ka sunder santulan kaha.
- **Feminist Jawab ([[thinker:Ann Oakley]], [[thinker:Shulamith Firestone]]):** Apni kitab *Sex, Gender and Society* (1972) mein Ann Oakley ne Murdock ke hi data se Murdock ko galat sabit kar diya! Oakley ne dikhaya ki **38 samajon mein khana pakana (cooking) mard aur aurat dono barabar karte hain**, **14 samajon mein bhari lakdi kaatne (lumbering) ka kaam auratein karti hain**, aur China, Russia va Israel ki fauj mein auratein ladti hain. [[eg:Bharat mein kisi bhi building construction site par sir par eentein dhoti mazdoor auraton ya Rajasthan ke gaon mein meelon door se paani ke bhari matke laati auraton ko dekh lo — yeh kahani turant toot jaati hai ki aurat ka sharir "komal aur kamzor" hota hai!]] Biology sirf yeh tay karti hai ki bacha kaun paida karega, yeh nahi ki ghar ke kaam ko bina paise aur bina izzat ke kyun rakha jaaye. Radical feminist [[thinker:Shulamith Firestone]] (*The Dialectic of Sex*) ne toh yahan tak kaha ki biological pregnancy ki majboori se hi duniya ki sabse pehli inequality (class se bhi pehle!) shuru hui, isliye artificial wombs aur IVF ke zariye auraton ko **"means of reproduction"** par kabza karke gender-free society banani hogi (aur [[thinker:Alvin Toffler]] ne *Future Shock* mein professional parents / "pro-parents" ka vichar diya).

| Tulna ka Aadhar | G.P. Murdock & T. Parsons (Functionalist) | Ann Oakley & Feminists (Critical) |
| --- | --- | --- |
| Kaam ke Batware ki Wajah | Biological sharir (muscle power vs pregnancy/lactation) | Cultural conditioning, gender socialisation aur patriarchy |
| Universality ka Daava | 224 samajon mein universal aur practical efficiency | Universal nahi: 38 samajon mein cooking aur 14 mein lumbering saajha |
| Gharelu Role ka Nazariya | Pyar aur santulan dene wala "expressive role" | Unpaid aur ghutan bhara "mother-housewife role" (health crisis #1) |
| Paid Naukri se Rishta | Mard breadwinner aur aurat homemaker ek-doosre ke poorak | Auraton par "Second Shift" double burden aur "Reserve Army" shoshan |

## 3. Patriarchal Bargain, Child Socialisation aur Brahminical Patriarchy (Indian Context)

Bharat mein bachpan ki parvarish se lekar jaati-vyavastha tak patriarchy kaise kaam karti hai, aur khud auratein kai baar iski pahredar kyun ban jaati hain?

- **Deniz Kandiyoti ka "Patriarchal Bargain" (2016 PYQ):** Turkish feminist [[thinker:Deniz Kandiyoti]] ne ==Patriarchal Bargain== (पितृसत्तात्मक सौदेबाज़ी) concept diya: ek kathor patriarchal samaj mein rehne wali auratein jab poore system ko akele nahi tod paatin, tab woh apni khud ki suraksha, izzat aur kursi bachane ke liye patriarchy ke niyamon ko maan leti hain aur unhe doosri (chhoti) auraton par thopti hain! [[eg:Ghar mein ek Saas (jo khud jawani mein shoshit rahi) jab apni Bahu par beta paida karne ka sasur se bhi zyada dabav daalti hai, ya ek Maa apni beti ke kapdon aur mobile par rok lagati hai taaki samaj use "achhi sanskari maa" kahe — toh individual aurat ko thoda rutba milta hai, par poori aurat jaati haar jaati hai!]]
- **Child Socialisation aur Seed-Earth Analogy ([[thinker:Leela Dube]] — 2015 PYQ):** Apni rachna *Women and Kinship* mein Leela Dube ne dikhaya ki patrilineal Bharat mein **Seed-Earth Analogy** (pita = beej/malik; mata = khet/mitti) ke karan beti ko janm se hi **Paraya Dhan** (*"beti aur ghee zyada din rakhne par kharab ho jaate hain"*) samjha jaata hai. Ladke ko bandook/gaadi aur English-medium school milta hai, jabki ladki ko gudiya-rasoi set, **Annapurna ideal** (pehle bhai aur pita ko khila kar khud bhookha rehna) aur puberty aate hi kade niyam (pair jod kar baithna, dheere bolna) sikhaye jaate hain. Dube ne **Earthen Pot vs Brass Pot** muhawara dikhaya: ladki ki izzat **mitti ka bartan** hai (ek baar daag laga toh hamesha ke liye khatam), jabki ladka **peetal ka bartan** hai (dho kar fir saaf)! Maharashtra ke Satara mein toh anchaahi betiyon ka naam hi **Nakosi** ("Unwanted") rakh diya jaata tha — jisse [[thinker:Rita Banerji]] ka **"50 Million Missing Women"** crisis paida hua.
- **Brahminical Patriarchy aur Dalit Feminism ([[thinker:Uma Chakravarti]], [[thinker:B.R. Ambedkar]], [[thinker:Gopal Guru]]):** Uma Chakravarti ne ==Brahminical Patriarchy== ke zariye dikhaya ki jaati ki pavitrata bachane ke liye *Manusmriti* ne auraton ki sexuality par *Pativrata*, *Kanyadan* aur state punishment ke ताले lagaye. [[thinker:B.R. Ambedkar]] ne sabit kiya ki **caste endogamy** bachane ke liye hi surplus women/men par **Sati, enforced widowhood aur bal-vivah** thope gaye. Wahin [[thinker:Gopal Guru]] (*"Dalit Women Talk Differently"*) aur [[thinker:Maitreyi Chaudhuri]] dikhate hain ki Dalit auratein caste + class + gender ki teehri maar jhelti hain jise Savarna feminism ya MNCs ke "scooty/fairness cream" wale nakli empowerment ads nahi samajh sakte.

## 4. Education, Formal Employment, Development aur ‘Masculine’ New Media

Kya women’s education, formal jobs aur technology se patriarchy khatam ho rahi hai? (2025, 2022, 2021, 2020, 2018 aur 2014 ke PYQs ka nichod):

- **Formal Employment aur Domestic Division of Labour (2025 & 2022 PYQs):** Education aur formal jobs se shehri gharon mein [[thinker:Michael Young]] aur [[thinker:Peter Willmott]] ki **Symmetrical Family**, paternity leave aur Tamil Nadu jaise rajyon mein "house husbands" ki sweekaryata thodi badhi hai. Lekin patriarchy khatam nahi hui: working women par [[thinker:Arlie Hochschild]] ka =="Second Shift" (Double Burden)== aa gaya hai — din bhar office mein kaam karne ke baad ghar aakar 80% rasoi aur bache bhi wahi sambhalti hain, jabki pati 20 minute bacha khila kar use "ehsaan" batata hai! Aksar padhi-likhi bahu ki naukri **"conditional employment"** hoti hai (pati/saas ki "permission" par tiki) ya fir ghar ka bojh kisi gareeb Dalit/working-class maid par shift kar diya jaata hai.
- **Workplace Patriarchy aur Social Development (2021 & 2020 PYQs):** Samajik vikas aur auraton ki sthiti ek-doosre ko aage badhate hain, par **sirf economic development se patriarchy apne-aap khatam nahi hoti** (jaise highly developed **Japan** aur **Singapore** mein aaj bhi corporate boards mein auratein na ke barabar hain aur metros mein harassment hota hai). **ILO** ke mutabik global Labour Force Participation Rate (LFPR) mein **23% ka gender gap hai (South Asia mein ~50%)**, aur maa bante hi auraton ko **Motherhood Penalty** (promotion aur wage loss) jhelni padti hai. [[thinker:Veronica Beechey]] dikhati hain ki capitalism auraton ko ek sasti, obedient ==Reserve Army of Labour== ki tarah use karta hai (boom mein bharti, recession mein chhutti, kyunki aurat ki kamaai ko "supplementary" maana jaata hai). Upar ke पदों par **Glass Ceiling** ("boys’ club"), [[thinker:Michelle Ryan]] ka ==Glass Cliff== (company doobte waqt aurat ko CEO banana taaki haar ka thikra aurat par phoote), [[thinker:Elizabeth Stanko]] ka **workplace sexual harassment** ("unwanted sexual attention" jisse mard office ko apna ilaka dikhate hain — UK survey mein 72% ne jhela par sirf 33% ne report kiya), aur [[thinker:Lisa Adkins]] ka **sexualisation of women’s work** (air hostesses, receptionists, Pragati Maidan auto-expo models ko glamour ke liye hire karna) khada hai. **WEF Global Gender Gap Report 2023** (146 desh) ke mutabik duniya ka **68.4% gap bhara hai** (poori barabari mein **131 saal** lagenge; Political empowerment mein sabse bada 77.9% gap baki hai), jisme **Iceland #1** hai aur **Bharat 127vein sthan** par hai (Bangladesh 59 aur Sri Lanka 115 se bhi peeche).
- **Technology, Reproductive Justice aur ‘Masculine’ New Media (2018 & 2014 PYQs):** Technology do-dhari talwar hai. Ek taraf household appliances, IT work-from-home, contraceptives aur legal abortion (**Joshua Angrist** ne dikhaya ki abortion rights se auraton ki padhai aur lifetime earnings badhti hain, jabki *Roe v. Wade* palatne se **Jennifer Barber** ka **reproductive coercion** hota hai) ne azaadi di hai. Doosri taraf ultrasound technology ka durupyog **female foeticide** mein aur ART ka durupyog gareeb housemaids (>70% Delhi/Mumbai surrogates) ke commercial surrogacy shoshan mein hua (**Janice Raymond**, **Sarojini & Das** vs **Amrita Pande** ki agency debate; jiske baad **Surrogacy Regulation Act 2021** ne commercial surrogacy ban ki). Aakhir mein, feminist scholars ([[thinker:Judy Wajcman]], [[thinker:Laura Mulvey]]) dikhati hain ki **New Media ka dhancha masculine hai**: **GSMA Mobile Gender Gap Report 2023** ke mutabik **Bharat mein auraton ke mobile internet use karne ki sambhavna mardon se 40% kam hai** (ek smartphone ho toh ghar ke *marad* ko milta hai, *lugai* ko nahi; aur Haryana ki **Khap Panchayats** ladkiyon ke mobile rakhne par ban lagati hain), jabki internet par cyber-stalking, morphed deepfakes, trolling aur male-coded algorithms purani patriarchy ko digital roop mein aur mazboot kar rahe hain!`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: '1. Household Production', text: 'Ghar ke andar unpaid rasoi, safai aur child-care ka shoshan (Sylvia Walby)' },
      { label: '2. Paid Work & Reserve Army', text: 'Pink-collar jobs (Oakley), Motherhood Penalty, Glass Ceiling aur Glass Cliff (Ryan)' },
      { label: '3. Patriarchal State & Law', text: 'Polity aur courts mein male dominance; pro-women kanoonon ka kamzor laagu hona' },
      { label: '4. Culture, Sexuality & Violence', text: 'Double standards, dharm ki afeem (Beauvoir), sexist jokes aur ~30% spousal violence' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'G.P. Murdock & T. Parsons (Functionalist Nazariya)',
    rightTitle: 'Ann Oakley & Sylvia Walby (Feminist Critique)',
    rows: [
      {
        aspect: 'Division of Labour ka Aadhar',
        left: 'Kudrati biological farak (mard ki muscle power vs aurat ki pregnancy)',
        right: 'Samajik conditioning, gender socialisation aur patriarchal satta',
      },
      {
        aspect: 'Cross-Cultural Saboot',
        left: '224 samajon mein universal aur practical efficiency ka daava',
        right: '38 samajon mein cooking aur 14 mein lumbering saajha; Indian female brick-workers',
      },
      {
        aspect: 'Mother-Housewife Role',
        left: 'Parivaar ko jodne aur sukoon dene wala "expressive role"',
        right: 'Unpaid, monotonous alienation ("public health crisis number one" — Oakley)',
      },
      {
        aspect: 'Paid Market aur Naukri',
        left: 'Mard ka instrumental breadwinner banna bajar ke anukool hai',
        right: 'Auratein "Reserve Army of Labour" (Beechey) aur "Second Shift" (Hochschild) ki shikar',
      },
      {
        aspect: 'Samadhan ki Disha',
        left: 'Roles badalne se parivaar ka santulan bigad sakta hai',
        right: 'Private aur public patriarchy tod kar Kamla Bhasin ki gender equality laana',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Six Structures of Patriarchy (Sylvia Walby)',
    meaning:
      'Apni kitab "Theorizing Patriarchy" (1990) mein Walby ne male dominance ke 6 structures bataye: Household Production, Paid Work, State, Culture, Sexuality aur Male Violence.',
  },
  {
    kind: 'keyTerm',
    term: 'Patriarchal Bargain (Deniz Kandiyoti)',
    meaning:
      'Jab patriarchal samaj mein auratein apni individual suraksha aur rutba badhane ke liye patriarchy ke niyam maan kar unhe chhoti auraton (jaise bahu ya beti) par thopti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Glass Ceiling & Glass Cliff (Michelle Ryan)',
    meaning:
      'Glass Ceiling woh adrishya deewar hai jo auraton ko top leadership se rokti hai; Glass Cliff (Michelle Ryan) tab hota hai jab doobti hui company mein aurat ko CEO banaya jaaye taaki failure ka ilzam us par lage.',
  },
  {
    kind: 'keyTerm',
    term: 'Brahminical Patriarchy (Uma Chakravarti)',
    meaning:
      'Bharatiya samaj ki woh vyavastha jahan jaati ki shuddhata (caste purity) aur endogamy ko banaye rakhne ke liye dharm, Pativrata ideology aur kanoon se auraton ki sexuality par sakt pahra lagaya gaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Reserve Army of Labour (Veronica Beechey)',
    meaning:
      'Marxist-feminist concept jo dikhata hai ki capitalism shaadishuda auraton ko saste, aagyakari aur temporary mazdooron ki tarah boom mein bharti karta hai aur mandi mein sabse pehle nikaal deta hai.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'br-ambedkar',
    quote: 'Endogamy is the only characteristic that is peculiar to caste, and it is sustained by controlling surplus women.',
    context: 'Castes in India (1916) mein samjhaya ki jaati ke ghere ko bachane ke liye hi Sati, vidhwa-jeevan aur bal-vivah banaye gaye.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Patriarchy & Development Answers ke Liye 4 Brahmastra Data Points',
    body: 'Har 20-marker mein yeh 4 stats zaroor daalo: (1) 1980 UN Report: Auratein 50% aabadi hain, 66% work hours karti hain, 10% income paati hain aur 1% property (Bharat mein 22%) ki malik hain; (2) ILO LFPR Gap: Global 23%, South Asia ~50%; (3) WEF Global Gender Gap 2023: 68.4% gap bhara (131 saal lagenge; India rank 127/146; Political empowerment mein sabse bada gap); (4) NFHS-5 & GSMA 2023: ~29–31% Indian women spousal violence jhelti hain aur mobile internet use mein 40% peeche hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: '2025 aur 2022 PYQ Trap: "Education aur Job se Patriarchy Khatam Ho Gayi" Mat Likhna!',
    body: 'Jab formal employment (2025) ya women’s education (2022) par sawaal aaye, toh dikhao ki patriarchy khatam nahi hui balki apna roop badal rahi hai: working women par Arlie Hochschild ka "Second Shift" double burden hai, naukri "conditional permission" par tiki hai, padhe-likhe gharon mein dahej aur sex-selection jari hai, aur Private Patriarchy ab Public Patriarchy (Walby) ban gayi hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Workplace, Socialisation & Media Thinkers ki Quick List',
    body: 'Workplace: Veronica Beechey (Reserve Army), Ann Oakley (Pink-collar domestic extensions), Michelle Ryan (Glass Cliff), Elizabeth Stanko (Harassment = male territory), Lisa Adkins (Sexualisation of work). Socialisation/Media: Leela Dube (Seed-Earth & Mitti ka Bartan), Deniz Kandiyoti (Patriarchal Bargain), Judy Wajcman & Laura Mulvey (Masculine New Media).',
  },
  {
    kind: 'answerBox',
    intro:
      'Patriarchy aur sexual division of labour koi kudrati ya biological niyam (Murdock) nahi hain, balki ghar, workplace, dharm, state aur digital media mein phaila ek structural power system hain.',
    points: [
      'Sylvia Walby ke 6 structures: Patriarchy household production, paid work, state, culture, sexuality aur violence ke 6 stambhon par kaam karti hai aur private se public patriarchy mein badalti hai.',
      'Biology vs Social Construction (Murdock vs Oakley): Ann Oakley ne 38 samajon mein saajha cooking, 14 mein female lumbering aur Indian female construction workers ke saboot se Murdock ke biological determinism ko kharij kiya.',
      'Bharatiya socialisation aur Patriarchal Bargain: Leela Dube ki Seed-Earth analogy (Paraya Dhan, mitti vs peetal ka bartan), Uma Chakravarti ki Brahminical Patriarchy, Ambedkar ka endogamy thesis aur Deniz Kandiyoti ka "Patriarchal Bargain" dikhate hain ki parivaar gender inequality kaise sikhata hai.',
      'Workplace aur Development ka virodhabhas: Education aur jobs se thodi conjugal barabari (Symmetrical Family) aayi hai, par "Second Shift" double burden (Hochschild), "Reserve Army" (Beechey), Motherhood Penalty, Glass Ceiling/Cliff (Ryan) aur 50% South Asian LFPR gap (India #127 in WEF 2023) aaj bhi badi rukawat hain.',
      'Technology aur Masculine New Media: WFH aur contraceptives ne sahara diya, par ultrasound sex-selection, commercial surrogacy exploitation, 40% mobile internet gap (GSMA 2023), Khap phone bans aur cyber-misogyny patriarchy ko naye digital hathiyar de rahe hain.',
    ],
    conclusion:
      'Asli samajik vikas tabhi sambhav hai jab ghar ke andar unpaid care ka batwara barabar ho aur bahar public va digital patriarchy ki deewarein todi jaayein.',
  },
]

export const topic4Hi: TopicLangContent = {
  summary:
    'Sylvia Walby ke 6 structures of patriarchy, sexual division of labour par Murdock banam Ann Oakley ki debate, Deniz Kandiyoti ka patriarchal bargain, Leela Dube ki seed-earth socialisation aur Uma Chakravarti ki Brahminical patriarchy, workplace barriers (reserve army, motherhood penalty, glass ceiling/cliff, harassment), gender aur development data (UN, ILO, WEF 2023) tatha technology aur masculine new media ka feminist vishleshan.',
  mindMap,
  sections,
}