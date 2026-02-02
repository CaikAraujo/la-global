"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const detailedServices = [
    {
        id: 'corporate',
        title: 'Relocalisation d\'Entreprise',
        subtitle: 'Continuité des Affaires',
        description: 'Transition parfaite pour les sièges sociaux. Gestion complète du déménagement, minimisant l\'inactivité et avec des protocoles de confidentialité rigoureux.',
        features: ['Gestion des Risques ISO 31000', 'Logistique de Serveurs Critiques', 'Élimination Certifiée d\'Actifs', 'Mise en Place Opérationnelle "Clé en Main"'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'private',
        title: 'Logistique de Résidence Privée',
        subtitle: 'Résidences & Propriétés',
        description: 'Service "gants blancs" pour résidences et propriétés. Gestion complète de l\'inventaire et recréation de l\'atmosphère domestique à destination.',
        features: ['Emballage Haute Couture', 'Transport de Véhicules de Collection', 'Catalogage de Bibliothèques', 'Design d\'Intérieur Temporaire'],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'art',
        title: 'Beaux-Arts & Antiquités',
        subtitle: 'Standard Muséal',
        description: 'Caisses climatisées personnalisées, transport aérien sécurisé et installation professionnelle pour des œuvres inestimables.',
        features: ['Caisses Climatisées (ISPM 15)', 'Formalités Douanières CITES', 'Installation Spécialisée', 'Assurance "Clou à Clou"'],
        image: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'cleaning',
        title: 'Service de Bureaux',
        subtitle: 'Hygiène et Confort',
        description: 'Environnements impeccables, avec attention aux détails et discrétion totale, garantissant confort et productivité pour votre équipe.',
        features: ['Nettoyage Certifié', 'Équipe Discrète', 'Produits Écologiques', 'Horaires Flexibles'],
        image: '/images/cleaning-service.jpg'
    },
    {
        id: 'storage',
        title: 'Stockage Sécurisé',
        subtitle: 'Coffre-fort & Protection d\'Actifs',
        description: 'Stockage de sécurité maximale en zones franches. Contrôle climatique de précision pour actifs précieux et exonération fiscale temporaire.',
        features: ['Sécurité Biométrique Niveau 5', 'Contrôle Climatique Redondant', 'Exonération Fiscale (Entrepôt Douanier)', 'Salons de Visionnage Privés'],
        image: '/images/secure-storage.png'
    },
    {
        id: 'events',
        title: 'Montage de Stands pour Foires et Événements',
        subtitle: 'Coordination & Précision',
        description: 'Exécution impeccable, soignant chaque détail pour garantir impact visuel, fonctionnalité et ponctualité.',
        features: ['Logistique "Juste-à-Temps"', 'Manipulation d\'Équipement Sensible', 'Équipes de Montage 24/7', 'Gestion de Carnet ATA'],
        image: '/images/event-logistics.png'
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-swiss-surface min-h-screen">

            {/* Header Minimalista */}
            <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl text-swiss-navy mb-8">Nos Divisions</h1>
                    <p className="text-swiss-text font-light text-xl max-w-2xl leading-relaxed border-l-2 border-swiss-red pl-6">
                        Excellence opérationnelle adaptée aux besoins uniques des entreprises mondiales et des grandes propriétés privées.
                    </p>
                </motion.div>
            </section>

            {/* Lista de Serviços */}
            <section className="pb-32 px-6 md:px-12 max-w-[1800px] mx-auto space-y-32">
                {detailedServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        id={service.id}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center border-b border-swiss-navy/5 pb-16 last:border-0`}
                    >
                        {/* Imagem */}
                        <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-swiss-navy/10 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover filter grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Texto */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-swiss-red font-bold text-xs tracking-widest uppercase mb-4 block">{service.subtitle}</span>
                            <h2 className="font-serif text-4xl text-swiss-dark mb-6">{service.title}</h2>
                            <p className="text-swiss-text/80 font-light text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 border-b border-swiss-navy/10 pb-2">
                                        <div className="w-1 h-1 bg-swiss-navy rounded-full" />
                                        <span className="text-sm font-medium text-swiss-text uppercase tracking-wide">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
