import type { Metadata } from 'next'
import {
  Bricolage_Grotesque,
  Manrope,
  Newsreader,
  JetBrains_Mono,
} from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from '@/components/LanguageProvider'
import { CookieConsent } from '@/components/CookieConsent'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-newsreader',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://camacagames.com'),
  title: 'Camaca Games — Juegos pequeños, grandes ratos',
  description:
    'Estudio indie de una persona. Juegos para móvil que respetan tu tiempo.',
  openGraph: {
    title: 'Camaca Games',
    description: 'Juegos pequeños, grandes ratos.',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${manrope.variable} ${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        {/* GTM Consent Mode v2 — analytics denegado por defecto (GDPR) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KBVQHDRB');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBVQHDRB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}
