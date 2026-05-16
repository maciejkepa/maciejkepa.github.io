export function getReadingTime(content: string | undefined) {
  if (!content) {
    return 1;
  }

  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

