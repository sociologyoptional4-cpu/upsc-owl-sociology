import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic3HiMindMap: MindMapData = {
  title: 'Topic 3 · Bharat Mein Mahilaon Ke Khilaf Hinsa',
  center: 'Mahila Hinsa Aur Patriarchy',
  subtitle: 'Structural Sidhhant • PWDVA 2005 Aur Marital Rape • POSH 2013 Aur Workplace • Digital Aur Dalit Feminism',
  branches: [
    {
      title: '1. Hinsa Ke Samajshastriya Sidhhant',
      color: 'lavender',
      thinkers: ['Sylvia Walby', 'Pierre Bourdieu', 'Johan Galtung', 'Sharmila Rege'],
      points: [
        'Walby ke 6 patriarchal dhanchon mein se ek: Purush hinsa mahilaon par kabza rakhne ka hathiyar hai',
        'Bourdieu ki Symbolic Violence: Mahilaon ko bachpan se sikhaya jata hai ki dabkar rehna hi sanskar hai',
        'Structural Hinsa (Galtung): Aarthik nirbharta aur zameen na hone se mahila majboor banti hai',
        'Dalit Feminist Standpoint: Dominant jaatiyan Dalit mahilaon par hinsa karke unki aawaz dabati hain',
      ],
    },
    {
      title: '2. Ghar Ke Andar Hinsa: PWDVA 2005 & Marital Rape',
      color: 'yellow',
      thinkers: ['Flavia Agnes', 'Kalpana Kannabiran', 'B.R. Ambedkar'],
      points: [
        'PWDVA 2005 ka badlav: Pehli baar gharelu hinsa ko civil kanoon mein aarthik aur maansik hinsa maana gaya',
        'Right to shared household: Pati ke makan mein rehne ka kanooni haq bina registry ke mila',
        'Marital rape ka vivaad: IPC 375 Exception 2 shaadi ke baad zabardasti ko rape nahi maanta',
        'Lagu karne mein kami: Protection Officers ki kami aur samjhauta (compromise) karane ka dabav',
      ],
    },
    {
      title: '3. Kaam Ki Jagah Par Hinsa: POSH Act 2013',
      color: 'mint',
      thinkers: ['Bhanwari Devi', 'Catherine MacKinnon', 'Nivedita Menon'],
      points: [
        'Vishaka case ka safar: Rajasthan ki saathin Bhanwari Devi ke balatkaar ke baad Supreme Court guidelines',
        'POSH 2013 ka dhancha: Har 10+ worker wali company mein Internal Complaints Committee (ICC) anivarya',
        'Shikayat na karne ka darr: Senior boss ke khilaf bolne par career kharab hone aur badnami ka darr',
        'Asangathit kshetra ki bebsi: 90%+ mahila majdooron ke liye district Local Committees sirf kagaz par hain',
      ],
    },
    {
      title: '4. Digital Daur Aur Intersectional Atyachar',
      color: 'pink',
      thinkers: ['Uma Chakravarti', 'Gopal Guru', 'Mary John'],
      points: [
        'Online misogyny: Social media par trolling, character assassination aur AI deepfakes ka aatank',
        'Jaati aur hinsa: Mathura, Khairlanji aur Hathras jaise cases jahan dominant jaatiyon ko police ka sahara mila',
        'Secondary victimization: Thano mein apmanit hona aur court mein gande sawalon ka saamna karna',
        'Carceral feminism ki seema: Sirf phansi ya jail badhane se nahi, aarthik aatmanirbharta se hinsa rukegi',
      ],
    },
  ],
}

export const topic3HiSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u15-02-social-transformation-challenges.webp',
    alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
    caption:
      'Poverty, Violence, Caste-Communal Strife & Literacy Gaps — Mahilaon ke khilaf hinsa ka visual saransh.',
  },
  {
    kind: 'md',
    body: `## Mahilaon Ke Khilaf Hinsa: Samajshastriya Aadhar

Aasaan shabdon mein samjho: Mahilaon ke khilaf hinsa kisi pagal ya akele aparaadhi ki achanak ki gayi galti nahi hai. Samajshastra yeh sikhata hai ki yeh purush-pradhan samaj (patriarchy) ka wo hathiyar hai jisse mahilaon ki aazadi, sharir aur kaam par kabza banaye rakha jata hai. 

Samajshastri [[thinker:Sylvia Walby]] ne patriarchy ke 6 structures bataye hain, jisme purush dwara ki gayi hinsa ek sansthagat dhabba hai jo mahilaon ko darr mein jeene par majboor karta hai. French samajshastri [[thinker:Pierre Bourdieu]] ne ise ==Symbolic Violence== kaha: bachpan se ladkiyon ko sikhaya jata hai ki chup rehna, sehna aur jhukna hi acchi aurat ke lakshan hain. Bharat mein is hinsa ke sath jaati aur dharm ka takrav bhi jud jata hai.

### Hinsa Ke Teen Bante Huye Morche

Aaj ke Bharat mein mahilaon ke khilaf hinsa teen bade dayron mein phail chuki hai:
1. **Niji Gharelu Dayra (Private Sphere)**: Gharelu hinsa, dahej ke liye hatya ya pratadna, aur marital rape, jise "parivar ki izzat" kehkar chup kara diya jata hai.
2. **Kaam Aur Sarvajanik Jagah (Public & Workplace)**: Sadak par chhedkhani, bus-metro mein ashleel harkatein, aur office mein boss dwara sexual favor mangna.
3. **Digital Dayra (Cyber Misogyny)**: Social media par gaali-galoj, deepfakes, bina marzi ke photo viral karna, aur aawaz uthane wali mahila patrakaron aur netriyon ko target karna.

| Hinsa Ka Kshetra | Kaisa Roop Dikhata Hai | Samajik Kaaran | Kanooni Pradhana |
| :--- | :--- | :--- | :--- |
| **Ghar Ke Andar** | Intimate partner violence, dahej hinsa | Pati ka malikana haq aur parivar ki bandish | PWDVA 2005, Section 498A |
| **Workplace** | Quid pro quo harassment, promotion ke badle dhabav | Office mein power hierarchy aur contract ka darr | POSH Act 2013 (Vishaka Guidelines) |
| **Sarvajanik Sadak** | Stalking, assault, jaati-aashrit balatkaar | Spatial control aur dominant jaati ka aatank | SC/ST Atrocities Act, BNS |
| **Digital Space** | AI deepfakes, trolling, doxxing | Online azaadi ka misuse aur mahila aawaz se chidh | IT Act 2000, Section 66E/67 |

### Dalit Feminist Standpoint: Jaati Aur Hinsa Ka Rishta

Samajshastri [[thinker:Sharmila Rege]] aur Gopal Guru ne ==Dalit Feminist Standpoint== diya. Unhone dikhaya ki gramin Bharat mein balatkaar aur sharirik hinsa sirf gender ka mamla nahi hai, balki dominant kisaan jaatiyon dwara Dalit samaj ko aukaat mein rakhne ka hathiyar hai.

Jab koi Dalit mazdoor zameen ka tukda mangta hai ya samman se baat karta hai, to gaon ki dominant jaati uski aawaz dabane ke liye Dalit mahilaon ko shikar banati hai. Mathura rape case (1972) se lekar Khairlanji (2006) aur Hathras (2020) tak ke mamle yeh saabit karte hain ki police aur thana bhi aksar upper-caste kanooni dhabbe ke sahare aparaadhiyon ko bachate hain.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Angle: Carceral Feminism Banam Structural Sudhar',
    body: 'UPSC ke answer mein "Carceral Feminism" (sirf phansi ki saza ya bhyankar police raj mangna) ki seemaon ko likho. Flavia Agnes ke mutabiq asal zaroorat mahilaon ko aarthik sahara, shelter homes, aur fast-track court dene ki hai, na ki sirf police ko arbitrary power dene ki.',
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1972',
        title: 'Mathura Rape Case',
        text: 'Thane mein tribal ladki ke balatkaar ke baad desh bhar mein pehla swatantra mahila andolan khada hua.',
      },
      {
        year: '1997',
        title: 'Vishaka Guidelines',
        text: 'Rajasthan ki saathin Bhanwari Devi gang-rape ke baad Supreme Court ne workplace par hinsa rokne ke niyam banaye.',
      },
      {
        year: '2005',
        title: 'PWDVA Kanoon',
        text: 'Gharelu Hinsa Roktham Kanoon 2005 ne pehli baar civil relief aur gharelu aarthik shoshan ko kanoon mein jagah di.',
      },
      {
        year: '2013',
        title: 'POSH Act Aur Justice Verma Committee',
        text: 'Nirbhaya aandolan ke baad POSH Act 2013 bana aur rape kanoon mein buniyaadi sudhar kiye gaye.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Gharelu Dayra: PWDVA 2005 Aur Marital Rape Ka Vivaad

Kayi dashakon tak gharelu hinsa ko sirf Section 498A ke tahat dahej pratha se jodkar dekha jata tha. Lekin agar kisi aurat ko roz maara-peeta jaye ya paisa na diya jaye bina dahej mangey, to uske paas koi kanooni rasta nahi tha.

==Protection of Women from Domestic Violence Act, 2005 (PWDVA)== ne ek krantikari badlav laya:
- **Hinsa Ki Vistrit Paribhasha**: Isme sharirik, mansik, aarthik aur verbal abuse sabhi ko gharelu hinsa maana gaya.
- **Civil Rights**: Mahila ko Protection Order aur "Right to Reside in Shared Household" mila—yani pati use ghar se bahar nahi phenk sakta chahe makan pati ke naam ho.
- **Protection Officers**: Mahilaon ki madad ke liye vishesh afsar tainaat kiye gaye.

Lekin kanooni vishleshak [[thinker:Flavia Agnes]] batati hain ki PWDVA ke Protection Officers ke paas na to budget hai aur na gaadi. Thano aur courts mein hamesha "parivar bachane" ke naam par aurat ko samjhauta (counseling) karke wapas usi zaalim pati ke paas bhej diya jata hai.

[[eg:Gramin ilaqon mein jab aurat thane jajati hai, to panchayat aur police use parivar ki izzat aur bacchon ke bhavishya ka dastaavej dikhakar shikayat wapas lene par majboor kar dete hain.]]

### Marital Rape Exception Ka Dhokha

Bharat ke kanoon mein sabse bhyankar patriarchal dhabba hai ==Marital Rape Exception== (IPC Section 375 Exception 2, jo naye kanoon mein bhi qayam raha). Is colonial kanoon ke mutabiq agar pati apni baaligh patni ke sath zabardasti bina uski marzi ke sharirik sambandh banata hai, to use balatkaar nahi maana jayega jab tak dono kanoonan alag na reh rahe hon.

Samajshastri aur vakeel [[thinker:Kalpana Kannabiran]] samjhati hain ki yeh kanoon aurat ko pati ki niji sampatti (property) maanta hai. Sarkar aur purush varg yeh tark dete hain ki agar marital rape ko jurm banaya to "Hindu vivah ki pavitrata" khatam ho jayegi, jo seedhe taur par mahila ke sharir par uske astitva ke adhikar ko nakarta hai.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Faujdari Kanoon (Section 498A)',
    rightTitle: 'Civil Relief Kanoon (PWDVA 2005)',
    rows: [
      {
        aspect: 'Mukhya Lakshya',
        left: 'Aparaadhi ko jail bhejna aur giraftari karana',
        right: 'Pariwar mein mahila ko suraksha, makan aur kharcha dilana',
      },
      {
        aspect: 'Hinsa Ka Dayra',
        left: 'Mukhyatatah dahej se judi kroorta tak seemit',
        right: 'Sharirik, mansik, aarthik aur bhashayi shoshan shamil',
      },
      {
        aspect: 'Makan Ka Adhikar',
        left: 'Ghar mein rehne ka koi kanooni adhikar nahi milta',
        right: 'Sajha makan mein rehne ka pakka adhikar (Residence Order)',
      },
      {
        aspect: 'Adalat Ki Prakriya',
        left: 'Police FIR, lambi chargesheet aur saalon ka trial',
        right: 'Magistrate dwara 60 din ke andar relief dene ka kanooni niyam',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Kaam Ki Jagah: POSH Act 2013 Aur Chuppi Ka Darr

Mahilaon ke padhai aur naukri mein aane se purush varg mein ek asuraksha paida hui. Rajasthan ki saathin [[thinker:Bhanwari Devi]] ke sath huye gang-rape ke baad 1997 mein Supreme Court ne Vishaka Guidelines banayi, jo 2013 mein jaakar ==POSH Act 2013 (Prevention of Sexual Harassment)== kanoon bana.

Is kanoon ke anusaar har aisi company jisme 10 ya zyada karmchari hain, wahan ek ==Internal Complaints Committee (ICC)== banani hogi jiski adhyaksh ek senior mahila hogi. Jahan 10 se kam karmchari hain ya asangathit kshetra hai, wahan zila star par ==Local Committee (LC)== hogi.

### Kaam Ki Jagah Par Mahilaayein Chup Kyon Rehti Hain?

Kanoon banne ke bavajood mahilaayein apne shoshak (tormentor) ke khilaf aawaz uthane se darti hain. Samajshastri iske chaar buniyaadi kaaran batate hain:
- **Power Ki Asamanta**: Harassment karne wala aamtaur par senior officer ya manager hota hai, jiske haath mein appraisal, promotion aur naukri hoti hai.
- **Career Khatam Hone Ka Darr**: Shikayat karne wali ladki ko "troublemaker" ya dramebaaz kehkar baki log alag-thalag kar dete hain.
- **Compromised ICC**: Kayi private companiyon mein ICC ke sadasya company ke brand ko bachane ke liye mamle ko daba dete hain.
- **Asangathit Kshetra Ki Bebasi**: Desh ki 90% se zyada mahila shramik asangathit kshetra (khet, eent-bhatta, maid, dukan) mein kaam karti hain, jahan na to koi ICC hai aur na koi kanoon sunne wala zila afsar.

[[eg:Bengaluru aur Tiruppur ke garment factories mein tailoring karne wali ladkiyan male supervisors ki badtameezi chupchap sehti hain, kyunki ek awaz uthane par unhe bina hisab ke naukri se nikaal diya jata hai.]]`,
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Galti Mat Karo: Sirf Sanskriti Ko Dosh Mat Do',
    body: 'Mahila hinsa ko sirf "anpadh gaon ki parampara" kehkar mat taalo. Aadhunik corporate office aur digital platforms par bhi purush dabdaba aur power asymmetry ke zariye naye dhang ki hinsa chalti hai.',
  },
  {
    kind: 'keyTerm',
    term: 'Symbolic Violence',
    meaning: 'Pierre Bourdieu ka concept jisme mahilaayein shoshan aur dabdabe ko apna sanskar ya kismat maan kar qubool kar leti hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Dalit Feminist Standpoint',
    meaning: 'Sharmila Rege aur Gopal Guru ka vishleshan jo dikhata hai ki kaise jaati aur gender milkar subaltern mahilaon par hinsa ko anjaam dete hain.',
  },
  {
    kind: 'keyTerm',
    term: 'Right to Shared Household',
    meaning: 'PWDVA 2005 ka pradhana jo mahila ko sasural ya sajha makan mein rehne ka kanooni adhikar deta hai.',
  },
  {
    kind: 'keyTerm',
    term: 'POSH Act 2013',
    meaning: 'Kaam ki jagah par mahilaon ke sath sexual harassment rokne aur ICC committee banane wala bharatiya kanoon.',
  },
  {
    kind: 'keyTerm',
    term: 'Marital Rape Exception',
    meaning: 'Bharatiya kanoon ka wo vivaadit niyam jo shaadi ke baad patni ke sath zabardasti ko rape ke dayre se bahar rakhta hai.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Yaad Rakho: Flavia Agnes Ka Quote',
    body: 'Flavia Agnes kehti hain: "Kanoon apne aap nahi chalte." Jab tak thanon ki patriarchal soch aur protection officers ki kami theek nahi hogi, kagazi kanoon beasar rahenge.',
  },
  {
    kind: 'answerBox',
    intro:
      'Mahilaon ke khilaf hinsa aur kanoon ki asafalta par ek shreshth samajshastriya model answer ke mukhya aayam:',
    points: [
      'Sylvia Walby aur Pierre Bourdieu ke hawaale se samjhao ki hinsa koi achanak ghatna nahi balki patriarchy ka sansthagat hathiyar aur symbolic violence hai.',
      'Sharmila Rege ke Dalit Feminist Standpoint se dikhao ki rural India mein sexual violence jaati dabdaba banaye rakhne ke liye istemal hota hai (Khairlanji, Hathras).',
      'PWDVA 2005 ne "shared household" ka civil adhikar diya, lekin protection officers ki kami aur zabardasti samjhauta karana iski badi kami hai (Flavia Agnes).',
      'Marital rape exception kanoon mein aurat ko pati ki niji property maan kar uski bodily integrity ko nakarta hai.',
      'POSH Act 2013 corporate power hierarchy aur career kho dene ke darr ke aage kamzor padta hai, jabki 90%+ asangathit mahila shramik isse poori tarah bahar hain.',
    ],
    conclusion:
      'Mahila suraksha ke liye sirf carceral feminism (jail-phansi) kaafi nahi; zaroorat hai aarthik aatmanirbharta, safe public spaces aur thane-court ke patriarchal mindset ko badalne ki.',
  },
]
