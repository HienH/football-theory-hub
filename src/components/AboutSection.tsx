import { Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border bg-secondary/30">
      <div className="container py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            About <span className="text-gold">the Theorist</span>
          </h2>
          <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-gold" />
          <div className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
            <p>
              A football fanatic, Football Theorist is where I navigate the game
              in all its movement and momentum. I write about shifting
              storylines, evolving systems, defining careers, and the patterns
              that quietly shape seasons. Alongside that, I share my own
              reflections and instincts on what I'm watching and where I think
              it's heading. This is football through my lens.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              YouTube
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
