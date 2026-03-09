import { Link } from "react-router-dom";
import { format } from "date-fns";
import type { Article } from "@/data/articles";
import { Clock, Calendar } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`group flex flex-col md:flex-row rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-gold/40 hover:shadow-md ${
        featured ? "md:col-span-2 bg-secondary/30" : ""
      }`}
    >
      <div className="md:w-56 lg:w-72 shrink-0">
        <img
          src="/article-banner.avif"
          alt={article.title}
          className="h-44 md:h-full w-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-center">
        {featured && (
          <span className="mb-3 inline-block self-start rounded-full bg-gold-light border border-gold/20 px-3 py-1 text-xs font-semibold text-gold uppercase tracking-wider">
            Featured
          </span>
        )}
        <h3 className={`font-serif font-bold text-foreground group-hover:text-gold transition-colors ${featured ? "text-2xl" : "text-lg"}`}>
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            {format(new Date(article.date), "d MMM yyyy")}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {article.readingTime} read
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
