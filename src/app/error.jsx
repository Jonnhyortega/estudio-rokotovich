"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Registrar el error en consola o servicio de monitoreo
    console.error("Excepción capturada en Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#07172c] text-white flex flex-col justify-between selection:bg-[var(--gold)] selection:text-[#0a2342] relative overflow-hidden font-sans">
      
      {/* Luces de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[var(--gold)]/10 rounded-full blur-[120px]" />
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

      {/* Contenido principal del error */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center flex flex-col items-center">
          
          {/* Icono de advertencia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-xl backdrop-blur-md"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              Ha ocurrido un error inesperado
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
              Inconveniente temporal en el procesamiento de la solicitud. Puedes intentar recargar la información o regresar a la página principal.
            </p>
          </motion.div>

          {/* Acciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--gold)] to-[#b58f3b] text-[#0a2342] font-semibold text-sm shadow-xl hover:shadow-[0_0_25px_rgba(200,162,77,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Intentar nuevamente
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 hover:border-white/40 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Volver al Inicio
            </Link>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
