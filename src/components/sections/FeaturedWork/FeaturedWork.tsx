"use client";

import { useTranslations } from "next-intl";
import {
  DevicePhoneMobileIcon,
  SparklesIcon,
  GlobeAltIcon,
  RectangleGroupIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

const ICON_MAP = {
  billboardPlanet: DevicePhoneMobileIcon,
  nexusSaaS: SparklesIcon,
  factronica: GlobeAltIcon,
  onlinePortal: RectangleGroupIcon,
  k1Electric: BuildingOffice2Icon,
} as const;

type ProjectKey = keyof typeof ICON_MAP;

export default function ProjectsShowcase() {
  const t = useTranslations("featuredWork");

  const projects = t.raw("projects") as Array<{
    key: ProjectKey;
    title: string;
    subtitle: string;
    summary: string;
    bulletsTitle?: string;
    bullets: string[];
    ctaLabel?: string;
    href?: string;
    highlight?: boolean;
  }>;

  const cards: ProjectCardProps[] = projects.map((p) => ({
    title: p.title,
    subtitle: p.subtitle,
    summary: p.summary,
    icon: ICON_MAP[p.key],
    bulletsTitle: p.bulletsTitle,
    bullets: p.bullets,
    ctaLabel: p.ctaLabel ?? "More details",
    href: p.href ?? "#",
    highlight: p.highlight ?? false,
  }));

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-left">{t("title")}</h2>

          {/* If you add featuredWork.intro later, swap this to t("intro") */}
          <p className="mt-3 ">{t("subtitle")}</p>
        </div>

        <ul className="grid gap-8 md:grid-cols-2 items-stretch [grid-auto-rows:1fr]">
          {cards.map((c) => (
            <li key={c.title} className="h-full">
              <ProjectCard {...c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
