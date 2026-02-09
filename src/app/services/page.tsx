"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const detailedServices = [
    {
        id: 'corporate',
        title: 'Relocalisation d\'Entreprise',
        subtitle: 'Continuité des Affaires',
        description: 'Transition parfaite pour les sièges sociaux. Gestion complète du déménagement, minimisant l\'inactivité et avec des protocoles de confidentialité rigoureux.',
        features: [
            { name: 'Gestion des Risques ISO 31000', description: 'Protocoles rigoureux d\'identification et d\'atténuation des risques pour garantir la sécurité absolue de vos actifs lors de chaque étape.' },
            { name: 'Élimination Certifiée d\'Actifs', description: 'Processus sécurisé et écologique de destruction de données et de recyclage matériel, avec certificats de conformité complets.' },
            { name: 'Mise en Place Opérationnelle "Clé en Main"', description: 'Installation complète et configuration fonctionnelle de vos nouveaux espaces de travail, prêts à l\'emploi dès le premier jour.' },
            { name: 'Transport Spécialisé', description: 'Flotte de véhicules adaptés aux équipements sensibles, avec suspension pneumatique et contrôle climatique.' },
            { name: 'Planification', description: 'Stratégie détaillée et séquençage précis des opérations pour minimiser l\'impact sur votre activité.' },
            { name: 'Coordination du Déménagement', description: 'Pilotage centralisé par un chef de projet dédié, assurant une communication fluide et une exécution sans faille.' }
        ],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'private',
        title: 'Logistique de Résidence Privée',
        subtitle: 'Résidences & Propriétés',
        description: 'Service "gants blancs" pour résidences et propriétés. Gestion complète de l\'inventaire et recréation de l\'atmosphère domestique à destination.',
        features: [
            { name: 'Emballage Haute Couture', description: 'Matériaux de protection sur mesure et techniques d\'emballage d\'art pour vos biens les plus précieux et délicats.' },
            { name: 'Catalogage de Bibliothèques', description: 'Inventaire photographique et classement méthodique de vos ouvrages, respectant leur organisation d\'origine.' },
            { name: 'Design d\'Intérieur Temporaire', description: 'Aménagement provisoire esthétique pour maintenir votre confort durant les phases de transition.' },
            { name: 'Installation Personnalisée', description: 'Agencement méticuleux de votre mobilier et de vos objets personnels selon vos préférences exactes.' },
            { name: 'Gestion d\'Œuvres d\'Art et Antiquités', description: 'Expertise spécialisée dans la manipulation et la préservation de pièces de collection inestimables.' },
            { name: 'Services Administratifs et Conciergerie', description: 'Assistance complète pour les démarches administratives et services de confort liés à votre changement de résidence.' }
        ],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 'art',
        title: 'Beaux-Arts & Antiquités',
        subtitle: 'Standard Muséal',
        description: 'Caisses climatisées personnalisées, transport aérien sécurisé et installation professionnelle pour des œuvres inestimables.',
        features: [
            { name: 'Caisses Climatisées (ISPM 15)', description: 'Fabrication sur mesure de caisses de transport conformes aux normes internationales, garantissant une protection optimale.' },
            { name: 'Formalités Douanières CITES', description: 'Gestion experte des permis et régulations pour le transport international d\'espèces protégées et d\'objets réglementés.' },
            { name: 'Installation Spécialisée', description: 'Montage et accrochage technique réalisés par des experts en muséographie.' },
            { name: 'Assurance "Clou à Clou"', description: 'Couverture complète tous risques, depuis le décrochage initial jusqu\'à l\'installation finale.' },
            { name: 'Emballage et Protection', description: 'Solutions de calage et de tamponnage haute performance pour une stabilité absolue durant le transport.' }
        ],
        image: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'cleaning',
        title: 'Service de Bureaux',
        subtitle: 'Hygiène et Confort',
        description: 'Environnements impeccables, avec attention aux détails et discrétion totale, garantissant confort et productivité pour votre équipe.',
        features: [
            { name: 'Nettoyage Certifié', description: 'Protocoles d\'hygiène stricts utilisant des méthodes validées pour un environnement de travail sain.' },
            { name: 'Équipe Discrète', description: 'Personnel formé à la confidentialité et au travail en environnement occupé sans perturber vos opérations.' },
            { name: 'Produits Écologiques', description: 'Utilisation exclusive de produits de nettoyage respectueux de l\'environnement et de la santé.' },
            { name: 'Horaires Flexibles', description: 'Intervention adaptée à votre rythme d\'activité, y compris en dehors des heures ouvrables.' },
            { name: 'Personnel de Service', description: 'Mise à disposition de personnel qualifié pour le service de café, la réception ou l\'entretien continu.' },
            { name: 'Gestion de Documents', description: 'Archivage, tri et destruction sécurisée de vos documents confidentiels.' }
        ],
        image: '/images/cleaning-service.jpg'
    },
    {
        id: 'storage',
        title: 'Stockage Sécurisé',
        subtitle: 'Coffre-fort & Protection d\'Actifs',
        description: 'Stockage de sécurité maximale en zones franches. Contrôle climatique de précision pour actifs précieux et exonération fiscale temporaire.',
        features: [
            { name: 'Sécurité Biométrique Niveau 5', description: 'Accès strictement contrôlé par reconnaissance biométrique et surveillance 24/7 pour une sécurité inviolable.' },
            { name: 'Contrôle Climatique Redondant', description: 'Systèmes doubles de régulation de température et d\'humidité pour une préservation parfaite.' },
            { name: 'Exonération Fiscale (Entrepôt Douanier)', description: 'Stockage sous douane permettant de suspendre les droits et taxes jusqu\'à l\'importation définitive.' },
            { name: 'Salons de Visionnage Privés', description: 'Espaces élégants et sécurisés pour l\'inspection ou la présentation de vos biens stockés.' },
            { name: 'Contrôle Environnemental', description: 'Surveillance constante de la qualité de l\'air et protection contre les nuisibles.' },
            { name: 'Réception de Marchandises', description: 'Service logistique complet de réception, vérification et mise en stock de vos livraisons.' }
        ],
        image: '/images/secure-storage.png'
    },
    {
        id: 'events',
        title: 'Montage de Stands pour Foires et Événements',
        subtitle: 'Coordination & Précision',
        description: 'Exécution impeccable, soignant chaque détail pour garantir impact visuel, fonctionnalité et ponctualité.',
        features: [
            { name: 'Logistique "Juste-à-Temps"', description: 'Livraison coordonnée à la minute près pour s\'intégrer parfaitement au planning serré de vos événements.' },
            { name: 'Manipulation d\'Équipement Sensible', description: 'Savoir-faire technique pour le transport et l\'installation de matériel audiovisuel et technologique fragile.' },
            { name: 'Équipes de Montage 24/7', description: 'Disponibilité totale pour le montage et le démontage, quelles que soient les contraintes horaires.' },
            { name: 'Gestion de Carnet ATA', description: 'Administration des documents douaniers pour l\'admission temporaire de matériel d\'exposition à l\'étranger.' },
            { name: 'Audiovisuel et Multimédia', description: 'Installation et configuration de systèmes de présentation et d\'éclairage pour vos stands.' },
            { name: 'Habillage et Signalétique', description: 'Mise en place soignée de vos éléments visuels et de branding pour un impact maximal.' }
        ],
        image: '/images/event-logistics.png'
    }
];

const FeatureItem = ({ feature }: { feature: { name: string, description: string } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative"
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 border-b border-swiss-navy/10 pb-2 cursor-pointer transition-colors duration-300 hover:border-swiss-red/30"
            >
                <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-swiss-red' : 'bg-swiss-navy'}`} />
                <span className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-swiss-red' : 'text-swiss-text hover:text-swiss-red'}`}>
                    {feature.name}
                </span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full left-0 mb-3 w-72 bg-swiss-navy text-white p-5 rounded-lg shadow-xl z-50"
                    >
                        <div className="absolute bottom-[-6px] left-4 w-3 h-3 bg-swiss-navy transform rotate-45" />
                        <h4 className="font-serif text-lg mb-2 text-white">{feature.name}</h4>
                        <p className="text-white/80 text-sm font-light leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                                {service.features.map((feature, i) => (
                                    <FeatureItem key={i} feature={feature} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
