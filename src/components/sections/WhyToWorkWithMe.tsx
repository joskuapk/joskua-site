"use client";

import {
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import GlassCard from "../common/GlassCard";

const ICON_MAP = {
  translate: LightBulbIcon,
  communicate: ChatBubbleLeftRightIcon,
  ownership: CheckBadgeIcon,
  experience: RocketLaunchIcon,
} as const;

type PointKey = keyof typeof ICON_MAP;

export default function WhyWorkWithMe() {
  const t = useTranslations("whyWorkWithMe");

  const points = t.raw("points") as Array<{
    key: PointKey;
    title: string;
    description: string; // may contain <accent>
  }>;

  const rich = (key: string) =>
    t.rich(key as any, {
      accent: (chunks) => <span className="accent">{chunks}</span>,
    });

  return (
    <section
      id="why-work-with-me"
      className="py-20 flex flex-col gap-10 justify-center items-center text-center"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12">{t("title")}</h2>

        <ul className="grid gap-8 md:grid-cols-2 items-stretch [grid-auto-rows:1fr]">
          {points.map((point, idx) => {
            const Icon = ICON_MAP[point.key];

            return (
              <li key={idx} className="h-full">
                <GlassCard className="h-full flex flex-col items-center justify-center text-center p-10">
                  <Icon className="h-20 w-20 text-primary-400 mb-6" />

                  <div>
                    <h4 className="mb-2">{point.title}</h4>

                    {/* Use t.rich for descriptions because they include <accent> */}
                    <p>{rich(`points.${idx}.description`)}</p>
                  </div>
                </GlassCard>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Use t.rich for footer because it includes <accent> */}
      <p className="px-4 sm:px-6 md:px-0 text-center max-w-3xl">
        {rich("footer")}
      </p>
    </section>
  );
}
