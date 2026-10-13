"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BuildingLibraryIcon, ScaleIcon as ScaleOutlineIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

// La escena 3D solo se descarga en escritorio con mouse, sin "reducir movimiento" y con el navegador libre.
const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false, loading: () => null });

function useDeferred3D() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const capable =
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !navigator.connection?.saveData;
    if (!capable) return;
    const enable = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(enable, 1500);
    return () => clearTimeout(id);
  }, []);
  return enabled;
}

export default function Hero({
  title = "Rokotovich Estudio Jurídico",
  subtitle = "Asesoramiento legal claro, estratégico y orientado a resultados.",
  ctaPrimary = { href: "#contacto", label: "Agendar consulta" },
  ctaSecondary = { href: "#areas", label: "Áreas de práctica" },
}) {
  const show3D = useDeferred3D();

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
      {show3D && <ThreeHeroScene />}

      {/* Overlay Gradiente Oscuro para Garantizar Máxima Legibilidad del Texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041121]/95 via-[#041121]/80 to-[#041121]/45 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06172e]/70 via-transparent to-[#020812]/90 pointer-events-none z-[1]" />

      {/* Luces/brillos de fondo sutiles */}
      <div className="absolute top-1/4 -left-32 -z-10 h-96 w-96 rounded-full bg-[var(--gold)]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-[#0a2342]/50 blur-[140px] pointer-events-none" />

      {/* Contenido Principal */}
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Columna Izquierda: Textos y CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start pointer-events-auto">
            {/* Chip superior */}
            <div className="rise mb-6" style={{ "--d": "0.05s" }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur-md shadow-lg">
                <ScaleIcon className="h-4 w-4 text-[var(--gold)]" />
                DEFENSA Y ASESORÍA INTEGRAL
              </span>
            </div>

            {/* Título Principal */}
            <div className="rise-soft" style={{ "--d": "0.12s" }}>
              <h1 className="text-balance text-[38px] sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-[1.08]">
                {title}
              </h1>
            </div>

            {/* Subtítulo */}
            <div className="rise-soft" style={{ "--d": "0.20s" }}>
              <p className="mt-6 text-[18px] sm:text-[21px] leading-[1.6] text-white/90 font-light max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {subtitle}
              </p>
            </div>

            {/* Botones CTA */}
            <div className="rise mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto" style={{ "--d": "0.28s" }}>
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
            </div>

            {/* Badges de confianza */}
            <dl className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:gap-6 text-white/85 sm:grid-cols-3 w-full"
            >
              <div className="rise" style={{ "--d": "0.36s" }}><Badge title="+1000 casos" desc="de experiencia" /></div>
              <div className="rise" style={{ "--d": "0.44s" }}><Badge title="Respuesta rápida" desc="casos nuevos" /></div>
              <div className="rise" style={{ "--d": "0.52s" }}><Badge title="Atención federal" desc="en Argentina" /></div>
            </dl>
          </div>

          {/* Columna Derecha: Tarjetas Flotantes de Lujo Glassmorphism */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-auto">
            <div
              className="rise relative mx-auto w-full max-w-[440px] space-y-5"
              style={{ "--d": "0.3s" }}
            >
              {/* Tarjeta 1 */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                    <ScaleOutlineIcon className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
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
                    <BuildingLibraryIcon className="h-6 w-6 text-blue-300" aria-hidden="true" />
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
                    <ShieldCheckIcon className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[17px]">Respuesta Rápida 24/7</h3>
                    <p className="text-white/75 text-[13.5px] mt-0.5">Atención personalizada y confidencial ante urgencias jurídicas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
