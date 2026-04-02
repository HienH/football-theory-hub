export interface Article {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  featured: boolean;
  author: string;
  banner?: string;
  content: ArticleContent[];
}

export type ArticleContent =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; caption: string }
  | { type: "callout"; variant: "key-idea" | "coaching-point" | "common-mistake"; title: string; text: string };
