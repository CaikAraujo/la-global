import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { notFound } from 'next/navigation';
import { locales } from '@/navigation';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
    title: "LA Global Corporation | Swiss Precision Moving",
    description: "Logística global para corporações, residências de prestígio e belas artes.",
    icons: {
        icon: '/header-logo.svg',
    },
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${inter.variable} ${playfair.variable} font-sans`}
                suppressHydrationWarning
            >
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                    <FloatingWhatsApp />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
