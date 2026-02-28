import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "About", href: "/#about" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "/#about" && location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isHome = location.pathname === "/";
  const showSolid = scrolled || !isHome;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${showSolid ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80" : "border-b border-transparent bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${!showSolid ? "text-white" : "text-foreground"}`}>
            Football <span className="text-gold">Theorist</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href === "/#about" ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === link.href ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-muted-foreground transition-colors hover:text-gold"
            aria-label="Toggle theme"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block text-sm font-medium text-muted-foreground hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            aria-label="Toggle theme"
          >
            <Sun size={16} className="hidden dark:block" />
            <Moon size={16} className="block dark:hidden" />
            <span className="dark:hidden">Dark mode</span>
            <span className="hidden dark:inline">Light mode</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
