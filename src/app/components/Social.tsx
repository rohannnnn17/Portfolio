// app/components/Social.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Social: React.FC = () => {
  return (
    <div className="flex justify-center space-x-8 mt-8">
      <a
        href="https://github.com/rohannnnn17"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400">
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/rohan17pawar/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400">
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.instagram.com/__rohannnn__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400">
        <FaInstagram size={30} />
      </a>
      <a
        href="mailto:pawar17rohan@gmail.com"
        className="text-white hover:text-gray-400">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
};

export default Social;
