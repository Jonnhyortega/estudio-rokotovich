"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);

  // Hook de Scroll de Framer Motion para efectos controlados por el desplazamiento
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transformaciones dinámicas guiadas por scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [70, -50]);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.7], [0.92, 1.05]);
  const watermarkRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const cardY = useTransform(scrollYProgress, [0, 1], [35, -25]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 0.7]);

  // Configuración de animaciones de revelado
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: 45, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-slate-900 py-28 px-6 lg:px-12 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Resplandor luminoso ambiental controlado por scroll */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[var(--gold)]/15 rounded-full blur-[150px] pointer-events-none"
      />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1d4e89]/25 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        key="about-motion-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Contenido / Texto (7 Columnas) */}
          <motion.div 
            variants={containerVariants}
            className="lg:col-span-7 p-8 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
              <motion.span variants={lineVariants} className="h-[2px] bg-[var(--gold)] block"></motion.span>
              <span className="text-[var(--gold)] tracking-[0.25em] text-xs font-extrabold uppercase">Trayectoria & Excelencia</span>
            </motion.div>
             
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h2
                id="about-title"
                className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white mb-8 leading-[1.12] tracking-tight"
              >
                Sobre <span className="text-[var(--gold)]">Nosotros</span>
              </h2>
            </motion.div>
            
            {/* Párrafo 1 */}
            <motion.p variants={itemVariants} className="text-slate-200 text-[17.5px] leading-relaxed mb-6 font-light">
              En <strong className="font-semibold text-white">Rokotovich Estudio Jurídico</strong> brindamos asesoramiento legal integral, eficaz y estratégico. Nuestro compromiso es absoluto, acompañamos a cada cliente en la defensa de sus derechos e intereses.
            </motion.p>
            
            {/* Párrafo 2 */}
            <motion.p variants={itemVariants} className="text-slate-300 text-[17px] leading-relaxed mb-6 font-light">
              Contamos con un equipo de profesionales especializados en distintas ramas del Derecho. Esto nos permite asegurar una mirada integral, multifacética.
            </motion.p>

            {/* Párrafo 3 */}
            <motion.p variants={itemVariants} className="text-slate-300 text-[17px] leading-relaxed mb-10 font-light border-l-2 border-[var(--gold)] pl-5 italic text-white/90">
              “Cuando llevamos adelante una causa, asumimos un compromiso y una atención personalizada a cada cliente, abordando el caso con empatía y profesionalismo.”
            </motion.p>

            {/* Badges de compromiso */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <CheckCircleIcon className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <span>Asesoramiento Legal 360°</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <CheckCircleIcon className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <span>Atención Empática y Personalizada</span>
              </div>
            </motion.div>
            
            {/* Botón CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--gold)] text-white font-semibold text-[16px] transition-all duration-300 shadow-xl shadow-[var(--gold)]/20 hover:bg-[#b58f3b] hover:-translate-y-1 hover:shadow-[var(--gold)]/40"
              >
                Hablar con un profesional
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Bloque Visual Derecho: Efecto Parallax de Escena 3D & Scroll (5 Columnas) */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-[#06172e] via-[#041121] to-[#020812] flex items-end justify-center pt-16 px-6 min-h-[500px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
            
            {/* Decoraciones de fondo con rotación por scroll */}
            <motion.div 
              style={{ rotate: watermarkRotate }}
              className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
            >
              <Image
                src="/logo-sinfondo.png"
                alt="Escudo de fondo Estudio Rokotovich"
                width={420}
                height={420}
                className="object-contain"
              />
            </motion.div>

            {/* Resplandor central tras la imagen */}
            <div className="absolute inset-x-8 top-1/4 bottom-10 bg-gradient-to-tr from-[var(--gold)]/20 via-[#0a2342]/50 to-transparent blur-3xl rounded-full pointer-events-none" />

            {/* Foto del Profesional animada por scroll (Parallax Y & Scale) */}
            <motion.div 
              style={{ y: imageY, scale: imageScale }}
              className="relative w-full max-w-[390px] h-[450px] sm:h-[500px] lg:h-[540px] xl:h-[580px]"
            >
              <Image
                src="https://res.cloudinary.com/do87isqjr/image/upload/v1790954189/sin_fondo_p7mpm7.png"
                alt="Dr. Lucas Rokotovich - Abogado, Socio Fundador"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020812] to-transparent pointer-events-none" />
            </motion.div>

            {/* Tarjeta Flotante Parallax con Cristal (Glassmorphism) */}
            <motion.div 
              style={{ y: cardY }}
              className="absolute bottom-8 left-6 right-6 sm:left-auto sm:right-8 bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-sm z-20"
            >
              <div className="w-11 h-11 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-[var(--gold)] text-xl">⚖️</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-[15.5px] leading-tight">Dr. Lucas Rokotovich</h3>
                <p className="text-white/80 text-[12.5px] font-medium mt-0.5">Abogado, Socio Fundador</p>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
