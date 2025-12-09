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
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded flex items-center justify-center">
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
              Price Range: <span className="text-gold">{companyInfo.priceRange}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 gold-text">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 gold-text">Our Projects</h4>
            <ul className="space-y-3">
              {projects.slice(0, 5).map((project) => (
                <li key={project.name}>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 gold-text">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-background/50 mb-1">Phone</p>
                <a 
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <p className="text-background/50 mb-1">Email</p>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <p className="text-background/50 mb-1">Headquarters</p>
                <p className="text-background/70">{companyInfo.headquarters}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} {companyInfo.fullName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
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
