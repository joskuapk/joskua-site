"use client";

import * as React from "react";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ServerStackIcon,
  PuzzlePieceIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const ICON_MAP = {
  mobile: DevicePhoneMobileIcon,
  web: GlobeAltIcon,
  backend: ServerStackIcon,
  product: PuzzlePieceIcon,
} as const;

type ItemKey = keyof typeof ICON_MAP;

export default function WhatICanBuildAccordion() {
  const t = useTranslations("whatICanBuild");

  const items = t.raw("items") as Array<{
    key: ItemKey;
    title: string;
    description: string; // may include <accent>
  }>;

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const rich = (key: string) =>
    t.rich(key as any, {
      accent: (chunks) => <span className="accent">{chunks}</span>,
    });

  return (
    <section id="what-i-can-build" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            <span className="inline-block mb-4 text-sm uppercase tracking-wide text-primary-400">
              {t("eyebrow")}
            </span>

            <h2 className="mb-4">{t("title")}</h2>

            {/* intro uses <accent> */}
            <p className="max-w-md text-text-500">{rich("intro")}</p>
          </div>

          {/* RIGHT COLUMN — ACCORDION */}
          <div className="divide-y divide-white/10">
            {items.map((item, idx) => {
              const Icon = ICON_MAP[item.key];
              const isOpen = openIndex === idx;

              return (
                <button
                  key={item.key}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left py-6 flex gap-4 items-start group"
                  aria-expanded={isOpen}
                >
                  {/* Icon */}
                  <Icon className="h-6 w-6 mt-1 text-accent1-500 flex-shrink-0" />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-medium">{item.title}</h4>

                      {isOpen ? (
                        <MinusIcon className="h-5 w-5 text-accent1-500 flex-shrink-0" />
                      ) : (
                        <PlusIcon className="h-5 w-5 text-accent2-500 flex-shrink-0" />
                      )}
                    </div>

                    {/* description uses <accent> */}
                    {isOpen && (
                      <p className="mt-3 text-text-500">
                        {rich(`items.${idx}.description`)}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
