import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/projects";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-12 h-12 gold-gradient rounded flex items-center justify-center">
              <span className="text-secondary font-serif font-bold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-semibold text-foreground">{companyInfo.name}</h1>
              <p className="text-xs text-muted-foreground tracking-wider">LUXURY LIVING</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>{companyInfo.phone}</span>
            </a>
            <Button variant="gold" size="sm" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors py-2 tracking-wide uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="gold" className="w-full" asChild>
                  <a href="#contact">Enquire Now</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
