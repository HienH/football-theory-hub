import { Link } from "react-router-dom";
import { articles, getFeaturedArticle } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import AboutSection from "@/components/AboutSection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = getFeaturedArticle();
  const recent = articles.filter((a) => !a.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="pitch-texture border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Football theory, <br className="hidden md:block" />
              <span className="text-gold">explained simply.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tactics, patterns, and ideas from the beautiful game — broken down for coaches, players, and fans who want to see more.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {featured && (
                <Link
                  to={`/articles/${featured.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-navy-light"
                >
                  Read latest <ArrowRight size={16} />
                </Link>
              )}
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Browse all articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container py-16">
          <h2 className="font-serif text-2xl font-bold text-foreground">Featured</h2>
          <div className="mt-2 h-1 w-8 rounded-full bg-gold" />
          <div className="mt-6">
            <ArticleCard article={featured} featured />
          </div>
        </section>
      )}

      {/* Recent */}
      <section className="container pb-16">
        <h2 className="font-serif text-2xl font-bold text-foreground">Recent Articles</h2>
        <div className="mt-2 h-1 w-8 rounded-full bg-gold" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {recent.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
          >
            View all articles <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <AboutSection />
    </>
  );
};

export default Index;
