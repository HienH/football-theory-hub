import { useState, useMemo } from "react";
import { articles, ALL_TAGS } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Search } from "lucide-react";

const Articles = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = [...articles];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    if (selectedTag) {
      result = result.filter((a) => a.tags.includes(selectedTag));
    }
    return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [search, selectedTag]);

  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">All Articles</h1>
      <p className="mt-2 text-muted-foreground">Tactical breakdowns, coaching concepts, and match patterns.</p>
      <div className="mt-2 h-1 w-10 rounded-full bg-gold" />

      {/* Search */}
      <div className="mt-8 relative max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50"
        />
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            !selectedTag
              ? "bg-foreground text-background"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              selectedTag === tag
                ? "bg-foreground text-background"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No articles found. Try a different search or tag.</p>
      )}
    </div>
  );
};

export default Articles;
