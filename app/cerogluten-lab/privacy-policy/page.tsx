'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const content = {
  en: {
    app: 'CeroGluten Lab',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: May 23, 2026',
    backLink: '← Back to home',
    sections: [
      {
        heading: 'About the app',
        body: 'CeroGluten Lab is an educational and entertainment app made by Camaca Games.',
      },
      {
        heading: 'What we collect',
        body: 'We use Firebase Analytics (Google) to log anonymous usage events: which phases are completed, when a game ends, or when this screen is visited. No personal data is collected — no name, no email, no account.',
      },
      {
        heading: "What we don't collect",
        body: 'We do not request or store any personally identifiable information. There is no user account or location tracking.',
      },
      {
        heading: 'Local storage',
        body: 'We only save your language preference on the device (AsyncStorage). This data never leaves your phone.',
      },
      {
        heading: 'Third parties',
        body: 'Firebase Analytics operates under Google\'s privacy policy: policies.google.com/privacy',
      },
      {
        heading: 'Contact',
        body: 'hello@camacagames.com',
      },
    ],
  },
  es: {
    app: 'CeroGluten Lab',
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 23 de mayo de 2026',
    backLink: '← Volver al inicio',
    sections: [
      {
        heading: 'Sobre la app',
        body: 'CeroGluten Lab es una app educativa y de entretenimiento de Camaca Games.',
      },
      {
        heading: 'Qué recopilamos',
        body: 'Usamos Firebase Analytics (Google) para registrar eventos de uso anónimos: qué fases se completan, cuándo termina una partida o cuándo se visita esta pantalla. No se recogen datos personales — sin nombre, sin correo, sin cuenta.',
      },
      {
        heading: 'Qué no recopilamos',
        body: 'No solicitamos ni almacenamos ningún dato de identificación personal. No hay cuenta de usuario ni seguimiento de ubicación.',
      },
      {
        heading: 'Almacenamiento local',
        body: 'Solo guardamos tu preferencia de idioma en el dispositivo (AsyncStorage). Este dato nunca sale de tu teléfono.',
      },
      {
        heading: 'Terceros',
        body: 'Firebase Analytics opera bajo la política de privacidad de Google: policies.google.com/privacy',
      },
      {
        heading: 'Contacto',
        body: 'hello@camacagames.com',
      },
    ],
  },
}

export default function CeroGlutenLabPrivacyPolicyPage() {
  const { lang } = useLanguage()
  const c = content[lang] ?? content.es

  return (
    <div className="min-h-screen bg-paper py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="font-sans text-sm text-lila hover:opacity-80 transition-opacity mb-12 inline-block"
        >
          {c.backLink}
        </Link>

        <div className="mt-8 mb-12">
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">{c.app}</p>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink tracking-tight mb-3">
            {c.title}
          </h1>
          <p className="font-sans text-sm text-muted">{c.lastUpdated}</p>
        </div>

        <div className="flex flex-col gap-10">
          {c.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-2">
              <h2 className="font-display font-semibold text-base text-ink-2 pl-3 border-l-2 border-lila">
                {section.heading}
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed whitespace-pre-line pl-3">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-rule">
          <p className="font-mono text-xs text-muted text-center">© 2026 Camaca Games</p>
        </div>
      </div>
    </div>
  )
}
