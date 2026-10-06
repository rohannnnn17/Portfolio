
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/50 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Developer Mark */}
        <a
          href="#"
          className="font-mono text-xl font-semibold text-teal-300 transition-colors duration-300 hover:text-teal-200"
          aria-label="Home"
        >
          &lt;/&gt;
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#about"
            className="rounded-md px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-teal-300"
          >
            About Me
          </a>

          <a
            href="#projects"
            className="rounded-md px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-teal-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="ml-2 rounded-md border border-teal-300/60 px-4 py-2 text-sm text-teal-300 transition-all duration-300 hover:border-teal-300 hover:bg-teal-300/10"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Contact */}
        <a
          href="#contact"
          className="rounded-md border border-teal-300/60 px-3 py-1.5 text-xs text-teal-300 transition-all duration-300 hover:border-teal-300 hover:bg-teal-300/10 md:hidden"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
