import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ClientRedirect from './ClientRedirect';

const SITE_URL = 'https://www.laglobalcorporation.ch';
const SITE_NAME = 'LA Global Corporation';

const serviceKeys = ['corporate', 'private', 'art', 'cleaning', 'storage', 'events'];
const locales = ['en', 'fr', 'de', 'it'];

const featureKeysMap: Record<string, string[]> = {
    corporate: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    private: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    art: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    cleaning: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    storage: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    events: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
};

const serviceImages: Record<string, string> = {
    corporate: '/images/corporate-service.jpg',
    private: '/images/private-service.jpg',
    art: '/images/art-service.jpg',
    cleaning: '/images/cleaning-service.jpg',
    storage: '/images/secure-storage.png',
    events: '/images/event-logistics.png',
};

// Maps locale codes to Open Graph locale format
const ogLocales: Record<string, string> = {
    en: 'en_GB',
    fr: 'fr_CH',
    de: 'de_CH',
    it: 'it_CH',
};

type Props = {
    params: Promise<{ locale: string; serviceId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, serviceId } = await params;
    if (!serviceKeys.includes(serviceId)) return {};

    const tSection = await getTranslations({ locale, namespace: 'ServicesSection' });
    const tPage = await getTranslations({ locale, namespace: 'ServicesPage' });

    const title = tSection(`items.${serviceId}.title`);
    const description = tSection(`items.${serviceId}.description`);
    const subtitle = tSection(`items.${serviceId}.subtitle`);
    const canonicalUrl = `${SITE_URL}/${locale}/services/${serviceId}`;
    const imageUrl = `${SITE_URL}${serviceImages[serviceId]}`;

    // Build hreflang alternate links for all locales
    const alternates: Record<string, string> = {};
    for (const loc of locales) {
        alternates[loc] = `${SITE_URL}/${loc}/services/${serviceId}`;
    }
    alternates['x-default'] = `${SITE_URL}/en/services/${serviceId}`;

    // Build keywords from feature names
    const featuresList = featureKeysMap[serviceId] || [];
    const keywords = featuresList
        .map((fKey) => {
            try { return tPage(`items.${serviceId}.features.${fKey}.name`); }
            catch { return null; }
        })
        .filter(Boolean)
        .join(', ');

    return {
        metadataBase: new URL(SITE_URL),
        title: `${title} | ${SITE_NAME}`,
        description,
        keywords: `${title}, ${subtitle}, ${SITE_NAME}, Switzerland, logistics, ${keywords}`,
        authors: [{ name: SITE_NAME, url: SITE_URL }],
        creator: SITE_NAME,
        publisher: SITE_NAME,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
        openGraph: {
            type: 'website',
            url: canonicalUrl,
            title: `${title} | ${SITE_NAME}`,
            description,
            siteName: SITE_NAME,
            locale: ogLocales[locale] ?? 'en_GB',
            alternateLocale: locales
                .filter((l) => l !== locale)
                .map((l) => ogLocales[l]),
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${title} — ${SITE_NAME}`,
                    type: serviceImages[serviceId].endsWith('.png') ? 'image/png' : 'image/jpeg',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${SITE_NAME}`,
            description,
            images: [imageUrl],
            creator: '@laglobalcorp',
            site: '@laglobalcorp',
        },
    };
}

export function generateStaticParams() {
    return serviceKeys.map((serviceId) => ({ serviceId }));
}

export default async function ServiceSEOPage({ params }: Props) {
    const { locale, serviceId } = await params;

    if (!serviceKeys.includes(serviceId)) {
        notFound();
    }

    setRequestLocale(locale);

    const tSection = await getTranslations({ locale, namespace: 'ServicesSection' });
    const tPage = await getTranslations({ locale, namespace: 'ServicesPage' });
    const featuresList = featureKeysMap[serviceId] || [];

    const title = tSection(`items.${serviceId}.title`);
    const description = tSection(`items.${serviceId}.description`);
    const subtitle = tSection(`items.${serviceId}.subtitle`);
    const canonicalUrl = `${SITE_URL}/${locale}/services/${serviceId}`;
    const imageUrl = `${SITE_URL}${serviceImages[serviceId]}`;

    // JSON-LD Structured Data (Service schema)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description,
        url: canonicalUrl,
        image: imageUrl,
        serviceType: subtitle,
        provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/header-logo.svg`,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. des Communes-Réunies 43',
                addressLocality: 'Grand-Lancy',
                postalCode: '1212',
                addressCountry: 'CH',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                areaServed: ['CH', 'FR', 'DE', 'IT', 'GB', 'US'],
                availableLanguage: ['English', 'French', 'German', 'Italian'],
            },
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 46.2044,
                longitude: 6.1432,
            },
            geoRadius: '5000 km',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${title} — Features`,
            itemListElement: featuresList.map((fKey, i) => {
                let name = '';
                let desc = '';
                try { name = tPage(`items.${serviceId}.features.${fKey}.name`); } catch { }
                try { desc = tPage(`items.${serviceId}.features.${fKey}.desc`); } catch { }
                return {
                    '@type': 'Offer',
                    position: i + 1,
                    name,
                    description: desc,
                };
            }),
        },
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* hreflang alternate links (injected manually for static export compatibility) */}
            {locales.map((loc) => (
                <link
                    key={loc}
                    rel="alternate"
                    hrefLang={loc}
                    href={`${SITE_URL}/${loc}/services/${serviceId}`}
                />
            ))}
            <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en/services/${serviceId}`} />

            {/* Redirects human users instantly — bots see the full content below */}
            <ClientRedirect serviceId={serviceId} />

            <div className="bg-swiss-surface min-h-screen pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-[1200px] mx-auto">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">
                            {subtitle}
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-swiss-navy mb-8">
                            {title}
                        </h1>
                        <p className="text-swiss-text/80 font-light text-xl leading-relaxed max-w-3xl">
                            {description}
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="w-full aspect-[21/9] overflow-hidden relative mb-16 rounded-xl">
                        <Image
                            src={serviceImages[serviceId]}
                            alt={`${title} — ${SITE_NAME}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority
                        />
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuresList.map((fKey, i) => {
                            let name = '';
                            let desc = '';
                            try { name = tPage(`items.${serviceId}.features.${fKey}.name`); } catch { }
                            try { desc = tPage(`items.${serviceId}.features.${fKey}.desc`); } catch { }
                            return (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-swiss-navy/5">
                                    <h2 className="font-serif text-xl text-swiss-dark mb-3">{name}</h2>
                                    <p className="text-swiss-text/70 font-light leading-relaxed">{desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Organization breadcrumb hint for SEO */}
                    <div className="mt-16 pt-8 border-t border-swiss-navy/10">
                        <p className="text-swiss-text/40 text-xs tracking-widest uppercase">
                            {SITE_NAME} · Switzerland · {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
