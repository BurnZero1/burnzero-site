import Image from "next/image";
import Link from "next/link";
import DemoRequestForm from "./DemoRequestForm";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white shadow-lg shadow-green-500/10">
              <Image
                src="/logo.png"
                alt="Logo de Burn Zero"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-2xl font-bold leading-none tracking-wide">Burn Zero</p>
              <p className="mt-1 text-sm text-zinc-400">Plataforma de inteligencia de carbono</p>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/15 px-5 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
          >
            Volver
          </Link>
        </nav>

        <section className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="pt-6">
            <p className="font-medium text-green-400">Solicitar demo</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Integra responsabilidad climática en cada transacción.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">
              Comparte algunos detalles y el equipo de Burn Zero te contactará para hablar sobre
              seguimiento de carbono, compensaciones verificadas y retiro transparente de créditos.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-green-500/10 backdrop-blur md:p-10">
            <h2 className="text-3xl font-semibold">Cuéntanos sobre tu proyecto</h2>
            <DemoRequestForm />
          </div>
        </section>
      </div>
    </main>
  );
}
