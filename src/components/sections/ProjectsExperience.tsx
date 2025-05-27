export default function ProjectsExperience() {
  const projects = [
    {
      title: "QuantumGo App",
      description:
        "A Flutter mobile app launched in multiple countries for technician scheduling.",
    },
    {
      title: "Nexus Clover App",
      description:
        "An Android app for POS loyalty integration, built with the Clover SDK and custom backend logic.",
    },
    {
      title: "Fiserv Integrations",
      description:
        "Handled hosted payment and card-present transaction APIs for a Fortune 500 fintech company.",
    },
    {
      title: "Automation & Internal Tools",
      description:
        "Built dashboards, web scrapers, and internal tools to streamline operations across the Americas.",
    },
  ];

  return (
    <section className="w-full px-6  max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Projects & Experience
      </h2>
      <div className="relative border-l-2 border-lemon-green pl-6 space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-lemon-green"></div>
            <h3 className="text-xl font-semibold text-lemon-green mb-1">
              {project.title}
            </h3>
            <p className="text-light-blue text-base">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
