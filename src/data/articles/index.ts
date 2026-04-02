export type { Article, ArticleContent } from "./types";

import type { Article } from "./types";
import xabiAlonsoLiverpool from "./xabi-alonso-liverpool";
import manUnitedMidfield from "./man-united-midfield";

// Newest first
export const articles: Article[] = [
  xabiAlonsoLiverpool,
  manUnitedMidfield,
];

export const ALL_TAGS = [...new Set(articles.flatMap((a) => a.tags))];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getRelatedArticles(currentSlug: string, tags: string[], limit = 3): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug && a.tags.some((t) => tags.includes(t)))
    .slice(0, limit);
}
