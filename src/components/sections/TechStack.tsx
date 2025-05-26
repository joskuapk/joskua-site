export default function TechStack() {
  const favorites = ["React", "Flutter", "Python", "REST APIs", "Figma", "SQL"];
  const experienced = [
    ".NET",
    "WordPress",
    "Wix",
    "GitLab",
    "Firebase",
    "Google Maps API",
    "Excel Macros",
    "Pandas",
    "Flask",
    "Django",
  ];

  const renderBadges = (items: string[]) =>
    items.map((item, index) => (
      <div
        key={index}
        className="px-4 py-2 border border-lemon-green rounded-full text-sm hover:bg-lemon-green hover:text-deep-blue transition"
      >
        {item}
      </div>
    ));

  return (
    <section className="w-full px-6 py-24 max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack</h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-lemon-green mb-4">
          Favorites
        </h3>
        <div className="flex flex-wrap gap-3">{renderBadges(favorites)}</div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-lemon-green mb-4">
          Also Experienced In
        </h3>
        <div className="flex flex-wrap gap-3">{renderBadges(experienced)}</div>
      </div>
    </section>
  );
}
