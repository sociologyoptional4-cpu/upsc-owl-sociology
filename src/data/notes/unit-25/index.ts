import type { MindMapData, UnitNotebookSpec } from '@/lib/notes/notebook-types'

import { topic1CrisisOfDevelopmentDisplacement } from './topic-1'
import { topic2PovertyDeprivationInequalities } from './topic-2'
import { topic3ViolenceAgainstWomen } from './topic-3'
import { topic4CasteConflicts } from './topic-4'
import { topic5EthnicConflictsCommunalism } from './topic-5'
import { topic6IlliteracyEducationalDisparities } from './topic-6'

const unitMindMap: MindMapData = {
  title: 'Paper 2 · Unit 25 — Challenges of Social Transformation',
  center: 'Challenges of Social Transformation',
  subtitle: 'Displacement & Ecology • Chronic Poverty & Billionaire Raj • Gender Violence • Caste-Communal Strife • Educational Reproduction',
  branches: [
    {
      title: '25.1 Crisis of Development & Displacement',
      color: 'lavender',
      thinkers: ['Walter Fernandes', 'Michael Cernea', 'Ulrich Beck', 'Ramachandra Guha'],
      points: [
        'Development-induced displacement: 60M+ displaced post-independence, 40% Adivasis and 20% Dalits',
        'Cernea’s IRR Model: Eight interlinked impoverishment risks culminating in social disarticulation',
        'Legal transition: Colonial 1894 Eminent Domain replaced by LARR 2013 mandatory consent and SIA',
        'Just Sustainability: Reconciling subaltern biomass livelihood rights (FRA/PESA) with ecological resilience',
      ],
    },
    {
      title: '25.2 Poverty, Deprivation & Wealth Polarization',
      color: 'yellow',
      thinkers: ['Amartya Sen', 'Sabina Alkire', 'Thomas Piketty', 'Jan Breman', 'Ashwini Deshpande'],
      points: [
        'Capability Deprivation (Sen): Transcending calorie poverty lines toward substantive human freedoms',
        'Multidimensional Poverty (MPI): Alkire-Foster 12-indicator framework tracking health, education, and living standards',
        'The Billionaire Raj (Piketty): Top 1% capturing >40% national wealth while informal real wages stagnate',
        'Intersectional traps: Breman’s footloose circulatory labor and Deshpande’s feminization of poverty',
      ],
    },
    {
      title: '25.3 Violence Against Women & Caste Conflicts',
      color: 'mint',
      thinkers: ['Sylvia Walby', 'Sharmila Rege', 'Anand Teltumbde', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Institutional gender violence: Walby’s patriarchal structures, PWDVA 2005 implementation deficits, and POSH barriers',
        'Dalit Feminist Standpoint: Sexual violence weaponized by dominant castes to suppress subaltern assertiveness',
        'Dominant Castes & Teltumbde: Neoliberal agrarian distress triggering violent backlashes against upward mobility',
        'Proximate caste clashes: Bailey’s niche competition and Ambedkar’s Graded Inequality fracturing solidarity',
      ],
    },
    {
      title: '25.4 & 25.5 Communalism, Ethnicity & Education',
      color: 'pink',
      thinkers: ['Paul Brass', 'Ashutosh Varshney', 'Steven Wilkinson', 'Pierre Bourdieu', 'Krishna Kumar'],
      points: [
        'Riot architecture: Brass’s Institutionalized Riot System and Wilkinson’s electoral incentive calculus',
        'Associational civic life: Varshney on cross-communal business and labor networks deterring violence',
        'North-East autonomy: Sanjib Baruah on cosmetic federalism versus urban religious communal polarization',
        'Educational disparities: Bourdieu’s cultural capital, Krishna Kumar’s two-tier schooling, and ASER learning poverty',
      ],
    },
  ],
}

const unitMindMapHinglish: MindMapData = {
  title: 'Paper 2 · Unit 25 — Samajik Parivartan Ki Chunautiyan',
  center: 'Samajik Parivartan Ki Chunautiyan',
  subtitle: 'Visthapan Aur Paryavaran • Garibi Aur Billionaire Raj • Mahila Hinsa • Jaati-Dharma Sangharsh • Shiksha Ki Khayi',
  branches: [
    {
      title: '25.1 Vikas Ka Sankat Aur Visthapan',
      color: 'lavender',
      thinkers: ['Walter Fernandes', 'Michael Cernea', 'Ulrich Beck', 'Ramachandra Guha'],
      points: [
        'Vikas-janit visthapan: 6 crore+ visthapit, jisme 40% Adivasi aur 20% Dalit; 25% se kam ka punravas',
        'Cernea ka IRR Model: 8 ahem khatre jinse ajeevika aur samajik taana-baana (social disarticulation) toota',
        'LARR Act 2013: Colonial 1894 collector raj ki jagah 70-80% sahmati aur Social Impact Assessment (SIA)',
        'Just Sustainability: Julian Agyeman aur FRA 2006 ke tahat Gram Sabha ko jangal aur sansadhan ka adhikar',
      ],
    },
    {
      title: '25.2 Garibi, Vanchana Aur Asamanta',
      color: 'yellow',
      thinkers: ['Amartya Sen', 'Sabina Alkire', 'Thomas Piketty', 'Jan Breman', 'Ashwini Deshpande'],
      points: [
        'Capability Deprivation: Amartya Sen ka sidhhant—garibi calorie ki kami nahi balki kshamataon ka chhinna hai',
        'NITI Aayog MPI: Swasthya, shiksha aur jeevan star ke 12 indicators par multidimensional garibi ka aakalan',
        'The Billionaire Raj (Piketty): Top 1% ke paas 40%+ daulat jama jabki 90% aabadi asangathit shram mein bebas',
        'Vanchana ka chakravyuh: Jan Breman ka footloose labour aur Ashwini Deshpande ka garibi ka strikaran',
      ],
    },
    {
      title: '25.3 Mahila Hinsa Aur Jaati Sangharsh',
      color: 'mint',
      thinkers: ['Sylvia Walby', 'Sharmila Rege', 'Anand Teltumbde', 'M.N. Srinivas', 'B.R. Ambedkar'],
      points: [
        'Patriarchal hinsa: Sylvia Walby ka framework, PWDVA 2005 ke protection officers ki kami, aur POSH ka darr',
        'Dalit Feminist Standpoint: Sharmila Rege ke anusaar sexual violence jaati dabdaba banaye rakhne ka hathiyar hai',
        'Dominant jaatiyan aur Teltumbde: Kheti ke sankat se gusse mein aayi madhyam jaatiyon ka Daliton par atyachar',
        'Proximate jaati sangharsh: F.G. Bailey ka niche competition aur Ambedkar ki Graded Inequality',
      ],
    },
    {
      title: '25.4 & 25.5 Sampradayikta Aur Shiksha Ka Sankat',
      color: 'pink',
      thinkers: ['Paul Brass', 'Ashutosh Varshney', 'Steven Wilkinson', 'Pierre Bourdieu', 'Krishna Kumar'],
      points: [
        'Dangon ka dhancha: Paul Brass ka Institutionalized Riot System aur Steven Wilkinson ka electoral model',
        'Civic Life (Varshney): Hindu-Muslim vyaparik sangathan aur trade unions jo dangon ko rokte hain',
        'North-East astitva: Sanjib Baruah ka cosmetic federalism banam shehari dharmiya dhruvikaran',
        'Shiksha ki khayi: Pierre Bourdieu ka cultural capital, Krishna Kumar ka Two-Tier schooling, aur ASER ka aakda',
      ],
    },
  ],
}

export const unit25Notebook: UnitNotebookSpec = {
  paperCode: 'P2',
  unitSlug: 'challenges-of-social-transformation',
  overview:
    'Unit 25 explores the structural bottlenecks and contradictions of modernization in post-independence India. It critically investigates development-induced displacement, the persistence of multidimensional poverty alongside extreme wealth concentration, the institutional reproduction of violence against women, violent contestations over caste and ethnic identities, communal polarization, and systemic educational disparities.',
  overviewHinglish:
    'Unit 25 azaadi ke baad Bharat mein aadhunikikaran aur vikas ke gahre sankaton aur antardvandvon ka samajshastriya vishleshan karti hai. Isme vikas-janit visthapan, "Billionaire Raj" mein badhti multidimensional garibi, mahilaon ke khilaf sansthagat hinsa, jaatiya aur nrijatiya sangharsh, sampradayik dange, aur shiksha vyavastha mein chhipe bhedbhav ka bistar se adhyayan shamil hai.',
  studySequence: [
    {
      step: '1. Deconstruct the Crisis of Development & Displacement',
      detail:
        'Master Walter Fernandes’ empirical scale of displacement, apply Michael Cernea’s IRR 8-risk framework, evaluate the legal shift from 1894 to LARR Act 2013, and examine Julian Agyeman’s Just Sustainability.',
    },
    {
      step: '2. Analyze Chronic Poverty, Capabilities & The Billionaire Raj',
      detail:
        'Contrast calorie lines with Amartya Sen’s Capability Deprivation and NITI Aayog’s 12-indicator MPI, examine Thomas Piketty’s wealth polarization data, and evaluate Jan Breman’s footloose labour alongside the feminization of poverty.',
    },
    {
      step: '3. Interrogate Violence Against Women Across Frontiers',
      detail:
        'Examine Sylvia Walby’s patriarchal structures and Pierre Bourdieu’s symbolic violence, evaluate PWDVA 2005 and marital rape debates, unpack workplace barriers under POSH 2013, and apply the Dalit Feminist Standpoint (Sharmila Rege).',
    },
    {
      step: '4. Decode Agrarian Power & Contemporary Caste Conflicts',
      detail:
        'Analyze M.N. Srinivas’s Dominant Caste thesis, evaluate Anand Teltumbde’s Republic of Caste framework across Khairlanji and Una, and apply F.G. Bailey’s niche competition and Ambedkar’s Graded Inequality to proximate caste clashes.',
    },
    {
      step: '5. Map the Socio-Political Architecture of Communalism & Ethnicity',
      detail:
        'Synthesize Paul Brass’s Institutionalized Riot System (IRS), Steven Wilkinson’s electoral incentive model, and Ashutosh Varshney’s civic engagement thesis, contrasting North-East homeland conflicts with urban digital communalism.',
    },
    {
      step: '6. Critique Educational Disparities & Functional Illiteracy',
      detail:
        'Evaluate Pierre Bourdieu’s cultural capital, unpack Krishna Kumar’s two-tier schooling critique, examine ASER learning poverty data, and assess the sociological implications of the pandemic digital divide.',
    },
  ],
  studySequenceHinglish: [
    {
      step: '1. Vikas Ke Sankat Aur Visthapan Ko Samjho',
      detail:
        'Walter Fernandes ke 6 crore visthapiton ke data ko revise karo, Michael Cernea ke IRR ke 8 khatron ko decode karo, 1894 se LARR 2013 ke kanooni badlav dekho, aur Julian Agyeman ka Just Sustainability padho.',
    },
    {
      step: '2. Garibi, Kshamata Aur Billionaire Raj Ka Vishleshan Karo',
      detail:
        'Calorie lines banam Amartya Sen ki Capability Deprivation aur NITI Aayog ke MPI ke 12 indicators samjho, Thomas Piketty ka daulat asamanta ka data dekho, aur Jan Breman ka footloose labour padho.',
    },
    {
      step: '3. Mahilaon Ke Khilaf Hinsa Aur Kanooni Kami Dekho',
      detail:
        'Sylvia Walby ke 6 patriarchal dhanchon aur Pierre Bourdieu ki symbolic violence ko samjho, PWDVA 2005 aur marital rape ke vivaad dekho, POSH Act 2013 ki chunautiyan aur Sharmila Rege ka Dalit Feminist Standpoint samjho.',
    },
    {
      step: '4. Dominant Jaatiyon Aur Jaati Sangharsh Ko Decode Karo',
      detail:
        'M.N. Srinivas ki Dominant Caste theory, Anand Teltumbde ka Republic of Caste framework (Khairlanji aur Una kand), aur F.G. Bailey tatha Babasaheb Ambedkar ki Graded Inequality se bagal wali jaatiyon ka takrav samjho.',
    },
    {
      step: '5. Dangon Ka Rajnitik Dhancha Aur Nrijatiyata Master Karo',
      detail:
        'Paul Brass ka Institutionalized Riot System (IRS), Steven Wilkinson ka electoral incentive model, aur Ashutosh Varshney ka Associational Civic Life framework samjho; North-East aur digital dange compare karo.',
    },
    {
      step: '6. Shiksha Ki Asamanta Aur 24 Solved PYQs Ki Practice Karo',
      detail:
        'Pierre Bourdieu ka Cultural Capital, Krishna Kumar ka Two-Tier schooling, ASER ka functional illiteracy aakda, aur sabhi 24 previous year questions (2014–2024) ko English aur Roman-script Hinglish mein master karo.',
    },
  ],
  mindMap: unitMindMap,
  mindMapHinglish: unitMindMapHinglish,
  infographics: [
    {
      assetFile: 'p2-u15-01-development-displacement-sustainability.webp',
      title: 'Displacement & Sustainability',
      titleHinglish: 'Displacement & Sustainability — Quick Visual',
      badge: '01/02 · Visual Map',
      badgeHinglish: '01/02 · Visual Map',
      alt: 'P2 Unit 15 infographic: Displacement & Sustainability — Big Dams, 50M Displaced Persons & Just Sustainability',
      caption:
        'Big Dams, 50M Displaced Persons & Just Sustainability (Displacement & Sustainability).',
      captionHinglish:
        'Big Dams, 50M Displaced Persons & Just Sustainability — Displacement & Sustainability ka visual saransh.',
    },
    {
      assetFile: 'p2-u15-02-social-transformation-challenges.webp',
      title: 'Challenges of Social Transformation',
      titleHinglish: 'Challenges of Social Transformation — Quick Visual',
      badge: '02/02 · Visual Map',
      badgeHinglish: '02/02 · Visual Map',
      alt: 'P2 Unit 15 infographic: Challenges of Social Transformation — Poverty, Violence, Caste-Communal Strife & Literacy Gaps',
      caption:
        'Poverty, Violence, Caste-Communal Strife & Literacy Gaps (Challenges of Social Transformation).',
      captionHinglish:
        'Poverty, Violence, Caste-Communal Strife & Literacy Gaps — Challenges of Social Transformation ka visual saransh.',
    },
  ],
  topics: [
    topic1CrisisOfDevelopmentDisplacement,
    topic2PovertyDeprivationInequalities,
    topic3ViolenceAgainstWomen,
    topic4CasteConflicts,
    topic5EthnicConflictsCommunalism,
    topic6IlliteracyEducationalDisparities,
  ],
}

export default unit25Notebook
