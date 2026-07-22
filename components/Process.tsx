const steps = [
  {
    number: "01",
    title: "Entiendo el problema en campo",
    desc: "Antes de escribir código, hago las visitas técnicas y veo de primera mano cómo se trabaja hoy: qué se llena a mano, qué se repite, dónde se pierde el tiempo.",
  },
  {
    number: "02",
    title: "Construyo la solución a medida",
    desc: "Nada de plantillas genéricas. Cada herramienta se diseña para el proceso real que vi en campo, con el stack que el problema exige.",
  },
  {
    number: "03",
    title: "Entrego algo que se usa, no una demo",
    desc: "El resultado se mide en minutos ahorrados y procesos digitalizados, no en pantallas bonitas que nadie vuelve a abrir.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Cómo <span className="text-gradient">trabajo</span>
          </h2>
          <p className="mt-4 text-white/60">
            Sin atajos genéricos: cada proyecto nace de un problema real que viví de cerca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-glow rounded-2xl bg-white/[0.03] p-7"
            >
              <span className="text-3xl font-extrabold text-gradient">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
