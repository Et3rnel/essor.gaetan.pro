"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      {/* Background gradient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-100 via-indigo-50 to-transparent opacity-70 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Independent mobile developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Essor Labs
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-lg leading-relaxed text-zinc-500"
        >
          I design and build mobile apps that are simple, useful, and
          well-crafted. Everyday tools made for people, not machines.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="#apps"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:shadow-violet-300 hover:brightness-110"
          >
            See my apps
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50"
          >
            About me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-zinc-300 pt-1.5"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
