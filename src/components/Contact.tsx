import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
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

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <a 
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gold group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm">Call Us</p>
                  <p className="text-secondary-foreground font-medium text-lg">{companyInfo.phone}</p>
                </div>
              </a>

              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gold group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm">Email Us</p>
                  <p className="text-secondary-foreground font-medium text-lg">{companyInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm">Headquarters</p>
                  <p className="text-secondary-foreground font-medium text-lg">{companyInfo.headquarters}</p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[16/9] image-placeholder rounded-lg overflow-hidden">
              <span className="text-lg text-muted-foreground">Office / Map Image</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 md:p-10 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              Request Information
            </h3>
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
                    className="bg-muted border-border"
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
                    className="bg-muted border-border"
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
                  className="bg-muted border-border"
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
                  className="w-full h-10 rounded-md border border-border bg-muted px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="bg-muted border-border"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Enquiry
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
