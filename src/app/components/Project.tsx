// app/components/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center relative"
      data-aos="fade-up" // AOS fade-up effect
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl hover:rotate-3 hover:bg-gray-700 transform transition-all duration-300 ease-in-out"
            data-aos="zoom-in">
            <h3 className="text-2xl font-semibold mb-4">WanderWise</h3>
            <p className="text-lg text-gray-300 mb-4">
              WanderWise is a project designed to help users discover and plan
              their travel experiences with ease.
            </p>
            <a
              href="https://github.com/rohannnnn17/WanderWise" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all duration-300">
              View on GitHub
            </a>
          </div>

          {/* Project Card 2 */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl hover:rotate-3 hover:bg-gray-700 transform transition-all duration-300 ease-in-out"
            data-aos="zoom-in">
            <h3 className="text-2xl font-semibold mb-4">Denty App</h3>
            <p className="text-lg text-gray-300 mb-4">
              Denty App is a web-based solution designed to streamline the
              management of dental clinic operations.
            </p>
            <a
              href="https://github.com/JeansPanT/Denty" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all duration-300">
              View on GitHub
            </a>
          </div>

          {/* Project Card 3 */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl hover:rotate-3 hover:bg-gray-700 transform transition-all duration-300 ease-in-out"
            data-aos="zoom-in">
            <h3 className="text-2xl font-semibold mb-4">
              Employee Management System
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              The Employee Management System allows admins to store and update
              employee information and track attendance.
            </p>
            <a
              href="" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all duration-300">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
