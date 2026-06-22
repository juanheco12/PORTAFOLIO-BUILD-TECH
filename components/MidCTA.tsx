export default function MidCTA() {
  return (
    <section className="px-6 py-4">
      <div className="max-w-6xl mx-auto rounded-2xl border border-cyan/20 bg-gradient-to-r from-cyan/[0.07] via-azul/[0.05] to-transparent px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            ¿Tienes un proceso manual que te quita horas?
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Cuéntame qué haces hoy a mano y veamos qué tan rápido se puede
            automatizar.
          </p>
        </div>
        <a
          href="#contacto"
          className="btn-gradient whitespace-nowrap rounded-full px-7 py-3 font-semibold text-background"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
}
