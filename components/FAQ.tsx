"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance. Una landing puede estar lista en 1 a 2 semanas; una aplicación full-stack completa toma de 4 a 8 semanas. Después de conocer tu idea te doy un cronograma concreto con hitos.",
  },
  {
    q: "¿Cómo funciona el pago?",
    a: "Normalmente trabajo con un anticipo para arrancar y el resto contra entregas. La cotización es a medida según el proyecto, así que hablamos los detalles antes de empezar, sin sorpresas.",
  },
  {
    q: "¿Trabajas con clientes fuera de Montería?",
    a: "Sí. Trabajo de forma remota con clientes de toda Colombia y el exterior. Las visitas técnicas de campo aplican cuando el proyecto lo requiere y la ubicación lo permite.",
  },
  {
    q: "¿Qué pasa después de entregar el proyecto?",
    a: "No desaparezco. Incluyo un período de soporte para ajustes y resolución de dudas, y puedo seguir con mantenimiento o nuevas funciones si lo necesitas más adelante.",
  },
  {
    q: "¿El código queda a mi nombre?",
    a: "Sí. Al finalizar y saldar el proyecto, el código y los accesos son tuyos. Te entrego todo documentado para que no quedes atado a nadie.",
  },
  {
    q: "¿Puedes integrar inteligencia artificial en mi proyecto?",
    a: "Es una de mis especialidades. He integrado IA para generar documentos, detectar construcciones con imágenes satelitales y automatizar tareas repetitivas. Si tienes un flujo manual, probablemente se puede automatizar.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-glow rounded-2xl bg-white/[0.03] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-white/65">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="mt-4 text-white/60">
            Lo que la gente suele preguntarme antes de arrancar.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
