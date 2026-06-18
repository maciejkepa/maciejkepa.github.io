export const siteConfig = {
  name: 'Beyond the Notebook',
  owner: 'Maciej Kępa',
  role: 'Data & AI Engineer / Architect',
  url: 'https://maciejkepa.dev',
  tagline: 'Practical notes on Data, AI, ML and production-grade engineering.',
  description:
    'Editorial field notes on production-grade AI, MLOps, data platforms, cloud-native ML systems and the engineering reality behind modern AI.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/blog/', label: 'Blog' },
    { href: '/topics/', label: 'Topics' },
    { href: '/speaking/', label: 'Speaking' },
    { href: '/about/', label: 'About' },
    { href: '/projects/', label: 'Projects' }
  ],
  links: {
    github: 'https://github.com/maciejkepa',
    linkedin: 'https://www.linkedin.com/in/maciej-kepa/',
    sessionize: 'https://sessionize.com/maciej-kepa/',
    company: 'https://www.datumo.io/',
    rss: '/rss.xml'
  }
};

export const topicDefinitions = [
  {
    label: 'MLOps',
    slug: 'mlops',
    description: 'Delivery, observability, CI/CD, governance and the operational backbone of ML systems.'
  },
  {
    label: 'Data Engineering',
    slug: 'data-engineering',
    description: 'Pipelines, lakehouse architecture, orchestration and the less glamorous layers that keep data products alive.'
  },
  {
    label: 'AI Architecture',
    slug: 'ai-architecture',
    description: 'Reference architectures, trade-offs and platform decisions behind production AI systems.'
  },
  {
    label: 'Azure',
    slug: 'azure',
    description: 'Applied Azure patterns for ML, data platforms, security and delivery workflows.'
  },
  {
    label: 'Databricks',
    slug: 'databricks',
    description: 'Operational Databricks patterns for apps, AI Search, data products and production-facing ML or GenAI systems.'
  },
  {
    label: 'Observability',
    slug: 'observability',
    description: 'Monitoring, feedback loops, data quality signals and the runtime visibility needed to keep ML systems trustworthy.'
  },
  {
    label: 'Tutorials',
    slug: 'tutorials',
    description: 'Step-by-step implementation notes focused on shipping, not slideware.'
  }
];

export const speakingSessions = [
  {
    title: "A Hitchhiker's guide to AI/ML",
    focus: 'A practical starting map for entering AI/ML without getting lost in tooling, hype and bad early decisions.',
    event: 'SQLDay',
    year: '2025',
    sortDate: '2025-05-13',
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/a-hitchhikers-guide-to-aiml/128451',
    eventUrl: 'https://sqlday.pl/en/sqlday-2025/'
  },
  {
    title: 'Understand your data landscape with Observability platform',
    focus: 'Designing data observability in Azure so teams know what data exists, how it moves and whether it can be trusted.',
    event: 'SQLDay',
    year: '2025',
    sortDate: '2025-05-13',
    featuredRank: 2,
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/understand-your-data-landscape-with-observability-/128452',
    eventUrl: 'https://sqlday.pl/en/sqlday-2025/'
  },
  {
    title: 'Efficient data streaming solutions at Scale with Azure',
    focus: 'Streaming architectures and Azure-native delivery patterns for reliable data movement and processing at scale.',
    event: 'MS Tech Summit',
    year: '2025',
    sortDate: '2025-06-11',
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/efficient-data-streaming-solutions-at-scale-with-a/173925',
    eventUrl: 'https://mstechsummit.pl/'
  },
  {
    title: 'MLOps on Azure - war stories and lessons learned',
    focus: 'Operationalizing ML in regulated and edge-heavy environments through real production lessons from Azure-based systems.',
    event: 'AIBA Conference',
    year: '2025',
    sortDate: '2025-10-08',
    featuredRank: 1,
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/mlops-on-azure-war-stories-and-lessons-learned/111672',
    eventUrl: 'https://aibaconference.com/aiba-conference-2025/'
  },
  {
    title: 'Databricks Overwatch - the Dashboard that sees everything',
    focus: 'Monitoring Databricks environments through Overwatch, from installation to dashboards and production lessons learned.',
    event: 'SQLDay Lite',
    year: '2025',
    sortDate: '2025-10-17',
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/databricks-overwatch-the-dashboard-that-sees-every/144743/',
    eventUrl: 'https://sqlday.pl/lite/'
  },
  {
    title: 'BigQuery, Vertex AI or Databricks? Don’t choose - combine them!',
    focus: 'A reference architecture for building one AI platform across BigQuery, Databricks and Vertex AI without creating new silos.',
    event: 'Data Science Summit',
    year: '2025',
    sortDate: '2025-11-20',
    featuredRank: 3,
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/bigquery-vertex-ai-or-databricks-dont-choose-combi/154802',
    eventUrl: 'https://main.dssconf.pl/'
  },
  {
    title: 'SQL Server and the Vector Revolution - how LLMs see your data',
    focus: 'Embeddings, vector search and the bridge between traditional data platforms and modern AI.',
    event: 'SQLDay',
    year: '2026',
    sortDate: '2026-05-12',
    featuredRank: 4,
    sessionUrl: 'https://sessionize.com/s/maciej-kepa/sql-server-and-the-vector-revolution-how-llms-see-/141790',
    eventUrl: 'https://sqlday.pl/en/sqlday-2026/'
  }
];

export const principles = [
  'Prefer systems that can be operated by teams, not only by their creators.',
  'Bias toward reproducibility, observability and explicit trade-offs.',
  'Treat notebooks as a useful beginning, not a deployment strategy.'
];
