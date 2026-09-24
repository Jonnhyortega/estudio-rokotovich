"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const defaultMembers = [
  { id: "1", name: "Dr. Lucas Rokotovich", role: "Abogado", img: "https://res.cloudinary.com/do87isqjr/image/upload/v1758841125/rokotovich_gc0nlv.jpg", lkd: "https://www.linkedin.com/in/lucas-rokotovich-888941130/", email: "estudiorokotovich@gmail.com" },
  { id: "2", name: "Dr. Martín D. Haissiner", role: "Abogado", img: "https://res.cloudinary.com/do87isqjr/image/upload/v1758844341/pexels-brunocortes1969-33344504_sprkp9.jpg", lkd: "https://www.linkedin.com/in/lucas-rokotovich-888941130/", email: "estudiorokotovich@gmail.com" },
  { id: "3", name: "Sebastián Guidi", role: "Abogado", img: "https://res.cloudinary.com/do87isqjr/image/upload/v1758844381/pexels-khezez-34007256_klmunt.jpg", lkd: "https://www.linkedin.com/in/lucas-rokotovich-888941130/", email: "estudiorokotovich@gmail.com" },
  { id: "4", name: "Laura Rey", role: "Administrativa", img: "https://res.cloudinary.com/do87isqjr/image/upload/v1758844403/pexels-olly-3758159_kxru1d.jpg", lkd: "https://www.linkedin.com/in/lucas-rokotovich-888941130/", email: "estudiorokotovich@gmail.com" },
  { id: "5", name: "Agustina Pérez", role: "Abogada", img: "https://res.cloudinary.com/do87isqjr/image/upload/v1758844430/pexels-wendy-petit-2444087-33931448_zk6j1i.jpg", email: "estudiorokotovich@gmail.com" },
  { id: "6", name: "Juan R. López", role: "Abogado", img: "https://res.cloudinary.com/do87isqjr/image/upload/v1758844447/pexels-khezez-34007212_esnfr6.jpg", email: "estudiorokotovich@gmail.com" },
];

export default function TeamCarousel({ members = defaultMembers, className = "" }) {
  const [items, setItems] = useState(members);
  const [translate, setTranslate] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const widthRef = useRef(1);

  const viewportRef = useRef(null);

  useEffect(() => setItems(members), [members]);

  useEffect(() => {
    const setW = () => { if (viewportRef.current) widthRef.current = viewportRef.current.offsetWidth; };
    setW();
    window.addEventListener("resize", setW);
    return () => window.removeEventListener("resize", setW);
  }, []);

  const onTransitionEnd = () => { setAnimating(false); setTranslate(0); };

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTranslate(-100);
    const first = items[0];
    setTimeout(() => setItems(prev => [...prev.slice(1), first]), 250);
  };

  const prev = () => {
    if (animating) return;
    const last = items[items.length - 1];
    setItems(prev => [last, ...prev.slice(0, -1)]);
    setTranslate(-100);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setAnimating(true); setTranslate(0);
    }));
  };

  const onPointerDown = (e) => {
    if (animating) return;
    setIsDragging(true);
    startXRef.current = (e.clientX ?? e.touches?.[0]?.clientX ?? 0);
    deltaXRef.current = 0;
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = (e.clientX ?? e.touches?.[0]?.clientX ?? 0);
    deltaXRef.current = clientX - startXRef.current;
    const percent = (deltaXRef.current / widthRef.current) * 100;
    setAnimating(false);
    setTranslate(percent);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const percent = (deltaXRef.current / widthRef.current) * 100;
    if (percent <= -15) next();
    else if (percent >= 15) prev();
    else { setAnimating(true); setTranslate(0); }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="equipo" className={`relative ${className} py-16 bg-white overflow-hidden`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
            <span className="text-[var(--gold)] tracking-[0.2em] text-sm font-bold uppercase">Excelencia Académica</span>
            <span className="w-8 h-[2px] bg-[var(--gold)]"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--first-blue)]">
            Nuestro Equipo
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mx-auto max-w-[85rem] px-4 mt-6 mb-6">
          <div
            ref={viewportRef}
            className={`relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5 shadow-2xl shadow-[var(--first-blue)]/5 select-none touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={endDrag}
            onDragStart={(e) => e.preventDefault()}
          >
            <div
              onTransitionEnd={onTransitionEnd}
              style={{ transform: `translateX(${translate}%)`, transition: animating ? "transform 320ms ease" : "none" }}
              className="flex gap-2 p-2"
            >
              {items.map((m, idx) => (
                <article key={m.id} className="group w-full md:w-1/4 flex-shrink-0 bg-white border border-slate-100 rounded-[1.5rem] overflow-hidden drop-shadow-sm hover:drop-shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:pointer-events-auto">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-lg ring-1 ring-black/5">
                        {m.lkd && (
                          <a
                            href={m.lkd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--first-blue)] hover:bg-[#ebf3ff] transition-colors"
                            aria-label={`LinkedIn de ${m.name}`}
                          >
                            <FaLinkedin />
                          </a>
                        )}
                        {m.email && (
                          <a
                            href={`mailto:${m.email}`}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--gold)] hover:bg-[#fff9ed] transition-colors"
                            aria-label={`Email a ${m.name}`}
                          >
                            <SiGmail />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-6 bg-white relative">
                    {/* Small inner line design */}
                    <div className="absolute top-0 inset-x-6 h-[1px] bg-slate-100"></div>
                    <h3 className="text-center text-[17px] font-bold text-[var(--first-blue)] tracking-tight">{m.name}</h3>
                    {m.role && <p className="mt-1.5 text-center text-[14px] text-slate-500 font-medium">{m.role}</p>}
                  </div>
                </article>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent opacity-100" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent opacity-100" />
          </div>

          <div className="mt-8 flex md:hidden items-center justify-center gap-4">
            <button onClick={prev} aria-label="Anterior" className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-black/5 hover:bg-slate-50 transition grid place-items-center text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} aria-label="Siguiente" className="h-12 w-12 rounded-full bg-[var(--first-blue)] text-white shadow-md hover:bg-slate-900 transition grid place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </motion.div>

        <motion.button
          variants={itemVariants}
          onClick={prev}
          aria-label="Anterior"
          className="hidden md:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5 hover:scale-110 hover:shadow-2xl transition duration-300 text-slate-700 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-[-2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </motion.button>
        <motion.button
          variants={itemVariants}
          onClick={next}
          aria-label="Siguiente"
          className="hidden md:flex absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[var(--first-blue)] shadow-xl ring-1 ring-black/5 hover:bg-slate-900 hover:scale-110 hover:shadow-2xl transition duration-300 text-white z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
