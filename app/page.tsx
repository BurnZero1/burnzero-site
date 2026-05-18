import Image from "next/image";

export default function BurnZeroLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white shadow-lg shadow-green-500/10">
              <Image
                src="/logo.png"
                alt="Logo de Burn Zero"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-wide leading-none">Burn Zero</p>
              <p className="mt-1 text-sm text-zinc-400">Plataforma de inteligencia de carbono</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#how-it-works" className="hover:text-white transition">Cómo funciona</a>
            <a href="#platform" className="hover:text-white transition">Plataforma</a>
            <a href="#industries" className="hover:text-white transition">Industrias</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
          </div>

          <a
            href="/request-demo"
            className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition"
          >
            Solicitar demo
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.2),transparent_45%)]" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-4 py-2 rounded-full text-sm text-green-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Seguimiento y compensación de carbono en tiempo real
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Convierte cada
              <span className="block text-green-400">transacción de combustible</span>
              en acción climática.
            </h1>

            <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Burn Zero ayuda a flotas, empresas y plataformas financieras a rastrear, calcular
              y compensar automáticamente las emisiones de carbono generadas por el consumo de combustible en tiempo real.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/request-demo"
                className="bg-green-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition shadow-2xl shadow-green-500/20"
              >
                Agendar demo
              </a>

              <a
                href="#platform"
                className="border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:bg-white/5 transition"
              >
                Explorar plataforma
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-zinc-400 text-sm mt-1">Seguimiento automatizado</p>
              </div>

              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-zinc-400 text-sm mt-1">Compensaciones verificadas</p>
              </div>

              <div>
                <p className="text-3xl font-bold">API</p>
                <p className="text-zinc-400 text-sm mt-1">Infraestructura lista</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/20 rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-zinc-400">Panel de emisiones de flota</p>
                  <h3 className="text-2xl font-semibold mt-1">Actividad del mes pasado</h3>
                </div>

                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                  VERIFICADO
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-zinc-300">Volumen mensual de combustible</p>
                    <p className="text-green-400 font-semibold">Compensación completa</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-zinc-500">Combustible compensado</p>
                      <p className="mt-1 font-medium">3M litros</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">CO₂ compensado</p>
                      <p className="mt-1 font-medium">6,930 toneladas</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Transacciones</p>
                      <p className="mt-1 font-medium">48K</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Estado</p>
                      <p className="mt-1 font-medium text-green-400">Conciliado</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm">CO₂ compensado el mes pasado</p>
                    <h3 className="text-3xl font-bold mt-2">6,930T</h3>
                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-green-400 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm">Transacciones del mes pasado</p>
                    <h3 className="text-3xl font-bold mt-2">48K</h3>
                    <p className="text-green-400 text-sm mt-4">De 3M litros compensados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-center text-zinc-500 uppercase tracking-[0.3em] text-xs mb-8">
            Creado para flotas modernas, redes de combustible y plataformas empresariales
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-zinc-300">
            <div className="border border-white/10 rounded-2xl py-5">Redes de combustible</div>
            <div className="border border-white/10 rounded-2xl py-5">Flotas logísticas</div>
            <div className="border border-white/10 rounded-2xl py-5">Movilidad corporativa</div>
            <div className="border border-white/10 rounded-2xl py-5">Bancos y fintech</div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-green-400 font-medium mb-4">Cómo funciona Burn Zero</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Contabilidad y compensación de carbono,
              <span className="text-zinc-500"> automatizadas de principio a fin.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: '01',
                title: 'Captura datos de combustible',
                description:
                  'Integra tarjetas de combustible, sistemas de flota o redes de pago para capturar automáticamente cada transacción de combustible en tiempo real.',
              },
              {
                step: '02',
                title: 'Calcula emisiones de CO₂',
                description:
                  'Burn Zero calcula emisiones al instante usando metodologías estandarizadas de conversión de combustible y modelos de inteligencia de carbono.',
              },
              {
                step: '03',
                title: 'Compensa y retira créditos',
                description:
                  'Los créditos de carbono verificados se retiran automáticamente, creando registros de impacto climático transparentes y auditables.',
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

      {/* Plataforma */}
      <section id="platform" className="py-28 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-400 font-medium mb-4">Plataforma empresarial</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Infraestructura para la próxima generación de comercio consciente del clima.
            </h2>

            <div className="mt-10 space-y-6">
              {[
                'Seguimiento de emisiones en tiempo real por transacción',
                'Contabilidad de compensaciones verificadas',
                'Registros de retiro de créditos en blockchain de Ethereum para total transparencia y trazabilidad',
                'Infraestructura de emisiones lista para auditorías',
                'Analítica de flotas y reportes de sostenibilidad',
                'Integraciones API personalizadas para sistemas empresariales',
                'Programas climáticos de marca blanca para instituciones financieras',
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
                <p className="text-zinc-400 text-sm">Llamadas API</p>
                <h3 className="text-4xl font-bold mt-2">1.2M+</h3>
              </div>

              <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                <p className="text-zinc-400 text-sm">Litros compensados</p>
                <h3 className="text-4xl font-bold mt-2">3M</h3>
              </div>

              <div className="bg-black/40 rounded-2xl p-6 border border-white/10 col-span-2">
                <p className="text-zinc-400 text-sm mb-4">Arquitectura lista para empresas</p>

                <div className="flex flex-wrap gap-3">
                  {['API de combustible', 'Datos de emisiones', 'Contabilidad de compensaciones', 'Sistemas bancarios', 'Software de flotas'].map((tag) => (
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

      {/* Industrias */}
      <section id="industries" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-green-400 font-medium mb-4">A quién servimos</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Diseñado para industrias con consumo de combustible medible.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {[
              {
                title: 'Operadores de flotas',
                description: 'Rastrea y compensa emisiones de combustible en camiones, flotas de entrega y vehículos comerciales.',
              },
              {
                title: 'Redes de pago de combustible',
                description: 'Agrega capas automatizadas de sostenibilidad directamente a ecosistemas de transacciones de combustible.',
              },
              {
                title: 'Bancos y fintech',
                description: 'Ofrece productos financieros conscientes del clima vinculados a la actividad transaccional de carbono.',
              },
              {
                title: 'Empresas corporativas',
                description: 'Cumple objetivos ESG y de sostenibilidad con datos de emisiones verificables y compensación.',
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
            <p className="text-green-300 font-medium mb-4">¿Listo para integrar responsabilidad climática en cada transacción?</p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              Lanza tu infraestructura de inteligencia de carbono con Burn Zero.
            </h2>

            <p className="text-zinc-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Potencia tu negocio con seguimiento automatizado de carbono, compensación transparente y reportes climáticos de nivel empresarial.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/request-demo"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Agendar demo
              </a>

              <a
                href="/request-demo"
                className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/5 transition"
              >
                Contactar ventas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer id="contact" className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/logo.png"
                  alt="Logo de Burn Zero"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-2xl font-bold tracking-wide leading-none">Burn Zero</p>
                <p className="mt-1 text-zinc-400 text-sm">Inteligencia de carbono y compensación de emisiones</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-zinc-300">chamorro@burn-zero.com</p>
            <p className="text-zinc-500 mt-2">© 2026 Burn Zero. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
