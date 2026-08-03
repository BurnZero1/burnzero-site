import type { Metadata } from "next";
import Link from "next/link";
import "./brand-theme.css";

export const metadata: Metadata = {
  title: "BurnZero — Cumplimiento de CO₂ con prueba on-chain",
  description:
    "Plataforma de cumplimiento ambiental que conecta registros de emisiones con certificados oficiales (FONAFIFO), conciliación automática, PDF y prueba blockchain. Costa Rica · B2B.",
};

const painPoints = [
  {
    pain: "Emisiones en CSV / certificados en email",
    solution: "Panel unificado de Registros + Certificados",
  },
  {
    pain: "Difícil probar qué certificado compensó qué",
    solution: "Matching automático por empresa / cédula jurídica",
  },
  {
    pain: "Riesgo de reutilizar el mismo certificado",
    solution: "Registro de número de transferencia bloquea duplicados",
  },
  {
    pain: "Auditores piden prueba",
    solution: "PDF + enlace de transacción por compensación",
  },
  {
    pain: "Créditos llegan antes de conocer toda la deuda",
    solution: "Fondos UCC reservan saldo para asignación futura",
  },
];

const steps = [
  {
    n: "01",
    title: "Registra deuda de CO₂",
    body: "Cargue registros de emisiones por organización y mantenga la deuda pendiente visible en un solo lugar.",
  },
  {
    n: "02",
    title: "Sube certificados de compensación",
    body: "Importe PDFs oficiales (FONAFIFO) y valide cédula jurídica / ID de organización antes de vincular.",
  },
  {
    n: "03",
    title: "Conciliación + anclaje on-chain",
    body: "Matching automático, estado PENDING → COMPLETED, PDF de evidencia y prueba en blockchain.",
  },
];

const audiences = [
  {
    title: "Sostenibilidad / ESG",
    body: "Torre de control de deuda de CO₂ y certificados oficiales, con trazabilidad lista para reporte.",
  },
  {
    title: "Finanzas / Compliance",
    body: "Ledger conciliado con recibos blockchain: qué se compensó, con qué certificado y cuándo.",
  },
  {
    title: "Operaciones / flotas CR",
    body: "Deuda por combustible + certificados Fonafifo + validación por cédula jurídica.",
  },
  {
    title: "Enterprise",
    body: "Multi-tenant, administración, validación de titularidad y registro on-chain auditable.",
  },
];

const platformFeatures = [
  {
    title: "Registros de emisiones",
    body: "Importe y organice la deuda de CO₂ por empresa, periodo y estado de compensación.",
  },
  {
    title: "Certificados FONAFIFO",
    body: "Suba PDFs oficiales y vincule cada certificado a registros pendientes con validación de organización.",
  },
  {
    title: "Anti-duplicados",
    body: "El número de transferencia queda registrado para bloquear la reutilización del mismo certificado.",
  },
  {
    title: "Prueba auditable",
    body: "Cada compensación genera PDF + enlace de transacción on-chain para auditores y compliance.",
  },
  {
    title: "Fondos UCC",
    body: "Reserve crédito sobrante en pools UCC para asignarlo cuando llegue el resto de la deuda.",
  },
  {
    title: "API y reportes ESG",
    body: "Integre importación vía API y exporte la evidencia que necesitan sostenibilidad y finanzas.",
  },
];

const tags = [
  "Importación vía API",
  "Certificados PDF",
  "Conciliación IA",
  "Registro on-chain",
  "Reportes ESG",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-white">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-page-nav backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/brand-logo.png"
                alt="Logo de BurnZero — hoja verde conectada a bloques en cadena"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-2xl font-bold leading-none tracking-wide">
                <span className="text-green-400">Burn</span>Zero
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                Cumplimiento ambiental de CO₂
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#problema" className="transition hover:text-white">
              Problema
            </a>
            <a href="#como-funciona" className="transition hover:text-white">
              Cómo funciona
            </a>
            <a href="#plataforma" className="transition hover:text-white">
              Plataforma
            </a>
            <a href="#audiencias" className="transition hover:text-white">
              Audiencias
            </a>
            <Link
              href="/request-demo"
              className="rounded-full bg-green-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-green-300"
            >
              Solicitar demo
            </Link>
          </div>

          <Link
            href="/request-demo"
            className="rounded-full bg-green-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-green-300 md:hidden"
          >
            Demo
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero — one composition */}
        <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(132,180,48,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(20,26,32,0.85),transparent_50%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
                Cumplimiento · Costa Rica · B2B
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Cierra la brecha entre tu deuda de carbono y tus compensaciones
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
                BurnZero conecta registros de emisiones de CO₂ con certificados
                oficiales, conciliación automática y evidencia on-chain — para
                que finanzas, ESG y operaciones cierren la deuda con una sola
                verdad.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/request-demo"
                  className="rounded-full bg-green-400 px-6 py-3 text-base font-semibold text-zinc-950 transition hover:bg-green-300"
                >
                  Solicitar demo
                </Link>
                <a
                  href="#como-funciona"
                  className="rounded-full border border-white/15 px-6 py-3 text-base font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Cómo funciona
                </a>
              </div>
            </div>

            {/* Dashboard mockup — refined */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-green-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold">Acme Corp</p>
                    <p className="text-xs text-zinc-400">
                      Cédula jurídica · 3-101-123456
                    </p>
                  </div>
                  <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-semibold text-green-400">
                    COMPLETED
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-zinc-400">
                        Deuda conciliada este mes
                      </p>
                      <h3 className="mt-2 text-3xl font-bold">6,930T</h3>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full rounded-full bg-green-400" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-medium">Última compensación</p>
                      <p className="text-xs text-zinc-400">Fonafifo PDF</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <div>
                        <p className="text-zinc-300">Cert. TF-2026-08421</p>
                        <p className="mt-1 text-xs text-zinc-500">
                          Nº transferencia bloqueado · anti-duplicado
                        </p>
                      </div>
                      <a
                        href="https://sepolia.etherscan.io/tx/0x529f6cd24d243b1b5fd1ac73d501ca6222a716ab62f88784606074a4040f309b#eventlog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs font-semibold text-green-400 transition hover:text-green-300"
                      >
                        Ver tx →
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Registros", "Certificados", "On-chain", "PDF"].map(
                      (label) => (
                        <span
                          key={label}
                          className="rounded-full border border-white/10 bg-[#141a20]/80 px-3 py-1 text-xs text-zinc-300"
                        >
                          {label}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning / about */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Cumplimiento operativo — no un marketplace de carbono
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">
              BurnZero es una plataforma de cumplimiento ambiental que ayuda a
              las empresas a registrar, conciliar y demostrar la compensación de
              su deuda de CO₂. Las organizaciones cargan registros de emisiones,
              suben certificados oficiales (FONAFIFO), y BurnZero vincula cada
              certificado con registros pendientes validando cédula jurídica /
              ID de organización. Cada compensación queda con PDF + prueba
              blockchain. Fondos UCC para crédito sobrante.
            </p>
          </div>
        </section>

        {/* Problem → solution */}
        <section
          id="problema"
          className="scroll-mt-24 border-t border-white/10 bg-[#141a20]/45 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                El problema
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                De hojas de cálculo y PDFs sueltos a una sola verdad
              </h2>
              <p className="mt-4 text-zinc-300">
                Sin un sistema de conciliación, la deuda de CO₂ y los
                certificados viven en silos — y demostrar la compensación se
                vuelve lento y riesgoso.
              </p>
            </div>

            <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10">
              <div className="hidden grid-cols-[1fr_1fr] gap-4 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:grid">
                <span>Dolor</span>
                <span className="text-green-400/80">Con BurnZero</span>
              </div>
              {painPoints.map((row) => (
                <div
                  key={row.pain}
                  className="grid gap-3 px-5 py-5 transition hover:bg-white/[0.03] sm:grid-cols-[1fr_1fr] sm:gap-8"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:hidden">
                      Dolor
                    </p>
                    <p className="text-zinc-300">{row.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-400/70 sm:hidden">
                      Con BurnZero
                    </p>
                    <p className="font-medium text-green-400">{row.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="como-funciona"
          className="scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                Cómo funciona
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tres pasos. Deuda cerrada con evidencia.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="rounded-3xl border border-white/10 bg-[#222a33]/70 p-6 transition hover:border-green-400/30"
                >
                  <p className="text-sm font-bold text-green-400">{step.n}</p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section
          id="plataforma"
          className="scroll-mt-24 border-t border-white/10 bg-[#141a20]/45 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                  Plataforma empresarial
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Todo lo que necesita para demostrar la compensación
                </h2>
                <p className="mt-4 text-zinc-300">
                  Herramienta B2B de operación y compliance: registrar y
                  conciliar deuda frente a certificados, validar titularidad y
                  anclar la evidencia en blockchain.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1.5 text-xs font-medium text-green-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {platformFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-[#141a20]/70 p-6 transition hover:border-white/20"
                >
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section
          id="audiencias"
          className="scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                A quién servimos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Un ledger claro para cada equipo
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {audiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#222a33]/70 p-6 transition hover:border-green-400/25"
                >
                  <h3 className="text-xl font-semibold text-green-400">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10 px-4 py-20 sm:px-6">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-[#222a33] via-[#1a2128] to-[#222a33] px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,180,48,0.12),transparent_65%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Cierre su deuda de CO₂ con evidencia
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-300">
                Vea cómo BurnZero concilia registros, certificados FONAFIFO y
                prueba on-chain en una sola plataforma de cumplimiento.
              </p>
              <Link
                href="/request-demo"
                className="mt-8 inline-flex rounded-full bg-green-400 px-8 py-3.5 text-base font-semibold text-zinc-950 transition hover:bg-green-300"
              >
                Solicitar demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-zinc-900">
              <img
                src="/brand-logo.png"
                alt="Logo de BurnZero — hoja verde conectada a bloques en cadena"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <p className="font-bold tracking-wide">
                <span className="text-green-400">Burn</span>Zero
              </p>
              <p className="text-xs text-zinc-500">
                Cumplimiento ambiental · Costa Rica
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <Link href="/request-demo" className="transition hover:text-white">
              Solicitar demo
            </Link>
            <a href="#como-funciona" className="transition hover:text-white">
              Cómo funciona
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs text-zinc-600">
          © {new Date().getFullYear()} BurnZero. Plataforma B2B de registro,
          conciliación y prueba de compensación de CO₂.
        </p>
      </footer>
    </div>
  );
}
