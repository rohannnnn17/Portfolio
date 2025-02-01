import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-gray-950 border-b border-gray-800"
      role="region"
      aria-labelledby="about-heading">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            id="about-heading"
            className="flex items-center text-2xl md:text-3xl font-medium text-gray-100 mb-8">
            <span className="text-teal-300 font-mono mr-3">01.</span>
            About Me
          </h2>

          <div className="space-y-5 text-gray-400">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a BCA student passionate about crafting
              <span className="text-teal-300">
                {" "}
                impactful digital solutions
              </span>
              . My focus lies in full-stack development, where I combine
              <span className="text-teal-300">
                {" "}
                modern web technologies
              </span>{" "}
              with
              <span className="text-teal-300"> robust backend systems</span> to
              solve real-world problems.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Proficient in <span className="text-teal-300">Java</span>,
              <span className="text-teal-300"> React</span>, and
              <span className="text-teal-300"> Spring Boot</span>, I'm currently
              expanding my expertise through hands-on projects exploring
              cloud-native architectures and performance optimization.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-md">
            {["Java", "React", "Spring Boot"].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 border border-gray-700 rounded-md hover:border-teal-300/30 transition-colors">
                <span className="text-teal-300 text-sm font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-300/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default About;
