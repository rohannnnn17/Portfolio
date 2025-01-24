// app/components/Contact.tsx
import React from "react";
import Social from "./Social";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-8">
        Feel free to reach out to me through the links below:
      </p>
      <Social />
    </section>
  );
};

export default Contact;
