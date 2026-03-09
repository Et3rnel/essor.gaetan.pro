import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Essor Labs",
  description: "Get in touch with Essor Labs.",
};

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-100 via-indigo-50 to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-lg text-center">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-600"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Essor Labs
        </Link>

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Essor Labs
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Get in touch
        </h1>
        <p className="mb-12 text-base leading-relaxed text-zinc-500">
          Have a question, feedback, or a support request? Send me an email and
          I&apos;ll get back to you as soon as possible.
        </p>

        {/* Email card */}
        <a
          href="mailto:essorlabs.dev@gmail.com"
          className="group mx-auto flex w-fit items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-violet-200 hover:shadow-violet-100"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs font-medium text-zinc-400">Email</p>
            <p className="text-sm font-semibold text-zinc-800 transition-colors group-hover:text-violet-600">
              essorlabs.dev@gmail.com
            </p>
          </div>
          <svg
            className="ml-2 h-4 w-4 text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:text-violet-400"
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

        <p className="mt-8 text-sm text-zinc-400">
          I typically reply within a few business days.
        </p>
      </div>
    </main>
  );
}
