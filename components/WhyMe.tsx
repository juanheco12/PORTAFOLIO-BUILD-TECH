const reasons = [
  {
    title: "Del código al campo",
    desc: "No solo programo: hago visitas técnicas y entiendo el proceso real antes de escribir una línea. El software resuelve el problema correcto.",
    stat: "8+",
    statLabel: "proyectos en producción",
    color: "cyan",
  },
  {
    title: "Producto que se usa",
    desc: "Cada proyecto está pensado para llegar a manos reales: ejecutores, contadores, vendedoras. Nada de demos que se quedan en el cajón.",
    stat: "100%",
    statLabel: "orientado a producción",
    color: "verde",
  },
  {
    title: "Comunicación directa",
    desc: "Trabajas conmigo, no con un intermediario. Respuestas claras, avances visibles y sin tecnicismos innecesarios.",
    stat: "1 a 1",
    statLabel: "sin intermediarios",
    color: "azul",
  },
  {
    title: "Tecnología actual",
    desc: "Next.js, FastAPI, IA y soluciones geoespaciales. Stack moderno, escalable y mantenible, no atajos que envejecen mal.",
    stat: "2026",
    statLabel: "stack al día",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-cyan",
  verde: "text-verde",
  azul: "text-azul",
};

export default function WhyMe() {
  return (
    <section id="por-que" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Por qué <span className="text-gradient">trabajar conmigo</span>
          </h2>
          <p className="mt-4 text-white/60">
            Ingeniería con criterio, no solo líneas de código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-glow rounded-2xl bg-white/[0.03] p-7 flex items-start gap-5"
            >
              <div className="shrink-0 text-center">
                <div className={`text-3xl font-extrabold ${colorMap[reason.color]}`}>
                  {reason.stat}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-white/40 max-w-[6rem]">
                  {reason.statLabel}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/65">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
