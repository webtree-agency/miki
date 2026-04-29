import Script from 'next/script'

export function Scripts() {
  return (
    <>
      <Script src="/js/jquery-3.2.1.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/main.js?v=3.0" strategy="afterInteractive" />
      <Script src="/js/wow.js" strategy="afterInteractive" />
    </>
  )
}
