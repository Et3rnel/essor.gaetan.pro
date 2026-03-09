"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-violet-50/30 to-white"
      />

      <div className="mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            About
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Independent developer
          </h2>

          <div className="flex max-w-xl flex-col gap-4 text-base leading-relaxed text-zinc-500">
            <p>
              I&apos;m an independent developer focused on mobile apps. My
              approach: simple, well-designed products that solve real problems.
            </p>
            <p>
              From idea to App Store, solo &mdash; with close attention to every
              detail along the way.
            </p>
          </div>

          <motion.a
            href="mailto:essorlabs.dev@gmail.com"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
          >
            Get in touch
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
