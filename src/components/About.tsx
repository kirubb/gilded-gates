import { Building2, Award, Users, MapPin } from "lucide-react";
import { companyInfo } from "@/data/projects";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Premium Developments",
      description: "Iconic residential projects across prime locations in Hyderabad"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising standards in construction and design"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated to delivering exceptional living experiences"
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategic developments in Hyderabad's most sought-after areas"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-secondary via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with overlapping elements */}
          <div className="relative group">
            {/* Main image placeholder */}
            <div className="relative z-10 aspect-[4/5] image-placeholder rounded-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              <span className="text-lg">About ASBL Image</span>
            </div>
            
            {/* Decorative Frame - offset */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-lg" />
            
            {/* Floating accent card */}
            <div className="absolute -top-8 -left-8 z-20 bg-secondary p-6 rounded-lg shadow-xl gold-border-glow">
              <p className="text-4xl font-serif font-bold gold-text">15+</p>
              <p className="text-secondary-foreground/70 text-sm">Years of Excellence</p>
            </div>

            {/* Bottom accent */}
            <div className="absolute -bottom-4 left-8 right-8 h-24 bg-gradient-to-t from-gold/10 to-transparent rounded-b-lg blur-xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Dreams,<br />
              <span className="gold-text">Crafting Legacies</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {companyInfo.fullName} has established itself as a premier real estate developer 
              in Hyderabad, renowned for creating exceptional residential communities that 
              blend luxury, comfort, and innovation.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality craftsmanship and attention to detail has made us 
              the preferred choice for discerning homebuyers seeking premium living spaces. 
              From Financial District to emerging hotspots, our projects define the 
              skyline of Hyderabad.
            </p>

            {/* Feature Grid with hover effects */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 group p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:from-gold group-hover:to-gold-dark transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-gold group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted to-transparent" />
    </section>
  );
};

export default About;
