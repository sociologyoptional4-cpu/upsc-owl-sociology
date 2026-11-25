import type { StarterBlogSpec } from './types'

export const STARTER_BLOGS_PART_2: StarterBlogSpec[] = [
  {
    slug: 'max-weber-bureaucracy-ideal-types-upsc',
    title: 'Max Weber: Bureaucracy, Ideal Types aur Iron Cage of Rationality',
    excerpt: 'UPSC IAS/IPS administration ke context mein Max Weber ke Ideal Type of Bureaucracy, 3 Authority types aur Robert Merton ke dysfunction critique ko samjho.',
    categorySlug: 'paper-1-concepts',
    tagTitles: ['Max Weber', 'Bureaucracy', 'Ideal Type', 'Authority'],
    papers: ['P1', 'P2'],
    unitSlugs: ['sociological-thinkers', 'politics-and-society'],
    topicSlugs: ['max-weber-social-action-bureaucracy', 'power-elite-bureaucracy-pressure-groups'],
    thinkerSlugs: ['max-weber', 'robert-k-merton'],
    coverFilename: 'p1-u07-01-power-theories-elites.webp',
    coverAlt: 'Theories of power, elites and bureaucracy in Sociology',
    publishedAt: '2026-11-23T16:00:00.000Z',
    seo: {
      title: 'Max Weber Bureaucracy & Ideal Types | UPSC Sociology Notes',
      description: 'Understand Max Weber Ideal Type, Legal-Rational Bureaucracy, Iron Cage, plus Merton and Burns-Stalker critiques for UPSC Sociology Paper 1 & 2.',
      focusKeyword: 'Max Weber Bureaucracy',
    },
    faq: [
      {
        question: 'Kya Weber ka Ideal Type koi "perfect" ya moral model hota hai?',
        answer: 'Nahi! Ideal Type ek analytical mental construct hai jo reality ke core features ko exaggerate karke comparison aasan banata hai — iska matlab moral "best" nahi hota.',
      },
      {
        question: 'Weber ke 3 types of legitimate authority kaun se hain?',
        answer: 'Traditional (customs), Charismatic (personal extraordinary grace), aur Legal-Rational (impersonal written rules aur merit selection).',
      },
      {
        question: 'Robert Merton ne Weberian bureaucracy ko dysfunctional kyun kaha?',
        answer: 'Merton ke mutabik rules par blind focus se "Goal Displacement" aur "Trained Incapacity" hoti hai, jahan file process citizen welfare se bada ban jaata hai.',
      },
    ],
    quiz: [
      {
        question: 'Weber ke hisaab se modern bureaucracy kis authority par chalti hai?',
        options: ['Traditional authority', 'Charismatic authority', 'Legal-rational authority', 'Patriarchal authority'],
        answerIndex: 2,
        explanation: 'Modern state aur corporate organisations written rules, hierarchy aur impersonal merit (Legal-Rational authority) par tikti hain.',
      },
      {
        question: 'Rules ko end-in-itself maan lena (Goal Displacement) kis thinker ne point out kiya?',
        options: ['Robert K. Merton', 'Émile Durkheim', 'Vilfredo Pareto', 'G. S. Ghurye'],
        answerIndex: 0,
        explanation: 'Merton ne dikhaya ki strict adherence to rules bureaucracy mein red tape aur trained incapacity paida karti hai.',
      },
      {
        question: 'Weber ke "Iron Cage of Rationality" ka kya matlab hai?',
        options: ['Lack of technology', 'Over-bureaucratization crushing human freedom & creativity', 'Religious revivalism', 'Absence of written rules'],
        answerIndex: 1,
        explanation: 'Instrumental rationality (Zweckrationalitat) jab har area par haavi ho jaaye toh insaan rules ke pinjre mein kaid ho jaata hai.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'upscAngle',
          title: 'UPSC + GS4 Relevance',
          body: 'Weber ki Bureaucracy sirf Sociology Paper 1 nahi, **Indian Administration (Paper 2)** aur **GS4 Ethics (Rule of Law vs Empathy)** ke liye bhi direct weapon hai.',
        },
      },
      {
        markdown: `## Ideal Type aur Legal-Rational Authority\n\n**Max Weber** ke mutabik modern society mein *Rationalization* sabse bada trend hai. Jab power customs (Traditional) ya leader ke charm (Charismatic) ke bajay **impersonal written rules** par chalti hai, tab **Legal-Rational Bureaucracy** banti hai.\n\n**Weber ke Ideal Type of Bureaucracy ke 6 pillars:**\n- Clear hierarchy of offices (Authority chain)\n- Written files aur documentation (*Aktenkundigkeit*)\n- Impersonal rules (*Sine ira et studio* — bina gusse ya favour ke)\n- Merit-based recruitment & fixed salary\n- Separation of official property from personal property\n- Full-time career specialization`,
      },
      {
        block: {
          blockType: 'keyTerm',
          term: 'Trained Incapacity (Robert Merton)',
          meaning: 'Jab ek bureaucrat rules follow karne mein itna rigid ho jaaye ki badalte halaat mein common sense ya citizen problem solve hi na kar paaye.',
        },
      },
      {
        markdown: `## Weber ke Critiques (Jo answer ko 15/20 banate hain)\n\n- **Robert K. Merton:** Goal displacement aur red tape.\n- **Alvin Gouldner:** Mock bureaucracy (rules sirf paper par, jaise no-smoking signs jahan koi follow na kare) vs punishment-centered bureaucracy.\n- **Burns & Stalker:** Fast-changing tech startups ke liye Weberian *mechanistic* model fail hota hai; wahan *organic* flexible structure chahiye.\n- **Feminist Critique (Kathy Ferguson):** Impersonal masculinity ka bias.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Indian civil services ya lateral entry par sawaal aaye toh Weber ke Ideal Type ko Mission Karmayogi / e-Governance se jodo.',
          points: [
            { text: 'Explain Ideal Type as a methodological benchmark (not moral perfection) and list Weber’s core bureaucratic features.' },
            { text: 'Highlight the paradox: technical efficiency vs Iron Cage (loss of individual spontaneity).' },
            { text: 'Add Merton (goal displacement), Gouldner (types of rules), and Indian reform context (lateral entry, citizen charters).' },
          ],
          conclusion: 'Aaj ki challenge Weberian impartiality ko bachate hue bureaucratic empathy aur agility lane ki hai.',
        },
      },
    ],
  },
  {
    slug: 'br-ambedkar-annihilation-of-caste-upsc-paper-2',
    title: 'B. R. Ambedkar: Graded Inequality aur Annihilation of Caste (Paper 2)',
    excerpt: 'Caste par B. R. Ambedkar aur Mahatma Gandhi / Dumont ke views ka comparison, Graded Inequality aur Endogamy ka analysis — UPSC Paper 2 notes.',
    categorySlug: 'paper-2-india',
    tagTitles: ['B.R. Ambedkar', 'Caste System', 'Paper 2', 'Graded Inequality'],
    papers: ['P2'],
    unitSlugs: ['caste-system', 'perspectives-on-indian-society'],
    topicSlugs: ['perspectives-on-caste', 'untouchability-forms-and-perspectives', 'features-of-caste-system'],
    thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'yogendra-singh'],
    coverFilename: 'p2-u04-02-untouchability-annihilation.webp',
    coverAlt: 'Untouchability and Annihilation of Caste perspectives in Indian Sociology',
    publishedAt: '2026-11-23T10:00:00.000Z',
    seo: {
      title: 'B. R. Ambedkar Annihilation of Caste Notes | UPSC Paper 2',
      description: 'Deep-dive UPSC Sociology Paper 2 notes on Dr. B. R. Ambedkar: Graded Inequality, Endogamy, Caste vs Class, Gandhi debate, and contemporary relevance.',
      focusKeyword: 'Ambedkar Annihilation of Caste',
    },
    faq: [
      {
        question: 'Ambedkar ke mutabik Caste ki sabse basic feature kya hai?',
        answer: '1916 ke paper "Castes in India" mein Ambedkar ne kaha ki Endogamy (apni hi jaati mein shaadi) caste ka sabse central mechanism hai jo caste boundaries ko zinda rakhta hai.',
      },
      {
        question: 'Graded Inequality ka matlab kya hota hai?',
        answer: 'Iska matlab aisi inequality jismein har level par kisi ke upar koi hai aur kisi ke neeche koi — isse har caste apni thodi si superiority bachane ke liye system se judi rehti hai aur united revolt mushkil hota hai.',
      },
      {
        question: 'Ambedkar ne "Caste is not just division of labour, it is division of labourers" kyun kaha?',
        answer: 'Kyunki caste kisi skill ya choice par nahi balki birth par aadharit hai aur kaam ke saath social dignity aur hierarchy ko fix kar deti hai.',
      },
    ],
    quiz: [
      {
        question: 'Ambedkar ne "Castes in India: Their Mechanism, Genesis and Development" (1916) mein caste ki essence kise kaha?',
        options: ['Division of land', 'Superimposition of endogamy on exogamy', 'Colonial census', 'Industrialization'],
        answerIndex: 1,
        explanation: 'Ambedkar ne kaha ki endogamy (sati, enforced widowhood, child marriage ke zariye surplus man/woman manage karna) caste mechanism ka core hai.',
      },
      {
        question: 'Ambedkar ke mutabik caste aur Varna vyavastha mein kaun sa view Gandhi ji se alag tha?',
        options: ['Ambedkar wanted total annihilation of caste & Shastric authority', 'Ambedkar defended hereditary Varna', 'Gandhi opposed temple entry', 'Both wanted Varna hierarchy preserved'],
        answerIndex: 0,
        explanation: 'Gandhi ji untouchability ke khilaf the par ideal Varna ko division of duties maante the; Ambedkar ne kaha bina Shastras aur Varna tode caste khatam nahi hogi.',
      },
      {
        question: 'Caste ko destroy karne ke liye Ambedkar ne sabse practical samajik step kise bataya?',
        options: ['Only inter-dining', 'Inter-caste marriage (breaking endogamy)', 'Village self-rule alone', 'Sanskritization'],
        answerIndex: 1,
        explanation: 'Annihilation of Caste (1936) mein Ambedkar ne likha ki inter-dining kaafi nahi hai; asli ilaaj inter-caste marriage hai jo blood ties aur kinship badalta hai.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'tip',
          title: 'Ek line me',
          body: 'Dr. B. R. Ambedkar ne caste ko religious purity ya functional solidarity ke bajay ek **political-economic system of graded inequality aur hereditary unfreedom** ke roop mein decode kiya.',
        },
      },
      {
        markdown: `## Endogamy: Caste ka Engine (1916 Essay)\n\nColumbia University ke seminar mein 1916 mein Ambedkar ne clear kiya ki Indian society mein pehle tribal *exogamy* thi, par jab ek group ne khud ko close karke **endogamy** (within-group marriage) strict kar diya, tab caste paida hui.\n\n- Is endogamy ko maintain karne ke liye women par strict control (sati, enforced widowhood, girl child marriage) laaya gaya — isi baat ko baad mein **Uma Chakravarti** ne *Brahmanical Patriarchy* kaha.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Louis Dumont (Homo Hierarchicus)',
          rightTitle: 'B. R. Ambedkar (Annihilation of Caste)',
          rows: [
            { aspect: 'Core basis', left: 'Ideology of Purity & Pollution', right: 'Graded Inequality & Power Monopoly' },
            { aspect: 'Consensus vs Conflict', left: 'Assumes cultural consensus across castes', right: 'Shows structural coercion & resistance' },
            { aspect: 'Division of labour', left: 'Complementary ritual roles', right: 'Division of labourers without choice' },
          ],
        },
      },
      {
        markdown: `## Annihilation of Caste (1936): Solution kya hai?\n\n- **Division of Labourers:** Ambedkar ne kaha caste talent ke hisaab se kaam nahi baant-ti, balki birth se kaam aur status dono lock karti hai.\n- **Moral vs Legal Reform:** Sirf economic change (classical Marxism) ya sirf inter-dining se caste nahi jayegi; **inter-caste marriages** aur rational egalitarian values (Liberty, Equality, Fraternity) laane honge.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Paper 2 mein caste ya subaltern perspective par Ambedkar ko Sirf Political leader nahi balki rigorous Sociologist ke roop mein cite karo.',
          points: [
            { text: 'Cite Ambedkar’s 1916 analysis: Endogamy + gender control as the mechanism of caste reproduction.' },
            { text: 'Use his conceptual triad: Graded Inequality, Division of Labourers, and Critique of Shastric sanction.' },
            { text: 'Compare with Srinivas (Sanskritization) and Dumont (Purity-Pollution), and link to Constitution + Constitutional Morality.' },
          ],
          conclusion: 'Aaj ke matrimonial portals, honour killings aur urban housing segregation dikhate hain ki Ambedkar ka endogamy diagnosis abhi bhi utna hi sharp hai.',
        },
      },
    ],
  },
  {
    slug: 'indian-middle-class-consumerism-mobility-paper-2',
    title: 'Indian Middle Class ka Rise: Consumerism, Caste Privilege aur Social Mobility',
    excerpt: 'Naya Indian middle class kitna meritocratic hai? Satish Deshpande, André Béteille, Leela Fernandes aur Dipankar Gupta ke lenses se Paper 2 analysis.',
    categorySlug: 'paper-2-india',
    tagTitles: ['Middle Class', 'Social Mobility', 'Paper 2', 'Urban India'],
    papers: ['P2'],
    unitSlugs: ['social-classes-in-india', 'challenges-of-social-transformation'],
    topicSlugs: ['middle-classes-in-india', 'agrarian-class-structure'],
    thinkerSlugs: ['yogendra-singh', 'mn-srinivas'],
    coverFilename: 'p2-u06-01-indian-class-pyramid.webp',
    coverAlt: 'Social Classes in India pyramid and mobility structure',
    publishedAt: '2026-11-23T06:00:00.000Z',
    seo: {
      title: 'Indian Middle Class & Mobility | UPSC Sociology Paper 2',
      description: 'Analyze India middle class evolution from Nehruvian intelligentsia to post-1991 consumerist elite using Satish Deshpande, B.B. Misra, and Leela Fernandes.',
      focusKeyword: 'Indian Middle Class Sociology',
    },
    faq: [
      {
        question: 'B. B. Misra ke mutabik Indian Middle Class kaise ubhra?',
        answer: 'Colonial English education, modern bureaucracy, law, teaching aur trade ke zariye — yaani India mein middle class industrial capitalism se pehle British administrative needs se bana.',
      },
      {
        question: 'Old Middle Class (Nehruvian) aur New Middle Class (Post-1991) mein kya antar hai?',
        answer: 'Old middle class public sector aur austerity-driven intelligentsia tha; New middle class IT, corporate services, global consumption aur English cultural capital par tika hai.',
      },
      {
        question: 'Satish Deshpande ne middle class ko "hegemonic" kyun kaha?',
        answer: 'Deshpande ke hisaab se middle class numerical minority hote hue bhi nation ki ideology, media aur policy priorities ko define karta hai.',
      },
    ],
    quiz: [
      {
        question: '"The Indian Middle Classes: Their Growth in Modern Times" classic book kisne likhi?',
        options: ['B. B. Misra', 'M. N. Srinivas', 'A. R. Desai', 'G. S. Ghurye'],
        answerIndex: 0,
        explanation: 'B. B. Misra ne dikhaya ki colonial education aur professions ne modern Indian middle class ki neev rakhi.',
      },
      {
        question: 'Post-liberalization New Indian Middle Class ke cultural consumption aur exclusions par kisne study ki?',
        options: ['Leela Fernandes', 'Karl Marx', 'Vilfredo Pareto', 'Talcott Parsons'],
        answerIndex: 0,
        explanation: 'Leela Fernandes (India’s New Middle Class) ne dikhaya ki consumerism aur urban spatial exclusion class boundaries ko reproduce karte hain.',
      },
      {
        question: 'Indian middle class ke andar kaunsa social capital sabse zyada decisive role nibhata hai?',
        options: ['Upper-caste networks + English schooling (Cultural Capital)', 'Agricultural land only', 'Tribal lineage', 'Village jajmani'],
        answerIndex: 0,
        explanation: 'Satish Deshpande aur Surinder Jodhka ke studies dikhate hain ki traditional caste privilege English & technical cultural capital mein convert ho gaya.',
      },
    ],
    sections: [
      {
        block: {
          blockType: 'blogCallout',
          variant: 'tip',
          title: 'Ek line me',
          body: 'India ka Middle Class sirf ek income bracket nahi, balki **Cultural Capital (English, education), Caste Networks aur Political Voice** ka ek powerful alliance hai.',
        },
      },
      {
        markdown: `## Colonial Roots se New Middle Class tak\n\nEurope mein middle class *Industrial Revolution* aur commerce se paida hua, par **B. B. Misra** ke mutabik India mein yeh colonial state ke clerks, lawyers aur teachers ke roop mein aaya. 1991 ke LPG reforms ke baad **IT-enabled services, private banking aur global consumption** ne *New Middle Class* ko janm diya.\n\n- **Satish Deshpande:** Middle class khud ko *Aam Aadmi* aur nation ka voice maanta hai, jabki iski lifestyle upper 10–15% ke paas hi simti hai.\n- **Leela Fernandes:** Gated communities, malls aur private schools *symbolic boundaries* banate hain jo urban poor ko bahar rakhte hain.`,
      },
      {
        block: {
          blockType: 'compare',
          leftTitle: 'Nehruvian Old Middle Class',
          rightTitle: 'Post-1991 New Middle Class',
          rows: [
            { aspect: 'Economic base', left: 'Public sector, PSU & civil service', right: 'Private IT, finance, gig-tech & startups' },
            { aspect: 'Values', left: 'Austerity, nation-building ethos', right: 'Aspirational consumption & global mobility' },
            { aspect: 'Social composition', left: 'Dominated by upper castes', right: 'Slightly diverse via quota, yet glass ceilings persist' },
          ],
        },
      },
      {
        markdown: `## Kisan se Neo-Middle Class aur Glass Ceilings\n\n- **Agrarian-to-Urban Transition (Surinder Jodhka):** Green Revolution aur OBC reservation ne ek *rural-rooted neo-middle class* banaya hai jo aspirational hai par metro elite circles mein *cultural gatekeeping* face karta hai.\n- **Informal Precariat:** Covid-19 aur AI layoffs ne dikhaya ki lower middle class ki economic security abhi bhi fragile hai.`,
      },
      {
        block: {
          blockType: 'answerBox',
          intro: 'Class structure ya Consumerism par UPSC question aaye toh B.B. Misra, Deshpande aur Fernandes ka arc zaroor likho.',
          points: [
            { text: 'Trace historical specificity via B. B. Misra (state-created professional middle class) vs European bourgeois model.' },
            { text: 'Analyze post-1991 shift: consumer identity (Fernandes), caste-to-cultural capital conversion (Deshpande), and Dalit/OBC middle class.' },
            { text: 'Highlight vulnerabilities: healthcare/education inflation and formal job stagnation.' },
          ],
          conclusion: 'True social mobility tabhi broaden hogi jab quality public education aur formal employment middle-class access ko democratize karein.',
        },
      },
    ],
  },
]
