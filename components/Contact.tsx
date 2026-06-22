export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold relative z-10">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto relative z-10">
          Hablemos sobre cómo puedo ayudarte a construirlo, automatizarlo o
          escalarlo.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <a
            href="mailto:juanhernandezconde@gmail.com"
            className="btn-gradient rounded-full px-8 py-3.5 font-semibold text-background"
          >
            Enviar correo
          </a>
          <a
            href="https://github.com/juanheco12"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-8 py-3.5 font-semibold text-white/90 hover:border-cyan/50 hover:text-cyan transition-colors"
          >
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
