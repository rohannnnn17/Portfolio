
import React from "react";

interface ProjectCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  deployedLink?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  category,
  title,
  description,
  technologies,
  githubLink,
  deployedLink,
  imageUrl,
}) => (
  <article className="group relative overflow-hidden rounded-lg border border-gray-800 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40">
    {/* Project Image */}
    {imageUrl && (
      <div className="relative h-36 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-transparent" />

        <span className="absolute left-4 top-3 font-mono text-xs text-teal-300">
          {number}
        </span>
      </div>
    )}

    <div className="p-5">
      {/* Category */}
      <div className="mb-2 flex items-center gap-2">
        <span className="h-px w-5 bg-teal-300/60" />

        <span className="font-mono text-[10px] tracking-widest text-teal-300">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-gray-100 transition-colors duration-300 group-hover:text-teal-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1.5">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="font-mono text-[11px] text-gray-500 transition-colors duration-300 group-hover:text-gray-400"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 border-t border-gray-800 pt-3">
        {deployedLink && (
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} live site`}
            className="font-mono text-xs text-teal-300 transition-colors duration-300 hover:text-teal-200"
          >
            Live Site ↗
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            className="font-mono text-xs text-gray-400 transition-colors duration-300 hover:text-teal-300"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      number: "01",
      category: "FULL-STACK",
      title: "WanderWise",
      description:
        "A travel discovery platform designed to help users explore destinations and organize their travel experiences through a simple and intuitive interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/rohannnnn17/WanderWise",
      deployedLink: "https://wanderwise-1.onrender.com",
      imageUrl: "/assets/logo_wanderwise.png",
    },
    {
      number: "02",
      category: "JAVA / WEB",
      title: "Denty App",
      description:
        "A web-based dental management application designed to streamline patient management, appointments, and everyday clinic operations.",
      technologies: ["Java", "JSP", "MySQL"],
      githubLink: "https://github.com/JeansPanT/Denty",
      imageUrl: "/denty.svg",
    },
    {
      number: "03",
      category: "FULL-STACK",
      title: "EasyAllSolution",
      description:
        "A full-stack platform for a laptop repair business combining repair services, refurbished laptop sales, and accessories.",
      technologies: ["React", "Spring Boot"],
      githubLink: "https://github.com/JeansPanT/EasyAllSolution",
      imageUrl: "/easyallsolution.svg",
    },
    {
      number: "04",
      category: "FRONTEND",
      title: "EV Website",
      description:
        "A modern electric vehicle website showcasing vehicle models, features, and an engaging product experience.",
      technologies: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/rohannnnn17/ev-website",
      deployedLink: "https://ev-website-7uxw.onrender.com/",
      imageUrl: "/ev.svg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative border-b border-gray-800 bg-black py-20 lg:py-24"
      role="region"
      aria-labelledby="projects-heading"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2
              id="projects-heading"
              className="flex items-center text-2xl font-medium text-gray-100 md:text-3xl"
            >
              <span className="mr-3 font-mono text-teal-300">02.</span>
              Selected Work
            </h2>

            <p className="mt-2 max-w-xl text-sm text-gray-500">
              A selection of projects I've built while exploring software
              development and modern web technologies.
            </p>
          </div>

          <span className="hidden font-mono text-xs text-gray-600 sm:block">
            04 PROJECTS
          </span>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-teal-300/5 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default Projects;
