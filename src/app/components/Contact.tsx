// app/components/Contact.tsx
import React from "react";
import Social from "./Social";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative border-b border-gray-800 bg-black py-24 lg:py-32"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Section Number */}
        <p className="mb-4 font-mono text-sm tracking-widest text-teal-300">
          03. WHAT&apos;S NEXT?
        </p>

        {/* Heading */}
        <h2
          id="contact-heading"
          className="text-4xl font-bold text-gray-100 md:text-5xl"
        >
          Let&apos;s Connect
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
          Whether you&apos;d like to discuss a project, talk about software
          development, or simply connect, feel free to reach out.
        </p>

        {/* Contact CTA */}
        <div className="mt-8">
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center rounded-lg border border-teal-300 px-6 py-3 font-mono text-sm text-teal-300 transition-all duration-300 hover:bg-teal-300/10"
          >
            Get In Touch
            <span className="ml-2">↗</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <Social />
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-2/3 -translate-x-1/2 bg-gradient-to-t from-teal-300/5 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default Contact;