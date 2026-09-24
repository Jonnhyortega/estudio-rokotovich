import { merriweather, workSans } from './font';
import "./globals.css";


export const metadata = {
  title: 'Estudio Jurídico Rokotovich | Asesoramiento Legal y Representación',
  description: 'Asesoramiento legal y representación profesional con años de experiencia en sucesiones, derecho civil, laboral y comercial. Resolvemos conflictos con compromiso y eficiencia en Argentina.',
  keywords: [
    'estudio jurídico', 
    'abogados argentina', 
    'asesoramiento legal', 
    'sucesiones argentina', 
    'abogado sucesiones', 
    'derecho civil', 
    'Estudio Rokotovich', 
    'representación legal', 
    'Lucas Rokotovich'
  ],
  authors: [{ name: 'Estudio Jurídico Rokotovich' }],
  metadataBase: new URL('https://estudiorokotovich.com'),
  alternates: {
    canonical: 'https://estudiorokotovich.com',
  },
  openGraph: {
    title: 'Estudio Jurídico Rokotovich | Asesoramiento Legal y Representación',
    description: 'Asesoramiento legal y representación profesional con años de experiencia en sucesiones, derecho civil y comercial.',
    url: 'https://estudiorokotovich.com',
    siteName: 'Estudio Rokotovich',
    images: [
      {
        url: 'https://res.cloudinary.com/do87isqjr/image/upload/v1790105438/logo_qwnhne.png',
        width: 1200,
        height: 630,
        alt: 'Logo e Identidad de Estudio Jurídico Rokotovich',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Jurídico Rokotovich',
    description: 'Asesoramiento legal y representación profesional con experiencia y compromiso.',
    images: ['https://res.cloudinary.com/do87isqjr/image/upload/v1790105438/logo_qwnhne.png'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/do87isqjr/image/upload/v1790105438/logo_qwnhne.png',
    shortcut: 'https://res.cloudinary.com/do87isqjr/image/upload/v1790105438/logo_qwnhne.png',
    apple: 'https://res.cloudinary.com/do87isqjr/image/upload/v1790105438/logo_qwnhne.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Estudio Jurídico Rokotovich',
  image: 'https://res.cloudinary.com/do87isqjr/image/upload/v1790105438/logo_qwnhne.png',
  '@id': 'https://estudiorokotovich.com/#organization',
  url: 'https://estudiorokotovich.com',
  telephone: '+5491155782731',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.6037,
    longitude: -58.3816,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://estudiorokotovich.com',
  ],
  knowsAbout: [
    'Derecho Sucesorio',
    'Derecho Civil',
    'Asesoramiento Legal',
    'Gestión de Documentación',
    'Procesos Judiciales'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${workSans.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
