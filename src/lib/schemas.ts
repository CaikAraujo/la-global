import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
    company: z.string().optional(),
    email: z.string().email({ message: "Adresse email invalide." }),
    phone: z.string().min(10, { message: "Le numéro de téléphone doit comporter au moins 10 caractères." }).optional().or(z.literal('')),
    service: z.string().min(1, { message: "Veuillez sélectionner un service." }),
    details: z.string().min(10, { message: "Les détails du projet doivent comporter au moins 10 caractères." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
