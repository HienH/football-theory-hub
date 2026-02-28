import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { articles, getFeaturedArticle } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import AboutSection from "@/components/AboutSection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = getFeaturedArticle();
  const recent = articles.filter((a) => !a.featured).slice(0, 4);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#about") {
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-16 flex min-h-screen items-center border-b border-border bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-stadium.avif')" }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Football theory, <br className="hidden md:block" />
              <span className="text-gold">explained simply.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Tactics, patterns, and ideas from the beautiful game — broken down
              for coaches, players, and fans who want to see more.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {featured && (
                <Link
                  to={`/articles/${featured.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-[#080E4B] transition-colors hover:opacity-90"
                >
                  Read latest <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Featured */}
      {featured && (
        <section className="container py-16">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Recent Articles
          </h2>
          <div className="mt-2 h-1 w-8 rounded-full bg-gold" />
          <div className="mt-6">
            <ArticleCard article={featured} featured />
          </div>
        </section>
      )}
      {/* Stadium Parallax */}
      <section
        className="relative h-64 md:h-90 lg:h-96 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/stadium.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>
      <AboutSection />
    </>
  );
};

export default Index;
