type Project = {
  name: string;
  desc: string;
  detail: string;
  stack: string[];
  impact: string;
  color: "cyan" | "azul" | "verde";
  github: string;
  demo?: string;
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
    github: "https://github.com/juanheco12/CatastroIA",
    demo: "https://catastro-ia.vercel.app",
  },
  {
    name: "Sentinela",
    desc: "Inteligencia Territorial (Hackathon 2026 🏆)",
    detail:
      "Módulo de visión por computador de DetectaAI: detecta construcciones informales y cambios de uso de suelo con imágenes satelitales y de dron. Reduce 31 días de investigación a solo 2 días.",
    stack: ["FastAPI", "YOLO/OpenCV", "PostgreSQL"],
    impact: "31 días → 2 días 🚀",
    color: "azul",
    github: "https://github.com/juanheco12/DetectaAI",
  },
  {
    name: "Gestor de Planos",
    desc: "Sistema de Gestión Catastral",
    detail:
      "Plataforma CRUD completa para digitalizar archivos catastrales. Búsqueda inteligente, versionado y gestión centralizada.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
    impact: "100% Digital 💾",
    color: "verde",
    github: "https://github.com/juanheco12/GESTOR-DE-PLANOS-CATASTRALES",
    demo: "https://gestor-de-planos-catastrales.vercel.app",
  },
  {
    name: "Gestor de Trámites",
    desc: "App de Escritorio para Ejecutores Catastrales",
    detail:
      "Sincroniza automáticamente la bandeja de tareas de cada ejecutor con Playwright, detecta altas, cambios y bajas en tiempo real, y guarda un historial auditable en una base local.",
    stack: ["Electron", "Playwright", "SQLite"],
    impact: "Sync 100% automático 🔄",
    color: "cyan",
    github: "https://github.com/juanheco12/gestor-tramites-catastrales",
  },
  {
    name: "Validador Catastral",
    desc: "Plugin QGIS de Cumplimiento Normativo",
    detail:
      "Automatiza la validación de tolerancias entre áreas jurídicas y geométricas según la Resolución 1040 del IGAC, con validación individual o por lotes directamente en QGIS.",
    stack: ["Python", "QGIS", "PyQt"],
    impact: "10 umbrales normativos ✅",
    color: "azul",
    github: "https://github.com/juanheco12/VALIDADOR-CATASTRAL",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = colorMap[project.color];
            return (
              <article
                key={project.name}
                className="card-glow rounded-2xl bg-white/[0.03] p-7 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${project.name} en GitHub`}
                    className="shrink-0 text-white/40 hover:text-cyan transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </a>
                </div>
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

                <div className="mt-4 flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Ver código →
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.text} hover:underline`}
                    >
                      Demo en vivo →
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
