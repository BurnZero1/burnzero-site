import Link from "next/link";
import FaqSection from "../components/FaqSection";
import SiteFooter from "../components/SiteFooter";
import { pageMetadata, publicPages } from "@/lib/site";
import "../brand-theme.css";

const home = publicPages.find((page) => page.path === "/")!;

export const metadata = pageMetadata({
  title: home.title,
  description: home.description,
  path: home.path,
});

const navLinks = [
  { href: "#problema", label: "Problema" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#audiencias", label: "Audiencias" },
  { href: "#preguntas", label: "Preguntas" },
];

const painPoints = [
  {
    pain: "Emisiones en CSV / certificados en email",
    solution: "Panel unificado de registros y certificados",
  },
  {
    pain: "Difícil probar qué certificado compensó qué",
    solution: "Matching por empresa y cédula jurídica",
  },
  {
    pain: "Riesgo de reutilizar el mismo certificado",
    solution: "El número de transferencia bloquea duplicados",
  },
  {
    pain: "Auditores piden prueba",
    solution: "PDF y referencia de transacción por compensación",
  },
  {
    pain: "Créditos llegan antes de conocer toda la deuda",
    solution: "Fondos UCC reservan saldo para asignación futura",
  },
];

const steps = [
  {
    n: "01",
    title: "Registra la deuda de CO₂",
    body: "Cargue registros de emisiones por organización y mantenga la deuda pendiente visible en un solo lugar.",
  },
  {
    n: "02",
    title: "Sube certificados de compensación",
    body: "Importe PDFs oficiales de FONAFIFO y valide la cédula jurídica antes de vincularlos.",
  },
  {
    n: "03",
    title: "Concilie y deje evidencia",
    body: "Matching por organización, estado de pendiente a completado, PDF de evidencia y prueba en blockchain.",
  },
];

const workflow = [
  { title: "Emisiones", detail: "Registros por periodo" },
  { title: "Pasivo", detail: "Deuda en tCO₂e" },
  { title: "Certificados", detail: "PDF y titularidad" },
  { title: "Conciliación", detail: "Registro y certificado" },
  { title: "Evidencia", detail: "PDF de evidencia" },
  { title: "Auditoría", detail: "Qué, con qué, cuándo" },
];

const audiences = [
  {
    title: "Sostenibilidad / ESG",
    body: "Torre de control de deuda de CO₂ y certificados oficiales, con trazabilidad lista para reporte.",
  },
  {
    title: "Finanzas / Compliance",
    body: "Ledger conciliado: qué se compensó, con qué certificado y en qué fecha.",
  },
  {
    title: "Operaciones / flotas CR",
    body: "Deuda por combustible, certificados FONAFIFO y validación por cédula jurídica.",
  },
  {
    title: "Enterprise",
    body: "Multi-tenant, administración, validación de titularidad y registro auditable.",
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
    body: "Cada compensación genera un PDF y una referencia de transacción para auditores y compliance.",
  },
  {
    title: "Fondos UCC",
    body: "Reserve crédito sobrante en pools UCC para asignarlo cuando llegue el resto de la deuda.",
  },
  {
    title: "API y reportes ESG",
    body: "Integre la importación vía API y exporte la evidencia que necesitan sostenibilidad y finanzas.",
  },
];

const ledgerRows = [
  {
    id: "EM-2026-0902",
    period: "Sep 2026",
    amount: "2,418.0",
    cert: "TF-2026-08421",
    status: "Conciliado",
    date: "04 sep 2026",
  },
  {
    id: "EM-2026-0911",
    period: "Sep 2026",
    amount: "3,186.4",
    cert: "TF-2026-08421",
    status: "Conciliado",
    date: "12 sep 2026",
  },
  {
    id: "EM-2026-0919",
    period: "Sep 2026",
    amount: "1,214.2",
    cert: "TF-2026-08421",
    status: "Conciliado",
    date: "19 sep 2026",
  },
  {
    id: "EM-2026-0924",
    period: "Sep 2026",
    amount: "111.4",
    cert: "—",
    status: "Pendiente",
    date: "—",
  },
];

const monthlyBars = [38, 52, 45, 61, 48, 70, 58, 76, 66];

function ProductPreview() {
  return (
    <div className="bz-enter min-w-0 overflow-hidden rounded-md border border-white/[0.08] bg-[#1a2024]">
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-2.5">
        <p className="truncate text-[12px] text-[#9aa1a6]">
          <span className="text-[#f3f4f4]">Conciliación</span>
          <span className="px-1.5 text-white/25">/</span>
          ACME CORP
        </p>
        <p className="shrink-0 font-mono text-[11px] text-[#9aa1a6]">
          19 sep 2026 · 16:42
        </p>
      </div>

      <div className="px-4 py-4 sm:px-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#9aa1a6]">
              Empresa
            </p>
            <p className="mt-1 text-[15px] font-medium tracking-[0.04em] text-[#f3f4f4]">
              ACME CORP
            </p>
            <p className="mt-0.5 font-mono text-[12px] text-[#9aa1a6]">
              3-101-482917
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#9aa1a6]">
              Estado
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] text-[#f3f4f4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#84b430]" />
              Conciliado
            </p>
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-white/[0.08] py-4 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] text-[#9aa1a6]">Pasivo mensual</dt>
            <dd className="mt-1 text-[18px] font-medium tabular-nums tracking-tight text-[#f3f4f4]">
              6,930
              <span className="ml-1 text-[12px] font-normal text-[#9aa1a6]">
                tCO₂e
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] text-[#9aa1a6]">Conciliación</dt>
            <dd className="mt-1 text-[18px] font-medium tabular-nums tracking-tight text-[#f3f4f4]">
              98.4%
            </dd>
          </div>
          <div>
            <dt className="text-[11px] text-[#9aa1a6]">Registros</dt>
            <dd className="mt-1 text-[18px] font-medium tabular-nums tracking-tight text-[#f3f4f4]">
              12,842
            </dd>
          </div>
          <div>
            <dt className="text-[11px] text-[#9aa1a6]">Certificados</dt>
            <dd className="mt-1 text-[15px] font-medium tabular-nums text-[#f3f4f4]">
              8
            </dd>
          </div>
          <div>
            <dt className="text-[11px] text-[#9aa1a6]">Última conciliación</dt>
            <dd className="mt-1 text-[15px] font-medium text-[#f3f4f4]">
              Septiembre 2026
            </dd>
          </div>
          <div>
            <dt className="text-[11px] text-[#9aa1a6]">Certificado activo</dt>
            <dd className="mt-1 font-mono text-[12px] text-[#f3f4f4]">
              TF-2026-08421
            </dd>
          </div>
        </dl>

        <div className="mt-4">
          <div className="flex items-baseline justify-between">
            <p className="text-[12px] text-[#9aa1a6]">Pasivo mensual · tCO₂e</p>
            <p className="font-mono text-[11px] text-[#9aa1a6]">Ene–Sep 2026</p>
          </div>
          <div
            className="mt-2 flex h-14 items-end gap-1"
            aria-hidden="true"
          >
            {monthlyBars.map((height, index) => (
              <div
                key={index}
                className={`flex-1 ${
                  index === monthlyBars.length - 1
                    ? "bg-[#84b430]"
                    : "bg-white/20"
                }`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <ul className="mt-4 divide-y divide-white/[0.08] sm:hidden">
          {ledgerRows.map((row) => (
            <li key={row.id} className="py-2.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-[12px] text-[#f3f4f4]">{row.id}</span>
                <span className="tabular-nums text-[12px] text-[#f3f4f4]">
                  {row.amount} tCO₂e
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between gap-3 text-[12px] text-[#9aa1a6]">
                <span className="font-mono">{row.cert}</span>
                <span className="inline-flex items-center gap-1.5 text-[#f3f4f4]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      row.status === "Conciliado" ? "bg-[#84b430]" : "bg-white/30"
                    }`}
                  />
                  {row.status}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 hidden overflow-x-auto sm:block">
          <table className="w-full min-w-[520px] border-collapse text-left text-[12px]">
            <caption className="sr-only">
              Registros de emisiones de septiembre 2026 para ACME CORP
            </caption>
            <thead>
              <tr className="border-b border-white/[0.08] text-[11px] text-[#9aa1a6]">
                <th className="py-2 pr-3 font-medium">Registro</th>
                <th className="py-2 pr-3 font-medium">Periodo</th>
                <th className="py-2 pr-3 text-right font-medium">tCO₂e</th>
                <th className="py-2 pr-3 font-medium">Certificado</th>
                <th className="py-2 pr-3 font-medium">Estado</th>
                <th className="py-2 font-medium">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {ledgerRows.map((row) => (
                <tr key={row.id} className="border-b border-white/[0.06]">
                  <td className="py-2 pr-3 font-mono text-[#f3f4f4]">{row.id}</td>
                  <td className="py-2 pr-3 text-[#9aa1a6]">{row.period}</td>
                  <td className="py-2 pr-3 text-right tabular-nums text-[#f3f4f4]">
                    {row.amount}
                  </td>
                  <td className="py-2 pr-3 font-mono text-[#9aa1a6]">{row.cert}</td>
                  <td className="py-2 pr-3">
                    <span className="inline-flex items-center gap-1.5 text-[#f3f4f4]">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          row.status === "Conciliado"
                            ? "bg-[#84b430]"
                            : "bg-white/30"
                        }`}
                      />
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2 text-[#9aa1a6]">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex flex-col gap-1 border-t border-white/[0.08] pt-3 text-[12px] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#f3f4f4]">
            FONAFIFO · TF-2026-08421
            <span className="mt-0.5 block text-[#9aa1a6] sm:mt-0 sm:ml-2 sm:inline">
              Nº transferencia 88421-CR · bloqueado
            </span>
          </p>
          <a
            href="https://sepolia.etherscan.io/tx/0x529f6cd24d243b1b5fd1ac73d501ca6222a716ab62f88784606074a4040f309b#eventlog"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-[#9aa1a6] transition hover:text-[#f3f4f4]"
          >
            tx 0x529f…309b
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-[#f3f4f4]">
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-page-nav">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/brand-logo.png"
              alt="BurnZero"
              className="h-7 w-7 object-contain"
            />
            <span className="text-[15px] font-medium tracking-tight">
              <span className="text-[#84b430]">Burn</span>Zero
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-[13px] text-[#9aa1a6] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#f3f4f4]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/request-demo"
              className="rounded-md bg-[#84b430] px-3 py-1.5 text-[13px] font-medium text-[#11171b] transition hover:bg-[#93c23a]"
            >
              Solicitar demo
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/request-demo"
              className="rounded-md bg-[#84b430] px-3 py-1.5 text-[13px] font-medium text-[#11171b]"
            >
              Solicitar demo
            </Link>
            <details className="group relative">
              <summary className="cursor-pointer list-none text-[13px] text-[#9aa1a6] [&::-webkit-details-marker]:hidden">
                Menú
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-48 border border-white/[0.08] bg-[#1a2024] py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-[13px] text-[#f3f4f4]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:pb-20 lg:pt-20">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="lg:pt-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                Cumplimiento ambiental · Costa Rica
              </p>
              <h1 className="mt-5 max-w-[11em] text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#f3f4f4] sm:text-[2.75rem] lg:text-[3.5rem]">
                Cierra la brecha entre tu deuda de carbono y tus compensaciones
              </h1>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#9aa1a6] sm:text-[18px]">
                BurnZero conecta los registros operativos de emisiones con los
                certificados oficiales de compensación y deja un rastro de
                conciliación que un auditor puede seguir.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/request-demo"
                  className="rounded-md bg-[#84b430] px-4 py-2.5 text-[15px] font-medium text-[#11171b] transition hover:bg-[#93c23a]"
                >
                  Solicitar demo
                </Link>
                <a
                  href="#como-funciona"
                  className="text-[15px] text-[#9aa1a6] transition hover:text-[#f3f4f4]"
                >
                  Cómo funciona
                </a>
              </div>
              <p className="mt-10 text-[13px] leading-relaxed text-[#6f777c]">
                FONAFIFO · Validación por cédula jurídica · Evidencia PDF ·
                Costa Rica
              </p>
            </div>

            <ProductPreview />
          </div>
        </section>

        <section className="border-t border-white/[0.08] px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                Quiénes somos
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
                Cumplimiento operativo, no un marketplace de carbono
              </h2>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-[#9aa1a6]">
                Las empresas cargan registros de emisiones, suben certificados
                oficiales de FONAFIFO y BurnZero vincula cada certificado con
                la deuda pendiente. Cada compensación queda con PDF y una
                referencia que finanzas y compliance pueden revisar.
              </p>
            </div>

            <ol className="bz-flow mt-12">
              {workflow.map((item, index) => (
                <li key={item.title}>
                  <p className="font-mono text-[11px] text-[#84b430]">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-[14px] font-medium text-[#f3f4f4]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-[#9aa1a6]">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="problema"
          className="scroll-mt-16 border-t border-white/[0.08] bg-[#151b1f] px-4 py-16 sm:px-6 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                El problema
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
                De hojas de cálculo y PDFs sueltos a una sola verdad
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#9aa1a6]">
                Sin conciliación, la deuda de CO₂ y los certificados viven en
                silos. Demostrar la compensación se vuelve lento y difícil de
                auditar.
              </p>
            </div>

            <div className="mt-10 border-t border-white/[0.08]">
              <div className="hidden grid-cols-2 gap-8 border-b border-white/[0.08] py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9aa1a6] sm:grid">
                <span>Hoy</span>
                <span>Con BurnZero</span>
              </div>
              {painPoints.map((row) => (
                <div
                  key={row.pain}
                  className="grid gap-1 border-b border-white/[0.08] py-4 sm:grid-cols-2 sm:gap-8 sm:py-5"
                >
                  <p className="text-[15px] text-[#9aa1a6]">{row.pain}</p>
                  <p className="text-[15px] text-[#f3f4f4]">{row.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="scroll-mt-16 border-t border-white/[0.08] px-4 py-16 sm:px-6 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                Cómo funciona
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
                Tres pasos. Deuda cerrada con evidencia.
              </h2>
            </div>

            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
              {steps.map((step) => (
                <li
                  key={step.n}
                  className="md:border-l md:border-white/[0.08] md:px-8 md:first:border-l-0 md:first:pl-0"
                >
                  <p className="font-mono text-[12px] text-[#84b430]">{step.n}</p>
                  <h3 className="mt-3 text-[18px] font-medium">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#9aa1a6]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="plataforma"
          className="scroll-mt-16 border-t border-white/[0.08] bg-[#151b1f] px-4 py-16 sm:px-6 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                Plataforma
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
                Lo necesario para demostrar la compensación
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#9aa1a6]">
                Registro de deuda, certificados, validación de titularidad y
                evidencia que finanzas y ESG pueden exportar.
              </p>
            </div>

            <div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {platformFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="border-t border-white/[0.08] py-5"
                >
                  <h3 className="text-[15px] font-medium">{feature.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#9aa1a6]">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="audiencias"
          className="scroll-mt-16 border-t border-white/[0.08] px-4 py-16 sm:px-6 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                Audiencias
              </p>
              <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
                Un ledger claro para cada equipo
              </h2>
            </div>

            <div className="mt-10 border-t border-white/[0.08]">
              {audiences.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-2 border-b border-white/[0.08] py-5 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-6"
                >
                  <h3 className="text-[15px] font-medium">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#9aa1a6]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection />

        <section className="border-t border-white/[0.08] px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
                Cierre la deuda de CO₂ con evidencia
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-[#9aa1a6]">
                Vea cómo se concilian registros, certificados FONAFIFO y la
                prueba de cada compensación en una sola plataforma.
              </p>
            </div>
            <Link
              href="/request-demo"
              className="inline-flex w-fit rounded-md bg-[#84b430] px-4 py-2.5 text-[15px] font-medium text-[#11171b] transition hover:bg-[#93c23a]"
            >
              Solicitar demo
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
