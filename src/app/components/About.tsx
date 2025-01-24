import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center text-white text-center relative bg-gray-900"
      style={{ backgroundImage: "url('/assets/background-about.jpg')" }}
      data-aos="fade-up">
      <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-lg"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">About Me</h2>
        <p className="text-xl max-w-2xl mx-auto drop-shadow-lg">
          I'm a BCA student passionate about using technology to solve
          real-world problems. I have experience working with Java, React, and
          Spring Boot. Currently, I'm expanding my knowledge by working on
          multiple development projects.
        </p>
      </div>
    </section>
  );
};

export default About;
