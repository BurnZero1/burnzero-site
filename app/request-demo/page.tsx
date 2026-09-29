import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import { pageMetadata, publicPages } from "@/lib/site";
import DemoRequestForm from "./DemoRequestForm";
import "../brand-theme.css";

const demo = publicPages.find((page) => page.path === "/request-demo")!;

export const metadata = pageMetadata({
  title: demo.title,
  description: demo.description,
  path: demo.path,
});

export default function RequestDemoPage() {
  return (
    <>
      <main className="min-h-screen bg-page px-4 py-6 text-[#f3f4f4] sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <nav className="flex h-[4.25rem] items-center justify-between border-b border-white/[0.08] sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden sm:h-12 sm:w-12">
                <Image
                  src="/logo.png"
                  alt="BurnZero"
                  fill
                  className="object-contain"
                  priority
                />
              </span>
              <span className="text-xl font-semibold tracking-tight sm:text-[1.75rem]">
                <span className="text-[#84b430]">Burn</span>Zero
              </span>
            </Link>

            <Link
              href="/"
              className="text-[13px] text-[#9aa1a6] transition hover:text-[#f3f4f4]"
            >
              Volver
            </Link>
          </nav>

          <section className="grid items-start gap-12 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:pt-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
                Solicitar demo
              </p>
              <h1 className="mt-4 max-w-[14em] text-[2.15rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">
                Concilia tu deuda de carbono con compensaciones verificadas.
              </h1>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#9aa1a6]">
                Comparte algunos datos y el equipo de BurnZero te contactará
                para hablar de registros de emisiones, certificados FONAFIFO y
                conciliación auditable.
              </p>
            </div>

            <div className="border border-white/[0.08] bg-[#1a2024] p-5 sm:p-8">
              <h2 className="text-[18px] font-medium">
                Cuéntanos sobre tu operación
              </h2>
              <DemoRequestForm />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
