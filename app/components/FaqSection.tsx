import { faqPageJsonLd, faqs, jsonLdScript } from "@/lib/site";

export default function FaqSection() {
  return (
    <section
      id="preguntas"
      className="scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageJsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Lo que el sitio ya explica sobre BurnZero
        </h2>
        <p className="mt-4 text-zinc-300">
          Respuestas basadas en el contenido publicado. Las líneas marcadas
          con TODO están pendientes de confirmación.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-white/10 bg-[#141a20]/70 px-5 py-4 open:border-green-400/30"
            >
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {item.question}
                </h3>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
