'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const content = {
  en: {
    app: 'Macadoku',
    title: 'Terms and Conditions',
    lastUpdated: 'Last updated: April 29, 2026',
    backLink: '← Back to home',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: `By downloading, installing, or using Macadoku ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the App.\n\nThese Terms are governed by the laws of Spain and applicable European Union regulations.`,
      },
      {
        heading: '2. Description of the App',
        body: `Macadoku is a free-to-play mobile sudoku game developed by Camaca Games. The App is supported by advertising provided through Google AdMob. Some features may be available through optional in-app purchases.`,
      },
      {
        heading: '3. License',
        body: `Camaca Games grants you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes strictly in accordance with these Terms.\n\nYou may not:\n• Copy, modify, or distribute the App or its content\n• Reverse engineer, decompile, or disassemble the App\n• Use the App for any unlawful or unauthorized purpose\n• Remove any proprietary notices from the App`,
      },
      {
        heading: '4. User Conduct',
        body: `You agree to use the App only for lawful purposes. You must not use the App in any way that violates any applicable local, national, or international law or regulation.\n\nAny attempt to manipulate scores, game mechanics, or rankings through unauthorized means is strictly prohibited.`,
      },
      {
        heading: '5. Advertising',
        body: `The App displays advertisements from Google AdMob. By using the App, you consent to the display of these advertisements. Advertising content is provided by third parties and Camaca Games is not responsible for the content of those advertisements.\n\nIf you are located in the European Economic Area, you will be presented with an ad consent dialog in accordance with GDPR requirements. You may choose between personalized and non-personalized ads.`,
      },
      {
        heading: '6. Intellectual Property',
        body: `All content within the App, including but not limited to graphics, logos, icons, sounds, and game mechanics, is the property of Camaca Games and is protected by applicable intellectual property laws.\n\nYou are granted no intellectual property rights in the App beyond the limited license described in Section 3.`,
      },
      {
        heading: '7. Privacy',
        body: `Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.\n\nPrivacy Policy: available at /macadoku/privacy-policy`,
      },
      {
        heading: '8. Disclaimers',
        body: `The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.\n\nCamaca Games does not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.`,
      },
      {
        heading: '9. Limitation of Liability',
        body: `To the maximum extent permitted by applicable law, Camaca Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, goodwill, or other intangible losses, resulting from:\n\n• Your use or inability to use the App\n• Any unauthorized access to or use of our servers\n• Any interruption or cessation of transmission to or from the App\n• Any bugs, viruses, or similar issues`,
      },
      {
        heading: '10. Termination',
        body: `Camaca Games reserves the right to terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason at our sole discretion.`,
      },
      {
        heading: '11. Changes to Terms',
        body: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last updated" date at the top of this page. Your continued use of the App after any changes constitutes your acceptance of the new Terms.`,
      },
      {
        heading: '12. Governing Law and Dispute Resolution',
        body: `These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Spain.\n\nIf you are a consumer in the EU, you may also use the European Commission's Online Dispute Resolution platform: https://ec.europa.eu/consumers/odr`,
      },
      {
        heading: '13. Contact',
        body: `If you have any questions about these Terms, please contact us at:\n\nCamaca Games\nhello@camacagames.com`,
      },
    ],
  },
  es: {
    app: 'Macadoku',
    title: 'Términos y Condiciones',
    lastUpdated: 'Última actualización: 29 de abril de 2026',
    backLink: '← Volver al inicio',
    sections: [
      {
        heading: '1. Aceptación de los términos',
        body: `Al descargar, instalar o utilizar Macadoku ("la App"), aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con estos términos, no utilices la App.\n\nEstos Términos se rigen por las leyes de España y la normativa aplicable de la Unión Europea.`,
      },
      {
        heading: '2. Descripción de la App',
        body: `Macadoku es un juego de sudoku para móvil de descarga gratuita, desarrollado por Camaca Games. La App se financia mediante publicidad proporcionada por Google AdMob. Algunas funciones pueden estar disponibles mediante compras opcionales dentro de la app.`,
      },
      {
        heading: '3. Licencia',
        body: `Camaca Games te concede una licencia limitada, no exclusiva, intransferible y revocable para usar la App con fines personales y no comerciales, estrictamente de acuerdo con estos Términos.\n\nNo puedes:\n• Copiar, modificar ni distribuir la App ni su contenido\n• Realizar ingeniería inversa, descompilar ni desensamblar la App\n• Usar la App con fines ilegales o no autorizados\n• Eliminar cualquier aviso de propiedad de la App`,
      },
      {
        heading: '4. Conducta del usuario',
        body: `Aceptas usar la App únicamente con fines lícitos. No debes usar la App de ninguna manera que infrinja cualquier ley o regulación local, nacional o internacional aplicable.\n\nCualquier intento de manipular puntuaciones, mecánicas de juego o clasificaciones mediante medios no autorizados está estrictamente prohibido.`,
      },
      {
        heading: '5. Publicidad',
        body: `La App muestra anuncios de Google AdMob. Al usar la App, consientes la visualización de dichos anuncios. El contenido publicitario es proporcionado por terceros y Camaca Games no es responsable de dicho contenido.\n\nSi te encuentras en el Espacio Económico Europeo, se te presentará un diálogo de consentimiento publicitario conforme a los requisitos del RGPD. Podrás elegir entre anuncios personalizados y no personalizados.`,
      },
      {
        heading: '6. Propiedad intelectual',
        body: `Todo el contenido de la App, incluyendo pero no limitado a gráficos, logotipos, iconos, sonidos y mecánicas de juego, es propiedad de Camaca Games y está protegido por las leyes de propiedad intelectual aplicables.\n\nNo se te concede ningún derecho de propiedad intelectual sobre la App más allá de la licencia limitada descrita en el apartado 3.`,
      },
      {
        heading: '7. Privacidad',
        body: `El uso de la App también se rige por nuestra Política de Privacidad, que se incorpora a estos Términos por referencia. Consulta nuestra Política de Privacidad para entender nuestras prácticas.\n\nPolítica de Privacidad: disponible en /macadoku/privacy-policy`,
      },
      {
        heading: '8. Exención de garantías',
        body: `La App se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero no limitado a las garantías implícitas de comerciabilidad, idoneidad para un fin particular o no infracción.\n\nCamaca Games no garantiza que la App sea ininterrumpida, esté libre de errores o no contenga virus u otros componentes dañinos.`,
      },
      {
        heading: '9. Limitación de responsabilidad',
        body: `En la máxima medida permitida por la ley aplicable, Camaca Games no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, ni de pérdida de beneficios o ingresos, incurridos directa o indirectamente, ni de pérdida de datos, fondo de comercio u otras pérdidas intangibles, resultantes de:\n\n• Tu uso o imposibilidad de usar la App\n• Cualquier acceso no autorizado a nuestros servidores\n• Cualquier interrupción o cese de transmisión hacia o desde la App\n• Cualquier error, virus o problema similar`,
      },
      {
        heading: '10. Terminación',
        body: `Camaca Games se reserva el derecho de terminar o suspender tu acceso a la App en cualquier momento, sin previo aviso, por conductas que consideremos que infringen estos Términos o son perjudiciales para otros usuarios, nosotros, terceros, o por cualquier otra razón a nuestra discreción.`,
      },
      {
        heading: '11. Cambios en los términos',
        body: `Nos reservamos el derecho de modificar estos Términos en cualquier momento. Notificaremos cambios significativos actualizando la fecha de "Última actualización" en la parte superior de esta página. El uso continuado de la App tras cualquier cambio implica la aceptación de los nuevos Términos.`,
      },
      {
        heading: '12. Ley aplicable y resolución de conflictos',
        body: `Estos Términos se regirán e interpretarán de acuerdo con las leyes de España. Cualquier disputa derivada de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de España.\n\nSi eres consumidor en la UE, también puedes utilizar la plataforma de resolución de litigios en línea de la Comisión Europea: https://ec.europa.eu/consumers/odr`,
      },
      {
        heading: '13. Contacto',
        body: `Si tienes alguna pregunta sobre estos Términos, contacta con nosotros en:\n\nCamaca Games\nhello@camacagames.com`,
      },
    ],
  },
}

export default function TermsPage() {
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
