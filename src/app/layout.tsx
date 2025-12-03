import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Confœderatio Logistica | Swiss Precision Moving",
    description: "Logística global para corporações, residências de prestígio e belas artes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-PT">
            <body className={`${inter.variable} ${playfair.variable} font-sans`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
