const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold text-foreground">
              Football <span className="text-gold">Theorist</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Football theory — tactics, patterns, and ideas explained simply.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors" aria-label="Twitter/X">
              X / Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors" aria-label="YouTube">
              YouTube
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} footballtheorist.co.uk — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
