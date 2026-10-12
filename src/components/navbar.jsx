"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "propuesta-valor", label: "Defensa Penal" },
  { id: "about", label: "Sobre Nosotros" },
  { id: "areas", label: "Áreas de Práctica" },
  { id: "areas-trabajo", label: "Alcance Territorial" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0a2342]/95 backdrop-blur-md shadow-xl shadow-black/20 py-3"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105 shadow-xl shrink-0">
            <Image
              src="/logo-sinfondo.png"
              alt="Rokotovich Estudio Logo"
              width={scrolled ? 48 : 58}
              height={scrolled ? 48 : 58}
              priority
              className={`object-cover ${
                scrolled ? "bg-transparent" : "bg-[#0a2342]/80 backdrop-blur-sm p-1"
              } rounded-full border border-white/10`}
              style={{ transition: "all 0.4s ease" }}
            />
          </div>
          <span className="font-semibold tracking-wide transition-colors duration-300 text-white drop-shadow-md text-lg sm:text-xl">
            Estudio Rokotovich
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative text-[15px] font-medium text-white/90 hover:text-white transition-colors py-2 group whitespace-nowrap"
            >
              {s.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
          {/* Action Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=5491155782731&text=Hola%2C+quiero+hacer+una+consulta&type=phone_number&app_absent=0"
            className="ml-2 px-6 py-2.5 rounded-full bg-[var(--gold)] text-white font-semibold text-[14.5px] shadow-lg shadow-[#c8a24d]/20 hover:bg-[#b58f3b] hover:shadow-[#c8a24d]/40 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay - z-[100] para estar por encima del chatbot */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Drawer - z-[110] para superponerse con seguridad */}
      <aside
        className={`lg:hidden fixed right-0 top-0 z-[110] h-[100dvh] w-[85vw] max-w-[320px] bg-gradient-to-b from-[#06172e] via-[#041121] to-[#020812] border-l border-white/10 shadow-2xl transition-transform duration-400 ease-out flex flex-col justify-between ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="text-xl font-bold text-white tracking-wide">Menú</span>
            <button
              onClick={closeMenu}
              className="p-2 -mr-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Cerrar menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="py-4 px-4 flex flex-col gap-1.5">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={closeMenu}
                className="flex items-center text-[16px] font-medium text-white/85 hover:text-[var(--gold)] hover:bg-white/5 rounded-xl px-4 py-3 transition-all"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-white/10 bg-slate-900/60 pb-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=5491155782731&text=Hola%2C+quiero+hacer+una+consulta&type=phone_number&app_absent=0"
            onClick={closeMenu}
            className="flex items-center justify-center w-full bg-[var(--gold)] text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-[#b58f3b] transition-all shadow-lg shadow-[var(--gold)]/20 active:scale-95 text-center text-[15px]"
          >
            Agendar Consulta
          </a>
        </div>
      </aside>
    </header>
  );
}

