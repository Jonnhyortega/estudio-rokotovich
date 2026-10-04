"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre Nosotros" },
  { id: "areas", label: "Áreas de Práctica" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  // Render modal/drawer content vía Portal para aislarlo del backdrop-blur del header
  const mobileMenuContent = (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/75 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[9999] h-screen h-[100dvh] w-[300px] max-w-[85vw] bg-[#0a2342] text-white border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        {/* Mobile Header Inside Drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#071930]">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center rounded-full border border-[var(--gold)]/60 bg-[#0a2342] p-1 shadow-md">
              <Image
                src="/logo-sinfondo.png"
                alt="Rokotovich Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold tracking-wider text-white uppercase leading-tight">
                ROKOTOVICH
              </span>
              <span className="text-[9px] tracking-[0.18em] uppercase font-sans text-gray-300 font-medium leading-tight">
                ESTUDIO JURÍDICO
              </span>
            </div>
          </div>
          <button
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="p-2 -mr-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={closeMenu}
              className="flex items-center justify-between text-[16px] font-medium text-white/90 hover:text-[var(--gold)] hover:bg-white/5 rounded-xl px-4 py-3.5 transition-all group"
            >
              <span>{s.label}</span>
              <svg
                className="w-4 h-4 text-white/40 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Footer / CTA inside Drawer */}
        <div className="p-6 border-t border-white/10 bg-[#071930]/60 space-y-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=5491155782731&text=Hola%2C+quiero+hacer+una+consulta&type=phone_number&app_absent=0"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full bg-[var(--gold)] text-white font-medium py-3.5 px-4 rounded-xl hover:bg-[#b58f3b] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <span>Agendar Consulta</span>
          </a>

          <p className="text-center text-xs text-white/50">
            Estudio Jurídico Rokotovich &copy; {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0a2342]/95 backdrop-blur-sm shadow-xl shadow-black/20 py-3"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Oficial Rokotovich */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group select-none">
            <div className="relative flex items-center justify-center rounded-full border border-[var(--gold)]/60 bg-[#0a2342]/90 p-1 shadow-lg group-hover:border-[var(--gold)] group-hover:scale-105 transition-all duration-300">
              <Image
                src="/logo-sinfondo.png"
                alt="Estudio Jurídico Rokotovich"
                width={scrolled ? 40 : 50}
                height={scrolled ? 40 : 50}
                priority
                className="object-contain transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg md:text-xl font-extrabold tracking-wider text-white uppercase group-hover:text-[var(--gold)] transition-colors duration-300 leading-tight">
                ROKOTOVICH
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-sans text-gray-300 font-medium leading-tight">
                ESTUDIO JURÍDICO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="relative text-[15px] font-medium text-white/90 hover:text-white transition-colors py-2 group"
              >
                {s.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=5491155782731&text=Hola%2C+quiero+hacer+una+consulta&type=phone_number&app_absent=0"
              className="ml-4 px-6 py-2.5 rounded-full bg-[var(--gold)] text-white font-medium text-[15px] shadow-lg shadow-[#c8a24d]/20 hover:bg-[#b58f3b] hover:shadow-[#c8a24d]/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Render Mobile Menu Overlay y Drawer en Portal para desvincularlo del backdrop-blur del header */}
      {mounted && createPortal(mobileMenuContent, document.body)}
    </>
  );
}
