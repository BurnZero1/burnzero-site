import Image from "next/image";

export default function BurnZeroLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white shadow-lg shadow-green-500/10">
              <Image
                src="/logo.png"
                alt="Burn Zero logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-wide leading-none">Burn Zero</p>
              <p className="mt-1 text-sm text-zinc-400">Carbon Intelligence Platform</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#platform" className="hover:text-white transition">Platform</a>
            <a href="#industries" className="hover:text-white transition">Industries</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition">
            Request Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.2),transparent_45%)]" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-4 py-2 rounded-full text-sm text-green-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Real-Time Carbon Tracking & Offsetting
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Turn Every
              <span className="block text-green-400">Fuel Transaction</span>
              Into Climate Action.
            </h1>

            <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Burn Zero helps fleets, enterprises, and financial platforms automatically track, calculate,
              and offset carbon emissions generated from fuel consumption in real time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-green-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition shadow-2xl shadow-green-500/20">
                Book a Demo
              </button>

              <button className="border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:bg-white/5 transition">
                Explore Platform
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-zinc-400 text-sm mt-1">Automated Tracking</p>
              </div>

              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-zinc-400 text-sm mt-1">Verified Offsets</p>
              </div>

              <div>
                <p className="text-3xl font-bold">API</p>
                <p className="text-zinc-400 text-sm mt-1">Ready Infrastructure</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/20 rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-zinc-400">Fleet Emissions Dashboard</p>
                  <h3 className="text-2xl font-semibold mt-1">Last Month Activity</h3>
                </div>

                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                  VERIFIED
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-zinc-300">Monthly Fuel Volume</p>
                    <p className="text-green-400 font-semibold">Offset Complete</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-zinc-500">Fuel Offset</p>
                      <p className="mt-1 font-medium">3M liters</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">CO₂ Offset</p>
                      <p className="mt-1 font-medium">6,930 tonnes</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Transactions</p>
                      <p className="mt-1 font-medium">48K</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Status</p>
                      <p className="mt-1 font-medium text-green-400">Reconciled</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm">CO₂ Offset Last Month</p>
                    <h3 className="text-3xl font-bold mt-2">6,930T</h3>
                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-green-400 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm">Transactions Last Month</p>
                    <h3 className="text-3xl font-bold mt-2">48K</h3>
                    <p className="text-green-400 text-sm mt-4">From 3M liters offset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Trust */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-center text-zinc-500 uppercase tracking-[0.3em] text-xs mb-8">
            Built for Modern Fleets, Fuel Networks & Enterprise Platforms
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-zinc-300">
            <div className="border border-white/10 rounded-2xl py-5">Fuel Networks</div>
            <div className="border border-white/10 rounded-2xl py-5">Logistics Fleets</div>
            <div className="border border-white/10 rounded-2xl py-5">Corporate Mobility</div>
            <div className="border border-white/10 rounded-2xl py-5">Banks & Fintech</div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-green-400 font-medium mb-4">How Burn Zero Works</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Carbon accounting and offsetting,
              <span className="text-zinc-500"> automated from end to end.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: '01',
                title: 'Capture Fuel Data',
                description:
                  'Integrate fuel cards, fleet systems, or payment networks to automatically capture every fuel transaction in real time.',
              },
              {
                step: '02',
                title: 'Calculate CO₂ Emissions',
                description:
                  'Burn Zero calculates emissions instantly using standardized fuel conversion methodologies and carbon intelligence models.',
              },
              {
                step: '03',
                title: 'Offset & Retire Credits',
                description:
                  'Verified carbon credits are retired automatically, creating transparent and auditable climate impact records.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.03] border border-white/10 rounded-[28px] p-8 hover:border-green-400/30 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-400 text-black flex items-center justify-center font-bold text-lg mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="py-28 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-400 font-medium mb-4">Enterprise Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Infrastructure for the next generation of climate-aware commerce.
            </h2>

            <div className="mt-10 space-y-6">
              {[
                'Real-time emissions tracking per transaction',
                'Verified offset accounting',
                'Audit-ready emissions infrastructure',
                'Fleet analytics and sustainability reporting',
                'Custom API integrations for enterprise systems',
                'White-label climate programs for financial institutions',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-400 mt-1" />
                  <p className="text-zinc-300 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-white/5 border border-white/10 rounded-[32px] p-8">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                <p className="text-zinc-400 text-sm">API Calls</p>
                <h3 className="text-4xl font-bold mt-2">1.2M+</h3>
              </div>

              <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                <p className="text-zinc-400 text-sm">Liters Offset</p>
                <h3 className="text-4xl font-bold mt-2">3M</h3>
              </div>

              <div className="bg-black/40 rounded-2xl p-6 border border-white/10 col-span-2">
                <p className="text-zinc-400 text-sm mb-4">Enterprise Ready Architecture</p>

                <div className="flex flex-wrap gap-3">
                  {['Fuel APIs', 'Emissions Data', 'Offset Accounting', 'Banking Systems', 'Fleet Software'].map((tag) => (
                    <div
                      key={tag}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-green-400 font-medium mb-4">Who We Serve</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Designed for industries with measurable fuel consumption.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {[
              {
                title: 'Fleet Operators',
                description: 'Track and offset fuel emissions across trucks, delivery fleets, and commercial vehicles.',
              },
              {
                title: 'Fuel Payment Networks',
                description: 'Add automated sustainability layers directly into fuel transaction ecosystems.',
              },
              {
                title: 'Banks & Fintech',
                description: 'Offer climate-conscious financial products tied to transactional carbon activity.',
              },
              {
                title: 'Enterprise Companies',
                description: 'Meet ESG and sustainability targets with verifiable emissions data and offsetting.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/10 rounded-[28px] p-8 hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] border border-green-500/20 bg-gradient-to-br from-green-500/20 via-black to-black p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.25),transparent_30%)]" />

          <div className="relative z-10">
            <p className="text-green-300 font-medium mb-4">Ready to Build Climate Accountability Into Every Transaction?</p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              Launch your carbon intelligence infrastructure with Burn Zero.
            </h2>

            <p className="text-zinc-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Empower your business with automated carbon tracking, transparent offsetting, and enterprise-grade climate reporting.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                Schedule a Demo
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/5 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/logo.png"
                  alt="Burn Zero logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-2xl font-bold tracking-wide leading-none">Burn Zero</p>
                <p className="mt-1 text-zinc-400 text-sm">Carbon Intelligence & Emissions Offsetting</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-zinc-300">chamorro@burn-zero.com</p>
            <p className="text-zinc-500 mt-2">© 2026 Burn Zero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
