import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 18.2 — Dharmik Alp-Sankhyakon Ki Samasyayein (Hinglish)',
  center: 'Alp-Sankhyak Samuday Aur Chunautiyan',
  subtitle: 'Minority Question • Sachar Report Aakde • Ghettoization Aur Hinsa • Majoritarianism • Parsi Sankat Aur Jiyo Parsi',
  branches: [
    {
      title: 'Minority Question Aur Samvidhan',
      color: 'lavender',
      thinkers: ['Louis Wirth', 'B.R. Ambedkar', 'T.M.A. Pai', 'Rajeev Bhargava'],
      points: [
        'Samajshastriya Paribhasha: Louis Wirth ke anusar minority sirf kam aabadi nahi balki bhedbhav aur lachari ka shikar samooh hai',
        'Samvidhanik Sanrakshan: Article 29 aur 30 minorities ko apni bhasha, sanskriti aur educational institutions chalane ka haq dete hain',
        'National Commission for Minorities Act 1992: 6 notified dharmik samuday (Muslim, Christian, Sikh, Buddhist, Parsi, Jain)',
        'State-Level Minority: TMA Pai case mein Supreme Court ne nirdharit kiya ki minority status rajya ke aadhar par tay hoga',
      ],
    },
    {
      title: 'Sachar Committee Ki Asliyat',
      color: 'yellow',
      thinkers: ['Rajindar Sachar', 'Amitabh Kundu', 'Zoya Hasan', 'Abusaleh Shariff'],
      points: [
        'Sachar Report (2006): Sabut ke sath sabit kiya ki Musalman SC/ST ki tarah pichhde hain; tushtikaran ka dawa jhootha tha',
        'Shiksha Ka Pichhdapan: 59.1% literacy; higher education mein sirf 1/3rd hissedari; madrasa myth tuta (sirf 4% bache madrasa jaate hain)',
        'Rozgar Ka Sankat: Asangathit kshetron (mechanic, dastakar) mein 61% se zyada; IAS mein sirf 2.5%, police mein 3.2%, banks mein 2.2%',
        'Financial Redlining: Sarkari aur private banks ne Muslim ilaqon ko "negative zones" declare karke loan dene se mana kiya',
      ],
    },
    {
      title: 'Hinsa, Stereotyping Aur Ghettoization',
      color: 'mint',
      thinkers: ['Paul Brass', 'Ashutosh Varshney', 'Christophe Jaffrelot', 'Laurent Gayer'],
      points: [
        'Institutionalized Riot System (Brass): Dange achanak nahi bhadakte, unhe chunavi labh ke liye plan karke bhadkaya jaata hai',
        'Stereotyping Aur Othering: Deshbhakti par shak, aabadi badhane ke jhoothe dawe, aur media mein negative chhavi',
        'Ghettoization: Darr aur residential bhedbhav ke chalte majbooran ek hi ilaqe (Juhapura, Jamia Nagar, Mumbra) mein simatna',
        'Bhaichare Ka Tutna: Ashutosh Varshney kehte hain ki alag-alag rehne se aapsi civic rishte khatam ho jaate hain',
      ],
    },
    {
      title: 'Majoritarianism Aur Parsi Jan-Sankhya',
      color: 'pink',
      thinkers: ['Pauline Kolenda', 'Shernaz Cama', 'Christophe Jaffrelot', 'Bipan Chandra'],
      points: [
        'Majoritarianism banam Minoritarianism: Bahusankhyakvaad ka dabav aur minority appeasement ka rajnaitik aarop',
        'Parsi Jan-Sankhya Sankat: 1941 mein 1,14,000 se ghat kar 2011 mein 57,264 par simte; TFR sirf 0.8 reh gaya',
        'Samajik Kaaran: Sakht endogamy (gair-Parsi se shadi karne wali aurat ke bacho ka bahishkar), der se shadi, aur burhape ka inverted pyramid',
        'Jiyo Parsi Yojana: Central government dwara 100% subsidized IVF, rishta counseling aur bacho ki dekhbhal ka sahara',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u08-02-religious-minorities-matrix.webp',
    alt: 'P2 Unit 8 infographic: Dharmik Alp-Sankhyakon Ki Samasyayein — Constitutional Guarantees vs Structural Deprivation',
    caption: 'Constitutional Guarantees vs Structural Deprivation (Problems of Religious Minorities).',
  },
  {
    kind: 'md',
    body: `### 1. Samajshastra Mein "Minority Question" Ka Asli Arth

Aasaan shabdon mein samjho: Samajshastra mein "alp-sankhyak" ya minority ka matlab sirf aabadi mein kam hona nahi hota. Jane-mane samajshastri ==Louis Wirth== ne paribhasha di thi ki minority woh samooh hai jise samaj mein unke rang, roop ya sanskritik visheshataon ke kaaran alag thalag karke bhedbhav ka shikar banaya jaata hai, aur jo khud ko samajik shoshan ka patr maante hain. Bharat ke sandarbh mein dharmik minority sirf ek sankhya nahi hai, balki samajik aur aarthik shakti ki kami aur asuraksha ka ahasas hai.

Samvidhan Sabha mein [[thinker:B.R. Ambedkar]] ne zordar tareeqe se kaha tha ki Bharat mein minorities koi achanak paida hui cheez nahi hain, balki yeh ek aisi aitihasik sachhai hain jise bahusankhyakon ki daya par nahi chhora ja sakta; unhe pakke samvidhanik kanoonon ki zaroorat hai:
- **Article 29**: Har nagrik varg ko apni alag bhasha, lipi ya sanskriti bachaye rakhne ka poora haq deta hai.
- **Article 30**: Sabhi dharmik aur bhashai minorities ko apni pasand ke educational institutions sthapit karne aur chalane ka maulik adhikar deta hai.
- **Article 25–28**: Antahkaran (conscience) ki azaadi aur bina kisi rok-tok ke dharam manne, aacharan karne aur prachar karne ka haq deta hai.

National Commission for Minorities (NCM) Act 1992 ke tehat Kendra Sarkar ne 6 samudayon ko adhikararik roop se minority ghoshit kiya: **Muslim**, **Christian**, **Sikh**, **Buddhist**, **Parsi**, aur 2014 mein **Jain**. Supreme Court ne prasiddha *T.M.A. Pai Case (2002)* mein faisla sunaya ki Bharat mein rajyon ka punargathan bhasha ke aadhar par hua tha, isliye kaun minority hai yeh poore desh ke hisab se nahi balki rajya-star par tay kiya jayega [[eg:Jammu-Kashmir, Punjab, Meghalaya, Mizoram, Nagaland aur Lakshadweep mein Hindu aabadi ke hisab se minority hain]].

| Dharmik Alp-Sankhyak | Census 2011 Bhagidari | Samvidhanik Sthiti | Mukhya Samajik-Aarthik Chunauti | Samajshastriya Dasha |
| :--- | :--- | :--- | :--- | :--- |
| **Muslim** | 14.2% | Notified National Minority | Padhai-likhai mein pichhadna, asangathit rojgari, bank credit na milna | Ghettoization, darr ka mahol, Pasmanda andolan |
| **Christian** | 2.3% | Notified National Minority | Dalit Christian ko SC arakshan se bahar rakhna, conversion ke naam par hamle | Aantarik jaati-bhed (Syrian banam Dalit), tribal pehchan |
| **Sikh** | 1.7% | Notified National Minority | Punjab mein kheti ka sankat, nashe ki aadat, 1984 ki hinsa ki yaadein | Unchi aarthik sthiti, kheti aur videshi diaspora mein aage |
| **Buddhist** | 0.7% | Notified National Minority | Navayana Dalit converts ke sath samajik chhua-chhoot aur kalank | Ambedkarite chetna, jati ke khilaf aazadi ka prateek |
| **Jain** | 0.4% | Notified National Minority | Hindu civil law se alag apni azaad dharohar aur institutions bachana | Sabse unchi literacy aur per capita aamdani |
| **Parsi** | 0.005% (~57k) | Notified National Minority | Aabadi ka tezi se ghatna, buzurg aabadi ka badhna | Sabse samriddha elite, sakht endogamy, genetic bimariyan |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Majoritarianism (Bahusankhyakvaad)',
    rightTitle: 'Minoritarianism (Aarop Banam Zameeni Sach)',
    rows: [
      {
        aspect: 'Mool Soch',
        left: 'Daawa ki sankhya mein zyada hone ke kaaran dominant dharam ki sanskriti hi desh ki pehchan honi chahiye',
        right: 'Rajnaitik aarop ki sarkar minorities ko laad-pyaar karti hai; ya kattar minority netritva ki sanrakshak soch',
      },
      {
        aspect: 'Loktantra Ka Roop',
        left: 'Christophe Jaffrelot ke shabdon mein "Ethnic Democracy" banana jahan minorities doosre darje ke nagrik ban jayein',
        right: 'Samvidhanik suraksha (Article 29-30) ko "Tushtikaran" (appeasement) kehkar nishana banana',
      },
      {
        aspect: 'Samajik Sachhai',
        left: 'Nafrati bhashan, dharmi dhrubeekaran aur kamzor vargo par dabav banane ka silsila badhta hai',
        right: 'Sachar Committee ne sabit kiya ki Musalman sarkaari naukriyon aur aarthik vikas mein SC/ST se bhi pichhe hain',
      },
      {
        aspect: 'Samajik Ekta Par Asar',
        left: 'Desh ko "Deshbhakt Bahusankhyak" aur "Shakki Alp-Sankhyak" ke aamne-saamne baant deta hai',
        right: 'Conservative maulvi aur neta aam logon ko modern education aur mahila adhikar se door rakhte hain',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 2. Samajik-Aarthik Aur Shaikshik Samasyayein: Sachar Committee Report

Aazadi ke baad se Bharat mein aksar yeh behas chhidti thi ki minorities ko "appease" (tushtikaran) kiya ja raha hai ya unka vikas nahi ho raha. Is rajnaitik behas ko 2006 mein Justice ==Rajindar Sachar Committee Report== ne thos aakdon ke sath hamesha ke liye saaf kar diya. Manmohan Singh sarkar dwara banayi gayi is committee ne bataya ki Bharatiya Musalman vikas ke lagbhag har paimane par Daliton aur Adivasiyon ke barabar ya unse bhi pichhe the.

#### Sachar Committee Ke Mukhya Zameeni Aakde (2006):
1. **Shiksha Ka Pichhdapan Aur Madrasa Ka Myth**:
   - Musalmano ki literacy rate 59.1% thi, jo rashtriya ausat (64.8%) se kafi kam thi.
   - 20 saal se upar ke Musalmano mein sirf 3.4% graduate the (national average 7% tha). Elite colleges (IIT, IIM, Central Universities) mein unki presence 1.5% se bhi kam thi.
   - *Madrasa Myth Kharij*: Sachar Committee ne sabit kiya ki yeh afwah galat hai ki adhiktam Muslim bache madrasa padhte hain. Sach yeh hai ki **sirf 4% bache full-time madrasa jaate hain**, jabki 66% bache sarkaari schoolon mein jaate hain. Madrasa jana dharmi kattarta nahi balki gaon-mohalle mein sarkaari school na hone par aakhiri majboori thi.
2. **Naukriyon Ki Kami Aur Informal Trap**:
   - Musalman unorganized sector aur self-employment (mechanic, dastakar, tailor, dukaandar, chhota vyapar) mein phanse the—unki 61% aabadi informal kamon par nirbhar thi.
   - Sarkaari naukriyon mein unki sankhya behad kam thi: **IAS mein sirf 2.5%**, IPS mein 3.2%, Railways mein 4.5%, aur sarkaari banks mein sirf 2.2%.
3. **Banks Se Loan Na Milna (Financial Redlining)**:
   - Sachar Committee ne dikhaya ki banks Musalmano ko aabadi ke hisab se behad kam loan dete the.
   - Sarkaari aur private banks ne Muslim aabadi wale ilaqon ko informal taur par "Negative Zones" ya "Red Zones" ghoshit kar rakha tha, jahan home loan ya business loan lene par sidhe mana kar diya jaata tha [[eg:Purani Delhi, Meerut ya Ahmedabad ke Muslim dastakaron ko bank loan nahi milte, jiske chalte unhe soodkhoron se 5% mahine ke byaj par udhar lena padta hai]].

Baad mein aayi **Amitabh Kundu Committee (2014)** ne janch karke bataya ki primary school enrollment thoda behtar hua hai, lekin unchi padhai, formal sarkaari naukriyon aur mohallon ki basic suvidhaon mein Musalman ab bhi behad pichhe hain.`,
  },
  {
    kind: 'flow',
    direction: 'vertical',
    steps: [
      {
        label: 'Dange Aur Asuraksha',
        text: 'Sampradayik hinsa aur dangon se inter-community vishwas tootata hai aur physical darr paida hota hai',
      },
      {
        label: 'Apne Samuday Mein Sharan',
        text: 'Suraksha ki talaash mein log mixed mohalle chhodkar apne hi dharam ke ilaqe mein jaakar basne lagte hain',
      },
      {
        label: 'Kiraye Aur Ghar Ka Bhedbhav',
        text: 'Bahar ke posh ilaqon mein ghar na milne ke kaaran log involuntary enclaves mein qaid ho jaate hain',
      },
      {
        label: 'Sarkaari Upeksha Aur Kalank',
        text: 'Nagar nigam aur police in ilaqon ko "Ghetto" kehkar sadak, paani, school aur safai dena band kar dete hain',
      },
      {
        label: 'Bhaichare Ki Maut',
        text: 'Puri tarah alag rehne se dosti aur saajha samajik jeevan khatam ho jaata hai, jisse nafrat aur badhti hai',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 3. Hinsa, Stereotyping Aur Shahron Ka Ghettoization

Dharmik alp-sankhyakon ki sabse badi pareshaani teen cheezon ke aapsi gathjod se banti hai: Sampradayik Hinsa, Galat Chhavi (Stereotyping), aur Shahron Ka Ghettoization. Yeh teeno ek-doosre ko badhava dete hain.

#### A. Hinsa Ka Samajshastra (Paul Brass Ka IRS Model)
Samajik vigyani [[thinker:Paul Brass]] ne apni mashhoor kitab (*The Production of Hindu-Muslim Violence in Contemporary India*) mein dikhaya ki dange koi achanak aayi bheed ka gussa nahi hote. Brass ne ise **Institutionalized Riot System (IRS)** kaha: dange chunavi fayde ke liye netaon aur danga-bhadkane wale networks dwara planning ke sath karwaye jaate hain. Vibhuti Narain Rai ne dikhaya ki dangon ke dauran police ka bhedbhavpurna ravaiyya (jaise Hashimpura ya Bhagalpur) minorities ke man mein state ke prati gehra avishwas paida karta hai.

#### B. Stereotyping Aur "Othering" Ka Dushchakra
Minorities ke khilaf teen aam jhoothe narrative chalaye jaate hain:
1. **Deshbhakti Par Shak**: Musalmano ko Pakistan ka hamdard aur Christians ko videshi missionary batakar unki rashtrabhakti par nishana lagana.
2. **Aabadi Ka Darr**: Yeh jhootha prachar karna ki Muslim aabadi tezi se badhkar bahusankhyak ban jayegi, jabki NFHS-5 ka data batata hai ki bachon ki sankhya dharam se nahi balki garibi aur mahila shiksha se tay hoti hai.
3. **Tushtikaran Ka Rona**: Samvidhanik adhikar ya tirth-yatra subsidy ko lekar yeh dikhana ki unhe fayda mil raha hai, jabki Sachar report ne unki sachhi lachari zahir ki.

#### C. Ghettoization Aur Aapsi Rishton Ka Tutna
Samajshastri Laurent Gayer aur [[thinker:Christophe Jaffrelot]] (*Muslims in Indian Cities*) ne do cheezon ka farak samjhaya:
- **Ethnic Enclave**: Apni marzi se apni bhasha aur khane-peene ke apnapan ke liye ek jagah rehna.
- **Ghetto**: Majboori mein, darr aur bhedbhav ke chalte ek aise ilaqe mein band ho jana jahan se nikalne ka rasta na ho.
Ahmedabad ka Juhapura, Delhi ka Jamia Nagar aur Seelampur, ya Mumbai ka Mumbra aisi jaghein hain jahan 80–90% log dangon ke darr aur mainstream colonies mein makaan na milne ki wajah se aakar base. Gujarat mein *Disturbed Areas Act* ke zariye property transfer par rok lagakar is bhedbhav ko kanooni roop diya gaya.

Ashutosh Varshney ne sabit kiya tha ki shaanti banaye rakhne ke liye Hindu aur Muslim ka aapas mein business, trade union aur dosti (*inter-ethnic civic networks*) mein judna zaroori hai. Jab log ghettos mein band ho jaate hain to yeh aapsi pul toot jaate hain [[eg:Ahmedabad mein Vejalpur (Hindu) aur Juhapura (Muslim) ke beech ki sadak ko aam bolchal mein "Border" kaha jaata hai, jo shahar ke andar hi do mulkon jaisi deewar khadi kar deta hai]].`,
  },
  {
    kind: 'md',
    body: `### 4. Parsi Samuday Ka Demography Sankat Aur Jiyo Parsi Scheme

Musalmano ke pichhdepan se bilkul alag, Bharat ka Parsi (Zoroastrian) samuday ek ajeeb samajshastriya viradhabhas pesh karta hai: ek behad ameer, padha-likha aur sammanit samuday jo **aabadi ke achanak khatam hone ke kagaar par hai**.

#### A. Aarthik Samriddhi Banam Aabadi Ka Sankat
Parsi log 8th–10th sadi mein Iran par Arab hamlon se bachkar Gujarat ke Sanjan mein Raja Jadi Rana ki sharan mein aaye the. Bharat ke aadhunikikaran mein Parsi samuday ka yogdan bemisaal hai—chahe Tata, Godrej aur Wadia udyog hon, Homi Bhabha ki nuclear science ho, ya Nani Palkhivala aur Fali Nariman jaise kanoonvid hon.

Lekin unki jan-sankhya tezi se gir rahi hai:
- 1941 ke Census mein Parsi aabadi **1,14,000** thi.
- 2001 mein yeh ghat kar **69,601** par aa gayi.
- 2011 Census ke mutabiq Bharat mein sirf **57,264 Parsi** bache the.
- Aaj unki aabadi 45,000 se bhi kam anumanit hai, jahan har saal lagbhag 800 logon ki maut hoti hai jabki sirf 200 bache paida hote hain.

#### B. Parsi Aabadi Ghatne Ke Samajik Kaaran
1. **Sakht Endogamy Aur Kattar Niyam**: Parsi Panchayat behad sakht niyam maanti hai. Agar koi Parsi ladki kisi gair-Parsi ladke se shadi kar le, to uske bachon ko Parsi nahi mana jaata aur unhe Fire Temple (*Agyari*) ya *Tower of Silence* (Dokhma) mein aane ki ijazat nahi hoti.
2. **Der Se Shadi Aur Kuware Rehna**: Unchi shiksha aur career ki wajah se shadi ki ausat umra 30-35 saal ho gayi hai. Samajshastriya survey batate hain ki **30% se zyada Parsi kabhi shadi hi nahi karte**.
3. **Behad Kam Prajanan Dar (Ultra-Low TFR)**: Parsi samuday ka Total Fertility Rate lagbhag **0.8** hai, jo duniya mein sabse kam hai (aabadi sthir rakhne ke liye 2.1 TFR zaroori hota hai).
4. **Buzurg Aabadi Ka Inverted Pyramid**: Parsi samuday mein 31% se zyada log 60 saal se upar ke hain, jisse yeh samaj super-aging pyramid ban chuka hai.

#### C. Sarkaari Kadam: Jiyo Parsi Yojana
Is aitihaasik samuday ko vilupt hone se bachane ke liye Ministry of Minority Affairs ne 2013–14 mein **Jiyo Parsi Scheme** shuru ki.
- **Yojana Ke Teen Mukhya Hissay**:
  1. *Medical Sahayata*: Shadi-shuda jodon ko IVF aur Assisted Reproductive Technology ka 100% sarkaari kharch dena.
  2. *Counseling Aur Rishta Karyakram*: Naujawan ladke-ladkiyon ke liye matchmaking retreats aur shadi ki counseling aayojit karna.
  3. *Childcare Support*: Bachon ki parvarish ke liye mahina aarthik sahayata dena.
- **Samajshastriya Mulyankan**: Is yojana se ab tak 400 se zyada bache paida hue hain. Lekin Dr. Shernaz Cama jaise vidwano ka maanna hai ki jab tak Parsi Panchayat inter-caste ya inter-faith shadi karne wali mahilaon ke bachon ko apnane ke niyam nahi badlegi, tab tak sirf IVF se aabadi ka sankat hal nahi ho sakta.`,
  },
  {
    kind: 'keyTerm',
    term: 'Sociological Minority',
    meaning: 'Louis Wirth ke anusar aisa samuday jo sirf sankhya mein kam na ho, balki samajik, rajnaitik aur aarthik shakti mein pichhda hone ke kaaran bhedbhav ka shikar ho.',
  },
  {
    kind: 'keyTerm',
    term: 'Sachar Committee Findings',
    meaning: '2006 ki sarkaari report jisne aakdon se sabit kiya ki Bharatiya Musalman shiksha, sarkaari naukriyon aur bank loan mein Daliton ke barabar ya unse bhi pichhe hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Spatial Ghettoization',
    meaning: 'Sampradayik hinsa aur makan na milne ke darr se kisi kamzor samuday ka majbooran shahar ke kisi ek asuvidhadharak kone mein simat kar reh jana.',
  },
  {
    kind: 'keyTerm',
    term: 'Institutionalized Riot System (IRS)',
    meaning: 'Paul Brass ka siddhant jo batata hai ki dange achanak nahi hote, balki chunav jeetne ke liye tay shuda networks dwara plan karke bhadkaye jaate hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Jiyo Parsi Yojana',
    meaning: 'Kendra Sarkar ki vishesh yojana jisme Parsi samuday ki tezi se ghati aabadi ko bachane ke liye muft IVF ilaj aur rishta counseling di jaati hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Theoretical Synergy',
    body: 'Minority answers mein classical theory ka use karo: Max Weber ka "Pariah Groups" aur "Social Closure" model residential discrimination aur Parsi endogamy samjhane mein kaam aayega. Karl Marx ka "False Consciousness" dikhayega ki kaise ameer neta dango ke zariye garib janta ko aapas mein ladwate hain.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Sabhi Minorities Ko Ek Jaisa Mat Samjho',
    body: 'Parsi samuday aarthik roop se ameer hai par aabadi ka sankat jhel raha hai; Muslim samuday aarthik v shaikshik pichhdepan aur ghettoization jhel raha hai. Dono ki samasyaon ko milakar ek jaisa mat likho.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Enclave Banam Ghetto Ka Farak',
    body: 'Gayer aur Jaffrelot ka farak yaad rakho: Enclave apni marzi aur suvidha se chuna jata hai; Ghetto darr, asuraksha aur bahar makaan na milne ki majboori se banta hai.',
  },
  {
    kind: 'answerBox',
    intro: 'Bharat mein "alp-sankhyak sawal" samvidhanik aadarshon aur zameeni asuraksha ke beech ka ek lamba sangharsh hai, jahan kanooni suraksha ke bawajood bhedbhav aur hinsa ki chunauti bani hui hai.',
    points: [
      'Minority Ki Asli Pehchan: Louis Wirth ke mutabiq minority ka matlab sirf aabadi ka chhota hona nahi, balki samajik taur par kamzor aur bhedbhav ka shikar hona hai.',
      'Asuraksha Ka Dushchakra: Paul Brass ke Institutionalized Riot System se dange bhadkaye jaate hain; isse media stereotyping badhti hai, aur majbooran log ghettos mein sharan lete hain.',
      'Ghettoization Se Nuksan: Juhapura ya Mumbra jaise ilaqon mein alag rehne se Ashutosh Varshney ka aapsi civic rishta toot jaata hai, aur sarkaari school v aspataal nahi milte.',
      'Sachar Report Ka Sabut: Justice Sachar ke aakdon ne sabit kiya ki Musalmano ko appeasement nahi mil raha, balki woh sarkaari naukriyon aur bank loan mein behad pichhe hain.',
      'Loktantrik Samadhan: Is chunauti se nipatne ke liye saste housing kanoon, police sudhar, aur aarthik-shaikshik arakshan jaisi policy laagu karni hogi.',
    ],
    conclusion: 'Bharat ke loktantra ki asli pariksha isme hai ki bahusankhyak shakti ke aage alp-sankhyak samuday kitna aazad, surakshit aur garimamay jeevan jee paate hain.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Bharat ke dharmik alp-sankhyakon ki samasyaon ka samajshastriya adhyayan: Louis Wirth ki minority paribhasha, Samvidhan ke Article 29–30, Sachar Committee ke zameeni aakde, dangon ka Institutionalized Riot System (Paul Brass), ghettoization aur stereotyping (Jaffrelot & Gayer), bahusankhyakvaad ki chunauti, aur Parsi samuday ka demography sankat tatha Jiyo Parsi yojana.',
  mindMap,
  sections,
}

export default topic2Hi
