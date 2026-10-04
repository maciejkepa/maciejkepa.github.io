export const selectedProjects = [
  {
    id: 'gtd-mcp-server',
    title: 'GTD MCP Server',
    kind: 'Runnable tutorial',
    summary: 'An MCP server that gives an agent structured tools for tasks, projects and inbox capture.',
    decision: 'Keep task logic separate from transport and storage, with local SQLite and Databricks deployment paths.',
    start: 'Follow the quickstart to run locally, then explore the Databricks Apps setup and its service-principal permissions.',
    limits: 'An educational example. A shared deployment needs its own review of user identity, data isolation, access rules and recovery.',
    repoUrl: 'https://github.com/maciejkepa/gtd-mcp-server',
    startUrl: 'https://github.com/maciejkepa/gtd-mcp-server/blob/master/QUICKSTART.md',
    startLabel: 'Run the quickstart',
    links: [
      { label: 'Architecture and permissions', href: 'https://github.com/maciejkepa/gtd-mcp-server/blob/master/ARCHITECTURE.md' },
      { label: 'MCP implementation guide', href: '/blog/how-to-build-a-simple-mcp-server-and-deploy-it-on-databricks/' },
      { label: 'MCP conference session', href: '/speaking/#mcp-tools' }
    ]
  },
  {
    id: 'ai-ml-in-practice',
    title: 'AI/ML in Practice',
    kind: 'Workshop materials',
    summary: 'Nine learning modules connect data preparation and feature engineering to training, pipelines, MLOps and generative AI.',
    decision: 'Follow the dependencies around a model, from its input data to a repeatable delivery workflow.',
    start: 'Use the repository setup instructions to import the materials into Databricks Free Edition. Start with data preparation, then work through training and pipelines.',
    limits: 'Exercises for learning and workshops. They do not constitute a complete production platform or an operational service commitment.',
    repoUrl: 'https://github.com/maciejkepa/ai-ml-in-practice',
    startUrl: 'https://github.com/maciejkepa/ai-ml-in-practice#setup',
    startLabel: 'Set up the workshop',
    links: [
      { label: 'Data preparation exercise', href: 'https://github.com/maciejkepa/ai-ml-in-practice/tree/master/2_data_preparations' },
      { label: 'ML pipeline module', href: 'https://github.com/maciejkepa/ai-ml-in-practice/tree/master/7_ml_pipelines' },
      { label: 'SQLDay 2026 workshop', href: '/speaking/#sqlday-2026-workshop' }
    ]
  }
];
