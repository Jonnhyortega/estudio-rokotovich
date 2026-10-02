"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, ScaleIcon, UserGroupIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function StrategicDefense() {
  // Configuración de animación 3D por viewport para mobile y desktop
  const card3DVariant = {
    hidden: { 
      opacity: 0, 
      rotateX: 18, 
      y: 45, 
      scale: 0.94,
      transformPerspective: 1000 
    },
    visible: (customDelay = 0) => ({
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transformPerspective: 1000,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="propuesta-valor"
      aria-label="Defensa Penal Estratégica y Soluciones Integrales"
      className="relative bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10 [perspective:1200px]"
    >
      {/* Luz ambiental dorada de fondo */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#1d4e89]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Banner de Cita de Impacto - Animado en Viewport 3D */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={card3DVariant}
          custom={0}
          className="mb-12 md:mb-16 rounded-[2.5rem] bg-gradient-to-r from-slate-800/90 via-slate-900/95 to-slate-800/90 border border-white/15 p-7 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden group transition-all duration-500 hover:border-[var(--gold)]/40 hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)]"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center shrink-0 shadow-lg shadow-[var(--gold)]/10 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheckIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[var(--gold)]" />
            </div>
            
            <div>
              <span className="text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                Compromiso & Firmeza Legal
              </span>
              <p className="text-lg sm:text-2xl lg:text-3xl font-semibold leading-snug text-white tracking-tight italic">
                “En momentos donde la libertad y los derechos están en juego, contar con una estrategia legal sólida marca la diferencia desde el primer minuto.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sección Principal: Defensa Penal & Rigurosidad */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12 md:mb-16">
          
          {/* Bloque Izquierdo: Enfoque Penal Estratégico - Viewport 3D individual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={card3DVariant}
            custom={0.1}
            className="lg:col-span-7 rounded-[2.5rem] border border-white/12 bg-gradient-to-b from-white/10 via-white/5 to-slate-900/60 p-7 sm:p-9 md:p-10 backdrop-blur-xl flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[var(--gold)]/40 hover:shadow-[0_25px_50px_rgba(212,175,55,0.12)] group"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-bold uppercase tracking-wider mb-6">
                <ScaleIcon className="w-4 h-4" />
                Defensa Penal Especializada
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight">
                Defensa Penal <span className="text-[var(--gold)]">Estratégica, Técnica e Integral</span>
              </h3>

              <p className="text-slate-300 text-[16px] sm:text-[16.5px] leading-relaxed mb-6 font-light">
                Somos un estudio jurídico enfocado en la defensa penal. Nos involucramos de manera personalizada en cada etapa del proceso, analizando minuciosamente cada detalle para garantizar una representación firme y orientada a conseguir el mejor resultado posible.
              </p>

              <p className="text-slate-300 text-[16px] sm:text-[16.5px] leading-relaxed font-light">
                Entendemos la complejidad y la urgencia que implica una causa penal. Por eso, acompañamos a nuestros clientes con la rigurosidad, reserva y dedicación que cada caso exige, con un objetivo claro: <strong className="text-white font-semibold">defender tus derechos y resguardar tu libertad.</strong>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-slate-300 text-sm font-medium">Atención inmediata ante emergencias y detenciones penal de urgencia</span>
            </div>
          </motion.div>

          {/* Bloque Derecho: Red de Profesionales Asociados - Viewport 3D individual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={card3DVariant}
            custom={0.2}
            className="lg:col-span-5 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-white/10 via-slate-800/60 to-slate-900/80 p-7 sm:p-9 md:p-10 backdrop-blur-xl flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_25px_50px_rgba(59,130,246,0.12)] group"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <UserGroupIcon className="w-4 h-4" />
                Soluciones Integrales
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Red de Profesionales <span className="text-[var(--gold)]">Asociados</span>
              </h3>

              <p className="text-slate-300 text-[15px] leading-relaxed mb-6 font-light">
                Si bien nuestra práctica principal es el derecho penal, sabemos que los problemas jurídicos suelen requerir un abordaje más amplio. Para brindarte un respaldo completo, trabajamos de forma coordinada con abogados especialistas:
              </p>

              {/* Tarjetas de Ramas Asociadas con animación viewport independiente */}
              <div className="space-y-4">
                {/* Derecho Civil */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xl">🚗</span>
                    <h4 className="text-white font-bold text-[15.5px]">Derecho Civil</h4>
                  </div>
                  <p className="text-slate-300 text-[13.5px] font-light leading-snug">
                    Asesoramiento y representación en reclamos por accidentes de tránsito, ejecuciones, redacción de contratos y trámites sucesorios.
                  </p>
                </motion.div>

                {/* Derecho Laboral */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xl">💼</span>
                    <h4 className="text-white font-bold text-[15.5px]">Derecho Laboral</h4>
                  </div>
                  <p className="text-slate-300 text-[13.5px] font-light leading-snug">
                    Patrocinio en casos de despidos, reclamos salariales, indemnizaciones y accidentes de trabajo (ART).
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cierre / Llamado a la Acción de Compromiso - Viewport 3D */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={card3DVariant}
          custom={0.1}
          className="rounded-3xl border border-[var(--gold)]/35 bg-gradient-to-r from-[var(--gold)]/15 via-slate-900 to-[var(--gold)]/15 p-8 sm:p-10 md:p-12 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl group hover:border-[var(--gold)]/60 transition-all duration-500"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--gold)]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--gold)]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight relative z-10">
            “Estamos para defender tus derechos y <span className="text-[var(--gold)]">devolver tu libertad</span>.”
          </h3>

          <a
            href="#contacto"
            className="relative z-10 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 text-[16px] font-semibold text-white shadow-xl shadow-[var(--gold)]/25 transition-all duration-300 hover:bg-[#b58f3b] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)]"
          >
            Consultar caso con reserva absoluta
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

