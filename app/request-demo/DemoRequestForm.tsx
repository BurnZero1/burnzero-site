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
        throw new Error(result.message || "Unable to send your request.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your demo request was sent.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-zinc-300">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400"
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400"
          placeholder="Tell us what you want to build with Burn Zero"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-green-400 px-7 py-4 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
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
