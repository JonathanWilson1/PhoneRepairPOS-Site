import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: '手机维修店免费POS应用',
  description:
    '专为手机维修店打造的免费POS应用 — 无月费、无订阅。维修工单、短信/WhatsApp/邮件客户通知、收款记录和PDF收据，支持iPhone和iPad。离线可用，完整中文界面。',
  alternates: hreflangAlternates('/zh'),
  openGraph: { locale: 'zh_CN' },
}

export default function Page() {
  return (
    <LocalizedLanding
      strings={{
        langName: '简体中文',
        heroTitle: '专为手机维修店打造的免费POS应用',
        heroAccent: '免费',
        heroSubtitle:
          '创建工单、跟踪每一单维修、记录收款 — 全部在iPhone或iPad上完成。无月费、无订阅、无需注册账号。下载后一分钟即可开工，完整中文界面。',
        cta: '在App Store免费下载',
        featuresHeading: '维修店需要的功能，一应俱全',
        features: [
          {
            title: '30秒创建工单',
            body: '客户、机型、故障、报价在同一屏幕录入。下一位顾客进门前就能完成。',
          },
          {
            title: '维修状态一目了然',
            body: '已接收 → 检测中 → 维修中 → 已完成 → 已取机。每台设备到了哪一步，一眼看清。',
          },
          {
            title: '短信、WhatsApp、邮件通知客户',
            body: '一键通知客户设备已修好。用您自己的号码发送，没有按条收费。',
          },
          {
            title: '收款记录',
            body: '现金、刷卡或分次付款都能记录。谁付了款、谁还欠着，随时清楚。',
          },
          {
            title: 'PDF收据',
            body: '带店名的收据，可通过AirPrint打印，或经微信、邮件等方式分享文件。',
          },
          {
            title: '离线可用',
            body: '所有数据保存在您自己的设备上。iPad放前台，iPhone装口袋。',
          },
        ],
        stepsHeading: '使用流程',
        steps: [
          {
            title: '创建工单',
            body: '顾客进店，录入设备和故障，给出工单号。30秒内完成。',
          },
          {
            title: '跟进维修',
            body: '按阶段推进工单，添加备注，让全店人员同步进度。',
          },
          {
            title: '收款交机',
            body: '标记维修完成，记录收款，通知顾客取机，关闭工单。',
          },
        ],
        faqHeading: '常见问题',
        faq: [
          {
            q: '真的免费吗？',
            a: '是的。没有月费、不需要信用卡、也没有试用期限制。同类产品每月收费39至149美元。',
          },
          {
            q: '没有网络能用吗？',
            a: '能，100%离线可用。数据保存在您自己的设备上，创建工单、更改状态、记录收款都不需要联网。',
          },
          {
            q: '支持哪些设备？',
            a: '支持iPhone和iPad。iPad上是适合前台的完整看板，iPhone则把整家店装进口袋。',
          },
          {
            q: '有中文界面吗？',
            a: '有，应用已完整翻译为简体中文 — 同时支持英语、西班牙语、葡萄牙语、法语、德语、意大利语、俄语和日语。',
          },
        ],
        footerNote:
          '由懂维修行业的人开发。没有任何隐藏费用：立即下载，用中文管理您的维修店。',
        inEnglish: 'In English',
      }}
    />
  )
}
