"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  SparklesIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const INITIAL_MESSAGES = [
  {
    from: "bot",
    content:
      "Hola, bienvenido a Rokotovich Estudio Jurídico. ¿En qué tema legal necesitas asesoramiento o asistencia penal urgente?",
  },
];

const QUICK_REPLIES = [
  "¿Cómo agendo una consulta?",
  "¿En qué fueros trabajan?",
  "¿Atienden emergencias penales?",
  "¿Dónde queda el estudio?",
];

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const toggleChat = () => setChatOpen(!chatOpen);

  useEffect(() => {
    if (chatOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  const sendQuickReply = (text) => {
    handleSend(text);
  };

  const handleSend = async (textToSend) => {
    const text = textToSend || input.trim();
    if (!text) return;

    const newMessages = [...messages, { from: "user", content: text }];
    setMessages(newMessages);
    if (!textToSend) setInput("");
    setLoading(true);

    setTimeout(() => {
      let botReply = "";
      const lower = text.toLowerCase();

      if (lower.includes("consulta") || lower.includes("agend") || lower.includes("turno")) {
        botReply =
          "Puedes agendar una consulta personalizada y reservada directamente haciendo clic en el botón 'Agendar Consulta' o comunicándote por WhatsApp al +54 9 11 5578-2731.";
      } else if (lower.includes("emergencia") || lower.includes("urgente") || lower.includes("detenido") || lower.includes("preso")) {
        botReply =
          "Atendemos urgencias y detenciones penales las 24 horas en Fuero Federal, PBA y CABA. Por favor, comunícate de inmediato vía WhatsApp al +54 9 11 5578-2731.";
      } else if (lower.includes("fuero") || lower.includes("lugar") || lower.includes("donde") || lower.includes("zona") || lower.includes("cobertura")) {
        botReply =
          "Brindamos representación legal con cobertura nacional en Fuero Federal, Provincia de Buenos Aires (PBA) y Ciudad Autónoma de Buenos Aires (CABA).";
      } else {
        botReply =
          "En Rokotovich Estudio Jurídico abordamos tu causa con máxima rigurosidad y reserva. Te invitamos a enviarnos un mensaje por WhatsApp para revisar tu caso detalladamente.";
      }

      setMessages((prev) => [...prev, { from: "bot", content: botReply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* OVERLAY RESPONSIVE MÓVIL (z-40 para no tapar la Navbar z-50 ni el drawer z-110) */}
      {chatOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={toggleChat}
        />
      )}

      {/* BOTÓN FLOTANTE (z-40 para que quede por debajo del Navbar z-50 y del drawer del menú z-110) */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[var(--gold)] rounded-full text-white shadow-2xl shadow-[var(--gold)]/30 hover:bg-[#b58f3b] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none ${
          chatOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir asistente virtual"
      >
        <ChatBubbleLeftRightIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      {/* VENTANA DEL CHAT (z-50) */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-[92vw] sm:w-[380px] max-w-[400px] h-[550px] max-h-[80vh] flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${
          chatOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-50 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <header className="bg-[var(--first-blue)] p-4 sm:p-4.5 flex items-center justify-between text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
              <SparklesIcon className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[15px] sm:text-[16px] leading-tight flex items-center gap-2">
                Rokotovich IA
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              </h3>
              <p className="text-white/70 text-[11.5px] mt-0.5 tracking-wide">
                Asistente Virtual en Línea
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer relative z-10"
            aria-label="Cerrar chat"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        {/* LISTA DE MENSAJES */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 bg-[#F8F9FA]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                  m.from === "user"
                    ? "bg-[var(--first-blue)] text-white rounded-br-none"
                    : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-none"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-1.5 bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} className="h-1" />
        </div>

        {/* CONTROLES (Quick Replies + Form) */}
        <div className="bg-white border-t border-slate-100 flex flex-col shrink-0 px-4 pt-3 pb-4">
          {/* QUICK REPLIES */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {QUICK_REPLIES.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => sendQuickReply(q)}
                className="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full text-[12px] font-medium hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)] transition-all shadow-xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* FORM INPUT */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center relative w-full"
          >
            <input
              type="text"
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[13.5px] pl-3.5 pr-11 py-2.5 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-transparent transition-all placeholder:text-slate-400"
              placeholder="Escribe tu consulta aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-1 top-1 bottom-1 aspect-square bg-[var(--gold)] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white hover:bg-[#b58f3b] transition-colors shadow-sm"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
