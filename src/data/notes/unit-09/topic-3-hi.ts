import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.3 · Lineage and Descent',
  center: 'Lineage & Descent',
  subtitle: 'Descent Types • Lineage vs Clan • Descent vs Alliance Theory • Matriliny & Male Authority',
  branches: [
    {
      title: 'Descent & Corporate Groups',
      color: 'lavender',
      thinkers: ['W.H.R. Rivers', 'G.P. Murdock', 'Meyer Fortes', 'E.E. Evans-Pritchard'],
      points: [
        'Descent = woh samajik niyam (rule) jisse bacha janm lete hi maa ya baap ke vansh se judta hai',
        'Lineage (Vansh) = corporate group jo ek jaane-pehchane real purvaj se step-by-step juda ho',
        'Clan / Gotra = mythical/putative purvaj; Phratry (clans ka guchha); Moiety (samaj ke 2 hisse)',
        'Kaam: social identity, property inheritance, exogamy rules, kuldevta puja aur jhagda suljhana',
      ],
    },
    {
      title: 'Descent ke 4 Prakar',
      color: 'yellow',
      thinkers: ['Irawati Karve', 'Leela Dube', 'A.R. Radcliffe-Brown', 'Tiplut Nongbri'],
      points: [
        'Unilineal: Patrilineal (mainstream India; Seed-Earth analogy) vs Matrilineal (Nayar, Khasi, Garo)',
        'Double Unilineal: Father line se property + Mother line se ritual (Nilgiri Hills ke Todas)',
        'Bilateral / Cognatic: Maa aur baap dono taraf se barabar vansh (Assam/Nagaland ke Dimasa Kachari)',
        'Ambilineal: Vyakti khud chunta hai ki father ya mother group se jude (Assam/Meghalaya ke Tiwa Lalung)',
      ],
    },
    {
      title: 'Descent vs Alliance Theory',
      color: 'mint',
      thinkers: ['A.R. Radcliffe-Brown', 'Meyer Fortes', 'Claude Lévi-Strauss', 'Louis Dumont'],
      points: [
        'Descent Theory (British: Radcliffe-Brown, Fortes, Evans-Pritchard): vertical blood lineage samaj ki neev hai',
        'Alliance Theory (French: Lévi-Strauss, Dumont): incest taboo se auraton ka exchange aur horizontal rishta banta hai',
        'Generalized vs Restricted exchange; Elementary (cross-cousin rule) vs Complex structures',
        'Indian reality: African model fail hua kyunki Bharat mein Mama (Bhaat) aur Jeeja/Saala (affinity) bahut aham hain',
      ],
    },
    {
      title: 'Matriliny mein Male Authority',
      color: 'pink',
      thinkers: ['Audrey Richards', 'Kathleen Gough', 'David Schneider', 'Tiplut Nongbri'],
      points: [
        'Matriliny (maa ke naam se vansh) kabhi bhi Matriarchy (auraton ka raaj) NAHI hoti!',
        'Satta Father-Husband se hat kar Maternal Uncle / Brother (Mama — Karanavan / Kni) ke paas jaati hai',
        'Audrey Richards "Matrilineal Puzzle": pati-patni ke pyar aur bhai-behen ke property control mein takraav',
        'Kerala Nayar Tharavad (Karanavan) & Meghalaya Khasi (Ka Khadduh sirf custodian, Mama Kni aur Durbar Shnong ka raaj)',
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
      'Descent aur lineage ke niyam tay karte hain ki vansh aur zameen peedhi-dar-peedhi (vertically) kaise aage badhegi, jabki alliance ke niyam shaadi ke zariye do khandanon ko aapas mein (horizontally) jodte hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 01',
  },
  {
    kind: 'md',
    body: `## Descent, Lineage aur Clan (Gotra) kya hain — aur inki zaroorat kyun padti hai?

Aasaan shabdon mein samjho: jaise hi kisi ghar mein bache ka janm hota hai, turant teen sawaal uthte hain — *is bache ke naam ke aage kiska surname lagega, yeh kis khandan ka hissa maana jayega, aur bada hokar ise kiski zameen-jaaydaad milegi?* Sociology mein iska faisla karne wale samajik niyam ko ==Descent== kehte hain: yani woh culturally recognised principle jo bache ko janm lete hi bina kisi form ya negotiation ke apne maa-baap mein se kisi ek (ya dono) ke samajik samooh se jod deta hai. Jahan **descent** vansh jodne ka *niyam (rule)* hai, wahin ==Lineage== (*Vansh* ya *Khandan*) un sabhi zinda aur guzar chuke rishtedaron ka thos **corporate social group** hai jo ek **jaane-pehchane, asli purvaj (known common ancestor)** se apni peedhi-dar-peedhi vanshavali (family tree) gina sakte hain.

Chhote lineage se lekar bade tribal sangathan tak yeh ghere char staron par dikhte hain:

- **Lineage vs Clan (*Gotra*) vs Phratry vs Moiety:** **Lineage** mein log apne par-dada ya lakad-dada (4 se 7 peedhi tak) ka asli naam aur rishta jaante hain, saath milkar kuldevta ki puja karte hain, zameen ke jhagde suljhate hain aur pitaji ke guzarne par bade bete ko *Pagdi* pehnate hain. Lekin jab purvaj itna purana ho ki step-by-step vanshavali yaad na ho aur log sirf vishwas (*putative/mythical ancestry*) ke aadhar par khud ko ek rishi (jaise *Kashyap* ya *Bharadwaj* ==Gotra==) ya kisi totem pashu-vriksh ki santan maanein, toh use **Clan (Gotra)** kehte hain. Kai clans ke guchhe ko **Phratry** kehte hain, aur jab poora kabila shaadi va riti-riwaj ke liye theek do aadhe hisson mein banta ho, toh har hisse ko **Moiety** kehte hain.

## 1. Descent Systems ke Chaar Prakar (Bharatiya Tribes ke Udaharan ke Saath)

Duniya ke sabhi samaj vansh ko ek hi tarike se nahi ginte. Anthropologists descent ko 4 mukhya types mein baant-te hain:

- **1. Unilineal Descent (Patrilineal aur Matrilineal):** Jab vansh sirf **ek hi parent (ya toh pita ya mata)** ki line se chale. **Patrilineal (Agnatic) Descent** poore mukhyadhara Bharat mein prachalit hai jahan vansh, gotra aur property baap se bete ko milti hai. [[thinker:Leela Dube]] ne apni mashhoor ==Seed-Earth Analogy== (*Bija-Kshetra*) se samjhaya ki patrilineal South Asia mein mard ko active "beej" (*Seed*) aur aurat ko sirf passive "khet/dharti" (*Earth*) maana jaata hai — isiliye bache par poora haq baap ke khoon ka maana jaata hai aur beti ko *Paraya Dhan* samjha jaata hai. Doosri taraf **Matrilineal (Uterine) Descent** mein vansh aur property maa se beti ki line mein chalti hai — jaise **Kerala ke Nayar, Tiya aur Moplah** tatha **Meghalaya ke Khasi, Garo aur Jaintia** samaj mein.
- **2. Double Unilineal (Duolineal) Descent:** Yahan har vyakti ek hi samay par *dono* lines se alag-alag kaamon ke liye judta hai — jaise zameen ya property pita ki line se mile aur dharmik rasmein ya maveshi mata ki line se (udaharan: Nigeria ke Yakö aur **Tamil Nadu ki Nilgiri pahadiyon ke Toda tribe** ke kuch aayam).
- **3. Bilateral (Cognatic) Descent:** Yahan vansh aur rishtedari maa aur baap **dono taraf se bilkul barabar** maani jaati hai aur koi ek तरफा lineage group nahi banta (modern Western nuclear families aur **Assam va Nagaland ke Dimasa Kachari tribe** mein).
- **4. Ambilineal (Optative) Descent:** Yahan vyakti ke paas **chunav (choice)** hota hai ki woh bada hokar apne pita ke descent group se jude ya apni mata ke descent group se (udaharan: **Assam aur Meghalaya ke Tiwa / Lalung tribe**).

## 2. Rules of Descent vs Rules of Alliance: Kinship ki Sabse Badi Debate (2015 PYQ)

Kinship anthropology mein do bade schools ke beech takraav raha hai — jise UPSC ne 2015 mein seedha poochha: *kya samaj ko vertical khoon ka vansh (Descent) jod kar rakhta hai, ya horizontal shaadi ka len-den (Alliance)?*

- **Descent Theory (British School — [[thinker:A.R. Radcliffe-Brown]], [[thinker:Meyer Fortes]], [[thinker:E.E. Evans-Pritchard]]):** Africa ke stateless kabilon (jaise Evans-Pritchard ke *Nuer* aur Fortes ke *Tallensi*) par fieldwork karke British structural-functionalists ne kaha ki samaj ki asli haddi **vertical consanguineal descent groups (lineages aur clans)** hain. Shaadi (alliance) unke liye secondary hai — shaadi ka kaam sirf itna hai ki naye bache paida hon jo vertical vansh, zameen aur political boundary ko aage badha sakein.
- **Alliance Theory (French Structuralist School — [[thinker:Claude Lévi-Strauss]], [[thinker:Louis Dumont]]):** Apni krantikari kitab *The Elementary Structures of Kinship* (1949) mein Lévi-Strauss ne kaha ki kinship ki asli chabi descent nahi balki **universal incest taboo** (apne ghar ki behen-beti se shaadi ki manahi) hai! Incest taboo ek positive rule hai jo har parivaar ko majboor karta hai ki woh apni beti doosre clan ko de aur wahan se bahu laaye — is **"exchange of women"** se do parivaron ke beech **horizontal alliance (bhaichara aur reciprocity)** banta hai. Lévi-Strauss ne **Restricted Exchange** (do clans ke beech betiyon ki seedhi adla-badli: A <-> B) aur **Generalized Exchange** (A -> B -> C -> A) ka farak dikhaya.
- **Bharat mein Descent aur Alliance ke Conceptual Issues ([[thinker:Louis Dumont]], [[thinker:T.N. Madan]]):** Jab shuruati sociologists ne British African Descent model ko andha-dhundh Bharat par lagaya, toh 5 badi galtiyan samne aayin: (1) British functionalists ne lineage mein sirf pyar aur harmony dekhi, jabki Bharat mein saga bhai aur pattidar zameen ke liye court-kachahri mein ladte hain (**normative vs ground dissonance**); (2) Unhone North India mein **Affinal (sasural) rishton ki takat** ko kam aanka — jabki patrilineal North mein bhi *Mama* (*Bhaat* ki rasam) aur *Jeejaji/Saala* behad mahatvapurna hain; (3) Village exogamy mein anjaan gaon aayi dulhan ke liye **Fictive Kinship** (*Muh-bola bhai* ya Rakhi bhai) bada emotional sahara banta hai; aur (4) Sasural mein **Avoidance (*Sasur/Jeth* se parda)** aur **Joking Relationship (*Devar-Bhabhi* ka hansi-mazaak)** ek saath chalte hain.

| Tulna ka Aadhar | Rules of Descent (Descent Theory) | Rules of Alliance (Alliance Theory) |
| --- | --- | --- |
| Pramukh Thinkers | A.R. Radcliffe-Brown, Meyer Fortes, Evans-Pritchard | Claude Lévi-Strauss, Louis Dumont, Rodney Needham |
| Kinship ki Disha | Vertical (peedhi-dar-peedhi khoon aur vansh ki kadi) | Horizontal (do khandanon ke beech shaadi ka gathbandhan) |
| Mool Aadhar | Corporate lineage, ancestral property aur political order | Incest taboo aur clans ke beech brides ka reciprocal exchange |
| Vivah ki Bhumika | Vansh ko naye waris dene ka ek sahayak zariya | Samaj ko jodne wala sabse mukhya samajik pul (bridge) |
| Bharatiya Udaharan | North Indian patrilineal *Gotra/Vansh* aur Coorg *Okka* | South Indian Dravidian cross-cousin preferential marriages |

## 3. Kya Matrilineal Society mein Male Authority Gayab Hoti Hai? (2021 & 2015 Repeat PYQ!)

Aasaan shabdon mein samjho: aksar students **Matriliny** (मातृवंशीय व्यवस्था) ko **Matriarchy** (मातृसत्ता — auraton ka shasan) samajh lete hain. UPSC ne 2015 aur 2021 dono mein bilkul yahi sawaal poochha: *Is male authority absent in matrilineal society?* Aapka jawab ekdum saaf hona chahiye: **Nahi! Matrilineal samaj mein male authority bilkul gayab nahi hoti.** Wahan sirf vansh ka naam aur property maa se beti ko jaati hai, lekin **asli faisle lene ki satta (executive authority) mardon ke haath mein hi rehti hai — bas woh satta Husband-Father (Pati-Pita) se shift hokar Maternal Uncle / Brother (Mama / Bhai — Avuncular Authority) ke paas chali jaati hai!**

- **Audrey Richards ka "Matrilineal Puzzle" ([[thinker:Audrey Richards]], [[thinker:David Schneider]], [[thinker:Kathleen Gough]]):** Anthropologist Audrey Richards (1950) ne ise ==Matrilineal Puzzle== (मातृवंशीय पहेली) kaha: matrilineal samaj mein vansh aur zameen aurat ke naam par hai, par us zameen aur bachon par control aurat ke bhai (Mama) ka hota hai. Isse ek gehra structural tanav paida hota hai — ek taraf **pati-patni ka conjugal bond** aur doosri taraf **bhai-behen ka property control**!
- **Case Study 1 — Kerala ke Nayars (*Tharavad* aur *Karanavan*):** [[thinker:Kathleen Gough]] aur [[thinker:Irawati Karve]] ne dikhaya ki Kerala ke Nayar samaj ke matrilineal joint household ko **Tharavad** (kabhi Dharwad mat likhna!) kehte the, jisme maa, uski behenein, bhai aur behenon ke bache rehte the (pati *Sambandham* ke tahat sirf raat ko visiting husband bankar aata tha aur uska koi aarthik haq nahi tha). Lekin *Tharavad* ki malkin koi aurat nahi thi — poore ghar, zameen aur bachon ke discipline ka sabse bada boss ghar ka sabse bada mama/bhai hota tha jise ==Karanavan== kehte the!
- **Case Study 2 — Meghalaya ke Khasis aur Garos (*Ka Khadduh* vs *Mama Kni* & *Durbar Shnong*):** Meghalaya ke Khasi tribe ([[thinker:Tiplut Nongbri]] ka adhyayan) mein ancestral property **ultimogeniture** ke niyam se sabse chhoti beti (**Ka Khadduh**) ke naam aati hai aur shaadi ke baad pati sasural (matrilocal) aata hai. Lekin Tiplut Nongbri sabit karti hain ki *Ka Khadduh* property ki malik nahi balki sirf **custodian (rakhwali karne wali)** hai — us zameen ko bechne, baantne ya bade parivarik faisle lene ki asli takat uske **Mama / Bhai (Kni)** ke paas hoti hai! Yahan tak ki Khasi gaon ki traditional panchayat (**Durbar Shnong**) aur chieftainship (*Syiem*) mein auraton ke baithne aur chunav ladne par sakt pabandi rahi hai. Isi tarah **Garo** tribe mein bhi waris beti (*Nokna*) ki zameen ka asli prabandhan uska pati (**Nokrom** — jo aksar uske bua ka beta hota hai) *Nokma* bankar karta hai.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Rule of Descent', text: 'Samajik niyam jo bache ko janm se pita (patrilineal) ya mata (matrilineal) ke vansh se jode' },
      { label: 'Lineage (Vansh)', text: 'Known real ancestor se step-by-step judi corporate vanshavali (4–7 generations)' },
      { label: 'Clan (Gotra)', text: 'Mythical rishi ya totem se juda exogamous samooh jahan aapas mein shaadi mana hai' },
      { label: 'Alliance Network', text: 'Incest taboo ke karan doosre clans ke saath betiyon ka vivah aur horizontal bhaichara' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Patrilineal System (Mainstream North India)',
    rightTitle: 'Matrilineal System (Kerala Nayar / Meghalaya Khasi)',
    rows: [
      {
        aspect: 'Vansh aur Surname ki Disha',
        left: 'Pita se putra ki line (Agnatic / Father -> Son)',
        right: 'Mata se putri ki line (Uterine / Mother -> Daughter)',
      },
      {
        aspect: 'Male Authority ka Kendra',
        left: 'Paternal authority: Pitaji ya ghar ka sabse buzurg mard (Karta)',
        right: 'Avuncular authority: Mama ya bada bhai (Nayar Karanavan / Khasi Kni)',
      },
      {
        aspect: 'Property Inheritance',
        left: 'Paramparagat roop se beton ko (2005 Act ke baad betiyon ko bhi)',
        right: 'Tharavad ki auraton ya Khasi sabse chhoti beti (Ka Khadduh) ke naam',
      },
      {
        aspect: 'Residence Rule',
        left: 'Patrilocal / Virilocal (dulhan sasural aati hai)',
        right: 'Duolocal (purana Nayar Tharavad) ya Matrilocal (Khasi/Garo)',
      },
      {
        aspect: 'Mukhya Structural Tension',
        left: 'Nayi dulhan (Kulvadhu) ka dabav aur bhaiyon mein zameen ka batwara',
        right: 'Audrey Richards ka "Matrilineal Puzzle" (Pati vs Mama ka khinchav)',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Lineage vs Clan (Gotra)',
    meaning:
      'Lineage (Vansh) ek real known purvaj se step-by-step juda corporate group hai, jabki Clan (Gotra) kisi prachin rishi ya mythical totem se juda exogamous bhai-bandhu samooh hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Alliance Theory (Claude Lévi-Strauss & Louis Dumont)',
    meaning:
      'French structuralist siddhant jo maanta hai ki incest taboo ke karan parivaron ke beech betiyon ka aadan-pradan ("exchange of women") aur horizontal vivah sambandh hi kinship ki asli jaan hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Matrilineal Puzzle (Audrey Richards)',
    meaning:
      'Matrilineal samajon ka woh structural virodhabhas jahan vansh aur property toh auraton ke naam par chalti hai, par un par shasan aur faisle lene ki satta aurat ke bhai/mama (avuncular authority) ke paas rehti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Seed-Earth Analogy (Leela Dube)',
    meaning:
      'Patrilineal South Asia ki woh sanskritik soch jisme pita ko bache ka active "beej" (malik) aur mata ko sirf beej paalne wali passive "dharti/khet" maan kar male lineage dominance ko natural dikhaya jaata hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Repeat PYQ (2015 & 2021): "Is Male Authority Absent in Matrilineal Society?" ka Winning Structure',
    body: 'Is repeat question mein 4 steps likho: (1) Matriliny (descent rule) aur Matriarchy (women’s rule — ek myth) ka farak saaf karo; (2) Audrey Richards ka "Matrilineal Puzzle" aur Avuncular Authority (Mama ka raaj) samjhao; (3) Do Indian examples do — Kerala Nayar Tharavad mein Karanavan ki satta (Kathleen Gough) aur Meghalaya Khasis mein Ka Khadduh sirf custodian jabki asli power Mama/Kni aur all-male Durbar Shnong ke paas (Tiplut Nongbri); (4) Modernity aur colonial laws se matriliny ke kamzor hone par conclude karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Factual Savdhani: Tharavad (Dharwad nahi!) aur Nilgiri ke Todas',
    body: 'Exam mein Kerala ke Nayar matrilineal ghar ko kabhi "Dharwad" (jo Karnataka ka shehar hai) mat likhna — sahi shabd Tharavad hai (jiska head Karanavan hota hai). Aur Double Unilineal descent ke udaharan mein Toda tribe ko Nilgiri Hills, Tamil Nadu ke roop mein likho.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Descent ke 4 Types — Indian Tribes ki Quick List',
    body: '1. Unilineal: Patrilineal (North Indian castes, Santhal/Munda) & Matrilineal (Nayars of Kerala, Khasis/Garos of Meghalaya); 2. Double Unilineal: Todas of Nilgiri Hills; 3. Bilateral: Dimasa Kachari (Assam/Nagaland); 4. Ambilineal: Tiwa/Lalung (Assam/Meghalaya).',
  },
  {
    kind: 'answerBox',
    intro:
      'Lineage aur descent ke niyam kinship ko peedhi-dar-peedhi (vertical) sthayitva dete hain, jabki alliance ke niyam vivah ke zariye alag-alag vanshon ke beech (horizontal) samajik ekta bunte hain.',
    points: [
      'Descent aur Groups: Descent janm se vansh jodne ka niyam hai (unilineal, double, bilateral, ambilineal), jabki Lineage (known ancestor) aur Clan/Gotra (mythical ancestor) thos corporate groups hain.',
      'Descent vs Alliance debate: British Descent school (Radcliffe-Brown, Fortes, Evans-Pritchard) vertical blood lineages ko prathmik maanta hai, jabki French Alliance school (Lévi-Strauss, Dumont) incest taboo aur marriage exchange ko kendra mein rakhta hai.',
      'Bharatiya sandarbh: African descent model ko Bharat par thopne se North India mein Mama (Bhaat) ke affinal mahatva, exogamous gaon mein fictive kinship (Muh-bola bhai) aur devar-bhabhi joking relationships ko nazarandaz kiya gaya.',
      'Matriliny mein Male Authority: Matriliny kabhi matriarchy nahi hoti — Audrey Richards ("Matrilineal Puzzle"), Kathleen Gough (Nayar Karanavan) aur Tiplut Nongbri (Khasi Mama/Kni aur Durbar Shnong) dikhate hain ki satta mardon (avuncular authority) ke haath mein hi rehti hai.',
    ],
    conclusion:
      'Kinship ko poori tarah samajhne ke liye vertical descent aur horizontal alliance dono ko jodna zaroori hai, saath hi yeh dekhna bhi ki matrilineal dhanche ke andar bhi patriarchal authority kaise kaam karti hai.',
  },
]

export const topic3Hi: TopicLangContent = {
  summary:
    'Descent systems ke 4 prakar (unilineal, double, bilateral, ambilineal), lineage aur clan (gotra) ka farak, British Descent Theory (Radcliffe-Brown, Fortes) banam French Alliance Theory (Lévi-Strauss, Dumont) ki debate, aur matrilineal samajon mein "Matrilineal Puzzle" (Richards, Gough, Nongbri) ke zariye male authority (Karanavan / Mama Kni) ke bane rehne ka vishleshan.',
  mindMap,
  sections,
}