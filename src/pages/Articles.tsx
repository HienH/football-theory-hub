import { Link } from "react-router-dom";
import { format } from "date-fns";
import { articles } from "@/data/articles";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Articles = () => {
  const article = articles[0];

  return (
    <div className="container py-16 px-4 md:px-6">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Articles</h1>
      <p className="mt-2 text-muted-foreground">Tactical breakdowns, coaching concepts, and match patterns.</p>
      <div className="mt-2 h-1 w-10 rounded-full bg-gold" />

      {article && (
        <Link
          to={`/articles/${article.slug}`}
          className="group mt-10 flex flex-col md:flex-row rounded-xl border border-border bg-secondary/30 overflow-hidden transition-all hover:border-gold/40 hover:shadow-lg"
        >
          <div className="md:w-64 lg:w-80 shrink-0">
            <img
              src="/article-banner.avif"
              alt={article.title}
              className="h-48 md:h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-gold transition-colors leading-snug">
              {article.title}
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {format(new Date(article.date), "d MMM yyyy")}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readingTime} read
              </span>
            </div>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all">
              Read article <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Articles;
