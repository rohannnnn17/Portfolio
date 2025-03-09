import React from "react";
import Link from "next/link"; // Use `next/link` if you're using Next.js

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-black border-b border-gray-800" // Changed bg-gray-950 to bg-black
      role="region"
      aria-labelledby="about-heading">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            id="about-heading"
            className="flex items-center text-3xl md:text-4xl font-bold text-gray-100 mb-12">
            <span className="text-teal-300 font-mono mr-3">01.</span>
            About Me
          </h2>

          <div className="space-y-6 text-gray-400">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a BCA student passionate about crafting
              <span className="text-teal-300 font-medium">
                {" "}
                impactful digital solutions
              </span>
              . My focus lies in full-stack development, where I combine
              <span className="text-teal-300 font-medium">
                {" "}
                modern web technologies
              </span>{" "}
              with
              <span className="text-teal-300 font-medium">
                {" "}
                robust backend systems
              </span>{" "}
              to solve real-world problems.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Proficient in{" "}
              <span className="text-teal-300 font-medium">Java</span>,
              <span className="text-teal-300 font-medium"> React</span>, and
              <span className="text-teal-300 font-medium"> Spring Boot</span>,
              I'm currently expanding my expertise through hands-on projects
              exploring cloud-native architectures and performance optimization.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            {["Java", "React", "Spring Boot", "MERN", "J2EE"].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-teal-300/50 hover:bg-teal-300/10 transition-all duration-300">
                <span className="text-teal-300 text-sm font-mono">{tech}</span>
              </div>
            ))}
          </div>

          {/* Button to navigate to Certifications page */}
          <div className="mt-12 flex justify-center">
            {/* Button to navigate to Certifications page */}
            <div className="mt-12 flex justify-center">
              <Link
                href="/certifications" // Correct path to the Certifications page
                className="inline-flex items-center px-6 py-3 border border-teal-300 text-teal-300 font-mono rounded-lg hover:bg-teal-300/10 hover:border-teal-300/50 transition-all duration-300">
                View Certifications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
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
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-300/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Background pattern (optional) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/path/to/your/pattern.svg')", // Replace with your pattern
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default About;
