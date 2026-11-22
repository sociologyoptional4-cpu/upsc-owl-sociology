import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Unit 9.5 · Contemporary Trends in Kinship',
  center: 'Contemporary Trends in Kinship',
  subtitle: 'Transformation of Intimacy • Filiocentric & Live-In • Queer Kinship • Indian Marriage Shifts',
  branches: [
    {
      title: 'Intimacy & Late Modernity',
      color: 'lavender',
      thinkers: ['Anthony Giddens', 'Ulrich Beck', 'Zygmunt Bauman', 'Talcott Parsons'],
      points: [
        'Giddens: Pre-industrial pragmatic marriage -> Modern romantic love -> Late-modern Plastic Sexuality & Pure Love',
        'Contraceptives ne sex ko pregnancy se alag kiya (Plastic Sexuality); Pure Relationship tab tak jab tak dono khush',
        'Beck & Beck-Gernsheim ("Normal Chaos of Love") aur Bauman ("Liquid Love" ki kamzori)',
        'Parsons ka Divorce Paradox: West mein high divorce (30–50%) + high remarriage (~40%) shaadi ki unchi ahmiyat dikhata hai',
      ],
    },
    {
      title: 'Filiocentric & Demographic Shifts',
      color: 'yellow',
      thinkers: ['Philippe Ariès', 'Viviana Zelizer', 'Michael Young', 'Rhona Rapoport'],
      points: [
        'Filiocentric Family (2024 PYQ): child-centred ghar jahan bache ki padhai aur khushi se har faisla hota hai',
        'Late marriage (US avg: 30 mard, 28 aurat), ~40% US births outside marriage, ~15% childfree (DINK)',
        'Blended families (~15–16% US bache under 13), single-person homes (~30%), aur 70% elderly widows living alone',
        'Institutionalisation of Live-In: S. Khushboo, Indra Sarma, DV Act 2005 aur Uttarakhand UCC registration',
      ],
    },
    {
      title: 'Queer Kinship & Same-Sex Debate',
      color: 'mint',
      thinkers: ['Judith Butler', 'Michel Foucault', 'Jeffrey Weeks', 'Kath Weston'],
      points: [
        'Foucault (History of Sexuality) & Judith Butler (Queer Theory vs Heteronormativity); Kinsey & Bagemihl (450+ species)',
        'Queer Kinship (2025 PYQ): Jeffrey Weeks & Kath Weston ("Chosen Families"), Sasha Roseneil (friendship-intimacy blur)',
        'India safar: IPC Sec 377 (1860) -> Naz Foundation (2009/10) -> Koushal (2013) -> Puttaswamy -> Navtej Johar (2018) -> Supriyo (2023)',
        'Indian scholars: Shakuntala Devi (1977), Ruth Vanita & Saleem Kidwai, Suparna Bhaskaran, Maya Sharma, Ashley Tellis',
      ],
    },
    {
      title: 'Indian Marriage & Across-Region',
      color: 'pink',
      thinkers: ['Irawati Karve', 'I.P. Desai', 'Amrita Pande', 'Janice Raymond'],
      points: [
        'Indian marriage trends (2025 PYQ): late marriage, 2-day rituals, Shaadi.com, "arranged with a difference", sologamy',
        'Across-Region Marriages (2020 PYQ): North-South zone blending vs rural bride trafficking (Paro / Molki brides)',
        'ART & Surrogacy: commercial shoshan (>70% housemaids — Raymond, Sarojini & Das) vs agency (Pande) & Surrogacy Act 2021',
        'Transnational "Gulf wives" female-headed homes, virtual WhatsApp kinship, aur low divorce (<3–5%)',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u09-02-contemporary-kinship-trends.webp',
    alt: 'P1 Unit 9 infographic: Contemporary Trends in Kinship — Late-Modern Shifts in Intimacy & Domestic Form',
    caption:
      'Late modernity mein kinship aur intimacy janm-bhar ke kathor bandhanon se nikal kar plastic sexuality, filiocentric democracy, live-in relationships aur queer chosen families ki taraf badh rahe hain.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 9 Visual 02',
  },
  {
    kind: 'md',
    body: `## Aaj ke Daur mein Intimacy, Marriage aur Kinship Kaise Badal Rahe Hain?

Aasaan shabdon mein samjho: sadiyon tak shaadi aur rishtedari ek tay-shuda script par chalti thi — kam umar mein apni hi jaati aur kshetra mein shaadi karo, chahe khushi mile ya na mile zindagi bhar nibhao, aur ghar mein buzurg pita ka har hukm maano. Lekin pichhle 50 saalon mein **women’s education, financial independence, contraceptives aur IVF/surrogacy (ART), Supreme Court ke faislon aur internet/social media** ne West se lekar Bharat tak is script ko poori tarah badal diya hai.

UPSC ne is ek topic se **12 PYQs** poochhe hain (sirf 2025 mein hi 3 sawaal!). Chalo ek-ek karke paanch sabse bade contemporary trends ko bilkul saaf bhasha mein samjhein.

## 1. Anthony Giddens: Transformation of Intimacy, Plastic Sexuality aur Pure Love

Apni mashhoor kitab *The Transformation of Intimacy* (1992) mein [[thinker:Anthony Giddens]] ne dikhaya ki insani pyar, sex aur shaadi ka itihas teen dauron se guzra hai:

- **Stage 1 — Pre-Industrial Pragmatic Marriage:** Kheti, suraksha, rasoi aur vansh aage badhane ki vyavaharik (pragmatic) zaroorat ke liye parivaar dwara tay ki gayi shaadi.
- **Stage 2 — Modern Industrial "Romantic Love":** 19th–20th century ke novels aur filmon (West ke "knight in shining armour" se lekar Bharat mein Shah Rukh Khan ki romantic filmon tak) ne ek anokhe "soulmate" (sacche pyar) ka sapna dikhaya jo janm-bhar saath rahe.
- **Stage 3 — Contemporary ==Plastic Sexuality== aur ==Pure Relationships==:** Jab modern contraceptives (birth-control pills, condoms) aur ART aaye, toh insani itihas mein pehli baar **sexual intercourse aur pregnancy (reproduction) ka biological link toot gaya!** Sex ab **"plastic"** (lachila, mouldable, individual choice par tika) ban gaya — jisse premarital dating, open relationships, friends-with-benefits aur same-sex intimacy ko azaadi mili. Saath hi shaadi ab janm-janmantar ki majboori nahi balki **Pure Relationship** ban gayi — yani ek aisa rishta jo tab tak hi chalta hai jab tak dono partners ko usse emotional khushi aur barabari ka samvad milta hai (jise [[thinker:Zygmunt Bauman]] ne *Liquid Love* aur [[thinker:Ulrich Beck]] ne *The Normal Chaos of Love* kaha).

| Historical Daur (Giddens) | Rishte ka Mukhya Aadhar | Pramukh Sociological Lakshana |
| --- | --- | --- |
| Pre-Industrial Samaj | Pragmatic Zaroorat & Alliance | Aarthik suraksha, kheti aur santan ke liye parivarik gathbandhan |
| Modern Industrial Samaj | Romantic Love ("Soulmate") | Novels aur cinema se bana ideal gender archetype aur lifelong bond |
| Contemporary Late Modernity | Plastic Sexuality & Pure Love | Contraceptives se sex aur pregnancy alag; conditional emotional rishta |

## 2. Filiocentric Family (2024 PYQ), Demographic Shifts aur Parsons ka Divorce Paradox

2024 mein UPSC ne ek behad interesting sawaal poochha: *Modern families sirf nuclear aur neolocal hi nahi, balki ==Filiocentric== (child-centred / बाल-केंद्रित) bhi kyun ban gayi hain?* Purane joint parivaar mein satta sabse buzurg mard (patriarch) ke paas hoti thi aur bachon ko chupchaap badon ki baat manni padti thi. Aaj teen kaaranon se **bacha (child) poore parivaar ka kendra (centre)** ban gaya hai:

- **Modern Parivaar Filiocentric Kyun Hain? (2024 PYQ):** (1) **Low Fertility & "Priceless Child" ([[thinker:Viviana Zelizer]]):** Jab couples ke paas 5–6 ke bajaye sirf 1 ya 2 bache hote hain, toh bacha aarthik mazdoor nahi balki emotionally anmol (*priceless*) ban jaata hai; (2) **Democratisation of Parent-Child Relations:** Pehle pitaji ka transfer hota tha toh parivaar ko saaman ki tarah le jaate the; aaj pitaji dining table par baith kar apne bache ("John/Aarav") ko pyar se manate hain ki naye shehar aur naye school mein kaise adjust karenge; (3) **Child-Driven Consumption & Residence ([[thinker:Philippe Ariès]]):** Aaj couple apna neolocal flat kahan lega, kaun si gaadi kharidega aur weekend par kahan jayega — sab bache ke school, coaching aur khushi ke hisab se tay hota hai!
- **Developed World ke Demographic Shifts:** US Census data ke mutabik first marriage ki average age badh kar **mardon ke liye 30 saal aur auraton ke liye 28 saal** ho gayi hai (jisse premarital sex dating ke zariye institutionalise ho gaya hai). US mein **~40% bache unmarried mothers** ke ghar paida ho rahe hain, **~15% auratein (age 40–44) voluntarily childfree (DINK)** rehti hain, **single-person households ~29–30%** tak pahunch gaye hain (jisse personal care industry aur labour mobility badhi par loneliness bhi badha), aur **65+ umar ki ~70% vidhwayein (widows) aaj pension aur welfare state ke dum par akele rehti hain** (jo 1910 mein sirf 12% thin).
- **[[thinker:Talcott Parsons]] ka Divorce Paradox:** West mein divorce rate **30% se 50%** hai jabki Bharat mein **3% se 5% se bhi kam**. Kya iska matlab West mein log shaadi ki izzat nahi karte? Parsons ne iska ulta samjhaya: **high divorce rate dikhata hai ki log shaadi se bahut zyada emotional khushi ki umeed rakhte hain** (aur jab umeed poori nahi hoti — **Edmund Leach ka overloaded circuit** — toh woh behtar partner dhundhne ke liye divorce lete hain, jiska saboot Pew Research ka **~40% remarriage rate** aur **~15–16% US children in blended families** hai!). Iske mukable Bharat mein kam divorce rate kai baar **"Empty Shell Marriages"** (sirf naam ki shaadi jahan log samaj ke darr ya paise ki majboori mein ghut-ghut kar saath rehte hain) ko chhupata hai.

## 3. Institutionalisation of Live-In Relationships aur Judicial Interventions (2019 & 2014 PYQs)

==Institutionalisation of Live-In Relationships== ka kya matlab hai? Jab bina shaadi kiye saath rehna (unmarried cohabitation — US mein ~7% adults aur Bharat ke metro shehron mein badhta trend) ek chhupe hue "paap" ya deviance se nikal kar **samaj, bajar aur kanoon dwara pehchana gaya ek niyamit (regulated) arrangement ban jaaye jisme partners aur bachon ke kanooni adhikar tay hon**, toh use *institutionalisation* kehte hain.

Bharat mein Supreme Court aur Parliament ne Article 21 (Right to Life, Dignity & Privacy) ke tahat live-in relationships ko institutionalise karne mein krantikari bhumika nibhayi hai:

- **Protection of Women from Domestic Violence Act (PWDVA, 2005):** Section 2(f) mein **"relationship in the nature of marriage" (live-in relationship)** mein rehne wali mahila ko bhi patni ki tarah domestic violence se suraksha, ghar mein rehne ka haq aur maintenance (guzara-bhatta) diya gaya.
- **Supreme Court ke Landmark Judgments:** *Lata Singh v. State of UP (2006)* aur *S. Khushboo v. Kanniammal (2010)* mein SC ne saaf kaha ki do adult logon ka marzi se live-in mein rehna Article 21 ka fundamental right hai aur yeh koi apradh nahi hai. *Tulsa v. Durghatiya (2008)* aur *Bharatha Matha (2010)* mein SC ne **lambe live-in relationship se paida hue bachon ko legitimate santan maan kar paitrik sampatti mein barabar inheritance ka haq** diya. *Indra Sarma v. V.K.V. Sarma (2013)* mein court ne genuine long-term domestic live-in aur casual relations ka farak tay kiya, aur haal hi mein **Uttarakhand Uniform Civil Code (UCC, 2024)** ne live-in relationships ka official government registration anivarya karke ise kanooni sanstha ka roop de diya!

## 4. Queer Kinship, Same-Sex Marriages aur Population Dynamics (Do 2025 PYQs!)

2025 ke UPSC Mains mein is hisse se do seedhe sawaal aaye: (1) *Queer kinship traditional kinship system ko kaise challenge karta hai?* aur (2) *Same-sex marriages Bharat ke population dynamics ko kaise prabhavit karte hain?*

- **Sociological & Scientific Theory ([[thinker:Michel Foucault]], [[thinker:Judith Butler]], [[thinker:Alfred Kinsey]]):** Apni kitab *The History of Sexuality* mein Foucault ne dikhaya ki 18th–19th century se pehle West mein homosexuality ko alag bimari nahi maana jaata tha; baad mein police ne ise crime aur 1860s ke psychiatrists ne ise mental disorder bana diya. 1990s mein [[thinker:Judith Butler]] (*Gender Trouble*) ki **Queer Theory** ne ==Heteronormativity== (yeh manna ki sirf mard-aurat ka heterosexual rishta hi kudrati aur sahi hai) ko challenge kiya aur dikhaya ki gender aur sexuality fluid hain. **Dr. Alfred Kinsey** (1948/1953 reports) ne paya ki 46% males ne dono sexes ke prati aakarshan mehsoos kiya aur 10% kam se kam 3 saal tak exclusively homosexual rahe; aur biologist **Bruce Bagemihl** ne **450 se zyada animal species** mein homosexual behaviour darj kiya (Bharat mein bhi Khajuraho, Ajanta-Ellora, Vatsyayana ke *Kama Sutra* mein iska zikr hai — homophobia Bharat ki parampara nahi balki 1860 ke British Victorian **IPC Section 377** ki den thi!).
- **Queer Kinship Traditional Kinship ko Kaise Challenge Karta Hai? (2025 PYQ — [[thinker:Jeffrey Weeks]], [[thinker:Kath Weston]], [[thinker:Sasha Roseneil]]):** Traditional kinship (Murdock, Karve) **khoon (blood), heterosexual marriage, biological procreation aur gendered division of labour** par tiki thi. Queer kinship in chaaron stambhon ko hila deta hai: (1) **"Families We Choose" / Chosen Families** (Jeffrey Weeks, Kath Weston): jab biological maa-baap queer bache ko ghar se nikaal dete hain, tab supportive dost, partners aur community milkar bina khoon ke rishte wala "chosen family" banate hain; (2) **Sex, Marriage aur Procreation ko alag karna** (adoption, IVF aur surrogacy ke zariye); (3) **Parsons ke Expressive-Instrumental gender binary ko todna** (dikhana ki do maayein ya do pita bhi bache ko poora pyar aur parvarish de sakte hain); aur (4) **Friendship aur Romantic Intimacy ki deewar mitana** (Sasha Roseneil).
- **Bharat mein LGBT Movement aur Legal Safar:** 1977 mein **Shakuntala Devi** ki pehli kitab *The World of Homosexuals*, 1990s ke LPG reforms, satellite TV va diaspora (**Suparna Bhaskaran**), queer sahitya (**Ruth Vanita & Saleem Kidwai**), Deepa Mehta ki film *Fire* (1996) aur internet safe spaces ne andolan ko aage badhaya — wahin **Maya Sharma** ne poor working-class lesbians par research karke "ameeron ki bimari" wale myth ko toda, aur **Ashley Tellis** ne movement ko sirf elite court battles tak simatne aur caste/class bhoolne par critique kiya. Kanooni safar: **IPC Sec 377 (1860)** -> **Delhi HC Naz Foundation (2009/2010)** -> **SC Suresh Koushal recriminalisation (2013)** -> **Puttaswamy Privacy Judgment (2017)** -> **Navtej Singh Johar permanent decriminalisation (2018)** -> **Supriyo v. Union of India (2023)** (jahan SC ne queer dignity aur safety ko maana, par marriage aur joint adoption ka kanoon Parliament par chhoda).
- **Same-Sex Marriages aur Population Dynamics in India (2025 PYQ):** Critics (jaise 2023 mein 20+ retired High Court judges ka khula patra) darate hain ki same-sex marriage se reproduction ruk jayega, depopulation hoga, bache ko dual-gender parenting nahi milegi aur STDs/HIV badhenge (NACO data: 25 lakh official MSM mein 4.4% HIV prevalence vs 2.6% female sex workers). Lekin sociological demography is darr ko kharij karti hai: (1) Bharat ~144 crore aabadi ke saath duniya mein #1 hai aur yahan TFR (NFHS-5 mein 2.0) auraton ki shiksha, shehrikaran aur contraceptives se ghata hai, homosexuality se nahi; (2) Gay ya lesbian vyakti ko zabardasti heterosexual shaadi mein dhakelne se bache nahi badhte balki do zindagiyan **"empty shell marriage"** mein barbad hoti hain; (3) Same-sex couples ko marriage aur **adoption right** dene se Bharat ke laakhon anath (orphan) bachon ko parivaar milega (demographic dividend), stable monogamous relationship se HIV/STD ghatenge, aur queer talent ka videsh palayan (brain drain) rukega!

## 5. Indian Marriage ke Recent Trends (2025 PYQ) aur Across-Region Marriages (2020 PYQ)

Aaj Bharatiya shaadiyon mein kya naye trends aa rahe hain, aur inter-regional shaadiyon ka kinship par kya asar padta hai?

- **Indian Marriage ke Recent Trends vs Traditional Practices (2025 PYQ):** (1) **Late marriage aur female autonomy**; (2) **"Arranged marriages with a difference"** (maa-baap aur *Shaadi.com* jaati/gotra dekhte hain par ladka-ladki milkar baat karte hain aur veto power rakhte hain); (3) **2-Day Condensed & Commercialised Rituals** (7 din ki gaon ki shaadi ab 2 din ke destination resort event, haldi-mehendi-sangeet combo aur pre-wedding shoot mein badal gayi); (4) **Widening circle of endogamy** (sub-castes ke beech shaadi) ke saath inter-caste, court marriages, **Sologamy** (khud se shaadi — jaise Gujarat mein Kshama Bindu), **DINK/childfree couples**, **instrumental visa marriages**, **house husbands** (Tamil Nadu) aur **pet-inclusive families**; (5) **Conjugal bond ki jeet** (pati-patni ka rishta ab joint family ke filial/fraternal bond se upar aa gaya hai, jisse kai baar buzurgo ko akele rehna padta hai).
- **Across-Region Marriages ka Indian Kinship par Asar (2020 PYQ):** Iske **do bilkul alag class dimensions** hain: (A) **Urban Professional Inter-Regional Marriages:** Jab IT/corporate hubs (Bengaluru/Pune) mein North Indian aur South Indian youth shaadi karte hain, tab **Irawati Karve ke Northern aur Southern kinship zones ka sangam (blending)** hota hai — rigid 4-gotra ya cross-cousin rules dhile padte hain, bilateral aur neolocal parivaar banta hai, aur hazaron meel door baithe rishtedar WhatsApp virtual kinship se judte hain; (B) **Rural Distress Cross-Region Marriages ("Paro" ya "Molki" Brides — Ravinder Kaur, Prem Chowdhry):** Haryana, Punjab aur Western UP jaise kharab sex-ratio wale rajyon mein jab gareeb/kisan ladkon ko local dulhan nahi milti, toh woh Assam, Bengal, Bihar ya Odisha ke gareeb parivaron se paise dekar dulhan (*Paro/Molki*) kharid kar laate hain — jahan bhasha, khan-pan aur mayke ke sahare (fictive brothers) se kati yeh auratein bhari patriarchal shoshan aur isolation jhelti hain!`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1860 & 1977',
        title: 'Colonial IPC Sec 377 aur Shakuntala Devi ki Kitab',
        text: 'Angrezon ne 1860 mein Sec 377 lagaya; 1977 mein Shakuntala Devi ne "The World of Homosexuals" likh kar decriminalisation ki pehli maang ki.',
      },
      {
        year: '1992',
        title: 'Anthony Giddens — The Transformation of Intimacy',
        text: 'Contraceptives se janmi "plastic sexuality" aur barabari par tike conditional "pure relationships" ka siddhant diya.',
      },
      {
        year: '2005–2013',
        title: 'Bharat mein Live-In Relationships ka Institutionalisation',
        text: 'Domestic Violence Act 2005, S. Khushboo (2010), Tulsa aur Indra Sarma (2013) ne live-in partners aur unke bachon ko kanooni haq diye.',
      },
      {
        year: '2009–2018',
        title: 'Naz Foundation se Navtej Singh Johar Landmark Faisla',
        text: 'Delhi HC (2009/10) ne Sec 377 hataya, Koushal (2013) ne palta, aur aakhirkar SC ne Navtej Johar (2018) mein homosexuality ko decriminalise kiya.',
      },
      {
        year: '2021',
        title: 'Surrogacy (Regulation) Act, 2021',
        text: 'Gareeb mahilaon (>70% housemaids) ke shoshan ko rokne ke liye commercial surrogacy par ban lagaya aur sirf altruistic surrogacy allow ki.',
      },
      {
        year: '2023–2024',
        title: 'Supriyo Same-Sex Marriage Hearing & UCC Live-In Rule',
        text: 'SC ne Supriyo case (2023) mein marriage equality par sunwai ki; Uttarakhand UCC (2024) ne live-in registration ko kanooni roop diya.',
      },
    ],
  },
  {
    kind: 'compare',
    leftTitle: 'Traditional Kinship & Marriage Vyavastha',
    rightTitle: 'Contemporary Late-Modern & Queer Kinship Trends',
    rows: [
      {
        aspect: 'Intimacy ka Aadhar (Giddens)',
        left: 'Parivarik dharma, vansh parampara aur atoot Sanskara',
        right: 'Plastic sexuality (reproduction se azaad) aur conditional Pure Relationship',
      },
      {
        aspect: 'Ghar ki Satta ka Kendra',
        left: 'Patriarchal, buzurg-kendrit, filial aur fraternal bonds upar',
        right: 'Conjugal symmetry, neolocal residence aur Filiocentric (child-centred) ghar',
      },
      {
        aspect: 'Cohabitation & Legitimacy',
        left: 'Premarital sex aur bina shaadi saath rehne par sakt samajik taboo',
        right: 'Institutionalised live-in relationships (DV Act 2005, SC judgments, UCC 2024)',
      },
      {
        aspect: 'Kinship ka Nirman',
        left: 'Sirf heteronormative blood (consanguineal) aur marriage (affinal) rishte',
        right: 'Queer "Chosen Families" (Weeks/Weston), ART/IVF aur blended step-families',
      },
      {
        aspect: 'Kshetra aur Spatial Ghera',
        left: 'Strict caste endogamy aur Irawati Karve ke regional zone rules',
        right: 'Across-region marriages (IT couples & rural Molki brides) + WhatsApp virtual kin',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Plastic Sexuality & Pure Relationship (Anthony Giddens)',
    meaning:
      'Plastic sexuality woh sexuality hai jo contraceptives ke zariye pregnancy ki majboori se azaad ho gayi hai; Pure Relationship woh rishta hai jo sirf tab tak chalta hai jab tak dono partners ko emotional santushti milti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Filiocentric Family (2024 PYQ)',
    meaning:
      'Aadhunik nuclear aur neolocal parivaar ka woh swaroop jahan ghar ka budget, shehar/makan ka chunav aur dining-table ke democratic faisle bache (child) ki padhai aur khushi ke aas-paas ghoomte hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Heteronormativity & Chosen Families (Judith Butler, Jeffrey Weeks)',
    meaning:
      'Heteronormativity woh soch hai jo sirf mard-aurat ke rishte ko natural maanti hai; Chosen Families (Weeks, Kath Weston) queer logon dwara khoon ke rishtedaron ke bahar doston aur partners se banaya gaya parivaar hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Institutionalisation of Live-In Relationships',
    meaning:
      'Woh socio-legal prakriya jiske tahat bina shaadi saath rehne wale couples ko samajik pehchan, bachon ki legitimacy aur kanooni suraksha (DV Act 2005, S. Khushboo 2010, UCC 2024) milti hai.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2025 ke Teeno Latest PYQs ko Likhne ka Topper Blueprint!',
    body: '2025 mein is topic se 3 sawaal aaye: (1) "Queer kinship challenging traditional kinship" mein Murdock/Lévi-Strauss ke blood-heteronormative model ke saamne Judith Butler, Jeffrey Weeks & Kath Weston ("Chosen Families") aur Sasha Roseneil likho; (2) "Same-sex marriage & population dynamics" mein depopulation myth ko NFHS-5 (TFR 2.0 education/contraception se ghata hai) se kato, aur Parsons ke empty-shell marriages, NACO MSM health formalisation va orphan adoption ke fayde dikhao; (3) "Recent Indian marriage trends" mein arranged-with-a-difference, 2-day commercialised rituals, across-region marriages, sologamy, DINKs aur live-in institutionalisation likho.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Zaroori Points: Across-Region Marriages ke 2 Classes & Surrogacy Act 2021',
    body: '1. 2020 ke "Across-Region Marriage" PYQ mein hamesha DONO varg likho: (a) Urban IT/corporate love marriages jo Karve ke North-South zones ko blend karti hain, aur (b) Rural distress cross-region marriages (Haryana/Punjab mein kharab sex-ratio ki wajah se Assam/Bihar/Bengal se kharidi gayi "Paro/Molki" dulhanein — Ravinder Kaur). 2. Surrogacy par Janice Raymond ("reproductive objects") aur Amrita Pande (agency) ke saath Surrogacy (Regulation) Act 2021 (commercial ban, only altruistic allowed) zaroor mention karo.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Indian LGBT Movement & Legal Milestones ki Ungliyon par Yaad Rehne Wali List',
    body: 'Kanoon: 1860 IPC Sec 377 -> 2009/10 Delhi HC (Naz Foundation) -> 2013 SC (Suresh Koushal) -> 2017 Puttaswamy (Privacy) -> 2018 Navtej Singh Johar (Decriminalised) -> 2023 Supriyo (Marriage equality hearing). Scholars: Shakuntala Devi (1977), Ruth Vanita & Saleem Kidwai, Suparna Bhaskaran (diaspora/TV), Maya Sharma (working-class lesbians), Ashley Tellis (caste/class critique).',
  },
  {
    kind: 'answerBox',
    intro:
      'Contemporary kinship aur marriage janm-aadharit kathor bandhanon se nikal kar individual choice, gender democratisation, reproductive technology aur kanooni adhikaaron ke naye daur mein pravesh kar chuke hain.',
    points: [
      'Intimacy ka badlaav (Anthony Giddens): Contraceptive "plastic sexuality" aur conditional "pure relationships" (saath hi Bauman ka Liquid Love aur Parsons ka divorce-remarriage paradox) ne aapsi rishton ki shartein badal di hain.',
      'Filiocentric aur Diverse Households: Modern nuclear aur neolocal ghar ab democratic aur child-centred (filiocentric — Ariès, Zelizer) ban gaye hain, saath hi single-person (~30%), DINK aur blended (~15–16% US children) forms badhe hain.',
      'Live-In Relationships ka Institutionalisation: Supreme Court judgments (S. Khushboo 2010, Indra Sarma 2013, Tulsa child inheritance), Domestic Violence Act (2005) aur UCC registration ne Bharat mein live-in ko kanooni dhancha diya hai.',
      'Queer Kinship aur Population Dynamics: Judith Butler (heteronormativity critique) aur Jeffrey Weeks/Kath Weston ("Chosen Families") ne kinship ko biology se azaad kiya hai; same-sex marriage se depopulation nahi hota balki orphan adoption aur mental/sexual health ko bal milta hai.',
      'Indian Marriage & Across-Region Trends: "Arranged marriages with a difference", 2-day commercial destination rituals, Surrogacy Act 2021 aur across-region marriages (urban zone-blending + rural distress "Molki" brides — Ravinder Kaur) Bharat ki badalti tasveer dikhate hain.',
    ],
    conclusion:
      'Kinship aur parivaar khatam nahi ho rahe hain, balki "parivaar kaun hai" ki paribhasha aur zyada samaveshi (inclusive), democratic aur मानवीय banti jaa rahi hai.',
  },
]

export const topic5Hi: TopicLangContent = {
  summary:
    'Contemporary kinship trends ka sampoorna vishleshan: Anthony Giddens ki plastic sexuality aur pure relationships, Parsons ka divorce paradox, filiocentric (child-centred) nuclear families, Bharat mein live-in relationships ka judicial institutionalisation, queer kinship aur same-sex marriage debates (Foucault, Butler, Weeks, Weston, Navtej Johar se Supriyo tak), ART/Surrogacy Act 2021 aur across-region marriages.',
  mindMap,
  sections,
}