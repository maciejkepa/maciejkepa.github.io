const responsiveCoverImages = new Set([
  '/blog-covers/ai-generated-code-risks-fallbacks-and-mocks.png',
  '/blog-covers/beyond-the-notebook.png',
  '/blog-covers/databricks-mlops-delivery-patterns-with-github-actions.png',
  '/blog-covers/databricks-mlops-stack-before-production.png',
  '/blog-covers/feature-store-architecture-boundaries.png',
  '/blog-covers/feature-stores-when-you-need-one-and-when-you-dont.png',
  '/blog-covers/how-to-build-a-simple-mcp-server-and-deploy-it-on-databricks.png',
  '/blog-covers/medallion-architecture-for-engineers.png',
  '/blog-covers/minimal-viable-ml-observability-what-to-monitor-first.png',
  '/blog-covers/ml-delivery-patterns-with-mlflow-azure-ml-and-databricks.png',
  '/blog-covers/mlops-engineering-not-tooling.png',
  '/blog-covers/what-mlops-actually-is.png'
]);

export function getResponsiveCoverSources(imagePath: string) {
  if (!responsiveCoverImages.has(imagePath)) {
    return undefined;
  }

  const basePath = imagePath.slice(0, -4);

  return {
    srcSet: `${basePath}-800.webp 800w, ${basePath}-1600.webp 1600w`
  };
}
