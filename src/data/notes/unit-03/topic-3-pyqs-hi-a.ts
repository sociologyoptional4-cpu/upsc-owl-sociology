import type { PyqAnswerItem } from '@/lib/notes/notebook-types'

export const topic3PyqsHiA: PyqAnswerItem[] = [
  {
    year: 2025,
    paper: 'P1',
    marks: 20,
    question: 'What is hypothesis? Critically evaluate the significance of hypothesis in social research.',
    theme: 'Hypothesis Role, Falsifiability & Grounded Theory Critique',
    intro:
      'Hypothesis do ya zyada variables ke beech ek aisa tentative aur testable prastav hai jiski sachai empirical sabooton se jaanchi jaati hai—yeh koi hawai tukka ya bina jaancha assumption nahi hai (Robert Dubin).',
    points: [
      'Focus aur operational clarity: Yeh bade samajik mudde ko saaf independent aur dependent variables (jaise education aur income) mein tod kar bekaar data jama karne se bachati hai.',
      'Theory aur field saboot ka pul: Durkheim ki Suicide aur Karl Popper ke falsification logic ke mutabik, hypothesis testing se purani theories verify, refine ya falsify hoti hain.',
      'Objectivity aur discipline: Shuru mein hi Null (H0) vs Alternative (H1) shartein tay karne se baad mein apni pasand ke kisse chunnne (cherry-picking) par rok lagti hai.',
      'Critical seema — confirmation bias aur tunnel vision: Pehle se tay hypothesis se zyada chipke rehne par researcher zameen ki nayi ya andekhi sachai dekhne se chook sakta hai.',
      'Exploratory research mein zaroori nahi: Barney Glaser aur Anselm Strauss ki Grounded Theory aur village ethnography bina fixed hypothesis shuru hoti hain taaki field se khud naye concepts niklein.',
    ],
    thinkers: 'Karl Popper, Robert Dubin, Émile Durkheim, Barney Glaser, Anselm Strauss',
    example:
      'Quantitative survey mein coaching pressure aur stress par hypothesis test hoti hai, par open Grounded Theory interviews parivar ke ansune dabav ko bahar laate hain.',
    conclusion:
      'Deductive aur quantitative research mein hypothesis ek anivarya compass hai, par qualitative khoj mein use rigid parda nahi banne dena chahiye.',
  },
  {
    year: 2025,
    paper: 'P1',
    marks: 20,
    question: 'What do you mean by reliability? Discuss the importance of reliability in social science research.',
    theme: 'Measurement Consistency & Credibility in Social Research',
    intro:
      'Reliability ka matlab hai kisi research tool, questionnaire ya scale ki consistent repeatability—yani ek jaisi halat mein baar-baar istemal karne par lagbhag ek jaisa natija milna.',
    points: [
      'Core matlab (Taraju ki misaal): Jaise sahi taraju baar-baar 70, 71, 69 kg batata hai aur 40 se 100 kg ke beech nahi uchhalta, waise hi reliable tool random errors kam karta hai.',
      'Replication aur peer audit: Comte aur Durkheim ke mutabik sociology ko science banane ke liye zaroori hai ki doosra researcher bhi usi tarike se wahi results cross-check kar sake.',
      'Samay ke saath tulna (Longitudinal clarity): Census ya NFHS ke fixed definitions se hi sociologists dasakon mein fertility rate ya gareebi ghatne ka sahi trend dekh paate hain.',
      'Inter-coder aur survey fairness: Saaf paribhashaon se alag-alag enumerators aur coders jaati, kamai ya prejudice ke aakde ek tarike se record karte hain.',
      'Zaroori savdhani — reliability validity ki guarantee nahi: Urban-biased IQ puzzle baar-baar consistent score (high reliability) de sakta hai, par woh gaon ke bache ki asli buddhimatta nahi naapta (low validity).',
    ],
    thinkers: 'Émile Durkheim, Auguste Comte, Alan Bryman, Norman Denzin, Robert K. Merton',
    example:
      'NFHS-4 aur NFHS-5 mein Bharat ke sex ratio ya Swachh Bharat shauchalay coverage ko compare karna standardized, reliable questions par hi tika hai.',
    conclusion:
      'Reliability social science ko empirical discipline aur comparability deti hai, par sachai pakadne ke liye validity aur triangulation ka saath zaroori hai.',
  },
  {
    year: 2022,
    paper: 'P1',
    marks: 20,
    question:
      'Explain the different types of non-probability sampling techniques. Bring out the conditions of their usage with appropriate examples.',
    theme: 'Purposive, Snowball, Quota, Convenience & Volunteer Sampling',
    intro:
      'Non-probability sampling mein population ke har vyakti ko chune jaane ka barabar ya maloom mauka nahi milta—yahan statistical generalisability ke bajaye speed, convenience aur mushkil groups tak pahunch par dhyan diya jaata hai.',
    points: [
      'Convenience sampling (Tez pilot study): Aasani se milne wale logon ko lena—jab budget kam ho ya classroom feedback chahiye ho, jaise apne hi online students ka survey karna.',
      'Volunteer / self-selection sampling (Quick opinion): Jab log khud form bharne aayein—jaise Karol Bagh mess food par 20 students, haalanki ismein zyada naraz ya utsahit log hi aate hain.',
      'Purposive / judgement sampling (Expert gehrai): Khaas jaankar logon ko jaanbujh kar chunna—jaise Gurgaon auto belt mein mazdoor union ke purane netaon ka case study interview.',
      'Snowball / chain-referral sampling (Chhupe samuday): Ek vishwaspatra vyakti se doosron ke reference lena—jab official list na ho, jaise ex-prisoners, undocumented migrants ya LGBTQ+ networks.',
      'Quota sampling (Bina frame analytical balance): Apne research ke hisab se fixed quota tay karna—jaise 20 ke sample mein kam se kam 5 sociology graduates ya 15 minority students lena.',
    ],
    thinkers: 'Alan Bryman, William Foote Whyte, Laud Humphreys, P.V. Young',
    example:
      'Delhi mein undocumented domestic workers par research kisi Voter List se nahi balki ek bharosemand worker ke reference (Snowball sampling) se hi mumkin hoti hai.',
    conclusion:
      'Poore desh par statistics laagu karne mein kamzor hone ke bawajood, exploratory fieldwork aur chhupe groups ke liye non-probability sampling behad zaroori hai.',
  },
  {
    year: 2022,
    paper: 'P1',
    marks: 20,
    question:
      'What is reliability? Explain the different tests available to social science researchers to establish reliability.',
    theme: 'Tests of Reliability: Test-Retest, Parallel, Inter-Rater & Split-Half',
    intro:
      'Reliability kisi measurement instrument ki stability aur internal consistency batati hai taaki alag samay, alag observer ya alag sawaalon ke baad bhi results dagmagayein nahi.',
    points: [
      'Test-Retest reliability (Time stability): Ek hi questionnaire ko kuch samay ke antar par usi group ko dobara dena aur scores match karna—stable traits ke liye fit, par yaad rehne ka asar ho sakta hai.',
      'Parallel / Alternate-Forms reliability (Equivalence): Ek hi mudde par alag shabdon wale do barabar test versions banana taaki log pichhla jawab rat na sakein.',
      'Inter-Rater / Inter-Observer reliability (Coder ekta): Jab do independent researchers classroom observation ya TV commercials mein gender roles score karein, tab unke natijon mein mel dekhna.',
      'Split-Half reliability (Scale santulan): Ek lambe Likert scale ke odd aur even sawaalon ko do hisson mein baant kar dono ke correlation ki jaanch karna.',
      'Internal consistency (Cronbach alpha): Composite scale ke sabhi items (jaise Bogardus-type prejudice items) ek hi concept naap rahe hain ya nahi yeh check karna—saath mein daily diaries aur triangulation rakhna.',
    ],
    thinkers: 'Émile Durkheim, Rensis Likert, Emory Bogardus, Alan Bryman, Norman Denzin',
    example:
      'Agar do alag coders Indian TV serials mein mahila aur purush screen-time ko barabar score dete hain, toh yeh high Inter-Rater reliability sabit karta hai.',
    conclusion:
      'T-P-I-S reliability tests ke saath saaf operational definitions aur staff training sociological data ko bharosemand banati hai.',
  },
  {
    year: 2020,
    paper: 'P1',
    marks: 20,
    question: 'Discuss the importance and source of hypothesis in social research.',
    theme: 'Functions & Origins of Sociological Hypotheses',
    intro:
      'Hypothesis do ya zyada variables ke beech aisa clear, testable prastav hai jiski jaanch empirical data se ki jaati hai—Robert Dubin ke mutabik yeh theory ko dikhne wale tathyon se jodne wala sabse nazdeeki hissa hai.',
    points: [
      'Mahatva — disha aur variable clarity: Yeh bhatkav rok kar IV aur DV saaf karti hai, sahi method chunti hai, aur batati hai ki kaunse saboot claim ko galat sabit karenge.',
      'Mahatva — theory nirman: Chahe hypothesis sahi nikle ya galat (Popper), testing se sociology ki samajh badhti hai—jaise Durkheim ne suicide stats se solidarity theory mazboot ki.',
      'Source 1 — Literature review aur purani studies: Amartya Sen aur Jean Drèze ke padhai-gareebi papers jaise shodh naye regional hypotheses paida karte hain.',
      'Source 2 — Theory se logical deduction aur pilot study: Marx ki alienation ya Weber ki rationalisation se deduction aur chhote pilot survey sawaal ko dhaar dete hain.',
      'Source 3 — Personal anubhav, intuition aur common sense: Rozmarra ki observation (jaise padhe-likhe logon ki behtar kamai dekhna) aur experts se charcha shuruati hunch deti hai.',
    ],
    thinkers: 'Robert Dubin, Émile Durkheim, Karl Popper, Amartya Sen, Jean Drèze',
    example:
      'Cotton belt mein kisan karz dekh kar aur agrarian studies padh kar researcher hypothesis bana sakta hai ki fasal bima ki kami kisan sankat badhati hai.',
    conclusion:
      'Theory, purane shodh aur zameeni anubhav se nikli saaf hypothesis research jigyasa ko disciplined sachai khoj mein badal deti hai.',
  },
  {
    year: 2019,
    paper: 'P1',
    marks: 20,
    question: 'Explain the probability sampling strategies with examples.',
    theme: 'Simple Random, Systematic, Stratified & Cluster Sampling',
    intro:
      'Probability sampling sampling frame ke har member ko chune jaane ka barabar ya maloom chance deti hai—jisse researcher ka bias hat jaata hai aur poore Universe par bharose ke saath niyam laagu kiye jaa sakte hain.',
    points: [
      'Simple Random Sampling (SRS): Sabko unique number dekar lottery ya random number se chunna (jaise 200 students mein se 10 chunna)—chhote homogeneous groups mein aasaan, par luck se chhote subgroups chhoot sakte hain.',
      'Systematic Random Sampling: Random start ke baad har n-th vyakti lena (jaise 200/10 ke interval par har 20th roll number)—operationally tez, jab tak list mein koi chhupa pattern na ho.',
      'Stratified Random Sampling: Population ko ek jaise strata (25% ladkiyan, 75% ladke ya age groups) mein baant kar anupat ke hisab se random chunna—SRS se kahin zyada representative jab demographic data pata ho.',
      'Cluster Sampling: Bade bhaugolik ilake ko natural clusters (gaaon, wards ya Lok Sabha seats) mein baant kar kuch clusters randomly chunna taaki travel kharch ghat sake.',
      'Multi-Stage Sampling: Cluster design ko kai charanon mein chalana—jaise Bharat ke 543 Lok Sabha kshetron mein se 15 chunna aur fir unke andar kuch polling booths par election survey karna.',
    ],
    thinkers: 'P.V. Young, W.G. Cochran, Émile Durkheim, Alan Bryman',
    example:
      'NFHS aur national election exit polls rajyon aur zilon mein multi-stage cluster sampling ke saath stratified household selection use karte hain.',
    conclusion:
      'Population ke failav aur jankari ke hisab se SRS, systematic, stratified ya multi-stage cluster chunna sociology ko accurate generalisability deta hai.',
  },
]