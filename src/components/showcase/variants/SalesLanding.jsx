"use client";

import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinary";
import { motion } from "framer-motion";
import { PENAL_ITEMS, STUDIO, whatsappUrl } from "../data";
import { ArrowIcon, BrandMark, CheckIcon, EASE, FaqList, LeadForm, Reveal, WhatsAppIcon } from "../shared";

// Propuesta 04: Landing para venta. Presenta los servicios como propuestas contratables,
// con comparativa de valor, compromisos y manejo de objeciones antes del cierre.

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
];

const PLANS = [
  {
    id: "consulta",
    tag: "Para empezar",
    name: "Consulta & Estrategia",
    pitch: "Entendé tu situación y tus opciones antes de tomar cualquier decisión.",
    price: "Evaluación inicial",
    features: [
      "Análisis completo de tu caso",
      "Revisión de la documentación disponible",
      "Plan de acción con plazos y pasos",
      "Presupuesto claro antes de avanzar",
    ],
    cta: "Reservar consulta",
  },
  {
    id: "penal",
    tag: "Práctica principal",
    name: "Defensa Penal Integral",
    pitch: "Representación firme en cada etapa del proceso, orientada al mejor resultado posible.",
    price: "Honorarios a medida",
    featured: true,
    features: [
      "Querellas y defensas en todas las etapas",
      "Atención inmediata ante detenciones",
      "Delitos económicos, tributarios y contra la administración pública",
      "Recursos de casación y ante la Corte Suprema",
      "Comunicación directa con el abogado a cargo",
      "Reserva absoluta y secreto profesional",
    ],
    cta: "Contratar defensa penal",
  },
  {
    id: "integral",
    tag: "Red de asociados",
    name: "Civil, Laboral & Sucesiones",
    pitch: "Un mismo estudio coordinando a los especialistas que tu caso necesita.",
    price: "Honorarios a medida",
    features: [
      "Accidentes de tránsito y ejecuciones",
      "Redacción de contratos",
      "Trámites sucesorios completos",
      "Despidos, indemnizaciones y ART",
    ],
    cta: "Consultar mi caso",
  },
];

const COMPARISON = [
  ["Estrategia definida desde el primer minuto", true, false],
  ["Plazos, costos y pasos explicados por adelantado", true, false],
  ["Atención inmediata ante urgencias y detenciones", true, false],
  ["Comunicación directa con tu abogado", true, false],
  ["Cobertura en Fuero Federal, PBA y CABA", true, false],
  ["Especialistas coordinados en civil y laboral", true, false],
];

const PROMISES = [
  { title: "Transparencia", text: "Antes de empezar sabés qué vamos a hacer, cuánto tiempo puede llevar y cuánto cuesta." },
  { title: "Reserva absoluta", text: "Tu caso queda protegido por el secreto profesional desde la primera conversación." },
  { title: "Seguimiento real", text: "Comunicación directa y actualizaciones en cada etapa: nunca te quedás sin saber qué pasa." },
];

const STEPS = [
  { title: "Contacto", text: "Nos escribís por WhatsApp, formulario o teléfono." },
  { title: "Evaluación", text: "Analizamos el caso y te presentamos el plan y el presupuesto." },
  { title: "Inicio", text: "Revisamos la documentación y armamos un expediente completo." },
  { title: "Gestión", text: "Llevamos adelante el proceso con seguimiento constante." },
];

const FAQ = [
  {
    q: "¿Cuánto cuesta contratar al estudio?",
    a: "Depende de la complejidad del caso. Por eso, en la evaluación inicial te explicamos plazos, costos y pasos a seguir: sabés el presupuesto antes de comprometerte.",
  },
  {
    q: "¿Por qué no esperar a ver cómo avanza la causa?",
    a: "Porque en materia penal las primeras decisiones condicionan todo el proceso. Contar con una estrategia legal sólida desde el inicio marca la diferencia.",
  },
  {
    q: "¿Voy a hablar con un abogado o con un intermediario?",
    a: "Con el abogado a cargo. Nos involucramos de manera personalizada en cada etapa y mantenemos comunicación directa con cada cliente.",
  },
  {
    q: "¿Pueden actuar fuera de CABA?",
    a: "Sí. Intervenimos en el Fuero Federal en todo el país, en todos los departamentos judiciales de la Provincia de Buenos Aires y en CABA.",
  },
];

function planMessage(plan) {
  return whatsappUrl(`Hola, me interesa el servicio "${plan.name}". Quisiera más información.`);
}

export default function SalesLanding() {
  return (
    <div id="top" className="bg-white font-sans text-slate-800">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Plans />
        <Coverage />
        <Comparison />
        <Process />
        <Promises />
        <Faq />
        <Closing />
      </main>
      <footer className="border-t border-white/10 bg-[#020812] pb-24 pt-10 text-white md:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 md:flex-row lg:px-10">
          <BrandMark dark size={38} />
          <p className="text-center text-[12.5px] text-white/45">
            © {new Date().getFullYear()} {STUDIO.name} · {STUDIO.address}, {STUDIO.city}
          </p>
        </div>
      </footer>
      <MobileStickyBar />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-[var(--gold)] px-4 py-2.5 text-center text-[13px] font-semibold text-white sm:text-[14px]">
      Evaluación inicial de tu caso: plazos, costos y pasos explicados <span className="underline decoration-white/50 underline-offset-4">antes de contratar</span>.
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <BrandMark size={40} />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[14.5px] font-medium text-slate-600 transition hover:text-[var(--first-blue)]">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#servicios" className="rounded-full bg-[var(--first-blue)] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#071a33]">
          Ver servicios
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pb-20 pt-14 sm:pt-20 lg:pb-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-6">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-wider text-[#8f7130]">
            Defensa penal · Civil · Laboral
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            className="mt-6 text-balance font-serif text-[38px] font-bold leading-[1.1] tracking-tight text-[var(--first-blue)] sm:text-[50px] lg:text-[58px]"
          >
            Tu defensa en manos de especialistas. <span className="relative whitespace-nowrap text-[var(--gold)]">Sin sorpresas.<svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" /></svg></span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: EASE }} className="mt-7 max-w-xl text-[18px] leading-relaxed text-slate-600">
            Elegí el servicio que tu caso necesita. Te explicamos plazos, costos y pasos desde el inicio, y te acompañamos con rigurosidad, reserva y dedicación hasta el final.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24, ease: EASE }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#servicios" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-[16px] font-bold text-white shadow-lg shadow-[var(--gold)]/30 transition hover:-translate-y-0.5 hover:bg-[#b58f3b]">
              Ver servicios y contratar
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-[16px] font-semibold text-[var(--first-blue)] transition hover:border-[var(--first-blue)]">
              <WhatsAppIcon className="h-5 w-5 text-[var(--gold)]" />
              Hablar con un abogado
            </a>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-medium text-slate-600">
            {["+1000 casos de experiencia", "Atención federal", "Secreto profesional"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-[var(--gold)]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: EASE }} className="relative lg:col-span-6">
          <div className="relative mx-auto h-[480px] max-w-[520px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--secondary-blue)] via-[var(--first-blue)] to-[#041121] shadow-2xl shadow-[var(--first-blue)]/30">
            <Image src={STUDIO.logo} alt="" width={420} height={420} className="absolute -right-20 -top-16 opacity-[0.08]" />
            <Image loader={cloudinaryLoader} src={STUDIO.directorPhoto} alt={STUDIO.director} fill priority sizes="520px" className="object-contain object-bottom" />
          </div>
          <div className="absolute -left-2 bottom-10 w-[250px] rounded-2xl bg-white p-5 shadow-2xl sm:left-0 lg:-left-8">
            <p className="text-[12px] font-bold uppercase tracking-wider text-slate-500">Incluido en todos los servicios</p>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              {["Presupuesto por adelantado", "Abogado a cargo de tu caso", "Seguimiento en cada etapa"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -right-1 top-8 rounded-2xl bg-[var(--first-blue)] px-5 py-4 text-white shadow-2xl sm:right-0 lg:-right-4">
            <p className="font-serif text-[26px] font-bold leading-none text-[var(--gold)]">+1000</p>
            <p className="mt-1 text-[11.5px] font-semibold uppercase tracking-wider text-white/70">casos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Servicios</p>
          <h2 className="mt-4 text-balance font-serif text-[34px] font-bold leading-tight tracking-tight text-[var(--first-blue)] sm:text-[44px]">
            Elegí cómo querés que te acompañemos
          </h2>
          <p className="mt-4 text-[17px] text-slate-600">Todos los servicios incluyen evaluación del caso y presupuesto antes de iniciar.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1} className={plan.featured ? "lg:-my-4" : ""}>
              <article
                className={`relative flex h-full flex-col rounded-[2rem] p-8 sm:p-9 ${
                  plan.featured
                    ? "bg-gradient-to-b from-[var(--first-blue)] to-[#041121] text-white shadow-2xl shadow-[var(--first-blue)]/40 ring-2 ring-[var(--gold)]"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                <span
                  className={`self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    plan.featured ? "bg-[var(--gold)] text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {plan.tag}
                </span>
                <h3 className={`mt-5 font-serif text-[26px] font-bold ${plan.featured ? "text-white" : "text-[var(--first-blue)]"}`}>{plan.name}</h3>
                <p className={`mt-3 text-[15px] leading-relaxed ${plan.featured ? "text-white/75" : "text-slate-600"}`}>{plan.pitch}</p>
                <p className={`mt-6 border-y py-4 text-[14px] font-bold uppercase tracking-wider ${plan.featured ? "border-white/15 text-[var(--gold)]" : "border-slate-200 text-[var(--first-blue)]"}`}>
                  {plan.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[15px] ${plan.featured ? "text-white/90" : "text-slate-700"}`}>
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={planMessage(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-[15.5px] font-bold transition hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-[var(--gold)] text-white shadow-lg shadow-[var(--gold)]/30 hover:bg-[#b58f3b]"
                      : "bg-[var(--first-blue)] text-white hover:bg-[#071a33]"
                  }`}
                >
                  {plan.cta}
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-slate-500">Lo que cubre la defensa penal</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 flex flex-wrap justify-center gap-2.5">
          {PENAL_ITEMS.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[14px] font-medium text-[var(--first-blue)] shadow-sm">
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="por-que" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Por qué nosotros</p>
          <h2 className="mt-4 text-balance font-serif text-[34px] font-bold leading-tight tracking-tight text-[var(--first-blue)] sm:text-[42px]">
            La diferencia de tener un estudio especializado
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-[var(--first-blue)]/5">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 bg-[var(--first-blue)] px-5 py-4 text-[12px] font-bold uppercase tracking-wider text-white sm:gap-x-6 sm:px-8 sm:text-[13px]">
            <span>Qué obtenés</span>
            <span className="w-20 text-center text-[var(--gold)] sm:w-32">Rokotovich</span>
            <span className="w-20 text-center text-white/60 sm:w-32">Sin especialista</span>
          </div>
          {COMPARISON.map(([label, us, them]) => (
            <div key={label} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 border-t border-slate-100 px-5 py-4 sm:gap-x-6 sm:px-8">
              <span className="text-[14.5px] text-slate-700 sm:text-[15.5px]">{label}</span>
              <span className="flex w-20 justify-center sm:w-32">
                {us && (
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                )}
              </span>
              <span className="flex w-20 justify-center text-[20px] text-slate-300 sm:w-32">{them ? "✓" : "—"}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="scroll-mt-20 bg-[var(--first-blue)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Proceso</p>
          <h2 className="mt-4 font-serif text-[34px] font-bold leading-tight tracking-tight sm:text-[42px]">Cómo empezamos a trabajar</h2>
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gold)] text-[16px] font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 text-[20px] font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Promises() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Nuestro compromiso</p>
            <h2 className="mt-4 font-serif text-[34px] font-bold leading-tight tracking-tight text-[var(--first-blue)] sm:text-[40px]">
              Lo que te garantizamos desde el día uno
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-8">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-b from-[var(--gold)]/[0.08] to-transparent p-7">
                  <span className="font-serif text-[34px] font-bold text-[var(--gold)]">0{i + 1}</span>
                  <h3 className="mt-3 text-[19px] font-bold text-[var(--first-blue)]">{p.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Antes de decidir</p>
          <h2 className="mt-4 font-serif text-[34px] font-bold tracking-tight text-[var(--first-blue)] sm:text-[40px]">Preguntas frecuentes</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <FaqList items={FAQ} />
        </Reveal>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#06172e] via-[var(--first-blue)] to-[#020812] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/15 blur-[140px]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Último paso</p>
          <h2 className="mt-4 text-balance font-serif text-[34px] font-bold leading-tight sm:text-[46px]">
            “Estamos para defender tus derechos y <span className="text-[var(--gold)]">devolver tu libertad</span>.”
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/75">
            Dejanos tus datos y elegí la urgencia. Te contactamos para evaluar tu caso y presentarte la propuesta de trabajo.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[var(--secondary-blue)] ring-2 ring-[var(--gold)]">
              <Image loader={cloudinaryLoader} src={STUDIO.directorPhoto} alt={STUDIO.director} fill sizes="56px" className="object-cover object-top" />
            </div>
            <div>
              <p className="font-bold">{STUDIO.director}</p>
              <p className="text-[13px] text-white/60">{STUDIO.directorRole}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm title="Solicitá tu propuesta" subtitle="Sin compromiso · Respuesta en 24 – 48 h hábiles" cta="Quiero mi propuesta" />
        </Reveal>
      </div>
    </section>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-slate-200 bg-white/95 p-2.5 backdrop-blur md:hidden">
      <div className="min-w-0 flex-1 pl-2">
        <p className="truncate text-[13px] font-bold text-[var(--first-blue)]">Evaluación de tu caso</p>
        <p className="truncate text-[11.5px] text-slate-500">Presupuesto antes de contratar</p>
      </div>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-[var(--gold)] px-5 py-3 text-[14.5px] font-bold text-white">
        <WhatsAppIcon className="h-4 w-4" />
        Consultar
      </a>
    </div>
  );
}
