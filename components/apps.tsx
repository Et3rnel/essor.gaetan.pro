"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface App {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  tags: string[];
  color: string;
  available: boolean;
  link?: string;
}

const apps: App[] = [
  {
    name: "Timelapse",
    tagline: "Take back control of your time",
    description:
      "A mobile app for time management that helps you better understand how you spend your days. Visualise, analyse, and improve your relationship with time.",
    icon: "⏱",
    tags: ["Productivity", "iOS", "Time management"],
    color: "from-violet-500 to-indigo-600",
    available: false,
  },
];

function AppCard({ app, index }: { app: App; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${app.color}`} />

      <div className="flex flex-1 flex-col gap-5 p-8">
        {/* Icon + availability */}
        <div className="flex items-start justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${app.color} text-2xl shadow-md`}
          >
            {app.icon}
          </div>
          {!app.available && (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600 border border-amber-200">
              Coming soon
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-zinc-900">{app.name}</h3>
          <p className="text-sm font-medium text-violet-600">{app.tagline}</p>
          <p className="text-sm leading-relaxed text-zinc-500">
            {app.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          {app.link ? (
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${app.color} px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110`}
            >
            Discover
            <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-semibold text-zinc-400 cursor-not-allowed"
            >
              Not available yet
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Apps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apps" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center gap-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Apps
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            What I&apos;ve built
          </h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-500">
            Mobile apps designed to simplify everyday life, built with care and
            attention to detail.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
          {/* Coming soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: apps.length * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 p-10 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
              🚀
            </div>
            <p className="text-sm font-medium text-zinc-500">
              More apps coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
