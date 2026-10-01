"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
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
      className="relative bg-gradient-to-b from-[#020812] via-[#041121] to-[#06172e] py-24 px-6 lg:px-12 overflow-hidden"
    >
      {/* Luces sutiles de fondo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--gold)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-lg backdrop-blur-md">
            <span>📍 Alcance Territorial & Jurisdiccional</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Áreas de <span className="text-[var(--gold)]">Trabajo</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-[17px] sm:text-[19px] font-light leading-relaxed"
          >
            Ofrecemos patrocinio letrado y representación profesional en las principales jurisdicciones del país.
          </motion.p>
        </motion.div>

        {/* Tarjetas de Áreas de Trabajo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {areas.map((area) => (
            <motion.div
              key={area.id}
              variants={itemVariants}
              className="group relative rounded-[2.5rem] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
            >
              {/* Badge superior */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-white/80 tracking-wider uppercase">
                {area.badge}
              </div>

              {/* Contenedor del Mapa / Silueta */}
              <div className="w-full h-44 flex items-center justify-center mb-6 relative">
                {/* Resplandor circular tras el mapa */}
                <div className="absolute w-28 h-28 bg-[var(--gold)]/20 rounded-full blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-[var(--gold)]/35" />
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <Image
                    src={area.imageSrc}
                    alt={area.alt}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_20px_rgba(212,175,55,0.4)] transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
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
        </motion.div>

      </div>
    </section>
  );
}
