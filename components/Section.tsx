"use client";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children } : { id: string, title?: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 max-w-3xl text-slate-300"
        >
          {subtitle}
        </motion.p>
      )}
      <div className={title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
