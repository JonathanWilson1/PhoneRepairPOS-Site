import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'スマホ修理店向け無料POSアプリ',
  description:
    'スマホ修理店のための無料POSアプリ — 月額料金なし、サブスクなし。修理伝票の作成、SMS・WhatsApp・メールでの顧客通知、会計、PDF領収書をiPhoneとiPadで。オフラインで動作、日本語対応。',
  alternates: hreflangAlternates('/ja'),
  openGraph: { locale: 'ja_JP' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: '日本語',
        heroTitle: 'スマホ修理店のための無料POSアプリ',
        heroAccent: '無料',
        heroSubtitle:
          '修理伝票の作成、進捗管理、会計までiPhoneとiPadで完結。月額料金なし、サブスクなし、アカウント登録も不要。ダウンロードして1分で使い始められます。完全日本語対応。',
        cta: 'App Storeで無料ダウンロード',
        featuresHeading: '修理店に必要な機能をすべて',
        features: [
          {
            title: '30秒で伝票作成',
            body: 'お客様情報・端末・症状・見積もりを1画面で入力。次のお客様が来る前に完了します。',
          },
          {
            title: 'ステータスを見える化',
            body: '受付 → 診断中 → 修理中 → 完了 → 引き渡し済み。すべての端末の状況がひと目でわかります。',
          },
          {
            title: 'SMS・WhatsApp・メールで顧客通知',
            body: '修理完了をワンタップでお知らせ。自分の電話番号から送信、メッセージ料金もかかりません。',
          },
          {
            title: '会計管理',
            body: '現金・カード・分割払いを記録。誰が支払い済みで誰が未払いか、常に把握できます。',
          },
          {
            title: 'PDF領収書',
            body: '店舗名入りの領収書をAirPrintで印刷、またはメールやWhatsAppで送信できます。',
          },
          {
            title: 'オフラインで動作',
            body: 'データはすべて端末内に保存。カウンターにはiPad、ポケットにはiPhone。',
          },
        ],
        stepsHeading: '使い方',
        steps: [
          {
            title: '伝票を作成',
            body: 'お客様が来店したら、端末と症状を登録して伝票番号をお渡しします。30秒以内で完了。',
          },
          {
            title: '修理を管理',
            body: '作業を各ステータスへ進め、メモを追加し、スタッフ全員で進捗を共有します。',
          },
          {
            title: '会計して引き渡し',
            body: '修理完了をマークし、支払いを記録し、お客様に通知して伝票をクローズします。',
          },
        ],
        faqHeading: 'よくある質問',
        faq: [
          {
            q: '本当に無料ですか？',
            a: 'はい。月額料金なし、クレジットカード登録なし、無料体験期間という概念もありません。競合製品は同じ機能に月額39〜149ドルを課金しています。',
          },
          {
            q: 'インターネットなしで使えますか？',
            a: 'はい、100%オフラインで動作します。データは端末内に保存され、伝票作成・ステータス変更・会計記録に通信は不要です。',
          },
          {
            q: '対応端末は？',
            a: 'iPhoneとiPadに対応。iPadではカウンター向けのフルダッシュボード、iPhoneでは店舗全体をポケットの中に。',
          },
          {
            q: '日本語に対応していますか？',
            a: 'はい、アプリは完全に日本語化されています。ほかに英語・スペイン語・ポルトガル語・フランス語・ドイツ語・イタリア語・ロシア語・中国語にも対応しています。',
          },
        ],
        footerNote:
          '修理店の現場を知る開発者が作りました。隠れたコストは一切なし。今すぐダウンロードして、日本語で店舗を管理しましょう。',
        inEnglish: 'In English',
      }}
    />
  )
}
