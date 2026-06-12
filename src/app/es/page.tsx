import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'POS Gratis para Tiendas de Reparación de Celulares y Móviles',
  description:
    'Sistema POS gratuito para talleres de reparación de celulares — sin mensualidades ni suscripción. Tickets de reparación, avisos por SMS y WhatsApp, pagos y recibos en iPhone y iPad. Funciona sin conexión, en español.',
  alternates: hreflangAlternates('/es'),
  openGraph: { locale: 'es' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: 'Español',
        heroTitle: 'El POS gratis para talleres de reparación de celulares',
        heroAccent: 'gratis',
        heroSubtitle:
          'Crea tickets, controla cada reparación y cobra — todo desde tu iPhone o iPad. Sin mensualidades, sin suscripción, sin registro. Descárgala y empieza a trabajar en un minuto, completamente en español.',
        cta: 'Descargar gratis en el App Store',
        featuresHeading: 'Todo lo que tu taller necesita',
        features: [
          {
            title: 'Tickets en 30 segundos',
            body: 'Cliente, dispositivo, falla y presupuesto en una sola pantalla. Listo antes de que entre el siguiente cliente.',
          },
          {
            title: 'Estados visuales',
            body: 'Recibido → Diagnosticando → Reparando → Listo → Entregado. Sabes dónde está cada equipo de un vistazo.',
          },
          {
            title: 'Avisos por SMS, WhatsApp y correo',
            body: 'Un toque para avisar al cliente que su equipo está listo. Desde tu propio número, sin costo por mensaje.',
          },
          {
            title: 'Cobros y pagos',
            body: 'Registra pagos en efectivo, tarjeta o mixtos. Siempre sabes quién pagó y quién debe.',
          },
          {
            title: 'Recibos en PDF',
            body: 'Recibo con el nombre de tu taller, listo para imprimir por AirPrint o enviar por WhatsApp o correo.',
          },
          {
            title: 'Funciona sin internet',
            body: 'Todos tus datos viven en tu dispositivo. iPad en el mostrador, iPhone en el bolsillo.',
          },
        ],
        stepsHeading: 'Cómo funciona',
        steps: [
          {
            title: 'Crea el ticket',
            body: 'Llega un cliente, registras el equipo y la falla, y le das su número de ticket. Menos de 30 segundos.',
          },
          {
            title: 'Sigue la reparación',
            body: 'Avanza el trabajo por cada etapa, agrega notas y mantén a todo el equipo al tanto.',
          },
          {
            title: 'Cobra y entrega',
            body: 'Marca la reparación como lista, registra el pago, avisa al cliente y cierra el ticket.',
          },
        ],
        faqHeading: 'Preguntas frecuentes',
        faq: [
          {
            q: '¿De verdad es gratis?',
            a: 'Sí. Sin mensualidades, sin tarjeta de crédito, sin periodo de prueba. La competencia cobra entre $39 y $149 dólares al mes por lo mismo.',
          },
          {
            q: '¿Funciona sin conexión a internet?',
            a: 'Sí, al 100%. Tus datos se guardan en tu propio dispositivo. No necesitas internet para crear tickets, cambiar estados ni registrar pagos.',
          },
          {
            q: '¿En qué dispositivos funciona?',
            a: 'En iPhone y iPad. En el iPad tienes un panel completo para el mostrador; en el iPhone llevas el taller en el bolsillo.',
          },
          {
            q: '¿Está en español?',
            a: 'Sí, la aplicación está completamente traducida al español — además de inglés, portugués, francés, alemán, italiano, ruso, japonés y chino.',
          },
        ],
        footerNote:
          'Creada por gente que conoce los talleres de reparación. Sin costos ocultos: descárgala hoy y administra tu taller en español.',
        inEnglish: 'In English',
      }}
    />
  )
}
