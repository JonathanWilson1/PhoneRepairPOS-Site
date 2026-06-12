import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'Sistema Grátis para Assistência Técnica de Celular',
  description:
    'Sistema POS gratuito para assistência técnica de celular — sem mensalidade, sem assinatura. Ordens de serviço, avisos por SMS e WhatsApp, pagamentos e recibos no iPhone e iPad. Funciona offline, em português.',
  alternates: hreflangAlternates('/pt'),
  openGraph: { locale: 'pt_BR' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: 'Português',
        heroTitle: 'O sistema grátis para sua assistência técnica de celular',
        heroAccent: 'grátis',
        heroSubtitle:
          'Crie ordens de serviço, acompanhe cada reparo e receba pagamentos — tudo no seu iPhone ou iPad. Sem mensalidade, sem assinatura, sem cadastro. Baixe e comece a usar em um minuto, totalmente em português.',
        cta: 'Baixar grátis na App Store',
        featuresHeading: 'Tudo que sua assistência precisa',
        features: [
          {
            title: 'Ordem de serviço em 30 segundos',
            body: 'Cliente, aparelho, defeito e orçamento em uma única tela. Pronto antes do próximo cliente entrar.',
          },
          {
            title: 'Status visual de cada reparo',
            body: 'Recebido → Diagnosticando → Reparando → Pronto → Retirado. Você sabe onde está cada aparelho num relance.',
          },
          {
            title: 'Avisos por SMS, WhatsApp e e-mail',
            body: 'Um toque para avisar o cliente que o aparelho está pronto. Do seu próprio número, sem custo por mensagem.',
          },
          {
            title: 'Pagamentos',
            body: 'Registre pagamentos em dinheiro, cartão ou divididos. Sempre saiba quem pagou e quem está devendo.',
          },
          {
            title: 'Recibos em PDF',
            body: 'Recibo com o nome da sua loja, pronto para imprimir via AirPrint ou enviar pelo WhatsApp ou e-mail.',
          },
          {
            title: 'Funciona sem internet',
            body: 'Seus dados ficam no seu aparelho. iPad no balcão, iPhone no bolso.',
          },
        ],
        stepsHeading: 'Como funciona',
        steps: [
          {
            title: 'Crie a ordem de serviço',
            body: 'O cliente chega, você registra o aparelho e o defeito, e entrega o número do ticket. Menos de 30 segundos.',
          },
          {
            title: 'Acompanhe o reparo',
            body: 'Avance o serviço por cada etapa, adicione notas e mantenha toda a equipe informada.',
          },
          {
            title: 'Receba e entregue',
            body: 'Marque o reparo como pronto, registre o pagamento, avise o cliente e feche a ordem.',
          },
        ],
        faqHeading: 'Perguntas frequentes',
        faq: [
          {
            q: 'É grátis mesmo?',
            a: 'Sim. Sem mensalidade, sem cartão de crédito, sem período de teste. Os concorrentes cobram de US$ 39 a US$ 149 por mês pelo mesmo.',
          },
          {
            q: 'Funciona sem internet?',
            a: 'Sim, 100%. Seus dados ficam salvos no seu próprio aparelho. Não precisa de internet para criar ordens, mudar status ou registrar pagamentos.',
          },
          {
            q: 'Em quais aparelhos funciona?',
            a: 'No iPhone e no iPad. No iPad você tem um painel completo para o balcão; no iPhone, a assistência inteira no bolso.',
          },
          {
            q: 'Está em português?',
            a: 'Sim, o aplicativo é totalmente traduzido para o português do Brasil — além de inglês, espanhol, francês, alemão, italiano, russo, japonês e chinês.',
          },
        ],
        footerNote:
          'Feito por quem entende de assistência técnica. Sem custo escondido: baixe hoje e gerencie sua loja em português.',
        inEnglish: 'In English',
      }}
    />
  )
}
