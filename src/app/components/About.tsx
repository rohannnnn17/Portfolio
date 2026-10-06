
import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-black border-b border-gray-800"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            id="about-heading"
            className="flex items-center text-3xl md:text-4xl font-bold text-gray-100 mb-12"
          >
            <span className="text-teal-300 font-mono mr-3">01.</span>
            About Me
          </h2>

          <div className="space-y-6 text-gray-400">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a{" "}
              <span className="text-teal-300 font-medium">
                Programmer at Tata Consultancy Services (TCS)
              </span>{" "}
              with a BCA background and a strong interest in software
              development. I enjoy building{" "}
              <span className="text-teal-300 font-medium">
                practical and scalable applications
              </span>{" "}
              while continuously improving my problem-solving and programming
              skills.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              My primary focus is on{" "}
              <span className="text-teal-300 font-medium">Java</span> and{" "}
              <span className="text-teal-300 font-medium">Spring Boot</span>,
              along with experience in{" "}
              <span className="text-teal-300 font-medium">React</span>,{" "}
              <span className="text-teal-300 font-medium">JavaScript</span>,
              <span className="text-teal-300 font-medium"> MySQL</span>, and{" "}
              <span className="text-teal-300 font-medium">MongoDB</span>. I
              have worked on full-stack projects involving REST APIs, backend
              development, database integration, and responsive web
              applications.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              I’m continuously strengthening my expertise in{" "}
              <span className="text-teal-300 font-medium">
                backend development, enterprise Java, and modern web
                technologies
              </span>
              , with the goal of building reliable software and growing as a
              professional software developer.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            {[
              "Java",
              "Spring Boot",
              "React",
              "JavaScript",
              "MySQL",
              "MongoDB",
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-teal-300/50 hover:bg-teal-300/10 transition-all duration-300"
              >
                <span className="text-teal-300 text-sm font-mono">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/certifications"
              className="inline-flex items-center px-6 py-3 border border-teal-300 text-teal-300 font-mono rounded-lg hover:bg-teal-300/10 hover:border-teal-300/50 transition-all duration-300"
            >
              View Certifications

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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

      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-300/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default About;
