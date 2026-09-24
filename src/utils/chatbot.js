const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;

async function callChatAPI(message, history = [], context = "") {
  if (!API_URL) {
    // Modo estático sin backend
    const lower = message.toLowerCase();
    if (lower.includes("honorario") || lower.includes("precio") || lower.includes("cuanto") || lower.includes("costo")) {
      return "Los honorarios dependen de la complejidad y particularidad del caso. En la primera consulta evaluamos tu situación y te brindamos una propuesta transparente. ¿Querés agendar una consulta con nosotros?";
    }
    if (lower.includes("donde") || lower.includes("ubicacion") || lower.includes("direccion") || lower.includes("oficina") || lower.includes("mapa")) {
      return "Nos encontramos en Av. Leandro N. Alem 424 Piso 6, Depto 602, CABA. La atención presencial es con turno previo.";
    }
    if (lower.includes("horario") || lower.includes("hora") || lower.includes("abierto")) {
      return "Nuestro horario de atención es de Lunes a Viernes de 9:00 a 18:00 hs. Para urgencias penales contamos con guardia 24/7.";
    }
    return "Gracias por tu mensaje. Como asistente virtual de Estudio Rokotovich, puedo orientarte con información general. Para evaluar tu situación específica, podés contactarnos de forma directa por WhatsApp o a través de nuestro formulario de contacto.";
  }

  try {
    const payload = { message, history, context };
    const res = await fetch(`${API_URL}/api/chat/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`API error ${res.status}`);
    }

    const { response } = await res.json();
    return response;
  } catch (err) {
    return "Gracias por escribirnos. En este momento el servidor de consultas IA está fuera de línea, pero podés contactarnos directamente vía WhatsApp o email.";
  }
}

export default callChatAPI;