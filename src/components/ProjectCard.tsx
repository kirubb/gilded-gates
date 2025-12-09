import { MapPin, Building, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    if (status.includes("Completed") || status.includes("Ready")) {
      return "bg-green-500/10 text-green-700 border-green-500/30";
    }
    if (status.includes("Near completion")) {
      return "bg-gold/10 text-gold-dark border-gold/30";
    }
    return "bg-blue-500/10 text-blue-700 border-blue-500/30";
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover-lift">
      {/* Image Placeholder */}
      <div className="aspect-[16/10] image-placeholder relative overflow-hidden">
        <span className="text-base">{project.name} Image</span>
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="gold" onClick={() => onViewDetails(project)}>
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Status Badge */}
        <Badge className={`absolute top-4 left-4 ${getStatusColor(project.status)}`}>
          {project.status}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Project Name */}
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-1 group-hover:text-gold transition-colors">
            {project.name}
          </h3>
          <p className="text-gold italic">{project.tagline}</p>
        </div>

        {/* Type */}
        <p className="text-muted-foreground text-sm mb-4">{project.type}</p>

        {/* Info Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{project.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Building className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="text-muted-foreground">{project.floors} Floors</span>
          </div>
          {project.handover_date && (
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-muted-foreground">Handover: {project.handover_date}</span>
            </div>
          )}
        </div>

        {/* Unit Types */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.unit_types.map((unit) => (
            <Badge key={unit.category} variant="outline" className="text-xs">
              {unit.category}
            </Badge>
          ))}
        </div>

        {/* Pricing */}
        {project.pricing_text && (
          <p className="text-lg font-semibold text-gold mb-4">{project.pricing_text}</p>
        )}

        {/* CTA */}
        <Button variant="goldOutline" className="w-full" onClick={() => onViewDetails(project)}>
          Explore Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
