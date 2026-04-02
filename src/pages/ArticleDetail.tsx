import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import ArticleRenderer from "@/components/ArticleRenderer";
import TableOfContents from "@/components/TableOfContents";
import ArticleCard from "@/components/ArticleCard";
import { format } from "date-fns";
import { Calendar, Clock, ArrowLeft, Share2, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Article not found
        </h1>
        <Link
          to="/articles"
          className="mt-4 inline-flex items-center gap-1 text-sm text-gold hover:underline"
        >
          <ArrowLeft size={14} /> Back to articles
        </Link>
      </div>
    );
  }

  const related = getRelatedArticles(article.slug, article.tags);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
    );
  };

  return (
    <article className="container py-12">
      <div className="mb-8">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors"
        >
          <ArrowLeft size={14} /> All articles
        </Link>
      </div>

      {/* Banner Image */}
      <div className="mb-8 overflow-hidden rounded-xl">
        <img
          src={article.banner || "/article-banner.webp"}
          alt={article.title}
          className="h-64 md:h-80 lg:h-96 w-full object-cover object-top"
        />
      </div>

      {/* Header */}
      <header className="max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gold-light border border-gold/20 px-3 py-0.5 text-xs font-medium text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          {article.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{article.author}</span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {format(new Date(article.date), "d MMMM yyyy")}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {article.readingTime} read
          </span>
        </div>
      </header>

      {/* Body + TOC */}
      <div className="mt-8 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
        <div className="min-w-0 max-w-3xl flex-1">
          {/* Mobile TOC */}
          <div className="lg:hidden">
            <TableOfContents content={article.content} />
          </div>
          <ArticleRenderer content={article.content} />

          {/* Share */}
          <div className="mt-12 flex items-center gap-3 border-t border-border pt-6">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
              <Share2 size={14} /> Share:
            </span>
            <button
              onClick={handleShareTwitter}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              X / Twitter
            </button>
            <button
              onClick={handleCopyLink}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-gold hover:text-gold transition-colors flex items-center gap-1"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>

        {/* Desktop TOC */}
        <div className="hidden lg:block">
          <TableOfContents content={article.content} />
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-12">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Related Articles
          </h2>
          <div className="mt-2 h-1 w-8 rounded-full bg-gold" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default ArticleDetail;
