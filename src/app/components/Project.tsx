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
  <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    {imageUrl && (
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={githubLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} on GitHub`}
        className={`inline-block text-sm font-medium text-gray-900 hover:text-gray-700 transition-all duration-300 ${
          !githubLink && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!githubLink}>
        {githubLink ? "View on GitHub →" : "Coming Soon"}
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "WanderWise",
      description:
        "WanderWise is a project designed to help users discover and plan their travel experiences with ease.",
      githubLink: "https://github.com/rohannnnn17/WanderWise",
      imageUrl: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      title: "Denty App",
      description:
        "Denty App is a web-based solution designed to streamline the management of dental clinic operations.",
      githubLink: "https://github.com/JeansPanT/Denty",
      imageUrl: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      title: "Employee Management System",
      description:
        "The Employee Management System allows admins to store and update employee information and track attendance.",
      githubLink: "", // Add your link here
      imageUrl: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50 text-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
