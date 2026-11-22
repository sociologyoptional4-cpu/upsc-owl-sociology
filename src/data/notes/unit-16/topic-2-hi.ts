import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

const summary =
  'Bharat ke industrial capitalist aur working class ke udbhav, samajik sanrachna aur aapsi virodhon ki padtaal karta hai. Harish Damodaran aur R. Vaidyanathan ke madhyam se dekhta hai ki kaise jati networks udyamita (entrepreneurship) ko aakaar dete hain, corporate boardrooms se Daliton, Musalmanon aur mahilaon ke bhedbhav-purna bahishkar ka vishleshan karta hai, aur textile/steel ke committed mazdooron se lekar contractual aur gig workers tak ke badlaav ko darshata hai.'

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 2 — Industrial Class Structure (Hinglish)',
  center: 'Industrial Class Structure',
  subtitle: 'Capitalist Trajectories • Caste Capital • Corporate Exclusion • Labour Flexibilization',
  branches: [
    {
      title: '1. Industrial Capitalist Varg Ka Vikas',
      color: 'lavender',
      thinkers: ['Harish Damodaran', 'Claude Markovits', 'Amiya Kumar Bagchi'],
      points: [
        'Colonial daur ki shuruat: Parsi, Marwari aur Gujarati vyapariyon ke haathon mein merchant capital',
        'Nehruvian License-Raj: Tata, Birla, Mafatlal jaise bade gharaanon ko tariff protection milna',
        '1991 ke baad ka badlaav: Bania varg se aage nikal kar multi-caste capitalism ka vistaar',
        'Teen naye capitalist streams: Traditional Bania, kheti ke surplus se bane udyogpati, aur tech professionals',
      ],
    },
    {
      title: '2. Jati Networks Aur Udyamita',
      color: 'yellow',
      thinkers: ['R. Vaidyanathan', 'Harish Damodaran', 'Max Weber'],
      points: [
        'Caste as Social Capital: Biradari ka vishwas informal credit, collateral aur business intelligence banna',
        'Agrarian-turned-industrialists: Kammas/Reddys (pharma/infra), Patidars (diamond/tiles), Gounders (knitwear)',
        'Vaishyaization ka process: Gair-vyapari jatiyon ka vyaparik sanskriti aur caste chambers apnana',
        'Knowledge-based capital: Brahmin aur Kayastha varg dwara cultural capital ke dam par IT/biotech firms khadi karna',
      ],
    },
    {
      title: '3. Corporate Boardroom Ka Bahishkar',
      color: 'mint',
      thinkers: ['B.R. Ambedkar', 'Sukhadeo Thorat', 'Devesh Kapur', 'Abusaleh Shariff'],
      points: [
        'Dalit udyamita ki seemayein: Sampatti se aitihasik doori; DICCI capitalism chote supply chains tak seemit',
        'Muslim aarthik pichhadpan: Sachar Committee (2006) ki report; dastkari ka collapse aur bank credit na milna',
        'Mahilaon ke liye glass ceiling: Purush-pradhan virasat kanoon aur boardroom mein sirf tokenism',
        'Ajit Sachdeva study: Bharat ke 90% se zyada corporate board directors unchi jati ke Hindu purush hain',
      ],
    },
    {
      title: '4. Mazdoor Varg Ka Badalta Swaroop',
      color: 'pink',
      thinkers: ['Morris D. Morris', 'E.P. Thompson', 'Jan Breman', 'Datta Samant'],
      points: [
        'Purana committed labour: Bombay, Kanpur aur Jamshedpur ke textile v steel plants ke pakke mazdoor',
        'Itihasik mod: 1982 Bombay Textile Strike ki haar aur neoliberal daur mein labour flexibility',
        'Formal sector ka informalization: Factory floor par 70-80% mazdoor thekedari (contract) par aana',
        'Platform gig workers: Delivery boys aur cab drivers; algorithmic management aur unions ka safaya',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u06-02-caste-class-nexus-labour.webp',
    alt: 'Caste aur class ka sambandh jo corporate boardroom monopolies aur mazdoor varg ke sankat ko darshata hai',
    caption:
      'Caste–Class Interface in Industry: Corporate capital par unchi jatiyon ka kabza aur lower castes v migrants ka contractual majduri mein dhasna.',
  },
  {
    kind: 'md',
    body: `## Bharat Mein Industrial Class Structure Ko Samjho

Aasaan shabdon mein samjho: Industrial class structure ka matlab hai factory, udyog aur shehri vyavastha mein do mukhya vargon ka aapsi rishta—ek taraf wo udyogpati (capitalists) jo factories aur machines ke maalik hain, aur doosri taraf wo shramik (working class) jo apna physical aur technical labour bechkar gujara karte hain. Paschimi deshon mein industrialization aane par purane jaati aur biradari ke bandhan toot gaye the, lekin Bharat mein udyogon ka vikas purani jaati vyavastha, rishtedari aur biradari ke sahare hi aage badha.

Angrezi daur mein modern industry mukhya roop se port shehron (Bombay, Calcutta, Madras) aur koyla-loha belts mein shuru hui. British managing agencies ne jute, chai aur railway par qabza rakha, jabki Bharatiya udyogpatiyon mein sabse aage ==Parsis== (Tata, Wadia), ==Gujaratis== aur ==Marwaris== (Birla, Goenka) the. In vyapari parivaron ne mandi ke munafay ko textile mills aur manufacturing plants mein lagaya.

Aazadi ke baad Nehruvian sarkar ne heavy industries (steel, bijli, koyla) mein Public Sector Enterprises khade kiye aur private companies ko License-Permit Raj ke tehat bideshi competition se bachaya. Isse shehron mein do alag-alag duniya ban gayi: ek taraf organized formal sector ke pakke mazdoor jinko pension, PF aur union ka sahara tha, aur doosri taraf unorganized sector ka vishal selaab jo bina kisi kanooni suraksha ke dehadhi par kaam karta raha.

| Industrial Varg Ka Pehlu | Early Post-Independence Daur (1950–1980) | Post-Liberalization Daur (1991–Present) |
| :--- | :--- | :--- |
| **Capitalist Samajik Base** | Bahut chhota, sirf traditional Bania, Marwari, Parsi aur Gujarati merchant gharaane | Vistaar hua: Intermediate kisan jatiyan (Patel, Gounder, Kamma) aur tech entrepreneurs |
| **Sarkar Ki Bhoomika** | Dirigiste state: Industrial licensing, import restrictions aur public sector ka dabdaba | Neoliberal state: Disinvestment, deregulation, FDI ko badhava aur labour flexibilization |
| **Mazdoor Varg Ki Suraksha** | Pakki naukri, gratuity, PF, ESI hospital aur trade union ki collective bargaining power | Contractualization, outsourcing, third-party staffing aur platform piece-rate gig work |
| **Kanooni Vyavastha** | Pro-worker kanoon (Industrial Disputes Act 1947, Factories Act 1948) | 4 Naye Labour Codes: Hire-and-fire aasaan kiya gaya aur strikes par kadi pabandiyan |`,
  },
  {
    kind: 'compare',
    leftTitle: 'Purana "Committed" Industrial Mazdoor (1950s–1980s)',
    rightTitle: 'Modern Contractual Aur Gig Shramik (1990s–Present)',
    rows: [
      {
        aspect: 'Naukri Ki Muddat',
        left: 'Pakki aur permanent naukri; bina kanooni process ke nikalne par sakht pabandi.',
        right: 'Fixed-term contract, thekedari par bharti, aur platform-based delivery/cab piece-rates.',
      },
      {
        aspect: 'Samajik Banao',
        left: 'Shehri chawls aur township mein rehne wala multi-caste sangathit mazdoor samaj.',
        right: 'Bikhra hua migrant varg; sabse neeche Dalit, Adivasi aur Muslim mazdooron ki bharmar.',
      },
      {
        aspect: 'Union Aur Bargaining',
        left: 'Rashtriya trade unions (AITUC, INTUC, CITU) se jude; strike karne ki zabardast taqat.',
        right: 'Unions ka safaya; SEZs mein union par pabandi; app algorithms ke aage majboor aur akele.',
      },
      {
        aspect: 'Welfare Suvidhayein',
        left: 'Pakki pension, gratuity, bimaari mein ESI cover, aur paid medical holidays.',
        right: 'Zero social security; accident aur beemari ka saara risk khud mazdoor ke sar par.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Jati Networks, Udyamita Aur Industrial Capitalism

Modernization theory ka manna tha ki shehron mein factory lagne se caste khatam ho jayegi. Lekin zameeni sociology ne sabit kiya ki jati ke networks ne Bharat mein capital ikattha karne aur factories chalane mein sabse bada role nibhaya hai.

Sociologist aur journalist [[thinker:Harish Damodaran]] ne apni kitaab *India’s New Capitalists: Caste, Business, and Industry in a Modern Nation* (2008) mein bataya ki aaj Bharat mein business sirf traditional Bania ka copyright nahi raha. Damodaran ne udyamita ke teen aitihasik raste dikhaye:
1. **Traditional Merchant Capital (Bania, Marwari, Parsi, Gujarati)**: Jinke paas pushtaini bahi-khata (*parta* system), mandi ki samajh aur pan-India hundi credit networks the.
2. **Kheti Ke Surplus Se Udyogpati Banna (Agrarian-turned-Industrialists)**: Green Revolution se kamaye munafay ko manufacturing mein lagane wali intermediate dominant peasant jatiyan:
   - *Kammas, Reddys aur Rajus* (AP aur Telangana): Tambaku aur chawal kheti se kamakar pharmaceutical giants (Dr. Reddy’s Labs), infrastructure (GMR, GVK) aur private colleges khade kiye.
   - *Patidars (Patels)* (Gujarat): Kheti se nikal kar Surat ka global heera vyapar, Morbi ki ceramic tiles aur chemical factories par qabza kiya.
   - *Gounders* (Western Tamil Nadu): Kheti ke paise se Tiruppur ko vishva-prasiddha knitwear export hub bana diya.
3. **Knowledge-Based / Professional Capital**: Unchi jatiyan (Tamil Brahmin, Bengali Kayastha, Punjabi Khatri) jinhone apni purani cultural capital aur angrezi shiksha ke dam par Infosys, Biocon jaise IT aur biotech enterprise khade kiye.

Isi vishleshan ko aage badhate hue economist [[thinker:R. Vaidyanathan]] ne apni kitaab *Caste as Social Capital* mein likha ki jati koi bojh nahi balki Bharat ke business ke liye ek informal bank aur insurance network ki tarah kaam karti hai. Biradari ke log bina bank collateral ke aapsi vishwas par zero-interest loan dete hain. Vaidyanathan ise ==Vaishyaization== kehte hain, jahan kheti karne wali backward jatiyan (jaise Tamil Nadu ke Nadars) vyaparik gun apnakar apne business chambers banati hain.

[[eg:Tiruppur ke hosiery hub mein Gounder jati ke log ek-doosre ko bina bank guarantee ke lakho rupaye ka kapda aur machine udhaar dete hain, jisse formal bank par unki dependency na ke barabar rehti hai.]]

### Corporate Boardrooms Mein Bahishkar: Dalits, Muslims Aur Mahilayein

Madhyam udyogon mein badlaav aane ke bawajood, Bharat ke bade corporate empires ke boardrooms aaj bhi ek band aur unchi jati ke varg ki jaageer bane hue hain. Sociologist Ajit Sachdeva ki research batati hai ki desh ki top companies ke 90% se zyada board directors Brahmin, Bania aur Kshatriya hain.

Kamzor vargon ke pichhadne ke samajik kaaran:
- **Dalit Capitalists Aur Sanrachnatmak Rukawatein**: Sadiyon ki chhuachhut ne Daliton ko sampatti rakhne aur vyaparik mandiyon se door rakha. Halanki DICCI (Dalit Indian Chamber of Commerce and Industry) ne udyamita ko badhava diya hai (jiska zikr [[thinker:Devesh Kapur]] aur Chandra Bhan Prasad ne *Defying the Odds* mein kiya), par zyadatar Dalit business chhote MSMEs aur government supply contracts tak hi seemit hain; bade corporate boards mein unka aana lagbhag namumkin raha hai.
- **Muslim Aarthik Pichhadpan**: [[thinker:Sachar Committee]] (2006) ne khulasa kiya ki aazadi ke baad ke dangon, shehri ghettoization aur sarkari banks dwara loan na milne ki wajah se traditional Muslim dastkar aur vyapari tabah ho gaye. Wipro ke Azim Premji aur Cipla ke Yusuf Hamied jaise gine-chune naamo ko chhodkar Muslim representation corporate boards mein shunya barabar hai.
- **Mahilaon Ke Liye Glass Ceiling**: Corporate parivar ki virasat Mitakshara kanoon ke tehat beto ko milti rahi hai. 2005 ke Hindu Succession Act amendment ke baad bhi mahilaon ko corporate decision-making se door rakha jata hai. Companies Act 2013 dwara board mein mahila director anivarya karne par bhi zyadatar companiyan parivar ki mahilaon ko sirf tokenism ke liye baitha deti hain.

[[link:Paper 1 Power Elite ↔ Paper 2 Corporate Class: C. Wright Mills ka Power Elite concept Bharat ke unchi jati ke corporate magnates, bureaucrats aur politicians ke gathbandhan par poori tarah fit baithta hai.]]`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Colonial Daur',
        text: 'British managing agencies aur Parsi/Marwari merchant capital ka textile v jute mills mein dabdaba.',
      },
      {
        label: 'Nehruvian State Capitalism',
        text: 'Public sector heavy industries; formal factory workers ko permanent naukri aur union rights.',
      },
      {
        label: '1982 Strike Ka Mod',
        text: 'Bombay textile strike ka kutchla jana; mills band karke powerlooms aur real estate mein badlaav.',
      },
      {
        label: 'Neoliberal Flexibilization',
        text: '80% factory workforce thekedari par aana, gig platform work ka badhna aur unions ka pichhadna.',
      },
    ],
  },
  {
    kind: 'md',
    body: `### Industrial Mazdoor Varg Ka Badalta Swaroop

Bharat ke industrial mazdoor varg ki aawaz aur samajik sthiti pichhle chaar dashakon mein poori tarah bikharr chuki hai.

#### 1. Purana Committed Labour Se Industrial Townships Tak
Aazadi ke shuruati dashakon mein sociologists jaise [[thinker:Morris D. Morris]] ne "committed industrial labour" par kaam kiya. Unhone colonial afsaron ke is jhooth ko kharij kiya ki Bharatiya kisan factory ke anushasan mein nahi dhal sakte. Bombay ki kapda mills, Kanpur ke chamda udyog aur Jamshedpur ke Tata Steel ke mazdooron ne peedhi-dar-peedhi factory jeevan ko apnaya.
- Mazdoor shehron ki chawls aur industrial bastiyon mein ekjut hokar rehte the jahan ek saajhi working-class identity bani.
- AITUC, INTUC aur CITU jaisi rashtriya unions ke dam par unhone permanent naukriyan, DA (deerness allowance) aur pension rights haasil kiye.

#### 2. Aitihasik Mod: 1982 Bombay Textile Strike
Mazdoor aandolan ka sabse bada pahaad **1982 Bombay Textile Strike** ke dauran toota, jiska netritva [[thinker:Datta Samant]] ne kiya tha. Lagbhag 2.5 lakh mill mazdoor sadak par utre. Sarkar aur mill malikon ne samjhota karne se inkaar kar diya, mills hamesha ke liye band kar di gayi, aur production ko Bhiwandi v Surat ke unorganized powerlooms mein shift kar diya gaya. Mill ki keemti zameeno par aaj luxury malls aur corporate towers khade hain.

#### 3. Formal Sector Ka Informalization Aur Gig Economy
1991 ke economic reforms ke baad udyogon ne labour flexibility ka rasta chuna:
- **Thekedari (Contractualization)**: Manesar, Chennai aur Pune ke modern car manufacturing plants mein bhi 70–80% mazdoor third-party thekedaron ke zariye bharti kiye jate hain. Yeh log permanent worker ke barabar kadi mehnat karte hain par aadhi se bhi kam dehadhi pate hain.
- **Footloose Industrial Labour**: [[thinker:Jan Breman]] kehte hain ki shehri mazdoor ab kisi factory ka sthayi hissa nahi raha; wo bina kisi social security ke ek theke se doosre theke par bhatakne wala ghummakkad (footloose) shramik ban chuka hai.
- **Platform Gig Workers**: Swiggy, Zomato, Uber ke delivery boys aur drivers ko "partners" kehkar bulaya jata hai. Yeh algorithmic control mein phanse piece-rate mazdoor hain jinko beemari, accident ya budhape mein ek rupaye ki kanooni suraksha nahi milti.

[[eg:Maruti Suzuki Manesar plant mein 2012 ka bada vivad isi baat par hua tha ki ek hi assembly line par khade hokar kaam karne wale permanent worker aur contract worker ki tankhwah aur izzat mein zameen-aasmaan ka farq tha.]]`,
  },
  {
    kind: 'keyTerm',
    term: 'Vaishyaization',
    meaning:
      'Aisi samajik prakriya jisme kisan aur intermediate jatiyan vyaparik gun, udyamita aur business chambers apnakar industrial capitalism mein daakhil hoti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Committed Labour',
    meaning:
      'Morris D. Morris ka concept jo aise regular factory workers ko darshata hai jinhone gaon ki kheti chhodkar shehri industrial anushasan ko sthayi roop se apna liya.',
  },
  {
    kind: 'keyTerm',
    term: 'Informalization of the Formal Sector',
    meaning:
      'Badi registered factories dwara kanooni benefits aur minimum wages se bachne ke liye regular workers ki jagah thekedari mazdooron aur apprentices se kaam karwana.',
  },
  {
    kind: 'keyTerm',
    term: 'Caste as Social Capital',
    meaning:
      'R. Vaidyanathan ka thesis jisme jati ke aapsi rishte aur biradari ka vishwas informal credit, business partnership aur risk-sharing ka behtareen sadhan bante hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '4 Naye Labour Codes Ka Samajik Vishleshan',
    body:
      'UPSC ke uttar mein 4 Labour Codes (2020) par critical angle zaroor likhein. Sarkar ise compliance aasaan karne wala kehti hai, jabki sociologists ka manna hai ki retrenchment limit 300 karne se hire-and-fire aam ho gaya hai aur strike ke adhikar par kadi chot lagi hai.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Dalit Udyamita Ko Corporate Parity Mat Samjho',
    body:
      'DICCI ke prayason ki tareef karte hue bhi is baat ko spasht likho ki Dalit udyamita chote MSME aur thekedari tak seemit hai; Fortune 500 ya Forbes billionaire list mein Daliton ka dabdaba na ke barabar hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Dual Labour Market Ka Formula',
    body:
      'Bharat ka 90% shramik unorganized aur unprotected sector mein kaam karta hai, jabki sirf 10% formal sector mein hai jahan bhi ab 70-80% thekedari mazdoori ghus chuki hai.',
  },
  {
    kind: 'answerBox',
    intro:
      'Bharat ke badalte industrial capitalist aur working class structure par ek behtareen uttar mein dono vargon ke samajik badlaav ka vishleshan hona chahiye:',
    points: [
      'Capitalist varg ka vistaar: Bania gharaanon ke alawa intermediate kisan jatiyon (Patidar, Gounder, Kamma) aur IT technocrats ka udbhav.',
      'Caste as Social Capital ka istemal: Biradari ke aapsi vishwas se bina bank loan ke Tiruppur, Surat aur Morbi jaise industrial clusters khade hona.',
      'Corporate boardrooms mein Daliton, Musalmanon aur mahilaon ka aitihasik bahishkar jahan 90% se zyada directors unchi jati ke Hindu purush hain.',
      'Early committed textile aur steel mazdoor bastiyon ka collapse hona (1982 Bombay Textile strike ke baad).',
      'Formal factories ke andar thekedari (contractualization) ka bolbala hona, jisse do-tier exploitative wage structure ban gaya.',
      'Platform gig economy ka phailav jahan delivery boys ko app algorithms ke zariye bina kisi PF ya ESI security ke bandh diya gaya.',
    ],
    conclusion:
      'Industrial structure ka sabse bada virodhabhas yeh hai ki jahan capitalist varg ne apni jati solidarity se global munafa kamaya, wahin mazdoor varg thekedari aur gig economy ke chalte aapsi bhedbhav mein bikharr kar lachar ho gaya.',
  },
]

export const topic2Hi = { summary, mindMap, sections }
