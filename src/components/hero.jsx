"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] lg:h-[550px] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-[var(--gold)] border-t-transparent animate-spin" />
    </div>
  ),
});

export default function Hero({
  title = "Rokotovich Estudio Jurídico",
  subtitle = "Asesoramiento legal claro, estratégico y orientado a resultados.",
  ctaPrimary = { href: "#contacto", label: "Agendar consulta" },
  ctaSecondary = { href: "#areas", label: "Áreas de práctica" },
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
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

  return (
    <section
      id="hero"
      aria-label="Portada del sitio — Estudio Jurídico"
      className="
        relative isolate flex items-center min-h-[92vh]
        pt-28 pb-16 lg:pt-36 lg:pb-24
        overflow-hidden scroll-mt-24
        bg-gradient-to-b from-[#06172e] via-[#041121] to-[#020812]
      "
    >
      {/* Escena 3D de Ondas y Partículas Doradas de Fondo */}
      <ThreeHeroScene />

      {/* Overlay Gradiente Oscuro para Garantizar Máxima Legibilidad del Texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041121]/95 via-[#041121]/80 to-[#041121]/45 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06172e]/70 via-transparent to-[#020812]/90 pointer-events-none z-[1]" />

      {/* Luces/brillos de fondo sutiles */}
      <div className="absolute top-1/4 -left-32 -z-10 h-96 w-96 rounded-full bg-[var(--gold)]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-[#0a2342]/50 blur-[140px] pointer-events-none" />

      {/* Contenido Principal */}
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10 pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Columna Izquierda: Textos y CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start pointer-events-auto">
            {/* Chip superior */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur-md shadow-lg">
                <ScaleIcon className="h-4 w-4 text-[var(--gold)]" />
                DEFENSA Y ASESORÍA INTEGRAL
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.div variants={itemVariants}>
              <h1 className="text-balance text-[38px] sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-[1.08]">
                {title}
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.div variants={itemVariants}>
              <p className="mt-6 text-[18px] sm:text-[21px] leading-[1.6] text-white/90 font-light max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {subtitle}
              </p>
            </motion.div>

            {/* Botones CTA */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href={ctaPrimary.href}
                className="
                  w-full sm:w-auto inline-flex items-center justify-center rounded-full
                  bg-[var(--gold)] px-8 py-4
                  text-[16px] font-semibold text-white
                  shadow-xl shadow-[var(--gold)]/20 ring-1 ring-white/10
                  transition-all duration-300 hover:bg-[#b58f3b] hover:-translate-y-1 hover:shadow-[var(--gold)]/40
                "
              >
                {ctaPrimary.label}
              </Link>

              <Link
                href={ctaSecondary.href}
                className="
                  w-full sm:w-auto inline-flex items-center justify-center rounded-full
                  bg-white/5 px-8 py-4 text-[16px] font-semibold text-white
                  ring-1 ring-white/30 backdrop-blur-md
                  transition-all duration-300 hover:bg-white/15 hover:text-white hover:-translate-y-1 hover:shadow-lg
                "
              >
                {ctaSecondary.label}
              </Link>
            </motion.div>

            {/* Badges de confianza */}
            <motion.dl
              variants={containerVariants}
              className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:gap-6 text-white/85 sm:grid-cols-3 w-full"
            >
              <motion.div variants={badgeVariants}><Badge title="+1000 casos" desc="de experiencia" /></motion.div>
              <motion.div variants={badgeVariants}><Badge title="Respuesta rápida" desc="casos nuevos" /></motion.div>
              <motion.div variants={badgeVariants}><Badge title="Atención federal" desc="AR 🇦🇷" /></motion.div>
            </motion.dl>
          </div>

          {/* Columna Derecha: Tarjetas Flotantes de Lujo Glassmorphism */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-auto">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-[440px] space-y-5"
            >
              {/* Tarjeta 1 */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[17px]">Defensa & Estrategia Integral</h3>
                    <p className="text-white/75 text-[13.5px] mt-0.5">Soluciones legales de alta complejidad con enfoque en resultados.</p>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:bg-white/15 ml-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[17px]">Atención Federal & Asesoría</h3>
                    <p className="text-white/75 text-[13.5px] mt-0.5">Cobertura nacional inmediata para particulares y empresas.</p>
                  </div>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[17px]">Respuesta Rápida 24/7</h3>
                    <p className="text-white/75 text-[13.5px] mt-0.5">Atención personalizada y confidencial ante urgencias jurídicas.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- Subcomponentes --- */

function Badge({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors">
      <div className="text-[18px] font-bold text-white tracking-tight">{title}</div>
      <div className="text-[12px] font-medium text-white/70 uppercase tracking-widest mt-1">{desc}</div>
    </div>
  );
}

function ScaleIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v3" />
      <path d="M3 6h18" />
      <path d="M6 6l4 7a3 3 0 1 1-6 0l4-7" />
      <path d="M18 6l4 7a3 3 0 1 1-6 0l4-7" />
      <path d="M12 6v14" />
      <path d="M8 20h8" />
    </svg>
  );
}
