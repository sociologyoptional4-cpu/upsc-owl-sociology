/** Starter content for local dev. Sample text only: real notes come from the editor or the AI pipeline. */

export const UNITS = [
  { paper: 'P1', number: 1, title: 'Sociology – The Discipline', slug: 'sociology-the-discipline' },
  { paper: 'P1', number: 3, title: 'Research Methods and Analysis', slug: 'research-methods' },
  { paper: 'P1', number: 4, title: 'Sociological Thinkers', slug: 'sociological-thinkers' },
  { paper: 'P1', number: 5, title: 'Stratification and Mobility', slug: 'stratification-and-mobility' },
  { paper: 'P2', number: 4, title: 'Caste System', slug: 'caste-system' },
  { paper: 'P2', number: 9, title: 'Social Changes in Modern India', slug: 'social-change-modern-india' },
] as const

export const TOPICS = [
  {
    unit: 'stratification-and-mobility',
    title: 'Theories of Social Stratification',
    slug: 'theories-of-stratification',
    summary: 'Functionalist, Marxian aur Weberian nazariye: samaj mein unch-neech kyun aur kaise banti hai.',
  },
  {
    unit: 'caste-system',
    title: 'Perspectives on the Study of Caste',
    slug: 'perspectives-on-caste',
    summary: 'Ghurye, Srinivas, Dumont aur Ambedkar ke nazariye se jaati vyavastha.',
  },
  {
    unit: 'social-change-modern-india',
    title: 'Sanskritisation and Westernisation',
    slug: 'sanskritisation-westernisation',
    summary: 'M.N. Srinivas ke concepts: cultural mobility aur uski seemayein.',
  },
] as const

export const THINKERS = [
  {
    name: 'Karl Marx',
    slug: 'karl-marx',
    era: '1818–1883',
    keyIdeas: ['Class struggle', 'Alienation', 'Historical materialism'],
  },
  {
    name: 'Max Weber',
    slug: 'max-weber',
    era: '1864–1920',
    keyIdeas: ['Ideal type', 'Bureaucracy', 'Protestant ethic'],
  },
  {
    name: 'Émile Durkheim',
    slug: 'emile-durkheim',
    era: '1858–1917',
    keyIdeas: ['Social fact', 'Anomie', 'Mechanical vs organic solidarity'],
  },
  {
    name: 'M. N. Srinivas',
    slug: 'mn-srinivas',
    era: '1916–1999',
    keyIdeas: ['Sanskritisation', 'Dominant caste', 'Westernisation'],
  },
]

export const BLOG_CATEGORIES = [
  { title: 'Thinkers', slug: 'thinkers', color: 'lavender' as const, description: 'Classical aur Indian sociological thinkers ke concepts aur critiques.' },
  { title: 'Paper 1 Concepts', slug: 'paper-1-concepts', color: 'yellow' as const, description: 'Fundamentals of Sociology: stratification, religion, kinship, research methods.' },
  { title: 'Paper 2 India', slug: 'paper-2-india', color: 'mint' as const, description: 'Indian society: caste, tribe, village, social movements aur social change.' },
  { title: 'Answer Writing', slug: 'answer-writing', color: 'pink' as const, description: 'Mains answer structure, thinker integration aur PYQ breakdowns.' },
  { title: 'Current Affairs Link', slug: 'current-affairs-link', color: 'yellow' as const, description: 'Contemporary news ko sociological theories aur syllabus se kaise jodein.' },
  { title: 'Strategy & Toppers', slug: 'strategy-and-toppers', color: 'lavender' as const, description: 'Booklist, revision plan aur optional scoring tips.' },
] as const

export const ABOUT_PAGE = {
  title: 'About',
  slug: 'about',
  seo: { description: 'UPSC OWL Sociology kya hai, kaise kaam karta hai aur content kahan se aata hai.' },
  layout: [
    {
      blockType: 'hero' as const,
      kicker: 'About',
      heading: 'Ek journal jo roz khud likha jaata hai.',
      subheading:
        'UPSC OWL Sociology UPSC Sociology Optional ke liye hai. Har subah khabrein syllabus topics se jodi jaati hain, aur har note ke saath original source diya jaata hai.',
      variant: 'plain' as const,
    },
    {
      blockType: 'summary' as const,
      heading: 'Ye kaise kaam karta hai',
      points: [
        { text: 'Subah PIB, The Hindu, Indian Express aur PRS jaise sources se khabrein aati hain.' },
        { text: 'AI pehle check karta hai ki khabar UPSC Sociology ke kaam ki hai ya nahi.' },
        { text: 'Kaam ki khabar ko sahi syllabus topic aur thinker se joda jaata hai.' },
        { text: 'Publish hone se pehle har note human review se guzarta hai.' },
      ],
    },
    {
      blockType: 'callout' as const,
      tone: 'ai' as const,
      title: 'Transparency',
      body: 'AI-generated notes pe "AI draft" badge dikhta hai. Galti dikhe to report karo, hum theek karenge.',
    },
    {
      blockType: 'keyTerms' as const,
      caption: 'Is site pe rang ka matlab',
      rows: [
        { term: 'Indigo', meaning: 'Paper 1: Fundamentals of Sociology' },
        { term: 'Teal', meaning: 'Paper 2: Indian Society' },
        { term: 'Plum', meaning: 'Thinker se juda content' },
        { term: 'Brick red', meaning: 'Previous Year Question (PYQ)' },
      ],
    },
    {
      blockType: 'cta' as const,
      heading: 'Roz ka issue, Telegram pe bhi.',
      body: 'Hamara Telegram channel join karo, updates aur discussion wahan bhi milte hain.',
      label: 'Telegram join karo',
      href: 'https://t.me/sociologyoptional4',
      style: 'telegram' as const,
    },
  ],
}

export const SAMPLE_CA = {
  headline: '[Sample] Census mein caste enumeration: Sociology angle',
  slug: 'sample-census-caste-enumeration',
  date: '2026-11-21T00:00:00.000Z',
  paper: 'P2' as const,
  summary: 'Pipeline ka format dikhane ke liye sample draft. Asli khabar nahi.',
  isAiGenerated: true,
  aiMeta: { model: 'sample', promptVersion: 'ca-v0', relevance: 0.9, costUsd: 0 },
  sources: [{ name: 'Sample source', url: 'https://pib.gov.in' }],
  layout: [
    {
      blockType: 'summary' as const,
      points: [{ text: 'Ye ek sample draft hai, Review Queue ka format dikhane ke liye.' }],
    },
  ],
  topicSlugs: ['perspectives-on-caste'],
  thinkerSlugs: ['mn-srinivas'],
}
