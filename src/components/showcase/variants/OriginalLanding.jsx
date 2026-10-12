"use client";

import dynamic from "next/dynamic";
import About from "@/components/about";
import Areas from "@/components/areas";
import WorkAreas from "@/components/WorkAreas";
import StrategicDefense from "@/components/StrategicDefense";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";

// El chatbot no hace falta en la carga inicial: se descarga después, sin SSR
const Chatbot = dynamic(() => import("@/components/chatbot"), { ssr: false });

// Propuesta 01: la landing actual, sin cambios.
export default function OriginalLanding() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StrategicDefense />
        <About />
        <Areas />
        <WorkAreas />
        <Timeline />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </>
  );
}
