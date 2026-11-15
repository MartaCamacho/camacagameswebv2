'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const content = {
  en: {
    app: 'CeroGluten Lab',
    title: 'Terms and Conditions',
    lastUpdated: 'Last updated: November 15, 2026',
    backLink: '← Back to home',
    sections: [
      {
        heading: '1. About the app',
        body: `CeroGluten Lab is an educational and entertainment app about coeliac disease, developed and published by Camaca Games. By downloading or using it you accept these terms.`,
      },
      {
        heading: '2. Not medical advice',
        body: `We are not doctors or dietitians. The content is designed to help you learn about coeliac disease in an entertaining way and does not replace the advice of a health professional. Decisions about your diet or health should always be made with your doctor or dietitian.`,
      },
      {
        heading: '3. Your account',
        body: `Creating an account is optional. If you create one:\n\n• The information you give us must be true, and your account is personal.\n• You are responsible for keeping your password safe.\n• You must be at least 14 years old, or have your parents' or guardians' permission.\n• You can delete your account at any time from Profile → Delete my account.\n\nWe may suspend or delete accounts that are used fraudulently or to harm the service or other people.`,
      },
      {
        heading: '4. Acceptable use',
        body: `Don't try to access other people's accounts, interfere with how the app works, or use it for anything unlawful.`,
      },
      {
        heading: '5. Intellectual property',
        body: `All content in the app (texts, questions, design, illustrations and characters) belongs to Camaca Games unless stated otherwise. You may share the result cards the app generates, but you may not copy or redistribute the rest of the content without permission.`,
      },
      {
        heading: '6. No warranties',
        body: `We offer the app as it is, without guaranteeing that it will be free of errors or always available. We may change, pause or stop features, including the account service. To the extent permitted by law, Camaca Games is not liable for damages arising from the use of the app.`,
      },
      {
        heading: '7. Privacy',
        body: `How we handle your data is explained in our privacy policy: camacagames.com/cerogluten-lab/privacy-policy`,
      },
      {
        heading: '8. Changes',
        body: `We may update these terms when the app changes. We will update the date at the top and, if the changes are significant, we will let you know in the app.`,
      },
      {
        heading: '9. Applicable law',
        body: `These terms are governed by Spanish law, without prejudice to the rights you have as a consumer under the law of your country of residence.`,
      },
      {
        heading: '10. Contact',
        body: `Camaca Games\nhello@camacagames.com`,
      },
    ],
  },
  es: {
    app: 'CeroGluten Lab',
    title: 'Términos y Condiciones',
    lastUpdated: 'Última actualización: 15 de noviembre de 2026',
    backLink: '← Volver al inicio',
    sections: [
      {
        heading: '1. Sobre la app',
        body: `CeroGluten Lab es una app educativa y de entretenimiento sobre celiaquía, desarrollada y publicada por Camaca Games. Al descargarla o usarla aceptas estos términos.`,
      },
      {
        heading: '2. No es consejo médico',
        body: `No somos médicos ni dietistas. El contenido está pensado para aprender sobre celiaquía de forma amena y no sustituye el consejo de un profesional de la salud. Las decisiones sobre tu dieta o tu salud tómalas siempre con tu médico o dietista.`,
      },
      {
        heading: '3. Tu cuenta',
        body: `Crear una cuenta es opcional. Si creas una:\n\n• Los datos que nos des tienen que ser ciertos, y la cuenta es personal.\n• Eres responsable de mantener segura tu contraseña.\n• Tienes que tener al menos 14 años, o permiso de tus padres o tutores.\n• Puedes borrarla cuando quieras desde Perfil → Borrar mi cuenta.\n\nPodemos suspender o eliminar cuentas que se usen de forma fraudulenta o para perjudicar el servicio o a otras personas.`,
      },
      {
        heading: '4. Uso aceptable',
        body: `No intentes acceder a cuentas de otras personas, interferir en el funcionamiento de la app ni usarla para nada ilegal.`,
      },
      {
        heading: '5. Propiedad intelectual',
        body: `Todo el contenido de la app (textos, preguntas, diseño, ilustraciones y personajes) es propiedad de Camaca Games salvo que se indique lo contrario. Puedes compartir las tarjetas de resultado que genera la app, pero no copiar ni redistribuir el resto del contenido sin permiso.`,
      },
      {
        heading: '6. Sin garantías',
        body: `Ofrecemos la app tal cual, sin garantizar que esté libre de errores ni disponible en todo momento. Podemos cambiar, pausar o retirar funciones, incluido el servicio de cuentas. En la medida en que lo permita la ley, Camaca Games no se hace responsable de los daños derivados del uso de la app.`,
      },
      {
        heading: '7. Privacidad',
        body: `Cómo tratamos tus datos se explica en nuestra política de privacidad: camacagames.com/cerogluten-lab/privacy-policy`,
      },
      {
        heading: '8. Cambios',
        body: `Podemos actualizar estos términos cuando cambie la app. Actualizaremos la fecha de arriba y, si los cambios son importantes, te avisaremos en la app.`,
      },
      {
        heading: '9. Ley aplicable',
        body: `Estos términos se rigen por la ley española, sin perjuicio de los derechos que te correspondan como consumidor según la ley de tu país de residencia.`,
      },
      {
        heading: '10. Contacto',
        body: `Camaca Games\nhello@camacagames.com`,
      },
    ],
  },
}

export default function CeroGlutenLabTermsPage() {
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
