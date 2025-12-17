import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "ongoing") return project.status.includes("Under construction") || project.status.includes("Near completion");
    if (filter === "completed") return project.status.includes("Completed") || project.status.includes("Ready-to-move");
    return true;
  });

  return (
    <section id="projects" className="relative py-24 bg-muted overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold) / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Portfolio
            </span>
            <div className="w-12 h-px bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="w-8 h-px bg-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Signature <span className="gold-text">Projects</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Discover our collection of premium residential developments across 
            Hyderabad's most coveted locations.
          </p>
        </div>

        {/* Filter Tabs with enhanced styling */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { value: "all", label: "All Projects" },
            { value: "ongoing", label: "Ongoing" },
            { value: "completed", label: "Completed" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as typeof filter)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                filter === tab.value
                  ? "bg-gradient-to-r from-gold to-gold-dark text-secondary shadow-lg"
                  : "bg-background text-muted-foreground hover:text-gold border border-border hover:border-gold/50"
              }`}
            >
              {filter === tab.value && (
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light animate-shimmer opacity-30" />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                onViewDetails={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};

export default Projects;
