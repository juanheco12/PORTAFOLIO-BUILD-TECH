"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-gradient">
          BUILD TECH
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-block btn-gradient text-sm font-semibold px-5 py-2 rounded-full text-background"
        >
          Hablemos
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden relative h-9 w-9 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul
          aria-hidden={!menuOpen}
          className="flex flex-col gap-1 px-6 pb-6 text-sm font-medium text-white/80"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="btn-gradient block text-center text-sm font-semibold px-5 py-3 rounded-full text-background"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
