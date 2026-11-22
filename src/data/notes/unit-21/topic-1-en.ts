import type { MindMapData, NotebookSection } from '@/lib/notes/notebook-types'

export const topic1EnMindMap: MindMapData = {
  title: 'Topic 1 · Evolution of Modern Industry in India',
  center: 'Evolution of Modern Industry',
  subtitle: 'Colonial Deindustrialization • Nehruvian PSUs • 1991 Neoliberalism • Caste & Conglomerates',
  branches: [
    {
      title: 'Colonial Rupture & Deindustrialization',
      color: 'lavender',
      thinkers: ['Dadabhai Naoroji', 'R.C. Dutt', 'Amiya Kumar Bagchi', 'Karl Marx'],
      points: [
        'Drain Theory: Naoroji on unrequited transfer of surplus capital to Britain',
        'R.C. Dutt & Bagchi: systematic destruction of artisanal handloom textile hubs',
        'Colonial railway tariff distortion: raw material extraction over internal trade',
        'Enclave industrialization: isolated coastal port hubs (Bombay cotton, Calcutta jute)',
      ],
    },
    {
      title: 'Post-Independence Nehruvian Era',
      color: 'yellow',
      thinkers: ['Jawaharlal Nehru', 'P.C. Mahalanobis', 'A.R. Desai', 'Gunnar Myrdal'],
      points: [
        'Mahalanobis strategy: Second Five-Year Plan prioritizing heavy capital goods',
        'Temples of modern India: PSUs (Bhilai, Rourkela, BHEL) building foundational base',
        'A.R. Desai critique: state capitalism absorbing risks to foster private bourgeoisie',
        'License-Permit Raj: bureaucratic rationing creating shortages and cronyism',
      ],
    },
    {
      title: 'The Neoliberal Turn (Post-1991)',
      color: 'mint',
      thinkers: ['C.P. Chandrasekhar', 'Jayati Ghosh', 'Leela Fernandes', 'Pranab Bardhan'],
      points: [
        'Dismantling of licensing: deregulation, FDI inflows, disinvestment of PSUs',
        'Premature deindustrialization: leapfrogging directly to IT and services sector',
        'Spatial clustering: high-tech corridors in Bengaluru, Hyderabad, and Gurugram',
        'Labour informalisation: contractualization and suppression of organized labour',
      ],
    },
    {
      title: 'Caste & Corporate Conglomerates',
      color: 'pink',
      thinkers: ['Harish Damodaran', 'D.L. Sheth', 'B.R. Ambedkar', 'Max Weber'],
      points: [
        'Traditional mercantile dominance: Marwari, Parsi, Gujarati Bania, Chettiar family firms',
        'Agrarian-capitalist transition: rise of Patidars, Kammas, Reddys into industry',
        'Caste as social capital: trust networks in credit, supplier links, and boardrooms',
        'Subaltern exclusion: negligible Dalit and Adivasi presence in corporate ownership',
      ],
    },
  ],
}

export const topic1EnSections: NotebookSection[] = [
  {
    kind: 'figure',
    assetFile: 'p2-u11-01-urbanization-industry-flow.webp',
    alt: 'P2 Unit 11 infographic: Industry & Urban Settlements in India — Colonial Deindustrialization to Over-Urbanization',
    caption:
      'The historical trajectory of Indian industry shifted from colonial artisanal destruction to Nehruvian public-sector heavy machinery, and finally to post-1991 service-led corporate capitalism.',
    credit: 'UPSC OWL Studio · Paper 2 Unit 21 Visual 01',
  },
  {
    kind: 'md',
    body: `## The Colonial Rupture: Deindustrialization and the Drain of Wealth

Modern industry in India did not emerge organically from an indigenous agrarian revolution as it did in Western Europe. Instead, British colonial rule forcibly reorganized the subcontinent into an exporter of agricultural raw materials and a captive market for British factory manufactures. Traditional Indian artisans, renowned globally for handloom cottons, silk, and metal craft, were systematically wiped out without any domestic factory system ready to absorb them.

Colonial economic exploitation was theorized by early nationalist pioneers. In *Poverty and Un-British Rule in India*, [[thinker:Dadabhai Naoroji]] formulated the ==Drain of Wealth== theory, demonstrating how agricultural surplus and tax revenue were extracted from Indian peasants and transferred to Britain as unrequited exports, "Home Charges," and imperial pensions. Concurrently, [[thinker:R.C. Dutt]] in *The Economic History of India* demonstrated that discriminatory tariffs and transit duties crippled domestic weavers while opening Indian markets freely to Manchester textiles.

### The Mechanism of Colonial Underdevelopment
Sociologist and historian [[thinker:Amiya Kumar Bagchi]] provided empirical validation of ==Deindustrialization== in Gangetic Bihar and Bengal:
- The proportion of the workforce dependent on agriculture increased drastically from the late 18th to the early 20th century.
- Artisans thrown out of guild occupations were driven back into an already overcrowded agrarian countryside, transforming skilled master craftsmen into bonded sharecroppers and landless agricultural labourers.
- [[thinker:Karl Marx]] remarked in his *New York Daily Tribune* dispatches that British steam and science broke down the entire framework of Indian society, shattering the self-sufficient village union of agriculture and domestic hand-weaving.

### Colonial Railways and Uneven Industrial Geography
While [[thinker:Karl Marx]] anticipated that the railway network would prove the forerunner of modern industry in India, colonial infrastructure was deliberately designed to serve imperial extractivism. Lord Dalhousie's railway grid connected the resource-rich hinterland directly to three colonial port metropolises: Calcutta, Bombay, and Madras.

Colonial freight policies charged significantly lower rates for hauling raw materials from the hinterland to coastal ports and manufactured goods inward, while charging prohibitive rates for internal inter-regional trade. As a result, early modern factories developed exclusively as **enclave industries** — British-owned jute mills along the Hooghly in Bengal, Indian-owned cotton textile mills in Bombay and Ahmedabad, and extractive coal and iron mines in the Chota Nagpur belt. The vast interior of India remained industrially barren.`,
  },
  {
    kind: 'compare',
    leftTitle: 'Organic Western Industrialization',
    rightTitle: 'Colonial Indian Trajectory',
    rows: [
      {
        aspect: 'Historical Catalyst',
        left: 'Agrarian enclosure acts and indigenous technological innovations fueled domestic factory output.',
        right: 'Colonial state policy destroyed indigenous artisans to feed Manchester textile demand.',
      },
      {
        aspect: 'Workforce Transition',
        left: 'Surplus rural labour smoothly transitioned into expanding urban industrial manufacturing.',
        right: 'Deindustrialization pushed displaced urban artisans backward into crowded subsistence agriculture.',
      },
      {
        aspect: 'Spatial Integration',
        left: 'Transport networks created deeply integrated, dense domestic consumer and factor markets.',
        right: 'Enclave development linked port cities to London, leaving the domestic hinterland disconnected.',
      },
      {
        aspect: 'State Role',
        left: 'Mercantilist and tariff protection defended nascent domestic industries from foreign competition.',
        right: 'Free-trade imperialism imposed zero tariffs on British goods while taxing Indian manufactures.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## Post-Independence Industrialization: Nehruvian PSUs and the "Temples of Modern India"

When India attained independence in 1947, the national leadership inherited a truncated industrial structure producing consumer goods but lacking heavy capital machinery, machine tools, and metallurgy. To overcome this crippling dependency, Prime Minister [[thinker:Jawaharlal Nehru]] and statistician [[thinker:P.C. Mahalanobis]] designed the **Second Five-Year Plan (1956–1961)**, placing the public sector at the ==Commanding Heights of the Economy==.

Nehru famously designated massive integrated steel mills, hydroelectric dams, and heavy machinery plants as the **temples of modern India**. [[eg:Massive public sector enterprises such as the Bhilai, Rourkela, and Durgapur steel plants, Bharat Heavy Electricals Limited (BHEL), and the Oil and Natural Gas Corporation (ONGC) were established in backward agrarian districts to act as regional development poles.]]

### Sociological Dimensions of the PSU Model
1. **Creation of an Organized Working-Class Elite**: Public Sector Undertakings (PSUs) offered permanent job security, subsidized company housing, healthcare, schools, and constitutional reservations for Scheduled Castes and Scheduled Tribes. This created an upwardly mobile subaltern working-class stratum.
2. **State Capitalism vs Socialist Welfare**: Marxist sociologist [[thinker:A.R. Desai]] critically demonstrated that the Nehruvian state was not socialist but **state capitalist**. The state absorbed the enormous capital risks and long gestation periods required to build basic infrastructure (power grids, railways, steel), thereby supplying cheap raw materials and machinery to private bourgeois conglomerates like the Tatas and Birlas.
3. **The License-Permit-Quota Raj**: Rigorous industrial licensing designed to prevent wealth concentration ended up creating bureaucratic red tape, rent-seeking, and artificial production quotas that protected established corporate monopolies from domestic competition.`,
  },
  {
    kind: 'timeline',
    items: [
      {
        year: '1850s',
        title: 'Enclave Factory Emergence',
        text: 'First steam-powered cotton mill in Bombay (Cowasjee Nanabhoy Davar) and jute mill in Rishra (Calcutta).',
      },
      {
        year: '1907',
        title: 'Indigenous Heavy Industry',
        text: 'Jamsetji Tata establishes the Tata Iron and Steel Company (TISCO) at Sakchi (Jamshedpur) despite colonial skepticism.',
      },
      {
        year: '1956',
        title: 'Mahalanobis Plan & IPR 1956',
        text: 'Industrial Policy Resolution establishes public sector commanding heights and state-led heavy capital goods.',
      },
      {
        year: '1991',
        title: 'New Economic Policy (LPG)',
        text: 'Abolition of industrial licensing, entry of foreign direct investment, and rapid rise of IT and services.',
      },
    ],
  },
  {
    kind: 'md',
    body: `## The Neoliberal Shift (Post-1991): Services-Led Growth and Flexible Labour

The fiscal and balance-of-payments crisis of 1991 compelled the Indian state to dismantle the License Raj and inaugurate Liberalisation, Privatisation, and Globalisation (LPG). Rather than transitioning from agriculture to large-scale labour-intensive manufacturing (the East Asian model), India experienced an unconventional leapfrog directly into the tertiary services sector.

The emergence of high-tech Information Technology (IT) and Business Process Outsourcing (BPO) clusters in Bengaluru, Hyderabad, Gurugram, and Pune generated significant export revenues. However, sociologists point out that this service-led growth created deep structural paradoxes:
- **Premature Deindustrialization**: Manufacturing stagnated around 15–17% of GDP, failing to absorb the massive pool of rural youth migrating away from agriculture.
- **Rise of the Gated Tech Elite**: High-tech enclaves created stark socio-spatial inequalities, contrasting air-conditioned tech campuses with neighbouring slums and water-deprived informal settlements.
- **Contractualization and Precarity**: To compete globally, private industrial manufacturing adopted flexible production models, replacing permanent unionized employees with contractual and gig workers with zero pension or tenure security.`,
  },
  {
    kind: 'callout',
    variant: 'upscAngle',
    title: 'UPSC Trap: "Did India Skip the Industrial Stage?"',
    body: 'In Paper 2, avoid treating the rise of IT and services as an unalloyed success. Always balance GDP growth figures with sociological deficits: capital-intensive services absorb only educated upper/middle-class graduates, leaving 90% of the workforce trapped in low-productivity agriculture or vulnerable informal labour.',
  },
  {
    kind: 'md',
    body: `## Caste, Kinship, and Family Conglomerates in Indian Corporate Capitalism

Contrary to classical modernization theories which predicted that modern industrial capitalism would dissolve primordial caste ties into open class relations, Indian corporate capitalism has actively integrated caste and family networks. In *India's New Capitalists: Caste, Business, and Industry in a Modern Nation*, journalist and sociologist [[thinker:Harish Damodaran]] showed how business ownership in India evolved along distinct caste-based trajectories:

1. **Traditional Mercantile Castes**: The Marwaris, Gujarati Banias, Parsis, and Chettiars converted traditional community lending (*hundi* networks) and family loyalty into modern corporate empires (e.g., Birla, Ambani, Godrej, Piramal).
2. **The Agrarian-to-Industrial Trajectory**: Post-Green Revolution prosperity allowed dominant agrarian castes to diversify their surplus into industrial enterprises — the Kammas and Reddys in Andhra Pradesh and Telangana (pharma and infrastructure), Patidars in Gujarat (diamonds and textiles), and Gounders in Tamil Nadu (textile export hubs in Tirupur).
3. **Caste as Social Capital**: Kinship networks provide seed capital, reliable managerial recruits, and boardroom trust, effectively shielding corporate ownership from subaltern outsiders.
4. **Subaltern Exclusion**: Studies by D.L. Sheth and Surinder Jodhka demonstrate that Dalits, Adivasis, and Muslims remain almost entirely absent from the boards and equity ownership of large corporate enterprises, underscoring that the free market in India operates through entrenched social networks.`,
  },
  {
    kind: 'keyTerm',
    term: 'Deindustrialization',
    meaning:
      'The historical process under British colonial rule where traditional Indian handloom weavers and artisans were wiped out by cheap Lancashire factory goods, forcing craftsmen backward into agriculture.',
  },
  {
    kind: 'keyTerm',
    term: 'Commanding Heights of the Economy',
    meaning:
      'The strategic doctrine of the Nehru-Mahalanobis planning model where the state directly controlled core infrastructure and heavy capital goods (steel, power, mining) while regulating private capital.',
  },
  {
    kind: 'keyTerm',
    term: 'Enclave Industrialization',
    meaning:
      'The development of isolated, export-oriented industrial pockets (such as colonial Bombay and Calcutta ports) that had little integration with or benefit to the broader domestic rural hinterland.',
  },
  {
    kind: 'keyTerm',
    term: 'India’s New Capitalists (Harish Damodaran)',
    meaning:
      'A sociological concept charting the diversification of Indian capitalism beyond traditional mercantile Banias to include agrarian castes like Patidars, Kammas, and Gounders into modern industrial entrepreneurship.',
  },
  {
    kind: 'callout',
    variant: 'yaadRakho',
    title: 'Exam Formula: Caste in Modern Industry',
    body: 'Never view modern Indian corporations as purely meritocratic Weberian rational bureaucracies. Use Harish Damodaran and Surinder Jodhka to explain how caste functions as crucial social capital, family trust networks, and an informal barrier to subaltern entry.',
  },
  {
    kind: 'answerBox',
    intro:
      'Model answer structure for contrasting Western industrialization with the Indian industrial trajectory:',
    points: [
      'Historical trajectory: Western industrialization unfolded organically from domestic agrarian surpluses and technological inventions; Indian industry was shaped by colonial deindustrialization and forced raw material export.',
      'Labour absorption: Western factories absorbed rural workers evicted by enclosure acts; in colonial India, displaced artisans were pushed back onto overburdened agrarian land, pauperising the peasantry.',
      'Spatial dynamics: Western industrial cities integrated national hinterlands; colonial Indian railways and freight tariffs produced isolated enclave port metropolises (Bombay, Calcutta) serving imperial trade.',
      'Post-independence state intervention: The Nehruvian state occupied the commanding heights via PSUs (Mahalanobis model) to construct capital infrastructure, acting as state capitalism (A.R. Desai).',
      'Contemporary neoliberal shift: Post-1991 India bypassed mass manufacturing to become an IT/services powerhouse, leaving 90% of industrial and manual labour in precarious informality.',
    ],
    conclusion:
      'Modern Indian industrialization remains a dualistic structure: advanced corporate capital and high-tech enclaves coexist with massive labour informalisation and enduring caste-based business control.',
  },
]
