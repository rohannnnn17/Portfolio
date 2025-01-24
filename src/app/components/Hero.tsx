import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white h-screen"
      style={{ backgroundImage: "url('/assets/background-video.mp4')" }}
      data-aos="fade-in"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center text-center h-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">Hi, I&#39;m Rohan</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
            I&#39;m a BCA student passionate about technology, problem-solving, and
            developing innovative solutions. Currently working on various
            exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
