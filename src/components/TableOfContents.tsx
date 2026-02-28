import type { ArticleContent } from "@/data/articles";
import { useState } from "react";
import { List, ChevronDown } from "lucide-react";

interface TableOfContentsProps {
  content: ArticleContent[];
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [open, setOpen] = useState(false);
  const headings = content.filter(
    (b): b is Extract<ArticleContent, { type: "heading" }> => b.type === "heading"
  );

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:block sticky top-24 w-56 shrink-0">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <List size={14} /> Contents
        </p>
        <nav className="space-y-1.5 border-l border-border pl-4">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`block text-sm transition-colors hover:text-gold ${
                h.level === 3 ? "pl-3 text-muted-foreground/70" : "text-muted-foreground"
              }`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground"
        >
          <span className="flex items-center gap-2">
            <List size={14} /> Table of Contents
          </span>
          <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <nav className="mt-2 space-y-1.5 rounded-lg border border-border bg-background p-4">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                onClick={() => setOpen(false)}
                className={`block text-sm text-muted-foreground hover:text-gold ${
                  h.level === 3 ? "pl-3" : ""
                }`}
              >
                {h.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  );
};

export default TableOfContents;
