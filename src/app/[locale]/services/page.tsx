"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const serviceKeys = ['cleaning', 'corporate', 'events', 'storage', 'art', 'private'];
const featureKeysMap: Record<string, string[]> = {
    corporate: ['f1', 'f2', 'f3', 'f4'],
    private: ['f1', 'f2', 'f3', 'f4'],
    art: ['f1', 'f2', 'f3', 'f4'],
    cleaning: ['f1', 'f2', 'f3', 'f4'],
    storage: ['f1', 'f2', 'f3', 'f4'],
    events: ['f1', 'f2', 'f3', 'f4']
};
const serviceImages: Record<string, string> = {
    corporate: '/images/corporate-service.jpg',
    private: '/images/private-service.jpg',
    art: '/images/art-service.jpg',
    cleaning: '/images/cleaning-service.jpg',
    storage: '/images/secure-storage.png',
    events: '/images/event-logistics.png'
};

const FeatureItem = ({ feature }: { feature: { name: string, href: string } }) => {
    return (
        <Link
            href={feature.href}
            className="flex items-center justify-between gap-3 border-b border-swiss-navy/10 pb-2 transition-colors duration-300 hover:border-swiss-red/30 group"
        >
            <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-swiss-navy group-hover:bg-swiss-red transition-colors duration-300" />
                <span className="text-sm font-medium uppercase tracking-wide text-swiss-text group-hover:text-swiss-red transition-colors duration-300">
                    {feature.name}
                </span>
            </div>
            <span className="text-swiss-navy/40 group-hover:text-swiss-red transition-colors duration-300">
                →
            </span>
        </Link>
    );
};

export default function ServicesPage() {
    const tServicesSection = useTranslations('ServicesSection');
    const tServicesPage = useTranslations('ServicesPage');

    return (
        <div className="bg-swiss-surface min-h-screen">

            {/* Header Minimalista */}
            <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-swiss-navy mb-8">{tServicesPage('header.title')}</h1>
                    <p className="text-swiss-text font-light text-xl max-w-2xl leading-relaxed border-l-2 border-swiss-red pl-6">
                        {tServicesPage('header.description')}
                    </p>
                </motion.div>
            </section>

            {/* Lista de Serviços */}
            <section className="pb-32 px-6 md:px-12 max-w-[1800px] mx-auto space-y-32">
                {serviceKeys.map((key, index) => {
                    const featuresList = featureKeysMap[key] || [];

                    return (
                        <motion.div
                            key={key}
                            id={key}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center border-b border-swiss-navy/5 pb-16 last:border-0`}
                        >
                            {/* Imagem */}
                            <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative group">
                                <div className="absolute inset-0 bg-swiss-navy/10 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                                <Image
                                    src={serviceImages[key]}
                                    alt={tServicesSection(`items.${key}.title`)}
                                    fill
                                    className="object-cover filter md:grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Texto */}
                            <div className="w-full lg:w-1/2">
                                <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">{tServicesSection(`items.${key}.subtitle`)}</span>
                                <h2 className="font-serif text-4xl text-swiss-dark mb-6">{tServicesSection(`items.${key}.title`)}</h2>
                                <p className="text-swiss-text/80 font-light text-lg leading-relaxed mb-8">
                                    {tServicesSection(`items.${key}.description`)}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                                    {featuresList.map((fKey, i) => (
                                        <FeatureItem key={i} feature={{
                                            name: tServicesPage(`items.${key}.features.${fKey}.name`),
                                            href: `/services/${key}/${fKey}`
                                        }} />
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href={`/services/${key}`}
                                        className="inline-flex items-center px-8 py-3 text-xs font-semibold tracking-swiss uppercase border border-swiss-navy text-swiss-navy transition-all duration-500 ease-out hover:bg-swiss-navy hover:text-white"
                                    >
                                        {tServicesPage('learnMore')}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </section>
        </div>
    );
}
