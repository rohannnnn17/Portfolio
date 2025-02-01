import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent text-white fixed top-0 left-0 right-0 z-50 p-6 shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-3xl font-bold neon-text">Rohan Pawar</div>
        <div className="space-x-8">
          <a href="#about" className="text-lg hover:text-neon-green">
            About
          </a>
          <a href="#projects" className="text-lg hover:text-neon-green">
            Projects
          </a>
          <a href="#contact" className="text-lg hover:text-neon-green">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
