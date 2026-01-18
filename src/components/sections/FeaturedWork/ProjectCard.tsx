"use client";

import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import * as React from "react";

export type ProjectCardProps = {
  title: string;
  subtitle: string;
  summary: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets: string[];
  bulletsTitle?: string;
  ctaLabel?: string;
  href?: string;
  highlight?: boolean;
};

export default function ProjectCard({
  title,
  subtitle,
  summary,
  icon: Icon,
  bullets,
  bulletsTitle,
  ctaLabel = "More details",
  href = "#",
  highlight = false,
}: ProjectCardProps) {
  return (
    <div className="project-card h-full rounded-2xl border border-white/10 bg-background-400/30 p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h3
            className={[
              "text-xl font-semibold",
              highlight ? "text-accent2-500" : "text-text-400",
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="subtitle mt-1">{subtitle}</p>
        </div>

        <div className="self-start rounded-lg border border-accent2-500 bg-ba p-2">
          <Icon className="h-10 w-10 text-accent1-500" />
        </div>
      </div>

      {/* Summary */}
      <p className="mt-5">{summary}</p>

      {/* Bullets */}
      <div className="mt-6">
        {bulletsTitle && <p className="mb-3 subtitle">{bulletsTitle}</p>}

        <ul className="space-y-2">
          {bullets.map((item, idx) => (
            <li key={idx} className="flex gap-2 text-sm text-text-400">
              <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-text-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/10 px-4 py-2 text-xs uppercase tracking-wide text-text-400 transition hover:border-white/20 hover:bg-black/20"
        >
          {ctaLabel}
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
