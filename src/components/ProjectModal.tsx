import { X, MapPin, Building, Calendar, Phone, Mail, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-secondary/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Placeholder */}
        <div className="aspect-video image-placeholder">
          <span className="text-xl">{project.name} Gallery Image</span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <Badge className="mb-3 bg-gold/10 text-gold border-gold/30">{project.status}</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              {project.name}
            </h2>
            <p className="text-xl text-gold italic">{project.tagline}</p>
          </div>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-4 bg-muted rounded-lg">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building className="w-5 h-5 text-gold mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Configuration</p>
                <p className="text-sm font-medium">{project.floors}</p>
              </div>
            </div>
            {project.handover_date && (
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Handover</p>
                  <p className="text-sm font-medium">{project.handover_date}</p>
                </div>
              </div>
            )}
            {project.area_acres && (
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-gold text-sm font-bold">A</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Area</p>
                  <p className="text-sm font-medium">{project.area_acres} Acres</p>
                </div>
              </div>
            )}
          </div>

          {/* Unit Types */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-8 h-px bg-gold" />
              Unit Configurations
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.unit_types.map((unit, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <p className="font-semibold text-foreground mb-1">{unit.category}</p>
                  <p className="text-sm text-muted-foreground">
                    {unit.min_sft === unit.max_sft 
                      ? `${unit.min_sft} sq.ft`
                      : `${unit.min_sft} - ${unit.max_sft} sq.ft`
                    }
                  </p>
                  {unit.pricing_text && (
                    <p className="text-sm text-gold mt-2">{unit.pricing_text}</p>
                  )}
                  {unit.note && (
                    <p className="text-xs text-muted-foreground mt-1">{unit.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.key_features.length > 0 && (
            <div className="mb-8">
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-gold" />
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.key_features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          {project.amenities.length > 0 && (
            <div className="mb-8">
              <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-gold" />
                Amenities
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.amenities.map((amenity, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-1.5">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* RERA Info */}
          <div className="p-4 bg-muted rounded-lg mb-8">
            <p className="text-xs text-muted-foreground mb-1">RERA Registration</p>
            <p className="font-mono text-sm">{project.rera_number}</p>
            {project.building_permit && (
              <>
                <p className="text-xs text-muted-foreground mt-3 mb-1">Building Permit</p>
                <p className="font-mono text-xs">{project.building_permit}</p>
              </>
            )}
          </div>

          {/* Contact & CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.contact_phone && (
              <Button variant="goldOutline" asChild className="flex-1">
                <a href={`tel:${project.contact_phone.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {project.contact_phone}
                </a>
              </Button>
            )}
            {project.contact_email && (
              <Button variant="goldOutline" asChild className="flex-1">
                <a href={`mailto:${project.contact_email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            )}
            <Button variant="gold" asChild className="flex-1">
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
