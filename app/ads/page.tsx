import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Burn Zero — FleetMagic ad units",
  description: "Embeddable Burn Zero promo banners for FleetMagic dashboard integration.",
  robots: { index: false, follow: false },
};

const LEADERBOARD_SRC = "/ads/leaderboard-728x90.html";
const SIDEBAR_SRC = "/ads/sidebar-300x250.html";
const SIDEBAR_SIMPLE_SRC = "/ads/sidebar-300x250-simple.html";

export default function AdsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xl font-bold">
              <span className="text-green-400">Burn</span>Zero
            </p>
            <p className="text-sm text-zinc-400 mt-1">FleetMagic embed units</p>
          </div>
          <Link
            href="/"
            className="text-sm text-zinc-300 hover:text-white transition"
          >
            ← Volver al sitio
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        <section>
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">
            Leaderboard · 728 × 90
          </p>
          <h1 className="text-2xl font-bold mb-2">Top / bottom dashboard banner</h1>
          <p className="text-sm text-zinc-400 mb-6">
            Three swipeable pages: hero, cómo funciona (3 steps), and CTA. Scroll horizontally or use the dots.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <iframe
              src={LEADERBOARD_SRC}
              title="Burn Zero leaderboard ad"
              width={728}
              height={90}
              className="border-0 block max-w-none"
            />
          </div>
          <EmbedSnippet
            label="Iframe embed"
            code={`<iframe src="https://www.burn-zero.com${LEADERBOARD_SRC}" width="728" height="90" style="border:0;" title="Burn Zero"></iframe>`}
          />
        </section>

        <section>
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">
            Medium rectangle · 300 × 250 (simple)
          </p>
          <h2 className="text-2xl font-bold mb-2">Sidebar promo card — single page</h2>
          <p className="text-sm text-zinc-400 mb-6">
            Headline, short subline, 3 steps, and CTA. Matches the simplified leaderboard messaging.
          </p>
          <div className="inline-block rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <iframe
              src={SIDEBAR_SIMPLE_SRC}
              title="Burn Zero sidebar ad (simple)"
              width={300}
              height={250}
              className="border-0 block"
            />
          </div>
          <EmbedSnippet
            label="Iframe embed"
            code={`<iframe src="https://www.burn-zero.com${SIDEBAR_SIMPLE_SRC}" width="300" height="250" style="border:0;" title="Burn Zero"></iframe>`}
          />
        </section>

        <section>
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">
            Medium rectangle · 300 × 250
          </p>
          <h2 className="text-2xl font-bold mb-6">Sidebar promo card (full)</h2>
          <div className="inline-block rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <iframe
              src={SIDEBAR_SRC}
              title="Burn Zero sidebar ad"
              width={300}
              height={250}
              className="border-0 block"
            />
          </div>
          <EmbedSnippet
            label="Iframe embed"
            code={`<iframe src="https://www.burn-zero.com${SIDEBAR_SRC}" width="300" height="250" style="border:0;" title="Burn Zero"></iframe>`}
          />
        </section>

        <section className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 text-sm text-zinc-300 leading-relaxed">
          <p className="font-semibold text-white mb-2">Direct asset URLs</p>
          <ul className="space-y-2 font-mono text-xs text-green-300">
            <li>https://www.burn-zero.com/ads/leaderboard-728x90.html</li>
            <li>https://www.burn-zero.com/ads/sidebar-300x250-simple.html</li>
            <li>https://www.burn-zero.com/ads/sidebar-300x250.html</li>
          </ul>
          <p className="mt-4 text-zinc-400">
            The leaderboard unit is a 3-page horizontal scroll ad. The simple sidebar is a single-page
            unit aligned with that messaging; the full sidebar links to the demo request flow. Use the
            iframe snippets inside FleetMagic dashboard slots, or open the HTML URLs directly for
            screenshots.
          </p>
        </section>
      </main>
    </div>
  );
}

function EmbedSnippet({ label, code }: { label: string; code: string }) {
  return (
    <div className="mt-6">
      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{label}</p>
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950 p-4 text-xs text-zinc-300 font-mono leading-relaxed">
        {code}
      </pre>
    </div>
  );
}
