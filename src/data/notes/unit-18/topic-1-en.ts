import type { MindMapData, NotebookSection, TopicNotebookSpec } from '@/lib/notes/notebook-types'

type TopicLangContent = Pick<TopicNotebookSpec, 'summary' | 'mindMap' | 'sections'>

const mindMap: MindMapData = {
  title: 'Paper 2 · Topic 18.1 — Religious Communities in India',
  center: 'Religious Communities in India',
  subtitle: 'Demographic Pluralism • Everyday Syncretism • Caste in Islam & Christianity • Diversity in Hinduism & Sarna Demand',
  branches: [
    {
      title: 'Demography & Cultural Pluralism',
      color: 'lavender',
      thinkers: ['Yogendra Singh', 'Amartya Sen', 'T.K. Oommen', 'Bipan Chandra'],
      points: [
        'Census 2011 baseline: Hindus 79.8%, Muslims 14.2%, Christians 2.3%, Sikhs 1.7%, Buddhists 0.7%, Jains 0.4%',
        'Cultural Pluralism: Salad-bowl / mosaic model preserving distinct identities within an overarching constitutional fabric',
        'Unity in Diversity: Dynamic equilibrium of overlapping traditions rather than forced cultural assimilation',
        'Heterogenetic and orthogenetic religious evolution shaping composite Ganga-Jamuni Tehzeeb',
      ],
    },
    {
      title: 'Everyday Syncretism & Shared Spaces',
      color: 'yellow',
      thinkers: ['T.N. Madan', 'Ashis Nandy', 'J.J. Roy Burman', 'Asghar Ali Engineer'],
      points: [
        'Lived religion vs Dogma: Vernacular accommodation transcending scriptural and theological boundaries',
        'Sacred shared geography: Ajmer Sharif Dargah, Velankanni shrine, Sabarimala-Vavar communion',
        'Bhakti-Sufi synthesis: Sant Kabir and Guru Nanak bridging subaltern devotion and social egalitarianism',
        'Nandy’s thesis: Traditional communities practiced instinctive vernacular tolerance before modern bureaucratic state categories',
      ],
    },
    {
      title: 'Islam & Christianity: Caste Interface',
      color: 'mint',
      thinkers: ['Imtiaz Ahmad', 'Rowena Robinson', 'Ghaus Ansari', 'Louis Dumont'],
      points: [
        'Caste in Indian Islam: Three-tier stratification into Ashraf (nobility), Ajlaf (clean artisans), and Arzal (degraded)',
        'Pasmanda assertion: Mobilization of backward and Dalit Muslims against Ashraf institutional hegemony',
        'Christianity & Caste: Syrian Christians claiming upper-caste status vs Dalit Christians suffering dual pews and segregated burial',
        'Regional customs: Matrilineal Mappila Muslims of Kerala and Christian tribal customary law in Nagaland',
      ],
    },
    {
      title: 'Hindu Diversity & Sarna Demand',
      color: 'pink',
      thinkers: ['B.R. Ambedkar', 'M.N. Srinivas', 'Verrier Elwin', 'K.S. Singh'],
      points: [
        'Internal Hindu pluralism: Shaiva, Vaishnava, Shakta sects alongside Arya Samaj and neo-Vedantic movements',
        'Little vs Great traditions: Gramadevatas and localized animism coexisting with Sanskritic high-ritual orthodoxy',
        'Sarna religion movement: Adivasi nature worship (Jaherthan, sacred sal groves) resisting assimilation into Hindu fold',
        'Census classification struggle: Demand for distinct Sarna code to safeguard tribal customary autonomy and identity',
      ],
    },
  ],
}

const sections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u08-01-religious-communities-web.webp',
    alt: 'P2 Unit 8 infographic: Religious Communities in India — Demographic Pluralism & Syncretic Traditions in India',
    caption: 'Demographic Pluralism & Syncretic Traditions in India (Religious Communities in India).',
  },
  {
    kind: 'md',
    body: `### 1. Demographic Pluralism and the Mosaic of Faiths

India is home to nearly all major world religions, making it one of the most religiously diverse societies on the planet. Rather than melting these diverse groups into a single uniform culture, Indian civilization evolved as a complex cultural mosaic where communities maintained distinct sacred practices while sharing common vernacular lifeworlds. In sociology, this phenomenon is conceptualized as ==Cultural Pluralism==—a condition where multiple religious and cultural groups coexist within a shared political framework without losing their distinctive communal identities.

According to the Census 2011, India's religious demography reflects both demographic dominance and rich minority presence:
- **Hindus**: 79.8% (966.3 million)
- **Muslims**: 14.2% (172.2 million — the third-largest Muslim population globally)
- **Christians**: 2.3% (27.8 million — heavily concentrated in the South, North-East, and western coastal belts)
- **Sikhs**: 1.7% (20.8 million — primarily concentrated in Punjab and northern urban pockets)
- **Buddhists**: 0.7% (8.4 million — largely Neo-Buddhists inspired by [[thinker:B.R. Ambedkar]] alongside Himalayan monastic traditions)
- **Jains**: 0.4% (4.5 million — prominent commercial and urban minority)
- **Other Religions & Persuasions (ORP)**: 0.7% (including tribal animists like Sarna, Sanamahi, and Donyi-Polo)
- **Religion Not Stated**: 0.2%

| Religious Community | Census 2011 Share | Key Regional Concentrations | Dominant Sociological Characteristics |
| :--- | :--- | :--- | :--- |
| **Hindus** | 79.8% | Pan-Indian majority (except Punjab, J&K, Lakshadweep, Mizoram, Nagaland, Meghalaya) | Sectarian pluralism (Vaishnava, Shaiva, Shakta); varna-jati stratification; Little-Great tradition interface |
| **Muslims** | 14.2% | UP, WB, Bihar, Kerala, Assam, J&K, Telangana | Ashraf-Ajlaf-Arzal hierarchy; Pasmanda movement; Sufi shrines; regional linguistic assimilation |
| **Christians** | 2.3% | Kerala, Goa, Tamil Nadu, Nagaland, Mizoram, Meghalaya | Denominational splits (Catholic, Protestant, Syrian); caste persistence (Dalit Christians); tribal indigenization |
| **Sikhs** | 1.7% | Punjab, Haryana, Delhi, Rajasthan | Egalitarian theology (Sangat-Pangat, Langar); Jat vs Mazhabi/Ramgarhia caste divisions |
| **Buddhists** | 0.7% | Maharashtra, Ladakh, Sikkim, Arunachal Pradesh | Navayana conversion movement among Dalits; Theravada and Tibetan Vajrayana traditions |
| **Jains** | 0.4% | Maharashtra, Rajasthan, Gujarat, MP | Digambara and Shvetambara sects; high literacy and urban business mobility; strict Ahimsa ethics |

Sociologist [[thinker:Yogendra Singh]] pointed out that the continuity of Indian society does not rest on static homogeneity, but on a dynamic equilibrium between *orthogenetic* (indigenous) and *heterogenetic* (external) traditions. India's unity in diversity operates not as a melting pot where differences vanish, but as an expansive salad bowl where each ingredient preserves its distinct texture while enriching the collective flavor [[eg:In Old Delhi's Chandni Chowk, Sri Digambar Jain Lal Mandir, Gauri Shankar Hindu Temple, Central Baptist Church, Gurdwara Sis Ganj Sahib, and Fatehpuri Masjid stand within walking distance along a single historic road]].`,
  },
  {
    kind: 'compare',
    leftTitle: 'Melting Pot (Assimilationist Model)',
    rightTitle: 'Cultural Pluralism (Salad Bowl / Mosaic Model)',
    rows: [
      {
        aspect: 'Core Philosophy',
        left: 'Minorities surrender distinct traditions to dissolve into a single dominant national culture',
        right: 'Distinct religious and ethnic groups coexist with equal dignity under a shared constitutional umbrella',
      },
      {
        aspect: 'View on Differences',
        left: 'Cultural and religious differences are viewed as friction, backwardness, or threats to national unity',
        right: 'Differences are celebrated as civilizational assets that enrich collective social capital',
      },
      {
        aspect: 'State Role',
        left: 'State actively enforces uniform cultural linguistic codes and assimilation policies',
        right: 'State acts as a neutral facilitator protecting minority rights (Articles 25–30 in India)',
      },
      {
        aspect: 'Indian Experience',
        left: 'Rejected by India’s Constitution-makers as authoritarian and unsuited to civilizational reality',
        right: 'Realized through composite culture (Ganga-Jamuni Tehzeeb) and principled secular distance',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 2. Everyday Syncretism and Shared Sacred Geographies

Sociologists distinguish between ==textual religion== (dogmas, scriptures, theological edicts) and ==lived religion== (how ordinary people actually practice faith in their everyday lives). In India, while theological boundaries are rigid, everyday popular practices have historically exhibited remarkable mutual exchange and syncretism. Syncretism refers to the blending of beliefs, rituals, and symbols from distinct religious systems into a harmonious hybrid practice.

Political psychologist [[thinker:Ashis Nandy]] argued that traditional Indian society maintained communal harmony through *instinctive vernacular tolerance* rather than modern state secularism. Similarly, [[thinker:T.N. Madan]] demonstrated that religious identities in South Asia were traditionally non-exclusive at the grassroots, where boundaries were porous and sacred figures were venerated across communal lines [[eg:At the Dargah of Sufi Saint Khwaja Moinuddin Chishti in Ajmer, over 60 percent of annual pilgrims are non-Muslims who offer Chadars and tie sacred threads (Mannat) for family well-being]].

Key arenas of everyday syncretism include:
1. **Sufi Dargahs and Pirs**: Sufi shrines have historically served as open contact zones where caste barriers and religious boundaries dissolve. The Urs celebrations of Hazrat Nizamuddin Auliya in Delhi or Haji Ali in Mumbai see active participation of Hindus, Sikhs, and Parsis.
2. **Shared Pilgrimages and Dual Shrines**: Pilgrimages often institutionalize inter-faith communion [[eg:Every devotee undertaking the Sabarimala pilgrimage in Kerala must first circumambulate and offer prayers at the Vavar Swamy Mosque, dedicated to a Muslim warrior friend of Lord Ayyappa]].
3. **Cross-Faith Marian Shrines**: The Basilica of Our Lady of Good Health in Velankanni (Tamil Nadu) is known as the "Lourdes of the East"; hundreds of thousands of Hindu and Muslim pilgrims tonsure their heads, apply sandalwood paste, and pierce ears in a distinctively South Indian ritual idiom.
4. **Folk Festivals and Commensality**: Festivals like Chhath Puja in Bihar witness active collaboration where Muslim craftsmen weave bamboo baskets (Soop) for Hindu worshippers, while Muharram processions in rural Maharashtra, Karnataka, and Bengal feature Hindu participants playing Tasha and carrying Tazias.`,
  },
  {
    kind: 'flow',
    direction: 'horizontal',
    steps: [
      {
        label: 'Scriptural Egalitarianism',
        text: 'Islam and Christianity preach universal spiritual equality and reject ritual hierarchy',
      },
      {
        label: 'Encounter with Varna-Jati Order',
        text: 'Converts from indigenous Hindu strata carry occupational identities and pollution taboos',
      },
      {
        label: 'Structural Stratification',
        text: 'Emergence of Ashraf/Ajlaf/Arzal tiers in Islam and Syrian vs Dalit tiers in Christianity',
      },
      {
        label: 'Subaltern Mobilization',
        text: 'Pasmanda Muslim and Dalit Christian movements demanding recognition and affirmative action',
      },
    ],
  },
  {
    kind: 'md',
    body: `### 3. Islam and Christianity in India: Interaction with Caste and Local Customs

A defining contribution of Indian sociology has been the empirical proof that egalitarian religions like Islam and Christianity undergo structural adaptation when embedded in Indian society. Although scriptures strictly prohibit hierarchy, both religions evolved distinct caste-like endogamous divisions and observed local customs.

#### A. Caste and Social Stratification Among Indian Muslims
Pioneering sociologist [[thinker:Imtiaz Ahmad]] edited the benchmark four-volume series (*Caste and Social Stratification among Muslims in India*), proving that Indian Muslims are internally stratified into endogamous status groups structured like jatis:
1. **Ashraf (The Noble/Upper Tier)**: Groups claiming foreign noble lineage from Central Asia or Arabia, including *Sayyids* (descendants of the Prophet), *Sheikhs*, *Mughals*, and *Pathans*. They historically monopolized landed estates, religious jurisprudence, and administrative power.
2. **Ajlaf (Clean Occupational Converts)**: Backward indigenous converts who retained their hereditary artisanal occupations, such as *Julahas/Ansaris* (weavers), *Dhobis* (washermen), *Telis* (oil-pressers), *Darzis* (tailors), and *Rayeen/Kunjras* (vegetable sellers).
3. **Arzal (The Degraded/Untouchable Converts)**: Communities converted from lowest Hindu scavenging and leather-working castes, including *Halalkhors* (scavengers), *Lalbegis*, and *Bakkhos*. They experience residential segregation and severe social distance from Ashraf elites.

This structural divide gave rise to the contemporary **Pasmanda Muslim Movement** (spearheaded by Ali Anwar and Ejaz Ali), which critiques Ashraf dominance over minority institutions (such as the All India Muslim Personal Law Board and Waqf boards) and demands OBC and Scheduled Caste reservations for subaltern Muslims. Furthermore, local customs deeply permeate Muslim rites: the *Mehendi*, *Haldi*, and *Sehra-bandi* wedding ceremonies directly reflect regional Hindu wedding customs, and matrilineal inheritance thrives among the Mappila Muslims of Malabar and the islanders of Lakshadweep.

#### B. Christianity, Caste, and Regional Synthesis
Christianity arrived in India through two distinct historical waves: the ancient first-century apostolic arrival of St. Thomas in Kerala, and colonial-era European missionary conversions. Sociologist Rowena Robinson (*Christians of India*) and John Webster documented how Christianity internalized the varna-jati logic:
- **Syrian Christians of Kerala**: They claim high-caste Brahmanical ancestry, historically enjoyed dominant landholding status, practiced strict endogamy, and observed ritual purity rules against lower-caste Christians.
- **Dalit Christians**: Converted in large numbers during the 19th and 20th centuries to escape caste humiliation, yet faced enduring discrimination within the Church. Robinson and Ninan Koshy highlighted the reality of *dual pews* in rural Tamil Nadu, separate cemeteries, distinct chalices during communion, and severe under-representation in the clerical hierarchy.
- **Tribal Christianity in North-East India**: In Nagaland, Mizoram, and Meghalaya, Christianity blended seamlessly with indigenous clan leadership and customary practices, forming an ethnic identity marker rather than replicating varna stratification.`,
  },
  {
    kind: 'md',
    body: `### 4. Internal Diversity in Hinduism and the Sarna Religion Demand

Hinduism is not a monolith or an organized ecclesia; it is an umbrella civilizational framework encompassing vast philosophical systems, competing sects, and distinct vernacular folk traditions.

#### A. Socio-Religious Diversity within Hinduism
- **Sectarian Traditions**: Major theological streams include *Vaishnavism* (devotion to Vishnu/Krishna/Rama, emphasizing Bhakti and vegetarianism), *Shaivism* (focus on Shiva and asceticism, popular across Kashmir, Tamil Nadu, and Karnataka), and *Shaktism* (worship of Devi/Mother Goddess, prominent in Bengal, Assam, and coastal zones).
- **Reformist and Sectarian Movements**: The 19th-century Bengal Renaissance and socio-religious reforms spawned the *Brahmo Samaj* (monotheism, anti-idol worship), *Arya Samaj* (Dayanand Saraswati's "Back to the Vedas", Shuddhi movement), and modern neo-Vedantic global sects like *Ramakrishna Mission* and *ISKCON*.
- **Little vs. Great Traditions**: Sociologists [[thinker:M.N. Srinivas]] and McKim Marriott highlighted the dialectic between Brahminical Sanskritic Hinduism (the *Great Tradition*) and localized folk deities (*Little Tradition*), such as *Gramadevatas* (village guardian deities like Mariamman, Shitala, Ayyanar) who are propitiated through vernacular animal sacrifice and shamanistic trance rather than Vedic mantras.
- **Subaltern Critiques**: Subaltern thinkers like [[thinker:B.R. Ambedkar]] (*Riddles in Hinduism*) and Kancha Ilaiah Shepherd (*Why I Am Not a Hindu*) critiqued mainstream Brahminical Hinduism for masquerading caste supremacy as universal spiritual dharma.

#### B. The Sarna Religion Demand Among Tribal Groups
A major contemporary socio-religious movement in central-eastern India (Jharkhand, Odisha, West Bengal, and Chhattisgarh) is the tribal mobilization for an independent **Sarna Religious Code** in the national Census.
- **The Core of Sarnaism**: Sarna is an indigenous nature-worshiping faith centered on sacred groves (*Jaherthan* or *Sarna Sthal*). The Santals, Oraons, Mundas, and Hos revere nature spirits (*Bongas*) and believe that the protective deity *Singbonga* and Mother Nature (*Dharmi*) reside in sacred Sal groves. Their faith has no temples, no idols, no sacred scriptures, and no varna hierarchy.
- **Colonial Classification & Post-Independence Erasure**: In the colonial census up to 1931, tribal groups were classified under autonomous categories like "Animists" or "Aboriginal Religions". However, in 1951, the independent Indian state merged them into the generic "Other Religions" category or administratively treated them as Hindus.
- **The Double Threat and Assertion**: Adivasi organizations argue that their faith faces a dual threat: aggressive *Sanskritization/Hindutva assimilation* on one side, and *Christian missionary proselytization* on the other. In November 2020, the Jharkhand State Legislative Assembly passed a unanimous resolution demanding the inclusion of a separate 'Sarna Code' in the upcoming Census, asserting that without an autonomous religious classification, tribal customary land tenure (under the Chota Nagpur Tenancy Act and Santhal Parganas Tenancy Act) and unique linguistic-cultural identities are gradually dismantled.`,
  },
  {
    kind: 'keyTerm',
    term: 'Cultural Pluralism',
    meaning: 'A structural arrangement where diverse religious and cultural groups maintain their distinct collective identities and practices while sharing equal citizenship and mutual recognition within a single nation-state.',
  },
  {
    kind: 'keyTerm',
    term: 'Everyday Syncretism',
    meaning: 'The grass-roots blending of religious rituals, symbols, and sacred spaces in vernacular daily life, transcending orthodox theological boundaries through shared pilgrimage, folk music, and local festivals.',
  },
  {
    kind: 'keyTerm',
    term: 'Ashraf-Ajlaf-Arzal Stratification',
    meaning: 'The three-tier socio-economic hierarchy among Indian Muslims formulated by Imtiaz Ahmad, separating noble foreign-lineage elites (Ashrafs) from clean artisan converts (Ajlafs) and degraded Dalit converts (Arzals).',
  },
  {
    kind: 'keyTerm',
    term: 'Sarna Code Demand',
    meaning: 'The collective political and demographic movement by Adivasi tribes (Mundas, Oraons, Santals) demanding a distinct census religious classification column to safeguard their nature-worshiping animist identity from Hindu or Christian absorption.',
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'Paper 1 ↔ Paper 2 Integration',
    body: 'In Paper 1 (Durkheim and Weber), religion is analyzed through collective effervescence, sacred-profane dichotomies, and charismatic movements. In Paper 2, connect these concepts to Indian empirical realities: show how Sufi Dargahs generate inter-community collective effervescence, while Weberian status groups manifest in the caste-like Ashraf-Ajlaf divide and Dalit Christian exclusion.',
  },
  {
    kind: 'callout',
    variant: 'galtiMat',
    title: 'Avoid Textbook Over-Simplifications',
    body: 'Never describe Indian Islam or Christianity as monolithic, casteless entities. Always cite Imtiaz Ahmad and Rowena Robinson to demonstrate that egalitarian religions adopted the structural features of jati hierarchy. Also, note the correct demographic figures: Indian Christians constitute 2.3% of the population, not 23%.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'The Sarna Epistemology',
    body: 'Sarna is not a sub-sect or reformed branch of Hinduism. It is an autonomous, biocentric animist cosmology rooted in sacred Sal groves, communal consensus (Pahan/Manjhi), and reverence for nature, completely devoid of Brahmanical priesthood, karma-samsara doctrine, or varna divisions.',
  },
  {
    kind: 'answerBox',
    intro: 'Cultural pluralism in India is neither an accidental byproduct of demographic heterogeneity nor an imposition of Western secularism; it is the civilizational infrastructure of India’s Unity in Diversity, sustained through everyday syncretism and institutionalized accommodation.',
    points: [
      'Constitutional Architecture: Articles 25 to 30 guarantee freedom of conscience, the right to profess and propagate religion, and the protection of minority cultural and educational institutions without demanding melting-pot assimilation.',
      'Lived Religion over Textual Dogma: While scriptural canons enforce mutual exclusion, popular religion (Ashis Nandy, T.N. Madan) historically operated as open contact zones where Hindus, Muslims, and Sikhs shared Sufi Dargahs, Marian shrines, and seasonal harvest rituals.',
      'Internal Heterogeneity of All Faiths: Pluralism exists not only between faiths but within each faith—illustrated by sectarian currents in Hinduism, Ashraf-Pasmanda divisions in Islam, and Syrian-Dalit divides in Christianity.',
      'Sarna Assertion as Pluralist Deepening: The Adivasi demand for a distinct Sarna religion code highlights that India’s pluralism must recognize indigenous nature-worship alongside classical world religions.',
      'Challenges of Majoritarian Hegemony: Rising majoritarian rhetoric and competitive communalism threaten this equilibrium by attempting to homogenize composite traditions into rigid, antagonistic communal binaries.',
    ],
    conclusion: 'To preserve India’s civilizational genius, the Indian state and civil society must nurture the salad-bowl model of cultural pluralism, ensuring that constitutional secularism is reinforced by grassroots everyday fraternity and structural social justice.',
  },
]

export const topic1En: TopicLangContent = {
  summary:
    'Comprehensive sociological analysis of religious communities in India: Census 2011 demographic breakdown, cultural pluralism vs melting-pot models, everyday syncretism at Sufi and Marian shrines, caste stratification in Indian Islam (Ashraf/Ajlaf/Arzal) and Christianity (Syrian/Dalit), internal sectarian diversity within Hinduism, and the indigenous Adivasi mobilization for the Sarna Religion Code.',
  mindMap,
  sections,
}

export default topic1En
