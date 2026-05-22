'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const content = {
  en: {
    app: 'Macadoku',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 29, 2026',
    backLink: '← Back to home',
    sections: [
      {
        heading: '1. Who We Are',
        body: `Macadoku is a mobile sudoku application developed and published by Camaca Games. We are the data controller for the personal data collected through this application.\n\nContact: hello@camacagames.com`,
      },
      {
        heading: '2. Data We Collect',
        body: `When you use Macadoku, the following data may be collected:\n\n• Device identifiers (Advertising ID / IDFA)\n• IP address\n• Device type, operating system, and version\n• App usage data (screens visited, session duration, game progress)\n• Crash reports and diagnostic data\n\nWe do not collect your name, email address, or any data that directly identifies you as an individual.`,
      },
      {
        heading: '3. How We Use Your Data',
        body: `Your data is used for the following purposes:\n\n• Displaying advertisements through Google AdMob (including personalized ads, subject to your consent)\n• Measuring and improving app performance\n• Analyzing crashes and bugs\n• Understanding how users interact with the app`,
      },
      {
        heading: '4. Legal Basis for Processing (GDPR)',
        body: `For users in the European Economic Area (EEA), we process your personal data on the following legal bases:\n\n• Consent (Article 6(1)(a) GDPR): for personalized advertising via Google AdMob. You may withdraw consent at any time.\n• Legitimate interests (Article 6(1)(f) GDPR): for analytics and crash reporting, to improve the quality and stability of the app.`,
      },
      {
        heading: '5. Google AdMob & Third-Party Advertising',
        body: `Macadoku uses Google AdMob to display advertisements. Google may use cookies, device identifiers, and similar technologies to serve ads based on your prior visits to this or other apps and websites.\n\nGoogle's advertising practices are governed by Google's Privacy Policy: https://policies.google.com/privacy\n\nYou can opt out of personalized advertising by visiting: https://www.google.com/settings/ads\n\nIf you are in the EEA, we will ask for your consent before serving personalized ads. You may choose non-personalized ads at any time.`,
      },
      {
        heading: '6. Data Retention',
        body: `We retain personal data only for as long as necessary to fulfil the purposes described in this policy. Advertising identifiers are subject to the retention policies of Google AdMob. Crash and analytics data is retained for a maximum of 14 months.`,
      },
      {
        heading: '7. Your Rights Under GDPR',
        body: `If you are located in the EEA or the UK, you have the following rights regarding your personal data:\n\n• Right of access: request a copy of the data we hold about you\n• Right to rectification: request correction of inaccurate data\n• Right to erasure ("right to be forgotten"): request deletion of your data\n• Right to restriction of processing\n• Right to data portability\n• Right to object: object to processing based on legitimate interests\n• Right to withdraw consent: at any time, without affecting prior processing\n\nTo exercise any of these rights, please contact us at hello@camacagames.com. We will respond within 30 days.`,
      },
      {
        heading: "8. Children's Privacy",
        body: `Macadoku is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided personal data to us, please contact us and we will delete it promptly.`,
      },
      {
        heading: '9. International Transfers',
        body: `Your data may be processed by Google LLC in the United States. Google participates in the EU-US Data Privacy Framework and provides appropriate safeguards for international data transfers in accordance with GDPR requirements.`,
      },
      {
        heading: '10. Supervisory Authority',
        body: `You have the right to lodge a complaint with your local data protection supervisory authority. In Spain, this is the Agencia Española de Protección de Datos (AEPD): www.aepd.es`,
      },
      {
        heading: '11. Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date above. Continued use of the app after changes constitutes acceptance of the updated policy.`,
      },
      {
        heading: '12. Contact',
        body: `For any privacy-related questions or to exercise your rights, please contact:\n\nCamaca Games\nhello@camacagames.com`,
      },
    ],
  },
  es: {
    app: 'Macadoku',
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 29 de abril de 2026',
    backLink: '← Volver al inicio',
    sections: [
      {
        heading: '1. Quiénes somos',
        body: `Macadoku es una aplicación móvil de sudoku desarrollada y publicada por Camaca Games. Somos el responsable del tratamiento de los datos personales recogidos a través de esta aplicación.\n\nContacto: hello@camacagames.com`,
      },
      {
        heading: '2. Datos que recopilamos',
        body: `Al utilizar Macadoku, pueden recopilarse los siguientes datos:\n\n• Identificadores de dispositivo (ID de publicidad / IDFA)\n• Dirección IP\n• Tipo de dispositivo, sistema operativo y versión\n• Datos de uso de la app (pantallas visitadas, duración de sesión, progreso del juego)\n• Informes de fallos y datos de diagnóstico\n\nNo recopilamos tu nombre, dirección de correo electrónico ni ningún dato que te identifique directamente como persona.`,
      },
      {
        heading: '3. Cómo usamos tus datos',
        body: `Tus datos se utilizan para los siguientes fines:\n\n• Mostrar publicidad a través de Google AdMob (incluidos anuncios personalizados, sujeto a tu consentimiento)\n• Medir y mejorar el rendimiento de la app\n• Analizar fallos y errores\n• Entender cómo los usuarios interactúan con la app`,
      },
      {
        heading: '4. Base jurídica del tratamiento (RGPD)',
        body: `Para usuarios del Espacio Económico Europeo (EEE), tratamos tus datos personales en base a:\n\n• Consentimiento (Art. 6(1)(a) RGPD): para publicidad personalizada mediante Google AdMob. Puedes retirar el consentimiento en cualquier momento.\n• Interés legítimo (Art. 6(1)(f) RGPD): para análisis y notificación de fallos, con el fin de mejorar la calidad y estabilidad de la app.`,
      },
      {
        heading: '5. Google AdMob y publicidad de terceros',
        body: `Macadoku utiliza Google AdMob para mostrar anuncios. Google puede utilizar cookies, identificadores de dispositivo y tecnologías similares para mostrar anuncios basados en tus visitas previas a esta u otras apps y sitios web.\n\nLas prácticas publicitarias de Google se rigen por su Política de Privacidad: https://policies.google.com/privacy\n\nPuedes desactivar la publicidad personalizada en: https://www.google.com/settings/ads\n\nSi te encuentras en el EEE, solicitaremos tu consentimiento antes de mostrar anuncios personalizados. Puedes elegir anuncios no personalizados en cualquier momento.`,
      },
      {
        heading: '6. Conservación de los datos',
        body: `Conservamos los datos personales únicamente durante el tiempo necesario para cumplir los fines descritos en esta política. Los identificadores publicitarios están sujetos a las políticas de retención de Google AdMob. Los datos de fallos y análisis se conservan un máximo de 14 meses.`,
      },
      {
        heading: '7. Tus derechos bajo el RGPD',
        body: `Si te encuentras en el EEE o el Reino Unido, tienes los siguientes derechos sobre tus datos personales:\n\n• Derecho de acceso: solicitar una copia de los datos que tenemos sobre ti\n• Derecho de rectificación: solicitar la corrección de datos inexactos\n• Derecho de supresión ("derecho al olvido"): solicitar la eliminación de tus datos\n• Derecho a la limitación del tratamiento\n• Derecho a la portabilidad de los datos\n• Derecho de oposición: oponerte al tratamiento basado en interés legítimo\n• Derecho a retirar el consentimiento: en cualquier momento, sin efecto sobre el tratamiento previo\n\nPara ejercer cualquiera de estos derechos, contáctanos en hello@camacagames.com. Responderemos en un plazo de 30 días.`,
      },
      {
        heading: '8. Privacidad de menores',
        body: `Macadoku no está dirigida a menores de 13 años. No recopilamos conscientemente datos personales de menores. Si crees que un menor nos ha proporcionado datos personales, contáctanos y los eliminaremos de inmediato.`,
      },
      {
        heading: '9. Transferencias internacionales',
        body: `Tus datos pueden ser tratados por Google LLC en Estados Unidos. Google participa en el Marco de Privacidad de Datos UE-EE.UU. y proporciona garantías adecuadas para las transferencias internacionales de datos conforme al RGPD.`,
      },
      {
        heading: '10. Autoridad de control',
        body: `Tienes derecho a presentar una reclamación ante tu autoridad de control local. En España, esta es la Agencia Española de Protección de Datos (AEPD): www.aepd.es`,
      },
      {
        heading: '11. Cambios en esta política',
        body: `Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos cualquier cambio significativo actualizando la fecha de "Última actualización" indicada arriba. El uso continuado de la app tras los cambios implica la aceptación de la política actualizada.`,
      },
      {
        heading: '12. Contacto',
        body: `Para cualquier consulta relacionada con la privacidad o para ejercer tus derechos, contacta con:\n\nCamaca Games\nhello@camacagames.com`,
      },
    ],
  },
}

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage()
  const c = content[lang]

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
