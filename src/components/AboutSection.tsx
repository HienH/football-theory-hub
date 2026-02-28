import { Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border bg-secondary/30">
      <div className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            About <span className="text-gold">the Theorist</span>
          </h2>
          <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-gold" />

          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a football obsessive with a background in coaching and tactical analysis. This site exists because I believe the beautiful game is made even more beautiful when you understand the patterns underneath.
            </p>
            <p>
              From pressing triggers to positional play, from set-piece design to rest defence — I break down complex ideas into clear, practical language. Whether you're a coach, a player, or a fan who wants to see more, you're in the right place.
            </p>
            <p>
              Every article is written to help you see the game differently. No jargon for jargon's sake. Just football theory, explained simply.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">X / Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">YouTube</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors">
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
