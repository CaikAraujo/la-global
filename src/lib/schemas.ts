import { z } from 'zod';

export const createContactSchema = (t: (key: string) => string) => z.object({
    name: z.string().min(2, { message: t('name_required') }),
    company: z.string().optional(),
    email: z.string().email({ message: t('email_invalid') }),
    phone: z.string().min(10, { message: t('phone_invalid') }).optional().or(z.literal('')),
    service: z.string().min(1, { message: t('service_required') }),
    details: z.string().min(10, { message: t('details_required') }),
    attachment: z.object({
        filename: z.string(),
        content: z.string(),
        contentType: z.string().optional()
    }).optional()
});

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
