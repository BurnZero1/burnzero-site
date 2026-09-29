import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-start">
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

        <div className="text-sm text-zinc-300">
          <p className="font-semibold text-white">Contacto</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block text-green-400 transition hover:text-green-300"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-zinc-400">Costa Rica</p>
          <p className="mt-1 text-xs text-zinc-500">TODO: ciudad</p>
          <Link
            href="/request-demo"
            className="mt-3 inline-block text-zinc-300 transition hover:text-white"
          >
            Solicitar demo
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
          <a href="/#preguntas" className="transition hover:text-white">
            Preguntas frecuentes
          </a>
          <a href="/#como-funciona" className="transition hover:text-white">
            Cómo funciona
          </a>
          <Link href="/request-demo" className="transition hover:text-white">
            Solicitar demo
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-zinc-600">
        © {new Date().getFullYear()} BurnZero. Plataforma B2B de registro,
        conciliación y prueba de compensación de CO₂.
      </p>
    </footer>
  );
}
