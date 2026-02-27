import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.service || !data.details) {
      return NextResponse.json(
        { success: false, error: 'Données invalides. Nom, email, service et détails sont requis.' },
        { status: 400 }
      );
    }

    const name = data.name;
    const company = data.company || 'Non spécifiée';
    const email = data.email;
    const phone = data.phone || 'Non spécifié';
    const service = data.service;
    const messageSafe = data.details.replace(/\n/g, '<br>');

    let attachments: any[] = [];
    if (data.attachment && data.attachment.content) {
      attachments.push({
        content: Buffer.from(data.attachment.content, 'base64'),
        filename: data.attachment.filename,
        contentType: data.attachment.contentType
      });
    }

    const fromEmail = 'info@laglobalcorporate.ch';
    const adminEmail = 'info@laglobalcorporate.ch';

    // 1. Email to Company (Admin)
    const companyHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Nouvelle Demande de Contact - La Global Corporate</title>
            </head>
            <body style="background-color: #ffffff; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em; margin: 0 auto;">
                <tbody>
                  <tr>
                    <td>
                      <div style="border: 1px solid #eaeaea; border-radius: 4px; margin: 40px auto; padding: 20px; width: 465px; max-width: 100%;">
                        <h1 style="color: #000000; font-size: 24px; font-weight: normal; text-align: center; margin: 30px 0; padding: 0;">
                          Nouvelle Demande de Contact
                        </h1>
                        <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                          <strong>Nom :</strong> ${name}
                        </p>
                        <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                          <strong>Entreprise :</strong> ${company}
                        </p>
                        <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                          <strong>Email :</strong> <a href="mailto:${email}" style="color: #067df7; text-decoration: none;">${email}</a>
                        </p>
                        <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                          <strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #067df7; text-decoration: none;">${phone}</a>
                        </p>
                        <p style="font-size: 14px; line-height: 24px; margin: 16px 0; color: #000000;">
                          <strong>Service d'Intérêt :</strong> ${service}
                        </p>
                        <hr style="width: 100%; border: none; border-top: 1px solid #eaeaea; margin: 26px 0;" />
                        <p style="font-size: 14px; line-height: 24px; margin: 16px 0 8px; color: #000000;">
                          <strong>Message :</strong>
                        </p>
                        <p style="font-size: 14px; line-height: 24px; margin: 0; color: #000000; white-space: pre-wrap;">
                          ${messageSafe}
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </body>
            </html>
        `;

    // 2. Email to Client
    const dateNow = new Date().toLocaleDateString('fr-CH');
    const clientHtml = `
            <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #111827; background-color: #f3f4f6; padding: 24px;">
              <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
                <div style="background: linear-gradient(135deg, #0F172A, #1e293b); padding: 28px 32px;">
                  <h1 style="color: #f9fafb; margin: 0; font-size: 24px;">Merci pour votre demande, ${name} !</h1>
                </div>
                <div style="padding: 24px;">
                  <p>Bonjour ${name},</p>
                  <p>Nous avons bien reçu votre demande de contact.</p>
                  <div style="border-radius: 12px; border: 1px solid #e5e7eb; padding: 16px; background: #f9fafb; margin-bottom: 18px;">
                    <p style="text-transform: uppercase; color: #6b7280; font-size: 12px;">Récapitulatif</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Date:</strong> ${dateNow}</p>
                  </div>
                  <div style="background: #fef2f2; padding: 14px; border-radius: 12px; color: #b91c1c;">
                     ✓ Notre équipe vous répondra dans les plus brefs délais.
                  </div>
                  <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
                     <p><strong>La Global Corporate</strong><br>Av. des Communes-Réunies 43<br>1212 Grand-Lancy, Suisse<br>+41 22 535 63 33<br>info@laglobalcorporate.ch</p>
                  </div>
                </div>
              </div>
            </div>
        `;

    const [companyResponse, clientResponse] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: [adminEmail],
        subject: `Nouveau contact de ${name} - La Global Corporate${attachments.length > 0 ? " 📎" : ""}`,
        html: companyHtml,
        replyTo: email,
        attachments: attachments.length > 0 ? attachments : undefined
      }),
      resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "Confirmation de votre demande",
        html: clientHtml
      })
    ]);

    if (companyResponse.error) {
      console.error('Error sending company email:', companyResponse.error);
      return NextResponse.json({ success: false, error: 'Échec de l’envoi au bureau.' }, { status: 500 });
    }

    if (clientResponse.error) {
      console.error('Error sending client email:', clientResponse.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Demande envoyée avec succès !',
      companyEmailId: companyResponse.data?.id,
      clientEmailId: clientResponse.data?.id
    });

  } catch (error: any) {
    console.error('Unexpected error in send-email API:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur inattendue est survenue.', details: error.message },
      { status: 500 }
    );
  }
}
