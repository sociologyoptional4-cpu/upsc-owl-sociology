import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.2 — Bhartiya Parampara ka Modernization',
  center: 'Modernization of Indian Tradition',
  subtitle: 'Yogendra Singh Model • Parampara vs Modernity • Westernization Matrix',
  branches: [
    {
      title: 'Singh ka Integrated Paradigm',
      color: 'lavender',
      thinkers: ['Yogendra Singh', 'Robert Redfield', 'Milton Singer'],
      points: [
        'Integrated paradigm Cultural Structure aur Social Structure ko jodta hai',
        'Cultural axis: Little Tradition (lok-parampara) aur Great Tradition (shastriya)',
        'Structural axis: Micro (parivar, jati, gaon) aur Macro (state, kanoon, bazaar)',
        'Badlaav char alag-alag dabbon mein structural adaptation se hota hai',
      ],
    },
    {
      title: 'Sources: Orthogenetic vs Heterogenetic',
      color: 'yellow',
      thinkers: ['Yogendra Singh', 'M.N. Srinivas'],
      points: [
        'Orthogenetic (aantrik): Sanskritization, Buddhism, Jainism, Bhakti andolan',
        'Heterogenetic (bahari): Islam ka aagman, British raj, modern kanoon, technology',
        'Azaadi se pehle badlaav zyada tar cultural tha; hierarchy bani rahi',
        'British contact ne pehli baar structural aur universalistic value badlaav kiya',
      ],
    },
    {
      title: 'Parampara aur Modernity ka Mel',
      color: 'mint',
      thinkers: ['Lloyd & Susanne Rudolph', 'Milton Singer', 'Dipankar Gupta'],
      points: [
        'Parampara aur modernity dushman nahi hain; parampara adapt hoti hai',
        'Singer: Compartmentalization — din mein modern office, shaam ko ghar par puja',
        'Rudolph & Rudolph: Modernity of tradition — jati sangathan bane vote bank',
        'Dipankar Gupta: Mistaken modernity — modern gaadi aur gadget par purani soch',
      ],
    },
    {
      title: 'Modernization vs Westernization',
      color: 'pink',
      thinkers: ['M.N. Srinivas', 'Daniel Lerner', 'Yogendra Singh'],
      points: [
        'Westernization (Srinivas): 150 saal ke British raj se aane wale aadat aur lifestyle badlaav',
        'Modernization (Singh): Universalistic scientific soch aur barabari ke mulyavardhan',
        'Westernization upari ho sakta hai; Modernization soch aur samajik barabari maangta hai',
        'Srinivas ka virodh: Neechi jatiyan Sanskritize hui jabki unchi jatiyan Westernize hui',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u02-01-colonial-modernization-chain.webp',
    alt: 'P2 Unit 2 infographic: Colonialism & Indian Modernization — Colonial Impact & Yogendra Singh Tradition-Modernity',
    caption:
      'Yogendra Singh ne saabit kiya ki Bharat mein modernization purani parampara ko mitati nahi, balki use modern kanoon aur loktantra ke sath jodti hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 01',
  },
  {
    kind: 'md',
    body: `## Kya Parampara aur Modernity ek doosre ke dushman hain?

Aasaan shabdon mein samjho: shuruati Western samaj-shastriyon ka maanna tha ki agar kisi desh ko modern banna hai, toh use apni purani paramparaon, dharam aur parivar ke rishton ko bilkul khatam karna padega. Europe mein modernity ka matlab tha dharm se doori (secularization), akelapan (individualism) aur purane samuday ka tootna. Lekin Bharat ke samajik safar ne is Western soch ko galat saabit kar diya. Bharat mein ==parampara aur modernity== do kattar dushman nahi hain; balki dono ek doosre ke sath milkar ek nayi samajik vyavastha banate hain.

Jab Bharat mein loktantra, barabari ka kanoon aur modern factories aayi, toh yahan ka parivar aur jati vyavastha khatam nahi hui. Iske bajaye, jati aur parivar ne naye daur ke hisab se apne aap ko dhaal liya, aur modern sansthaon ko bhi bhartiya rang mein rang diya. [[trap:Kabhi yeh mat likho ki bhartiya parampara ek ruka hua patthar thi ya modernity ka matlab sirf pashchimi deshon ki nakal karna hai; parampara khud ko badalti rehti hai.]]

## Yogendra Singh ka Integrated Paradigm

Apni prasiddh kitaab *Modernization of Indian Tradition* (1973) mein sociologist [[thinker:Yogendra Singh]] ne samajik badlaav ko samjhane ke liye ek shandar theoretical model diya. Unhone cultural theories (jaise Robert Redfield ka Little aur Great Tradition) ko structural theories ke sath mila kar ek complete frame banaya:

### 1. Model ke Do Mukhya Axes
- **Axis 1: Cultural vs Structural:** Samaj ke do hisse hote hain — ek ==Cultural Structure== (vichar, dharam, prateek, shastra) aur doosra ==Social Structure== (concrete samajik rishte, jaise parivar, jati, kanoon, bureaucracy).
- **Axis 2: Orthogenetic vs Heterogenetic Sources:** Badlaav ya toh samaj ke andar se paida hota hai (==Orthogenetic==) ya bahar se aata hai (==Heterogenetic==).

| Samajik Aayam | Orthogenetic Badlaav (Aantrik) | Heterogenetic Badlaav (Bahari) |
| --- | --- | --- |
| Cultural Structure (Great Tradition) | Sanskritization, Vedic sudhar, Bhakti andolan | Western secularism, English education, Sufi vichar |
| Cultural Structure (Little Tradition) | Lok-geet badlaav, tribal-jati aapsi mel | World religions mein conversion, modern media |
| Social Structure (Macro Level) | Purane samrajya ka vistar, shastriya niyam | British colonial raj, modern adalat, parliament |
| Social Structure (Micro Level) | Jati ke andar aapsi badlaav, jajmani system | Factory ki naukri, shehron mein nuclear parivar |

Singh ne dikhaya ki Angrezon ke aane se pehle Bharat mein hone wale badlaav zyada tar orthogenetic aur cultural the — yaani kisi jati ki position badal jaati thi (Sanskritization), par poori hierarchy waisi hi rehti thi. British rule pehla aisa heterogenetic shock tha jisne culture ke sath-sath poore social structure ko hila diya.

## Westernization aur Modernization mein Bhed

UPSC ke answers mein aksar log in dono shabdon ko ek hi samajh lete hain, par dono mein zameen-aasman ka fark hai:

### 1. Westernization ([[thinker:M.N. Srinivas]])
Srinivas ke mutabiq, British shasan ke 150 se zyada saalon ke asar se bhartiya samaj aur sanskriti mein aane wale badlaav ko Westernization kehte hain. Isme technology, sansthayein, kanoon ke alawa pehnawa aur khan-paan shamil hai (jaise suit pehanna, chai peena, ya table-kursi par baithna). Srinivas ne kaha ki Westernization ethically neutral hai — iska matlab yeh zaroori nahi ki insaan dil se azaad ya barabar ho gaya. Mazedaar baat yeh thi: [[eg:ek taraf unchi jatiyan colonial naukriyon ke liye Westernized ho rahi thin, toh doosri taraf neechi jatiyan izzat paane ke liye Sanskritize ho rahi thin]].

### 2. Modernization ([[thinker:Yogendra Singh]])
Modernization ek universal aur mulyon par aadharit process hai. Yeh sirf Western deshon ki nakal nahi hai. Modernization ka matlab hai ek aisi soch jisme ==tark (reason), scientific nazariya, secular humanist values, aur har insaan ki barabari== shamil ho. Ek vyakti mehngi videshi gaadi mein chal sakta hai aur brand ke kapde pehan sakta hai (Westernization), par agar woh ghar aakar chhuachhut ya jaati-bhedbhav karta hai, toh woh modern nahi kehla sakta.

## The Modernity of Tradition: Parampara kaise badal gayi?

Purani sansthayein modernity ke aage mitne ke bajaye uske sath judkar naye roop mein saamne aayi:

- **Jati bani Political Pressure Group:** Political sociologists [[thinker:Lloyd & Susanne Rudolph]] ne apni kitaab *The Modernity of Tradition* (1967) mein bataya ki purani jati sabhayein (jaise Tamil Nadu ki Nadar ya Vanniyar sabhayein) modern loktantra mein pressure groups aur vote-banks ban gayi. Unhone modern chunav jeetne aur reservation paane ke liye jati ke bando-basti ka sahara liya.
- **Shehri Naukri mein Compartmentalization:** Sociologist [[thinker:Milton Singer]] ne Chennai ke bade vyapariyon par study karke bataya ki bhartiya log ==compartmentalization== karte hain. Modern factory ya corporate office mein woh secular, modern aur computer par hisab lagate hain; par shaam ko ghar laut-te hi dhoti-kurta pehan kar poori shradha se shastriya puja karte hain.
- **Vicarious Ritualization:** Jab busy routine mein pooja ka samay nahi milta, toh log pandit ji ko paise dekar ya online app se pooja karwa lete hain, taaki modern ghadi ke sath dharam bhi chalta rahe.

## Samaj-shastriya Samiksha: Mistaken Modernity ka Khatra

Parampara ke is anukoolan (adaptation) ko dekh kar hawa mein udne ki zaroorat nahi hai, kyunki isme kai kamiya bhi hain:

- **Dipankar Gupta ka "Mistaken Modernity":** [[thinker:Dipankar Gupta]] ne kaha ki Bharat "dhokhe ki modernity" (mistaken modernity) mein jee raha hai. Haath mein iPhone hona ya videshi kapde pehanna modernity nahi hai agar hamari soch mein jatiwad, khap panchayat aur dahej waisa hi zinda hai. Asli modernity har nagrik ko barabar samajhne mein hai.
- **Asaman Vistar:** Modernization ka fayda zyada tar shehri unche vargon ko mila hai, jabki gaon ke Dalit aur Adivasi aaj bhi purani begaari aur shoshan se mukt nahi ho paye hain.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Westernization (M.N. Srinivas)',
    rightTitle: 'Modernization (Yogendra Singh)',
    rows: [
      {
        aspect: 'Aitihasik Daira',
        left: '150 saal ke British raj aur European lifestyle ki nakal se juda hai',
        right: 'Universal process jo kisi ek geographical sanskriti tak seemit nahi hai',
      },
      {
        aspect: 'Mukhya Mulya',
        left: 'Ethically neutral; pehnawa, khan-paan aur official tareeqon tak seemit ho sakta hai',
        right: 'Value-laden; tark, secularism, insaani barabari aur azaadi maangta hai',
      },
      {
        aspect: 'Samajik Gehrai',
        left: 'Upari ho sakta hai (jaise suit pehan kar bhi chhuachhut manana)',
        right: 'Soch aur samajik rishton ka gehra aur structural badlaav maangta hai',
      },
      {
        aspect: 'Bhartiya Roop',
        left: 'Unchi jatiyon ne shuru kiya jabki neechi jatiyan Sanskritization karti rahin',
        right: 'Samvidhanik drishti jo sabhi nagrikon ko barabar adhikar deti hai',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Traditional Samaj', text: 'Varna hierarchy, Little aur Great traditions, local micro structures' },
      { label: 'Aantrik Badlaav', text: 'Bhakti, Buddhism aur Sanskritization se positional mobility aayi' },
      { label: 'Colonial Contact', text: 'British raj ne modern adalat, bureaucracy aur bazaar lakar structural badlaav kiya' },
      { label: 'Creative Adaptation', text: 'Compartmentalization (Singer) aur jati ka vote-bank banna (Rudolph)' },
      { label: 'Asli Modernity', text: 'Samvidhanik mulyon ke zariye paramparik bhedbhav ko mitane ki koshish' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Orthogenetic Change',
    meaning:
      'Yogendra Singh ka concept jiska matlab hai samajik aur sanskritik badlaav ke woh kaaran jo samaj ke andar se paida hote hain.',
    thinkerSlug: 'yogendra-singh',
  },
  {
    kind: 'keyTerm',
    term: 'Heterogenetic Change',
    meaning:
      'Bahari sabhyataon ya sanskritiyon (jaise British colonialism ya Islamic contact) dwara laya gaya samajik badlaav.',
    thinkerSlug: 'yogendra-singh',
  },
  {
    kind: 'keyTerm',
    term: 'Compartmentalization',
    meaning:
      'Milton Singer ka term jisme modern rational workplace aur dharmik parivar ko alag-alag dabbon mein baant kar jiya jaata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Modernity of Tradition',
    meaning:
      'Rudolph & Rudolph ka concept jisme purani sansthayein jaise jati naye loktantrik aur arthik karyon ko karne ke liye dhal jaati hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Answer Strategy: Yogendra Singh ka 2x2 Matrix hamesha banayein',
    body: 'UPSC mein Yogendra Singh par sawal aate hi unka 2x2 matrix likhein: ek axis par Cultural vs Structural, aur doosre axis par Orthogenetic vs Heterogenetic. Isse examiner ko turant samajh aa jaata hai ki aapne theory pakki padhi hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Milton Singer ke Do Concepts: Compartmentalization aur Vicarious Ritualization',
    body: 'Bhartiya vyapariyon ki modern zindagi ko dikhane ke liye Milton Singer ko quote karein: woh office aur ghar ko alag rakhte hain (compartmentalization) aur samay bachane ke liye panditon se pooja karwa lete hain (vicarious ritualization).',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti mat karna: Westernization ko Modernization mat likhna',
    body: 'Dono ko mix mat karein. Westernization sirf angrezi bhasha ya suit-boot pehanna ho sakta hai; jabki Modernization ka matlab scientific soch aur har insaan ko barabar maanne ki aazaad drishti hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat mein modernization ka safar yeh saabit karta hai ki purani paramparayein modern kanoon aur loktantra ke aage mit-ti nahi, balki unke sath adapt hoti hain.',
    points: [
      'Virodhabhas ka ant: Bhartiya anubhav dikhata hai ki parampara aur modernity dushman nahi balki aapas mein adapt hone wale saathi hain.',
      'Yogendra Singh ka integrated model: Cultural vs Structural dimensions ko Orthogenetic vs Heterogenetic sources ke sath jod kar dekha gaya.',
      'Westernization vs Modernization: Westernization colonial lifestyle apnana hai (Srinivas), jabki Modernization universal equality aur scientific soch hai (Singh).',
      'Adaptation ke tarike (Singer, Rudolphs): Compartmentalization office aur ghar ko alag karta hai; jati sabhayein loktantrik vote-bank ban jaati hain.',
      'Khatra (Dipankar Gupta): "Mistaken modernity" chetavani deta hai ki bina barabari ke mulyon ke sirf gadgets khareedna asli modernity nahi hai.',
    ],
    conclusion:
      'Is prakar Bhartiya modernization pashchim ki andhi nakal nahi, balki zinda parampara aur samvidhanik loktantra ke beech ka ek zinda samvaad hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Yogendra Singh ka integrated model batata hai ki Bhartiya modernization pashchim ki andhi nakal nahi, balki ek aisi rachnatmak dhalan hai jahan purani paramparayein modern sansthaon ke sath judti hain.',
  mindMap,
  sections,
}
