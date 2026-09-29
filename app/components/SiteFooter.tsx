import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-white/[0.08] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-start">
        <div className="flex items-center gap-2.5">
          <img
            src="/brand-logo.png"
            alt="BurnZero"
            className="h-7 w-7 object-contain"
          />
          <div>
            <p className="text-[15px] font-medium tracking-tight">
              <span className="text-[#84b430]">Burn</span>Zero
            </p>
            <p className="text-[12px] text-[#9aa1a6]">
              Cumplimiento ambiental · Costa Rica
            </p>
          </div>
        </div>

        <div className="text-[14px] text-[#9aa1a6]">
          <p className="font-medium text-[#f3f4f4]">Contacto</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block text-[#f3f4f4] transition hover:text-[#84b430]"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2">Costa Rica</p>
          <Link
            href="/request-demo"
            className="mt-3 inline-block transition hover:text-[#f3f4f4]"
          >
            Solicitar demo
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-[#9aa1a6]">
          <a href="/#preguntas" className="transition hover:text-[#f3f4f4]">
            Preguntas frecuentes
          </a>
          <a href="/#como-funciona" className="transition hover:text-[#f3f4f4]">
            Cómo funciona
          </a>
          <Link href="/request-demo" className="transition hover:text-[#f3f4f4]">
            Solicitar demo
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-[12px] text-[#6f777c]">
        © {new Date().getFullYear()} BurnZero. Plataforma de registro,
        conciliación y evidencia de compensación de CO₂.
      </p>
    </footer>
  );
}
