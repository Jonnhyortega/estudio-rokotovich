"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function About() {
  // Configuración de animaciones tipo "Marval"
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // escalonamiento progresivo
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: 40, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section
      id="about"
      className="relative bg-slate-50 py-24 px-6 lg:px-12 overflow-hidden"
      aria-labelledby="about-title"
    >
      <motion.div 
        key="about-motion-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl bg-white rounded-[2rem] lg:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(10,35,66,0.1)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Contenido / Texto */}
          <motion.div 
            variants={containerVariants}
            className="p-10 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
              <motion.span variants={lineVariants} className="h-[2px] bg-[var(--gold)] block"></motion.span>
              <span className="text-[var(--gold)] tracking-[0.2em] text-sm font-bold uppercase">Trayectoria Firme</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h2
                id="about-title"
                className="text-4xl lg:text-5xl font-extrabold text-[var(--first-blue)] mb-8 leading-[1.15] tracking-tight"
              >
                Sobre <span className="text-[var(--gold)]">Nosotros</span>
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-slate-600 text-[17px] leading-relaxed mb-6">
              En <strong className="font-semibold text-slate-800">Rokotovich Estudio Jurídico</strong> brindamos asesoramiento legal integral, claro y estratégico. Nuestro absoluto compromiso es acompañar a cada cliente en la férrea defensa de sus derechos y en la búsqueda de genuinas soluciones eficaces.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-slate-600 text-[17px] leading-relaxed mb-10">
              Contamos con un equipo de élite en diversas especialidades del derecho. Esto nos permite asegurar un enfoque 360 y altamente personalizado ante cualquier desafío jurídico, abordando con maestría y empatía la complejidad de cada situación.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[var(--first-blue)] text-white font-medium text-[16px] hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-[var(--first-blue)]/20 hover:shadow-slate-900/40 hover:-translate-y-1"
              >
                Hablar con un profesional
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Bloque Visual Derecho: Imagen Profesional del Dr. Lucas Rokotovich */}
          <motion.div 
            variants={imageContainerVariants}
            className="relative bg-gradient-to-br from-[#06172e] via-[#041121] to-[#020812] flex items-end justify-center pt-12 px-6 min-h-[480px] lg:min-h-full overflow-hidden"
          >
            {/* Decoraciones abstractas elegantes de fondo */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--gold)]/15 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#1d4e89]/30 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            {/* Escudo translúcido de fondo como marca de agua */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <Image
                src="/logo-sinfondo.png"
                alt="Escudo de fondo Estudio Rokotovich"
                width={380}
                height={380}
                className="object-contain"
              />
            </div>

            {/* Contenedor de la foto del Profesional */}
            <div className="relative w-full max-w-[380px] h-[420px] sm:h-[480px] lg:h-[520px] xl:h-[560px] transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="https://res.cloudinary.com/do87isqjr/image/upload/v1790872799/LUCAS_179.jpg-removebg-preview_nkkjtn.png"
                alt="Dr. Lucas Rokotovich - Abogado Fundador"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020812] to-transparent pointer-events-none" />
            </div>

            {/* Tarjeta flotante con nombre y título */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                <span className="text-[var(--gold)] text-lg">⚖️</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] leading-tight">Dr. Lucas Rokotovich</h3>
                <p className="text-white/75 text-[12.5px] font-medium mt-0.5">Abogado Fundador & Director Legal</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
