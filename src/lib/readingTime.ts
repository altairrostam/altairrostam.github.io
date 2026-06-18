const WORDS_PER_MINUTE = 225;

export function readingTime(value: string) {
  const words = value.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}
