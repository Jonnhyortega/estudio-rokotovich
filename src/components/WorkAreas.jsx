"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkAreas() {
  // Animación 3D individual por tarjeta para activación precisa en smartphones al hacer scroll
  const card3DVariant = {
    hidden: { 
      opacity: 0, 
      rotateX: 24, 
      y: 50, 
      scale: 0.92,
      transformPerspective: 1000 
    },
    visible: (index) => ({
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transformPerspective: 1000,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const areas = [
    {
      id: "federal",
      title: "Fuero Federal",
      subtitle: "Cobertura Nacional — República Argentina",
      description:
        "Representación e intervención legal en Juzgados, Cámaras y Fueros Federales en todo el país.",
      badge: "Nacional 🇦🇷",
      imageSrc: "/mapa-argentina.png",
      alt: "Mapa Fuero Federal Argentina",
    },
    {
      id: "pba",
      title: "Provincia de Buenos Aires",
      subtitle: "Departamentos Judiciales de PBA",
      description:
        "Actuación plena en los Fueros Civil, Comercial, Penal, Laboral y de Familia en toda la Provincia.",
      badge: "PBA",
      imageSrc: "/mapa-pba.png",
      alt: "Mapa Provincia de Buenos Aires",
    },
    {
      id: "caba",
      title: "Ciudad Autónoma de Buenos Aires",
      subtitle: "Tribunales Nacionales & CABA",
      description:
        "Patrocinio letrado e intervención en Fuero Nacional y de la Ciudad de Buenos Aires.",
      badge: "CABA",
      imageSrc: "/mapa-caba.png",
      alt: "Mapa Ciudad Autónoma de Buenos Aires CABA",
    },
  ];

  return (
    <section
      id="areas-trabajo"
      aria-label="Áreas de Trabajo y Cobertura Territorial"
      className="relative bg-gradient-to-b from-[#020812] via-[#041121] to-[#06172e] py-24 px-4 sm:px-6 lg:px-12 overflow-hidden [perspective:1200px]"
    >
      {/* Luces sutiles de fondo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--gold)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-lg backdrop-blur-md">
            <span>📍 Alcance Territorial & Jurisdiccional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Áreas de <span className="text-[var(--gold)]">Trabajo</span>
          </h2>

          <p className="text-slate-300 text-[17px] sm:text-[19px] font-light leading-relaxed">
            Ofrecemos patrocinio letrado y representación profesional en las principales jurisdicciones del país.
          </p>
        </motion.div>

        {/* Tarjetas de Áreas de Trabajo con animación 3D individual por Viewport */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={card3DVariant}
              custom={index}
              className="group relative rounded-[2.5rem] border border-white/12 bg-gradient-to-b from-white/10 via-white/5 to-[#041121]/90 p-7 sm:p-9 lg:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/12 hover:border-[var(--gold)]/50 hover:shadow-[0_30px_60px_rgba(212,175,55,0.2)]"
            >
              {/* Badge superior */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-white/80 tracking-wider uppercase backdrop-blur-sm">
                {area.badge}
              </div>

              {/* Contenedor del Mapa / Silueta con efecto 3D */}
              <div className="w-full h-48 flex items-center justify-center mb-6 relative [perspective:600px]">
                {/* Resplandor circular tras el mapa */}
                <div className="absolute w-28 h-28 bg-[var(--gold)]/20 rounded-full blur-2xl transition-all duration-500 group-hover:scale-135 group-hover:bg-[var(--gold)]/40" />
                
                <motion.div 
                  whileHover={{ rotateY: 12, rotateX: -8, scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-40 h-40 flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={area.imageSrc}
                    alt={area.alt}
                    fill
                    className="object-contain filter drop-shadow-[0_12px_24px_rgba(212,175,55,0.45)] transition-all duration-500 group-hover:drop-shadow-[0_20px_35px_rgba(212,175,55,0.65)]"
                    priority
                  />
                </motion.div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[var(--gold)] transition-colors">
                {area.title}
              </h3>

              {/* Subtítulo */}
              <span className="text-[13px] font-semibold text-[var(--gold)] tracking-wide uppercase mb-4">
                {area.subtitle}
              </span>

              {/* Descripción */}
              <p className="text-slate-300 text-[15px] leading-relaxed font-light mt-auto">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

