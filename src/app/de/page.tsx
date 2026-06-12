import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'Kostenlose Kassen-App für Handy-Reparatur-Werkstätten',
  description:
    'Kostenlose POS-App für Handy-Reparatur-Werkstätten — keine Monatsgebühr, kein Abo. Reparatur-Tickets, Kundenbenachrichtigung per SMS und WhatsApp, Zahlungen und Belege auf iPhone und iPad. Funktioniert offline, auf Deutsch.',
  alternates: hreflangAlternates('/de'),
  openGraph: { locale: 'de_DE' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: 'Deutsch',
        heroTitle: 'Die kostenlose Kassen-App für Handy-Reparatur-Werkstätten',
        heroAccent: 'kostenlose',
        heroSubtitle:
          'Tickets erstellen, jede Reparatur verfolgen und kassieren — alles auf iPhone oder iPad. Keine Monatsgebühr, kein Abo, keine Registrierung. Herunterladen und in einer Minute loslegen, komplett auf Deutsch.',
        cta: 'Kostenlos im App Store laden',
        featuresHeading: 'Alles, was Ihre Werkstatt braucht',
        features: [
          {
            title: 'Ticket in 30 Sekunden',
            body: 'Kunde, Gerät, Fehler und Kostenvoranschlag auf einem Bildschirm. Fertig, bevor der nächste Kunde hereinkommt.',
          },
          {
            title: 'Visueller Reparaturstatus',
            body: 'Angenommen → Diagnose → Reparatur → Fertig → Abgeholt. Sie sehen auf einen Blick, wo jedes Gerät steht.',
          },
          {
            title: 'Benachrichtigung per SMS, WhatsApp & E-Mail',
            body: 'Ein Tipp, und der Kunde weiß, dass sein Gerät fertig ist. Von Ihrer eigenen Nummer, ohne Kosten pro Nachricht.',
          },
          {
            title: 'Zahlungen erfassen',
            body: 'Bar, Karte oder gemischt. Sie wissen immer, wer bezahlt hat und wer noch offen ist.',
          },
          {
            title: 'PDF-Belege',
            body: 'Beleg mit dem Namen Ihrer Werkstatt — per AirPrint drucken oder per WhatsApp oder E-Mail senden.',
          },
          {
            title: 'Funktioniert offline',
            body: 'Ihre Daten bleiben auf Ihrem Gerät. iPad am Tresen, iPhone in der Tasche.',
          },
        ],
        stepsHeading: 'So funktioniert es',
        steps: [
          {
            title: 'Ticket erstellen',
            body: 'Ein Kunde kommt herein, Sie erfassen Gerät und Fehler und geben ihm seine Ticketnummer. Unter 30 Sekunden.',
          },
          {
            title: 'Reparatur verfolgen',
            body: 'Schieben Sie den Auftrag durch jede Phase, fügen Sie Notizen hinzu und halten Sie das ganze Team auf dem Laufenden.',
          },
          {
            title: 'Kassieren und übergeben',
            body: 'Reparatur als fertig markieren, Zahlung erfassen, Kunden benachrichtigen, Ticket schließen.',
          },
        ],
        faqHeading: 'Häufige Fragen',
        faq: [
          {
            q: 'Ist die App wirklich kostenlos?',
            a: 'Ja. Keine Monatsgebühr, keine Kreditkarte, keine Testphase. Wettbewerber verlangen für dasselbe 39 bis 149 $ pro Monat.',
          },
          {
            q: 'Funktioniert sie ohne Internet?',
            a: 'Ja, zu 100 %. Ihre Daten werden auf Ihrem eigenen Gerät gespeichert. Zum Erstellen von Tickets, Ändern von Status oder Erfassen von Zahlungen ist keine Verbindung nötig.',
          },
          {
            q: 'Auf welchen Geräten läuft sie?',
            a: 'Auf iPhone und iPad. Auf dem iPad ein vollständiges Dashboard für den Tresen, auf dem iPhone die ganze Werkstatt in der Tasche.',
          },
          {
            q: 'Gibt es die App auf Deutsch?',
            a: 'Ja, die App ist vollständig ins Deutsche übersetzt — außerdem in Englisch, Spanisch, Portugiesisch, Französisch, Italienisch, Russisch, Japanisch und Chinesisch.',
          },
        ],
        footerNote:
          'Entwickelt von Leuten, die Reparatur-Werkstätten kennen. Keine versteckten Kosten: Laden Sie die App noch heute und führen Sie Ihre Werkstatt auf Deutsch.',
        inEnglish: 'In English',
      }}
    />
  )
}
