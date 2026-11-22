import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1HiMindMap: MindMapData = {
  title: 'Topic 1 · Bharat Mein Kisaan Aur Krishi Aandolan',
  center: 'Kisaan Aur Krishi Aandolan',
  subtitle: 'Colonial Vidroh • Purane Kisaan Sangharsh • 1980s Ke Naye Kisaan • 2020–21 Ka Aitihasik Aandolan',
  branches: [
    {
      title: 'Colonial Daur Ke Kisaan Vidroh',
      color: 'lavender',
      thinkers: ['Kathleen Gough', 'D.N. Dhanagare', 'A.R. Desai', 'Barrington Moore'],
      points: [
        'Moore ke passivity thesis ka khandank: Gough ne 77 se zyada kisaan vidroh darj kiye',
        'Lagaan aur soodkhori ke khilaaf: Santhal Hul (1855) aur Deccan Riots (1875)',
        'Bhookh aur batatai ke khilaaf: Tebhaga (1946–47) aur Telengana sashastra sangharsh (1946–51)',
        'Class differentiation: Middle peasants (Alavi/Wolf) banam bhuheen khet-mazdoor',
      ],
    },
    {
      title: '1980s Ke "Naye Kisaan" Aandolan',
      color: 'yellow',
      thinkers: ['Sharad Joshi', 'Mahendra Singh Tikait', 'M.D. Nanjundaswamy', 'Gail Omvedt'],
      points: [
        'Green Revolution ke baad mandi se jude kisaano ki ladai: MSP aur bijli subsidy',
        'Sharad Joshi ka vichar: "Bharat (shoshit gaon) banam India (shoshak shehar)"',
        'Kisaan sanghatan: UP-Haryana mein BKU, Maharashtra mein Shetkari Sanghatana, Karnataka mein KRRS',
        'Tariqe: Rasta roko, rail roko, gherao aur gair-rajneetik kisaan panchayatein',
      ],
    },
    {
      title: 'Structural Badlav: Peasant Banam Farmer',
      color: 'mint',
      thinkers: ['A.R. Desai', 'Utsa Patnaik', 'Pranab Bardhan', 'Tom Brass'],
      points: [
        'Desai ka fark: purana peasant zamindar se zameen maangta tha; naya farmer sarkar se daam maangta hai',
        'Bullock capitalists: rich aur middle kisaano ka dabdaba, bhuheen Dalit mazdooron ki andekhi',
        'Aantarik virodhabhaas: Jat, Maratha, Patidar dabdaba banam Dalit khetihar shoshana',
        'Neoliberal sankat: WTO, beej-khad ke badhte daam aur kheti par karz ka bojh',
      ],
    },
    {
      title: 'Samkaaleen Aandolan (2020–21)',
      color: 'pink',
      thinkers: ['Surinder Jodhka', 'Sudha Narayanan', 'Vikas Rawal', 'Reetika Khera'],
      points: [
        'Teen Krishi Kanoon ke khilaaf: APMC mandiyon ki hifazat aur qanooni MSP ki maang',
        'Vistrit samajik aadhar: bade kisaan, chhote kisaan aur gaon ke mazdoor ek saath',
        'Mahilaon ki hissedari: langar prabandhan, border stages par bhashan aur tractor rallies',
        'Loktantrik naye prayog: Singhu-Tikri borders par ek saal ka shantipuurna dera aur digital PR',
      ],
    },
  ],
}

export const topic1HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u13-01-indian-social-movements.webp',
    alt: 'P2 Unit 13 infographic: Peasant, Women & Dalit Movements — Peasants, Women & Dalit Assertions in Modern India',
    caption:
      'Bharat mein kisaano ka sangharsh colonial zamindari virodh se nikal kar 1980s ke terms-of-trade aandolan aur 2020–21 ke pan-agrarian morche tak badla hai.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 23 Visual 01',
  },
  {
    kind: 'md',
    body: `## Kisaano Ki "Khamoshi" Ka Myth: Colonial Daur Ka Asli Sangharsh

Aasaan shabdon mein samjho: shuruat mein Western vidwano ka manna tha ki Bharat ka kisaan behad shant, kismat-bharose aur chupchaap julm sehne wala tha. American sociologist [[thinker:Barrington Moore]] ne apni mashhoor kitaab *Social Origins of Dictatorship and Democracy* (1966) mein likha ki jaati vyavastha aur karma ke siddhant ne Bhartiya kisaano ko passive (alag-thalag aur ladai se door) bana diya tha.

Lekin Bhartiya samajshastriyon ne is daawe ko jhootha saabit kiya. [[thinker:Kathleen Gough]] (*Indian Peasant Uprisings*) aur [[thinker:D.N. Dhanagare]] (*Peasant Movements in India*) ne ankon aur tareekhon ke saath bataya ki pichhle 200 saal mein kisaano ne Angrezi hakumat, soodkhor mahajanon aur zaalim zamindaron ke khilaaf darjano khatarnak vidroh kiye the.

### Kathleen Gough Ka Kisaan Vidroh Vargikaran
Gough ne British daur ke 77 se zyada kisaan aakroshon ka vishleshan kiya aur unhe paanch hisson mein baanta:
1. **Restorative Vidroh**: Angrezon ko khaded kar purane raaj aur riwayati haq wapas paane ki ladai [[eg:1855 ka Santhal Hul jahan aadiwasi kisaano ne Angrez afsaron aur bahaari mahajanon ke khilaaf teer-kaman utha liye the]].
2. **Dharmik Aur Messianic Aandolan**: Kisi chamatkari neta ke peechhe ek naye pavitra daur ki umeed mein ladai [[eg:Birsa Munda ka Ulgulan, jisne kheti ke haq aur dharmik aazaadi ko jod diya]].
3. **Social Banditry**: Jab garibi aur akaal se tang aakar kisaan daku bankar ameeron ko lootkar garibon mein baantte the (Robin Hood style).
4. **Terrorist Vengeance**: Zalim zamindaron, patwariyon aur soodkhoron ko chun-chun kar saza dena.
5. **Mass Insurrections (Bade Jan-Vidroh)**: Pure ilaqe ka kisaan sangathan banakar zamindari ke khilaaf ladna [[eg:Bengal ka Tebhaga Aandolan (1946–47) jisme maang thi ki kheti ka do-tihai hissa batatedaron ko mile, aur Hyderabad ka sashastra Telengana Vidroh (1946–51)]].`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1855',
        title: 'Santhal Hul',
        text: 'British revenue system aur bahari diku mahajanon ke khilaaf aadiwasi kisaan bagawat.',
      },
      {
        year: '1875',
        title: 'Deccan Riots',
        text: 'Maharashtra ke kisaano dwara Gujarati-Marwari sahukaron ke karz-khaton ko jalana.',
      },
      {
        year: '1946–51',
        title: 'Tebhaga Aur Telengana Vidroh',
        text: 'Communist netaon ke netritva mein do-tihai fasal aur zameen par haq ki armed ladai.',
      },
      {
        year: '1980s',
        title: 'Naye Kisaan Aandolan Ka Daur',
        text: 'Sharad Joshi aur Tikait ke netritva mein fasal ke sahi daam aur bijli subsidy ki maang.',
      },
      {
        year: '2020–21',
        title: 'Teen Krishi Kanoon Virodhi Morcha',
        text: 'Delhi ke borders par ek saal tak shanti-poorna dera aur kanoon radd karwane ki jeet.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Peasant Banam Farmer: A.R. Desai Ka Samajshastriya Fark

Samajshastri [[thinker:A.R. Desai]] ne apni kitaab *Peasant Struggles in India* mein samjhaya ki azadi ke pehle aur azadi ke baad ke kisaan aandolan mein ek gehra structural farak aaya hai.

### Sidha Concept: Peasant Kaun Hai Aur Farmer Kaun?
- **Peasant (Riwayati Kisaan)**: Yeh subsistence (apne parivar ke pet bharne) ke liye kheti karta hai. Zameen par parivar ke log kaam karte hain. Iska dushman feudal zamindar ya gaon ka soodkhor hota hai jo iska anaj chheen leta hai. Iski maang thi — *"Zameen Jotne Wale Ki Ho"* (Land to the Tiller).
- **Farmer (Aadhunik Vyapari Kisaan)**: Yeh Green Revolution ke baad paida hua. Yeh bazaar mein bechne ke liye gehun, dhan, ganna ugata hai. Tractor, diesel aur chemical khad khareedta hai. Iska dushman zamindar nahi, balki sarkar aur corporate bazaar hain jo fasal ka daam kam rakhte hain aur factory ke input mehnge bechte hain.

| Samajshastriya Pehlu | Purana Peasant Aandolan (Azadi Ke Pehle) | Naya Farmer Aandolan (1980s Ke Baad) |
| :--- | :--- | :--- |
| **Samajik Aadhar** | Chhote kisaan, batatedar (tenants), bhuheen shramik | Middle aur rich kisaan, surplus bechne wale bullock capitalists |
| **Mukhya Dushman** | Angrezi sarkar, zamindar, feudal jagirdar, sahukar | Aadhunik sarkar, corporate companiyan, global WTO bazaar |
| **Mukhya Maangein** | Lagaan maafi, zamindari khatma, zameen ka batwara | MSP ki guarantee, sasti bijli, diesel subsidy, karz maafi |
| **Vichar (Ideology)**| Shoshan-mukt samaj, feudalism virodh, socialist kranti | "Bharat banam India", gaon banam shehari terms of trade |
| **Sangathan** | Communist Kisan Sabha, Congress Kisan committees | Gair-rajneetik kisaan union (BKU, Shetkari Sanghatana) |

### "Bharat banam India" Ka Nara (Sharad Joshi)
1980 ke dashak mein Maharashtra ke kisaan neta [[thinker:Sharad Joshi]] ne ek zordar vichar diya — **"Bharat banam India"**:
- **"India"** ka matlab woh angrezi bolne wala, shehari netaon, babuon aur corporate udyogpatiyon ka tabqa hai jo sarkar chalata hai.
- **"Bharat"** ka matlab woh gaon ka kheti karne wala samaj hai jiska khoon-paseena saste anaj ki policy ke zariye nichoda jata hai taaki shehariyon ko mehngai na jhelni pade.
- Joshi ka kehna tha ki gaon ki garibi ka asali kaaran koi jaati ya gaon ke aapsi jhagde nahi, balki shehar dwara gaon par thopa gaya **nuksaandeh terms-of-trade** hai. [[eg:Nashik mein pyaz ke bazaar ko jaam karna aur Mumbai ko doodh ki supply rok dena is bazaar-takat ka pradarshan tha.]]`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 2 Angle: "Bharat" Ke Andar Ke Jaati Virodhabhaas',
    body: 'UPSC answer mein Sharad Joshi aur Tikait ke "Bharat banam India" ki taareef ke baad Gail Omvedt aur Utsa Patnaik ka critical angle zaroor likho. Yeh aandolan aam taur par dominant jaatiyon (Jat, Maratha, Patidar) ka tha. Inhone khet mein kaam karne wale bhuheen Dalit shramikon ki majdoori badhane par dhyan nahi diya, balki unki aawaz dabi rahi.',
  },
  {
    kind: 'md',
    body: `## 2020–21 Ka Aitihasik Kisaan Aandolan: Naya Mod Aur Nayi Ranniti

Kendra sarkar ke teen krishi kanoon ke aane ke baad 2020–21 mein jo aandolan hua, usne Bhartiya kisaan sangharsh ko ek naye mukaam par pahuncha diya. Yeh sirf fasal ke daam ka mudda nahi tha, balki kisaano ko laga ki kheti ka pura control corporate gharanon (Adani, Ambani) ke haath mein chala jayega.

Samajshastri [[thinker:Surinder Jodhka]] ke anusaar, is aandolan mein 1980s ke muqable kai naye structural badlav dekhe gaye:
1. **Chhote Aur Bade Kisaano Ka Gathbandhan**: Mandi vyavastha (APMC) khatam hone ke darr se Punjab aur Haryana ke bade kisaano aur chhote zameendaron ne *Samyukta Kisan Morcha* (SKM) ke jhandetale ekjut hokar aawaz uthayi.
2. **Kisaan-Mazdoor Ekta Ka Prayog**: BKU (Ugrahan) jaise sanghatano ne gaon ke Dalit khet-mazdoor sanghatano (jaise *Zameen Prapt Sangharsh Committee*) ko saath joda, yeh samjhakar ki agar sarkari khareed (procurement) khatam hui toh ration ki dukan (PDS) bhi khatam ho jayegi.
3. **Mahilaon Ki Zabardast Hissedari**: Gaon ki mahilayein sirf ghar sambhalne tak seemit nahi rahin; unhone Singhu aur Tikri border par langar chalaye, morche ke manch se bhashan diye aur 26 January ki tractor parade mein hissa liya.
4. **Shantipuurna Pratirodh Aur Digital PR**: Ek saal tak national highways par shantipuurna tamboo lagakar rehna, libraries kholna, langar chalana aur Twitter par sarkari narrative ka jawab dena is aandolan ki anokhi pehchan bani.`,
  },
  {
    kind: 'compare',
    leftTitle: '1980s Ke Kisaan Aandolan (BKU / Shetkari)',
    rightTitle: '2020–21 Ka Kisaan Morcha (SKM)',
    rows: [
      {
        aspect: 'Mukhya Sangharsh',
        left: 'Sarkar se subsidy (bijli, paani) aur zyada MSP lene ki maang.',
        right: 'Sarkari mandiyon ko bachane aur corporate entry ke khilaaf existential ladai.',
      },
      {
        aspect: 'Samajik Inclusion',
        left: 'Dominant landowning jaatiyon ka zor; Dalit mazdoor shamil nahi the.',
        right: 'Dalit shramik sangh, chhote kisaan aur trade unions ko saath milane ki koshish.',
      },
      {
        aspect: 'Mahilaon Ki Bhumika',
        left: 'Purush-pradhan aandolan; mahilayein parde ke peechhe thin.',
        right: 'Border stages par neta, langar sanchalak aur tractor chalak ke roop mein sakriya.',
      },
      {
        aspect: 'Communication',
        left: 'Khap panchayat, local jalse aur akashwani/akhbar par nirbharta.',
        right: 'Social media, digital live stream, diaspora support aur global aawaz.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Peasant Banam Farmer (A.R. Desai)',
    meaning:
      'A.R. Desai ka siddhant jisme subsistence aur feudal zamindari se ladne wale ko Peasant kaha gaya, aur Green Revolution ke baad bazaar aur MSP ke liye ladne wale ko Farmer kaha gaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Passivity Thesis (Barrington Moore)',
    meaning:
      'Barrington Moore ka woh galat daawa jisme unhone kaha tha ki jaati aur karma ke darr se Bhartiya kisaan chupchap zulm sehta hai; jise Kathleen Gough ne 77 vidrohon ki list se jhootha saabit kiya.',
  },
  {
    kind: 'keyTerm',
    term: 'Bharat Banam India (Sharad Joshi)',
    meaning:
      'Shetkari Sanghatana ke Sharad Joshi ka sankalp jisme shoshit gaon ke utpadakon ko Bharat aur shehari neta-udyogpati elite ko India kaha gaya tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Bullock Capitalists (Rudolph & Rudolph)',
    meaning:
      'Woh 5 se 15 acre zameen wale madhyam kisaan jo parivar aur bail ke sahare kheti karte hain aur Green Revolution ke baad rajneeti mein ek bada vote-bank ban kar ubhre.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Kisaan Aandolan Ka Answer Kaise Likhein',
    body: 'Kisaan aandolan ke har answer mein 4 paimane hone chahiye: (1) Agrarian class (zameen kiski hai aur kaam kaun karta hai), (2) Dushman kaun hai (feudal zamindar, Angrezi sarkar ya corporate bazaar), (3) Maang kya hai (zameen ka batwara ya fasal ka daam), aur (4) Andaruni kamzori (jaati dabdaba aur bhuheen mazdooron ki andekhi).',
  },
  {
    kind: 'answerBox',
    intro:
      'Bhartiya kisaan aandolano ke badalte swaroop par model answer structure:',
    points: [
      'Itihasik badlav: Bhartiya krishi aandolan colonial daur ke zamindari virodh (Tebhaga, Telengana) se badal kar post-Green Revolution mein terms-of-trade aandolan (1980s BKU, Shetkari) bane.',
      'Khamoshi ke myth ka ant: Kathleen Gough aur D.N. Dhanagare ne Barrington Moore ke passivity thesis ko todte hue do sau saal ke lagatar jan-vidrohon ko pramanit kiya.',
      'Ideology ka khel: 1980s mein Sharad Joshi ne "Bharat banam India" ka nara dekar fasal ke sahi daam ki maang uthayi, par gaon ke jaati aur shramik shoshan ko dhang se nahi samjha.',
      '2020–21 ka mod: Teen kanoon ke virodh mein shuru hua aandolan corporate dabdabe aur MSP ko qanooni haq banane ki aisi ladai bana jisne chhote aur bade kisaano ko ek kiya.',
      'Nayi loktantrik chetna: 2020–21 ke morche ne Dalit shramik sangho se dosti, mahilaon ki sidhi aagwani aur digital media ke zariye global solidarity ka behtareen namoona pesh kiya.',
    ],
    conclusion:
      'Aaj ka kisaan aandolan sirf daam maangne wala morcha nahi, balki neoliberal policies aur corporate control ke khilaaf ek vishal loktantrik aawaz ban chuka hai.',
  },
]
