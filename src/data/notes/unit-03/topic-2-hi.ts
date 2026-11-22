import type { NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

import { topic2MindMapHi } from './topic-2-mindmaps'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const summary =
  'Sociological fieldwork mein questionnaires, attitude scales, interviews, observation, focus groups, social surveys, case studies, life histories aur nayi digital ethnography jaise tools use hote hain—har ek mein scale, kharch, ethics aur depth ka alag santulan hota hai.'

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p1-u03-01-quant-qual-sampling.webp',
    alt: 'Infographic contrasting quantitative surveys and sampling with qualitative ethnography and triangulation',
    caption:
      'Sahi data collection tool chunne ka matlab hai apne budget, literacy aur topic ki sensitivity ke hisab se surveys ya fieldwork ka santulan banana.',
    credit: 'UPSC OWL Studio · Paper 1 Unit 3 Visual 01',
  },
  {
    kind: 'md',
    body: `## Sahi Tool Ka Chunav: Koi Ek Method Har Jagah Best Nahi

Aasaan shabdon mein samjho: jaise aap cheenti ki lambai highway ke milestone se nahi naap sakte, waise hi research mein koi ek auzar har sawaal ke liye fit nahi hota. Tool ka faisla sample size, logon ki padhai-likhai, budget, samay aur mudde ki nazakat par hota hai. Bharat mein Census, NSS ya NFHS jaisi quantitative techniques poore desh ka trend batati hain, jabki gaon ethnography ya life history ghar aur jaati ke andar ki unsuni sachai samne laati hain.

## Questionnaires aur Attitude Scales

==Questionnaire== sawaalon ki ek structured list hoti hai jise respondent khud paper ya Google Form par bharta hai. **Closed-ended questions** (UPSC Prelims MCQ ki tarah) fixed options dete hain jisse ginti aasaan ho jaati hai, jabki **open-ended questions** (UPSC Mains ki tarah) khali jagah chhodte hain taaki vyakti apne shabdon mein gehari baat likh sake.

Questionnaire sasta hai, hazaron logon tak jaldi pahunchta hai, aur sexual health ya personal income jaise sharmile muddon mein privacy deta hai. Lekin iski badi kamiyan hain: bahut kam log form wapas bhejte hain, log bina padhe jaldi-jaldi har jagah Option B tick kar dete hain, confused sawaal par madad nahi milti, aur aage "kyun" poochhne ka mauka nahi hota.

- **Design ki 5 Savdhaniyan:** Har sawaal topic se juda ho; length na bahut lambi na bahut chhoti; bhasha aasaan rakho (Gurgaon factory mazdooron se "proletarian class consciousness" jaise bhari shabd mat poocho); jawab kisi ek taraf jhukane wale leading sawaal hatao; aur do alag mudde ek sawaal mein mat jodo. [[trap:Jaise ek hi sawaal mein "Kya aap SC, ST aur OBC reservation ka samarthan karte hain?" poochhna galat bundling hai, kyunki koi ek category ke haq aur doosri ke khilaf ho sakta hai.]]
- **Measurement Scales:** Bhavnaon aur bhedbhaav ko naapne ke liye ==Likert scale== (strongly agree se disagree tak) aur ==Bogardus social distance scale== (jaise doosri jaati ya dharm ke vyakti ko padosi, dost ya parivar mein shaadi ke liye apnane ki seema) use kiye jaate hain.

## Interviews: Structured, Semi-Structured aur Unstructured

Aasaan shabdon mein samjho: ==interview== do logon ke beech aamne-saamne, phone ya Zoom par hone wali baatcheet hai jahan sawaal samjhaya jaa sakta hai aur kam padhe-likhe logon se bhi gehara data milta hai. Iske teen roop hain:

- **Structured Interview:** Ghar-ghar jaane wale Census enumerators sabko ek hi sequence mein wahi sawaal poochhte hain—comparison aasaan, depth kam.
- **Unstructured Interview:** Bilkul UPSC Personality Test ki tarah koi fixed list nahi hoti; jawab ke hisab se agla sawaal nikalta hai, jisse jhooth pakadna aur mann ki baat jaanna aasaan hota hai.
- **Semi-Structured Interview:** Ek rough guide ke saath khuli baatcheet—jaise Arlie Hochschild ne *The Second Shift* mein 50 working couples aur 45 caregivers se baat karke ghar ke unpaid kaam ko samne laaya.

Lekin interview ek social interaction hai, isliye private baaton mein *haya* aati hai aur log samne wale ko khush karne ko jawab badal sakte hain. [[eg:Agar interviewer caste reservation par baat sunte hue chehra sikod le, toh aspirant uski pasand jeetne ke liye apni asli ray naram kar sakta hai.]] Ismein staff training aur coordination ka kharch bhi bahut aata hai.

| Technique | Sabse Fit Jagah | Mukhya Taakat | Sabse Bada Khatra |
| --- | --- | --- | --- |
| Questionnaire | Padhe-likhe bade groups | Sasta, tez aur high anonymity | Kam return rate, careless ticking |
| Structured Interview | Mixed literacy wale surveys | Ek jaisa comparable data | Gehari feelings chhoot jaana |
| Unstructured Interview | Nazuk mudde, gehare motives | Follow-up probing, jhooth pakadna | Interviewer bias, mushkil coding |
| Focus Group (FGD) | Consumer habits, shared norms | Group charcha se naye ideas | Tez bolne walon ka kabza |

## Observation: Zindagi ko Dekhna aur Naitik Uljhanein

Jahan surveys yeh batate hain ki log kya *kehte* hain, ==observation== yeh dikhata hai ki log asli zindagi mein kya *karte* hain. **Non-participant observation** mein researcher door baith kar ya webcam se bina hissa liye dekhta hai; wahin **participant observation** mein woh khud group ka hissa ban jaata hai—jaise Karol Bagh ke coaching batch mein student ban kar doston se parde ke peeche ki asli confusion sunna.

5–8 mahine chalne wali observation mein chhote group ke alawa poore desh par kaam nahi ho sakta, domestic violence ya suicide par seedhe use nahi kar sakte, aur researcher ka pehnava, mehenga joota, tilak ya topi group ka vyavahar badal sakta hai. Ismein chhah badi **naitik uljhanein (ethical dilemmas)** aati hain:

- **Pehchan Chhupana aur Informed Consent:** Sach chhupana bharose ka dhokha hai, par batane se ==Hawthorne effect== hota hai jismein log dikhawa karne lagte hain.
- **Gair-Kanooni Kaam aur Privacy:** Gang ya crime dekhte waqt kanoon ko batayein ya research privacy bachayein? Scientific transparency aur confidentiality mein takraav hota hai.
- **Going Native aur Emotional Alvida:** *Street Corner Society* mein William Foote Whyte ne mana ki woh non-participant observer bankar gaye the par gang leader ke itne kareeb aa gaye ki "non-observing participant" ban gaye, aur baad mein group chhodna dil todne wala hota hai. [[trap:Laud Humphreys ki Tearoom Trade (1970) galat research ki sabse badi misaal hai: public toilet mein watchman ban kar unhone logon ki gaadi ke number note kiye aur ghar jaakar jhoothi pehchan se interview liye.]]

## Ethnography, Gaon Studies aur Digital Visual Culture

*Ethnos* (log) aur *graphy* (likhna) se bana ==ethnography== mahinon tak kisi samuday mein rehkar uske riti-riwaz, jaati-bhed, kheti aur ghar-naksha likhne ka tarika hai. Malinowski ne ise Trobriand Islands mein mashhoor kiya, aur Bharat mein [[thinker:M.N. Srinivas]] ne Karnataka ke Rampura gaon se *Sanskritization* aur *Dominant Caste* diya, André Béteille ne Tanjore ke Sripuram mein alag jaati-mohallon ko map kiya, aur Verrier Elwin ne adivasiyon ke beech poora jeevan bitaya.

Aaj yahi fieldwork ==digital ethnography (netnography)== aur ==visual culture== (Sarah Pink; Robert Kozinets) mein badal raha hai. WhatsApp community groups, Instagram reels, memes, YouTube vlogs aur photo-elicitation se bikhre hue youth aur diaspora samaj kam kharch mein pakad mein aate hain. [[eg:Indian matrimonial portals ke algorithms aur Instagram par Dalit-feminist meme pages ki study dikhati hai ki digital ethnography kaise jaati aur gender ki nayi pehchan pakadti hai.]] Par ismein **digital divide** (gareeb aur rural bujurgon ka chhootna), Goffman jaisa curated online dikhawa, bots aur public-private chats ki consent ethics badi chunautiyan hain.

## Focus Group Discussions (FGDs) aur Researcher Influence Ghatana

==Focus Group Discussion== mein 5 se 15 target logon ko ek aaramdayak circle mein bithaya jaata hai taaki aapas ki natural baatcheet se samajik soch nikle (Sue Wilkinson; David Morgan; Frank Tonkiss ke online FGDs). [[eg:Baby-food par FGD mein maa (customer), bacha (consumer) aur Nani ya doctor (influencers) ek saath milkar dikhate hain ki parivar mein kharidne ka faisla kaise banta hai.]]

Lekin FGD mein tej bolne wale log shant logon ko daba sakte hain, gift hampers ki wajah se log jhoothi tareef kar sakte hain, aur moderator TV anchor ki tarah apni ray thop sakta hai. **Researcher influence kam karne ke upay:** neutral aur open guide rakho; non-judgemental moderator train karo jo sabko barabar mauka de; junior-boss ya sasur-bahu jaise power farak ko alag subgroups mein rakho; gift pressure ghato; reflexive notes aur co-moderator review karo.

## Social Surveys, Census, Case Studies aur Biographies

**Social survey** representative samples par statistical trends nikalta hai (NFHS, IHDS, Pew) jo policy banane aur samajik badlaav naapne mein madad karta hai. **Census** poore 100% desh ko cover karta hai—Bharat mein 1865–72 se shuru, 1881 se har 10 saal (1931 aakhri national caste census, 2021 delayed)—jo *Janaganana* se badhkar sex ratio, Swachh Bharat shauchalay, Ujjwala gas, Har Ghar Jal aur delimitation ka aadhar banta hai.

Wahin **case studies** kisi ek ghatna—jaise Gurgaon Hero Honda strike, Eileen Barker ka *Moonies* cult, ya Margaret Mead ki *Coming of Age in Samoa* (jisne teenage stress ko biology ke bajaye culture ki den sabit kiya)—se gehari samajh deti hain. Aur **biographies / life histories** mein W.I. Thomas aur Florian Znaniecki ne 750 personal khaton se *The Polish Peasant* likha, Robert Bogdan ne *Jane Fry* ki nazar se transsexuality samjhi, aur Maria Mies ne domestic violence survivors ko apni peeda ka structural kaaran samjhakar sashakt kiya.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Participant Observation',
    rightTitle: 'Non-Participant Observation',
    rows: [
      {
        aspect: 'Researcher ki Bhoomika',
        left: 'Group ka member ban kar rozmarra mein shamil hona',
        right: 'Door baith kar ya camera se bina dakhal dekhte rehna',
      },
      {
        aspect: 'Data ki Gehrai',
        left: 'Backstage raaz, bharosa aur ansune niyam milte hain',
        right: 'Sirf bahari dikhta vyavahar aur formal routine dikhta hai',
      },
      {
        aspect: 'Bias aur Khatra',
        left: 'Group badal sakta hai ya going native ho sakta hai (Whyte)',
        right: 'Kam dakhal, par dekhne se Hawthorne effect ho sakta hai',
      },
      {
        aspect: 'Naitik Chunauti',
        left: 'Covert jhooth, crime witness aur alvida kehne ka dard',
        right: 'Chhupe camera ya bina bataye nigrani mein privacy khatra',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Neutral Guide', text: 'Local bhasha mein khule aur bina jhukav wale sawaal banao' },
      { label: 'Safe Subgroups', text: 'Boss-junior ya bujurg-bahu jaisi power barabari alag rakho' },
      { label: 'Barabar Mauka', text: 'Tez bolne walon ko roko aur shant logon ko pyaar se jodo' },
      { label: 'Reflexive Audit', text: 'Co-moderator check aur gift pressure hata kar sach bachao' },
    ],
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1918–1928',
        title: 'Polish Peasant & Coming of Age in Samoa',
        text: 'Thomas-Znaniecki ne personal letters se biography badhayi; Margaret Mead ne Samoa case study se biological myth toda.',
      },
      {
        year: '1943–1952',
        title: 'Whyte Street Corner & Srinivas Rampura',
        text: 'Participant immersion ki seemayein aur Bharatiya gaon ethnography ki generative taakat samne aayi.',
      },
      {
        year: '1970–1981',
        title: 'Humphreys Ethics Alert & Oakley Interviews',
        text: 'Tearoom Trade ne covert research ki naitik seema tay ki; Ann Oakley ne dostana feminist interviews sikhaye.',
      },
      {
        year: '2010s–2020s',
        title: 'Netnography & Visual Digital Ethnography',
        text: 'Sarah Pink aur Robert Kozinets ne WhatsApp, memes, reels aur digital visuals par thick fieldwork badhaya.',
      },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Participant Observation',
    meaning:
      'Gehari fieldwork jismein researcher mahinon tak kisi samuday ke beech rehkar unke unwritten norms, backstage baatein aur rozmarra ka jeevan khud anubhav karta hai.',
    thinkerSlug: 'mn-srinivas',
  },
  {
    kind: 'keyTerm',
    term: 'Digital Ethnography (Netnography)',
    meaning:
      'Classic ethnography aur visual analysis ko online groups, WhatsApp chats, reels, memes aur digital culture ko samajhne ke liye apnana.',
  },
  {
    kind: 'keyTerm',
    term: 'Hawthorne Effect',
    meaning:
      'Logon ka yeh jaankar apna vyavahar badal lena ki koi unhe observe ya study kar raha hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Bogardus Social Distance Scale',
    meaning:
      'Ek scale jo naapta hai ki koi samuday doosri jaati, dharm ya nasal ke logon ko kitna kareeb apnane ko taiyar hai—padosi se shaadi tak.',
  },
  {
    kind: 'keyTerm',
    term: 'Life History / Biographical Method',
    meaning:
      'Kisi vyakti ki poori zindagi, khaton aur diaries ko padh kar samajhna ki bade samajik dhache aam insaan ki life ko kaise chalate hain.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: '2024–2022 UPSC Pattern: Ethics, FGD Bias aur Digital Culture',
    body: 'Naye PYQs practical fieldwork skills par poochte hain—FGD mein researcher influence ghatana (2022), participant observation ke ethics (2023), aur digital ethnography + visual culture (2024). Har jawab mein Indian misaalein (Karol Bagh coaching, Swiggy groups, Rampura-Sripuram) aur Whyte/Humphreys/Srinivas zaroor jodo.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Questionnaire aur Social Survey Ek Nahi Hain!',
    body: 'Questionnaire sirf sawaalon ka kagaz ya Google Form hai. Social survey poori research prakriya hai—sampling, data collection (questionnaire ya interview se), coding aur statistical analysis—jisse bade scale ke trends nikalte hain.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Questionnaire ki 3 Galtiyan Jo Marks Katwati Hain',
    body: 'Yaad rakho: (1) SC/ST/OBC reservation ko ek hi Yes/No sawaal mein bundle mat karo, (2) factory workers se bhari academic jargon mat poocho, aur (3) kisi ek taraf jhukane wale leading sawaal hamesha hatao.',
  },
  {
    kind: 'answerBox',
    intro:
      'Sociology mein data collection tools quantitative vistar (questionnaires, structured interviews, surveys, Census) se lekar qualitative gehrai (participant observation, FGDs, case studies, biographies, digital ethnography) tak faile hain.',
    points: [
      'Questionnaires aur social surveys kam kharch mein bada reach aur privacy dete hain (Likert/Bogardus scales ke saath), par low return rate aur bundled/leading wording se bachna zaroori hai.',
      'Semi-structured interviews aur FGDs family-influencer dynamics kholte hain, jahan neutral moderation aur safe subgroups se researcher bias roka jaata hai.',
      'Participant observation aur village ethnography (Malinowski, Srinivas, Béteille) backstage sach dikhate hain par covert identity, consent aur going native (Whyte, Humphreys) ke ethics jhelte hain.',
      'Digital ethnography aur visual culture memes aur online communities pakadte hain, haalanki digital divide aur online curation ki seema rehti hai.',
      'Case studies (Mead, Barker) aur biographies (Thomas-Znaniecki, Maria Mies) galat stereotypes todte hain aur marginalised logon ko awaaz dete hain.',
    ],
    conclusion:
      'Samajhdar researcher mudde, ethics aur resources ke hisab se in techniques ko triangulation se jod kar sabse bharosemand sach nikalta hai.',
  },
]

export const topic2Hi: TopicLangContent = {
  summary,
  mindMap: topic2MindMapHi,
  sections,
}