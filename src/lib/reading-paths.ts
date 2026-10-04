export interface ReadingPath {
  title: string;
  description: string;
  posts: string[];
}

export const dataPlatformSeries = [
  'data-platform-architectures-ai-ready',
  'data-warehouse-ai-ready'
];

export const topicReadingPaths: Record<string, ReadingPath[]> = {
  mlops: [
    {
      title: 'From definition to operations',
      description: 'Read in order: define MLOps, choose a deployment boundary, specify a release, establish observability and decide how to serve features.',
      posts: [
        'what-mlops-actually-is-and-why-teams-keep-misdefining-it',
        'ml-model-deployment-patterns',
        'production-ml-release-management-what-goes-to-production',
        'ml-observability',
        'feature-stores-when-you-need-one-and-when-you-dont'
      ]
    }
  ],
  'ai-architecture': [
    {
      title: 'Production ML systems',
      description: 'Define the system around the model, its deployment boundary and the evidence attached to a release.',
      posts: ['beyond-the-notebook-moving-ml-to-production', 'ml-model-deployment-patterns', 'production-ml-release-management-what-goes-to-production']
    },
    {
      title: 'Data for AI',
      description: 'Follow business definitions, historical inputs and ownership from the platform to its consumers.',
      posts: [...dataPlatformSeries, 'medallion-architecture-for-engineers']
    },
    {
      title: 'Agents and tools',
      description: 'Build an MCP integration and examine failure handling in code produced with AI assistance.',
      posts: ['how-to-build-a-simple-mcp-server-and-deploy-it-on-databricks', 'ai-generated-code-risks-fallbacks-and-mocks']
    }
  ],
  'data-architecture': [
    {
      title: 'Data platform architectures for AI',
      description: 'The published parts of the series, in reading order. Follow the same business example from platform choices to warehouse semantics.',
      posts: dataPlatformSeries
    },
    {
      title: 'Related implementation guide',
      description: 'Explore data quality and ownership boundaries in a medallion architecture.',
      posts: ['medallion-architecture-for-engineers']
    }
  ]
};
