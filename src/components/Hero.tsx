import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/projects";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-secondary">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-charcoal-light/30" />
        
        {/* Animated gold particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold/30 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-gold/20 animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-gold/25 animate-float-slower" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-gold/30 animate-float" />
        </div>
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 image-placeholder opacity-10">
        <span className="text-lg">Hero Background Image</span>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-32 left-8 w-24 h-24 border-l-2 border-b-2 border-gold/20" />
      <div className="absolute bottom-32 right-8 w-24 h-24 border-r-2 border-b-2 border-gold/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
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

          {/* Stats with glass effect */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 animate-fade-in-delay-3">
            {[
              { value: companyInfo.totalProjects, label: "Projects" },
              { value: companyInfo.ongoingProjects, label: "Ongoing" },
              { value: companyInfo.completedProjects, label: "Completed" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center px-6 py-4 rounded-lg glass-effect gold-border-glow"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-serif font-bold gold-text">{stat.value}</p>
                <p className="text-secondary-foreground/60 text-sm tracking-wider uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button variant="gold" size="xl" asChild className="group">
              <a href="#projects" className="relative overflow-hidden">
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light animate-shimmer opacity-0 group-hover:opacity-30 transition-opacity" />
              </a>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce group"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-secondary-foreground/50 group-hover:text-gold transition-colors">Discover</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </a>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
