"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import OriginalLanding from "./variants/OriginalLanding";
import { EASE } from "./shared";
import { STUDIO } from "./data";

const Loading = () => (
  <div className="grid min-h-screen place-items-center bg-[#041121]">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--gold)] border-t-transparent" />
  </div>
);

const InstitutionalLanding = dynamic(() => import("./variants/InstitutionalLanding"), { loading: Loading });
const ConversionLanding = dynamic(() => import("./variants/ConversionLanding"), { loading: Loading });
const SalesLanding = dynamic(() => import("./variants/SalesLanding"), { loading: Loading });

export const DESIGNS = [
  {
    id: "original",
    name: "Diseño actual",
    focus: "Versión vigente",
    description: "La landing actual del estudio: escena 3D, defensa penal estratégica, áreas, alcance territorial y contacto.",
    goal: "Presencia digital moderna",
    Component: OriginalLanding,
    stickyBar: false,
  },
  {
    id: "institucional",
    name: "Institucional",
    focus: "Prestigio & confianza",
    description: "Estética editorial y sobria. Pone en primer plano la trayectoria, los valores, la práctica y las jurisdicciones.",
    goal: "Posicionar la marca del estudio",
    Component: InstitutionalLanding,
    stickyBar: false,
  },
  {
    id: "conversion",
    name: "Landing de conversión",
    focus: "Captación de consultas",
    description: "Un único objetivo: que el visitante deje su consulta. Formulario arriba, urgencia, pasos simples y FAQ.",
    goal: "Generar leads calificados",
    Component: ConversionLanding,
    stickyBar: true,
  },
  {
    id: "venta",
    name: "Landing para venta",
    focus: "Servicios contratables",
    description: "Presenta los servicios como propuestas concretas, con comparativa de valor, compromisos y cierre.",
    goal: "Vender servicios legales",
    Component: SalesLanding,
    stickyBar: true,
  },
];

export default function DesignShowcase() {
  const [activeId, setActiveId] = useState(DESIGNS[0].id);
  const [menuOpen, setMenuOpen] = useState(true);
  const [hasChosen, setHasChosen] = useState(false);

  const activeIndex = DESIGNS.findIndex((d) => d.id === activeId);
  const active = DESIGNS[activeIndex];
  const Active = active.Component;

  const choose = useCallback((id) => {
    setActiveId(id);
    setHasChosen(true);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const step = (dir) => choose(DESIGNS[(activeIndex + dir + DESIGNS.length) % DESIGNS.length].id);

  // Bloquea el scroll del sitio mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div key={active.id} aria-hidden={menuOpen || undefined}>
        <Active />
      </div>

      {hasChosen && !menuOpen && (
        <Switcher active={active} index={activeIndex} onOpen={() => setMenuOpen(true)} onStep={step} />
      )}

      <AnimatePresence>
        {menuOpen && (
          <DesignMenu
            activeId={hasChosen ? activeId : null}
            onChoose={choose}
            onClose={hasChosen ? () => setMenuOpen(false) : null}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function DesignMenu({ activeId, onChoose, onClose }) {
  const dialogRef = useRef(null);

  // Atajos: 1–4 eligen una propuesta, Esc cierra si ya hay una elegida
  useEffect(() => {
    dialogRef.current?.focus();
    const onKey = (e) => {
      const n = Number(e.key);
      if (n >= 1 && n <= DESIGNS.length) onChoose(DESIGNS[n - 1].id);
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onChoose, onClose]);

  return (
    <motion.div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="design-menu-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
      className="fixed inset-0 z-[200] overflow-y-auto bg-[#020812] font-sans text-white outline-none"
    >
      {/* Fondo: degradé de marca + retícula fina */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-[#06172e] via-[#041121] to-[#020812]" />
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[var(--gold)]/12 blur-[150px]" />

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mx-auto flex min-h-full max-w-7xl flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={STUDIO.logo} alt="Logo Estudio Rokotovich" width={44} height={44} className="rounded-full border border-white/15 bg-[var(--first-blue)] p-0.5" priority />
            <div className="leading-tight">
              <p className="font-serif text-[16px] font-bold">Rokotovich</p>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Estudio Jurídico</p>
            </div>
          </div>
          {onClose && (
            <button type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13.5px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white">
              Volver a la propuesta
              <kbd className="hidden rounded border border-white/20 px-1.5 text-[11px] text-white/50 sm:inline">Esc</kbd>
            </button>
          )}
        </div>

        <div className="mt-12 max-w-3xl sm:mt-16">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" />
            Presentación de propuestas
          </p>
          <h1 id="design-menu-title" className="mt-5 text-balance font-serif text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[48px] lg:text-[56px]">
            Cuatro enfoques para la nueva web del estudio.
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/65">
            Misma identidad, paleta y contenido; distinto objetivo de negocio. Elegí una propuesta para recorrerla completa y compará con el selector inferior.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {DESIGNS.map((d, i) => (
            <motion.li
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => onChoose(d.id)}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border p-4 text-left transition duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
                  activeId === d.id
                    ? "border-[var(--gold)]/70 bg-white/[0.07]"
                    : "border-white/10 bg-white/[0.035] hover:border-[var(--gold)]/50 hover:bg-white/[0.06]"
                }`}
              >
                <Thumbnail id={d.id} />
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[14px] italic text-[var(--gold)]">Propuesta 0{i + 1}</span>
                    {activeId === d.id ? (
                      <span className="rounded-full bg-[var(--gold)] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white">Viendo</span>
                    ) : (
                      <kbd className="hidden rounded border border-white/15 px-1.5 text-[11px] text-white/40 sm:inline">{i + 1}</kbd>
                    )}
                  </div>
                  <h2 className="mt-2 text-[21px] font-bold leading-tight">{d.name}</h2>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/50">{d.focus}</p>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-white/65">{d.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[12.5px] text-white/55">
                      Objetivo: <span className="font-semibold text-white/85">{d.goal}</span>
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-[var(--gold)]">
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>

        <p className="mt-auto pt-12 text-center text-[12.5px] text-white/40">
          Tip: usá las teclas <kbd className="rounded border border-white/15 px-1">1</kbd>–<kbd className="rounded border border-white/15 px-1">4</kbd> para cambiar de propuesta.
        </p>
      </motion.div>
    </motion.div>
  );
}

// Miniaturas esquemáticas de cada propuesta, dibujadas con la paleta de marca
function Thumbnail({ id }) {
  const gold = "bg-[var(--gold)]";
  const line = (w, cls = "bg-white/25") => <div className={`h-1.5 rounded-full ${cls}`} style={{ width: w }} />;

  if (id === "original") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-b from-[#06172e] to-[#020812] p-3.5 ring-1 ring-white/10">
        <svg className="absolute inset-x-0 bottom-0 h-20 w-full text-[var(--gold)]/40" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 Q 50 10 100 35 T 200 30" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M0 50 Q 60 25 110 45 T 200 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
        <div className="flex items-center justify-between">{line("28%")}<div className={`h-2 w-8 rounded-full ${gold}`} /></div>
        <div className="mt-5 grid grid-cols-5 gap-2">
          <div className="col-span-3 space-y-1.5">
            {line("90%", "bg-white/70")}
            {line("70%", "bg-white/70")}
            {line("80%")}
            <div className="flex gap-1.5 pt-1.5"><div className={`h-3 w-10 rounded-full ${gold}`} /><div className="h-3 w-10 rounded-full ring-1 ring-white/30" /></div>
          </div>
          <div className="col-span-2 space-y-1.5">
            {[0, 1, 2].map((k) => <div key={k} className="h-5 rounded-md bg-white/10 ring-1 ring-white/15" />)}
          </div>
        </div>
      </div>
    );
  }

  if (id === "institucional") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl bg-[#faf8f3] p-3.5">
        <div className="-mx-3.5 -mt-3.5 mb-2 h-2 bg-[var(--first-blue)]" />
        <div className="flex items-center justify-between">{line("26%", "bg-[var(--first-blue)]/70")}<div className="h-2 w-8 rounded-full ring-1 ring-[var(--first-blue)]" /></div>
        <div className="mt-4 grid grid-cols-5 gap-3">
          <div className="col-span-3 space-y-1.5">
            <div className={`h-px w-6 ${gold}`} />
            {line("95%", "bg-[var(--first-blue)]")}
            {line("75%", "bg-[var(--first-blue)]")}
            {line("60%", "bg-slate-300")}
            <div className="mt-3 grid grid-cols-3 border-y border-slate-300 py-1.5">
              {[0, 1, 2].map((k) => <div key={k} className="mx-1 h-2 rounded-sm bg-[var(--first-blue)]/40" />)}
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-24 rounded-t-full bg-gradient-to-b from-[var(--secondary-blue)] to-[var(--first-blue)] ring-1 ring-[var(--gold)] ring-offset-2 ring-offset-[#faf8f3]" />
          </div>
        </div>
      </div>
    );
  }

  if (id === "conversion") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-[#06172e] via-[var(--first-blue)] to-[#020812] p-3.5 ring-1 ring-white/10">
        <div className="flex items-center justify-between">{line("26%")}<div className="h-2 w-10 rounded-full bg-white/20" /></div>
        <div className="mt-4 grid grid-cols-5 gap-3">
          <div className="col-span-3 space-y-1.5">
            <div className="h-2 w-14 rounded-full bg-emerald-400/50" />
            {line("95%", "bg-white/80")}
            {line("85%", "bg-white/80")}
            {line("55%", "bg-[var(--gold)]")}
            <div className="space-y-1 pt-1">{[0, 1, 2].map((k) => <div key={k} className="flex items-center gap-1"><div className={`h-1.5 w-1.5 rounded-full ${gold}`} />{line("70%", "bg-white/25")}</div>)}</div>
          </div>
          <div className="col-span-2 space-y-1.5 rounded-lg bg-white p-2 shadow-xl">
            <div className="h-0.5 rounded bg-[var(--gold)]" />
            {[0, 1, 2].map((k) => <div key={k} className="h-3 rounded bg-slate-100 ring-1 ring-slate-200" />)}
            <div className={`h-4 rounded ${gold}`} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-40 overflow-hidden rounded-2xl bg-white p-3.5">
      <div className={`-mx-3.5 -mt-3.5 mb-2 h-2 ${gold}`} />
      <div className="flex items-center justify-between">{line("26%", "bg-[var(--first-blue)]/70")}<div className="h-2.5 w-10 rounded-full bg-[var(--first-blue)]" /></div>
      <div className="mt-3 mx-auto h-1.5 w-1/2 rounded-full bg-[var(--first-blue)]" />
      <div className="mt-3 grid grid-cols-3 items-end gap-2">
        {[0, 1, 2].map((k) => (
          <div
            key={k}
            className={`space-y-1 rounded-lg p-1.5 ${k === 1 ? "h-[88px] bg-[var(--first-blue)] ring-1 ring-[var(--gold)]" : "h-[76px] bg-slate-50 ring-1 ring-slate-200"}`}
          >
            <div className={`h-1 w-5 rounded-full ${k === 1 ? gold : "bg-slate-300"}`} />
            <div className={`h-1.5 w-4/5 rounded-full ${k === 1 ? "bg-white/80" : "bg-[var(--first-blue)]/60"}`} />
            {[0, 1, 2].map((r) => <div key={r} className={`h-1 rounded-full ${k === 1 ? "bg-white/25" : "bg-slate-200"}`} />)}
            <div className={`!mt-2.5 h-2.5 rounded ${k === 1 ? gold : "bg-[var(--first-blue)]"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Selector flotante para cambiar de propuesta durante la presentación
function Switcher({ active, index, onOpen, onStep }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
      className={`fixed left-4 z-[60] flex items-center gap-1 rounded-full border border-white/15 bg-[#041121]/90 p-1.5 font-sans text-white shadow-2xl shadow-black/40 backdrop-blur-md sm:left-6 ${
        active.stickyBar ? "bottom-[84px] md:bottom-6" : "bottom-6"
      }`}
    >
      <button type="button" onClick={() => onStep(-1)} className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white" aria-label="Propuesta anterior">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button type="button" onClick={onOpen} className="flex items-center gap-2.5 rounded-full px-2.5 py-1.5 transition hover:bg-white/10" aria-label="Ver todas las propuestas">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--gold)] text-[11px] font-bold">{index + 1}</span>
        <span className="hidden text-[13.5px] font-semibold sm:inline">{active.name}</span>
        <svg className="h-4 w-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      </button>
      <button type="button" onClick={() => onStep(1)} className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white" aria-label="Propuesta siguiente">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </motion.div>
  );
}
