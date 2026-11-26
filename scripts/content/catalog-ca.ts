import type { PaperCode } from '@/lib/data/types'

export type CaBrief = {
  slug: string
  headline: string
  date: string
  paper: PaperCode | 'Both'
  topicSlugs: string[]
  thinkerSlugs: string[]
  sources: { name: string; url: string }[]
  angle: string
}

export const CA_CATALOG: CaBrief[] = [
  {
    slug: 'sc-seven-judge-bench-sc-st-subclassification-caste-mobility',
    headline: 'Supreme Court 7-Judge Bench Upholds SC/ST Sub-Classification & Creamy Layer Debate',
    date: '2026-11-26', paper: 'P2',
    topicSlugs: ['perspectives-on-caste', 'constitution-law-and-social-change'], thinkerSlugs: ['br-ambedkar', 'mn-srinivas'],
    sources: [{ name: 'Supreme Court of India', url: 'https://www.sci.gov.in' }, { name: 'The Hindu', url: 'https://www.thehindu.com/news/national/' }],
    angle: 'Davinder Singh judgment (6:1): caste-internal stratification (Srinivas vs homogeneous SC view), Ambedkar substantive equality, distributive justice across most-backward sub-castes vs solidarity fears.',
  },
  {
    slug: 'plfs-female-labour-force-participation-rural-unpaid-paradox',
    headline: 'PLFS Report Shows 41.7% Female Labour Force Rate Driven by Unpaid Rural Work',
    date: '2026-11-25', paper: 'Both',
    topicSlugs: ['patriarchy-entitlements-division-of-labour', 'formal-and-informal-organisation-of-work'], thinkerSlugs: ['karl-marx', 'mn-srinivas'],
    sources: [{ name: 'MoSPI PLFS', url: 'https://www.mospi.gov.in' }, { name: 'The Indian Express', url: 'https://indianexpress.com/section/business/economy/' }],
    angle: 'PLFS 2023-24 spike to 41.7% vs high unpaid family-helper share in agriculture; Sylvia Walby private/public patriarchy, Maria Mies housewifisation, Bina Agarwal land ownership gap.',
  },
  {
    slug: 'world-inequality-lab-billionaire-raj-india-wealth-gap',
    headline: 'World Inequality Lab: Top 1% Holds 40.1% of India’s Wealth, Sparking Piketty Debate',
    date: '2026-11-24', paper: 'Both',
    topicSlugs: ['equality-inequality-hierarchy-exclusion', 'poverty-deprivation-inequalities'], thinkerSlugs: ['karl-marx', 'max-weber'],
    sources: [{ name: 'World Inequality Lab', url: 'https://wid.world' }, { name: 'The Hindu', url: 'https://www.thehindu.com/business/' }],
    angle: 'Piketty & Chancel r > g thesis, Marx wealth polarisation, Weberian market-life-chances closure, Davis-Moore critique via inherited dynastic capital.',
  },
  {
    slug: 'niti-aayog-gig-economy-23-million-workers-welfare-laws',
    headline: 'NITI Aayog Sees 23.5M Gig Workers by 2030 as States Draft Platform Social Security',
    date: '2026-11-23', paper: 'Both',
    topicSlugs: ['social-organisation-of-work', 'informal-sector-child-labour'], thinkerSlugs: ['karl-marx', 'max-weber'],
    sources: [{ name: 'NITI Aayog', url: 'https://www.niti.gov.in' }, { name: 'Mint', url: 'https://www.livemint.com' }],
    angle: 'Algorithmic management (10-min delivery deadlines), Guy Standing Precariat, Marx alienation & Braverman deskilling, Rajasthan/Karnataka platform welfare boards.',
  },
  {
    slug: 'nfhs5-unfpa-ageing-india-20-percent-elderly-by-2050',
    headline: 'UNFPA Projects 20.8% Elderly Share in India by 2050 Amid NFHS-5 Replacement Fertility',
    date: '2026-11-22', paper: 'P2',
    topicSlugs: ['emerging-population-issues', 'household-dimensions-of-family'], thinkerSlugs: ['emile-durkheim', 'yogendra-singh'],
    sources: [{ name: 'UNFPA India', url: 'https://india.unfpa.org' }, { name: 'MoHFW NFHS-5', url: 'https://main.mohfw.gov.in' }],
    angle: 'Feminisation of ageing, nuclearisation eroding joint-family care (A.M. Shah, I.P. Desai), dependency ratio inversion & state pension deficit.',
  },
  {
    slug: 'bihar-caste-survey-national-caste-census-debate',
    headline: 'Bihar Caste Survey Data Ignites Demand for Nationwide Socio-Economic Caste Census',
    date: '2026-11-21', paper: 'P2',
    topicSlugs: ['perspectives-on-caste', 'political-parties-pressure-groups-elite'], thinkerSlugs: ['br-ambedkar', 'mn-srinivas', 'max-weber'],
    sources: [{ name: 'The Indian Express', url: 'https://indianexpress.com/section/india/' }, { name: 'PRS India', url: 'https://prsindia.org' }],
    angle: '63% OBC/EBC finding vs 50% Indra Sawhney cap; Bernard Cohn colonial enumeration vs Ambedkar empirical evidence for annihilation/affirmative policy; caste-class overlap.',
  },
  {
    slug: 'nari-shakti-vandan-adhiniyam-womens-quota-proxy-politics',
    headline: '106th Constitutional Amendment Reserves 33% Seats for Women: Empowerment or Tokenism?',
    date: '2026-11-20', paper: 'P2',
    topicSlugs: ['womens-movement', 'political-parties-pressure-groups-elite'], thinkerSlugs: ['max-weber', 'br-ambedkar'],
    sources: [{ name: 'PRS Legislative Research', url: 'https://prsindia.org' }, { name: 'PIB India', url: 'https://pib.gov.in' }],
    angle: 'Critical mass theory (Drude Dahlerup 30% threshold), panchayat lessons (>14L women elected vs Pradhan-Pati risk), intersectional demand for OBC women sub-quota.',
  },
  {
    slug: 'uttarakhand-ucc-live-in-registration-legal-pluralism',
    headline: 'Uttarakhand UCC Mandates Live-In Registration: Legal Modernisation vs Privacy Rights',
    date: '2026-11-19', paper: 'Both',
    topicSlugs: ['contemporary-trends-in-kinship', 'constitution-law-and-social-change'], thinkerSlugs: ['emile-durkheim', 'yogendra-singh'],
    sources: [{ name: 'The Hindu', url: 'https://www.thehindu.com/news/national/' }, { name: 'Bar and Bench', url: 'https://www.barandbench.com' }],
    angle: 'Giddens Pure Relationship vs state surveillance of intimacy; Yogendra Singh heterogenetic legal change vs Werner Menski / Flavia Agnes legal pluralism.',
  },
  {
    slug: 'sc-electoral-bonds-verdict-power-elite-democracy',
    headline: 'Supreme Court Strikes Down Electoral Bonds: Mills’ Power Elite Lens on Indian Democracy',
    date: '2026-11-18', paper: 'Both',
    topicSlugs: ['power-elite-bureaucracy-pressure-groups', 'nation-democracy-citizenship-india'], thinkerSlugs: ['vilfredo-pareto', 'karl-marx', 'max-weber'],
    sources: [{ name: 'Supreme Court of India', url: 'https://www.sci.gov.in' }, { name: 'The Indian Express', url: 'https://indianexpress.com' }],
    angle: 'C. Wright Mills Power Elite interlock (state-corporate), Marx instrumentalist state vs Lukes hidden agenda power, ADR disclosures & democratic accountability.',
  },
  {
    slug: 'aser-2024-rural-smartphone-access-learning-divide',
    headline: 'ASER Report Shows 89% Rural Youth Own Smartphones Yet Foundational Literacy Lags',
    date: '2026-11-17', paper: 'P2',
    topicSlugs: ['illiteracy-and-educational-disparities', 'science-technology-and-social-change'], thinkerSlugs: ['emile-durkheim', 'karl-marx'],
    sources: [{ name: 'ASER Centre', url: 'https://asercentre.org' }, { name: 'The Hindu', url: 'https://www.thehindu.com/education/' }],
    angle: 'Bourdieu cultural & digital capital gap (boys 2x smartphone ownership over girls), Bowles-Gintis reproduction of rural-urban educational inequality.',
  },
  {
    slug: 'ncrb-crime-report-cyber-fraud-domestic-violence-cultural-lag',
    headline: 'NCRB Data Highlights Surge in Cyber-Crimes & Domestic Cruelty Under Section 498A',
    date: '2026-11-16', paper: 'Both',
    topicSlugs: ['violence-against-women', 'science-technology-and-social-change'], thinkerSlugs: ['robert-k-merton', 'emile-durkheim'],
    sources: [{ name: 'NCRB MHA', url: 'https://ncrb.gov.in' }, { name: 'The Indian Express', url: 'https://indianexpress.com' }],
    angle: 'Merton innovation strain (cyber-fraud), Ogburn cultural lag in deepfakes, Veena Das & Flavia Agnes on normalized domestic patriarchy and NFHS under-reporting.',
  },
  {
    slug: 'kota-coaching-stress-student-suicides-durkheim-anomie',
    headline: 'Coaching Hub Distress & Exam Anxiety: Reading India’s Youth Through Durkheim’s Anomie',
    date: '2026-11-15', paper: 'Both',
    topicSlugs: ['emile-durkheim-social-fact-suicide', 'robert-merton-functions-deviance'], thinkerSlugs: ['emile-durkheim', 'robert-k-merton'],
    sources: [{ name: 'The Hindu', url: 'https://www.thehindu.com/news/national/' }, { name: 'Ministry of Education', url: 'https://www.education.gov.in' }],
    angle: 'Durkheim anomic/fatalistic suicide (norms vs parental deregulation), Merton means-goals strain, Randall Collins credential society & MoE 2024 coaching guidelines.',
  },
  {
    slug: 'urban-heatwaves-water-crisis-slum-vulnerability-risk-society',
    headline: 'Urban Heatwaves & Water Scarcity Hit Informal Settlements Hardest: Risk Society Check',
    date: '2026-11-14', paper: 'P2',
    topicSlugs: ['slums-and-urban-deprivation', 'growth-of-urban-settlements'], thinkerSlugs: ['karl-marx', 'yogendra-singh'],
    sources: [{ name: 'The Hindu', url: 'https://www.thehindu.com/sci-tech/energy-and-environment/' }, { name: 'CSE India', url: 'https://www.cseindia.org' }],
    angle: 'Ulrich Beck Risk Society critique (climate risks are NOT democratic — slums lack ACs/water pipelines), Amita Baviskar bourgeois environmentalism.',
  },
  {
    slug: 'forest-rights-act-fra-tribal-displacement-autonomy',
    headline: 'Forest Rights Act Audits Reveal High Claim Rejections Amid Mining & Conservation Push',
    date: '2026-11-13', paper: 'P2',
    topicSlugs: ['tribal-integration-and-autonomy', 'crisis-of-development-displacement'], thinkerSlugs: ['mn-srinivas', 'br-ambedkar'],
    sources: [{ name: 'Ministry of Tribal Affairs', url: 'https://tribal.nic.in' }, { name: 'Down To Earth', url: 'https://www.downtoearth.org.in' }],
    angle: 'Xaxa Committee findings, Guha-Gadgil conservation vs tribal livelihood conflict, Michael Cernea displacement impoverishment risks vs Gram Sabha consent in Niyamgiri.',
  },
  {
    slug: 'urban-nuclearisation-single-person-households-care-deficit',
    headline: 'Census & NSS Trends Show Rise of Single-Person & DINK Households in Indian Metros',
    date: '2026-11-12', paper: 'Both',
    topicSlugs: ['types-and-forms-of-family', 'contemporary-trends-in-kinship'], thinkerSlugs: ['yogendra-singh', 'emile-durkheim'],
    sources: [{ name: 'MoSPI NSS', url: 'https://www.mospi.gov.in' }, { name: 'Mint', url: 'https://www.livemint.com' }],
    angle: 'Parsons isolated nuclear family hypothesis vs Indian functional jointness (I.P. Desai), Ronald Fletcher functional adaptation, paid care market & elder loneliness.',
  },
  {
    slug: 'farmers-protests-msp-debate-agrarian-distress-india',
    headline: 'MSP Guarantee Demand & Farmers’ Mobilisation: Rural Class Consciousness & Crisis',
    date: '2026-11-11', paper: 'P2',
    topicSlugs: ['peasants-and-farmers-movements', 'changing-modes-of-production-agriculture'], thinkerSlugs: ['karl-marx', 'mn-srinivas'],
    sources: [{ name: 'The Hindu', url: 'https://www.thehindu.com/news/national/' }, { name: 'PRS India', url: 'https://prsindia.org' }],
    angle: 'Teodor Shanin peasant politics, Surinder Jodhka & D.N. Dhanagare rich-kulak vs marginal-labour contradictions, Swaminathan C2+50% demand and corporate agribusiness anxiety.',
  },
  {
    slug: 'lateral-entry-bureaucracy-weber-vs-representative-reservation',
    headline: 'Lateral Entry Rollback Debate: Weberian Meritocracy vs Representative Bureaucracy',
    date: '2026-11-10', paper: 'Both',
    topicSlugs: ['max-weber-social-action-bureaucracy', 'power-elite-bureaucracy-pressure-groups'], thinkerSlugs: ['max-weber', 'br-ambedkar', 'robert-k-merton'],
    sources: [{ name: 'The Indian Express', url: 'https://indianexpress.com/section/india/' }, { name: 'DoPT India', url: 'https://dopt.gov.in' }],
    angle: 'Weber iron cage & specialized expert rationality vs Ambedkar representative bureaucracy (SC/ST/OBC inclusion), Merton bureaucratic ritualism vs corporate capture.',
  },
  {
    slug: 'generative-ai-it-layoffs-middle-class-white-collar-deskilling',
    headline: 'GenAI Automation & White-Collar Layoffs Challenge India’s Urban Middle-Class Dream',
    date: '2026-11-09', paper: 'Both',
    topicSlugs: ['middle-classes-in-india', 'labour-and-society'], thinkerSlugs: ['karl-marx', 'max-weber'],
    sources: [{ name: 'ILO', url: 'https://www.ilo.org' }, { name: 'Mint', url: 'https://www.livemint.com' }],
    angle: 'Harry Braverman cognitive deskilling, C. Wright Mills White Collar anxiety, Leela Fernandes & Satish Deshpande new middle-class merit myth vs AI precarity.',
  },
  {
    slug: 'digital-public-infrastructure-upi-aadhaar-inclusion-vs-surveillance',
    headline: 'UPI, Aadhaar & ONDC: Expanding Economic Inclusion or Digital Panopticon?',
    date: '2026-11-08', paper: 'Both',
    topicSlugs: ['science-technology-and-social-change', 'sociological-theories-of-power'], thinkerSlugs: ['max-weber', 'robert-k-merton'],
    sources: [{ name: 'NPCI / RBI', url: 'https://www.rbi.org.in' }, { name: 'The Hindu', url: 'https://www.thehindu.com/sci-tech/technology/' }],
    angle: 'Parsons variable-sum empowerment (SHGs + kiranas) vs Reetika Khera Aadhaar exclusion errors & Foucault panopticon surveillance; Merton latent dysfunctions.',
  },
  {
    slug: 'intercaste-marriages-constitutional-morality-vs-khap-endogamy',
    headline: 'High Court Protection Pleas Highlight Clash Between Khap Endogamy & Youth Choice',
    date: '2026-11-07', paper: 'P2',
    topicSlugs: ['family-and-marriage-in-india', 'caste-conflicts'], thinkerSlugs: ['br-ambedkar', 'yogendra-singh'],
    sources: [{ name: 'The Indian Express', url: 'https://indianexpress.com/section/india/' }, { name: 'LiveLaw', url: 'https://www.livelaw.in' }],
    angle: 'Ambedkar thesis that endogamy sustains caste, Prem Chowdhry property-honour control over women’s sexuality, Yogendra Singh conflict between legal-rational modernity and traditional patriarchy.',
  },
]
