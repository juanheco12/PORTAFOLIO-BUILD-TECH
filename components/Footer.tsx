export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>© {new Date().getFullYear()} BUILD TECH. Todos los derechos reservados.</p>
        <p className="text-gradient font-semibold">BUILD TECH</p>
      </div>
    </footer>
  );
}
