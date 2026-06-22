const stats = [
  { value: "43x", label: "Más rápido en generación de documentos" },
  { value: "15x", label: "Reducción en tiempo de investigación de campo" },
  { value: "100%", label: "Procesos digitalizados y sin papel" },
];

export default function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center rounded-2xl border border-white/10 bg-white/[0.02] py-10 px-4"
          >
            <p className="text-4xl sm:text-5xl font-extrabold text-gradient">
              {stat.value}
            </p>
            <p className="mt-3 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
