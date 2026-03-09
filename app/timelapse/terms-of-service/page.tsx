import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Timelapse",
  description: "Terms of service for Timelapse, the time tracking app by Essor Labs.",
};

const LAST_UPDATED = "March 9, 2026";

export default function TimeLapseTermsOfService() {
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
          Back to Essor Labs
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium text-violet-600">Timelapse</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
            Terms of service
          </h1>
          <p className="text-sm text-zinc-400">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Content */}
        <div className="[&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-zinc-800 [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-zinc-500 [&>ul]:mb-4 [&>ul]:space-y-1.5 [&>ul>li]:text-zinc-500">
          <p>
            By downloading, installing, or using <strong>Timelapse</strong>{" "}
            (&ldquo;the app&rdquo;), you agree to these terms of service. If
            you do not agree, please do not use the app.
          </p>
          <p>
            The app is developed and maintained by <strong>Essor Labs</strong>{" "}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
          </p>

          <h2>1. License to use</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable
            license to use Timelapse for your own personal, non-commercial
            purposes. You may not copy, modify, distribute, sell, or sublicense
            any part of the app.
          </p>

          <h2>2. The app is provided as-is</h2>
          <p>
            Timelapse is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo;, without any warranty of any kind, express or
            implied. We do not guarantee that the app will be error-free,
            uninterrupted, or meet your specific requirements.
          </p>

          <h2>3. In-app purchases</h2>
          <p>
            Timelapse offers an optional one-time premium upgrade. All purchases
            are processed by the platform store (Google Play or the App Store)
            and are subject to their respective terms and refund policies.
          </p>
          <ul>
            <li>
              Purchases are final. We do not process refunds directly — please
              contact Google Play or Apple Support for refund requests.
            </li>
            <li>
              The premium unlock is tied to your store account and can be
              restored on any device using the same account.
            </li>
          </ul>

          <h2>4. Your data</h2>
          <p>
            All data you create in the app (projects, tasks, time records) is
            stored exclusively on your device. We have no access to it. You are
            solely responsible for backing it up if needed. Uninstalling the
            app will permanently delete all local data.
          </p>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the app for any unlawful purpose</li>
            <li>
              Attempt to reverse-engineer, decompile, or extract the source
              code of the app
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the app
            </li>
          </ul>

          <h2>6. Intellectual property</h2>
          <p>
            All content, design, code, and assets in Timelapse are the
            exclusive property of Essor Labs or its licensors. Nothing in these
            terms grants you any rights to our intellectual property.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Essor Labs shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising from your use of, or inability to use,
            the app — including any loss of data.
          </p>

          <h2>8. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. When we do, we will
            update the date at the top of this page. Continued use of the app
            after changes are posted constitutes your acceptance of the revised
            terms.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of France, without regard to
            conflict of law principles.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Reach us at:
            <br />
            <a
              href="mailto:essorlabs.dev@gmail.com"
              className="text-violet-600 hover:underline"
            >
              essorlabs.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
