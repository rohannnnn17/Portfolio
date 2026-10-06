
"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Skill {
  name: string;
  shortName: string;
  description: string;
  skills: string[];
  projects: string[];
}

const About: React.FC = () => {
  const technologies: Skill[] = [
    {
      name: "Java",
      shortName: "JAVA",
      description:
        "My primary programming language, focused on building reliable backend applications.",
      skills: [
        "Core Java",
        "OOP",
        "Collections",
        "Exception Handling",
        "Multithreading",
      ],
      projects: ["Denty App", "EasyAllSolution"],
    },
    {
      name: "Spring Boot",
      shortName: "SPRING BOOT",
      description:
        "Used to build structured backend applications and REST APIs.",
      skills: [
        "REST APIs",
        "Spring MVC",
        "Spring Data",
        "API Integration",
        "Backend Architecture",
      ],
      projects: ["EasyAllSolution"],
    },
    {
      name: "React",
      shortName: "REACT",
      description:
        "Used to build responsive and interactive interfaces for web applications.",
      skills: [
        "React Components",
        "Hooks",
        "State Management",
        "API Integration",
        "Responsive UI",
      ],
      projects: ["WanderWise", "EV Website", "EasyAllSolution"],
    },
    {
      name: "JavaScript",
      shortName: "JAVASCRIPT",
      description:
        "Used across frontend development to create interactive web experiences.",
      skills: [
        "ES6+",
        "DOM",
        "Async JavaScript",
        "API Integration",
        "Modern JavaScript",
      ],
      projects: ["WanderWise", "EV Website"],
    },
    {
      name: "MySQL",
      shortName: "MYSQL",
      description:
        "Used for designing and working with relational data in application backends.",
      skills: [
        "SQL",
        "Database Design",
        "CRUD Operations",
        "Joins",
        "Relational Data",
      ],
      projects: ["Denty App"],
    },
    {
      name: "MongoDB",
      shortName: "MONGODB",
      description:
        "Used for flexible document-based data storage in full-stack applications.",
      skills: [
        "Document Database",
        "CRUD Operations",
        "MongoDB Atlas",
        "Data Modeling",
        "Backend Integration",
      ],
      projects: ["WanderWise", "EasyAllSolution"],
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(technologies[0]);

  return (
    <section
      id="about"
      className="relative border-b border-gray-800 bg-black py-24 lg:py-32"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Section Heading */}
          <div className="mb-12">
            <h2
              id="about-heading"
              className="flex items-center text-3xl font-bold text-gray-100 md:text-4xl"
            >
              <span className="mr-3 font-mono text-teal-300">01.</span>
              About Me
            </h2>

            <p className="mt-3 font-mono text-sm text-gray-600">
              A little about what I do
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-gray-400">
            <p className="text-lg leading-relaxed md:text-xl">
              I'm a{" "}
              <span className="font-medium text-teal-300">
                Programmer at Tata Consultancy Services (TCS)
              </span>{" "}
              and a software developer focused on building reliable,
              practical applications. My development journey has led me from
              web development into a stronger focus on{" "}
              <span className="font-medium text-teal-300">
                Java and backend development
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed md:text-xl">
              I work with{" "}
              <span className="font-medium text-teal-300">Java</span>,{" "}
              <span className="font-medium text-teal-300">Spring Boot</span>,
              and modern web technologies such as{" "}
              <span className="font-medium text-teal-300">React</span>. I
              enjoy working across the stack, from designing{" "}
              <span className="font-medium text-teal-300">REST APIs</span>{" "}
              and backend logic to building responsive user interfaces and
              integrating databases.
            </p>

            <p className="text-lg leading-relaxed md:text-xl">
              I'm particularly interested in{" "}
              <span className="font-medium text-teal-300">
                backend systems, enterprise Java, and software architecture
              </span>
              . I'm constantly learning, experimenting with new technologies,
              and turning ideas into projects that solve real problems.
            </p>
          </div>

          {/* Interactive Technology Stack */}
          <div className="mt-16">

            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-sm text-teal-300">
                TECH STACK
              </span>

              <span className="h-px flex-1 bg-gray-800" />

              <span className="hidden font-mono text-[10px] text-gray-700 sm:block">
                SELECT TO EXPLORE
              </span>
            </div>

            <div className="grid overflow-hidden rounded-lg border border-gray-800 bg-[#050505] md:grid-cols-[190px_1fr]">

              {/* Technology List */}
              <div className="border-b border-gray-800 md:border-b-0 md:border-r">
                {technologies.map((tech, index) => {
                  const isSelected = selectedSkill.name === tech.name;

                  return (
                    <button
                      key={tech.name}
                      type="button"
                      onClick={() => setSelectedSkill(tech)}
                      className={`group flex w-full items-center gap-3 border-b border-gray-800 px-4 py-3 text-left font-mono text-sm transition-all duration-200 last:border-b-0 ${
                        isSelected
                          ? "bg-teal-300/5 text-teal-300"
                          : "text-gray-500 hover:bg-white/[0.02] hover:text-gray-300"
                      }`}
                    >
                      <span
                        className={`w-5 text-[10px] ${
                          isSelected
                            ? "text-teal-300"
                            : "text-gray-700"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          isSelected
                            ? "bg-teal-300"
                            : "bg-gray-700 group-hover:bg-gray-500"
                        }`}
                      />

                      <span>{tech.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Skill Details */}
              <div className="min-h-[300px] p-6 sm:p-7">

                <div className="mb-6">
                  <p className="font-mono text-[10px] tracking-widest text-gray-600">
                    {selectedSkill.shortName}
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-gray-100">
                    {selectedSkill.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <p className="mb-3 font-mono text-xs text-gray-600">
                    CAPABILITIES
                  </p>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedSkill.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 font-mono text-xs text-gray-400"
                      >
                        <span className="text-teal-300">▸</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-7 border-t border-gray-800 pt-5">
                  <p className="mb-3 font-mono text-xs text-gray-600">
                    USED IN
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projects.map((project) => (
                      <span
                        key={project}
                        className="rounded border border-gray-800 px-3 py-1.5 font-mono text-[11px] text-gray-500"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Certifications CTA */}
          <div className="mt-14">
            <Link
              href="/certifications"
              className="group inline-flex items-center border-b border-teal-300/40 pb-1 font-mono text-sm text-teal-300 transition-all duration-300 hover:border-teal-300"
            >
              View Certifications

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-teal-300/5 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default About;
