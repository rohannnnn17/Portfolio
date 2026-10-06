// app/components/Hero.tsx
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
        <source
          src="/assets/background-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">
            Hi, I&apos;m Rohan
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-xl text-gray-300">
            I&apos;m a BCA student passionate about technology,
            problem-solving, and developing innovative solutions.
            Currently working on various exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;