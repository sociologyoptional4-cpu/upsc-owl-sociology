import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Azaad Bharat mein tribal vikas ki alag-alag dishaon ko kholta hai. Verrier Elwin (Isolation) aur G.S. Ghurye (Assimilation) ke aitihasik vivaad, Jawaharlal Nehru ke Tribal Panchsheel, Tribal Sub-Plan (TSP) ki kamiyon, Virginius Xaxa Committee dwara development-induced displacement ke pardafash, aur Sarna code v rajneetik azaadi ke naye andolanon ko aasaan Hinglish mein samajhata hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 4 — Tribal Integration, Development, and Autonomy',
  center: 'Integration, Vikas & Autonomy',
  subtitle: 'Elwin vs Ghurye • Nehru Ka Panchsheel • Xaxa Committee Report • Sarna Andolan',
  branches: [
    {
      title: '1. Isolation vs. Assimilation vs. Integration',
      color: 'lavender',
      thinkers: ['Verrier Elwin', 'G.S. Ghurye', 'Thakkar Bapa', 'Jawaharlal Nehru'],
      points: [
        'Isolation (Elwin): Tribal sanskriti ko bachaane ke liye bahari logon se door "National Parks" model',
        'Assimilation (Ghurye): Aadiwasiyon ko "backward Hindus" maan kar mainstream samaj mein poora milana',
        'Thakkar Bapa ka aitraaz: Isolation ko "chidiya-ghar approach" bataya jo aadiwasiyon ko gareeb rakhta hai',
        'Integration (Nehru): Beech ka rasta jahan modern suvidhaen milein par tribal pehchan na chhine',
      ],
    },
    {
      title: '2. Nehru Ka Tribal Panchsheel & Samvidhan',
      color: 'yellow',
      thinkers: ['Jawaharlal Nehru', 'Verrier Elwin', 'B.R. Ambedkar', 'Jaipal Singh Munda'],
      points: [
        'Panchsheel (1958): Apne dhang se vikas, jungle-zameen ka aadar, local team, kam afsarshahi, character paimana',
        'Samvidhanik suraksha: Art 15(4) aarakshan, Art 19(5) zameen bachav, Art 23 begar par rok',
        'Fifth Schedule (Central India) banam Sixth Schedule (North-East ke Autonomous District Councils)',
        'PESA Act (1996) ne Gram Sabha ko zameen aur vanopaj par sarvochha adhikar diya',
      ],
    },
    {
      title: '3. Displacement, TSP & Xaxa Report',
      color: 'mint',
      thinkers: ['Shilu Ao', 'Walter Fernandes', 'Virginius Xaxa', 'B.D. Sharma'],
      points: [
        'Development-induced displacement: STs 8.6% hain par dams-mines se be-dakhal logon mein 47% aadiwasi hain',
        'Tribal Sub-Plan (TSP, 1974): Aabadi ke anupaat mein budget earmark karne ka niyam banaya gaya',
        'Xaxa Committee (2014): Zameen chhinne, PESA ki be-basi aur bachon mein kuposhan ka khulasa kiya',
        'Walter Fernandes ka aitraaz: R&R schemes mein zameen ke badle zameen na milna aur be-sahara hona',
      ],
    },
    {
      title: '4. Autonomy & Sarna Dharam Ki Maang',
      color: 'pink',
      thinkers: ['Sanjib Baruah', 'Ram Dayal Munda', 'Christophe Jaffrelot', 'Salkhan Murmu'],
      points: [
        'Rajneetik azaadi: Jharkhand aur Chhattisgarh rajya bane; Bodoland aur Tipraland ki maangein jaari',
        'Sarna Dharam assertion: Central India ke tribals ka Census mein alag dharmik code lene ka andolan',
        'Sarna ke mukhya usool: Jal-Jungle-Jameen pooja, koi jaat-paat nahi, mandir-murti pooja se doori',
        'Sanskritik aatmavishwas: Ol Chiki script ka apnana aur Sarhul-Karma tyoharon ko garv se manana',
      ],
    },
  ],
}

const sectionsHinglish: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u05-02-tribal-integration-panchsheel.webp',
    alt: 'P2 Unit 5 infographic: Isolation, Assimilation & Integration — Elwin vs Ghurye to Tribal Panchsheel & Autonomy',
    caption:
      'Tribal Vikas Ka Rasta: Isolation aur Assimilation ke takrav se lekar Nehru ke Panchsheel, TSP aur Sarna dharam ki pehchan tak ka pura visual safar.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 15 Visual 02',
  },
  {
    kind: 'md',
    body: `## Azaadi Ke Baad Ki Badi Behes: Isolation, Assimilation Ya Integration?

Aasaan shabdon mein samjho, jab 1947 mein desh azaad hua toh sabke saamne sabse bada sawal yeh tha ki tribal logon ka vikas kaise kiya jaye. Agar unhein jungle mein unke haal par chhod dete toh wo hamesha ke liye beemari, anpadhta aur gareebi mein fase rehte. Lekin agar shehron ki tarah factories aur afsar wahan bhejte, toh bahari thekedar unki zameen loot lete aur unki anokhi sanskriti mit jaati. Is sawal par Bharat ke samaj-shastrayon mein zabardast behes hui, jisse teen alag-alag vichardharayein nikal kar aayin:

### 1. Isolation Approach (Alag Rakhne Ka Nazariya): Verrier Elwin
Shuruat mein British anthropologist [[thinker:Verrier Elwin]] ne apni kitabon (*The Baiga*, 1939; *The Aboriginals*, 1943) mein yeh pakka stand liya ki aadiwasiyon ko bahari duniya se bilkul door rakha jaye. Elwin ka kehna tha ki jab bhi tribal log shehri samaj ya angrez sarkar ke sampark mein aate hain, unki khushiyan chhin jaati hain. Sahukar unki zameen hadap lete hain, thekedar unhein sharabi bana dete hain aur samaj-sudharak unke khule naach-gane aur sanskriti ko galat batane lagte hain. Isliye Elwin ne aadiwasiyon ke liye jungle mein surakshit "National Parks" banane ka sujhav diya jahan koi bahari ghus na sake.

### 2. Assimilation Approach (Milane Ka Nazariya): G.S. Ghurye
Iske bilkul khilaf khade hue Bombay University ke mashhoor sociologist [[thinker:G.S. Ghurye]] apni kitaab *The Aborigines—"So-Called"—and Their Future* (1943) lekar. Ghurye ne "Adivasi" shabd ko hi nakar diya aur kaha ki yeh koi alag prajati nahi hain, balki yeh dar-asal ==backward Hindus== (pichhde hue Hindu) hain jo door rahne ki vajah se thode peeche chhoot gaye. Ghurye ne kaha ki inhein "National Park" mein band rakhna insaniyat ke khilaf hai; kya aadiwasiyon ko sadak, aspatal, bijli aur padhai ka haq nahi hai? Samaj-sudharak **Thakkar Bapa** ne bhi Elwin ki neeti ko "chidiya-ghar (zoo) approach" kaha jisme insano ko aamood-pramod ke liye qaid rakha jaye. Ghurye ka manna tha ki aadiwasiyon ke "cultural defects" (jaise sharab peena, jhum kheti) ko theek karke unhein poori tarah Hindu samaj mein shamil (assimilate) kar lena chahiye.

### 3. Integration Approach (Beech Ka Rasta): Nehru Aur Elwin Ka Mel
Dono ke nuksan saaf the—isolation mein aadiwasi gareeb rehta, aur assimilation mein uski sanskriti mar jaati. Isliye Pradhan Mantri [[thinker:Jawaharlal Nehru]] ne ek beech ka rasta nikala jise ==Integration Approach== kehte hain. Baad ke saalon mein Verrier Elwin ne bhi apni purani isolationist soch chhod di aur Nehru ke sath milkar NEFA ke liye *A Philosophy for NEFA* (1957) likhi. Iska saaf matlab tha: aadiwasiyon ko aspatal, school, sadak aur bijli zaroor do, par unpar koi bahari bhasha, dharam ya sanskriti zabardasti mat thopo.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Isolation Approach (Shuruati Verrier Elwin)',
    rightTitle: 'Assimilation Approach (G.S. Ghurye)',
    rows: [
      {
        aspect: 'Mukhya Siddhant',
        left: 'Hands-off policy; aadiwasiyon ko bahari duniya se door jungle ke surakshit kshetron mein rakhna.',
        right: 'Poori tarah mainstream mein milana; aadiwasiyon ko aam Hindu samaj ka hissa bana kar vikas karna.',
      },
      {
        aspect: 'Sanskriti Par Nazariya',
        left: 'Pavitra, khush-mizaaj aur barabari wali; bahari logon ke aane se sanskriti bikhar jaati hai.',
        right: 'Pichhda Hindu roop jisme sharab aur jhum kheti jaise dosh hain jinhein sudharna zaroori hai.',
      },
      {
        aspect: 'Sabse Bada Khatra',
        left: 'Sanskritik tabahi, zameen chhinna aur shehri logon dwara aadiwasiyon ka aarthik shoshan.',
        right: 'Hamesha ke liye pichhda reh jana aur desh ki mukhya dhara se kat kar alag-thalaq pad jana.',
      },
      {
        aspect: 'Samaj-Shastriya Critique',
        left: 'Thakkar Bapa ne ise "chidiya-ghar" approach kaha jisme insano ko museum specimen banaya gaya.',
        right: 'Brahminical shoshan ka arop; aadiwasiyon ko jaat-paat ki sabse nichli Shudra sidhi par dhakelna.',
      },
      {
        aspect: 'Aaj Ke Daur Mein Asar',
        left: 'Andaman ke Jarawa aur Sentinelese jaise PVTGs ke liye strict isolation banaye rakhna.',
        right: 'Ashram schools aur mainstream padhai ke zariye hone wala automatic samaavesh.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Nehru Ka Tribal Panchsheel (1958): Izzat Ke Sath Vikas

Integration Approach ko zameen par utaarne ke liye Jawaharlal Nehru ne 1958 mein apne paanch mashhoor niyam diye jinhein **Tribal Panchsheel** kaha jaata hai. Yeh aaj bhi aadiwasi prashashan ka sabse bada aadarsh mana jaata hai:

| Usool | Mukhya Niyam | Prashashan Ka Maqsad | Samaj-Shastriya Mahatva |
|---|---|---|---|
| **1. Apne Dhang Se Vikas** | Apni kabiliyat aur dhang se aage badhna. | Bahari sanskriti ka dabdaba rokna. | Jabran assimilation ko nakarna. |
| **2. Zameen-Jungle Ka Samman** | Customary zameen aur vanadhikar bachana. | Corporate aur thekedaron ki loot rokna. | Saajha commons aur jal-jungle ki hifazat. |
| **3. Local Team Banao** | Apne hi aadiwasi naujawanon ko train karna. | Bahari afsaron ki bheed kam karna. | Aadiwasiyon ko apna neta khud banana. |
| **4. Saral Prashashan** | Kaghazi afsarshahi ka jaal na bichhana. | Paramparik gaon ke mukhiya ke sath kaam. | Purane loktantra aur parampara ka aadar. |
| **5. Character Ka Paimana** | Insaan ki izzat aur aazadi se natija dekhna. | Sirf budget kharch karne par na tikna. | Statistical dikhavati vikas ko nakarna. |

1. **Apne Dhang Se Vikas (Non-imposition):** Aadiwasiyon par koi bhi cheez zabardasti mat thopo. Unhein apni kabiliyat aur parampara ke hisab se vikas karne do, aur unki kala aur sanskriti ko aadar do.
2. **Jungle Aur Zameen Ka Samman:** Tribal zameen aur jungle par unke customary haqqon ki poori hifazat karo; koi bahari thekedar unki zameen na chheen sake.
3. **Apne Hi Logon Ko Neta Banao:** Shehron se bahari afsaron ki bheed bhejne ke bajaye aadiwasi naujawanon ko train karo taaki wo apne ilaaqon ka prashashan khud sambhal sakein.
4. **Zyada Afsarshahi Se Bacho:** Tribal ilaaqon mein sarkari kaghazon aur daftaron ka jaal mat bichhao. Unke paramparik gaon ke mukhiya aur kabile ke niyam ke sath milkar kaam karo.
5. **Kharch Se Nahi, Insaan Ke Vikas Se Natija Dekho:** Vikas ka faisla is baat se mat karo ki kitne crore rupaye kharch hue, balki is baat se karo ki aadiwasi insaan ki izzat aur aatmanirbharta kitni badhi.

### Samvidhan Mein Diye Gaye Khas Adhikar

Bharat ke Samvidhan ne in usoolon ko kanoon mein dhaal diya:
- **Suraksha Ke Khas Adhikar:** **Article 15(4)** sarkar ko aadiwasiyon ke liye special niyam banane ki taqat deta hai; **Article 19(5)** aam logon ke aane-jane aur zameen khareedne par rok lagata hai taaki tribal zameen bache; **Article 23** begar aur bandhua mazdoori par ban lagata hai; aur **Article 29** unki bhasha aur sanskriti ko bachata hai.
- **Administrative Dhancha:** **Article 164** ke mutabiq MP, Odisha aur Chhattisgarh mein Tribal Welfare Minister hona anivarya hai; **Article 275(1)** special grants deta hai; aur **Fifth v Sixth Schedules** alag shashan dete hain.
- **PESA Act (1996):** Panchayats Extension to Scheduled Areas kanoon ne gaon ki **Gram Sabha** ko zameen bachane aur vanopaj par sarvochha kanooni adhikar diya.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Colonial Segregation',
        text: 'Scheduled Districts aur Excluded Areas jahan aadiwasiyon ko azaadi ke andolan se door rakha gaya.',
      },
      {
        label: 'Nehru Ka Integration',
        text: '1958 ka Tribal Panchsheel jo modern suvidhaon ke sath tribal sanskriti ka samman sikhata hai.',
      },
      {
        label: 'Tribal Sub-Plan (TSP)',
        text: '1974 se shuru hua niyam jisme aabadi ke anupaat mein vikas ka budget alag se tay kiya gaya.',
      },
      {
        label: 'Kanooni Adhikar Ka Daur',
        text: 'PESA (1996) aur FRA (2006) ke zariye Gram Sabha ko zameen aur jungle par sarvochha haq dena.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Vikas Ki Asliyat: Be-Dakhli, TSP Aur Xaxa Report Ka Khulasa

Panchsheel ki baatein kitabon mein toh bahut khoobsurat theen, par azaadi ke baad zameen par aadiwasiyon ke sath bahut bada dhokha hua. Nehru ne jin factories, koyla khaniyon aur dams ko "modern India ke mandir" kaha tha, unke liye sabse zyada kurbani aadiwasiyon ne di. Central India ke mineral-rich ilaaqon ko desh ke vikas ke naam par loot ka adda bana diya gaya.

### Development-Induced Displacement Ka Dard

Sociologist [[thinker:Walter Fernandes]] ne dikhaya ki vikas ke naam par aadiwasiyon ko kaise ujada gaya:

- **Bhaari Be-Dakhli:** Sarkari Expert Group Report (2000) ke mutabiq, Scheduled Tribes desh ki **kul aabadi ka sirf 8.6%** hain, lekin azaadi ke baad udyogon aur dams se **be-dakhal hone wale kul logon mein 47% aadiwasi the**.
- **Rehabilitation Ki Barbadi:** Resettlement and Rehabilitation (R&R) schemes poori tarah bhrasht niklin. Zameen ke badle zameen na ke barabar mili. Jo cash mila wo thekedaron ne loot liya ya daaru-kharch mein khatam ho gaya. Anpadh aadiwasi factories mein engineer nahi ban sakte the, isliye wo shehron ke slums mein rickshaw chalane ya khetihar mazdoor banne par majboor ho gaye.

### Tribal Sub-Plan (TSP) Ka Khel

Pichhde pan ko door karne ke liye **Shilu Ao Committee (1969)** ki sifarish par Fifth Plan (1974) mein ==Tribal Sub-Plan== (TSP) shuru kiya gaya:
- **Aabadi Ke Hisab Se Budget:** Niyam bana ki kendra aur rajya sarkar apne total vikas budget ka utna hissa tribal ilaaqon par kharch karengi jitni unki aabadi hai (jaise kendra sarkar ka ~8.6% budget).
- **Afsarshahi Ki Dhokhadhadi:** Kaghazon par toh budget dikhaya gaya, par afsaron ne isme ghotala kiya. Tribal ilaaqon se guzarne wale highway ya bade dam ke kharch ko tribal vikas mein jod diya gaya, jabki aadiwasi gaon mein na school bana na aspatal.

### Virginius Xaxa Committee (2014) Ka Indictment

Saal 2014 mein sociologist [[thinker:Virginius Xaxa]] ki adhyakshta wali High-Level Committee ne azaad Bharat ki 60 saal ki tribal policies ki pol khol di:
1. **Zameen Ki Chori:** Corporate mining ke liye PESA kanoon ko daba kar illegal tareeqe se aadiwasiyon ki zameen chheeni gayi.
2. **Gram Sabha Ki Undekhi:** Sarkari afsaron ne Gram Sabha ki bina manzoori ke police ki laathi ke dum par companiyon ko zameen dilwayi.
3. **Bhookh Aur Kuposhan:** Aadiwasi bachon mein kuposhan be-hadd zyada paya gaya; **42% se zyada bachhe stunted (naate)** the aur 70% mahilayein khoon ki kami (anemia) se peedit theen.
4. **Jailon Mein Band Aadiwasi:** Lakdi chunne ya apne haq ke liye aawaz uthane par hazaron aadiwasiyon ko naxalite ya ghuspaithiya bata kar jailon mein thoons diya gaya. Committee ne ailaan kiya ki welfare ke bheekh ke bajaye kanooni adhikar aur azaadi dena hi ekmatra rasta hai.`,
  },
  {
    kind: 'md',
    body: `## Astitva Ki Jung: Rajneetik Autonomy Aur Sarna Dharam Code

Be-dakhli aur sanskritik shoshan ke khilaf aaj Bharat ke aadiwasi chup nahi baithe hain. Wo loktantra ke daayre mein reh kar do mukhya dharon par apna haq maang rahe hain: rajneetik autonomy aur dharmik pehchan.

### 1. Rajneetik Autonomy Aur Naye Rajyon Ki Ladai
Tribals ne apne dum par desh ka rajneetik naksha badal diya:
- **Naye Rajya:** Lambi ladai ke baad 2000 mein **Jharkhand** aur **Chhattisgarh** bane taaki aadiwasiyon ko apni sarkar chalane ka mauka mile.
- **Regional Councils:** Assam mein **Bodoland Territorial Council** (BTC) aur Tripura mein alag *Tipraland* ki maangein unke rajneetik self-rule ka prateek hain.

### 2. Sarna Dharam Code: Prakriti Pooja Ki Nayi Chetna

Central India ke aadiwasiyon (Santhal, Munda, Oraon, Ho) ka sabse bada aandolan hai Census mein ==Sarna Religion Code== lene ki maang. Is andolan ko *Adivasi Sengel Abhiyan* chala raha hai aur November 2020 mein Jharkhand Vidhan Sabha ne iske paksh mein sarvasammati se prastav pass kiya.

Samaj-shastri aur andolan ke neta batate hain ki Sarna dharam scriptural Hinduism se bilkul alag hai:
- **Jal, Jungle, Jameen Ki Pooja:** Sarna dharam sacred groves (*Sarna Sthal* ya *Jaherthan*) mein rehti gaon ki devi (*Gram Devoti* ya *Singbonga*) par tika hai jo sal ke pedon mein baste hain. Yahan prakriti ko bachana hi dharm hai.
- **Jaat-Paat Aur Chhua-Chhoot Ka Na Hona:** Sarna mein koi Varna vyavastha nahi hai, koi unch-neech nahi hai aur na hi kisi pandit-purohit ki madhyasthata hai.
- **Murti Pooja Aur Swarg-Narak Se Door:** Yeh mandiron, murti pooja aur swarg-narak ke kitaabi granthon ko nahi maanta.

Sarna code maang kar aadiwasi yeh keh rahe hain ki unhein na toh zabardasti Hindu banaya jaye aur na hi unka dharam-parivartan Christian banne ke liye ho. Saath hi Santhali bhasha ki **Ol Chiki script** ko apnana aur ==Sarhul== v ==Karma== jaise tyoharon ko garv se manana yeh sabit karta hai ki aadiwasi modern Bharat ke loktantra mein apni sharto par jeena chahte hain.`,
  },
  {
    kind: 'keyTerm',
    term: 'Tribal Panchsheel',
    meaning:
      'Jawaharlal Nehru ka 1958 ka paanch-sutri siddhant jo bina zabardasti ke tribal dhang se vikas, zameen-jungle ka aadar aur local leadership par zor deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Tribal Sub-Plan (TSP)',
    meaning:
      '1974 se shuru hui yojana jisme kendra aur rajya sarkaron ko ST aabadi ke anupaat mein vikas budget ka hissa alag se earmarked karna anivarya kiya gaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Development-Induced Displacement',
    meaning:
      'Dams, khaniyon aur factories ke naam par aadiwasiyon ka zabardasti ujadna, jo kul be-dakhal aabadi ka 47% bante hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Sarna Dharma Code',
    meaning:
      'Central India ke aadiwasiyon ka Census mein alag dharmik column maangne ka andolan, jo jaat-paat se mukt jal-jungle-jameen ki prakriti pooja par tika hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Link: Amartya Sen Ki Capability Approach Se Jodo',
    body: 'UPSC ke answer mein Nehru ke Panchsheel ko Amartya Sen ke "Development as Freedom" se jodo. Vikas ka matlab shehri sanskriti thopna nahi hai; vikas ka matlab hai aadiwasiyon ki capability (shiksha, sehat, vanadhikar) badhana taaki wo apni marzi ka jeevan chun sakein.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Elwin Ke Shuruati Aur Aakhiri Vichar Ka Farq Samjho',
    body: 'Yeh mat likhna ki Verrier Elwin hamesha isolationist the. Unhone 1930s mein The Baiga mein isolation manga tha, par 1950s mein unhone Nehru ke sath milkar Integrationist "A Philosophy for NEFA" likhi. Dono phases ko likhne se examiner ache marks deta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Nehru Ke 5 Panchsheel Usool (N-R-L-A-Q)',
    body: 'NRLAQ se yaad rakho: (N)on-imposition on culture, (R)espect for land and forests, (L)eadership team building, (A)voiding over-administration aur (Q)ualitative evaluation of character.',
  },
  {
    kind: 'answerBox',
    intro:
      'Azaad Bharat mein tribal vikas ki disha shuruati isolation aur assimilation ki behes se nikal kar Nehru ke Panchsheel aur aaj ke astitva-autonomy andolanon tak pahunchi hai.',
    points: [
      'Elwin-Ghurye vivaad: Verrier Elwin ne tribal sanskriti ko bachane ke liye "National Park" isolation chaha, jabki G.S. Ghurye ne unhein "backward Hindus" bata kar poore assimilation ki maang ki.',
      'Nehru ka Panchsheel: 1958 ke paanch usoolon ne ek beech ka loktantrik rasta banaya jisme modern vikas ke sath jungle-zameen ke customary haqqon ki suraksha ka ailaan kiya gaya.',
      'Vikas ka shoshan aur displacement: Walter Fernandes ne sabit kiya ki 8.6% aabadi hone ke bawajood 47% be-dakhal log aadiwasi the jinka resettlement poori tarah fail raha.',
      'TSP ki kami: 1974 ka Tribal Sub-Plan aabadi ke hisab se budget laaya, par afsarshahi ne ise highways aur dams mein kharch dikhakar gaon tak nahi pahunchaya.',
      'Xaxa Committee (2014) ka khulasa: Zameen loot, PESA kanoon ki be-basi, 42% bacho mein stunting aur lakdi chunne par aadiwasiyon ko jail mein daalne ka pardafash kiya.',
      'Autonomy aur Sarna code: Aadiwasiyon ne Jharkhand rajya banwa kar rajneetik taqat dikhayi aur ab nature-worship par aadharit Sarna dharam ke alag census code ke liye aawaz buland kar rahe hain.',
    ],
    conclusion:
      'Asli vikas tabhi hoga jab aadiwasiyon ko welfare ke naam par be-dakhal karna band ho aur PESA v FRA ke zariye unki Gram Sabha ko azaad faisle lene ka haq mile.',
  },
]

export const topic4Hi = {
  summary,
  mindMap,
  sections: sectionsHinglish,
}
