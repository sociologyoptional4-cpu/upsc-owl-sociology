import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Unit 2.4 — Social Reforms in Colonial India',
  center: 'Colonial Socio-Religious Reforms',
  subtitle: 'Elite Liberalism vs Anti-Caste Radicalism • Multi-Faith Women’s Education',
  branches: [
    {
      title: 'Upper-Caste Liberal Stream',
      color: 'lavender',
      thinkers: ['Raja Rammohan Roy', 'Ishwar Chandra Vidyasagar', 'Dayanand Saraswati'],
      points: [
        'Brahmo Samaj (1828): Monotheism, rationalism, abolition of Sati (1829)',
        'Vidyasagar: Hindu Widows’ Remarriage Act (1856) and mass female literacy',
        'Arya Samaj (1875): Vedic revivalism, Shuddhi, anti-idolatry, and DAV schools',
        'Shastric justification: Relied on ancient texts rather than universal secular rights',
      ],
    },
    {
      title: 'Anti-Caste Radical Stream',
      color: 'yellow',
      thinkers: ['Jyotirao Phule', 'Sri Narayana Guru', 'B.R. Ambedkar'],
      points: [
        'Satyashodhak Samaj (1873): First systemic anti-Brahminical agrarian critique',
        'Savitribai & Jyotirao: First indigenous girls’ school in Pune (1848)',
        'SNDP Yogam (1903): Ezhava assertion, "One Caste, One Religion, One God"',
        'Ambedkar: Mahad Satyagraha (1927) and structural annihilation of caste',
      ],
    },
    {
      title: 'Women’s Education Across Faiths',
      color: 'mint',
      thinkers: ['Begum Rokeya', 'Sir Syed Ahmad Khan', 'Savitribai Phule'],
      points: [
        'Muslim reforms: Aligarh Movement, Begum Rokeya’s Sakhawat Girls’ School (1911)',
        'Sikh reforms: Singh Sabha Movement (1873), Kanya Mahavidyalaya, Gurmukhi press',
        'Parsi reforms: Rahnumai Mazdayasnan Sabha (1851) elevated female legal age',
        'Hindu efforts: Bethune School, D.K. Karve’s first Indian Women’s University (1916)',
      ],
    },
    {
      title: 'Sociological Limitations & Critique',
      color: 'pink',
      thinkers: ['Partha Chatterjee', 'Uma Chakravarti', 'Sumit Sarkar'],
      points: [
        'Elite urban bias: Confined largely to upper-caste Bhadralok and Chitpavans',
        'Chatterjee: "Nationalist Resolution" recast women as refined domestic guardians',
        'Revivalist communal friction: Shuddhi vs Tabligh deepened religious divides',
        'Failed to restructure underlying agrarian landlordism or abolish caste endogamy',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u02-02-reform-protest-timeline.webp',
    alt: 'P2 Unit 2 infographic: Colonial Reforms & Protest Movements — Socio-Religious Reforms & Anti-Colonial Peasant Resistance',
    caption:
      'Nineteenth-century social reforms spanned two contrasting streams: upper-caste shastric reinterpretation and radical grassroots anti-caste mobilization.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 2 Visual 02',
  },
  {
    kind: 'md',
    body: `## What Drove the Nineteenth-Century Social Reform Movements?

When the British East India Company consolidated its rule, colonial administrators and Christian missionaries launched scathing ideological attacks against Indian culture, branding it barbaric due to practices like ==sati, female infanticide, child marriage, kulin polygamy, and untouchability==. In response, nineteenth-century Indian intellectuals did not simply accept colonial superiority; instead, they initiated a profound internal soul-searching that gave birth to the socio-religious reform movements.

Sociologically, these reform movements were not uniform. They split into two fundamentally divergent streams: an ==upper-caste liberal reformist stream== that sought to purify religion from within using shastric texts, and an ==anti-caste radical stream== that rejected Brahminical scriptures entirely and fought for the structural emancipation of Shudras, Ati-Shudras, and women. [[trap:Never treat 19th-century reforms as a single harmonious movement; the liberal Bhadralok reformers and radical anti-caste revolutionaries operated from radically different class and caste standpoints.]]

## Two Streams: Upper-Caste Liberalism vs Anti-Caste Radicalism

### 1. The Upper-Caste Liberal Stream
Led by Western-educated elites such as Raja Rammohan Roy, Ishwar Chandra Vidyasagar, and Mahadev Govind Ranade:
- **Brahmo Samaj (1828):** Founded by Raja Rammohan Roy, it advocated monotheism, denounced idolatry, and campaigned against Sati, leading to William Bentinck's 1829 Regulation XVII. Roy synthesized Upanishadic philosophy with Enlightenment reason.
- **Prarthana Samaj (1867):** Centred in Bombay under M.G. Ranade and R.G. Bhandarkar, it emphasized inter-caste dining, widow remarriage, and female schooling while remaining within the Hindu cultural fold.
- **Arya Samaj (1875):** Founded by Swami Dayanand Saraswati with the revivalist slogan "Go back to the Vedas." Dayanand rejected caste by birth in favour of merit (*Guna, Karma, Swabhava*), advocated widow remarriage, opened DAV schools, and launched the ==Shuddhi== (reconversion) movement.

### 2. The Anti-Caste Radical Stream
Led by subaltern visionaries who understood that religious scriptures were instruments of social dominance:
- **Satyashodhak Samaj (1873, [[thinker:Jyotirao Phule]]):** In his foundational text *Gulamgiri* (Slavery, 1873), Phule exposed Brahminical hegemony, dedicating his work to the American abolitionist movement. He inverted Aryan mythology, portraying King Bali as an egalitarian peasant ruler betrayed by Brahminical conquerors. Phule organized weddings without Brahmin priests and established the first indigenous school for lower-caste girls in Pune (1848) with his wife Savitribai Phule.
- **SNDP Yogam (1903, Sri Narayana Guru):** In Kerala, where the untouchable Ezhava community suffered severe distance pollution, Sri Narayana Guru coined the immortal motto: ==One Caste, One Religion, One God for Man==. In 1888, at Aruvippuram, he consecrated an alternative Shiva temple, defiantly asserting that consecrated stones belong to humanity, not Brahmin priests.
- **The Dalit Liberation Struggle ([[thinker:B.R. Ambedkar]]):** Ambedkar built upon Phule's radical foundation, organizing the Mahad Satyagraha (1927) for civic water access, burning the *Manusmriti*, and arguing in *Annihilation of Caste* (1936) that caste cannot be reformed by shastric tinkering—it must be structurally dynamited.

| Dimension | Upper-Caste Liberal Stream (Brahmo / Prarthana) | Anti-Caste Radical Stream (Satyashodhak / SNDP) |
| --- | --- | --- |
| Social & Caste Base | Elite urban Brahmins, Kayasthas, Bhadralok | Subordinate Shudras, Ati-Shudras, Ezhavas, Dalits |
| Stance on Scriptures | Reinterpreted Vedas/Upanishads to legitimize reforms | Rejected shastras entirely as tools of Brahminical slavery |
| Attitude to Caste | Favoured humanitarian relaxation of rituals | Demanded complete destruction of caste hierarchy |
| Primary Battleground | Urban salons, legislative petitions, text debates | Grassroots schools, peasant unions, civic satyagrahas |

## Jyotirao Phule: Agrarian Radical and Anti-Caste Crusader

While textbook accounts often reduce Jyotirao Phule to an educational reformer, historical sociologists emphasize his pioneering agrarian sociology:
- **Critique of Colonial Agrarian Exploitation:** In *Shetkaryacha Asud* (The Cultivator's Whipcord, 1883), Phule dissected how the colonial state and local Brahmin revenue clerks (*Kulkarnis*) colluded to strip Kunbi peasants of their harvest through exorbitant taxes.
- **State-Sponsored Agrarian Modernization:** Ahead of his time, Phule demanded state-built irrigation canals, masonry dams, scientific agricultural colleges, modern livestock breeding, and state-subsidized credit to liberate peasants from usurious moneylenders.
- **Universal Humanist Education:** With [[thinker:Savitribai Phule]] and Fatima Sheikh, Phule established schools that taught science, rational thinking, and hygiene, viewing education as the ultimate weapon (*Trutiya Ratna*) to eradicate false religious consciousness.

## Cross-Community Mobilization: Women's Education Across Faiths

The struggle for female education was a multi-religious phenomenon cutting across Hindu, Muslim, Sikh, and Parsi communities:

### 1. Hindu Initiatives
Ishwar Chandra Vidyasagar established over 35 model schools for girls in Bengal and served as secretary to the pioneer Bethune School (1849). In western India, Dhondo Keshav Karve dedicated his life to educating widows, establishing the SNDT Women’s University in Bombay in 1916.

### 2. Muslim Initiatives
Sir Syed Ahmad Khan championed modern scientific education through the Aligarh Movement. While Sir Syed initially prioritized male higher education, reformers like Sheikh Abdullah and Waheed Jahan Begum founded the Aligarh Girls' School in 1906. Concurrently, pioneering feminist author [[thinker:Begum Rokeya Sakhawat Hossain]] penned the feminist utopia *Sultana's Dream* (1905) and established the Sakhawat Memorial Girls' School in Calcutta (1911) to liberate purdah-bound Muslim girls through modern literacy.

### 3. Sikh and Parsi Initiatives
The Singh Sabha Movement (1873) and Khalsa Diwan opened schools across Punjab, establishing the Kanya Mahavidyalaya to promote female literacy in Gurmukhi alongside modern subjects. In Bombay, the Parsi reform organization Rahnumai Mazdayasnan Sabha (1851), led by Naoroji Furdoonji and Dadabhai Naoroji, pioneered modern co-educational schooling and campaigned vigorously against child marriage.

## Sociological Evaluation: Achievements vs Structural Limitations

A rigorous sociological balance sheet reveals both monumental breakthroughs and profound class-caste contradictions:

### 1. Lasting Sociological Achievements
- **Emergence of a Secular Public Sphere:** Reformers pioneered journals, vernacular print, and public debate, creating what Jürgen Habermas termed the bourgeois public sphere in India.
- **Statutory Legal Enactments:** Direct pressure produced historic statutory interventions: Abolition of Sati (1829), Hindu Widows' Remarriage Act (1856), Native Marriage Act (1872), and Age of Consent Act (1891).
- **Legitimation of Female and Subaltern Agency:** Opened school doors to women and oppressed castes, nurturing the first generation of female teachers, doctors (Anandi Gopal Joshi), and radical social reformers.

### 2. Structural Limitations and Contradictions
- **Partha Chatterjee's "Nationalist Resolution":** Sociologist [[thinker:Partha Chatterjee]] argued that elite reformism resolved the women's question by bifurcating life into *Ghar* (the spiritual inner home) and *Bahar* (the material outer world). Modern education for women was co-opted to produce refined, Victorian-style companionate wives and cultured mothers, leaving patriarchal domestic servitude largely intact.
- **Shastric Prison:** Upper-caste reformers spent decades searching for shastric verses to justify widow remarriage rather than arguing on universal human rights, inadvertently reinforcing the authority of conservative scriptures.
- **Communal Polarization:** Revivalist campaigns (such as Arya Samaj’s Shuddhi and cow-protection sabhas) triggered counter-revivalist mobilizations (Tabligh and Tanzim), poisoning inter-community relations and fostering modern communalism.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1828–1829',
        title: 'Brahmo Samaj & Sati Abolition',
        text: 'Raja Rammohan Roy founded Brahmo Samaj; British enacted Regulation XVII banning Sati.',
      },
      {
        year: '1848',
        title: 'Phule Opens First Girls’ School',
        text: 'Jyotirao and Savitribai Phule established India’s first indigenous school for lower-caste girls in Pune.',
      },
      {
        year: '1856',
        title: 'Hindu Widows’ Remarriage Act',
        text: 'Ishwar Chandra Vidyasagar secured legal validity for widow remarriage through intense shastric campaigning.',
      },
      {
        year: '1873',
        title: 'Founding of Satyashodhak Samaj',
        text: 'Phule authored Gulamgiri and launched the first organized anti-Brahminical mass movement.',
      },
      {
        year: '1875',
        title: 'Arya Samaj & Aligarh Movement',
        text: 'Dayanand Saraswati founded Arya Samaj; Sir Syed Ahmad Khan established MAO College.',
      },
      {
        year: '1888–1903',
        title: 'Aruvippuram Consecration & SNDP Yogam',
        text: 'Sri Narayana Guru consecrated alternative Shiva temple and established SNDP Yogam for Ezhavas.',
      },
    ],
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      { label: 'Colonial Critique', text: 'British missionaries and administrators brand Indian social practices as barbaric' },
      { label: 'Elite Liberal Response', text: 'Roy, Vidyasagar, and Sen use shastras to advocate legal bans on Sati and child marriage' },
      { label: 'Radical Subaltern Counter', text: 'Phule, Savitribai, and Narayana Guru challenge Brahminical scripture and caste hegemony' },
      { label: 'Multi-Faith Expansion', text: 'Muslims (Rokeya), Sikhs (Singh Sabha), and Parsis establish modern girls’ schools' },
      { label: 'Constitutional Culmination', text: 'Ambedkar synthesizes anti-caste struggles into modern constitutional fundamental rights' },
    ],
  },
  {
    kind: 'keyTerm',
    term: 'Satyashodhak Samaj',
    meaning:
      'Jyotirao Phule’s 1873 truth-seeking society dedicated to liberating Shudras and Ati-Shudras from Brahminical religious exploitation.',
  },
  {
    kind: 'keyTerm',
    term: 'SNDP Yogam',
    meaning:
      'Sri Narayana Dharma Paripalana movement in Kerala mobilizing untouchable Ezhavas around education, temples, and spiritual equality.',
  },
  {
    kind: 'keyTerm',
    term: 'Nationalist Resolution of Women’s Question',
    meaning:
      'Partha Chatterjee’s concept showing how male reformers educated women to make them modern domestic mothers while preserving male authority.',
  },
  {
    kind: 'keyTerm',
    term: 'Shuddhi Movement',
    meaning:
      'Arya Samaj’s reconversion ritual aimed at reclaiming converted individuals into the Vedic fold, inadvertently triggering communal rivalries.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Answer Strategy: Juxtapose Bhadralok Liberalism with Phule’s Radicalism',
    body: 'In any 20-mark question on 19th-century reforms, contrast the upper-caste liberal stream (Brahmo Samaj) with the radical subaltern stream (Satyashodhak Samaj). Emphasize that while liberals sought textual purification, radicals demanded structural destruction of caste hierarchy.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Remember Phule’s Agrarian Treatise: Shetkaryacha Asud (1883)',
    body: 'Never treat Jyotirao Phule merely as a caste reformer. Mention his 1883 book "The Cultivator’s Whipcord" where he advocated state dams, irrigation, agricultural research, and fair credit for exploited Kunbi peasants.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Do Not Present Women’s Education as Exclusively Hindu',
    body: 'Examiners reward candidates who show multi-community literacy initiatives: highlight Begum Rokeya’s Sakhawat Girls’ School (Muslim), Singh Sabha’s Kanya Mahavidyalaya (Sikh), and Rahnumai Mazdayasnan Sabha (Parsi).',
  },
  {
    kind: 'answerBox',
    intro:
      'Nineteenth-century social reforms transformed Indian society by generating critical public discourse, statutory protections, and grassroots anti-caste challenges.',
    points: [
      'Two distinct paradigms: Upper-caste liberal reformers reinterpreted sacred texts, while radical subalterns (Phule, Narayana Guru) rejected Brahminical hierarchy.',
      'Phule’s holistic radicalism: Integrated anti-caste emancipation with agrarian modernization (irrigation, credit) and mass female education.',
      'Multi-religious female literacy: Championed across Hindu (Vidyasagar, Phule), Muslim (Begum Rokeya, Aligarh), Sikh (Singh Sabha), and Parsi communities.',
      'Statutory milestones: Sati Abolition (1829), Widow Remarriage (1856), and Age of Consent (1891) reshaped civil law.',
      'Sociological critique (Chatterjee, Chakravarti): Refined patriarchal domesticity rather than liberating women, while revivalism fostered communal polarization.',
    ],
    conclusion:
      'Despite structural limitations, these movements laid the intellectual, educational, and legal groundwork for India’s modern constitutional democracy.',
  },
]

export const topic4En: TopicLangContent = {
  summary:
    'Nineteenth-century social reforms forged a dynamic public sphere where upper-caste liberal textual reformism collided with radical anti-caste grassroots struggles, setting the stage for constitutional rights and female literacy across all religious communities.',
  mindMap,
  sections,
}
