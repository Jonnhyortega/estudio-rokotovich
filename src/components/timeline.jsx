"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Asesoramiento Legal",
    description:
      "Puede contactarnos por WhatsApp, formulario o teléfono. Escuchamos su consulta, analizamos el caso y le explicamos plazos, costos y pasos a seguir, brindando un asesoramiento claro y personalizado desde el inicio.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Revisión de documentación",
    description:
      "Le enviamos un formulario simple con los datos necesarios y revisamos la documentación (partidas, DNI, títulos, certificados). Si algo falta lo asistimos en la gestión, preparando así un expediente completo y sin demoras.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
        <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Gestión judicial",
    description:
      "Con la documentación reunida iniciamos el proceso sucesorio en el juzgado, tramitamos la Declaración de Herederos y finalizamos con la inscripción de los bienes a nombre de los herederos, manteniendo siempre un seguimiento y comunicación directa.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
              Cómo actuamos
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--first-blue)] tracking-tight font-serif"
          >
            Etapas del servicio del proceso sucesorio
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[27.5px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isRightSide = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-start md:items-center">
                  
                  {/* Node Icon inside Timeline Line */}
                  <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 shadow-xl shadow-slate-900/20 flex items-center justify-center z-10 top-6 md:top-1/2 md:-translate-y-1/2 ring-[6px] ring-slate-50">
                    {step.icon}
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${
                      isRightSide ? "md:ml-auto md:pr-0 md:pl-12" : "md:mr-auto md:pl-0 md:pr-12"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isRightSide ? 30 : -30, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 relative hover:-translate-y-1 transition-transform duration-300"
                    >
                      {/* Desktop Arrow */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white transform rotate-45 border-slate-100 ${
                          isRightSide ? "left-[-10.5px] border-b border-l gap-0" : "right-[-10.5px] border-t border-r"
                        }`}
                      ></div>

                      {/* Mobile Arrow */}
                      <div className="md:hidden absolute left-[-8.5px] top-10 w-4 h-4 bg-white border-b border-l border-slate-100 transform rotate-45"></div>

                      <h3 className="text-[20px] font-bold text-slate-900 tracking-tight font-serif mb-4 flex items-center gap-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px]">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
