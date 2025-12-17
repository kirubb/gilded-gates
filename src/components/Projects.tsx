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
    <section id="projects" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Our Portfolio
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Signature <span className="gold-text">Projects</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Discover our collection of premium residential developments across 
            Hyderabad's most coveted locations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { value: "all", label: "All Projects" },
            { value: "ongoing", label: "Ongoing" },
            { value: "completed", label: "Completed" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as typeof filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tab.value
                  ? "bg-gold text-secondary"
                  : "bg-background text-muted-foreground hover:text-gold border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onViewDetails={setSelectedProject}
            />
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
    </section>
  );
};

export default Projects;
