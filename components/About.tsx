const specialties = [
  {
    title: "Automatización legal",
    desc: "Documentos que antes tardaban horas, generados en minutos.",
  },
  {
    title: "Inteligencia geoespacial",
    desc: "Mapas, satélites y datos territoriales convertidos en decisiones.",
  },
  {
    title: "Integración de IA",
    desc: "Modelos de lenguaje conectados a flujos de trabajo reales.",
  },
];

const codeLines = [
  { text: "const buildTech = {", color: "text-white/70" },
  { text: "  stack: ['Next.js', 'FastAPI'],", color: "text-cyan" },
  { text: "  focus: 'producto real',", color: "text-azul" },
  { text: "  ai: true,", color: "text-verde" },
  { text: "};", color: "text-white/70" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-medium text-cyan">Sobre mí</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
            Donde la ingeniería se encuentra con{" "}
            <span className="text-gradient">problemas reales</span>
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            Combino desarrollo full-stack con experiencia de campo: hago
            visitas técnicas, entiendo procesos catastrales y legales de
            primera mano, y construyo el software que automatiza lo que antes
            tomaba días.
          </p>

          <ul className="mt-8 space-y-5">
            {specialties.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan to-azul" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-white/55 mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glow rounded-2xl bg-white/[0.03] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs text-white/40">build-tech.ts</span>
          </div>
          <pre className="px-6 py-8 text-sm leading-relaxed font-mono overflow-x-auto">
            {codeLines.map((line, i) => (
              <div key={i} className={line.color}>
                {line.text}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
