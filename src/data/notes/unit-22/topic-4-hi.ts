import type { TopicNotebookSpec } from '@/lib/notes/notebook-types'

export const topic4Hi: Pick<
  TopicNotebookSpec,
  'summary' | 'mindMap' | 'sections'
> = {
  summary:
    'Aasaan bhasha mein samjhein toh yeh topic Bharat mein dharamnirpekshikaran (secularization), sanvidhanik dharamnirpekshta (secularism) aur sampradayikta (communalism) ke aapsi rishton ko samjhata hai. Isme dekhenge ki M.N. Srinivas ke anusaar rozmarra ke jeevan mein chhua-chhoot aur karmkando ka kam hona (sociological secularization) sarkar ki nitiyon (constitutional secularism) se kaise alag hai. Rajeev Bhargava ke "principled distance" model aur T.N. Madan tatha Ashis Nandy ke virodh ko samjhenge. Sath hi rozmarra ki modern soch ke sath-sath sadakon par dharamik pradarshan kyun badh raha hai, aur Ashutosh Varshney banam Paul Brass ke sampradayik dango ke siddhant ko vishleshit karenge.',
  mindMap: {
    title: 'Bharat Mein Dharamnirpekshikaran aur Sampradayikta',
    center: 'Secularization in India',
    subtitle: 'Srinivas Banam Sanvidhan • Principled Distance • Public Religion Ka Uday • Dange aur IRS',
    branches: [
      {
        title: 'Srinivas aur Secularization',
        color: 'lavender',
        thinkers: ['M.N. Srinivas', 'Yogendra Singh', 'Max Weber'],
        points: [
          'Sociological secularization: Jo cheez pehle dharamik maani jati thi, woh rozmarra ke jeevan mein aam ho jati hai',
          'Shuddhata aur aashuddhata (purity/pollution) ke paramprik niyam bus, train aur canteen mein toot gaye',
          'Karmkando ka badlav: Purane dharamik anushthan chhote ho gaye ya status dikhane ke zariye ban gaye',
          'Sanvidhanik secularism se alag: Yeh samaj ka zameeni badlav hai jabki Sanvidhan ek kanooni naitikta hai',
        ],
      },
      {
        title: 'Principled Distance aur Aalochna',
        color: 'yellow',
        thinkers: ['Rajeev Bhargava', 'T.N. Madan', 'Ashis Nandy', 'Charles Taylor'],
        points: [
          'Principled distance: Sarkar na toh dharam se katti hai aur na andhi banti hai; bhedbhav mitane ke liye dakhal deti hai',
          'Articles 17 aur 25(2)(b): Chhua-chhoot ka ant aur sabhi jatiyon ke liye mandir pravesh ka kanoon',
          'T.N. Madan: South Asia mein dharam poora jeevan hai, isliye western secularism yahan nakaam raha hai',
          'Ashis Nandy: Modern babushahi secularism nafrat failata hai; paramprik Sufi-Bhakti aapsi mel behtar tha',
        ],
      },
      {
        title: 'Public Religion Ka Virodhabhas',
        color: 'mint',
        thinkers: ['Jose Casanova', 'Émile Durkheim', 'C.P. Bhambhri'],
        points: [
          'Ek sath do baatein: Rozmarra mein scientific aur modern jeevan, par sadakon par vishal dharamik utsav',
          'Jose Casanova ka deprivatization: Dharam gharon ke andar band rehne ke bajaye public square mein aa gaya',
          'Durkheimian collective effervescence: Shehri akelepan aur anomie se bachne ke liye naye yuvak julooson mein judte hain',
          'Market aur media: TV par 24 ghante bhakti channel, devotional apps aur VIP darshan ka business',
        ],
      },
      {
        title: 'Sampradayik Dango Ke Siddhant',
        color: 'pink',
        thinkers: ['Ashutosh Varshney', 'Paul Brass', 'Steven Wilkinson', 'Bipan Chandra'],
        points: [
          'Ashutosh Varshney: Hindu-Muslim ke sanjhe sangathan (vyapar mandal, trade union) shanti ka pul bante hain',
          'Zameeni data: Calicut aur Lucknow mein sanjha vyapar hone se shanti rahi; Aligarh aur Surat mein dange hue',
          'Paul Brass ka IRS: Dange achanak nahi hote; netaon aur gundon ka Institutionalized Riot System inhe karwata hai',
          'Steven Wilkinson: Sarkar aur police dange tabhi rokti hai jab ruling party ko minority vote ki zaroorat hoti hai',
        ],
      },
    ],
  },
  sections: [
    {
      kind: 'figure',
      assetFile: 'p2-u12-02-secularism-communalism-india.webp',
      alt: 'P2 Unit 12 infographic: Secularization & Communalism in India — Principled Distance vs Institutionalized Riot Systems',
      caption: 'Principled Distance vs Institutionalized Riot Systems — Secularization & Communalism in India ka visual saransh.',
    },
    {
      kind: 'md',
      body: `## Sociological Secularization Banam Sanvidhanik Secularism

Samajshastra mein secularization aur secularism do alag-alag baatein hain. Jahan secularism sarkar aur kanoon ki ek ranniti hai jisme sabhi dharmo ko barabar aadar diya jata hai, wahin secularization aam janta ke dainik jeevan aur vyavhar ka ek zameeni badlav hai jisme paramprik dharamik niyam kamzor hote hain.

Bhartiya samajshastri [[thinker:M.N. Srinivas]] ne apni mashhoor kitaab *Social Change in Modern India* (1966) mein ==Sociological Secularization== ko paribhashit kiya. Unka kehna tha ki secularization ek aisi prakriya hai jisme jo cheezein pehle pavitra ya dharamik maani jati thin, woh ab gair-dharamik ya aam banti ja rahi hain. Modern jeevan mein chhua-chhoot aur shuddhata-aashuddhata (purity and pollution) ke sadiyon purane niyam tut rahe hain: train aur metro mein har jati aur dharam ke log ek sath baithte hain, factory aur corporate offices ki canteen mein ek sath khana khate hain [[eg:Bangalore ke IT park mein alag-alag jatiyon aur dharmo ke tech workers ka ek hi table par lunch karna]]. Iske alawa purane lambe karmkand chhote ho gaye hain aur vivah ya pooja samajik aish-o-aaram dikhane ka zariya ban gaye hain.

Iske viprit, Bharat ka ==Constitutional Secularism== na toh France ki tarah dharam par pabandi lagata hai (*laïcité*) aur na hi America ki tarah dharam se door rehta hai (*wall of separation*). Bharat mein Sanvidhan *Sarva Dharma Sambhava* (sab dharmo ka saman aadar) ke sath-sath samaj sudhar ke liye dharamik kanoonon mein zaroori dakhal deta hai (Articles 15, 17, 25(2)(b)).

| Aayam | M.N. Srinivas Ka Secularization | Sanvidhanik Secularism (Bharat Sarkar) |
| :--- | :--- | :--- |
| **Swaroop** | Dainik jeevan aur samaj ka empirical badlav | Kanooni, sanvidhanik aur rajnitik siddhant |
| **Badlav Ki Jagah** | Aam bolchal, kanooni aadat aur karmkand | Nyaypalika, fundamental rights aur sarkar |
| **Chhua-Chhoot** | Public spaces mein jatiye niyam tutna | Article 17 ke tahat chhua-chhoot par kanooni rok |
| **Karmkand Ka Asar** | Pooja-path ka chhota hona aur social display | Shanti aur swasthya ki shart par aazadi (Art 25) |
| **Aakhiri Nateeja** | Vyavaharikta aur modern tarka-shilata | Principled distance aur samajik nyay |`,
    },
    {
      kind: 'callout',
      variant: 'upscAngle',
      title: 'UPSC Answer Writing Tip',
      body: 'Answer shuru karte waqt saaf likho: Secularization ek samajshastriya prakriya hai jise M.N. Srinivas aur Max Weber ne samjhaya; Secularism ek rajnitik-sanvidhanik niti hai jise Rajeev Bhargava aur sanvidhan nirmataon ne banaya.',
    },
    {
      kind: 'thinkerQuote',
      thinkerSlug: 'mn-srinivas',
      quote: 'Secularization in India involves not the elimination of religion, but the profound transformation of its social forms and rituals.',
      context: 'Social Change in Modern India (1966), dharamik anushthanon ke badalte swaroop par.',
    },
    {
      kind: 'md',
      body: `## Rajeev Bhargava Ka Principled Distance Aur Uski Aalochnayein

Pashchimi vidwan aksar sochte the ki Bharat ka secularism dhong hai, kyunki sarkar Tirupati mandir ka trust sambhalti hai, Haj subsidy deti hai aur Waqf board chalati hai. Rajnitik darshnik [[thinker:Rajeev Bhargava]] ne is uljhan ko apne mashhoor model ==Principled Distance== se suljhaya.

Bhargava samjhate hain ki Bharatiya Sanvidhan dharam se bilkul katkar nahi rehta. Sarkar ek sidhant-aadhrit doori (principled distance) banaye rakhti hai: jab tak dharmik samuday shanti se chalte hain sarkar dakhal nahi deti, par jaise hi kisi dharamik riwaj se kisi insan ki barabari ya aatmasamman chhinne lagta hai, sarkar foran dakhal deti hai [[eg:Sanvidhan dwara chhua-chhoot ko ban karna, Daliton ke liye mandir ke darwaze kholna (Article 25(2)(b)), aur Triple Talaq ko gair-kanooni banana]]. Is tarah Bharat ka model inter-religious samanta (Articles 29-30) aur intra-religious samanta (samajik bhedbhav mitana) dono ko sadhta hai.

Lekin Bharat ke is model ke khilaf do bade vicharakon ne aawaz uthayi:
- **T.N. Madan Ki Aalochna ("Secularism in Its Place"):** Madan kehte hain ki South Asia mein dharam ek poori jeevan-shaili hai jo insan ko astitva deti hai. Yahan Pashchim ka secularism ek lachar aur nakam transplant hai jo logon ke dharamik astitva ko chheen leta hai, jisse aakhirkar katarwad ko badhava milta hai.
- **Ashis Nandy Ki Aalochna ("An Anti-Secularist Manifesto"):** Nandy ka kehna hai ki modern babushahi secularism ne hi dange aur nafrat badhayi hai. Unka manna hai ki Bharat ki paramprik sahanubhuti (Bhakti-Sufi parampara) aapsi bhaichara kayam rakhne mein modern secular state se kahin zyada kamyab thi.`,
    },
    {
      kind: 'compare',
      leftTitle: 'Western Strict Separation (Pashchimi Model)',
      rightTitle: 'Indian Principled Distance (Bhargava Model)',
      rows: [
        {
          aspect: 'Sarkar aur Dharam',
          left: 'Kattar deewar; sarkar dharam ki taraf dekhegi bhi nahi',
          right: 'Lachili doori; zaroorat padne par sidhant ke aadhar par dakhal',
        },
        {
          aspect: 'Samaj Sudhar',
          left: 'Church ke aantarik mamlon mein sarkar dakhal nahi de sakti',
          right: 'Dalit mandir pravesh aur stri-samanta ke liye kanoon banana',
        },
        {
          aspect: 'Alpasankhyak Adhikar',
          left: 'Keval aam nagrik barabari; minority ko vishesh suvidha nahi',
          right: 'Articles 29 aur 30 ke tahat shaikshik aur sanskritik suraksha',
        },
        {
          aspect: 'Mukhya Lakshya',
          left: 'Vyakti ki aazadi ko church ke dabdabe se bachana',
          right: 'Dharmik aazadi ke sath-sath samajik nyay aur aadar sthapit karna',
        },
      ],
    },
    {
      kind: 'md',
      body: `## Virodhabhas: Rozmarra Ka Secularization aur Public Religion Ka Uday

Aaj ke Bharat mein ek ajeeb sa samajik virodhabhas dikhta hai: ek taraf padhai, naukri, hospital aur metro train mein log scientific aur tarkik dhang se jee rahe hain; doosri taraf sadakon, TV channels aur internet par dharamik juloos aur pooja-path pehle se kahin zyada dhoom-dham se badh rahe hain.

Sociologist [[thinker:Jose Casanova]] ne ise ==Deprivatization of Religion== kaha. Unka kehna hai ki dharam aadhuniki-karan ke baad kamre mein band hone ke bajaye shaan se sadakon aur TV media par wapas aa gaya hai.

Samajshastri is virodhabhas ke chaar mukhya kaaran batate hain:
1. **Compartmentalization (Khandikaran):** Milton Singer ne bataya ki shahar ka aam aadmi apne din ko baant leta hai: subah office mein woh ek modern engineer ya manager hota hai, par sham ko ghar aakar poore karmkand ke sath aarti karta hai.
2. **Durkheim Ka Collective Effervescence:** Shahar ki bheed mein akelapan aur naukri ki asuraksha insaan ko bechain karti hai ([[thinker:Emile Durkheim]]). Jab hazaron yuvak Kanwar Yatra ya Ganpati visarjan ke juloos mein jhumte hain [[eg:Lakhon kanwariyas ka ek jaise kapde pehan kar DJ par naachte hue chalna]], toh unhe ek zabardast aapsi bhaichara aur takat mehsoos hoti hai.
3. **Consumer Market aur Devotional Media:** Dharam ab market ka hissa ban chuka hai; 24 ghante chalne wale bhakti channels, mobile devotional apps aur VIP mandir darshan packages ne dharam ko aakarshak product bana diya hai.
4. **Chunavi Mobilization:** Neta aur partiyan dharamik utsavon aur julooson ko sponsor karte hain taaki jatiyon ki deewar tod kar ek pan-Hindu vote bank banaya ja sake.`,
    },
    {
      kind: 'callout',
      variant: 'yaadRakho',
      title: 'Durkheim Ka Siddhant Paper 2 Mein Lagayein',
      body: 'Paper 1 ke Emile Durkheim ki "Collective Effervescence" avdharna ko sadak par hone wale Kanwar Yatra ya Ganpati visarjan se jodo. Durkheim batate hain ki jab log badi bheed mein ek sath naachte ya gaate hain, toh unki personal chintayein mitt jati hain aur samuday ki shakti ka ahasas hota hai.',
    },
    {
      kind: 'md',
      body: `## Sampradayik Dange Kyun Hote Hain: Ashutosh Varshney Banam Paul Brass

Kuch shahar hamesha shant kyun rehte hain jabki kuch shahron mein zara si afwah par hi dange bhadak jate hain? Samajshastriyon ke paas iske do zameeni model hain.

[[thinker:Ashutosh Varshney]] ne apni mashhoor research mein ==Inter-Ethnic Civic Networks== ka siddhant diya. Unhone ek jaise shahar compare kiye aur dekha ki shanti ka asli raaz dono samudayon ke sanjhe sangathanon mein hai:
- **Associational Networks (Sanjhe Sangathan):** Jahan Hindu aur Muslim aapas mein milkar vyapar sangh, mazdoor union ya sports club chalate hain, wahan afwah aate hi shanti samitiyan dange rok leti hain [[eg:Lucknow aur Calicut mein Chikan kadhai aur lakdi ke vyapar mein dono samuday ek doosre par nirbhar the, isliye wahan dange nahi hue]].
- **Everyday Engagement (Ghar-Pariwar Ka Mel):** Gaon mein padosi ka rishta kaafi hota hai, par bheed-bhare shahron mein sanjhe business association hi dango se bachate hain. Jahan dono samuday alag-alag ilaqon mein rehte hain aur koi sanjha business nahi hai (jaise Aligarh ya Surat), wahan dange aasaani se bhadak jate hain.

Iske theek viprit, [[thinker:Paul Brass]] ne ==Institutionalized Riot System (IRS)== ka model diya. Brass kehte hain ki dange kabhi achanak nahi hote; yeh netaon, danga-bhadkane wale gundon aur afwah failane walon dwara stage kiya gaya ek natak hote hain taaki chunav mein dharamik dhruvikaran (polarization) karke vote batore ja sakein. Sociologist Steven Wilkinson kehte hain ki police dango ko tabhi rokti hai jab ruling party ko jeetne ke liye minority vote ki zaroorat hoti hai.`,
    },
    {
      kind: 'callout',
      variant: 'galtiMat',
      title: 'Sampradayikta Par Galat Fahami Se Bachein',
      body: 'Communalism ko koi madhyakaal ki purani ladai mat likho. Itihaskar Bipan Chandra aur Asghar Ali Engineer ne sidh kiya hai ki sampradayikta angrezon ke divide-and-rule aur modern daur ki chunavi rajniti ki paidaish hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Sociological Secularization',
      meaning:
        'Samajik vyavhar ka aisa badlav jisme dainik jeevan mein paramprik jatiye shuddhata, chhua-chhoot aur anushthanik niyam dheere-dheere toot jate hain.',
      thinkerSlug: 'mn-srinivas',
    },
    {
      kind: 'keyTerm',
      term: 'Principled Distance',
      meaning:
        'Sarkar aur dharam ke beech ki aisi lachili doori jahan sarkar dharmo ka saman aadar karti hai par samanta aur nyay ke liye kuritiyon par dakhal bhi deti hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Institutionalized Riot System (IRS)',
      meaning:
        'Netaon, sthaniya criminal tatvon aur afwah failane walon ka ek aisa tana-bana jo chunav mein vote badhane ke liye sochi-samjhi hinsa karwata hai.',
    },
    {
      kind: 'keyTerm',
      term: 'Inter-Ethnic Civic Networks',
      meaning:
        'Hindu aur Muslim samudayon ke beech ke sanjhe business associations, trade unions aur clubs jo danga bhadakne se rokte hain.',
    },
    {
      kind: 'answerBox',
      intro:
        'Samkaleen Bharat mein ek taraf dainik jeevan mein secularism badhne aur doosri taraf sadakon par public religion ke shandar pradarshan ke virodhabhas ko samajshastriya drishti se samjha ja sakta hai:',
      points: [
        'Rozmarra ki functional vyavaharikta: Market economy, metro train, hospital aur IT companies mein kaam karne ke liye jatiye aur dharamik bhedbhav ko chhodna sabki aarthik majboori hai.',
        'Jose Casanova ka deprivatization: Modern hone ka matlab yeh nahi ki dharam khatam ho gaya; dharam naye aatmavishwas ke sath sadakon aur sansad mein hissa lene aa gaya hai.',
        'Shehri akelepan ka ilaj: Bheed-bhare anjaan shahron mein lachar yuvak ko Kanwar Yatra ya Ganpati utsav jaise bade juloos aapsi dosti, pehchan aur collective effervescence dete hain.',
        'Milton Singer ka compartmentalization: Aadhunik middle class apne office mein bilkul scientific rehta hai aur sham ko ghar par poore vishwas ke sath aarti aur pooja karta hai.',
        'Chunavi polarization: Partiyan aur neta dharamik julooson ko sponsor karte hain taaki jatiyon ki aapsi ladai ko bhulakar ek vishal dharamik vote bank banaya ja sake.',
      ],
      conclusion:
        'Nishkarshatah, dainik secularization aur public religion aapas mein virodhi nahi balki modern Bharat ke do sathi hain, jahan aarthik pragmatism ke sath-sath sanskritik asmita ka pradarshan chal raha hai.',
    },
  ],
}
