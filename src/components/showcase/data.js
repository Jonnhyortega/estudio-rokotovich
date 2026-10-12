// Datos compartidos por todas las propuestas de diseño.
// Los textos provienen del sitio actual; los agregados de venta/conversión están en cada variante.

export const STUDIO = {
  name: "Rokotovich Estudio Jurídico",
  shortName: "Estudio Rokotovich",
  director: "Dr. Lucas Rokotovich",
  directorRole: "Abogado Fundador & Director Legal",
  directorPhoto:
    "https://res.cloudinary.com/do87isqjr/image/upload/v1790954189/sin_fondo_p7mpm7.png",
  logo: "/logo-sinfondo.png",
  phoneDisplay: "+54 9 11 5578-2731",
  phoneRaw: "5491155782731",
  email: "estudiorokotovich@gmail.com",
  address: "Av. Leandro N. Alem 424 Piso 6, Depto 602",
  city: "Ciudad Autónoma de Buenos Aires",
  mapsUrl: "https://maps.app.goo.gl/NCcwfz84JGzcBDYZ7",
  hours: "Lunes a Viernes • 9:00 a 18:00",
  linkedin: "https://www.linkedin.com/in/lucas-rokotovich-888941130/",
};

export function whatsappUrl(text = "Hola, quiero hacer una consulta") {
  return `https://wa.me/${STUDIO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export const PENAL_ITEMS = [
  "Querellas y defensas",
  "Delitos económicos y contra la administración pública",
  "Delitos tributarios",
  "Extradiciones",
  "Recursos de casación",
  "Recursos ante los Superiores Tribunales provinciales",
  "Recurso Extraordinario Federal ante la Corte Suprema de Justicia de la Nación",
];

export const ASSOCIATED_AREAS = [
  {
    id: "civil",
    title: "Derecho Civil",
    description:
      "Asesoramiento y representación en reclamos por accidentes de tránsito, ejecuciones, redacción de contratos y trámites sucesorios.",
  },
  {
    id: "laboral",
    title: "Derecho Laboral",
    description:
      "Patrocinio en casos de despidos, reclamos salariales, indemnizaciones y accidentes de trabajo (ART).",
  },
];

export const JURISDICTIONS = [
  {
    id: "federal",
    title: "Fuero Federal",
    subtitle: "Cobertura Nacional — República Argentina",
    description:
      "Representación e intervención legal en Juzgados, Cámaras y Fueros Federales en todo el país.",
    imageSrc: "/mapa-argentina.png",
  },
  {
    id: "pba",
    title: "Provincia de Buenos Aires",
    subtitle: "Departamentos Judiciales de PBA",
    description:
      "Actuación plena en los Fueros Civil, Comercial, Penal, Laboral y de Familia en toda la Provincia.",
    imageSrc: "/mapa-pba.png",
  },
  {
    id: "caba",
    title: "Ciudad Autónoma de Buenos Aires",
    subtitle: "Tribunales Nacionales & CABA",
    description:
      "Patrocinio letrado e intervención en Fuero Nacional y de la Ciudad de Buenos Aires.",
    imageSrc: "/mapa-caba.png",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Asesoramiento Legal",
    description:
      "Puede contactarnos por WhatsApp, formulario o teléfono. Escuchamos su consulta, analizamos el caso y le explicamos plazos, costos y pasos a seguir, brindando un asesoramiento claro y personalizado desde el inicio.",
  },
  {
    title: "Revisión de documentación",
    description:
      "Revisamos la documentación necesaria y, si algo falta, lo asistimos en la gestión, preparando así un expediente completo y sin demoras.",
  },
  {
    title: "Gestión judicial",
    description:
      "Iniciamos y llevamos adelante el proceso ante el juzgado correspondiente, manteniendo siempre un seguimiento y comunicación directa con usted.",
  },
];

export const CASE_TYPES = [
  "Causa penal / detención",
  "Delito económico o tributario",
  "Derecho civil / accidente",
  "Sucesión",
  "Derecho laboral / despido",
  "Otro",
];
