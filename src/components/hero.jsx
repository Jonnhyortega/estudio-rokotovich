"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({
  title = "Rokotovich Estudio Jurídico",
  subtitle = "Asesoramiento legal claro, estratégico y orientado a resultados.",
  ctaPrimary = { href: "#contacto", label: "Agendar consulta" },
  ctaSecondary = { href: "#areas", label: "Áreas de práctica" },
  heroImage = "https://res.cloudinary.com/do87isqjr/image/upload/v1790201144/LUCAS_209_blo2ee.png",
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
        relative isolate flex items-center min-h-[90vh]
        pt-28 pb-16 lg:pt-36 lg:pb-24
        overflow-hidden scroll-mt-24
        bg-gradient-to-b bg-white
        // from-[#06172e] via-[#041121] to-[#020812]
      "
    >
      {/* Luces/brillos de fondo sutiles */}
      <div className="absolute top-1/4 -left-32 -z-10 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-[#0a2342]/40 blur-[140px] pointer-events-none" />

      {/* Contenido Principal */}
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Columna Izquierda: Textos y CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Chip superior */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur-md shadow-lg">
                <ScaleIcon className="h-4 w-4 text-[var(--gold)]" />
                DEFENSA Y ASESORÍA INTEGRAL
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.div variants={itemVariants}>
              <h1 className="text-balance text-[38px] sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-white drop-shadow-xl leading-[1.08]">
                {title}
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.div variants={itemVariants}>
              <p className="mt-6 text-[18px] sm:text-[21px] leading-[1.6] text-white/85 font-light max-w-2xl">
                {subtitle}
              </p>
            </motion.div>

            {/* Foto en Mobile (aparece entre el texto y los CTAs en pantallas pequeñas) */}
            <motion.div
              variants={itemVariants}
              className="lg:hidden w-full my-6 max-w-sm mx-auto relative"
            >
              <div className="absolute inset-x-2 top-4 bottom-0 bg-[var(--gold)]/15 blur-2xl rounded-full" />
              <div className="relative h-[400px] sm:h-[450px] w-full">
                <Image
                  src={heroImage}
                  alt="Dr. Lucas Rokotovich"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-top filter drop-shadow-2xl"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020812] to-transparent pointer-events-none" />
              </div>
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

          {/* Columna Derecha: Foto Destacada del Profesional (Desktop) */}
          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-[460px]"
            >
              {/* Resplandor decorativo posterior */}
              <div className="absolute inset-x-4 top-10 bottom-0 rounded-full bg-gradient-to-tr from-[var(--gold)]/20 via-[#0a2342]/50 to-transparent blur-3xl opacity-80" />

              <div className="relative h-[530px] xl:h-[600px] w-full group">
                <Image
                  src={heroImage}
                  alt="Dr. Lucas Rokotovich"
                  fill
                  priority
                  sizes="50vw"
                  className="object-contain object-top filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Transición sutil al fondo en la base de la silueta */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020812] to-transparent pointer-events-none" />
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
