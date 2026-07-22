"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      apellidos: (form.elements.namedItem("apellidos") as HTMLInputElement).value,
      correo: (form.elements.namedItem("correo") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  return (
    <section id="contacto" className="px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-white/70">
            Cuéntame qué necesitas y te respondo directo a tu correo.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-glow rounded-2xl bg-white/[0.03] p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-white/70 mb-2">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="apellidos" className="block text-sm font-medium text-white/70 mb-2">
                Apellidos
              </label>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                placeholder="Tus apellidos"
              />
            </div>
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm font-medium text-white/70 mb-2">
              Correo <span className="text-red-400">*</span>
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-white/70 mb-2">
              Número de teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
              placeholder="+57 300 000 0000"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-white/70 mb-2">
              Mensaje <span className="text-red-400">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-gradient w-full rounded-full px-8 py-3.5 font-semibold text-background disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>

          {status === "success" && (
            <p className="text-sm text-verde text-center">
              Mensaje enviado. Te responderé pronto a tu correo.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
