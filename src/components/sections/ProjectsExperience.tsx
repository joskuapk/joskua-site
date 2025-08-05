"use client";
import { useTranslations } from "next-intl";

export default function ProjectsExperience() {
  const t = useTranslations();

  const projects = [
    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.description"),
    },
    {
      title: t("projects.3.title"),
      description: t("projects.3.description"),
    },
    {
      title: t("projects.4.title"),
      description: t("projects.4.description"),
    },
  ];

  return (
    <section className="w-full px-6  max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        {t("projects.title")}
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
