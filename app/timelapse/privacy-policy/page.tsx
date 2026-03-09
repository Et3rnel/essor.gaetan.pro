import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Timelapse",
  description:
    "Privacy policy for Timelapse, the time tracking app by Essor Labs.",
};

const LAST_UPDATED = "March 9, 2026";

export default function TimeLapsePrivacyPolicy() {
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
            Privacy policy
          </h1>
          <p className="text-sm text-zinc-400">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="prose-zinc prose prose-sm max-w-none [&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-zinc-800 [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-zinc-500 [&>ul]:mb-4 [&>ul]:space-y-1.5 [&>ul>li]:text-zinc-500">

          <p>
            This privacy policy describes how Essor Labs (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles information in
            connection with the <strong>Timelapse</strong> mobile application
            (&ldquo;the app&rdquo;) available on Google Play and the App Store.
          </p>

          {/* 1 */}
          <h2>1. Overview</h2>
          <p>
            Timelapse is a personal time-tracking application. We designed it
            with privacy as a core principle: <strong>we do not collect,
            store, or transmit any personal data</strong>. All data created
            within the app remains exclusively on your device.
          </p>

          {/* 2 */}
          <h2>2. Data we collect</h2>
          <p>
            We do not collect any personal information. The app does not ask
            for your name, email address, phone number, location, or any other
            identifier.
          </p>
          <p>
            The only data that exists in the app is what you voluntarily enter:
          </p>
          <ul>
            <li>Project names, colors, and emojis you create</li>
            <li>Task titles and emojis you add to projects</li>
            <li>
              Time records (start and end timestamps) generated when you start
              and stop the timer
            </li>
            <li>
              App preferences (display language, haptic feedback setting)
            </li>
          </ul>
          <p>
            All of this data is stored locally on your device in a private
            SQLite database. It never leaves your device unless you explicitly
            export it yourself using the backup feature in the app settings.
          </p>

          {/* 3 */}
          <h2>3. Data we do not collect</h2>
          <p>The app does not access or collect:</p>
          <ul>
            <li>Your location (GPS or network-based)</li>
            <li>Your camera or microphone</li>
            <li>Your contacts or address book</li>
            <li>Your photos or media library</li>
            <li>Your device identifiers (IMEI, advertising ID, etc.)</li>
            <li>Crash reports or diagnostics</li>
            <li>Usage analytics or behavioral data</li>
          </ul>

          {/* 4 */}
          <h2>4. Third-party services</h2>
          <p>
            The app uses the following platform services, which are governed
            by their own privacy policies:
          </p>
          <ul>
            <li>
              <strong>Google Play Billing</strong> (Android) — manages the
              optional one-time in-app purchase (premium unlock). All payment
              and transaction data is handled entirely by Google. We do not
              receive or store any payment information.
            </li>
            <li>
              <strong>Apple StoreKit</strong> (iOS) — same role as Google Play
              Billing on iOS. All purchase data is managed by Apple.
            </li>
          </ul>
          <p>
            The app does not integrate any analytics SDK (e.g. Firebase,
            Amplitude), advertising SDK (e.g. AdMob), or crash reporting
            service (e.g. Sentry, Crashlytics).
          </p>

          {/* 5 */}
          <h2>5. Permissions</h2>
          <p>
            On <strong>Android</strong>, the app requests the following
            permission:
          </p>
          <ul>
            <li>
              <strong>INTERNET</strong> — required by the app runtime (Tauri
              WebView) and by Google Play Billing to communicate with the Play
              Store. This permission is not used to send your personal data
              anywhere.
            </li>
          </ul>
          <p>
            On <strong>iOS</strong>, the app requests permission to send{" "}
            <strong>local notifications</strong> — used solely to display an
            active timer in the notification center while a session is running.
            This permission is optional; the app functions fully without it.
          </p>
          <p>No other permissions are requested on either platform.</p>

          {/* 6 */}
          <h2>6. User accounts</h2>
          <p>
            Timelapse does not have user accounts, login, or registration of
            any kind. There is nothing to sign up for and no credentials are
            created or stored.
          </p>

          {/* 7 */}
          <h2>7. Data sharing</h2>
          <p>
            We do not share, sell, rent, or trade any data with third parties,
            because we do not collect any data in the first place.
          </p>

          {/* 8 */}
          <h2>8. Data security</h2>
          <p>
            Your data is stored in the app&apos;s sandboxed private directory
            on your device, which is protected by the operating system&apos;s
            own security mechanisms. Network connections use HTTPS exclusively
            in production builds. Because we do not operate any backend server,
            there is no server-side storage to secure or breach.
          </p>

          {/* 9 */}
          <h2>9. Data retention and deletion</h2>
          <p>
            Your data lives entirely on your device. You can delete it at any
            time by:
          </p>
          <ul>
            <li>Deleting individual projects or records within the app</li>
            <li>Uninstalling the app, which removes all app data</li>
          </ul>
          <p>
            Because we hold no copy of your data on any server, there is
            nothing for us to delete on our end.
          </p>

          {/* 10 */}
          <h2>10. Children&apos;s privacy</h2>
          <p>
            Timelapse does not collect personal information from anyone,
            including children under the age of 13. The app is suitable for
            all ages.
          </p>

          {/* 11 */}
          <h2>11. Changes to this policy</h2>
          <p>
            If this privacy policy changes, we will update the date at the top
            of this page. We encourage you to review this page periodically.
            Continued use of the app after any changes constitutes acceptance
            of the updated policy.
          </p>

          {/* 12 */}
          <h2>12. Contact</h2>
          <p>
            If you have any questions about this privacy policy, you can reach
            us at:
          </p>
          <p>
            <strong>Essor Labs</strong>
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
