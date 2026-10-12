"use client";

import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinary";
import { motion } from "framer-motion";
import { JURISDICTIONS, STUDIO, whatsappUrl } from "../data";
import { ArrowIcon, BrandMark, CheckIcon, EASE, FaqList, LeadForm, Reveal, WhatsAppIcon } from "../shared";

// Propuesta 03: Landing de conversión. Un único objetivo: que el visitante deje su consulta.
// Sin navegación que distraiga, formulario visible en el primer pantallazo y CTA repetido.

const RISKS = [
  {
    title: "Declarar sin asesoramiento",
    text: "Lo que se dice en las primeras horas puede condicionar toda la causa. Antes de declarar, consultá.",
  },
  {
    title: "Dejar correr los plazos",
    text: "Los plazos procesales son cortos y no se recuperan. Una presentación a tiempo cambia el escenario.",
  },
  {
    title: "Avanzar sin estrategia",
    text: "Cada etapa exige una decisión técnica. Una estrategia sólida marca la diferencia desde el primer minuto.",
  },
];

const STEPS = [
  { n: "01", title: "Dejá tu consulta", text: "Completá el formulario en menos de un minuto o escribinos por WhatsApp." },
  { n: "02", title: "Evaluamos tu caso", text: "Un abogado analiza tu situación y te contacta para escucharte con reserva." },
  { n: "03", title: "Recibís un plan claro", text: "Te explicamos plazos, costos y pasos a seguir antes de avanzar." },
];

const BENEFITS = [
  "Atención inmediata ante emergencias y detenciones",
  "Comunicación directa con el abogado a cargo",
  "Explicación clara de plazos, costos y pasos",
  "Confidencialidad protegida por el secreto profesional",
  "Actuación en Fuero Federal, PBA y CABA",
  "Red de especialistas en civil y laboral",
];

const FAQ = [
  {
    q: "¿Cuánto tarda en responder el estudio?",
    a: "Las urgencias penales (detenciones, allanamientos, citaciones) se atienden de inmediato. El resto de las consultas se responde dentro de las 24 – 48 horas hábiles.",
  },
  {
    q: "¿La consulta es confidencial?",
    a: "Sí. Todo lo que nos cuentes es estrictamente privado y está protegido por el secreto profesional desde el primer contacto.",
  },
  {
    q: "¿Cómo sé cuánto me va a costar?",
    a: "En la primera conversación analizamos el caso y te explicamos plazos, costos y pasos a seguir, para que decidas con toda la información.",
  },
  {
    q: "¿Atienden fuera de Buenos Aires?",
    a: "Sí. Intervenimos en Juzgados, Cámaras y Fueros Federales en todo el país, además de la Provincia de Buenos Aires y CABA.",
  },
  {
    q: "Mi problema no es penal, ¿pueden ayudarme?",
    a: "Sí. Trabajamos de forma coordinada con abogados especialistas en Derecho Civil (accidentes, contratos, sucesiones) y Derecho Laboral (despidos, indemnizaciones, ART).",
  },
];

export default function ConversionLanding() {
  return (
    <div id="top" className="bg-white font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Risks />
        <Steps />
        <Authority />
        <Faq />
        <FinalCta />
      </main>
      <footer className="bg-[#020812] pb-24 pt-8 text-center text-[12.5px] text-white/45 md:pb-8">
        © {new Date().getFullYear()} {STUDIO.name} · {STUDIO.address}, {STUDIO.city}
      </footer>
      <MobileStickyBar />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <BrandMark dark size={42} />
        <div className="flex items-center gap-3">
          <a href={`tel:+${STUDIO.phoneRaw}`} className="hidden text-right sm:block">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/55">Llamanos ahora</span>
            <span className="block text-[16px] font-bold text-white">{STUDIO.phoneDisplay}</span>
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-[14px] font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            <WhatsAppIcon className="h-4 w-4 text-[var(--gold)]" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#06172e] via-[var(--first-blue)] to-[#020812] pb-20 pt-28 text-white sm:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[var(--gold)]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--secondary-blue)]/40 blur-[140px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="inline-flex items-center gap-2.5 rounded-full bg-emerald-400/10 px-4 py-1.5 text-[13px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Abogados disponibles para urgencias penales
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            className="mt-6 text-balance text-[36px] font-extrabold leading-[1.08] tracking-tight sm:text-[48px] lg:text-[58px]"
          >
            ¿Te citaron, te imputaron o detuvieron a un familiar? <span className="text-[var(--gold)]">Hablá hoy</span> con un abogado penalista.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: EASE }} className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/80">
            Defensa penal estratégica, técnica e integral. Analizamos tu caso con reserva absoluta y te decimos con claridad qué hacer y cuáles son los próximos pasos.
          </motion.p>
          <motion.ul initial="h" animate="v" variants={{ v: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }} className="mt-8 space-y-3">
            {["Respuesta inmediata ante detenciones y allanamientos", "Te explicamos plazos y costos desde la primera consulta", "Más de 1000 casos de experiencia"].map((b) => (
              <motion.li key={b} variants={{ h: { opacity: 0, x: -12 }, v: { opacity: 1, x: 0 } }} className="flex items-start gap-3 text-[16px] text-white/90">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {b}
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gradient-to-b from-[var(--secondary-blue)] to-[var(--first-blue)] ring-2 ring-[var(--gold)]">
              <Image loader={cloudinaryLoader} src={STUDIO.directorPhoto} alt={STUDIO.director} fill sizes="56px" className="object-cover object-top" />
            </div>
            <div>
              <p className="text-[15px] font-bold">{STUDIO.director}</p>
              <p className="text-[13px] text-white/60">{STUDIO.directorRole}</p>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }} className="lg:col-span-5">
          <LeadForm id="formulario" title="Evaluación inicial de tu caso" subtitle="Te contactamos a la brevedad. Sin compromiso." cta="Quiero que me contacten" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 md:flex-row md:justify-between lg:px-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-slate-500">Actuamos en</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {JURISDICTIONS.map((j) => (
            <li key={j.id} className="flex items-center gap-2.5 text-[14.5px] font-semibold text-[var(--first-blue)]">
              <span className="relative h-7 w-7">
                <Image src={j.imageSrc} alt="" fill sizes="28px" className="object-contain" />
              </span>
              {j.title}
            </li>
          ))}
          <li className="text-[14.5px] font-semibold text-[var(--first-blue)]">Corte Suprema de Justicia</li>
        </ul>
      </div>
    </section>
  );
}

function Risks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Por qué actuar ahora</p>
          <h2 className="mt-4 text-balance text-[32px] font-extrabold leading-tight tracking-tight text-[var(--first-blue)] sm:text-[42px]">
            En una causa penal, las primeras decisiones definen el resultado.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {RISKS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--first-blue)]/5">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--gold)]/15 text-[20px] font-black text-[var(--gold)]">!</span>
                <h3 className="mt-6 text-[20px] font-bold text-[var(--first-blue)]">{r.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a href="#formulario" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-[16px] font-bold text-white shadow-lg shadow-[var(--gold)]/30 transition hover:-translate-y-0.5 hover:bg-[#b58f3b]">
            Consultar mi caso ahora
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-[var(--first-blue)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Así de simple</p>
          <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">De tu consulta a un plan de acción, en 3 pasos.</h2>
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.12} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <span className="text-[56px] font-black leading-none text-[var(--gold)]/30">{s.n}</span>
              <h3 className="mt-4 text-[21px] font-bold">{s.title}</h3>
              <p className="mt-2.5 text-[15.5px] leading-relaxed text-white/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative h-[440px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[var(--secondary-blue)] to-[#041121]">
            <Image loader={cloudinaryLoader} src={STUDIO.directorPhoto} alt={STUDIO.director} fill sizes="448px" className="object-contain object-bottom" />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white p-5 shadow-2xl sm:-right-6">
            <p className="text-[30px] font-extrabold leading-none text-[var(--first-blue)]">+1000</p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-slate-500">casos de experiencia</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Quién te representa</p>
          <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-tight text-[var(--first-blue)] sm:text-[40px]">
            Un abogado que se involucra en cada etapa de tu caso.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            Entendemos la complejidad y la urgencia que implica una causa penal. Por eso acompañamos a cada cliente con la rigurosidad, reserva y dedicación que el caso exige, con un objetivo claro: <strong className="text-[var(--first-blue)]">defender tus derechos y resguardar tu libertad.</strong>
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Preguntas frecuentes</p>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[var(--first-blue)] sm:text-[40px]">Resolvemos tus dudas</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <FaqList items={FAQ} />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#06172e] via-[var(--first-blue)] to-[#020812] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--gold)]/15 blur-[140px]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <h2 className="text-balance text-[34px] font-extrabold leading-tight tracking-tight sm:text-[46px]">
            No esperes a que sea tarde. <span className="text-[var(--gold)]">Consultá hoy.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/75">
            Estamos para defender tus derechos. Dejá tus datos o escribinos directo: un abogado te va a responder.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)] px-7 py-4 text-[16px] font-bold text-white shadow-lg shadow-[var(--gold)]/30 transition hover:-translate-y-0.5 hover:bg-[#b58f3b]">
              <WhatsAppIcon className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
            <a href={`tel:+${STUDIO.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[16px] font-bold text-white ring-1 ring-white/30 transition hover:bg-white/10">
              Llamar ahora
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm title="Dejá tu consulta" subtitle="Respuesta dentro de las 24 – 48 h hábiles. Urgencias, de inmediato." cta="Enviar consulta" compact />
        </Reveal>
      </div>
    </section>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2.5 backdrop-blur md:hidden">
      <a href={`tel:+${STUDIO.phoneRaw}`} className="flex items-center justify-center rounded-xl bg-[var(--first-blue)] py-3.5 text-[15px] font-bold text-white">
        Llamar
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[var(--gold)] py-3.5 text-[15px] font-bold text-white">
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
