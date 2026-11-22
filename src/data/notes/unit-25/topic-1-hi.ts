import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1HiMindMap: MindMapData = {
  title: 'Topic 1 · Vikas Ka Sankat, Visthapan Aur Satat Vikas',
  center: 'Vikas, Visthapan Aur Paryavaran',
  subtitle: 'Nehruvian Model • DIDR Aur Cernea IRR • LARR Act 2013 • Just Sustainability',
  branches: [
    {
      title: '1. Vikas Ka Daur Aur Visthapan',
      color: 'lavender',
      thinkers: ['Walter Fernandes', 'Michael Cernea', 'Ramachandra Guha'],
      points: [
        'Azaadi ke baad ka model: "Aadhunik Bharat ke mandir" (bade baandh) jinhone parivesh ko nasht kiya',
        'Fernandes ka data: 60M+ log visthapit huye (1947–2004), jismein 40% Adivasi aur 20% Dalit the',
        'Cernea ka IRR Model: 8 ahem khatre jinse aabadi poori tarah se toot jati hai (social disarticulation)',
        'Punravas ki vifalta: 25% se bhi kam visthapiton ko theek se punravas ya rozgar mila',
      ],
    },
    {
      title: '2. Political Economy Aur Bada Capital',
      color: 'yellow',
      thinkers: ['Karl Marx', 'David Harvey', 'Gail Omvedt'],
      points: [
        'Accumulation by Dispossession: Private companiyon ke liye zameen aur jungle chheene gaye',
        'Metabolic rift: Prakriti ke saath sadiyon purana santulan capitalist loot ne tod diya',
        'Shramik banna: Aatmanirbhar kisaan aur vanvasi sheharon mein asangathit majdoor ban gaye',
        'State-capital nexus: Eminent Domain ka istemal karke traditional adhikar chheen liye gaye',
      ],
    },
    {
      title: '3. Kanooni Dhancha: LARR 2013 banam 1894',
      color: 'mint',
      thinkers: ['Usha Ramanathan', 'Amita Baviskar', 'B.R. Ambedkar'],
      points: [
        'Colonial kanoon 1894: Collector ko bina puche zameen chheen lene ka aniyamit adhikar tha',
        'LARR Act 2013 ka badlav: Social Impact Assessment (SIA) aur 70-80% sahmati anivarya ki gayi',
        'Dilution ki koshish: Rajya sarkaron dwara infrastructure ke naam par rules mein chhoot',
        'Niyamo ka ullanghan: Nakad paisa kharch ho gaya par sustainable ajeevika nahi mili',
      ],
    },
    {
      title: '4. Satat Vikas Aur Paryavaran Nyay',
      color: 'pink',
      thinkers: ['Ulrich Beck', 'Joan Martinez-Alier', 'Julian Agyeman', 'Madhav Gadgil'],
      points: [
        'Risk Society (Beck): Aadhunikta aise khatre peda karti hai jo garibon par thope jaate hain',
        'Gadgil-Guha vishleshan: "Omnivores" resource lootate hain aur "Ecological Refugees" paida hote hain',
        'Garibon ka paryavaranvad: Pashchim ka shaukiya nature-love banam Bharat mein roti-rozi ki ladai',
        'Just Sustainability: Tribal Forest Rights (FRA 2006) ke bina asli satat vikas asambhav hai',
      ],
    },
  ],
}

export const topic1HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-01-development-displacement-sustainability.webp',
    alt: 'P2 Unit 15 infographic: Displacement & Sustainability — Big Dams, 50M Displaced Persons & Just Sustainability',
    caption:
      'Big Dams, 50M Displaced Persons & Just Sustainability — Visthapan aur Paryavaran ka visual saransh.',
  },
  {
    kind: 'md',
    body: `## Vikas Ka Sankat: Samajshastriya Aadhar

Aasaan shabdon mein samjho: Azaadi ke baad Bharat ne bade-bade baandh (dams), koyla khadaanen (mines), steel plants aur highways banaye. Pandit Jawaharlal Nehru ne inhein "Aadhunik Bharat ke Mandir" kaha tha. Lekin samajshastri yeh batate hain ki is vikas ki sabse badi keemat desh ke garib, Adivasi aur Dalit samaj ne chukayi, jinhein unki zameen aur jangal se bedakhal kar diya gaya.

Is capital-intensive model ne ==Development-Induced Displacement and Resettlement (DIDR)==, paryavaran ka vinaash aur kamzor vargon ki gahri gareebi ko janm diya. Vikas ke labh to shehari ameer varg ko mile, lekin uski laagat subaltern aabadi par thop di gayi.

### Visthapan Ka Paimana Aur Asamanta

Bharat mein vikas ke naam par hua visthapan aadhunik itihas ke sabse bade peaceful migration mein se ek hai. Samajshastri [[thinker:Walter Fernandes]] ne apne gahre survey mein bataya ki 1947 se 2004 ke beech lagbhag 60 million (6 crore) se zyada log vikas pariyojnaon ke kaaran beghar ya bedakhal huye.

Sabse chinta ki baat yeh hai ki yeh visthapan behad asaman tha. Census 2011 ke mutabiq Scheduled Tribes (Adivasi) kul aabadi ka lagbhag 8.6% hain, lekin visthapit hone walon mein unki sankhya 40% se zyada hai. Scheduled Castes (Dalit), jo aamtaur par khetihar majdoor the, visthapiton ka lagbhag 20% hain. Fernandes ne dikhaya ki inme se 25% se bhi kam logon ka dhang se punravas (rehabilitation) kiya gaya.

| Aayam | Colonial / Nehruvian Model | Environmental Justice Model |
| :--- | :--- | :--- |
| **Mukhya Sidhhant** | Eminent Domain (Sarkar ki sampatti par poori malikana shakti) | Loktantrik Nyayita aur Paramparik Adhikar |
| **Vikas Ka Paimana** | GDP growth, mega dams, steel output | Ecological santulan aur Manav kshamata (Capabilities) |
| **Prabhavit Samaj** | Inevitable collateral damage (Zaroori kurbani) | Free & Prior Consent ke sath barabar ke hissedar |
| **Nipatane Ka Tareeqa** | Sirf registry wali zameen ka ek-mushth nakad muavza | Zameen ke badle zameen aur poori ajeevika ka punarudhar |

### Michael Cernea Ka IRR Model (Impoverishment Risks and Reconstruction)

World Bank ke samajshastri [[thinker:Michael Cernea]] ne ==Impoverishment Risks and Reconstruction (IRR)== model diya. Unhone samjhaya ki visthapan se log achanak gareeb kyon ban jaate hain. Cernea ne aath bade khatre (8 risks) pehchane:
1. **Landlessness (Zameen ka chhinna)**: Upjao zameen chhin jaati hai aur nayi kheti yogya zameen nahi milti.
2. **Joblessness (Rozgar ka chhinna)**: Kheti aur traditional shilp nasht ho jaate hain.
3. **Homelessness (Ghar se bedakhali)**: Pushtaini ghar chhoot jaate hain aur shehari jhuggi-jhopdiyon mein rehna padta hai.
4. **Marginalization (Haashiye par aana)**: Samajik rutba gir jaata hai aur parivar karz ke jaal mein phas jaata hai.
5. **Food Insecurity (Khadya asuraksha)**: Apne khet aur jangal se milne wala poshan band ho jata hai.
6. **Increased Morbidity (Bimariyan badhna)**: Gande camp aur saaf paani ki kami se bimariyan phailti hain.
7. **Loss of Common Property Resources (CPR ka nuksan)**: Gaon ki charagah, talab aur jangal se lakdi/mahua chunne ke adhikar chhin jaate hain [[eg:Narmada ghati mein mahua aur tendu patta chhootne se adivasiyon ki aamdani aadhi ho gayi]].
8. **Social Disarticulation (Samajik taane-baane ka bikharav)**: Rishtedari, biradari ke sahare aur gaon ke dev-sthal alag-alag dishaon mein bikhar jaate hain.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Accumulation by Dispossession',
    body: 'Mains mein visthapan ko sirf administrative kami mat likho. David Harvey ke "Accumulation by Dispossession" aur Karl Marx ke "Primitive Accumulation" se jodo: kaise janta ke jangal aur zameen chheenkar private corporate profit banaya jata hai.',
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Eminent Domain Lagu', text: 'Sarkar ne jangal ya zameen par notice lagaya' },
      { label: 'Commons Par Kabza', text: 'Charagah, nadi aur jangal par janta ka adhikar khatam' },
      { label: 'IRR Ka Jhatka', text: 'Cernea ke 8 khatron se ajeevika aur pariwar bikhra' },
      { label: 'Informal Mazdoori', text: 'Aatmanirbhar kisaan shehar mein dihadi majdoor bana' },
    ],
  },
  {
    kind: 'md',
    body: `## Visthapan Ki Rajnitik Arthvyavastha: Baandh Aur Mines

Samajshastri yeh spasht karte hain ki visthapan koi aakasmik ghatna nahi hai; yeh capital-intensive development ka zaroori hissa hai. Jab badi multinational companiyan aur heavy finance mineral-rich ilaqon mein aate hain, to zameen rehne ki jagah nahi balki munafe ka saadhan ban jaati hai.

Samajshastri [[thinker:Amita Baviskar]] ne Narmada ghati par apni mashhoor study *In the Belly of the River* mein dikhaya ki kaise state machinery Sardar Sarovar Jaise baandhon ko rashtriya pragati batati hai, aur virodh karne wale Adivasiyon ko vikas-virodhi kehkar dabati hai. Iske peeche colonial daur ka ==Eminent Domain== sidhhant kaam karta hai.

[[eg:Narmada ghati mein Bhil aur Bhilala Adivasiyon ko jab Gujarat ke anjan shehari kinaron par basaya gaya, to unki paramparik aapsi madad ki pratha (Laha) poori tarah toot gayi.]]

### LARR Act 2013 banam Colonial 1894 Kanoon

100 saal se zyada samay tak zameen adhigrahan angrezon ke Land Acquisition Act 1894 se hota tha, jisme collector ke paas bina puche zameen chheen lene ki taqat thi. Singur, Nandigram aur Kalinganagar ke bhyankar aandolano ke baad sansad ne ==Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 (LARR Act)== banaya.

LARR Act 2013 ne chaar bade sudhar kiye:
- **Prior Informed Consent**: PPP projects ke liye 70% aur private projects ke liye 80% parivaron ki likhit sahmati anivarya.
- **Social Impact Assessment (SIA)**: Samajik prabhav ka aakalan taaki pata chale ki faayda zyada hai ya nuksan.
- **Enhanced Compensation**: Gaon mein market rate ka 4 guna aur shehar mein 2 guna muavza.
- **Comprehensive R&R**: Sirf paisa nahi, balki pakka makan, kheti ke badle zameen, aur school/hospital jaisi suvidhayein dena kanoonan anivarya kiya gaya.

Lekin kanooni vishleshak Usha Ramanathan dikhati hain ki rajya sarkaron ne naye ordinance aur amendments ke zariye industrial corridors aur defense ke naam par SIA aur consent ki sharton ko kamzor kar diya hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Land Acquisition Act 1894 (Colonial)',
    rightTitle: 'LARR Act 2013 (Contemporary)',
    rows: [
      {
        aspect: 'Mukhya Sidhhant',
        left: 'Atyadhik Eminent Domain jisme collector ka aakhiri faisla tha',
        right: 'Loktantrik vichar-vimarsh aur kanooni niyamawali par aadharit',
      },
      {
        aspect: 'Sahmati (Consent)',
        left: 'Zero sahmati; jabran zameen chheen lena kanooni tha',
        right: 'PPP ke liye 70% aur private ventures ke liye 80% sahmati anivarya',
      },
      {
        aspect: 'Samajik Aakalan (SIA)',
        left: 'Koi social impact assessment nahi hota tha',
        right: 'Azad agency dwara Social Impact Assessment (SIA) anivarya',
      },
      {
        aspect: 'Punravas (R&R)',
        left: 'Kewal nakad muavza, punravas ki koi zimmedari nahi',
        right: 'Kanoonan lagu hone wala comprehensive R&R package',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Risk Society Aur Bharat Mein Satat Vikas

Be-rok-tok extractivism ka asar sirf zameen chhinne tak seemit nahi hai. Karkhanon ka chemical, zameeni paani ka sookhna aur open-cast khadaanen poore paryavaran ko zehreela bana deti hain.

German samajshastri [[thinker:Ulrich Beck]] ne ==Risk Society== ka sidhhant diya. Beck ne samjhaya ki pehle aadhunikta "daulat aur bhojan" (goods) baantne mein lagi thi, lekin ab aadhunikta aisi bhyankar musibatein (bads — jaise pollution, global warming, toxic chemical) paida kar rahi hai jinhein control karna mushkil ho raha hai. Beck ne likha ki "Gareebi shreni-baddh hoti hai lekin dhuan loktantrik hota hai" (smog is democratic), parantu Bharat jaise samaj mein khatron ka bojh hamesha garib aur Adivasi vargon par phenka jata hai.

[[link:Paper 1 Stratification & Ecology: Beck ka Risk Society sidhhant Paper 2 ke Adivasi andolan aur Paryavaran sangharsh se seedhe judta hai.]]

### Gadgil Aur Guha: Omnivores, Ecosystem People Aur Refugees

Paryavaranvid [[thinker:Madhav Gadgil]] aur samajshastri [[thinker:Ramachandra Guha]] ne Bharat ke samajik-paryavaran sankat ko teen vargon mein baanta:
1. **Omnivores (Sarvabhakshi)**: Shehari ameer varg, udyogpati aur sarkari afsar jo bijli, paani, lakdi aur cement ka behisaab upbhog karte hain lekin paryavaran ka nuksan nahi jhelte.
2. **Ecosystem People (Paryavaran-Aashrit)**: Adivasi, pashupalak, chhote kisaan aur machhuare jo apne aas-paas ke jangal aur nadiyon par aashrit hain.
3. **Ecological Refugees (Paryavaran Sharanarthi)**: Wo ecosystem log jinki zameen baandh ya mine mein doob gayi aur ab wo sheharon mein jhuggi-jhopdiyon mein eent-bhatta ya safai karmchari ban gaye hain.

Guha aur [[thinker:Joan Martinez-Alier]] ne is ladai ko ==Environmentalism of the Poor== kaha. Pashchim deshon mein paryavaranvad ek luxury hobby hai (jaise jungle safari ya bird watching), lekin Bharat mein yeh roti, paani aur jangal ke adhikar ki astitva ki ladai hai.

### Ajeevika Banam Sanrakshan: Just Sustainability

Shehari policy maker aksar "Bourgeois Environmentalism" ka shikar ho jaate hain — wo tiger project ke naam par Adivasiyon ko jangal se nikal dete hain, lekin wahi ameer paryatakon ke liye luxury resorts aur national highways banne dete hain.

Planner [[thinker:Julian Agyeman]] ne ==Just Sustainability== ka vichar diya: paryavaran ka sanrakshan tabhi safal hoga jab garibon ke adhikar surakshit honge. Bharat mein iske liye ==Forest Rights Act, 2006 (FRA)== aur ==PESA 1996== ko mazbooti se lagu karna hoga, taaki gaon ki Gram Sabha ko apne jangal ki raksha ka faisla lene ka adhikar mile.`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Pashchim Ke Green Movement Se Tulna Mat Karo',
    body: 'Bharat ke paryavaran aandolano (Chipko, Narmada) ko Pashchim ke post-materialist green lifestyle se confuse mat karo. Bharat mein yeh jeevan-maran aur ajeevika ka sangharsh hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Development-Induced Displacement (DIDR)',
    meaning: 'Vikas pariyojnaon (baandh, mine, highway) ke kaaran sthaniya aabadi ka jabran visthapan aur ajeevika ka vinaash.',
  },
  {
    kind: 'keyTerm',
    term: 'Eminent Domain',
    meaning: 'Sarkar ki aisi kanooni taqat jisse wo "public interest" ka hawala dekar kisi ki bhi zameen adhigrahit kar sakti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Impoverishment Risks and Reconstruction (IRR)',
    meaning: 'Michael Cernea dwara pehchane gaye 8 ahem khatre jo visthapit logon ko garibi aur lachari mein dhakel dete hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Environmentalism of the Poor',
    meaning: 'Joan Martinez-Alier aur Ramachandra Guha ka concept jisme paryavaran sangharsh ko astitva aur ajeevika ki ladai ke roop mein dekha jata hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Risk Society',
    meaning: 'Ulrich Beck ka sidhhant jisme aadhunik vikas aisi aadahein aur khatre paida karta hai jo aam janta par thop diye jaate hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Cernea Ke 8 Khatre',
    body: 'Cernea ke 8 khatron ko yaad rakhne ka formula: Zameen, Rozgar, Ghar, Haashiya, Bhojan, Bimari, Gaon ki Sampatti, aur Samajik Taana-baana.',
  },
  {
    kind: 'answerBox',
    intro:
      'Vikas ke visthapan aur satat ajeevika par ek shreshth samajshastriya uttar ke mukhya bindu:',
    points: [
      'Visthapan koi prashasnik laparwahi nahi, balki capital-intensive extractivism aur "accumulation by dispossession" (David Harvey) ka hissa hai.',
      'Walter Fernandes ka data batata hai ki 60 million se zyada visthapiton mein 40% Adivasi aur 20% Dalit the, jabki 25% se kam ka punravas hua.',
      'Cernea ke IRR model se dikhao ki common property resources chhinne se samajik bikharav (social disarticulation) kaise hota hai.',
      'LARR Act 2013 ne collector ki manmani par rok lagakar consent aur SIA laya, lekin state amendments ne isey kamzor kiya.',
      'Asli satat vikas "bourgeois environmentalism" se nahi, balki Julian Agyeman ke "Just Sustainability" aur FRA 2006 ke antargat Gram Sabha ko adhikar dekar aayega.',
    ],
    conclusion:
      'Loktantrik nyay ke bina vikas loot ban jata hai; sachhi sustainability tabhi sambhav hai jab vikas ka kendra corporate munafe ki jagah subaltern ajeevika bane.',
  },
]
