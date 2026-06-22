const stack = [
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Claude AI",
  "PostGIS",
  "PostgreSQL",
  "Computer Vision",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-white/40 mb-8">
          Tecnologías con las que construyo
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-sm sm:text-base font-semibold text-white/35 hover:text-white/80 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
