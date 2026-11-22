import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic2HiMindMap: MindMapData = {
  title: 'Paper 2 · Unit 20.2 — Harit Kranti Aur Samajik Badlaav',
  center: 'Green Revolution & Society',
  subtitle: 'Technological Package • Varg Dhruvav • Kshetriya Bhedbhav • Paradoxes',
  branches: [
    {
      title: 'Techno-Economic Package & Jeet Ka Dawa',
      color: 'lavender',
      thinkers: ['M.S. Swaminathan', 'Norman Borlaug', 'Ashok Gulati'],
      points: [
        'Harit Kranti (1960s mid): HYV dwarf beej, chemical khad, tube-well sinchai aur tractors ka combination',
        'US ke PL-480 "ship-to-mouth" ghanist nirbharta se mukti aur anaaj mein aatmanirbharta',
        'State-led agro-capitalism: sasti bijli, subsidized fertilizer, MSP aur government credit ka network',
        'Jeet ka narrative: aakaal (famine) se bachav aur modern science se bhookh mitane ka garv',
      ],
    },
    {
      title: 'Class Polarisation & Naya Dominant Elite',
      color: 'yellow',
      thinkers: ['Francine Frankel', 'P.C. Joshi', 'Lloyd & Susanne Rudolph', 'M.N. Srinivas'],
      points: [
        'Francine Frankel: capital-intensive kheti ne ameer kisan ko aur ameer banaya, gareeb pichhad gaya',
        'Tenant eviction: kheti munafedar hone par zameendaron ne bataidaron (tenants) ko zameen se nikal diya',
        'Rudolph & Rudolph: "bullock capitalists" — intermediate peasant castes aarthik taqat bankar ubhrin',
        'Agrarian power elite: Jats, Patidars, Marathas aur Kammas ne regional politics aur BKU jaisi lobbies banayin',
      ],
    },
    {
      title: 'Kshetriya Asantulan & Paryavaran Ka Vinash',
      color: 'mint',
      thinkers: ['Vandana Shiva', 'Biplab Dasgupta', 'C.H. Hanumantha Rao'],
      points: [
        'Regional disparity: saari taraqqi Punjab, Haryana aur Western UP mein simti; Bihar aur dryland chhoot gaye',
        'Vandana Shiva (The Violence of the Green Revolution): indigenous beejon ka vinash aur wheat-paddy monoculture',
        'Ecological crisis: borewell se paani ka patal girna, zameen mein namak (salinity), aur Punjab ki "cancer train"',
        'Second Green Revolution ki maang: mote anaaj (millets), organic farming aur kam paani wali kheti',
      ],
    },
    {
      title: 'Samajik Paradoxes & Sanskritik Sankat',
      color: 'pink',
      thinkers: ['Ashish Bose', 'Jan Breman', 'Surinder S. Jodhka', 'Robert K. Merton'],
      points: [
        'Child sex ratio ka girna: aarthik khushhali aane par dahez aur ultrasound se female foeticide badhi',
        'Labour casualisation: purana Jajmani rishta toota; Bihar-UP se saste migrant mazdoor bulaye gaye',
        'Youth crisis aur anomie: combine harvesters se kaam chheena; berozgari aur "chitta" (drug abuse) phaila',
        'Kisan andolan: badhti kheti lagat aur sthir aamadni ke khilaf tractor rallies aur historic border protests',
      ],
    },
  ],
}

export const topic2HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u10-01-rural-schemes-green-rev.webp',
    alt: 'P2 Unit 10 infographic: CDP, Cooperatives & Green Revolution — State Programmes & the Paradoxes of Green Revolution',
    caption:
      'State Programmes & the Paradoxes of Green Revolution: Harit Kranti ke scientific daawon ke peeche chhipe vargiya dhruvav, ecological vinash aur samajik paradoxes ka vishleshan.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 20 Visual 01',
  },
  {
    kind: 'md',
    body: `## Harit Kranti Ka Asli Samajshastra

Aasaan shabdon mein samjho: 1960 ke dashak mein aayi ==Harit Kranti== (*Green Revolution*) sirf kheti mein gehun aur chawal ki paidawar badhane ka program nahi thi. Samajshastra ki nazar se yeh sarkar dwara laya gaya ek aisa technical badlaav tha jisne gaon ke class structure ko badal diya, purane jajmani rishte tod diye, aur aisi naye tarah ki asamanata, ecological sankat aur gender problems paida kar deen jinki kisi ne umeed nahi ki thi.

1965–66 mein jab desh mein bhishan sukha pada aur Bharat America ke ghatiya laal gehun (==PL-480==) par zinda tha jise *"ship-to-mouth existence"* kaha jata tha, tab Indian state ne zameen baantne (land reforms) ka mushkil rasta chhod diya. Sarkar ne agricultural scientist [[thinker:M.S. Swaminathan]] aur Norman Borlaug ke kehne par "betting on the strong" ki policy apnayi — yaani jahan pehle se nehrein thin aur jin kisanon ke paas pehle se paisa tha, wahan modern inputs jhonk diye gaye.

## Jeet Ka Dawa Aur Uski Sachhai

Sarkari prachar ne Harit Kranti ko ek aisi mahan scientific jeet bataya jisne desh ko aakaal (famine) se bacha liya. Food Corporation of India (FCI) ke godaam gehun aur chawal se bhar gaye aur Bharat anaaj ke maamle mein aatmanirbhar ban gaya.

Lekin samajshastriyon ne field mein ja kar dekha ki is chamatkar ke peeche kitni bhaari samajik keemat chukayi gayi:

- **[[thinker:Francine Frankel]] (*India’s Green Revolution: Economic Gains and Political Costs*, 1971):** Frankel ne dikhaya ki nayi technology capital-intensive thi. HYV beejon ke liye chemical fertilizer, keedemar dawa, diesel pump aur tractor khareedne padte the. Yeh sab wahi kisan kar sakta tha jiske paas jeb mein mota paisa tha. Nateeja yeh hua ki ameer kisan bohot ameer ho gaya aur chhote kisan par karz ka bojh badh gaya.
- **Bataidaron (Tenants) Ki Bedakhli:** Harit Kranti se pehle bade zameendar kheti khud nahi karte the, balki chhote kisanon ko batai (sharecropping) par zameen de dete the. Lekin jab HYV seeds se paidawar teen-guna ho gayi aur kheti mein andhadhund munafa dikha, toh zameendaron ne bataidaron ko zameen se nikaal diya aur tractor chala kar khud kheti karne lage. Purane bataidar apne hi khet mein dihadi mazdoor ban kar reh gaye.
- **[[thinker:Biplab Dasgupta]] Ki Critique:** Pehle kisan gobar ki khad, bail aur apne hi beej use karta tha. Harit Kranti ne kisan ko multi-national chemical aur seed companies ka gulaam bana diya, jisse input costs aasmaan chhoone lagin.

## Naye Dominant Rural Elite Ka Uday

Harit Kranti ne intermediate castes (pichhdi aur beech ki kisan jaatiyon) ko aarthik aur political roop se gaon ka sabse taqatwar tabqa bana diya.

### "Bullock Capitalists" Ka Janm

Political sociologists [[thinker:Lloyd and Susanne Rudolph]] ne inhein ==Bullock Capitalists== kaha — yaani aise self-employed kisan jinke paas 2.5 se 15 acre zameen thi aur jo modern bazaar ke hisab se kheti karte the.

- **Dominant Castes Ka Kabza:** Punjab aur Haryana mein **Jats**, Western UP mein **Jats aur Gujjars**, Maharashtra mein **Marathas**, Gujarat mein **Patidars**, aur Andhra Pradesh mein **Kammas aur Reddys** ne kheti ke munafey se itni taqat jama kar li ki unhone purane shehari Brahmin-Bania netaon ko regional politics se bahar kar diya.
- **Kisan Sangathanon Ka Ufaan:** 1980 ke dashak mein in dominant castes ne gair-rajneetik kisan andolan khade kiye. Mahendra Singh Tikait ka ==Bharatiya Kisan Union (BKU)== aur Sharad Joshi ka ==Shetkari Sanghatana== hazaron tractors ke sath sheharon ko gher lete the aur *"Bharat versus India"* ka naara dekar MSP badhane aur bijli bill maaf karne ki maang karte the.

| Region | Dominant Kisan Jaati | Mukhya Cash Crop | Rajneetik & Kisan Sangathan |
| --- | --- | --- | --- |
| Punjab & Haryana | Jats | Gehun, Dhan | Bharatiya Kisan Union (BKU), Akali Dal, INLD |
| Western UP | Jats, Gujjars | Ganna, Gehun | BKU (Tikait gut), Rashtriya Lok Dal (RLD) |
| Maharashtra | Marathas | Ganna, Kapas | Shetkari Sanghatana, Sahakari Sugar Lobbies |
| Gujarat | Patidars (Patel) | Kapas, Moongfali, Dairy | Sardar Patel Lobbies, Cooperative Unions |
| Andhra Pradesh | Kammas, Reddys | Dhan, Mirch, Tambaku | Telugu Desam Party (TDP), YSR Congress |

## Paryavaran Ka Vinash: The Violence of the Green Revolution

Technocrats sirf million tonnes gehun gin rahe the, par environmental sociologists ne dikhaya ki zameen aur paani ka kitna bhayanak satyanaash hua.

- **[[thinker:Vandana Shiva]] (*The Violence of the Green Revolution*, 1991):** Vandana Shiva ne saaf kaha ki Harit Kranti prakriti ke khilaf ek violent program tha. Bharat ke kisan pehle 200 tarah ke daal, mote anaaj aur sabziyaan ugate the. Harit Kranti ne is biodiversity ko khatam karke gehun aur dhan ka artificial monoculture bana diya.
- **Zameen Ke Paani Ka Patāl Mein Jana:** Sasti aur muft bijli ke chalte har khet mein deep submersible tube-wells laga diye gaye. Har saal Punjab aur Haryana mein ground water table kayi foot neeche chala gaya aur upjaau zameen dark zones mein badal gayi.
- **"Cancer Train" Ka Dard:** Bero-tok chemical fertilizers aur pesticides ke chhidkaav ne khet ke paani ko zehreela bana diya. Punjab ke Malwa belt mein ghar-ghar mein cancer phail gaya, jahan se har shaam Bathinda se Bikaner ke liye ek passenger train chalti hai jise aam log *Cancer Train* kehte hain, jisme saikdon mareez treatment ke liye jaate hain.

## Khushhali Ke Beech Samajik Paradoxes

North-West India mein aayi aarthik daulat ne dikhaya ki sirf jeb mein paisa aane se samaj ki soch aadhunik nahi hoti.

### Child Sex Ratio Ka Girna

Sabse bada samajik paradox yeh tha ki desh ke sabse ameer kisan ilaakon (Punjab, Haryana, Western UP) mein 0–6 saal ke bachhon ka sex ratio achanak se gir gaya.

- **Bete Ki Chah (Son Preference):** Ashish Bose aur feminist samajshastriyon ne note kiya ki zameen ki keemat aasmaan chhoone par parivaaron ko darr lagne laga ki zameen ka batwara na ho jaye. Zameen bachane aur heavy tractors chalane ke liye beta chahiye tha.
- **Dahez Ka Vulgar Consumerism:** Harit Kranti ke paise se dahez ka nanga naach shuru hua. Shadiyon mein car, tractor, aur soni ki maang status symbol ban gayi, jisse beti ko parivaar par aarthik bojh maana jaane laga.
- **Ultrasound Machines Ka Durupayog:** Ameer kisan parivaaron ke paas portable ultrasound se bhrun-ling jaanch (sex determination) karane aur beti ko kokh mein hi maarne (female foeticide) ka paisa tha. William Ogburn ke ==Cultural Lag== ka sabse bada saboot yeh tha ki kothiyon ke aage 60-horsepower ke tractor khade the, par dimaag wahi purana patriarchal tha.

### Mazdoori Ka Casualisation Aur Nashe Ka Sankat

- **Casualisation of Labour:** [[thinker:Jan Breman]] ne dikhaya ki purane jajmani rishte khatam ho gaye aur landlord ab local mazdoor ko saal-bhar ka kharcha dene ke bajaye Bihar aur Eastern UP se saste migrant mazdoor lane lage, jinhe farm shed mein band karke minimum wage se bhi kam par kaam karaya jaata tha.
- **De-skilling Aur Nashe Ka Jaal:** Combine harvesters aane se kheti mein insaani mehnat ki zaroorat kam ho gayi. Padhai-likhai achhi na hone aur industry na hone ki wajah se Punjab ke gaon ke naujawan berozgar ho gaye, jisse gaon-gaon mein "chitta" (synthetic drugs) ka jaanleva nasha phail gaya.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1965–1966',
        title: 'Sukha Aur PL-480 Ka Sankat',
        text: 'Desh mein anaaj ki bhari kami hui; US se laal gehun import karne ki lachari ne Harit Kranti ki zameen taiyar ki.',
      },
      {
        year: '1966–1967',
        title: 'HYVP Programme Ki Shuruat',
        text: 'MS Swaminathan aur Norman Borlaug ke dwar Mexican dwarf wheat seeds ko Punjab-Haryana mein introduce kiya gaya.',
      },
      {
        year: '1971',
        title: 'Francine Frankel Ki Landmark Study',
        text: 'Dikhaya ki Harit Kranti ne ameer aur gareeb kisan ke beech ki khai badhai aur bataidaron ko zameen se bedakhal kiya.',
      },
      {
        year: '1978–1988',
        title: 'Gair-Rajneetik Kisan Andolan',
        text: 'Mahendra Singh Tikait (BKU) aur Sharad Joshi ne dominant castes ko MSP aur subsidies ke liye ekjut kiya.',
      },
      {
        year: '1991',
        title: 'Vandana Shiva — The Violence of the Green Revolution',
        text: 'Biodiversity ka khatma, groundwater depletion aur pesticide se cancer phailne ki sachhai ujagar ki.',
      },
      {
        year: '2020–2021',
        title: 'Delhi Border Par Itihasik Kisan Andolan',
        text: 'Punjab, Haryana aur UP ke kisanon ne corporate mandi laws ke khilaf ek saal tak shantipoorn ladaai ladi.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Sarkari Jeet Ka Narrative',
    rightTitle: 'Samajshastriya Aur Ecological Reality',
    rows: [
      {
        aspect: 'Food Security',
        left: 'Aakaal se mukti mili, FCI ke godaam bhar gaye aur anaaj aatmanirbharta aayi',
        right: 'Sirf calories badhin; daal aur poshan ki kami aayi aur hunger paradox bana raha',
      },
      {
        aspect: 'Kheti Ki Barabari',
        left: 'Beej scale-neutral hote hain; chhota aur bada khet ek barabar gehun ugata hai',
        right: 'Institutions scale-biased the: saste tube-well, bank loan aur machinery ameer ko hi mili',
      },
      {
        aspect: 'Grameen Bhaichara',
        left: 'Gaon ka aadhunikikaran hua, rozgar badha aur janta ka jeevan-star sudhra',
        right: 'Bataidar be-zameen ho gaye, class conflict badha aur saste migrant labour ka shoshan hua',
      },
      {
        aspect: 'Paryavaran Aur Health',
        left: 'Science ne mausam aur prakriti ki pabandiyon ko jeet liya',
        right: 'Groundwater sukha, zameen zehreeli hui aur Malwa belt mein "cancer train" chali',
      },
      {
        aspect: 'Gender Aur Samajik Soch',
        left: 'Kisan parivaaron mein TV, gaadi aur modern aadhunik subidhaayein aayin',
        right: 'Beti parivaar par bojh bani, female foeticide badhi aur child sex ratio behad gira',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Bullock Capitalists',
    meaning:
      'Lloyd aur Susanne Rudolph ka diya gaya concept jo intermediate caste ke un market-oriented kisanon (2.5–15 acre) ko darshata hai jinhone Harit Kranti ke baad rajneetik shakti haasil ki.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Scale Neutrality Myth',
    meaning:
      'Yeh galat dharana ki kyunki beej sabhi khet par barabar ugte hain, isliye Harit Kranti ne sabhi ko barabar faayda diya — jabki reality mein capital aur credit sirf ameer ke paas tha.',
  },
  {
    kind: 'keyTerm',
    term: 'Ecological Monoculture',
    meaning:
      'Vandana Shiva ka concept jisme indigenous fasalon ki jagah sirf gehun aur dhan ke paani-chuse cycle ko thop kar zameen aur beejon ki natural resilience ko khatam kar diya gaya.',
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Lag in Demography',
    meaning:
      'Aisi sthiti jahan bhautik aadhunikta (tractors, ultrasound machines) toh aa gayi par samajik soch (patriarchy aur son-preference) purani hi rahi, jisse bhrun-hatya badhi.',
    thinkerSlug: 'yogendra-singh',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'karl-marx',
    quote: 'All progress in capitalist agriculture is a progress in the art, not only of robbing the worker, but of robbing the soil.',
    context: 'Capitalist kheti mein mazdoor ke shoshan ke sath-sath mitti aur prakriti ke shoshan ko darshate hue.',
  },
  {
    kind: 'thinkerQuote',
    thinkerSlug: 'robert-k-merton',
    quote: 'The manifest achievement of food self-sufficiency produced latent dysfunctions of severe ecological exhaustion and acute regional polarization.',
    context: 'Sarkari aatmanirbharta ke lakshya ke peeche nikle anchahe ecological aur samajik vinash ko decode karte hue.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: Sirf Fasal Ki Paidawar Mat Likho!',
    body: 'Harit Kranti par answer likhte waqt sirf wheat aur rice production ka data mat do. Sociological concepts use karo: Francine Frankel ka tenant eviction, Rudolphs ka bullock capitalists, Vandana Shiva ka ecological critique, Ashish Bose ka child sex ratio paradox aur BKU ki dominant caste politics.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Scale-Neutrality Ke Dhokhe Se Bacho',
    body: 'Economists kehte hain ki HYV beej scale-neutral hain. Examiner ko saaf samjhao ki biological seed chahe scale-neutral ho, par social institutions (bank loans, cold storage, tube-well capital) scale-biased hain jo sirf bade kisanon ki madad karte hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'William Ogburn Ka Cultural Lag Yahan Zaroor Lagao',
    body: 'Punjab aur Haryana ke ameer zilon mein child sex ratio kyun gira? Answer mein William Ogburn ka "Cultural Lag" mention karo: Material culture (tractor, ultrasound, dhan) badha, par adaptive culture (dahez lalach, patriarchal beta-chah) pichhada reh gaya.',
  },
  {
    kind: 'answerBox',
    intro:
      'Harit Kranti ne Bharat ko bhookhmari aur PL-480 se nikaal kar anaaj aatmanirbhar toh banaya, par iske samajik aur ecological parinam behad chintajanak rahe.',
    points: [
      'Vargiya dhruvav: Capital-intensive technology ne ameer kulaks ko laabh pahunchaya aur bataidaron (tenants) ko zameen se bedakhal karke dihadi mazdoor bana diya (Francine Frankel).',
      'Dominant castes ka uday: Intermediate kisan jaatiyon (Jats, Marathas, Patidars) ne aarthik daulat ko political taqat mein badla aur BKU jaise dabang kisan morche khade kiye (Rudolphs’ "bullock capitalists").',
      'Kshetriya asantulan: Sari sarkari suvidhaayein North-West India mein kendrit rahin, jabki Bihar, Eastern UP aur sukha-grast kshetra aarthik roop se pichhad gaye.',
      'Ecological vinash: Vandana Shiva ke mutabiq wheat-paddy monoculture ne mitti ki urvara shakti nasht ki, ground water table patal mein pahuncha diya aur Malwa mein cancer express chala di.',
      'Samajik paradoxes: Daulat aane se dahez badha aur ultrasound se female foeticide badhi jisse child sex ratio gira; sath hi kheti mechanisation ne berozgari aur gaon mein nashe ki bimari phailayi.',
    ],
    conclusion:
      'Ab samay aa gaya hai ki paani chusne wale monoculture ki jagah agro-ecological farming, mote anaaj (millets) aur kisan barabari wali Doosri Harit Kranti lanyi jaye.',
  },
]
