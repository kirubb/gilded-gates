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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] image-placeholder rounded-lg overflow-hidden">
              <span className="text-lg">About ASBL Image</span>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
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

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-gold group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
