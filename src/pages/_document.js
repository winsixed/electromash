import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ООО «Электромашсервис»",
    "url": "https://electromash.example.com",
    "logo": "https://electromash.example.com/favicon.ico",
    "contactPoint": [{ "@type": "ContactPoint", "telephone": "+74951234567", "contactType": "customer service" }]
  };
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>
        <meta name="description" content="Надёжный поставщик промышленных электродвигателей с индивидуальным подходом."/>
        <meta property="og:title" content="Электромашсервис — Промышленные электродвигатели"/>
        <meta property="og:description" content="Индивидуальные решения и точная логистика для предприятий и монтажных организаций."/>
        <meta property="og:image" content="/favicon.ico"/>
        <meta property="og:url" content="https://electromash.example.com"/>
        <link rel="canonical" href="https://electromash.example.com"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <body>
        <a href="#main-content" className="skip-link">Перейти к содержимому</a>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}
