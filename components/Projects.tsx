type Project = {
  name: string;
  desc: string;
  detail: string;
  stack: string[];
  impact: string;
  color: "cyan" | "azul" | "verde";
};

const projects: Project[] = [
  {
    name: "CatIA",
    desc: "Generador de Motivadas Catastrales",
    detail:
      "Automatización de documentos legales. Reduce 45 minutos a 2 minutos usando inteligencia artificial y generación automática.",
    stack: ["Next.js", "FastAPI", "Claude AI"],
    impact: "45 min → 2 min ⚡",
    color: "cyan",
  },
  {
    name: "Sentinela",
    desc: "Inteligencia Territorial (Hackathon 2026 🏆)",
    detail:
      "Detección automática de construcciones informales usando satélites. Reduce 31 días de investigación a solo 2 días.",
    stack: ["FastAPI", "PostGIS", "Computer Vision"],
    impact: "31 días → 2 días 🚀",
    color: "azul",
  },
  {
    name: "Gestor de Planos",
    desc: "Sistema de Gestión Catastral",
    detail:
      "Plataforma CRUD completa para digitalizar archivos catastrales. Búsqueda inteligente, versionado y gestión centralizada.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
    impact: "100% Digital 💾",
    color: "verde",
  },
];

const colorMap: Record<Project["color"], { text: string; border: string; bg: string }> = {
  cyan: { text: "text-cyan", border: "border-cyan/30", bg: "bg-cyan/10" },
  azul: { text: "text-azul", border: "border-azul/30", bg: "bg-azul/10" },
  verde: { text: "text-verde", border: "border-verde/30", bg: "bg-verde/10" },
};

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Proyectos <span className="text-gradient">destacados</span>
          </h2>
          <p className="mt-4 text-white/60">
            Productos reales, en producción, resolviendo problemas concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = colorMap[project.color];
            return (
              <article
                key={project.name}
                className="card-glow rounded-2xl bg-white/[0.03] p-7 flex flex-col"
              >
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className={`mt-1 text-sm font-medium ${colors.text}`}>
                  {project.desc}
                </p>
                <p className="mt-4 text-sm text-white/70 flex-1">
                  {project.detail}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-6 rounded-xl border ${colors.border} ${colors.bg} px-4 py-3 text-center font-bold ${colors.text}`}
                >
                  {project.impact}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
