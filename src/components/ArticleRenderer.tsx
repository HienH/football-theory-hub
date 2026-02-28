import type { ArticleContent } from "@/data/articles";
import { Lightbulb, Target, AlertTriangle } from "lucide-react";

interface CalloutBoxProps {
  variant: "key-idea" | "coaching-point" | "common-mistake";
  title: string;
  text: string;
}

const calloutStyles = {
  "key-idea": {
    border: "border-gold/40",
    bg: "bg-gold-light",
    icon: Lightbulb,
    iconColor: "text-gold",
  },
  "coaching-point": {
    border: "border-accent/30",
    bg: "bg-secondary",
    icon: Target,
    iconColor: "text-foreground",
  },
  "common-mistake": {
    border: "border-destructive/30",
    bg: "bg-destructive/5",
    icon: AlertTriangle,
    iconColor: "text-destructive",
  },
};

export const CalloutBox = ({ variant, title, text }: CalloutBoxProps) => {
  const style = calloutStyles[variant];
  const Icon = style.icon;

  return (
    <div className={`my-6 rounded-lg border ${style.border} ${style.bg} p-5`}>
      <div className="flex items-start gap-3">
        <Icon size={20} className={`mt-0.5 shrink-0 ${style.iconColor}`} />
        <div>
          <p className="font-sans text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

interface ArticleRendererProps {
  content: ArticleContent[];
}

const ArticleRenderer = ({ content }: ArticleRendererProps) => {
  return (
    <div className="prose-ft">
      {content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <p key={i} className="my-4 text-muted-foreground leading-relaxed">{block.text}</p>;
          case "heading":
            return block.level === 2 ? (
              <h2 key={i} id={block.id} className="mt-10 mb-4 text-2xl font-bold text-foreground scroll-mt-24">
                {block.text}
              </h2>
            ) : (
              <h3 key={i} id={block.id} className="mt-8 mb-3 text-xl font-semibold text-foreground scroll-mt-24">
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-6 border-l-4 border-gold pl-5 italic text-muted-foreground">
                {block.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <img src={block.src} alt={block.caption} className="w-full rounded-lg border border-border" />
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">{block.caption}</figcaption>
              </figure>
            );
          case "callout":
            return <CalloutBox key={i} variant={block.variant} title={block.title} text={block.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleRenderer;
