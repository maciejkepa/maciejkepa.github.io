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
    label: 'Tutorials',
    slug: 'tutorials',
    description: 'Step-by-step implementation notes focused on shipping, not slideware.'
  }
];

export const speakingHighlights = [
  {
    title: 'MLOps on Azure: war stories and lessons learned',
    focus: 'Operationalizing ML in regulated and edge-heavy environments.',
    event: 'SQLDay Lite',
    year: '2024'
  },
  {
    title: 'SQL Server and the Vector Revolution: how LLMs see your data',
    focus: 'Embeddings, vector search and the bridge between traditional data platforms and modern AI.',
    event: 'SQLDay',
    year: '2026'
  },
  {
    title: 'Understand your data landscape with Observability platform',
    focus: 'Designing data observability in Azure so teams know what data exists, how it moves and whether it can be trusted.',
    event: 'SQLDay',
    year: '2025'
  },
  {
    title: 'BigQuery, Vertex AI or Databricks? Don’t choose - combine them!',
    focus: 'A reference architecture for building one AI platform across BigQuery, Databricks and Vertex AI without creating new silos.',
    event: 'Data Science Summit',
    year: '2025'
  }
];

export const principles = [
  'Prefer systems that can be operated by teams, not only by their creators.',
  'Bias toward reproducibility, observability and explicit trade-offs.',
  'Treat notebooks as a useful beginning, not a deployment strategy.'
];
