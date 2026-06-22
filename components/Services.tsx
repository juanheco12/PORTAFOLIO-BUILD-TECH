function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M9 18 4 12l5-6M15 6l5 6-5 6" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4M9 13h6M9 17h6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 3v5M12 16v5M5 12h5M14 12h5M7.5 7.5l3 3M13.5 13.5l3 3M16.5 7.5l-3 3M10.5 13.5l-3 3" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 4.5" />
      <path d="M9 11h6M9 14h4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M7 18a4 4 0 1 1 .7-7.95A5 5 0 0 1 17 11.5a3.5 3.5 0 0 1-.5 6.5H7Z" />
      <path d="M12 13v5M9.5 15.5 12 18l2.5-2.5" />
    </svg>
  );
}

const services = [
  {
    title: "Full-Stack Development",
    desc: "Aplicaciones web completas, desde la base de datos hasta la interfaz, con Next.js y TypeScript.",
    icon: CodeIcon,
  },
  {
    title: "Automatización & Legal Tech",
    desc: "Generación automática de documentos legales y reducción de procesos manuales repetitivos.",
    icon: DocIcon,
  },
  {
    title: "Geospatial Solutions",
    desc: "Análisis territorial, mapas interactivos y detección satelital con PostGIS y visión por computadora.",
    icon: MapIcon,
  },
  {
    title: "AI Integration",
    desc: "Integración de modelos de inteligencia artificial en flujos de trabajo reales para productividad.",
    icon: SparkleIcon,
  },
  {
    title: "Consultoría Tech",
    desc: "Acompañamiento técnico en decisiones de arquitectura, stack tecnológico y estrategia digital.",
    icon: ChatIcon,
  },
  {
    title: "Deployment & DevOps",
    desc: "Despliegue continuo, optimización de rendimiento e infraestructura lista para producción.",
    icon: CloudIcon,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Servicios <span className="text-gradient">que ofrezco</span>
          </h2>
          <p className="mt-4 text-white/60">
            Desde el código hasta la estrategia, cubro todo el ciclo del producto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-glow rounded-2xl bg-white/[0.03] p-6 flex flex-col"
              >
                <div className="h-10 w-10 rounded-lg bg-cyan/10 text-cyan flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gradient">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-white/65 flex-1">{service.desc}</p>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:gap-2.5 transition-all"
                >
                  Solicitar
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
