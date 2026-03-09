"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-zinc-100 px-6 py-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Essor Labs &mdash; Independent mobile
          developer
        </p>
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <Link
            href="/timelapse/privacy-policy"
            className="transition-colors hover:text-violet-600"
          >
            Privacy policy
          </Link>
          <span aria-hidden>·</span>
          <span className="flex items-center gap-1">
            Built with
            <span className="mx-1 text-base">🤍</span>
            in Next.js
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
