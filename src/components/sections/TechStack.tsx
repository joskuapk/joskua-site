"use client";
import { useTranslations } from "next-intl";

export default function TechStack() {
  const t = useTranslations();

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
        className="px-4 py-2 border rounded-full hover:bg-primary-500 hover:text-background-500 transition"
      >
        {item}
      </div>
    ));

  return (
    <section className="w-full px-6  max-w-5xl mx-auto text-left">
      <h2 className="mb-6">{t("techStack.title")}</h2>

      <div className="mb-10">
        <h3 className="mb-4">{t("techStack.favorites")}</h3>
        <div className="flex flex-wrap gap-3">{renderBadges(favorites)}</div>
      </div>

      <div>
        <h3 className="mb-4">{t("techStack.others")}</h3>
        <div className="flex flex-wrap gap-3">{renderBadges(experienced)}</div>
      </div>
    </section>
  );
}
