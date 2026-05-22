'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const content = {
  en: {
    app: 'Camaca Games',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: May 23, 2026',
    backLink: '← Back to home',
    sections: [
      {
        heading: '1. Who We Are',
        body: `This website is operated by Camaca Games, a one-person indie game studio based in Spain.\n\nContact: hello@camacagames.com`,
      },
      {
        heading: '2. Data We Collect',
        body: `When you visit this website and consent to analytics cookies, the following data may be collected via Google Analytics (through Google Tag Manager):\n\n• IP address (anonymised)\n• Device type, operating system, and browser\n• Pages visited and navigation flow\n• Session duration and interactions\n• Referring website\n\nWe do not collect your name, email address, or any data that directly identifies you as an individual.`,
      },
      {
        heading: '3. How We Use Your Data',
        body: `Your data is used solely to understand how visitors use this website, so we can improve the experience. We do not use it for advertising, profiling, or share it with any third party beyond Google Analytics.`,
      },
      {
        heading: '4. Legal Basis for Processing (GDPR)',
        body: `For users in the European Economic Area (EEA), we process your personal data based on your consent (Article 6(1)(a) GDPR). Analytics cookies are only activated after you explicitly accept them via the cookie banner.\n\nYou may withdraw your consent at any time by clearing your browser's local storage for this site.`,
      },
      {
        heading: '5. Google Analytics & Google Tag Manager',
        body: `This site uses Google Tag Manager (GTM) to load Google Analytics. Google may process data in the United States under the EU-US Data Privacy Framework.\n\nFor more information, see Google's Privacy Policy: https://policies.google.com/privacy\n\nIP anonymisation is enabled. No advertising features or remarketing are active on this site.`,
      },
      {
        heading: '6. Cookies',
        body: `We use only first-party analytics cookies, activated only with your consent. We do not use advertising cookies, tracking pixels, or social media trackers.\n\nYour cookie preference is stored in your browser's local storage under the key "camaca-analytics-consent".`,
      },
      {
        heading: '7. Data Retention',
        body: `Analytics data is retained for a maximum of 14 months, in line with Google Analytics default settings.`,
      },
      {
        heading: '8. Your Rights Under GDPR',
        body: `If you are located in the EEA or the UK, you have the following rights:\n\n• Right of access: request a copy of the data we hold about you\n• Right to rectification: request correction of inaccurate data\n• Right to erasure: request deletion of your data\n• Right to restriction of processing\n• Right to object to processing\n• Right to withdraw consent: at any time, without affecting prior processing\n\nTo exercise any of these rights, contact us at hello@camacagames.com. We will respond within 30 days.`,
      },
      {
        heading: '9. Supervisory Authority',
        body: `You have the right to lodge a complaint with your local data protection authority. In Spain: Agencia Española de Protección de Datos (AEPD) — www.aepd.es`,
      },
      {
        heading: '10. Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. We will update the "Last updated" date above when we do. Continued use of the website after changes constitutes acceptance of the updated policy.`,
      },
      {
        heading: '11. Contact',
        body: `For any privacy-related questions, please contact:\n\nCamaca Games\nhello@camacagames.com`,
      },
    ],
  },
  es: {
    app: 'Camaca Games',
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 23 de mayo de 2026',
    backLink: '← Volver al inicio',
    sections: [
      {
        heading: '1. Quiénes somos',
        body: `Este sitio web está operado por Camaca Games, un estudio indie de videojuegos unipersonal con sede en España.\n\nContacto: hello@camacagames.com`,
      },
      {
        heading: '2. Datos que recopilamos',
        body: `Cuando visitas este sitio web y aceptas las cookies analíticas, pueden recopilarse los siguientes datos a través de Google Analytics (mediante Google Tag Manager):\n\n• Dirección IP (anonimizada)\n• Tipo de dispositivo, sistema operativo y navegador\n• Páginas visitadas y flujo de navegación\n• Duración de sesión e interacciones\n• Sitio web de referencia\n\nNo recopilamos tu nombre, dirección de correo electrónico ni ningún dato que te identifique directamente.`,
      },
      {
        heading: '3. Cómo usamos tus datos',
        body: `Tus datos se utilizan exclusivamente para entender cómo los visitantes usan este sitio web y mejorar la experiencia. No los usamos para publicidad, elaboración de perfiles, ni los compartimos con terceros salvo Google Analytics.`,
      },
      {
        heading: '4. Base legal del tratamiento (RGPD)',
        body: `Para usuarios en el Espacio Económico Europeo (EEE), el tratamiento de tus datos se basa en tu consentimiento (Art. 6.1.a RGPD). Las cookies analíticas solo se activan cuando las aceptas explícitamente a través del banner.\n\nPuedes retirar tu consentimiento en cualquier momento borrando el almacenamiento local de tu navegador para este sitio.`,
      },
      {
        heading: '5. Google Analytics & Google Tag Manager',
        body: `Este sitio usa Google Tag Manager (GTM) para cargar Google Analytics. Google puede tratar datos en Estados Unidos bajo el EU-US Data Privacy Framework.\n\nMás información en la Política de Privacidad de Google: https://policies.google.com/privacy\n\nLa anonimización de IP está activada. No hay funciones publicitarias ni remarketing activos en este sitio.`,
      },
      {
        heading: '6. Cookies',
        body: `Solo usamos cookies analíticas propias, activadas únicamente con tu consentimiento. No usamos cookies publicitarias, píxeles de seguimiento ni rastreadores de redes sociales.\n\nTu preferencia de cookies se guarda en el almacenamiento local del navegador bajo la clave "camaca-analytics-consent".`,
      },
      {
        heading: '7. Retención de datos',
        body: `Los datos analíticos se conservan un máximo de 14 meses, en línea con la configuración predeterminada de Google Analytics.`,
      },
      {
        heading: '8. Tus derechos bajo el RGPD',
        body: `Si te encuentras en el EEE o el Reino Unido, tienes los siguientes derechos:\n\n• Derecho de acceso: solicitar una copia de los datos que tenemos sobre ti\n• Derecho de rectificación: solicitar la corrección de datos inexactos\n• Derecho de supresión: solicitar la eliminación de tus datos\n• Derecho a la limitación del tratamiento\n• Derecho de oposición al tratamiento\n• Derecho a retirar el consentimiento: en cualquier momento, sin afectar al tratamiento previo\n\nPara ejercer cualquiera de estos derechos, contáctanos en hello@camacagames.com. Responderemos en un plazo de 30 días.`,
      },
      {
        heading: '9. Autoridad de control',
        body: `Tienes derecho a presentar una reclamación ante tu autoridad de protección de datos local. En España: Agencia Española de Protección de Datos (AEPD) — www.aepd.es`,
      },
      {
        heading: '10. Cambios en esta política',
        body: `Podemos actualizar esta Política de Privacidad de vez en cuando. Actualizaremos la fecha de "Última actualización" cuando lo hagamos. El uso continuado del sitio tras los cambios implica la aceptación de la política actualizada.`,
      },
      {
        heading: '11. Contacto',
        body: `Para cualquier consulta relacionada con la privacidad, contacta con:\n\nCamaca Games\nhello@camacagames.com`,
      },
    ],
  },
}

export default function PrivacyPolicyPage() {
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
