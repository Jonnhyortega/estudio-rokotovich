"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre Nosotros" },
  // { id: "equipo", label: "Profesionales" },
  { id: "areas", label: "Áreas de Práctica" },
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
    return () => (document.body.style.overflow = "");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0a2342]/95 backdrop-blur-sm shadow-xl shadow-black/20 py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105 shadow-xl">
            <Image
              src="/logo-sinfondo.png"
              alt="Rokotovich Estudio Logo"
              width={scrolled ? 50 : 65}
              height={scrolled ? 50 : 65}
              priority
              className={`object-cover ${scrolled ? 'bg-transparent' : 'bg-[#0a2342]/80 backdrop-blur-sm p-1'} rounded-full border border-white/10`}
              style={{ transition: "all 0.4s ease" }}
            />
          </div>
          <span className={`font-semibold tracking-wide transition-colors duration-300 text-white drop-shadow-md hidden md:block text-xl`}>
            Estudio Rokotovich
          </span>
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
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
          {/* Action Button */}
          <a
            target="_blank"
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
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Drawer */}
      <aside
        className={`lg:hidden fixed right-0 top-0 z-[70] h-full w-[280px] bg-[var(--first-blue)] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <span className="text-xl font-semibold text-white tracking-wide">Menú</span>
          <button
            onClick={closeMenu}
            className="p-2 -mr-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={closeMenu}
              className="flex items-center text-[16px] font-medium text-white/80 hover:text-[var(--gold)] hover:bg-white/5 rounded-xl px-4 py-3 transition-all"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <a
            href="#contacto"
            onClick={closeMenu}
            className="flex items-center justify-center w-full bg-[var(--gold)] text-white font-medium py-3.5 rounded-xl hover:bg-[#b58f3b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
        </div>
      </aside>
    </header>
  );
}
