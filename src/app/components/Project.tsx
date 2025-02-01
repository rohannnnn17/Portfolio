import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  imageUrl?: string; // Optional image for the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  imageUrl,
}) => (
  <div className="group relative bg-gray-900 rounded-lg border border-gray-800 overflow-hidden transition-all duration-300 hover:border-teal-300/30">
    {imageUrl && (
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    )}
    <div className="p-6">
      <h3 className="text-xl font-medium text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={githubLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} on GitHub`}
        className={`inline-flex items-center text-sm font-mono text-teal-300 hover:text-teal-200 transition-colors duration-300 ${
          !githubLink && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!githubLink}>
        {githubLink ? (
          <>
            <span>View on GitHub</span>
            <span className="ml-2">→</span>
          </>
        ) : (
          "Coming Soon"
        )}
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "WanderWise",
      description:
        "A travel planning tool designed to help users discover and organize their travel experiences with ease.",
      githubLink: "https://github.com/rohannnnn17/WanderWise",
      imageUrl: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      title: "Denty App",
      description:
        "A web-based solution to streamline dental clinic operations, from patient management to appointment scheduling.",
      githubLink: "https://github.com/JeansPanT/Denty",
      imageUrl: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      title: "Employee Management System",
      description:
        "A system for admins to store, update, and track employee information and attendance records.",
      githubLink: "", // Add your link here
      imageUrl: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 bg-gray-950 border-b border-gray-800"
      role="region"
      aria-labelledby="projects-heading">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="flex items-center text-2xl md:text-3xl font-medium text-gray-100 mb-8">
          <span className="text-teal-300 font-mono mr-3">02.</span>
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-teal-300/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Projects;
