"use client";

import dynamic from "next/dynamic";

// El chatbot no hace falta en la carga inicial: se descarga después, sin SSR
const Chatbot = dynamic(() => import("./chatbot"), { ssr: false });

export default function LazyChatbot() {
  return <Chatbot />;
}
