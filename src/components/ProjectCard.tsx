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
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-gold/30 transition-all duration-500">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-10">
        <div className="absolute -top-8 -right-8 w-16 h-16 rotate-45 bg-gradient-to-br from-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Image Placeholder */}
      <div className="aspect-[16/10] image-placeholder relative overflow-hidden">
        <span className="text-base">{project.name} Image</span>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Button variant="gold" onClick={() => onViewDetails(project)} className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Status Badge */}
        <Badge className={`absolute top-4 left-4 ${getStatusColor(project.status)} backdrop-blur-sm`}>
          {project.status}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Subtle top border accent */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Project Name */}
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-gold/80 italic font-serif">{project.tagline}</p>
        </div>

        {/* Type */}
        <p className="text-muted-foreground text-sm mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-gold/50" />
          {project.type}
        </p>

        {/* Info Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-sm group/item">
            <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
            <span className="text-muted-foreground">{project.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm group/item">
            <Building className="w-4 h-4 text-gold flex-shrink-0 group-hover/item:scale-110 transition-transform" />
            <span className="text-muted-foreground">{project.floors} Floors</span>
          </div>
          {project.handover_date && (
            <div className="flex items-center gap-3 text-sm group/item">
              <Calendar className="w-4 h-4 text-gold flex-shrink-0 group-hover/item:scale-110 transition-transform" />
              <span className="text-muted-foreground">Handover: {project.handover_date}</span>
            </div>
          )}
        </div>

        {/* Unit Types */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.unit_types.map((unit) => (
            <Badge 
              key={unit.category} 
              variant="outline" 
              className="text-xs border-border/50 bg-muted/50 hover:border-gold/50 hover:bg-gold/5 transition-colors"
            >
              {unit.category}
            </Badge>
          ))}
        </div>

        {/* Pricing */}
        {project.pricing_text && (
          <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-gold/5 to-transparent border-l-2 border-gold">
            <p className="text-lg font-semibold gold-text">{project.pricing_text}</p>
          </div>
        )}

        {/* CTA */}
        <Button 
          variant="goldOutline" 
          className="w-full group/btn overflow-hidden relative" 
          onClick={() => onViewDetails(project)}
        >
          <span className="relative z-10">Explore Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-dark opacity-0 group-hover/btn:opacity-10 transition-opacity" />
        </Button>
      </div>

      {/* Bottom glow effect on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProjectCard;
