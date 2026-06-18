import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Burn Zero — Ad analytics",
  description: "How to track impressions, clicks, and engagement for Burn Zero FleetMagic ad units.",
  robots: { index: false, follow: false },
};

export default function AdAnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xl font-bold">
              <span className="text-green-400">Burn</span>Zero
            </p>
            <p className="text-sm text-zinc-400 mt-1">Ad analytics</p>
          </div>
          <Link href="/ads" className="text-sm text-zinc-300 hover:text-white transition">
            ← Ad units
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-sm leading-relaxed text-zinc-300">
        <section>
          <h1 className="text-3xl font-bold text-white mb-4">Track ad performance</h1>
          <p>
            All ad units send events to <code className="text-green-300">/api/ad-event</code> when
            embedded in FleetMagic. No changes are needed inside FleetMagic beyond the iframe embed.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-950 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">Events captured</h2>
          <ul className="space-y-3">
            <li>
              <strong className="text-white">impression</strong> — ad loaded in the iframe
            </li>
            <li>
              <strong className="text-white">click</strong> — user clicked a link (UTMs added
              automatically)
            </li>
            <li>
              <strong className="text-white">page_view</strong> — leaderboard page seen (1, 2, or 3)
              plus time on the previous page
            </li>
            <li>
              <strong className="text-white">engagement</strong> — heartbeat every 15s with total
              time on ad and pages seen
            </li>
            <li>
              <strong className="text-white">session_end</strong> — user left or hid the tab
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">Recommended: PostHog (free tier)</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Create a project at posthog.com</li>
            <li>Copy the Project API Key</li>
            <li>
              In Vercel → Settings → Environment Variables, add{" "}
              <code className="text-green-300">POSTHOG_PROJECT_API_KEY</code>
            </li>
            <li>Redeploy burn-zero.com</li>
          </ol>
          <p>
            Events appear as <code className="text-green-300">ad_impression</code>,{" "}
            <code className="text-green-300">ad_click</code>,{" "}
            <code className="text-green-300">ad_page_view</code>, etc. Filter by{" "}
            <code className="text-green-300">unit</code> to compare ad formats.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-950 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">Optional webhook</h2>
          <p>
            Set <code className="text-green-300">AD_EVENT_WEBHOOK_URL</code> to forward raw JSON to
            Zapier, Slack, or a spreadsheet. Useful if you do not use PostHog.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-950 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">Metrics cheat sheet</h2>
          <ul className="space-y-2">
            <li>
              <strong className="text-white">Impressions</strong> — count of{" "}
              <code className="text-green-300">ad_impression</code>
            </li>
            <li>
              <strong className="text-white">Clicks</strong> — count of{" "}
              <code className="text-green-300">ad_click</code>
            </li>
            <li>
              <strong className="text-white">CTR</strong> — clicks ÷ impressions
            </li>
            <li>
              <strong className="text-white">Page 2 / 3 reach</strong> —{" "}
              <code className="text-green-300">ad_page_view</code> where page = 2 or 3
            </li>
            <li>
              <strong className="text-white">Avg. time on ad</strong> — average{" "}
              <code className="text-green-300">timeOnAdMs</code> on{" "}
              <code className="text-green-300">ad_session_end</code>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
          <h2 className="text-lg font-semibold text-white mb-3">Local testing</h2>
          <p>
            Run <code className="text-green-300">npm run dev</code>, open an ad at{" "}
            <code className="text-green-300">/ads/leaderboard-728x90.html</code>, and check the
            terminal for <code className="text-green-300">[ad-event]</code> logs.
          </p>
        </section>
      </main>
    </div>
  );
}
