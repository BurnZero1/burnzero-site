"use client";

import { FormEvent, useState } from "react";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function DemoRequestForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/request-demo", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "No se pudo enviar tu solicitud.");
      }

      form.reset();
      setStatus("success");
      setMessage("Gracias. Tu solicitud de demo fue enviada.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar tu solicitud. Inténtalo de nuevo."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-[13px] font-medium text-[#9aa1a6]">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-md border border-white/[0.08] bg-[#11171b] px-3 py-2.5 text-[15px] text-[#f3f4f4] outline-none transition placeholder:text-[#6f777c] focus:border-[#84b430]"
          placeholder="Su nombre"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-[13px] font-medium text-[#9aa1a6]">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="mt-1.5 w-full rounded-md border border-white/[0.08] bg-[#11171b] px-3 py-2.5 text-[15px] text-[#f3f4f4] outline-none transition placeholder:text-[#6f777c] focus:border-[#84b430]"
          placeholder="Nombre de la empresa"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-[#9aa1a6]">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-1.5 w-full resize-none rounded-md border border-white/[0.08] bg-[#11171b] px-3 py-2.5 text-[15px] text-[#f3f4f4] outline-none transition placeholder:text-[#6f777c] focus:border-[#84b430]"
          placeholder="Volumen de deuda de CO₂, certificados FONAFIFO o necesidades de conciliación"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-[#84b430] px-4 py-2.5 text-[15px] font-medium text-[#11171b] transition hover:bg-[#93c23a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {message ? (
        <p
          className={
            status === "success"
              ? "text-sm text-green-300"
              : "text-sm text-red-300"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
