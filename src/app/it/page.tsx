import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'Software Gratuito per Negozi di Riparazione Cellulari',
  description:
    'Software POS gratuito per negozi di riparazione cellulari — nessun canone mensile, nessun abbonamento. Schede di riparazione, avvisi SMS e WhatsApp, pagamenti e ricevute su iPhone e iPad. Funziona offline, in italiano.',
  alternates: hreflangAlternates('/it'),
  openGraph: { locale: 'it_IT' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: 'Italiano',
        heroTitle: 'Il gestionale gratuito per il tuo negozio di riparazione cellulari',
        heroAccent: 'gratuito',
        heroSubtitle:
          'Crea schede di riparazione, segui ogni intervento e incassa — tutto da iPhone o iPad. Nessun canone mensile, nessun abbonamento, nessuna registrazione. Scarica e inizia a lavorare in un minuto, completamente in italiano.',
        cta: "Scarica gratis dall'App Store",
        featuresHeading: 'Tutto ciò che serve al tuo negozio',
        features: [
          {
            title: 'Scheda in 30 secondi',
            body: 'Cliente, dispositivo, guasto e preventivo in una sola schermata. Pronta prima che entri il prossimo cliente.',
          },
          {
            title: 'Stato visivo delle riparazioni',
            body: 'Ricevuto → Diagnosi → Riparazione → Pronto → Ritirato. Sai dove si trova ogni dispositivo a colpo d’occhio.',
          },
          {
            title: 'Avvisi via SMS, WhatsApp ed email',
            body: 'Un tocco per avvisare il cliente che il suo dispositivo è pronto. Dal tuo numero, senza costi per messaggio.',
          },
          {
            title: 'Pagamenti',
            body: 'Registra pagamenti in contanti, con carta o misti. Sai sempre chi ha pagato e chi deve ancora farlo.',
          },
          {
            title: 'Ricevute PDF',
            body: 'Ricevuta con il nome del tuo negozio, pronta da stampare via AirPrint o inviare su WhatsApp o per email.',
          },
          {
            title: 'Funziona offline',
            body: 'I tuoi dati restano sul tuo dispositivo. iPad al banco, iPhone in tasca.',
          },
        ],
        stepsHeading: 'Come funziona',
        steps: [
          {
            title: 'Crea la scheda',
            body: 'Arriva un cliente, registri dispositivo e guasto e gli dai il numero della scheda. Meno di 30 secondi.',
          },
          {
            title: 'Segui la riparazione',
            body: 'Fai avanzare il lavoro fase per fase, aggiungi note e tieni informato tutto il team.',
          },
          {
            title: 'Incassa e consegna',
            body: 'Segna la riparazione come pronta, registra il pagamento, avvisa il cliente e chiudi la scheda.',
          },
        ],
        faqHeading: 'Domande frequenti',
        faq: [
          {
            q: 'È davvero gratuito?',
            a: 'Sì. Nessun canone, nessuna carta di credito, nessun periodo di prova. I concorrenti fanno pagare da 39 a 149 $ al mese per le stesse funzioni.',
          },
          {
            q: 'Funziona senza Internet?',
            a: 'Sì, al 100%. I dati sono salvati sul tuo dispositivo. Non serve connessione per creare schede, cambiare stato o registrare pagamenti.',
          },
          {
            q: 'Su quali dispositivi funziona?',
            a: 'Su iPhone e iPad. Su iPad hai un pannello completo per il banco; su iPhone, tutto il negozio in tasca.',
          },
          {
            q: "L'app è in italiano?",
            a: "Sì, l'app è completamente tradotta in italiano — oltre che in inglese, spagnolo, portoghese, francese, tedesco, russo, giapponese e cinese.",
          },
        ],
        footerNote:
          'Creato da chi conosce i negozi di riparazione. Nessun costo nascosto: scaricala oggi e gestisci il tuo negozio in italiano.',
        inEnglish: 'In English',
      }}
    />
  )
}
