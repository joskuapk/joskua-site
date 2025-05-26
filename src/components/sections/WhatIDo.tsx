export default function WhatIDo() {
  const services = [
    "Custom web app development (React, Flutter, .NET)",
    "Python scripting & automation",
    "UI/UX prototyping (Figma)",
    "Web scraping & data collection",
    "Dashboard development (SQL, pandas)",
    "API integration & backend logic",
  ];

  return (
    <section className="w-full px-6 py-24 max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Do</h2>
      <p className="text-base md:text-lg mb-10 text-light-blue">
        I help founders, businesses, and teams turn ideas into working software.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-lemon-green rounded-lg hover:bg-lemon-green hover:text-deep-blue transition"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
