// app/page.tsx
"use client"; // Add this directive to indicate client-side code

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out",
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
