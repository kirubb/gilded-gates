import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/projects";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--gold) / 0.1) 25%, transparent 25%), 
                              linear-gradient(-45deg, hsl(var(--gold) / 0.1) 25%, transparent 25%), 
                              linear-gradient(45deg, transparent 75%, hsl(var(--gold) / 0.1) 75%), 
                              linear-gradient(-45deg, transparent 75%, hsl(var(--gold) / 0.1) 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }} />
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 image-placeholder opacity-20">
        <span className="text-lg">Hero Background Image</span>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to
            </span>
            <div className="w-16 h-px bg-gold" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-foreground mb-6 animate-fade-in-delay-1">
            {companyInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-4 font-light tracking-wide animate-fade-in-delay-2">
            {companyInfo.fullName}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gold mb-12 font-serif italic animate-fade-in-delay-3">
            "Crafting Timeless Luxury Residences in Hyderabad"
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-fade-in-delay-3">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold gold-text">{companyInfo.totalProjects}</p>
              <p className="text-secondary-foreground/60 text-sm tracking-wider uppercase mt-2">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold gold-text">{companyInfo.ongoingProjects}</p>
              <p className="text-secondary-foreground/60 text-sm tracking-wider uppercase mt-2">Ongoing</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold gold-text">{companyInfo.completedProjects}</p>
              <p className="text-secondary-foreground/60 text-sm tracking-wider uppercase mt-2">Completed</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#projects">Explore Projects</a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a href="#contact">Schedule a Visit</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
