"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Chatbot from "@/components/chatbot";
import { ASSOCIATED_AREAS, JURISDICTIONS, PENAL_ITEMS, PROCESS_STEPS, STUDIO, whatsappUrl } from "../data";
import { ArrowIcon, BrandMark, EASE, Reveal } from "../shared";

// Propuesta 02: Institucional. Tono editorial y sobrio, foco en trayectoria, valores y respaldo.

const NAV = [
  { href: "#estudio", label: "El Estudio" },
  { href: "#practica", label: "Práctica" },
  { href: "#jurisdicciones", label: "Jurisdicciones" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#contacto", label: "Contacto" },
];

const VALUES = [
  { n: "I", title: "Compromiso", text: "Asumimos cada causa como propia y acompañamos al cliente en todas las etapas del proceso." },
  { n: "II", title: "Reserva", text: "Confidencialidad absoluta, protegida por el secreto profesional desde la primera consulta." },
  { n: "III", title: "Rigurosidad", text: "Análisis minucioso de cada detalle para sostener una representación técnica y firme." },
  { n: "IV", title: "Empatía", text: "Atención personalizada: entendemos la urgencia y la carga humana de cada situación." },
];

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function InstitutionalLanding() {
  return (
    <div id="top" className="bg-[#faf8f3] font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <QuoteBand />
        <Studio />
        <Practice />
        <Jurisdictions />
        <Method />
        <ContactBlock />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra superior de datos institucionales */}
      <div className={`hidden bg-[var(--first-blue)] text-[12.5px] text-white/75 transition-all duration-300 md:block ${scrolled ? "h-0 overflow-hidden" : "h-9"}`}>
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-10">
          <span className="tracking-wide">{STUDIO.address} · {STUDIO.city}</span>
          <div className="flex items-center gap-6">
            <span>{STUDIO.hours}</span>
            <a href={`mailto:${STUDIO.email}`} className="hover:text-[var(--gold)]">{STUDIO.email}</a>
          </div>
        </div>
      </div>
      <div className={`border-b transition-all duration-300 ${scrolled ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur" : "border-transparent bg-[#faf8f3]"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10">
          <BrandMark />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="group relative py-1 text-[14.5px] font-medium text-slate-600 transition-colors hover:text-[var(--first-blue)]">
                {n.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="hidden rounded-full border border-[var(--first-blue)] px-5 py-2.5 text-[14px] font-semibold text-[var(--first-blue)] transition hover:bg-[var(--first-blue)] hover:text-white lg:inline-flex"
          >
            Solicitar entrevista
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-[var(--first-blue)] lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M10 17h10" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 lg:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3.5 font-serif text-[17px] text-[var(--first-blue)]">
                {n.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-[var(--first-blue)] py-3.5 text-center font-semibold text-white">
              Solicitar entrevista
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Retícula editorial sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,35,66,0.06) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="pb-6 lg:col-span-7 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.32em] text-[var(--gold)]">Buenos Aires · República Argentina</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="text-balance font-serif text-[40px] font-bold leading-[1.08] tracking-tight text-[var(--first-blue)] sm:text-[54px] lg:text-[66px]"
          >
            Rigor técnico y compromiso personal en <em className="font-normal italic text-[var(--secondary-blue)]">cada causa</em>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="mt-7 max-w-xl text-[18px] leading-relaxed text-slate-600"
          >
            {STUDIO.name}. Asesoramiento legal claro, estratégico y orientado a resultados, con especialización en defensa penal y una red de profesionales asociados.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: EASE }} className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="group inline-flex items-center gap-3 rounded-full bg-[var(--first-blue)] px-7 py-4 text-[15.5px] font-semibold text-white shadow-xl shadow-[var(--first-blue)]/20 transition hover:-translate-y-0.5 hover:bg-[#071a33]">
              Solicitar una entrevista
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#estudio" className="inline-flex items-center gap-2 px-2 py-4 text-[15.5px] font-semibold text-[var(--first-blue)] underline decoration-[var(--gold)] decoration-2 underline-offset-8 hover:text-[var(--secondary-blue)]">
              Conocer el estudio
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 divide-x divide-slate-300 border-y border-slate-300 py-6"
          >
            {[
              ["+1000", "casos de experiencia"],
              ["3", "jurisdicciones"],
              ["24 h", "atención de urgencias"],
            ].map(([n, l]) => (
              <div key={l} className="px-3 first:pl-0 sm:px-6">
                <dt className="font-serif text-[28px] font-bold text-[var(--first-blue)] sm:text-[34px]">{n}</dt>
                <dd className="mt-1 text-[11.5px] font-semibold uppercase leading-snug tracking-wider text-slate-500 sm:text-[12.5px]">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Retrato del director en arco */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-[420px] lg:col-span-5"
        >
          <div className="absolute -inset-3 rounded-t-full border border-[var(--gold)]/60" />
          <div className="relative h-[460px] overflow-hidden rounded-t-full bg-gradient-to-b from-[var(--secondary-blue)] via-[var(--first-blue)] to-[#041121] sm:h-[540px]">
            <Image src={STUDIO.logo} alt="" width={360} height={360} className="absolute left-1/2 top-16 -translate-x-1/2 opacity-[0.07]" />
            <Image unoptimized src={STUDIO.directorPhoto} alt={`${STUDIO.director} — ${STUDIO.directorRole}`} fill priority sizes="420px" className="object-contain object-bottom" />
          </div>
          <div className="absolute -bottom-px left-0 right-0 bg-white/95 px-6 py-4 backdrop-blur">
            <p className="font-serif text-[17px] font-bold text-[var(--first-blue)]">{STUDIO.director}</p>
            <p className="text-[13px] text-slate-500">{STUDIO.directorRole}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative bg-[var(--first-blue)] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="font-serif text-[80px] leading-none text-[var(--gold)]">“</span>
          <p className="-mt-6 font-serif text-[24px] italic leading-snug sm:text-[32px] lg:text-[38px]">
            En momentos donde la libertad y los derechos están en juego, contar con una estrategia legal sólida marca la diferencia desde el primer minuto.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-[var(--gold)]" />
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-white/60">Compromiso & firmeza legal</p>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({ index, eyebrow, title, align = "left", light = false }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`mb-5 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-serif text-[15px] italic text-[var(--gold)]">{index}</span>
        <span className={`h-px w-10 ${light ? "bg-white/30" : "bg-slate-300"}`} />
        <span className={`text-[12px] font-bold uppercase tracking-[0.3em] ${light ? "text-white/70" : "text-slate-500"}`}>{eyebrow}</span>
      </div>
      <h2 className={`text-balance font-serif text-[34px] font-bold leading-tight tracking-tight sm:text-[44px] ${light ? "text-white" : "text-[var(--first-blue)]"}`}>{title}</h2>
    </div>
  );
}

function Studio() {
  return (
    <section id="estudio" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="El Estudio" title="Trayectoria & excelencia al servicio de cada cliente." />
          </Reveal>
          <div className="space-y-6 text-[17px] leading-relaxed text-slate-600 lg:col-span-7 lg:pt-14">
            <Reveal delay={0.05}>
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[64px] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[var(--gold)]">
                En <strong className="font-semibold text-[var(--first-blue)]">Rokotovich Estudio Jurídico</strong> brindamos asesoramiento legal integral, eficaz y estratégico. Nuestro compromiso es absoluto: acompañamos a cada cliente en la defensa de sus derechos e intereses.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Contamos con un equipo de profesionales especializados en distintas ramas del Derecho. Esto nos permite asegurar una mirada integral y multifacética de cada situación.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-[19px] italic text-[var(--first-blue)]">
                “Cuando llevamos adelante una causa, asumimos un compromiso y una atención personalizada a cada cliente, abordando el caso con empatía y profesionalismo.”
              </blockquote>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="group border-b border-slate-300 py-9 sm:px-7 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0">
              <span className="font-serif text-[15px] italic text-[var(--gold)]">{v.n}</span>
              <h3 className="mt-3 font-serif text-[23px] font-bold text-[var(--first-blue)]">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section id="practica" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="02" eyebrow="Áreas de práctica" title="Defensa penal estratégica, técnica e integral." />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-slate-200 bg-[#faf8f3] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-[26px] font-bold text-[var(--first-blue)]">Derecho Penal</h3>
                <span className="rounded-full bg-[var(--first-blue)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Práctica principal</span>
              </div>
              <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">
                Nos involucramos de manera personalizada en cada etapa del proceso, con la rigurosidad, reserva y dedicación que cada caso exige.
              </p>
              <ol className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {PENAL_ITEMS.map((item, i) => (
                  <li key={item} className="flex gap-5 py-3.5 text-[15.5px] text-slate-700">
                    <span className="w-8 shrink-0 font-serif italic text-[var(--gold)]">{ROMAN[i]}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-slate-500">Red de profesionales asociados</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">
                Los problemas jurídicos suelen requerir un abordaje más amplio. Por eso trabajamos de forma coordinada con abogados especialistas.
              </p>
            </Reveal>
            {ASSOCIATED_AREAS.map((a, i) => (
              <Reveal key={a.id} delay={0.15 + i * 0.08}>
                <div className="group rounded-[1.5rem] border border-slate-200 p-7 transition hover:border-[var(--gold)]/60 hover:shadow-xl hover:shadow-[var(--first-blue)]/5">
                  <h3 className="font-serif text-[21px] font-bold text-[var(--first-blue)]">{a.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Jurisdictions() {
  return (
    <section id="jurisdicciones" className="scroll-mt-24 bg-gradient-to-b from-[var(--first-blue)] to-[#041121] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="03" eyebrow="Alcance territorial" title="Patrocinio en las principales jurisdicciones del país." light />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-3">
          {JURISDICTIONS.map((j, i) => (
            <Reveal key={j.id} delay={i * 0.1} className="bg-[var(--first-blue)] p-8 sm:p-10">
              <div className="relative mx-auto h-36 w-36">
                <Image src={j.imageSrc} alt={`Mapa ${j.title}`} fill sizes="144px" className="object-contain drop-shadow-[0_10px_24px_rgba(200,162,77,0.35)]" />
              </div>
              <p className="mt-8 text-[11.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">{j.subtitle}</p>
              <h3 className="mt-2 font-serif text-[22px] font-bold">{j.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{j.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodologia" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="04" eyebrow="Metodología" title="Cómo actuamos" align="center" />
        </Reveal>
        <ol className="relative mt-16 grid grid-cols-1 gap-10 bg-[linear-gradient(#cbd5e1,#cbd5e1)] bg-[length:100%_1px] bg-[position:0_28px] bg-no-repeat max-md:bg-none md:grid-cols-3 md:gap-8">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.12} className="relative">
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-[var(--gold)] bg-[#faf8f3] font-serif text-[20px] italic text-[var(--gold)]">
                {ROMAN[i]}
              </span>
              <h3 className="mt-6 font-serif text-[22px] font-bold text-[var(--first-blue)]">{s.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">{s.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ContactBlock() {
  const rows = [
    { label: "Teléfono / WhatsApp", value: STUDIO.phoneDisplay, href: whatsappUrl() },
    { label: "Email", value: STUDIO.email, href: `mailto:${STUDIO.email}` },
    { label: "Oficina", value: `${STUDIO.address}, ${STUDIO.city}`, href: STUDIO.mapsUrl, note: "Atención presencial con turno" },
    { label: "Horarios", value: STUDIO.hours },
  ];
  return (
    <section id="contacto" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <SectionHeading index="05" eyebrow="Contacto" title="Una conversación reservada es el primer paso." />
          <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
            Contanos tu caso. Nuestro equipo evalúa tu situación y responde dentro de las próximas 24 – 48 horas hábiles.
          </p>
          <div className="mt-8 rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/[0.07] p-5 text-[14.5px] leading-relaxed text-slate-700">
            <strong className="text-[var(--first-blue)]">Confidencialidad absoluta:</strong> tu consulta es estrictamente privada y se encuentra protegida por el secreto profesional.
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--first-blue)] px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-[#071a33]">
              Escribir por WhatsApp
            </a>
            <a href={`mailto:${STUDIO.email}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-4 text-[15px] font-semibold text-[var(--first-blue)] transition hover:border-[var(--first-blue)]">
              Enviar un email
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-3 sm:gap-6">
                <dt className="text-[12px] font-bold uppercase tracking-[0.22em] text-slate-500">{r.label}</dt>
                <dd className="sm:col-span-2">
                  {r.href ? (
                    <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-serif text-[18px] text-[var(--first-blue)] hover:text-[var(--gold)]">
                      {r.value}
                    </a>
                  ) : (
                    <span className="font-serif text-[18px] text-[var(--first-blue)]">{r.value}</span>
                  )}
                  {r.note && <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-wide text-[var(--gold)]">{r.note}</p>}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#041121] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-10">
        <div className="max-w-sm">
          <BrandMark dark />
          <p className="mt-5 text-[14px] leading-relaxed text-white/60">Asesoramiento legal claro, estratégico y orientado a resultados.</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-[14px] text-white/70">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-[var(--gold)]">{n.label}</a>
          ))}
          <a href={STUDIO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">LinkedIn</a>
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[12px] text-white/45">
        © {new Date().getFullYear()} {STUDIO.name}. Todos los derechos reservados. ·{" "}
        <a href="https://www.astralvisionestudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">Desarrollado por Astral Vision</a>
      </div>
    </footer>
  );
}
