// src/components/common/MotionSection.tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      {children}
    </motion.section>
  );
}
