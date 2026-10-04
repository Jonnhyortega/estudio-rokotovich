// src/components/contact.jsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section id="contacto" className="relative bg-slate-50 py-24 overflow-hidden">
      
      {/* Elemento de diseño sutil de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--first-blue)]/5 rounded-full blur-3xl -mr-64 -mt-32 pointer-events-none"></div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto flex max-w-5xl flex-col items-center px-6 relative z-10"
      >
        {/* Centralizado: Datos de contacto */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            <span className="text-[var(--gold)] tracking-[0.2em] text-sm font-bold uppercase">Atención 24hs</span>
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--first-blue)]">
            Contacto
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-5 text-[17px] leading-relaxed text-slate-600 max-w-2xl">
            Contanos tu caso. Nuestro equipo evalúa tu situación y responde a la brevedad.
          </motion.p>

          <motion.ul variants={listContainerVariants} className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-3xl">
            <motion.li variants={itemVariants} className="flex flex-col items-center group">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white shadow-md shadow-black/5 ring-1 ring-black/5 group-hover:bg-[var(--first-blue)] group-hover:text-white transition-colors duration-300 mb-4">
                <PhoneIcon className="h-5 w-5 text-[var(--first-blue)] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-slate-900 tracking-tight text-lg mb-1">Teléfono / WhatsApp</div>
                <Link
                  href="https://wa.me/5491155782731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 font-medium hover:text-[var(--first-blue)] transition-colors inline-block"
                >
                  +54 9 11 5578-2731
                </Link>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="flex flex-col items-center group">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white shadow-md shadow-black/5 ring-1 ring-black/5 group-hover:bg-[var(--first-blue)] group-hover:text-white transition-colors duration-300 mb-4">
                <MailIcon className="h-5 w-5 text-[var(--first-blue)] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-slate-900 tracking-tight text-lg mb-1">Email</div>
                <a
                  href="mailto:estudiorokotovich@gmail.com"
                  className="text-slate-600 font-medium hover:text-[var(--first-blue)] transition-colors inline-block"
                >
                  estudiorokotovich@gmail.com
                </a>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="flex flex-col items-center group">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white shadow-md shadow-black/5 ring-1 ring-black/5 group-hover:bg-[var(--first-blue)] group-hover:text-white transition-colors duration-300 mb-4">
                <MapPinIcon className="h-5 w-5 text-[var(--first-blue)] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-slate-900 tracking-tight text-lg mb-1">Estudio Jurídico</div>
                <a href="https://maps.app.goo.gl/NCcwfz84JGzcBDYZ7" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium leading-relaxed hover:text-[var(--first-blue)] transition-colors text-center block">
                  Av. Leandro N. Alem 424 Piso 6, Depto 602<br/>Ciudad Autónoma de Buenos Aires
                </a>
                <p className="text-[var(--gold)] font-medium text-[13px] tracking-wide mt-2 uppercase text-center">Atención presencial con turno</p>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="flex flex-col items-center group">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white shadow-md shadow-black/5 ring-1 ring-black/5 group-hover:bg-[var(--first-blue)] group-hover:text-white transition-colors duration-300 mb-4">
                <ClockIcon className="h-5 w-5 text-[var(--first-blue)] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-slate-900 tracking-tight text-lg mb-1">Horarios</div>
                <p className="text-slate-600 font-medium mt-1">Lunes a Viernes • 9:00 a 18:00</p>
              </div>
            </motion.li>
          </motion.ul>

          {/* Mini “trust” */}
          <motion.div variants={itemVariants} className="mt-14 max-w-2xl w-full rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6 shadow-sm">
            <p className="text-[14.5px] leading-relaxed text-slate-700">
              <strong className="text-[var(--first-blue)] font-bold">Confidencialidad absoluta:</strong>{" "}
              Tu consulta es estrictamente privada y se encuentra protegida por el secreto profesional legal.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Íconos (SVG inline, sin dependencias) ---------- */
function PhoneIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.12a2 2 0 0 1 2.11-.45c.8.27 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function MapPinIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  );
}
function ClockIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
