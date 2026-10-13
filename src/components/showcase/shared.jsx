"use client";

import { useState } from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { CASE_TYPES, STUDIO, whatsappUrl } from "./data";

export const EASE = [0.16, 1, 0.3, 1];

// Revelado al entrar en viewport, usado por las variantes nuevas
export function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function BrandMark({ dark = false, size = 44 }) {
  return (
    <a href="#top" className="flex items-center gap-3 shrink-0">
      <Image
        src={STUDIO.logo}
        alt="Logo Estudio Rokotovich"
        width={size}
        height={size}
        className={`rounded-full border ${dark ? "border-white/15 bg-[var(--first-blue)]" : "border-[var(--first-blue)]/10 bg-[var(--first-blue)]"} p-0.5`}
      />
      <span className="leading-tight">
        <span className={`block font-serif text-[17px] font-bold ${dark ? "text-white" : "text-[var(--first-blue)]"}`}>
          Rokotovich
        </span>
        <span className={`block text-[10.5px] font-semibold uppercase tracking-[0.28em] ${dark ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}>
          Estudio Jurídico
        </span>
      </span>
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.43 9.42zm8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.25l5.65-1.48a11.3 11.3 0 0 0 5.78 1.47h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FaqList({ items, tone = "light" }) {
  const [open, setOpen] = useState(0);
  const dark = tone === "dark";
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border transition-colors ${
              dark
                ? isOpen ? "border-[var(--gold)]/50 bg-white/[0.06]" : "border-white/10 bg-white/[0.03]"
                : isOpen ? "border-[var(--gold)]/60 bg-white shadow-lg shadow-[var(--first-blue)]/5" : "border-slate-200 bg-white"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className={`text-[16px] font-semibold ${dark ? "text-white" : "text-[var(--first-blue)]"}`}>{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45 border-[var(--gold)] text-[var(--gold)]" : dark ? "border-white/20 text-white/70" : "border-slate-300 text-slate-500"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0 overflow-hidden">
                <p className={`px-5 pb-5 text-[15px] leading-relaxed sm:px-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Formulario de captación: sitio estático, la consulta se deriva a WhatsApp prellenada.
export function LeadForm({ title = "Contanos tu caso", subtitle, cta = "Quiero que me contacten", compact = false, id }) {
  const [form, setForm] = useState({ nombre: "", telefono: "", tipo: CASE_TYPES[0], urgencia: "Lo antes posible", mensaje: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || form.telefono.replace(/\D/g, "").length < 8) {
      setError("Ingresá tu nombre y un teléfono válido para poder contactarte.");
      return;
    }
    setError("");
    const text = `Hola, soy ${form.nombre.trim()}. Tel: ${form.telefono.trim()}. Consulta: ${form.tipo}. Urgencia: ${form.urgencia}.${
      form.mensaje.trim() ? ` ${form.mensaje.trim()}` : ""
    }`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[var(--gold)] focus:bg-white focus:ring-4 focus:ring-[var(--gold)]/15";

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 text-left shadow-[0_30px_80px_-20px_rgba(2,8,18,0.55)] sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--first-blue)] via-[var(--gold)] to-[var(--first-blue)]" />
      <h3 className="font-serif text-[22px] font-bold text-[var(--first-blue)]">{title}</h3>
      {subtitle && <p className="mt-1.5 text-[14px] text-slate-500">{subtitle}</p>}

      {sent ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-[15px] text-emerald-900" role="status">
          <p className="font-semibold">¡Listo, {form.nombre.split(" ")[0]}!</p>
          <p className="mt-1">Abrimos WhatsApp con tu consulta prellenada. Si no se abrió, escribinos al {STUDIO.phoneDisplay}.</p>
          <button type="button" onClick={() => setSent(false)} className="mt-3 text-sm font-semibold text-emerald-800 underline">
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <>
          <div className={`mt-6 grid gap-3.5 ${compact ? "" : "sm:grid-cols-2"}`}>
            <label className="block">
              <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wider text-slate-500">Nombre</span>
              <input name="nombre" value={form.nombre} onChange={onChange} className={input} placeholder="Nombre y apellido" autoComplete="name" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wider text-slate-500">Teléfono</span>
              <input name="telefono" value={form.telefono} onChange={onChange} className={input} placeholder="11 1234-5678" inputMode="tel" autoComplete="tel" />
            </label>
            <label className={`block ${compact ? "" : "sm:col-span-2"}`}>
              <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wider text-slate-500">Tipo de consulta</span>
              <select name="tipo" value={form.tipo} onChange={onChange} className={input}>
                {CASE_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="mt-4">
            <legend className="mb-2 text-[12.5px] font-semibold uppercase tracking-wider text-slate-500">¿Qué tan urgente es?</legend>
            <div className="flex flex-wrap gap-2">
              {["Lo antes posible", "Esta semana", "Solo quiero asesorarme"].map((u) => (
                <label
                  key={u}
                  className={`cursor-pointer rounded-full border px-3.5 py-2 text-[13.5px] font-medium transition ${
                    form.urgencia === u
                      ? "border-[var(--first-blue)] bg-[var(--first-blue)] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <input type="radio" name="urgencia" value={u} checked={form.urgencia === u} onChange={onChange} className="sr-only" />
                  {u}
                </label>
              ))}
            </div>
          </fieldset>

          {!compact && (
            <label className="mt-4 block">
              <span className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wider text-slate-500">Mensaje (opcional)</span>
              <textarea name="mensaje" value={form.mensaje} onChange={onChange} rows={3} className={`${input} resize-none`} placeholder="Contanos brevemente tu situación…" />
            </label>
          )}

          {error && (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-800" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gold)] px-6 py-4 text-[16px] font-bold text-white shadow-lg shadow-[var(--gold)]/30 transition hover:-translate-y-0.5 hover:bg-[#b58f3b]"
          >
            {cta}
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 flex items-center justify-center gap-2 text-center text-[12.5px] text-slate-500">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Confidencial · Protegido por el secreto profesional
          </p>
        </>
      )}
    </form>
  );
}
