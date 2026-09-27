import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'Telefon Tamir Servisleri için Ücretsiz POS Uygulaması',
  description:
    'Cep telefonu tamir servisleri için ücretsiz POS uygulaması — aylık ücret yok, abonelik yok. Servis fişleri, SMS ve WhatsApp bildirimleri, ödemeler ve makbuzlar iPhone ve iPad’de. İnternetsiz çalışır, tamamen Türkçe.',
  alternates: hreflangAlternates('/tr'),
  openGraph: { locale: 'tr_TR' },
}

export default function Page() {
  return (
    <LocalizedLanding
      lang="tr"
      strings={{
        langName: 'Türkçe',
        heroTitle: 'Telefon tamir servisleri için ücretsiz POS',
        heroAccent: 'ücretsiz',
        heroSubtitle:
          'Servis fişi açın, her tamiri takip edin ve ödemeyi alın — hepsi iPhone veya iPad’inizden. Aylık ücret yok, abonelik yok, kayıt yok. İndirin ve bir dakika içinde, tamamen Türkçe olarak çalışmaya başlayın.',
        cta: 'App Store’dan ücretsiz indirin',
        featuresHeading: 'Servisinizin ihtiyacı olan her şey',
        features: [
          {
            title: '30 saniyede servis fişi',
            body: 'Müşteri, cihaz, arıza ve fiyat teklifi tek ekranda. Bir sonraki müşteri gelmeden hazır.',
          },
          {
            title: 'Görsel durum takibi',
            body: 'Teslim alındı → Arıza tespiti → Tamirde → Hazır → Teslim edildi. Her cihazın nerede olduğunu bir bakışta görün.',
          },
          {
            title: 'SMS, WhatsApp ve e-posta bildirimleri',
            body: 'Cihazı hazır olduğunda müşteriye tek dokunuşla haber verin. Kendi numaranızdan, mesaj başına ücret olmadan.',
          },
          {
            title: 'Tahsilat ve ödemeler',
            body: 'Nakit, kart veya karma ödemeleri kaydedin. Kimin ödediğini, kimin borçlu olduğunu her zaman bilin.',
          },
          {
            title: 'PDF makbuzlar',
            body: 'Servisinizin adını taşıyan makbuz; AirPrint ile yazdırmaya ya da WhatsApp veya e-postayla göndermeye hazır.',
          },
          {
            title: 'İnternetsiz çalışır',
            body: 'Tüm verileriniz kendi cihazınızda. Tezgâhta iPad, cebinizde iPhone.',
          },
        ],
        stepsHeading: 'Nasıl çalışır?',
        steps: [
          {
            title: 'Servis fişini açın',
            body: 'Müşteri geldiğinde cihazı ve arızayı kaydedin, fiş numarasını verin. 30 saniyeden kısa sürer.',
          },
          {
            title: 'Tamiri takip edin',
            body: 'İşi her aşamada ilerletin, not ekleyin ve tüm ekibi güncel tutun.',
          },
          {
            title: 'Ödemeyi alın ve teslim edin',
            body: 'Tamiri hazır olarak işaretleyin, ödemeyi kaydedin, müşteriye haber verin ve fişi kapatın.',
          },
        ],
        faqHeading: 'Sıkça sorulan sorular',
        faq: [
          {
            q: 'Gerçekten ücretsiz mi?',
            a: 'Evet. Aylık ücret yok, kredi kartı yok, deneme süresi yok. Rakipler aynı özellikler için ayda 39 ile 149 dolar arasında ücret alıyor.',
          },
          {
            q: 'İnternet bağlantısı olmadan çalışır mı?',
            a: 'Evet, yüzde 100. Verileriniz kendi cihazınızda saklanır. Fiş açmak, durum değiştirmek veya ödeme kaydetmek için internete gerek yoktur.',
          },
          {
            q: 'Hangi cihazlarda çalışır?',
            a: 'iPhone ve iPad’de. iPad’de tezgâh için eksiksiz bir kontrol paneli, iPhone’da ise servisiniz cebinizde.',
          },
          {
            q: 'Uygulama Türkçe mi?',
            a: 'Evet, uygulama tamamen Türkçeye çevrildi — ayrıca İngilizce, İspanyolca, Portekizce, Fransızca, Almanca, İtalyanca, Japonca, Rusça, Çince, Vietnamca, Tayca, İbranice ve Arapça dillerinde de kullanılabilir. Toplam 14 dil.',
          },
        ],
        footerNote:
          'Tamir servislerini yakından tanıyan insanlar tarafından yapıldı. Gizli maliyet yok: bugün indirin ve servisinizi Türkçe yönetin.',
        inEnglish: 'In English',
      }}
    />
  )
}
