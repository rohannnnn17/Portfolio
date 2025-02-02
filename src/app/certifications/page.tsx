import React from "react";

const Certifications: React.FC = () => {
  // Sample data for certifications
  const certifications = [
    {
      id: 1,
      title: "Complete 2023 Web Development Bootcamp by Dr. Angela Yu",
      issuer: "Udemy ",
      date: "Jan 2023",
      link: "https://media-hosting.imagekit.io//57e3706049b440c9/UC-07581101-e8b0-43c4-819f-3525a4e9d7ff.jpg?Expires=1833088510&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WGgujBiBnrbnuuXL0UFA0EdfKqUKS-ya~r4Brv81ld0fWycRsXkV3Q-rdjiV95lbPwsLsFJ8FLu-0lN3JVyl0sX2b0qJMqmxOxKnpWE8NhJPtp-VugV8kSRHN4YgerPp~f4IDFFQQM-m7oTW6H~kNxG71hlVwWA4B1lJp7LvqhaomVpcVAsrQZB0cpyxdQmvuzNiRN~rDY2Y9CIPcZUpXuofdixitt-DLDScCjJ2JBxM-PQG0l7IPK8KiFYjWLQL1mzbbUI5uCjo4TRrn1mkouLrV6tyIEpg1AnwHIJRVOWYgZULSTjk3COnoARl~ExsORlh7dtoz08~wTgyikUL~g__",
    },
    {
      id: 2,
      title: "Core and Advanced Java",
      issuer: "Universal Informatics",
      date: "Mar 2023",
      link: "https://ik.imagekit.io/rohan17/Portfolio/IMG_20241219_110801717.jpg?updatedAt=1738480666760",
    },
    {
      id: 3,
      title:
        "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide by Academind",
      issuer: "Udemy",
      date: "May 2023",
      link: "https://ik.imagekit.io/rohan17/Portfolio/Screenshot%202025-02-02%20124826.png?updatedAt=1738480748358",
    },
    {
      id: 4,
      title:
        "Certificate of Excellence for participating in CLASH 2.0, organized by INDORICODERS in collaboration with SCHOOL OF COMPUTER IPS ACADEMY",
      issuer: "IPS Academy",
      date: "Jul 2023",
      link: "https://ik.imagekit.io/rohan17/Portfolio/IMG_20241219_110738721.jpg?updatedAt=1738480748706",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-24 lg:py-32 bg-gray-950 border-b border-gray-800"
      role="region"
      aria-labelledby="certifications-heading">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            id="certifications-heading"
            className="flex items-center text-3xl md:text-4xl font-bold text-gray-100 mb-12">
            <span className="text-teal-300 font-mono mr-3">02.</span>
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 border border-gray-800 rounded-lg bg-gray-900 hover:border-teal-300/50 hover:bg-teal-300/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  <span className="font-medium">Date:</span> {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-300 hover:text-teal-400 transition-colors">
                  View Certification
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-300/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Certifications;
