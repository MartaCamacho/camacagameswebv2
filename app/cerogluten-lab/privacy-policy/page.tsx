'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const content = {
  en: {
    app: 'CeroGluten Lab',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: November 15, 2026',
    backLink: '← Back to home',
    sections: [
      {
        heading: '1. Who we are',
        body: `CeroGluten Lab is an educational and entertainment app about coeliac disease, developed and published by Camaca Games. Camaca Games is the trade name of Marta Camacho Vargas, an independent developer based in Spain, who is the data controller for the personal data processed through the app.\n\nContact: hello@camacagames.com`,
      },
      {
        heading: '2. Playing without an account',
        body: `You can use the whole app without creating an account. In that case your progress (points, completed rooms, correct answers, streak, test score), your language and your settings are stored only on your device and never sent to us.\n\nIf you accept analytics on the first screen, we also receive anonymous usage events (see section 4).`,
      },
      {
        heading: '3. If you create an account',
        body: `Creating an account is optional. It lets you save your progress and recover it on any device. When you create one, we store:\n\n• Your email address\n• The name you choose (optional)\n• A user identifier. If you sign in with Apple or Google, we receive the identifier and email they provide; with Apple you can hide your real email\n• The avatar you pick from the app's illustrations\n• Your app language\n• Your game progress: points, completed rooms, best scores, correct answers, streak and test score\n\nIf you sign in with Apple or Google we never ask for or store a password. If you use email and password, the password is handled by Firebase Authentication and we never see it.`,
      },
      {
        heading: '4. Analytics',
        body: `We use Firebase Analytics (Google) to understand how the app is used: which phases are completed, when a game ends or which screens are visited. It is only enabled if you accept it on the first screen, and you can turn it off at any time in Settings.\n\nAnalytics data may include device type, operating system, app version, an app instance identifier and, on Android, the advertising ID. We do not use it for advertising and the app shows no ads.`,
      },
      {
        heading: '5. Other permissions',
        body: `• Notifications: daily quiz reminders are scheduled on your device. No server sends them and no push token is stored.\n• Photos: when you share a result, the app can save the result card to your photo library. It never reads your existing photos.`,
      },
      {
        heading: '6. Why we use your data and legal basis (GDPR)',
        body: `• Your account and progress sync: to provide the service you request when you create an account (Article 6(1)(b) GDPR, performance of a contract).\n• Analytics: only with your consent (Article 6(1)(a) GDPR). You can withdraw it at any time in Settings.\n\nWe do not sell your data, we do not use it for advertising and we do not make automated decisions about you.`,
      },
      {
        heading: '7. Service providers and international transfers',
        body: `Your account and progress are stored with Google Firebase (Authentication and Cloud Firestore), and analytics are processed by Firebase Analytics. Google acts as our data processor and may process data in the United States under the EU-US Data Privacy Framework and the European Commission's standard contractual clauses.\n\nGoogle's privacy policy: https://policies.google.com/privacy\nIf you sign in with Apple or Google, their own privacy policies also apply to that sign-in.`,
      },
      {
        heading: '8. How long we keep your data',
        body: `• Account and progress: for as long as your account exists. When you delete it, we delete it straight away.\n• Analytics: up to 14 months.\n• Data stored only on your device: until you uninstall the app or clear its data.`,
      },
      {
        heading: '9. Deleting your account',
        body: `You can delete your account at any time from the app: Profile → Delete my account. This permanently deletes your account and the profile and progress saved in the cloud. Progress stored on your device stays there, so you can keep playing without an account.\n\nIf you can't access the app, write to hello@camacagames.com from the email linked to your account and we will delete it for you.`,
      },
      {
        heading: '10. Your rights',
        body: `You have the right to access, rectify, erase, restrict or object to the processing of your data, the right to data portability and the right to withdraw consent at any time. To exercise them, write to hello@camacagames.com. We will reply within one month.`,
      },
      {
        heading: '11. Children',
        body: `CeroGluten Lab is not directed at children under 14. If you are under 14, you can play without an account but you should not create one without your parents' or guardians' permission. If you believe a child under 14 has created an account, contact us and we will delete it.`,
      },
      {
        heading: '12. Supervisory authority',
        body: `If you believe we have not handled your data properly, you can file a complaint with the Spanish Data Protection Agency (AEPD): www.aepd.es`,
      },
      {
        heading: '13. Changes to this policy',
        body: `We may update this policy when the app changes. We will update the date at the top and, if the changes are significant, we will let you know in the app.`,
      },
      {
        heading: '14. Contact',
        body: `Camaca Games (Marta Camacho Vargas)\nhello@camacagames.com`,
      },
    ],
  },
  es: {
    app: 'CeroGluten Lab',
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 15 de noviembre de 2026',
    backLink: '← Volver al inicio',
    sections: [
      {
        heading: '1. Quiénes somos',
        body: `CeroGluten Lab es una app educativa y de entretenimiento sobre celiaquía, desarrollada y publicada por Camaca Games. Camaca Games es el nombre comercial de Marta Camacho Vargas, desarrolladora independiente con sede en España, que es la responsable del tratamiento de los datos personales que se tratan a través de la app.\n\nContacto: hello@camacagames.com`,
      },
      {
        heading: '2. Si juegas sin cuenta',
        body: `Puedes usar toda la app sin crear una cuenta. En ese caso, tu progreso (puntos, salas completadas, aciertos, racha, nota del test), tu idioma y tus ajustes se guardan solo en tu dispositivo y nunca nos llegan.\n\nSi aceptas la analítica en la primera pantalla, también recibimos eventos de uso anónimos (ver apartado 4).`,
      },
      {
        heading: '3. Si creas una cuenta',
        body: `Crear una cuenta es opcional. Sirve para guardar tu progreso y recuperarlo en cualquier dispositivo. Al crearla guardamos:\n\n• Tu dirección de correo electrónico\n• El nombre que elijas (opcional)\n• Un identificador de usuario. Si entras con Apple o Google, recibimos el identificador y el correo que nos facilitan; con Apple puedes ocultar tu correo real\n• El avatar que elijas entre las ilustraciones de la app\n• El idioma de la app\n• Tu progreso de juego: puntos, salas completadas, mejores puntuaciones, aciertos, racha y nota del test\n\nSi entras con Apple o Google no pedimos ni guardamos ninguna contraseña. Si usas correo y contraseña, la contraseña la gestiona Firebase Authentication y nosotros nunca la vemos.`,
      },
      {
        heading: '4. Analítica',
        body: `Usamos Firebase Analytics (Google) para entender cómo se usa la app: qué fases se completan, cuándo termina una partida o qué pantallas se visitan. Solo se activa si la aceptas en la primera pantalla, y puedes desactivarla cuando quieras en Ajustes.\n\nLos datos de analítica pueden incluir el tipo de dispositivo, el sistema operativo, la versión de la app, un identificador de instancia de la app y, en Android, el identificador de publicidad. No los usamos para publicidad y la app no muestra anuncios.`,
      },
      {
        heading: '5. Otros permisos',
        body: `• Notificaciones: los recordatorios del quiz diario se programan en tu dispositivo. No los envía ningún servidor ni se guarda ningún token de notificaciones.\n• Fotos: al compartir un resultado, la app puede guardar la tarjeta en tu galería. Nunca lee las fotos que ya tienes.`,
      },
      {
        heading: '6. Para qué usamos tus datos y base jurídica (RGPD)',
        body: `• Tu cuenta y la sincronización del progreso: para prestarte el servicio que pides al crear la cuenta (art. 6.1.b RGPD, ejecución de un contrato).\n• Analítica: solo con tu consentimiento (art. 6.1.a RGPD). Puedes retirarlo en cualquier momento desde Ajustes.\n\nNo vendemos tus datos, no los usamos para publicidad y no tomamos decisiones automatizadas sobre ti.`,
      },
      {
        heading: '7. Proveedores y transferencias internacionales',
        body: `Tu cuenta y tu progreso se guardan en Google Firebase (Authentication y Cloud Firestore), y la analítica la procesa Firebase Analytics. Google actúa como encargado del tratamiento y puede tratar datos en Estados Unidos al amparo del Marco de Privacidad de Datos UE-EE. UU. y de las cláusulas contractuales tipo de la Comisión Europea.\n\nPolítica de privacidad de Google: https://policies.google.com/privacy\nSi entras con Apple o Google, a ese inicio de sesión también se le aplican sus propias políticas de privacidad.`,
      },
      {
        heading: '8. Cuánto tiempo guardamos tus datos',
        body: `• Cuenta y progreso: mientras exista tu cuenta. Cuando la borras, se eliminan en el momento.\n• Analítica: hasta 14 meses.\n• Datos guardados solo en tu dispositivo: hasta que desinstales la app o borres sus datos.`,
      },
      {
        heading: '9. Borrar tu cuenta',
        body: `Puedes borrar tu cuenta en cualquier momento desde la app: Perfil → Borrar mi cuenta. Se eliminan de forma definitiva tu cuenta, tu perfil y el progreso guardado en la nube. El progreso guardado en tu dispositivo se queda en él, así que puedes seguir jugando sin cuenta.\n\nSi no puedes acceder a la app, escríbenos a hello@camacagames.com desde el correo asociado a tu cuenta y la borraremos nosotros.`,
      },
      {
        heading: '10. Tus derechos',
        body: `Tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, limitar u oponerte a su tratamiento, a la portabilidad y a retirar tu consentimiento en cualquier momento. Para ejercerlos, escríbenos a hello@camacagames.com. Te responderemos en el plazo de un mes.`,
      },
      {
        heading: '11. Menores',
        body: `CeroGluten Lab no está dirigida a menores de 14 años. Si tienes menos de 14, puedes jugar sin cuenta, pero no deberías crear una sin permiso de tus padres o tutores. Si crees que un menor de 14 años ha creado una cuenta, escríbenos y la borraremos.`,
      },
      {
        heading: '12. Autoridad de control',
        body: `Si crees que no hemos tratado bien tus datos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): www.aepd.es`,
      },
      {
        heading: '13. Cambios en esta política',
        body: `Podemos actualizar esta política cuando cambie la app. Actualizaremos la fecha de arriba y, si los cambios son importantes, te avisaremos en la app.`,
      },
      {
        heading: '14. Contacto',
        body: `Camaca Games (Marta Camacho Vargas)\nhello@camacagames.com`,
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
