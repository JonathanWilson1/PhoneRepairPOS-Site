// Shared hreflang map for the localized landing pages + English homepage.
// Every page in the set declares the full map so Google sees a consistent cluster.
export function hreflangAlternates(canonical: string) {
  return {
    canonical,
    languages: {
      en: '/',
      es: '/es',
      'pt-BR': '/pt',
      fr: '/fr',
      de: '/de',
      it: '/it',
      ja: '/ja',
      ru: '/ru',
      'zh-Hans': '/zh',
      'x-default': '/',
    },
  }
}
