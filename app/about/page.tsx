import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Essor Labs",
  description:
    "Essor Labs is an independent mobile developer building simple, useful, and well-crafted apps.",
};

const apps = [
  {
    name: "Timelapse",
    tagline: "Personal time tracker",
    description:
      "Track time across projects and tasks. Simple, offline-first, no account required.",
    status: "Coming soon" as const,
    tags: ["Productivity", "iOS", "Android"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-600"
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
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            About
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Essor Labs
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            Independent mobile developer. I design and ship apps that are
            simple, well-crafted, and focused on doing one thing well.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-14">
          <h2 className="mb-4 text-xl font-semibold text-zinc-800">Mission</h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-500">
            <p>
              Most apps are overcomplicated. I build the opposite: tools that
              get out of your way, work offline, and respect your data.
            </p>
            <p>
              Every app is built solo — from the initial idea and design to the
              final release on the App Store and Google Play. No committees, no
              bloat — just a short loop between idea and shipped product.
            </p>
          </div>
        </section>

        {/* Apps */}
        <section className="mb-14">
          <h2 className="mb-6 text-xl font-semibold text-zinc-800">Apps</h2>
          <div className="space-y-4">
            {apps.map((app) => (
              <div
                key={app.name}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 px-6 py-5"
              >
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-semibold text-zinc-800">
                      {app.name}
                    </span>
                    <span className="ml-2 text-sm text-zinc-400">
                      — {app.tagline}
                    </span>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                    {app.status}
                  </span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-zinc-500">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-14">
          <h2 className="mb-6 text-xl font-semibold text-zinc-800">Values</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Simple",
                body: "No unnecessary features. Every screen has a clear purpose.",
              },
              {
                title: "Private",
                body: "Data stays on your device. No accounts, no tracking, no ads.",
              },
              {
                title: "Crafted",
                body: "Attention to detail in every interaction, animation, and edge case.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4"
              >
                <p className="mb-1 font-semibold text-zinc-800">{v.title}</p>
                <p className="text-sm leading-relaxed text-zinc-500">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-2xl border border-violet-100 bg-violet-50 px-6 py-8 text-center">
          <p className="mb-1 font-semibold text-zinc-800">Want to talk?</p>
          <p className="mb-5 text-sm text-zinc-500">
            Feedback, ideas, or just a hello — I read every email.
          </p>
          <a
            href="mailto:essorlabs.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-violet-200 transition-all hover:brightness-110"
          >
            Send a message
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </section>
      </div>
    </main>
  );
}
