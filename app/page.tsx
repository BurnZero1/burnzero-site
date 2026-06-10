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
              <p className="mt-1 text-sm text-zinc-400">Conciliación de deuda de CO₂</p>
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
              Conciliación de deuda de CO₂ verificada
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Cierra la brecha entre tu
              <span className="block text-green-400">deuda de carbono</span>
              y tus compensaciones.
            </h1>

            <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Burn Zero ayuda a empresas y operadores de combustible a registrar deuda de CO₂,
              verificar certificados de compensación y conciliar ambos con trazabilidad auditable en blockchain.
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
                <p className="text-3xl font-bold">IA</p>
                <p className="text-zinc-400 text-sm mt-1">Verificación de certificados</p>
              </div>

              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-zinc-400 text-sm mt-1">Conciliación auditable</p>
              </div>

              <div>
                <p className="text-3xl font-bold">On-chain</p>
                <p className="text-zinc-400 text-sm mt-1">Registro inmutable</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/20 rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-zinc-400">Panel de conciliación de CO₂</p>
                  <h3 className="text-2xl font-semibold mt-1">Deuda pendiente por empresa</h3>
                </div>

                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                  VERIFICADO
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-zinc-300">Acme Corp — certificado Fonafifo</p>
                    <p className="text-green-400 font-semibold">Conciliación completa</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-zinc-500">Deuda registrada</p>
                      <p className="mt-1 font-medium">6,930 t CO₂</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Compensación verificada</p>
                      <p className="mt-1 font-medium">6,930 t CO₂</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Registros conciliados</p>
                      <p className="mt-1 font-medium">142</p>
                    </div>

                    <div>
                      <p className="text-zinc-500">Estado</p>
                      <p className="mt-1 font-medium text-green-400">Conciliado</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm">Deuda conciliada este mes</p>
                    <h3 className="text-3xl font-bold mt-2">6,930T</h3>
                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-400 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm">Certificados verificados</p>
                    <h3 className="text-3xl font-bold mt-2">12</h3>
                    <p className="text-green-400 text-sm mt-4">3 empresas conciliadas</p>
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
            Creado para equipos de sostenibilidad, operadores de combustible y auditoría ESG
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-zinc-300">
            <div className="border border-white/10 rounded-2xl py-5">Distribuidores de combustible</div>
            <div className="border border-white/10 rounded-2xl py-5">Empresas industriales</div>
            <div className="border border-white/10 rounded-2xl py-5">Equipos ESG corporativos</div>
            <div className="border border-white/10 rounded-2xl py-5">Auditores y consultores</div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-green-400 font-medium mb-4">Cómo funciona Burn Zero</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Conciliación de deuda de CO₂ con verificación de certificados
              <span className="text-zinc-500"> de principio a fin.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: '01',
                title: 'Registra deuda de CO₂',
                description:
                  'Importa datos operativos de consumo de combustible por empresa. Cada registro queda en estado PENDING con trazabilidad on-chain.',
              },
              {
                step: '02',
                title: 'Verifica certificados de compensación',
                description:
                  'Sube certificados de offset en PDF. La IA extrae empresa y toneladas compensadas, y los cruza con la deuda pendiente.',
              },
              {
                step: '03',
                title: 'Concilia y cierra en blockchain',
                description:
                  'Cuando deuda y compensación coinciden, los registros pasan a COMPLETED con prueba de offset inmutable y auditable.',
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
              Infraestructura para conciliar deuda de carbono con compensaciones verificadas.
            </h2>

            <div className="mt-10 space-y-6">
              {[
                'Registro de deuda de CO₂ por empresa, combustible y volumen',
                'Verificación automática de certificados de compensación con IA',
                'Conciliación deuda vs. compensación por empresa y toneladas',
                'Ciclo de vida PENDING → COMPLETED con prueba de offset en blockchain',
                'Registro inmutable en Ethereum para auditorías ESG',
                'Panel de deuda pendiente y estado de conciliación por empresa',
                'API e integraciones para sistemas de reporte y cumplimiento',
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
                <p className="text-zinc-400 text-sm">Toneladas conciliadas</p>
                <h3 className="text-4xl font-bold mt-2">6.9K</h3>
              </div>

              <div className="bg-black/40 rounded-2xl p-6 border border-white/10 col-span-2">
                <p className="text-zinc-400 text-sm mb-4">Arquitectura lista para empresas</p>

                <div className="flex flex-wrap gap-3">
                  {['Importación CSV', 'Certificados PDF', 'Conciliación IA', 'Registro on-chain', 'Reportes ESG'].map((tag) => (
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
              Diseñado para quienes deben demostrar que compensaron lo que emitieron.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {[
              {
                title: 'Distribuidores de combustible',
                description: 'Registra la deuda de CO₂ de tus clientes y concilia certificados de compensación por empresa.',
              },
              {
                title: 'Empresas industriales y flotas',
                description: 'Centraliza deuda de carbono por operación y demuestra que cada tonelada emitida tiene su compensación verificada.',
              },
              {
                title: 'Equipos de sostenibilidad',
                description: 'Cierra el ciclo entre emisiones registradas y offsets comprados, con evidencia lista para reportes ESG.',
              },
              {
                title: 'Auditores y consultores',
                description: 'Accede a un registro inmutable que vincula deuda, certificado y prueba de conciliación on-chain.',
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
            <p className="text-green-300 font-medium mb-4">¿Listo para conciliar tu deuda de carbono con compensaciones verificadas?</p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              Implementa conciliación de CO₂ auditable con Burn Zero.
            </h2>

            <p className="text-zinc-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Registra deuda, verifica certificados y demuestra que cada tonelada compensada está respaldada por evidencia on-chain.
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
                <p className="mt-1 text-zinc-400 text-sm">Conciliación de deuda de CO₂ y trazabilidad on-chain</p>
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
