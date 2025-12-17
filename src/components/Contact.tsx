import { useState } from "react";
import { Phone, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { companyInfo } from "@/data/projects";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-gold/10 via-transparent to-gold/10" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-gold/10 via-transparent to-gold/10" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:sticky lg:top-24">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Get in Touch
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Begin Your<br />
              <span className="gold-text">Journey Home</span>
            </h2>

            <p className="text-secondary-foreground/70 text-lg mb-10 leading-relaxed">
              Let us help you find your perfect residence. Our dedicated team is 
              here to guide you through every step of your home-buying journey.
            </p>

            {/* Contact Details with enhanced styling */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Phone, label: "Call Us", value: companyInfo.phone, href: `tel:${companyInfo.phone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email Us", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                { icon: MapPin, label: "Headquarters", value: companyInfo.headquarters },
              ].map((item, index) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center group-hover:from-gold group-hover:to-gold-dark transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <p className="text-secondary-foreground/50 text-sm">{item.label}</p>
                    <p className="text-secondary-foreground font-medium text-lg group-hover:text-gold transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative image placeholder */}
            <div className="relative">
              <div className="aspect-[16/9] image-placeholder rounded-lg overflow-hidden">
                <span className="text-lg text-muted-foreground">Office / Map Image</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/30 rounded-lg -z-10" />
            </div>
          </div>

          {/* Contact Form with glass effect */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 via-transparent to-gold/5 rounded-2xl blur-xl" />
            <div className="relative bg-background/95 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-border/50 shadow-2xl">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Request Information
                </h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="bg-muted/50 border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/50 border-border focus:border-gold focus:ring-gold/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested Project
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-border bg-muted/50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors"
                  >
                    <option value="">Select a project</option>
                    <option value="broadway">ASBL Broadway</option>
                    <option value="landmark">ASBL Landmark</option>
                    <option value="loft">ASBL Loft</option>
                    <option value="spectra">ASBL Spectra</option>
                    <option value="springs">ASBL Springs</option>
                    <option value="spire">ASBL Spire</option>
                    <option value="lakeside">ASBL Lakeside</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-muted/50 border-border focus:border-gold focus:ring-gold/20"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light animate-shimmer opacity-0 group-hover:opacity-30 transition-opacity" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
