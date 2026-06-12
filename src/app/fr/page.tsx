import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'Logiciel Gratuit pour Atelier de Réparation de Téléphones',
  description:
    'Logiciel de caisse gratuit pour ateliers de réparation de téléphones — sans abonnement ni frais mensuels. Tickets de réparation, alertes SMS et WhatsApp, paiements et reçus sur iPhone et iPad. Fonctionne hors ligne, en français.',
  alternates: hreflangAlternates('/fr'),
  openGraph: { locale: 'fr_FR' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: 'Français',
        heroTitle: 'Le logiciel gratuit pour votre atelier de réparation de téléphones',
        heroAccent: 'gratuit',
        heroSubtitle:
          'Créez des tickets, suivez chaque réparation et encaissez — le tout sur votre iPhone ou iPad. Sans abonnement, sans frais mensuels, sans inscription. Téléchargez et travaillez en une minute, entièrement en français.',
        cta: "Télécharger gratuitement sur l'App Store",
        featuresHeading: "Tout ce qu'il faut à votre atelier",
        features: [
          {
            title: 'Ticket en 30 secondes',
            body: "Client, appareil, panne et devis sur un seul écran. Terminé avant l'arrivée du client suivant.",
          },
          {
            title: 'Suivi visuel des statuts',
            body: "Reçu → Diagnostic → Réparation → Prêt → Récupéré. Vous savez où en est chaque appareil d'un coup d'œil.",
          },
          {
            title: 'Alertes SMS, WhatsApp et e-mail',
            body: "Un geste pour prévenir le client que son appareil est prêt. Depuis votre propre numéro, sans frais par message.",
          },
          {
            title: 'Encaissements',
            body: 'Enregistrez les paiements en espèces, par carte ou mixtes. Sachez toujours qui a payé et qui doit encore.',
          },
          {
            title: 'Reçus PDF',
            body: "Un reçu au nom de votre atelier, prêt à imprimer via AirPrint ou à envoyer par WhatsApp ou e-mail.",
          },
          {
            title: 'Fonctionne hors ligne',
            body: 'Vos données restent sur votre appareil. iPad au comptoir, iPhone dans la poche.',
          },
        ],
        stepsHeading: 'Comment ça marche',
        steps: [
          {
            title: 'Créez le ticket',
            body: "Un client arrive, vous enregistrez l'appareil et la panne, et vous lui donnez son numéro de ticket. Moins de 30 secondes.",
          },
          {
            title: 'Suivez la réparation',
            body: "Faites avancer le travail étape par étape, ajoutez des notes et gardez toute l'équipe informée.",
          },
          {
            title: 'Encaissez et restituez',
            body: 'Marquez la réparation comme prête, enregistrez le paiement, prévenez le client et clôturez le ticket.',
          },
        ],
        faqHeading: 'Questions fréquentes',
        faq: [
          {
            q: "C'est vraiment gratuit ?",
            a: "Oui. Pas d'abonnement, pas de carte bancaire, pas de période d'essai. Les concurrents facturent entre 39 et 149 $ par mois pour la même chose.",
          },
          {
            q: 'Ça fonctionne sans Internet ?',
            a: "Oui, à 100 %. Vos données sont stockées sur votre propre appareil. Aucune connexion n'est nécessaire pour créer des tickets, changer les statuts ou enregistrer des paiements.",
          },
          {
            q: 'Sur quels appareils ?',
            a: "Sur iPhone et iPad. Sur iPad, un tableau de bord complet pour le comptoir ; sur iPhone, tout l'atelier dans la poche.",
          },
          {
            q: "L'application est en français ?",
            a: "Oui, l'application est entièrement traduite en français — ainsi qu'en anglais, espagnol, portugais, allemand, italien, russe, japonais et chinois.",
          },
        ],
        footerNote:
          "Conçu par des gens qui connaissent les ateliers de réparation. Aucun coût caché : téléchargez-le aujourd'hui et gérez votre atelier en français.",
        inEnglish: 'In English',
      }}
    />
  )
}
