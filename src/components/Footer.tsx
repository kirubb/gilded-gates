import { companyInfo, projects } from "@/data/projects";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center shadow-lg gold-border-glow">
                <span className="text-secondary font-serif font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{companyInfo.name}</h3>
                <p className="text-xs text-background/50 tracking-wider">LUXURY LIVING</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              {companyInfo.fullName} - Creating exceptional residential communities 
              that define luxury living in Hyderabad.
            </p>
            <p className="text-sm text-background/50">
              Price Range: <span className="text-gold font-medium">{companyInfo.priceRange}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 relative inline-block">
              <span className="gold-text">Quick Links</span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-transparent" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-gold transition-colors text-sm group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 relative inline-block">
              <span className="gold-text">Our Projects</span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-transparent" />
            </h4>
            <ul className="space-y-3">
              {projects.slice(0, 5).map((project) => (
                <li key={project.name}>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-gold transition-colors text-sm group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300" />
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 relative inline-block">
              <span className="gold-text">Contact Us</span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-transparent" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="group">
                <p className="text-background/50 mb-1 text-xs uppercase tracking-wider">Phone</p>
                <a 
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="group">
                <p className="text-background/50 mb-1 text-xs uppercase tracking-wider">Email</p>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <p className="text-background/50 mb-1 text-xs uppercase tracking-wider">Headquarters</p>
                <p className="text-background/70">{companyInfo.headquarters}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} {companyInfo.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <div className="w-1 h-1 rounded-full bg-gold/50" />
              <a href="#" className="text-sm text-background/50 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
