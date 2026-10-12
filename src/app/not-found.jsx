"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07172c] text-white flex flex-col justify-between selection:bg-[var(--gold)] selection:text-[#0a2342] relative overflow-hidden font-sans">
      
      {/* Fondo con efectos de iluminación y malla sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#1d4e89]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[var(--gold)]/5 rounded-full blur-[100px]" />
        {/* Patrón de líneas sutiles de fondo */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Header Institucional */}
      <header className="relative z-10 w-full border-b border-white/10 bg-[#0a2342]/70 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--gold)]/40 p-0.5 group-hover:border-[var(--gold)] transition-colors">
              <Image
                src="/logo-sinfondo.png"
                alt="Logo Estudio Jurídico Rokotovich"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wide text-white group-hover:text-[var(--gold)] transition-colors">
                ROKOTOVICH
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-400 font-sans">
                Estudio Jurídico
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-[var(--gold)] border border-white/15 hover:border-[var(--gold)]/50 px-4 py-2 rounded-full backdrop-blur-sm transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Contenido Principal de Error 404 */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center flex flex-col items-center">
          
          {/* Badge superior */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            Error 404 • Expediente no encontrado
          </motion.div>

          {/* Gráfico 404 con balanza de fondo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative my-4 flex items-center justify-center"
          >
            {/* Balanza de agua al fondo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              <Image
                src="/balanza-transparent.png"
                alt="Balanza de la justicia"
                width={320}
                height={320}
                className="object-contain filter drop-shadow-[0_0_25px_rgba(200,162,77,0.3)]"
                priority
              />
            </div>

            {/* Número 404 estilizado */}
            <h1 className="text-8xl sm:text-9xl font-extrabold font-serif tracking-tight select-none bg-gradient-to-b from-white via-amber-100/90 to-[var(--gold)] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              404
            </h1>
          </motion.div>

          {/* Textos descriptivos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 max-w-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              La página que buscas no existe o ha sido trasladada
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Es posible que la dirección introducida contenga un error tipográfico, la sección haya cambiado de ubicación o el recurso legal ya no esté disponible.
            </p>
          </motion.div>

          {/* Botones de Acción principales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--gold)] to-[#b58f3b] text-[#0a2342] font-semibold text-sm shadow-xl hover:shadow-[0_0_25px_rgba(200,162,77,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Ir a la página principal
            </Link>

            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 hover:border-white/40 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Realizar una consulta legal
            </Link>
          </motion.div>

          {/* Enlaces de acceso rápido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10 w-full max-w-2xl"
          >
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
              Secciones sugeridas del sitio
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Sobre Nosotros", href: "/#about" },
                { label: "Áreas de Práctica", href: "/#areas" },
                { label: "Contacto Directo", href: "/#contacto" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[var(--gold)]/40 text-xs text-gray-300 hover:text-[var(--gold)] transition-all text-center"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
