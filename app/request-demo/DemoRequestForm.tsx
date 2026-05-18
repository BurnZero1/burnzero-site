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
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-zinc-300">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400"
          placeholder="Nombre de la empresa"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400"
          placeholder="Cuéntanos qué quieres construir con Burn Zero"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-green-400 px-7 py-4 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
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
