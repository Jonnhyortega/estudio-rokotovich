// src/components/contact.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!form.nombre || !form.email || !form.mensaje) {
      setStatus({
        type: "error",
        message: "Completá nombre, email y el mensaje para enviar.",
      });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus({ type: "error", message: "Ingresá un email válido." });
      return;
    }

    setStatus({ type: "loading", message: "Procesando mensaje…" });

    // Enviar de forma estática (simulación cliente + opción a WhatsApp)
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "¡Gracias! Recibimos tu consulta correctamente. Nos comunicaremos a la brevedad al email/teléfono proporcionado.",
      });

      // Crear enlace prellenado de WhatsApp por si desea enviarlo directamente
      const text = encodeURIComponent(
        `Hola, mi nombre es ${form.nombre}. ${form.asunto ? `Asunto: ${form.asunto}. ` : ""}${form.mensaje}`
      );
      
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    }, 600);
  };

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

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
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
            Contanos tu caso. Nuestro equipo evalúa tu situación y responde dentro de las próximas 24 – 48 horas hábiles.
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
                <a href="https://maps.app.goo.gl/NCcwfz84JGzcBDYZ7" target="_blank" className="text-slate-600 font-medium leading-relaxed hover:text-[var(--first-blue)] transition-colors text-center block">
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

        {/* Formulario Estático Habilitado */}
        <motion.div variants={formVariants} className="w-full max-w-3xl mt-16">
          {/* <form
            onSubmit={onSubmit}
            className="rounded-[2.5rem] border border-slate-200/60 bg-white p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(10,35,66,0.06)] relative overflow-hidden"
            noValidate
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[var(--first-blue)] to-[var(--gold)]"></div>

            <h3 className="text-2xl font-bold tracking-tight text-[var(--first-blue)] mb-8 text-center sm:text-left">Envíanos tu consulta</h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                label="Nombre y apellido"
                name="nombre"
                value={form.nombre}
                onChange={onChange}
                placeholder="Ej. Juan Pérez"
                required
              />
              <Field
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="tu@mail.com"
                required
              />
              <Field
                label="Teléfono"
                name="telefono"
                value={form.telefono}
                onChange={onChange}
                placeholder="+54 9 11 ..."
              />
              <Field
                label="Asunto"
                name="asunto"
                value={form.asunto}
                onChange={onChange}
                placeholder="Consulta legal"
              />
            </div>

            <TextArea
              label="Mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={onChange}
              placeholder="Contanos brevemente tu situación…"
              required
              className="mt-6"
            />

            {status.type !== "idle" && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`mt-6 rounded-xl p-4 text-[15px] font-medium border ${status.type === "success" ? "bg-green-50 text-green-800 border-green-200" : status.type === "error" ? "bg-red-50 text-red-800 border-red-200" : "bg-blue-50 text-blue-800 border-blue-200"}`} role={status.type === "error" ? "alert" : undefined}>
                <p className="flex items-center gap-2">
                  {status.type === "loading" && <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin shrink-0"></span>}
                  {status.message}
                </p>
              </motion.div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-[var(--first-blue)] px-8 py-3.5 text-[15.5px] font-semibold text-white shadow-xl shadow-[var(--first-blue)]/20 transition-all hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-[var(--first-blue)]/40 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Procesando..." : "Enviar consulta oficial"}
              </button>

              <Link
                href="https://wa.me/5491155782731?text=Hola%2C%20quiero%20hacer%20una%20consulta"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-8 py-3 text-[15.5px] font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5"
              >
                Atención rápida por WhatsApp
              </Link>
            </div>

            <p className="mt-8 text-[12px] leading-relaxed text-slate-400">
              Al enviar este formulario aceptás nuestros términos y política de
              privacidad. El envío de este formulario no constituye ni genera de forma automática una relación de abogado-cliente hasta mediar la
              aceptación y representación por escrito.
            </p>
          </form> */}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- Subcomponentes ---------- */
function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-[14px] font-semibold text-slate-700 tracking-tight">
        {label}
        {required && <span className="ml-1 text-[var(--gold)]">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--first-blue)] focus:ring-4 focus:ring-[var(--first-blue)]/10"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
}) {
  const id = `textarea-${name}`;
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-2 text-[14px] font-semibold text-slate-700 tracking-tight">
        {label}
        {required && <span className="ml-1 text-[var(--gold)]">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--first-blue)] focus:ring-4 focus:ring-[var(--first-blue)]/10"
      />
    </div>
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
