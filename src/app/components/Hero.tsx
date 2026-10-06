
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden text-white"
      data-aos="fade-in"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/background-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-teal-300">
            PROGRAMMER @ TCS
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Hi, I&apos;m Rohan.
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-200 md:text-3xl">
            Java &amp; Full-Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            I build reliable and scalable applications using{" "}
            <span className="text-teal-300">Java</span>,{" "}
            <span className="text-teal-300">Spring Boot</span>, and{" "}
            <span className="text-teal-300">React</span>, with a focus on
            clean code, problem-solving, and creating practical digital
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="rounded-lg border border-teal-300 px-6 py-3 font-mono text-teal-300 transition-all duration-300 hover:bg-teal-300/10"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="rounded-lg bg-teal-300 px-6 py-3 font-mono text-black transition-all duration-300 hover:bg-teal-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
