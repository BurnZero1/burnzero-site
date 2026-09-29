import { faqPageJsonLd, faqs, jsonLdScript } from "@/lib/site";

export default function FaqSection() {
  return (
    <section
      id="preguntas"
      className="scroll-mt-24 border-t border-white/[0.08] bg-[#151b1f] px-4 py-16 sm:px-6 lg:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageJsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9aa1a6]">
          Preguntas
        </p>
        <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.15rem]">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#9aa1a6]">
          Registro de emisiones, certificados FONAFIFO, conciliación y
          evidencia.
        </p>

        <div className="mt-10 border-t border-white/[0.08]">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group border-b border-white/[0.08] py-4"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[16px] font-medium leading-snug text-[#f3f4f4]">
                  {item.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-[18px] leading-none text-[#9aa1a6] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#9aa1a6]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
