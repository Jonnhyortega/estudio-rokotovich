import { Merriweather, Work_Sans } from 'next/font/google';

// Fuentes variables: un solo archivo por familia/estilo cubre todos los pesos.
export const merriweather = Merriweather({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  // Sin preload: no compite con el CSS y la fuente principal en la carga inicial
  preload: false,
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
