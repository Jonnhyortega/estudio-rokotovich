"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Puedes ajustar esta paleta desde tu globals.css con variables CSS.
// Acá uso clases Tailwind y var(--first-blue) si ya la tenés definida.
const AREAS_DATA = [
  {
    id: "penal",
    titulo: "Derecho Penal",
    abierto: true, // abierto por defecto como en la referencia
    items: [
      "Querellas y defensas",
      "Delitos económicos y contra la administración pública",
      "Delitos tributarios",
      "Extradiciones",
      "Recursos de casación",
      "Recursos ante los Superiores Tribunales provinciales",
      "Recurso Extraordinario Federal ante la Corte Suprema de Justicia de la Nación",
    ],
  },
  {
    id: "constitucional",
    titulo: "Derecho Constitucional",
    items: [
      "Acciones de amparo y medidas cautelares",
      "Acciones declarativas de inconstitucionalidad",
      "Derechos y garantías fundamentales",
      "Litigios estratégicos y libertad de expresión",
    ],
  },
  {
    id: "administrativo",
    titulo: "Derecho Administrativo",
    items: [
      "Procedimientos y recursos administrativos",
      "Contratación pública y licitaciones",
      "Responsabilidad del Estado",
      "Servicios públicos y regulación",
    ],
  },
  {
    id: "consultoria",
    titulo: "Consultoría",
    items: [
      "Auditoría legal (due diligence)",
      "Opiniones legales (legal opinions)",
      "Diseño de políticas y manuales internos",
      "Capacitación in-company",
    ],
  },
  {
    id: "compliance",
    titulo: "Compliance",
    items: [
      "Programas de integridad (Ley 27.401)",
      "Gestión de riesgos y mapas de calor",
      "Investigaciones internas y canales de denuncia",
      "Capacitación y cultura de cumplimiento",
    ],
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-300 ${
        open ? "rotate-180 text-[var(--gold)]" : "rotate-0 text-white/70"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Areas({ titulo = "Áreas de Práctica", data = AREAS_DATA }) {
  const [openIds, setOpenIds] = useState(() =>
    data.filter((d) => d.abierto).map((d) => d.id)
  );

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="areas" className="relative bg-slate-50 overflow-hidden py-24">
      {/* Elemento de fondo sutil */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-3xl -mr-96 -mt-96 pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Cabecera */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
              <span className="text-[var(--gold)] tracking-[0.2em] text-sm font-bold uppercase">Especialización</span>
              <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--first-blue)]">
              {titulo}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {data.map((area) => {
              const isOpen = openIds.includes(area.id);
              const panelId = `panel-${area.id}`;
              const btnId = `button-${area.id}`;
              return (
                <motion.div
                  variants={itemVariants}
                  key={area.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${isOpen ? 'border-[var(--gold)]/50 shadow-lg' : 'border-slate-200'}`}
                >
                  {/* Header */}
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(area.id)}
                    className="flex w-full items-center justify-between bg-[var(--first-blue)] px-6 py-5 text-left text-white group outline-none"
                  >
                    <span className={`text-[17px] font-semibold transition-colors duration-300 ${isOpen ? 'text-[var(--gold)]' : 'group-hover:text-white/90'}`}>{area.titulo}</span>
                    <span className="text-white/80 shrink-0 ml-4">
                      <Chevron open={isOpen} />
                    </span>
                  </button>

                  {/* Panel */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden bg-white">
                      <div className="px-6 py-7 lg:px-8">
                        <ul className="space-y-3.5 pl-2 text-[16px] leading-relaxed text-slate-600">
                          {area.items.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2.5"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
