const plans = [
  {
    name: "Landing / Web",
    tagline: "Presencia profesional",
    highlight: false,
    features: [
      "Sitio de 1 a 5 secciones",
      "Diseño responsive a medida",
      "Formulario de contacto real",
      "SEO base y despliegue en Vercel",
      "Entrega en 1–2 semanas",
    ],
  },
  {
    name: "Aplicación Web",
    tagline: "El más solicitado",
    highlight: true,
    features: [
      "Plataforma full-stack completa",
      "Base de datos y panel de administración",
      "Autenticación y roles de usuario",
      "Integración de APIs e IA",
      "Soporte post-lanzamiento",
    ],
  },
  {
    name: "Software a Medida",
    tagline: "Automatización & Desktop",
    highlight: false,
    features: [
      "App de escritorio o automatización",
      "Integraciones con sistemas existentes",
      "Procesamiento geoespacial / visión IA",
      "Arquitectura escalable",
      "Consultoría técnica incluida",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Packages() {
  return (
    <section id="planes" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Planes <span className="text-gradient">a tu medida</span>
          </h2>
          <p className="mt-4 text-white/60">
            Cada proyecto es distinto. Elige el punto de partida y armamos una
            cotización ajustada a lo que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-glow rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-cyan/[0.06] border-cyan/40 md:-translate-y-3"
                  : "bg-white/[0.03]"
              }`}
            >
              {plan.highlight && (
                <span className="self-start mb-3 rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan">
                  Recomendado
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/50">{plan.tagline}</p>

              <div className="mt-5 mb-6 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-gradient">
                  Cotización a medida
                </span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className="mt-0.5 text-verde">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-7 rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "btn-gradient text-background"
                    : "border border-white/15 text-white/90 hover:border-cyan/50 hover:text-cyan"
                }`}
              >
                Solicitar cotización
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/45">
          ¿No sabes cuál elegir? Escríbeme y lo resolvemos juntos en una llamada
          sin costo.
        </p>
      </div>
    </section>
  );
}
