import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/components/email/ContactEmail';
import { createContactSchema } from '@/lib/schemas';
import { getTranslations } from 'next-intl/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, { params }: { params: { locale: string } }) {
    try {
        const body = await request.json();
        const t = await getTranslations({ locale: params.locale, namespace: 'Schema' });
        const contactSchema = createContactSchema((key) => t(key));

        // Server-side validation
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json({ error: result.error.issues }, { status: 400 });
        }

        // Note: 'message' in body maps to 'details' in schema, need to ensure consistency or mapping
        // Correction: user used 'details' in schema but 'message' in email.
        // Let's verify existing code... 
        // ContactEmail takes 'message', schema has 'details'. 
        // The frontend sends 'formData' which has 'details'.
        // So 'body' will have 'details'. We need to pass 'body.details' to ContactEmail 'message' prop.

        const attachments = result.data.attachment ? [{
            filename: result.data.attachment.filename,
            content: result.data.attachment.content,
        }] : [];

        const data = await resend.emails.send({
            from: 'Confœderatio Logistica <contact@laglobal.ch>',
            to: ['la.global.demenagement@gmail.com'],
            subject: `Novo Contato: ${result.data.name} - ${result.data.service}`,
            react: ContactEmail({
                name: result.data.name,
                company: result.data.company || "",
                email: result.data.email,
                phone: result.data.phone || "",
                service: result.data.service,
                message: result.data.details
            }),
            attachments: attachments
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
