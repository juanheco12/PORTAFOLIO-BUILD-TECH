export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center">
      <span className="mb-6 inline-block rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-sm font-medium text-cyan animate-fade-in-up">
        Disponible para nuevos proyectos
      </span>

      <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight max-w-4xl animate-fade-in-up [animation-delay:0.1s]">
        Construyo software que{" "}
        <span className="text-gradient">resuelve problemas reales</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/70 animate-fade-in-up [animation-delay:0.2s]">
        Full-stack developer especializado en automatización legal,
        inteligencia territorial e integración de IA. De la idea a producción,
        en producto que la gente realmente usa.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [animation-delay:0.3s]">
        <a
          href="#proyectos"
          className="btn-gradient rounded-full px-8 py-3.5 font-semibold text-background"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-white/15 px-8 py-3.5 font-semibold text-white/90 hover:border-cyan/50 hover:text-cyan transition-colors"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
