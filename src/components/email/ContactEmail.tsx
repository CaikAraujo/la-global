import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

interface ContactEmailProps {
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export default function ContactEmail({
    name,
    company,
    email,
    phone,
    service,
    message,
}: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nouveau contact de {name} - Confœderatio Logistica</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Nouvelle Demande de Contact
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Nom :</strong> {name}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Entreprise :</strong> {company}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Email :</strong> {email}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Téléphone :</strong> {phone}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Service d'Intérêt :</strong> {service}
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Message :</strong>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px] whitespace-pre-wrap">
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
