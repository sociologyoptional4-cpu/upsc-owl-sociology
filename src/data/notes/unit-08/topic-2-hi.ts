import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 8.2 · Types of Religious Practices',
  center: 'Religious Practices & Organizations',
  subtitle: 'Animism • Monism vs Pluralism • Church, Sect aur Cult',
  branches: [
    {
      title: 'Animism, Naturism & Totemism',
      color: 'lavender',
      thinkers: ['E.B. Tylor', 'Max Müller', 'Émile Durkheim', 'Graham Harvey'],
      points: [
        'Tylor Animism: jism, ped, nadi mein aatma (anima) aur purvaj-pooja (necrolatry)',
        'Müller Naturism: toofan, suraj aur nadi ke darr va aashcharya se prakriti-pooja',
        'Durkheim Totemism: Arunta clan ka totem hi devta aur samaj ka pratik hai',
        'New/Ecological Animism: Chipko, Narmada, Sarna groves aur nadiyon ko legal rights',
      ],
    },
    {
      title: 'Monism, Dualism & Pluralism',
      color: 'yellow',
      thinkers: ['Adi Shankara', 'Ramanuja', 'Madhvacharya', 'Peter Berger'],
      points: [
        'Monism (Advaita): Creator aur creation ek hain (Aham Brahmasmi); vs Monotheism',
        'Dualism (Dvaita, Christianity, Islam) vs Qualified Monism (Vishishtadvaita)',
        'Hinduism as Henotheism / Kathenotheism (Max Müller: Ekam Sat Vipra Bahudha Vadanti)',
        'Cultural & Religious Pluralism: Berger, Ashoka Dhamma, Ganga-Jamuni Tehzeeb',
      ],
    },
    {
      title: 'Church, Denomination & Sect',
      color: 'mint',
      thinkers: ['Ernst Troeltsch', 'Max Weber', 'Howard Becker', 'H. Richard Niebuhr'],
      points: [
        'Church: poore samaj par monopoly, janm se entry, state ke saath gathbandhan',
        'Denomination: pluralist samaj mein respectable seh-astitva aur state se alagav',
        'Sect: parent dharm se bagawat karke bana group jo high commitment mangta hai',
        'Weber Theodicy of Disprivilege aur Niebuhr life-cycle (sect -> denomination)',
      ],
    },
    {
      title: 'Cults & New Religious Movements',
      color: 'pink',
      thinkers: ['Roy Wallis', 'Steve Bruce', 'Bryan Wilson', 'Paul Heelas'],
      points: [
        'Cult: bina parent dharm ke bilkul naya vishwas, jahan bhakt customers jaise hain',
        'Roy Wallis 2x2 Matrix (Respectable/Deviant x Uniquely/Pluralistically Legitimate)',
        'Wallis ke 3 NRMs: World-Rejecting, World-Affirming aur World-Accommodating',
        'Stark & Bainbridge (Audience/Client cults) aur Heelas ka Spiritual Supermarket',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u08-01-religion-theories-types.webp',
    alt: 'P1 Unit 8 infographic: Theories & Types of Religion — Classical Sociology of Religion & Organizational Types',
    caption: 'Classical Sociology of Religion & Organizational Types — Theories & Types of Religion ka visual saransh.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 8 Visual 01',
  },
  {
    kind: 'md',
    body: `## Adivasi Jungle se lekar Global Spiritual Supermarket Tak

Aasaan shabdon mein samjho: duniya mein dharmik prathayein (religious practices) kitni alag-alag dikhti hain — kahin Jharkhand ke adivasi gaon mein log jungle ke ped aur purvajon ki aatma ko poojte hain, kahin Advaita Vedanta ke sanyasi aatma aur brahmand ko ek maante hain, toh kahin Bengaluru ya New York ke software engineers weekend par stress mitane ke liye meditation cults join karte hain! Sociologists in tamam practices ko do hisson mein baant kar padhte hain: **(1) Vishwas ka darshan** (animism, naturism, monism, pluralism) aur **(2) Dharmik sangathan ka roop** (church, denomination, sect, cult).

## 1. Animism, Naturism aur Aaj ka Ecological Animism

Purane aur saral samajon mein dharm kisi mandir ya church ki deewaron mein band nahi tha — poori prakriti hi zinda aur pavitra maani jaati thi.

- **Animism ([[thinker:E.B. Tylor]]):** Latin shabd *anima* (aatma ya prana) se nikla Animism. Iska matlab hai yeh vishwas ki sirf insaan mein hi nahi, balki janwaron, ped-paudhon, pahadon, nadiyon aur mare hue purvajon (**necrolatry**) mein bhi zinda aatma ya spirits rehti hain. Kyunki yeh spirits khush hokar fasal bacha sakti hain ya naraz hokar bimari laa sakti hain, isliye **shamans** (ojha/pahan) rituals ke zariye unhe shant rakhte hain. [[eg:Jharkhand, Chhattisgarh aur Odisha ke Santhal, Munda aur Oraon adivasiyon mein Sarna sacred groves aur purvajon ki aatma se salah lene ki pratha aaj bhi zinda animism hai.]]
- **Naturism ([[thinker:Max Müller]]):** Animism aur Naturism ka farak dhyan se samjho: Animism kisi ped ya patthar ke *andar chhupi aatma* ko poojta hai, jabki Naturism kudrat ki *bahari bishal taqaton* (suraj, bijli, hawa, barish, nadi) ko hi insaani roop (personification) dekar devta maan leta hai. Müller ke mutabik iski jad insaan ka kudrat ke aage emotional darr, aashcharya aur shradha hai. [[eg:Rigveda mein Indra, Agni, Surya aur Vayu ki stuti, ya Bihar-UP mein Chhath Puja par ugte aur doobte Surya Devta ki upasana Naturism ke behtareen udaharan hain.]]
- **Aaj ke Daur mein Animism ("New Animism"):** Anthropologist [[thinker:Graham Harvey]] batate hain ki climate change ke daur mein animism purana andh-vishwas nahi balki prakriti ko bachane ka sabse modern rasta hai! Jab hum nadi aur jungle ko dead raw material ke bajaye zinda rishtedar maante hain, tabhi paryavaran bachta hai. [[eg:Maharashtra ke Devrai aur Kerala ke Kavu sacred groves, Chipko aur Niyamgiri andolan, aur New Zealand ki Whanganui nadi va Bharat mein Ganga-Yamuna ko "living person" ka darja dene ki koshish neo-animism hi hai.]]

## 2. Monism, Monotheism, Polytheism aur Pluralism

Exam mein sabse badi galti students tab karte hain jab woh **Monism** aur **Monotheism** ko ek samajh lete hain. Aasaan shabdon mein farak samjho: **Monotheism** (Ekeishwarvad) ginti ki baat karta hai ki Bhagwan sirf *ek* hai, lekin woh Creator (banane wala) apni banayi duniya (Creation) se *alag* upar baitha hai (jaise mainstream Islam aur Christianity mein). Iske bilkul alag, **Monism** (Advaitvad — shabd diya [[thinker:Christian von Wolff]] ne) kehta hai ki **poora brahmand, aatma aur Parmatma mool roop se EK hi tattva hain** — Creator aur Creation ke beech koi bhed ya deewar hai hi nahi!

- **Philosophical Monism ke Teen Roop:** (1) *Idealistic Monism* (sirf chetna ya idea sach hai), (2) *Materialistic Monism* (sirf bhautik padarth/matter sach hai — jaise prachin Bharat ke **Charvaka/Lokayata** aur **Karl Marx**), aur (3) *Neutral Monism* (mind aur matter dono ek hi cosmic energy ke roop hain).
- **Bharatiya Darshan aur Sikhism mein Monism vs Dualism:**
  - **Advaita Vedanta (Pure Monism — [[thinker:Adi Shankara]]):** *Advaita* ka arth hai "do nahi, sirf ek." Adi Shankara ke mutabik sirf **Brahman** hi param satya hai, yeh dikhne wali duniya *Maya* (bhram) hai, aur insaan ki aatma (*Atman*) khud Brahman hi hai — jise Upanishad ke mahavakya ==Aham Brahmasmi== ("Main hi Brahman hoon") aur *Tat Tvam Asi* kehte hain.
  - **Vishishtadvaita (Qualified Monism — [[thinker:Ramanuja]]):** Aatma aur jagat dono Bhagwan ke hi sharir ke sacche ang hain jo bhakti ke zariye Parmatma se judte hain.
  - **Dvaita (Dualism — [[thinker:Madhvacharya]]):** Mainstream Christianity aur orthodox Islam ki tarah Madhvacharya ka Dvaita maanta hai ki Creator (Bhagwan) aur Creation (jeev va jagat) hamesha do alag satya hain — halanki Islam ke andar **Sufism** (*Wahdat al-Wujud*) mein aashiq (aatma) aur Mashooq (Khuda) ke ek ho jaane ka monist rang milta hai.
  - **Sikhism ka Monistic Darshan:** Guru Nanak Dev ji ka *Ik Onkar* Parmatma ko *Sat-Chit-Anand* maanta hai jahan se har aatma nadi ki dhar ki tarah nikalti hai aur wapas usi mein sama jaati hai.
- **Kya Hinduism Monotheistic hai ya Polytheistic?** Hinduism ke mool siddhant — *Dharma, Karma, Samsara, Moksha* aur char *Purusharthas* (*Dharma, Artha, Kama, Moksha*) — aam zindagi mein **Polytheism** (33 koti devi-devta) aur gehre darshan mein **Monism** ko ek saath samete hue hain. [[thinker:Max Müller]] ne ise ==Henotheism / Kathenotheism== kaha (ek samay par ek ishta-devta ko sarvocch manna bina baaki devtaon ko nakare), jiska mool mantra Rigveda mein hai: *"Ekam Sat Vipra Bahudha Vadanti"* (Satya ek hai, gyani use alag-alag naamon se pukarte hain).

### Cultural aur Religious Pluralism (Bahu-Sanskritivad)

Sociology mein **Cultural aur Religious Pluralism** ka matlab hai ek hi desh ya samaj ke andar alag-alag dharmon, bhashaon aur khan-pan wale samudayon ka barabari aur samman ke saath rehna — bina apni pehchan khoye ("Melting Pot" ke bajaye **"Salad Bowl"** model).

- **Modernity aur Pluralism ([[thinker:Peter Berger]]):** Berger ne apni purani secularisation theory badalte hue kaha ki ==modernity dharm ko khatam nahi karti, balki pluralism paida karti hai== — aaj shehar mein har dharm ke log padosi hain, jisse kisi ek dharm ki "monopoly on truth" toot jaati hai aur log "spiritual shoppers" ([[thinker:David Lyon]]) ban jaate hain.
- **Bharat ka Unity in Diversity Model:** **Samrat Ashoka ke 7th aur 12th Edicts** (*sabhi panth mil-jul kar rahein*), **Akbar ka Sulh-i-Kul aur Ibadat Khana**, **Bhakti-Sufi santon ki Ganga-Jamuni Tehzeeb**, aur [[thinker:M.N. Srinivas]] va [[thinker:Yogendra Singh]] ke "Little and Great Traditions" se lekar Samvidhan ke **Articles 25–30** tak — Bharat ki cultural diversity iske dharmik samudayon ke yogdaan se hi bani hai. [[link:Paper 2 Unit 8 mein Rajeev Bhargava ke Principled Distance secularism aur composite culture se ise seedha jodo.]]

## 3. Dharmik Sangathan: Church, Denomination, Sect aur Cult

Dharmik samuh khud ko kaise chalate hain aur sarkar (state) se kaisa rishta rakhte hain? [[thinker:Ernst Troeltsch]] (1912) ne **Church–Sect typology** banayi, jise aage [[thinker:Max Weber]], [[thinker:Howard Becker]], [[thinker:H. Richard Niebuhr]] aur [[thinker:Roy Wallis]] ne **4 hisson** mein baanta:

| Dimension | Church (Ecclesia) | Denomination | Sect | Cult / NRM |
| --- | --- | --- | --- | --- |
| Samaj mein Monopoly | Poore samaj par monopoly | Koi monopoly nahi; pluralist | Parent dharm se bagawat (schism) | Bilkul naya vishwas; no parent |
| Entry aur Size | Janm se; har class shamil | Janm ya choice se; bada size | Adult conversion; chhota aur close | Customer/client choice; open |
| Structure & Clergy | Bureaucratic pujari hierarchy | Trained professional clergy | Charismatic neta; barabari | Charismatic guru; loose network |
| State ke saath Rishta | State satta ke saath gathbandhan | State se alag par sahyogi | Duniya aur state ke khilaf | Individualistic; rajneeti se door |

### Roy Wallis ka 2×2 Legitimacy Matrix

[[thinker:Roy Wallis]] ne ek behad aasaan 2×2 chart se chonaro ka farak saaf kar diya — **(1) Bahari samaj unhe kaisa dekhta hai?** (*Respectable* vs *Deviant*) aur **(2) Woh khud apne satya ke baare mein kya daava karte hain?** (*Uniquely Legitimate* = sirf hum sacche hain vs *Pluralistically Legitimate* = baaki raste bhi theek hain):

- **Church:** *Respectable + Uniquely Legitimate* (jaise medieval Europe mein Roman Catholic Church).
- **Denomination:** *Respectable + Pluralistically Legitimate* (jaise Bharat ya USA mein saath rehne wale bade established dharm).
- **Sect:** *Deviant + Uniquely Legitimate* — yeh kisi bade parent dharm se toot kar banta hai jab logon ko lagta hai ki parent dharm bhrasht ho gaya hai. [[thinker:Max Weber]] ne sect ko ==Theodicy of Disprivilege== kaha kyunki yeh samaj ke dabe-kuchle, gareeb ya lower-caste logon ko izzat aur naitik barabari deta hai. Lekin [[thinker:H. Richard Niebuhr]] ne dikhaya ki koi bhi sect ek peedhi se zyada apne katter roop mein nahi tikta — uska **Life Cycle** teen raston par jaata hai: **(1) Denominationalisation** (bada aur ameer hokar mainstream ban jaana, jaise Buddhism ya Protestantism), **(2) Institutionalised Sect** (jaise Arya Samaj, Lingayats, Kabir Panth), ya **(3) Dissolution** (khatam ho jaana, jaise Brahmo Samaj ka sikudna).
- **Cult (New Religious Movement / NRM):** *Deviant + Pluralistically Legitimate* — iska koi parent dharm nahi hota, yeh kisi par zabardasti nahi karta, aur [[thinker:Steve Bruce]] ke shabdon mein iske bhakt members nahi balki **customers** hote hain jo mental peace ya success ke liye aate hain. Dhyan rahe: **social context** badalne se label badal jaata hai — **ISKCON** Bharat mein Hinduism ka ek *sect* hai, par 1960s ke America mein woh ek *cult/NRM* ke roop mein ubhra!

### Cults / NRMs ke Prakar aur Aaj Unki Mushrooming Kyun Ho Rahi Hai?

Media mein "cult" shabd ko brainwashing se joda gaya, isliye sociologists aaj **New Religious Movements (NRMs)** aur **New Age Movements (NAMs)** shabd use karte hain.

- **Roy Wallis ke 3 Types of NRMs:**
  1. **World-Rejecting NRMs:** Bahari duniya ko paapi maan kar commune mein band ho jaate hain. [[eg:Jim Jones ka Peoples Temple aur UFO cult Heaven’s Gate, jinhone mass suicide kar liya tha.]]
  2. **World-Affirming NRMs:** Modern duniya aur paise ko accept karte hain aur yoga/therapy ("paid enlightenment") se stress kam karke potential badhane ka wada karte hain. [[eg:Transcendental Meditation (Maharishi Mahesh Yogi), Scientology, Isha Inner Engineering aur Art of Living.]]
  3. **World-Accommodating NRMs:** Log apni normal naukri karte hue personal bhakti sudharte hain (jaise Neo-Pentecostalism).
- **Stark & Bainbridge ke 3 Cult Levels:** (1) *Audience Cults* (sirf TV/YouTube par प्रवचन sunne ya kitaab padhne wale), (2) *Client Cults* (doctor-patient jaisa rishta — tarot, Vaastu, Reiki, astrology), aur (3) *Cult Movements*.
- **Aaj ke Samaj mein Sects aur Cults Tezi se Kyun Badh Rahe Hain (Mushrooming)?** (1) **Rapid Social Change & Urban Anomie** ([[thinker:Bryan Wilson]]: gaon aur joint family chhootne se shehar ka akelapan); (2) **Marginalisation & Theodicy of Disprivilege** ([[thinker:Max Weber]]: jaati-bhedbhav ke khilaf Dalits/OBCs ka Ravidassia, Dera Sachkhand Ballan ya Satnami sects se judna); (3) **Spiritual Deprivation & Materialistic Hedonism** ([[thinker:Roy Wallis]]: ameer corporate youth mein paise ke bawajood andaruni khalipan); (4) **Spiritual Supermarket** ([[thinker:Paul Heelas]]: science se disillusionment aur customize spirituality); aur (5) **Social Media & Televangelism** jisne gurus ko ghar-ghar pahuncha diya hai.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1500 BCE–800 CE',
        title: 'Vedic Naturism se Vedantic Monism',
        text: 'Rigveda ki prakriti-pooja se Upanishad aur Adi Shankara ka Advaita Vedanta (Aham Brahmasmi) viksit hua.',
      },
      {
        year: '6th BCE–16th CE',
        title: 'Bharat mein Heterodox & Bhakti-Sufi Sects',
        text: 'Buddhism, Jainism, Lingayat/Virashaiva, Kabir Panth aur Sikhism ne jaati aur karmkand ke khilaf samanta ki aawaz uthayi.',
      },
      {
        year: '1912',
        title: 'Ernst Troeltsch — Church-Sect Typology',
        text: 'State-supported universal Church aur gareebon ke virodhi Sect ke beech pehla sociological bhed kiya.',
      },
      {
        year: '1929',
        title: 'H. Richard Niebuhr — Denominationalisation',
        text: 'Dikhaya ki sects agli peedhi tak aate-aate ya toh respectable Denomination ban jaate hain ya khatam ho jaate hain.',
      },
      {
        year: '1970–1984',
        title: 'Bryan Wilson & Roy Wallis — NRM Typologies',
        text: 'Modern cults ko World-Rejecting, World-Affirming aur World-Accommodating New Religious Movements mein baanta.',
      },
      {
        year: '1996–Present',
        title: 'Paul Heelas & Digital Spiritual Supermarkets',
        text: 'New Age Movements, meditation apps, wellness gurus aur ecological neo-animism ka global ubhaar.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Parent Church', text: 'Bada sthapit dharm karmkand aur hierarchy mein ulajh jaata hai' },
      { label: 'Schism & Protest', text: 'Charismatic neta aur vanchit log alag hokar naya Sect banate hain' },
      { label: 'Rasta A: Denomination', text: 'Bheed aur amiri badhne par mainstream Denomination ban jaata hai' },
      { label: 'Rasta B: Institutional Sect', text: 'Apni alag pehchan aur niyam banaye rakhta hai (jaise Arya Samaj)' },
      { label: 'Rasta C: Dissolution', text: 'Nayi peedhi na judne par dheere-dheere samapt ho jaata hai' },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Religious Sect',
    rightTitle: 'Cult / New Religious Movement (NRM)',
    rows: [
      {
        aspect: 'Janm aur Parent Religion',
        left: 'Kisi purane parent dharm se bagawat (schism) karke shuddhata laane ke liye banta hai',
        right: 'Koi local parent dharm nahi hota; bilkul naya ya videshi adhyatmik vichar laata hai',
      },
      {
        aspect: 'Truth Claim (Roy Wallis)',
        left: 'Uniquely legitimate — daava karta hai ki sirf humara rasta hi iklauta sach hai',
        right: 'Pluralistically legitimate — khula nazariya; log kai cults ek saath follow kar sakte hain',
      },
      {
        aspect: 'Membership & Commitment',
        left: 'Band darwaza (exclusive); poori zindagi aur sakht niyamon ka samarpan mangta hai',
        right: 'Open customer/client rishta (Audience ya Client cult); jab chahe aao ya chhodo',
      },
      {
        aspect: 'Social Class Base',
        left: 'Mukhya roop se lower/marginalised varg jinhe Theodicy of Disprivilege (Weber) chahiye',
        right: 'Shehri middle aur affluent class jo spiritual deprivation aur तनाव se joojh rahe hain',
      },
      {
        aspect: 'Duniya ke Prati Nazariya',
        left: 'World-opposing — bahari bhrasht samaj aur state se takraav rakhta hai',
        right: 'Aksar World-affirming — wellness, inner peace aur career success bechta hai',
      },
      {
        aspect: 'Udaharan',
        left: 'Digambara/Svetambara, Lingayats, Arya Samaj, Early Protestants, Kabir Panth',
        right: 'Osho/Rajneesh, Scientology, Heaven’s Gate, Transcendental Meditation, Reiki',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Animism',
    meaning:
      'E.B. Tylor ka concept jiske mutabik jism, ped-paudhe, nadi-pahad aur purvajon mein chetan aatma ya spirit (anima) vaas karti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Monism vs Pluralism',
    meaning:
      'Monism (jaise Advaita Vedanta) poore astitva aur Ishwar ko ek hi avibhajya satya maanta hai, jabki Pluralism anek satyon aur dharmon ke seh-astitva ko swikar karta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Theodicy of Disprivilege',
    meaning:
      'Max Weber ka concept ki kaise barabari sikhane wale sects samaj ke gareeb aur pichhde vargon ko aatmasamman aur naitik sahara dete hain.',
    thinkerSlug: 'max-weber',
  },
  {
    kind: 'keyTerm',
    term: 'New Religious Movements (NRMs)',
    meaning:
      'Modern sects, cults aur New Age groups ke liye neutral sociological shabd jinhe Roy Wallis ne world-rejecting, world-affirming aur world-accommodating mein baanta.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'yogendra-singh',
    quote: 'India’s cultural pluralism is sustained by an organic linkage between the pan-Indian Great Tradition and regional folk Little Traditions.',
    context: 'Bharat ki bahu-dharmik vividhata kaise desh ko todne ke bajaye ek sutra mein piroti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2015 PYQ Pattern: Sects & Cults ki Mushrooming + Pluralism',
    body: 'Is topic ke 12 PYQs mein se 6 seedhe Sects aur Cults par hain (2024, 2021, 2018x2, 2015) aur 4 Cultural/Religious Pluralism par (2024, 2023, 2020, 2016). Sect/Cult ke har answer mein Roy Wallis ka 2x2 Matrix banao aur Weber (Theodicy of Disprivilege), Bryan Wilson (rapid social change) va Paul Heelas (Spiritual Supermarket) zaroor quote karo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Common Trap: Monism aur Monotheism ko Ek Samajhna',
    body: 'Exam mein kabhi mat likhna ki Monism ka matlab "ek Bhagwan ki pooja" hai! Ek personal God ko manna jo srishti se alag hai Monotheism kehlata hai (Islam, Christianity). Monism (Christian von Wolff, Adi Shankara ka Advaita Vedanta: Aham Brahmasmi, Sikhism ka Ik Onkar) ka matlab hai ki Creator aur Creation mool roop se EK hi hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Bharat mein Types of Religious Practices (2017 PYQ Blueprint)',
    body: 'Jab UPSC Bharat ki religious practices poochhe, toh 6 levels dikhao: (1) Tribal Animism (Santhal/Oraon Sarna & ancestor worship), (2) Naturism (Chhath Surya Puja, Ganga aarti), (3) Totemism (Naga & Gond clan totems), (4) Polytheism & Henotheism (Panchadevata aur Gramadevata jaise Mariamman), (5) Philosophical Monism (Advaita), aur (6) Syncretic Sects & NRMs (Bhakti-Sufi, Lingayats, Kabir Panth, Radhasoami, Art of Living).',
  },
  {
    kind: 'answerBox',
    intro:
      'Manav samaj mein dharmik prathayein prakriti-pooja se lekar gehre darshan aur aadhunik voluntary sangathanon tak ek vishal spectrum mein phaili hui hain.',
    points: [
      'Prarambhik vishwas: Animism (Tylor: aatma/spirits) aur Naturism (Max Müller: kudrat ki shaktiyon ka मानवीकरण) aaj bhi tribal Sarna groves aur ecological movements mein zinda hain.',
      'Darshanik dhanche: Monism (Advaita ka Atman-Brahman aikya) Dualism (Creator-creation bhed) aur Henotheism (Ekam Sat Vipra Bahudha Vadanti) se alag hai.',
      'Cultural & Religious Pluralism: Bharat jaise multi-religious samaj mein pluralism "salad bowl" aur Ganga-Jamuni syncretism (Articles 25–30) ke roop mein Unity in Diversity ko bachata hai.',
      'Organizational typology (Troeltsch, Niebuhr, Wallis): Church aur Denomination mainstream respectable sansthayein hain, jabki Sects (bagawati) aur Cults/NRMs (naye client networks) alternative space lete hain.',
      'Aaj ki NRM mushrooming: Tez shehri anomie (Wilson), jaati/varg marginalisation (Weber), ameer varg ka spiritual khalipan (Wallis) aur digital media aaj sects va cults ko badha rahe hain.',
    ],
    conclusion:
      'Modernity mein dharm khatam hone ke bajaye pluralism, inner wellness aur pehchan ke naye sangathanon mein lagatar dhal raha hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary:
    'Dharmik prathayon mein prarambhik aatma aur prakriti-pooja (animism aur naturism), darshanik dhanche (monism, dualism, henotheism aur cultural pluralism), tatha sangathan ke roop (church, denomination, sect aur cult/NRMs) shamil hain jo modern anomie ke beech tezi se badal rahe hain.',
  mindMap,
  sections,
}