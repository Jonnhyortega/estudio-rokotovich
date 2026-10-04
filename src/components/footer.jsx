// src/components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--first-blue)] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo o nombre oficial */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-3.5 group select-none">
            <div className="relative flex items-center justify-center rounded-full border border-[var(--gold)]/60 bg-white/5 p-1 shadow-md group-hover:border-[var(--gold)] transition-all duration-300">
              <Image
                src="/logo-sinfondo.png"
                alt="Estudio Jurídico Rokotovich"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg font-extrabold tracking-wider text-white uppercase group-hover:text-[var(--gold)] transition-colors duration-300 leading-tight">
                ROKOTOVICH
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-300 font-medium leading-tight">
                ESTUDIO JURÍDICO
              </span>
            </div>
          </Link>
          <p className="text-xs text-gray-300 mt-1 max-w-xs text-center md:text-left font-light">
            Asesoramiento legal claro, estratégico y orientado a resultados.
          </p>
        </div>

        {/* Navegación rápida */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/#about" className="hover:text-[var(--gold)] transition">Sobre Nosotros</Link>
          <Link href="/#areas" className="hover:text-[var(--gold)] transition">Áreas</Link>
          <Link href="/#contacto" className="hover:text-[var(--gold)] transition">Contacto</Link>
        </nav>

        {/* Redes / contacto */}
        <div className="flex gap-4">
          <Link
            href="mailto:estudiorokotovich@gmail.com"
            aria-label="Enviar correo"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-[var(--gold)] border border-white/10 transition"
          >
            <SiGmail size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucas-rokotovich-888941130/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-[var(--gold)] border border-white/10 transition"
          >
            <FaLinkedin size={18} />
          </Link>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-white/10 mt-6 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Rokotovich Estudio Jurídico. Todos los derechos reservados. <br />
        <a href="https://www.astralvisionestudio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Desarrollado por Astral Vision</a>
      </div>
    </footer>
  );
}
