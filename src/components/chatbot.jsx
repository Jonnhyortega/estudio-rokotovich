'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowUpIcon, ChatBubbleLeftRightIcon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/solid'
import callChatAPI from '@/utils/chatbot'

// Contexto para asistente
const context_chatbot = `
Sos Rokotovich IA, el asistente virtual oficial de Rokotovich Estudio Jurídico.

Tu función es brindar orientación inicial, información general y acompañamiento al visitante del sitio web.
No reemplazás el asesoramiento legal profesional, pero ayudás al usuario a entender sus opciones y a conectarse con el equipo del estudio.

📘 Sobre el estudio:
Rokotovich Estudio Jurídico se dedica al asesoramiento y gestión integral de casos en diversas áreas del derecho, con un enfoque claro, estratégico y orientado a resultados.  
El estudio se caracteriza por la atención personalizada, la ética profesional y la rapidez de respuesta.

⚖️ Áreas de práctica principales:
- Derecho Laboral (despidos, accidentes de trabajo, reclamos, indemnizaciones)
- Derecho Civil y Comercial (contratos, daños y perjuicios, sucesiones, cobros)
- Derecho de Familia (divorcios, alimentos, régimen de visitas, filiación)
- Derecho Penal (defensas, denuncias, causas penales)
- Derecho Previsional (jubilaciones, pensiones, reajustes)
- Accidentes de tránsito y reclamos ante aseguradoras

🎯 Tu objetivo:
- Responder con lenguaje claro, respetuoso y profesional.
- Ofrecer información general o pasos básicos a seguir según el caso.
- Si el tema requiere revisión personalizada, sugerí al usuario que agende una consulta con un profesional del estudio.
- Nunca des consejos jurídicos definitivos ni valores exactos de indemnizaciones.

💬 Ejemplo de tono:
“Puedo orientarte con la información general, pero para analizar tu caso en detalle te recomiendo agendar una consulta con un abogado del estudio. ¿Querés que te ayude con eso?”

👔 Firma institucional:
Terminá las respuestas formales con algo como:
“— Rokotovich IA | Asistente del Estudio Jurídico Rokotovich”
`

export default function Chatbot() {
  const initialBotMessage = '¡Hola! Soy Rokotovich IA. ¿En qué puedo ayudarte hoy? ⚖️'
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', content: initialBotMessage }])
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  // 🎵 Audios del cliente
  const botResponseSound = useRef(null)
  const userSendSound = useRef(null)
  const typingSound = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      botResponseSound.current = new Audio('/sounds/bot-response.mp3')
      userSendSound.current = new Audio('/sounds/send.mp3')
      typingSound.current = new Audio('/sounds/typing.mp3')
    }
  }, [])

  const quickReplies = [
    '¿Qué áreas legales manejan?',
    'Quiero agendar una consulta',
    '¿Atienden emergencias penales?'
  ]

  const toggleChat = () => setChatOpen(o => !o)

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    scrollToBottom()
  }, [messages, chatOpen, scrollToBottom])

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && setChatOpen(false)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const send = async text => {
    setMessages(m => [...m, { from: 'user', content: text }])
    setHistory(h => [...h, { role: 'user', content: text }])
    setInput('')

    // 🔊 sonido al enviar
    if (userSendSound.current) {
      userSendSound.current.currentTime = 0
      userSendSound.current.play().catch(() => {})
    }

    setLoading(true)

    let reply
    switch (text) {
      case 'Quiero agendar una consulta':
      case '¿Cómo puedo agendar una consulta?':
        reply = (
          <span className="leading-relaxed block">
            Podés agendar tu consulta desde nuestra sección de contacto o escribiendo directamente por WhatsApp:&nbsp;
            <a
              href="https://wa.me/5491155782731?text=Hola%2C%20quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] underline underline-offset-2 hover:text-yellow-600 transition-colors inline-flex items-center gap-1 mt-1 font-semibold"
            >
              Hablar por WhatsApp
              <Image
                width={18}
                height={18}
                src="https://img.icons8.com/color/48/whatsapp--v1.png"
                alt="whatsapp"
                unoptimized
              />
            </a>
          </span>
        )
        break

      case '¿Qué áreas legales manejan?':
      case '¿Qué áreas de práctica abordan?':
        reply = (
          <ul className="list-none space-y-1.5 text-[14.5px]">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>Derecho Civil & Comercial</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>Derecho Penal</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>Derecho Laboral</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>Derecho de Familia</li>
          </ul>
        )
        break

      case '¿Atienden emergencias penales?':
      case '¿Atienden consultas urgentes?':
        reply = (
          <span className="leading-relaxed">
            Sí, entendemos que hay situaciones que no pueden esperar. Contamos con atención de urgencias 24/7 para casos penales.<br/><br/>
            Comunícate de manera urgente a nuestro teléfono directo haciendo clic <a href="#contacto" className="text-[var(--gold)] font-medium hover:underline">aquí</a>.
          </span>
        )
        break

      default:
        try {
          // 🔊 typing sound ON
          if (typingSound.current) {
            typingSound.current.loop = true
            typingSound.current.currentTime = 0
            typingSound.current.volume = 0.3
            typingSound.current.play().catch(() => {})
          }

          reply = await callChatAPI(text, history, context_chatbot)
        } catch {
          reply = 'Lo siento, en este momento experimentamos un problema técnico procesando consultas. Por favor, intenta enviarnos un mensaje por WhatsApp.'
        }
    }

    // parar sonido typing
    if (typingSound.current) typingSound.current.pause()

    setMessages(m => [...m, { from: 'bot', content: reply }])
    setHistory(h => [
      ...h,
      { role: 'assistant', content: typeof reply === 'string' ? reply : '' },
    ])

    // 🔊 sonido al recibir respuesta
    if (typeof reply === 'string' && botResponseSound.current) {
      botResponseSound.current.currentTime = 0
      botResponseSound.current.volume = 0.7
      botResponseSound.current.play().catch(() => {})
    }

    setLoading(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const v = input.trim()
    if (!v) return
    send(v)
  }

  return (
    <>
      {/* OVERLAY RESPONSIVE MÓVIL */}
      {chatOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[4900] sm:hidden"
          onClick={toggleChat}
        />
      )}

      {/* BOTÓN FLOTANTE */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-[4999] flex items-center justify-center w-[60px] h-[60px] bg-[var(--gold)] rounded-full text-white shadow-xl shadow-[var(--gold)]/20 hover:bg-[#b58f3b] hover:-translate-y-1 transition-all duration-300 focus:outline-none ${
          chatOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat"
      >
        <ChatBubbleLeftRightIcon className="w-8 h-8" />
      </button>

      {/* VENTANA DEL CHAT */}
      <div
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[5000] w-[90%] sm:w-[380px] max-w-[400px] h-[600px] max-h-[85vh] flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${
          chatOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <header className="bg-[var(--first-blue)] p-[18px] flex items-center justify-between text-white relative overflow-hidden shrink-0">
          {/* Deco de fondo suave */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none"></div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
              <SparklesIcon className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[16px] leading-tight flex items-center gap-2">
                Rokotovich IA 
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </h3>
              <p className="text-white/70 text-[12px] mt-0.5 tracking-wide">Asistente Virtual en Línea</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer relative z-10 -mr-1"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        {/* LISTA DE MENSAJES */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 bg-[#F8F9FA]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm ${
                  m.from === 'user'
                    ? 'bg-[var(--first-blue)] text-white rounded-br-sm'
                    : 'bg-white text-slate-800 border border-black/5 rounded-bl-sm'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-1.5 bg-white border border-black/5 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-bounce [animation-delay:150ms]"></span>
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-bounce [animation-delay:300ms]"></span>
              </div>
            </div>
          )}
          <div ref={bottomRef} className="h-1" />
        </div>

        {/* CONTROLES (Quick Replies + Form) */}
        <div className="bg-white border-t border-slate-100 flex flex-col shrink-0 px-4 pt-3 pb-4">
          
          {/* QUICK REPLIES */}
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => send(q)}
                className="inline-block cursor-pointer bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-[13px] font-medium hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)] transition-all shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>

          {/* FORM INPUT */}
          <form onSubmit={handleSubmit} className="flex flex-col relative w-full">
            <input
              type="text"
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] pl-4 pr-12 py-3.5 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-transparent transition-all placeholder:text-slate-400"
              placeholder="Escribe tu consulta aquí..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-[var(--gold)] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white hover:bg-[#b58f3b] focus:outline-none transition-colors shadow-md shadow-[var(--gold)]/20"
            >
              <ArrowUpIcon className="h-5 w-5" />
            </button>
          </form>
          <div className="text-center mt-2.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">Asistente virtual desarrollado para Estudio Rokotovich</span>
          </div>
        </div>

      </div>
    </>
  )
}
